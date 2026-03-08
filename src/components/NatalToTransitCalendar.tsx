import React, { useState, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { calculatePlanetaryPositions, calculateAscendant } from '../utils/ephemeris';
import { getNatalActivationManifestations, generateDailySummary } from '../utils/aspectInterpretations';
import type { DailySummary } from '../utils/aspectInterpretations';

interface NatalToTransitCalendarProps {
  natalDate: Date;
  natalLatitude: number;
  natalLongitude: number;
  natalTimezone: string;
  utcOffset: number;
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
  'Pluto': '#BA55D3',      // Medium Orchid (Purple-Magenta)
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

// Planet speed order (fastest to slowest)
const PLANET_SPEED_ORDER: Record<string, number> = {
  'Moon': 1,
  'Sun': 2,
  'Mercury': 3,
  'Venus': 4,
  'Mars': 5,
  'Jupiter': 6,
  'Saturn': 7,
  'Uranus': 8,
  'Neptune': 9,
  'Pluto': 10,
  'North Node': 11,
  'South Node': 12
};

// Get orb for transit-to-transit aspects (tighter orbs, matching Personal Transit Calendar)
const getTransitToTransitOrb = (planet1: string, planet2: string, aspectName: string): number => {
  const innerPlanets = ['Sun', 'Mercury', 'Venus', 'Mars']; // Moon excluded
  const nodes = ['North Node', 'South Node'];

  const isInner1 = innerPlanets.includes(planet1);
  const isInner2 = innerPlanets.includes(planet2);
  const isNode1 = nodes.includes(planet1);
  const isNode2 = nodes.includes(planet2);

  // Nodes
  if (isNode1 || isNode2) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 5;
    if (aspectName === 'Trine' || aspectName === 'Square') return 4;
    return 3;
  }

  // Jupiter-Saturn specific (generational aspects)
  if ((planet1 === 'Jupiter' && planet2 === 'Saturn') || (planet1 === 'Saturn' && planet2 === 'Jupiter')) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 6;
    if (aspectName === 'Trine' || aspectName === 'Square') return 5;
    return 4;
  }

  // Outer to outer planets (slow-moving)
  if (!isInner1 && !isInner2) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 5;
    if (aspectName === 'Trine' || aspectName === 'Square') return 4;
    return 3;
  }

  // Mixed: Outer to inner planets
  if ((isInner1 && !isInner2) || (!isInner1 && isInner2)) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 4;
    if (aspectName === 'Trine' || aspectName === 'Square') return 3.5;
    return 2.5;
  }

  // Inner to inner planets (fast-moving, tightest orbs)
  if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 3;
  if (aspectName === 'Trine' || aspectName === 'Square') return 2.5;
  return 2;
};

// Get orb for natal-to-transit-transit aspects (when natal planet aspects the midpoint)
const getNatalToMidpointOrb = (natalPlanet: string, aspectName: string): number => {
  const innerPlanets = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'];
  const nodes = ['North Node', 'South Node'];

  const isInner = innerPlanets.includes(natalPlanet);
  const isNode = nodes.includes(natalPlanet);

  // Moon natal aspects (tightest)
  if (natalPlanet === 'Moon') {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 2;
    if (aspectName === 'Trine' || aspectName === 'Square') return 1.5;
    return 1;
  }

  // Sun natal aspects
  if (natalPlanet === 'Sun') {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 3;
    if (aspectName === 'Trine' || aspectName === 'Square') return 2.5;
    return 2;
  }

  // Nodes
  if (isNode) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 3;
    if (aspectName === 'Trine' || aspectName === 'Square') return 2.5;
    return 2;
  }

  // Inner planets (Mercury, Venus, Mars)
  if (isInner) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 2.5;
    if (aspectName === 'Trine' || aspectName === 'Square') return 2;
    return 1.5;
  }

  // Outer planets (Jupiter, Saturn, Uranus, Neptune, Pluto)
  if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 3;
  if (aspectName === 'Trine' || aspectName === 'Square') return 2.5;
  return 2;
};

// Calculate angular difference
const getAngularDifference = (angle1: number, angle2: number): number => {
  let diff = Math.abs(angle1 - angle2);
  if (diff > 180) diff = 360 - diff;
  return diff;
};

// Get house number for a planet based on house system
// firstHouseLongitude is the longitude of the first house cusp (ascendant/sun/moon/manual)
const getHouseNumberFromLongitude = (
  planetLongitude: number,
  firstHouseLongitude: number,
  houseSystem: string
): number => {
  if (houseSystem === 'whole-sign') {
    // Whole Sign: each house starts at 0° of a sign
    // Get the sign of the first house cusp
    const firstHouseSign = Math.floor(firstHouseLongitude / 30);
    const planetSign = Math.floor(planetLongitude / 30);

    // Calculate house number based on sign difference
    let houseNumber = ((planetSign - firstHouseSign) % 12);
    if (houseNumber < 0) houseNumber += 12;

    return houseNumber + 1; // Houses are 1-indexed
  } else {
    // Placidus/Equal: equal 30° divisions from ascendant
    let diff = planetLongitude - firstHouseLongitude;

    // Normalize to 0-360 range
    while (diff < 0) diff += 360;
    while (diff >= 360) diff -= 360;

    // Each house is 30 degrees
    const houseNumber = Math.floor(diff / 30) + 1;

    // Ensure house number is between 1 and 12
    return ((houseNumber - 1) % 12) + 1;
  }
};

// Format house ordinal
const getOrdinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

// Helper function to check if natal planet aspects the midpoint of transit-to-transit aspect
const checkNatalToTransitAspect = (
  natalPlanetName: string,
  natalLongitude: number,
  transit1Longitude: number,
  transit2Longitude: number
): { aspect: any; orb: number } | null => {
  // Calculate midpoint of the two transit planets
  let midpoint = (transit1Longitude + transit2Longitude) / 2;

  // Handle cases where midpoint crosses 0° Aries
  if (Math.abs(transit1Longitude - transit2Longitude) > 180) {
    midpoint = (midpoint + 180) % 360;
  }

  // Check all aspect types
  for (const aspect of ASPECT_TYPES) {
    const expectedAngle = aspect.angle;
    const actualAngle = getAngularDifference(natalLongitude, midpoint);
    const orb = Math.abs(actualAngle - expectedAngle);

    // Use planet-specific orb for natal-to-midpoint aspects
    const maxOrb = getNatalToMidpointOrb(natalPlanetName, aspect.name);
    if (orb <= maxOrb) {
      return { aspect, orb };
    }
  }

  return null;
};

export const NatalToTransitCalendar: React.FC<NatalToTransitCalendarProps> = ({
  natalDate,
  natalLatitude,
  natalLongitude,
  natalTimezone,
  utcOffset,
  firstHouseReference,
  manualFirstHouseSign = 'Aries',
  cityName = '',
  houseSystem
}) => {
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(() => {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(today.setDate(diff));
  });

  const [expandedDayIndex, setExpandedDayIndex] = useState<number | null>(null);
  const [expandedAspectIndex, setExpandedAspectIndex] = useState<{day: number, aspect: number} | null>(null);
  const [dailyBriefingIndex, setDailyBriefingIndex] = useState<number | null>(null);

  // Convert natal date to UTC accounting for birth location timezone
  // Same logic as SimpleWheelFixed
  const natalDateUTC = useMemo(() => {
    const year = natalDate.getFullYear();
    const month = natalDate.getMonth();
    const day = natalDate.getDate();
    const hours = natalDate.getHours();
    const minutes = natalDate.getMinutes();
    const seconds = natalDate.getSeconds();

    // Create UTC date by treating the displayed time as birth location time
    // then adjusting by the birth location's UTC offset
    return new Date(Date.UTC(year, month, day, hours, minutes, seconds) - utcOffset * 60 * 60 * 1000);
  }, [natalDate, utcOffset]);

  // Calculate natal positions once (using UTC-adjusted date)
  const natalPositions = useMemo(() => {
    const positions = calculatePlanetaryPositions(natalDateUTC);
    return positions;
  }, [natalDateUTC]);

  // Calculate ascendant longitude (returns a number, not an object)
  const ascendantLongitude = useMemo(() => {
    return calculateAscendant(natalDateUTC, natalLatitude, natalLongitude);
  }, [natalDateUTC, natalLatitude, natalLongitude]);

  // Determine first house longitude based on selected reference
  const firstHouseLongitude = useMemo(() => {
    if (firstHouseReference === 'ascendant') {
      return ascendantLongitude;
    } else if (firstHouseReference === 'sun') {
      const sunPos = natalPositions.find(p => p.name === 'Sun');
      return sunPos?.longitude || 0;
    } else if (firstHouseReference === 'moon') {
      const moonPos = natalPositions.find(p => p.name === 'Moon');
      return moonPos?.longitude || 0;
    } else {
      // Manual: convert sign name to longitude (0° of that sign)
      const signIdx = ZODIAC_SIGNS.indexOf(manualFirstHouseSign);
      return signIdx >= 0 ? signIdx * 30 : 0;
    }
  }, [firstHouseReference, ascendantLongitude, natalPositions, manualFirstHouseSign]);

  // Convert first house longitude to zodiac sign
  const ascendantSign = useMemo(() => {
    const signIndex = Math.floor(firstHouseLongitude / 30) % 12;
    return ZODIAC_SIGNS[signIndex];
  }, [firstHouseLongitude]);

  // Add houses to natal planets
  const natalPlanetsWithHouses = useMemo(() => {
    return natalPositions.map(planet => ({
      ...planet,
      house: getHouseNumberFromLongitude(planet.longitude, firstHouseLongitude, houseSystem)
    }));
  }, [natalPositions, firstHouseLongitude, houseSystem]);

  // Calculate aspects for each day of the week
  const weeklyAspects = useMemo(() => {
    const days = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(currentWeekStart);
      date.setDate(date.getDate() + i);

      // Calculate transit positions for this day
      const transitPositions = calculatePlanetaryPositions(date);
      const transitPlanetsWithHouses = transitPositions.map(planet => ({
        ...planet,
        house: getHouseNumberFromLongitude(planet.longitude, firstHouseLongitude, houseSystem)
      }));

      // First, find all transit-to-transit aspects for this day
      // EXCLUDE Moon from transit-to-transit aspects
      // EXCLUDE North Node opposition South Node (always 180°)
      const transitToTransitAspects: any[] = [];
      for (let j = 0; j < transitPlanetsWithHouses.length; j++) {
        for (let k = j + 1; k < transitPlanetsWithHouses.length; k++) {
          const planet1 = transitPlanetsWithHouses[j];
          const planet2 = transitPlanetsWithHouses[k];

          // Skip if either planet is Moon
          if (planet1.name === 'Moon' || planet2.name === 'Moon') {
            continue;
          }

          // Skip North Node opposition South Node (always opposite)
          const isNodePair = (
            (planet1.name === 'North Node' && planet2.name === 'South Node') ||
            (planet1.name === 'South Node' && planet2.name === 'North Node')
          );
          if (isNodePair) {
            continue;
          }

          for (const aspectType of ASPECT_TYPES) {
            const angDiff = getAngularDifference(planet1.longitude, planet2.longitude);
            const orbDiff = Math.abs(angDiff - aspectType.angle);
            const maxOrb = getTransitToTransitOrb(planet1.name, planet2.name, aspectType.name);

            if (orbDiff <= maxOrb) {
              transitToTransitAspects.push({
                transit1: planet1,
                transit2: planet2,
                aspect: {
                  ...aspectType,
                  actualOrb: orbDiff
                }
              });
            }
          }
        }
      }

      // Now check if any natal planet aspects the midpoint of these transit-to-transit aspects
      const natalToTransitAspects: any[] = [];

      for (const transitAspect of transitToTransitAspects) {
        for (const natalPlanet of natalPlanetsWithHouses) {
          const aspectCheck = checkNatalToTransitAspect(
            natalPlanet.name,
            natalPlanet.longitude,
            transitAspect.transit1.longitude,
            transitAspect.transit2.longitude
          );

          if (aspectCheck) {
            natalToTransitAspects.push({
              natal: natalPlanet,
              transitAspect: transitAspect,
              aspect: {
                ...aspectCheck.aspect,
                actualOrb: aspectCheck.orb
              }
            });
          }
        }
      }

      // For any natal-to-transit activation involving a node, generate the companion entry
      // e.g. if natal Mercury sextile (Mars opp South Node) exists, also show Mercury trine (Mars conj North Node)
      const COMPLEMENT_ASPECT_MAP: Record<string, string> = {
        'Conjunction': 'Opposition', 'Opposition': 'Conjunction',
        'Trine': 'Sextile', 'Sextile': 'Trine',
        'Square': 'Square'
      };

      const nodeCompanionActivations: typeof natalToTransitAspects = [];
      for (const activation of natalToTransitAspects) {
        const ta = activation.transitAspect;
        const t1IsNode = ta.transit1.name === 'North Node' || ta.transit1.name === 'South Node';
        const t2IsNode = ta.transit2.name === 'North Node' || ta.transit2.name === 'South Node';
        if (!t1IsNode && !t2IsNode) continue;

        // Get the complement transit aspect name (conj↔opp, trine↔sextile, square↔square)
        const complementTransitAspectName = COMPLEMENT_ASPECT_MAP[ta.aspect.name];
        if (!complementTransitAspectName) continue;
        const complementTransitAspectType = ASPECT_TYPES.find(a => a.name === complementTransitAspectName);
        if (!complementTransitAspectType) continue;

        // Get the complement natal aspect name
        const complementNatalAspectName = COMPLEMENT_ASPECT_MAP[activation.aspect.name];
        if (!complementNatalAspectName) continue;
        const complementNatalAspectType = ASPECT_TYPES.find(a => a.name === complementNatalAspectName);
        if (!complementNatalAspectType) continue;

        // Find the other node
        const nodeInAspect = t1IsNode ? ta.transit1 : ta.transit2;
        const nonNode = t1IsNode ? ta.transit2 : ta.transit1;
        const otherNodeName = nodeInAspect.name === 'North Node' ? 'South Node' : 'North Node';
        const otherNode = transitPlanetsWithHouses.find(p => p.name === otherNodeName);
        if (!otherNode) continue;

        // Check this companion doesn't already exist
        const alreadyExists = natalToTransitAspects.some(existing =>
          existing.natal.name === activation.natal.name &&
          ((existing.transitAspect.transit1.name === nonNode.name && existing.transitAspect.transit2.name === otherNodeName) ||
           (existing.transitAspect.transit1.name === otherNodeName && existing.transitAspect.transit2.name === nonNode.name)) &&
          existing.transitAspect.aspect.name === complementTransitAspectName
        ) || nodeCompanionActivations.some(existing =>
          existing.natal.name === activation.natal.name &&
          ((existing.transitAspect.transit1.name === nonNode.name && existing.transitAspect.transit2.name === otherNodeName) ||
           (existing.transitAspect.transit1.name === otherNodeName && existing.transitAspect.transit2.name === nonNode.name)) &&
          existing.transitAspect.aspect.name === complementTransitAspectName
        );
        if (alreadyExists) continue;

        // Calculate orbs for the companion
        const transitOrbDiff = Math.abs(getAngularDifference(nonNode.longitude, otherNode.longitude) - complementTransitAspectType.angle);
        const natalOrbDiff = activation.aspect.actualOrb; // Similar orb since nodes are exactly opposite

        nodeCompanionActivations.push({
          natal: activation.natal,
          transitAspect: {
            transit1: nonNode,
            transit2: otherNode,
            aspect: {
              ...complementTransitAspectType,
              actualOrb: transitOrbDiff
            }
          },
          aspect: {
            ...complementNatalAspectType,
            actualOrb: natalOrbDiff
          }
        });
      }
      natalToTransitAspects.push(...nodeCompanionActivations);

      // Sort by planet speed (fastest to slowest: Moon, Sun, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto, Nodes)
      natalToTransitAspects.sort((a, b) => {
        const speedA = PLANET_SPEED_ORDER[a.natal.name] || 99;
        const speedB = PLANET_SPEED_ORDER[b.natal.name] || 99;
        return speedA - speedB;
      });

      days.push({
        date,
        aspects: natalToTransitAspects
      });
    }

    return days;
  }, [currentWeekStart, firstHouseLongitude, natalPlanetsWithHouses, houseSystem]);

  const handlePreviousWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() - 7);
    setCurrentWeekStart(newStart);
    setExpandedDayIndex(null);
    setExpandedAspectIndex(null);
  };

  const handleNextWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() + 7);
    setCurrentWeekStart(newStart);
    setExpandedDayIndex(null);
    setExpandedAspectIndex(null);
  };

  const handleToday = () => {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    setCurrentWeekStart(new Date(today.setDate(diff)));
    setExpandedDayIndex(null);
    setExpandedAspectIndex(null);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
        Natal to Transit-Transit Calendar
      </h2>

      {/* Info Box */}
      <div style={{
        background: '#e3f2fd',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '1px solid #90caf9'
      }}>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
          <strong>About this calendar:</strong> Shows when your natal planets aspect the midpoint of transit-to-transit configurations.
          These are powerful activation points where your birth chart themes trigger and color current planetary dynamics.
        </p>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Birth Chart:</strong> {natalDate.toLocaleDateString()} • {cityName || `${natalLatitude.toFixed(4)}°, ${natalLongitude.toFixed(4)}°`}
        </p>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Ascendant Reference:</strong> {firstHouseReference === 'ascendant' ? `Ascendant (${ascendantSign})` : firstHouseReference === 'sun' ? 'Sun Sign' : firstHouseReference === 'moon' ? 'Moon Sign' : `Manual (${manualFirstHouseSign})`}
        </p>
        {firstHouseReference === 'ascendant' && (
          <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: '1.6', color: '#666' }}>
            <strong>Calculated Ascendant:</strong> {ascendantSign} (Longitude: {ascendantLongitude.toFixed(2)}°)
          </p>
        )}
        <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: '1.6', color: '#666' }}>
          <strong>1st House Cusp:</strong> {ascendantSign} {Math.floor(firstHouseLongitude % 30)}° (Longitude: {firstHouseLongitude.toFixed(2)}°)
        </p>
        <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: '1.6', color: '#666' }}>
          <strong>House System:</strong> {houseSystem === 'whole-sign' ? 'Whole Sign' : houseSystem === 'placidus' ? 'Placidus (simplified as Equal House)' : 'Equal House'}
        </p>
      </div>

      {/* Natal Chart Planetary Positions Summary */}
      <div style={{
        background: '#fff3e0',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '1px solid #ffb74d'
      }}>
        <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#e65100' }}>
          Your Natal Chart Planetary Positions
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '10px',
          fontSize: '13px'
        }}>
          {natalPlanetsWithHouses.map(planet => (
            <div
              key={planet.name}
              style={{
                padding: '8px',
                backgroundColor: 'white',
                borderRadius: '5px',
                border: '1px solid #ffe0b2'
              }}
            >
              <strong>{PLANET_SYMBOLS[planet.name]} {planet.name}:</strong>
              <br />
              <span style={{ fontSize: '13px', color: '#333', fontWeight: '600' }}>
                {planet.sign} {Math.floor(planet.degreeInSign)}°{Math.floor((planet.degreeInSign % 1) * 60)}'
              </span>
              <br />
              <span style={{ fontSize: '12px', color: '#e65100', fontWeight: 'bold' }}>
                {getOrdinal(planet.house)} House
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Week Navigation */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <button
          onClick={handlePreviousWeek}
          style={{
            padding: '10px 20px',
            fontSize: '14px',
            backgroundColor: '#4a90e2',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          ← Previous Week
        </button>
        <button
          onClick={handleToday}
          style={{
            padding: '10px 20px',
            fontSize: '14px',
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          This Week
        </button>
        <button
          onClick={handleNextWeek}
          style={{
            padding: '10px 20px',
            fontSize: '14px',
            backgroundColor: '#4a90e2',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
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
        marginTop: '20px'
      }}>
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, idx) => (
          <div
            key={idx}
            style={{
              padding: '10px',
              backgroundColor: '#f5f5f5',
              borderRadius: '5px 5px 0 0',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: '14px'
            }}
          >
            {day}
          </div>
        ))}

        {weeklyAspects.map((day, dayIdx) => {
          const isToday = day.date.toDateString() === new Date().toDateString();
          const isExpanded = expandedDayIndex === dayIdx;

          return (
            <div
              key={dayIdx}
              style={{
                border: isToday ? '3px solid #2ecc71' : '1px solid #ddd',
                borderRadius: '8px',
                padding: '10px',
                minHeight: '120px',
                backgroundColor: 'white',
                position: 'relative'
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: isToday ? '#2ecc71' : '#333'
                }}
              >
                {day.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </div>

              {day.aspects.length > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDailyBriefingIndex(dailyBriefingIndex === dayIdx ? null : dayIdx);
                    setExpandedAspectIndex(null);
                  }}
                  style={{
                    width: '100%',
                    padding: '4px 8px',
                    marginBottom: '6px',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    backgroundColor: dailyBriefingIndex === dayIdx ? '#1a237e' : '#3f51b5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    letterSpacing: '0.5px'
                  }}
                >
                  Daily Briefing
                </button>
              )}

              {day.aspects.length > 0 ? (
                <div>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>
                    {day.aspects.length} activation{day.aspects.length !== 1 ? 's' : ''}
                  </div>

                  {/* Show top 3 aspects inline */}
                  {day.aspects.slice(0, 3).map((aspect, aspectIdx) => (
                    <div
                      key={aspectIdx}
                      onClick={() => {
                        if (expandedAspectIndex?.day === dayIdx && expandedAspectIndex?.aspect === aspectIdx) {
                          setExpandedAspectIndex(null);
                        } else {
                          setExpandedAspectIndex({ day: dayIdx, aspect: aspectIdx });
                          setExpandedDayIndex(dayIdx);
                        }
                      }}
                      style={{
                        fontSize: '11px',
                        padding: '4px',
                        marginBottom: '3px',
                        backgroundColor: `${PLANET_COLORS[aspect.natal.name]}40`,
                        borderRadius: '3px',
                        cursor: 'pointer',
                        border: expandedAspectIndex?.day === dayIdx && expandedAspectIndex?.aspect === aspectIdx
                          ? `3px solid ${aspect.aspect.color}`
                          : `2px solid ${aspect.aspect.color}80`
                      }}
                      title={`Orb: ${aspect.aspect.actualOrb.toFixed(2)}°`}
                    >
                      {PLANET_SYMBOLS[aspect.natal.name]} →
                      ({PLANET_SYMBOLS[aspect.transitAspect.transit1.name]} {aspect.transitAspect.aspect.symbol} {PLANET_SYMBOLS[aspect.transitAspect.transit2.name]})
                    </div>
                  ))}

                  {day.aspects.length > 3 && (
                    <div
                      onClick={() => setExpandedDayIndex(isExpanded ? null : dayIdx)}
                      style={{
                        fontSize: '11px',
                        color: '#4a90e2',
                        cursor: 'pointer',
                        marginTop: '5px',
                        textDecoration: 'underline'
                      }}
                    >
                      {isExpanded ? 'Show less' : `+${day.aspects.length - 3} more`}
                    </div>
                  )}

                  {/* Expanded view of all aspects for this day */}
                  {isExpanded && day.aspects.length > 3 && (
                    <div style={{ marginTop: '10px' }}>
                      {day.aspects.slice(3).map((aspect, aspectIdx) => (
                        <div
                          key={aspectIdx + 3}
                          onClick={() => {
                            const fullIdx = aspectIdx + 3;
                            if (expandedAspectIndex?.day === dayIdx && expandedAspectIndex?.aspect === fullIdx) {
                              setExpandedAspectIndex(null);
                            } else {
                              setExpandedAspectIndex({ day: dayIdx, aspect: fullIdx });
                            }
                          }}
                          style={{
                            fontSize: '11px',
                            padding: '4px',
                            marginBottom: '3px',
                            backgroundColor: `${PLANET_COLORS[aspect.natal.name]}40`,
                            borderRadius: '3px',
                            cursor: 'pointer',
                            border: expandedAspectIndex?.day === dayIdx && expandedAspectIndex?.aspect === (aspectIdx + 3)
                              ? `3px solid ${aspect.aspect.color}`
                              : `2px solid ${aspect.aspect.color}80`
                          }}
                          title={`Orb: ${aspect.aspect.actualOrb.toFixed(2)}°`}
                        >
                          {PLANET_SYMBOLS[aspect.natal.name]} →
                          ({PLANET_SYMBOLS[aspect.transitAspect.transit1.name]} {aspect.transitAspect.aspect.symbol} {PLANET_SYMBOLS[aspect.transitAspect.transit2.name]})
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ fontSize: '12px', color: '#999', fontStyle: 'italic' }}>
                  No activations
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Aspect Interpretation Panel */}
      {expandedAspectIndex !== null && weeklyAspects[expandedAspectIndex.day] && (
        <div style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          border: '2px solid #4a90e2'
        }}>
          {(() => {
            const aspect = weeklyAspects[expandedAspectIndex.day].aspects[expandedAspectIndex.aspect];
            const date = weeklyAspects[expandedAspectIndex.day].date;

            // Get activation manifestations
            const manifestations = getNatalActivationManifestations(
              aspect.natal.name,
              aspect.natal.house,
              aspect.transitAspect.transit1.name,
              aspect.transitAspect.transit1.house,
              aspect.transitAspect.transit2.name,
              aspect.transitAspect.transit2.house,
              aspect.aspect.name,
              aspect.transitAspect.aspect.name
            );

            return (
              <>
                <h3 style={{ marginTop: 0, color: '#4a90e2' }}>
                  {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </h3>

                <div style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: aspect.aspect.color
                }}>
                  {PLANET_SYMBOLS[aspect.natal.name]} {aspect.natal.name} ({getOrdinal(aspect.natal.house)} house)
                  {' '}{aspect.aspect.symbol}{' '}
                  ({PLANET_SYMBOLS[aspect.transitAspect.transit1.name]} {aspect.transitAspect.transit1.name}
                  {' '}{aspect.transitAspect.aspect.symbol}{' '}
                  {PLANET_SYMBOLS[aspect.transitAspect.transit2.name]} {aspect.transitAspect.transit2.name})
                </div>

                <div style={{
                  fontSize: '12px',
                  color: '#666',
                  marginBottom: '15px'
                }}>
                  Orb: {aspect.aspect.actualOrb.toFixed(2)}°
                </div>

                <div style={{
                  whiteSpace: 'pre-wrap',
                  lineHeight: '1.6',
                  fontSize: '14px'
                }}>
                  <strong>Natal Planet Activation:</strong>
                  <br />
                  Your natal {aspect.natal.name} in the {getOrdinal(aspect.natal.house)} house is forming a {aspect.aspect.name.toLowerCase()} to a transit-to-transit aspect configuration. This means your natal {aspect.natal.name} is activating and coloring the dynamic between transiting {aspect.transitAspect.transit1.name} and {aspect.transitAspect.transit2.name}.

                  <br /><br />
                  <strong>The Transit Aspect Being Activated:</strong>
                  <br />
                  Currently, transiting {aspect.transitAspect.transit1.name} (in your {getOrdinal(aspect.transitAspect.transit1.house)} house) is forming a {aspect.transitAspect.aspect.name.toLowerCase()} to transiting {aspect.transitAspect.transit2.name} (in your {getOrdinal(aspect.transitAspect.transit2.house)} house).

                  <br /><br />
                  <strong>How Your Natal {aspect.natal.name} in the {getOrdinal(aspect.natal.house)} House Activates This Transit:</strong>
                  <br />
                  {manifestations.length > 0
                    ? manifestations.map(m => `• ${m}`).join('\n')
                    : `Your natal ${aspect.natal.name} from the {getOrdinal(aspect.natal.house)} house brings its energy to this transit configuration. The themes of your ${getOrdinal(aspect.natal.house)} house will be especially prominent in how you experience this ${aspect.transitAspect.transit1.name}-${aspect.transitAspect.transit2.name} transit.`}

                  <br /><br />
                  <strong>Working With This:</strong>
                  <br />
                  {aspect.aspect.name === 'Square' || aspect.aspect.name === 'Opposition'
                    ? `Use the friction to grow. The challenge is pushing you to evolve how you handle both your natal ${getOrdinal(aspect.natal.house)} house themes and the current transit circumstances.`
                    : `Take advantage of this supportive energy. Your natal strengths are perfectly positioned to help you navigate the current transits successfully.`}
                </div>

                <button
                  onClick={() => setExpandedAspectIndex(null)}
                  style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#4a90e2',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  Close
                </button>
              </>
            );
          })()}
        </div>
      )}

      {/* Daily Briefing Panel */}
      {dailyBriefingIndex !== null && weeklyAspects[dailyBriefingIndex] && (() => {
        const dayData = weeklyAspects[dailyBriefingIndex];
        const activationsForSummary = dayData.aspects.map((a: any) => ({
          natalPlanet: a.natal.name,
          natalHouse: a.natal.house,
          transit1Planet: a.transitAspect.transit1.name,
          transit1House: a.transitAspect.transit1.house,
          transit2Planet: a.transitAspect.transit2.name,
          transit2House: a.transitAspect.transit2.house,
          natalAspectType: a.aspect.name,
          transitAspectType: a.transitAspect.aspect.name,
          orb: a.aspect.actualOrb
        }));
        const summary = generateDailySummary(activationsForSummary);

        const intensityColors: Record<string, { bg: string; border: string; text: string }> = {
          'Quiet': { bg: '#e8f5e9', border: '#66bb6a', text: '#2e7d32' },
          'Active': { bg: '#e3f2fd', border: '#42a5f5', text: '#1565c0' },
          'Intense': { bg: '#fff3e0', border: '#ffa726', text: '#e65100' },
          'Pivotal': { bg: '#fce4ec', border: '#ef5350', text: '#b71c1c' }
        };
        const iColors = intensityColors[summary.intensity];
        const intensityBars = Array(4).fill(0).map((_, i) => i < summary.intensityScore);

        return (
          <div style={{
            marginTop: '30px',
            padding: '25px',
            backgroundColor: '#fafafa',
            borderRadius: '12px',
            border: `3px solid ${iColors.border}`,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <h3 style={{ margin: 0, color: '#1a237e', fontSize: '20px' }}>
                  Daily Cosmic Briefing
                </h3>
                <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>
                  {dayData.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
              <button
                onClick={() => setDailyBriefingIndex(null)}
                style={{
                  padding: '6px 16px',
                  backgroundColor: '#666',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}
              >
                Close
              </button>
            </div>

            {/* Intensity Meter */}
            <div style={{
              padding: '12px 16px',
              backgroundColor: iColors.bg,
              borderRadius: '8px',
              border: `1px solid ${iColors.border}`,
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: iColors.text, minWidth: '80px' }}>
                {summary.intensity}
              </div>
              <div style={{ display: 'flex', gap: '4px' }}>
                {intensityBars.map((filled, i) => (
                  <div key={i} style={{
                    width: '24px',
                    height: '10px',
                    borderRadius: '3px',
                    backgroundColor: filled ? iColors.border : '#e0e0e0',
                    transition: 'background-color 0.3s'
                  }} />
                ))}
              </div>
              <div style={{ fontSize: '13px', color: '#555', flex: 1 }}>
                {summary.overview}
              </div>
            </div>

            {/* Focus Areas */}
            {summary.focusAreas.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', color: '#333' }}>
                  Life Areas in Focus
                </h4>
                {summary.focusAreas.map((area, areaIdx) => (
                  <div key={areaIdx} style={{
                    padding: '12px 16px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                    marginBottom: '10px'
                  }}>
                    <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#1a237e', marginBottom: '8px' }}>
                      {area.house}{['th','st','nd','rd'][area.house % 100 > 3 && area.house % 100 < 21 ? 0 : area.house % 10 > 3 ? 0 : area.house % 10] || 'th'} House — {area.domain.charAt(0).toUpperCase() + area.domain.slice(1)}
                      <span style={{ fontSize: '12px', color: '#888', fontWeight: 'normal', marginLeft: '8px' }}>
                        ({area.activations.length} activation{area.activations.length > 1 ? 's' : ''})
                      </span>
                    </div>
                    {area.activations.map((act, actIdx) => (
                      <div key={actIdx} style={{
                        padding: '8px 12px',
                        marginBottom: actIdx < area.activations.length - 1 ? '6px' : 0,
                        backgroundColor: act.isHard ? '#fff8e1' : '#e8f5e9',
                        borderRadius: '6px',
                        borderLeft: `4px solid ${act.isHard ? '#ff9800' : '#4caf50'}`,
                        fontSize: '13px'
                      }}>
                        <div style={{ fontWeight: '600', marginBottom: '4px', color: act.isHard ? '#e65100' : '#2e7d32' }}>
                          {act.natalPlanet} — {act.transitTheme}
                          <span style={{ fontSize: '11px', fontWeight: 'normal', color: '#888', marginLeft: '6px' }}>
                            via {act.transitPair}
                          </span>
                        </div>
                        {act.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} style={{ color: '#555', lineHeight: '1.5', paddingLeft: '8px' }}>
                            • {bullet}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Tensions */}
            {summary.tensions.length > 0 && (
              <div style={{
                padding: '14px 16px',
                backgroundColor: '#fff3e0',
                borderRadius: '8px',
                border: '1px solid #ffcc80',
                marginBottom: '15px'
              }}>
                <h4 style={{ margin: '0 0 10px 0', fontSize: '15px', color: '#e65100' }}>
                  Watch Out For
                </h4>
                {summary.tensions.map((t, i) => (
                  <div key={i} style={{ fontSize: '13px', color: '#bf360c', lineHeight: '1.6', marginBottom: '6px' }}>
                    • {t}
                  </div>
                ))}
              </div>
            )}

            {/* Opportunities */}
            {summary.opportunities.length > 0 && (
              <div style={{
                padding: '14px 16px',
                backgroundColor: '#e8f5e9',
                borderRadius: '8px',
                border: '1px solid #a5d6a7',
                marginBottom: '15px'
              }}>
                <h4 style={{ margin: '0 0 10px 0', fontSize: '15px', color: '#2e7d32' }}>
                  Lean Into
                </h4>
                {summary.opportunities.map((o, i) => (
                  <div key={i} style={{ fontSize: '13px', color: '#1b5e20', lineHeight: '1.6', marginBottom: '6px' }}>
                    • {o}
                  </div>
                ))}
              </div>
            )}

            {/* Top Focus */}
            <div style={{
              padding: '14px 16px',
              backgroundColor: '#e8eaf6',
              borderRadius: '8px',
              border: '2px solid #5c6bc0',
              textAlign: 'center'
            }}>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '15px', color: '#283593' }}>
                Today's #1 Focus
              </h4>
              <div style={{ fontSize: '14px', color: '#1a237e', lineHeight: '1.6', fontWeight: '500' }}>
                {summary.topFocus}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Legend */}
      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        border: '1px solid #ddd'
      }}>
        <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#333' }}>
          Color Legend
        </h3>

        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          {/* Planet Colors */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
              Natal Planet Colors (Background)
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
              gap: '8px'
            }}>
              {Object.entries(PLANET_COLORS).map(([planet, color]) => (
                <div key={planet} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: `${color}40`,
                    border: '1px solid #ccc',
                    borderRadius: '3px'
                  }} />
                  <span>{PLANET_SYMBOLS[planet]} {planet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Aspect Colors */}
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
              Aspect Colors (Border)
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
              gap: '8px'
            }}>
              {ASPECT_TYPES.map((aspect) => (
                <div key={aspect.name} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'white',
                    border: `3px solid ${aspect.color}`,
                    borderRadius: '3px'
                  }} />
                  <span>{aspect.symbol} {aspect.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '15px',
          padding: '10px',
          backgroundColor: '#fff',
          borderRadius: '5px',
          fontSize: '12px',
          color: '#666'
        }}>
          <strong>How to read:</strong> The background color shows which natal planet is activated.
          The border color shows the type of aspect to the transit-to-transit midpoint.
        </div>
      </div>
    </div>
  );
};
