import React, { useState } from 'react';

interface SimpleWheelEnhancedProps {
  natalDate: Date;
  transitDate: Date;
  houseSystem: string;
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
  { name: 'Pluto', symbol: '♇', color: '#800020' }
];

// Major aspects with their angles and orbs
const MAJOR_ASPECTS = [
  { name: 'Conjunction', angle: 0, orb: 8, color: '#FF0000', style: 'solid' },
  { name: 'Opposition', angle: 180, orb: 8, color: '#0000FF', style: 'solid' },
  { name: 'Trine', angle: 120, orb: 8, color: '#00FF00', style: 'solid' },
  { name: 'Square', angle: 90, orb: 8, color: '#FF8800', style: 'solid' },
  { name: 'Sextile', angle: 60, orb: 6, color: '#8800FF', style: 'dashed' }
];

export const SimpleWheelEnhanced: React.FC<SimpleWheelEnhancedProps> = ({
  natalDate,
  transitDate,
  houseSystem
}) => {
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);
  const centerX = 300;
  const centerY = 300;
  const outerRadius = 280;
  const houseNumberRadius = 295;  // New outer ring for house numbers
  const transitRadius = 240;
  const natalRadius = 200;
  const innerRadius = 160;

  // Convert angle for SVG (0° at 3 o'clock, but we want 0° at 12 o'clock)
  const angleToSVG = (angle: number) => angle - 90;

  // Create path for zodiac segment (reversed for clockwise)
  const createZodiacPath = (index: number) => {
    const startAngle = angleToSVG(-index * 30);
    const endAngle = angleToSVG(-(index + 1) * 30);

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

  // Calculate planet position with degrees (reversed for clockwise)
  const getPlanetPosition = (planetIndex: number, date: Date, radius: number) => {
    // Simplified calculation - in reality would use ephemeris data
    const baseAngle = (360 - (planetIndex * 36 + date.getTime() / 10000000)) % 360;
    const svgAngle = angleToSVG(baseAngle);
    const x = centerX + radius * Math.cos(svgAngle * Math.PI / 180);
    const y = centerY + radius * Math.sin(svgAngle * Math.PI / 180);

    // Calculate which zodiac sign and degree (for clockwise)
    const zodiacIndex = Math.floor(baseAngle / 30);
    const degreeInSign = baseAngle % 30;

    return {
      x,
      y,
      angle: baseAngle,
      zodiacSign: ZODIAC_SIGNS[zodiacIndex].name,
      degree: Math.floor(degreeInSign),
      minute: Math.floor((degreeInSign % 1) * 60)
    };
  };

  // Calculate house cusps based on house system
  const getHouseCusps = () => {
    const cusps = [];
    let startAngle = 0;

    if (houseSystem === 'whole-sign') {
      // Whole sign houses - each house is exactly 30 degrees
      startAngle = 180; // Start at left (9 o'clock) for House 1
    } else if (houseSystem === 'equal') {
      // Equal houses - 30 degrees each from Ascendant
      startAngle = 180 + (natalDate.getHours() * 15) % 360; // Simplified ASC calculation at left
    } else {
      // Placidus (simplified - would need complex calculation)
      startAngle = 180 + (natalDate.getHours() * 15) % 360;
    }

    for (let i = 0; i < 12; i++) {
      cusps.push((startAngle - i * 30 + 360) % 360);
    }
    return cusps;
  };

  // Check if two planets form an aspect
  const checkAspect = (angle1: number, angle2: number) => {
    let diff = Math.abs(angle1 - angle2);
    if (diff > 180) diff = 360 - diff;

    for (const aspect of MAJOR_ASPECTS) {
      const orb = Math.abs(diff - aspect.angle);
      if (orb <= aspect.orb) {
        return { ...aspect, actualOrb: orb };
      }
    }
    return null;
  };

  // Get all natal and transit planet positions
  const natalPositions = PLANETS.map((planet, index) => ({
    ...planet,
    ...getPlanetPosition(index, natalDate, natalRadius),
    type: 'natal'
  }));

  const transitPositions = PLANETS.map((planet, index) => ({
    ...planet,
    ...getPlanetPosition(index, transitDate, transitRadius - 15),
    type: 'transit'
  }));

  // Calculate aspects between natal and transit planets
  const aspects = [];
  for (const natal of natalPositions) {
    for (const transit of transitPositions) {
      const aspect = checkAspect(natal.angle, transit.angle);
      if (aspect) {
        aspects.push({
          natal,
          transit,
          aspect,
          key: `${natal.name}-${transit.name}`
        });
      }
    }
  }

  const houseCusps = getHouseCusps();

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
      {ZODIAC_SIGNS.map((sign, index) => (
        <g key={sign.name}>
          <path
            d={createZodiacPath(index)}
            fill={index % 2 === 0 ? '#f0f0f0' : '#f8f8f8'}
            stroke="#333"
            strokeWidth="1"
          />
          <text
            x={centerX + (outerRadius - 20) * Math.cos(angleToSVG(-index * 30 - 15) * Math.PI / 180)}
            y={centerY + (outerRadius - 20) * Math.sin(angleToSVG(-index * 30 - 15) * Math.PI / 180)}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="18"
            fill="#333"
            fontWeight="bold"
          >
            {sign.symbol}
          </text>
        </g>
      ))}

      {/* House lines */}
      {houseCusps.map((cusp, i) => {
        const angle = angleToSVG(cusp);

        return (
          <g key={`house-${i}`}>
            {/* House cusp line from new outer ring to inner circle */}
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
            y={planet.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="14"
            fill="white"
            fontWeight="bold"
            pointerEvents="none"
          >
            {planet.symbol}
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
            y={planet.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="14"
            fill="white"
            fontWeight="bold"
            pointerEvents="none"
          >
            {planet.symbol}
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