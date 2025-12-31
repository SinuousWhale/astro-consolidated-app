// Quick test to see what an interpretation looks like
import { generateAspectInterpretation } from './src/utils/aspectInterpretations.ts';

// Example: Transit Saturn in 10th house Square natal Moon in 4th house
const interpretation = generateAspectInterpretation(
  'Moon',      // natal planet
  4,           // natal house (4th house - home/family)
  'Saturn',    // transit planet
  10,          // transit house (10th house - career)
  'Square',    // aspect type
  2.5          // orb in degrees
);

console.log('='.repeat(80));
console.log('EXAMPLE ASPECT INTERPRETATION');
console.log('Transit Saturn (10th house) Square Natal Moon (4th house)');
console.log('='.repeat(80));
console.log('\n');

console.log('FREQUENCY & RARITY:');
console.log(interpretation.frequency);
console.log('\n');

console.log('NATAL ENERGY:');
console.log(interpretation.natalEnergy);
console.log('\n');

console.log('TRANSIT ENERGY:');
console.log(interpretation.transitEnergy);
console.log('\n');

console.log('ASPECT MEANING:');
console.log(interpretation.aspectMeaning);
console.log('\n');

console.log('MANIFESTATIONS (Predictions):');
interpretation.manifestations.forEach((m, i) => {
  console.log(`${i + 1}. ${m}`);
});
console.log('\n');

console.log('FULL INTERPRETATION:');
console.log(interpretation.fullInterpretation);
console.log('\n');
console.log('='.repeat(80));
