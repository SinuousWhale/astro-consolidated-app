// Simple astronomy calculations without complex imports
export interface PlanetPosition {
  name: string;
  longitude: number;
  sign: string;
  degree: number;
  body: string;
}

export interface Aspect {
  planet1: string;
  planet2: string;
  type: string;
  angle: number;
  orb: number;
  isNatalToTransit: boolean;
}

export interface HouseCusp {
  house: number;
  longitude: number;
}

const ZODIAC_SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const PLANETS = [
  'Sun', 'Moon', 'Mercury', 'Venus', 'Mars',
  'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'
];

const ASPECT_TYPES = [
  { name: 'Conjunction', angle: 0, orb: 8 },
  { name: 'Opposition', angle: 180, orb: 8 },
  { name: 'Trine', angle: 120, orb: 8 },
  { name: 'Square', angle: 90, orb: 8 },
  { name: 'Sextile', angle: 60, orb: 6 },
];

export function getZodiacSign(longitude: number): { sign: string; degree: number } {
  const normalizedLon = ((longitude % 360) + 360) % 360;
  const signIndex = Math.floor(normalizedLon / 30);
  const degree = normalizedLon % 30;

  return {
    sign: ZODIAC_SIGNS[signIndex],
    degree: degree
  };
}

// Simplified planetary positions using mock data for testing
export function calculatePlanetaryPositions(date: Date): PlanetPosition[] {
  const positions: PlanetPosition[] = [];

  // Generate mock positions for testing
  // In production, this would use astronomy-engine
  PLANETS.forEach((planet, index) => {
    const mockLongitude = (index * 36 + date.getTime() / 100000000) % 360;
    const { sign, degree } = getZodiacSign(mockLongitude);

    positions.push({
      name: planet,
      longitude: mockLongitude,
      sign: sign,
      degree: degree,
      body: planet
    });
  });

  return positions;
}

export function calculateHouses(
  date: Date,
  latitude: number,
  longitude: number,
  houseSystem: 'placidus' | 'whole-sign' | 'equal' = 'placidus'
): HouseCusp[] {
  const houses: HouseCusp[] = [];

  // Simplified house calculation
  const ascendant = (date.getHours() * 15 + longitude) % 360;

  for (let i = 0; i < 12; i++) {
    houses.push({
      house: i + 1,
      longitude: (ascendant + (i * 30)) % 360
    });
  }

  return houses;
}

function normalizeAngle(angle: number): number {
  let normalized = angle % 360;
  if (normalized < 0) normalized += 360;
  if (normalized > 180) normalized = 360 - normalized;
  return normalized;
}

export function calculateAspects(
  natalPlanets: PlanetPosition[],
  transitPlanets: PlanetPosition[]
): Aspect[] {
  const aspects: Aspect[] = [];

  // Calculate natal to transit aspects
  for (const natalPlanet of natalPlanets) {
    for (const transitPlanet of transitPlanets) {
      const diff = Math.abs(natalPlanet.longitude - transitPlanet.longitude);
      const angle = normalizeAngle(diff);

      for (const aspectType of ASPECT_TYPES) {
        const orb = Math.abs(angle - aspectType.angle);

        if (orb <= aspectType.orb) {
          aspects.push({
            planet1: natalPlanet.name,
            planet2: transitPlanet.name,
            type: aspectType.name,
            angle: aspectType.angle,
            orb: orb,
            isNatalToTransit: true
          });
        }
      }
    }
  }

  return aspects;
}

export function formatDegree(degree: number): string {
  const deg = Math.floor(degree);
  const min = Math.floor((degree - deg) * 60);
  return `${deg}°${min}'`;
}