/**
 * Astrological interpretations for natal-transit aspects
 */

// Planet energies and meanings
const PLANET_ENERGIES: Record<string, { core: string; keywords: string[] }> = {
  'Sun': {
    core: 'identity, vitality, ego, self-expression, life force',
    keywords: ['identity', 'vitality', 'confidence', 'self-expression', 'life purpose', 'creativity']
  },
  'Moon': {
    core: 'emotions, instincts, nurturing, home, subconscious',
    keywords: ['emotions', 'feelings', 'intuition', 'security', 'comfort', 'family', 'home']
  },
  'Mercury': {
    core: 'communication, thinking, learning, information',
    keywords: ['communication', 'thinking', 'learning', 'ideas', 'speech', 'writing', 'travel']
  },
  'Venus': {
    core: 'love, beauty, harmony, values, relationships',
    keywords: ['love', 'beauty', 'relationships', 'values', 'pleasure', 'harmony', 'money']
  },
  'Mars': {
    core: 'action, drive, passion, assertiveness, conflict',
    keywords: ['action', 'energy', 'drive', 'courage', 'anger', 'passion', 'sexuality']
  },
  'Jupiter': {
    core: 'expansion, growth, optimism, wisdom, abundance',
    keywords: ['growth', 'expansion', 'optimism', 'luck', 'wisdom', 'beliefs', 'abundance']
  },
  'Saturn': {
    core: 'structure, discipline, responsibility, limitations, maturity',
    keywords: ['responsibility', 'discipline', 'structure', 'limits', 'maturity', 'lessons', 'authority']
  },
  'Uranus': {
    core: 'change, innovation, freedom, rebellion, awakening',
    keywords: ['change', 'innovation', 'freedom', 'rebellion', 'awakening', 'surprises', 'technology']
  },
  'Neptune': {
    core: 'spirituality, dreams, illusion, compassion, transcendence',
    keywords: ['spirituality', 'dreams', 'illusion', 'compassion', 'creativity', 'confusion', 'mysticism']
  },
  'Pluto': {
    core: 'transformation, power, depth, regeneration, intensity',
    keywords: ['transformation', 'power', 'intensity', 'regeneration', 'depth', 'control', 'rebirth']
  },
  'North Node': {
    core: 'destiny, growth direction, soul purpose, future development',
    keywords: ['destiny', 'purpose', 'growth', 'development', 'future', 'karmic path']
  },
  'South Node': {
    core: 'past patterns, comfort zone, karmic past, release',
    keywords: ['past', 'comfort zone', 'habits', 'release', 'karmic patterns', 'familiar']
  }
};

// House meanings
const HOUSE_MEANINGS: Record<number, { area: string; keywords: string[] }> = {
  1: { area: 'Self, identity, appearance, how you present yourself', keywords: ['self', 'identity', 'appearance', 'first impressions', 'body'] },
  2: { area: 'Money, values, possessions, self-worth', keywords: ['money', 'values', 'resources', 'self-worth', 'possessions'] },
  3: { area: 'Communication, siblings, short trips, learning', keywords: ['communication', 'siblings', 'neighbors', 'learning', 'short trips'] },
  4: { area: 'Home, family, roots, emotional foundation', keywords: ['home', 'family', 'roots', 'emotions', 'private life', 'parents'] },
  5: { area: 'Creativity, romance, children, self-expression', keywords: ['creativity', 'romance', 'children', 'fun', 'self-expression', 'hobbies'] },
  6: { area: 'Work, health, daily routines, service', keywords: ['work', 'health', 'routines', 'service', 'pets', 'daily life'] },
  7: { area: 'Partnerships, marriage, one-on-one relationships', keywords: ['partnerships', 'marriage', 'relationships', 'others', 'contracts'] },
  8: { area: 'Transformation, shared resources, intimacy, death/rebirth', keywords: ['transformation', 'intimacy', 'shared resources', 'death', 'rebirth', 'psychology'] },
  9: { area: 'Travel, higher education, opportunities, beliefs, luck, growth', keywords: ['travel', 'opportunities', 'higher education', 'beliefs', 'luck', 'growth'] },
  10: { area: 'Career, public image, ambitions, status', keywords: ['career', 'public image', 'ambitions', 'status', 'reputation', 'authority'] },
  11: { area: 'Friendships, groups, hopes, social causes', keywords: ['friendships', 'groups', 'hopes', 'dreams', 'community', 'social causes'] },
  12: { area: 'Spirituality, unconscious, hidden matters, solitude', keywords: ['spirituality', 'unconscious', 'hidden', 'solitude', 'secrets', 'transcendence'] }
};

// Aspect meanings and interpretations
const ASPECT_INTERPRETATIONS: Record<string, {
  energy: string;
  flow: string;
  challenge?: string;
}> = {
  'Conjunction': {
    energy: 'merging, intensifying, blending',
    flow: 'The energies merge and intensify each other, creating a powerful focal point',
    challenge: 'Can be overwhelming if the energies clash or too intense to integrate'
  },
  'Opposition': {
    energy: 'tension, awareness, balance seeking',
    flow: 'Creates tension that brings awareness and demands integration of opposites',
    challenge: 'May feel like a tug-of-war or external pressure; requires finding balance'
  },
  'Trine': {
    energy: 'harmony, ease, natural flow',
    flow: 'Energy flows smoothly and harmoniously, bringing opportunities and ease',
    challenge: 'Can be too easy, leading to complacency or taking gifts for granted'
  },
  'Square': {
    energy: 'friction, motivation, growth through challenge',
    flow: 'Creates friction that motivates action and growth, though it may feel uncomfortable',
    challenge: 'Requires effort and adjustment; tension must be actively worked with'
  },
  'Sextile': {
    energy: 'opportunity, cooperation, potential',
    flow: 'Offers opportunities that require some effort to activate; supportive energy',
    challenge: 'Opportunities may be missed if not actively pursued'
  }
};

// Transit frequency based on planet orbital periods
const TRANSIT_FREQUENCY: Record<string, { duration: string; frequency: string; rarity: string }> = {
  'Moon': { duration: 'a few hours', frequency: 'Occurs every month', rarity: 'Very common, fleeting' },
  'Sun': { duration: '1-2 days', frequency: 'Occurs once per year', rarity: 'Common, annual event' },
  'Mercury': { duration: '1-2 days (or weeks if retrograde)', frequency: 'Occurs 1-3 times per year', rarity: 'Common, frequent' },
  'Venus': { duration: '2-3 days (or weeks if retrograde)', frequency: 'Occurs once per year', rarity: 'Fairly common' },
  'Mars': { duration: '3-4 days (or weeks if retrograde)', frequency: 'Occurs every 2 years', rarity: 'Moderately common' },
  'Jupiter': { duration: '1-2 weeks', frequency: 'Occurs every 12 years', rarity: 'Significant, occurs once per Jupiter cycle' },
  'Saturn': { duration: '2-3 weeks (or months if retrograde)', frequency: 'Occurs every 29 years', rarity: 'Major, rare life event' },
  'Uranus': { duration: '1-2 months', frequency: 'Occurs every 84 years', rarity: 'Extremely rare, once or twice in a lifetime' },
  'Neptune': { duration: '2-3 months', frequency: 'Occurs every 165 years', rarity: 'Extremely rare, generational' },
  'Pluto': { duration: '3-4 months', frequency: 'Occurs every 248 years', rarity: 'Extremely rare, multi-generational' },
  'North Node': { duration: '1-2 weeks', frequency: 'Occurs every 18.6 years', rarity: 'Significant karmic event' },
  'South Node': { duration: '1-2 weeks', frequency: 'Occurs every 18.6 years', rarity: 'Significant karmic event' }
};

// Manifestation examples for planet pairs
const MANIFESTATION_EXAMPLES: Record<string, string[]> = {
  'Sun-Moon': ['Emotional clarity about your identity', 'Feeling at home in your own skin', 'Family matters affecting your confidence'],
  'Sun-Mercury': ['Important communications about your goals', 'Mental clarity about your path', 'Speaking your truth confidently'],
  'Sun-Venus': ['Attracting love or appreciation', 'Creative self-expression flourishes', 'Feeling valued and valued by others'],
  'Sun-Mars': ['Taking bold action toward goals', 'Increased energy and motivation', 'Conflicts around ego or leadership'],
  'Sun-Jupiter': ['Expansion of opportunities', 'Increased confidence and optimism', 'Recognition and success'],
  'Sun-Saturn': ['Testing of identity and purpose', 'Taking on more responsibility', 'Feeling limited but building character'],
  'Sun-Uranus': ['Sudden changes in life direction', 'Breaking free from old patterns', 'Unexpected opportunities for authenticity'],
  'Sun-Neptune': ['Spiritual or creative inspiration', 'Confusion about identity', 'Compassionate self-expression'],
  'Sun-Pluto': ['Profound personal transformation', 'Power struggles or empowerment', 'Death and rebirth of identity'],

  'Moon-Mercury': ['Emotional conversations', 'Thinking about feelings', 'Talking with family members'],
  'Moon-Venus': ['Emotional comfort and pleasure', 'Family harmony', 'Nurturing relationships'],
  'Moon-Mars': ['Emotional reactivity or courage', 'Defending family or home', 'Passionate feelings'],
  'Moon-Jupiter': ['Emotional expansion and optimism', 'Family growth', 'Generous feelings'],
  'Moon-Saturn': ['Emotional maturity required', 'Dealing with family responsibilities', 'Feeling emotionally restricted'],
  'Moon-Uranus': ['Unexpected emotional changes', 'Breaking emotional patterns', 'Unusual family situations'],
  'Moon-Neptune': ['Deep emotional sensitivity', 'Spiritual or psychic experiences', 'Confusion about feelings'],
  'Moon-Pluto': ['Intense emotional transformation', 'Deep psychological insights', 'Emotional power struggles'],

  'Mercury-Venus': ['Pleasant conversations', 'Artistic or beautiful communications', 'Negotiations in relationships'],
  'Mercury-Mars': ['Assertive communication', 'Debates or arguments', 'Quick thinking and decisions'],
  'Mercury-Jupiter': ['Optimistic thinking', 'Learning opportunities', 'Long-distance communication'],
  'Mercury-Saturn': ['Serious thinking and planning', 'Important contracts or commitments', 'Mental discipline'],
  'Mercury-Uranus': ['Sudden insights or ideas', 'Unexpected news', 'Innovative thinking'],
  'Mercury-Neptune': ['Creative or spiritual ideas', 'Confusion in communication', 'Poetic or artistic expression'],
  'Mercury-Pluto': ['Deep research or investigation', 'Powerful conversations', 'Uncovering secrets'],

  'Venus-Mars': ['Passion in relationships', 'Attraction and desire', 'Creative action'],
  'Venus-Jupiter': ['Social expansion and joy', 'Financial opportunities', 'Love and abundance'],
  'Venus-Saturn': ['Commitment in relationships', 'Financial responsibility', 'Testing of values'],
  'Venus-Uranus': ['Sudden attraction or breakup', 'Unusual relationships', 'Financial surprises'],
  'Venus-Neptune': ['Romantic idealization', 'Spiritual love', 'Artistic inspiration or confusion'],
  'Venus-Pluto': ['Intense attractions', 'Transformation in relationships', 'Deep values shift'],

  'Mars-Jupiter': ['Bold expansion and action', 'Successful ventures', 'Excessive confidence'],
  'Mars-Saturn': ['Frustrated action or disciplined effort', 'Working hard', 'Delayed but lasting results'],
  'Mars-Uranus': ['Sudden actions or accidents', 'Revolutionary energy', 'Breaking free with force'],
  'Mars-Neptune': ['Confused or spiritual action', 'Fighting for a cause', 'Energy leaks or inspiration'],
  'Mars-Pluto': ['Intense drive for transformation', 'Power struggles', 'Profound courage or aggression'],

  'Jupiter-Saturn': ['Balancing growth and responsibility', 'Realistic expansion', 'Structured opportunities'],
  'Jupiter-Uranus': ['Sudden expansion or liberation', 'Revolutionary growth', 'Unexpected opportunities'],
  'Jupiter-Neptune': ['Spiritual expansion', 'Idealistic beliefs', 'Confusion about meaning'],
  'Jupiter-Pluto': ['Profound transformation and growth', 'Power and influence expand', 'Deep regeneration'],

  'Saturn-Uranus': ['Tension between old and new', 'Revolutionary responsibility', 'Breaking limiting structures'],
  'Saturn-Neptune': ['Dissolving structures', 'Spiritual discipline', 'Facing reality vs. illusion'],
  'Saturn-Pluto': ['Profound structural transformation', 'Karmic reckoning', 'Deep responsibility'],

  'Uranus-Neptune': ['Spiritual awakening', 'Dissolving old patterns', 'Collective change'],
  'Uranus-Pluto': ['Revolutionary transformation', 'Generational change', 'Radical empowerment'],

  'Neptune-Pluto': ['Generational spiritual transformation', 'Deep collective changes', 'Transcendent power']
};

export function generateAspectInterpretation(
  natalPlanet: string,
  natalHouse: number,
  transitPlanet: string,
  transitHouse: number,
  aspectType: string,
  orb: number
): {
  natalEnergy: string;
  transitEnergy: string;
  aspectMeaning: string;
  frequency: string;
  manifestations: string[];
  fullInterpretation: string;
} {
  // Get planet energies
  const natalPlanetEnergy = PLANET_ENERGIES[natalPlanet] || { core: 'energy', keywords: [] };
  const transitPlanetEnergy = PLANET_ENERGIES[transitPlanet] || { core: 'energy', keywords: [] };

  // Get house meanings
  const natalHouseMeaning = HOUSE_MEANINGS[natalHouse] || { area: 'life area', keywords: [] };
  const transitHouseMeaning = HOUSE_MEANINGS[transitHouse] || { area: 'life area', keywords: [] };

  // Get aspect interpretation
  const aspectInfo = ASPECT_INTERPRETATIONS[aspectType] || {
    energy: 'interaction',
    flow: 'creates an effect',
    challenge: 'May require adjustment'
  };

  // Get transit frequency
  const frequency = TRANSIT_FREQUENCY[transitPlanet] || {
    duration: 'variable time',
    frequency: 'Periodically',
    rarity: 'Varies'
  };

  // Build natal energy description
  const natalEnergy = `Your natal ${natalPlanet} in the ${natalHouse}${getOrdinalSuffix(natalHouse)} house represents your ${natalPlanetEnergy.core} as it relates to ${natalHouseMeaning.area}. This is a core part of your birth chart that shapes how you experience ${natalHouseMeaning.keywords.slice(0, 3).join(', ')}.`;

  // Build transit energy description
  const transitEnergy = `Transit ${transitPlanet} moving through your ${transitHouse}${getOrdinalSuffix(transitHouse)} house brings ${transitPlanetEnergy.core} to the area of ${transitHouseMeaning.area}. This transit lasts ${frequency.duration} and activates themes of ${transitHouseMeaning.keywords.slice(0, 3).join(', ')}.`;

  // Build aspect meaning
  const aspectMeaning = `The ${aspectType.toLowerCase()} aspect (${orb.toFixed(1)}° orb) between these planets creates ${aspectInfo.energy}. ${aspectInfo.flow}. ${aspectInfo.challenge || 'This aspect offers growth opportunities.'}`;

  // Build frequency description
  const frequencyDesc = `Transit ${transitPlanet} ${aspectType.toLowerCase()} to natal ${natalPlanet}: ${frequency.frequency}. ${frequency.rarity}. This makes it a ${frequency.rarity.includes('rare') ? 'significant and memorable' : 'relatively common but still meaningful'} transit.`;

  // Get specific house examples for each planet
  const natalHouseExamples = getHouseExamples(natalHouse, natalPlanet);
  const transitHouseExamples = getHouseExamples(transitHouse, transitPlanet);

  // Get specific manifestations for this combination
  const specificManifestations = getSpecificManifestations(
    natalPlanet,
    natalHouse,
    transitPlanet,
    transitHouse,
    aspectType
  );

  // Build full interpretation
  const fullInterpretation = `
**Natal Foundation:**
${natalEnergy}

**Transit Activation:**
${transitEnergy}

**Frequency & Timing:**
${frequencyDesc}

**How This May Manifest:**
The interaction between your natal ${natalPlanet} (${natalPlanetEnergy.keywords.slice(0, 2).join(', ')}) and transiting ${transitPlanet} (${transitPlanetEnergy.keywords.slice(0, 2).join(', ')}) through a ${aspectType.toLowerCase()} aspect (${aspectInfo.energy}. ${aspectInfo.flow}) can bring themes from your ${natalHouse}${getOrdinalSuffix(natalHouse)} house (${natalHouseExamples}) into dialogue with your current ${transitHouse}${getOrdinalSuffix(transitHouse)} house experiences (${transitHouseExamples}).

**Possible Manifestations - What You Might Experience:**
${specificManifestations.map(m => `• ${m}`).join('\n')}

**Working With This Transit:**
${getAdvice(aspectType, natalPlanet, transitPlanet)}
  `.trim();

  return {
    natalEnergy,
    transitEnergy,
    aspectMeaning,
    frequency: frequencyDesc,
    manifestations: specificManifestations,
    fullInterpretation
  };
}

function getOrdinalSuffix(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

function getHouseExamples(house: number, planet: string): string {
  const houseExamplesByPlanet: Record<number, Record<string, string>> = {
    1: {
      default: 'how you present yourself, your physical body, your personal initiative',
      Sun: 'your self-identity, how you shine, your vitality and life force',
      Moon: 'your emotional needs for self-care, how you instinctively react',
      Venus: 'your personal charm, physical appearance, how you attract others',
      Saturn: 'your self-discipline, how you limit yourself, your mature self-image'
    },
    2: {
      default: 'your income, possessions, what you value, your self-worth',
      Sun: 'building your material security, defining your values',
      Venus: 'earning money, spending on beautiful things, feeling valued',
      Jupiter: 'financial growth, generous spending, expanding resources',
      Saturn: 'financial responsibilities, budgeting, building lasting wealth'
    },
    3: {
      default: 'communication, siblings, neighbors, short trips, learning',
      Mercury: 'daily conversations, emails, studying, local travel',
      Mars: 'assertive communication, debates, quick decisions',
      Saturn: 'serious conversations, important documents, structured learning'
    },
    4: {
      default: 'home, family, your private life, emotional foundations',
      Moon: 'emotional security at home, family needs, domestic life',
      Saturn: 'home responsibilities, dealing with parents, family obligations',
      Uranus: 'sudden changes at home, unconventional living situation'
    },
    5: {
      default: 'creativity, romance, children, fun, self-expression',
      Sun: 'creative projects, romantic confidence, joy in self-expression',
      Venus: 'romantic encounters, artistic pursuits, pleasure and dating',
      Saturn: 'serious creative work, responsibilities regarding children'
    },
    6: {
      default: 'daily work, health routines, service, pets, daily habits',
      Sun: 'your work identity, health vitality, daily routines',
      Mars: 'work energy, physical fitness, taking action on health',
      Saturn: 'work responsibilities, chronic health issues, disciplined routines',
      Jupiter: 'work opportunities, health improvements, expanding daily life'
    },
    7: {
      default: 'partnerships, marriage, one-on-one relationships, contracts',
      Venus: 'romantic partnerships, harmony in relationships, social contracts',
      Mars: 'conflicts with partners, passionate relationships, asserting needs',
      Saturn: 'commitment in relationships, relationship responsibilities'
    },
    8: {
      default: 'shared resources, intimacy, transformation, taxes, inheritance',
      Pluto: 'deep transformation, power dynamics, psychological rebirth',
      Venus: 'shared finances with partner, intimate connections',
      Saturn: 'dealing with debts, insurance, serious financial matters'
    },
    9: {
      default: 'long-distance travel, higher education, new opportunities, expanding horizons',
      Jupiter: 'travel opportunities, luck in education, expanding opportunities, good fortune',
      Mercury: 'studying for degree, learning new skills, travel planning, taking courses',
      Saturn: 'commitment to education, important travel for work, long-term learning goals',
      Sun: 'travel for personal growth, educational opportunities, broadening perspective',
      Venus: 'vacation travel, romantic getaways, studying art or culture, enjoyable learning'
    },
    10: {
      default: 'career, public reputation, ambitions, status, authority figures',
      Sun: 'career identity, public recognition, leadership roles',
      Saturn: 'career responsibilities, dealing with bosses, building reputation',
      Jupiter: 'career growth, promotions, public success'
    },
    11: {
      default: 'friendships, groups, social causes, hopes and dreams, community',
      Venus: 'social gatherings, making friends, group harmony',
      Uranus: 'unconventional friends, sudden changes in social circles',
      Saturn: 'serious friendships, taking on group responsibilities'
    },
    12: {
      default: 'spirituality, unconscious patterns, solitude, hidden matters, retreat',
      Neptune: 'spiritual experiences, dreams, mystical insights',
      Saturn: 'dealing with fears, confronting the unconscious, solitary work',
      Pluto: 'deep psychological work, hidden transformations'
    }
  };

  const planetExamples = houseExamplesByPlanet[house];
  return planetExamples?.[planet] || planetExamples?.default || HOUSE_MEANINGS[house].area;
}

function getSpecificManifestations(
  natalPlanet: string,
  natalHouse: number,
  transitPlanet: string,
  transitHouse: number,
  aspectType: string
): string[] {
  // Create specific, predictive manifestations based on the combination
  const manifestations: string[] = [];

  // Get aspect quality
  const isHard = aspectType === 'Square' || aspectType === 'Opposition';
  const isEasy = aspectType === 'Trine' || aspectType === 'Sextile';
  const isConjunction = aspectType === 'Conjunction';

  // Planet pair specific manifestations - check both orders
  const pairKey = `${natalPlanet}-${transitPlanet}`;
  const reversePairKey = `${transitPlanet}-${natalPlanet}`;

  // VENUS aspects - Love, money, values, relationships
  if (natalPlanet === 'Venus' || transitPlanet === 'Venus') {

    // Venus-Saturn: Commitment, restrictions, maturity in love/money
    if (pairKey === 'Venus-Saturn' || reversePairKey === 'Venus-Saturn') {
      if (transitHouse === 7) {
        if (isHard) {
          manifestations.push(
            'Partner cancels date night or seems too busy for you repeatedly',
            'Having "the talk" about where the relationship is going - feels heavy and serious',
            'Partner criticizes your appearance, spending, or lifestyle choices',
            'Feeling like you\'re doing all the work in the relationship while partner is distant',
            'Considering breakup because relationship feels more like obligation than joy',
            'Partner says they need space or aren\'t ready for commitment',
            'Age difference in relationship becomes an issue or concern',
            'Meeting partner\'s critical family members who don\'t approve of you',
            'Existing relationship problems can no longer be swept under the rug',
            'Fear that partner doesn\'t really love you, just tolerates you',
            'One of you wants marriage/commitment, the other pulls back',
            'Temporary separation due to work, family obligations, or emotional distance'
          );
        } else {
          manifestations.push(
            'Getting engaged after period of dating - partner proposes or you discuss marriage seriously',
            'Moving in together and combining households, sharing bills',
            'Introducing partner to family as "the one" - official relationship status',
            'Partner shows up consistently, proves reliability through actions over time',
            'Meeting someone 5-15 years older who is established and serious about relationship',
            'Making relationship "Facebook official" or public after keeping it private',
            'Partner helps you through difficult time, showing their commitment',
            'Signing lease together, buying property together, making legal commitment',
            'Previous casual relationship becomes exclusive and serious',
            'Ex comes back with changed attitude, ready for real commitment',
            'Relationship becomes more stable, less drama, more partnership',
            'Partner supports your career or life goals in practical, concrete ways'
          );
        }
      }
      if (transitHouse === 2 || natalHouse === 2) {
        if (isHard) {
          manifestations.push(
            'Unexpected large expense drains savings - car repair, medical bill, home repair',
            'Credit card declined when trying to make fun purchase',
            'Having to say no to dinner invitations, concerts, or trips due to tight budget',
            'Pay raise request denied or bonus smaller than expected',
            'Putting expensive hobby or passion on hold due to financial reality',
            'Can\'t afford gift you wanted to buy for someone special',
            'Realizing you need to cut subscription services, downgrade lifestyle',
            'Partner or family member judges your spending, makes you feel guilty',
            'Bank account lower than it\'s been in years, forced to budget strictly',
            'Having to sell belongings or downsize to make ends meet',
            'Feeling poor compared to friends, can\'t keep up socially',
            'Delayed gratification - wanting something nice but having to wait months to afford it'
          );
        } else {
          manifestations.push(
            'Finally paying off debt that\'s been hanging over you for years',
            'Getting serious about budgeting, opening savings account with specific goal',
            'Older boss or mentor gives you raise, recognizing your consistent work',
            'Cutting unnecessary expenses and feeling proud of discipline',
            'Investing money for first time, thinking about long-term wealth building',
            'Finding affordable version of luxury you wanted - smart shopping',
            'Partner helps stabilize your finances or you combine finances responsibly',
            'Receiving inheritance or settlement that provides security',
            'Getting promoted to position with better pay after proving yourself',
            'Building credit, financial situation slowly but surely improving',
            'Making practical purchase that will last years - quality over quantity',
            'Creating budget that actually works, sticking to it for first time'
          );
        }
      }
      if (transitHouse === 5) {
        if (isHard) {
          manifestations.push(
            'Person you\'re dating keeps canceling plans or seems uninterested',
            'Feeling too old, too tired, or too serious to have fun',
            'Creative project rejected or receives harsh criticism',
            'Dating apps feel like job interviews - no chemistry, just interviews',
            'Kids or responsibilities make dating/fun feel impossible',
            'Ex contacts you but timing is wrong or they\'re still unavailable',
            'Attraction to someone much older who is emotionally unavailable',
            'Hobby or creative passion feels like obligation rather than joy',
            'Can\'t afford to go out and have fun like you used to',
            'Romantic interest friend-zones you or "not ready for relationship"',
            'Creativity blocked, feeling uninspired and stuck',
            'Past heartbreak resurfaces, making it hard to open up to new romance'
          );
        } else {
          manifestations.push(
            'Ex returns with matured perspective, ready for real relationship',
            'Meeting someone older and established through hobby or creative class',
            'Creative project becomes serious business opportunity',
            'Taking art, music, or creative passion seriously with professional goals',
            'Casual fling becomes committed relationship',
            'Older family member helps with children, giving you structure',
            'Romance develops slowly but surely with coworker or acquaintance',
            'Committing to creative practice with discipline - scheduled time for art/hobby',
            'Building something lasting in creative field through patience',
            'Dating becomes more intentional - looking for life partner, not just fun',
            'Receiving recognition for creative work from respected authority',
            'Learning skill from master/teacher that transforms your creative expression'
          );
        }
      }
      // General fallback for all other houses
      if (manifestations.length === 0) {
        if (isHard) {
          manifestations.push(
            'Feeling unloved, unattractive, or unworthy of affection',
            'Relationship feels heavy with obligation rather than lightness and joy',
            'Financial restriction forces you to cut back on enjoyment',
            'Rejection in love or social situation hurts deeply',
            'Someone older or authority figure criticizes your appearance or values',
            'Loneliness intensifies - feeling isolated or disconnected from others',
            'Commitment feels scary or burdensome rather than secure',
            'Self-worth plummets - comparing yourself unfavorably to others',
            'Can\'t afford things others have, feeling "less than"',
            'Love interest is unavailable, distant, or emotionally cold',
            'Creative block or feeling your artistic expression isn\'t good enough',
            'Delay in receiving love, money, or pleasure you desire'
          );
        } else {
          manifestations.push(
            'Commitment in relationship deepens - moving to next level with maturity',
            'Financial discipline pays off - seeing results of responsible choices',
            'Meeting someone older, wiser, or more established who values you',
            'Self-worth becomes more stable, less dependent on external validation',
            'Building something valuable over time through patient effort',
            'Receiving recognition for consistent work or creative expression',
            'Relationship becomes more reliable, stable, and secure',
            'Making practical financial decision that serves long-term wellbeing',
            'Learning to love yourself more deeply through maturity',
            'Quality over quantity in relationships - fewer but deeper connections',
            'Traditional commitment like engagement, marriage, or business partnership',
            'Developing lasting values and standards that guide your choices'
          );
        }
      }
    }

    // Venus-Jupiter: Expansion, abundance, luck in love/money
    if (pairKey === 'Venus-Jupiter' || reversePairKey === 'Venus-Jupiter') {
      if (transitHouse === 2) {
        manifestations.push(
          'Surprise bonus check arrives in mail or deposited to account',
          'Someone pays you back money you\'d written off',
          'Tax refund larger than expected',
          'Winning raffle, small lottery prize, or contest',
          'Client says yes to proposal, bringing in new revenue',
          'Raise approved - making $5k-15k more annually',
          'Finding money in old jacket or forgotten account',
          'Selling something for more than you thought it was worth',
          'Gift card or cash gift arrives unexpectedly',
          'Side hustle suddenly brings in more income',
          'Shopping trip where you find perfect items on sale',
          'Feeling abundant enough to treat yourself or donate generously'
        );
      }
      if (transitHouse === 7 || natalHouse === 7) {
        manifestations.push(
          'Matching with someone exciting on dating app who actually follows through',
          'Friend sets you up on blind date that goes surprisingly well',
          'Meeting someone while traveling or from different cultural background',
          'Partner plans surprise romantic gesture - trip, dinner, or gift',
          'Getting engaged - partner proposes in romantic way',
          'Attending wedding where you meet someone special',
          'Relationship feels fun again after difficult period',
          'Partner gets promotion/success that improves both your lives',
          'Someone popular or attractive shows interest in you',
          'Business partnership forms that feels lucky and beneficial',
          'Wedding planning is joyful, everything falling into place',
          'Social life expands through partner - meeting new people, having more fun'
        );
      }
      if (transitHouse === 5) {
        manifestations.push(
          'Instant chemistry with someone new - can\'t stop thinking about them',
          'First date that turns into hours of conversation and laughter',
          'Getting asked out by someone you find very attractive',
          'Pregnancy news (wanted) or joyful time with children',
          'Creative project gets picked up, published, or goes viral',
          'Winning at poker night, casino trip, or sports bet',
          'Vacation romance or exciting fling',
          'Art, music, or creative work receives praise and recognition',
          'Feeling confident, attractive, and magnetic',
          'Romantic partner from past reaches out, timing finally right',
          'Hobby becomes profitable - people want to pay for your creations',
          'Spontaneous fun - concert tickets, party invite, exciting plans'
        );
      }
      if (transitHouse === 10) {
        manifestations.push(
          'Promotion to position with better title and pay',
          'Boss publicly praises your work in meeting or email',
          'Headhunter contacts you with exciting opportunity',
          'Award, recognition, or being featured for your work',
          'Social media post about your work gets lots of engagement',
          'Networking event leads to valuable connection',
          'Getting hired for dream job after interview process',
          'Positive performance review with raise',
          'Media mentions your business or work positively',
          'Collaboration with well-known person in your field',
          'Reputation improves - people seek you out for expertise',
          'Work becomes more enjoyable, creative, and fulfilling'
        );
      }
    }

    // Venus-Mars: Passion, attraction, action in love/money
    if (pairKey === 'Venus-Mars' || reversePairKey === 'Venus-Mars') {
      if (transitHouse === 5 || natalHouse === 5) {
        if (isHard) {
          manifestations.push(
            'Starting new romance impulsively without thinking through compatibility',
            'Sexual attraction to someone who\'s wrong for you or unavailable',
            'Fighting with romantic partner about intimacy - one wants more passion, other wants space',
            'Creative project feels forced - pushing too hard and losing joy in the process',
            'Blowing money on date night or entertainment you can\'t really afford',
            'Making bold move on someone you\'re attracted to but getting rejected',
            'Existing relationship has lots of heat but constant arguing - passion without peace',
            'Gambling or risky investment because you\'re feeling lucky and impulsive',
            'Starting creative project with intense enthusiasm but burning out quickly',
            'Sexual desire high but partner not on same page - frustration builds',
            'Acting on crush at work or in friend group that creates awkwardness',
            'Children or creative responsibilities clash with desire for passion and excitement'
          );
        } else {
          manifestations.push(
            'Hot new romance begins - instant physical chemistry and mutual attraction',
            'Existing relationship gets passionate boost - can\'t keep hands off each other',
            'Successfully asking someone out on date and they enthusiastically say yes',
            'Creative project takes off - you\'re motivated and making real progress',
            'Sexual energy high and partner matches your enthusiasm perfectly',
            'Making money from creative hobby or artistic talent',
            'Winning small amount in lottery, raffle, or friendly bet',
            'Taking action on passion project and getting positive response',
            'Fun date ideas come easily - you know exactly how to romance someone',
            'Booking trip or adventure activity with romantic partner',
            'Children bring you joy and you have energy to play with them',
            'Starting new fitness routine that makes you feel sexy and confident',
            'Buying something beautiful that makes you happy without guilt'
          );
        }
      }
      if (transitHouse === 7) {
        if (isHard) {
          manifestations.push(
            'Fighting with partner about sex - different desires or timing never matches',
            'Arguments about money spending - you want to buy something, partner says no',
            'Partner accuses you of being too demanding or aggressive in relationship',
            'Sexual tension with someone who\'s not your partner - temptation to act on it',
            'Making impulsive decision about relationship while angry - breaking up in heat of moment',
            'Business partner disagrees with your approach or spending decisions',
            'Wanting to move faster in relationship but partner wants to slow down',
            'Competing with partner instead of cooperating - everything becomes contest',
            'Getting into argument that becomes physical - slamming doors, throwing things',
            'Partner\'s actions trigger your anger - they do something that feels disrespectful',
            'Rushing into commitment (moving in, engagement) before really thinking it through',
            'Contract negotiation gets heated - both sides digging in',
            'Attorney or business partner is aggressive and you clash over strategy'
          );
        } else {
          manifestations.push(
            'Passionate weekend with partner - reconnecting physically and emotionally',
            'Making decisive move on person you\'re interested in - asking them to be exclusive',
            'Successfully negotiating contract or agreement that benefits both parties',
            'Business partnership energized by new collaborative project',
            'Partner appreciates when you take initiative - planning date, making decision',
            'Sexual chemistry with partner at peak - best sex in months',
            'Signing papers for partnership (business or marriage) with confidence',
            'Taking action to improve relationship - couples therapy, date night, honest conversation',
            'Meeting someone new and making strong first impression - they\'re attracted to you',
            'Working out or doing physical activity together strengthens bond with partner',
            'Standing up for yourself in relationship in healthy way - partner respects it',
            'Closing business deal through charm and assertiveness',
            'Going after what you want in relationship and partner responds positively'
          );
        }
      }
      if (transitHouse === 2) {
        if (isHard) {
          manifestations.push(
            'Impulsive purchase you regret later - buying expensive item on whim',
            'Spending money on date, gift, or fun that throws off your budget',
            'Fighting with partner about financial decisions or values',
            'Starting side business with lots of energy but no clear plan',
            'Credit card bill arrives and you\'re shocked how much you spent',
            'Asking for raise but coming across too aggressive - boss says no',
            'Making money move hastily - investing without research and losing money',
            'Argument about shared finances - who spent what on what',
            'Car repair or unexpected expense forces you to dip into savings',
            'Buying something to make yourself feel better but it doesn\'t help',
            'Earning money but spending it faster than it comes in',
            'Conflict over values - realizing you and partner want different things'
          );
        } else {
          manifestations.push(
            'Confidently asking for raise and boss agrees - income increases',
            'Starting side hustle or business and making first sales quickly',
            'Taking decisive action to improve finances - new job, new client, new revenue stream',
            'Treating yourself to purchase you\'ve wanted and feeling great about it',
            'Partner gives you generous gift or takes you on nice date',
            'Selling item you no longer need for good price',
            'Taking initiative at work leads to bonus or commission',
            'Finding great deal on something you need - right place, right time',
            'Motivated to make more money and actively pursuing opportunities',
            'Buying something beautiful (art, jewelry, clothing) that holds value',
            'Earning money through creative project, hobby, or passion',
            'Partner supports your financial goals and contributes to shared savings',
            'Commission, tip, or unexpected payment arrives when you need it'
          );
        }
      }
    }

    // Venus-Uranus: Sudden changes, excitement, freedom in love/money
    if (pairKey === 'Venus-Uranus' || reversePairKey === 'Venus-Uranus') {
      if (transitHouse === 5 || transitHouse === 7) {
        if (isHard) {
          manifestations.push(
            'Partner suddenly breaks up with you out of nowhere - blindsided',
            'You wake up feeling trapped in relationship and want out immediately',
            'Partner acts erratically - hot and cold, loving one day, distant the next',
            'Falling for someone completely wrong for you - exciting but unstable',
            'On-again-off-again relationship cycle starts - breaking up and getting back together',
            'Partner reveals shocking information that changes everything',
            'Meeting someone online who seems perfect but lives far away or is unavailable',
            'Wanting freedom from commitment but also wanting security - internal conflict',
            'Relationship ends abruptly through text, ghosting, or sudden decision',
            'Partner meets someone else suddenly and leaves',
            'Long-distance relationship issues - time zones, distance creates problems',
            'Realizing you and partner want totally different futures',
            'Technology causes relationship problem - discovering texts, social media issues'
          );
        } else {
          manifestations.push(
            'Love at first sight - meeting someone and feeling instant electric connection',
            'Matching with someone amazing on dating app who exceeds expectations',
            'Friend introduces you to someone perfect for you at unexpected moment',
            'Existing relationship gets exciting boost through spontaneous adventure',
            'Meeting someone unconventional who opens your mind to new possibilities',
            'Online connection becomes real relationship - video chat turns into meeting',
            'Partner surprises you with spontaneous trip, gift, or romantic gesture',
            'Attending unusual event and meeting someone special there',
            'Breaking free from boring relationship pattern into exciting new dynamic',
            'Technology brings you together - social media, app, online community',
            'Long-distance relationship starts with someone fascinating',
            'Partner supports your independence and gives you perfect amount of freedom',
            'Sudden realization you\'re in love - feelings hit you like lightning bolt'
          );
        }
      }
      if (transitHouse === 11) {
        if (isHard) {
          manifestations.push(
            'Friend suddenly cuts you off without explanation',
            'Drama in friend group - people taking sides, unexpected conflict',
            'Online community you love has sudden conflict or falls apart',
            'Friend acts unpredictably - canceling plans, being flaky',
            'Realizing friend group no longer matches who you\'re becoming',
            'Friendship turns romantic but ends badly',
            'Social media argument or misunderstanding damages friendship',
            'Group you belong to changes rules or direction suddenly',
            'Friend asks for money and it creates awkwardness',
            'Unexpected ending of long-term friendship over difference of values'
          );
        } else {
          manifestations.push(
            'Meeting fascinating new friend through online community or app',
            'Friend becomes romantic partner - relationship shifts unexpectedly',
            'Joining new social group that feels like finding your people',
            'Unusual social invitation leads to exciting new connections',
            'Making friends with someone very different from your usual type',
            'Online friendship becomes real-life friendship',
            'Group project or community activity brings unexpected joy',
            'Friend introduces you to romantic prospect or business opportunity',
            'Social media connection leads to real collaboration or friendship',
            'Attending unusual event where you meet like-minded people',
            'Freedom to be yourself in social setting - acceptance and belonging',
            'Joining cause or movement that aligns with your values'
          );
        }
      }
      if (transitHouse === 2) {
        if (isHard) {
          manifestations.push(
            'Unexpected expense arrives - car breaks down, appliance dies, medical bill',
            'Money you were counting on doesn\'t come through',
            'Investment loses value suddenly - stock drops, crypto crashes',
            'Impulse purchase of tech or gadget you can\'t really afford',
            'Income becomes unstable - freelance work dries up, hours cut',
            'Financial situation changes due to partner\'s unexpected job loss',
            'Online purchase scam or fraud - losing money to fake seller',
            'Breaking expensive item accidentally - phone, laptop, jewelry',
            'Subscription or service you forgot about charges your account',
            'Friend borrows money and can\'t pay back as promised',
            'Bank error or account issue causes financial stress',
            'Unusual expense for something important but unplanned'
          );
        } else {
          manifestations.push(
            'Unexpected money arrives - rebate, refund, gift, surprise payment',
            'Making money in unusual way - selling online, crypto gains, side gig',
            'Financial situation improves through technology - app, online platform, remote work',
            'Friend tells you about money opportunity - investment, job, side hustle',
            'Winning contest, raffle, or small lottery prize',
            'Getting paid for tech skills, social media work, or online content',
            'Discovering valuable item you forgot you had - selling it for good price',
            'Income increase through innovative approach to work',
            'Finding great deal on tech, gadget, or something you need',
            'Crowdfunding or online support for creative project',
            'Unexpected bonus, commission, or financial gift',
            'New revenue stream opens up from unconventional source',
            'Freedom to earn money in way that matches your values'
          );
        }
      }
    }

    // Venus-Pluto: Intensity, transformation, obsession in love/money
    if (pairKey === 'Venus-Pluto' || reversePairKey === 'Venus-Pluto') {
      if (transitHouse === 7 || transitHouse === 8) {
        if (isHard) {
          manifestations.push(
            'Obsessing over partner - checking their phone, social media, constantly wondering what they\'re doing',
            'Jealousy consumes you - feeling threatened by partner\'s friends, coworkers, or exes',
            'Power struggle in relationship - both trying to control the other',
            'Discovering partner has been hiding something - affair, money issues, addiction',
            'Intense attraction to someone unavailable, married, or otherwise wrong for you',
            'Partner becomes controlling or possessive - tracking your movements, demanding passwords',
            'Relationship crisis hits - cheating discovered, major betrayal, trust destroyed',
            'Toxic relationship pattern surfaces - can\'t leave even though you know you should',
            'Partner gives ultimatum - change or they leave, commit or they\'re done',
            'Financial secrets revealed - debt, hidden accounts, money lies',
            'Inheritance or shared money causes family power struggle',
            'Sexual problems in relationship - manipulation, coercion, or total shutdown',
            'Partner\'s dark side emerges - anger, control, psychological manipulation',
            'Realizing relationship is based on fear and control, not love'
          );
        } else {
          manifestations.push(
            'Meeting someone who feels like soulmate - deep, instant recognition',
            'Existing relationship transforms into something much deeper',
            'Sexual connection reaches new level of intimacy and vulnerability',
            'Partner supports you through personal transformation - therapy, healing, growth',
            'Letting go of toxic relationship pattern that has plagued you for years',
            'Deep conversation with partner heals old wound and brings you closer',
            'Facing relationship fears together makes bond unbreakable',
            'Financial merger with partner - combining accounts, buying property together',
            'Receiving inheritance or insurance payout that changes financial situation',
            'Partner reveals vulnerable truth about themselves and you love them more for it',
            'Releasing need to control relationship and finding peace in trust',
            'Transformation through therapy or counseling - individual or couples',
            'Sexual healing - releasing shame, trauma, or blockages to intimacy',
            'Realizing what you truly value in relationship and partner embodies it'
          );
        }
      }
      if (transitHouse === 2 || transitHouse === 8) {
        if (isHard) {
          manifestations.push(
            'Major financial loss - investment tanks, business fails, money disappears',
            'Discovering someone has stolen from you or misused shared funds',
            'Debt reaches crisis point - can\'t ignore it anymore, must deal with it',
            'Obsessing over money - constant worry about finances consuming your thoughts',
            'Power struggle over inheritance - family fighting over deceased relative\'s assets',
            'Partner controls the money and you feel powerless',
            'IRS audit or major tax issue that requires big payment',
            'Losing access to money you thought was secure - frozen account, locked inheritance',
            'Forced to let go of possessions due to financial crisis',
            'Insurance claim denied when you desperately need it',
            'Business partner embezzles or misuses company funds',
            'Financial secret you\'ve been hiding comes to light',
            'Bankruptcy or foreclosure becomes real possibility'
          );
        } else {
          manifestations.push(
            'Receiving inheritance from deceased family member',
            'Insurance payout arrives - life insurance, settlement, claim approved',
            'Major financial transformation through business merger or sale',
            'Partner contributes significantly to shared finances - buying house together',
            'Releasing attachment to money or possessions - realizing what truly matters',
            'Deep examination of values leads to better financial decisions',
            'Getting out of debt through focused, disciplined effort',
            'Investment makes significant gains - stocks, property value increases',
            'Financial settlement from divorce, lawsuit, or negotiation',
            'Receiving back pay, bonus, or money owed to you',
            'Partner\'s income increases significantly and they share generously',
            'Discovering you value experiences over possessions - freeing shift',
            'Financial therapy or money mindset work transforms relationship with money',
            'Selling something valuable for exactly what you need'
          );
        }
      }
      // General fallback for all other houses
      if (manifestations.length === 0) {
        if (isHard) {
          manifestations.push(
            'Intense attraction turns into obsession or jealousy',
            'Power struggle over money, values, or relationship',
            'Financial crisis forcing complete transformation of values',
            'Discovering hidden truth about relationship or money',
            'Control issues surfacing in love or financial matters',
            'Toxic pattern in relationships you can\'t seem to break',
            'Deep fear of loss making you possessive or controlling',
            'Betrayal around money or values - trust destroyed',
            'Forced to let go of person or possession you were clinging to',
            'Values clash - discovering fundamental incompatibility',
            'Manipulation or coercion in relationship or financial matter',
            'Dark side of desire - wanting something unhealthy or destructive'
          );
        } else {
          manifestations.push(
            'Deep transformation of values and what truly matters',
            'Intense connection that transforms understanding of love',
            'Financial empowerment through releasing old patterns',
            'Letting go of toxic relationship opens space for healing',
            'Deep truth revealed that strengthens relationship',
            'Profound shift in what you value and prioritize',
            'Financial transformation through inheritance or settlement',
            'Releasing control and finding peace in trust',
            'Sexual or emotional healing creates deeper intimacy',
            'Discovery of inner values independent of external validation',
            'Powerful creative or romantic manifestation',
            'Complete transformation of relationship with money or love'
          );
        }
      }
    }

    // Venus-Neptune: Romance, illusion, spirituality in love
    if (pairKey === 'Venus-Neptune' || reversePairKey === 'Venus-Neptune') {
      // House 2: Money, values, resources
      if (transitHouse === 2) {
        if (isHard) {
          manifestations.push(
            'Financial deception - being lied to about price, value, or cost',
            'Money disappears mysteriously - unclear where it went',
            'Impulse buying beautiful things you can\'t afford',
            'Being scammed by something that seemed too good to be true',
            'Vague financial promises that never materialize',
            'Unclear about what you truly value - spending on wrong things',
            'Partner\'s financial deception comes to light',
            'Idealizing purchase then disappointed by reality',
            'Sacrificing financial security for romantic or artistic dream',
            'Money confusion - budget doesn\'t add up, receipts lost',
            'Being taken advantage of financially due to compassion',
            'Escapist spending - shopping to avoid dealing with reality'
          );
        } else {
          manifestations.push(
            'Artistic or creative work generates income beautifully',
            'Money flows in through spiritual or healing work',
            'Intuition guides wise financial decision',
            'Creative visualization manifests abundance',
            'Music, art, or beauty work becomes profitable',
            'Compassionate approach to money brings peace',
            'Spiritual practice improves relationship with finances',
            'Income from helping others or healing profession',
            'Beautiful purchase brings lasting joy',
            'Financial forgiveness - releasing debt or money resentment',
            'Values align with spirituality - letting go of materialism',
            'Money arrives in mysterious, perfect timing'
          );
        }
      }
      if (transitHouse === 5 || transitHouse === 7) {
        if (isHard) {
          manifestations.push(
            'Falling for someone\'s potential instead of who they actually are',
            'Partner lies or deceives you - discovering they\'re not who they said they were',
            'Secret affair - either you\'re having one or partner is',
            'Unrequited love - pining for someone who doesn\'t feel the same way',
            'Being love-bombed then ghosted - too good to be true romance disappears',
            'Partner has addiction issues that surface or worsen',
            'Idealizing partner so much you ignore red flags',
            'Long-distance or online romance where reality doesn\'t match fantasy',
            'Financial deception in relationship - partner hiding spending, debt, or income',
            'Feeling confused about relationship - can\'t tell if it\'s real love or illusion',
            'Sacrificing too much for partner who takes advantage of your generosity',
            'Partner plays victim and you enable their behavior',
            'Romantic disappointment when you finally see person clearly',
            'Being strung along by someone who won\'t commit'
          );
        } else {
          manifestations.push(
            'Meeting someone who feels like soulmate - spiritual connection',
            'Falling in love with partner\'s soul, not just their appearance',
            'Compassionate, unconditional love develops in relationship',
            'Creative inspiration flows from romantic connection',
            'Dream romance manifests - meeting someone who matches your ideal',
            'Spiritual practices or beliefs bring you closer to partner',
            'Forgiving partner for past hurt and moving forward with open heart',
            'Partner inspires your artistic or creative expression',
            'Romance feels magical, transcendent, otherworldly in best way',
            'Music, art, or film brings romantic moment to life',
            'Partner\'s kindness and compassion make you want to be better person',
            'Healing old love wounds through gentle, understanding relationship',
            'Meditation, spirituality, or therapy improves relationship',
            'Unconditional acceptance from partner heals your heart'
          );
        }
      }
      // House 10: Career, public image
      if (transitHouse === 10) {
        if (isHard) {
          manifestations.push(
            'Professional promise dissolves - job offer, promotion falls through',
            'Boss or client makes vague commitments that never happen',
            'Career confusion - unclear about direction or goals',
            'Public image suffers from gossip or misunderstanding',
            'Artistic career seems unrealistic - discouraged by lack of results',
            'Being deceived professionally - false promises, unclear contracts',
            'Sacrificing too much for career dream that may not materialize',
            'Professional boundary violations - unclear expectations',
            'Idealistic career vision meets harsh reality',
            'Public reputation damaged by false information',
            'Work situation unclear - role, pay, or status murky',
            'Creative profession feels unsustainable financially'
          );
        } else {
          manifestations.push(
            'Artistic or creative career flourishes beautifully',
            'Spiritual or healing work gains professional recognition',
            'Public image benefits from compassion and empathy',
            'Career in music, art, film, or healing takes off',
            'Professional success through helping others',
            'Intuition guides wise career decision',
            'Public speaking or performance flows with grace',
            'Creative vision recognized and valued professionally',
            'Spiritual practice enhances career success',
            'Professional reputation benefits from kindness and beauty',
            'Dream career manifests through faith and visualization',
            'Work feels like calling - spiritually aligned profession'
          );
        }
      }
      // House 4: Home, family, emotional foundation
      if (transitHouse === 4) {
        if (isHard) {
          manifestations.push(
            'Family member deceives or withholds truth',
            'Idealizing family past - nostalgia prevents seeing reality',
            'Home situation unclear or unstable',
            'Parent or family member\'s addiction affects you',
            'Emotional confusion - unclear about feelings toward family',
            'Real estate deception - hidden issues with home or property',
            'Family boundary violations - unclear where you end and they begin',
            'Sacrificing too much for family member who takes advantage',
            'Home feels like escape from reality - avoiding real issues',
            'Family member plays victim and you enable',
            'Emotional foundation feels shaky or unclear',
            'Romanticizing childhood prevents healing'
          );
        } else {
          manifestations.push(
            'Home becomes spiritual sanctuary',
            'Family healing through forgiveness and compassion',
            'Creating beautiful, artistic home environment',
            'Emotional peace through meditation or spiritual practice at home',
            'Family member shows unexpected empathy and understanding',
            'Home filled with music, art, and beauty',
            'Intuitive understanding of family dynamics heals old wounds',
            'Real estate opportunity arrives through perfect timing',
            'Emotional foundation strengthened through spiritual practice',
            'Family connection deepens through shared creativity',
            'Home office for artistic or healing work flourishes',
            'Unconditional love and acceptance within family'
          );
        }
      }
      if (transitHouse === 12) {
        if (isHard) {
          manifestations.push(
            'Secret romance with unavailable person - married, ex, coworker',
            'Hiding relationship from friends or family out of shame',
            'Pining for ex privately - still in love but can\'t tell anyone',
            'Self-sabotaging in love due to unconscious fears',
            'Confusion about your feelings - can\'t tell what\'s real',
            'Escaping relationship problems through fantasy, substances, or avoidance',
            'Betrayal in relationship you didn\'t see coming',
            'Financial confusion - not sure where money is going',
            'Self-deception about love situation - refusing to see truth',
            'Isolation from social life due to unhealthy relationship'
          );
        } else {
          manifestations.push(
            'Healing old love wounds through therapy, meditation, or spiritual practice',
            'Forgiving yourself for past relationship mistakes',
            'Artistic or creative inspiration comes in dreams or meditation',
            'Secret romance that\'s healthy - keeping relationship private while you nurture it',
            'Compassion for ex-partner - releasing resentment and finding peace',
            'Spiritual awakening through heartbreak - finding meaning in pain',
            'Music, art, poetry helps you process feelings about love',
            'Volunteering or helping others brings unexpected joy',
            'Meditation or yoga opens your heart to love',
            'Dreams give you insight about relationship patterns',
            'Releasing need for relationship - finding completeness within yourself',
            'Therapy helps you understand love patterns and heal',
            'Quiet time alone helps you reconnect with what you truly want in love'
          );
        }
      }
      // General fallback for all other houses
      if (manifestations.length === 0) {
        if (isHard) {
          manifestations.push(
            'Idealizing someone or situation instead of seeing reality clearly',
            'Financial confusion - money seems to slip away without clear reason',
            'Feeling deceived or disappointed when fantasy meets reality',
            'Unclear boundaries in relationships leading to confusion',
            'Being taken advantage of due to excessive compassion',
            'Avoiding difficult truth about relationship or financial situation',
            'Artistic or creative confusion - too many ideas, no clear direction',
            'Escapist behavior through shopping, substances, or fantasy',
            'Unclear values - not sure what you really want or need',
            'Sacrifice without reciprocation - giving too much, receiving too little',
            'Deception around money, values, or relationship',
            'Confusion about feelings - can\'t distinguish love from illusion'
          );
        } else {
          manifestations.push(
            'Spiritual connection deepens in relationship or with values',
            'Artistic inspiration flows naturally and beautifully',
            'Compassion and understanding create harmony in relationships',
            'Dreamy romance manifests in healthy, grounded way',
            'Creative visualization brings financial or romantic manifestation',
            'Music, art, or beauty elevates daily life experience',
            'Unconditional love and acceptance given and received',
            'Intuition guides wise financial or relationship decisions',
            'Healing through beauty, art, nature, or spiritual practice',
            'Forgiveness creates peace in relationships',
            'Gentle letting go of what no longer serves your values',
            'Divine timing brings perfect romantic or financial opportunity'
          );
        }
      }
    }
  }

  // SUN aspects - Identity, vitality, purpose, ego
  if (natalPlanet === 'Sun' || transitPlanet === 'Sun') {

    // Sun-Saturn: Testing of identity, responsibility, building character
    if (pairKey === 'Sun-Saturn' || reversePairKey === 'Sun-Saturn') {
      if (transitHouse === 10) {
        if (isHard) {
          manifestations.push(
            'Boss criticizes your work or questions your competence',
            'Passed over for promotion you thought you deserved',
            'Feeling stuck in career - can\'t move forward despite effort',
            'Taking on more responsibilities at work without recognition or raise',
            'Questioning whether you\'re on the right career path',
            'Getting laid off, demoted, or hours reduced unexpectedly',
            'Public failure or embarrassment in professional setting',
            'Boss or authority figure treats you unfairly or with coldness',
            'Career goals feel impossible - obstacles at every turn',
            'Feeling undervalued at work - skills not appreciated',
            'Job becomes soul-crushing routine - no joy or fulfillment',
            'Fear of failure prevents you from taking career risks',
            'Working harder than ever but getting nowhere'
          );
        } else {
          manifestations.push(
            'Promotion to position with more responsibility and respect',
            'Boss recognizes your hard work with raise or advancement',
            'Building solid professional reputation through consistent effort',
            'Taking on leadership role that requires maturity and discipline',
            'Long-term career goal finally achieved through persistence',
            'Professional certification or qualification earned',
            'Respect from colleagues and superiors increases',
            'Successfully managing difficult project that builds credibility',
            'Mentor or authority figure supports your career advancement',
            'Creating sustainable career path with long-term potential',
            'Work ethic pays off with tangible rewards',
            'Taking on important responsibility and handling it well',
            'Career milestone reached through patient, steady effort'
          );
        }
      }
      if (transitHouse === 6) {
        if (isHard) {
          manifestations.push(
            'Chronic fatigue or low energy that won\'t go away',
            'Health issue forces you to slow down and rest',
            'Feeling drained by daily work routine - every day feels like slog',
            'Work responsibilities overwhelming - too much on your plate',
            'Getting sick frequently due to stress and overwork',
            'Back pain, joint pain, or other physical issues from tension',
            'Depression affecting ability to handle daily tasks',
            'No time for self-care because work demands too much',
            'Dental issues or other health problems requiring attention',
            'Feeling old, tired, worn down by daily grind',
            'Coworkers dump their responsibilities on you',
            'Health insurance issue or medical expense creates stress',
            'Boss criticizes your work performance or productivity'
          );
        } else {
          manifestations.push(
            'Successfully building sustainable daily routine that supports health',
            'Disciplined approach to fitness pays off - seeing results',
            'Creating work schedule that allows for proper rest and recovery',
            'Boss recognizes your consistent, reliable work performance',
            'Implementing health routine that becomes easy habit',
            'Organizing workload effectively - getting more done with less stress',
            'Coworkers appreciate your reliability and work ethic',
            'Taking on health challenge (diet, exercise) and sticking to it',
            'Doctor appointment shows improved health markers',
            'Daily work becomes sustainable rhythm rather than constant stress',
            'Finding the right balance between work and self-care',
            'Promotion at work due to consistent performance',
            'Successfully managing chronic health condition through discipline'
          );
        }
      }
      if (natalHouse === 5 && transitHouse === 6) {
        manifestations.push('Your creative projects (5th) are tested by work demands (6th) - struggling to find time for hobbies. Romantic life takes backseat to job responsibilities.');
      }
    }

    // Sun-Jupiter: Success, expansion, confidence, opportunity
    if (pairKey === 'Sun-Jupiter' || reversePairKey === 'Sun-Jupiter') {
      if (transitHouse === 10) {
        manifestations.push(
          'Promotion to higher position with better title and pay',
          'Job offer from company you\'ve always wanted to work for',
          'Boss publicly praises your work in meeting or company-wide email',
          'LinkedIn message from headhunter with exciting opportunity',
          'Your project succeeds beyond expectations - getting attention',
          'Public recognition - award, feature, mention in media',
          'Expanding your professional reach - new clients, new market',
          'Things falling into place career-wise - right place, right time',
          'Business trip that opens doors to new opportunities',
          'Confidence at work leads to taking on bigger challenges',
          'Professional network expands with helpful connections',
          'Getting "yes" to pitch, proposal, or business idea',
          'Success comes more easily than usual - flow state at work'
        );
      }
      if (transitHouse === 9) {
        manifestations.push(
          'Booking international trip you\'ve dreamed about',
          'Accepted to graduate school, certificate program, or training course',
          'Scholarship or financial aid approved for education',
          'Business trip abroad that combines work and pleasure',
          'Lucky break comes from unexpected source - friend of friend, random contact',
          'Travel opportunity through work - company pays for you to go abroad',
          'Learning new skill or language that expands your worldview',
          'Meeting people from different cultures who broaden your perspective',
          'Online course or workshop that changes your career trajectory',
          'Things working out in your favor - obstacles disappear',
          'Visa or paperwork for travel approved quickly',
          'Opportunity to teach, publish, or share your knowledge',
          'Adventure travel that becomes transformative experience'
        );
      }
      if (transitHouse === 2) {
        manifestations.push(
          'Raise approved - income increases significantly',
          'Bonus check arrives - larger than expected',
          'New revenue stream opens up - side business, royalties, passive income',
          'Tax refund arrives or you owe less than you thought',
          'Generous tip, commission, or payment from satisfied client',
          'Feeling confident asking for raise - and getting it',
          'Investment makes gains - stock up, property value increases',
          'Financial opportunity comes through - loan approved, grant awarded',
          'Someone pays you back money you were owed',
          'Unexpected income from old project, royalty, or residual',
          'Confidence in earning potential increases - knowing you\'re valuable',
          'Generous with money and it feels good to give',
          'Finding money you forgot about - old account, gift card, savings'
        );
      }
      if (transitHouse === 11) {
        manifestations.push(
          'Meeting influential person who supports your goals',
          'Friend introduces you to someone who can help your career',
          'Joining group or community that elevates your life',
          'Dreams and aspirations expand - thinking bigger about future',
          'Social media post goes viral or gets significant positive attention',
          'Community recognizes your contributions - award, mention, thanks',
          'Networking event leads to valuable connection',
          'Friend helps you get job, client, or opportunity',
          'Group project succeeds beyond expectations',
          'Invited to join exclusive group or organization',
          'Online community supports your work or creative project',
          'Fundraiser or crowdfunding campaign exceeds goal',
          'Social circle expands with inspiring, successful people'
        );
      }
    }

    // Sun-Uranus: Breakthrough, freedom, sudden changes in identity
    if (pairKey === 'Sun-Uranus' || reversePairKey === 'Sun-Uranus') {
      if (transitHouse === 10) {
        if (isHard) {
          manifestations.push(
            'Getting fired suddenly without warning',
            'Boss acts erratically - unpredictable moods, changing expectations',
            'Company reorganizes and your position is eliminated',
            'Feeling trapped in career and wanting to quit immediately',
            'Career takes unexpected turn - transfer, merger, company sold',
            'Conflict with authority figure escalates suddenly',
            'Desire to quit job and do something completely different',
            'Reputation disrupted by unexpected event or controversy',
            'Technology issue at work causes major problem',
            'Sudden realization you\'re in wrong career - identity crisis',
            'Contract not renewed or project cancelled abruptly',
            'Working conditions change suddenly - new boss, new rules',
            'Feeling rebellious toward authority - can\'t follow rules anymore'
          );
        } else {
          manifestations.push(
            'Breakthrough career opportunity comes from nowhere - unexpected offer',
            'Innovative idea you pitched gets approved and funded',
            'Sudden promotion or advancement you didn\'t see coming',
            'Freedom to work remotely or set your own schedule',
            'Career shift to something more authentic and exciting',
            'Meeting influential person through random encounter',
            'Technology or social media brings career opportunity',
            'Starting business or freelance work that takes off quickly',
            'Recognition for unconventional approach or unique skills',
            'Boss gives you autonomy and freedom you\'ve wanted',
            'Invited to join innovative project or cutting-edge team',
            'Career breakthrough through online platform or digital presence',
            'Liberation from corporate job into entrepreneurship or creative work'
          );
        }
      }
      if (transitHouse === 11) {
        if (isHard) {
          manifestations.push(
            'Friend group suddenly disbands or falls apart',
            'Kicked out of group or organization unexpectedly',
            'Friend betrays you or acts totally out of character',
            'Social circle changes dramatically - people leaving your life',
            'Realizing friend group doesn\'t align with who you\'re becoming',
            'Online drama or conflict in community you belong to',
            'Group project falls apart due to unexpected issue',
            'Technology fails during important social or group event'
          );
        } else {
          manifestations.push(
            'Joining unexpected social group or cause that excites you',
            'Meeting unique, fascinating people who change your perspective',
            'Sudden realization about life direction through conversation with friend',
            'Online connections become significant - social media friendship becomes real',
            'Invited to join innovative group, movement, or organization',
            'Friend introduces you to opportunity that shifts your path',
            'Social media brings recognition or opportunity',
            'Finding your people - community that gets you',
            'Group project succeeds through innovative approach',
            'Technology or app connects you with like-minded people',
            'Friend group expands to include more diverse, interesting people',
            'Joining cause or movement that aligns with your authentic self'
          );
        }
      }
      if (natalHouse === 1) {
        if (isHard) {
          manifestations.push(
            'Sudden urge to change appearance - cutting hair drastically, new style',
            'Unexpected event forces you to show up differently',
            'Identity crisis - not sure who you are anymore',
            'Accident or health issue that changes your appearance',
            'Feeling restless with how you present yourself',
            'Breaking free from old image but not sure what comes next'
          );
        } else {
          manifestations.push(
            'Breakthrough in understanding who you really are',
            'Sudden confidence to be authentic - coming out, speaking up',
            'Changing appearance to match inner truth - new style, new look',
            'Liberation from caring what others think',
            'Unexpected event that forces you to be more yourself',
            'Technology or platform allows you to express true self',
            'Breaking free from old identity into something more genuine'
          );
        }
      }
    }

    // Sun-Venus: Love, creativity, pleasure, self-worth, attraction
    if (pairKey === 'Sun-Venus' || reversePairKey === 'Sun-Venus') {
      if (transitHouse === 7) {
        if (isHard) {
          manifestations.push(
            'Wanting attention from partner but feeling ignored or underappreciated',
            'Partner criticizes your appearance, style, or creative expression',
            'Disagreement about money - who pays for what, spending priorities',
            'Feeling like you have to choose between career goals and relationship',
            'Partner seems more interested in others - jealousy or insecurity surfaces',
            'Business partnership has tension over values or financial matters',
            'Wanting to look good in relationship but partner doesn\'t make you feel special',
            'Social event with partner where you feel overshadowed or uncomfortable',
            'Conflict about work-life balance - career taking away from relationship time',
            'Feeling unappreciated for what you bring to the partnership',
            'Partner not supporting your creative projects or career ambitions',
            'Financial disagreement with business partner or spouse',
            'Feeling like relationship is all give and no take'
          );
        } else {
          manifestations.push(
            'Partner makes you feel attractive, appreciated, and valued',
            'Receiving compliments or gifts from partner that boost your confidence',
            'Successful date night or romantic weekend - feeling connected and happy',
            'Partner supports your career or creative work enthusiastically',
            'Social event with partner where you shine as a couple',
            'Business partnership brings financial benefit and mutual appreciation',
            'Easy flow between work and love life - both areas going well',
            'Partner\'s presence makes you feel more confident and attractive',
            'Collaborative project with partner (business or creative) succeeds',
            'Receiving recognition or appreciation in public with partner by your side',
            'Financial agreement with partner works out smoothly',
            'Partner gives you space to shine while also supporting you',
            'Feeling proud to be with your partner - they enhance your life'
          );
        }
      }
      if (transitHouse === 10) {
        if (isHard) {
          manifestations.push(
            'Career success feels hollow - making money but not enjoying it',
            'Boss or colleague criticizes your work style or creative approach',
            'Financial stress at work - not earning what you feel you deserve',
            'Wanting recognition at work but being overlooked',
            'Career demands make you sacrifice enjoyment and pleasure',
            'Conflict between looking good and being effective at work',
            'Professional relationship (mentor, boss) feels transactional not appreciative',
            'Feeling undervalued at work despite your contributions',
            'Creative career project gets rejected or criticized',
            'Work environment feels cold or unappreciative',
            'Struggling to balance professional image with authentic self',
            'Financial negotiations at work don\'t go in your favor'
          );
        } else {
          manifestations.push(
            'Recognition at work makes you feel valued and appreciated',
            'Bonus, raise, or financial reward for your efforts',
            'Boss or colleague compliments your work or style',
            'Career opportunity that aligns with your values and brings joy',
            'Professional success makes you feel attractive and confident',
            'Creative project at work receives positive feedback',
            'Working with people you enjoy - pleasant work environment',
            'Public appearance or presentation goes well - you shine',
            'Career advancement that also increases income',
            'Finding balance between work and pleasure - enjoying your job',
            'Professional relationship (mentor, client) is mutually appreciative',
            'Your personal style or charisma advances your career',
            'Work brings both money and satisfaction'
          );
        }
      }
      if (transitHouse === 2 || transitHouse === 5) {
        if (isHard) {
          manifestations.push(
            'Overspending on things to make yourself feel better',
            'Financial stress affecting your self-worth and confidence',
            'Creative project costs more than expected',
            'Struggling to earn money doing what you love',
            'Guilt about spending on pleasure or enjoyment',
            'Values conflict - what you want vs what you can afford',
            'Dating or romance costs draining your finances',
            'Feeling broke after trying to maintain appearances',
            'Creative hobby feels like waste of money not investment',
            'Self-worth tied too closely to income or possessions'
          );
        } else {
          manifestations.push(
            'Money comes in from creative project or hobby',
            'Wise purchase that brings lasting joy and value',
            'Financial confidence increases - feeling abundant',
            'Making money doing what you love',
            'Raise or income increase makes life more enjoyable',
            'Creative talents bring financial reward',
            'Able to afford nice things without guilt',
            'Investment in appearance or pleasure pays off',
            'Self-worth increases independent of financial status',
            'Finding balance between saving and enjoying money',
            'Gift or bonus allows you to treat yourself',
            'Financial situation improves through relationships or partnerships'
          );
        }
      }
      // General fallback for all other houses
      if (manifestations.length === 0) {
        if (isHard) {
          manifestations.push(
            'Wanting recognition but feeling overlooked or underappreciated',
            'Creative self-expression blocked by practical concerns or criticism',
            'Conflict between personal desires and what others value',
            'Feeling unattractive or doubting your worth despite achievements',
            'Money stress affecting your confidence and self-image',
            'Relationship tension around appreciation and attention',
            'Creative project or appearance criticized',
            'Having to choose between pleasure and responsibility',
            'Overspending to compensate for low self-worth',
            'Difficulty receiving compliments or feeling valued',
            'Financial disagreement affecting sense of security',
            'Work feels unrewarding despite effort - lacking satisfaction'
          );
        } else {
          manifestations.push(
            'Receiving genuine compliments that boost your confidence',
            'Creative project brings both joy and recognition',
            'Feeling attractive, valued, and appreciated by others',
            'Money flowing more easily - income increase or bonus',
            'Enjoying life and work - finding pleasure in daily activities',
            'Relationship brings mutual appreciation and support',
            'Successfully balancing work and pleasure',
            'Making money doing what you love',
            'Personal style or charisma opens doors and creates opportunities',
            'Wise purchase brings lasting satisfaction',
            'Self-worth increases independent of external validation',
            'Feeling abundant and generous with time, money, and love'
          );
        }
      }
    }

    // Sun-Mercury: Communication about identity, self-expression, thinking
    if (pairKey === 'Sun-Mercury' || reversePairKey === 'Sun-Mercury') {
      if (isConjunction) {
        manifestations.push(
          'Major conversation that defines or redefines your identity',
          'Speaking engagement or presentation that showcases who you are',
          'Writing project that expresses your authentic self',
          'Contract signing that aligns with your life purpose',
          'Important email or message that validates your ideas',
          'Interview where you perfectly articulate your goals',
          'Decision that brings mental clarity and confidence together',
          'Learning experience that crystallizes your self-understanding',
          'Your voice and vision coming together powerfully',
          'Communication that establishes your authority or expertise',
          'Networking conversation that opens significant doors',
          'Plans or ideas that perfectly express your ambitions'
        );
      } else if (isHard) {
        manifestations.push(
          'Miscommunication about your goals causing frustration',
          'Difficulty expressing who you are or what you want',
          'Mental stress or overthinking about identity and purpose',
          'Email, text, or conversation that undermines confidence',
          'Interview or presentation where you struggle to articulate yourself',
          'Contract or agreement that conflicts with your values',
          'Information overload making it hard to see your direction',
          'Sibling or neighbor creating drama that affects your self-image',
          'Travel plans disrupted by work or identity crisis',
          'Decision paralysis about career or life path',
          'Your ideas being criticized or dismissed',
          'Communication breakdown with authority figures or about goals'
        );
      } else {
        manifestations.push(
          'Easy conversation that clarifies your goals and direction',
          'Writing or speaking opportunity that boosts confidence',
          'Mental clarity helping you make good decisions',
          'Positive email, text, or message about career or identity',
          'Interview or presentation that goes smoothly',
          'Learning something that enhances self-understanding',
          'Contract or document that supports your goals',
          'Helpful conversation with sibling or neighbor',
          'Travel plans that align with your purpose',
          'Clear thinking leading to good career decisions',
          'Your ideas receiving positive recognition',
          'Networking smoothly opening new opportunities'
        );
      }
    }

    // Sun-Moon: Emotional alignment with identity, home vs career
    if (pairKey === 'Sun-Moon' || reversePairKey === 'Sun-Moon') {
      if (isHard) {
        manifestations.push(
          'Conflict between career demands and family needs',
          'Feeling emotionally unsupported in your goals',
          'Home life interfering with work or public image',
          'Parent or family member criticizes your career choices',
          'Feeling torn between what you want and what you need',
          'Emotional needs clash with ego or ambitions',
          'Work-life balance completely off - one suffers for other',
          'Family obligations prevent you from pursuing goals',
          'Feeling like you can\'t be yourself at home or at work',
          'Mother figure or family conflicts with authority figure or boss',
          'Private feelings don\'t match public persona',
          'Emotional crisis affects work performance or vice versa'
        );
      } else {
        manifestations.push(
          'Emotional support helps you achieve career goals',
          'Family celebrates your professional success',
          'Feeling at home in your career or public role',
          'Work-life balance feels harmonious',
          'Confidence and emotional security working together',
          'Family and career both thriving simultaneously',
          'Boss or authority figure shows parental support',
          'Home life supports your ambitions',
          'Feeling emotionally aligned with life direction',
          'Past experiences inform current success',
          'Mother or family member helps your career',
          'Private and public life in healthy balance'
        );
      }
    }

    // Sun-Mars: Energy, action, drive, assertiveness, conflict
    if (pairKey === 'Sun-Mars' || reversePairKey === 'Sun-Mars') {
      if (isHard) {
        manifestations.push(
          'Conflict with boss or authority figure - ego clash',
          'Feeling attacked or criticized for who you are',
          'Anger or frustration affecting your confidence',
          'Impulsive action that damages reputation or career',
          'Physical exhaustion from overwork or stress',
          'Competition at work feels personal',
          'Someone challenges your authority or leadership',
          'Accident or injury from moving too fast or being careless',
          'Aggressive behavior hurting relationships or career',
          'Feeling like you have to fight for recognition',
          'Masculine energy conflict - alpha battle',
          'Pushing too hard and burning out'
        );
      } else {
        manifestations.push(
          'High energy and motivation to pursue goals',
          'Taking decisive action advances your career',
          'Athletic or physical success boosts confidence',
          'Courageously going after what you want',
          'Leadership opportunity - taking charge successfully',
          'Physical vitality and confidence at peak',
          'Assertiveness gets positive results',
          'Starting new project or initiative with enthusiasm',
          'Winning competition or achieving athletic goal',
          'Bold career move pays off',
          'Energy and identity aligned - feeling unstoppable',
          'Taking initiative earns respect and recognition'
        );
      }
    }

    // Sun-Neptune: Spirituality, confusion, idealism, creativity
    if (pairKey === 'Sun-Neptune' || reversePairKey === 'Sun-Neptune') {
      if (isHard) {
        manifestations.push(
          'Confusion about career direction or life purpose',
          'Feeling lost or directionless professionally',
          'Deception or lies affecting reputation or career',
          'Boss or authority figure is unclear or dishonest',
          'Idealism meets harsh reality - disappointment',
          'Energy drain or fatigue for unclear reasons',
          'Escaping responsibilities through fantasy or substances',
          'Professional boundaries dissolve inappropriately',
          'Feeling invisible or overlooked at work',
          'Creative vision unclear or constantly changing',
          'Identity crisis - not sure who you are',
          'Being misled or misleading others about capabilities'
        );
      } else {
        manifestations.push(
          'Spiritual insight about life purpose',
          'Creative inspiration flows - artistic breakthrough',
          'Compassionate leadership or helping profession success',
          'Dreams or intuition guide career decisions',
          'Finding meaning in work beyond money',
          'Artistic or spiritual career opportunity',
          'Meditation or spiritual practice enhances confidence',
          'Letting go of ego brings peace',
          'Creative project receives recognition',
          'Working in healing, arts, or spiritual field',
          'Intuitive decision proves correct',
          'Compassion and identity aligned'
        );
      }
    }

    // Sun-Pluto: Power, transformation, intensity, control
    if (pairKey === 'Sun-Pluto' || reversePairKey === 'Sun-Pluto') {
      if (isHard) {
        manifestations.push(
          'Power struggle with boss or authority figure',
          'Feeling controlled or manipulated professionally',
          'Career crisis forces complete life transformation',
          'Someone undermines your authority or reputation',
          'Obsessive focus on career at expense of everything else',
          'Dark side of ambition surfaces - ruthless behavior',
          'Being forced out of position or losing control',
          'Intense confrontation reveals hidden truths',
          'Fear of failure or losing power becomes consuming',
          'Career or reputation crisis - rock bottom moment',
          'Power dynamics in relationship become toxic',
          'Having to face shadow side of your personality'
        );
      } else {
        manifestations.push(
          'Profound transformation of identity and life purpose',
          'Reclaiming personal power after period of powerlessness',
          'Career breakthrough through psychological insight',
          'Letting go of old identity - rebirth into authentic self',
          'Therapeutic work transforms confidence and direction',
          'Taking back control of life from external forces',
          'Powerful leadership role - commanding respect naturally',
          'Profound self-awareness leads to career success',
          'Eliminating what no longer serves - powerful clean slate',
          'Intense focus brings major accomplishment',
          'Rising from ashes - comeback story',
          'Depth work pays off - transformation complete'
        );
      }
    }
  }

  // MOON aspects - Emotions, needs, home, family
  if (natalPlanet === 'Moon' || transitPlanet === 'Moon') {

    // Moon-Saturn: Emotional heaviness, maturity, family responsibility
    if (pairKey === 'Moon-Saturn' || reversePairKey === 'Moon-Saturn') {
      if (transitHouse === 4) {
        if (isHard) {
          manifestations.push(
            'Parent becomes ill or needs care - you must step up',
            'Family obligations feel heavy - visiting, helping, always being there',
            'Home needs expensive repairs - roof, plumbing, foundation',
            'Feeling emotionally unsupported by family when you need them most',
            'Cold, tense atmosphere at home - silence instead of warmth',
            'Parent criticizes your life choices or parenting',
            'Dealing with aging parent\'s decline - assisted living, medical decisions',
            'Home feels like burden instead of comfort',
            'Family member depends on you financially or emotionally',
            'Feeling trapped living at home or stuck with housing situation',
            'Loneliness even when surrounded by family',
            'Old family wounds resurface - confronting painful past',
            'Home doesn\'t feel safe emotionally - constant tension'
          );
        } else {
          manifestations.push(
            'Successfully handling family responsibility with maturity',
            'Making home improvements that create stability',
            'Setting healthy boundaries with family - they respect them',
            'Creating structured routine at home that supports everyone',
            'Family appreciates your reliability and consistency',
            'Successfully navigating parent care with grace',
            'Home becomes organized, peaceful refuge',
            'Mortgage approved or real estate transaction succeeds',
            'Family respects your leadership and decision-making',
            'Creating emotional stability through routine and structure',
            'Working through family issues with patience - making progress',
            'Home renovation or organization project succeeds',
            'Building foundation for long-term family security'
          );
        }
      }
      if (natalHouse === 4) {
        if (isHard) {
          manifestations.push(
            'Depression settles in - feeling heavy, empty, sad',
            'Loneliness even in relationship or around people',
            'Feeling like nobody really understands or supports you',
            'Need for solitude - wanting to isolate from everyone',
            'Processing old family wounds - therapy bringing up past',
            'Home doesn\'t feel like refuge - nowhere feels safe',
            'Emotional numbness - can\'t feel joy or connection',
            'Past trauma resurfaces - having to deal with it',
            'Feeling like burden to loved ones',
            'Difficulty expressing emotions - walls up, heart closed',
            'Parents\' emotional coldness affecting you still',
            'Grief over family dysfunction or childhood pain'
          );
        } else {
          manifestations.push(
            'Building genuine emotional maturity and resilience',
            'Creating safe, structured home environment for yourself',
            'Working through family issues with patience - healing happening',
            'Therapy helps you process and release old pain',
            'Emotional walls come down in healthy way',
            'Finding emotional security within yourself',
            'Taking responsibility for your emotional wellbeing',
            'Family relationships improve through boundaries and honesty',
            'Home becomes sanctuary you\'ve created',
            'Emotional stability develops - less reactive, more grounded',
            'Processing grief in healthy way with support',
            'Building family you choose - chosen family, close friends'
          );
        }
      }
      // General fallback for all other houses
      if (manifestations.length === 0) {
        if (isHard) {
          manifestations.push(
            'Feeling emotionally heavy, burdened, or depressed',
            'Family responsibilities weighing you down',
            'Emotional coldness or distance from loved ones',
            'Difficulty expressing feelings or asking for support',
            'Feeling criticized or judged by family or close ones',
            'Loneliness despite being around people',
            'Taking on too much emotional responsibility for others',
            'Old emotional wounds resurfacing - grief, sadness, regret',
            'Fear of emotional vulnerability keeping you isolated',
            'Feeling like emotional needs are burden on others',
            'Past family patterns limiting current emotional expression',
            'Obligation overriding genuine emotional connection'
          );
        } else {
          manifestations.push(
            'Emotional maturity developing through life experience',
            'Taking responsibility for feelings without blaming others',
            'Building emotional boundaries that protect wellbeing',
            'Family relationship deepens through honesty and structure',
            'Feeling emotionally grounded and stable',
            'Processing difficult emotions with patience and wisdom',
            'Creating emotional security through discipline and routine',
            'Parent or elder gives wise emotional guidance',
            'Grief processed healthily - allowing time to heal',
            'Commitment to emotional growth paying off',
            'Building foundation of emotional stability',
            'Past emotional lessons integrated - stronger for the experience'
          );
        }
      }
    }

    // Moon-Uranus: Emotional awakening, sudden changes at home
    if (pairKey === 'Moon-Uranus' || reversePairKey === 'Moon-Uranus') {
      if (transitHouse === 4) {
        if (isHard) {
          manifestations.push(
            'Unexpected news from family member - engagement, pregnancy, illness',
            'Sudden need to move - lease not renewed, job transfer, emergency',
            'Family member acts completely out of character',
            'Home technology breaks down at worst time - AC, heat, WiFi',
            'Roommate or family member announces they\'re leaving suddenly',
            'Unusual disruption in home routine - construction, emergency',
            'Parent or family member does something shocking',
            'Forced to change living situation unexpectedly',
            'Home damaged by storm, flood, or other sudden event',
            'Emotional outburst at home you didn\'t see coming',
            'Family dynamic shifts overnight due to news or event'
          );
        } else {
          manifestations.push(
            'Exciting home improvement or renovation project',
            'Sudden opportunity to move to better place',
            'Emotional breakthrough during family conversation',
            'Family member brings unexpected good news',
            'Home technology upgrade makes life easier',
            'Unusual but wonderful family gathering or reunion',
            'Freedom to make home changes you\'ve wanted',
            'Family accepts your authentic self - liberating',
            'Moving into place that feels instantly like home',
            'Unexpected family support when you need it'
          );
        }
      }
      if (transitHouse === 11) {
        manifestations.push(
          'Friends become more important emotionally than family',
          'Joining group that feels like chosen family',
          'Unusual social situation stirs deep emotions',
          'Online community provides emotional support',
          'Friend says exactly what you needed to hear',
          'Social group accepts you completely - feeling of belonging',
          'Unexpected emotional connection with friend',
          'Community rallies around you in crisis'
        );
      }
      if (!transitHouse || (transitHouse !== 4 && transitHouse !== 11)) {
        manifestations.push(
          'Sudden emotional breakthrough - clarity arrives',
          'Restlessness at home - need for change',
          'Breaking free from emotional patterns that held you back',
          'Unexpected mood shifts that actually feel liberating',
          'Emotional awakening through unexpected experience',
          'Freedom from old emotional programming'
        );
      }
    }

    // Moon-Pluto: Intense emotions, transformation, family power dynamics
    if (pairKey === 'Moon-Pluto' || reversePairKey === 'Moon-Pluto') {
      if (transitHouse === 4 || natalHouse === 4) {
        if (isHard) {
          manifestations.push(
            'Family secret revealed - adoption, affair, hidden sibling, money secrets',
            'Power struggle with parent or family member escalates',
            'Family member has crisis - addiction, mental health, financial',
            'Feeling controlled or manipulated by family',
            'Home becomes site of emotional battlefield',
            'Discovery of family member\'s betrayal or deception',
            'Parent becomes seriously ill - life and death situation',
            'Having to make difficult decision about family member\'s care',
            'Childhood trauma resurfaces with full intensity',
            'Emotional crisis at home that transforms family dynamics',
            'Fighting with family member over inheritance or money',
            'Feeling like you have to choose between family members',
            'Obsessive worry about family member you can\'t control'
          );
        } else {
          manifestations.push(
            'Deep healing of family wounds - transformative conversation',
            'Family secret revealed that actually brings relief and truth',
            'Emotional transformation through facing family issues',
            'Letting go of toxic family pattern - liberation',
            'Family member opens up about deep feelings - bonding',
            'Home becomes sanctuary for deep emotional work',
            'Therapy breakthrough about family dynamics',
            'Forgiving family member and feeling weight lift',
            'Family crisis brings everyone closer together',
            'Deep emotional intimacy with family member',
            'Releasing need to control family - trusting process',
            'Transformative home renovation or change',
            'Family supports your transformation and growth'
          );
        }
      }
      if (transitHouse === 8) {
        if (isHard) {
          manifestations.push(
            'Intense emotional crisis - breakdown, panic attacks',
            'Obsessive thoughts or compulsive behaviors surface',
            'Facing deepest fear about abandonment or loss',
            'Nightmares or disturbing dreams about death, loss',
            'Therapy brings up traumatic memories - hard to process',
            'Feeling emotionally out of control',
            'Psychological crisis forces you to get help',
            'Dealing with partner or family member\'s emotional crisis',
            'Grief hits hard - can\'t function normally',
            'Fear of death or losing loved one becomes consuming'
          );
        } else {
          manifestations.push(
            'Therapeutic breakthrough - finally understanding your patterns',
            'Powerful dreams provide psychological insight',
            'Emotional transformation through deep inner work',
            'Letting go of trauma - releasing it from your body',
            'Depth psychology work transforms your emotional life',
            'Facing fear and coming through stronger',
            'Intense but healing emotional release',
            'Understanding family patterns and breaking cycle',
            'Therapy helps you release deep-seated pain',
            'Emotional intimacy reaches new depth with partner',
            'Transformation through grief - finding meaning',
            'Powerful emotional healing experience'
          );
        }
      }
      if (!transitHouse || (transitHouse !== 4 && transitHouse !== 8 && natalHouse !== 4)) {
        manifestations.push(
          isHard
            ? 'Emotional intensity peaks - possible breakdown leading to breakthrough. Compulsive emotional patterns surface. Feeling overwhelmed by depth of emotions.'
            : 'Emotional breakthrough after period of intensity. Releasing deep feelings brings relief. Transforming emotional patterns. Depth of feeling leads to healing.'
        );
      }
    }

    // Moon-Jupiter: Emotional expansion, optimism, family growth
    if (pairKey === 'Moon-Jupiter' || reversePairKey === 'Moon-Jupiter') {
      if (isConjunction) {
        manifestations.push(
          'Major family celebration or milestone event',
          'Profound emotional healing and expansion',
          'Moving to significantly better home - major upgrade',
          'Pregnancy announcement or family expansion',
          'Feeling deeply abundant and blessed',
          'Mother or family brings major good fortune',
          'Home becomes center of growth and celebration',
          'Emotional breakthrough with faith or meaning',
          'Generous gesture from or to family that changes things',
          'Family trip or relocation that opens new horizons',
          'Home improvement that transforms living situation',
          'Feeling emotionally liberated and hopeful about future'
        );
      } else if (isHard) {
        manifestations.push(
          'Overexpansion - taking on too much emotionally',
          'Family member being excessive or irresponsible',
          'Overindulgence leading to emotional or physical issues',
          'Promising too much to family - can\'t deliver',
          'Moving plans falling through or being too ambitious',
          'Mother or family member being overly optimistic or unrealistic',
          'Emotional exaggeration causing problems at home',
          'Home expenses getting out of control',
          'Family drama involving money or values differences',
          'Travel plans disrupting family harmony',
          'False optimism about family situation',
          'Overconfidence in emotional or domestic decisions'
        );
      } else {
        manifestations.push(
          'Feeling emotionally expansive and optimistic',
          'Family celebration or good news from relative',
          'Generous emotional support from loved ones',
          'Moving to bigger or better home flows easily',
          'Family grows harmoniously - good news',
          'Feeling abundant and grateful for what you have',
          'Emotional healing through travel or new experiences',
          'Mother or family member brings good fortune',
          'Feeling at home anywhere - emotional freedom',
          'Enjoying home comforts and family time',
          'Home improvement or expansion goes smoothly',
          'Faith and emotional security supporting each other'
        );
      }
    }

    // Moon-Mars: Emotional intensity, family conflict, protective instincts
    if (pairKey === 'Moon-Mars' || reversePairKey === 'Moon-Mars') {
      if (isHard) {
        manifestations.push(
          'Argument with family member - emotional explosion',
          'Feeling angry at home or with loved ones',
          'Mother or female family member triggers your anger',
          'Emotional reactivity - snapping at people',
          'Conflict between home and action/career',
          'Kitchen accident or household injury',
          'Impatient with family\'s emotional needs',
          'Feeling defensive or attacked emotionally',
          'Aggressive behavior at home',
          'Physical energy disrupted by emotional turmoil',
          'Fighting to protect family or home',
          'Emotional courage but also volatility'
        );
      } else {
        manifestations.push(
          'Taking action to improve home or family situation',
          'Emotional courage to address family issues',
          'Protective instincts strong - defending loved ones',
          'Physical activity releases emotional tension',
          'Motivated to care for family actively',
          'Passionate feelings toward home or family',
          'Taking initiative in domestic matters',
          'Emotional honesty strengthens relationships',
          'Working on home with enthusiasm and energy',
          'Mother or family member encourages your goals',
          'Feeling brave enough to express true feelings',
          'Balancing emotions with action successfully'
        );
      }
    }

    // Moon-Venus: Emotional comfort, beauty at home, feminine harmony
    if (pairKey === 'Moon-Venus' || reversePairKey === 'Moon-Venus') {
      if (isConjunction) {
        manifestations.push(
          'Profound emotional and aesthetic harmony at home',
          'Major home beautification or renovation project',
          'Deeply meaningful moment with mother or female family',
          'Feeling completely loved, nurtured and valued',
          'Perfect family gathering - everyone feels appreciated',
          'Significant purchase for home that brings joy',
          'Romantic relationship with deep emotional connection',
          'Self-care ritual that transforms your emotional state',
          'Cooking or creating something beautiful that touches hearts',
          'Financial decision that supports emotional security',
          'Home becomes sanctuary of beauty and comfort',
          'Feminine energy fully integrated and expressed'
        );
      } else if (isHard) {
        manifestations.push(
          'Emotional spending on home or comfort items - overspending',
          'Conflict with mother or female family about values or money',
          'Feeling unappreciated or unloved at home',
          'Home doesn\'t feel comfortable or beautiful - dissatisfaction',
          'Self-indulgence leading to guilt or financial stress',
          'Family member criticizes your appearance or taste',
          'Relationship tension affecting emotional security',
          'Wanting comfort but it feels out of reach',
          'Decorating or cooking goes wrong - frustration',
          'Money stress affecting home life or relationships',
          'Feeling emotionally starved despite material comfort',
          'Clash between emotional needs and financial reality'
        );
      } else {
        manifestations.push(
          'Feeling emotionally content and comfortable',
          'Home feels beautiful and peaceful',
          'Treating yourself to comfort and pleasure easily',
          'Good relationship with mother or female family flows',
          'Cooking, decorating, or beautifying home goes well',
          'Emotional and financial security aligned',
          'Feeling loved and nurtured',
          'Family gathering is pleasant and harmonious',
          'Buying something nice for home that fits budget',
          'Self-care and emotional wellbeing prioritized naturally',
          'Romantic feelings about home or family',
          'Feeling valued by family and loved ones'
        );
      }
    }

    // Moon-Mercury: Emotional communication, talking about feelings
    if (pairKey === 'Moon-Mercury' || reversePairKey === 'Moon-Mercury') {
      if (isConjunction) {
        manifestations.push(
          'Major emotional conversation that changes everything',
          'Writing or journaling breakthrough about feelings',
          'Family meeting with important news shared',
          'Mother reveals something significant',
          'Emotional intelligence peak - understanding yourself deeply',
          'Significant contract or document about home/family',
          'Sibling conversation that brings emotional clarity',
          'Learning that transforms your emotional understanding',
          'Trip to see family that\'s emotionally meaningful',
          'Text or call that articulates exactly what you feel',
          'Teaching or sharing emotional wisdom with others',
          'Perfect communication of needs and feelings'
        );
      } else if (isHard) {
        manifestations.push(
          'Emotional conversation turns into argument',
          'Difficulty expressing feelings clearly',
          'Text or call from family member causes stress',
          'Overthinking emotions - mental/emotional conflict',
          'Sibling or neighbor says something hurtful',
          'Mother criticizes or miscommunicates',
          'News about home or family causes anxiety',
          'Contract or document about home causes confusion',
          'Travel plans to see family cancelled or stressful',
          'Journaling reveals painful truths',
          'Feeling misunderstood when trying to express emotions',
          'Mental chatter disrupts emotional peace'
        );
      } else {
        manifestations.push(
          'Important emotional conversation flows easily',
          'Talking about feelings helps process them',
          'Text or call from family member brings comfort',
          'Journaling or writing about personal feelings helps',
          'Sibling conversation is emotionally supportive',
          'Learning something that enhances emotional understanding',
          'Mother or family member shares good news',
          'Thinking clearly about emotional patterns',
          'Short trip to visit family goes smoothly',
          'Emotional intelligence and communication aligned',
          'Contract or document regarding home goes well',
          'Understanding your feelings through conversation'
        );
      }
    }

    // Moon-Neptune: Emotional sensitivity, spiritual feelings, confusion
    if (pairKey === 'Moon-Neptune' || reversePairKey === 'Moon-Neptune') {
      if (isHard) {
        manifestations.push(
          'Emotional confusion - not sure what you feel',
          'Family member deceives you or situation unclear',
          'Escaping emotions through fantasy or substances',
          'Feeling emotionally drained for no clear reason',
          'Mother or family situation involves deception',
          'Boundaries dissolve inappropriately at home',
          'Crying for unknown reasons - emotional overflow',
          'Idealized family expectations meet disappointing reality',
          'Feeling like victim in family dynamics',
          'Home situation murky or uncertain',
          'Emotional manipulation or guilt from family',
          'Compassion taken advantage of'
        );
      } else {
        manifestations.push(
          'Spiritual or emotional healing at deep level',
          'Compassion for family members increases',
          'Dreams or intuition guide emotional decisions',
          'Artistic or creative inspiration from emotions',
          'Meditation or spiritual practice brings emotional peace',
          'Forgiving family members - releasing resentment',
          'Home becomes spiritual sanctuary',
          'Emotional boundaries soften in healthy way',
          'Music, art, or film touches you deeply',
          'Unconditional love for family',
          'Psychic or intuitive connection with mother/family',
          'Emotional transcendence through spirituality'
        );
      }
    }
  }

  // MERCURY aspects - Communication, thinking, learning, travel
  if (natalPlanet === 'Mercury' || transitPlanet === 'Mercury') {

    // Mercury-Jupiter: Optimistic thinking, learning, communication success
    if (pairKey === 'Mercury-Jupiter' || reversePairKey === 'Mercury-Jupiter') {
      if (transitHouse === 9) {
        manifestations.push(
          'Accepted to graduate school, MBA program, or certificate course',
          'Scholarship or educational grant approved',
          'Planning international trip that excites you',
          'Flight deals pop up for destination you\'ve wanted to visit',
          'Learning new language or skill that opens career doors',
          'Enrolling in online course that changes your perspective',
          'Positive news about visa, passport, or travel paperwork',
          'Book, podcast, or course teaches you exactly what you need',
          'Conversation with someone from different culture expands your mind',
          'Publisher, editor, or mentor says yes to your work',
          'Legal documents or contracts work out in your favor',
          'Teaching opportunity comes your way',
          'Workshop or conference that networking leads to opportunity'
        );
      }
      if (transitHouse === 3) {
        manifestations.push(
          'Great conversation with sibling heals old rift',
          'Neighbor shares helpful information or resource',
          'Short road trip or weekend getaway goes perfectly',
          'Learning new skill comes easily - picking it up fast',
          'Good news arrives via text, email, or phone call',
          'Contract signing goes smoothly - everything approved',
          'Writing flows easily - blog post, email, proposal',
          'Successful negotiation - both sides happy',
          'Car runs great or you find perfect vehicle',
          'Local errands lead to helpful encounters',
          'Sibling or cousin shares exciting news',
          'Workshop or class in your area teaches valuable skill',
          'Communication with everyone feels easy and positive'
        );
      }
      if (transitHouse === 10) {
        manifestations.push(
          'Presentation at work goes better than expected - applause',
          'Email or proposal to boss gets enthusiastic yes',
          'Your ideas at meeting are well-received and implemented',
          'Boss publicly praises your communication skills',
          'Interview goes amazingly well - you nail it',
          'Networking leads to job offer or opportunity',
          'LinkedIn post gets lots of engagement and job inquiries',
          'Writing or communication project advances your career',
          'Speaking opportunity - podcast, panel, presentation',
          'Professional certification exam results - you passed',
          'Mentor gives you advice that opens new career path',
          'Contract negotiation succeeds - raise, new position',
          'Your pitch, proposal, or business idea gets funded'
        );
      }
      // General fallback for all other houses
      if (manifestations.length === 0) {
        if (isHard) {
          manifestations.push(
            'Over-promising or exaggerating leads to disappointment',
            'Too many ideas making it hard to focus on one',
            'Optimism without follow-through - talk but no action',
            'Communication missed due to being scattered or overbooked',
            'Legal or educational matter more complex than expected',
            'Travel plans too ambitious - exhausting instead of fun',
            'Information overload - reading too much, learning too little',
            'Philosophical debate becomes preachy or self-righteous',
            'Missing important details while focused on big picture',
            'Contract or agreement has hidden costs or obligations',
            'Overconfidence in presentation or communication backfires',
            'Expanding commitments beyond capacity to deliver'
          );
        } else {
          manifestations.push(
            'Important conversation opens new opportunities',
            'Learning something valuable that changes your perspective',
            'Good news arrives via email, text, or phone call',
            'Educational opportunity - course, workshop, or mentorship',
            'Travel plans come together easily and joyfully',
            'Writing or speaking opportunity expands your reach',
            'Optimistic thinking leads to positive communication',
            'Legal or educational paperwork approved smoothly',
            'Networking conversation creates valuable connection',
            'Mind expands through book, podcast, or conversation',
            'Contract or agreement brings growth and opportunity',
            'Sharing knowledge or teaching others brings satisfaction'
          );
        }
      }
    }

    // Mercury-Saturn: Serious thinking, important documents, communication blocks
    if (pairKey === 'Mercury-Saturn' || reversePairKey === 'Mercury-Saturn') {
      if (transitHouse === 3 || transitHouse === 9) {
        if (isHard) {
          manifestations.push(
            'Important email doesn\'t send or gets lost',
            'Misunderstanding with sibling leads to argument',
            'Writer\'s block - can\'t find words or ideas won\'t flow',
            'Car breaks down or needs expensive repair',
            'Travel delayed - flight cancelled, roads closed, weather',
            'Difficult conversation with family member you\'ve been avoiding',
            'Mind feels foggy - trouble concentrating or remembering',
            'Self-doubt about your intelligence or abilities',
            'Someone criticizes your ideas or communication style',
            'Contract or paperwork has problems - errors, delays',
            'Learning feels hard - new skill taking forever',
            'Phone, computer, or tech issues causing communication problems',
            'Negative thoughts or pessimistic thinking patterns'
          );
        } else {
          manifestations.push(
            'Important contract signed successfully',
            'Serious study session produces breakthrough understanding',
            'Research project yields solid results',
            'Productive planning session - creating concrete plan',
            'Difficult but necessary conversation goes well',
            'Making realistic learning plan and sticking to it',
            'Car maintenance prevents future problems',
            'Travel plans organized perfectly - everything in order',
            'Writing important document - will, legal paper, thesis',
            'Mature communication with sibling resolves old issue',
            'Learning complex subject through disciplined study',
            'Building reputation for reliable, professional communication',
            'Mental clarity about practical matters'
          );
        }
      }
      if (transitHouse === 10) {
        if (isHard) {
          manifestations.push(
            'Boss criticizes your work or presentation',
            'Presentation doesn\'t go as planned - tech fails, you stumble',
            'Your idea or proposal gets shot down',
            'Paperwork delays at work - approvals taking forever',
            'Feeling mentally blocked about career path',
            'Interview goes poorly - you freeze up or say wrong thing',
            'Critical email from supervisor or HR',
            'Contract negotiation stalls or falls through',
            'Difficulty articulating your value at work',
            'Imposter syndrome - feeling like fraud professionally',
            'Professional certification exam feels impossible',
            'Communication breakdown with boss or authority figure'
          );
        } else {
          manifestations.push(
            'Serious career discussion leads to promotion or raise',
            'Contract negotiation succeeds through patient persistence',
            'Strategic planning session advances your career goals',
            'Mature, professional communication impresses superiors',
            'Building solid reputation for reliable work',
            'Presentation on serious topic goes well - you know your stuff',
            'Boss appreciates your thorough, detail-oriented approach',
            'Professional certification earned through disciplined study',
            'Important career document completed - resume, portfolio',
            'Mentor gives you serious advice that helps career',
            'Long-term career plan comes together',
            'Successfully handling difficult professional conversation'
          );
        }
      }
      // General fallback for all other houses
      if (manifestations.length === 0) {
        if (isHard) {
          manifestations.push(
            'Important conversation feels heavy or difficult - words don\'t come easily',
            'Mind feels blocked or pessimistic - negative thought patterns dominate',
            'Document, contract, or paperwork has delays, errors, or complications',
            'Communication with authority figure is strained or critical',
            'Self-doubt about intelligence or mental abilities surfaces',
            'Technology problems interfere with important message or work',
            'Learning new information feels slow, frustrating, or overwhelming',
            'Someone criticizes your ideas, writing, or way of thinking',
            'Travel plans face obstacles - delays, cancellations, or difficulties',
            'Phone call or email brings serious news requiring responsibility',
            'Mental fog or difficulty concentrating on important tasks',
            'Conversation reveals hard truth or uncomfortable reality'
          );
        } else {
          manifestations.push(
            'Important conversation about serious matter goes well with maturity',
            'Successfully completing complex document, contract, or official paperwork',
            'Disciplined study or learning leads to real mastery',
            'Building reputation for reliable, professional communication',
            'Strategic planning session produces concrete, practical results',
            'Mentor or authority figure gives valuable guidance or wisdom',
            'Mind is clear and focused on what truly matters',
            'Making realistic long-term plan and committing to follow through',
            'Serious conversation strengthens relationship through honesty',
            'Research or detailed work yields solid, lasting results',
            'Taking responsibility for communication with grace and maturity',
            'Learning complex subject through patient, disciplined effort'
          );
        }
      }
    }

    // Mercury-Venus: Pleasant communication, artistic ideas, relationship talks
    if (pairKey === 'Mercury-Venus' || reversePairKey === 'Mercury-Venus') {
      if (isConjunction) {
        manifestations.push(
          'Perfect expression of love or appreciation - words touch hearts',
          'Writing or speaking engagement about beauty or relationships',
          'Major contract or agreement signed harmoniously',
          'Artistic breakthrough - creative ideas flow beautifully',
          'Relationship conversation that deepens connection significantly',
          'Compliment or message that validates your worth',
          'Negotiation that results in win-win outcome',
          'Learning about art or beauty transforms your perspective',
          'Shopping or purchase that perfectly expresses your values',
          'Social event where you connect meaningfully with others',
          'Sibling or neighbor becomes ally or friend',
          'Poetry, music, or art creation that expresses your heart'
        );
      } else if (isHard) {
        manifestations.push(
          'Miscommunication in relationship causing hurt feelings',
          'Difficulty expressing love or appreciation',
          'Contract or agreement involves unfair terms',
          'Creative block - can\'t express beauty or ideas',
          'Compliment feels insincere or backhanded',
          'Negotiation breaks down - can\'t find compromise',
          'Awkward conversation about money or values',
          'Sibling or neighbor says something tactless',
          'Shopping regret - purchase doesn\'t reflect your values',
          'Social plans fall through due to miscommunication',
          'Learning about relationships reveals painful truths',
          'Criticism about your writing, speaking, or creative work'
        );
      } else {
        manifestations.push(
          'Pleasant conversations - everyone gets along',
          'Love letter, romantic text, or sweet message',
          'Contract or agreement goes smoothly',
          'Artistic or creative writing flows easily',
          'Compliment or kind words boost your mood',
          'Negotiation succeeds - both sides happy',
          'Beautiful ideas or aesthetically pleasing thoughts',
          'Sibling or neighbor interaction is pleasant',
          'Shopping or purchasing decision feels right',
          'Communication in relationship improves',
          'Learning about art, beauty, or relationships',
          'Social plans made easily through good communication'
        );
      }
    }

    // Mercury-Mars: Quick thinking, arguments, assertive communication
    if (pairKey === 'Mercury-Mars' || reversePairKey === 'Mercury-Mars') {
      if (isHard) {
        manifestations.push(
          'Argument or heated debate - words as weapons',
          'Someone attacks your ideas or criticizes your thinking',
          'Road rage or transportation frustration',
          'Hasty email or text you regret sending',
          'Mental agitation - can\'t turn off racing thoughts',
          'Sibling conflict or neighborhood dispute',
          'Car accident or vehicle problem',
          'Impulsive decision made too quickly',
          'Sarcastic or cutting remarks hurt others',
          'Aggressive communication style backfires',
          'Technology frustration - device not working',
          'Feeling mentally attacked or defensive'
        );
      } else {
        manifestations.push(
          'Quick, decisive thinking solves problem',
          'Assertive communication gets results',
          'Debate or discussion you win through sharp wit',
          'Fast action on idea or plan',
          'Mental energy high - productive thinking',
          'Speaking up for yourself successfully',
          'Writing or communication project done quickly',
          'Taking action on travel or learning plans',
          'Productive argument that clears the air',
          'Athletic thinking - strategy wins game',
          'Fast decision-making serves you well',
          'Energized conversation motivates action'
        );
      }
    }

    // Mercury-Uranus: Sudden insights, unexpected news, breakthrough ideas
    if (pairKey === 'Mercury-Uranus' || reversePairKey === 'Mercury-Uranus') {
      // House 2: Money, values, resources
      if (transitHouse === 2) {
        if (isHard) {
          manifestations.push(
            'Unexpected bill arrives - phone, internet, tech repair catches you off guard',
            'Banking app glitches right when you need to pay something',
            'Sudden financial news disrupts your budget - price increase, subscription hike',
            'Technology purchase breaks immediately - phone, laptop, tablet needs repair',
            'Unconventional money idea backfires - crypto loss, risky investment fails',
            'Income source suddenly changes or disappears without warning',
            'Argument about money comes out of nowhere - shocking what partner reveals',
            'Online shopping impulse leads to buyer\'s remorse',
            'Financial app error causes payment to bounce',
            'Sudden realization you\'ve been spending way more than you thought',
            'Tech side hustle hits unexpected obstacle',
            'Brilliant money idea rejected by bank or partner as too risky'
          );
        } else {
          manifestations.push(
            'Sudden insight about how to increase income - breakthrough idea works',
            'Unexpected money arrives - refund, payment, freelance gig comes through',
            'Technology creates new income stream - selling digital product, app, online course',
            'Innovative approach to budgeting finally clicks',
            'Sudden opportunity to earn money using your unique skills',
            'Financial app or tool revolutionizes how you manage money',
            'Unusual investment pays off - crypto gain, tech stock win',
            'Brilliant idea for side business comes to you suddenly',
            'Online opportunity creates unexpected income',
            'Technology breakthrough reduces expenses - better deal, automation',
            'Sudden clarity about values - knowing what\'s truly worth spending on',
            'Electronic payment makes money management easier'
          );
        }
      }
      // House 7: Partnerships, relationships
      if (transitHouse === 7) {
        if (isHard) {
          manifestations.push(
            'Partner drops bombshell news you didn\'t see coming',
            'Unexpected text or message from partner changes everything',
            'Communication breakdown - partner says something shocking or hurtful',
            'Ex contacts you out of blue causing confusion',
            'Partner suddenly wants space or suggests break',
            'Argument erupts from nowhere over text or phone',
            'Partner reveals unconventional idea about relationship you\'re not ready for',
            'Online activity causes relationship tension - social media, dating app discovery',
            'Partner\'s erratic communication drives you crazy - ghosting then love-bombing',
            'Shocking revelation about partner - secret, lie, or hidden truth',
            'Technology causes fight - text misunderstood, email sent to wrong person',
            'Partner wants sudden change to relationship status or living situation'
          );
        } else {
          manifestations.push(
            'Unexpected message from partner brightens your day',
            'Sudden breakthrough in communication - finally understanding each other',
            'Partner surprises you with innovative date or unusual gift',
            'Online connection leads to exciting new relationship',
            'Partner shares brilliant idea that excites you both',
            'Technology brings you closer - app, video call, shared playlist',
            'Spontaneous conversation with partner creates new level of intimacy',
            'Unusual person enters your life and sparks interest',
            'Partner\'s independence and uniqueness suddenly attractive',
            'Breakthrough in relationship - new way of relating emerges',
            'Electronic communication keeps relationship fresh and exciting',
            'Meeting someone online or through technology who gets you'
          );
        }
      }
      // House 10: Career, public image
      if (transitHouse === 10) {
        if (isHard) {
          manifestations.push(
            'Unexpected news at work - restructuring, layoff, sudden change',
            'Boss sends shocking email that changes your role',
            'Technology malfunction during important presentation or meeting',
            'Sudden change in career direction feels destabilizing',
            'Public miscommunication damages professional reputation',
            'Social media post backfires professionally',
            'Innovative idea rejected by conservative boss or industry',
            'Work communication system crashes at worst time',
            'Unexpected criticism of your work style - too unconventional',
            'Career plans disrupted by sudden industry change or tech shift',
            'Online presence causes professional drama',
            'Brilliant career idea dismissed as too radical or risky'
          );
        } else {
          manifestations.push(
            'Sudden career breakthrough - unexpected job offer, promotion news',
            'Innovative idea gets recognition from boss or industry',
            'Technology skills open new professional doors',
            'Unexpected LinkedIn message leads to opportunity',
            'Public speaking or presentation goes brilliantly due to fresh approach',
            'Social media boosts professional reputation - viral post, new followers',
            'Unconventional career path suddenly makes sense and works',
            'Technology breakthrough makes you more efficient at work',
            'Online networking creates valuable professional connection',
            'Sudden insight about career direction - knowing what you really want',
            'Electronic communication brings exciting work opportunity',
            'Being recognized professionally for innovative thinking'
          );
        }
      }
      // House 4: Home, family, emotional foundation
      if (transitHouse === 4) {
        if (isHard) {
          manifestations.push(
            'Unexpected news from family member disrupts peace',
            'Home technology breaks - wifi, appliances, heating/cooling system',
            'Sudden change in living situation - roommate leaves, lease issues',
            'Family member says something shocking or reveals secret',
            'Home repair needed urgently and unexpectedly',
            'Argument with family over text escalates quickly',
            'Real estate plans change suddenly - deal falls through, unexpected issue',
            'Family communication breakdown - misunderstanding causes rift',
            'Unexpected visitor disrupts home routine',
            'Parent or family member makes erratic decision affecting you',
            'Home security system or smart home device malfunctions',
            'Sudden realization about family pattern you need to break'
          );
        } else {
          manifestations.push(
            'Sudden insight heals old family wound',
            'Home technology upgrade improves daily life - smart home, new system',
            'Unexpected good news from family member',
            'Innovative home improvement idea works perfectly',
            'Sudden move or living change works out better than expected',
            'Family member surprises you with progressive attitude or support',
            'Technology keeps you connected to distant family',
            'Breakthrough in family communication - new understanding',
            'Unusual living situation becomes perfect for you',
            'Home office setup revolutionizes work-life balance',
            'Electronic upgrade makes home more comfortable',
            'Sudden clarity about what home and family mean to you'
          );
        }
      }
      // General fallback for all other houses
      if (manifestations.length === 0) {
        if (isConjunction) {
          manifestations.push(
            'Major breakthrough idea that changes everything',
            'Unexpected news that revolutionizes your thinking',
            'Technology innovation or discovery',
            'Radical change in plans that opens new possibilities',
            'Meeting brilliant person who transforms your perspective',
            'Learning something that awakens you to new reality',
            'Innovative solution that solves major problem',
            'Electronic breakthrough or major tech upgrade',
            'Spontaneous decision that leads to freedom',
            'Breakthrough in communication - finally understood',
            'Original idea recognized as genius',
            'Online connection leads to significant opportunity'
          );
        } else if (isHard) {
          manifestations.push(
            'Disruptive news that throws off your plans',
            'Technology malfunction or electronic breakdown',
            'Sudden change of plans causes stress',
            'Shocking information that\'s hard to process',
            'Erratic thinking or mental restlessness',
            'Sibling or neighbor acts unpredictably',
            'Travel disruption - cancelled or changed last minute',
            'Meeting someone whose ideas are too radical or chaotic',
            'Electronic device breaks or acts up',
            'Communication breakdown due to unexpected event',
            'Brilliant idea that others reject as too crazy',
            'Online drama or social media conflict'
          );
        } else {
          manifestations.push(
            'Sudden insight or brilliant idea flows naturally',
            'Unexpected good news arrives - text, call, email',
            'Technology brings easy breakthrough',
            'Change of plans works out well',
            'Unusual conversation changes perspective positively',
            'Learning something that expands your worldview',
            'Innovative solution to old problem emerges',
            'Meeting unique person enriches your thinking',
            'Electronic device upgrade goes smoothly',
            'Spontaneous short trip is refreshing',
            'Breakthrough in communication happens easily',
            'Original idea gets positive recognition'
          );
        }
      }
    }

    // Mercury-Neptune: Creative ideas, confusion, spiritual thoughts
    if (pairKey === 'Mercury-Neptune' || reversePairKey === 'Mercury-Neptune') {
      // House 2: Money, values, resources
      if (transitHouse === 2) {
        if (isHard) {
          manifestations.push(
            'Financial confusion - not sure where money is going or what you spent',
            'Being deceived about price or value of purchase',
            'Vague money promises from others that never materialize',
            'Forgetting to pay bill or losing track of payment deadline',
            'Financial paperwork confusing - contract unclear, terms murky',
            'Idealizing purchase then disappointed by reality',
            'Money seems to slip away without explanation',
            'Someone lies about finances - partner, salesperson, advisor',
            'Budget gets fuzzy - can\'t track spending clearly',
            'Unclear about values - not sure what\'s worth the money',
            'Financial scam or too-good-to-be-true offer tempts you',
            'Daydreaming about wealth instead of practical money management'
          );
        } else {
          manifestations.push(
            'Intuitive sense guides wise financial decision',
            'Creative visualization manifests money opportunity',
            'Compassionate approach to finances brings peace',
            'Artistic or spiritual work creates income',
            'Dream or meditation provides financial insight',
            'Money flows in mysteriously perfect ways',
            'Spiritual practice shifts relationship with money',
            'Creative budgeting approach works beautifully',
            'Letting go of material attachment brings financial ease',
            'Music, art, or healing work generates income',
            'Trusting intuition about purchase works out perfectly',
            'Financial forgiveness - releasing debt or resentment about money'
          );
        }
      }
      // House 7: Partnerships, relationships
      if (transitHouse === 7) {
        if (isHard) {
          manifestations.push(
            'Partner\'s words don\'t match actions - confusion about what they really mean',
            'Miscommunication in relationship - saying one thing, hearing another',
            'Partner lies or withholds truth - deception through omission',
            'Idealizing partner - seeing who you want them to be, not who they are',
            'Vague relationship status - undefined, unclear where you stand',
            'Partner makes promises they don\'t keep',
            'Feeling confused about partner\'s feelings or intentions',
            'Communication is murky - important things left unsaid',
            'Partner plays victim and you can\'t see clearly',
            'Secret or hidden aspect of relationship creates confusion',
            'Partner\'s addiction or escapism affecting relationship',
            'Sacrificing clarity for romantic fantasy'
          );
        } else {
          manifestations.push(
            'Spiritual connection with partner deepens through conversation',
            'Compassionate communication heals relationship wound',
            'Partner inspires artistic or creative expression',
            'Intuitive understanding of partner without words',
            'Forgiveness conversation brings peace to relationship',
            'Music, poetry, or art creates romantic moment',
            'Partner\'s empathy and sensitivity touching',
            'Dream or meditation provides relationship insight',
            'Spiritual practice together deepens bond',
            'Unconditional acceptance in communication',
            'Partner understands your unspoken feelings',
            'Creative or artistic collaboration brings you closer'
          );
        }
      }
      // House 10: Career, public image
      if (transitHouse === 10) {
        if (isHard) {
          manifestations.push(
            'Professional miscommunication causes confusion or setback',
            'Boss or client gives vague feedback - unclear what they want',
            'Work project lacks clear direction or goals',
            'Professional promise dissolves - job offer, promotion falls through',
            'Public image suffers from misunderstanding or gossip',
            'Career path feels unclear - lost about direction',
            'Someone at work lies or deceives about project or role',
            'Important work document lost or unclear',
            'Professional boundary violation - unclear expectations',
            'Daydreaming about ideal career instead of taking action',
            'Work communication creates confusion rather than clarity',
            'Professional reputation suffers from false information'
          );
        } else {
          manifestations.push(
            'Creative or artistic work gains professional recognition',
            'Spiritual or healing profession flourishes',
            'Intuition guides wise career decision',
            'Compassionate leadership style inspires others',
            'Public speaking flows with poetic grace',
            'Professional reputation benefits from empathy and kindness',
            'Artistic vision recognized in career',
            'Music, writing, or creative work becomes profession',
            'Dream or meditation provides career insight',
            'Spiritual practice enhances professional life',
            'Public image reflects sensitivity and creativity',
            'Career in helping, healing, or artistic fields takes off'
          );
        }
      }
      // House 4: Home, family, emotional foundation
      if (transitHouse === 4) {
        if (isHard) {
          manifestations.push(
            'Family communication murky - what\'s said vs what\'s meant unclear',
            'Parent or family member withholds truth or deceives',
            'Confused about family situation - what\'s really happening',
            'Home situation feels unstable or unclear',
            'Family member makes vague promises that don\'t materialize',
            'Idealizing family past - nostalgia clouds reality',
            'Real estate confusion - unclear contract, hidden issues',
            'Forgetting important family commitment or event',
            'Emotional manipulation through guilt or victim mentality',
            'Home repair issue hard to diagnose - problem unclear',
            'Family boundary violations - unclear expectations',
            'Escapism at home - avoiding reality through fantasy'
          );
        } else {
          manifestations.push(
            'Healing family conversation brings forgiveness',
            'Intuitive understanding of family dynamics',
            'Home becomes spiritual sanctuary',
            'Compassionate communication heals old family wound',
            'Dream or meditation provides insight about family',
            'Music or art at home creates emotional peace',
            'Spiritual practice at home grounds emotions',
            'Family member shows unexpected empathy',
            'Creating artistic or beautiful home environment',
            'Emotional boundaries dissolve in healthy way',
            'Home filled with creativity and imagination',
            'Family connection deepens through shared spirituality'
          );
        }
      }
      // General fallback for all other houses
      if (manifestations.length === 0) {
        if (isHard) {
          manifestations.push(
            'Mental fog or confusion - can\'t think clearly',
            'Miscommunication or misunderstanding',
            'Someone lies or deceives you through words',
            'Forgetting important information or appointment',
            'Travel plans fall through or get confused',
            'Contract has hidden clauses or unclear terms',
            'Getting lost physically or mentally',
            'Sibling or neighbor situation unclear',
            'Technology issue that\'s hard to diagnose',
            'Saying one thing but meaning another',
            'Daydreaming interferes with productivity',
            'Losing important document or information'
          );
        } else {
          manifestations.push(
            'Poetic or artistic writing flows beautifully',
            'Spiritual or mystical insight through reading/learning',
            'Intuitive understanding beyond logic',
            'Creative visualization or imagination strong',
            'Compassionate communication heals relationship',
            'Music or art inspires new ideas',
            'Meditation or contemplation brings clarity',
            'Dream provides answer to question',
            'Artistic or spiritual education opportunity',
            'Writing fiction, poetry, or creative work',
            'Understanding symbolism or metaphor',
            'Psychic or intuitive communication'
          );
        }
      }
    }

    // Mercury-Pluto: Deep research, intense conversations, mental transformation
    if (pairKey === 'Mercury-Pluto' || reversePairKey === 'Mercury-Pluto') {
      if (isHard) {
        manifestations.push(
          'Obsessive thoughts won\'t leave your mind',
          'Someone tries to manipulate you through words',
          'Discovering dark or disturbing information',
          'Intense argument that goes too deep',
          'Paranoid thinking or conspiracy theories',
          'Secret revealed through communication',
          'Psychological manipulation in conversation',
          'Contract or agreement has hidden control issues',
          'Mental power struggle - battle of wits',
          'Compulsive need to know or understand everything',
          'Words used as weapons - verbal abuse',
          'Technology or communication used for control'
        );
      } else {
        manifestations.push(
          'Deep research uncovers important truth',
          'Transformative conversation changes everything',
          'Psychological insight through study or therapy',
          'Penetrating understanding of complex topic',
          'Powerful words - speaking truth to power',
          'Investigative work reveals hidden information',
          'Eliminating mental blocks or negative thought patterns',
          'Contract or agreement transforms situation',
          'Communication heals deep wound',
          'Understanding power dynamics clearly',
          'Profound learning experience',
          'Mental transformation through study or conversation'
        );
      }
    }
  }

  // MARS aspects - Action, drive, conflict, passion
  if (natalPlanet === 'Mars' || transitPlanet === 'Mars') {

    // Mars-Pluto: Power, intense drive, potential for conflict or breakthrough
    if (pairKey === 'Mars-Pluto' || reversePairKey === 'Mars-Pluto') {
      if (isHard) {
        manifestations.push(
          'Power struggle at work - battle of wills with boss or coworker',
          'Intense anger building up - feeling like you might explode',
          'Someone trying to control or manipulate you - fighting back',
          'Compulsive behavior surfaces - can\'t stop doing something destructive',
          'Confrontation escalates quickly - argument becomes serious',
          'Feeling powerless in situation - rage at lack of control',
          'Obsessive drive to win or dominate in competition',
          'Sexual tension or power dynamics in relationship creating problems',
          'Desire for revenge against someone who wronged you',
          'Passive-aggressive behavior - yours or someone else\'s',
          'Physical danger - be careful with tools, driving, anger',
          'Someone threatens you or tries to intimidate you',
          'Toxic pattern repeating - can\'t seem to break cycle'
        );
      } else {
        manifestations.push(
          'Tremendous energy to transform your life - nothing can stop you',
          'Breakthrough courage to finally tackle what you\'ve avoided',
          'Completely eliminating bad habit - quitting cold turkey and succeeding',
          'Power to make major life change - moving, career shift, ending relationship',
          'Intense sexual energy and attraction',
          'Successfully standing up to bully or controlling person',
          'Psychological breakthrough - understanding compulsion and releasing it',
          'Physical transformation - intense workout program showing results',
          'Taking control of situation that\'s been controlling you',
          'Removing toxic person or situation from life permanently',
          'Channeling intense energy into productive project',
          'Major accomplishment through sheer willpower',
          'Therapy breakthrough - releasing anger constructively'
        );
      }
      if (transitHouse === 10) {
        if (isHard) {
          manifestations.push(
            'Major power play at work - fighting for control',
            'Boss trying to force you out or undermine you',
            'You versus authority figure - escalating conflict',
            'Feeling manipulated by workplace politics',
            'Career crisis that feels like life or death',
            'Forced career transformation - layoff, demotion, restructure'
          );
        } else {
          manifestations.push(
            'Taking control of career through decisive action',
            'Transforming professional reputation - complete reinvention',
            'Power move at work succeeds - promotion, takeover, leadership',
            'Eliminating career obstacle permanently',
            'Career breakthrough through intense focused effort',
            'Successfully fighting for position or recognition you deserve'
          );
        }
      }
    }

    // Mars-Saturn: Frustrated action or disciplined effort
    if (pairKey === 'Mars-Saturn' || reversePairKey === 'Mars-Saturn') {
      if (transitHouse === 10) {
        if (isHard) {
          manifestations.push(
            'Career progress completely blocked - hitting wall repeatedly',
            'Boss blocks your initiatives or shoots down ideas',
            'Working harder than ever but getting nowhere',
            'Actions at work don\'t produce desired results - frustrating',
            'Need to work twice as hard for half the results',
            'Anger at authority figures who won\'t let you advance',
            'Project delayed repeatedly due to obstacles',
            'Feeling like giving up on career goals',
            'Physical exhaustion from overwork with no payoff',
            'Denied promotion despite deserving it',
            'Authority figure actively working against you',
            'Career feels like uphill battle with no end in sight'
          );
        } else {
          manifestations.push(
            'Disciplined effort at work finally pays off',
            'Building something lasting through persistent action',
            'Taking on challenging project that requires stamina - succeeding',
            'Proving yourself through hard work and consistency',
            'Boss respects your discipline and reliability',
            'Slow but steady career progress - foundation building',
            'Successfully completing difficult long-term project',
            'Promotion earned through demonstrated competence',
            'Mature handling of workplace challenges impresses superiors',
            'Building professional reputation through reliability',
            'Taking on responsibility and handling it well',
            'Career success through patience and persistence'
          );
        }
      }
      if (transitHouse === 6) {
        if (isHard) {
          manifestations.push(
            'Physical energy depleted - chronic fatigue',
            'Difficulty getting motivated for exercise - no drive',
            'Work feels physically exhausting - drained every day',
            'Injury from pushing too hard or not warming up',
            'Joint pain, muscle strain, or physical limitation',
            'Workout routine feels like punishment not pleasure',
            'Getting sick due to running yourself down',
            'Frustration with slow fitness progress',
            'Daily tasks feel overwhelming - no energy',
            'Back problems from poor posture or overwork',
            'Need to force yourself to do everything',
            'Physical burnout from ignoring body\'s needs'
          );
        } else {
          manifestations.push(
            'Building physical endurance through consistent training',
            'Establishing workout routine that becomes habit',
            'Taking health seriously - seeing real results',
            'Disciplined approach to fitness pays off',
            'Successfully managing chronic health condition',
            'Daily tasks organized efficiently - sustainable pace',
            'Physical strength building steadily',
            'Mature attitude toward health and self-care',
            'Fitness goal achieved through persistence',
            'Creating healthy daily routine that sticks',
            'Discipline with diet and exercise showing results',
            'Work-life balance achieved through boundaries'
          );
        }
      }
    }

    // Mars-Jupiter: Successful action, confidence, taking risks
    if (pairKey === 'Mars-Jupiter' || reversePairKey === 'Mars-Jupiter') {
      if (transitHouse === 10) {
        manifestations.push(
          'Bold career move succeeds beyond expectations',
          'Taking initiative at work gets noticed and rewarded',
          'Starting new business or project with confidence',
          'Asserting yourself at work leads to opportunity',
          'Interview goes great - you\'re confident and impressive',
          'Risk-taking at work pays off - promotion, recognition',
          'Boss appreciates your enthusiasm and drive',
          'Successful presentation - you nail it with confidence',
          'Career opportunity through being in right place at right time',
          'Physical energy and optimism shine through at work',
          'Taking on bigger challenge and succeeding',
          'Entrepreneurial venture launches successfully',
          'Professional risk leads to major reward'
        );
      }
      if (transitHouse === 9) {
        manifestations.push(
          'Booking adventure travel - hiking, climbing, active trip',
          'Taking action on educational goals - enrolling, applying',
          'Athletic activity in new location - skiing, surfing, etc.',
          'Road trip or spontaneous travel goes perfectly',
          'Physical challenge abroad - marathon, trek, adventure race',
          'Taking chance on opportunity and it pays off',
          'Confidence to travel solo to new place',
          'Teaching or coaching opportunity comes your way',
          'Successfully applying to program or course',
          'Travel and physical activity combined - best trip ever',
          'Lucky break through taking action on opportunity',
          'International business venture launches',
          'Athletic competition or race goes well'
        );
      }
      if (!transitHouse || (transitHouse !== 10 && transitHouse !== 9)) {
        manifestations.push(
          'High energy and enthusiasm for life',
          'Taking calculated risks that pay off',
          'Confidence in your abilities at peak',
          'Physical vitality strong - feeling great',
          'Success through decisive action',
          'Everything you touch seems to work out',
          'Optimism and courage to go after what you want',
          'Physical activity brings joy and success',
          'Taking initiative in any area brings rewards',
          'Luck favors your bold moves',
          'Feeling unstoppable and motivated',
          'Athletic performance improves',
          'Winning competition or achieving physical goal'
        );
      }
    }

    // Mars-Uranus: Sudden action, breakthroughs, accidents, rebellion
    if (pairKey === 'Mars-Uranus' || reversePairKey === 'Mars-Uranus') {
      if (isHard) {
        manifestations.push(
          'Sudden accident or injury from carelessness',
          'Impulsive action you immediately regret',
          'Technology malfunction causes frustration',
          'Rebellion against authority backfires',
          'Erratic behavior alienates others',
          'Equipment failure or breakdown',
          'Sudden anger explodes unexpectedly',
          'Change forced upon you - no choice',
          'Restless energy can\'t be channeled productively',
          'Breaking things accidentally through haste',
          'Disruptive behavior causes problems',
          'Liberation attempt goes wrong'
        );
      } else {
        manifestations.push(
          'Breakthrough action solves longstanding problem',
          'Sudden opportunity to make bold move',
          'Innovation in approach brings success',
          'Liberation from restricting situation',
          'Taking unconventional action that works',
          'Technology enables new possibilities',
          'Spontaneous decision leads to freedom',
          'Breaking free from limitation',
          'Original approach gets recognition',
          'Sudden energy surge brings accomplishment',
          'Revolutionary action changes everything',
          'Independence achieved through decisive action'
        );
      }
    }

    // Mars-Neptune: Confused action, spiritual motivation, energy drain
    if (pairKey === 'Mars-Neptune' || reversePairKey === 'Mars-Neptune') {
      if (isHard) {
        manifestations.push(
          'Energy drained for mysterious reasons',
          'Actions sabotaged or undermined',
          'Deception regarding plans or projects',
          'Lack of motivation or direction',
          'Passive-aggressive behavior - yours or others',
          'Physical illness saps energy',
          'Goals become unclear or keep changing',
          'Victim mentality prevents action',
          'Escapist behavior instead of taking action',
          'Working toward illusion not reality',
          'Physical boundaries violated',
          'Misdirected anger or effort'
        );
      } else {
        manifestations.push(
          'Spiritual motivation inspires action',
          'Artistic or creative energy flows',
          'Compassionate action helps others',
          'Yoga, dance, or flow state activities',
          'Intuitive action proves correct',
          'Working for spiritual or artistic cause',
          'Gentle assertion effective',
          'Creative visualization manifests goal',
          'Healing action - Reiki, energy work',
          'Surrendering control brings better outcome',
          'Following intuition in action',
          'Art, music, or spirituality energizes you'
        );
      }
    }
  }

  // JUPITER aspects - Expansion, growth, opportunity, beliefs
  if (natalPlanet === 'Jupiter' || transitPlanet === 'Jupiter') {

    // Jupiter-Saturn: Balancing growth and responsibility
    if (pairKey === 'Jupiter-Saturn' || reversePairKey === 'Jupiter-Saturn') {
      // House 2: Money, values, resources
      if (transitHouse === 2) {
        if (isHard) {
          manifestations.push(
            'Wanting to expand income but limited by debt or past spending',
            'Financial opportunity comes with heavy responsibilities or obligations',
            'Budget constraints block growth plans - can\'t afford expansion',
            'Optimistic about money but reality check brings you down',
            'Investment opportunity requires more patience than expected',
            'Fear of financial risk prevents seizing opportunity',
            'Expansion plans cost more than anticipated - budget exceeded',
            'Debt from past limits current financial growth',
            'Wanting more money but stuck in current income level',
            'Financial commitment feels like burden not opportunity',
            'Growth mindset meets harsh financial reality',
            'Learning expensive lesson about sustainable spending vs quick gains'
          );
        } else {
          manifestations.push(
            'Finding perfect balance between spending and saving',
            'Long-term financial investment pays off now',
            'Structured approach to money growth creates abundance',
            'Wise financial decision through patience and planning',
            'Income increase through disciplined, steady effort',
            'Building wealth that lasts - sustainable financial growth',
            'Financial mentor provides guidance that expands resources',
            'Budget discipline creates room for growth opportunity',
            'Realistic optimism about finances - hopeful but grounded',
            'Maturity and abundance working together',
            'Financial goal achieved through persistent saving',
            'Opportunity comes with solid structure ensuring success'
          );
        }
      }
      // House 7: Partnerships, relationships
      if (transitHouse === 7) {
        if (isHard) {
          manifestations.push(
            'Relationship opportunity comes with heavy responsibilities',
            'Partner\'s obligations limit relationship growth',
            'Wanting more from relationship but partner holds back',
            'Commitment feels like burden instead of opportunity',
            'Age difference or maturity gap creates tension',
            'Optimistic about relationship but reality disappoints',
            'Partner\'s practical concerns block romantic growth',
            'Feeling caught between relationship freedom and duty',
            'Partner takes relationship too seriously - kills the joy',
            'Growth in relationship requires more patience than expected',
            'Philosophical differences about relationship goals',
            'Partner\'s limitations prevent relationship expansion'
          );
        } else {
          manifestations.push(
            'Relationship deepens through mature commitment',
            'Partner provides stability that allows growth',
            'Finding perfect balance between independence and togetherness',
            'Wise relationship decision through patience',
            'Commitment that feels expansive not limiting',
            'Building partnership that will last - sustainable love',
            'Partner\'s maturity supports your growth',
            'Realistic optimism about relationship future',
            'Structured approach to partnership creates success',
            'Long-term relationship goal achieved through persistence',
            'Mentor or counselor helps relationship expand',
            'Marriage or commitment brings opportunity and stability'
          );
        }
      }
      // House 10: Career, public image
      if (transitHouse === 10) {
        if (isHard) {
          manifestations.push(
            'Career growth opportunity comes with heavy workload',
            'Promotion increases stress and responsibility more than expected',
            'Professional expansion blocked by company limitations',
            'Boss supports growth but adds overwhelming obligations',
            'Career optimism meets harsh industry reality',
            'Wanting bigger role but not ready for responsibilities',
            'Professional opportunity requires more time than you have',
            'Authority figure limits your career expansion',
            'Growth plans delayed by regulations or bureaucracy',
            'Success requires more patience and discipline than expected',
            'Overcommitment at work leading to burnout',
            'Career expansion blocked by lack of experience or credentials'
          );
        } else {
          manifestations.push(
            'Promotion with perfect balance of growth and support',
            'Career expansion succeeds through structured approach',
            'Boss or mentor provides wisdom accelerating career growth',
            'Long-term career investment pays off now',
            'Professional opportunity comes with solid foundation',
            'Building career that will last - sustainable success',
            'Authority figure champions your professional expansion',
            'Realistic career optimism creates grounded achievement',
            'Disciplined approach to opportunity brings recognition',
            'Professional goal achieved through persistent effort',
            'Maturity and confidence recognized at work',
            'Certification or credential opens sustainable career door'
          );
        }
      }
      // House 4: Home, family, emotional foundation
      if (transitHouse === 4) {
        if (isHard) {
          manifestations.push(
            'Home expansion plan meets budget constraints',
            'Family obligations limit personal growth',
            'Wanting to improve home but financial reality prevents it',
            'Family responsibilities feel like burden not opportunity',
            'Optimistic about family situation but reality disappoints',
            'Real estate opportunity comes with heavy responsibilities',
            'Parent or family member\'s limitations affect you',
            'Home project costs more or takes longer than expected',
            'Emotional growth blocked by family expectations',
            'Feeling caught between family duty and personal freedom',
            'Renovation or move delayed by practical concerns',
            'Family expansion (child, relative moving in) creates stress'
          );
        } else {
          manifestations.push(
            'Home expansion succeeds through careful planning',
            'Family structure provides foundation for growth',
            'Real estate investment pays off through patience',
            'Building home that will last - sustainable comfort',
            'Family obligations and personal growth balanced perfectly',
            'Parent or mentor provides wisdom for emotional growth',
            'Home improvement creates lasting value',
            'Realistic optimism about family future',
            'Disciplined approach to home finances creates success',
            'Emotional maturity and family joy working together',
            'Long-term family goal achieved through persistence',
            'Moving or renovating brings stability and expansion'
          );
        }
      }
      // General fallback for all other houses
      if (manifestations.length === 0) {
        if (isHard) {
          manifestations.push(
            'Optimism blocked by practical limitations or fear',
            'Growth opportunity comes with heavy responsibilities',
            'Expansion plans meet budget constraints or regulations',
            'Wanting to grow but feeling held back by obligations',
            'Legal or educational matter delayed by bureaucracy',
            'Success requires more patience and discipline than expected',
            'Feeling caught between taking risk and playing it safe',
            'Mentor or authority figure limits your expansion',
            'Philosophical conflict between freedom and duty',
            'Overcommitment leading to burnout - too much too fast',
            'Financial expansion blocked by debt or past mistakes',
            'Learning hard lesson about sustainable growth vs quick gains'
          );
        } else {
          manifestations.push(
            'Finding perfect balance between growth and stability',
            'Expansion plan succeeds through careful, structured approach',
            'Mentor provides wisdom that accelerates growth sustainably',
            'Long-term investment or education paying off now',
            'Opportunity comes with structure that ensures success',
            'Wisdom gained through patience and experience',
            'Building something that will last - sustainable growth',
            'Authority figure supports your expansion plans',
            'Realistic optimism - hopeful but grounded expectations',
            'Disciplined approach to opportunity creates solid results',
            'Legal or educational achievement through persistent effort',
            'Maturity and confidence working together harmoniously'
          );
        }
      }
    }

    // Jupiter-Uranus: Sudden expansion, breakthrough opportunities
    if (pairKey === 'Jupiter-Uranus' || reversePairKey === 'Jupiter-Uranus') {
      // House 2: Money, values, resources
      if (transitHouse === 2) {
        if (isHard) {
          manifestations.push(
            'Sudden financial windfall followed by unexpected expenses',
            'Impulsive investment or purchase backfires',
            'Unconventional money opportunity feels too risky',
            'Crypto or tech investment crashes unexpectedly',
            'Sudden income increase comes with chaos or instability',
            'Unexpected expense disrupts financial growth plan',
            'Radical change in values creates financial confusion',
            'Technology malfunction costs money unexpectedly',
            'Freedom from debt comes at unexpected cost',
            'Sudden opportunity to make money requires leaving comfort zone',
            'Experimental income source proves unstable',
            'Liberation from job creates financial uncertainty'
          );
        } else {
          manifestations.push(
            'Sudden unexpected money arrives - refund, bonus, windfall',
            'Breakthrough idea creates new income stream',
            'Technology opens innovative way to make money',
            'Unconventional investment pays off brilliantly',
            'Sudden raise, bonus, or financial opportunity',
            'Crypto or tech investment succeeds beyond expectations',
            'Innovative approach to finances brings abundance',
            'Unusual income source proves profitable',
            'Financial breakthrough through thinking outside the box',
            'Sudden clarity about values revolutionizes spending',
            'Liberation from debt happens unexpectedly',
            'Electronic income - online business, app, digital product takes off'
          );
        }
      }
      // House 7: Partnerships, relationships
      if (transitHouse === 7) {
        if (isHard) {
          manifestations.push(
            'Sudden change in relationship disrupts growth',
            'Partner\'s unpredictable behavior creates chaos',
            'Whirlwind romance moves too fast - overwhelming',
            'Unexpected breakup or separation',
            'Partner\'s need for freedom conflicts with commitment',
            'Relationship opportunity feels too unstable or risky',
            'Meeting unusual person who\'s too unconventional',
            'Sudden revelation about partner changes everything',
            'Technology causes unexpected relationship problem',
            'Liberation from relationship feels destabilizing',
            'Partner makes impulsive decision affecting you both',
            'Experimental relationship arrangement backfires'
          );
        } else {
          manifestations.push(
            'Meeting unusual person who expands your horizons',
            'Sudden relationship breakthrough - unexpected connection',
            'Partner surprises you with growth opportunity',
            'Unconventional relationship works brilliantly',
            'Unexpected meeting leads to exciting partnership',
            'Technology brings perfect romantic opportunity',
            'Freedom and commitment balanced in relationship',
            'Partner\'s independence makes relationship more exciting',
            'Sudden insight improves partnership dramatically',
            'Online connection leads to real relationship',
            'Revolutionary approach to relationship succeeds',
            'Breaking relationship patterns creates healthy growth'
          );
        }
      }
      // House 10: Career, public image
      if (transitHouse === 10) {
        if (isHard) {
          manifestations.push(
            'Sudden career change feels chaotic or overwhelming',
            'Unexpected job offer feels too risky to accept',
            'Industry disruption creates professional uncertainty',
            'Innovative career idea meets resistance',
            'Sudden loss of job or professional opportunity',
            'Career expansion happens too fast - can\'t keep up',
            'Technology disrupts career path unexpectedly',
            'Revolutionary approach criticized by conservative industry',
            'Freedom from career structure creates financial stress',
            'Sudden opportunity requires leaving comfort zone abruptly',
            'Professional breakthrough comes with unexpected costs',
            'Impulsive career decision backfires publicly'
          );
        } else {
          manifestations.push(
            'Sudden career breakthrough - unexpected promotion or offer',
            'Revolutionary idea brings professional recognition',
            'Technology opens new career doors',
            'Unconventional career path succeeds brilliantly',
            'Sudden opportunity to work remotely or independently',
            'Industry innovation creates perfect timing for advancement',
            'Breaking free from corporate structure leads to success',
            'LinkedIn or online opportunity changes career trajectory',
            'Innovative approach to work gets noticed and rewarded',
            'Sudden insight about career direction opens doors',
            'Professional freedom and growth align perfectly',
            'Quantum leap in career - unexpected major advancement'
          );
        }
      }
      // House 4: Home, family, emotional foundation
      if (transitHouse === 4) {
        if (isHard) {
          manifestations.push(
            'Sudden move or living change feels chaotic',
            'Unexpected family news disrupts emotional foundation',
            'Home technology breaks causing stress',
            'Impulsive real estate decision backfires',
            'Family member\'s erratic behavior creates instability',
            'Sudden change in living situation - roommate, lease issue',
            'Unconventional living arrangement proves unstable',
            'Liberation from family obligation comes at emotional cost',
            'Home expansion happens too fast - overwhelming',
            'Unexpected home expense disrupts budget',
            'Innovative home idea meets family resistance',
            'Sudden emotional breakthrough feels destabilizing'
          );
        } else {
          manifestations.push(
            'Sudden opportunity to move to perfect home',
            'Unexpected family reunion or connection',
            'Home technology upgrade revolutionizes daily life',
            'Innovative home solution works brilliantly',
            'Sudden emotional breakthrough heals family wound',
            'Unconventional living situation proves perfect',
            'Smart home or tech improvement creates comfort',
            'Liberation from family pattern brings emotional freedom',
            'Sudden insight about family dynamics creates growth',
            'Unexpected real estate opportunity works out perfectly',
            'Breaking free from home limitation leads to expansion',
            'Family member surprises you with progressive attitude'
          );
        }
      }
      // General fallback for all other houses
      if (manifestations.length === 0) {
        if (isHard) {
          manifestations.push(
            'Unexpected change disrupts growth plans',
            'Sudden opportunity feels too risky or unstable',
            'Expansion happens too fast - overwhelming or chaotic',
            'Revolutionary idea meets resistance or criticism',
            'Freedom and growth come at unexpected cost',
            'Sudden loss of opportunity you were counting on',
            'Impulsive decision about growth backfires',
            'Technology or innovation creates unexpected problem',
            'Break from tradition causes conflict with others',
            'Opportunity requires leaving comfort zone abruptly',
            'Sudden windfall followed by unexpected expenses',
            'Liberation feels destabilizing rather than freeing'
          );
        } else {
          manifestations.push(
            'Sudden breakthrough opportunity appears out of nowhere',
            'Revolutionary idea brings expansion and success',
            'Unexpected good fortune - windfall, lucky break, perfect timing',
            'Technology opens new doors for growth',
            'Liberation from limiting situation creates rapid expansion',
            'Innovative approach to opportunity succeeds brilliantly',
            'Sudden insight changes perspective and opens possibilities',
            'Breaking free from tradition leads to exciting growth',
            'Travel opportunity appears suddenly and works out perfectly',
            'Meeting unusual person who expands your horizons',
            'Quantum leap in consciousness or understanding',
            'Freedom and growth align - expanding while staying authentic'
          );
        }
      }
    }

    // Jupiter-Neptune: Spiritual expansion, idealistic beliefs
    if (pairKey === 'Jupiter-Neptune' || reversePairKey === 'Jupiter-Neptune') {
      // General fallback for all houses
      if (manifestations.length === 0) {
        if (isHard) {
          manifestations.push(
            'Unrealistic expectations lead to disappointment',
            'Spiritual or philosophical confusion - too many paths',
            'Over-idealism makes it hard to see reality clearly',
            'Expansion based on illusion rather than fact',
            'Being deceived by someone promising too much',
            'Faith tested by reality - beliefs meet harsh truth',
            'Overextending yourself for cause that isn\'t what it seemed',
            'Opportunity dissolves when you try to grasp it',
            'Confusion about meaning, purpose, or direction',
            'Escapism through excess - overindulging to avoid reality',
            'Believing in potential instead of seeing actual situation',
            'Compassion taken advantage of - giving too much'
          );
        } else {
          manifestations.push(
            'Spiritual expansion through meditation, retreat, or practice',
            'Faith and optimism create miracles - divine timing',
            'Artistic or creative inspiration flows abundantly',
            'Compassionate action brings unexpected blessings',
            'Finding meaning and purpose through helping others',
            'Dream or vision provides guidance for growth',
            'Opportunity comes through intuition or synchronicity',
            'Spiritual teacher or guide appears at perfect time',
            'Creative visualization manifests abundance',
            'Forgiveness opens doors to growth and opportunity',
            'Faith in universe rewarded - things work out beautifully',
            'Expansion through art, music, spirituality, or healing'
          );
        }
      }
    }

    // Jupiter-Pluto: Profound transformation and growth
    if (pairKey === 'Jupiter-Pluto' || reversePairKey === 'Jupiter-Pluto') {
      // General fallback for all houses
      if (manifestations.length === 0) {
        if (isHard) {
          manifestations.push(
            'Power struggle over resources or opportunity',
            'Growth requires facing deep fears or shadow side',
            'Expansion through crisis - forced transformation',
            'Obsessive pursuit of success at expense of wellbeing',
            'Discovering dark truth about belief system or mentor',
            'Control issues blocking natural growth and expansion',
            'Intense pressure to succeed creating unhealthy stress',
            'Opportunity comes with strings attached - hidden costs',
            'Transformation feels overwhelming rather than empowering',
            'Having to let go of something to make room for growth',
            'Legal or financial matter reveals power dynamics',
            'Belief system shattered - everything you thought was true questioned'
          );
        } else {
          manifestations.push(
            'Profound transformation leading to massive growth',
            'Opportunity for deep healing and expansion together',
            'Power and success increase through psychological insight',
            'Releasing what no longer serves creates space for abundance',
            'Transformative travel or educational experience',
            'Deep truth revealed that empowers and liberates',
            'Success through facing fears and embracing change',
            'Financial empowerment through inheritance or settlement',
            'Discovering personal power through spiritual practice',
            'Opportunity to completely transform life direction',
            'Deep research or investigation leads to breakthrough',
            'Rising from ashes - complete regeneration and expansion'
          );
        }
      }
    }
  }

  // SATURN aspects - Discipline, responsibility, limitation, mastery
  if (natalPlanet === 'Saturn' || transitPlanet === 'Saturn') {

    // Saturn-Uranus: Tension between structure and freedom
    if (pairKey === 'Saturn-Uranus' || reversePairKey === 'Saturn-Uranus') {
      // House 2: Money, values, resources
      if (transitHouse === 2) {
        if (isHard) {
          manifestations.push(
            'Sudden expense disrupts carefully planned budget',
            'Financial structure collapses unexpectedly - income loss, investment crash',
            'Wanting financial freedom but afraid to leave security',
            'Conflict between conservative saving and risky investment',
            'Unexpected cost breaks budget - car, tech, home repair',
            'Traditional income source threatened by industry change',
            'Financial obligations prevent seizing opportunity',
            'Technology expense required but budget doesn\'t allow',
            'Breaking free from debt creates new financial stress',
            'Old financial plan no longer works but afraid to change',
            'Sudden change in values creates spending confusion',
            'Feeling caught between financial security and freedom'
          );
        } else {
          manifestations.push(
            'Successfully updating budget with innovative approach',
            'Finding financial freedom through disciplined saving',
            'Technology improves money management and saves money',
            'Innovative investment with solid structure pays off',
            'Breaking free from debt while maintaining stability',
            'New income stream provides both security and freedom',
            'Balancing conservative saving with smart risk-taking',
            'Financial discipline creates room for unusual opportunity',
            'Building wealth through both traditional and innovative means',
            'Technology automation improves finances sustainably',
            'Values evolve in healthy way - freedom and responsibility',
            'Unexpected windfall used wisely for long-term security'
          );
        }
      }
      // House 7: Partnerships, relationships
      if (transitHouse === 7) {
        if (isHard) {
          manifestations.push(
            'Partner suddenly wants freedom - threatens stability',
            'Feeling trapped in relationship wanting independence',
            'Unexpected change in partnership disrupts plans',
            'Conflict between commitment and personal freedom',
            'Partner\'s unpredictable behavior creates anxiety',
            'Traditional relationship structure no longer working',
            'Sudden breakup or separation after long commitment',
            'Partner resists necessary changes in relationship',
            'Technology causes relationship disruption',
            'Wanting stability but partner keeps changing',
            'Rebellion against relationship expectations backfires',
            'Feeling caught between staying and leaving'
          );
        } else {
          manifestations.push(
            'Successfully modernizing relationship while maintaining commitment',
            'Finding freedom within partnership - healthy independence',
            'Partner supports your need for both stability and growth',
            'Innovative approach to relationship creates lasting bond',
            'Breaking limiting relationship patterns while staying together',
            'Technology brings partners closer despite distance',
            'Balancing togetherness and independence perfectly',
            'Commitment evolves to include more freedom',
            'Building partnership on both tradition and innovation',
            'Unconventional relationship structure works long-term',
            'Partner\'s unique qualities strengthen commitment',
            'Relationship breakthrough combines security and excitement'
          );
        }
      }
      // House 10: Career, public image
      if (transitHouse === 10) {
        if (isHard) {
          manifestations.push(
            'Industry disruption threatens career security',
            'Sudden layoff or restructuring after years of stability',
            'Wanting career freedom but afraid to leave secure job',
            'Boss resists innovative ideas - stuck with old methods',
            'Technology change threatens traditional career path',
            'Feeling trapped in career wanting radical change',
            'Authority figure blocks necessary professional innovation',
            'Unexpected career change forced upon you',
            'Conservative industry rejects progressive approach',
            'Professional obligations prevent pursuing new opportunity',
            'Career structures collapsing - old way doesn\'t work',
            'Feeling caught between job security and career freedom'
          );
        } else {
          manifestations.push(
            'Successfully modernizing career with innovative approach',
            'Finding professional freedom within structure',
            'Technology advancement creates career opportunity',
            'Innovative idea implemented with boss\'s support',
            'Breaking free from limiting career while maintaining income',
            'Building new career on foundation of old experience',
            'Balancing traditional credentials with innovative methods',
            'Authority figure supports progressive career changes',
            'Remote work or flexible arrangement provides freedom and stability',
            'Professional breakthrough combines experience and innovation',
            'Industry change creates perfect opportunity for advancement',
            'Disciplined approach to career freedom creates success'
          );
        }
      }
      // House 4: Home, family, emotional foundation
      if (transitHouse === 4) {
        if (isHard) {
          manifestations.push(
            'Sudden change in living situation disrupts stability',
            'Family obligations prevent desired freedom',
            'Unexpected move forced by circumstances',
            'Home structure failing - repairs needed, foundation issues',
            'Feeling trapped at home wanting to move',
            'Family member\'s erratic behavior creates insecurity',
            'Technology problems at home cause stress',
            'Traditional family expectations clash with personal needs',
            'Renovation or move more disruptive than expected',
            'Parent or family resists necessary changes',
            'Breaking free from family creates emotional anxiety',
            'Feeling caught between family duty and personal freedom'
          );
        } else {
          manifestations.push(
            'Successfully updating home with modern improvements',
            'Finding emotional freedom within family structure',
            'Smart home technology improves daily life',
            'Innovative living arrangement provides stability and freedom',
            'Breaking limiting family patterns while maintaining connection',
            'Moving to perfect home that balances comfort and change',
            'Family accepts your need for independence',
            'Home office creates work freedom with home security',
            'Balancing family obligations and personal needs perfectly',
            'Unconventional living situation works long-term',
            'Emotional maturity and authenticity working together',
            'Family breakthrough combines tradition and progress'
          );
        }
      }
      // General fallback for all other houses
      if (manifestations.length === 0) {
        if (isHard) {
          manifestations.push(
            'Feeling trapped by responsibilities wanting freedom',
            'Sudden change disrupts careful plans and structures',
            'Conflict between traditional approach and innovative ideas',
            'Authority figure resists necessary change',
            'Breaking free creates anxiety about security',
            'Old structures collapsing faster than you can rebuild',
            'Revolutionary impulse blocked by fear or obligation',
            'Technology problems causing delays or frustration',
            'Wanting stability but circumstances keep changing',
            'Rebellion against authority creates consequences',
            'Career security threatened by industry changes',
            'Feeling caught between old way and new way - neither works'
          );
        } else {
          manifestations.push(
            'Successfully updating old structures with innovative approach',
            'Finding freedom within existing responsibilities',
            'Revolutionary idea implemented with practical structure',
            'Breaking free from limitation while maintaining stability',
            'Technology improves efficiency and creates more time',
            'Innovative solution to long-standing problem',
            'Balancing change and stability successfully',
            'Authority figure supports progressive changes',
            'Building something new on solid foundation',
            'Disciplined approach to freedom creates lasting independence',
            'Career advancement through embracing change strategically',
            'Bridging generation gap or reconciling opposites'
          );
        }
      }
    }

    // Saturn-Neptune: Dissolving structures, spiritual discipline
    if (pairKey === 'Saturn-Neptune' || reversePairKey === 'Saturn-Neptune') {
      // General fallback for all houses
      if (manifestations.length === 0) {
        if (isHard) {
          manifestations.push(
            'Plans dissolve despite careful preparation',
            'Feeling overwhelmed by responsibilities and unclear direction',
            'Reality doesn\'t match expectations - disappointment',
            'Structure crumbling - losing control of situation',
            'Confusion about responsibilities or commitments',
            'Being deceived by someone you trusted with responsibility',
            'Chronic fatigue or illness affecting ability to function',
            'Boundaries dissolving inappropriately - losing ground',
            'Fear and anxiety without clear cause or solution',
            'Practical matters complicated by unclear information',
            'Feeling like you\'re building on quicksand - no solid foundation',
            'Depression or hopelessness about long-term situation'
          );
        } else {
          manifestations.push(
            'Spiritual practice brings discipline and structure to life',
            'Compassion and responsibility working together beautifully',
            'Creative work manifests through patient, steady effort',
            'Boundaries become flexible in healthy, appropriate way',
            'Meditation or spiritual practice helps manage anxiety',
            'Making dreams real through disciplined action',
            'Artistic or healing career taking concrete form',
            'Letting go of rigid control allows better outcome',
            'Structure supports spiritual or creative growth',
            'Wisdom comes through surrendering need to control',
            'Practical application of spiritual or artistic principles',
            'Building career in healing, arts, or spiritual field'
          );
        }
      }
    }

    // Saturn-Pluto: Profound structural transformation
    if (pairKey === 'Saturn-Pluto' || reversePairKey === 'Saturn-Pluto') {
      // General fallback for all houses
      if (manifestations.length === 0) {
        if (isHard) {
          manifestations.push(
            'Complete breakdown of structures you relied on',
            'Power struggle with authority figure or institution',
            'Facing worst fears about security and survival',
            'Forced to let go of control and rebuild from scratch',
            'Career or life structure demolished - starting over required',
            'Intense pressure and responsibility feels crushing',
            'Discovering corruption or dark truth about system you trusted',
            'Control issues creating crisis in work or responsibilities',
            'Deep fear about future making it hard to function',
            'Karmic reckoning - consequences of past actions arriving',
            'Feeling powerless in face of massive change',
            'Long-term situation reaches crisis point - can\'t be ignored'
          );
        } else {
          manifestations.push(
            'Complete transformation of career or life structure',
            'Building something powerful and lasting through dedication',
            'Mastery achieved after long period of difficult work',
            'Taking responsibility leads to profound empowerment',
            'Facing fears transforms them into strengths',
            'Career advancement through psychological insight',
            'Dismantling what doesn\'t work to build something better',
            'Profound discipline creates lasting transformation',
            'Rising to position of real authority and responsibility',
            'Deep work on shadow creates unshakeable foundation',
            'Karmic lesson completed - wisdom gained from challenge',
            'Rebirth after period of intense pressure and change'
          );
        }
      }
    }
  }

  // URANUS aspects - Change, breakthrough, revolution, innovation
  if (natalPlanet === 'Uranus' || transitPlanet === 'Uranus') {

    // Uranus-Pluto: Revolutionary transformation
    if (pairKey === 'Uranus-Pluto' || reversePairKey === 'Uranus-Pluto') {
      // General fallback for all houses
      if (manifestations.length === 0) {
        if (isHard) {
          manifestations.push(
            'Sudden, intense change feels completely overwhelming',
            'Revolutionary impulse meets deep resistance or fear',
            'Power dynamics shift dramatically and unexpectedly',
            'Breaking free requires facing profound fears',
            'Sudden loss or crisis forces complete transformation',
            'Technology or innovation creates psychological upheaval',
            'Rebellion against control creates dangerous situation',
            'Unexpected revelation about power structure shocks you',
            'Rapid transformation without time to process or integrate',
            'Liberation comes through crisis or destruction',
            'Generational conflict reaches breaking point',
            'Radical change threatens sense of security and survival'
          );
        } else {
          manifestations.push(
            'Breakthrough transformation changes everything for the better',
            'Revolutionary insight empowers profound change',
            'Technology enables deep healing or transformation',
            'Breaking free from past creates powerful new beginning',
            'Sudden empowerment through awakening or realization',
            'Innovation transforms old psychological patterns',
            'Quantum leap in evolution and consciousness',
            'Liberation and transformation happening simultaneously',
            'Unexpected opportunity for complete life reinvention',
            'Technology or breakthrough creates healing',
            'Generational wisdom integrated with progressive vision',
            'Radical empowerment through embracing change fearlessly'
          );
        }
      }
    }
  }

  // NORTH NODE & SOUTH NODE aspects - Destiny, karma, growth direction
  if (natalPlanet === 'North Node' || transitPlanet === 'North Node' ||
      natalPlanet === 'South Node' || transitPlanet === 'South Node') {

    // Node-Sun: Destiny and identity, life purpose alignment
    if (pairKey === 'North Node-Sun' || reversePairKey === 'North Node-Sun' ||
        pairKey === 'Sun-North Node' || reversePairKey === 'Sun-North Node') {
      if (isConjunction) {
        manifestations.push(
          'Major life purpose activation - destiny calling clearly',
          'Meeting pivotal person who transforms your identity',
          'Career opportunity perfectly aligned with soul mission',
          'Complete identity transformation toward destined self',
          'Stepping into major leadership role that changes everything',
          'Recognition for being authentic self on grand scale',
          'Life path revealed with absolute clarity',
          'Feeling like everything led to this moment',
          'Past life talents fully awakening now',
          'Destined encounter that redefines life direction',
          'Ego death and rebirth into true purpose',
          'Becoming who you were always meant to be'
        );
      } else if (isHard) {
        manifestations.push(
          'Tension between ego and destiny - forced growth',
          'Life purpose calling but ego resists change',
          'Career crossroads - comfortable path vs destined path',
          'Identity crisis pushing toward evolution',
          'Leadership opportunity feels intimidating or premature',
          'Uncomfortable growth away from limiting identity',
          'Recognition comes with challenges to accept',
          'Life path unclear - inner conflict about direction',
          'Fighting against what you know you need to become',
          'Past patterns blocking future potential',
          'Karmic pressure to step up causes anxiety',
          'Destined changes feel forced or uncomfortable'
        );
      } else {
        manifestations.push(
          'Feeling naturally pulled toward life purpose',
          'Meeting person who helps understand destiny easily',
          'Career opportunity aligns with soul purpose smoothly',
          'Identity shift toward destined self flows naturally',
          'Stepping into leadership role feels right',
          'Letting go of comfortable but limiting identity with ease',
          'Recognition for being authentic self',
          'Life path becomes clearer through gentle events',
          'Feeling like you\'re on right track',
          'Past life skills or talents resurface naturally',
          'Karmic lesson about self-expression understood easily',
          'Destined encounter changes direction positively'
        );
      }
    }

    if (pairKey === 'South Node-Sun' || reversePairKey === 'South Node-Sun' ||
        pairKey === 'Sun-South Node' || reversePairKey === 'Sun-South Node') {
      if (isConjunction) {
        manifestations.push(
          'Major karmic completion with past identity',
          'Profound release of old self-image',
          'Past life patterns fully revealing themselves',
          'Significant person from past returns for closure',
          'Old career phase completing - major transition',
          'Ego dissolution - letting go of who you were',
          'Karmic debt with authority figure being resolved',
          'Complete nostalgia phase before moving forward',
          'Feeling like you\'ve lived this exact moment before',
          'Final release of outdated version of yourself',
          'Past accomplishments acknowledged before new chapter',
          'Comfortable patterns ending to make way for growth'
        );
      } else if (isHard) {
        manifestations.push(
          'Tension between past comfort and need to evolve',
          'Past patterns pulling you back when need to move forward',
          'Old identity conflicts with who you\'re becoming',
          'Painful release of familiar but limiting self-image',
          'Past connections draining your energy',
          'Fighting to stay in comfort zone vs forced growth',
          'Karmic patterns repeating uncomfortably',
          'Old friends or situations blocking progress',
          'Ego struggles with letting go of past success',
          'Authority figure from past causing current friction',
          'Nostalgia becoming obstacle to future',
          'Comfortable but stuck - frustration with stagnation'
        );
      } else {
        manifestations.push(
          'Gently pulled back to review past identity',
          'Past life connections resurface for healing',
          'Familiar patterns recognized as limiting',
          'Easily releasing outdated version of yourself',
          'Old friends or situations return for closure',
          'Feeling like you\'ve done this before - wisdom gained',
          'Letting go of ego attachments with grace',
          'Past career phase revisited to integrate lessons',
          'Comfortable enough to recognize need to move forward',
          'Karmic completion with authority figure flows smoothly',
          'Releasing what no longer serves with ease',
          'Healthy nostalgia honors past before future'
        );
      }
    }

    // Node-Moon: Emotional destiny, family karma
    if (pairKey === 'North Node-Moon' || reversePairKey === 'North Node-Moon' ||
        pairKey === 'Moon-North Node' || reversePairKey === 'Moon-North Node') {
      if (isConjunction) {
        manifestations.push(
          'Major emotional evolution - complete transformation',
          'Family situation dramatically reshapes destiny',
          'Profound lesson in nurturing self and others',
          'Major home or family change that\'s clearly fated',
          'Emotional needs completely transform',
          'Meeting someone who becomes soul family',
          'Deep karmic lesson about security activates',
          'Mother figure plays pivotal role in life purpose',
          'Home move that changes everything',
          'Intuitive abilities fully awakening',
          'Past life family reunion - profound recognition',
          'Complete emotional maturity breakthrough'
        );
      } else if (isHard) {
        manifestations.push(
          'Emotional growth feels forced or painful',
          'Family situation creates uncomfortable pressure',
          'Difficulty learning to nurture properly',
          'Home or family change feels disruptive',
          'Emotional needs conflicting with old patterns',
          'Meeting someone triggers intense family feelings',
          'Security needs challenged uncomfortably',
          'Emotional dependencies hard to release',
          'Mother figure causes tension around destiny',
          'Home move feels forced or stressful',
          'Intuition developing through difficult lessons',
          'Family karma surfacing painfully'
        );
      } else {
        manifestations.push(
          'Naturally developing emotional intelligence',
          'Family situation gently guides growth',
          'Learning to nurture flows naturally',
          'Home or family change feels divinely guided',
          'Emotional needs evolving smoothly',
          'Meeting someone who feels like family immediately',
          'Karmic lesson about security understood easily',
          'Releasing emotional dependencies with grace',
          'Mother figure supports life purpose',
          'Home move flows with ease',
          'Developing intuition and awareness naturally',
          'Growing toward emotional maturity smoothly'
        );
      }
    }

    if (pairKey === 'South Node-Moon' || reversePairKey === 'South Node-Moon' ||
        pairKey === 'Moon-South Node' || reversePairKey === 'Moon-South Node') {
      if (isConjunction) {
        manifestations.push(
          'Major karmic release of family patterns',
          'Deep family karma completing',
          'Profound letting go of childhood home',
          'Complete release of mother dependency',
          'Past life emotional memories flooding back',
          'Emotional safety net dissolving completely',
          'Major nostalgia phase before moving forward',
          'Childhood patterns fully revealing themselves',
          'Emotional comfort zone ending dramatically',
          'Karmic family relationships completing fully',
          'Final release of old nurturing patterns',
          'Past emotional self being completely shed'
        );
      } else if (isHard) {
        manifestations.push(
          'Painful struggle with comfortable patterns',
          'Family karma creating tension',
          'Pulled back to old home when need to move forward',
          'Difficult release of childhood security',
          'Past emotional memories causing distress',
          'Fighting release of family dependency',
          'Stuck in familiar feelings uncomfortably',
          'Nostalgia becoming obstacle',
          'Emotional comfort zone limiting growth painfully',
          'Family relationships draining energy',
          'Hard to leave emotional safety net',
          'Past nurturing patterns blocking progress'
        );
      } else {
        manifestations.push(
          'Comfortable emotional patterns recognized and released',
          'Family karma surfaces gently for healing',
          'Old home or family situation revisited with wisdom',
          'Letting go of childhood security with grace',
          'Past life emotional memories integrate smoothly',
          'Releasing dependence on mother naturally',
          'Familiar feelings honored then released',
          'Healthy nostalgia for childhood or past home',
          'Emotional comfort zone recognized as limiting',
          'Karmic family relationships completing peacefully',
          'Leaving emotional safety net with support',
          'Past nurturing patterns integrated then released'
        );
      }
    }

    // Node-Mercury: Destined communication, learning path
    if (pairKey === 'North Node-Mercury' || reversePairKey === 'North Node-Mercury' ||
        pairKey === 'Mercury-North Node' || reversePairKey === 'Mercury-North Node') {
      if (isConjunction) {
        manifestations.push(
          'Major communication breakthrough - voice finds purpose',
          'Destined teacher or mentor transforming your path',
          'Message or information completely changes life direction',
          'Writing or speaking becomes central to destiny',
          'Sibling plays pivotal role in life purpose',
          'Life-changing travel to fated destination',
          'Learning exactly what you need for future',
          'Deep karmic lesson about communication activates',
          'Contract or document with major destiny implications',
          'Intellectual awakening to life purpose',
          'Past life knowledge flooding back',
          'Meant to share your message with the world'
        );
      } else if (isHard) {
        manifestations.push(
          'Difficulty finding voice for purpose',
          'Communication skills challenged - forced growth',
          'Mentor relationship creates tension',
          'Information overload blocks clarity about path',
          'Writing or speaking feels intimidating',
          'Sibling creates drama around destiny',
          'Travel plans disrupt or stress you',
          'Learning feels forced or overwhelming',
          'Communication lesson comes through conflict',
          'Contract or document causes stress',
          'Mental resistance to intellectual growth',
          'Hard to share ideas - fear of judgment'
        );
      } else {
        manifestations.push(
          'Naturally learning what serves life purpose',
          'Communication skills developing smoothly',
          'Meeting mentor or teacher feels easy and fated',
          'Message or information gently guides direction',
          'Writing or speaking flows naturally toward destiny',
          'Sibling supports your purpose',
          'Travel opens new perspectives easily',
          'Learning feels aligned with path',
          'Karmic lesson about communication understood',
          'Contract or document supports destiny',
          'Intellectual growth flows naturally',
          'Ideas ready to be shared with world'
        );
      }
    }

    if (pairKey === 'South Node-Mercury' || reversePairKey === 'South Node-Mercury' ||
        pairKey === 'Mercury-South Node' || reversePairKey === 'Mercury-South Node') {
      if (isConjunction) {
        manifestations.push(
          'Major release of old ideas and beliefs',
          'Past life communication mastery fully present',
          'Complete letting go of outdated thinking',
          'Sibling from past life recognized',
          'Old learning patterns dissolving',
          'Karmic completion through major conversation',
          'Past writings or ideas coming full circle',
          'Familiar places triggering past life memories',
          'Mental comfort zone completely ending',
          'Final chapter of old thought patterns',
          'Knowledge you brought from past now integrated',
          'Time to stop relying on familiar ideas'
        );
      } else if (isHard) {
        manifestations.push(
          'Struggling to release familiar ideas',
          'Past communication patterns blocking growth',
          'Old learning methods no longer working',
          'Difficulty letting go of outdated thinking',
          'Sibling represents past you need to move beyond',
          'Comfortable knowledge becoming limitation painfully',
          'Nostalgic for past education prevents new learning',
          'Karmic conversations creating tension',
          'Mental patterns hard to break',
          'Past writings or ideas feel limiting',
          'Stuck in familiar thinking uncomfortably',
          'Easy communication but growth requires discomfort'
        );
      } else {
        manifestations.push(
          'Familiar ideas naturally questioned and released',
          'Past life communication skills recognized',
          'Old learning patterns gently transformed',
          'Releasing outdated thinking with ease',
          'Sibling connection healing and completing',
          'Comfortable knowledge integrated then transcended',
          'Healthy nostalgia for past education',
          'Karmic completion through peaceful conversation',
          'Letting go of old mental patterns gracefully',
          'Past writings or ideas honored then released',
          'Familiar places bring wisdom from past',
          'Easy communication supporting forward movement'
        );
      }
    }

    // Node-Venus: Relationship destiny, karmic love
    if (pairKey === 'North Node-Venus' || reversePairKey === 'North Node-Venus' ||
        pairKey === 'Venus-North Node' || reversePairKey === 'Venus-North Node') {
      if (isConjunction) {
        manifestations.push(
          'Destined soulmate encounter - life-changing meeting',
          'Complete transformation in how you love and value yourself',
          'Major relationship defining your life purpose',
          'Values completely realigning with destiny',
          'Profound lesson about love and self-worth',
          'Creative breakthrough that transforms life path',
          'Financial situation dramatically changes destiny',
          'Learning to truly receive and give love',
          'Karmic relationship teaching soul-level lesson',
          'Beauty and art become central to purpose',
          'Self-worth awakening - finally valuing yourself',
          'Partnership that feels cosmically ordained'
        );
      } else if (isHard) {
        manifestations.push(
          'Relationship challenges pushing uncomfortable growth',
          'Difficult lessons about love and self-worth',
          'Partnership creates tension around destiny',
          'Values conflicting with life purpose',
          'Love feels out of reach or complicated',
          'Creative expression blocked or challenged',
          'Financial stress forcing evolution',
          'Difficulty receiving love you deserve',
          'Karmic relationship triggering painful lessons',
          'Beauty standards causing self-worth issues',
          'Learning to value yourself through hardship',
          'Partnership feels fated but difficult'
        );
      } else {
        manifestations.push(
          'Destined relationship encounter flows naturally',
          'Learning about love and self-worth easily',
          'Relationship gently guides growth',
          'Developing values aligned with purpose',
          'Meant to experience this beautiful love',
          'Creative talents naturally supporting purpose',
          'Financial situation supporting destiny',
          'Growing in receiving and giving love smoothly',
          'Karmic relationship teaching with grace',
          'Beauty and art enriching your path',
          'Learning to value yourself properly',
          'Partnership feels fated and harmonious'
        );
      }
    }

    if (pairKey === 'South Node-Venus' || reversePairKey === 'South Node-Venus' ||
        pairKey === 'Venus-South Node' || reversePairKey === 'Venus-South Node') {
      if (isConjunction) {
        manifestations.push(
          'Past life lover returns for major completion',
          'Deep karmic relationship cycle ending',
          'Complete release of old relationship pattern',
          'Old values dissolving completely',
          'Major letting go of past love attachment',
          'Financial comfort zone completely transforming',
          'Past life artistic mastery fully present',
          'Profound nostalgia for past romance',
          'Releasing old definition of beauty and worth',
          'Familiar partner completing soul contract',
          'Final chapter of comfortable receiving patterns',
          'Love from past making way for future growth'
        );
      } else if (isHard) {
        manifestations.push(
          'Past lover causing tension - hard to release',
          'Familiar relationship pattern blocking growth',
          'Comfortable love preventing evolution',
          'Karmic relationship difficult to complete',
          'Old values limiting but hard to change',
          'Painful release of past relationship',
          'Financial comfort zone limiting painfully',
          'Easy love but feeling stuck',
          'Past artistic talents feeling limiting',
          'Nostalgia for past romance preventing new love',
          'Struggling to redefine beauty and worth',
          'Familiar partner draining energy'
        );
      } else {
        manifestations.push(
          'Past life lover returns for gentle closure',
          'Familiar relationship pattern recognized and released',
          'Comfortable love honored before moving forward',
          'Karmic relationship completing peacefully',
          'Old values naturally evolving',
          'Releasing past relationship attachment with grace',
          'Financial comfort zone expanding naturally',
          'Easy love integrated then transcended',
          'Past life artistic talents honored',
          'Healthy nostalgia for past romance',
          'Redefining beauty and worth with ease',
          'Familiar partner completing role gracefully'
        );
      }
    }

    // Node-Mars: Action toward destiny, karmic battles
    if (pairKey === 'North Node-Mars' || reversePairKey === 'North Node-Mars' ||
        pairKey === 'Mars-North Node' || reversePairKey === 'Mars-North Node') {
      if (isConjunction) {
        manifestations.push(
          'Major action taken toward life purpose - breakthrough',
          'Warrior energy fully activated for destiny',
          'Significant fight or challenge transforming path',
          'Complete assertiveness awakening',
          'Athletic or physical calling becomes central',
          'Anger revealing exactly what to fight for',
          'Highly motivated to transform life direction',
          'Deep karmic lesson about assertion activates',
          'Courage to pursue destiny reaches peak',
          'Competition or conflict serving soul purpose',
          'Taking bold initiative toward future self',
          'Physical energy powerfully aligned with path',
          'Passionate commitment to purpose ignites'
        );
      } else if (isHard) {
        manifestations.push(
          'Action toward purpose feels forced or blocked',
          'Courage challenged - fear of pursuing path',
          'Fight or conflict creating obstacles',
          'Difficulty developing assertiveness',
          'Athletic path blocked or frustrated',
          'Anger misdirected or suppressed',
          'Motivation conflicting with circumstances',
          'Karmic lesson about boundaries painful',
          'Warrior energy causing problems',
          'Competition or conflict feels counterproductive',
          'Taking initiative meets resistance',
          'Physical energy at odds with soul path'
        );
      } else {
        manifestations.push(
          'Taking action toward life purpose naturally',
          'Courage to pursue destined path flows',
          'Challenge gently pushes you forward',
          'Developing assertiveness smoothly',
          'Athletic or physical path feels naturally meant',
          'Anger clearly shows what to fight for',
          'Motivated to change life direction easily',
          'Karmic lesson about assertion understood',
          'Warrior energy supporting destiny',
          'Competition or conflict serving growth',
          'Taking initiative toward future self with ease',
          'Physical energy naturally aligned with purpose'
        );
      }
    }

    if (pairKey === 'South Node-Mars' || reversePairKey === 'South Node-Mars' ||
        pairKey === 'Mars-South Node' || reversePairKey === 'Mars-South Node') {
      if (isConjunction) {
        manifestations.push(
          'Major karmic battle from past completing',
          'Old warrior energy fully surfacing for release',
          'Complete letting go of familiar aggression',
          'Past life conflict resolving finally',
          'Athletic mastery from past fully present',
          'Anger patterns from past life crystal clear',
          'Final fight before changing approach',
          'Karmic completion through major competition',
          'Old way of taking action ending completely',
          'Releasing deep need to fight',
          'Past life physical abilities at peak',
          'Comfortable aggression transforming'
        );
      } else if (isHard) {
        manifestations.push(
          'Fighting same old battles - stuck pattern',
          'Comfortable assertion method limiting painfully',
          'Past warrior energy causing problems',
          'Anger patterns repeating destructively',
          'Difficult to let go of old conflicts',
          'Familiar aggression blocking growth',
          'Athletic skills feeling limiting',
          'Karmic pattern through competition frustrating',
          'Old action methods no longer working',
          'Hard to release need to fight',
          'Past physical abilities preventing new development',
          'Comfortable being aggressive but causing harm'
        );
      } else {
        manifestations.push(
          'Fighting old battles with awareness',
          'Comfortable assertion recognized as limiting',
          'Past life warrior energy honored then released',
          'Anger patterns from past healing',
          'Letting go of old conflicts gracefully',
          'Familiar aggression transformed gently',
          'Athletic skills from past integrated',
          'Karmic completion through healthy competition',
          'Old action methods evolving naturally',
          'Releasing need to fight with wisdom',
          'Past physical abilities honored',
          'Comfortable aggression becoming gentler approach'
        );
      }
    }

    // Node-Jupiter: Expansion toward destiny, karmic beliefs
    if (pairKey === 'North Node-Jupiter' || reversePairKey === 'North Node-Jupiter' ||
        pairKey === 'Jupiter-North Node' || reversePairKey === 'Jupiter-North Node') {
      if (isConjunction) {
        manifestations.push(
          'Major opportunity perfectly aligned with destiny',
          'Life-changing travel to fated destination',
          'Education transforming your soul path completely',
          'Beliefs expanding to higher truth - awakening',
          'Lucky breakthrough pushing toward purpose',
          'Teaching or wisdom-sharing becomes central calling',
          'Profound expansion and growth',
          'Faith in path reaching new heights',
          'Abundance flowing through purpose alignment',
          'International connection transforming life',
          'Major karmic reward manifesting',
          'Generous gesture toward future self',
          'Meant to inspire or educate on large scale'
        );
      } else if (isHard) {
        manifestations.push(
          'Opportunity misaligned or overwhelming',
          'Travel plans disrupting path',
          'Education conflicting with destiny',
          'Beliefs challenged - faith crisis',
          'Lucky break feels out of reach',
          'Teaching role intimidating or blocked',
          'Overexpansion causing problems',
          'Faith in path shaken',
          'Abundance through purpose feels difficult',
          'International connection creating tension',
          'Karmic lesson through excess or loss',
          'Generosity backfiring',
          'Meant to teach but facing resistance'
        );
      } else {
        manifestations.push(
          'Opportunity aligned with purpose arrives naturally',
          'Travel to destined location flows smoothly',
          'Education supporting soul path',
          'Beliefs gently evolving toward higher truth',
          'Lucky break guiding you forward',
          'Teaching or sharing wisdom feels natural',
          'Growing through expansion and optimism',
          'Faith in your path strengthening',
          'Abundance comes through following purpose',
          'International connection feels fated and easy',
          'Karmic reward for past growth',
          'Generosity toward future self',
          'Naturally inspiring or educating others'
        );
      }
    }

    if (pairKey === 'South Node-Jupiter' || reversePairKey === 'South Node-Jupiter' ||
        pairKey === 'Jupiter-South Node' || reversePairKey === 'Jupiter-South Node') {
      if (isConjunction) {
        manifestations.push(
          'Past life wisdom fully accessible now',
          'Major release of comfortable beliefs',
          'Easy optimism phase completing',
          'Letting go of old faith completely',
          'Significant return to familiar place from past',
          'Teaching mastery from past life present',
          'Karmic luck cycle ending',
          'Deep nostalgia for past adventures',
          'Completely releasing old abundance definition',
          'Comfortable knowledge reaching limit',
          'Past life teaching calling to complete',
          'Easy path ending - new growth required'
        );
      } else if (isHard) {
        manifestations.push(
          'Past wisdom limiting current growth painfully',
          'Comfortable beliefs blocking evolution',
          'Easy optimism preventing necessary work',
          'Difficult to let go of old faith',
          'Travel to past triggering stuck patterns',
          'Teaching old knowledge feeling limiting',
          'Karmic luck causing complacency',
          'Nostalgia for adventures blocking present',
          'Old abundance definition limiting',
          'Comfortable knowledge preventing expansion',
          'Past teaching abilities causing stagnation',
          'Easy path feeling like trap'
        );
      } else {
        manifestations.push(
          'Past life wisdom naturally accessible',
          'Comfortable beliefs gently questioned',
          'Easy optimism balanced with growth',
          'Letting go of old faith gracefully',
          'Travel to familiar place for closure',
          'Teaching what you know well with humility',
          'Karmic luck honored before new phase',
          'Healthy nostalgia for past adventures',
          'Releasing old abundance definition naturally',
          'Comfortable knowledge integrated',
          'Past life teaching abilities honored',
          'Easy path completing peacefully'
        );
      }
    }

    // Node-Saturn: Karmic lessons, destiny through discipline
    if (pairKey === 'North Node-Saturn' || reversePairKey === 'North Node-Saturn' ||
        pairKey === 'Saturn-North Node' || reversePairKey === 'Saturn-North Node') {
      if (isConjunction) {
        manifestations.push(
          'Major karmic lesson through significant challenge',
          'Profound responsibility aligned with destiny',
          'Complete maturity awakening required',
          'Authority figure teaching life-changing lesson',
          'Hard work leading to major achievement',
          'Discipline becoming central to path',
          'Karmic debt payment reaching completion',
          'Structure transforming ability to reach destiny',
          'Learning what was avoided for lifetimes',
          'Growing through major limitation',
          'Meant to build something truly lasting',
          'Serious life commitment activating',
          'Destiny requiring facing deepest fears'
        );
      } else if (isHard) {
        manifestations.push(
          'Karmic lesson through painful restriction',
          'Responsibility feels crushing or misaligned',
          'Maturity forced uncomfortably',
          'Authority figure blocking or criticizing',
          'Hard work feeling pointless or excessive',
          'Discipline feels oppressive',
          'Karmic debt payment feels unfair',
          'Structure limiting instead of helping',
          'Avoiding lessons causing more pain',
          'Growing through harsh limitation',
          'Building feels impossible or blocked',
          'Commitment feels like burden',
          'Destiny blocked by fears'
        );
      } else {
        manifestations.push(
          'Karmic lesson through manageable challenge',
          'Responsibility naturally aligned with purpose',
          'Developing maturity smoothly',
          'Authority figure teaches supportive lesson',
          'Hard work toward meaningful goal flows',
          'Patience and discipline supporting path',
          'Karmic debt being paid steadily',
          'Structure helping you reach destiny',
          'Learning what was avoided with grace',
          'Growing through healthy boundaries',
          'Naturally building something lasting',
          'Serious commitment feels right',
          'Destiny supported by facing fears'
        );
      }
    }

    if (pairKey === 'South Node-Saturn' || reversePairKey === 'South Node-Saturn' ||
        pairKey === 'Saturn-South Node' || reversePairKey === 'Saturn-South Node') {
      if (isConjunction) {
        manifestations.push(
          'Major past life responsibilities completing',
          'Familiar limitations dissolving completely',
          'Old authority patterns fully releasing',
          'Karmic restriction cycle ending',
          'Comfortable discipline transforming',
          'Deep fears and blocks releasing',
          'Past life mastery fully acknowledged',
          'Heavy burden from past lifting completely',
          'Releasing profound need for control',
          'Old structures completely dissolving',
          'Familiar hardships ending',
          'Major karmic release not building'
        );
      } else if (isHard) {
        manifestations.push(
          'Past responsibilities weighing heavily',
          'Familiar limitations blocking growth painfully',
          'Old authority patterns hard to release',
          'Karmic restriction repeating uncomfortably',
          'Comfortable discipline feeling joyless',
          'Difficulty letting go of old fears',
          'Past mastery feeling limiting',
          'Heavy burden hard to release',
          'Excessive control preventing freedom',
          'Old structures blocking progress',
          'Familiar hardships preventing joy',
          'Karmic lesson about release feels hard'
        );
      } else {
        manifestations.push(
          'Past life responsibilities naturally completing',
          'Familiar limitations releasing gently',
          'Old authority patterns naturally evolving',
          'Karmic pattern of restriction healing',
          'Comfortable discipline balanced with joy',
          'Letting go of old fears gracefully',
          'Past life mastery honored',
          'Heavy burden from past lightening',
          'Releasing excessive control naturally',
          'Old structures evolving supportively',
          'Familiar hardships giving way to ease',
          'Karmic lesson about releasing understood'
        );
      }
    }

    // Node-Uranus: Awakening to destiny, karmic breakthroughs
    if (pairKey === 'North Node-Uranus' || reversePairKey === 'North Node-Uranus' ||
        pairKey === 'Uranus-North Node' || reversePairKey === 'Uranus-North Node') {
      if (isConjunction) {
        manifestations.push(
          'Sudden major awakening to life purpose',
          'Unexpected revolutionary change toward destiny',
          'Technology or innovation becoming central',
          'Complete liberation aligned with soul path',
          'Breakthrough insight transforming future',
          'Fully embracing unique authentic self',
          'Deep karmic lesson about freedom activating',
          'Revolutionary change completely fated',
          'Meeting unusual person who transforms everything',
          'Complete individuality awakening',
          'Meant to revolutionize or break tradition',
          'Sudden quantum leap opportunity',
          'Full awakening to true self and purpose'
        );
      } else if (isHard) {
        manifestations.push(
          'Sudden awakening feels disruptive or chaotic',
          'Unexpected change creating instability',
          'Technology causing problems with destiny',
          'Liberation conflicting with responsibilities',
          'Breakthrough insight overwhelming',
          'Being different feels isolating',
          'Karmic lesson about freedom painful',
          'Revolutionary change feels forced',
          'Meeting unusual people creating chaos',
          'Individuality causing alienation',
          'Breaking tradition has consequences',
          'Sudden opportunity feels destabilizing'
        );
      } else {
        manifestations.push(
          'Sudden awakening to life purpose flows naturally',
          'Unexpected change gently pushes forward',
          'Technology or innovation supporting destiny',
          'Liberation naturally aligned with soul path',
          'Breakthrough insight about future excites',
          'Naturally destined to be different or unique',
          'Karmic lesson about freedom understood',
          'Revolutionary change feels fated and right',
          'Meeting unusual people enriches path',
          'Growing toward individuality with ease',
          'Naturally breaking free from tradition',
          'Sudden opportunity for positive quantum leap'
        );
      }
    }

    if (pairKey === 'South Node-Uranus' || reversePairKey === 'South Node-Uranus' ||
        pairKey === 'Uranus-South Node' || reversePairKey === 'Uranus-South Node') {
      if (isConjunction) {
        manifestations.push(
          'Major past life rebellion completing',
          'Familiar sudden change pattern fully visible',
          'Comfortable outsider role transforming',
          'Chaotic past patterns completely releasing',
          'Old friendship groups significant return',
          'Major karmic completion through liberation',
          'Past life genius fully remembered',
          'Releasing deep need to be different',
          'Technological mastery from past present',
          'Profound nostalgia for past freedom',
          'Old awakening experiences completing',
          'Time to fully stabilize after past chaos'
        );
      } else if (isHard) {
        manifestations.push(
          'Past rebellions causing current problems',
          'Familiar sudden changes destabilizing',
          'Comfortable outsider role isolating painfully',
          'Chaotic past patterns hard to release',
          'Old friendships dragging you back',
          'Karmic liberation feeling chaotic',
          'Past genius preventing current growth',
          'Hard to release need to be different',
          'Technological skills feeling limiting',
          'Nostalgia for freedom blocking stability',
          'Old awakening blocking new growth',
          'Chaos preventing necessary stabilization'
        );
      } else {
        manifestations.push(
          'Past life rebellions naturally revisited',
          'Familiar pattern of sudden change recognized',
          'Comfortable outsider role evolving',
          'Letting go of chaotic past patterns gently',
          'Old friendships or groups completing',
          'Karmic completion through healthy liberation',
          'Past life genius or innovation honored',
          'Naturally releasing need to always be different',
          'Familiar technological skills integrated',
          'Healthy nostalgia for past freedom',
          'Old awakening experiences honored',
          'Naturally stabilizing after past chaos'
        );
      }
    }

    // Node-Neptune: Spiritual destiny, karmic dissolution
    if (pairKey === 'North Node-Neptune' || reversePairKey === 'North Node-Neptune' ||
        pairKey === 'Neptune-North Node' || reversePairKey === 'Neptune-North Node') {
      if (isConjunction) {
        manifestations.push(
          'Spiritual path becoming central to destiny',
          'Dreams and intuition completely guiding purpose',
          'Major artistic calling activating',
          'Profound compassion and sensitivity awakening',
          'Healing work becoming life path',
          'Deep karmic lesson about surrender',
          'Complete spiritual awareness opening',
          'Destined to help or heal on large scale',
          'Music, art, or spirituality consuming you',
          'Learning to fully trust intuition',
          'Mystical experiences revealing purpose clearly',
          'Ego boundaries dissolving for higher service',
          'Serving something much greater than self'
        );
      } else if (isHard) {
        manifestations.push(
          'Spiritual path feels confusing or deceptive',
          'Dreams and intuition unreliable',
          'Artistic calling blocked or unclear',
          'Compassion leads to being taken advantage of',
          'Healing work draining or confusing',
          'Karmic lesson about surrender painful',
          'Spiritual awareness bringing confusion',
          'Helping others depleting you',
          'Artistic path feels impractical',
          'Difficulty trusting intuition',
          'Mystical experiences overwhelming',
          'Ego dissolution feels like losing self'
        );
      } else {
        manifestations.push(
          'Spiritual path naturally becomes destiny',
          'Dreams and intuition gently guide purpose',
          'Artistic calling feels naturally fated',
          'Developing compassion and sensitivity easily',
          'Healing work naturally part of path',
          'Karmic lesson about surrender understood',
          'Growing toward spiritual awareness smoothly',
          'Naturally destined to help or heal others',
          'Music, art, or spirituality calling gently',
          'Learning to trust intuition with ease',
          'Mystical experiences pointing toward purpose',
          'Ego boundaries naturally dissolving',
          'Serving something greater flows naturally'
        );
      }
    }

    if (pairKey === 'South Node-Neptune' || reversePairKey === 'South Node-Neptune' ||
        pairKey === 'Neptune-South Node' || reversePairKey === 'Neptune-South Node') {
      if (isConjunction) {
        manifestations.push(
          'Past life spiritual mastery fully present',
          'Major need for grounding from escapism',
          'Familiar illusions completely clearing',
          'Deep karmic victimhood pattern completing',
          'Releasing major past life vows',
          'Old spiritual practices dissolving',
          'Profound letting go of martyrdom',
          'Past life artistic gifts at peak',
          'Deep nostalgia for spiritual experiences',
          'Fantasy world ending - reality calling',
          'Major karmic completion through forgiveness',
          'Compassion reaching limit - boundaries needed'
        );
      } else if (isHard) {
        manifestations.push(
          'Past spiritual gifts preventing growth',
          'Escaping reality blocking progress painfully',
          'Familiar illusions hard to clear',
          'Karmic victimhood repeating',
          'Past life vows limiting current life',
          'Old spiritual practices feeling limiting',
          'Martyrdom or sacrifice draining',
          'Past artistic talents preventing new development',
          'Nostalgia for spirituality blocking present',
          'Fantasy addiction preventing reality',
          'Forgiveness feels impossible',
          'Compassion without boundaries causing problems'
        );
      } else {
        manifestations.push(
          'Past life spiritual gifts naturally accessible',
          'Comfortable escapism balanced with grounding',
          'Familiar illusions gently clearing',
          'Karmic victimhood pattern healing',
          'Releasing past life vows gracefully',
          'Old spiritual practices naturally evolving',
          'Letting go of martyrdom with wisdom',
          'Past life artistic talents honored',
          'Healthy nostalgia for spiritual experiences',
          'Fantasy balanced with reality',
          'Karmic completion through natural forgiveness',
          'Easy compassion with healthy boundaries'
        );
      }
    }

    // Node-Pluto: Karmic transformation, destiny through death/rebirth
    if (pairKey === 'North Node-Pluto' || reversePairKey === 'North Node-Pluto' ||
        pairKey === 'Pluto-North Node' || reversePairKey === 'Pluto-North Node') {
      if (isConjunction) {
        manifestations.push(
          'Intense total transformation aligned with destiny',
          'Major crisis forcing complete life purpose shift',
          'Meant to face all shadow and transform completely',
          'Deep karmic lesson about power activating',
          'Profound psychological work becoming central',
          'Destined to eliminate everything false',
          'Complete death and rebirth experience',
          'Meant to reclaim full personal power',
          'Life-altering change feels absolutely fated',
          'Therapy or depth work revealing entire purpose',
          'Karmic trauma pattern transforming completely',
          'Destined for total life reinvention',
          'Rising from ashes into true destiny'
        );
      } else if (isHard) {
        manifestations.push(
          'Intense transformation feels destructive',
          'Crisis blocking path to purpose',
          'Facing shadow feels overwhelming',
          'Karmic lesson about power painful',
          'Deep psychological work traumatic',
          'Eliminating false self feels like death',
          'Death/rebirth process agonizing',
          'Power struggles blocking growth',
          'Profound change feels forced or cruel',
          'Depth work revealing painful truths',
          'Karmic trauma repeating',
          'Life reinvention feels impossible',
          'Stuck in ashes - can\'t rise'
        );
      } else {
        manifestations.push(
          'Intense transformation naturally aligned with destiny',
          'Crisis gently forces you toward purpose',
          'Meant to face shadow and transform gracefully',
          'Karmic lesson about power understood',
          'Deep psychological work supporting path',
          'Naturally destined to eliminate what\'s false',
          'Growing through manageable death and rebirth',
          'Naturally reclaiming personal power',
          'Profound change feels powerfully fated',
          'Therapy or depth work revealing purpose',
          'Karmic trauma transforming with support',
          'Destined for positive life reinvention',
          'Rising from ashes into destiny with grace'
        );
      }
    }

    if (pairKey === 'South Node-Pluto' || reversePairKey === 'South Node-Pluto' ||
        pairKey === 'Pluto-South Node' || reversePairKey === 'Pluto-South Node') {
      if (isConjunction) {
        manifestations.push(
          'Major past life power struggles completing',
          'Familiar control patterns fully revealing',
          'Deep karmic trauma from past surfacing completely',
          'Comfortable intensity transforming to peace',
          'Major release of old power dynamics',
          'Releasing profound past life secrets',
          'Old obsessions dissolving completely',
          'Major karmic completion through transformation',
          'Past life deaths or losses fully remembered',
          'Deep psychological patterns healing completely',
          'Releasing total need to control',
          'What was destroyed before finally released'
        );
      } else if (isHard) {
        manifestations.push(
          'Past power struggles causing current crisis',
          'Familiar control patterns destructive',
          'Karmic trauma from past lives overwhelming',
          'Comfortable with intensity preventing peace',
          'Difficult to let go of power dynamics',
          'Past life darkness hard to release',
          'Old obsessions consuming',
          'Karmic pattern through trauma repeating',
          'Past life deaths causing current fear',
          'Familiar patterns needing painful healing',
          'Control issues blocking freedom',
          'Unable to release what was destroyed'
        );
      } else {
        manifestations.push(
          'Past life power struggles naturally completing',
          'Familiar control patterns recognized and released',
          'Karmic trauma from past healing gently',
          'Comfortable intensity balanced with peace',
          'Letting go of old power dynamics gracefully',
          'Releasing past life secrets with wisdom',
          'Old obsessions naturally dissolving',
          'Karmic completion through gentle transformation',
          'Past life deaths or losses integrated',
          'Familiar psychological patterns healing',
          'Letting go of control with trust',
          'What was destroyed before peacefully released'
        );
      }
    }
  }

  // North Node-South Node: Nodal opposition (always 180° apart) - karmic axis activation
  if ((pairKey === 'North Node-South Node' || reversePairKey === 'North Node-South Node' ||
       pairKey === 'South Node-North Node' || reversePairKey === 'South Node-North Node')) {
    // The nodes are always opposite, so this is always an opposition aspect
    // This creates tension between destiny (North Node) and past patterns (South Node)
    manifestations.push(
      'Major life crossroads - choose growth path or familiar comfort zone',
      'Karmic pattern intensifies - repeating old lesson or breaking free',
      'Relationship brings up past-life dynamics requiring conscious choice',
      'Career decision between safe known path and risky destiny calling',
      'Family obligation pulls against personal evolution',
      'Comfort zone feels suffocating - destiny path feels terrifying',
      'Old patterns resurface powerfully just as new direction emerges',
      'Someone from past returns as catalyst for growth decision',
      'What you need to release and what you need to embrace become crystal clear',
      'Fear of unknown battles pull of familiar - both equally strong',
      'Destiny knocks loudly while past clings tightly',
      'Conscious choice point - evolve forward or regress backward'
    );
  }


  // If no specific manifestations were added, create general ones
  // Add house-combination specific manifestations before generic fallback
  if (manifestations.length === 0) {
    const houseManifestations = getNatalToTransitHouseManifestations(
      natalPlanet,
      natalHouse,
      transitPlanet,
      transitHouse,
      aspectType
    );
    manifestations.push(...houseManifestations);
  }

  // Final fallback to generic manifestations if still empty
  if (manifestations.length === 0) {
    const natalArea = HOUSE_MEANINGS[natalHouse]?.keywords[0] || 'this life area';
    const transitArea = HOUSE_MEANINGS[transitHouse]?.keywords[0] || 'this area';

    if (isHard) {
      manifestations.push(
        `Tension between your ${natalArea} (${natalHouse}${getOrdinalSuffix(natalHouse)} house) and current ${transitArea} matters (${transitHouse}${getOrdinalSuffix(transitHouse)} house) requiring you to make adjustments`,
        `Challenges in ${transitArea} that test how you handle ${natalArea}, pushing you to grow`,
        `Friction that, while uncomfortable, is motivating necessary changes in how you approach ${natalArea}`
      );
    } else if (isEasy) {
      manifestations.push(
        `Smooth opportunities connecting your ${natalArea} (${natalHouse}${getOrdinalSuffix(natalHouse)} house) with ${transitArea} (${transitHouse}${getOrdinalSuffix(transitHouse)} house)`,
        `Natural flow of support from ${transitArea} enhancing your ${natalArea}`,
        `Doors opening in ${transitArea} that complement your natural approach to ${natalArea}`
      );
    } else {
      manifestations.push(
        `New beginnings in how ${transitArea} (${transitHouse}${getOrdinalSuffix(transitHouse)} house) relates to your ${natalArea} (${natalHouse}${getOrdinalSuffix(natalHouse)} house)`,
        `Intense focus bringing ${transitArea} matters into alignment with your ${natalArea} patterns`,
        `Fresh start in this area with concentrated energy`
      );
    }
  }

  return manifestations;
}

// Generate natal-to-transit house-specific manifestations
function getNatalToTransitHouseManifestations(
  natalPlanet: string,
  natalHouse: number,
  transitPlanet: string,
  transitHouse: number,
  aspectType: string
): string[] {
  const manifestations: string[] = [];
  const isHard = aspectType === 'Square' || aspectType === 'Opposition';
  const isEasy = aspectType === 'Trine' || aspectType === 'Sextile';

  // Determine if transiting planet is outer planet for timeframe context
  const outerPlanets = ['Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
  const isOuterPlanetTransit = outerPlanets.includes(transitPlanet);

  // Sort houses for consistent lookups
  const houses = [natalHouse, transitHouse].sort((a, b) => a - b);

  // Example: Natal planet in 1st being activated by transit in 7th
  // Manifestations describe how natal 1st house themes COLOR the 7th house transit events
  if ((natalHouse === 1 && transitHouse === 7) || (natalHouse === 7 && transitHouse === 1)) {
    if (isOuterPlanetTransit) {
      if (isHard) {
        manifestations.push(
          'Your core identity and sense of self will be challenged through partnerships over coming months',
          'Relationships will force you to examine who you truly are vs who you pretend to be for others',
          'Long-term pattern: partners trigger insecurities about your autonomy and independence',
          'You will need to develop stronger sense of self while remaining open to partnership'
        );
      } else {
        manifestations.push(
          'Partnerships will support your personal growth and authentic self-expression over time',
          'You will attract people who help you become more fully yourself',
          'Long-term pattern: relationships enhance rather than threaten your identity',
          'Learning to be powerfully yourself within committed partnerships'
        );
      }
    } else {
      if (isHard) {
        manifestations.push(
          'Partner will criticize something about your personality or appearance today/this week',
          'You will feel torn between asserting yourself and keeping the peace with someone',
          'Compromise feels like losing yourself - struggle between "me" and "we"',
          'Someone will ask you to change in a way that feels inauthentic'
        );
      } else {
        manifestations.push(
          'Partner or close associate will validate and support who you are',
          'You will feel confident being yourself in relationship or partnership context',
          'Easy balance between independence and togetherness right now',
          'Someone sees and appreciates your authentic self'
        );
      }
    }
  }

  // Additional key natal-to-transit house combinations
  // (Adding just a few key examples - can expand based on which are most important)

  else if ((natalHouse === 2 && transitHouse === 8) || (natalHouse === 8 && transitHouse === 2)) {
    if (isHard) {
      manifestations.push(
        'Your personal values about money clash with partner\'s financial approach or shared resources',
        'What you earn independently will be challenged by debts, taxes, or joint financial obligations',
        'Natal self-worth issues surface when dealing with other people\'s money or resources',
        'You will resist financial intimacy or sharing because it threatens your security'
      );
    } else {
      manifestations.push(
        'Your natural money management skills benefit shared finances or partner\'s resources',
        'What you value personally aligns with opportunities in investments or joint ventures',
        'Your earned income opens doors to leverage through loans, credit, or partner contributions',
        'Financial intimacy and resource sharing feel natural and beneficial'
      );
    }
  }

  else if ((natalHouse === 4 && transitHouse === 10) || (natalHouse === 10 && transitHouse === 4)) {
    if (isHard) {
      manifestations.push(
        'Your family background or private life will conflict with career demands or public image',
        'Emotional needs from natal home/family setup clash with professional responsibilities',
        'What you learned about authority from parents conflicts with current boss or career path',
        'You will feel divided between being there for family and advancing professionally'
      );
    } else {
      manifestations.push(
        'Your family background and emotional foundation support career advancement',
        'What you learned at home gives you advantage in professional or public sphere',
        'Emotional security from natal family setup allows you to take career risks',
        'Private support system enables public success and recognition'
      );
    }
  }

  else if ((natalHouse === 5 && transitHouse === 11) || (natalHouse === 11 && transitHouse === 5)) {
    if (isHard) {
      manifestations.push(
        'Your creative self-expression or romantic style conflicts with group expectations',
        'What brings you personal joy doesn\'t fit with friend group\'s interests or values',
        'Natal need for special attention clashes with egalitarian group dynamics',
        'You will feel pressure to suppress playful self to fit in socially'
      );
    } else {
      manifestations.push(
        'Your creative talents and joyful expression are celebrated by friend group',
        'What you enjoy doing for fun connects you with like-minded community',
        'Natal creativity finds perfect audience through social networks or groups',
        'Friends support and encourage your romantic life and self-expression'
      );
    }
  }

  else if ((natalHouse === 6 && transitHouse === 12) || (natalHouse === 12 && transitHouse === 6)) {
    if (isHard) {
      manifestations.push(
        'Your daily work routine and health practices trigger hidden anxieties or unconscious patterns',
        'Natal perfectionism or service orientation leads to burnout and need for escape',
        'Work stress manifests as psychosomatic illness or mental health struggles',
        'You will sabotage own productivity through procrastination or self-undoing'
      );
    } else {
      manifestations.push(
        'Your daily routine naturally incorporates spiritual practice or time for solitude',
        'Work involving healing, hospitals, or behind-the-scenes service feels fulfilling',
        'Natal organizational skills benefit meditation practice or retreat experience',
        'Healthy daily habits support spiritual growth and subconscious healing'
      );
    }
  }

  // When natal and transit are in SAME house - amplification
  else if (natalHouse === transitHouse) {
    if (isHard) {
      manifestations.push(
        'Natal sensitivities in this life area are being strongly triggered right now',
        'Old wounds or patterns from your birth chart are reactivated and demanding attention',
        'You cannot avoid issues in this area - the universe is forcing you to deal with them',
        'This transit intensifies what was already a significant theme in your natal chart'
      );
    } else {
      manifestations.push(
        'Your natal strengths in this area are being supported and enhanced',
        'What you came into this life to develop here is flowing beautifully right now',
        'This transit validates and reinforces positive patterns from your birth chart',
        'Opportunities align perfectly with your natural talents and life purpose in this area'
      );
    }
  }

  return manifestations;
}

function getAdvice(aspectType: string, natalPlanet: string, transitPlanet: string): string {
  const adviceMap: Record<string, string> = {
    'Conjunction': 'Embrace the intensity and focus the merged energies constructively. This is a time of new beginnings in this area.',
    'Opposition': 'Seek balance and integration rather than choosing sides. The external situation is reflecting something within.',
    'Trine': 'Take advantage of the opportunities flowing your way, but don\'t become complacent. Easy energy still needs direction.',
    'Square': 'Use the friction as motivation for growth. The challenge is pushing you to evolve and take action.',
    'Sextile': 'Actively reach for the opportunities this aspect offers. They won\'t force themselves on you, but they\'re available.'
  };

  return adviceMap[aspectType] || 'Pay attention to how these energies interact and what they\'re teaching you.';
}

// Average daily motion for planets (degrees per day)
const PLANET_SPEEDS: Record<string, number> = {
  'Sun': 1.0,          // ~1° per day
  'Moon': 13.2,        // ~13° per day
  'Mercury': 1.4,      // ~0.5-2° per day (average 1.4)
  'Venus': 1.2,        // ~0.5-1.6° per day (average 1.2)
  'Mars': 0.6,         // ~0.3-0.8° per day (average 0.6)
  'Jupiter': 0.08,     // ~0.08° per day
  'Saturn': 0.03,      // ~0.03° per day
  'Uranus': 0.01,      // ~0.01° per day
  'Neptune': 0.006,    // ~0.006° per day
  'Pluto': 0.004       // ~0.004° per day
};

// Maximum orb for each aspect type
const ASPECT_ORBS: Record<string, number> = {
  'Conjunction': 8,
  'Opposition': 8,
  'Trine': 8,
  'Square': 8,
  'Sextile': 6
};

// Orbital periods (years to complete one full orbit around the Sun)
const ORBITAL_PERIODS: Record<string, number> = {
  'Moon': 0.0748,      // ~27.3 days
  'Mercury': 0.24,     // 88 days
  'Venus': 0.615,      // 225 days
  'Sun': 1.0,          // 1 year (Earth's orbit)
  'Mars': 1.88,        // 1.88 years
  'Jupiter': 11.86,    // 11.86 years
  'Saturn': 29.46,     // 29.46 years
  'Uranus': 84.01,     // 84.01 years
  'Neptune': 164.79,   // 164.79 years
  'Pluto': 248.09      // 248.09 years
};

// Calculate how often two planets form the same aspect type
function calculateAspectFrequency(planet1: string, planet2: string, aspectType: string): string {
  const period1 = ORBITAL_PERIODS[planet1] || 1;
  const period2 = ORBITAL_PERIODS[planet2] || 1;

  // Synodic period: how often two planets return to the same relative position
  // Formula: 1 / |1/P1 - 1/P2| where P1 and P2 are orbital periods
  let synodicPeriod: number;

  if (period1 === period2) {
    synodicPeriod = period1; // Same planet or same period
  } else {
    synodicPeriod = 1 / Math.abs(1/period1 - 1/period2);
  }

  // Different aspect types occur at different intervals
  // Conjunction = once per synodic period
  // Opposition, square, trine, sextile = multiple times per synodic period
  let occurrencesPerCycle = 1;

  if (aspectType === 'Conjunction') {
    occurrencesPerCycle = 1;
  } else if (aspectType === 'Opposition') {
    occurrencesPerCycle = 1; // Once per synodic cycle
  } else if (aspectType === 'Trine') {
    occurrencesPerCycle = 3; // Three trine points in cycle
  } else if (aspectType === 'Square') {
    occurrencesPerCycle = 2; // Two square points in cycle (waxing and waning)
  } else if (aspectType === 'Sextile') {
    occurrencesPerCycle = 2; // Two sextile points in cycle
  }

  const frequencyInYears = synodicPeriod / occurrencesPerCycle;

  // Generate frequency description
  if (frequencyInYears < 0.1) { // Less than ~36 days
    const days = Math.round(frequencyInYears * 365);
    return `Very frequent - occurs approximately every ${days} days`;
  } else if (frequencyInYears < 0.5) { // Less than 6 months
    const months = Math.round(frequencyInYears * 12);
    return `Frequent - occurs approximately every ${months} month${months > 1 ? 's' : ''}`;
  } else if (frequencyInYears < 2) {
    const months = Math.round(frequencyInYears * 12);
    return `Fairly common - occurs approximately every ${months} months`;
  } else if (frequencyInYears < 5) {
    return `Moderately rare - occurs approximately every ${frequencyInYears.toFixed(1)} years`;
  } else if (frequencyInYears < 15) {
    return `Rare - occurs approximately every ${Math.round(frequencyInYears)} years`;
  } else if (frequencyInYears < 40) {
    return `Very rare - occurs approximately every ${Math.round(frequencyInYears)} years (about once per generation)`;
  } else {
    return `Extremely rare - occurs approximately every ${Math.round(frequencyInYears)} years (multiple generations)`;
  }
}

// Calculate transit duration based on planetary speeds and orb
function calculateTransitDuration(planet1: string, planet2: string, aspectType: string, currentOrb: number): string {
  const speed1 = PLANET_SPEEDS[planet1] || 0.5;
  const speed2 = PLANET_SPEEDS[planet2] || 0.5;
  const maxOrb = ASPECT_ORBS[aspectType] || 8;

  // Combined relative speed (how fast they separate)
  const relativeSpeed = speed1 + speed2;

  // Days remaining until aspect goes out of orb
  const remainingOrb = maxOrb - currentOrb;
  const daysRemaining = remainingOrb / relativeSpeed;

  // Total duration (entering orb to leaving orb)
  const totalDuration = (maxOrb * 2) / relativeSpeed;

  // Get frequency information
  const frequency = calculateAspectFrequency(planet1, planet2, aspectType);

  // Format duration description
  let durationText = '';

  if (totalDuration < 1) {
    durationText = `This aspect lasts approximately ${Math.round(totalDuration * 24)} hours total. Currently at ${currentOrb.toFixed(1)}° orb, it will be exact soon and fade within hours.`;
  } else if (totalDuration < 3) {
    durationText = `This aspect lasts approximately ${Math.round(totalDuration)} days total. Currently at ${currentOrb.toFixed(1)}° orb, you have about ${Math.round(daysRemaining)} day(s) remaining in this influence.`;
  } else if (totalDuration < 14) {
    durationText = `This aspect lasts approximately ${Math.round(totalDuration)} days total (about ${Math.round(totalDuration / 7)} week${totalDuration >= 14 ? 's' : ''}). Currently at ${currentOrb.toFixed(1)}° orb.`;
  } else if (totalDuration < 60) {
    const weeks = Math.round(totalDuration / 7);
    durationText = `This aspect lasts approximately ${weeks} weeks total. Currently at ${currentOrb.toFixed(1)}° orb. This is a longer-term influence with ${planet1 === 'Jupiter' || planet1 === 'Saturn' || planet2 === 'Jupiter' || planet2 === 'Saturn' ? 'outer planets' : 'slower-moving planets'}.`;
  } else if (totalDuration < 365) {
    const months = Math.round(totalDuration / 30);
    durationText = `This aspect lasts approximately ${months} month${months > 1 ? 's' : ''} total. Currently at ${currentOrb.toFixed(1)}° orb. This is an extended influence involving slow-moving outer planets.`;
  } else {
    const years = (totalDuration / 365).toFixed(1);
    durationText = `This aspect lasts approximately ${years} year${parseFloat(years) > 1 ? 's' : ''} total. Currently at ${currentOrb.toFixed(1)}° orb. This is a generational influence with outer planets that will shape long-term themes.`;
  }

  return `${durationText}\n\n**Frequency:** ${frequency}. This context helps you understand whether this is a common passing influence or a special moment to pay close attention to.`;
}

// NEW: Generate interpretation for transit-to-transit aspects (Active Aspects)
export function generateTransitToTransitInterpretation(
  planet1: string,
  house1: number,
  planet2: string,
  house2: number,
  aspectType: string,
  orb: number
): {
  planet1Energy: string;
  planet2Energy: string;
  aspectMeaning: string;
  manifestations: string[];
  fullInterpretation: string;
} {
  // Get planet energies
  const planet1Energy = PLANET_ENERGIES[planet1] || { core: 'energy', keywords: [] };
  const planet2Energy = PLANET_ENERGIES[planet2] || { core: 'energy', keywords: [] };

  // Get house meanings
  const house1Meaning = HOUSE_MEANINGS[house1] || { area: 'life area', keywords: [] };
  const house2Meaning = HOUSE_MEANINGS[house2] || { area: 'life area', keywords: [] };

  // Get aspect interpretation
  const aspectInfo = ASPECT_INTERPRETATIONS[aspectType] || {
    energy: 'interaction',
    flow: 'creates an effect',
    challenge: 'May require adjustment'
  };

  // Calculate transit duration
  const durationInfo = calculateTransitDuration(planet1, planet2, aspectType, orb);

  // Build planet energy descriptions
  const p1EnergyDesc = `Transit ${planet1} in your ${house1}${getOrdinalSuffix(house1)} house represents ${planet1Energy.core} actively working through the area of ${house1Meaning.area}. This brings themes of ${house1Meaning.keywords.slice(0, 3).join(', ')}.`;

  const p2EnergyDesc = `Transit ${planet2} in your ${house2}${getOrdinalSuffix(house2)} house represents ${planet2Energy.core} actively working through the area of ${house2Meaning.area}. This brings themes of ${house2Meaning.keywords.slice(0, 3).join(', ')}.`;

  // Build aspect meaning
  const aspectMeaning = `The ${aspectType.toLowerCase()} aspect (${orb.toFixed(1)}° orb) between these transiting planets creates ${aspectInfo.energy}. ${aspectInfo.flow}. ${aspectInfo.challenge || 'This aspect offers growth opportunities.'}`;

  // Get specific manifestations for this transit-to-transit combination
  const specificManifestations = getTransitToTransitManifestations(
    planet1,
    house1,
    planet2,
    house2,
    aspectType
  );

  // Build full interpretation
  const fullInterpretation = `
**Active Transit Aspect:**
This is a transit-to-transit aspect, meaning both planets are currently moving through your chart. This creates an "active" or "live" cosmic weather pattern affecting you right now.

**${planet1} Energy:**
${p1EnergyDesc}

**${planet2} Energy:**
${p2EnergyDesc}

**The ${aspectType} Dynamic:**
${aspectMeaning}

**Duration & Timing:**
${durationInfo}

**How This May Manifest in Your Life:**
The conversation between transiting ${planet1} (${planet1Energy.keywords.slice(0, 2).join(', ')}) in your ${house1}${getOrdinalSuffix(house1)} house and transiting ${planet2} (${planet2Energy.keywords.slice(0, 2).join(', ')}) in your ${house2}${getOrdinalSuffix(house2)} house through a ${aspectType.toLowerCase()} creates current energies connecting ${house1Meaning.area} with ${house2Meaning.area}.

**Possible Manifestations - What You Might Experience:**
${specificManifestations.map(m => `• ${m}`).join('\n')}

**Working With This Active Aspect:**
${getAdvice(aspectType, planet1, planet2)}

This is a temporary influence that will pass as the planets move apart. Pay attention to the themes that arise during this time, as they offer insights into how these areas of life currently interact.
  `.trim();

  return {
    planet1Energy: p1EnergyDesc,
    planet2Energy: p2EnergyDesc,
    aspectMeaning,
    manifestations: specificManifestations,
    fullInterpretation
  };
}

// Generate manifestations for transit-to-transit aspects
function getTransitToTransitManifestations(
  planet1: string,
  house1: number,
  planet2: string,
  house2: number,
  aspectType: string
): string[] {
  const manifestations: string[] = [];

  // Get aspect quality
  const isHard = aspectType === 'Square' || aspectType === 'Opposition';
  const isEasy = aspectType === 'Trine' || aspectType === 'Sextile';
  const isConjunction = aspectType === 'Conjunction';

  // Planet pair specific manifestations
  const pairKey = `${planet1}-${planet2}`;
  const reversePairKey = `${planet2}-${planet1}`;

  // SUN-MOON aspects: LUNATIONS - Will vs Emotions, Conscious vs Unconscious
  if ((planet1 === 'Sun' && planet2 === 'Moon') || (planet1 === 'Moon' && planet2 === 'Sun')) {
    if (isConjunction) {
      // NEW MOON - Fresh starts, planting seeds
      manifestations.push(
        '🌑 NEW MOON - Powerful new beginning aligned with this month\'s zodiac energy',
        'Setting intentions for the lunar cycle ahead - what do you want to grow?',
        'Feeling emotionally aligned with your purpose and goals',
        'Inner clarity about what truly matters to you right now',
        'Fresh start in balancing masculine/feminine, doing/being energies',
        'Meeting someone new who feels significant or fated',
        'Beginning a project or relationship that will unfold over next 28 days',
        'Planting seeds (literal or metaphorical) for future harvest'
      );
    } else if (aspectType === 'Opposition') {
      // FULL MOON - Culmination, revelation, release
      manifestations.push(
        '🌕 FULL MOON - Peak illumination revealing what\'s been hidden in shadows',
        'Emotional climax or breakthrough - feelings reach maximum intensity',
        'Relationship dynamics become crystal clear - seeing truth of situation',
        'Completion or harvest of what began at last new moon',
        'Tension between what you want vs what you need coming to a head',
        'Public recognition or exposure - being seen fully by others',
        'Release and letting go of what no longer serves your path',
        'Celebrating achievements or mourning losses with emotional honesty'
      );
    } else if (isHard) {
      // Quarter moons - action, decision, tension
      manifestations.push(
        'Tension between head and heart - logic says one thing, feelings another',
        'Family responsibilities conflicting with personal goals',
        'Emotional mood swings affecting your energy and confidence',
        'Difficulty balancing work demands with need for rest and comfort',
        'Inner conflict about what you want vs what makes you feel safe',
        'Mother figure or home situation requiring attention when you\'re busy',
        'Feeling pulled between public image and private emotional needs',
        'Past emotional patterns surfacing, disrupting current plans'
      );
    } else {
      // Harmonious aspects - flow, integration
      manifestations.push(
        'Emotions and intentions aligned - what you feel matches what you want',
        'Easy connection with women, mother figures, or nurturing people',
        'Comfortable in your own skin, authentic self-expression flows',
        'Home life supports your personal goals and ambitions',
        'Intuition guides decision-making with clarity and confidence',
        'Family or domestic activities bring joy rather than drain energy',
        'Public image reflects genuine inner emotional reality',
        'Balance between taking action and allowing things to unfold naturally'
      );
    }
  }

  // SUN-MERCURY aspects: Identity meets Communication, Will meets Mind
  if ((planet1 === 'Sun' && planet2 === 'Mercury') || (planet1 === 'Mercury' && planet2 === 'Sun')) {
    // Note: Sun-Mercury can only make conjunctions in reality (max separation ~28°)
    // But we include other aspects for theoretical completeness
    if (isConjunction) {
      manifestations.push(
        'Mental clarity and ability to articulate who you are and what you want',
        'Important conversations where you speak your truth confidently',
        'Writing or communication project that expresses your authentic self',
        'Learning something that shifts your sense of identity or purpose',
        'Being heard and understood in important discussions',
        'Signing documents, making decisions that align with your values',
        'Teaching or sharing knowledge that comes from personal experience',
        'Mind and will aligned - thinking clearly about your direction'
      );
    } else {
      manifestations.push(
        'Communicating about yourself, your goals, or your identity',
        'Mental focus on personal development and self-understanding',
        'Conversations that help clarify who you are and what you want',
        'Learning experiences that enhance self-confidence',
        'Writing or speaking about personal experiences',
        'Making plans that reflect your authentic desires',
        'Clear thinking about your path forward',
        'Networking or social connections that support your goals'
      );
    }
  }

  // MOON-MERCURY aspects: Emotions meet Mind, Feelings meet Communication
  if ((planet1 === 'Moon' && planet2 === 'Mercury') || (planet1 === 'Mercury' && planet2 === 'Moon')) {
    if (isHard) {
      manifestations.push(
        'Emotional conversations that become more charged than intended',
        'Overthinking your feelings, analyzing rather than just feeling',
        'Miscommunication with family members or women',
        'Anxiety from mental chatter about worries and concerns',
        'Difficulty expressing emotions in words - feeling misunderstood',
        'Nostalgic thoughts bringing up old memories and emotions',
        'Restless mind preventing relaxation or sleep',
        'Saying something you regret in an emotional moment'
      );
    } else {
      manifestations.push(
        'Heart-to-heart conversations that bring emotional relief',
        'Journaling or writing about feelings provides clarity',
        'Talking with family, roommates, or close friends flows easily',
        'Emotional intelligence helps navigate social situations',
        'Intuitive insights coming through dreams or quiet reflection',
        'Comforting phone calls or messages with loved ones',
        'Learning about emotional patterns, psychology, or self-care',
        'Expressing feelings through words creates deeper connection'
      );
    }
  }

  // MOON-VENUS aspects: Emotions meet Love, Comfort meets Pleasure
  if ((planet1 === 'Moon' && planet2 === 'Venus') || (planet1 === 'Venus' && planet2 === 'Moon')) {
    if (isHard) {
      manifestations.push(
        'Emotional eating or spending to comfort yourself',
        'Feeling needy in relationships, wanting more affection than usual',
        'Financial worry about home, family, or security needs',
        'Comparing your life to others on social media, feeling inadequate',
        'Conflict between what you want and what makes you feel safe',
        'Mother or female family member triggering relationship issues',
        'Overindulgence in comfort foods, shopping, or avoiding responsibilities',
        'Seeking external validation when inner security is what you need'
      );
    } else {
      manifestations.push(
        'Feeling emotionally nurtured by someone you love',
        'Enjoying comfort foods, cozy home time, or self-care rituals',
        'Beautiful domestic activities - decorating, cooking, hosting',
        'Receiving gifts, affection, or kind gestures that touch your heart',
        'Harmonious time with women, family, or close friends',
        'Feeling attractive and comfortable in your body',
        'Creating beauty or art that comes from emotional authenticity',
        'Financial comfort supporting emotional security'
      );
    }
  }

  // MOON-MARS aspects: Emotions meet Action, Sensitivity meets Aggression
  if ((planet1 === 'Moon' && planet2 === 'Mars') || (planet1 === 'Mars' && planet2 === 'Moon')) {
    if (isHard) {
      manifestations.push(
        'Emotional reactivity - snapping at people over small things',
        'Family arguments, especially with women or about home issues',
        'Feeling defensive or overly protective of loved ones',
        'Impatience with emotional processes, wanting to act NOW',
        'Domestic accidents or injuries from rushing at home',
        'Angry outbursts fueled by old emotional wounds',
        'Difficulty containing feelings - emotions burst out impulsively',
        'Conflict between need for security vs desire for independence'
      );
    } else {
      manifestations.push(
        'Taking action on home projects, organizing, or cleaning with energy',
        'Asserting emotional boundaries in healthy, clear ways',
        'Courage to express vulnerable feelings honestly',
        'Physical activity that releases emotional tension productively',
        'Protecting and defending family or people you care about',
        'Making decisive moves based on gut feelings and intuition',
        'Passionate emotional experiences that feel alive and real',
        'Initiative to improve home life or family dynamics'
      );
    }
  }

  // SUN-MARS aspects: Action, willpower, ego vs drive
  if ((planet1 === 'Sun' && planet2 === 'Mars') || (planet1 === 'Mars' && planet2 === 'Sun')) {
    if (isHard) {
      manifestations.push(
        'Feeling impatient, irritable, or easily angered - short fuse with people',
        'Impulsive decisions or actions that you later regret',
        'Conflict with authority figures, bosses, or father figures',
        'Competitive situations at work or in daily life',
        'Accidents or injuries from rushing, not paying attention',
        'Arguments where ego clashes with what you want to do',
        'Feeling blocked from taking action on important goals',
        'Energy scattered in too many directions, burnout from overexertion'
      );
    } else {
      manifestations.push(
        'Surge of confidence and ability to take bold action on goals',
        'Successfully asserting yourself in challenging situations',
        'Physical energy peak - great time for exercise, sports, projects',
        'Courage to start new ventures or make decisive moves',
        'Leadership opportunities where you shine and inspire others',
        'Productive action on creative projects or personal initiatives',
        'Winning in competitive situations through skill and determination',
        'Alignment between who you are and what you\'re doing'
      );
    }
  }

  // VENUS-JUPITER aspects: Love/money expansion, luck, pleasure
  if ((planet1 === 'Venus' && planet2 === 'Jupiter') || (planet1 === 'Jupiter' && planet2 === 'Venus')) {
    if (isHard) {
      manifestations.push(
        'Overspending on luxury items, fun, or gifts - exceeding budget',
        'Overindulgence in food, drink, or pleasure - feeling excessive',
        'Promising more than you can deliver in relationships',
        'Financial optimism that ignores practical reality',
        'Relationship expectations too high, disappointment when reality doesn\'t match',
        'Social obligations that drain rather than energize',
        'Weight gain from enjoying food and drink too freely',
        'Laziness or avoidance of work in favor of pleasure'
      );
    } else {
      manifestations.push(
        'Unexpected money, gifts, or financial windfalls',
        'Meeting someone special through social events or travel',
        'Enjoyable social gatherings, parties, celebrations',
        'Feeling generous, lucky, and attractive',
        'Creative projects flourish with abundance of inspiration',
        'Relationship deepens with joy, laughter, shared experiences',
        'Successful negotiations, deals, or financial agreements',
        'Travel for pleasure or romantic getaway'
      );
    }
  }

  // MERCURY-SATURN aspects: Communication meets structure/limitation
  if ((planet1 === 'Mercury' && planet2 === 'Saturn') || (planet1 === 'Saturn' && planet2 === 'Mercury')) {
    if (isHard) {
      manifestations.push(
        'Negative self-talk, pessimistic thoughts, mental heaviness',
        'Communication blocked - emails not returned, conversations stalled',
        'Criticism of your ideas from authority figures or mentors',
        'Writer\'s block, difficulty expressing thoughts clearly',
        'Bad news or disappointing information received',
        'Feeling mentally slow, struggling to concentrate or learn',
        'Important conversations feel heavy, serious, or depressing',
        'Technology failures, delays in travel or commuting'
      );
    } else {
      manifestations.push(
        'Mental clarity for serious planning, organizing, strategizing',
        'Successful completion of complex writing or communication project',
        'Productive conversations with mentors, bosses, or authority figures',
        'Ability to focus deeply on studying, research, or detailed work',
        'Making realistic plans that account for limitations',
        'Receiving constructive feedback that improves your work',
        'Signing contracts, agreements, or formalizing commitments',
        'Patience and discipline in learning new skills or subjects'
      );
    }
  }

  // MARS-SATURN aspects: Drive meets restriction
  if ((planet1 === 'Mars' && planet2 === 'Saturn') || (planet1 === 'Saturn' && planet2 === 'Mars')) {
    if (isHard) {
      manifestations.push(
        'Frustration from delays, obstacles blocking your progress',
        'Feeling like you\'re working hard but getting nowhere',
        'Authority figures blocking or criticizing your actions',
        'Physical energy low, chronic fatigue or illness',
        'Anger that must be suppressed or controlled',
        'Responsibilities limiting your freedom to act',
        'Fear of taking action, paralyzed by "what if" scenarios',
        'Accidents or injuries from fatigue or pushing too hard'
      );
    } else {
      manifestations.push(
        'Disciplined action produces lasting results',
        'Successfully completing difficult or long-term projects',
        'Endurance and stamina to work through challenges',
        'Respect from authority figures for your work ethic',
        'Strategic action rather than impulsive - thinking before acting',
        'Building something solid through patient, consistent effort',
        'Taking responsibility and following through on commitments',
        'Mature handling of conflicts or competitive situations'
      );
    }
  }

  // SUN-VENUS aspects: Identity meets love/pleasure/values
  if ((planet1 === 'Sun' && planet2 === 'Venus') || (planet1 === 'Venus' && planet2 === 'Sun')) {
    manifestations.push(
      'Feeling attractive, confident, and magnetic to others',
      'Enjoyable social interactions, compliments, positive attention',
      'Creative self-expression flows naturally',
      'Harmony in relationships, easy connection with others',
      'Treating yourself to something beautiful or pleasurable',
      'Meeting new people through activities you enjoy',
      'Recognition or appreciation for your talents or appearance',
      'Alignment between who you are and what you value'
    );
  }

  // MERCURY-VENUS aspects: Communication meets love/beauty
  if ((planet1 === 'Mercury' && planet2 === 'Venus') || (planet1 === 'Venus' && planet2 === 'Mercury')) {
    manifestations.push(
      'Charming, diplomatic communication - words flow gracefully',
      'Romantic texts, messages, or love letters exchanged',
      'Artistic or creative writing inspiration',
      'Pleasant conversations, negotiations, or agreements',
      'Compliments given and received easily',
      'Shopping for beautiful items, art, or aesthetically pleasing things',
      'Learning about art, music, relationships, or beauty topics',
      'Social media engagement, positive online interactions'
    );
  }

  // MERCURY-MARS aspects: Communication meets action/aggression
  if ((planet1 === 'Mercury' && planet2 === 'Mars') || (planet1 === 'Mars' && planet2 === 'Mercury')) {
    if (isHard) {
      manifestations.push(
        'Arguments, heated debates, sharp words exchanged',
        'Impulsive emails or texts sent in anger that you regret',
        'Mental restlessness, difficulty sitting still or focusing',
        'Aggressive or defensive communication style',
        'Traffic incidents, road rage, commuting frustrations',
        'Hasty decisions made without thinking through consequences',
        'Criticism delivered too harshly, hurting feelings',
        'Mental exhaustion from overthinking or worrying'
      );
    } else {
      manifestations.push(
        'Quick thinking, sharp wit, persuasive communication',
        'Successfully debating or defending your position',
        'Productive multitasking, getting lots done efficiently',
        'Courage to speak up, say what needs to be said',
        'Writing or communication project completed quickly',
        'Strategic planning with decisive action steps',
        'Learning new skills or information rapidly',
        'Assertive but respectful conversations that move things forward'
      );
    }
  }

  // JUPITER-SATURN aspects: Expansion meets contraction
  if ((planet1 === 'Jupiter' && planet2 === 'Saturn') || (planet1 === 'Saturn' && planet2 === 'Jupiter')) {
    manifestations.push(
      'Balancing optimism with realism in planning',
      'Long-term growth through disciplined effort',
      'Opportunities that require serious commitment',
      'Wisdom gained from experience and maturity',
      'Building sustainable success rather than quick wins',
      'Mentor or teacher relationship with authority figure',
      'Philosophical perspective on limitations and challenges',
      'Structured expansion - growth within boundaries'
    );
  }

  // Add house-specific manifestations (3-4 concrete examples)
  const houseManifestations = getHouseSpecificManifestations(planet1, house1, planet2, house2, aspectType);
  manifestations.push(...houseManifestations);

  // If no specific manifestations, add generic ones based on houses
  if (manifestations.length === 0) {
    const house1Meaning = HOUSE_MEANINGS[house1] || { area: 'life area', keywords: [] };
    const house2Meaning = HOUSE_MEANINGS[house2] || { area: 'life area', keywords: [] };

    if (isHard) {
      manifestations.push(
        `Tension between ${house1Meaning.area} (${house1}${getOrdinalSuffix(house1)} house) and ${house2Meaning.area} (${house2}${getOrdinalSuffix(house2)} house)`,
        `Challenges requiring you to balance priorities in these two life areas`,
        `External events forcing adjustment between these competing demands`,
        `Growth opportunity through resolving this dynamic tension`
      );
    } else if (isEasy) {
      manifestations.push(
        `Harmonious flow between ${house1Meaning.area} (${house1}${getOrdinalSuffix(house1)} house) and ${house2Meaning.area} (${house2}${getOrdinalSuffix(house2)} house)`,
        `Opportunities connecting these life areas naturally`,
        `Support from one area enhancing the other`,
        `Ease in integrating these parts of your life`
      );
    } else {
      manifestations.push(
        `New beginning connecting ${house1Meaning.area} and ${house2Meaning.area}`,
        `Intense focus bringing these areas into alignment`,
        `Fresh start in how these life areas relate`,
        `Concentrated energy for initiating change in both areas`
      );
    }
  }

  return manifestations;
}

// Generate house-specific manifestations with concrete daily examples
function getHouseSpecificManifestations(
  planet1: string,
  house1: number,
  planet2: string,
  house2: number,
  aspectType: string
): string[] {
  const manifestations: string[] = [];
  const isHard = aspectType === 'Square' || aspectType === 'Opposition';
  const isEasy = aspectType === 'Trine' || aspectType === 'Sextile';

  // Determine if we're dealing with outer planets (long-term) vs inner planets (short-term)
  const outerPlanets = ['Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
  const isOuterPlanetTransit = outerPlanets.includes(planet1) || outerPlanets.includes(planet2);

  // Ensure we're working with the houses in a consistent order for lookups
  const houses = [house1, house2].sort((a, b) => a - b);
  const houseKey = `${houses[0]}-${houses[1]}`;

  // Common house combination patterns with concrete examples
  // For outer planets: Long-term life changes, patterns, and transformation
  // For inner planets: Immediate events, daily manifestations

  // 1st-7th house axis (Self vs Others, Identity vs Relationships)
  if ((house1 === 1 && house2 === 7) || (house1 === 7 && house2 === 1)) {
    if (isOuterPlanetTransit) {
      // Long-term outer planet manifestations
      if (isHard) {
        manifestations.push(
          'Over coming months/years, you will undergo identity transformation that challenges all close relationships',
          'Long-term pattern emerges where your need for independence conflicts with partnership commitments',
          'You will attract relationships that mirror what you need to develop in yourself',
          'Partnership will undergo major restructuring as you both evolve into different people'
        );
      } else {
        manifestations.push(
          'Over coming months/years, relationships will support and enhance your personal evolution',
          'You will attract partners and collaborators who see and celebrate your authentic self',
          'Long-term relationship patterns shift toward healthier balance of independence and togetherness',
          'Partnerships formed now will be significant, supporting your life path for years'
        );
      }
    } else {
      // Short-term inner planet manifestations
      if (isHard) {
        manifestations.push(
          'Partner complains you\'re being selfish or not considering their needs',
          'Feeling torn between doing what you want vs what your partner/spouse wants',
          'Arguments about "me time" vs "us time" - conflict over independence',
          'Someone criticizes your appearance, style, or way of doing things'
        );
      } else {
        manifestations.push(
          'Partner supports your personal goals and you feel seen and understood',
          'Meeting new people who genuinely appreciate who you are',
          'Collaboration flows easily - you and partner/colleague complement each other',
          'Feeling confident in social settings, making great first impressions'
        );
      }
    }
  }

  // 2nd-8th house axis (Personal resources vs Shared resources, Values vs Transformation)
  else if ((house1 === 2 && house2 === 8) || (house1 === 8 && house2 === 2)) {
    if (isHard) {
      manifestations.push(
        'Fight with partner about money, who pays for what, joint account issues',
        'Tax bill, insurance payment, or debt collection notice arrives',
        'Partner wants to borrow money or use your credit card without asking',
        'Uncomfortable conversation about inheritance, wills, or shared assets'
      );
    } else {
      manifestations.push(
        'Partner pays for dinner/trip unexpectedly, generous gift received',
        'Tax refund, insurance payout, or investment dividend arrives',
        'Successfully negotiating raise by demonstrating your value',
        'Partner helps you declutter, sell unused items, or improve finances'
      );
    }
  }

  // 3rd-9th house axis (Immediate environment vs Broader horizons, Communication vs Philosophy)
  else if ((house1 === 3 && house2 === 9) || (house1 === 9 && house2 === 3)) {
    if (isHard) {
      manifestations.push(
        'Local errands and daily tasks prevent you from taking planned trip',
        'Sibling or neighbor argues with you about political/religious views',
        'Can\'t find time to study for certification because of daily interruptions',
        'Car breaks down on the way to airport or important travel plans disrupted'
      );
    } else {
      manifestations.push(
        'Conversation with neighbor/sibling leads to inspiring new perspective',
        'Short local trip connects to bigger travel opportunity or learning',
        'Successfully explaining complex ideas in simple terms that people understand',
        'Book, podcast, or course you discover locally expands your worldview'
      );
    }
  }

  // 4th-10th house axis (Home/Family vs Career/Public, Private vs Public life)
  else if ((house1 === 4 && house2 === 10) || (house1 === 10 && house2 === 4)) {
    if (isHard) {
      manifestations.push(
        'Boss demands you work late but you promised to be home for family dinner',
        'Family member interrupts important work call or meeting',
        'Parent criticizes your career choice or questions if you\'re successful enough',
        'Feeling exhausted trying to maintain perfect image at work and at home'
      );
    } else {
      manifestations.push(
        'Working from home is productive and you enjoy the flexibility',
        'Family member helps your career through connection or recommendation',
        'Boss understands family obligations, lets you leave early for kid\'s event',
        'Public recognition at work makes family proud - they celebrate with you'
      );
    }
  }

  // 5th-11th house axis (Romance/Creativity vs Friendship/Groups, Personal joy vs Collective goals)
  else if ((house1 === 5 && house2 === 11) || (house1 === 11 && house2 === 5)) {
    if (isHard) {
      manifestations.push(
        'Romantic partner gets jealous of time you spend with friends',
        'Friend group doesn\'t approve of person you\'re dating',
        'Creative project feels like work when you try to make it collaborative',
        'Friends expect you to participate in group activity when you want date night'
      );
    } else {
      manifestations.push(
        'Meeting romantic interest through friend or at group event',
        'Creative project gets support and enthusiasm from friend network',
        'Group activity turns into genuinely fun, playful experience',
        'Friends celebrate your creative success or new romance with excitement'
      );
    }
  }

  // 6th-12th house axis (Daily routine vs Solitude, Service vs Spirituality)
  else if ((house1 === 6 && house2 === 12) || (house1 === 12 && house2 === 6)) {
    if (isHard) {
      manifestations.push(
        'Work stress causes insomnia, anxious dreams, or health issues',
        'Feeling exhausted by daily grind, need to escape but can\'t take time off',
        'Coworker gossips or workplace drama drains your emotional energy',
        'Daily responsibilities prevent meditation, therapy, or spiritual practice'
      );
    } else {
      manifestations.push(
        'Incorporating meditation or yoga into daily morning routine feels natural',
        'Work project benefits from creative visualization or intuitive insight',
        'Peaceful alone time in morning before work sets positive tone for day',
        'Volunteering or helping coworker creates sense of spiritual fulfillment'
      );
    }
  }

  // Career/Authority houses (2nd, 6th, 10th combinations)
  else if ((house1 === 2 && house2 === 10) || (house1 === 10 && house2 === 2)) {
    if (isHard) {
      manifestations.push(
        'Boss denies raise request or promotion comes with less money than expected',
        'Career success requires more money investment than you have',
        'Job offers public recognition but low pay - feeling undervalued',
        'Expensive wardrobe or equipment needed for professional image'
      );
    } else {
      manifestations.push(
        'Raise, bonus, or promotion increases both income and status',
        'Side business or professional skill generates new income stream',
        'Employer reimburses expenses or provides valuable professional training',
        'Your talents and skills get public recognition that leads to financial gain'
      );
    }
  }

  else if ((house1 === 6 && house2 === 10) || (house1 === 10 && house2 === 6)) {
    if (isHard) {
      manifestations.push(
        'Boss piles on extra tasks beyond your job description',
        'Work reputation suffers because of coworker\'s mistakes',
        'Health issues prevent you from pursuing career opportunity',
        'Daily job duties conflict with what leadership publicly says you should do'
      );
    } else {
      manifestations.push(
        'Daily hard work gets noticed by boss, leads to recognition',
        'Organizing and improving workflow earns respect from management',
        'Healthy routine supports career performance - you\'re on your game',
        'Coworker collaboration makes both of you look good to superiors'
      );
    }
  }

  // Relationship houses (5th, 7th, 8th combinations)
  else if ((house1 === 5 && house2 === 7) || (house1 === 7 && house2 === 5)) {
    if (isHard) {
      manifestations.push(
        'Partner feels like a boring obligation, you miss the fun early dating phase',
        'One person wants marriage/commitment, other wants to keep it casual',
        'Partner expects you to be serious when you want to play and have fun',
        'Flirtation with someone new creates tension in existing partnership'
      );
    } else {
      manifestations.push(
        'Date night with partner brings back romantic spark and playfulness',
        'Casual dating relationship naturally progresses to commitment',
        'Partner supports your creative hobbies and celebrates your joy',
        'Romantic partner becomes collaborative partner in creative project'
      );
    }
  }

  else if ((house1 === 5 && house2 === 8) || (house1 === 8 && house2 === 5)) {
    if (isHard) {
      manifestations.push(
        'Romantic interest has too much emotional baggage or drama',
        'Fun dating turns intense too fast - they want deep commitment immediately',
        'Creative project touches dark themes that make you uncomfortable',
        'Gambling, risky speculation, or excessive spending on pleasure causes stress'
      );
    } else {
      manifestations.push(
        'Casual romance deepens into profound intimate connection',
        'Creative expression helps process and heal emotional wounds',
        'Investment in hobby or pleasure generates unexpected financial return',
        'Playful exploration leads to transformative self-discovery'
      );
    }
  }

  else if ((house1 === 7 && house2 === 8) || (house1 === 8 && house2 === 7)) {
    if (isHard) {
      manifestations.push(
        'Partner hides money, debts, or financial issues from you',
        'Argument about sex, intimacy, or emotional vulnerability in relationship',
        'Partner\'s family drama or inheritance issues affect your relationship',
        'Trust issues surface - feeling partner is keeping secrets'
      );
    } else {
      manifestations.push(
        'Deep intimate conversation with partner creates stronger bond',
        'Successfully merging finances, opening joint account, or big purchase together',
        'Partner supports you through difficult emotional healing or therapy',
        'Sexual intimacy deepens along with emotional connection'
      );
    }
  }

  // Communication/Learning houses (3rd, 9th combinations with others)
  else if ((house1 === 3 && house2 === 5) || (house1 === 5 && house2 === 3)) {
    if (isHard) {
      manifestations.push(
        'Writer\'s block or creative ideas won\'t translate into words',
        'Local gossip or sibling drama interferes with romantic plans',
        'Can\'t get to date/event because of car trouble or transport issues',
        'Romantic text messages get misunderstood, awkward communication'
      );
    } else {
      manifestations.push(
        'Witty, charming conversation flows easily on dates',
        'Creative writing, blogging, or social media posts get enthusiastic response',
        'Flirty texts and messages build romantic anticipation',
        'Short local trip or drive turns into fun spontaneous adventure'
      );
    }
  }

  else if ((house1 === 3 && house2 === 7) || (house1 === 7 && house2 === 3)) {
    if (isHard) {
      manifestations.push(
        'Partner and sibling/neighbor don\'t get along, social awkwardness',
        'Disagreements about where to go, what to do - can\'t agree on plans',
        'Partner doesn\'t text back, poor communication causes misunderstanding',
        'Commute or errands make you late for meeting partner, causes conflict'
      );
    } else {
      manifestations.push(
        'Great conversations with partner - you understand each other perfectly',
        'Partner gets along well with your siblings/neighbors, visits flow easily',
        'Collaborating on written project, joint presentation, or shared learning',
        'Short trips together are fun, easy, and strengthen connection'
      );
    }
  }

  // Money/Security houses (2nd, 4th, 8th combinations)
  else if ((house1 === 2 && house2 === 4) || (house1 === 4 && house2 === 2)) {
    if (isHard) {
      manifestations.push(
        'Unexpected home repair drains savings - furnace, roof, plumbing',
        'Family member asks to borrow money or move in temporarily',
        'Mortgage payment, property tax, or rent increase strains budget',
        'Parent criticizes your spending or makes you feel bad about money choices'
      );
    } else {
      manifestations.push(
        'Finding great deal on furniture, home improvement, or property',
        'Family helps financially or you successfully save for home down payment',
        'Income increase allows you to improve home comfort and security',
        'Working from home saves money on commute, meals, and wardrobe'
      );
    }
  }

  else if ((house1 === 4 && house2 === 8) || (house1 === 8 && house2 === 4)) {
    if (isHard) {
      manifestations.push(
        'Family secret revealed, discovering hidden information about parent or ancestry',
        'Mortgage issues, property lien, or home insurance claim denied',
        'Intense family conflict about inheritance or elderly parent\'s care',
        'Feeling emotionally unsafe at home, need to process childhood wounds'
      );
    } else {
      manifestations.push(
        'Inheritance or family financial support helps with housing',
        'Deep emotional healing through therapy or family reconciliation at home',
        'Successfully refinancing mortgage or getting insurance payout for home',
        'Creating safe sacred space at home for meditation, healing, introspection'
      );
    }
  }

  // Additional house combinations - cover all remaining pairings

  // 1st house with other houses (Identity/Self)
  else if ((house1 === 1 && house2 === 2) || (house1 === 2 && house2 === 1)) {
    if (isHard) {
      manifestations.push(
        'You will feel insecure about your appearance and spend money impulsively on makeover',
        'Identity crisis triggers overspending on things you think will make you "look successful"',
        'Your authentic self-expression will clash with what you think has monetary value',
        'Expect to question your self-worth based on how much money you have'
      );
    } else {
      manifestations.push(
        'You will discover a talent or skill that generates income naturally',
        'Your personal brand or image will attract financial opportunities',
        'Confidence boost leads to asking for and receiving the raise you deserve',
        'People will pay for your unique skills - monetizing your natural abilities becomes easy'
      );
    }
  }

  else if ((house1 === 1 && house2 === 3) || (house1 === 3 && house2 === 1)) {
    if (isHard) {
      manifestations.push(
        'Sibling or neighbor will criticize your choices or make you feel judged',
        'You will say something impulsive that damages a relationship with nearby person',
        'Car trouble or commute issues will affect your confidence and daily mood',
        'Miscommunication about who you are - people misunderstand your intentions'
      );
    } else {
      manifestations.push(
        'You will express yourself clearly and people will finally "get" who you are',
        'Networking in your local area brings connections that boost your confidence',
        'Learning new communication skill enhances your personal presence',
        'Casual conversations will lead to opportunities that align with your identity'
      );
    }
  }

  else if ((house1 === 1 && house2 === 4) || (house1 === 4 && house2 === 1)) {
    if (isHard) {
      manifestations.push(
        'Family member will make you feel like you\'re not living up to their expectations',
        'You will feel torn between being yourself and maintaining family harmony',
        'Parent or family drama will affect your emotional stability and self-image',
        'Home environment will feel restrictive to your personal freedom and expression'
      );
    } else {
      manifestations.push(
        'You will feel emotionally secure and grounded in who you are',
        'Family will support your personal goals and reinforce your confidence',
        'Creating comfortable home space that reflects your authentic personality',
        'Ancestry or family history research will reveal something that validates your identity'
      );
    }
  }

  else if ((house1 === 1 && house2 === 5) || (house1 === 5 && house2 === 1)) {
    if (isHard) {
      manifestations.push(
        'You will feel blocked in creative self-expression - artistic projects stall',
        'Romantic rejection or dating disappointment will damage your confidence',
        'Taking risks that backfire and make you question your judgment',
        'Your playful, fun side will clash with how you want to be perceived'
      );
    } else {
      manifestations.push(
        'You will radiate charisma and attract romantic attention effortlessly',
        'Creative projects will flow naturally and reflect your authentic voice',
        'Confidence surge makes you willing to take exciting, calculated risks',
        'Others will be drawn to your joyful, playful energy'
      );
    }
  }

  else if ((house1 === 1 && house2 === 6) || (house1 === 6 && house2 === 1)) {
    if (isHard) {
      manifestations.push(
        'Health issue or physical symptom will affect your confidence and self-image',
        'Work stress will make you feel exhausted and unable to show up as your best self',
        'Daily routine feels like it\'s grinding down your sense of identity',
        'You will criticize yourself harshly about productivity or not doing enough'
      );
    } else {
      manifestations.push(
        'Establishing healthy daily routine will boost your energy and confidence',
        'Physical fitness or wellness practice will improve how you feel about yourself',
        'Work performance will reflect your authentic skills - you\'ll feel competent',
        'Organizing your daily life creates mental clarity about who you are'
      );
    }
  }

  else if ((house1 === 1 && house2 === 8) || (house1 === 8 && house2 === 1)) {
    if (isHard) {
      manifestations.push(
        'You will be forced to confront shadow aspects of yourself you\'ve been avoiding',
        'Financial crisis or debt situation will trigger identity transformation',
        'Intense encounter with someone will challenge your sense of self',
        'You will feel powerless in situation involving other people\'s resources or control'
      );
    } else {
      manifestations.push(
        'You will experience powerful transformation in how you see yourself',
        'Inheritance, insurance payout, or partner\'s money will support your reinvention',
        'Deep psychological work will reveal authentic self beneath the masks',
        'Intimate relationship will help you discover hidden strengths and power'
      );
    }
  }

  else if ((house1 === 1 && house2 === 9) || (house1 === 9 && house2 === 1)) {
    if (isHard) {
      manifestations.push(
        'Your belief system will be challenged by experience that contradicts your worldview',
        'Travel plans will fall through or trip will not match your expectations',
        'You will feel like an outsider in educational or philosophical setting',
        'Mentor or teacher will criticize your approach or make you question your path'
      );
    } else {
      manifestations.push(
        'Travel experience will profoundly expand your sense of who you are',
        'You will gain wisdom that validates your life philosophy and approach',
        'Educational opportunity will align perfectly with your personal growth',
        'Meeting people from different cultures will enhance your self-understanding'
      );
    }
  }

  else if ((house1 === 1 && house2 === 10) || (house1 === 10 && house2 === 1)) {
    if (isHard) {
      manifestations.push(
        'Your authentic self will clash with your professional image or public role',
        'Boss or authority figure will make you feel like you can\'t be yourself at work',
        'Career demands will require you to suppress your true personality',
        'Public failure or criticism will shake your confidence'
      );
    } else {
      manifestations.push(
        'You will be recognized publicly for being authentically yourself',
        'Career opportunity will align perfectly with your personal identity and goals',
        'Leadership role will allow you to express your true strengths',
        'Public image will finally match who you really are - no more masks'
      );
    }
  }

  else if ((house1 === 1 && house2 === 11) || (house1 === 11 && house2 === 1)) {
    if (isHard) {
      manifestations.push(
        'Friend group will make you feel like you need to conform or hide who you are',
        'Your individuality will clash with group expectations or social norms',
        'Online community or social circle will reject you for being different',
        'Future goals will seem incompatible with your authentic self'
      );
    } else {
      manifestations.push(
        'You will find your tribe - people who accept and celebrate the real you',
        'Social network will support your unique goals and aspirations',
        'Online presence or social media will authentically reflect who you are',
        'Friendship will form based on genuine compatibility and shared values'
      );
    }
  }

  else if ((house1 === 1 && house2 === 12) || (house1 === 12 && house2 === 1)) {
    if (isHard) {
      manifestations.push(
        'Hidden enemy or behind-the-scenes sabotage will undermine your confidence',
        'Unconscious patterns or self-sabotage will prevent you from showing up authentically',
        'You will feel invisible or like your true self is not being seen',
        'Past trauma will resurface and affect your current sense of identity'
      );
    } else {
      manifestations.push(
        'Spiritual practice or meditation will connect you with your authentic soul self',
        'You will release old identity that was never truly yours',
        'Dreams or intuitive insights will reveal your true purpose',
        'Solitude and retreat will help you discover who you are beneath social masks'
      );
    }
  }

  // 2nd house with remaining houses (Money/Values/Resources)
  else if ((house1 === 2 && house2 === 3) || (house1 === 3 && house2 === 2)) {
    if (isHard) {
      manifestations.push(
        'Car repair, vehicle expenses, or transportation costs will drain your budget',
        'Sibling will ask to borrow money and put you in awkward position',
        'Phone, computer, or communication device will break requiring expensive replacement',
        'Short trip or local errand will end up costing more than planned'
      );
    } else {
      manifestations.push(
        'You will earn money through writing, teaching, or communication skills',
        'Local business opportunity or side hustle in your neighborhood will emerge',
        'Sibling or neighbor will connect you to money-making opportunity',
        'Selling items online or through local marketplace will generate unexpected income'
      );
    }
  }

  else if ((house1 === 2 && house2 === 5) || (house1 === 5 && house2 === 2)) {
    if (isHard) {
      manifestations.push(
        'You will overspend on entertainment, dates, or trying to impress romantic interest',
        'Gambling or risky investment will lose money instead of gaining',
        'Children\'s expenses will strain your budget more than anticipated',
        'Creative hobby will require expensive materials or equipment you can\'t afford'
      );
    } else {
      manifestations.push(
        'Creative project or artistic endeavor will generate income',
        'You will receive unexpected gift or windfall related to hobby or passion',
        'Investment in joy and pleasure will pay off in tangible ways',
        'Romantic partner will be generous or contribute financially'
      );
    }
  }

  else if ((house1 === 2 && house2 === 6) || (house1 === 6 && house2 === 2)) {
    if (isHard) {
      manifestations.push(
        'Medical bills or health expenses will create unexpected financial burden',
        'Paycheck will be smaller than expected due to taxes, fees, or errors',
        'You will have to spend money to fix work-related problem',
        'Daily expenses add up faster than income - budgeting feels impossible'
      );
    } else {
      manifestations.push(
        'Regular paycheck increase or bonus for daily work performance',
        'You will save money by organizing finances and cutting unnecessary expenses',
        'Health insurance or employer benefit will cover unexpected medical cost',
        'Daily side gig or extra work shifts will boost income steadily'
      );
    }
  }

  else if ((house1 === 2 && house2 === 7) || (house1 === 7 && house2 === 2)) {
    if (isHard) {
      manifestations.push(
        'Partner will overspend or make financial decision without consulting you',
        'Business partnership will reveal financial disagreement or value mismatch',
        'You will discover partner has hidden debt or money problems',
        'Negotiation or contract will fall through costing you money'
      );
    } else {
      manifestations.push(
        'Partner will contribute financially in meaningful way or pay for something big',
        'Business collaboration will generate income for both parties',
        'Marriage or committed partnership will improve financial security',
        'Client or partner will pay you well for your services'
      );
    }
  }

  else if ((house1 === 2 && house2 === 9) || (house1 === 9 && house2 === 2)) {
    if (isHard) {
      manifestations.push(
        'Travel expenses will exceed budget or trip will be cancelled after paying deposits',
        'Education costs or tuition will strain finances',
        'Legal fees or publishing costs will be higher than anticipated',
        'Foreign investment or international transaction will lose money'
      );
    } else {
      manifestations.push(
        'You will earn money through teaching, publishing, or sharing knowledge',
        'Travel opportunity will come with financial support or sponsorship',
        'Higher education will lead to certification that increases earning potential',
        'International business or foreign connection will generate income'
      );
    }
  }

  else if ((house1 === 2 && house2 === 11) || (house1 === 11 && house2 === 2)) {
    if (isHard) {
      manifestations.push(
        'Friend will not pay you back money they owe',
        'Group investment or crowdfunding project will fail financially',
        'Technology purchase or online subscription will waste money',
        'Social obligations will require spending more than you\'re comfortable with'
      );
    } else {
      manifestations.push(
        'Friend will connect you to lucrative opportunity or job lead',
        'Online business or internet income stream will succeed',
        'Group investment or collective project will generate profit',
        'Social network will help you reach financial goals through support and resources'
      );
    }
  }

  else if ((house1 === 2 && house2 === 12) || (house1 === 12 && house2 === 2)) {
    if (isHard) {
      manifestations.push(
        'Hidden fees, surprise bills, or forgotten subscriptions will drain accounts',
        'Money will disappear with no clear explanation - check for fraud or errors',
        'Self-sabotaging spending on escapism - alcohol, streaming, mindless shopping',
        'Charitable giving or helping others will exceed what you can actually afford'
      );
    } else {
      manifestations.push(
        'You will discover hidden asset, forgotten account, or unexpected refund',
        'Intuitive financial decision will pay off in ways you didn\'t foresee',
        'Spiritual practice or retreat will be funded by unexpected source',
        'Letting go of attachment to money will paradoxically improve finances'
      );
    }
  }

  // 3rd house with remaining houses (Communication/Learning/Local)
  else if ((house1 === 3 && house2 === 4) || (house1 === 4 && house2 === 3)) {
    if (isHard) {
      manifestations.push(
        'Family member will invade your privacy by reading messages or emails',
        'Communication breakdown with parent or family creates tension at home',
        'You will have to commute between home and other location causing stress',
        'Neighbor dispute or local noise will disrupt your home peace'
      );
    } else {
      manifestations.push(
        'Productive conversation with family member will resolve old issue',
        'You will work from home successfully with good communication flow',
        'Local move to better neighborhood will improve your home life',
        'Sibling or neighbor will help with home project or improvement'
      );
    }
  }

  else if ((house1 === 3 && house2 === 6) || (house1 === 6 && house2 === 3)) {
    if (isHard) {
      manifestations.push(
        'Commute to work will become longer, more stressful, or disrupted',
        'Coworker gossip or office communication drama will drain your energy',
        'You will receive critical feedback at work via email or message',
        'Transportation issues will make you late to work repeatedly'
      );
    } else {
      manifestations.push(
        'Short commute or remote work setup will improve daily work life',
        'Clear communication with coworkers will increase productivity',
        'You will learn new skill that makes daily work easier and more efficient',
        'Writing reports or documentation will go smoothly and be well-received'
      );
    }
  }

  else if ((house1 === 3 && house2 === 8) || (house1 === 8 && house2 === 3)) {
    if (isHard) {
      manifestations.push(
        'You will discover upsetting information through email, text, or conversation',
        'Difficult discussion about death, sex, or money will be unavoidable',
        'Someone will share deep secret with you that burdens you',
        'Sibling or neighbor will go through crisis that affects you emotionally'
      );
    } else {
      manifestations.push(
        'Transformative conversation will change your perspective profoundly',
        'You will research and discover valuable information about inheritance or investment',
        'Writing or communication about deep topics will resonate powerfully',
        'Learning about psychology, occult, or taboo topics will fascinate you'
      );
    }
  }

  else if ((house1 === 3 && house2 === 10) || (house1 === 10 && house2 === 3)) {
    if (isHard) {
      manifestations.push(
        'Boss will criticize your communication style or written work publicly',
        'Professional presentation or pitch will not go as well as hoped',
        'You will be asked to speak or write in professional capacity and feel unprepared',
        'Commute issues will affect your professional reputation'
      );
    } else {
      manifestations.push(
        'Your communication skills will impress boss or advance your career',
        'Professional networking through conversations will open doors',
        'You will be recognized publicly for writing, teaching, or speaking',
        'Short business trip or local professional event will boost your status'
      );
    }
  }

  else if ((house1 === 3 && house2 === 11) || (house1 === 11 && house2 === 3)) {
    if (isHard) {
      manifestations.push(
        'Online argument or social media conflict will damage friendship',
        'Group chat or community communication will become source of drama',
        'Friend will spread gossip or share your private information',
        'Technology issues will prevent you from connecting with social network'
      );
    } else {
      manifestations.push(
        'Engaging online conversations will expand your social circle',
        'You will connect with like-minded people through writing or social media',
        'Group project or collaborative communication will be productive and fun',
        'Friend will introduce you to valuable learning opportunity or course'
      );
    }
  }

  else if ((house1 === 3 && house2 === 12) || (house1 === 12 && house2 === 3)) {
    if (isHard) {
      manifestations.push(
        'Miscommunication will create confusion - things left unsaid cause problems',
        'You will feel unable to express what you\'re truly thinking or feeling',
        'Secret information or hidden communication will be revealed',
        'Mental fog or confusion will make it hard to think clearly or focus'
      );
    } else {
      manifestations.push(
        'Intuitive insights will come through dreams, meditation, or quiet reflection',
        'You will communicate spiritual or creative ideas beautifully',
        'Journaling or private writing will provide emotional healing',
        'Meaningful conversation in therapy or private setting will bring clarity'
      );
    }
  }

  // 4th house with remaining houses (Home/Family/Emotional foundation)
  else if ((house1 === 4 && house2 === 5) || (house1 === 5 && house2 === 4)) {
    if (isHard) {
      manifestations.push(
        'Family will disapprove of your romantic relationship or dating choice',
        'Children or creative projects will conflict with family obligations',
        'You will feel stuck at home when you want to go out and have fun',
        'Parent will criticize your hobbies or leisure activities as frivolous'
      );
    } else {
      manifestations.push(
        'Family gathering will be genuinely fun and joyful',
        'You will create art or enjoy creative hobby in comfortable home space',
        'Romantic date at home will be intimate and successful',
        'Children or family members will bring happiness and playfulness to home'
      );
    }
  }

  else if ((house1 === 4 && house2 === 6) || (house1 === 6 && house2 === 4)) {
    if (isHard) {
      manifestations.push(
        'Work-from-home situation will create mess and disrupt family peace',
        'Family member\'s health issue will require you to take time off work',
        'Home repairs or chores will pile up adding to daily stress',
        'You will feel unable to maintain both clean home and work performance'
      );
    } else {
      manifestations.push(
        'Working from home will allow you to balance work and domestic life well',
        'Establishing home routine will improve both health and productivity',
        'Family member will help with daily tasks or household organization',
        'Creating organized, functional home space will reduce daily stress'
      );
    }
  }

  else if ((house1 === 4 && house2 === 7) || (house1 === 7 && house2 === 4)) {
    if (isHard) {
      manifestations.push(
        'Partner and family member will clash - you\'re caught in the middle',
        'Disagreement about where to live or whose family to visit for holidays',
        'Partner will not feel welcome in your home or vice versa',
        'One of you wants to move in together but other isn\'t ready'
      );
    } else {
      manifestations.push(
        'Partner will be welcomed warmly by your family - everyone gets along',
        'You will successfully merge households or find home together',
        'Creating comfortable domestic partnership and shared home life',
        'Family member will help your relationship or introduce you to someone special'
      );
    }
  }

  else if ((house1 === 4 && house2 === 9) || (house1 === 9 && house2 === 4)) {
    if (isHard) {
      manifestations.push(
        'Family obligations will prevent you from traveling or pursuing education',
        'Cultural or religious differences with family will create tension',
        'You will feel your family background limits your worldview or growth',
        'Homesickness during travel or education experience will be intense'
      );
    } else {
      manifestations.push(
        'Family will support your educational goals or travel plans',
        'You will learn about ancestry, heritage, or family history that expands perspective',
        'International family connection or relative abroad will become important',
        'Home will become center of learning - hosting study groups or classes'
      );
    }
  }

  else if ((house1 === 4 && house2 === 11) || (house1 === 11 && house2 === 4)) {
    if (isHard) {
      manifestations.push(
        'Friends will overstay welcome at your home or not respect boundaries',
        'You will feel torn between family obligations and friend commitments',
        'Family will not approve of your friend group or social circle',
        'Technology at home will malfunction disrupting your online social life'
      );
    } else {
      manifestations.push(
        'You will host successful gathering bringing friends into your home',
        'Family and friends will blend well - creating sense of extended community',
        'Online community or remote friendships will provide emotional support',
        'Friend will help with home project or moving'
      );
    }
  }

  else if ((house1 === 4 && house2 === 12) || (house1 === 12 && house2 === 4)) {
    if (isHard) {
      manifestations.push(
        'Old family wound or childhood trauma will resurface requiring healing',
        'Home will feel isolating or like emotional prison',
        'Hidden family secret will be revealed causing upheaval',
        'You will need to care for ill or struggling family member alone'
      );
    } else {
      manifestations.push(
        'Home will become sanctuary for spiritual practice and solitude',
        'Family karma or ancestral healing work will provide deep peace',
        'You will release old emotional baggage tied to childhood and family',
        'Private, sacred space at home will support meditation and inner work'
      );
    }
  }

  // Remaining combinations with houses 5-12
  else if ((house1 === 5 && house2 === 6) || (house1 === 6 && house2 === 5)) {
    if (isHard) {
      manifestations.push(
        'Creative projects will start feeling like tedious work instead of fun',
        'Health issue or work stress will kill your libido and romantic desire',
        'You will have to choose between creative passion and paying the bills',
        'Daily responsibilities will leave no time for hobbies or dating'
      );
    } else {
      manifestations.push(
        'You will turn hobby into profitable side business naturally',
        'Daily creative practice will improve your health and wellbeing',
        'Romantic relationship will develop with coworker or through work',
        'Incorporating play and joy into daily routine will boost productivity'
      );
    }
  }

  else if ((house1 === 5 && house2 === 9) || (house1 === 9 && house2 === 5)) {
    if (isHard) {
      manifestations.push(
        'Romantic relationship with someone from different background will face obstacles',
        'Creative or artistic vision will clash with traditional or academic standards',
        'Travel for pleasure will not match your expectations or be disappointing',
        'You will gamble or take risk on educational investment that doesn\'t pay off'
      );
    } else {
      manifestations.push(
        'Travel romance or meeting someone special while abroad',
        'Creative work will be published, taught, or shared with wider audience',
        'Learning new language, art form, or skill will bring joy',
        'Taking inspiring trip that reignites creativity and sense of adventure'
      );
    }
  }

  else if ((house1 === 5 && house2 === 10) || (house1 === 10 && house2 === 5)) {
    if (isHard) {
      manifestations.push(
        'Career demands will prevent you from enjoying hobbies or romance',
        'Public scandal or embarrassment related to romantic life or creative work',
        'Boss will not take your creative ideas seriously',
        'You will have to maintain serious professional image when you want to be playful'
      );
    } else {
      manifestations.push(
        'Creative talents will be recognized professionally and boost career',
        'You will be known publicly for artistic or creative work',
        'Romance with someone in your professional field or industry',
        'Leadership role will allow you to incorporate creativity and innovation'
      );
    }
  }

  else if ((house1 === 5 && house2 === 12) || (house1 === 12 && house2 === 5)) {
    if (isHard) {
      manifestations.push(
        'Secret affair or hidden romance will create guilt and confusion',
        'Creative block or loss of inspiration - can\'t access your muse',
        'Escapist behavior through excessive partying, drinking, or risky sex',
        'Romantic illusion will be shattered when you see reality'
      );
    } else {
      manifestations.push(
        'Spiritual or artistic practice will unlock profound creativity',
        'Secret romance will deepen into something spiritually meaningful',
        'Creating art, music, or writing from dreams and subconscious',
        'Healing through creative expression and artistic therapy'
      );
    }
  }

  else if ((house1 === 6 && house2 === 7) || (house1 === 7 && house2 === 6)) {
    if (isHard) {
      manifestations.push(
        'Partner\'s health issues will require your caretaking and daily support',
        'Work stress will affect your relationship - too tired for partner',
        'Partner and coworker will not get along creating awkward situations',
        'Daily routines and schedules will conflict with partner\'s needs'
      );
    } else {
      manifestations.push(
        'You will create healthy daily routines with partner that work for both',
        'Business partnership will improve your daily work life',
        'Partner will support your health goals and wellness routine',
        'Meeting romantic interest through work or health/fitness setting'
      );
    }
  }

  else if ((house1 === 6 && house2 === 8) || (house1 === 8 && house2 === 6)) {
    if (isHard) {
      manifestations.push(
        'Work stress will manifest as physical health symptoms',
        'Medical crisis or health emergency will disrupt daily routine',
        'Workplace power dynamics or toxic coworker will drain you',
        'Health insurance issues or medical bills from work injury'
      );
    } else {
      manifestations.push(
        'Daily healing practices will transform your health profoundly',
        'Work will provide good insurance coverage for needed medical care',
        'You will help others through health crisis as caretaker or healer',
        'Deep research into health issue will reveal solution'
      );
    }
  }

  else if ((house1 === 6 && house2 === 9) || (house1 === 9 && house2 === 6)) {
    if (isHard) {
      manifestations.push(
        'Work obligations will prevent you from taking desired trip or course',
        'Commute will become too long or daily travel will exhaust you',
        'Your practical work approach will clash with philosophical or academic ideals',
        'Health issues while traveling will cut trip short'
      );
    } else {
      manifestations.push(
        'Work opportunity will include travel as part of job duties',
        'You will learn practical skills through education that improve daily work',
        'Daily spiritual or philosophical practice will improve health',
        'Teaching or mentoring work will become part of your routine'
      );
    }
  }

  else if ((house1 === 6 && house2 === 11) || (house1 === 11 && house2 === 6)) {
    if (isHard) {
      manifestations.push(
        'Work schedule will conflict with friend activities and social events',
        'Online work or remote job will create isolation from social connections',
        'Friend will be unreliable coworker or work partnership will sour friendship',
        'Health anxiety from reading too much online medical information'
      );
    } else {
      manifestations.push(
        'Friend will help you get job or connect you to work opportunity',
        'You will build supportive community through work or health practice',
        'Online work or freelancing will allow flexibility for social life',
        'Group fitness class or wellness community will improve health and friendships'
      );
    }
  }

  else if ((house1 === 7 && house2 === 9) || (house1 === 9 && house2 === 7)) {
    if (isHard) {
      manifestations.push(
        'Partner will have different religious, political, or philosophical views causing conflict',
        'Long-distance relationship will be tested by physical separation',
        'Partner will disapprove of your travel plans or educational goals',
        'Legal issues or lawsuit involving partner will arise'
      );
    } else {
      manifestations.push(
        'You will travel with partner creating meaningful shared experiences',
        'Partner from different cultural background will expand your worldview',
        'Learning and growing together through education or spiritual practice',
        'Legal marriage or contract with partner will formalize commitment'
      );
    }
  }

  else if ((house1 === 7 && house2 === 10) || (house1 === 10 && house2 === 7)) {
    if (isHard) {
      manifestations.push(
        'Partner will be threatened by your career success or professional focus',
        'Public relationship drama will affect your professional reputation',
        'Boss or authority figure will interfere in your partnership',
        'You will feel forced to choose between career advancement and relationship'
      );
    } else {
      manifestations.push(
        'Partner will support your career and celebrate your professional success',
        'Business partnership will elevate both of your public status',
        'You will collaborate professionally with romantic partner successfully',
        'Public recognition of your relationship - official announcement or celebration'
      );
    }
  }

  else if ((house1 === 7 && house2 === 11) || (house1 === 11 && house2 === 7)) {
    if (isHard) {
      manifestations.push(
        'Partner will be jealous of your friendships or time spent with friends',
        'Friends will not approve of your partner or relationship',
        'Online relationship or dating app match will disappoint',
        'Partner\'s goals and future vision will not align with yours'
      );
    } else {
      manifestations.push(
        'You will meet partner through friend group or social network',
        'Partner and friends will get along creating integrated social life',
        'Relationship will support both of your individual goals and aspirations',
        'Successful online dating leading to real partnership'
      );
    }
  }

  else if ((house1 === 7 && house2 === 12) || (house1 === 12 && house2 === 7)) {
    if (isHard) {
      manifestations.push(
        'Partner will keep secrets or hide significant information from you',
        'You will feel lonely even in relationship - emotional distance',
        'Hidden enemy will try to sabotage your partnership',
        'Karmic relationship will bring up old wounds requiring healing'
      );
    } else {
      manifestations.push(
        'Deep spiritual connection with partner transcends ordinary relationship',
        'You will heal old relationship wounds through current partnership',
        'Partner will support your need for solitude and spiritual practice',
        'Dreams or intuition will guide you about relationship decisions'
      );
    }
  }

  else if ((house1 === 8 && house2 === 9) || (house1 === 9 && house2 === 8)) {
    if (isHard) {
      manifestations.push(
        'Travel will involve crisis, emergency, or intense transformative experience',
        'Lawsuit or legal issue will drain you financially and emotionally',
        'Religious or philosophical beliefs will be shattered by intense experience',
        'Foreign investment or international financial deal will fail'
      );
    } else {
      manifestations.push(
        'You will study psychology, occult, or transformative subjects deeply',
        'Travel to sacred sites or foreign healing modalities will transform you',
        'Inheritance or partner\'s money will fund education or travel',
        'Publishing work about deep, taboo, or transformative topics'
      );
    }
  }

  else if ((house1 === 8 && house2 === 10) || (house1 === 10 && house2 === 8)) {
    if (isHard) {
      manifestations.push(
        'Career crisis or public scandal will force major transformation',
        'Power struggle with boss or authority figure will be intense',
        'Professional reputation will be damaged by someone exposing secrets',
        'You will be forced into career change due to circumstances beyond control'
      );
    } else {
      manifestations.push(
        'Career in psychology, finance, or transformative work will flourish',
        'You will be recognized professionally for research or deep expertise',
        'Powerful mentor or boss will transform your career trajectory',
        'Managing other people\'s money or resources will advance your status'
      );
    }
  }

  else if ((house1 === 8 && house2 === 11) || (house1 === 11 && house2 === 8)) {
    if (isHard) {
      manifestations.push(
        'Friend will betray you or reveal damaging secret to group',
        'Group investment or collective financial venture will fail dramatically',
        'You will be forced out of social circle or online community',
        'Friend will go through crisis and you\'ll be pulled into drama'
      );
    } else {
      manifestations.push(
        'Friend group will support you through major life transformation',
        'Collective investment or group financial project will succeed',
        'You will connect with powerful people through social network',
        'Online community focused on healing or transformation will be meaningful'
      );
    }
  }

  else if ((house1 === 8 && house2 === 12) || (house1 === 12 && house2 === 8)) {
    if (isHard) {
      manifestations.push(
        'Hidden debt, financial fraud, or theft will be discovered',
        'Psychological crisis or mental health emergency will require treatment',
        'Secret will be exposed causing shame and need for healing',
        'You will be forced to confront deepest fears and shadow material'
      );
    } else {
      manifestations.push(
        'Deep spiritual transformation through meditation, therapy, or retreat',
        'You will discover hidden resources or forgotten assets',
        'Past life regression or subconscious work will heal trauma',
        'Letting go of attachments will paradoxically increase your power'
      );
    }
  }

  else if ((house1 === 9 && house2 === 10) || (house1 === 10 && house2 === 9)) {
    if (isHard) {
      manifestations.push(
        'Your philosophical beliefs will clash with company culture or boss',
        'Career path will not align with your educational background or qualifications',
        'Professional demands will prevent you from completing degree or certification',
        'Travel for work will be exhausting rather than inspiring'
      );
    } else {
      manifestations.push(
        'Education or certification will directly advance your career',
        'You will be recognized as expert or thought leader in your field',
        'International work or career involving travel will flourish',
        'Teaching, mentoring, or sharing wisdom will become part of professional role'
      );
    }
  }

  else if ((house1 === 9 && house2 === 11) || (house1 === 11 && house2 === 9)) {
    if (isHard) {
      manifestations.push(
        'Friend group will not share or support your philosophical or spiritual beliefs',
        'Online course or distance learning will be disappointing or poorly organized',
        'Travel plans with friends will fall apart due to disagreements',
        'Your worldview will be challenged by social circle causing isolation'
      );
    } else {
      manifestations.push(
        'You will find community of people who share your beliefs and values',
        'Online learning or virtual classes will expand your social network',
        'Group travel or educational retreat with friends will be inspiring',
        'Teaching or sharing knowledge in group setting will be rewarding'
      );
    }
  }

  else if ((house1 === 9 && house2 === 12) || (house1 === 12 && house2 === 9)) {
    if (isHard) {
      manifestations.push(
        'Spiritual crisis or loss of faith will shake your belief system',
        'Travel will be isolating or you\'ll feel lonely abroad',
        'Hidden obstacles will prevent educational or travel goals',
        'Legal issue will drag on with no resolution in sight'
      );
    } else {
      manifestations.push(
        'Spiritual awakening or mystical experience will transform your philosophy',
        'Retreat, pilgrimage, or sacred travel will provide deep healing',
        'You will study spirituality, meditation, or esoteric wisdom',
        'Dreams and intuition will guide you toward your higher purpose'
      );
    }
  }

  else if ((house1 === 10 && house2 === 11) || (house1 === 11 && house2 === 10)) {
    if (isHard) {
      manifestations.push(
        'Professional goals will conflict with what friends think you should do',
        'Social media controversy will damage your professional reputation',
        'You will feel pressure to network but hate professional socializing',
        'Career success will cost you friendships - people becoming jealous or distant'
      );
    } else {
      manifestations.push(
        'Professional networking will lead to valuable career opportunities',
        'Friends will celebrate and support your career success',
        'Social media or online presence will enhance professional brand',
        'You will achieve goals through collaborative team effort'
      );
    }
  }

  else if ((house1 === 10 && house2 === 12) || (house1 === 12 && house2 === 10)) {
    if (isHard) {
      manifestations.push(
        'Career will be derailed by behind-the-scenes sabotage or hidden enemies',
        'Public failure or professional setback will require retreat and healing',
        'You will feel unseen or unrecognized for your work contributions',
        'Burnout will force you to step back from career temporarily'
      );
    } else {
      manifestations.push(
        'Working behind the scenes will lead to eventual public success',
        'Spiritual practice will guide career decisions wisely',
        'Career involving healing, spirituality, or helping hidden populations',
        'You will receive recognition for charitable or service work'
      );
    }
  }

  else if ((house1 === 11 && house2 === 12) || (house1 === 12 && house2 === 11)) {
    if (isHard) {
      manifestations.push(
        'Friend will betray you or friendship will end painfully',
        'Online addiction or social media overuse will isolate you from real connections',
        'You will withdraw from social circle feeling misunderstood',
        'Group will exclude or reject you causing emotional pain'
      );
    } else {
      manifestations.push(
        'You will find spiritual community that truly understands you',
        'Online or virtual friendships will provide deep support',
        'Letting go of superficial friendships will make room for authentic connections',
        'Group meditation, healing work, or spiritual practice with like-minded souls'
      );
    }
  }

  // If still no manifestations added, leave empty so generic ones can be added later
  return manifestations;
}

// Generate manifestations for natal planet activating a transit-to-transit aspect
// This shows how natal planet in its house TRIGGERS and COLORS the transit dynamic
export function getNatalActivationManifestations(
  natalPlanet: string,
  natalHouse: number,
  transit1Planet: string,
  transit1House: number,
  transit2Planet: string,
  transit2House: number,
  natalAspectType: string,
  transitAspectType: string
): string[] {
  const manifestations: string[] = [];
  const isNatalHard = natalAspectType === 'Square' || natalAspectType === 'Opposition';
  const isTransitHard = transitAspectType === 'Square' || transitAspectType === 'Opposition';

  const outerPlanets = ['Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
  const isOuterTransit = outerPlanets.includes(transit1Planet) || outerPlanets.includes(transit2Planet);

  // Natal 1st house activation - Identity activating the transit
  if (natalHouse === 1) {
    if (isNatalHard) {
      manifestations.push(
        `Your personal identity and sense of self are being CHALLENGED by the ${transit1Planet}-${transit2Planet} transit playing out in your ${transit1House}th-${transit2House}th houses`,
        `The transit events force you to question "who am I?" in relation to these circumstances`,
        `You will resist or fight against what's happening because it threatens your self-image`,
        `Old ways of being yourself no longer work in this new situation - identity crisis point`
      );
    } else {
      manifestations.push(
        `Your core identity naturally SUPPORTS navigating the ${transit1Planet}-${transit2Planet} dynamic`,
        `Who you are at your core helps you handle what's happening in these life areas`,
        `The transit events actually strengthen your sense of self and confidence`,
        `You will find yourself stepping into leadership or taking charge in this situation`
      );
    }
  }

  // Natal 2nd house activation - Values/resources activating the transit
  else if (natalHouse === 2) {
    if (isNatalHard) {
      manifestations.push(
        `The ${transit1Planet}-${transit2Planet} transit will cost you money, time, or resources you value`,
        `Your financial security or self-worth feels threatened by what's unfolding`,
        `What you own, earn, or value is in direct conflict with the transit demands`,
        `You will have to spend on or invest in this situation when you'd rather save or spend elsewhere`
      );
    } else {
      manifestations.push(
        `Your resources, skills, and values are perfectly positioned to benefit from this transit`,
        `What you own or can offer has market value right now in this situation`,
        `The transit will increase your income, assets, or sense of self-worth`,
        `Your natural talents become profitable or useful in navigating these circumstances`
      );
    }
  }

  // Natal 3rd house activation - Communication/learning activating the transit
  else if (natalHouse === 3) {
    if (isNatalHard) {
      manifestations.push(
        `What you say or how you communicate about this situation will create problems`,
        `Information you share (or withhold) triggers conflict in the ${transit1House}th-${transit2House}th house areas`,
        `Miscommunication, gossip, or messages will complicate the transit dynamics`,
        `Your words, posts, texts, or emails pour gasoline on an already tense situation`
      );
    } else {
      manifestations.push(
        `Your communication skills help you navigate the transit with clarity and ease`,
        `The right conversation, message, or information arrives at the perfect time`,
        `What you learn or teach right now directly helps with the transit challenges`,
        `Talking it out, writing about it, or sharing information resolves transit tensions`
      );
    }
  }

  // Natal 4th house activation - Home/family/roots activating the transit
  else if (natalHouse === 4) {
    if (isNatalHard) {
      manifestations.push(
        `Family obligations or home issues will interfere with handling the transit situation`,
        `Your need for emotional security clashes with what the transit demands of you`,
        `Past family patterns or childhood wounds are triggered by current events`,
        `You will feel torn between home/family needs and the ${transit1House}th-${transit2House}th house matters`
      );
    } else {
      manifestations.push(
        `Home and family provide the foundation you need to handle the transit successfully`,
        `Your roots, emotional security, and private life support what's happening publicly`,
        `Family connections or property matters help resolve the transit dynamics`,
        `You can retreat to your safe space when the transit gets intense - that stability helps`
      );
    }
  }

  // Natal 5th house activation - Creativity/romance/children activating
  else if (natalHouse === 5) {
    if (isNatalHard) {
      manifestations.push(
        `Creative projects, romantic affairs, or children's needs complicate the transit situation`,
        `What you do for fun or self-expression conflicts with ${transit1House}th-${transit2House}th house responsibilities`,
        `Dating drama, pregnancy concerns, or kid issues add stress to an already tense transit`,
        `Your desire for pleasure, recognition, or creative freedom clashes with what's required now`
      );
    } else {
      manifestations.push(
        `Creative solutions or playful approaches help you navigate the transit beautifully`,
        `Romance, children, or creative projects bring joy that balances transit challenges`,
        `Your authentic self-expression and creativity shine through this situation`,
        `Taking risks or following your heart leads to breakthrough in the transit areas`
      );
    }
  }

  // Natal 6th house activation - Work/health/service activating
  else if (natalHouse === 6) {
    if (isNatalHard) {
      manifestations.push(
        `Work demands, health issues, or daily obligations will overwhelm the transit situation`,
        `Your job or health problems prevent you from properly addressing ${transit1House}th-${transit2House}th house matters`,
        `Stress from the transit manifests as physical illness or workplace conflict`,
        `Too many duties, not enough time - the grind interferes with handling bigger transit themes`
      );
    } else {
      manifestations.push(
        `Your work ethic, organizational skills, and daily routines help you master the transit`,
        `Health improvements or work opportunities arrive through the transit dynamics`,
        `Being of service or helping others resolves transit tensions beautifully`,
        `Your attention to detail and practical approach turns transit challenges into manageable tasks`
      );
    }
  }

  // Natal 7th house activation - Partnerships activating
  else if (natalHouse === 7) {
    if (isNatalHard) {
      manifestations.push(
        `Your partner, spouse, or close associates actively oppose or complicate the transit situation`,
        `Relationship conflicts or divorce/separation proceedings intersect with the transit events`,
        `What your partner wants directly contradicts what you need to do in ${transit1House}th-${transit2House}th houses`,
        `You will feel caught between relationship harmony and addressing the transit demands`
      );
    } else {
      manifestations.push(
        `Your partner, collaborator, or counselor provides crucial support for navigating the transit`,
        `Relationship harmony or new partnerships help resolve the transit challenges`,
        `Working together with others creates breakthrough in the ${transit1House}th-${transit2House}th house situation`,
        `The right person shows up at the right time to help you through this`
      );
    }
  }

  // Natal 8th house activation - Transformation/shared resources activating
  else if (natalHouse === 8) {
    if (isNatalHard) {
      manifestations.push(
        `Debts, taxes, inheritance disputes, or power struggles intensify the transit drama`,
        `Other people's money or resources become battleground in ${transit1House}th-${transit2House}th house areas`,
        `Deep psychological fears or control issues surface through the transit events`,
        `Intimacy wounds, sexual issues, or fear of loss complicate what's already difficult`
      );
    } else {
      manifestations.push(
        `Shared resources, investments, or other people's support help you leverage the transit`,
        `Deep psychological insight or therapeutic work transforms the transit challenges`,
        `You will receive money, inheritance, or resources that help with the situation`,
        `Intimacy, merging, or joint ventures create powerful synergy in navigating the transit`
      );
    }
  }

  // Natal 9th house activation - Beliefs/expansion activating
  else if (natalHouse === 9) {
    if (isNatalHard) {
      manifestations.push(
        `Your beliefs, philosophy, or moral stance puts you in conflict with the transit situation`,
        `Travel plans, legal issues, or educational pursuits complicate ${transit1House}th-${transit2House}th matters`,
        `What you believe is right clashes with what's practical or necessary in the transit`,
        `Foreign connections, publishing, or higher learning create additional transit stress`
      );
    } else {
      manifestations.push(
        `Your vision, optimism, and big-picture thinking help you navigate the transit wisely`,
        `Travel, education, or legal matters open doors in the ${transit1House}th-${transit2House}th situation`,
        `Your faith, beliefs, or philosophical approach provides meaning in the transit challenges`,
        `Teaching, learning, or expanding horizons creates breakthrough opportunities`
      );
    }
  }

  // Natal 10th house activation - Career/public status activating
  else if (natalHouse === 10) {
    if (isNatalHard) {
      manifestations.push(
        `Career demands or public reputation concerns override ${transit1House}th-${transit2House}th house needs`,
        `Your boss, authority figures, or professional obligations block what the transit requires`,
        `Public scandal, career setback, or reputation damage intersects with the transit events`,
        `What's good for your career conflicts with what you need to do in other life areas right now`
      );
    } else {
      manifestations.push(
        `Career opportunities or public recognition arrive through navigating the transit well`,
        `Your professional skills and public standing help you master the ${transit1House}th-${transit2House}th dynamics`,
        `Authority figures or mentors provide crucial guidance for handling the transit`,
        `The transit challenges position you for major career advancement or public success`
      );
    }
  }

  // Natal 11th house activation - Friendships/groups/hopes activating
  else if (natalHouse === 11) {
    if (isNatalHard) {
      manifestations.push(
        `Friends will disappoint you or social groups will pressure you during this transit`,
        `What your community wants conflicts with ${transit1House}th-${transit2House}th house realities`,
        `Online drama, group politics, or friendship breakups add to transit stress`,
        `Your hopes and dreams feel threatened by what's actually happening in the transit`
      );
    } else {
      manifestations.push(
        `Friends, community, or social networks provide incredible support through the transit`,
        `Your vision for the future aligns perfectly with what the transit is teaching you`,
        `Group collaboration or team efforts create solutions to ${transit1House}th-${transit2House}th challenges`,
        `Technology, innovation, or networking opens unexpected doors during this time`
      );
    }
  }

  // Natal 12th house activation - Spirituality/hidden/subconscious activating
  else if (natalHouse === 12) {
    if (isNatalHard) {
      manifestations.push(
        `Hidden enemies, self-sabotage, or unconscious patterns undermine the transit situation`,
        `Secrets come to light that complicate ${transit1House}th-${transit2House}th house matters`,
        `Escapism, addiction, or avoidance makes the transit challenges worse`,
        `What you don't see or acknowledge about yourself creates problems in handling this`
      );
    } else {
      manifestations.push(
        `Spiritual practices, meditation, or inner work provide guidance for the transit`,
        `Intuitive insights or dreams reveal solutions to ${transit1House}th-${transit2House}th challenges`,
        `Solitude, retreat, or quiet reflection helps you process the transit wisely`,
        `Compassion, forgiveness, or letting go creates healing in the situation`
      );
    }
  }

  return manifestations;
}
