import { Body, GeoVector, Ecliptic, Observer } from 'astronomy-engine';

export interface PlanetPosition {
  name: string;
  longitude: number;
  sign: string;
  degree: number;
  body: string;  // Changed from Body to string temporarily
}

// Export Aspect interface for AstroWheel component
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

export interface AscendantPosition {
  name: string;
  longitude: number;
  sign: string;
  degree: number;
}

// Use string literals that match the Body enum values
const PLANETS: string[] = [
  'Sun',
  'Moon',
  'Mercury',
  'Venus',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
  'Pluto',
];

const PLANET_NAMES: Record<string, string> = {
  'Sun': 'Sun',
  'Moon': 'Moon',
  'Mercury': 'Mercury',
  'Venus': 'Venus',
  'Mars': 'Mars',
  'Jupiter': 'Jupiter',
  'Saturn': 'Saturn',
  'Uranus': 'Uranus',
  'Neptune': 'Neptune',
  'Pluto': 'Pluto',
};

const ZODIAC_SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
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

export function calculatePlanetaryPositions(date: Date): PlanetPosition[] {
  const positions: PlanetPosition[] = [];

  for (const planet of PLANETS) {
    try {
      // Get geocentric position vector - cast string to Body enum
      const geoVector = GeoVector(planet as any, date, true);

      // Convert to ecliptic coordinates
      const eclipticCoords = Ecliptic(geoVector);

      const longitude = eclipticCoords.elon;
      const normalizedLon = ((longitude % 360) + 360) % 360;

      const { sign, degree } = getZodiacSign(normalizedLon);

      positions.push({
        name: PLANET_NAMES[planet],
        longitude: normalizedLon,
        sign: sign,
        degree: degree,
        body: planet
      });
    } catch (error) {
      console.error(`Error calculating position for ${planet}:`, error);
    }
  }

  return positions;
}

// Calculate Ascendant (rising sign)
export function calculateAscendant(
  date: Date,
  latitude: number,
  longitude: number
): AscendantPosition {
  // Calculate Local Sidereal Time
  const jd = 2440587.5 + date.getTime() / 86400000; // Julian Date
  const t = (jd - 2451545.0) / 36525; // Julian centuries from J2000

  // Greenwich Mean Sidereal Time at 0h UT
  let gmst = 280.46061837 + 360.98564736629 * (jd - 2451545.0) +
             0.000387933 * t * t - t * t * t / 38710000;

  // Normalize to 0-360
  gmst = ((gmst % 360) + 360) % 360;

  // Local Sidereal Time
  const lst = gmst + longitude;
  const lstNormalized = ((lst % 360) + 360) % 360;

  // Calculate obliquity of ecliptic
  const epsilon = 23.439291 - 0.0130042 * t;
  const epsilonRad = epsilon * Math.PI / 180;

  // Convert latitude to radians
  const latRad = latitude * Math.PI / 180;

  // Calculate Ascendant using simplified formula
  const lstRad = lstNormalized * Math.PI / 180;
  const y = -Math.cos(lstRad);
  const x = Math.sin(lstRad) * Math.cos(epsilonRad) - Math.tan(latRad) * Math.sin(epsilonRad);

  let ascendantLon = Math.atan2(y, x) * 180 / Math.PI;
  ascendantLon = ((ascendantLon % 360) + 360) % 360;

  const { sign, degree } = getZodiacSign(ascendantLon);

  return {
    name: 'Ascendant',
    longitude: ascendantLon,
    sign,
    degree
  };
}

export function calculateHouses(
  date: Date,
  latitude: number,
  longitude: number,
  houseSystem: 'placidus' | 'whole-sign' | 'equal' = 'placidus'
): HouseCusp[] {
  // Calculate the actual Ascendant
  const ascendant = calculateAscendant(date, latitude, longitude);
  const ascendantLon = ascendant.longitude;

  if (houseSystem === 'whole-sign') {
    // Whole sign: each house starts at 0° of a sign
    const ascendantSign = Math.floor(ascendantLon / 30);
    const houses: HouseCusp[] = [];

    for (let i = 0; i < 12; i++) {
      const signIndex = (ascendantSign + i) % 12;
      houses.push({
        house: i + 1,
        longitude: signIndex * 30
      });
    }

    return houses;
  } else {
    // Equal house: 30° increments from Ascendant
    const houses: HouseCusp[] = [];

    for (let i = 0; i < 12; i++) {
      houses.push({
        house: i + 1,
        longitude: (ascendantLon + (i * 30)) % 360
      });
    }

    return houses;
  }
}

function normalizeAngle(angle: number): number {
  let normalized = angle % 360;
  if (normalized < 0) normalized += 360;
  if (normalized > 180) normalized = 360 - normalized;
  return normalized;
}

export function calculateAspects(
  natalPlanets: PlanetPosition[],
  transitPlanets: PlanetPosition[],
  excludeMoon: boolean = false
): Aspect[] {
  const aspects: Aspect[] = [];

  // Optionally filter out Moon from transit planets
  const transitsToUse = excludeMoon
    ? transitPlanets.filter(p => p.name !== 'Moon')
    : transitPlanets;

  // Calculate natal to transit aspects
  for (const natalPlanet of natalPlanets) {
    for (const transitPlanet of transitsToUse) {
      const diff = Math.abs(natalPlanet.longitude - transitPlanet.longitude);
      const angle = normalizeAngle(diff);

      for (const aspectType of ASPECT_TYPES) {
        const orb = Math.abs(angle - aspectType.angle);

        if (orb <= aspectType.orb) {
          aspects.push({
            planet1: transitPlanet.name,  // Transit planet first
            planet2: natalPlanet.name,    // Natal planet second
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

// Calculate transit-to-transit aspects (active aspects), excluding Moon
export function calculateTransitToTransitAspects(
  transitPlanets: PlanetPosition[]
): Aspect[] {
  const aspects: Aspect[] = [];

  // Filter out Moon from transit planets for transit-to-transit aspects
  const planetsWithoutMoon = transitPlanets.filter(p => p.name !== 'Moon');

  // Calculate aspects between transit planets (excluding duplicates)
  for (let i = 0; i < planetsWithoutMoon.length; i++) {
    for (let j = i + 1; j < planetsWithoutMoon.length; j++) {
      const planet1 = planetsWithoutMoon[i];
      const planet2 = planetsWithoutMoon[j];

      const diff = Math.abs(planet1.longitude - planet2.longitude);
      const angle = normalizeAngle(diff);

      for (const aspectType of ASPECT_TYPES) {
        const orb = Math.abs(angle - aspectType.angle);

        if (orb <= aspectType.orb) {
          aspects.push({
            planet1: planet1.name,
            planet2: planet2.name,
            type: aspectType.name,
            angle: aspectType.angle,
            orb: orb,
            isNatalToTransit: false  // This is transit-to-transit
          });
        }
      }
    }
  }

  return aspects;
}

// Calculate transit aspects to Ascendant (excluding Moon)
export function calculateTransitToAscendantAspects(
  transitPlanets: PlanetPosition[],
  ascendant: AscendantPosition
): Aspect[] {
  const aspects: Aspect[] = [];

  // Filter out Moon from transit planets
  const planetsWithoutMoon = transitPlanets.filter(p => p.name !== 'Moon');

  // Calculate aspects from each transit planet to Ascendant
  for (const transitPlanet of planetsWithoutMoon) {
    const diff = Math.abs(transitPlanet.longitude - ascendant.longitude);
    const angle = normalizeAngle(diff);

    for (const aspectType of ASPECT_TYPES) {
      const orb = Math.abs(angle - aspectType.angle);

      if (orb <= aspectType.orb) {
        aspects.push({
          planet1: transitPlanet.name,
          planet2: 'Ascendant',
          type: aspectType.name,
          angle: aspectType.angle,
          orb: orb,
          isNatalToTransit: true  // This is a natal chart point being aspected by transit
        });
      }
    }
  }

  return aspects;
}

// Calculate comprehensive natal chart aspects including planets and Ascendant (excluding Moon transits)
export function calculateNatalTransitAspects(
  natalPlanets: PlanetPosition[],
  transitPlanets: PlanetPosition[],
  ascendant: AscendantPosition
): Aspect[] {
  // Get natal-to-transit aspects (excluding Moon from transits)
  const natalPlanetAspects = calculateAspects(natalPlanets, transitPlanets, true);

  // Get transit-to-ascendant aspects (Moon already excluded in that function)
  const ascendantAspects = calculateTransitToAscendantAspects(transitPlanets, ascendant);

  // Combine both
  return [...natalPlanetAspects, ...ascendantAspects];
}

export function formatDegree(degree: number): string {
  const deg = Math.floor(degree);
  const min = Math.floor((degree - deg) * 60);
  return `${deg}°${min}'`;
}
