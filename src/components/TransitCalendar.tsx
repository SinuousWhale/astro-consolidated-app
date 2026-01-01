import React, { useState, useMemo } from 'react';
import { calculatePlanetaryPositions } from '../utils/ephemeris';
import { getGeneralAspectInterpretation } from '../utils/generalAspectInterpretations';
import type { GeneralAspectInterpretation } from '../utils/generalAspectInterpretations';

interface TransitCalendarProps {
  startDate?: Date;
}

// Planet colors for visual distinction (matching SimpleApp)
const PLANET_COLORS: Record<string, string> = {
  'Sun': '#FFD700',        // Gold
  'Moon': '#C0C0C0',       // Silver
  'Mercury': '#32CD32',    // Lime Green
  'Venus': '#FF69B4',      // Hot Pink
  'Mars': '#FF4500',       // Red-Orange
  'Jupiter': '#FFA500',    // Orange
  'Saturn': '#8B4513',     // Saddle Brown
  'Uranus': '#00CED1',     // Dark Turquoise
  'Neptune': '#4169E1',    // Royal Blue
  'Pluto': '#800080',      // Purple
  'North Node': '#32CD32', // Lime Green
  'South Node': '#32CD32'  // Lime Green
};

// Convert hex color to rgba with transparency for backgrounds
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

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

// Aspect types and colors (matching SimpleApp)
const ASPECT_TYPES = [
  { name: 'Conjunction', angle: 0, color: '#9370DB', symbol: '☌' },
  { name: 'Opposition', angle: 180, color: '#FFA500', symbol: '☍' },
  { name: 'Trine', angle: 120, color: '#0000FF', symbol: '△' },
  { name: 'Square', angle: 90, color: '#FF0000', symbol: '□' },
  { name: 'Sextile', angle: 60, color: '#00FF00', symbol: '⚹' }
];

// Get orb for transit-to-transit aspects
const getTransitOrb = (planet1: string, planet2: string, aspectName: string): number => {
  const innerPlanets = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'];
  const nodes = ['North Node', 'South Node'];

  const isInner1 = innerPlanets.includes(planet1);
  const isInner2 = innerPlanets.includes(planet2);
  const isNode1 = nodes.includes(planet1);
  const isNode2 = nodes.includes(planet2);

  if (planet1 === 'Moon' || planet2 === 'Moon') {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 2;
    if (aspectName === 'Trine' || aspectName === 'Square') return 1.5;
    return 1;
  }

  if (isNode1 || isNode2) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 5;
    if (aspectName === 'Trine' || aspectName === 'Square') return 4;
    return 3;
  }

  if ((planet1 === 'Jupiter' && planet2 === 'Saturn') || (planet1 === 'Saturn' && planet2 === 'Jupiter')) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 6;
    if (aspectName === 'Trine' || aspectName === 'Square') return 5;
    return 4;
  }

  if (isInner1 && isInner2) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 3;
    if (aspectName === 'Trine' || aspectName === 'Square') return 2.5;
    return 2;
  }

  if (!isInner1 && !isInner2) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 5;
    if (aspectName === 'Trine' || aspectName === 'Square') return 4;
    return 3;
  }

  if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 4;
  if (aspectName === 'Trine' || aspectName === 'Square') return 3;
  return 2.5;
};

// Get orb for eclipse-to-planet aspects (tighter orbs than regular transits)
const getEclipseOrb = (planetName: string, aspectName: string): number => {
  const personalPlanets = ['Mercury', 'Venus', 'Mars'];
  const socialPlanets = ['Jupiter', 'Saturn'];
  const outerPlanets = ['Uranus', 'Neptune', 'Pluto'];
  const nodes = ['North Node', 'South Node'];

  // Personal planets (Mercury, Venus, Mars)
  if (personalPlanets.includes(planetName)) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 3;
    if (aspectName === 'Trine' || aspectName === 'Square') return 2.5;
    return 2;
  }

  // Nodes
  if (nodes.includes(planetName)) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 5;
    if (aspectName === 'Trine' || aspectName === 'Square') return 4;
    return 3;
  }

  // Social planets (Jupiter, Saturn) and Outer planets (Uranus, Neptune, Pluto)
  if (socialPlanets.includes(planetName) || outerPlanets.includes(planetName)) {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') return 4;
    if (aspectName === 'Trine' || aspectName === 'Square') return 3;
    return 2;
  }

  // Default (shouldn't reach here, but just in case)
  return 3;
};

// Calculate aspects for a given date
const calculateDayAspects = (date: Date, prevDate?: Date) => {
  const planets = calculatePlanetaryPositions(date);
  const prevPlanets = prevDate ? calculatePlanetaryPositions(prevDate) : [];
  const aspects: any[] = [];

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
  // Sample at 4 times during the day to catch lunations at any hour
  let bestNewMoonData: any = null;
  let bestFullMoonData: any = null;
  let bestNewMoonOrb = 999;
  let bestFullMoonOrb = 999;

  for (const hour of [0, 6, 12, 18]) {
    const sampleDate = new Date(date);
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
    aspects.push({
      planet1: 'Sun',
      planet2: 'Moon',
      symbol1: '☉',
      symbol2: '☽',
      color1: PLANET_COLORS['Sun'],
      color2: PLANET_COLORS['Moon'],
      aspect: bestNewMoonData.isEclipse ? 'Solar Eclipse' : 'New Moon',
      aspectSymbol: bestNewMoonData.isEclipse ? '🌑🌒' : '🌑',
      color: bestNewMoonData.isEclipse ? '#8B0000' : '#000000',
      orb: bestNewMoonOrb.toFixed(1),
      phase: bestNewMoonData.phase,
      position: positionStr,
      isLunation: true
    });

    // If it's a Solar Eclipse, check for aspects to planets (excluding Sun and Moon)
    if (bestNewMoonData.isEclipse) {
      const eclipseLongitude = bestNewMoonData.sunLongitude;
      planets.forEach(planet => {
        // Skip Sun and Moon
        if (planet.name === 'Sun' || planet.name === 'Moon') return;

        let diff = Math.abs(eclipseLongitude - planet.longitude);
        if (diff > 180) diff = 360 - diff;

        for (const aspectType of ASPECT_TYPES) {
          const orb = Math.abs(diff - aspectType.angle);
          const maxOrb = getEclipseOrb(planet.name, aspectType.name);

          if (orb <= maxOrb) {
            aspects.push({
              planet1: 'Solar Eclipse',
              planet2: planet.name,
              symbol1: '🌑🌒',
              symbol2: planet.symbol,
              color1: '#8B0000',
              color2: PLANET_COLORS[planet.name],
              aspect: aspectType.name,
              symbol: aspectType.symbol,
              color: aspectType.color,
              orb: orb.toFixed(1),
              isEclipseAspect: true
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
    aspects.push({
      planet1: 'Sun',
      planet2: 'Moon',
      symbol1: '☉',
      symbol2: '☽',
      color1: PLANET_COLORS['Sun'],
      color2: PLANET_COLORS['Moon'],
      aspect: bestFullMoonData.isLunarEclipse ? 'Lunar Eclipse' : 'Full Moon',
      aspectSymbol: bestFullMoonData.isLunarEclipse ? '🌕🌒' : '🌕',
      color: bestFullMoonData.isLunarEclipse ? '#8B0000' : '#FFD700',
      orb: bestFullMoonOrb.toFixed(1),
      phase: bestFullMoonData.phase,
      position: positionStr,
      isLunation: true
    });

    // If it's a Lunar Eclipse, check for aspects to planets (excluding Sun and Moon)
    if (bestFullMoonData.isLunarEclipse) {
      const eclipseLongitude = fullMoonLongitude;
      planets.forEach(planet => {
        // Skip Sun and Moon
        if (planet.name === 'Sun' || planet.name === 'Moon') return;

        let diff = Math.abs(eclipseLongitude - planet.longitude);
        if (diff > 180) diff = 360 - diff;

        for (const aspectType of ASPECT_TYPES) {
          const orb = Math.abs(diff - aspectType.angle);
          const maxOrb = getEclipseOrb(planet.name, aspectType.name);

          if (orb <= maxOrb) {
            aspects.push({
              planet1: 'Lunar Eclipse',
              planet2: planet.name,
              symbol1: '🌕🌒',
              symbol2: planet.symbol,
              color1: '#8B0000',
              color2: PLANET_COLORS[planet.name],
              aspect: aspectType.name,
              symbol: aspectType.symbol,
              color: aspectType.color,
              orb: orb.toFixed(1),
              isEclipseAspect: true
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
  const signSymbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];

  if (prevPlanets.length > 0) {
    planets.forEach((planet, idx) => {
      // Skip Moon ingresses (too frequent)
      if (planet.name === 'Moon') return;

      const currentSign = Math.floor(planet.longitude / 30);
      const degreeInSign = planet.longitude % 30;
      const prevPlanet = prevPlanets[idx];
      const prevSign = Math.floor(prevPlanet.longitude / 30);

      if (currentSign !== prevSign) {
        aspects.push({
          planet1: planet.name,
          planet2: '',
          symbol1: planet.symbol,
          symbol2: signSymbols[currentSign],
          color1: PLANET_COLORS[planet.name],
          color2: '#666',
          aspect: 'Ingress',
          aspectSymbol: '→',
          color: '#9370DB',
          orb: degreeInSign.toFixed(1),
          signName: signNames[currentSign],
          isIngress: true
        });
      }
    });
  }

  // Regular aspects (excluding Moon and Node oppositions)
  for (let i = 0; i < planets.length; i++) {
    for (let j = i + 1; j < planets.length; j++) {
      const planet1 = planets[i];
      const planet2 = planets[j];

      // Skip Moon aspects (lunations already added)
      if (planet1.name === 'Moon' || planet2.name === 'Moon') {
        continue;
      }

      let diff = Math.abs(planet1.longitude - planet2.longitude);
      if (diff > 180) diff = 360 - diff;

      for (const aspectType of ASPECT_TYPES) {
        // Skip North Node opposition South Node
        if (aspectType.name === 'Opposition' &&
            ((planet1.name === 'North Node' && planet2.name === 'South Node') ||
             (planet1.name === 'South Node' && planet2.name === 'North Node'))) {
          continue;
        }

        const orb = Math.abs(diff - aspectType.angle);
        const maxOrb = getTransitOrb(planet1.name, planet2.name, aspectType.name);

        if (orb <= maxOrb) {
          aspects.push({
            planet1: planet1.name,
            planet2: planet2.name,
            symbol1: planet1.symbol,
            symbol2: planet2.symbol,
            color1: PLANET_COLORS[planet1.name],
            color2: PLANET_COLORS[planet2.name],
            aspect: aspectType.name,
            symbol: aspectType.symbol,
            color: aspectType.color,
            orb: orb.toFixed(1)
          });
          break;
        }
      }
    }
  }

  // Sort: regular aspects first, then eclipse aspects, then ingresses, then lunations
  aspects.sort((a: any, b: any) => {
    if (a.isLunation && !b.isLunation) return 1;
    if (!a.isLunation && b.isLunation) return -1;
    if (a.isIngress && !b.isIngress && !b.isLunation) return 1;
    if (!a.isIngress && b.isIngress && !a.isLunation) return -1;
    if (a.isEclipseAspect && !b.isEclipseAspect && !b.isIngress && !b.isLunation) return 1;
    if (!a.isEclipseAspect && b.isEclipseAspect && !a.isIngress && !a.isLunation) return -1;
    if (a.orb !== undefined && b.orb !== undefined) {
      return parseFloat(a.orb) - parseFloat(b.orb);
    }
    return 0;
  });

  return aspects;
};

export const TransitCalendar: React.FC<TransitCalendarProps> = ({ startDate = new Date() }) => {
  const [viewMode, setViewMode] = useState<'7day' | '2week' | '3week' | 'month'>('7day');
  const [currentStartDate, setCurrentStartDate] = useState(startDate);
  const [selectedAspect, setSelectedAspect] = useState<{
    planet1: string;
    planet2: string;
    aspect: string;
    orb: string;
    interpretation: GeneralAspectInterpretation | null;
  } | null>(null);

  console.log('📅 Transit Calendar Loaded - Click aspects for interpretations!');

  const { calendarData, aspectKeys, sortedAspects, aspectsByDay } = useMemo(() => {
    const daysCount = viewMode === '7day' ? 7 : viewMode === '2week' ? 14 : viewMode === '3week' ? 21 : 30;
    const calendarData = [];

    for (let i = 0; i < daysCount; i++) {
      const date = new Date(currentStartDate);
      date.setDate(date.getDate() + i);

      // Get previous date for ingress detection
      const prevDate = new Date(date);
      prevDate.setDate(prevDate.getDate() - 1);

      const aspects = calculateDayAspects(date, prevDate);
      calendarData.push({ date, aspects });
    }

    // Collect all unique aspects (by planet pair and aspect type)
    const aspectKeys = new Map<string, any>();
    calendarData.forEach(day => {
      day.aspects.forEach((aspect: any) => {
        let key: string;
        if (aspect.isLunation) {
          key = `lunation-${aspect.aspect}`;
        } else if (aspect.isIngress) {
          key = `ingress-${aspect.planet1}-${aspect.signName}`;
        } else if (aspect.isEclipseAspect) {
          // Eclipse aspects: each gets its own row
          key = `eclipse-${aspect.planet1}-${aspect.aspect}-${aspect.planet2}`;
        } else {
          // For regular aspects, create a key based on planet pair and aspect type
          const planets = [aspect.planet1, aspect.planet2].sort();
          key = `${planets[0]}-${aspect.aspect}-${planets[1]}`;
        }

        if (!aspectKeys.has(key)) {
          aspectKeys.set(key, {
            key,
            planet1: aspect.planet1,
            planet2: aspect.planet2,
            aspect: aspect.aspect,
            symbol1: aspect.symbol1,
            symbol2: aspect.symbol2,
            color: aspect.color,
            color1: aspect.color1,
            color2: aspect.color2,
            symbol: aspect.symbol,
            isLunation: aspect.isLunation,
            isIngress: aspect.isIngress,
            isEclipseAspect: aspect.isEclipseAspect,
            signName: aspect.signName,
            sortPriority: aspect.isLunation ? 4 : aspect.isIngress ? 3 : aspect.isEclipseAspect ? 2 : 1
          });
        }
      });
    });

    // Sort aspects: regular first, eclipse aspects second, ingresses third, lunations last
    const sortedAspects = Array.from(aspectKeys.values()).sort((a, b) => {
      if (a.sortPriority !== b.sortPriority) return a.sortPriority - b.sortPriority;
      return 0;
    });

    // Create a mapping of which aspects are active on which days
    const aspectsByDay = calendarData.map(day => {
      const dayMap = new Map<string, any>();
      day.aspects.forEach((aspect: any) => {
        let key: string;
        if (aspect.isLunation) {
          key = `lunation-${aspect.aspect}`;
        } else if (aspect.isIngress) {
          key = `ingress-${aspect.planet1}-${aspect.signName}`;
        } else if (aspect.isEclipseAspect) {
          key = `eclipse-${aspect.planet1}-${aspect.aspect}-${aspect.planet2}`;
        } else {
          const planets = [aspect.planet1, aspect.planet2].sort();
          key = `${planets[0]}-${aspect.aspect}-${planets[1]}`;
        }
        dayMap.set(key, aspect);
      });
      return { date: day.date, aspectMap: dayMap };
    });

    return { calendarData, aspectKeys, sortedAspects, aspectsByDay };
  }, [currentStartDate, viewMode]);

  const goToPrevious = () => {
    const daysToSubtract = viewMode === '7day' ? 7 : viewMode === '2week' ? 14 : viewMode === '3week' ? 21 : 30;
    const newDate = new Date(currentStartDate);
    newDate.setDate(newDate.getDate() - daysToSubtract);
    setCurrentStartDate(newDate);
  };

  const goToNext = () => {
    const daysToAdd = viewMode === '7day' ? 7 : viewMode === '2week' ? 14 : viewMode === '3week' ? 21 : 30;
    const newDate = new Date(currentStartDate);
    newDate.setDate(newDate.getDate() + daysToAdd);
    setCurrentStartDate(newDate);
  };

  const goToToday = () => {
    setCurrentStartDate(new Date());
  };

  const handleAspectClick = async (aspect: any) => {
    console.log('🔍 Aspect clicked:', aspect);

    let interpretation: any = null;

    // Handle lunations (New Moon, Full Moon, Solar Eclipse, Lunar Eclipse)
    if (aspect.isLunation) {
      try {
        const { getSolarEclipseInterpretation, getNewMoonInterpretation, getFullMoonInterpretation } =
          await import('../utils/eclipseAndLunationInterpretations');

        // Extract sign from position string (e.g., "15°23' Aries" -> "Aries")
        const signMatch = aspect.position?.match(/\s([A-Z][a-z]+)$/);
        const sign = signMatch ? signMatch[1] : null;

        if (sign) {
          if (aspect.aspect === 'Solar Eclipse') {
            interpretation = getSolarEclipseInterpretation(sign);
          } else if (aspect.aspect === 'New Moon') {
            interpretation = getNewMoonInterpretation(sign);
          } else if (aspect.aspect === 'Full Moon' || aspect.aspect === 'Lunar Eclipse') {
            interpretation = getFullMoonInterpretation(sign);
          }
        }

        console.log('🌙 Lunation interpretation found:', interpretation ? 'Yes' : 'No', 'Sign:', sign);
      } catch (error) {
        console.error('Error loading lunation interpretation:', error);
      }

      setSelectedAspect({
        planet1: aspect.planet1,
        planet2: aspect.planet2,
        aspect: aspect.aspect,
        orb: aspect.orb,
        interpretation
      });
      return;
    }

    // Handle ingresses
    if (aspect.isIngress) {
      try {
        const { getDetailedIngressInterpretation } =
          await import('../utils/detailedIngressInterpretations');

        interpretation = getDetailedIngressInterpretation(aspect.planet1, aspect.signName);
        console.log('🔄 Ingress interpretation found:', interpretation ? 'Yes' : 'No',
                    'Planet:', aspect.planet1, 'Sign:', aspect.signName);
      } catch (error) {
        console.error('Error loading ingress interpretation:', error);
      }

      setSelectedAspect({
        planet1: aspect.planet1,
        planet2: aspect.signName,
        aspect: 'Ingress',
        orb: aspect.orb,
        interpretation
      });
      return;
    }

    // Handle eclipse aspects (e.g., Solar Eclipse square Uranus)
    if (aspect.isEclipseAspect) {
      try {
        const { getEclipseAspectInterpretation } =
          await import('../utils/eclipseAspectInterpretations');

        interpretation = getEclipseAspectInterpretation(aspect.planet2, aspect.aspect);
        console.log('🌑 Eclipse aspect interpretation found:', interpretation ? 'Yes' : 'No',
                    'Planet:', aspect.planet2, 'Aspect:', aspect.aspect);
      } catch (error) {
        console.error('Error loading eclipse aspect interpretation:', error);
      }

      setSelectedAspect({
        planet1: aspect.planet1,
        planet2: aspect.planet2,
        aspect: aspect.aspect,
        orb: aspect.orb,
        interpretation
      });
      return;
    }

    // Handle regular transit-to-transit aspects
    const maxOrb = getTransitOrb(aspect.planet1, aspect.planet2, aspect.aspect);
    const currentOrb = parseFloat(aspect.orb);

    interpretation = getGeneralAspectInterpretation(
      aspect.planet1,
      aspect.planet2,
      aspect.aspect,
      currentOrb,
      maxOrb
    );

    console.log('📖 Interpretation found:', interpretation ? 'Yes' : 'No');

    setSelectedAspect({
      planet1: aspect.planet1,
      planet2: aspect.planet2,
      aspect: aspect.aspect,
      orb: aspect.orb,
      interpretation
    });
  };

  const closeModal = () => {
    setSelectedAspect(null);
  };

  // Get date range display for current view
  const getDateRangeDisplay = () => {
    const daysCount = viewMode === '7day' ? 7 : viewMode === '2week' ? 14 : viewMode === '3week' ? 21 : 30;
    const endDate = new Date(currentStartDate);
    endDate.setDate(endDate.getDate() + daysCount - 1);

    const startMonth = currentStartDate.toLocaleDateString('en-US', { month: 'long' });
    const startYear = currentStartDate.getFullYear();
    const endMonth = endDate.toLocaleDateString('en-US', { month: 'long' });
    const endYear = endDate.getFullYear();

    // Same month and year
    if (startMonth === endMonth && startYear === endYear) {
      return `${startMonth} ${startYear}`;
    }
    // Same year, different months
    if (startYear === endYear) {
      return `${startMonth} - ${endMonth} ${startYear}`;
    }
    // Different years
    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '10px' }}>
        Transit Calendar - Active Cosmic Currents
      </h2>

      {/* Date Range Display */}
      <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: '600', color: '#4a90e2', marginBottom: '20px' }}>
        {getDateRangeDisplay()}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setViewMode('7day')}
            style={{
              padding: '8px 16px',
              background: viewMode === '7day' ? '#4a90e2' : '#e0e0e0',
              color: viewMode === '7day' ? 'white' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: viewMode === '7day' ? 'bold' : 'normal'
            }}
          >
            7 Days
          </button>
          <button
            onClick={() => setViewMode('2week')}
            style={{
              padding: '8px 16px',
              background: viewMode === '2week' ? '#4a90e2' : '#e0e0e0',
              color: viewMode === '2week' ? 'white' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: viewMode === '2week' ? 'bold' : 'normal'
            }}
          >
            2 Weeks
          </button>
          <button
            onClick={() => setViewMode('3week')}
            style={{
              padding: '8px 16px',
              background: viewMode === '3week' ? '#4a90e2' : '#e0e0e0',
              color: viewMode === '3week' ? 'white' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: viewMode === '3week' ? 'bold' : 'normal'
            }}
          >
            3 Weeks
          </button>
          <button
            onClick={() => setViewMode('month')}
            style={{
              padding: '8px 16px',
              background: viewMode === 'month' ? '#4a90e2' : '#e0e0e0',
              color: viewMode === 'month' ? 'white' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: viewMode === 'month' ? 'bold' : 'normal'
            }}
          >
            Month
          </button>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button
            onClick={goToPrevious}
            style={{
              padding: '8px 16px',
              background: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ← Previous
          </button>
          <button
            onClick={goToToday}
            style={{
              padding: '8px 16px',
              background: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Today
          </button>
          <button
            onClick={goToNext}
            style={{
              padding: '8px 16px',
              background: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Next →
          </button>
        </div>
      </div>

      {/* Calendar Grid - Table Layout for Aligned Aspects */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
          {/* Header Row with Dates */}
          <thead>
            <tr>
              <th style={{
                padding: '8px 4px',
                textAlign: 'center',
                borderBottom: '2px solid #4a90e2',
                position: 'sticky',
                left: 0,
                backgroundColor: '#f9f9f9',
                fontSize: '11px',
                fontWeight: 'bold',
                width: '100px',
                minWidth: '100px',
                zIndex: 2
              }}>
                Aspect
              </th>
              {aspectsByDay.map((dayData, idx) => {
                const today = new Date();
                const isToday = dayData.date.toDateString() === today.toDateString();
                return (
                  <th key={idx} style={{
                    padding: '8px 4px',
                    textAlign: 'center',
                    borderBottom: '2px solid #4a90e2',
                    backgroundColor: isToday ? '#f0fff4' : 'white',
                    minWidth: '80px'
                  }}>
                    <div style={{ fontSize: '12px', fontWeight: 'bold', color: isToday ? '#28a745' : '#333' }}>
                      {dayData.date.toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                    <div style={{ fontSize: '10px', color: '#666' }}>
                      {dayData.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    {isToday && <div style={{ color: '#28a745', fontSize: '9px', fontWeight: 'bold' }}>Today</div>}
                  </th>
                );
              })}
            </tr>
          </thead>

          {/* Aspect Rows */}
          <tbody>
            {sortedAspects.map((aspectTemplate, rowIdx) => (
              <tr key={rowIdx} style={{ borderBottom: '1px solid #eee' }}>
                {/* Aspect Label Column */}
                <td
                  style={{
                    padding: '8px 4px',
                    fontWeight: 'bold',
                    fontSize: '11px',
                    position: 'sticky',
                    left: 0,
                    backgroundColor: '#f9f9f9',
                    borderRight: '1px solid #ddd',
                    zIndex: 1,
                    width: '100px',
                    minWidth: '100px',
                    textAlign: 'center'
                  }}
                >
                  {aspectTemplate.isLunation ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
                      <span>{aspectTemplate.symbol}</span>
                    </div>
                  ) : aspectTemplate.isIngress ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px', flexWrap: 'wrap' }}>
                      <span style={{ color: aspectTemplate.color1 }}>{aspectTemplate.symbol1}</span>
                      <span>→</span>
                      <span style={{ fontSize: '9px' }}>{aspectTemplate.signName}</span>
                    </div>
                  ) : aspectTemplate.isEclipseAspect ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px', flexWrap: 'wrap' }}>
                      <span style={{ color: aspectTemplate.color1 }}>{aspectTemplate.symbol1}</span>
                      <span style={{ color: aspectTemplate.color }}>{aspectTemplate.symbol}</span>
                      <span style={{ color: aspectTemplate.color2 }}>{aspectTemplate.symbol2}</span>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
                      <span style={{ color: aspectTemplate.color1 }}>{aspectTemplate.symbol1}</span>
                      <span style={{ color: aspectTemplate.color }}>{aspectTemplate.symbol}</span>
                      <span style={{ color: aspectTemplate.color2 }}>{aspectTemplate.symbol2}</span>
                    </div>
                  )}
                </td>

                {/* Day Columns */}
                {aspectsByDay.map((dayData, colIdx) => {
                  const today = new Date();
                  const isToday = dayData.date.toDateString() === today.toDateString();
                  const aspect = dayData.aspectMap.get(aspectTemplate.key);

                  return (
                    <td key={colIdx} style={{
                      padding: '4px',
                      textAlign: 'center',
                      backgroundColor: isToday ? '#f0fff4' : 'white',
                      borderRight: '1px solid #f0f0f0'
                    }}>
                      {aspect ? (
                        <div
                          onClick={() => handleAspectClick(aspect)}
                          title={
                            aspect.isLunation
                              ? `${aspect.aspect} at ${aspect.position} (${aspect.phase})`
                              : aspect.isIngress
                                ? `${aspect.planet1} enters ${aspect.signName}`
                                : aspect.isEclipseAspect
                                  ? `${aspect.planet1} ${aspect.aspect} ${aspect.planet2}, ${aspect.orb}° orb (Eclipse Aspect)`
                                  : `${aspect.planet1} ${aspect.aspect} ${aspect.planet2}, ${aspect.orb}° orb`
                          }
                          style={{
                            padding: '6px 4px',
                            backgroundColor: aspect.isLunation ? '#fff3cd' : aspect.isEclipseAspect ? '#ffe4e4' : hexToRgba(aspect.color1, 0.2),
                            borderRadius: '3px',
                            borderLeft: `3px solid ${aspect.color}`,
                            fontSize: '10px',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '50px',
                            gap: '2px'
                          }}
                        >
                          {aspect.isLunation ? (
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontWeight: 'bold', fontSize: '10px' }}>{aspect.aspectSymbol} {aspect.aspect}</div>
                              <div style={{ fontSize: '8px', color: '#666' }}>at {aspect.position}</div>
                              <div style={{ fontSize: '8px', color: '#666' }}>({aspect.phase})</div>
                            </div>
                          ) : aspect.isIngress ? (
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontWeight: 'bold', fontSize: '10px' }}>
                                <span style={{ color: aspect.color1 }}>{aspect.symbol1}</span>
                                {' '}→{' '}
                                <span>{aspect.symbol2}</span>
                              </div>
                              <div style={{ fontSize: '8px', color: '#666' }}>{aspect.planet1} enters {aspect.signName}</div>
                              <div style={{ fontSize: '8px', color: '#666' }}>{aspect.orb}° in</div>
                            </div>
                          ) : aspect.isEclipseAspect ? (
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontWeight: 'bold', fontSize: '11px', marginBottom: '2px' }}>
                                <span style={{ color: aspect.color1 }}>{aspect.symbol1}</span>
                                {' '}<span style={{ color: aspect.color }}>{aspect.symbol}</span>{' '}
                                <span style={{ color: aspect.color2 }}>{aspect.symbol2}</span>
                              </div>
                              <div style={{ fontSize: '9px', color: '#555', lineHeight: '1.2' }}>
                                {aspect.planet1} {aspect.aspect} {aspect.planet2}
                              </div>
                              <div style={{ fontSize: '8px', color: '#999' }}>{aspect.orb}° orb</div>
                              <div style={{ fontSize: '7px', color: '#8B0000', fontWeight: 'bold' }}>ECLIPSE</div>
                            </div>
                          ) : (
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontWeight: 'bold', fontSize: '11px', marginBottom: '2px' }}>
                                <span style={{ color: aspect.color1 }}>{aspect.symbol1}</span>
                                {' '}<span style={{ color: aspect.color }}>{aspect.symbol}</span>{' '}
                                <span style={{ color: aspect.color2 }}>{aspect.symbol2}</span>
                              </div>
                              <div style={{ fontSize: '9px', color: '#555', lineHeight: '1.2' }}>
                                {aspect.planet1} {aspect.aspect} {aspect.planet2}
                              </div>
                              <div style={{ fontSize: '8px', color: '#999' }}>{aspect.orb}° orb</div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div style={{ minHeight: '50px' }}></div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div style={{ marginTop: '30px', padding: '15px', background: '#f9f9f9', borderRadius: '8px' }}>
        <h4 style={{ marginBottom: '10px', fontSize: '14px' }}>Legend</h4>

        {/* Aspect Types */}
        <div style={{ marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '8px', color: '#555' }}>Aspect Types:</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', fontSize: '12px' }}>
            {ASPECT_TYPES.map(aspect => (
              <div key={aspect.name} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ color: aspect.color, fontSize: '16px', fontWeight: 'bold' }}>{aspect.symbol}</span>
                <span>{aspect.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Orb Settings */}
        <div style={{ marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '8px', color: '#555' }}>Transit Orb Settings (Conj/Opp — Trine/Square — Sextile):</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '8px', fontSize: '11px', color: '#666' }}>
            <div>☽ <strong>Moon:</strong> 2° / 1.5° / 1°</div>
            <div>☊☋ <strong>Nodes:</strong> 5° / 4° / 3°</div>
            <div>♃♄ <strong>Jupiter-Saturn:</strong> 6° / 5° / 4°</div>
            <div>☉☿♀♂ <strong>Inner-to-Inner:</strong> 3° / 2.5° / 2°</div>
            <div>♃♄♅♆♇ <strong>Outer-to-Outer:</strong> 5° / 4° / 3°</div>
            <div>🔀 <strong>Mixed (Inner-Outer):</strong> 4° / 3° / 2.5°</div>
          </div>
        </div>

        {/* Eclipse Aspect Orb Settings */}
        <div style={{ marginBottom: '15px', padding: '10px', background: '#fff5f5', borderRadius: '6px', border: '1px solid #ffe4e4' }}>
          <div style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '8px', color: '#8B0000' }}>🌑🌒 Eclipse Aspect Orbs (Tighter than regular transits):</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '8px', fontSize: '11px', color: '#666' }}>
            <div>☿♀♂ <strong>Personal Planets:</strong> 3° / 2.5° / 2°</div>
            <div>♃♄♅♆♇ <strong>Social & Outer Planets:</strong> 4° / 3° / 2°</div>
            <div>☊☋ <strong>Lunar Nodes:</strong> 5° / 4° / 3°</div>
          </div>
          <div style={{ fontSize: '10px', color: '#8B0000', marginTop: '5px', fontStyle: 'italic' }}>
            Eclipse aspects do not include the Sun or Moon themselves (already part of the eclipse)
          </div>
        </div>

        {/* Tip */}
        <div style={{ marginTop: '15px', padding: '10px', background: '#e8f4ff', borderRadius: '6px', fontSize: '12px', color: '#2c5aa0' }}>
          💡 <strong>Tip:</strong> Click on aspects, lunations (New/Full Moons/Eclipses), eclipse aspects (e.g., Solar Eclipse square Uranus), and ingresses to view detailed interpretations.
        </div>
      </div>

      {/* Modal for Aspect Interpretation */}
      {selectedAspect && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.7)',
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
              background: 'white',
              borderRadius: '12px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}
          >
            {selectedAspect.interpretation ? (
              <div>
                {/* Header */}
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '20px',
                  borderRadius: '12px 12px 0 0',
                  position: 'sticky',
                  top: 0,
                  zIndex: 1
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div>
                      <h2 style={{ margin: 0, marginBottom: '8px' }}>{selectedAspect.interpretation.name}</h2>
                      <div style={{ fontSize: '14px', opacity: 0.9 }}>
                        {selectedAspect.interpretation.frequency}
                      </div>
                    </div>
                    <button
                      onClick={closeModal}
                      style={{
                        background: 'rgba(255,255,255,0.2)',
                        border: 'none',
                        color: 'white',
                        fontSize: '24px',
                        cursor: 'pointer',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      ×
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  {/* Duration */}
                  <div style={{ marginBottom: '20px', padding: '12px', background: '#fff3cd', borderRadius: '6px', borderLeft: '4px solid #ffc107' }}>
                    <strong>⏱️ Duration:</strong> {selectedAspect.interpretation.duration}
                  </div>

                  {/* Aspect Status */}
                  {selectedAspect.interpretation.currentOrb !== undefined && selectedAspect.interpretation.direction && (
                    <div style={{ marginBottom: '20px', padding: '12px', background: '#e8f4ff', borderRadius: '6px', borderLeft: '4px solid #4a90e2' }}>
                      <strong>📅 Aspect Status:</strong> Currently {selectedAspect.interpretation.currentOrb?.toFixed(2)}° from exact{selectedAspect.interpretation.direction === 'exact' ? ' — at exact aspect now' : selectedAspect.interpretation.direction === 'approaching' ? ' — approaching exact' : ' — separating from exact'}
                    </div>
                  )}

                  {/* Planet Energies */}
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '16px', marginBottom: '12px', color: '#333' }}>🌟 Planet Energies</h3>
                    <div style={{ padding: '12px', background: '#f8f9fa', borderRadius: '6px', marginBottom: '10px' }}>
                      <strong style={{ color: PLANET_COLORS[selectedAspect.planet1] }}>{selectedAspect.planet1}:</strong> {selectedAspect.interpretation.planet1Energy}
                    </div>
                    <div style={{ padding: '12px', background: '#f8f9fa', borderRadius: '6px' }}>
                      <strong style={{ color: PLANET_COLORS[selectedAspect.planet2] }}>{selectedAspect.planet2}:</strong> {selectedAspect.interpretation.planet2Energy}
                    </div>
                  </div>

                  {/* Aspect Meaning */}
                  <div style={{ marginBottom: '20px', padding: '15px', background: '#e8f4ff', borderRadius: '6px', borderLeft: '4px solid #4a90e2' }}>
                    <h3 style={{ fontSize: '16px', marginBottom: '8px', color: '#2c5aa0' }}>✨ Aspect Meaning</h3>
                    <p style={{ margin: 0, lineHeight: '1.6' }}>{selectedAspect.interpretation.aspectMeaning}</p>
                  </div>

                  {/* Life Areas */}
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '16px', marginBottom: '12px', color: '#333' }}>🎯 How This Affects Different Life Areas</h3>

                    <div style={{ marginBottom: '12px', padding: '12px', background: '#ffe8f0', borderRadius: '6px', borderLeft: '4px solid #e91e63' }}>
                      <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#c2185b' }}>💕 Love & Relationships</h4>
                      <p style={{ margin: 0, lineHeight: '1.6', fontSize: '13px' }}>{selectedAspect.interpretation.loveRelationships}</p>
                    </div>

                    <div style={{ marginBottom: '12px', padding: '12px', background: '#fff3e0', borderRadius: '6px', borderLeft: '4px solid #ff9800' }}>
                      <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#e65100' }}>🏠 Family & Home</h4>
                      <p style={{ margin: 0, lineHeight: '1.6', fontSize: '13px' }}>{selectedAspect.interpretation.familyHome}</p>
                    </div>

                    <div style={{ marginBottom: '12px', padding: '12px', background: '#e8f5e9', borderRadius: '6px', borderLeft: '4px solid #4caf50' }}>
                      <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#2e7d32' }}>💼 Business & Career</h4>
                      <p style={{ margin: 0, lineHeight: '1.6', fontSize: '13px' }}>{selectedAspect.interpretation.businessCareer}</p>
                    </div>

                    <div style={{ marginBottom: '12px', padding: '12px', background: '#f3e5f5', borderRadius: '6px', borderLeft: '4px solid #9c27b0' }}>
                      <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6a1b9a' }}>💰 Money & Finances</h4>
                      <p style={{ margin: 0, lineHeight: '1.6', fontSize: '13px' }}>{selectedAspect.interpretation.moneyFinances}</p>
                    </div>
                  </div>

                  {/* Predictions */}
                  <div style={{ marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '16px', marginBottom: '12px', color: '#333' }}>🔮 10 Predictions - What Can Happen</h3>
                    <div style={{ background: '#f8f9fa', borderRadius: '6px', padding: '15px' }}>
                      {selectedAspect.interpretation.predictions.map((prediction, idx) => (
                        <div key={idx} style={{
                          marginBottom: idx < selectedAspect.interpretation!.predictions.length - 1 ? '10px' : 0,
                          paddingBottom: idx < selectedAspect.interpretation!.predictions.length - 1 ? '10px' : 0,
                          borderBottom: idx < selectedAspect.interpretation!.predictions.length - 1 ? '1px solid #dee2e6' : 'none'
                        }}>
                          <div style={{ display: 'flex', gap: '10px' }}>
                            <div style={{
                              minWidth: '24px',
                              height: '24px',
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                              color: 'white',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '12px',
                              fontWeight: 'bold'
                            }}>
                              {idx + 1}
                            </div>
                            <p style={{ margin: 0, lineHeight: '1.6', fontSize: '13px', flex: 1 }}>{prediction}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ padding: '40px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>📚</div>
                <h3 style={{ color: '#666', marginBottom: '10px' }}>Interpretation Not Available</h3>
                <p style={{ color: '#999', marginBottom: '20px' }}>
                  Detailed interpretation for {selectedAspect.planet1} {selectedAspect.aspect} {selectedAspect.planet2} is not yet available.
                </p>
                <p style={{ color: '#999', fontSize: '14px' }}>
                  Currently available: Saturn-Uranus, Jupiter-Saturn, Mars-Jupiter (all aspects)
                </p>
                <button
                  onClick={closeModal}
                  style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    background: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TransitCalendar;



