import React from 'react';
// Import types from astro utils
import { PlanetPosition, Aspect, HouseCusp } from '../utils/astro-simple';

interface AstroWheelProps {
  natalPlanets: PlanetPosition[];
  transitPlanets: PlanetPosition[];
  houses: HouseCusp[];
  aspects: Aspect[];
}

const ZODIAC_SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

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
  'Pluto': '♇'
};

const ZODIAC_SYMBOLS: Record<string, string> = {
  'Aries': '♈',
  'Taurus': '♉',
  'Gemini': '♊',
  'Cancer': '♋',
  'Leo': '♌',
  'Virgo': '♍',
  'Libra': '♎',
  'Scorpio': '♏',
  'Sagittarius': '♐',
  'Capricorn': '♑',
  'Aquarius': '♒',
  'Pisces': '♓'
};

const ASPECT_COLORS: Record<string, string> = {
  'Conjunction': '#ff0000',
  'Opposition': '#0000ff',
  'Trine': '#00ff00',
  'Square': '#ff8800',
  'Sextile': '#8800ff'
};

export const AstroWheel: React.FC<AstroWheelProps> = ({
  natalPlanets,
  transitPlanets,
  houses,
  aspects
}) => {
  const centerX = 400;
  const centerY = 400;
  const outerRadius = 350;
  const transitRadius = 310;
  const natalRadius = 270;
  const houseRadius = 230;
  const innerRadius = 190;

  // Convert ecliptic longitude to angle on the wheel (0° Aries at 9 o'clock)
  const longitudeToAngle = (longitude: number): number => {
    return 90 - longitude;
  };

  const polarToCartesian = (angle: number, radius: number): { x: number; y: number } => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(rad),
      y: centerY - radius * Math.sin(rad)
    };
  };

  const renderZodiacWheel = () => {
    const elements = [];

    for (let i = 0; i < 12; i++) {
      const startAngle = longitudeToAngle(i * 30);
      const endAngle = longitudeToAngle((i + 1) * 30);
      const midAngle = longitudeToAngle(i * 30 + 15);

      const startOuter = polarToCartesian(startAngle, outerRadius);
      const endOuter = polarToCartesian(endAngle, outerRadius);
      const startInner = polarToCartesian(startAngle, houseRadius);
      const endInner = polarToCartesian(endAngle, houseRadius);

      // Alternate colors for signs
      const fillColor = i % 2 === 0 ? '#f0f0f0' : '#e0e0e0';

      const pathData = `
        M ${startOuter.x} ${startOuter.y}
        A ${outerRadius} ${outerRadius} 0 0 0 ${endOuter.x} ${endOuter.y}
        L ${endInner.x} ${endInner.y}
        A ${houseRadius} ${houseRadius} 0 0 1 ${startInner.x} ${startInner.y}
        Z
      `;

      elements.push(
        <path
          key={`sign-${i}`}
          d={pathData}
          fill={fillColor}
          stroke="#333"
          strokeWidth="1"
        />
      );

      // Add zodiac symbol
      const symbolPos = polarToCartesian(midAngle, (outerRadius + houseRadius) / 2);
      elements.push(
        <text
          key={`symbol-${i}`}
          x={symbolPos.x}
          y={symbolPos.y}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="24"
          fontWeight="bold"
          fill="#333"
        >
          {ZODIAC_SYMBOLS[ZODIAC_SIGNS[i]]}
        </text>
      );
    }

    return elements;
  };

  const renderHouseLines = () => {
    return houses.map((house, idx) => {
      const angle = longitudeToAngle(house.longitude);
      const outer = polarToCartesian(angle, houseRadius);
      const inner = polarToCartesian(angle, innerRadius);

      return (
        <g key={`house-${idx}`}>
          <line
            x1={outer.x}
            y1={outer.y}
            x2={inner.x}
            y2={inner.y}
            stroke="#666"
            strokeWidth="2"
          />
          <text
            x={inner.x}
            y={inner.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="14"
            fill="#666"
            fontWeight="bold"
          >
            {house.house}
          </text>
        </g>
      );
    });
  };

  const renderPlanets = (
    planets: PlanetPosition[],
    radius: number,
    color: string,
    prefix: string
  ) => {
    return planets.map((planet, idx) => {
      const angle = longitudeToAngle(planet.longitude);
      const pos = polarToCartesian(angle, radius);

      return (
        <g key={`${prefix}-${planet.name}-${idx}`}>
          <circle
            cx={pos.x}
            cy={pos.y}
            r="8"
            fill={color}
            stroke="#333"
            strokeWidth="1"
          />
          <text
            x={pos.x}
            y={pos.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#fff"
          >
            {PLANET_SYMBOLS[planet.name] || planet.name[0]}
          </text>
        </g>
      );
    });
  };

  const renderAspects = () => {
    return aspects.map((aspect, idx) => {
      const natalPlanet = natalPlanets.find(p => p.name === aspect.planet1);
      const transitPlanet = transitPlanets.find(p => p.name === aspect.planet2);

      if (!natalPlanet || !transitPlanet) return null;

      const angle1 = longitudeToAngle(natalPlanet.longitude);
      const angle2 = longitudeToAngle(transitPlanet.longitude);

      const pos1 = polarToCartesian(angle1, natalRadius);
      const pos2 = polarToCartesian(angle2, transitRadius);

      const color = ASPECT_COLORS[aspect.type] || '#888';
      const opacity = Math.max(0.3, 1 - (aspect.orb / 8));

      return (
        <line
          key={`aspect-${idx}`}
          x1={pos1.x}
          y1={pos1.y}
          x2={pos2.x}
          y2={pos2.y}
          stroke={color}
          strokeWidth="1.5"
          strokeOpacity={opacity}
          strokeDasharray={aspect.type === 'Sextile' ? '5,5' : 'none'}
        />
      );
    });
  };

  return (
    <svg width="800" height="800" style={{ border: '1px solid #ccc' }}>
      {/* Zodiac wheel */}
      {renderZodiacWheel()}

      {/* House lines */}
      {renderHouseLines()}

      {/* Inner circle */}
      <circle
        cx={centerX}
        cy={centerY}
        r={innerRadius}
        fill="#fff"
        stroke="#333"
        strokeWidth="2"
      />

      {/* Aspect lines (drawn first, so they're behind planets) */}
      {renderAspects()}

      {/* Natal planets */}
      {renderPlanets(natalPlanets, natalRadius, '#4a90e2', 'natal')}

      {/* Transit planets */}
      {renderPlanets(transitPlanets, transitRadius, '#e24a4a', 'transit')}

      {/* Center point */}
      <circle cx={centerX} cy={centerY} r="3" fill="#333" />
    </svg>
  );
};
