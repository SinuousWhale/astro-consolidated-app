// Test a harmonious aspect - Venus trine Jupiter
import { generateAspectInterpretation } from './src/utils/aspectInterpretations.ts';

// Example: Transit Jupiter in 5th house Trine natal Venus in 1st house
const interpretation = generateAspectInterpretation(
  'Venus',     // natal planet
  1,           // natal house (1st house - self/appearance)
  'Jupiter',   // transit planet
  5,           // transit house (5th house - romance/creativity)
  'Trine',     // aspect type
  1.2          // orb in degrees
);

console.log('='.repeat(80));
console.log('EXAMPLE ASPECT INTERPRETATION');
console.log('Transit Jupiter (5th house) Trine Natal Venus (1st house)');
console.log('='.repeat(80));
console.log('\n');

console.log('FREQUENCY & RARITY:');
console.log(interpretation.frequency);
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
