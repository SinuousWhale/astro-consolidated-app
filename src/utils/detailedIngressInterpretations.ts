/**
 * Detailed Ingress Interpretations
 * Planetary ingresses into zodiac signs with full life area coverage
 * Format: Name, Frequency, Duration, Planet Energy, Sign Energy, Event Meaning, Life Area Interpretations, 10 Predictions
 */

export interface DetailedIngressInterpretation {
  name: string;
  frequency: string;
  duration: string;
  planetEnergy: string;
  signEnergy: string;
  eventMeaning: string;
  loveRelationships: string;
  familyHome: string;
  businessCareer: string;
  moneyFinances: string;
  predictions: string[];
}

/**
 * Get Detailed Ingress interpretation by planet and sign
 */
export function getDetailedIngressInterpretation(planet: string, sign: string): DetailedIngressInterpretation | null {
  const key = `${planet}-${sign}`;
  return DETAILED_INGRESSES[key] || null;
}

// ============================================================================
// DETAILED INGRESS INTERPRETATIONS (Sample: Mars in Aries, Venus in Taurus, Mercury in Gemini)
// ============================================================================

const DETAILED_INGRESSES: Record<string, DetailedIngressInterpretation> = {
  'Mars-Aries': {
    name: 'Mars Ingress Aries',
    frequency: 'Approximately every 2 years',
    duration: '~6 weeks',
    planetEnergy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    signEnergy: 'Aries represents new beginnings, courage, independence, leadership, initiative, and the pioneering spirit. It\'s the spark of self-assertion, the drive to be first, and pure initiating force.',
    eventMeaning: 'Mars in Aries is the warrior coming home - Mars rules Aries, so this placement is extraordinarily powerful. Action becomes direct, courage intensifies, and initiative flows naturally. This is the most assertive, bold, and fearless transit of Mars. The next 6 weeks favor starting new projects, taking leadership, competing, and asserting yourself boldly. Physical energy runs high. Impatience and aggression also intensify - channel this fire constructively or it burns destructively.',
    loveRelationships: 'Passionate pursuit and direct action in romance. Make the first move boldly - hesitation wastes this energy. Sexual passion and physical chemistry intensify. Attraction to confident, independent partners. Existing relationships heat up with more spontaneity and adventure, or conflicts intensify if there\'s underlying anger. Be direct about desires but watch for being too aggressive or selfish. Courage to pursue who you really want.',
    familyHome: 'High energy at home - good for physical projects, renovations requiring quick action, or moving. Family conflicts may escalate quickly but also resolve quickly if addressed directly. Assert yourself with family members rather than passive-aggressively. Good time to take leadership role in family matters. Physical activity with family recommended. Impatience with family dynamics reaches peak - address issues head-on.',
    businessCareer: 'Powerful time for career initiative and leadership. Start new business, launch product, apply for promotion, or take on challenging project. Your confidence and direct approach impress others. Excellent for entrepreneurship, sales requiring boldness, leadership positions, or physical work. Competition intensifies but you have edge. Assert yourself with boss or clients. Take calculated risks. Avoid burning bridges through impatience or aggression.',
    moneyFinances: 'Bold financial action favored - start new income stream, invest in yourself, or take calculated financial risks. Earning through independent action, physical work, or competitive fields increases. Good for asking for raise directly or negotiating aggressively. Be bold but not reckless - channel courage into smart action, not impulsive gambling. Money flows to those who take initiative and assert their worth.',
    predictions: [
      'You will start something new with unusual confidence and energy',
      'Physical energy peaks - perfect time to begin fitness routine or compete athletically',
      'Bold career move or business launch succeeds through pure initiative',
      'Romantic pursuit through direct approach works better than subtle hints',
      'Conflict that\'s been simmering explodes - address it directly and resolve it',
      'Impatience leads to quick decision that turns out right',
      'Leadership opportunity where your courage and directness are exactly what\'s needed',
      'Competitor challenges you and brings out your best fighting spirit',
      'Quick action on opportunity that won\'t wait pays off',
      'Assertiveness breakthrough - you say or do something brave you\'ve been afraid to'
    ]
  },

  'Venus-Taurus': {
    name: 'Venus Ingress Taurus',
    frequency: 'Approximately once per year',
    duration: '~3-4 weeks',
    planetEnergy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful and pleasurable.',
    signEnergy: 'Taurus represents stability, sensory pleasure, material security, patience, persistence, comfort, and tangible beauty. It\'s the energy of grounding, enjoying physical reality, and building lasting value.',
    eventMeaning: 'Venus in Taurus is the goddess of love in her home sign - Venus rules Taurus, so this placement maximizes pleasure, beauty, and sensory enjoyment. Love becomes more physical, stable, and grounded. The next 3-4 weeks favor deepening relationships, enjoying sensory pleasures, creating beauty, and building financial security. This is the most sensual, pleasure-seeking, and value-focused Venus transit. Romance should be slow, luxurious, and physically satisfying. Overindulgence possible - enjoy but don\'t excess.',
    loveRelationships: 'Romance becomes deeply sensual and pleasure-focused. Perfect time for romantic dinners, massages, nature dates, or anything engaging the five senses. Physical touch and affection intensify importance. You attract partners who value stability and sensuality. Relationships deepen through simple quality time and physical intimacy. Showing love through tangible gifts, cooking, or creating comfort. Slow-building romance favored over quick passion. Some relationships stabilize into commitment now.',
    familyHome: 'Home becomes sanctuary of beauty and comfort. Excellent time for decorating, buying beautiful furniture or art, starting garden, or making home more physically pleasant. Cooking family meals, creating cozy atmosphere, and enjoying simple pleasures together strengthens bonds. Family financial planning and building security favored. Slow, patient approach to family matters works better than rushing. Enjoy family time through shared sensory experiences.',
    businessCareer: 'Career success through building value, demonstrating quality, and patient persistence. Excellent for work related to beauty, food, finance, art, design, agriculture, or luxury goods. Your work quality and reliability get recognized. Good time to ask for raise based on proven value. Building client relationships through trustworthiness and delivering quality. Creative projects benefit from focus on beauty and tangible results. Slow, steady progress beats rushing.',
    moneyFinances: 'Excellent financial period for building security, saving money, and making wise investments. Money flows through work you enjoy and value. Good time to increase prices based on quality, invest in beauty or comfort, or build multiple income streams patiently. Financial planning and assessment of values recommended. Spending on quality that lasts better than cheap quick fixes. Avoid overindulgence and impulse luxury purchases. Build wealth steadily.',
    predictions: [
      'Romance deepens through simple sensory pleasures - good food, beautiful setting, physical touch',
      'Purchase of beautiful item or luxury that brings lasting pleasure and quality',
      'Raise or financial reward for consistent quality work and proven value',
      'Home improvement or decoration that makes space significantly more beautiful and comfortable',
      'Deepening of relationship commitment through stability and shared values',
      'Discovery that slowing down and enjoying process brings more satisfaction than rushing',
      'Financial opportunity through beauty, art, food, or tangible product/service',
      'Garden, nature, or outdoor experience that grounds and restores you',
      'Realization of your true worth leads to better treatment from others',
      'Sensory pleasure or physical comfort that feels deeply satisfying and valuable'
    ]
  },

  'Mercury-Gemini': {
    name: 'Mercury Ingress Gemini',
    frequency: 'Approximately once per year',
    duration: '~2-3 weeks',
    planetEnergy: 'Mercury represents communication, thinking, learning, information processing, connections, and mental agility. It\'s how you think, speak, learn, and exchange information with the world.',
    signEnergy: 'Gemini represents curiosity, versatility, communication, mental quickness, learning, connections, and seeing multiple perspectives. It\'s the energy of questions, conversations, short trips, and information exchange.',
    eventMeaning: 'Mercury in Gemini is the messenger in his home sign - Mercury rules Gemini, so this placement maximizes communication, learning, and mental agility. Thinking becomes faster, more versatile, and more curious. The next 2-3 weeks favor learning, networking, writing, teaching, and all forms of communication. This is the quickest, most curious, most talkative Mercury transit. Conversations flow easily. Information comes rapidly. Mind is sharp but may scatter without focus.',
    loveRelationships: 'Communication in relationships flows easily and playfully. Perfect time for interesting conversations, mentally stimulating dates, or learning something together. Attraction to witty, intelligent partners who can keep up with your mind. Keep romance light, fun, and varied - too much serious intensity feels heavy. Flirting through clever conversation. Text and message communication especially good now. Some meet partners through social networks, classes, or local events.',
    familyHome: 'Excellent communication with siblings, neighbors, and local community. Family conversations flow easily - good time for family meetings, group chats, or catching up. Home benefits from better organization, creating communication hub, or setting up study/work space. Short family trips or local exploration favored. Variety and mental stimulation at home important. Too much routine feels stifling - mix it up.',
    businessCareer: 'Peak time for communication-based work - writing, teaching, presenting, sales, media, social networking, or consulting. Your ideas are sharp and you articulate them well. Excellent for networking, pitching proposals, learning new skills quickly, or starting communication projects. Multiple projects and variety keep you engaged and productive. Multitasking ability peaks. Good for jobs requiring mental agility and quick thinking. Avoid scattered focus.',
    moneyFinances: 'Financial opportunities through communication, information, teaching, or selling. Freelance writing, consulting, tutoring, or social media work increases income. Multiple small income sources more effective than single focus now. Research investments and gather financial information - your mind processes it quickly. Short-term contracts and gig work brings variety and flexibility. Money through networking and connections.',
    predictions: [
      'Conversation or networking connection leads to unexpected opportunity',
      'Writing, blog post, or social media content you create gets strong response',
      'Learning new skill or taking class opens door you didn\'t expect',
      'Communication project or presentation goes exceptionally well',
      'Sibling or neighbor conversation provides valuable information or support',
      'Quick thinking or mental agility solves problem that\'s been stuck',
      'Multiple options or opportunities arise - your versatility handles them all',
      'Short trip or local exploration leads to interesting discovery',
      'Information you need arrives at perfect time from unexpected source',
      'Your curiosity and questions lead to insight or breakthrough understanding'
    ]
  }
};

export default DETAILED_INGRESSES;
