// Test the general aspect interpretations
import { getGeneralAspectInterpretation } from './src/utils/generalAspectInterpretations.ts';

// Test: Saturn Trine Uranus
const interpretation = getGeneralAspectInterpretation('Saturn', 'Uranus', 'Trine', 6);

if (interpretation) {
  console.log('='.repeat(80));
  console.log('GENERAL ASPECT INTERPRETATION (No Houses)');
  console.log('='.repeat(80));
  console.log('\n');

  console.log('NAME:');
  console.log(interpretation.name);
  console.log('\n');

  console.log('FREQUENCY (How Rare):');
  console.log(interpretation.frequency);
  console.log('\n');

  console.log('DURATION:');
  console.log(interpretation.duration);
  console.log('\n');

  console.log('PLANET 1 ENERGY (Saturn):');
  console.log(interpretation.planet1Energy);
  console.log('\n');

  console.log('PLANET 2 ENERGY (Uranus):');
  console.log(interpretation.planet2Energy);
  console.log('\n');

  console.log('ASPECT MEANING:');
  console.log(interpretation.aspectMeaning);
  console.log('\n');

  console.log('═'.repeat(80));
  console.log('LIFE AREA INTERPRETATIONS');
  console.log('═'.repeat(80));
  console.log('\n');

  console.log('💕 LOVE & RELATIONSHIPS:');
  console.log(interpretation.loveRelationships);
  console.log('\n');

  console.log('🏠 FAMILY & HOME:');
  console.log(interpretation.familyHome);
  console.log('\n');

  console.log('💼 BUSINESS & CAREER:');
  console.log(interpretation.businessCareer);
  console.log('\n');

  console.log('💰 MONEY & FINANCES:');
  console.log(interpretation.moneyFinances);
  console.log('\n');

  console.log('═'.repeat(80));
  console.log('10 PREDICTIONS - What Can Happen During This Transit:');
  console.log('═'.repeat(80));
  console.log('\n');

  interpretation.predictions.forEach((prediction, index) => {
    console.log(`${index + 1}. ${prediction}`);
  });

  console.log('\n');
  console.log('='.repeat(80));
} else {
  console.log('Interpretation not found!');
}
