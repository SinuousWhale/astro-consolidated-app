import React from 'react';

interface SimpleWheelProps {
  natalDate: Date;
  transitDate: Date;
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

export const SimpleWheel: React.FC<SimpleWheelProps> = ({ natalDate, transitDate }) => {
  const centerX = 300;
  const centerY = 300;
  const outerRadius = 280;
  const transitRadius = 240;
  const natalRadius = 200;
  const innerRadius = 160;

  // Convert angle for SVG (0° at 3 o'clock, but we want 0° at 12 o'clock)
  const angleToSVG = (angle: number) => angle - 90;

  // Create path for zodiac segment
  const createZodiacPath = (index: number) => {
    const startAngle = angleToSVG(index * 30);
    const endAngle = angleToSVG((index + 1) * 30);

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
      A ${outerRadius} ${outerRadius} 0 0 1 ${endOuterX} ${endOuterY}
      L ${endInnerX} ${endInnerY}
      A ${transitRadius} ${transitRadius} 0 0 0 ${startInnerX} ${startInnerY}
      Z
    `;
  };

  // Simple planet position calculation (mock data)
  const getPlanetPosition = (planetIndex: number, date: Date, radius: number) => {
    // This is simplified - just spread planets evenly with some date-based offset
    const baseAngle = (planetIndex * 36) + (date.getTime() / 10000000) % 360;
    const svgAngle = angleToSVG(baseAngle);
    const x = centerX + radius * Math.cos(svgAngle * Math.PI / 180);
    const y = centerY + radius * Math.sin(svgAngle * Math.PI / 180);
    return { x, y, angle: baseAngle };
  };

  return (
    <svg width="600" height="600" style={{ background: 'white', border: '1px solid #ddd' }}>
      {/* Zodiac Signs */}
      {ZODIAC_SIGNS.map((sign, index) => (
        <g key={sign.name}>
          {/* Zodiac segment */}
          <path
            d={createZodiacPath(index)}
            fill={index % 2 === 0 ? '#f0f0f0' : '#f8f8f8'}
            stroke="#333"
            strokeWidth="1"
          />

          {/* Zodiac symbol */}
          <text
            x={centerX + (outerRadius - 20) * Math.cos(angleToSVG(index * 30 + 15) * Math.PI / 180)}
            y={centerY + (outerRadius - 20) * Math.sin(angleToSVG(index * 30 + 15) * Math.PI / 180)}
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

      {/* House divisions */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={`house-${i}`}
          x1={centerX + natalRadius * Math.cos(angleToSVG(i * 30) * Math.PI / 180)}
          y1={centerY + natalRadius * Math.sin(angleToSVG(i * 30) * Math.PI / 180)}
          x2={centerX + innerRadius * Math.cos(angleToSVG(i * 30) * Math.PI / 180)}
          y2={centerY + innerRadius * Math.sin(angleToSVG(i * 30) * Math.PI / 180)}
          stroke="#999"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
      ))}

      {/* Inner circle */}
      <circle
        cx={centerX}
        cy={centerY}
        r={innerRadius}
        fill="white"
        stroke="#333"
        strokeWidth="2"
      />

      {/* Natal Planets (inner ring) */}
      {PLANETS.map((planet, index) => {
        const pos = getPlanetPosition(index, natalDate, natalRadius);
        return (
          <g key={`natal-${planet.name}`}>
            <circle
              cx={pos.x}
              cy={pos.y}
              r="12"
              fill="#4a90e2"
              stroke="white"
              strokeWidth="2"
            />
            <text
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="14"
              fill="white"
              fontWeight="bold"
            >
              {planet.symbol}
            </text>
          </g>
        );
      })}

      {/* Transit Planets (outer ring) */}
      {PLANETS.map((planet, index) => {
        const pos = getPlanetPosition(index, transitDate, transitRadius - 15);
        return (
          <g key={`transit-${planet.name}`}>
            <circle
              cx={pos.x}
              cy={pos.y}
              r="12"
              fill="#e24a4a"
              stroke="white"
              strokeWidth="2"
            />
            <text
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="14"
              fill="white"
              fontWeight="bold"
            >
              {planet.symbol}
            </text>
          </g>
        );
      })}

      {/* Center text */}
      <text
        x={centerX}
        y={centerY - 10}
        textAnchor="middle"
        fontSize="12"
        fill="#666"
      >
        Natal: {natalDate.toLocaleDateString()}
      </text>
      <text
        x={centerX}
        y={centerY + 10}
        textAnchor="middle"
        fontSize="12"
        fill="#666"
      >
        Transit: {transitDate.toLocaleDateString()}
      </text>
    </svg>
  );
};