import * as Astronomy from 'astronomy-engine';

export interface PlanetPosition {
  name: string;
  symbol: string;
  longitude: number; // 0-360 degrees
  sign: string;
  signIndex: number; // 0-11 (Aries=0, Taurus=1, etc.)
  degreeInSign: number; // 0-30 degrees within the sign
  color: string;
  isRetrograde: boolean;
}

export interface AspectLine {
  planet1: string;
  planet2: string;
  angle: number;
  type: string; // conjunction, opposition, trine, square, sextile
  color: string;
  orb: number;
}

const ZODIAC_SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const PLANET_SYMBOLS: { [key: string]: string } = {
  Sun: '☉',
  Moon: '☽',
  Mercury: '☿',
  Venus: '♀',
  Mars: '♂',
  Jupiter: '♃',
  Saturn: '♄',
  Uranus: '♅',
  Neptune: '♆',
  Pluto: '♇',
  'North Node': '☊',
  'South Node': '☋'
};

const PLANET_COLORS: { [key: string]: string } = {
  Sun: '#FFD700',
  Moon: '#C0C0C0',
  Mercury: '#32CD32',
  Venus: '#FF69B4',
  Mars: '#FF4500',
  Jupiter: '#FFA500',
  Saturn: '#8B4513',
  Uranus: '#00CED1',
  Neptune: '#4169E1',
  Pluto: '#800080',
  'North Node': '#32CD32',
  'South Node': '#32CD32'
};

/**
 * Calculate ecliptic longitude for a body using geocentric tropical coordinates
 */
function getEclipticLongitude(body: Astronomy.Body, date: Date): number {
  // Use EclipticGeoMoon for Moon
  if (body === Astronomy.Body.Moon) {
    const ecliptic = Astronomy.EclipticGeoMoon(date);
    let longitude = ecliptic.lon;
    while (longitude < 0) longitude += 360;
    while (longitude >= 360) longitude -= 360;
    return longitude;
  }

  // For Sun, use GeoVector which gives geocentric position
  if (body === Astronomy.Body.Sun) {
    const vector = Astronomy.GeoVector(body, date, false);
    const ecliptic = Astronomy.Ecliptic(vector);
    let longitude = ecliptic.elon;
    while (longitude < 0) longitude += 360;
    while (longitude >= 360) longitude -= 360;
    return longitude;
  }

  // For all other planets, use GeoVector for geocentric position
  const vector = Astronomy.GeoVector(body, date, false);
  const ecliptic = Astronomy.Ecliptic(vector);
  let longitude = ecliptic.elon;

  // Normalize to 0-360
  while (longitude < 0) longitude += 360;
  while (longitude >= 360) longitude -= 360;

  return longitude;
}

/**
 * Calculate mean lunar node (North Node)
 * Using Jean Meeus, Astronomical Algorithms formula
 */
function getMeanLunarNode(date: Date): number {
  // Reference: Jean Meeus, Astronomical Algorithms, Chapter 47
  // Mean longitude of ascending node of Moon's orbit
  const j2000 = new Date(Date.UTC(2000, 0, 1, 12, 0, 0));
  const daysSinceJ2000 = (date.getTime() - j2000.getTime()) / (1000 * 60 * 60 * 24);
  const T = daysSinceJ2000 / 36525; // Julian centuries from J2000.0

  // Mean longitude of Moon's ascending node (Meeus formula)
  // Omega = 125.0445479 - 1934.1362891*T + 0.0020754*T^2 + T^3/467441 - T^4/60616000
  let omega = 125.0445479
    - 1934.1362891 * T
    + 0.0020754 * T * T
    + (T * T * T) / 467441
    - (T * T * T * T) / 60616000;

  // Normalize to 0-360
  omega = omega % 360;
  if (omega < 0) omega += 360;

  return omega;
}

/**
 * Get zodiac sign from longitude
 */
function getSignFromLongitude(longitude: number): { sign: string; signIndex: number; degreeInSign: number } {
  const signIndex = Math.floor(longitude / 30);
  const degreeInSign = longitude % 30;

  return {
    sign: ZODIAC_SIGNS[signIndex],
    signIndex,
    degreeInSign
  };
}

/**
 * Check if a planet is retrograde by comparing positions over a short time span
 */
function isRetrograde(body: Astronomy.Body, date: Date): boolean {
  // Sun and Moon are never retrograde
  if (body === Astronomy.Body.Sun || body === Astronomy.Body.Moon) {
    return false;
  }

  // Calculate position now and 1 day later
  const currentLon = getEclipticLongitude(body, date);
  const futureDate = new Date(date.getTime() + 24 * 60 * 60 * 1000); // 1 day later
  const futureLon = getEclipticLongitude(body, futureDate);

  // Calculate the difference accounting for 360° wrap-around
  let diff = futureLon - currentLon;

  // Normalize the difference to -180 to +180
  if (diff > 180) diff -= 360;
  if (diff < -180) diff += 360;

  // If difference is negative, planet is moving backward (retrograde)
  return diff < 0;
}

/**
 * Calculate all planetary positions for a given date
 */
export function calculatePlanetaryPositions(date: Date): PlanetPosition[] {
  const positions: PlanetPosition[] = [];

  // Inner planets and luminaries
  const bodies: Astronomy.Body[] = [
    Astronomy.Body.Sun,
    Astronomy.Body.Moon,
    Astronomy.Body.Mercury,
    Astronomy.Body.Venus,
    Astronomy.Body.Mars,
    Astronomy.Body.Jupiter,
    Astronomy.Body.Saturn,
    Astronomy.Body.Uranus,
    Astronomy.Body.Neptune,
    Astronomy.Body.Pluto
  ];

  bodies.forEach(body => {
    const longitude = getEclipticLongitude(body, date);
    const { sign, signIndex, degreeInSign } = getSignFromLongitude(longitude);
    const name = body.toString();

    positions.push({
      name,
      symbol: PLANET_SYMBOLS[name] || name,
      longitude,
      sign,
      signIndex,
      degreeInSign,
      color: PLANET_COLORS[name] || '#FFFFFF',
      isRetrograde: isRetrograde(body, date)
    });
  });

  // Add North Node
  const northNodeLon = getMeanLunarNode(date);
  const { sign: nnSign, signIndex: nnSignIndex, degreeInSign: nnDegreeInSign } = getSignFromLongitude(northNodeLon);

  positions.push({
    name: 'North Node',
    symbol: PLANET_SYMBOLS['North Node'],
    longitude: northNodeLon,
    sign: nnSign,
    signIndex: nnSignIndex,
    degreeInSign: nnDegreeInSign,
    color: PLANET_COLORS['North Node'],
    isRetrograde: false // Nodes are always retrograde but we mark as false by convention
  });

  // Add South Node (opposite of North Node)
  const southNodeLon = (northNodeLon + 180) % 360;
  const { sign: snSign, signIndex: snSignIndex, degreeInSign: snDegreeInSign } = getSignFromLongitude(southNodeLon);

  positions.push({
    name: 'South Node',
    symbol: PLANET_SYMBOLS['South Node'],
    longitude: southNodeLon,
    sign: snSign,
    signIndex: snSignIndex,
    degreeInSign: snDegreeInSign,
    color: PLANET_COLORS['South Node'],
    isRetrograde: false
  });

  return positions;
}

/**
 * Calculate Ascendant (rising sign) for a given date, time, and location
 * Uses standard astrological formula with geocentric tropical coordinates
 * Returns the ecliptic longitude of the Ascendant (0-360 degrees)
 *
 * IMPORTANT: The date parameter should be in UTC
 */
export function calculateAscendant(date: Date, latitude: number, longitudeGeo: number): number {
  // Get Greenwich Mean Sidereal Time from astronomy-engine (returns hours)
  const gmst = Astronomy.SiderealTime(date);

  // Calculate Local Sidereal Time (LST) in degrees
  // LST = GMST + geographic longitude (east positive)
  const lst = (gmst * 15 + longitudeGeo) % 360;

  // RAMC (Right Ascension of Medium Coeli) equals LST
  const ramc = lst < 0 ? lst + 360 : lst;

  // Calculate obliquity of ecliptic (mean obliquity)
  const j2000 = new Date(Date.UTC(2000, 0, 1, 12, 0, 0));
  const daysSinceJ2000 = (date.getTime() - j2000.getTime()) / (1000 * 60 * 60 * 24);
  const T = daysSinceJ2000 / 36525;
  const obliquity = 23.4392911 - 0.0130042 * T - 0.00000016 * T * T + 0.000000504 * T * T * T;

  // Convert to radians
  const ramcRad = (ramc * Math.PI) / 180;
  const oblRad = (obliquity * Math.PI) / 180;
  const latRad = (latitude * Math.PI) / 180;

  // Standard Ascendant formula:
  // ASC = atan2(-cos(RAMC), sin(RAMC) * cos(ε) + tan(φ) * sin(ε))
  // where ε = obliquity, φ = latitude, RAMC = right ascension of MC
  const sinRAMC = Math.sin(ramcRad);
  const cosRAMC = Math.cos(ramcRad);
  const sinObl = Math.sin(oblRad);
  const cosObl = Math.cos(oblRad);
  const tanLat = Math.tan(latRad);

  // Calculate ascendant using atan2
  // The formula: ASC = atan2(cos(RAMC), -(sin(RAMC) * cos(ε) + tan(φ) * sin(ε)))
  const y = cosRAMC;
  const x = -(sinRAMC * cosObl + tanLat * sinObl);

  let ascendant = Math.atan2(y, x) * (180 / Math.PI);

  // Normalize to 0-360
  if (ascendant < 0) ascendant += 360;

  return ascendant;
}

/**
 * Calculate house cusps based on house system
 */
export function calculateHouses(
  date: Date,
  latitude: number,
  longitude: number,
  houseSystem: 'placidus' | 'whole-sign' | 'equal' = 'placidus'
): number[] {
  const ascendant = calculateAscendant(date, latitude, longitude);
  const houses: number[] = [];

  if (houseSystem === 'whole-sign') {
    // Whole sign: each house starts at 0° of a sign
    const ascendantSign = Math.floor(ascendant / 30);
    for (let i = 0; i < 12; i++) {
      const signIndex = (ascendantSign + i) % 12;
      houses.push(signIndex * 30);
    }
  } else if (houseSystem === 'equal') {
    // Equal house: 30° increments from Ascendant
    for (let i = 0; i < 12; i++) {
      houses.push((ascendant + (i * 30)) % 360);
    }
  } else {
    // Placidus - simplified version using equal houses from ascendant
    // Full Placidus implementation would require MC and complex trig
    for (let i = 0; i < 12; i++) {
      houses.push((ascendant + (i * 30)) % 360);
    }
  }

  return houses;
}
