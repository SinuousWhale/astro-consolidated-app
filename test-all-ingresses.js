// Test script to find all sign ingresses in January 2025
import * as Astronomy from 'astronomy-engine';

function getEclipticLongitude(body, date) {
  if (body === Astronomy.Body.Moon) {
    const ecliptic = Astronomy.EclipticGeoMoon(date);
    let longitude = ecliptic.lon;
    while (longitude < 0) longitude += 360;
    while (longitude >= 360) longitude -= 360;
    return longitude;
  }

  const vector = Astronomy.GeoVector(body, date, false);
  const ecliptic = Astronomy.Ecliptic(vector);
  let longitude = ecliptic.elon;

  while (longitude < 0) longitude += 360;
  while (longitude >= 360) longitude -= 360;

  return longitude;
}

function getMeanLunarNode(date) {
  const J2000 = new Date('2000-01-01T12:00:00Z');
  const T = (date.getTime() - J2000.getTime()) / (86400000 * 36525);
  let omega = 125.0445479 - 1934.1362891 * T + 0.0020754 * T * T + T * T * T / 467441 - T * T * T * T / 60616000;

  while (omega < 0) omega += 360;
  while (omega >= 360) omega -= 360;

  return omega;
}

function getSignInfo(longitude) {
  const signNames = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
                     'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  const signIndex = Math.floor(longitude / 30);
  const degreeInSign = longitude % 30;

  return {
    sign: signNames[signIndex],
    signIndex: signIndex,
    degreeInSign: degreeInSign
  };
}

const planets = [
  { name: 'Sun', body: Astronomy.Body.Sun },
  { name: 'Mercury', body: Astronomy.Body.Mercury },
  { name: 'Venus', body: Astronomy.Body.Venus },
  { name: 'Mars', body: Astronomy.Body.Mars },
  { name: 'Jupiter', body: Astronomy.Body.Jupiter },
  { name: 'Saturn', body: Astronomy.Body.Saturn },
  { name: 'Uranus', body: Astronomy.Body.Uranus },
  { name: 'Neptune', body: Astronomy.Body.Neptune },
  { name: 'Pluto', body: Astronomy.Body.Pluto }
];

console.log('Sign Ingresses in January-February 2025\n');
console.log('Checking all planets from Jan 1 - Feb 28, 2025...\n');

const ingresses = [];

// Check each day
for (let day = 1; day <= 59; day++) {
  const currentDate = new Date(2025, 0, day, 12, 0, 0); // January is month 0
  const prevDate = new Date(2025, 0, day - 1, 12, 0, 0);

  if (day > 31) {
    currentDate.setMonth(1); // February
    currentDate.setDate(day - 31);
    prevDate.setMonth(1);
    prevDate.setDate(day - 32);
  }

  // Check each planet
  for (const planet of planets) {
    const currentLong = getEclipticLongitude(planet.body, currentDate);
    const prevLong = getEclipticLongitude(planet.body, prevDate);

    const currentSign = getSignInfo(currentLong);
    const prevSign = getSignInfo(prevLong);

    // Detect sign change
    if (currentSign.signIndex !== prevSign.signIndex) {
      ingresses.push({
        date: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        planet: planet.name,
        sign: currentSign.sign,
        degree: currentSign.degreeInSign.toFixed(2)
      });
    }
  }

  // Check North Node
  const currentNodeLong = getMeanLunarNode(currentDate);
  const prevNodeLong = getMeanLunarNode(prevDate);
  const currentNodeSign = getSignInfo(currentNodeLong);
  const prevNodeSign = getSignInfo(prevNodeLong);

  if (currentNodeSign.signIndex !== prevNodeSign.signIndex) {
    ingresses.push({
      date: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      planet: 'North Node',
      sign: currentNodeSign.sign,
      degree: currentNodeSign.degreeInSign.toFixed(2)
    });
  }
}

// Print results
if (ingresses.length === 0) {
  console.log('No sign ingresses found in this period.');
} else {
  console.log('Date'.padEnd(20) + 'Planet'.padEnd(15) + 'Enters'.padEnd(15) + 'Degree');
  console.log('='.repeat(65));

  ingresses.forEach(ing => {
    console.log(
      ing.date.padEnd(20) +
      ing.planet.padEnd(15) +
      ing.sign.padEnd(15) +
      ing.degree + '°'
    );
  });
}
