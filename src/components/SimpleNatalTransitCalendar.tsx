import React, { useState, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { calculatePlanetaryPositions, calculateAscendant, calculateHouses } from '../utils/ephemeris';
import { generateAspectInterpretation } from '../utils/aspectInterpretations';
import { getUTCOffset } from '../utils/location';

interface SimpleNatalTransitCalendarProps {
  natalDate: Date;
  natalLatitude: number;
  natalLongitude: number;
  natalTimezone: string;
  firstHouseReference: string;
  manualFirstHouseSign?: string;
  cityName?: string;
  houseSystem: string;
}

// Planet symbols
const PLANET_SYMBOLS: Record<string, string> = {
  'Sun': '☉',
  'Moon': '☽',
  'Mercury': '☿',
  'Venus': '♀',
  'Mars': '♂',
  'Jupiter': '♃',
  'Saturn': '♄',
  'Uranus': '♅',
  'Neptune': '♆',
  'Pluto': '♇',
  'North Node': '☊',
  'South Node': '☋'
};

// Planet colors for natal planet highlighting
const PLANET_COLORS: Record<string, string> = {
  'Sun': '#FFD700',        // Gold
  'Moon': '#C0C0C0',       // Silver
  'Mercury': '#87CEEB',    // Sky Blue
  'Venus': '#FF69B4',      // Hot Pink
  'Mars': '#DC143C',       // Crimson
  'Jupiter': '#FFA500',    // Light Orange
  'Saturn': '#8B4513',     // Saddle Brown
  'Uranus': '#00CED1',     // Dark Turquoise
  'Neptune': '#9370DB',    // Medium Purple
  'Pluto': '#BA55D3',      // Medium Orchid
  'North Node': '#32CD32', // Lime Green
  'South Node': '#228B22'  // Forest Green
};

const ASPECT_TYPES = [
  { name: 'Conjunction', angle: 0, color: '#9370DB', symbol: '☌' },
  { name: 'Opposition', angle: 180, color: '#FFA500', symbol: '☍' },
  { name: 'Trine', angle: 120, color: '#4169E1', symbol: '△' },
  { name: 'Square', angle: 90, color: '#DC143C', symbol: '□' },
  { name: 'Sextile', angle: 60, color: '#32CD32', symbol: '⚹' }
];

const ZODIAC_SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

// Get orb for natal-to-transit aspects (natal planet → transit planet)
const getNatalToTransitOrb = (natalPlanet: string, transitPlanet: string, aspectName: string): number => {
  const innerPlanets = ['Sun', 'Mercury', 'Venus', 'Mars'];
  const nodes = ['North Node', 'South Node'];

  const isNatalInner = innerPlanets.includes(natalPlanet);
  const isTransitInner = innerPlanets.includes(transitPlanet);
  const isNatalNode = nodes.includes(natalPlanet);
  const isTransitNode = nodes.includes(transitPlanet);

  // Node aspects
  if (isNatalNode || isTransitNode) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 4;
    if (aspectName === 'Trine' || aspectName === 'Square') return 3;
    return 2;
  }

  // Inner to inner
  if (isNatalInner && isTransitInner) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 5;
    if (aspectName === 'Trine' || aspectName === 'Square') return 4;
    return 3;
  }

  // Outer to outer
  if (!isNatalInner && !isTransitInner && !isNatalNode && !isTransitNode) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 4;
    if (aspectName === 'Trine' || aspectName === 'Square') return 3;
    return 2;
  }

  // Mixed (inner to outer or outer to inner)
  if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 4;
  if (aspectName === 'Trine' || aspectName === 'Square') return 3;
  return 2;
};

// Calculate aspects between natal and transit planets
const calculateNatalToTransitAspects = (natalPlanets: any[], transitPlanets: any[]) => {
  const aspects: any[] = [];

  natalPlanets.forEach((natalPlanet) => {
    transitPlanets.forEach((transitPlanet) => {
      // Exclude all transit Moon aspects
      if (transitPlanet.name === 'Moon') {
        return;
      }

      ASPECT_TYPES.forEach((aspectType) => {
        const diff = Math.abs(natalPlanet.longitude - transitPlanet.longitude);
        const distance = diff > 180 ? 360 - diff : diff;
        const orb = getNatalToTransitOrb(natalPlanet.name, transitPlanet.name, aspectType.name);

        if (Math.abs(distance - aspectType.angle) <= orb) {
          const actualOrb = Math.abs(distance - aspectType.angle);
          aspects.push({
            natalPlanet: natalPlanet.name,
            transitPlanet: transitPlanet.name,
            aspect: aspectType.name,
            orb: actualOrb,
            color: aspectType.color,
            symbol: aspectType.symbol,
            natalLongitude: natalPlanet.longitude,
            transitLongitude: transitPlanet.longitude
          });
        }
      });
    });
  });

  // Sort by orb (tightest first)
  return aspects.sort((a, b) => a.orb - b.orb);
};

// Helper to format degrees
const formatDegrees = (longitude: number): string => {
  const signIndex = Math.floor(longitude / 30);
  const degreeInSign = longitude % 30;
  const degrees = Math.floor(degreeInSign);
  const minutes = Math.round((degreeInSign - degrees) * 60);
  return `${degrees}°${minutes.toString().padStart(2, '0')}'`;
};

// Helper to get zodiac sign
const getZodiacSign = (longitude: number): string => {
  const signIndex = Math.floor(longitude / 30);
  return ZODIAC_SIGNS[signIndex];
};

// Helper to calculate which house a planet is in
const calculateHousePosition = (planetLongitude: number, houseCusps: number[]): number => {
  // Normalize planet longitude to 0-360
  let normPlanet = planetLongitude % 360;
  if (normPlanet < 0) normPlanet += 360;

  // Check each house
  for (let i = 0; i < 12; i++) {
    const currentCusp = houseCusps[i];
    const nextCusp = houseCusps[(i + 1) % 12];

    let normCurrentCusp = currentCusp % 360;
    let normNextCusp = nextCusp % 360;

    if (normCurrentCusp < 0) normCurrentCusp += 360;
    if (normNextCusp < 0) normNextCusp += 360;

    // Handle house that crosses 0° Aries
    if (normNextCusp < normCurrentCusp) {
      if (normPlanet >= normCurrentCusp || normPlanet < normNextCusp) {
        return i + 1; // Houses are 1-indexed
      }
    } else {
      if (normPlanet >= normCurrentCusp && normPlanet < normNextCusp) {
        return i + 1;
      }
    }
  }

  return 1; // Default to 1st house if calculation fails
};

// Helper to get planet speed order (lower = faster)
const getPlanetSpeedOrder = (planetName: string): number => {
  const speedOrder: Record<string, number> = {
    'Sun': 1,
    'Mercury': 2,
    'Venus': 3,
    'Mars': 4,
    'Jupiter': 5,
    'Saturn': 6,
    'Uranus': 7,
    'Neptune': 8,
    'Pluto': 9,
    'North Node': 10,
    'South Node': 11
  };
  return speedOrder[planetName] || 99;
};

export const SimpleNatalTransitCalendar: React.FC<SimpleNatalTransitCalendarProps> = ({
  natalDate,
  natalLatitude,
  natalLongitude,
  natalTimezone,
  firstHouseReference,
  manualFirstHouseSign,
  cityName,
  houseSystem
}) => {
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(() => {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1); // Adjust to Monday
    return new Date(today.setDate(diff));
  });

  const [expandedDayIndex, setExpandedDayIndex] = useState<number | null>(null);
  const [showAllAspects, setShowAllAspects] = useState<boolean>(false);
  const [expandedAspectKey, setExpandedAspectKey] = useState<string | null>(null);
  const [visibleRowsPerDay, setVisibleRowsPerDay] = useState<Record<number, number>>({});
  const [selectedAspect, setSelectedAspect] = useState<any | null>(null);

  // Calculate natal planets once
  const natalPlanets = useMemo(() => {
    return calculatePlanetaryPositions(natalDate);
  }, [natalDate]);

  // Calculate natal Ascendant and houses
  const natalAscendant = useMemo(() => {
    try {
      console.log('Calculating with:', {
        natalDate,
        natalLatitude,
        natalLongitude,
        natalTimezone,
        houseSystem,
        firstHouseReference,
        manualFirstHouseSign
      });

      // Convert natal date to UTC using the same approach as SimpleWheelFixed
      // The natalDate from DatePicker represents the user's INTENDED local time at the birth location.
      // We extract the displayed time components and reconstruct as UTC, then adjust by birth location's UTC offset
      const year = natalDate.getFullYear();
      const month = natalDate.getMonth();
      const day = natalDate.getDate();
      const hours = natalDate.getHours();
      const minutes = natalDate.getMinutes();
      const seconds = natalDate.getSeconds();

      // Get UTC offset in hours for the birth location
      const utcOffset = getUTCOffset(natalDate, natalTimezone);

      // Create UTC date by treating displayed time as birth location time, then adjusting by UTC offset
      const natalDateUTC = new Date(Date.UTC(year, month, day, hours, minutes, seconds) - utcOffset * 60 * 60 * 1000);

      console.log('UTC offset (hours):', utcOffset);
      console.log('Local date:', natalDate);
      console.log('UTC date:', natalDateUTC);

      // Calculate actual ascendant from birth location and time
      const calculatedAscendant = calculateAscendant(natalDateUTC, natalLatitude, natalLongitude);

      // Determine the first house longitude based on selected reference
      let firstHouseLongitude = calculatedAscendant; // Default to ascendant

      if (firstHouseReference === 'sun') {
        const sunData = natalPlanets.find(p => p.name === 'Sun');
        if (sunData) firstHouseLongitude = sunData.longitude;
      } else if (firstHouseReference === 'moon') {
        const moonData = natalPlanets.find(p => p.name === 'Moon');
        if (moonData) firstHouseLongitude = moonData.longitude;
      } else if (firstHouseReference === 'manual') {
        // Convert sign name to longitude (0° of that sign)
        const signIdx = ZODIAC_SIGNS.indexOf(manualFirstHouseSign || 'Aries');
        if (signIdx !== -1) {
          firstHouseLongitude = signIdx * 30; // 0° of the selected sign
        }
      }

      // Calculate house cusps based on the house system
      // For equal and whole-sign systems, we use the firstHouseLongitude
      // For placidus, we still use the ascendant but then adjust
      let houseCusps: number[];

      if (houseSystem === 'whole-sign') {
        // Whole sign: each house starts at 0° of a sign
        const firstHouseSign = Math.floor(firstHouseLongitude / 30);
        houseCusps = [];
        for (let i = 0; i < 12; i++) {
          const signIndex = (firstHouseSign + i) % 12;
          houseCusps.push(signIndex * 30);
        }
      } else if (houseSystem === 'equal') {
        // Equal house: 30° increments from first house longitude
        houseCusps = [];
        for (let i = 0; i < 12; i++) {
          houseCusps.push((firstHouseLongitude + (i * 30)) % 360);
        }
      } else {
        // Placidus - use the calculated houses from ephemeris, but adjust if needed
        // If using non-ascendant reference, we need to rotate the houses
        const baseHouseCusps = calculateHouses(natalDateUTC, natalLatitude, natalLongitude, 'placidus');

        if (firstHouseReference === 'ascendant') {
          houseCusps = baseHouseCusps;
        } else {
          // For Placidus with non-ascendant reference, fall back to equal houses
          // as Placidus is specifically based on the ascendant
          houseCusps = [];
          for (let i = 0; i < 12; i++) {
            houseCusps.push((firstHouseLongitude + (i * 30)) % 360);
          }
        }
      }

      const result = {
        ascendant: calculatedAscendant,
        firstHouseLongitude,
        houseCusps
      };
      console.log('Natal houses calculated:', result);
      console.log('Ascendant in degrees:', calculatedAscendant, 'which is', getZodiacSign(calculatedAscendant), formatDegrees(calculatedAscendant));
      console.log('First house reference:', firstHouseReference, 'at', firstHouseLongitude);
      return result;
    } catch (error) {
      console.error('Error calculating natal ascendant:', error);
      return null;
    }
  }, [natalDate, natalLatitude, natalLongitude, natalTimezone, houseSystem, firstHouseReference, manualFirstHouseSign, natalPlanets]);

  // Helper function to get week start (Monday)
  const getWeekStart = (date: Date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  };

  // Calculate 7 days of aspects starting from currentWeekStart
  const weekData = useMemo(() => {
    const days: any[] = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(currentWeekStart);
      date.setDate(date.getDate() + i);

      // Set to noon for consistent calculations
      date.setHours(12, 0, 0, 0);

      const transitPlanets = calculatePlanetaryPositions(date);
      const natalToTransitAspects = calculateNatalToTransitAspects(natalPlanets, transitPlanets);

      // Sort aspects by transit planet speed (slower planets first - outer to inner)
      natalToTransitAspects.sort((a, b) => {
        const speedA = getPlanetSpeedOrder(a.transitPlanet);
        const speedB = getPlanetSpeedOrder(b.transitPlanet);
        return speedB - speedA; // Reversed: slower (higher number) first
      });

      days.push({
        date,
        aspects: natalToTransitAspects
      });
    }

    return days;
  }, [currentWeekStart, natalPlanets]);

  // Create a consistent row mapping for aspects across the week
  const aspectRowMapping = useMemo(() => {
    const aspectKeyToRow = new Map<string, number>();
    const allAspectKeys = new Set<string>();

    // Collect all unique aspect keys across the week
    weekData.forEach(day => {
      day.aspects.forEach((aspect: any) => {
        const key = `${aspect.natalPlanet}-${aspect.aspect}-${aspect.transitPlanet}`;
        allAspectKeys.add(key);
      });
    });

    // Sort aspect keys by first appearance and planet speed
    const sortedKeys = Array.from(allAspectKeys).sort((keyA, keyB) => {
      // Extract transit planet from key
      const planetA = keyA.split('-')[2];
      const planetB = keyB.split('-')[2];

      // Sort by planet speed (slower first)
      const speedA = getPlanetSpeedOrder(planetA);
      const speedB = getPlanetSpeedOrder(planetB);
      return speedB - speedA;
    });

    // Assign row numbers
    sortedKeys.forEach((key, index) => {
      aspectKeyToRow.set(key, index);
    });

    return aspectKeyToRow;
  }, [weekData]);

  const goToPreviousWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() - 7);
    setCurrentWeekStart(newStart);
    setExpandedDayIndex(null);
    setShowAllAspects(false);
    setExpandedAspectKey(null);
    setVisibleRowsPerDay({});
  };

  const goToNextWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() + 7);
    setCurrentWeekStart(newStart);
    setExpandedDayIndex(null);
    setShowAllAspects(false);
    setExpandedAspectKey(null);
    setVisibleRowsPerDay({});
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentWeekStart(getWeekStart(today));
    setExpandedDayIndex(null);
    setShowAllAspects(false);
    setExpandedAspectKey(null);
    setVisibleRowsPerDay({});
  };

  const handleDayClick = (index: number) => {
    if (expandedDayIndex === index) {
      setExpandedDayIndex(null);
      setShowAllAspects(false);
    } else {
      setExpandedDayIndex(index);
      setShowAllAspects(false);
    }
    setExpandedAspectKey(null);
  };

  const handleAspectClick = (e: React.MouseEvent, aspectKey: string) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedAspectKey(expandedAspectKey === aspectKey ? null : aspectKey);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>
        Natal to Transit Calendar - {cityName || 'Location'}
      </h2>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        Shows aspects from your natal planets to current transiting planets (Natal → Transit)
      </p>

      {/* Natal Chart Information */}
      <div style={{
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: '#f0f4ff',
        borderRadius: '8px',
        border: '2px solid #667eea'
      }}>
        <h3 style={{ marginBottom: '15px', color: '#667eea', fontSize: '18px' }}>
          Your Natal Chart
          {natalAscendant && natalAscendant.houseCusps && ' - With Houses'}
          {(!natalAscendant || !natalAscendant.houseCusps) && ' - Sign Positions Only'}
        </h3>

        {natalAscendant && natalAscendant.houseCusps ? (
          <>
            <div style={{ marginBottom: '15px' }}>
              <strong>Ascendant:</strong> {formatDegrees(natalAscendant.ascendant)} {getZodiacSign(natalAscendant.ascendant)}
              {firstHouseReference !== 'ascendant' && (
                <span style={{ marginLeft: '20px', color: '#667eea' }}>
                  <strong>1st House Reference:</strong> {formatDegrees(natalAscendant.firstHouseLongitude)} {getZodiacSign(natalAscendant.firstHouseLongitude)}
                  {firstHouseReference === 'sun' && ' (Sun)'}
                  {firstHouseReference === 'moon' && ' (Moon)'}
                  {firstHouseReference === 'manual' && ` (${manualFirstHouseSign})`}
                </span>
              )}
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '10px',
              marginTop: '15px'
            }}>
              {natalPlanets.map((planet, index) => {
                const house = calculateHousePosition(planet.longitude, natalAscendant.houseCusps);
                return (
                  <div
                    key={index}
                    style={{
                      padding: '10px',
                      backgroundColor: 'white',
                      borderRadius: '5px',
                      border: `1px solid ${PLANET_COLORS[planet.name] || '#ccc'}`,
                      fontSize: '13px'
                    }}
                  >
                    <div style={{ fontWeight: 'bold', color: PLANET_COLORS[planet.name] }}>
                      {PLANET_SYMBOLS[planet.name]} {planet.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                      {formatDegrees(planet.longitude)} {getZodiacSign(planet.longitude)}
                    </div>
                    <div style={{ fontSize: '12px', color: '#888', marginTop: '3px' }}>
                      House {house}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{
              marginTop: '15px',
              fontSize: '13px',
              color: '#666',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '5px'
            }}>
              {natalAscendant.houseCusps.map((cusp, index) => (
                <div key={index} style={{ fontSize: '11px' }}>
                  House {index + 1}: {formatDegrees(cusp)} {getZodiacSign(cusp)}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '10px',
            marginTop: '15px'
          }}>
            {natalPlanets.map((planet, index) => (
              <div
                key={index}
                style={{
                  padding: '10px',
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  border: `1px solid ${PLANET_COLORS[planet.name] || '#ccc'}`,
                  fontSize: '13px'
                }}
              >
                <div style={{ fontWeight: 'bold', color: PLANET_COLORS[planet.name] }}>
                  {PLANET_SYMBOLS[planet.name]} {planet.name}
                </div>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                  {formatDegrees(planet.longitude)} {getZodiacSign(planet.longitude)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Week Navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <button
          onClick={goToPreviousWeek}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          ← Previous Week
        </button>

        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
          Week of {currentWeekStart.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </div>

        <button
          onClick={goToToday}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#32CD32',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginLeft: '10px',
            marginRight: '10px'
          }}
        >
          Today
        </button>

        <button
          onClick={goToNextWeek}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Next Week →
        </button>
      </div>

      {/* Calendar Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '10px',
        marginBottom: '30px'
      }}>
        {weekData.map((day, dayIndex) => {
          const isToday = day.date.toDateString() === new Date().toDateString();
          const isExpanded = expandedDayIndex === dayIndex;

          return (
            <div
              key={dayIndex}
              onClick={() => handleDayClick(dayIndex)}
              style={{
                padding: '15px',
                backgroundColor: 'white',
                border: isToday ? '3px solid #4CAF50' : '1px solid #ddd',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: isExpanded ? '0 4px 8px rgba(0,0,0,0.2)' : '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                fontWeight: 'bold',
                marginBottom: '10px',
                fontSize: '14px',
                color: '#333'
              }}>
                {day.date.toLocaleDateString('en-US', { weekday: 'short' })}
                <br />
                {day.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>

              <div style={{ fontSize: '12px', color: '#666' }}>
                {day.aspects.length} aspect{day.aspects.length !== 1 ? 's' : ''}
              </div>

              {/* Render aspects in consistent rows */}
              {(() => {
                // Create a map of aspect keys to aspects for this day
                const aspectMap = new Map<string, any>();
                day.aspects.forEach((aspect: any) => {
                  const key = `${aspect.natalPlanet}-${aspect.aspect}-${aspect.transitPlanet}`;
                  aspectMap.set(key, aspect);
                });

                // Get visible rows for this day (default 15, can be expanded)
                const currentVisibleRows = visibleRowsPerDay[dayIndex] || 15;
                const maxRow = Math.min(currentVisibleRows - 1, aspectRowMapping.size - 1);
                const rows = [];

                // Render each row
                for (let row = 0; row <= maxRow; row++) {
                  // Find which aspect belongs in this row
                  let aspectForRow = null;
                  for (const [key, rowNum] of aspectRowMapping.entries()) {
                    if (rowNum === row && aspectMap.has(key)) {
                      aspectForRow = aspectMap.get(key);
                      break;
                    }
                  }

                  if (aspectForRow) {
                    // Render the aspect
                    rows.push(
                      <div
                        key={row}
                        title={`Natal ${aspectForRow.natalPlanet} ${aspectForRow.aspect} Transit ${aspectForRow.transitPlanet}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedAspect(aspectForRow);
                        }}
                        style={{
                          marginTop: '5px',
                          padding: '5px',
                          backgroundColor: (PLANET_COLORS[aspectForRow.transitPlanet] || '#667eea') + '22',
                          borderRadius: '4px',
                          fontSize: '11px',
                          borderLeft: `3px solid ${aspectForRow.color}`,
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <span style={{ color: PLANET_COLORS[aspectForRow.natalPlanet] || '#333', fontWeight: 'bold' }}>
                          {PLANET_SYMBOLS[aspectForRow.natalPlanet]}
                        </span>
                        {' '}
                        <span style={{ color: aspectForRow.color }}>
                          {aspectForRow.symbol}
                        </span>
                        {' '}
                        <span style={{ fontWeight: 'bold', color: PLANET_COLORS[aspectForRow.transitPlanet] || '#333' }}>
                          {PLANET_SYMBOLS[aspectForRow.transitPlanet]}
                        </span>
                        <br />
                        <span style={{ fontSize: '10px', color: '#888' }}>
                          {aspectForRow.orb.toFixed(1)}° orb
                        </span>
                      </div>
                    );
                  } else {
                    // Render empty space to maintain row alignment
                    rows.push(
                      <div
                        key={row}
                        style={{
                          marginTop: '5px',
                          height: '42px', // Match aspect height
                          opacity: 0
                        }}
                      />
                    );
                  }
                }

                return rows;
              })()}

              {/* Show 10 More button */}
              {aspectRowMapping.size > (visibleRowsPerDay[dayIndex] || 15) && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setVisibleRowsPerDay(prev => ({
                      ...prev,
                      [dayIndex]: (prev[dayIndex] || 15) + 10
                    }));
                  }}
                  style={{
                    width: '100%',
                    marginTop: '5px',
                    padding: '5px',
                    fontSize: '11px',
                    cursor: 'pointer',
                    backgroundColor: '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    transition: 'all 0.2s'
                  }}
                >
                  Show 10 More Aspects
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Expanded Day View */}
      {expandedDayIndex !== null && weekData[expandedDayIndex] && (
        <div style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          border: '2px solid #667eea'
        }}>
          <h3 style={{ marginBottom: '15px', color: '#667eea' }}>
            {weekData[expandedDayIndex].date.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </h3>

          <p style={{ marginBottom: '20px', color: '#666' }}>
            {weekData[expandedDayIndex].aspects.length} Natal to Transit Aspects
          </p>

          {/* Show first 10 aspects or all if "See More" is clicked */}
          {(showAllAspects
            ? weekData[expandedDayIndex].aspects
            : weekData[expandedDayIndex].aspects.slice(0, 10)
          ).map((aspect: any, aspectIndex: number) => {
            // Create unique key for each aspect
            const aspectKey = `${aspect.natalPlanet}-${aspect.aspect}-${aspect.transitPlanet}-${aspect.orb.toFixed(2)}`;
            const isAspectExpanded = expandedAspectKey === aspectKey;

            return (
              <div
                key={aspectIndex}
                onClick={(e) => {
                  console.log('Aspect clicked:', aspectKey);
                  console.log('Current expandedAspectKey:', expandedAspectKey);
                  handleAspectClick(e, aspectKey);
                }}
                style={{
                  marginBottom: '15px',
                  padding: '15px',
                  backgroundColor: (PLANET_COLORS[aspect.transitPlanet] || '#667eea') + '15',
                  borderRadius: '8px',
                  border: `2px solid ${aspect.color}`,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    <span style={{ color: PLANET_COLORS[aspect.natalPlanet] }}>
                      {aspect.natalPlanet} {PLANET_SYMBOLS[aspect.natalPlanet]}
                    </span>
                    {' '}
                    <span style={{ color: aspect.color }}>
                      {aspect.aspect} {aspect.symbol}
                    </span>
                    {' '}
                    <span style={{ color: PLANET_COLORS[aspect.transitPlanet] || '#333' }}>
                      {aspect.transitPlanet} {PLANET_SYMBOLS[aspect.transitPlanet]}
                    </span>
                  </div>
                  <div style={{ fontSize: '14px', color: '#888' }}>
                    Orb: {aspect.orb.toFixed(2)}°
                  </div>
                </div>

                <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                  <div>
                    Natal {aspect.natalPlanet}: {formatDegrees(aspect.natalLongitude)} {getZodiacSign(aspect.natalLongitude)}
                  </div>
                  <div>
                    Transit {aspect.transitPlanet}: {formatDegrees(aspect.transitLongitude)} {getZodiacSign(aspect.transitLongitude)}
                  </div>
                </div>

                {isAspectExpanded && (
                  <div style={{
                    marginTop: '15px',
                    padding: '15px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '5px',
                    fontSize: '14px',
                    lineHeight: '1.6'
                  }}>
                    <h4 style={{ marginBottom: '10px', color: aspect.color }}>
                      Interpretation:
                    </h4>
                    <div style={{ whiteSpace: 'pre-wrap' }}>
                      {(() => {
                        // Find the natal planet's house
                        const natalPlanetObj = natalPlanets.find(p => p.name === aspect.natalPlanet);
                        const natalHouse = natalPlanetObj && natalAscendant?.houseCusps
                          ? calculateHousePosition(natalPlanetObj.longitude, natalAscendant.houseCusps)
                          : 1;

                        // Find which natal house the transiting planet is currently in
                        // For natal-to-transit aspects, we use the NATAL house cusps to determine
                        // which natal house the transiting planet is occupying
                        const transitHouse = natalAscendant?.houseCusps
                          ? calculateHousePosition(aspect.transitLongitude, natalAscendant.houseCusps)
                          : 1;

                        const result = generateAspectInterpretation(
                          aspect.natalPlanet,
                          natalHouse,
                          aspect.transitPlanet,
                          transitHouse,
                          aspect.aspect,
                          aspect.orb
                        );
                        return result.fullInterpretation || 'Interpretation not available';
                      })()}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* See More / See Less Button */}
          {weekData[expandedDayIndex].aspects.length > 10 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowAllAspects(!showAllAspects);
              }}
              style={{
                width: '100%',
                padding: '12px',
                marginTop: '10px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                backgroundColor: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
            >
              {showAllAspects
                ? `See Less`
                : `See More (${weekData[expandedDayIndex].aspects.length - 10} more aspects)`
              }
            </button>
          )}
        </div>
      )}

      {/* Modal Overlay for Aspect Interpretation */}
      {selectedAspect && (
        <div
          onClick={() => setSelectedAspect(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '30px',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedAspect(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#888',
                padding: '5px 10px',
                lineHeight: '1'
              }}
              title="Close"
            >
              ×
            </button>

            {/* Title */}
            <h3 style={{
              marginBottom: '20px',
              color: '#333',
              fontSize: '22px',
              paddingRight: '30px'
            }}>
              <span style={{ color: PLANET_COLORS[selectedAspect.natalPlanet] }}>
                Natal {selectedAspect.natalPlanet} {PLANET_SYMBOLS[selectedAspect.natalPlanet]}
              </span>
              {' '}
              <span style={{ color: selectedAspect.color }}>
                {selectedAspect.aspect} {selectedAspect.symbol}
              </span>
              {' '}
              <span style={{ color: PLANET_COLORS[selectedAspect.transitPlanet] || '#333' }}>
                Transit {selectedAspect.transitPlanet} {PLANET_SYMBOLS[selectedAspect.transitPlanet]}
              </span>
            </h3>

            {/* Planet Positions */}
            <div style={{
              backgroundColor: '#f5f5f5',
              padding: '15px',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <div style={{ marginBottom: '10px', fontSize: '14px' }}>
                <strong style={{ color: PLANET_COLORS[selectedAspect.natalPlanet] }}>
                  Natal {selectedAspect.natalPlanet}:
                </strong>
                {' '}
                {formatDegrees(selectedAspect.natalLongitude)} {getZodiacSign(selectedAspect.natalLongitude)}
              </div>
              <div style={{ marginBottom: '10px', fontSize: '14px' }}>
                <strong style={{ color: PLANET_COLORS[selectedAspect.transitPlanet] || '#333' }}>
                  Transit {selectedAspect.transitPlanet}:
                </strong>
                {' '}
                {formatDegrees(selectedAspect.transitLongitude)} {getZodiacSign(selectedAspect.transitLongitude)}
              </div>
              <div style={{ fontSize: '14px', color: '#888' }}>
                <strong>Orb:</strong> {selectedAspect.orb.toFixed(2)}°
              </div>
            </div>

            {/* Interpretation */}
            <div style={{
              fontSize: '15px',
              lineHeight: '1.7',
              color: '#333'
            }}>
              <h4 style={{
                marginBottom: '15px',
                color: selectedAspect.color,
                fontSize: '18px'
              }}>
                Interpretation:
              </h4>
              <div style={{ whiteSpace: 'pre-wrap' }}>
                {(() => {
                  // Find the natal planet's house
                  const natalPlanetObj = natalPlanets.find(p => p.name === selectedAspect.natalPlanet);
                  const natalHouse = natalPlanetObj && natalAscendant?.houseCusps
                    ? calculateHousePosition(natalPlanetObj.longitude, natalAscendant.houseCusps)
                    : 1;

                  // Find which natal house the transiting planet is currently in
                  const transitHouse = natalAscendant?.houseCusps
                    ? calculateHousePosition(selectedAspect.transitLongitude, natalAscendant.houseCusps)
                    : 1;

                  const result = generateAspectInterpretation(
                    selectedAspect.natalPlanet,
                    natalHouse,
                    selectedAspect.transitPlanet,
                    transitHouse,
                    selectedAspect.aspect,
                    selectedAspect.orb
                  );
                  return result.fullInterpretation || 'Interpretation not available';
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
