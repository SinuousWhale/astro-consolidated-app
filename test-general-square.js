// Test challenging aspect - Jupiter Square Saturn
import { getGeneralAspectInterpretation } from './src/utils/generalAspectInterpretations.ts';

const interpretation = getGeneralAspectInterpretation('Jupiter', 'Saturn', 'Square', 7);

if (interpretation) {
  console.log('='.repeat(80));
  console.log(interpretation.name.toUpperCase());
  console.log('='.repeat(80));
  console.log('\n' + interpretation.aspectMeaning);
  console.log('\n');
  console.log('💕 LOVE: ' + interpretation.loveRelationships);
  console.log('\n💼 CAREER: ' + interpretation.businessCareer);
  console.log('\n');
  console.log('WHAT TO EXPECT:');
  interpretation.predictions.slice(0, 5).forEach((p, i) => console.log(`${i+1}. ${p}`));
}
