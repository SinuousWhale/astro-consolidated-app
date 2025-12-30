// Test script to check Mercury's position around January 20, 2025
import * as Astronomy from 'astronomy-engine';

function getEclipticLongitude(body, date) {
  const vector = Astronomy.GeoVector(body, date, false);
  const ecliptic = Astronomy.Ecliptic(vector);
  let longitude = ecliptic.elon;

  while (longitude < 0) longitude += 360;
  while (longitude >= 360) longitude -= 360;

  return longitude;
}

function getSignInfo(longitude) {
  const signNames = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
                     'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  const signIndex = Math.floor(longitude / 30);
  const degreeInSign = longitude % 30;
  const degrees = Math.floor(degreeInSign);
  const minutes = Math.round((degreeInSign - degrees) * 60);

  return {
    sign: signNames[signIndex],
    signIndex: signIndex,
    degreeInSign: degreeInSign,
    formatted: `${degrees}°${minutes.toString().padStart(2, '0')}' ${signNames[signIndex]}`
  };
}

console.log('Mercury Position Check - January 18-22, 2025\n');
console.log('Date'.padEnd(20) + 'Longitude'.padEnd(15) + 'Position');
console.log('='.repeat(60));

for (let day = 18; day <= 22; day++) {
  const date = new Date(2025, 0, day, 12, 0, 0); // January uses month 0
  const longitude = getEclipticLongitude(Astronomy.Body.Mercury, date);
  const signInfo = getSignInfo(longitude);

  const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  console.log(
    dateStr.padEnd(20) +
    longitude.toFixed(4).padEnd(15) +
    signInfo.formatted
  );
}

console.log('\n---\n');

// Check hourly on January 20 to find exact ingress time
console.log('Mercury Position - January 20, 2025 (Hourly)\n');
console.log('Time (UTC)'.padEnd(20) + 'Longitude'.padEnd(15) + 'Position');
console.log('='.repeat(60));

for (let hour = 0; hour < 24; hour++) {
  const date = new Date(Date.UTC(2025, 0, 20, hour, 0, 0));
  const longitude = getEclipticLongitude(Astronomy.Body.Mercury, date);
  const signInfo = getSignInfo(longitude);

  const timeStr = `${hour.toString().padStart(2, '0')}:00 UTC`;
  console.log(
    timeStr.padEnd(20) +
    longitude.toFixed(4).padEnd(15) +
    signInfo.formatted
  );
}
