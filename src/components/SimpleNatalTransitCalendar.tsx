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

  // Define orbs based on planet speed (wider for slower planets)
  const getHouseCuspOrb = (planetName: string): number => {
    const orbs: Record<string, number> = {
      'Sun': 1,
      'Mercury': 1,
      'Venus': 1,
      'Mars': 1.5,
      'Jupiter': 2,
      'Saturn': 2.5,
      'Uranus': 3,
      'Neptune': 3,
      'Pluto': 3,
      'North Node': 2,
      'South Node': 2
    };
    return orbs[planetName] || 1;
  };

  transitPlanets.forEach((transitPlanet) => {
    // Skip Moon
    if (transitPlanet.name === 'Moon') return;

    const orbAllowance = getHouseCuspOrb(transitPlanet.name);

    natalHouseCusps.forEach((cusp, houseIndex) => {
      let diff = Math.abs(transitPlanet.longitude - cusp);
      diff = diff > 180 ? 360 - diff : diff;

      // Within orb of house cusp
      if (diff <= orbAllowance) {
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
const calculateHousePosition = (
  planetLongitude: number,
  houseCusps: number[],
  houseSystem: string = 'placidus'
): number => {
  // Normalize planet longitude to 0-360
  let normPlanet = planetLongitude % 360;
  if (normPlanet < 0) normPlanet += 360;

  // For Whole Sign houses, determine by zodiac sign
  if (houseSystem === 'whole-sign') {
    const planetSign = Math.floor(normPlanet / 30); // 0-11
    const firstHouseSign = Math.floor(houseCusps[0] / 30); // Sign of Ascendant

    // Calculate house number based on sign distance from Ascendant sign
    // Same sign as Ascendant = 1st house, next sign = 2nd house, etc.
    const houseNum = ((planetSign - firstHouseSign + 12) % 12) + 1;
    return houseNum > 12 ? houseNum - 12 : houseNum;
  }

  // For other systems (Placidus, Equal), use cusp-based calculation
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
        // Whole sign: houses by sign, but cusps show Ascendant degree for tracking transits
        houseCusps = [];
        for (let i = 0; i < 12; i++) {
          houseCusps.push((firstHouseLongitude + (i * 30)) % 360);
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
                const house = calculateHousePosition(planet.longitude, natalAscendant.houseCusps, houseSystem);
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
                          ? calculateHousePosition(natalPlanetObj.longitude, natalAscendant.houseCusps, houseSystem)
                          : 1;

                        // Find which natal house the transiting planet is currently in
                        // For natal-to-transit aspects, we use the NATAL house cusps to determine
                        // which natal house the transiting planet is occupying
                        const transitHouse = natalAscendant?.houseCusps
                          ? calculateHousePosition(aspect.transitLongitude, natalAscendant.houseCusps, houseSystem)
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
                      ? calculateHousePosition(natalPlanetObj.longitude, natalAscendant.houseCusps, houseSystem)
                      : null;

                    // Determine eclipse house (where the eclipse point is located in natal chart)
                    const eclipseHouse = natalAscendant?.houseCusps
                      ? calculateHousePosition(selectedAspect.transitLongitude, natalAscendant.houseCusps, houseSystem)
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
                      ? 'SOLAR ECLIPSE - A cosmic reset button. Solar eclipses mark powerful new beginnings, often bringing unexpected opportunities or circumstances that redirect your path. They plant seeds that unfold over the next 6 months. What begins now carries a sense of fate or destiny.'
                      : selectedAspect.eclipseType.includes('Lunar')
                      ? 'LUNAR ECLIPSE - A moment of revelation and culmination. Lunar eclipses illuminate what has been hidden, bring situations to completion, and often trigger necessary endings or releases. They reveal truths and bring emotional clarity about what must change.'
                      : selectedAspect.eclipseType.includes('New Moon')
                      ? 'NEW MOON - A monthly reset for fresh starts. While not an eclipse, this lunation carries potent energy for setting intentions and initiating new cycles. Plant seeds consciously during this window.'
                      : 'FULL MOON - A time of illumination and culmination. This lunation brings matters to fullness, reveals what was hidden, and often requires release of what no longer serves.';

                    let interpretation = `${selectedAspect.eclipseType} ${selectedAspect.aspect} your natal ${selectedAspect.natalPlanet}:\n\n`;
                    interpretation += `${eclipseTypeNote}\n\n`;
                    interpretation += `ASPECT QUALITY: ${aspectQuality}\n\n`;

                    // Build the house and planet context
                    let contextText = '';
                    if (natalHouse) {
                      contextText += `Your natal ${selectedAspect.natalPlanet} in House ${natalHouse} governs ${planetThemes[selectedAspect.natalPlanet] || 'core life themes'}. `;
                    } else {
                      contextText += `Your natal ${selectedAspect.natalPlanet} governs ${planetThemes[selectedAspect.natalPlanet] || 'core life themes'}. `;
                    }

                    if (eclipseHouse) {
                      contextText += `This ${selectedAspect.eclipseType.toLowerCase()} occurs in your ${eclipseHouse}${eclipseHouse === 1 ? 'st' : eclipseHouse === 2 ? 'nd' : eclipseHouse === 3 ? 'rd' : 'th'} house, bringing ${housePredictions[eclipseHouse] || 'significant developments'}.\n\n`;
                    } else {
                      contextText += `This ${selectedAspect.eclipseType.toLowerCase()} activates your ${selectedAspect.natalPlanet} placement.\n\n`;
                    }

                    interpretation += contextText;

                    // Add specific manifestation examples based on planet and house combination
                    interpretation += `WHAT THIS MIGHT LOOK LIKE IN YOUR LIFE:\n\n`;

                    // Generate 5-6 specific manifestation examples
                    const manifestationExamples: string[] = [];

                    // Create contextual examples based on the planet being aspected and the eclipse house
                    if (selectedAspect.natalPlanet === 'Sun') {
                      if (eclipseHouse === 1) {
                        manifestationExamples.push('• You decide to dramatically change your appearance or personal style, and others notice a newfound confidence radiating from you');
                        manifestationExamples.push('• A sudden realization about your life direction causes you to rebrand yourself professionally or personally');
                      } else if (eclipseHouse === 10) {
                        manifestationExamples.push('• You receive an unexpected job offer or promotion that aligns perfectly with your life purpose');
                        manifestationExamples.push('• Your professional identity undergoes a major shift - perhaps starting your own business or changing careers entirely');
                      } else if (eclipseHouse === 7) {
                        manifestationExamples.push('• A significant relationship either begins or reaches a turning point that affects your sense of identity');
                        manifestationExamples.push('• You realize how much you\'ve been compromising your authentic self in partnerships and begin asserting your true identity');
                      }
                      manifestationExamples.push('• An authority figure recognizes your talents and opens doors you didn\'t know existed');
                      manifestationExamples.push('• Health issues or vitality shifts force you to prioritize self-care and reclaim your energy');
                    } else if (selectedAspect.natalPlanet === 'Moon') {
                      if (eclipseHouse === 4) {
                        manifestationExamples.push('• You discover you\'re moving to a new home, or family dynamics shift suddenly (pregnancy announcement, family member moving in/out)');
                        manifestationExamples.push('• Deep emotional patterns from childhood surface for healing, possibly through therapy or family conversations');
                      } else if (eclipseHouse === 7) {
                        manifestationExamples.push('• Your emotional needs in relationships become crystal clear, leading to important conversations with your partner');
                        manifestationExamples.push('• You meet someone who feels immediately familiar, or an existing relationship deepens emotionally in unexpected ways');
                      }
                      manifestationExamples.push('• You feel an overwhelming urge to declutter your living space and create a sanctuary that feels emotionally safe');
                      manifestationExamples.push('• Your relationship with your mother or maternal figures undergoes significant change');
                      manifestationExamples.push('• Intuitive abilities heighten dramatically - you have vivid dreams or strong gut feelings that prove accurate');
                    } else if (selectedAspect.natalPlanet === 'Venus') {
                      if (eclipseHouse === 2) {
                        manifestationExamples.push('• An unexpected windfall arrives, or you discover a new income stream aligned with what you love');
                        manifestationExamples.push('• You realize what you truly value has changed, leading to different spending patterns or lifestyle choices');
                      } else if (eclipseHouse === 5) {
                        manifestationExamples.push('• A whirlwind romance begins that feels fated, or an existing relationship enters a more romantic phase');
                        manifestationExamples.push('• You start a creative project that brings both joy and potential income');
                      } else if (eclipseHouse === 7) {
                        manifestationExamples.push('• You get engaged, married, or experience a significant relationship milestone');
                        manifestationExamples.push('• A business partnership forms that combines pleasure with profit');
                      }
                      manifestationExamples.push('• Your appearance or style transforms as you invest in yourself and your aesthetic');
                      manifestationExamples.push('• You attract people or opportunities that reflect your newly clarified values');
                    } else if (selectedAspect.natalPlanet === 'Mercury') {
                      if (eclipseHouse === 3) {
                        manifestationExamples.push('• You sign up for a course, workshop, or certification that opens new professional doors');
                        manifestationExamples.push('• Important news arrives from or about siblings, neighbors, or your local community');
                      } else if (eclipseHouse === 9) {
                        manifestationExamples.push('• You receive an opportunity to teach, publish, or share your knowledge with a broader audience');
                        manifestationExamples.push('• Travel plans materialize suddenly, especially to foreign countries or educational destinations');
                      }
                      manifestationExamples.push('• A crucial conversation or piece of information completely changes your perspective');
                      manifestationExamples.push('• You start a blog, podcast, or writing project that gains unexpected traction');
                      manifestationExamples.push('• Your daily commute or transportation situation changes (new car, route change, remote work begins)');
                    } else if (selectedAspect.natalPlanet === 'Mars') {
                      if (eclipseHouse === 6) {
                        manifestationExamples.push('• Your work intensity increases dramatically - new projects demand your action and initiative');
                        manifestationExamples.push('• You commit to a fitness program and see rapid results, or address a health issue requiring decisive action');
                      } else if (eclipseHouse === 1) {
                        manifestationExamples.push('• You feel a surge of courage to go after what you want, taking bold action in your personal life');
                        manifestationExamples.push('• Your physical energy and assertiveness increase noticeably, causing others to respond differently');
                      }
                      manifestationExamples.push('• A conflict or competition arises that pushes you to fight for what matters');
                      manifestationExamples.push('• You start a new physical activity, sport, or take action on a goal you\'ve been postponing');
                      manifestationExamples.push('• Sexual dynamics or desires shift, potentially bringing passion into new areas');
                    } else if (selectedAspect.natalPlanet === 'Jupiter') {
                      if (eclipseHouse === 9) {
                        manifestationExamples.push('• You get accepted into a graduate program, receive a scholarship, or commit to higher education');
                        manifestationExamples.push('• International opportunities emerge - relocating abroad, working with foreign clients, or extended travel');
                      } else if (eclipseHouse === 2) {
                        manifestationExamples.push('• A financial opportunity appears that could significantly increase your income or assets');
                        manifestationExamples.push('• You realize abundance comes from generosity and begin tithing or giving more freely');
                      }
                      manifestationExamples.push('• Your optimism and faith expand, possibly through spiritual studies or philosophical exploration');
                      manifestationExamples.push('• A mentor or teacher enters your life offering wisdom and expansion');
                      manifestationExamples.push('• You feel called to give back, starting charitable work or community teaching');
                    } else if (selectedAspect.natalPlanet === 'Saturn') {
                      if (eclipseHouse === 10) {
                        manifestationExamples.push('• You receive a promotion with increased responsibility, or professional recognition for your disciplined work');
                        manifestationExamples.push('• Authority figures test you, but meeting these challenges establishes your credibility long-term');
                      } else if (eclipseHouse === 4) {
                        manifestationExamples.push('• You take on responsibility for aging parents or family property matters');
                        manifestationExamples.push('• Home repairs or foundation work become necessary, teaching you about building stability');
                      }
                      manifestationExamples.push('• A lesson about boundaries, limits, or responsibility arrives through circumstances');
                      manifestationExamples.push('• Long-term commitments are made - contracts signed, structures established');
                      manifestationExamples.push('• You face a reality check that, while sobering, helps you build something lasting');
                    } else {
                      // Generic examples for other planets
                      manifestationExamples.push('• An unexpected event catalyzes major changes in the area of life governed by your natal ' + selectedAspect.natalPlanet);
                      manifestationExamples.push('• People or opportunities arrive that feel fated, redirecting your path');
                      manifestationExamples.push('• Something that was hidden or unclear suddenly becomes obvious, demanding response');
                      manifestationExamples.push('• You make a decision or commitment that sets a new trajectory for the next 6 months');
                      manifestationExamples.push('• Synchronicities multiply around themes of ' + (planetThemes[selectedAspect.natalPlanet] || 'this planet'));
                    }

                    // Add the manifestation examples to interpretation
                    interpretation += manifestationExamples.slice(0, 6).join('\n') + '\n\n';

                    interpretation += `TIMING & MANIFESTATION:\n`;
                    interpretation += `• Peak influence: 3 days before and after the ${selectedAspect.eclipseType.toLowerCase()} date\n`;
                    interpretation += `• Unfolding period: 6 months following (watch for events around the degree of this eclipse)\n`;
                    interpretation += `• Watch for: sudden insights, fated encounters, doors opening/closing unexpectedly\n`;
                    interpretation += `• Key markers: Events now often connect to eclipses 9 or 18 years ago at similar degrees\n\n`;

                    interpretation += `HOW TO WORK WITH THIS ENERGY:\n`;
                    if (isConjunction) {
                      interpretation += `This conjunction creates a powerful reset or complete merger of energies. Expect a total new beginning in matters related to your natal ${selectedAspect.natalPlanet}. What emerges now has destiny written into it - this is not random. Pay close attention to what shows up this week, as it sets themes for the next 6 months. Don't force outcomes; instead, respond to what the universe is presenting.`;
                    } else if (isHarmonious) {
                      interpretation += `This supportive aspect brings opportunities flowing naturally with less resistance than usual. Doors open, people appear, resources become available. Trust synchronicities and follow the path of least resistance while staying aligned with your truth. Say yes to what feels right. The universe is cooperating with your growth.`;
                    } else if (isChallenging) {
                      interpretation += `This dynamic aspect creates friction and tension that force necessary evolution. What feels challenging or frustrating now is actually redirecting you toward greater authenticity and alignment. Obstacles aren't punishments - they're course corrections. Resistance creates more friction; acceptance and willingness to adapt bring breakthrough. Ask: "What is this trying to teach me?" Growth happens through the challenge.`;
                    }

                    return interpretation;
                  } else if (selectedAspect.type === 'house-cusp-crossing') {
                    // House themes and manifestations
                    const houseThemes: Record<number, {theme: string, dailyLife: string}> = {
                      1: {
                        theme: 'Self-identity, physical body, personal appearance, how others perceive you, new beginnings',
                        dailyLife: 'You may feel drawn to change your appearance (haircut, wardrobe, style). Others notice something different about you. New confidence emerges. You start introducing yourself differently or taking on a fresh persona. Physical energy shifts - either more vitality or need for body care.'
                      },
                      2: {
                        theme: 'Money, income, possessions, values, self-worth, material security, what you own',
                        dailyLife: 'Financial matters come into focus - salary negotiations, new income streams, or expenses requiring attention. You reconsider what you truly value. Shopping habits change. Questions arise about self-worth and how you earn. Possessions may need organizing or decluttering.'
                      },
                      3: {
                        theme: 'Communication, siblings, neighbors, short trips, daily errands, learning, mental activity',
                        dailyLife: 'Conversations increase. Emails, calls, and messages pile up. Siblings or neighbors become more present. Short trips or local errands multiply. You may start learning something new, writing, or teaching. Your daily commute or neighborhood dynamics shift.'
                      },
                      4: {
                        theme: 'Home, family, roots, emotional foundation, private life, parents, real estate',
                        dailyLife: 'Home becomes the center of attention - redecorating, repairs, or considering a move. Family matters need addressing. Emotions from the past surface. You may host more at home or need more privacy. Relationship with parents evolves. Domestic routines change.'
                      },
                      5: {
                        theme: 'Romance, creativity, children, fun, self-expression, hobbies, speculation, joy',
                        dailyLife: 'Romance enters or intensifies. Creative projects call for attention. If you have children, their needs become more prominent. Hobbies and leisure activities take priority. You feel more playful. Entertainment, dating, or artistic pursuits increase. Taking more risks for enjoyment.'
                      },
                      6: {
                        theme: 'Work, health, daily routines, service, coworkers, pets, wellness practices',
                        dailyLife: 'Work demands increase or job duties shift. Health requires more attention - doctor visits, new wellness routines, or diet changes. Daily schedules need adjusting. Coworkers become more significant. Pets need care. Service or helping others becomes a theme.'
                      },
                      7: {
                        theme: 'Partnerships, marriage, committed relationships, contracts, open enemies, one-on-one dynamics',
                        dailyLife: 'Relationships demand attention. Partner needs become more visible. Contracts or agreements arise. You may meet significant people. Marriage or partnership questions surface. Cooperation and compromise become necessary. Legal matters or consultations occur.'
                      },
                      8: {
                        theme: 'Shared resources, intimacy, transformation, other people\'s money, taxes, death and rebirth, psychology',
                        dailyLife: 'Joint finances need attention - loans, inheritance, taxes, or partner\'s money. Intimacy deepens or requires work. Something ends to make room for transformation. Psychological insights emerge. Power dynamics in relationships shift. Deeper conversations happen.'
                      },
                      9: {
                        theme: 'Travel, higher education, beliefs, philosophy, publishing, foreign cultures, expansion',
                        dailyLife: 'Travel opportunities arise. You may enroll in courses or workshops. Philosophical or spiritual interests deepen. Cultural experiences broaden perspective. Teaching or publishing possibilities emerge. Legal matters involving distance. Planning adventures abroad.'
                      },
                      10: {
                        theme: 'Career, public image, reputation, ambitions, authority figures, life direction, professional status',
                        dailyLife: 'Career takes center stage. Boss or authority figures notice you. Promotion opportunities or job changes arise. Public reputation matters more. Professional goals require action. You reconsider your life direction. Achievements or setbacks become visible to others.'
                      },
                      11: {
                        theme: 'Friendships, groups, social networks, hopes and dreams, community, humanitarian causes',
                        dailyLife: 'Friends become more present. Group activities or social events increase. Networking opportunities arise. You join new communities or organizations. Long-term goals clarify. Technology and social media play bigger roles. Collective efforts or causes engage you.'
                      },
                      12: {
                        theme: 'Spirituality, solitude, hidden matters, unconscious patterns, retreat, ending cycles, self-undoing',
                        dailyLife: 'Need for alone time increases. Spiritual practices deepen. Dreams become vivid. Old patterns surface for healing. You tie up loose ends. Secret matters require attention. Meditation, therapy, or retreat calls. Behind-the-scenes work. Compassion for suffering grows.'
                      }
                    };

                    // Planet energies in action
                    const planetActions: Record<string, string> = {
                      'Sun': 'Your focus, vitality, and life force',
                      'Mercury': 'Your thinking, communication, and mental energy',
                      'Venus': 'Your love, money, and desire for beauty',
                      'Mars': 'Your drive, action, and assertiveness',
                      'Jupiter': 'Your growth, optimism, and opportunities',
                      'Saturn': 'Your responsibility, discipline, and structure',
                      'Uranus': 'Your need for change, freedom, and innovation',
                      'Neptune': 'Your dreams, spirituality, and imagination',
                      'Pluto': 'Your power, transformation, and intensity',
                      'North Node': 'Your destiny and soul growth',
                      'South Node': 'Your past patterns and comfort zone'
                    };

                    const houseInfo = houseThemes[selectedAspect.house];
                    const planetAction = planetActions[selectedAspect.transitPlanet] || 'This planetary energy';

                    let interpretation = `Transit ${selectedAspect.transitPlanet} crossing your House ${selectedAspect.house} cusp:\n\n`;
                    interpretation += `HOUSE ${selectedAspect.house} THEMES:\n${houseInfo.theme}\n\n`;
                    interpretation += `${planetAction} now enters this life area, initiating a new chapter. This crossing marks a threshold moment - what begins now will develop over the coming weeks and months.\n\n`;
                    interpretation += `WHAT TO EXPECT IN DAILY LIFE:\n${houseInfo.dailyLife}\n\n`;
                    interpretation += `TIMING:\n`;
                    interpretation += `• This week: Initial activation, first signs appear\n`;
                    interpretation += `• Coming period: Full development as planet moves through house\n`;
                    interpretation += `• Key action: Pay attention to what emerges now - it sets the tone for this house's activation\n\n`;
                    interpretation += `Take initiative in these matters. The universe is opening a door in this life area - walk through it consciously.`;

                    return interpretation;
                  } else if (selectedAspect.type === 'transit-to-cusp') {
                    // House themes
                    const houseThemes: Record<number, {theme: string, dailyLife: string}> = {
                      1: {
                        theme: 'Self-identity, physical body, personal appearance, how others perceive you',
                        dailyLife: 'identity, personal presentation, confidence, physical energy, how you come across to others'
                      },
                      2: {
                        theme: 'Money, income, possessions, values, self-worth, material security',
                        dailyLife: 'finances, earning capacity, spending, possessions, self-worth, material stability'
                      },
                      3: {
                        theme: 'Communication, siblings, neighbors, short trips, learning, daily errands',
                        dailyLife: 'conversations, messages, local travel, learning, siblings, neighbors, daily commutes'
                      },
                      4: {
                        theme: 'Home, family, roots, emotional foundation, private life, parents',
                        dailyLife: 'home environment, family dynamics, emotional security, living situation, private matters'
                      },
                      5: {
                        theme: 'Romance, creativity, children, fun, self-expression, hobbies, joy',
                        dailyLife: 'romance, creative projects, leisure activities, children, entertainment, playfulness'
                      },
                      6: {
                        theme: 'Work, health, daily routines, service, coworkers, wellness',
                        dailyLife: 'job duties, health practices, daily schedules, coworker relationships, service to others'
                      },
                      7: {
                        theme: 'Partnerships, marriage, committed relationships, contracts, one-on-one dynamics',
                        dailyLife: 'significant relationships, partnerships, contracts, consultations, cooperation'
                      },
                      8: {
                        theme: 'Shared resources, intimacy, transformation, other people\'s money, psychology',
                        dailyLife: 'joint finances, intimacy, shared resources, taxes, deep psychological matters'
                      },
                      9: {
                        theme: 'Travel, higher education, beliefs, philosophy, foreign cultures, expansion',
                        dailyLife: 'travel plans, education, beliefs, cultural experiences, teaching, publishing'
                      },
                      10: {
                        theme: 'Career, public image, reputation, ambitions, authority, life direction',
                        dailyLife: 'career goals, professional reputation, public visibility, dealings with authority'
                      },
                      11: {
                        theme: 'Friendships, groups, social networks, hopes and dreams, community',
                        dailyLife: 'friendships, group activities, social networks, long-term goals, community involvement'
                      },
                      12: {
                        theme: 'Spirituality, solitude, hidden matters, unconscious patterns, endings',
                        dailyLife: 'spiritual practices, alone time, dreams, hidden matters, closure, healing'
                      }
                    };

                    // Aspect quality descriptions
                    const isHarmonious = selectedAspect.aspect === 'Trine' || selectedAspect.aspect === 'Sextile';
                    const isChallenging = selectedAspect.aspect === 'Square' || selectedAspect.aspect === 'Opposition';

                    const aspectQualities: Record<string, {nature: string, manifestation: string}> = {
                      'Trine': {
                        nature: 'HARMONIOUS FLOW - Easy, natural, supportive',
                        manifestation: 'Things in this life area flow smoothly. Opportunities arise with little resistance. Talents and resources become available. Progress feels natural. The path of least resistance leads forward. Trust what comes easily.'
                      },
                      'Sextile': {
                        nature: 'OPPORTUNITY - Supportive, cooperative, requires small action',
                        manifestation: 'Opportunities knock, but you must answer. Small efforts yield good results. Connections and resources appear when needed. Taking initiative brings rewards. The door is open - walk through it with confidence.'
                      },
                      'Square': {
                        nature: 'DYNAMIC TENSION - Challenging, motivating, growth through friction',
                        manifestation: 'Friction creates motivation for change. Obstacles push you to grow. What feels difficult now builds strength. Adjustments required. Tension between different life areas demands resolution. Push through resistance - breakthrough awaits.'
                      },
                      'Opposition': {
                        nature: 'BALANCING ACT - Awareness, compromise, integration of opposites',
                        manifestation: 'Two areas of life pull in opposite directions. Balance required. Others mirror what you need to see. External circumstances demand response. Find middle ground. Integration of opposites brings wholeness. Compromise leads to progress.'
                      }
                    };

                    // Planet energies
                    const planetActions: Record<string, string> = {
                      'Sun': 'Your vitality, ego, and life force activate',
                      'Mercury': 'Your mind, communication, and ideas engage',
                      'Venus': 'Your love, values, and desire for harmony touch',
                      'Mars': 'Your drive, action, and assertiveness trigger',
                      'Jupiter': 'Your growth, optimism, and expansion influence',
                      'Saturn': 'Your responsibility, limits, and discipline test',
                      'Uranus': 'Your need for change, freedom, and awakening stimulate',
                      'Neptune': 'Your dreams, spirituality, and imagination inspire',
                      'Pluto': 'Your power, transformation, and intensity penetrate',
                      'North Node': 'Your destiny and growth direction align with',
                      'South Node': 'Your past patterns and release process affect'
                    };

                    const houseInfo = houseThemes[selectedAspect.house];
                    const aspectQuality = aspectQualities[selectedAspect.aspect];
                    const planetAction = planetActions[selectedAspect.transitPlanet] || 'This planetary energy affects';

                    let interpretation = `Transit ${selectedAspect.transitPlanet} ${selectedAspect.aspect} House ${selectedAspect.house} cusp:\n\n`;
                    interpretation += `ASPECT NATURE:\n${aspectQuality.nature}\n\n`;
                    interpretation += `HOUSE ${selectedAspect.house} GOVERNS:\n${houseInfo.theme}\n\n`;
                    interpretation += `HOW THIS MANIFESTS:\n${planetAction} matters of ${houseInfo.dailyLife}.\n\n`;
                    interpretation += `${aspectQuality.manifestation}\n\n`;

                    if (isHarmonious) {
                      interpretation += `PRACTICAL GUIDANCE:\n`;
                      interpretation += `• Say yes to opportunities in this area\n`;
                      interpretation += `• Leverage natural talents and existing resources\n`;
                      interpretation += `• Follow what feels easy and aligned\n`;
                      interpretation += `• Small efforts create positive ripples\n`;
                      interpretation += `• Trust timing and flow`;
                    } else if (isChallenging) {
                      interpretation += `PRACTICAL GUIDANCE:\n`;
                      interpretation += `• Face challenges directly - avoidance increases difficulty\n`;
                      interpretation += `• Make necessary adjustments and compromises\n`;
                      interpretation += `• Use tension as fuel for positive change\n`;
                      interpretation += `• Patience and persistence bring breakthrough\n`;
                      interpretation += `• What you build now under pressure lasts`;
                    }

                    return interpretation;
                  } else {
                    // Regular natal-transit aspect
                    const natalPlanetObj = natalPlanets.find(p => p.name === selectedAspect.natalPlanet);
                    const natalHouse = natalPlanetObj && natalAscendant?.houseCusps
                      ? calculateHousePosition(natalPlanetObj.longitude, natalAscendant.houseCusps, houseSystem)
                      : 1;

                    const transitHouse = natalAscendant?.houseCusps
                      ? calculateHousePosition(selectedAspect.transitLongitude, natalAscendant.houseCusps, houseSystem)
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
