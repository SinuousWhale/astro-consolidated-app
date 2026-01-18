// Debug script to check Personal Transit Calendar calculations
import { calculatePlanetaryPositions } from './src/utils/ephemeris.ts';

const ASPECT_TYPES = [
  { name: 'Conjunction', angle: 0, color: '#9370DB', symbol: '☌' },
  { name: 'Opposition', angle: 180, color: '#FFA500', symbol: '☍' },
  { name: 'Trine', angle: 120, color: '#0000FF', symbol: '△' },
  { name: 'Square', angle: 90, color: '#FF0000', symbol: '□' },
  { name: 'Sextile', angle: 60, color: '#00FF00', symbol: '⚹' }
];

const getOrb = (planet1, planet2, aspectName) => {
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

const checkAspect = (angle1, angle2, planet1, planet2) => {
  let diff = Math.abs(angle1 - angle2);
  if (diff > 180) diff = 360 - diff;

  console.log(`  Checking ${planet1} (${angle1.toFixed(2)}°) vs ${planet2} (${angle2.toFixed(2)}°)`);
  console.log(`  Angular difference: ${diff.toFixed(2)}°`);

  for (const aspectType of ASPECT_TYPES) {
    const orb = getOrb(planet1, planet2, aspectType.name);
    const actualOrb = Math.abs(diff - aspectType.angle);

    console.log(`    ${aspectType.name}: actualOrb = |${diff.toFixed(2)} - ${aspectType.angle}| = ${actualOrb.toFixed(2)}°, maxOrb = ${orb}°`);

    if (actualOrb <= orb) {
      console.log(`    ✅ MATCH! ${planet1} ${aspectType.name} ${planet2}: ${actualOrb.toFixed(2)}° orb`);
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

const today = new Date();
console.log('Testing Personal Transit Calendar aspect calculation');
console.log('Date:', today.toISOString());
console.log('');

const planets = calculatePlanetaryPositions(today);
const filteredPlanets = planets.filter(p => p.name !== 'Moon');

console.log('Planetary positions:');
filteredPlanets.forEach(p => {
  console.log(`  ${p.name}: ${p.longitude.toFixed(2)}°`);
});
console.log('');

// Test Sun-Venus aspect specifically
const sun = filteredPlanets.find(p => p.name === 'Sun');
const venus = filteredPlanets.find(p => p.name === 'Venus');

console.log('=== Testing Sun-Venus Conjunction ===');
const sunVenusAspect = checkAspect(sun.longitude, venus.longitude, 'Sun', 'Venus');
if (sunVenusAspect) {
  console.log(`\nResult: Sun ${sunVenusAspect.name} Venus with ${sunVenusAspect.actualOrb.toFixed(2)}° orb`);
  console.log(`Expected: ~0.97°`);
  console.log(`Match: ${Math.abs(sunVenusAspect.actualOrb - 0.97) < 0.1 ? '✅' : '❌'}`);
}

console.log('\n=== Testing Sun-Mars Conjunction ===');
const mars = filteredPlanets.find(p => p.name === 'Mars');
const sunMarsAspect = checkAspect(sun.longitude, mars.longitude, 'Sun', 'Mars');
if (sunMarsAspect) {
  console.log(`\nResult: Sun ${sunMarsAspect.name} Mars with ${sunMarsAspect.actualOrb.toFixed(2)}° orb`);
  console.log(`Expected: ~1.70°`);
  console.log(`Match: ${Math.abs(sunMarsAspect.actualOrb - 1.70) < 0.1 ? '✅' : '❌'}`);
}
