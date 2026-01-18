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
            type: 'natal-transit',
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

// Detect eclipses (Solar = Sun-Moon conjunction, Lunar = Sun-Moon opposition)
const detectEclipses = (transitPlanets: any[], natalPlanets: any[]) => {
  const events: any[] = [];
  const sun = transitPlanets.find(p => p.name === 'Sun');
  const moon = transitPlanets.find(p => p.name === 'Moon');
  const northNode = transitPlanets.find(p => p.name === 'North Node');

  if (!sun || !moon || !northNode) return events;

  // Check Sun-Moon conjunction (New Moon/Solar Eclipse)
  const conjDiff = Math.abs(sun.longitude - moon.longitude);
  const conjDistance = conjDiff > 180 ? 360 - conjDiff : conjDiff;

  if (conjDistance <= 10) { // New Moon within 10°
    // Check if near nodes for eclipse (within 15° of either node)
    const nodeDistance = Math.abs(sun.longitude - northNode.longitude);
    const normalizedNodeDist = nodeDistance > 180 ? 360 - nodeDistance : nodeDistance;
    const southNodeLong = (northNode.longitude + 180) % 360;
    const southNodeDist = Math.abs(sun.longitude - southNodeLong);
    const normalizedSouthDist = southNodeDist > 180 ? 360 - southNodeDist : southNodeDist;

    const isNearNode = normalizedNodeDist <= 15 || normalizedSouthDist <= 15;

    // Check if this eclipse aspects any natal planets
    natalPlanets.forEach((natalPlanet) => {
      ASPECT_TYPES.forEach((aspectType) => {
        const diff = Math.abs(natalPlanet.longitude - sun.longitude);
        const distance = diff > 180 ? 360 - diff : diff;
        const orb = 3; // Tight orb for eclipses

        if (Math.abs(distance - aspectType.angle) <= orb) {
          const actualOrb = Math.abs(distance - aspectType.angle);
          events.push({
            type: 'eclipse',
            eclipseType: isNearNode ? 'Solar Eclipse' : 'New Moon',
            natalPlanet: natalPlanet.name,
            aspect: aspectType.name,
            orb: actualOrb,
            color: isNearNode ? '#8B0000' : '#4B0082',
            symbol: isNearNode ? '🌑' : '🌙',
            natalLongitude: natalPlanet.longitude,
            transitLongitude: sun.longitude,
            transitPlanet: isNearNode ? 'Solar Eclipse' : 'New Moon'
          });
        }
      });
    });
  }

  // Check Sun-Moon opposition (Full Moon/Lunar Eclipse)
  const oppDiff = Math.abs(sun.longitude - moon.longitude);
  const oppDistance = oppDiff > 180 ? 360 - oppDiff : oppDiff;

  if (Math.abs(oppDistance - 180) <= 10) { // Full Moon within 10° of opposition
    const nodeDistance = Math.abs(sun.longitude - northNode.longitude);
    const normalizedNodeDist = nodeDistance > 180 ? 360 - nodeDistance : nodeDistance;
    const southNodeLong = (northNode.longitude + 180) % 360;
    const southNodeDist = Math.abs(sun.longitude - southNodeLong);
    const normalizedSouthDist = southNodeDist > 180 ? 360 - southNodeDist : southNodeDist;

    const isNearNode = normalizedNodeDist <= 15 || normalizedSouthDist <= 15;

    // Check if this eclipse aspects any natal planets
    natalPlanets.forEach((natalPlanet) => {
      ASPECT_TYPES.forEach((aspectType) => {
        const diff = Math.abs(natalPlanet.longitude - moon.longitude);
        const distance = diff > 180 ? 360 - diff : diff;
        const orb = 3;

        if (Math.abs(distance - aspectType.angle) <= orb) {
          const actualOrb = Math.abs(distance - aspectType.angle);
          events.push({
            type: 'eclipse',
            eclipseType: isNearNode ? 'Lunar Eclipse' : 'Full Moon',
            natalPlanet: natalPlanet.name,
            aspect: aspectType.name,
            orb: actualOrb,
            color: isNearNode ? '#8B4513' : '#191970',
            symbol: isNearNode ? '🌕' : '🌕',
            natalLongitude: natalPlanet.longitude,
            transitLongitude: moon.longitude,
            transitPlanet: isNearNode ? 'Lunar Eclipse' : 'Full Moon'
          });
        }
      });
    });
  }

  return events;
};

// Detect house cusp crossings
const detectHouseCuspCrossings = (transitPlanets: any[], natalHouseCusps: number[], houseSystem: string) => {
  const events: any[] = [];

  if (!natalHouseCusps || natalHouseCusps.length !== 12) return events;

  transitPlanets.forEach((transitPlanet) => {
    // Skip Moon
    if (transitPlanet.name === 'Moon') return;

    natalHouseCusps.forEach((cusp, houseIndex) => {
      let diff = Math.abs(transitPlanet.longitude - cusp);
      diff = diff > 180 ? 360 - diff : diff;

      // Within 1° of house cusp
      if (diff <= 1) {
        events.push({
          type: 'house-cusp-crossing',
          transitPlanet: transitPlanet.name,
          house: houseIndex + 1,
          orb: diff,
          color: '#FF8C00',
          symbol: '🏠',
          transitLongitude: transitPlanet.longitude,
          cuspLongitude: cusp,
          natalPlanet: `House ${houseIndex + 1} Cusp`
        });
      }
    });
  });

  return events;
};

// Detect transit planet aspects to natal house cusps
const detectTransitToHouseCuspAspects = (transitPlanets: any[], natalHouseCusps: number[]) => {
  const events: any[] = [];

  if (!natalHouseCusps || natalHouseCusps.length !== 12) return events;

  transitPlanets.forEach((transitPlanet) => {
    // Skip Moon
    if (transitPlanet.name === 'Moon') return;

    natalHouseCusps.forEach((cusp, houseIndex) => {
      ASPECT_TYPES.forEach((aspectType) => {
        // Skip conjunction (handled by house cusp crossing)
        if (aspectType.name === 'Conjunction') return;

        const diff = Math.abs(transitPlanet.longitude - cusp);
        const distance = diff > 180 ? 360 - diff : diff;
        const orb = 2; // Tight orb for house cusp aspects

        if (Math.abs(distance - aspectType.angle) <= orb) {
          const actualOrb = Math.abs(distance - aspectType.angle);
          events.push({
            type: 'transit-to-cusp',
            transitPlanet: transitPlanet.name,
            house: houseIndex + 1,
            aspect: aspectType.name,
            orb: actualOrb,
            color: aspectType.color,
            symbol: aspectType.symbol,
            transitLongitude: transitPlanet.longitude,
            cuspLongitude: cusp,
            natalPlanet: `House ${houseIndex + 1} Cusp`
          });
        }
      });
    });
  });

  return events;
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

      // Detect eclipses and lunations
      const eclipseEvents = detectEclipses(transitPlanets, natalPlanets);

      // Detect house cusp events
      const houseCuspCrossings = natalAscendant?.houseCusps
        ? detectHouseCuspCrossings(transitPlanets, natalAscendant.houseCusps, houseSystem)
        : [];

      const transitToCuspAspects = natalAscendant?.houseCusps
        ? detectTransitToHouseCuspAspects(transitPlanets, natalAscendant.houseCusps)
        : [];

      // Combine all events
      const allEvents = [
        ...natalToTransitAspects,
        ...eclipseEvents,
        ...houseCuspCrossings,
        ...transitToCuspAspects
      ];

      // Sort all events by transit planet speed (slower planets first - outer to inner)
      allEvents.sort((a, b) => {
        const planetA = a.transitPlanet || '';
        const planetB = b.transitPlanet || '';
        const speedA = getPlanetSpeedOrder(planetA);
        const speedB = getPlanetSpeedOrder(planetB);
        return speedB - speedA; // Reversed: slower (higher number) first
      });

      days.push({
        date,
        aspects: allEvents
      });
    }

    return days;
  }, [currentWeekStart, natalPlanets, natalAscendant, houseSystem]);

  // Create a consistent row mapping for aspects across the week
  const aspectRowMapping = useMemo(() => {
    const aspectKeyToRow = new Map<string, number>();
    const allAspectKeys = new Set<string>();

    // Collect all unique aspect keys across the week
    weekData.forEach(day => {
      day.aspects.forEach((aspect: any) => {
        let key = '';
        if (aspect.type === 'eclipse') {
          key = `${aspect.eclipseType}-${aspect.aspect}-${aspect.natalPlanet}`;
        } else if (aspect.type === 'house-cusp-crossing') {
          key = `${aspect.transitPlanet}-crossing-House${aspect.house}`;
        } else if (aspect.type === 'transit-to-cusp') {
          key = `${aspect.transitPlanet}-${aspect.aspect}-House${aspect.house}`;
        } else {
          // Regular natal-transit aspect
          key = `${aspect.natalPlanet}-${aspect.aspect}-${aspect.transitPlanet}`;
        }
        allAspectKeys.add(key);
      });
    });

    // Sort aspect keys by first appearance and planet speed
    const sortedKeys = Array.from(allAspectKeys).sort((keyA, keyB) => {
      // Extract transit planet from key (last part or second part for house cusps)
      const partsA = keyA.split('-');
      const partsB = keyB.split('-');
      const planetA = partsA[partsA.length - 1].startsWith('House') ? partsA[0] : partsA[partsA.length - 1];
      const planetB = partsB.length === 1 ? partsB[0] : partsB[partsB.length - 1].startsWith('House') ? partsB[0] : partsB[partsB.length - 1];

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
                  let key = '';
                  if (aspect.type === 'eclipse') {
                    key = `${aspect.eclipseType}-${aspect.aspect}-${aspect.natalPlanet}`;
                  } else if (aspect.type === 'house-cusp-crossing') {
                    key = `${aspect.transitPlanet}-crossing-House${aspect.house}`;
                  } else if (aspect.type === 'transit-to-cusp') {
                    key = `${aspect.transitPlanet}-${aspect.aspect}-House${aspect.house}`;
                  } else {
                    key = `${aspect.natalPlanet}-${aspect.aspect}-${aspect.transitPlanet}`;
                  }
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
                    // Generate title and content based on event type
                    let title = '';
                    let bgColor = '';
                    let content: any = null;

                    if (aspectForRow.type === 'eclipse') {
                      title = `${aspectForRow.eclipseType} ${aspectForRow.aspect} Natal ${aspectForRow.natalPlanet}`;
                      bgColor = aspectForRow.color + '22';
                      content = (
                        <>
                          <span style={{ fontSize: '12px' }}>{aspectForRow.symbol}</span>
                          {' '}
                          <span style={{ color: aspectForRow.color }}>
                            {aspectForRow.aspect === 'Conjunction' ? '☌' : aspectForRow.aspect === 'Opposition' ? '☍' :
                             aspectForRow.aspect === 'Trine' ? '△' : aspectForRow.aspect === 'Square' ? '□' : '⚹'}
                          </span>
                          {' '}
                          <span style={{ color: PLANET_COLORS[aspectForRow.natalPlanet] || '#333', fontWeight: 'bold' }}>
                            {PLANET_SYMBOLS[aspectForRow.natalPlanet]}
                          </span>
                          <br />
                          <span style={{ fontSize: '10px', color: '#888' }}>
                            {aspectForRow.orb.toFixed(1)}° orb
                          </span>
                        </>
                      );
                    } else if (aspectForRow.type === 'house-cusp-crossing') {
                      title = `Transit ${aspectForRow.transitPlanet} crossing House ${aspectForRow.house} Cusp`;
                      bgColor = (PLANET_COLORS[aspectForRow.transitPlanet] || '#FF8C00') + '22';
                      content = (
                        <>
                          <span style={{ fontWeight: 'bold', color: PLANET_COLORS[aspectForRow.transitPlanet] || '#333' }}>
                            {PLANET_SYMBOLS[aspectForRow.transitPlanet]}
                          </span>
                          {' '}
                          <span style={{ color: aspectForRow.color }}>
                            {aspectForRow.symbol}
                          </span>
                          {' H'}
                          <span style={{ fontSize: '10px' }}>{aspectForRow.house}</span>
                          <br />
                          <span style={{ fontSize: '10px', color: '#888' }}>
                            {aspectForRow.orb.toFixed(1)}° orb
                          </span>
                        </>
                      );
                    } else if (aspectForRow.type === 'transit-to-cusp') {
                      title = `Transit ${aspectForRow.transitPlanet} ${aspectForRow.aspect} House ${aspectForRow.house} Cusp`;
                      bgColor = (PLANET_COLORS[aspectForRow.transitPlanet] || '#667eea') + '22';
                      content = (
                        <>
                          <span style={{ fontWeight: 'bold', color: PLANET_COLORS[aspectForRow.transitPlanet] || '#333' }}>
                            {PLANET_SYMBOLS[aspectForRow.transitPlanet]}
                          </span>
                          {' '}
                          <span style={{ color: aspectForRow.color }}>
                            {aspectForRow.symbol}
                          </span>
                          {' H'}
                          <span style={{ fontSize: '10px' }}>{aspectForRow.house}</span>
                          <br />
                          <span style={{ fontSize: '10px', color: '#888' }}>
                            {aspectForRow.orb.toFixed(1)}° orb
                          </span>
                        </>
                      );
                    } else {
                      // Regular natal-transit aspect
                      title = `Natal ${aspectForRow.natalPlanet} ${aspectForRow.aspect} Transit ${aspectForRow.transitPlanet}`;
                      bgColor = (PLANET_COLORS[aspectForRow.transitPlanet] || '#667eea') + '22';
                      content = (
                        <>
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
                        </>
                      );
                    }

                    // Render the aspect
                    rows.push(
                      <div
                        key={row}
                        title={title}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedAspect(aspectForRow);
                        }}
                        style={{
                          marginTop: '5px',
                          padding: '5px',
                          backgroundColor: bgColor,
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
                        {content}
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

            {/* Title - Dynamic based on event type */}
            <h3 style={{
              marginBottom: '20px',
              color: '#333',
              fontSize: '22px',
              paddingRight: '30px'
            }}>
              {selectedAspect.type === 'eclipse' ? (
                <>
                  <span style={{ fontSize: '20px' }}>{selectedAspect.symbol}</span>
                  {' '}
                  <span style={{ color: selectedAspect.color, fontWeight: 'bold' }}>
                    {selectedAspect.eclipseType}
                  </span>
                  {' '}
                  <span style={{ color: selectedAspect.color }}>
                    {selectedAspect.aspect}
                  </span>
                  {' '}
                  <span style={{ color: PLANET_COLORS[selectedAspect.natalPlanet] }}>
                    Natal {selectedAspect.natalPlanet} {PLANET_SYMBOLS[selectedAspect.natalPlanet]}
                  </span>
                </>
              ) : selectedAspect.type === 'house-cusp-crossing' ? (
                <>
                  <span style={{ color: PLANET_COLORS[selectedAspect.transitPlanet] }}>
                    Transit {selectedAspect.transitPlanet} {PLANET_SYMBOLS[selectedAspect.transitPlanet]}
                  </span>
                  {' '}
                  <span style={{ color: selectedAspect.color }}>
                    {selectedAspect.symbol} Crossing
                  </span>
                  {' '}
                  <span>House {selectedAspect.house} Cusp</span>
                </>
              ) : selectedAspect.type === 'transit-to-cusp' ? (
                <>
                  <span style={{ color: PLANET_COLORS[selectedAspect.transitPlanet] }}>
                    Transit {selectedAspect.transitPlanet} {PLANET_SYMBOLS[selectedAspect.transitPlanet]}
                  </span>
                  {' '}
                  <span style={{ color: selectedAspect.color }}>
                    {selectedAspect.aspect} {selectedAspect.symbol}
                  </span>
                  {' '}
                  <span>House {selectedAspect.house} Cusp</span>
                </>
              ) : (
                <>
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
                </>
              )}
            </h3>

            {/* Planet/Cusp Positions */}
            <div style={{
              backgroundColor: '#f5f5f5',
              padding: '15px',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              {selectedAspect.type === 'eclipse' || selectedAspect.type === 'natal-transit' ? (
                <>
                  <div style={{ marginBottom: '10px', fontSize: '14px' }}>
                    <strong style={{ color: PLANET_COLORS[selectedAspect.natalPlanet] }}>
                      Natal {selectedAspect.natalPlanet}:
                    </strong>
                    {' '}
                    {formatDegrees(selectedAspect.natalLongitude)} {getZodiacSign(selectedAspect.natalLongitude)}
                  </div>
                  <div style={{ marginBottom: '10px', fontSize: '14px' }}>
                    <strong style={{ color: selectedAspect.type === 'eclipse' ? selectedAspect.color : PLANET_COLORS[selectedAspect.transitPlanet] || '#333' }}>
                      {selectedAspect.type === 'eclipse' ? selectedAspect.eclipseType : `Transit ${selectedAspect.transitPlanet}`}:
                    </strong>
                    {' '}
                    {formatDegrees(selectedAspect.transitLongitude)} {getZodiacSign(selectedAspect.transitLongitude)}
                  </div>
                </>
              ) : (
                <>
                  <div style={{ marginBottom: '10px', fontSize: '14px' }}>
                    <strong style={{ color: PLANET_COLORS[selectedAspect.transitPlanet] || '#333' }}>
                      Transit {selectedAspect.transitPlanet}:
                    </strong>
                    {' '}
                    {formatDegrees(selectedAspect.transitLongitude)} {getZodiacSign(selectedAspect.transitLongitude)}
                  </div>
                  <div style={{ marginBottom: '10px', fontSize: '14px' }}>
                    <strong>House {selectedAspect.house} Cusp:</strong>
                    {' '}
                    {formatDegrees(selectedAspect.cuspLongitude)} {getZodiacSign(selectedAspect.cuspLongitude)}
                  </div>
                </>
              )}
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
                  // Generate interpretation based on event type
                  if (selectedAspect.type === 'eclipse') {
                    // Find the natal planet's house
                    const natalPlanetObj = natalPlanets.find(p => p.name === selectedAspect.natalPlanet);
                    const natalHouse = natalPlanetObj && natalAscendant?.houseCusps
                      ? calculateHousePosition(natalPlanetObj.longitude, natalAscendant.houseCusps)
                      : null;

                    // Determine eclipse house (where the eclipse point is located in natal chart)
                    const eclipseHouse = natalAscendant?.houseCusps
                      ? calculateHousePosition(selectedAspect.transitLongitude, natalAscendant.houseCusps)
                      : null;

                    // Determine aspect quality
                    const isHarmonious = selectedAspect.aspect === 'Trine' || selectedAspect.aspect === 'Sextile';
                    const isChallenging = selectedAspect.aspect === 'Square' || selectedAspect.aspect === 'Opposition';
                    const isConjunction = selectedAspect.aspect === 'Conjunction';

                    let aspectQuality = '';
                    if (isConjunction) {
                      aspectQuality = 'This conjunction intensifies and merges energies, creating a powerful focal point for transformation.';
                    } else if (isHarmonious) {
                      aspectQuality = 'This harmonious aspect brings opportunities and supportive energies that flow naturally.';
                    } else if (isChallenging) {
                      aspectQuality = 'This challenging aspect creates dynamic tension that catalyzes growth through necessary changes.';
                    }

                    // House-specific predictions
                    const housePredictions: Record<number, string> = {
                      1: 'major shifts in self-image, physical appearance, or personal direction; a turning point in how you present yourself to the world',
                      2: 'significant changes in financial situation, values, or material security; opportunities or challenges regarding income and self-worth',
                      3: 'important communications, decisions about siblings or neighbors; changes in daily routines, learning, or local travel',
                      4: 'transformative events in home, family, or emotional foundation; possible relocation, family changes, or deep emotional healing',
                      5: 'major developments in romance, creativity, or relationships with children; breakthrough in self-expression or creative projects',
                      6: 'significant work changes, health revelations, or shifts in daily routines; opportunities to improve wellness or service to others',
                      7: 'pivotal moments in partnerships, marriage, or one-on-one relationships; contracts or commitments requiring attention',
                      8: 'deep transformations involving shared resources, intimacy, or psychological patterns; endings that lead to profound renewal',
                      9: 'life-changing opportunities for travel, higher education, or spiritual growth; expansion of beliefs and worldview',
                      10: 'career breakthroughs, public recognition, or changes in professional direction; shifts in reputation or life purpose',
                      11: 'significant developments in friendships, group associations, or long-term goals; alignment with community or social causes',
                      12: 'spiritual awakening, closure of old chapters, or healing of unconscious patterns; retreat and inner work bearing fruit'
                    };

                    // Planet-specific themes
                    const planetThemes: Record<string, string> = {
                      'Sun': 'identity, life purpose, vitality, and ego expression',
                      'Moon': 'emotions, instincts, home life, and inner security',
                      'Mercury': 'communication, thinking patterns, learning, and information flow',
                      'Venus': 'relationships, values, beauty, money, and what you love',
                      'Mars': 'action, drive, courage, sexuality, and how you assert yourself',
                      'Jupiter': 'growth, opportunity, beliefs, abundance, and expansion',
                      'Saturn': 'structure, responsibility, discipline, boundaries, and long-term goals',
                      'Uranus': 'freedom, innovation, sudden changes, and awakening',
                      'Neptune': 'spirituality, dreams, creativity, and dissolving boundaries',
                      'Pluto': 'transformation, power, depth, and regeneration',
                      'North Node': 'soul growth direction and future development',
                      'South Node': 'past patterns and what needs releasing'
                    };

                    const eclipseTypeNote = selectedAspect.eclipseType.includes('Solar')
                      ? 'Solar eclipses initiate new chapters and plant seeds for the future.'
                      : selectedAspect.eclipseType.includes('Lunar')
                      ? 'Lunar eclipses bring culminations, revelations, and necessary endings.'
                      : selectedAspect.eclipseType.includes('New Moon')
                      ? 'This New Moon marks a powerful time for setting intentions and new beginnings.'
                      : 'This Full Moon illuminates what has reached fullness and may need release.';

                    let interpretation = `${selectedAspect.eclipseType} ${selectedAspect.aspect} your natal ${selectedAspect.natalPlanet}:\n\n`;
                    interpretation += `${eclipseTypeNote} ${aspectQuality}\n\n`;

                    if (natalHouse) {
                      interpretation += `Your natal ${selectedAspect.natalPlanet} in House ${natalHouse} governs ${planetThemes[selectedAspect.natalPlanet] || 'core life themes'}. `;
                    } else {
                      interpretation += `Your natal ${selectedAspect.natalPlanet} governs ${planetThemes[selectedAspect.natalPlanet] || 'core life themes'}. `;
                    }

                    if (eclipseHouse) {
                      interpretation += `This eclipse occurs in your ${eclipseHouse}${eclipseHouse === 1 ? 'st' : eclipseHouse === 2 ? 'nd' : eclipseHouse === 3 ? 'rd' : 'th'} house, bringing ${housePredictions[eclipseHouse] || 'significant developments'}.\n\n`;
                    } else {
                      interpretation += `This eclipse activates your ${selectedAspect.natalPlanet} placement.\n\n`;
                    }

                    interpretation += `TIMING & MANIFESTATION:\n`;
                    interpretation += `• Peak influence: 3 days before and after the eclipse date\n`;
                    interpretation += `• Unfolding period: 6 months following the eclipse\n`;
                    interpretation += `• Watch for: sudden insights, fated encounters, doors opening/closing unexpectedly\n\n`;

                    if (isConjunction) {
                      interpretation += `With this conjunction, expect a complete reset or new beginning in matters related to your ${selectedAspect.natalPlanet}. What emerges now has destiny written into it.`;
                    } else if (isHarmonious) {
                      interpretation += `This supportive aspect offers opportunities flowing naturally. Doors open with less effort. Trust synchronicities and follow the path of least resistance while staying aligned with your truth.`;
                    } else if (isChallenging) {
                      interpretation += `This dynamic aspect may bring tension or obstacles that force necessary evolution. What feels challenging now is redirecting you toward greater authenticity. Resistance creates friction; acceptance and adaptation bring breakthrough.`;
                    }

                    return interpretation;
                  } else if (selectedAspect.type === 'house-cusp-crossing') {
                    return `Transit ${selectedAspect.transitPlanet} crossing your House ${selectedAspect.house} cusp:\n\nWhen a planet crosses a house cusp, it shifts the energy and focus to a new area of life. ${selectedAspect.transitPlanet} is now entering your ${selectedAspect.house}${selectedAspect.house === 1 ? 'st' : selectedAspect.house === 2 ? 'nd' : selectedAspect.house === 3 ? 'rd' : 'th'} house, bringing its energy and themes into this life area.\n\nThis transit marks a beginning of ${selectedAspect.transitPlanet}'s journey through your ${selectedAspect.house}${selectedAspect.house === 1 ? 'st' : selectedAspect.house === 2 ? 'nd' : selectedAspect.house === 3 ? 'rd' : 'th'} house sector. Over the coming period, expect developments and increased activity related to this house's themes. This is a time to consciously work with ${selectedAspect.transitPlanet}'s energy in this area of your life.`;
                  } else if (selectedAspect.type === 'transit-to-cusp') {
                    return `Transit ${selectedAspect.transitPlanet} ${selectedAspect.aspect} House ${selectedAspect.house} cusp:\n\nWhen a planet aspects a house cusp, it activates that house's themes through the nature of the aspect. This ${selectedAspect.aspect.toLowerCase()} from ${selectedAspect.transitPlanet} to your ${selectedAspect.house}${selectedAspect.house === 1 ? 'st' : selectedAspect.house === 2 ? 'nd' : selectedAspect.house === 3 ? 'rd' : 'th'} house cusp brings ${selectedAspect.transitPlanet}'s energy to bear on the matters of this house.\n\nDepending on the aspect type, this can bring opportunities (trine/sextile), challenges that promote growth (square), or the need to balance energies (opposition). Pay attention to how ${selectedAspect.transitPlanet}'s themes interact with this house's life areas during this time.`;
                  } else {
                    // Regular natal-transit aspect
                    const natalPlanetObj = natalPlanets.find(p => p.name === selectedAspect.natalPlanet);
                    const natalHouse = natalPlanetObj && natalAscendant?.houseCusps
                      ? calculateHousePosition(natalPlanetObj.longitude, natalAscendant.houseCusps)
                      : 1;

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
                  }
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
