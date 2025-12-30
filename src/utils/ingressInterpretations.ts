// Sign Ingress Interpretations - When planets enter new zodiac signs
import { PLANET_ENERGIES, HOUSE_MEANINGS, getOrdinalSuffix } from './aspectInterpretations';

/**
 * Generate interpretation for planetary sign ingress (when a planet enters a new zodiac sign)
 */
export function generateSignIngressInterpretation(
  planet: string,
  newSign: string,
  house: number
): {
  title: string;
  energy: string;
  themes: string[];
  manifestations: string[];
  duration: string;
} {
  const houseMeaning = HOUSE_MEANINGS[house] || { area: 'this life area', keywords: [] };

  // Determine transit duration based on planet
  const durations: { [key: string]: string } = {
    'Sun': '~30 days',
    'Moon': '~2.5 days',
    'Mercury': '~3 weeks (can vary with retrogrades)',
    'Venus': '~4 weeks (can vary with retrogrades)',
    'Mars': '~6 weeks (can vary with retrogrades)',
    'Jupiter': '~1 year',
    'Saturn': '~2.5 years',
    'Uranus': '~7 years',
    'Neptune': '~14 years',
    'Pluto': '~12-30 years'
  };

  const duration = durations[planet] || 'varies';

  // Sign energies
  const signEnergies: { [key: string]: { element: string; modality: string; energy: string; keywords: string[] } } = {
    'Aries': { element: 'Fire', modality: 'Cardinal', energy: 'bold, pioneering, action-oriented', keywords: ['initiative', 'courage', 'independence', 'impulse', 'leadership'] },
    'Taurus': { element: 'Earth', modality: 'Fixed', energy: 'grounded, sensual, stability-seeking', keywords: ['security', 'pleasure', 'persistence', 'values', 'material comfort'] },
    'Gemini': { element: 'Air', modality: 'Mutable', energy: 'curious, communicative, versatile', keywords: ['learning', 'connection', 'adaptability', 'information', 'variety'] },
    'Cancer': { element: 'Water', modality: 'Cardinal', energy: 'nurturing, emotional, protective', keywords: ['safety', 'emotions', 'family', 'roots', 'intuition'] },
    'Leo': { element: 'Fire', modality: 'Fixed', energy: 'creative, expressive, radiant', keywords: ['confidence', 'creativity', 'recognition', 'joy', 'self-expression'] },
    'Virgo': { element: 'Earth', modality: 'Mutable', energy: 'analytical, practical, service-oriented', keywords: ['refinement', 'health', 'organization', 'discernment', 'efficiency'] },
    'Libra': { element: 'Air', modality: 'Cardinal', energy: 'harmonious, relational, beauty-seeking', keywords: ['balance', 'partnership', 'aesthetics', 'diplomacy', 'fairness'] },
    'Scorpio': { element: 'Water', modality: 'Fixed', energy: 'intense, transformative, depth-seeking', keywords: ['power', 'transformation', 'intimacy', 'truth', 'regeneration'] },
    'Sagittarius': { element: 'Fire', modality: 'Mutable', energy: 'optimistic, philosophical, expansive', keywords: ['growth', 'adventure', 'truth-seeking', 'freedom', 'meaning'] },
    'Capricorn': { element: 'Earth', modality: 'Cardinal', energy: 'ambitious, structured, achievement-oriented', keywords: ['mastery', 'responsibility', 'discipline', 'achievement', 'authority'] },
    'Aquarius': { element: 'Air', modality: 'Fixed', energy: 'innovative, humanitarian, freedom-loving', keywords: ['innovation', 'community', 'individuality', 'progress', 'revolution'] },
    'Pisces': { element: 'Water', modality: 'Mutable', energy: 'mystical, compassionate, transcendent', keywords: ['spirituality', 'compassion', 'imagination', 'unity', 'dissolution'] }
  };

  const signInfo = signEnergies[newSign] || { element: 'element', modality: 'modality', energy: 'new energy', keywords: [] };
  const planetEnergy = PLANET_ENERGIES[planet] || { core: 'energy', keywords: [] };

  const title = `${planet} enters ${newSign}`;
  const energy = `${planet} (${planetEnergy.core}) now takes on ${newSign}'s ${signInfo.energy} quality in your ${house}${getOrdinalSuffix(house)} house of ${houseMeaning.area}.`;

  const themes = [
    `${signInfo.element} element activates: ${signInfo.element === 'Fire' ? 'passion, action, inspiration' : signInfo.element === 'Earth' ? 'practicality, tangibility, groundedness' : signInfo.element === 'Air' ? 'communication, ideas, connection' : 'emotions, intuition, flow'}`,
    `${signInfo.modality} modality: ${signInfo.modality === 'Cardinal' ? 'initiating new cycles, taking action' : signInfo.modality === 'Fixed' ? 'stabilizing, sustaining, deepening' : 'adapting, transitioning, integrating'}`,
    `Key themes: ${signInfo.keywords.slice(0, 5).join(', ')}`,
    `Focus area: ${houseMeaning.area} - ${houseMeaning.keywords.slice(0, 3).join(', ')}`
  ];

  // Generate specific manifestations based on planet-sign-house combination
  const manifestations: string[] = [];

  // Planet-specific ingress interpretations
  if (planet === 'Sun') {
    manifestations.push(
      `Your conscious focus and vital energy shift toward ${signInfo.energy} expression`,
      `Identity and self-expression in ${houseMeaning.area} takes on ${newSign} flavor`,
      `Creative projects or personal goals align with ${signInfo.keywords[0]} and ${signInfo.keywords[1]}`,
      `Leadership style or presence becomes more ${signInfo.energy}`,
      `Good time to initiate activities related to ${houseMeaning.area} with ${newSign} approach`
    );
  } else if (planet === 'Moon') {
    manifestations.push(
      `Emotional needs and instinctive responses shift toward ${signInfo.energy} expression`,
      `Comfort and security in ${houseMeaning.area} now found through ${signInfo.keywords[0]}`,
      `Daily routines and habits take on more ${newSign} characteristics`,
      `Emotional reactions become more ${signInfo.energy} for the next few days`,
      `Pay attention to feelings arising in ${houseMeaning.area} - they reveal current needs`
    );
  } else if (planet === 'Mercury') {
    manifestations.push(
      `Thinking and communication style shifts to ${signInfo.energy} approach`,
      `Learning and mental focus in ${houseMeaning.area} becomes more ${newSign}-like`,
      `Conversations about ${houseMeaning.keywords[0]} take on ${signInfo.keywords[0]} quality`,
      `Good time to study, write, or communicate about ${houseMeaning.area}`,
      `Information gathering or decision-making becomes more ${signInfo.energy}`
    );
  } else if (planet === 'Venus') {
    manifestations.push(
      `Values and attractions shift toward ${signInfo.energy} expression`,
      `Relationships and pleasure-seeking in ${houseMeaning.area} take on ${newSign} style`,
      `Aesthetic preferences or creative expression becomes more ${signInfo.energy}`,
      `Money or resources related to ${houseMeaning.area} flow differently`,
      `Good time to beautify, harmonize, or enjoy ${houseMeaning.area} with ${newSign} approach`
    );
  } else if (planet === 'Mars') {
    manifestations.push(
      `Drive and assertiveness in ${houseMeaning.area} shifts to ${signInfo.energy} style`,
      `Action-taking and initiative becomes more ${newSign}-flavored`,
      `Physical energy and passion directed toward ${signInfo.keywords[0]} and ${signInfo.keywords[1]}`,
      `Conflicts or competitions in ${houseMeaning.area} handled with ${signInfo.energy} approach`,
      `Strong period for pursuing goals in ${houseMeaning.area} through ${newSign} methods`
    );
  } else if (planet === 'Jupiter') {
    manifestations.push(
      `🌟 MAJOR YEAR-LONG SHIFT: Growth and expansion in ${houseMeaning.area} takes on ${newSign} qualities`,
      `Opportunities and luck flow through ${signInfo.keywords[0]}, ${signInfo.keywords[1]}, ${signInfo.keywords[2]}`,
      `Philosophical outlook or belief systems shift toward ${signInfo.energy} worldview`,
      `Teaching, publishing, or sharing wisdom about ${houseMeaning.area} flourishes`,
      `International connections or higher learning related to ${houseMeaning.area} expands`
    );
  } else if (planet === 'Saturn') {
    manifestations.push(
      `⏰ MAJOR 2.5-YEAR CYCLE BEGINS: Mastery and maturation in ${houseMeaning.area} through ${newSign} lessons`,
      `Responsibilities, limitations, or structures in ${houseMeaning.area} take ${signInfo.energy} form`,
      `Discipline and commitment required in ${signInfo.keywords[0]} and ${signInfo.keywords[1]}`,
      `Long-term goals in ${houseMeaning.area} must align with ${newSign} principles`,
      `Time to build something lasting through ${signInfo.energy} approach to ${houseMeaning.area}`
    );
  } else if (planet === 'Uranus') {
    manifestations.push(
      `🔮 REVOLUTIONARY 7-YEAR CYCLE: Liberation and innovation in ${houseMeaning.area} via ${newSign} breakthroughs`,
      `Unexpected changes, awakenings, or disruptions related to ${signInfo.keywords[0]}`,
      `Freedom-seeking and rebellion in ${houseMeaning.area} takes ${signInfo.energy} expression`,
      `Technology, progress, or radical new approaches transform ${houseMeaning.area}`,
      `Authenticity and individuality in ${houseMeaning.area} essential for next 7 years`
    );
  } else if (planet === 'Neptune') {
    manifestations.push(
      `🌊 MYSTICAL 14-YEAR JOURNEY: Spirituality and transcendence in ${houseMeaning.area} through ${newSign} vision`,
      `Boundaries dissolve, dreams and ideals in ${houseMeaning.area} become ${signInfo.energy}`,
      `Compassion, imagination, or spiritual awakening related to ${signInfo.keywords[0]}`,
      `Illusions or confusions in ${houseMeaning.area} require ${signInfo.energy} discernment`,
      `Creative inspiration and mystical connection to ${houseMeaning.area} deepens profoundly`
    );
  } else if (planet === 'Pluto') {
    manifestations.push(
      `💀 GENERATIONAL TRANSFORMATION: Power and rebirth in ${houseMeaning.area} via ${newSign} metamorphosis`,
      `Deep psychological or collective transformation related to ${signInfo.keywords[0]} begins`,
      `Death-rebirth cycles in ${houseMeaning.area} unfold with ${signInfo.energy} intensity`,
      `Shadow work, power dynamics, or elimination in ${houseMeaning.area} becomes crucial`,
      `What must die in ${houseMeaning.area} to allow new birth will be revealed over years`
    );
  }

  return {
    title,
    energy,
    themes,
    manifestations,
    duration
  };
}
