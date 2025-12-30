// Quick test to verify manifestations
const fs = require('fs');
const content = fs.readFileSync('src/utils/aspectInterpretations.ts', 'utf8');

// Count manifestations.push calls in Venus-Mars section
const venusMarsSection = content.substring(
  content.indexOf('// Venus-Mars: Passion'),
  content.indexOf('// Venus-Uranus:')
);

const pushCalls = venusMarsSection.match(/manifestations\.push\(/g);
console.log('Venus-Mars manifestations.push calls:', pushCalls ? pushCalls.length : 0);

// Count individual manifestations in first Venus-Mars hard aspect section
const firstHardSection = venusMarsSection.substring(
  venusMarsSection.indexOf('if (isHard) {'),
  venusMarsSection.indexOf('} else {')
);

// Count lines with single quotes that are manifestation strings
const manifestationLines = firstHardSection.match(/^\s*'[^']+',?\s*$/gm);
console.log('First hard aspect manifestations:', manifestationLines ? manifestationLines.length : 0);

if (manifestationLines && manifestationLines.length > 0) {
  console.log('\nFirst 3 examples:');
  manifestationLines.slice(0, 3).forEach(line => console.log(line.trim()));
}
