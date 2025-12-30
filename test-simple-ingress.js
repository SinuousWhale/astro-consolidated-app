// Simple test to verify ingress detection for Sun on Jan 19-20, 2025
import * as Astronomy from 'astronomy-engine';

function getEclipticLongitude(body, date) {
  const vector = Astronomy.GeoVector(body, date, false);
  const ecliptic = Astronomy.Ecliptic(vector);
  let longitude = ecliptic.elon;

  while (longitude < 0) longitude += 360;
  while (longitude >= 360) longitude -= 360;

  return longitude;
}

console.log('Sun Position Check - January 19-20, 2025\n');

const jan19 = new Date(2025, 0, 19, 12, 0, 0);
const jan20 = new Date(2025, 0, 20, 12, 0, 0);

const lon19 = getEclipticLongitude(Astronomy.Body.Sun, jan19);
const lon20 = getEclipticLongitude(Astronomy.Body.Sun, jan20);

const sign19 = Math.floor(lon19 / 30);
const sign20 = Math.floor(lon20 / 30);

const signNames = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
                   'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

console.log(`Jan 19: Longitude = ${lon19.toFixed(4)}°, Sign Index = ${sign19}, Sign = ${signNames[sign19]}`);
console.log(`Jan 20: Longitude = ${lon20.toFixed(4)}°, Sign Index = ${sign20}, Sign = ${signNames[sign20]}`);
console.log(`\nSign changed: ${sign19 !== sign20 ? 'YES' : 'NO'}`);

if (sign19 !== sign20) {
  console.log(`\n✓ Sun entered ${signNames[sign20]} on Jan 20, 2025`);
  console.log(`  Position: ${(lon20 % 30).toFixed(2)}° ${signNames[sign20]}`);
}
