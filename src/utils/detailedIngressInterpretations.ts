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
  },

  'Sun-Aries': {
    name: 'Sun Ingress Aries',
    frequency: 'Once per year (around March 20-21)',
    duration: '~30 days',
    planetEnergy: 'The Sun represents conscious identity, ego, purpose, vitality, creative life force, and how you shine. It\'s your core self, your will, and your primary drive.',
    signEnergy: 'Aries represents new beginnings, courage, independence, leadership, initiative, and the pioneering spirit. It\'s the spark of self-assertion, the drive to be first, and pure initiating force.',
    eventMeaning: 'Sun in Aries marks the astrological new year and spring equinox - pure initiating energy. Your conscious focus shifts to starting fresh, asserting yourself, and taking bold action. This is the month for new beginnings, launching projects, and pioneering efforts. Courage, independence, and leadership come to the forefront. Energy runs high. Perfect time to start what you\'ve been planning.',
    loveRelationships: 'Take initiative in romance - make the first move, ask someone out, or reignite passion in existing relationship. Be direct about what you want. Independence and excitement matter more than security this month. Attract partners through confidence and boldness. Some relationships need more space and adventure. Sexual energy and physical chemistry intensify.',
    familyHome: 'Assert yourself with family rather than accommodating everyone else. Take leadership in family matters or home projects. Good time to start home renovations requiring quick action. Family dynamics may become more competitive or direct. Independence from family patterns feels important. Physical activity at home or with family recommended.',
    businessCareer: 'Excellent month for career initiative - start new project, launch business, apply for promotion, or take on leadership role. Your confidence and direct approach impress others. Bold moves succeed. Entrepreneurship and independent work favored. Competition brings out your best. Assert yourself with boss or clients. Take calculated risks.',
    moneyFinances: 'Start new income streams or invest in yourself. Earning through independent action, leadership, or competitive fields increases. Good time to ask for raise directly or negotiate aggressively. Be bold but not reckless with money. Financial courage serves you. Money flows to those who take initiative and assert their worth.',
    predictions: [
      'You will start something new with unusual confidence and courage',
      'Bold career move or business launch succeeds through pure initiative',
      'Physical energy peaks - perfect time to begin fitness routine or compete',
      'Leadership opportunity where your directness is exactly what\'s needed',
      'Romantic pursuit through direct approach works better than subtle hints',
      'Conflict that\'s been simmering comes to head - address it directly',
      'Impatience leads to quick decision that turns out right',
      'Competitor challenges you and brings out your fighting spirit',
      'Quick action on time-sensitive opportunity pays off',
      'Assertiveness breakthrough - you say or do something brave'
    ]
  },

  'Sun-Taurus': {
    name: 'Sun Ingress Taurus',
    frequency: 'Once per year (around April 20-21)',
    duration: '~30 days',
    planetEnergy: 'The Sun represents conscious identity, ego, purpose, vitality, creative life force, and how you shine. It\'s your core self, your will, and your primary drive.',
    signEnergy: 'Taurus represents stability, sensory pleasure, material security, patience, persistence, comfort, and tangible beauty. It\'s the energy of grounding, enjoying physical reality, and building lasting value.',
    eventMeaning: 'Sun in Taurus shifts focus to stability, pleasure, and building lasting value. This month favors slowing down, enjoying sensory experiences, and working patiently toward tangible goals. Quality over quantity. Beauty, comfort, and security matter most. Ground your energy in physical reality. Perfect time for financial planning, creating beauty, and deepening commitments.',
    loveRelationships: 'Romance becomes sensual, stable, and grounded. Physical touch, good food, nature dates, and quality time deepen bonds. Show love through tangible actions and gifts. Relationships stabilize and become more committed. Slow-building romance favored over quick passion. Loyalty and consistency matter. Enjoy simple pleasures together.',
    familyHome: 'Home becomes sanctuary - make it beautiful and comfortable. Good time for decorating, buying quality furniture, gardening, or creating cozy atmosphere. Family financial planning and building security favored. Cooking family meals and enjoying simple pleasures strengthens bonds. Slow, patient approach to family matters works best.',
    businessCareer: 'Career success through demonstrating value, quality work, and patient persistence. Build your reputation through reliability and delivering excellence. Good time to ask for raise based on proven worth. Work related to beauty, food, finance, art, or luxury goods thrives. Slow, steady progress beats rushing.',
    moneyFinances: 'Excellent month for financial planning, saving, and building security. Money flows through quality work and proven value. Good time to increase prices, invest wisely, or build multiple income streams patiently. Spending on lasting quality better than cheap quick fixes. Build wealth steadily.',
    predictions: [
      'Financial reward for consistent quality work and proven value',
      'Purchase of quality item or luxury that brings lasting pleasure',
      'Romance deepens through sensory pleasures and physical touch',
      'Home improvement makes space significantly more beautiful',
      'Relationship commitment deepens through stability and shared values',
      'Slowing down and enjoying process brings more satisfaction',
      'Financial opportunity through beauty, art, food, or tangible service',
      'Nature experience grounds and restores you',
      'Realization of your true worth leads to better treatment',
      'Sensory pleasure brings deep satisfaction and contentment'
    ]
  },

  'Sun-Gemini': {
    name: 'Sun Ingress Gemini',
    frequency: 'Once per year (around May 21-22)',
    duration: '~30 days',
    planetEnergy: 'The Sun represents conscious identity, ego, purpose, vitality, creative life force, and how you shine. It\'s your core self, your will, and your primary drive.',
    signEnergy: 'Gemini represents curiosity, versatility, communication, mental quickness, learning, connections, and seeing multiple perspectives. It\'s the energy of questions, conversations, and information exchange.',
    eventMeaning: 'Sun in Gemini shifts focus to communication, learning, and mental stimulation. This month favors networking, writing, teaching, and gathering information. Curiosity drives you. Variety prevents boredom. Perfect time for short trips, taking classes, starting conversations, and exploring multiple interests. Your mind is sharp and quick.',
    loveRelationships: 'Communication and mental connection take center stage in romance. Interesting conversations, witty banter, and learning together deepen bonds. Attraction to intelligent, versatile partners. Keep romance light, fun, and varied - too much intensity feels heavy. Flirting through clever conversation. Text and message communication flows easily.',
    familyHome: 'Excellent communication with siblings, neighbors, and local community. Family conversations flow easily - good time for family meetings or catching up. Home benefits from organization, creating communication hub, or study space. Short family trips or local exploration. Variety and mental stimulation at home important.',
    businessCareer: 'Peak time for communication-based work - writing, teaching, presenting, sales, media, networking, consulting. Your ideas are sharp and articulate. Excellent for networking, pitching proposals, learning new skills quickly. Multiple projects and variety keep you productive. Multitasking ability peaks.',
    moneyFinances: 'Financial opportunities through communication, information, teaching, or selling. Freelance writing, consulting, tutoring, or social media work increases income. Multiple small income sources effective. Research investments and gather financial information - your mind processes it quickly. Money through networking and connections.',
    predictions: [
      'Conversation or networking connection leads to unexpected opportunity',
      'Writing, presentation, or social media content gets strong response',
      'Learning new skill or taking class opens unexpected door',
      'Communication project goes exceptionally well',
      'Sibling or neighbor provides valuable information or support',
      'Quick thinking solves problem that\'s been stuck',
      'Multiple opportunities arise - your versatility handles them',
      'Short trip or local exploration leads to discovery',
      'Information arrives at perfect time from unexpected source',
      'Curiosity and questions lead to breakthrough understanding'
    ]
  },

  'Sun-Cancer': {
    name: 'Sun Ingress Cancer',
    frequency: 'Once per year (around June 21-22)',
    duration: '~30 days',
    planetEnergy: 'The Sun represents conscious identity, ego, purpose, vitality, creative life force, and how you shine. It\'s your core self, your will, and your primary drive.',
    signEnergy: 'Cancer represents nurturing, emotions, safety, family, roots, intuition, and the protective instinct. It\'s the energy of home, emotional security, and caring for yourself and others.',
    eventMeaning: 'Sun in Cancer marks the summer solstice - focus shifts to home, family, and emotional security. This month favors nesting, nurturing, and connecting with your roots and feelings. Intuition strengthens. Past and family history matter. Perfect time for home projects, family bonding, emotional healing, and creating safe spaces. Protect what you love.',
    loveRelationships: 'Romance becomes emotional, nurturing, and protective. Need for security and emotional safety intensifies. Show love through caring actions - cooking, creating comfort, emotional support. Vulnerability and sharing feelings deepen bonds. Attraction to partners who feel like home. Existing relationships need more emotional intimacy and reassurance. Family approval of partner matters more.',
    familyHome: 'Peak month for home and family focus. Perfect time for moving, renovating, decorating to create sanctuary, or spending quality time with family. Family gatherings and traditions strengthen bonds. Address family emotional needs. Nurture family members. Create or improve your safe haven. Roots and ancestry feel important. Cook, nest, and care for loved ones.',
    businessCareer: 'Career success through nurturing, caring, or family-oriented work. Real estate, food service, childcare, counseling, or home-based business thrive. Workplace becomes like family. Build professional security and protection. Emotional intelligence in career helps. Create safe, supportive work environment. Intuition guides career decisions wisely.',
    moneyFinances: 'Financial focus on security, savings, and family needs. Build nest egg and emergency fund. Money for home improvements or family security feels right. Real estate or family business investment favored. Earning through nurturing or caring work increases. Protect your resources. Save for emotional security, not just numbers.',
    predictions: [
      'Home improvement or move creates sanctuary that deeply satisfies you',
      'Family connection or tradition brings unexpected emotional fulfillment',
      'Emotional vulnerability with partner deepens intimacy significantly',
      'Intuitive feeling about situation proves absolutely right',
      'Nurturing someone (or being nurtured) heals old emotional wound',
      'Financial decision prioritizing security over risk pays off',
      'Childhood memory or family pattern surfaces for healing',
      'Creating safe, comfortable space restores your energy',
      'Work-life balance shift toward protecting family time',
      'You learn that honoring feelings is strength, not weakness'
    ]
  },

  'Sun-Leo': {
    name: 'Sun Ingress Leo',
    frequency: 'Once per year (around July 22-23)',
    duration: '~30 days',
    planetEnergy: 'The Sun represents conscious identity, ego, purpose, vitality, creative life force, and how you shine. It\'s your core self, your will, and your primary drive.',
    signEnergy: 'Leo represents creativity, self-expression, confidence, joy, romance, and radiant presence. It\'s the energy of shining brightly, creating from the heart, and celebrating life with enthusiasm.',
    eventMeaning: 'Sun in Leo - the Sun comes home to its ruling sign, maximizing creative power, confidence, and radiant self-expression. This month favors bold self-expression, creative projects, romance, fun, and shining your light. Confidence peaks. Life is theater - play your role boldly. Perfect time to create, perform, celebrate, and express your authentic self joyfully.',
    loveRelationships: 'Romance and passion intensify beautifully. Grand romantic gestures, playfulness, and drama (the good kind) enliven relationships. Single? You\'re magnetic and confident - attract admirers through authentic self-expression. Dating should be fun, exciting, and creative. Existing relationships need more play, romance, and mutual celebration. Express love boldly and generously. Loyalty and devotion strengthen.',
    familyHome: 'Family time becomes more joyful and creative. Organize family celebrations, entertainment, or creative projects together. Children (yours or others\') bring joy. Home becomes stage for self-expression - decorate boldly. Pride in family increases. Lead family activities with enthusiasm. Make home life more fun and celebratory. Express love for family dramatically.',
    businessCareer: 'Excellent month for leadership, creative work, performance, or any career requiring confidence and self-expression. Entertainment, arts, teaching, or working with children favored. Your talents shine - perfect time to showcase your work, present ideas, or take center stage professionally. Generous leadership inspires others. Recognition and praise likely if you shine authentically.',
    moneyFinances: 'Money flows through creative work, performance, or generous self-expression. Spending on pleasure, entertainment, or creative pursuits feels right but watch excess. Financial confidence helps but avoid risky speculation. Earning through what makes your heart sing. Generous with money but ensure you can afford it. Invest in joy and self-expression within budget.',
    predictions: [
      'Creative project or performance receives recognition and appreciation',
      'Romantic gesture or date creates magical, memorable experience',
      'Confidence breakthrough - you shine in situation that used to intimidate you',
      'Leadership opportunity where your authentic self is your greatest asset',
      'Child or creative endeavor brings unexpected joy and pride',
      'Generous act toward someone you love deepens relationship beautifully',
      'Artistic or self-expression pursuit reveals hidden talent',
      'Fun and play restore your energy better than serious productivity',
      'Recognition or praise for work that comes from your heart',
      'You will learn that being authentically yourself attracts right people and opportunities'
    ]
  },

  'Sun-Virgo': {
    name: 'Sun Ingress Virgo',
    frequency: 'Once per year (around August 22-23)',
    duration: '~30 days',
    planetEnergy: 'The Sun represents conscious identity, ego, purpose, vitality, creative life force, and how you shine. It\'s your core self, your will, and your primary drive.',
    signEnergy: 'Virgo represents refinement, service, health, organization, discernment, and practical improvement. It\'s the energy of making things better through detailed attention and skillful craft.',
    eventMeaning: 'Sun in Virgo shifts focus to improvement, organization, health, and practical service. This month favors refining systems, improving health habits, organizing your life, and being of service. Details matter. Quality and efficiency become priorities. Perfect time for health checkups, organizing projects, skill development, and practical problem-solving.',
    loveRelationships: 'Love through service and practical care. Show affection through helpful actions, attention to partner\'s needs, and making their life easier. Relationships improve through addressing practical issues and daily routines. Analyze what works and doesn\'t - refine your approach. Health and wellness activities together. Less drama, more practical devotion. Quality time over grand gestures.',
    familyHome: 'Perfect month for home organization, cleaning, repairs, and improving daily routines. Create systems that make family life run smoothly. Address health needs of family members. Serve family through practical help. Organize schedules, spaces, and responsibilities efficiently. Quality improvement projects at home. Attention to detail creates better living environment.',
    businessCareer: 'Excellent for work requiring precision, analysis, organization, or service. Healthcare, editing, crafts, analytics, quality control, or administrative work thrives. Perfect time to refine skills, improve systems, organize workspace, or solve practical problems. Your attention to detail and helpful nature gets recognized. Serve others through skillful work. Efficiency and quality matter most.',
    moneyFinances: 'Financial organization and improvement focus. Perfect time to budget, track expenses, eliminate waste, and improve financial systems. Earning through skilled service, healthcare, or detail-oriented work. Cut unnecessary expenses. Practical investments over speculation. Money saved through efficiency and careful attention. Quality purchases that serve practical needs.',
    predictions: [
      'Organization or system you implement significantly improves daily life',
      'Health improvement through attention to diet, exercise, or wellness routine',
      'Skill refinement makes your work noticeably better quality',
      'Practical help you offer someone solves their problem perfectly',
      'Budget or financial organization reveals savings opportunity',
      'Detail you notice prevents bigger problem or error',
      'Daily routine improvement creates more time and less stress',
      'Service you provide receives appreciation for its quality',
      'Analysis or discernment helps you make wise practical decision',
      'You learn that small consistent improvements create major results'
    ]
  },

  'Sun-Libra': {
    name: 'Sun Ingress Libra',
    frequency: 'Once per year (around September 22-23)',
    duration: '~30 days',
    planetEnergy: 'The Sun represents conscious identity, ego, purpose, vitality, creative life force, and how you shine. It\'s your core self, your will, and your primary drive.',
    signEnergy: 'Libra represents balance, partnership, beauty, harmony, diplomacy, and fairness. It\'s the energy of relationships, aesthetics, and seeking equilibrium through connection with others.',
    eventMeaning: 'Sun in Libra marks the autumn equinox - focus shifts to relationships, balance, beauty, and partnership. This month favors collaboration, beautifying your environment, seeking harmony, and improving relationships. Fairness and diplomacy matter. Perfect time for partnerships, aesthetic projects, social activities, and restoring balance to life.',
    loveRelationships: 'Peak month for romance, commitment, and partnership. Perfect time for weddings, relationship commitments, or significant relationship discussions. Single? Focus on partnership attracts potential partners. Existing relationships need more equality, balance, and mutual consideration. Beauty and romance thrive. Social activities together. Diplomacy and compromise strengthen bonds. Love blooms through fairness and aesthetic harmony.',
    familyHome: 'Family harmony through balance and fairness. Address inequalities or imbalances in family relationships diplomatically. Home beautification projects create peace and aesthetic pleasure. Family social gatherings or celebrations. Decor improvements focusing on beauty and balance. Mediate family conflicts fairly. Create more peaceful, beautiful, balanced home environment.',
    businessCareer: 'Excellent for partnership, collaboration, design, law, counseling, or beauty-related work. Build professional relationships and alliances. Mediate conflicts diplomatically. Perfect time for contracts, partnerships, or collaborative projects. Aesthetic work (design, fashion, beauty, arts) favored. Balance work and life. Your diplomacy and fairness advance career. Create beautiful, harmonious work.',
    moneyFinances: 'Financial partnerships or collaborations favored. Balance spending and saving, earning and enjoying. Invest in beauty, art, or aesthetic improvements within budget. Partnership financial decisions made fairly. Money through design, beauty services, law, or relationship-oriented work. Financial harmony through balanced approach - neither extreme spending nor deprivation.',
    predictions: [
      'Partnership or collaboration creates better result than solo effort',
      'Relationship conversation about fairness improves balance and satisfaction',
      'Aesthetic improvement to space brings unexpected peace and pleasure',
      'Diplomatic approach to conflict resolves it better than force',
      'Social connection or event leads to valuable relationship or opportunity',
      'Commitment or partnership decision feels perfectly balanced and right',
      'Beauty or design choice elevates quality of your environment',
      'Fairness and consideration you show returns to you multiplied',
      'Work collaboration demonstrates power of balanced partnership',
      'You learn that harmony requires active balancing, not passive avoiding'
    ]
  },

  'Sun-Scorpio': {
    name: 'Sun Ingress Scorpio',
    frequency: 'Once per year (around October 23-24)',
    duration: '~30 days',
    planetEnergy: 'The Sun represents conscious identity, ego, purpose, vitality, creative life force, and how you shine. It\'s your core self, your will, and your primary drive.',
    signEnergy: 'Scorpio represents depth, transformation, power, intimacy, truth, and regeneration. It\'s the energy of diving deep, facing shadows, and emerging transformed through intensity.',
    eventMeaning: 'Sun in Scorpio shifts focus to depth, transformation, intimacy, and power. This month favors deep work, shadow exploration, intimate connections, and releasing what no longer serves. Surface-level doesn\'t satisfy - dive deep. Perfect time for therapy, research, intimacy, transformation work, and confronting difficult truths. Death and rebirth cycles activate.',
    loveRelationships: 'Relationships intensify and deepen. Superficial connection feels empty - need deep emotional and sexual intimacy. Trust and vulnerability become crucial. Hidden relationship dynamics surface for transformation. Jealousy or power struggles possible - address them honestly. Sexual intimacy deepens. Secrets revealed. Relationships transform through facing truth. Deep bonding or decisive endings - no middle ground.',
    familyHome: 'Family secrets, hidden dynamics, or past issues surface for healing. Deep emotional work with family possible and productive. Clearing out what\'s dead or unused at home. Addressing family power dynamics. Inheritance or shared family resources. Transform family patterns. Intense family emotions need honest expression. Healing through depth, not superficiality.',
    businessCareer: 'Excellent for work requiring depth, research, investigation, transformation, or power. Psychology, research, detective work, surgery, finance, or crisis management favored. Uncover hidden information at work. Power dynamics surface - navigate wisely. Transformation of career possible. Deep focused work over surface productivity. Your intensity and investigative ability shine.',
    moneyFinances: 'Focus on shared finances, investments, taxes, inheritance, or debt. Transform financial situation through addressing what\'s hidden or denied. Research investments deeply. Joint financial decisions with partner or family. Eliminate financial dead weight. Power through financial transformation. Money through deep work, research, or transformative services. Financial truth surfaces - face it.',
    predictions: [
      'Secret or hidden information surfaces and changes your perspective significantly',
      'Intimate conversation deepens relationship to transformative new level',
      'Therapy, shadow work, or emotional depth work produces breakthrough',
      'Financial or resource investigation reveals important hidden truth',
      'Power dynamic at work or home requires honest confrontation',
      'Letting go of what\'s dead (relationship, habit, possession) frees you powerfully',
      'Sexual or emotional intimacy reaches unprecedented depth',
      'Research or deep investigation solves mystery or reveals crucial information',
      'Transformation through crisis or intensity makes you stronger',
      'You learn that depth and truth, though difficult, bring real power and freedom'
    ]
  },

  'Sun-Sagittarius': {
    name: 'Sun Ingress Sagittarius',
    frequency: 'Once per year (around November 22-23)',
    duration: '~30 days',
    planetEnergy: 'The Sun represents conscious identity, ego, purpose, vitality, creative life force, and how you shine. It\'s your core self, your will, and your primary drive.',
    signEnergy: 'Sagittarius represents expansion, optimism, adventure, truth-seeking, freedom, and philosophical understanding. It\'s the energy of growth, exploration, and finding meaning through broadening horizons.',
    eventMeaning: 'Sun in Sagittarius shifts focus to expansion, adventure, learning, and finding meaning. This month favors travel, education, philosophical exploration, and optimistic growth. Think big. Explore new horizons. Perfect time for trips, classes, teaching, publishing, outdoor adventures, and pursuing truth and meaning. Freedom and growth take priority.',
    loveRelationships: 'Relationships need more freedom, adventure, and philosophical connection. Explore new experiences together - travel, learning, outdoor activities. Honest, direct communication about beliefs and life philosophy. Attract partners through authenticity and adventure. Independence within togetherness. Existing relationships improve through shared growth and exploration. Too much routine feels stifling - add adventure.',
    familyHome: 'Family adventures, trips, or outdoor activities strengthen bonds. Share philosophical or spiritual discussions with family. Give family members more freedom. Home feels confining - get outside or plan expansion. Family education or cultural experiences. International family connections. Less control, more trust. Expand family horizons together through travel or learning.',
    businessCareer: 'Excellent for teaching, publishing, travel industry, international work, outdoor careers, or philosophical/spiritual professions. Think big about career - expand vision. Share knowledge and inspire others. Professional development through education or travel. Your optimism and big-picture thinking advance career. International opportunities. Risk-taking and growth over safety and stagnation.',
    moneyFinances: 'Financial optimism and growth focus. Invest in education, travel, or growth opportunities. International financial opportunities. Earning through teaching, travel, publishing, or outdoor work. Take calculated financial risks for expansion. Generous spending on experiences and learning. Abundance mindset attracts opportunities. Don\'t overspend from excessive optimism - balance faith with wisdom.',
    predictions: [
      'Travel or adventure creates memorable experience and new perspective',
      'Educational opportunity or class opens unexpected growth path',
      'Honest, direct conversation resolves issue through truth-telling',
      'Big vision or goal you set inspires you and attracts support',
      'International connection or multicultural experience broadens worldview',
      'Outdoor adventure or physical challenge brings freedom and joy',
      'Teaching or sharing knowledge benefits others and clarifies your own understanding',
      'Philosophical or spiritual insight answers question you\'ve been pondering',
      'Risk you take (calculated, not reckless) pays off with growth and opportunity',
      'You learn that freedom and growth require leaving comfort zone'
    ]
  },

  'Sun-Capricorn': {
    name: 'Sun Ingress Capricorn',
    frequency: 'Once per year (around December 21-22)',
    duration: '~30 days',
    planetEnergy: 'The Sun represents conscious identity, ego, purpose, vitality, creative life force, and how you shine. It\'s your core self, your will, and your primary drive.',
    signEnergy: 'Capricorn represents ambition, responsibility, discipline, achievement, mastery, and building lasting structures. It\'s the energy of climbing the mountain through persistent effort and mature commitment.',
    eventMeaning: 'Sun in Capricorn marks the winter solstice - focus shifts to goals, ambition, responsibility, and achievement. This month favors goal-setting, disciplined work, career advancement, and building lasting structures. Maturity and commitment matter. Perfect time for business planning, career moves, taking on responsibility, and working toward long-term success. Build your legacy.',
    loveRelationships: 'Relationships become more serious, committed, and goal-oriented. Assess relationship\'s long-term potential and viability. Show love through responsibility, commitment, and building future together. Maturity and reliability matter more than romance. Existing relationships deepen through shared goals and mutual respect. Traditional commitments (engagement, marriage) favored. Build relationship foundation patiently.',
    familyHome: 'Family responsibilities increase - handle them maturely. Respect family traditions and elders. Build family security and structure. Home improvements focusing on lasting quality and function. Financial planning for family future. Take leadership role in family. Duties may feel heavy but build something lasting. Honor commitments to family.',
    businessCareer: 'Peak month for career focus and advancement. Set ambitious goals and work toward them disciplined. Perfect time for promotions, business launches, professional development, or career planning. Your competence, responsibility, and ambition get recognized. Build professional reputation and authority. Long-term career strategy over quick wins. Leadership roles. Achieve through persistent effort.',
    moneyFinances: 'Serious financial planning and goal-setting. Build wealth through disciplined saving, wise investment, and long-term strategy. Increase income through career advancement or business growth. Financial responsibility and maturity. Invest in quality that lasts. Budget conservatively but invest in your future. Build financial security and structure systematically. Money through authority, expertise, or business acumen.',
    predictions: [
      'Goal you set and work toward systematically shows significant progress',
      'Career advancement or recognition for your competence and reliability',
      'Responsibility you take on is heavy but builds your strength and authority',
      'Long-term planning (financial, career, relationship) provides clarity and direction',
      'Mature, committed approach to situation succeeds where casual approach failed',
      'Professional reputation improves through consistent quality work',
      'Business or financial structure you build creates lasting security',
      'Respect and authority you earn through demonstrating capability',
      'Patience and persistence with difficult situation finally pays off',
      'You learn that lasting achievement requires sustained effort and commitment'
    ]
  },

  'Sun-Aquarius': {
    name: 'Sun Ingress Aquarius',
    frequency: 'Once per year (around January 20-21)',
    duration: '~30 days',
    planetEnergy: 'The Sun represents conscious identity, ego, purpose, vitality, creative life force, and how you shine. It\'s your core self, your will, and your primary drive.',
    signEnergy: 'Aquarius represents innovation, individuality, friendship, progress, humanitarian ideals, and revolutionary thinking. It\'s the energy of breaking from tradition to create a better future for all.',
    eventMeaning: 'Sun in Aquarius shifts focus to innovation, friendship, community, and progressive ideals. This month favors networking, social causes, technological innovation, and expressing your unique individuality. Think outside the box. Perfect time for social activism, joining groups, technological projects, and pursuing your authentic vision regardless of convention. Be yourself boldly.',
    loveRelationships: 'Relationships need more freedom, friendship, and intellectual connection. Unconventional approaches to romance work better than traditional. Need space and independence within relationship. Attract partners who respect your individuality. Existing relationships improve through more friendship and less possessiveness. Communicate intellectually. Join causes or groups together. Freedom and authenticity over security and convention.',
    familyHome: 'Family relationships benefit from giving each other more space and independence. Accept family members\' uniqueness rather than demanding conformity. Home becomes gathering place for friends and community. Modernize or innovate home systems. Family dynamics shift toward more equality and less hierarchy. Unconventional family structures or values. Respect everyone\'s individuality.',
    businessCareer: 'Excellent for work in technology, innovation, social causes, networking, or progressive fields. Your unique perspective and innovative ideas advance career. Collaborate with groups or teams. Network actively. Perfect time for launching innovative projects, joining professional organizations, or advocating for progressive change at work. Your individuality is your professional asset.',
    moneyFinances: 'Financial innovation and unconventional approaches. Technology or cryptocurrency investments. Earning through networking, innovation, social media, or progressive causes. Group financial ventures or crowdfunding. Think outside traditional financial box. Spend on technology or causes you believe in. Money through expressing unique gifts and serving community needs.',
    predictions: [
      'Networking or social connection leads to unexpected opportunity',
      'Innovative idea or unconventional approach solves persistent problem',
      'Group or community you join provides support and belonging',
      'Technology or social media project succeeds through your unique approach',
      'Standing up for your individuality attracts right people and opportunities',
      'Humanitarian cause or social activism you engage in creates meaningful change',
      'Friendship deepens relationship in way traditional romance couldn\'t',
      'Breaking from convention or tradition frees you to authentic expression',
      'Collaborative or group project demonstrates power of collective effort',
      'You learn that being authentically different is your greatest strength'
    ]
  },

  'Sun-Pisces': {
    name: 'Sun Ingress Pisces',
    frequency: 'Once per year (around February 18-19)',
    duration: '~30 days',
    planetEnergy: 'The Sun represents conscious identity, ego, purpose, vitality, creative life force, and how you shine. It\'s your core self, your will, and your primary drive.',
    signEnergy: 'Pisces represents compassion, spirituality, imagination, transcendence, unity, and dissolving boundaries. It\'s the energy of mystical connection, artistic inspiration, and merging with the infinite.',
    eventMeaning: 'Sun in Pisces shifts focus to spirituality, compassion, imagination, and transcendence. This month favors meditation, creative arts, helping others, and connecting with the mystical. Boundaries soften. Intuition heightens. Perfect time for spiritual practice, artistic creation, compassionate service, and surrendering to flow. Listen to dreams and subtle guidance. Rest and restoration important.',
    loveRelationships: 'Romance becomes spiritual, compassionate, and imaginative. Deep soul connection and unconditional love matter most. Boundaries may blur - maintain healthy limits while staying open-hearted. Show love through compassion, understanding, and spiritual connection. Attract partners through vulnerability and empathy. Existing relationships deepen through shared spirituality or creative expression. Sacrifice for love, but not self-erasure.',
    familyHome: 'Family relationships benefit from more compassion, forgiveness, and acceptance. Let go of old family resentments. Spiritual or creative family time. Home becomes sanctuary for rest and restoration. Music, art, or spiritual practice at home. Help family members compassionately. Create peaceful, transcendent atmosphere. Family healing through forgiveness and unconditional love.',
    businessCareer: 'Excellent for work in healing, arts, spirituality, film, photography, music, or helping professions. Your creativity and compassion shine professionally. Intuition guides career decisions wisely. Perfect time for creative projects, compassionate service, or work connecting you to something greater. Trust the process rather than forcing. Career may feel less defined but more meaningful.',
    moneyFinances: 'Financial intuition strengthens - trust subtle guidance about money. Earning through creative, healing, or spiritual work. Spend on art, music, spiritual development. Charitable giving from compassionate impulse. Boundaries around money may blur - maintain practical limits while staying generous. Money flows through imagination and service. Sometimes trust is wiser than calculation.',
    predictions: [
      'Spiritual practice or meditation produces profound insight or peace',
      'Creative or artistic expression channels inspiration beautifully',
      'Compassionate act toward someone creates deep connection or healing',
      'Dream or intuitive hit provides accurate guidance',
      'Forgiveness (giving or receiving) releases old pain and frees you',
      'Music, art, or beauty moves you to tears and opens your heart',
      'Helping someone in need brings more satisfaction than personal achievement',
      'Surrender to situation you can\'t control brings unexpected resolution',
      'Mystical or spiritual experience connects you to something greater',
      'You learn that sometimes not knowing and trusting is wiser than controlling'
    ]
  }
};

export default DETAILED_INGRESSES;
