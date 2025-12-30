import React, { useState, useEffect } from 'react';
import { calculatePlanetaryPositions, calculateAscendant, calculateHouses } from '../utils/ephemeris';

interface SimpleWheelFixedProps {
  natalDate: Date;
  transitDate: Date;
  houseSystem: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utcOffset: number; // UTC offset in hours (e.g., -5 for EST, +5.5 for India)
  firstHouseReference: string; // 'ascendant', 'sun', 'moon', 'manual'
  manualFirstHouseSign: string;
  natalPlanetFilter: string;
  transitPlanetFilter: string;
  onDataUpdate?: (data: any) => void;
}

const ZODIAC_SIGNS = [
  { name: 'Aries', symbol: '♈', color: '#FF6B6B' },
  { name: 'Taurus', symbol: '♉', color: '#4ECDC4' },
  { name: 'Gemini', symbol: '♊', color: '#45B7D1' },
  { name: 'Cancer', symbol: '♋', color: '#96CEB4' },
  { name: 'Leo', symbol: '♌', color: '#FFEAA7' },
  { name: 'Virgo', symbol: '♍', color: '#DDA0DD' },
  { name: 'Libra', symbol: '♎', color: '#FFB6C1' },
  { name: 'Scorpio', symbol: '♏', color: '#8B008B' },
  { name: 'Sagittarius', symbol: '♐', color: '#FF69B4' },
  { name: 'Capricorn', symbol: '♑', color: '#708090' },
  { name: 'Aquarius', symbol: '♒', color: '#00CED1' },
  { name: 'Pisces', symbol: '♓', color: '#9370DB' }
];

const PLANETS = [
  { name: 'Sun', symbol: '☉', color: '#FFD700' },
  { name: 'Moon', symbol: '☽', color: '#C0C0C0' },
  { name: 'Mercury', symbol: '☿', color: '#FF8C00' },
  { name: 'Venus', symbol: '♀', color: '#FF1493' },
  { name: 'Mars', symbol: '♂', color: '#DC143C' },
  { name: 'Jupiter', symbol: '♃', color: '#4B0082' },
  { name: 'Saturn', symbol: '♄', color: '#8B4513' },
  { name: 'Uranus', symbol: '♅', color: '#40E0D0' },
  { name: 'Neptune', symbol: '♆', color: '#000080' },
  { name: 'Pluto', symbol: '♇', color: '#800020' },
  { name: 'North Node', symbol: '☊', color: '#006400' },
  { name: 'South Node', symbol: '☋', color: '#8B0000' }
];

// Major aspects with their angles and orbs
const MAJOR_ASPECTS = [
  { name: 'Conjunction', angle: 0, orb: 8, color: '#9370DB', style: 'solid' },      // Purple
  { name: 'Opposition', angle: 180, orb: 8, color: '#FFA500', style: 'solid' },    // Amber
  { name: 'Trine', angle: 120, orb: 8, color: '#0000FF', style: 'solid' },         // Blue
  { name: 'Square', angle: 90, orb: 8, color: '#FF0000', style: 'solid' },         // Red
  { name: 'Sextile', angle: 60, orb: 6, color: '#00FF00', style: 'dashed' }        // Green
];

// Planet classifications for orb calculations
const INNER_PLANETS = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'];
const OUTER_PLANETS = ['Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

// Get appropriate orb for transit-to-transit aspects based on planet types
const getTransitOrb = (planet1Name: string, planet2Name: string, baseOrb: number): number => {
  const isInner1 = INNER_PLANETS.includes(planet1Name);
  const isInner2 = INNER_PLANETS.includes(planet2Name);

  // Both inner planets: use tighter orb (3-5 degrees)
  if (isInner1 && isInner2) {
    return Math.min(baseOrb, 5);
  }

  // Both outer planets: use wider orb (5-8 degrees)
  if (!isInner1 && !isInner2) {
    return Math.min(baseOrb, 8);
  }

  // Mixed (one inner, one outer): use middle ground (4-6 degrees)
  return Math.min(baseOrb, 6);
};

// Get appropriate orb for natal-to-transit aspects based on transiting planet
const getNatalTransitOrb = (transitPlanetName: string, aspectName: string): number => {
  // Inner/Fast planets (Sun, Moon, Mercury, Venus, Mars): 1.5-2°
  if (INNER_PLANETS.includes(transitPlanetName)) {
    return aspectName === 'Sextile' ? 1.5 : 2;
  }

  // Social planets (Jupiter, Saturn): 3-4°
  if (transitPlanetName === 'Jupiter' || transitPlanetName === 'Saturn') {
    if (aspectName === 'Conjunction' || aspectName === 'Opposition') {
      return 4;
    }
    return 3; // Square, Trine, Sextile
  }

  // Outer planets (Uranus, Neptune, Pluto): 1-2°
  if (OUTER_PLANETS.includes(transitPlanetName)) {
    if (aspectName === 'Sextile') {
      return 1;
    }
    if (aspectName === 'Square' || aspectName === 'Trine') {
      return 1.5;
    }
    return 2; // Conjunction, Opposition
  }

  // Nodes: use same as outer planets
  return aspectName === 'Sextile' ? 1 : 2;
};

export const SimpleWheelFixed: React.FC<SimpleWheelFixedProps> = ({
  natalDate,
  transitDate,
  houseSystem,
  latitude,
  longitude,
  timezone,
  utcOffset,
  firstHouseReference,
  manualFirstHouseSign,
  natalPlanetFilter,
  transitPlanetFilter,
  onDataUpdate
}) => {
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);
  const centerX = 300;
  const centerY = 300;
  const houseNumberRadius = 295;  // Outermost ring for house numbers
  const outerRadius = 280;
  const transitRadius = 240;
  const natalRadius = 200;
  const innerRadius = 160;

  // Convert natal date to UTC for accurate calculations
  // The natalDate from DatePicker represents the user's INTENDED local time at the birth location.
  // DatePicker stores this as a Date in the browser's local timezone.
  // We need to interpret the displayed hours/minutes as being in the BIRTH location's timezone.
  //
  // Example: User enters 16:00 for Pitești, Romania (UTC+3 in summer)
  // DatePicker creates a Date where getHours() = 16 in browser local time
  // We need to treat this as 16:00 Romania time, so UTC = 16:00 - 3 = 13:00 UTC
  //
  // We extract the displayed time components and reconstruct as UTC
  const year = natalDate.getFullYear();
  const month = natalDate.getMonth();
  const day = natalDate.getDate();
  const hours = natalDate.getHours();
  const minutes = natalDate.getMinutes();
  const seconds = natalDate.getSeconds();

  // Create UTC date by treating the displayed time as birth location time
  // then adjusting by the birth location's UTC offset
  const natalDateUTC = new Date(Date.UTC(year, month, day, hours, minutes, seconds) - utcOffset * 60 * 60 * 1000);

  // Transit date: The DatePicker gives us a Date where the displayed time IS the local time
  // we want to evaluate. JavaScript Date stores UTC internally, so when we select
  // "Jan 1, 2026 00:00" it actually creates a Date representing midnight LOCAL time.
  // The astronomy-engine uses the Date's internal UTC representation, so we pass it directly.
  // The transit positions should be calculated for the UTC moment that corresponds to
  // the local time shown in the picker.
  const allNatalPlanetsData = calculatePlanetaryPositions(natalDateUTC);
  const allTransitPlanetsData = calculatePlanetaryPositions(transitDate);

  // Calculate actual ascendant from birth location and time (using UTC)
  const ascendantLongitude = calculateAscendant(natalDateUTC, latitude, longitude);

  // Determine the first house longitude based on selected reference
  let firstHouseLongitude = ascendantLongitude; // Default to ascendant

  if (firstHouseReference === 'sun') {
    const sunData = allNatalPlanetsData.find(p => p.name === 'Sun');
    if (sunData) firstHouseLongitude = sunData.longitude;
  } else if (firstHouseReference === 'moon') {
    const moonData = allNatalPlanetsData.find(p => p.name === 'Moon');
    if (moonData) firstHouseLongitude = moonData.longitude;
  } else if (firstHouseReference === 'manual') {
    // Convert sign name to longitude (0° of that sign)
    const signNames = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
                       'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    const signIdx = signNames.indexOf(manualFirstHouseSign);
    firstHouseLongitude = signIdx * 30; // 0° of the selected sign
  }

  // House 1 is always at 270° in the visual representation (6 o'clock, bottom left)
  const house1Position = 270;

  // Calculate which zodiac sign the first house falls in
  const signIndex = Math.floor(firstHouseLongitude / 30);

  // Convert angle for SVG (0° at 3 o'clock, but we want 0° at 12 o'clock)
  const angleToSVG = (angle: number) => angle - 90;

  // Create path for zodiac segment (signs rotate, houses stay fixed)
  const createZodiacPath = (index: number) => {
    // For whole-sign houses: each house = one zodiac sign exactly
    // The first house (at 270°) should contain the ascendant sign
    // index 0 = ascendant sign, index 1 = next sign, etc.
    // Sign boundaries align exactly with house boundaries

    // Each house/sign is exactly 30° wide
    // House 1 starts at 270° and goes counter-clockwise
    const startAngle = angleToSVG(house1Position - index * 30);
    const endAngle = angleToSVG(house1Position - (index + 1) * 30);

    const actualSignIndex = (signIndex + index) % 12;
    const actualZodiacIndex = actualSignIndex;

    const startOuterX = centerX + outerRadius * Math.cos(startAngle * Math.PI / 180);
    const startOuterY = centerY + outerRadius * Math.sin(startAngle * Math.PI / 180);
    const endOuterX = centerX + outerRadius * Math.cos(endAngle * Math.PI / 180);
    const endOuterY = centerY + outerRadius * Math.sin(endAngle * Math.PI / 180);

    const startInnerX = centerX + transitRadius * Math.cos(startAngle * Math.PI / 180);
    const startInnerY = centerY + transitRadius * Math.sin(startAngle * Math.PI / 180);
    const endInnerX = centerX + transitRadius * Math.cos(endAngle * Math.PI / 180);
    const endInnerY = centerY + transitRadius * Math.sin(endAngle * Math.PI / 180);

    return `
      M ${startOuterX} ${startOuterY}
      A ${outerRadius} ${outerRadius} 0 0 0 ${endOuterX} ${endOuterY}
      L ${endInnerX} ${endInnerY}
      A ${transitRadius} ${transitRadius} 0 0 1 ${startInnerX} ${startInnerY}
      Z
    `;
  };

  // Convert ephemeris data to visual positions
  const convertToVisualPosition = (planetData: any, radius: number) => {
    // Planet's actual longitude in zodiac (0-360°)
    const actualLongitude = planetData.longitude;

    // For whole-sign houses, we align sign boundaries with house boundaries
    // The ascendant sign starts at house1Position (270°)
    // So 0° of the ascendant sign is at 270° on the wheel

    // Calculate the start longitude of the ascendant sign (e.g., if asc is 15° Aries, this gives 0°)
    const ascendantSignStartLongitude = Math.floor(firstHouseLongitude / 30) * 30;

    // Calculate visual angle: rotate so ascendant sign start is at house1Position
    // visualAngle = house1Position - (planet's longitude - ascendant sign start longitude)
    const visualAngle = (house1Position - (actualLongitude - ascendantSignStartLongitude) + 720) % 360;

    const svgAngle = angleToSVG(visualAngle);
    const x = centerX + radius * Math.cos(svgAngle * Math.PI / 180);
    const y = centerY + radius * Math.sin(svgAngle * Math.PI / 180);

    return {
      x,
      y,
      angle: visualAngle,
      zodiacSign: planetData.sign,
      degree: Math.floor(planetData.degreeInSign),
      minute: Math.floor((planetData.degreeInSign % 1) * 60),
      name: planetData.name,
      symbol: planetData.symbol,
      color: planetData.color,
      isRetrograde: planetData.isRetrograde
    };
  };

  // Calculate house cusps based on house system
  const getHouseCusps = () => {
    const cusps = [];

    // House 1 (ASC) is at house1Position (270° = 6 o'clock, bottom left)
    // Houses go counter-clockwise: H1, H2, H3, etc.
    for (let i = 0; i < 12; i++) {
      cusps.push((house1Position - i * 30 + 360) % 360);
    }
    return cusps;
  };

  // Calculate which house a planet is in based on its longitude
  const getHouseNumber = (planetLongitude: number): number => {
    // For whole-sign houses, each sign = one house
    // Calculate which sign the planet is in
    const planetSignIndex = Math.floor(planetLongitude / 30);

    // Calculate which house this corresponds to
    // The ascendant sign is in house 1
    // Each subsequent sign is in the next house
    const houseNumber = ((planetSignIndex - signIndex + 12) % 12) + 1;

    return houseNumber;
  };

  // Filter planets based on selection
  const filterPlanets = (planets: any[], filter: string) => {
    if (filter === 'all') return planets;

    // Inner planets: Sun, Moon, Mercury, Venus, Mars
    const innerPlanets = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars'];
    // Outer planets: Jupiter, Saturn, Uranus, Neptune, Pluto
    const outerPlanets = ['Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
    // Nodes
    const nodes = ['North Node', 'South Node'];

    if (filter === 'inner') {
      return planets.filter(p => innerPlanets.includes(p.name));
    } else if (filter === 'outer') {
      return planets.filter(p => outerPlanets.includes(p.name));
    } else if (filter === 'outer-nodes') {
      return planets.filter(p => outerPlanets.includes(p.name) || nodes.includes(p.name));
    } else if (filter === 'nodes') {
      return planets.filter(p => nodes.includes(p.name));
    } else if (filter.includes('-outer')) {
      // Inner planet + outer planets (e.g., 'sun-outer', 'moon-outer')
      const innerPlanet = filter.split('-')[0];
      const planetName = innerPlanet.charAt(0).toUpperCase() + innerPlanet.slice(1);
      return planets.filter(p => p.name === planetName || outerPlanets.includes(p.name));
    } else if (filter.includes('-inner')) {
      // Outer planet + inner planets (e.g., 'jupiter-inner', 'saturn-inner')
      const outerPlanet = filter.split('-')[0];
      const planetName = outerPlanet.charAt(0).toUpperCase() + outerPlanet.slice(1);
      return planets.filter(p => p.name === planetName || innerPlanets.includes(p.name));
    } else {
      // Single planet filter (e.g., 'sun', 'moon', etc.)
      const planetName = filter.charAt(0).toUpperCase() + filter.slice(1);
      return planets.filter(p => p.name === planetName);
    }
  };

  // Check if two planets form an aspect
  // For transit-to-transit: pass both planet names
  // For natal-to-transit: pass transit planet name only (planet2Name should be transit)
  // For natal-to-midpoint: pass isMidpoint = true
  const checkAspect = (angle1: number, angle2: number, planet1Name?: string, planet2Name?: string, isNatalTransit?: boolean, isMidpoint?: boolean) => {
    let diff = Math.abs(angle1 - angle2);
    if (diff > 180) diff = 360 - diff;

    for (const aspect of MAJOR_ASPECTS) {
      const orb = Math.abs(diff - aspect.angle);

      let effectiveOrb = aspect.orb;

      // Natal-to-midpoint: use tight 2° orb (traditional midpoint astrology)
      if (isMidpoint) {
        effectiveOrb = 2;
      }
      // Natal-to-transit: use transit planet to determine orb
      else if (isNatalTransit && planet2Name) {
        effectiveOrb = getNatalTransitOrb(planet2Name, aspect.name);
      }
      // Transit-to-transit: use both planets to determine orb
      else if (planet1Name && planet2Name && !isNatalTransit) {
        effectiveOrb = getTransitOrb(planet1Name, planet2Name, aspect.orb);
      }

      if (orb <= effectiveOrb) {
        return { ...aspect, actualOrb: orb };
      }
    }
    return null;
  };

  // Convert all planet data to visual positions
  const allNatalPositions = allNatalPlanetsData.map(planetData => ({
    ...convertToVisualPosition(planetData, natalRadius),
    type: 'natal',
    longitude: planetData.longitude, // Keep actual astronomical longitude for house calculation
    house: getHouseNumber(planetData.longitude)
  }));

  const allTransitPositions = allTransitPlanetsData.map(planetData => ({
    ...convertToVisualPosition(planetData, transitRadius - 15),
    type: 'transit',
    longitude: planetData.longitude, // Keep actual astronomical longitude for house calculation
    house: getHouseNumber(planetData.longitude)
  }));

  // Apply filters
  const natalPositions = filterPlanets(allNatalPositions, natalPlanetFilter);
  const transitPositions = filterPlanets(allTransitPositions, transitPlanetFilter);

  // Calculate aspects between natal and transit planets
  // Track seen pairs to avoid duplicates (e.g., both "Sun-Mars" and "Mars-Sun")
  const aspects = [];
  const seenPairs = new Set<string>();

  for (const natal of natalPositions) {
    for (const transit of transitPositions) {
      // Skip if it's the same planet (e.g., natal Jupiter to transit Jupiter)
      if (natal.name === transit.name) {
        continue;
      }

      // Create a normalized pair key (alphabetically sorted to catch duplicates)
      const pairKey = [natal.name, transit.name].sort().join('-');

      // Skip if we've already processed this pair
      if (seenPairs.has(pairKey)) {
        continue;
      }

      // Pass transit planet name and isNatalTransit flag for natal-to-transit orbs
      const aspect = checkAspect(natal.angle, transit.angle, natal.name, transit.name, true);
      if (aspect) {
        seenPairs.add(pairKey);
        aspects.push({
          natal,
          transit,
          aspect,
          key: `${natal.name}-${transit.name}`
        });
      }
    }
  }

  // Calculate aspects between transit planets themselves
  const transitAspects = [];
  for (let i = 0; i < transitPositions.length; i++) {
    for (let j = i + 1; j < transitPositions.length; j++) {
      const transit1 = transitPositions[i];
      const transit2 = transitPositions[j];
      // Pass planet names for transit-to-transit aspects to use planet-specific orbs
      const aspect = checkAspect(transit1.angle, transit2.angle, transit1.name, transit2.name);
      if (aspect) {
        transitAspects.push({
          transit1,
          transit2,
          aspect,
          key: `${transit1.name}-${transit2.name}`
        });
      }
    }
  }

  // Calculate aspects from natal planets to transit-transit aspect midpoints
  const natalToTransitAspects = [];
  for (const transitAspect of transitAspects) {
    // Calculate midpoint between the two transit planets
    let angle1 = transitAspect.transit1.angle;
    let angle2 = transitAspect.transit2.angle;

    // Calculate midpoint accounting for circular nature of angles
    let diff = Math.abs(angle1 - angle2);
    let midpoint;
    if (diff <= 180) {
      midpoint = (angle1 + angle2) / 2;
    } else {
      // Midpoint is on the other side
      midpoint = ((angle1 + angle2) / 2 + 180) % 360;
    }

    // Check if any natal planet forms an aspect to this midpoint
    for (const natal of natalPositions) {
      // Pass isMidpoint flag to use tight 2° orb (traditional midpoint astrology)
      const aspectToMidpoint = checkAspect(natal.angle, midpoint, undefined, undefined, false, true);
      if (aspectToMidpoint) {
        natalToTransitAspects.push({
          natal,
          transitAspect,
          midpoint,
          aspect: aspectToMidpoint,
          key: `${natal.name}-${transitAspect.transit1.name}-${transitAspect.transit2.name}`
        });
      }
    }
  }

  const houseCusps = getHouseCusps();

  // Calculate first house reference data for display
  const firstHouseSignIndex = Math.floor(firstHouseLongitude / 30);
  const firstHouseDegreeInSign = firstHouseLongitude % 30;

  // Determine label based on reference type
  let firstHouseLabel = 'Ascendant';
  let firstHouseSymbol = 'ASC';
  if (firstHouseReference === 'sun') {
    firstHouseLabel = 'Sun (1st House)';
    firstHouseSymbol = '☉';
  } else if (firstHouseReference === 'moon') {
    firstHouseLabel = 'Moon (1st House)';
    firstHouseSymbol = '☽';
  } else if (firstHouseReference === 'manual') {
    firstHouseLabel = `${manualFirstHouseSign} (1st House)`;
    firstHouseSymbol = ZODIAC_SIGNS.find(z => z.name === manualFirstHouseSign)?.symbol || '♈';
  }

  const ascendantData = {
    name: firstHouseLabel,
    symbol: firstHouseSymbol,
    longitude: firstHouseLongitude,
    zodiacSign: ZODIAC_SIGNS[firstHouseSignIndex].name,
    degree: Math.floor(firstHouseDegreeInSign),
    minute: Math.floor((firstHouseDegreeInSign % 1) * 60)
  };

  // Update parent component with planetary data
  useEffect(() => {
    if (onDataUpdate) {
      onDataUpdate({
        natalPositions,
        transitPositions,
        aspects,
        transitAspects,
        natalToTransitAspects,
        ascendant: ascendantData
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [natalPositions, transitPositions, aspects, transitAspects, natalToTransitAspects, ascendantLongitude]);

  return (
    <svg width="600" height="600" style={{ background: 'white', border: '1px solid #ddd' }}>
      {/* Outer circle for house numbers */}
      <circle
        cx={centerX}
        cy={centerY}
        r={houseNumberRadius}
        fill="none"
        stroke="#333"
        strokeWidth="1"
      />

      {/* Zodiac Signs */}
      {Array.from({ length: 12 }, (_, positionIndex) => {
        // positionIndex 0 = first house (ascendant sign)
        // positionIndex 1 = second house (next sign), etc.
        const actualSignIndex = (signIndex + positionIndex) % 12;
        const actualSign = ZODIAC_SIGNS[actualSignIndex];

        // Calculate the midpoint of this house for label placement (15° into the house)
        const midAngle = house1Position - positionIndex * 30 - 15;

        return (
          <g key={`zodiac-position-${positionIndex}`}>
            <path
              d={createZodiacPath(positionIndex)}
              fill={positionIndex % 2 === 0 ? '#f0f0f0' : '#f8f8f8'}
              stroke="#333"
              strokeWidth="1"
            />
            <text
              x={centerX + (outerRadius - 20) * Math.cos(angleToSVG(midAngle) * Math.PI / 180)}
              y={centerY + (outerRadius - 20) * Math.sin(angleToSVG(midAngle) * Math.PI / 180)}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="18"
              fill="#333"
              fontWeight="bold"
            >
              {actualSign.symbol}
            </text>
          </g>
        );
      })}

      {/* House lines */}
      {houseCusps.map((cusp, i) => {
        const angle = angleToSVG(cusp);
        return (
          <g key={`house-${i}`}>
            <line
              x1={centerX + houseNumberRadius * Math.cos(angle * Math.PI / 180)}
              y1={centerY + houseNumberRadius * Math.sin(angle * Math.PI / 180)}
              x2={centerX + innerRadius * Math.cos(angle * Math.PI / 180)}
              y2={centerY + innerRadius * Math.sin(angle * Math.PI / 180)}
              stroke="#666"
              strokeWidth={i === 0 || i === 3 || i === 6 || i === 9 ? "2" : "1"}
              strokeDasharray={i === 0 || i === 3 || i === 6 || i === 9 ? "none" : "2,2"}
            />
            {/* Add ASC label for House 1 */}
            {i === 0 && (
              <text
                x={centerX + (innerRadius - 15) * Math.cos(angle * Math.PI / 180)}
                y={centerY + (innerRadius - 15) * Math.sin(angle * Math.PI / 180)}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="10"
                fill="#FF6B6B"
                fontWeight="bold"
              >
                ASC
              </text>
            )}
            {/* Add MC label for House 10 */}
            {i === 9 && (
              <text
                x={centerX + (innerRadius - 15) * Math.cos(angle * Math.PI / 180)}
                y={centerY + (innerRadius - 15) * Math.sin(angle * Math.PI / 180)}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="10"
                fill="#4B0082"
                fontWeight="bold"
              >
                MC
              </text>
            )}
          </g>
        );
      })}

      {/* House numbers in outer ring */}
      {houseCusps.map((cusp, i) => {
        const nextCusp = houseCusps[(i + 1) % 12];
        // For counter-clockwise houses, calculate midpoint correctly
        let midAngle = (cusp + nextCusp) / 2;
        if (cusp < nextCusp) {
          midAngle = ((cusp + nextCusp + 360) / 2) % 360;
        }
        const midAngleSVG = angleToSVG(midAngle);

        return (
          <text
            key={`house-num-${i}`}
            x={centerX + ((houseNumberRadius + outerRadius) / 2) * Math.cos(midAngleSVG * Math.PI / 180)}
            y={centerY + ((houseNumberRadius + outerRadius) / 2) * Math.sin(midAngleSVG * Math.PI / 180)}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="12"
            fill={i === 0 ? "#FF6B6B" : i === 9 ? "#4B0082" : "#666"}
            fontWeight="bold"
          >
            {i + 1}
          </text>
        );
      })}

      {/* Inner circle */}
      <circle
        cx={centerX}
        cy={centerY}
        r={innerRadius}
        fill="white"
        stroke="#333"
        strokeWidth="2"
      />

      {/* Aspect lines - drawn before planets so they appear behind */}
      {aspects.map(({ natal, transit, aspect, key }) => (
        <line
          key={key}
          x1={natal.x}
          y1={natal.y}
          x2={transit.x}
          y2={transit.y}
          stroke={aspect.color}
          strokeWidth="1.5"
          strokeDasharray={aspect.style === 'dashed' ? '5,5' : 'none'}
          opacity="0.6"
        />
      ))}

      {/* Transit-to-Transit Aspect lines */}
      {transitAspects.map(({ transit1, transit2, aspect, key }) => (
        <line
          key={`transit-${key}`}
          x1={transit1.x}
          y1={transit1.y}
          x2={transit2.x}
          y2={transit2.y}
          stroke={aspect.color}
          strokeWidth="1.5"
          strokeDasharray={aspect.style === 'dashed' ? '5,5' : 'none'}
          opacity="0.6"
        />
      ))}

      {/* Natal Planets */}
      {natalPositions.map((planet) => (
        <g key={`natal-${planet.name}`}>
          <circle
            cx={planet.x}
            cy={planet.y}
            r="14"
            fill="#4a90e2"
            stroke="white"
            strokeWidth="2"
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => setHoveredPlanet(`natal-${planet.name}`)}
            onMouseLeave={() => setHoveredPlanet(null)}
          />
          <text
            x={planet.x}
            y={planet.y - 5}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="14"
            fill="white"
            fontWeight="bold"
            pointerEvents="none"
          >
            {planet.symbol}
          </text>
          <text
            x={planet.x}
            y={planet.y + 10}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="9"
            fill="black"
            fontWeight="normal"
            pointerEvents="none"
          >
            {planet.degree}°{planet.minute}'
          </text>

          {/* Tooltip */}
          {hoveredPlanet === `natal-${planet.name}` && (
            <g>
              <rect
                x={planet.x + 20}
                y={planet.y - 20}
                width="140"
                height="40"
                fill="white"
                stroke="#333"
                strokeWidth="1"
                rx="4"
              />
              <text
                x={planet.x + 90}
                y={planet.y - 5}
                textAnchor="middle"
                fontSize="12"
                fill="#333"
              >
                {planet.name} (Natal)
              </text>
              <text
                x={planet.x + 90}
                y={planet.y + 10}
                textAnchor="middle"
                fontSize="12"
                fill="#666"
              >
                {planet.zodiacSign} {planet.degree}° {planet.minute}'
              </text>
            </g>
          )}
        </g>
      ))}

      {/* Transit Planets */}
      {transitPositions.map((planet) => (
        <g key={`transit-${planet.name}`}>
          <circle
            cx={planet.x}
            cy={planet.y}
            r="14"
            fill="#e24a4a"
            stroke="white"
            strokeWidth="2"
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => setHoveredPlanet(`transit-${planet.name}`)}
            onMouseLeave={() => setHoveredPlanet(null)}
          />
          <text
            x={planet.x}
            y={planet.y - 5}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="14"
            fill="white"
            fontWeight="bold"
            pointerEvents="none"
          >
            {planet.symbol}
          </text>
          <text
            x={planet.x}
            y={planet.y + 10}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="9"
            fill="black"
            fontWeight="normal"
            pointerEvents="none"
          >
            {planet.degree}°{planet.minute}'
          </text>

          {/* Tooltip */}
          {hoveredPlanet === `transit-${planet.name}` && (
            <g>
              <rect
                x={planet.x + 20}
                y={planet.y - 20}
                width="140"
                height="40"
                fill="white"
                stroke="#333"
                strokeWidth="1"
                rx="4"
              />
              <text
                x={planet.x + 90}
                y={planet.y - 5}
                textAnchor="middle"
                fontSize="12"
                fill="#333"
              >
                {planet.name} (Transit)
              </text>
              <text
                x={planet.x + 90}
                y={planet.y + 10}
                textAnchor="middle"
                fontSize="12"
                fill="#666"
              >
                {planet.zodiacSign} {planet.degree}° {planet.minute}'
              </text>
            </g>
          )}
        </g>
      ))}

      {/* Center info */}
      <text
        x={centerX}
        y={centerY - 10}
        textAnchor="middle"
        fontSize="11"
        fill="#666"
      >
        {houseSystem.toUpperCase()}
      </text>
      <text
        x={centerX}
        y={centerY + 5}
        textAnchor="middle"
        fontSize="10"
        fill="#999"
      >
        {natalDate.toLocaleDateString()}
      </text>
      <text
        x={centerX}
        y={centerY + 18}
        textAnchor="middle"
        fontSize="10"
        fill="#999"
      >
        {transitDate.toLocaleDateString()}
      </text>
    </svg>
  );
};