// Quick test to verify aspect calculations
import { calculatePlanetaryPositions } from './src/utils/ephemeris.ts';

const today = new Date();
console.log('Date:', today.toISOString());
console.log('\nPlanetary Positions for today:');

const planets = calculatePlanetaryPositions(today);

planets.forEach(planet => {
  if (planet.name !== 'Moon') {
    console.log(`${planet.name}: ${planet.longitude.toFixed(2)}° (${planet.sign} ${planet.degreeInSign.toFixed(2)}°)`);
  }
});

// Calculate all aspects manually
console.log('\n\nManual Aspect Calculations:');

const ASPECT_TYPES = [
  { name: 'Conjunction', angle: 0 },
  { name: 'Opposition', angle: 180 },
  { name: 'Trine', angle: 120 },
  { name: 'Square', angle: 90 },
  { name: 'Sextile', angle: 60 }
];

const filteredPlanets = planets.filter(p => p.name !== 'Moon');

for (let i = 0; i < filteredPlanets.length; i++) {
  for (let j = i + 1; j < filteredPlanets.length; j++) {
    const p1 = filteredPlanets[i];
    const p2 = filteredPlanets[j];

    let diff = Math.abs(p1.longitude - p2.longitude);
    if (diff > 180) diff = 360 - diff;

    for (const aspectType of ASPECT_TYPES) {
      const orb = Math.abs(diff - aspectType.angle);

      // Only show if orb is less than 6 degrees
      if (orb <= 6) {
        console.log(`${p1.name} ${aspectType.name} ${p2.name}: ${orb.toFixed(2)}° orb (diff=${diff.toFixed(2)}°, p1=${p1.longitude.toFixed(2)}°, p2=${p2.longitude.toFixed(2)}°)`);
      }
    }
  }
}
