import React, { useState, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { calculatePlanetaryPositions, calculateAscendant } from '../utils/ephemeris';
import { generateTransitToTransitInterpretation } from '../utils/aspectInterpretations';
import { lookupCity, getCityList, getUTCOffset } from '../utils/location';

interface PersonalTransitCalendarProps {
  natalDate?: Date;
  natalLatitude?: number;
  natalLongitude?: number;
  natalTimezone?: string;
  firstHouseReference?: string;
  manualFirstHouseSign?: string;
  cityName?: string;
}

// Planet colors for visual distinction (used for aspect highlighting)
const PLANET_COLORS: Record<string, string> = {
  'Sun': '#ffde59',        // Bright Yellow
  'Moon': '#C0C0C0',       // Silver
  'Mercury': '#00FF41',    // Bright Green (distinct from Uranus)
  'Venus': '#ff66c4',      // Pink
  'Mars': '#f50909',       // Red
  'Jupiter': '#FF6600',    // Bright Orange
  'Saturn': '#8B4513',     // Saddle Brown
  'Uranus': '#00CED1',     // Dark Turquoise
  'Neptune': '#4169E1',    // Royal Blue
  'Pluto': '#800080'       // Purple
};

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

const ASPECT_TYPES = [
  { name: 'Conjunction', angle: 0, color: '#9370DB', symbol: '☌' },
  { name: 'Opposition', angle: 180, color: '#FFA500', symbol: '☍' },
  { name: 'Trine', angle: 120, color: '#0000FF', symbol: '△' },
  { name: 'Square', angle: 90, color: '#FF0000', symbol: '□' },
  { name: 'Sextile', angle: 60, color: '#00FF00', symbol: '⚹' }
];

const ZODIAC_SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Get start of week (Monday)
const getWeekStart = (date: Date): Date => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
};

// Get orb for aspect based on planet types (matching Transit Calendar settings)
const getOrb = (planet1: string, planet2: string, aspectName: string): number => {
  const innerPlanets = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'];
  const nodes = ['North Node', 'South Node'];

  const isInner1 = innerPlanets.includes(planet1);
  const isInner2 = innerPlanets.includes(planet2);
  const isNode1 = nodes.includes(planet1);
  const isNode2 = nodes.includes(planet2);

  // Moon aspects (tightest orbs)
  if (planet1 === 'Moon' || planet2 === 'Moon') {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 2;
    if (aspectName === 'Trine' || aspectName === 'Square') return 1.5;
    return 1;
  }

  // Nodes
  if (isNode1 || isNode2) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 5;
    if (aspectName === 'Trine' || aspectName === 'Square') return 4;
    return 3;
  }

  // Jupiter-Saturn specific
  if ((planet1 === 'Jupiter' && planet2 === 'Saturn') || (planet1 === 'Saturn' && planet2 === 'Jupiter')) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 6;
    if (aspectName === 'Trine' || aspectName === 'Square') return 5;
    return 4;
  }

  // Inner-to-Inner
  if (isInner1 && isInner2) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 3;
    if (aspectName === 'Trine' || aspectName === 'Square') return 2.5;
    return 2;
  }

  // Outer-to-Outer
  if (!isInner1 && !isInner2) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 5;
    if (aspectName === 'Trine' || aspectName === 'Square') return 4;
    return 3;
  }

  // Mixed (Inner-Outer)
  if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 4;
  if (aspectName === 'Trine' || aspectName === 'Square') return 3;
  return 2.5;
};

// Check if two planet positions form an aspect
const checkAspect = (angle1: number, angle2: number, planet1: string, planet2: string) => {
  let diff = Math.abs(angle1 - angle2);
  if (diff > 180) diff = 360 - diff;

  for (const aspectType of ASPECT_TYPES) {
    const orb = getOrb(planet1, planet2, aspectType.name);
    const actualOrb = Math.abs(diff - aspectType.angle);

    if (actualOrb <= orb) {
      return {
        name: aspectType.name,
        symbol: aspectType.symbol,
        color: aspectType.color,
        actualOrb: actualOrb
      };
    }
  }
  return null;
};

// Calculate which house a planet is in based on its longitude and natal chart
const getHouseNumber = (planetLongitude: number, ascendantSign: string): number => {
  const ascendantIndex = ZODIAC_SIGNS.indexOf(ascendantSign);
  const planetSignIndex = Math.floor(planetLongitude / 30);
  const houseNumber = ((planetSignIndex - ascendantIndex + 12) % 12) + 1;
  return houseNumber;
};

// Get orb for eclipse-to-planet aspects (tighter orbs than regular transits)
const getEclipseOrb = (planetName: string, aspectName: string): number => {
  const personalPlanets = ['Mercury', 'Venus', 'Mars'];
  const socialPlanets = ['Jupiter', 'Saturn'];
  const outerPlanets = ['Uranus', 'Neptune', 'Pluto'];
  const nodes = ['North Node', 'South Node'];

  if (personalPlanets.includes(planetName)) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 3;
    if (aspectName === 'Trine' || aspectName === 'Square') return 2.5;
    return 2;
  }

  if (nodes.includes(planetName)) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 5;
    if (aspectName === 'Trine' || aspectName === 'Square') return 4;
    return 3;
  }

  if (socialPlanets.includes(planetName) || outerPlanets.includes(planetName)) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 4;
    if (aspectName === 'Trine' || aspectName === 'Square') return 3;
    return 2;
  }

  return 3;
};

// Calculate transit-to-transit aspects for a specific date (including lunations, ingresses, eclipse aspects)
const calculateTransitToTransitAspects = (
  transitDate: Date,
  ascendantSign: string,
  prevDate?: Date
) => {
  const aspects: any[] = [];
  const transitPlanets = calculatePlanetaryPositions(transitDate);
  const prevPlanets = prevDate ? calculatePlanetaryPositions(prevDate) : [];

  // Helper to get position in degrees and sign
  const getPositionString = (longitude: number) => {
    const signNames = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
                       'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    const signIndex = Math.floor(longitude / 30);
    const degreeInSign = longitude % 30;
    const degrees = Math.floor(degreeInSign);
    const minutes = Math.round((degreeInSign - degrees) * 60);
    return `${degrees}°${minutes.toString().padStart(2, '0')}' ${signNames[signIndex]}`;
  };

  // Check for Lunations (New Moon, Full Moon, Solar Eclipse, Lunar Eclipse)
  let bestNewMoonData: any = null;
  let bestFullMoonData: any = null;
  let bestNewMoonOrb = 999;
  let bestFullMoonOrb = 999;

  for (const hour of [0, 6, 12, 18]) {
    const sampleDate = new Date(transitDate);
    sampleDate.setUTCHours(hour, 0, 0, 0);
    const samplePlanets = calculatePlanetaryPositions(sampleDate);
    const sun = samplePlanets.find(p => p.name === 'Sun');
    const moon = samplePlanets.find(p => p.name === 'Moon');

    if (sun && moon) {
      let diff = Math.abs(sun.longitude - moon.longitude);
      if (diff > 180) diff = 360 - diff;

      // Check New Moon (Conjunction)
      const newMoonOrb = diff;
      if (newMoonOrb < bestNewMoonOrb) {
        bestNewMoonOrb = newMoonOrb;
        const moonRelativePos = (moon.longitude - sun.longitude + 360) % 360;
        const isApplying = moonRelativePos > 180;
        let phase = 'Exact';
        if (newMoonOrb > 1.5) {
          phase = isApplying ? 'Applying' : 'Separating';
        }

        // Check if it's a Solar Eclipse (Node within 18° of Sun during New Moon)
        const northNode = samplePlanets.find(p => p.name === 'North Node');
        const southNode = samplePlanets.find(p => p.name === 'South Node');
        let isEclipse = false;

        if (northNode) {
          let nodeDiff = Math.abs(sun.longitude - northNode.longitude);
          if (nodeDiff > 180) nodeDiff = 360 - nodeDiff;
          if (nodeDiff <= 18) isEclipse = true;
        }
        if (!isEclipse && southNode) {
          let nodeDiff = Math.abs(sun.longitude - southNode.longitude);
          if (nodeDiff > 180) nodeDiff = 360 - nodeDiff;
          if (nodeDiff <= 18) isEclipse = true;
        }

        bestNewMoonData = {
          orb: newMoonOrb,
          phase,
          isEclipse,
          sunLongitude: sun.longitude,
          moonLongitude: moon.longitude
        };
      }

      // Check Full Moon (Opposition)
      const fullMoonOrb = Math.abs(diff - 180);
      if (fullMoonOrb < bestFullMoonOrb) {
        bestFullMoonOrb = fullMoonOrb;
        const moonRelativePos = (moon.longitude - sun.longitude + 360) % 360;
        const isApplying = moonRelativePos < 180;
        let phase = 'Exact';
        if (fullMoonOrb > 1.5) {
          phase = isApplying ? 'Applying' : 'Separating';
        }

        // Check if it's a Lunar Eclipse (Node within 12° of Moon during Full Moon)
        const northNode = samplePlanets.find(p => p.name === 'North Node');
        const southNode = samplePlanets.find(p => p.name === 'South Node');
        let isLunarEclipse = false;

        if (northNode) {
          let nodeDiff = Math.abs(moon.longitude - northNode.longitude);
          if (nodeDiff > 180) nodeDiff = 360 - nodeDiff;
          if (nodeDiff <= 12) isLunarEclipse = true;
        }
        if (!isLunarEclipse && southNode) {
          let nodeDiff = Math.abs(moon.longitude - southNode.longitude);
          if (nodeDiff > 180) nodeDiff = 360 - nodeDiff;
          if (nodeDiff <= 12) isLunarEclipse = true;
        }

        bestFullMoonData = {
          orb: fullMoonOrb,
          phase,
          isLunarEclipse,
          sunLongitude: sun.longitude,
          moonLongitude: moon.longitude
        };
      }
    }
  }

  // Add New Moon if found within orb
  if (bestNewMoonData && bestNewMoonOrb <= 5) {
    const positionStr = getPositionString(bestNewMoonData.sunLongitude);
    const house = getHouseNumber(bestNewMoonData.sunLongitude, ascendantSign);
    aspects.push({
      type: 'lunation',
      name: bestNewMoonData.isEclipse ? 'Solar Eclipse' : 'New Moon',
      symbol: bestNewMoonData.isEclipse ? '🌑🌒' : '🌑',
      orb: bestNewMoonOrb,
      phase: bestNewMoonData.phase,
      position: positionStr,
      house: house,
      longitude: bestNewMoonData.sunLongitude,
      isEclipse: bestNewMoonData.isEclipse
    });

    // If it's a Solar Eclipse, check for aspects to planets (excluding Sun and Moon)
    if (bestNewMoonData.isEclipse) {
      const eclipseLongitude = bestNewMoonData.sunLongitude;
      transitPlanets.forEach(planet => {
        if (planet.name === 'Sun' || planet.name === 'Moon') return;

        let diff = Math.abs(eclipseLongitude - planet.longitude);
        if (diff > 180) diff = 360 - diff;

        for (const aspectType of ASPECT_TYPES) {
          const orb = Math.abs(diff - aspectType.angle);
          const maxOrb = getEclipseOrb(planet.name, aspectType.name);

          if (orb <= maxOrb) {
            aspects.push({
              type: 'eclipse-aspect',
              eclipseType: 'Solar Eclipse',
              planet: planet.name,
              planetSymbol: PLANET_SYMBOLS[planet.name],
              aspectName: aspectType.name,
              aspectSymbol: aspectType.symbol,
              aspectColor: aspectType.color,
              orb: orb,
              house: getHouseNumber(planet.longitude, ascendantSign)
            });
            break;
          }
        }
      });
    }
  }

  // Add Full Moon if found within orb
  if (bestFullMoonData && bestFullMoonOrb <= 5) {
    const fullMoonLongitude = (bestFullMoonData.sunLongitude + 180) % 360;
    const positionStr = getPositionString(fullMoonLongitude);
    const house = getHouseNumber(fullMoonLongitude, ascendantSign);
    aspects.push({
      type: 'lunation',
      name: bestFullMoonData.isLunarEclipse ? 'Lunar Eclipse' : 'Full Moon',
      symbol: bestFullMoonData.isLunarEclipse ? '🌕🌒' : '🌕',
      orb: bestFullMoonOrb,
      phase: bestFullMoonData.phase,
      position: positionStr,
      house: house,
      longitude: fullMoonLongitude,
      isEclipse: bestFullMoonData.isLunarEclipse
    });

    // If it's a Lunar Eclipse, check for aspects to planets (excluding Sun and Moon)
    if (bestFullMoonData.isLunarEclipse) {
      const eclipseLongitude = fullMoonLongitude;
      transitPlanets.forEach(planet => {
        if (planet.name === 'Sun' || planet.name === 'Moon') return;

        let diff = Math.abs(eclipseLongitude - planet.longitude);
        if (diff > 180) diff = 360 - diff;

        for (const aspectType of ASPECT_TYPES) {
          const orb = Math.abs(diff - aspectType.angle);
          const maxOrb = getEclipseOrb(planet.name, aspectType.name);

          if (orb <= maxOrb) {
            aspects.push({
              type: 'eclipse-aspect',
              eclipseType: 'Lunar Eclipse',
              planet: planet.name,
              planetSymbol: PLANET_SYMBOLS[planet.name],
              aspectName: aspectType.name,
              aspectSymbol: aspectType.symbol,
              aspectColor: aspectType.color,
              orb: orb,
              house: getHouseNumber(planet.longitude, ascendantSign)
            });
            break;
          }
        }
      });
    }
  }

  // Check for Sign Ingress
  const signNames = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
                     'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

  if (prevPlanets.length > 0) {
    transitPlanets.forEach((planet, idx) => {
      if (planet.name === 'Moon') return; // Skip Moon ingresses (too frequent)

      const currentSign = Math.floor(planet.longitude / 30);
      const degreeInSign = planet.longitude % 30;
      const prevPlanet = prevPlanets[idx];
      const prevSign = Math.floor(prevPlanet.longitude / 30);

      if (currentSign !== prevSign) {
        const house = getHouseNumber(planet.longitude, ascendantSign);
        aspects.push({
          type: 'ingress',
          planet: planet.name,
          planetSymbol: PLANET_SYMBOLS[planet.name],
          sign: signNames[currentSign],
          orb: degreeInSign,
          house: house
        });
      }
    });
  }

  // Filter out Moon from regular transits
  const filteredTransitPlanets = transitPlanets.filter(p => p.name !== 'Moon');

  // Add house number to each transit planet
  const transitPositions = filteredTransitPlanets.map(planetData => ({
    name: planetData.name,
    symbol: PLANET_SYMBOLS[planetData.name] || planetData.name,
    angle: planetData.longitude,
    house: getHouseNumber(planetData.longitude, ascendantSign)
  }));

  // Calculate regular aspects between transit planets themselves
  for (let i = 0; i < transitPositions.length; i++) {
    for (let j = i + 1; j < transitPositions.length; j++) {
      const transit1 = transitPositions[i];
      const transit2 = transitPositions[j];

      // Skip North Node opposing South Node (they're always 180° apart)
      const isNodeOpposition =
        (transit1.name === 'North Node' && transit2.name === 'South Node') ||
        (transit1.name === 'South Node' && transit2.name === 'North Node');

      if (isNodeOpposition) {
        continue;
      }

      const aspect = checkAspect(transit1.angle, transit2.angle, transit1.name, transit2.name);

      if (aspect) {
        aspects.push({
          type: 'regular',
          date: transitDate,
          transit1,
          transit2,
          aspect
        });
      }
    }
  }

  return aspects;
};

export const PersonalTransitCalendar: React.FC<PersonalTransitCalendarProps> = ({
  natalDate: initialNatalDate,
  natalLatitude: initialNatalLatitude,
  natalLongitude: initialNatalLongitude,
  natalTimezone: initialTimezone,
  firstHouseReference: initialFirstHouseReference,
  manualFirstHouseSign: initialManualFirstHouseSign,
  cityName: initialCityName
}) => {
  // State for natal chart data
  const [natalDate, setNatalDate] = useState<Date>(
    initialNatalDate || new Date('1981-05-31T16:30:00')
  );
  const [natalLatitude, setNatalLatitude] = useState<number>(initialNatalLatitude || 44.8565);
  const [natalLongitude, setNatalLongitude] = useState<number>(initialNatalLongitude || 24.8692);
  const [cityName, setCityName] = useState<string>(initialCityName || 'Pitești');
  const [timezone, setTimezone] = useState<string>(initialTimezone || 'Europe/Bucharest');
  const [firstHouseReference, setFirstHouseReference] = useState<string>(initialFirstHouseReference || 'ascendant');
  const [manualFirstHouseSign, setManualFirstHouseSign] = useState<string>(initialManualFirstHouseSign || 'Aries');

  // Selected aspect for modal
  const [selectedAspect, setSelectedAspect] = useState<any>(null);

  // Current week start date for navigation (stored as timestamp to avoid reference changes)
  const [currentWeekStartTime, setCurrentWeekStartTime] = useState<number>(getWeekStart(new Date()).getTime());

  // Handle city name change and auto-populate coordinates
  const handleCityChange = (newCityName: string) => {
    setCityName(newCityName);
    const locationData = lookupCity(newCityName);
    if (locationData) {
      setNatalLatitude(locationData.latitude);
      setNatalLongitude(locationData.longitude);
      setTimezone(locationData.timezone);
    }
  };

  // Calculate UTC offset for natal date
  const utcOffset = useMemo(() => {
    return getUTCOffset(natalDate, timezone);
  }, [natalDate, timezone]);

  // Convert natal date to UTC
  // Extract the displayed time components and reconstruct as UTC
  // DatePicker creates a Date where the displayed time is what we want (e.g., 16:30)
  // We need to treat this as birth location time, so we create a UTC date and adjust by offset
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

  // Calculate natal planets using UTC-adjusted date
  const natalPlanets = useMemo(() => {
    return calculatePlanetaryPositions(natalDateUTC);
  }, [natalDateUTC]);

  // Calculate actual ascendant longitude from birth data
  const ascendantLongitude = useMemo(() => {
    return calculateAscendant(natalDateUTC, natalLatitude, natalLongitude);
  }, [natalDateUTC, natalLatitude, natalLongitude]);

  // Calculate ascendant sign from longitude
  const ascendantSignFromLongitude = useMemo(() => {
    const signIndex = Math.floor(ascendantLongitude / 30);
    return ZODIAC_SIGNS[signIndex];
  }, [ascendantLongitude]);

  // Determine first house reference sign for house calculations
  const firstHouseSign = useMemo(() => {
    if (firstHouseReference === 'sun') {
      const sun = natalPlanets.find(p => p.name === 'Sun');
      return sun ? sun.sign : 'Aries';
    } else if (firstHouseReference === 'moon') {
      const moon = natalPlanets.find(p => p.name === 'Moon');
      return moon ? moon.sign : 'Aries';
    } else if (firstHouseReference === 'manual') {
      return manualFirstHouseSign;
    } else {
      // Use calculated ascendant sign
      return ascendantSignFromLongitude;
    }
  }, [firstHouseReference, natalPlanets, manualFirstHouseSign, ascendantSignFromLongitude]);

  // Navigation functions
  const goToPreviousWeek = () => {
    const newWeekStart = new Date(currentWeekStartTime);
    newWeekStart.setDate(newWeekStart.getDate() - 7);
    setCurrentWeekStartTime(newWeekStart.getTime());
  };

  const goToNextWeek = () => {
    const newWeekStart = new Date(currentWeekStartTime);
    newWeekStart.setDate(newWeekStart.getDate() + 7);
    setCurrentWeekStartTime(newWeekStart.getTime());
  };

  const goToCurrentWeek = () => {
    setCurrentWeekStartTime(getWeekStart(new Date()).getTime());
  };

  // Get current week date strings (Monday to Sunday) for stable memoization
  const weekDateStrings = useMemo(() => {
    const currentWeekStart = new Date(currentWeekStartTime);
    const dateStrings: string[] = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentWeekStart);
      date.setDate(currentWeekStart.getDate() + i);
      dateStrings.push(date.toISOString().split('T')[0]);
    }
    return dateStrings;
  }, [currentWeekStartTime]);

  // Convert date strings back to Date objects when needed
  const weekDates = useMemo(() => {
    return weekDateStrings.map(dateStr => new Date(dateStr + 'T12:00:00Z'));
  }, [weekDateStrings]);

  // Calculate transit-to-transit aspects for each day of the week
  const weeklyAspects = useMemo(() => {
    const aspectsByDay: Record<string, any[]> = {};

    weekDateStrings.forEach((dateStr, idx) => {
      const date = new Date(dateStr + 'T12:00:00Z');
      // Get previous date for ingress detection
      const prevDate = idx > 0 ? new Date(weekDateStrings[idx - 1] + 'T12:00:00Z') : (() => {
        const prev = new Date(date);
        prev.setDate(prev.getDate() - 1);
        return prev;
      })();
      const aspects = calculateTransitToTransitAspects(date, firstHouseSign, prevDate);
      aspectsByDay[dateStr] = aspects;
    });

    return aspectsByDay;
  }, [weekDateStrings, firstHouseSign]);

  // Get all unique aspects across the week for row labels
  const allUniqueAspects = useMemo(() => {
    const aspectMap = new Map<string, any>();

    Object.values(weeklyAspects).forEach(dayAspects => {
      dayAspects.forEach(aspect => {
        let key: string;
        if (aspect.type === 'lunation') {
          key = `lunation-${aspect.name}`;
        } else if (aspect.type === 'ingress') {
          key = `ingress-${aspect.planet}-${aspect.sign}`;
        } else if (aspect.type === 'eclipse-aspect') {
          key = `eclipse-${aspect.eclipseType}-${aspect.aspectName}-${aspect.planet}`;
        } else {
          // Regular aspect
          key = `${aspect.transit1.name}-${aspect.aspect.name}-${aspect.transit2.name}`;
        }

        if (!aspectMap.has(key)) {
          aspectMap.set(key, aspect);
        }
      });
    });

    return Array.from(aspectMap.values());
  }, [weeklyAspects]);

  // Helper function to get house interpretation for lunations
  const getLunationHouseInterpretation = (lunationType: string, house: number): string => {
    const houseInterpretations: Record<number, string> = {
      1: `This ${lunationType} in your 1st house of self and identity brings powerful shifts in how you present yourself to the world. It's a time of personal transformation, new beginnings in your self-image, and potentially physical appearance changes.`,
      2: `This ${lunationType} in your 2nd house of values and resources highlights themes around money, possessions, and self-worth. You may experience culminations or new starts related to your finances, material security, or what you truly value.`,
      3: `This ${lunationType} in your 3rd house of communication activates your mental realm, bringing important conversations, learning opportunities, or decisions about siblings, neighbors, or short trips. Your voice and ideas come into focus.`,
      4: `This ${lunationType} in your 4th house of home and family illuminates your domestic life and emotional foundations. Expect significant developments with family, home matters, or your inner emotional world and sense of security.`,
      5: `This ${lunationType} in your 5th house of creativity and pleasure highlights romance, creative projects, children, or self-expression. This is a powerful time for bringing joy, playfulness, and authentic creative expression into your life.`,
      6: `This ${lunationType} in your 6th house of health and service focuses your attention on daily routines, work matters, health habits, and service to others. Time to refine your daily life and attend to wellness.`,
      7: `This ${lunationType} in your 7th house of partnerships brings relationship matters to a peak. Whether business or personal partnerships, this lunation illuminates what you need from others and how you relate one-on-one.`,
      8: `This ${lunationType} in your 8th house of transformation touches deep matters: shared resources, intimacy, power dynamics, and psychological transformation. Expect intensity around joint finances, sexuality, or personal metamorphosis.`,
      9: `This ${lunationType} in your 9th house of expansion activates your quest for meaning through higher education, travel, philosophy, or spiritual pursuits. Your beliefs and understanding of life's bigger picture are highlighted.`,
      10: `This ${lunationType} in your 10th house of career and public life brings professional matters, reputation, and life direction into sharp focus. Major developments in your career path or public standing are likely.`,
      11: `This ${lunationType} in your 11th house of community highlights friendships, group involvements, and your hopes for the future. Social connections and your role in the collective become important themes.`,
      12: `This ${lunationType} in your 12th house of spirituality and the unconscious brings hidden matters to light. This is a deeply spiritual time for inner work, healing past wounds, and connecting with the divine.`
    };

    return houseInterpretations[house] || `This ${lunationType} activates your ${getOrdinal(house)} house.`;
  };

  // Get house area description
  const getHouseArea = (house: number): string => {
    const houseAreas: Record<number, string> = {
      1: 'self, identity, and personal appearance',
      2: 'money, values, and material resources',
      3: 'communication, learning, and local connections',
      4: 'home, family, and emotional foundations',
      5: 'creativity, romance, and self-expression',
      6: 'health, daily work, and service',
      7: 'partnerships and one-on-one relationships',
      8: 'shared resources, intimacy, and transformation',
      9: 'higher learning, philosophy, and expansion',
      10: 'career, public life, and reputation',
      11: 'friendships, groups, and future aspirations',
      12: 'spirituality, the unconscious, and hidden matters'
    };
    return houseAreas[house] || 'this life area';
  };

  // Map houses to relevant life area properties in the interpretation
  const getRelevantLifeAreasForHouse = (house: number): string[] => {
    const houseToLifeAreas: Record<number, string[]> = {
      1: [], // 1st house: self, identity - no specific life area section
      2: ['moneyFinances'], // 2nd house: money, possessions, values
      3: [], // 3rd house: communication, siblings - no specific section
      4: ['familyHome'], // 4th house: home and family
      5: ['loveRelationships'], // 5th house: romance, creativity, children
      6: [], // 6th house: health, daily work - no specific section
      7: ['loveRelationships'], // 7th house: partnerships, relationships
      8: ['moneyFinances'], // 8th house: shared resources, transformation
      9: [], // 9th house: philosophy, travel - no specific section
      10: ['businessCareer'], // 10th house: career, public life
      11: [], // 11th house: friends, groups - no specific section
      12: [] // 12th house: spirituality, unconscious - no specific section
    };

    return houseToLifeAreas[house] || [];
  };

  const handleAspectClick = async (aspect: any) => {
    console.log('🔍 Aspect clicked:', aspect);
    let interpretation: any = null;

    if (aspect.type === 'lunation') {
      console.log('📅 Lunation type:', aspect.name, 'Position:', aspect.position);
      // Get lunation interpretation
      try {
        const { getSolarEclipseInterpretation, getNewMoonInterpretation, getFullMoonInterpretation, getLunarEclipseInterpretation } =
          await import('../utils/eclipseAndLunationInterpretations');

        const signMatch = aspect.position?.match(/\s([A-Z][a-z]+)$/);
        const sign = signMatch ? signMatch[1] : null;
        console.log('🔍 Extracted sign:', sign);

        if (sign) {
          if (aspect.name === 'Solar Eclipse') {
            interpretation = getSolarEclipseInterpretation(sign);
          } else if (aspect.name === 'New Moon') {
            interpretation = getNewMoonInterpretation(sign);
          } else if (aspect.name === 'Lunar Eclipse') {
            interpretation = getLunarEclipseInterpretation(sign);
          } else if (aspect.name === 'Full Moon') {
            interpretation = getFullMoonInterpretation(sign);
          }

          // Add house-specific interpretation
          if (interpretation && aspect.house) {
            const houseInterpretation = getLunationHouseInterpretation(aspect.name, aspect.house);
            const relevantLifeAreas = getRelevantLifeAreasForHouse(aspect.house);
            interpretation = {
              ...interpretation,
              houseContext: houseInterpretation,
              relevantLifeAreas // Tell the modal which life areas to show
            };
          }

          console.log('📖 Lunation interpretation loaded:', interpretation ? 'Yes' : 'No');
        }
      } catch (error) {
        console.error('❌ Error loading lunation interpretation:', error);
      }

      const aspectToSet = {
        ...aspect,
        interpretation,
        displayTitle: `${aspect.name} in ${getOrdinal(aspect.house)} House`
      };
      console.log('🎯 Setting lunation selectedAspect:', aspectToSet);
      console.log('🎯 Interpretation structure:', interpretation);
      console.log('🎯 Interpretation keys:', interpretation ? Object.keys(interpretation) : 'null');
      console.log('🎯 Has planet1Energy?', interpretation?.planet1Energy ? 'YES' : 'NO');
      console.log('🎯 Has planet2Energy?', interpretation?.planet2Energy ? 'YES' : 'NO');
      console.log('🎯 Has loveRelationships?', interpretation?.loveRelationships ? 'YES' : 'NO');
      setSelectedAspect(aspectToSet);
    } else if (aspect.type === 'ingress') {
      console.log('🚪 Ingress:', aspect.planet, '→', aspect.sign);
      // Get ingress interpretation
      try {
        const { getDetailedIngressInterpretation } =
          await import('../utils/detailedIngressInterpretations');

        interpretation = getDetailedIngressInterpretation(aspect.planet, aspect.sign);

        // Add house-specific context for ingresses
        if (interpretation && aspect.house) {
          const houseInterpretation = `${aspect.planet} entering ${aspect.sign} in your ${getOrdinal(aspect.house)} house brings this energy into the area of ${getHouseArea(aspect.house)}. Over the coming weeks, expect developments in this life area as ${aspect.planet}'s drive activates this sector of your chart.`;
          const relevantLifeAreas = getRelevantLifeAreasForHouse(aspect.house);
          interpretation = {
            ...interpretation,
            houseContext: houseInterpretation,
            relevantLifeAreas
          };
        }

        console.log('📖 Ingress interpretation loaded:', interpretation ? 'Yes' : 'No');
      } catch (error) {
        console.error('❌ Error loading ingress interpretation:', error);
      }

      setSelectedAspect({
        ...aspect,
        interpretation,
        displayTitle: `${aspect.planet} enters ${aspect.sign} (${getOrdinal(aspect.house)} House)`
      });
    } else if (aspect.type === 'eclipse-aspect') {
      console.log('🌑 Eclipse aspect:', aspect.eclipseType, aspect.aspectName, aspect.planet);
      // Get eclipse aspect interpretation
      try {
        const { getEclipseAspectInterpretation } =
          await import('../utils/eclipseAspectInterpretations');

        interpretation = getEclipseAspectInterpretation(aspect.planet, aspect.aspectName);

        // If no detailed interpretation exists, create a simple one
        if (!interpretation) {
          const aspectQuality = aspect.aspectName === 'Conjunction' || aspect.aspectName === 'Trine' || aspect.aspectName === 'Sextile'
            ? 'harmonious and flowing'
            : aspect.aspectName === 'Opposition' || aspect.aspectName === 'Square'
            ? 'challenging and transformative'
            : 'dynamic';

          interpretation = {
            name: `${aspect.eclipseType} ${aspect.aspectName} ${aspect.planet}`,
            planet1Energy: `${aspect.eclipseType} represents major karmic reset, destiny activation, fated endings and beginnings, shadow work, and powerful transformational cycles lasting 6 months to 1 year. Eclipses bring unexpected but necessary changes.`,
            planet2Energy: `${aspect.planet} in your natal chart represents a key part of your life experience and personal energy.`,
            aspectMeaning: `This ${aspectQuality} eclipse aspect to your natal ${aspect.planet} triggers a ${aspect.aspectName === 'Opposition' || aspect.aspectName === 'Square' ? 'crisis point requiring' : 'powerful opportunity for'} transformation. The eclipse energy activates your ${aspect.planet}, bringing fated changes and karmic shifts over the next 6-12 months.`
          };
        }

        // Add house-specific context for eclipse aspects
        if (interpretation && aspect.house) {
          const houseInterpretation = `This ${aspect.eclipseType} ${aspect.aspectName} to ${aspect.planet} activates your ${getOrdinal(aspect.house)} house of ${getHouseArea(aspect.house)}. The fated, transformational energy of this eclipse aspect brings powerful karmic shifts to this area of your life over the next 6 months to 1 year.`;
          const relevantLifeAreas = getRelevantLifeAreasForHouse(aspect.house);
          interpretation = {
            ...interpretation,
            houseContext: houseInterpretation,
            relevantLifeAreas
          };
        }

        console.log('📖 Eclipse aspect interpretation loaded:', interpretation ? 'Yes' : 'No');
      } catch (error) {
        console.error('❌ Error loading eclipse aspect interpretation:', error);
      }

      setSelectedAspect({
        ...aspect,
        interpretation,
        displayTitle: `${aspect.eclipseType} ${aspect.aspectName} ${aspect.planet} (${getOrdinal(aspect.house)} House)`
      });
    } else {
      console.log('⭐ Regular aspect:', aspect.transit1?.name, aspect.aspect?.name, aspect.transit2?.name);
      // Regular transit-to-transit aspect
      interpretation = generateTransitToTransitInterpretation(
        aspect.transit1.name,
        aspect.transit1.house,
        aspect.transit2.name,
        aspect.transit2.house,
        aspect.aspect.name,
        aspect.aspect.actualOrb
      );
      console.log('📖 Regular interpretation loaded:', interpretation ? 'Yes' : 'No');

      setSelectedAspect({
        ...aspect,
        interpretation,
        displayTitle: `${aspect.transit1.name} (${getOrdinal(aspect.transit1.house)}) ${aspect.aspect.name} ${aspect.transit2.name} (${getOrdinal(aspect.transit2.house)})`
      });
    }
    console.log('✅ Final selectedAspect set with interpretation:', interpretation ? 'Yes' : 'No');
  };

  const closeModal = () => {
    setSelectedAspect(null);
  };

  const getOrdinal = (n: number) => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  const today = new Date();

  return (
    <div style={{ padding: '20px', backgroundColor: '#0a0014', minHeight: '100vh', color: '#fff' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#ffd700', marginBottom: '10px', textShadow: '0 0 20px rgba(218, 165, 32, 0.8)' }}>
          Personal Transit Calendar
        </h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
          Transit-to-Transit aspects with house positions based on your natal chart
        </p>
      </div>

      {/* Natal Chart Input Controls */}
      <div style={{
        backgroundColor: 'rgba(138, 43, 226, 0.1)',
        border: '1px solid rgba(138, 43, 226, 0.3)',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h3 style={{ color: '#ffd700', marginBottom: '15px', fontSize: '18px' }}>Your Birth Information</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          {/* Natal Date */}
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#ffd700' }}>
              Birth Date & Time
            </label>
            <DatePicker
              selected={natalDate}
              onChange={(date) => date && setNatalDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              className="date-picker"
              minDate={new Date('1960-01-01')}
              maxDate={new Date('2027-12-31')}
              showYearDropdown
              showMonthDropdown
              dropdownMode="select"
              wrapperClassName="date-picker-wrapper"
              customInput={
                <input
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '6px',
                    border: '1px solid rgba(138, 43, 226, 0.5)',
                    backgroundColor: 'rgba(26, 0, 51, 0.8)',
                    color: '#fff'
                  }}
                />
              }
            />
          </div>

          {/* Birth Location */}
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#ffd700' }}>
              Birth Location
            </label>
            <input
              type="text"
              value={cityName}
              onChange={(e) => handleCityChange(e.target.value)}
              onBlur={(e) => handleCityChange(e.target.value)}
              placeholder="City, State/Country"
              list="city-suggestions-personal"
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '6px',
                border: '1px solid rgba(138, 43, 226, 0.5)',
                backgroundColor: 'rgba(26, 0, 51, 0.8)',
                color: '#fff'
              }}
            />
            <datalist id="city-suggestions-personal">
              {getCityList().map(city => (
                <option key={city} value={city} />
              ))}
            </datalist>
          </div>

          {/* Latitude */}
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#ffd700' }}>
              Birth Latitude
            </label>
            <input
              type="number"
              value={natalLatitude}
              onChange={(e) => setNatalLatitude(parseFloat(e.target.value))}
              step="0.0001"
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '6px',
                border: '1px solid rgba(138, 43, 226, 0.5)',
                backgroundColor: 'rgba(26, 0, 51, 0.8)',
                color: '#fff'
              }}
            />
          </div>

          {/* Longitude */}
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#ffd700' }}>
              Birth Longitude
            </label>
            <input
              type="number"
              value={natalLongitude}
              onChange={(e) => setNatalLongitude(parseFloat(e.target.value))}
              step="0.0001"
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '6px',
                border: '1px solid rgba(138, 43, 226, 0.5)',
                backgroundColor: 'rgba(26, 0, 51, 0.8)',
                color: '#fff'
              }}
            />
          </div>

          {/* First House Reference */}
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#ffd700' }}>
              First House Reference
            </label>
            <select
              value={firstHouseReference}
              onChange={(e) => setFirstHouseReference(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '6px',
                border: '1px solid rgba(138, 43, 226, 0.5)',
                backgroundColor: 'rgba(26, 0, 51, 0.8)',
                color: '#fff'
              }}
            >
              <option value="ascendant">Ascendant (Rising Sign)</option>
              <option value="sun">Sun Sign</option>
              <option value="moon">Moon Sign</option>
              <option value="manual">Manual</option>
            </select>
          </div>

          {/* Manual First House Sign - only show if manual is selected */}
          {firstHouseReference === 'manual' && (
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#ffd700' }}>
                First House Sign
              </label>
              <select
                value={manualFirstHouseSign}
                onChange={(e) => setManualFirstHouseSign(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '6px',
                  border: '1px solid rgba(138, 43, 226, 0.5)',
                  backgroundColor: 'rgba(26, 0, 51, 0.8)',
                  color: '#fff'
                }}
              >
                <option value="Aries">Aries</option>
                <option value="Taurus">Taurus</option>
                <option value="Gemini">Gemini</option>
                <option value="Cancer">Cancer</option>
                <option value="Leo">Leo</option>
                <option value="Virgo">Virgo</option>
                <option value="Libra">Libra</option>
                <option value="Scorpio">Scorpio</option>
                <option value="Sagittarius">Sagittarius</option>
                <option value="Capricorn">Capricorn</option>
                <option value="Aquarius">Aquarius</option>
                <option value="Pisces">Pisces</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Natal Chart Positions */}
      <div style={{
        backgroundColor: 'rgba(138, 43, 226, 0.1)',
        border: '1px solid rgba(138, 43, 226, 0.3)',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h3 style={{ color: '#ffd700', marginBottom: '15px', fontSize: '18px' }}>Your Natal Chart Positions</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
          {/* Ascendant */}
          <div style={{
            backgroundColor: 'rgba(26, 0, 51, 0.6)',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid rgba(138, 43, 226, 0.4)'
          }}>
            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '4px' }}>
              Ascendant
            </div>
            <div style={{ fontSize: '16px', color: '#ffd700', fontWeight: 'bold' }}>
              {ascendantSignFromLongitude} {Math.floor(ascendantLongitude % 30)}°{Math.round(((ascendantLongitude % 30) % 1) * 60)}'
            </div>
          </div>

          {/* Planets */}
          {natalPlanets.map((planet) => {
            // Calculate which house this planet is in
            const planetHouse = getHouseNumber(planet.longitude, firstHouseSign);
            const degrees = Math.floor(planet.degreeInSign);
            const minutes = Math.round((planet.degreeInSign % 1) * 60);

            return (
              <div
                key={planet.name}
                style={{
                  backgroundColor: 'rgba(26, 0, 51, 0.6)',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid rgba(138, 43, 226, 0.4)'
                }}
              >
                <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '4px' }}>
                  {PLANET_SYMBOLS[planet.name]} {planet.name}
                  {planet.isRetrograde && <span style={{ fontSize: '11px', marginLeft: '4px' }}>℞</span>}
                </div>
                <div style={{ fontSize: '16px', color: PLANET_COLORS[planet.name] || '#ffd700', fontWeight: 'bold' }}>
                  {planet.sign} {degrees}°{minutes}'
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '2px' }}>
                  House {planetHouse}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{
          marginTop: '15px',
          padding: '10px',
          backgroundColor: 'rgba(255, 215, 0, 0.1)',
          borderRadius: '8px',
          border: '1px solid rgba(255, 215, 0, 0.3)'
        }}>
          <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '8px' }}>
            <strong style={{ color: '#ffd700' }}>First House Reference:</strong>{' '}
            {firstHouseReference === 'ascendant' && `Ascendant (${ascendantSignFromLongitude})`}
            {firstHouseReference === 'sun' && `Sun Sign (${natalPlanets.find(p => p.name === 'Sun')?.sign})`}
            {firstHouseReference === 'moon' && `Moon Sign (${natalPlanets.find(p => p.name === 'Moon')?.sign})`}
            {firstHouseReference === 'manual' && `Manual (${manualFirstHouseSign})`}
          </div>
          <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>
            <strong style={{ color: '#ffd700' }}>Timezone:</strong> {timezone} (UTC{utcOffset >= 0 ? '+' : ''}{utcOffset})
          </div>
        </div>
      </div>

      {/* Week Navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '20px'
      }}>
        <button
          onClick={goToPreviousWeek}
          style={{
            padding: '10px 20px',
            backgroundColor: 'rgba(138, 43, 226, 0.3)',
            border: '1px solid rgba(138, 43, 226, 0.5)',
            borderRadius: '8px',
            color: '#ffd700',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.5)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.3)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          ← Previous Week
        </button>

        <button
          onClick={goToCurrentWeek}
          style={{
            padding: '10px 20px',
            backgroundColor: 'rgba(255, 215, 0, 0.2)',
            border: '1px solid rgba(255, 215, 0, 0.5)',
            borderRadius: '8px',
            color: '#ffd700',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.3)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.2)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Current Week
        </button>

        <button
          onClick={goToNextWeek}
          style={{
            padding: '10px 20px',
            backgroundColor: 'rgba(138, 43, 226, 0.3)',
            border: '1px solid rgba(138, 43, 226, 0.5)',
            borderRadius: '8px',
            color: '#ffd700',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.5)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.3)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Next Week →
        </button>
      </div>

      {/* Weekly Calendar Table */}
      <div style={{
        backgroundColor: 'rgba(138, 43, 226, 0.05)',
        border: '2px solid rgba(138, 43, 226, 0.3)',
        borderRadius: '12px',
        overflow: 'auto'
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '13px'
        }}>
          <thead>
            <tr style={{
              backgroundColor: 'rgba(138, 43, 226, 0.2)',
              borderBottom: '2px solid rgba(138, 43, 226, 0.3)'
            }}>
              <th style={{
                padding: '15px',
                textAlign: 'left',
                position: 'sticky',
                left: 0,
                backgroundColor: 'rgba(138, 43, 226, 0.2)',
                color: '#ffd700',
                fontWeight: 'bold',
                borderRight: '2px solid rgba(138, 43, 226, 0.3)',
                minWidth: '200px'
              }}>
                Aspect
              </th>
              {weekDates.map((date, idx) => {
                const isToday = date.toDateString() === today.toDateString();
                return (
                  <th
                    key={idx}
                    style={{
                      padding: '15px',
                      textAlign: 'center',
                      borderLeft: '1px solid rgba(138, 43, 226, 0.2)',
                      backgroundColor: isToday ? 'rgba(255, 215, 0, 0.15)' : 'transparent',
                      minWidth: '100px'
                    }}
                  >
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#ffd700', marginBottom: '5px' }}>
                      {date.toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                    <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>
                      {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    {isToday && (
                      <div style={{
                        fontSize: '11px',
                        color: '#00ff00',
                        marginTop: '3px',
                        fontWeight: 'bold'
                      }}>
                        Today
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {allUniqueAspects.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  style={{
                    padding: '40px',
                    textAlign: 'center',
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontStyle: 'italic'
                  }}
                >
                  No transit-to-transit aspects this week
                </td>
              </tr>
            ) : (
              allUniqueAspects.map((uniqueAspect, rowIdx) => (
                <tr
                  key={rowIdx}
                  style={{
                    borderBottom: '1px solid rgba(138, 43, 226, 0.1)'
                  }}
                >
                  <td style={{
                    padding: '12px 15px',
                    position: 'sticky',
                    left: 0,
                    backgroundColor: 'rgba(10, 0, 20, 0.95)',
                    borderRight: '2px solid rgba(138, 43, 226, 0.3)',
                    color: uniqueAspect.type === 'lunation' ? '#FFD700' :
                           uniqueAspect.type === 'ingress' ? '#9370DB' :
                           uniqueAspect.type === 'eclipse-aspect' ? '#8B0000' :
                           uniqueAspect.aspect?.color || '#FFD700',
                    fontWeight: 'bold'
                  }}>
                    {uniqueAspect.type === 'lunation' ? (
                      <>
                        <div style={{ marginBottom: '4px' }}>{uniqueAspect.symbol} {uniqueAspect.name}</div>
                      </>
                    ) : uniqueAspect.type === 'ingress' ? (
                      <>
                        <div style={{ marginBottom: '4px' }}>{uniqueAspect.planetSymbol} → {uniqueAspect.sign}</div>
                        <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 'normal' }}>
                          {uniqueAspect.planet} enters {uniqueAspect.sign}
                        </div>
                      </>
                    ) : uniqueAspect.type === 'eclipse-aspect' ? (
                      <>
                        <div style={{ marginBottom: '4px' }}>{uniqueAspect.eclipseType.includes('Solar') ? '🌑🌒' : '🌕🌒'} {uniqueAspect.aspectSymbol} {uniqueAspect.planetSymbol}</div>
                        <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 'normal' }}>
                          {uniqueAspect.eclipseType} {uniqueAspect.aspectName} {uniqueAspect.planet}
                        </div>
                      </>
                    ) : (
                      <>
                        <div style={{ marginBottom: '4px' }}>{uniqueAspect.aspect.name}</div>
                        <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 'normal' }}>
                          {uniqueAspect.transit1.symbol} {uniqueAspect.transit1.name} - {uniqueAspect.transit2.symbol} {uniqueAspect.transit2.name}
                        </div>
                      </>
                    )}
                  </td>
                  {weekDates.map((date, dayIdx) => {
                    const dateKey = date.toISOString().split('T')[0];
                    const dayAspects = weeklyAspects[dateKey] || [];

                    // Find matching aspect for this day
                    const matchingAspect = dayAspects.find(a => {
                      if (uniqueAspect.type === 'lunation') {
                        return a.type === 'lunation' && a.name === uniqueAspect.name;
                      } else if (uniqueAspect.type === 'ingress') {
                        return a.type === 'ingress' && a.planet === uniqueAspect.planet && a.sign === uniqueAspect.sign;
                      } else if (uniqueAspect.type === 'eclipse-aspect') {
                        return a.type === 'eclipse-aspect' && a.eclipseType === uniqueAspect.eclipseType && a.aspectName === uniqueAspect.aspectName && a.planet === uniqueAspect.planet;
                      } else {
                        return a.type === 'regular' && a.transit1?.name === uniqueAspect.transit1?.name && a.transit2?.name === uniqueAspect.transit2?.name && a.aspect?.name === uniqueAspect.aspect?.name;
                      }
                    });

                    const isToday = date.toDateString() === today.toDateString();

                    return (
                      <td
                        key={dayIdx}
                        style={{
                          padding: '8px',
                          textAlign: 'center',
                          borderLeft: '1px solid rgba(138, 43, 226, 0.1)',
                          backgroundColor: isToday ? 'rgba(255, 215, 0, 0.15)' : 'transparent',
                          borderRight: isToday ? '2px solid rgba(255, 215, 0, 0.5)' : 'none',
                          borderTop: isToday ? '2px solid rgba(255, 215, 0, 0.5)' : 'none',
                          borderBottom: isToday ? '2px solid rgba(255, 215, 0, 0.5)' : 'none',
                          cursor: matchingAspect ? 'pointer' : 'default'
                        }}
                        onClick={() => matchingAspect && handleAspectClick(matchingAspect)}
                      >
                        {matchingAspect && (() => {
                          if (matchingAspect.type === 'lunation') {
                            return (
                              <div
                                title={`${matchingAspect.name} in ${getOrdinal(matchingAspect.house)} House at ${matchingAspect.position}`}
                                style={{
                                  padding: '4px 3px',
                                  borderRadius: '4px',
                                  backgroundColor: 'rgba(255, 215, 0, 0.2)',
                                  border: `2px solid ${matchingAspect.isEclipse ? '#8B0000' : '#FFD700'}`,
                                  transition: 'all 0.2s ease',
                                  minHeight: '35px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.35)';
                                  e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.2)';
                                  e.currentTarget.style.transform = 'scale(1)';
                                }}
                              >
                                <div style={{ fontSize: '16px', fontWeight: 'normal', color: '#fff', lineHeight: '1.2' }}>
                                  {matchingAspect.symbol}
                                </div>
                                <div style={{ fontSize: '8px', color: 'rgba(255, 255, 255, 0.7)', marginTop: '2px' }}>
                                  {getOrdinal(matchingAspect.house)}
                                </div>
                              </div>
                            );
                          } else if (matchingAspect.type === 'ingress') {
                            return (
                              <div
                                title={`${matchingAspect.planet} enters ${matchingAspect.sign} (${getOrdinal(matchingAspect.house)} House)`}
                                style={{
                                  padding: '4px 3px',
                                  borderRadius: '4px',
                                  backgroundColor: 'rgba(147, 112, 219, 0.2)',
                                  border: `2px solid #9370DB`,
                                  transition: 'all 0.2s ease',
                                  minHeight: '35px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(147, 112, 219, 0.35)';
                                  e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(147, 112, 219, 0.2)';
                                  e.currentTarget.style.transform = 'scale(1)';
                                }}
                              >
                                <div style={{ fontSize: '13px', fontWeight: 'normal', color: '#fff', lineHeight: '1.2' }}>
                                  {matchingAspect.planetSymbol} → {matchingAspect.sign.substring(0, 3)}
                                </div>
                                <div style={{ fontSize: '8px', color: 'rgba(255, 255, 255, 0.7)', marginTop: '2px' }}>
                                  {getOrdinal(matchingAspect.house)}
                                </div>
                              </div>
                            );
                          } else if (matchingAspect.type === 'eclipse-aspect') {
                            return (
                              <div
                                title={`${matchingAspect.eclipseType} ${matchingAspect.aspectName} ${matchingAspect.planet} (${getOrdinal(matchingAspect.house)} House)`}
                                style={{
                                  padding: '4px 3px',
                                  borderRadius: '4px',
                                  backgroundColor: 'rgba(139, 0, 0, 0.2)',
                                  border: `2px solid ${matchingAspect.aspectColor}`,
                                  transition: 'all 0.2s ease',
                                  minHeight: '35px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(139, 0, 0, 0.35)';
                                  e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(139, 0, 0, 0.2)';
                                  e.currentTarget.style.transform = 'scale(1)';
                                }}
                              >
                                <div style={{ fontSize: '13px', fontWeight: 'normal', color: '#fff', lineHeight: '1.2' }}>
                                  {matchingAspect.eclipseType.includes('Solar') ? '🌑🌒' : '🌕🌒'} {matchingAspect.aspectSymbol} {matchingAspect.planetSymbol}
                                </div>
                                <div style={{ fontSize: '8px', color: 'rgba(255, 255, 255, 0.7)', marginTop: '2px' }}>
                                  {getOrdinal(matchingAspect.house)}
                                </div>
                              </div>
                            );
                          } else {
                            // Regular aspect
                            const planet1Color = PLANET_COLORS[matchingAspect.transit1.name] || '#FFD700';
                            return (
                              <div
                                title={`${matchingAspect.transit1.name} (${getOrdinal(matchingAspect.transit1.house)}) ${matchingAspect.aspect.name} ${matchingAspect.transit2.name} (${getOrdinal(matchingAspect.transit2.house)})`}
                                style={{
                                  padding: '4px 3px',
                                  borderRadius: '4px',
                                  backgroundColor: hexToRgba(planet1Color, 0.25),
                                  border: `2px solid ${matchingAspect.aspect.color}`,
                                  transition: 'all 0.2s ease',
                                  minHeight: '35px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = hexToRgba(planet1Color, 0.40);
                                  e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = hexToRgba(planet1Color, 0.25);
                                  e.currentTarget.style.transform = 'scale(1)';
                                }}
                              >
                                <div style={{ fontSize: '13px', fontWeight: 'normal', color: '#fff', lineHeight: '1.2' }}>
                                  {matchingAspect.transit1.symbol}({getOrdinal(matchingAspect.transit1.house)}) {matchingAspect.aspect.symbol} {matchingAspect.transit2.symbol}({getOrdinal(matchingAspect.transit2.house)})
                                </div>
                                <div style={{ fontSize: '8px', color: 'rgba(255, 255, 255, 0.7)', marginTop: '2px' }}>
                                  {matchingAspect.aspect.actualOrb.toFixed(1)}°
                                </div>
                              </div>
                            );
                          }
                        })()}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Aspect Interpretation Modal */}
      {selectedAspect && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'rgb(26, 0, 51)',
              border: '2px solid rgba(218, 165, 32, 0.3)',
              borderRadius: '12px',
              padding: '30px',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(138, 43, 226, 0.6)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                color: '#ffd700',
                fontSize: '28px',
                cursor: 'pointer',
                padding: '5px 15px',
                lineHeight: '1'
              }}
            >
              ×
            </button>

            {/* Modal Content */}
            <h2 style={{ color: '#ffd700', marginBottom: '20px', paddingRight: '40px' }}>
              {selectedAspect.displayTitle || `${selectedAspect.transit1?.name} (${getOrdinal(selectedAspect.transit1?.house)}) ${selectedAspect.aspect?.name} ${selectedAspect.transit2?.name} (${getOrdinal(selectedAspect.transit2?.house)})`}
            </h2>

            {selectedAspect.interpretation ? (
              <div>
                {/* For regular transit-to-transit aspects with simple string interpretation */}
                {typeof selectedAspect.interpretation === 'string' ? (
                  <div style={{
                    whiteSpace: 'pre-wrap',
                    lineHeight: '1.7',
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}>
                    {selectedAspect.interpretation}
                  </div>
                ) : selectedAspect.interpretation.fullInterpretation ? (
                  /* For interpretations with fullInterpretation property */
                  <div style={{
                    whiteSpace: 'pre-wrap',
                    lineHeight: '1.7',
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}>
                    {selectedAspect.interpretation.fullInterpretation}
                  </div>
                ) : selectedAspect.interpretation.planet1Energy || selectedAspect.interpretation.planetEnergy ? (
                  /* For lunation/eclipse/ingress interpretations */
                  <div style={{ lineHeight: '1.7', fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)' }}>
                    {selectedAspect.interpretation.houseContext && (
                      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(255, 215, 0, 0.2)', borderRadius: '8px', border: '1px solid rgba(255, 215, 0, 0.4)' }}>
                        <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '16px' }}>🏠 House Placement</h3>
                        <p style={{ margin: 0 }}>{selectedAspect.interpretation.houseContext}</p>
                      </div>
                    )}

                    {(selectedAspect.interpretation.planet1Energy || selectedAspect.interpretation.planetEnergy) && (
                      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(138, 43, 226, 0.2)', borderRadius: '8px', border: '1px solid rgba(138, 43, 226, 0.4)' }}>
                        <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '16px' }}>🌙 {selectedAspect.interpretation.planetEnergy ? 'Planet' : 'Event'} Energy</h3>
                        <p style={{ margin: 0 }}>{selectedAspect.interpretation.planet1Energy || selectedAspect.interpretation.planetEnergy}</p>
                      </div>
                    )}

                    {(selectedAspect.interpretation.planet2Energy || selectedAspect.interpretation.signEnergy) && (
                      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(138, 43, 226, 0.1)', borderRadius: '8px' }}>
                        <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '16px' }}>♋ Sign Energy</h3>
                        <p style={{ margin: 0 }}>{selectedAspect.interpretation.planet2Energy || selectedAspect.interpretation.signEnergy}</p>
                      </div>
                    )}

                    {(selectedAspect.interpretation.aspectMeaning || selectedAspect.interpretation.eventMeaning) && (
                      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(138, 43, 226, 0.1)', borderRadius: '8px' }}>
                        <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '16px' }}>✨ Meaning</h3>
                        <p style={{ margin: 0 }}>{selectedAspect.interpretation.aspectMeaning || selectedAspect.interpretation.eventMeaning}</p>
                      </div>
                    )}

                    {/* Only show life areas relevant to the house, or all if no filter specified */}
                    {selectedAspect.interpretation.loveRelationships && (
                      !selectedAspect.interpretation.relevantLifeAreas ||
                      selectedAspect.interpretation.relevantLifeAreas.length === 0 ||
                      selectedAspect.interpretation.relevantLifeAreas.includes('loveRelationships')
                    ) && (
                      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(138, 43, 226, 0.1)', borderRadius: '8px' }}>
                        <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '16px' }}>💕 Love & Relationships</h3>
                        <p style={{ margin: 0 }}>{selectedAspect.interpretation.loveRelationships}</p>
                      </div>
                    )}

                    {selectedAspect.interpretation.familyHome && (
                      !selectedAspect.interpretation.relevantLifeAreas ||
                      selectedAspect.interpretation.relevantLifeAreas.length === 0 ||
                      selectedAspect.interpretation.relevantLifeAreas.includes('familyHome')
                    ) && (
                      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(138, 43, 226, 0.1)', borderRadius: '8px' }}>
                        <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '16px' }}>🏠 Family & Home</h3>
                        <p style={{ margin: 0 }}>{selectedAspect.interpretation.familyHome}</p>
                      </div>
                    )}

                    {selectedAspect.interpretation.businessCareer && (
                      !selectedAspect.interpretation.relevantLifeAreas ||
                      selectedAspect.interpretation.relevantLifeAreas.length === 0 ||
                      selectedAspect.interpretation.relevantLifeAreas.includes('businessCareer')
                    ) && (
                      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(138, 43, 226, 0.1)', borderRadius: '8px' }}>
                        <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '16px' }}>💼 Business & Career</h3>
                        <p style={{ margin: 0 }}>{selectedAspect.interpretation.businessCareer}</p>
                      </div>
                    )}

                    {selectedAspect.interpretation.moneyFinances && (
                      !selectedAspect.interpretation.relevantLifeAreas ||
                      selectedAspect.interpretation.relevantLifeAreas.length === 0 ||
                      selectedAspect.interpretation.relevantLifeAreas.includes('moneyFinances')
                    ) && (
                      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(138, 43, 226, 0.1)', borderRadius: '8px' }}>
                        <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '16px' }}>💰 Money & Finances</h3>
                        <p style={{ margin: 0 }}>{selectedAspect.interpretation.moneyFinances}</p>
                      </div>
                    )}

                    {selectedAspect.interpretation.predictions && selectedAspect.interpretation.predictions.length > 0 && (
                      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(138, 43, 226, 0.1)', borderRadius: '8px' }}>
                        <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '16px' }}>🔮 Predictions</h3>
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                          {selectedAspect.interpretation.predictions.map((pred: string, idx: number) => (
                            <li key={idx} style={{ marginBottom: '8px' }}>{pred}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : selectedAspect.interpretation.themes ? (
                  /* For other structured interpretations (ingresses, eclipse aspects) */
                  <div style={{ lineHeight: '1.7', fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)' }}>
                    {selectedAspect.interpretation.themes && (
                      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(138, 43, 226, 0.2)', borderRadius: '8px', border: '1px solid rgba(138, 43, 226, 0.4)' }}>
                        <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '16px' }}>🌟 Key Themes</h3>
                        <p style={{ margin: 0 }}>{selectedAspect.interpretation.themes}</p>
                      </div>
                    )}

                    {selectedAspect.interpretation.overview && (
                      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(138, 43, 226, 0.1)', borderRadius: '8px' }}>
                        <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '16px' }}>📖 Overview</h3>
                        <p style={{ margin: 0 }}>{selectedAspect.interpretation.overview}</p>
                      </div>
                    )}

                    {selectedAspect.interpretation.personalGrowth && (
                      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(138, 43, 226, 0.1)', borderRadius: '8px' }}>
                        <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '16px' }}>🌱 Personal Growth</h3>
                        <p style={{ margin: 0 }}>{selectedAspect.interpretation.personalGrowth}</p>
                      </div>
                    )}

                    {selectedAspect.interpretation.relationships && (
                      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(138, 43, 226, 0.1)', borderRadius: '8px' }}>
                        <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '16px' }}>💕 Relationships</h3>
                        <p style={{ margin: 0 }}>{selectedAspect.interpretation.relationships}</p>
                      </div>
                    )}

                    {selectedAspect.interpretation.careerFinances && (
                      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(138, 43, 226, 0.1)', borderRadius: '8px' }}>
                        <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '16px' }}>💼 Career & Finances</h3>
                        <p style={{ margin: 0 }}>{selectedAspect.interpretation.careerFinances}</p>
                      </div>
                    )}

                    {selectedAspect.interpretation.spirituality && (
                      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(138, 43, 226, 0.1)', borderRadius: '8px' }}>
                        <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '16px' }}>✨ Spirituality</h3>
                        <p style={{ margin: 0 }}>{selectedAspect.interpretation.spirituality}</p>
                      </div>
                    )}

                    {selectedAspect.interpretation.advice && (
                      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(255, 215, 0, 0.15)', borderRadius: '8px', border: '1px solid rgba(255, 215, 0, 0.4)' }}>
                        <h3 style={{ color: '#ffd700', marginBottom: '10px', fontSize: '16px' }}>💡 Advice</h3>
                        <p style={{ margin: 0 }}>{selectedAspect.interpretation.advice}</p>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            ) : (
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', padding: '40px' }}>
                Interpretation not available for this aspect.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalTransitCalendar;
