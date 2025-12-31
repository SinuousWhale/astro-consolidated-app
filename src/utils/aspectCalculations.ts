// Average daily motion in degrees per day (direct motion)
export const getAverageDailyMotion = (planetName: string): number => {
  const dailyMotions: Record<string, number> = {
    'Sun': 0.9856,      // ~1 degree/day
    'Moon': 13.176,     // ~13 degrees/day
    'Mercury': 1.383,   // ~1.4 degrees/day
    'Venus': 1.200,     // ~1.2 degrees/day
    'Mars': 0.524,      // ~0.5 degrees/day
    'Jupiter': 0.083,   // ~0.08 degrees/day
    'Saturn': 0.033,    // ~0.03 degrees/day
    'Uranus': 0.012,    // ~0.01 degrees/day
    'Neptune': 0.006,   // ~0.006 degrees/day
    'Pluto': 0.004,     // ~0.004 degrees/day
    'North Node': -0.053, // ~0.05 degrees/day (retrograde)
    'South Node': -0.053  // ~0.05 degrees/day (retrograde)
  };
  return dailyMotions[planetName] || 0.5;
};

// Calculate aspect frequency (how often it occurs)
export const getAspectFrequency = (planet1: string, planet2: string, aspectName: string): string => {
  // Synodic periods (approximate time between successive conjunctions) in years
  const synodicPeriods: Record<string, Record<string, number>> = {
    'Sun': {
      'Mercury': 0.317, 'Venus': 1.599, 'Mars': 2.135, 'Jupiter': 1.092,
      'Saturn': 1.035, 'Uranus': 1.012, 'Neptune': 1.006, 'Pluto': 1.004
    },
    'Moon': {
      'Sun': 0.0808, 'Mercury': 0.0808, 'Venus': 0.0808, 'Mars': 0.0808,
      'Jupiter': 0.0808, 'Saturn': 0.0808, 'Uranus': 0.0808, 'Neptune': 0.0808, 'Pluto': 0.0808
    },
    'Mercury': {
      'Venus': 0.396, 'Mars': 0.701, 'Jupiter': 0.240, 'Saturn': 0.230,
      'Uranus': 0.226, 'Neptune': 0.225, 'Pluto': 0.224
    },
    'Venus': {
      'Mars': 0.909, 'Jupiter': 0.451, 'Saturn': 0.430, 'Uranus': 0.422,
      'Neptune': 0.420, 'Pluto': 0.419
    },
    'Mars': {
      'Jupiter': 2.235, 'Saturn': 2.008, 'Uranus': 1.924, 'Neptune': 1.903, 'Pluto': 1.896
    },
    'Jupiter': {
      'Saturn': 19.859, 'Uranus': 13.812, 'Neptune': 12.782, 'Pluto': 12.460
    },
    'Saturn': {
      'Uranus': 45.363, 'Neptune': 35.868, 'Pluto': 33.420
    },
    'Uranus': {
      'Neptune': 171.403, 'Pluto': 127.295
    },
    'Neptune': {
      'Pluto': 492.329
    }
  };

  // Get synodic period
  let period = 0;
  if (synodicPeriods[planet1]?.[planet2]) {
    period = synodicPeriods[planet1][planet2];
  } else if (synodicPeriods[planet2]?.[planet1]) {
    period = synodicPeriods[planet2][planet1];
  } else {
    return 'Varies';
  }

  // For non-conjunction aspects, multiply by the aspect ratio
  if (aspectName === 'Opposition') {
    period = period / 2; // Opposition occurs halfway through the cycle
  } else if (aspectName === 'Trine') {
    period = period / 3; // Trine occurs at 1/3 and 2/3 of cycle
  } else if (aspectName === 'Square') {
    period = period / 4; // Square occurs at 1/4, 1/2, 3/4 of cycle
  } else if (aspectName === 'Sextile') {
    period = period / 6; // Sextile occurs at 1/6, 1/3, 1/2, 2/3, 5/6 of cycle
  }

  // Format the result
  if (period < 0.0833) { // Less than 1 month
    const days = Math.round(period * 365.25);
    return `Every ${days} day${days !== 1 ? 's' : ''}`;
  } else if (period < 1) { // Less than 1 year
    const months = Math.round(period * 12);
    return `Every ${months} month${months !== 1 ? 's' : ''}`;
  } else if (period < 2) {
    return 'About once a year';
  } else {
    const years = period.toFixed(1);
    return `Every ${years} year${years !== '1.0' ? 's' : ''}`;
  }
};

// Calculate aspect duration (how long it lasts from entering to leaving orb)
export const getAspectDuration = (planet1: string, planet2: string, _aspectName: string, orb: number): string => {
  // Get the average daily motion for both planets
  const motion1 = Math.abs(getAverageDailyMotion(planet1));
  const motion2 = Math.abs(getAverageDailyMotion(planet2));

  // Relative speed is the sum of their motions (closing speed)
  const relativeSpeed = motion1 + motion2;

  if (relativeSpeed === 0) return 'Unknown';

  // Total degrees to cover: entering orb to leaving orb = 2 * orb
  const totalDegrees = 2 * orb;

  // Days to traverse this distance
  let days = totalDegrees / relativeSpeed;

  // Account for retrograde motion - slower planets retrograde more, extending duration
  // Outer planets can be retrograde ~40% of the year, effectively tripling the duration
  const outerPlanets = ['Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
  if (outerPlanets.includes(planet1) && outerPlanets.includes(planet2)) {
    days *= 3; // Both slow, retrograde extends significantly
  } else if (outerPlanets.includes(planet1) || outerPlanets.includes(planet2)) {
    days *= 2; // One slow planet, moderate extension
  }

  // Format the result
  if (days < 1) {
    const hours = Math.round(days * 24);
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  } else if (days < 31) {
    const roundedDays = Math.round(days);
    return `${roundedDays} day${roundedDays !== 1 ? 's' : ''}`;
  } else if (days < 365) {
    const months = (days / 30.44).toFixed(1);
    return `${months} month${months !== '1.0' ? 's' : ''}`;
  } else {
    const years = (days / 365.25).toFixed(1);
    return `${years} year${years !== '1.0' ? 's' : ''}`;
  }
};

// Calculate remaining days until aspect leaves orb and determine direction
// Note: This is a simplified estimation. Actual duration varies due to retrograde motion.
// The "remaining days" represents approximate time until aspect goes out of orb.
export const getAspectRemainingInfo = (
  planet1: string,
  planet2: string,
  _aspectName: string,
  currentOrb: number,
  maxOrb: number
): { remainingDays: number; direction: 'approaching' | 'leaving' | 'exact' } => {
  const motion1 = Math.abs(getAverageDailyMotion(planet1));
  const motion2 = Math.abs(getAverageDailyMotion(planet2));
  const relativeSpeed = motion1 + motion2;

  if (relativeSpeed === 0) return { remainingDays: 0, direction: 'exact' };

  // Determine direction based on how close to exact (0°) we are
  // If orb is very small, we're at exact
  // Otherwise, since we only see the aspect when it's in orb,
  // we assume it's in the "leaving" phase (widening)
  // This is a simplification - true direction would require tracking over multiple days
  let direction: 'approaching' | 'leaving' | 'exact';
  if (currentOrb < 0.3) {
    direction = 'exact';
  } else if (currentOrb < 1.0) {
    // Very tight orb, likely near exact, assume approaching or just past exact
    direction = 'leaving';
  } else {
    // Wider orb - assume leaving (most conservative estimate)
    direction = 'leaving';
  }

  // Calculate days until aspect leaves orb (simple linear estimate)
  // This is just the distance from current orb to maxOrb divided by relative speed
  const degreesRemaining = maxOrb - currentOrb;
  const remainingDays = degreesRemaining / relativeSpeed;

  // NOTE: We do NOT apply retrograde multiplier here.
  // The retrograde multiplier (2x or 3x) is for TOTAL duration from entering to leaving orb,
  // which accounts for the aspect going in and out of orb multiple times due to retrogrades.
  // For "remaining days", we just want a simple linear estimate of current trajectory.

  return { remainingDays: Math.round(remainingDays), direction };
};
