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

  'Venus-Aries': {
    name: 'Venus Ingress Aries',
    frequency: 'Approximately once per year',
    duration: '~3-4 weeks',
    planetEnergy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful and pleasurable.',
    signEnergy: 'Aries represents new beginnings, courage, independence, leadership, initiative, and the pioneering spirit. It\'s the spark of self-assertion, the drive to be first, and pure initiating force.',
    eventMeaning: 'Venus in Aries brings passionate, direct, bold love and attraction. Romantic and aesthetic energy becomes assertive and action-oriented. The next 3-4 weeks favor pursuing what you want romantically, starting new creative projects, direct expression of affection, and independent pleasure. Love becomes more exciting, spontaneous, and adventurous. Excellent for new relationships, bold romantic gestures, or refreshing existing partnerships. Beauty tastes become bolder. May rush into love or spend impulsively - enjoy the passion but stay aware.',
    loveRelationships: 'Passionate pursuit and direct romantic action. Perfect time to make first move, ask someone out boldly, or reignite excitement in existing relationship. Express affection directly and enthusiastically. Attraction to confident, independent partners with adventurous spirit. Sexual chemistry and physical attraction intensify. Romance should be exciting, active, and spontaneous - boredom feels unbearable. Some may rush into new relationships - enjoy the passion but don\'t skip important stages.',
    familyHome: 'More independence from family or assertion of individual needs at home. Good time to initiate home improvements requiring decisive action, decorate boldly, or pursue individual interests. Family relationships benefit from more honesty and directness. Active family outings or physical activities together. Less patience for family drama - address issues directly. Create more personal space and autonomy at home.',
    businessCareer: 'Career success through bold initiative, creative courage, and direct approach. Excellent for work in fashion, sports, entrepreneurship, sales requiring assertiveness, or pioneering creative fields. Start new projects confidently or pitch ideas boldly. Your enthusiasm and direct approach attract clients and opportunities. Good time to ask for what you want professionally or negotiate assertively. Make your work more exciting and independent.',
    moneyFinances: 'Bold financial action and independent earning. Good time to start new income stream, invest in yourself, or pursue money opportunities assertively. Earning through independent work, sales, competitive fields, or exciting ventures. Spending on adventure, sports, fashion, or what makes you feel confident. Impulse purchases possible - channel enthusiasm into smart financial boldness, not reckless spending. Money flows to those who take initiative.',
    predictions: [
      'Romantic pursuit or bold first move leads to exciting new connection',
      'Confidence in pursuing what you want attracts right person or opportunity',
      'Financial opportunity through taking initiative others hesitate on',
      'Creative project you start with passion and enthusiasm',
      'Spontaneous date or adventure that brings excitement and joy',
      'Direct expression of feelings clears air and deepens relationship',
      'Purchase or investment in yourself that boosts confidence',
      'New relationship that begins quickly with strong physical attraction',
      'Independence you assert in relationship improves dynamics',
      'You learn that direct pursuit of what you want works better than waiting'
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

  'Venus-Gemini': {
    name: 'Venus Ingress Gemini',
    frequency: 'Approximately once per year',
    duration: '~3-4 weeks',
    planetEnergy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful and pleasurable.',
    signEnergy: 'Gemini represents curiosity, versatility, communication, mental quickness, learning, connections, and seeing multiple perspectives. It\'s the energy of questions, conversations, and information exchange.',
    eventMeaning: 'Venus in Gemini brings playful, communicative, curious love and attraction. Romantic and aesthetic energy becomes light and versatile. The next 3-4 weeks favor flirting, interesting conversations, variety in relationships, mental stimulation, and social pleasures. Love becomes more intellectual, fun, and varied. Excellent for meeting new people, witty romance, creative communication, or exploring multiple interests. Beauty tastes become eclectic. May scatter romantic energy - enjoy variety but maintain depth where it matters.',
    loveRelationships: 'Romance through conversation, wit, and mental connection. Perfect time for interesting dates involving talk, learning, or variety. Flirt through clever banter and playful communication. Attraction to intelligent, versatile, communicative partners. Relationships thrive through shared ideas, laughter, and mental stimulation. Text and message romance especially good. Keep things light, fun, and varied - too much intensity feels heavy. Some may date multiple people or explore options.',
    familyHome: 'Family socializing and communication increase. Good time for family gatherings with conversation, games, or learning together. Home benefits from creating spaces for communication and variety. Short family trips or local exploration. Siblings and extended family connections strengthen. Family time should be mentally stimulating and varied - routine family patterns feel boring. Create more fun, playful family atmosphere.',
    businessCareer: 'Career success through communication, networking, versatility, and social skills. Excellent for work in writing, teaching, sales, media, social networking, public relations, or variety-focused fields. Your charm, wit, and communication skills attract professional opportunities. Good time to network widely, pitch ideas charmingly, or start communication-based projects. Multiple professional interests or projects keep you engaged. Build relationships through interesting conversation.',
    moneyFinances: 'Financial opportunities through communication, variety, networking, and intellectual pursuits. Good time for multiple income streams, freelance variety work, or earning through words and ideas. Spending on books, classes, communication tools, or varied experiences. Money through social connections and versatile skills. Financial decisions benefit from gathering information and exploring options. Avoid scattered financial focus - variety is good, but follow through matters too.',
    predictions: [
      'Romantic connection through interesting conversation or intellectual attraction',
      'Social event or networking where your charm and wit attract opportunities',
      'Financial opportunity through communication skills or versatile talents',
      'Purchase of books, classes, or experiences that stimulate your mind',
      'Relationship improves through more playful communication and variety',
      'Flirtation or light romance that brings fun without heavy commitment',
      'Multiple interests or projects that keep you engaged and curious',
      'Sibling or neighbor connection that brings pleasure and support',
      'Creative or communication project that showcases your versatility',
      'You learn that mental connection and variety keep love and life interesting'
    ]
  },

  'Venus-Cancer': {
    name: 'Venus Ingress Cancer',
    frequency: 'Approximately once per year',
    duration: '~3-4 weeks',
    planetEnergy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful and pleasurable.',
    signEnergy: 'Cancer represents nurturing, emotions, safety, family, roots, intuition, and the protective instinct. It\'s the energy of home, emotional security, and caring for yourself and others.',
    eventMeaning: 'Venus in Cancer brings nurturing, emotional, protective love and attraction. Romantic and aesthetic energy becomes caring and home-focused. The next 3-4 weeks favor deepening emotional intimacy, family bonding, home beautification, and creating safety in relationships. Love becomes more tender, vulnerable, and caring. Excellent for commitment deepening, family time, home improvement, or emotional healing. Beauty tastes become cozy and nostalgic. May become overly protective or moody - nurture without smothering.',
    loveRelationships: 'Romance through emotional nurturing, vulnerability, and creating safety together. Perfect time for intimate emotional conversations, cooking together, staying home cuddling, or meeting family. Express love through caring actions, emotional support, and creating security. Attraction to partners who feel emotionally safe and family-oriented. Relationships deepen through vulnerability and shared feelings. Need for reassurance increases - give and receive emotional comfort. Some relationships move toward commitment or family planning.',
    familyHome: 'Peak time for family bonding, home beautification, and creating emotional sanctuary. Excellent for family gatherings, improving home comfort and beauty, decorating nostalgically, or strengthening family relationships. Cooking for loved ones and creating cozy atmosphere brings deep satisfaction. Family financial planning or property decisions. Express love for family through nurturing care. Home becomes center of pleasure and comfort. Invest in making home feel safe and beautiful.',
    businessCareer: 'Career success through nurturing approach, emotional intelligence, and caring service. Excellent for work in real estate, food service, childcare, interior design, family business, counseling, or home-based ventures. Your caring, protective approach attracts clients and opportunities. Good time to build workplace relationships through emotional support, create comfortable work environment, or pursue family-friendly career options. Workplace becomes like family.',
    moneyFinances: 'Financial focus on home, family security, and emotional comfort. Good time for home improvements that add beauty and value, family financial planning, or real estate investment. Earning through nurturing work, home-based business, or caring services. Spending on home comfort, family needs, or creating beautiful sanctuary. Money decisions consider emotional security and family wellbeing. Save for nest egg and protect resources. Build wealth through property and family-oriented ventures.',
    predictions: [
      'Relationship deepens through emotional vulnerability and nurturing care',
      'Home improvement that makes space significantly more comfortable and beautiful',
      'Family connection or gathering that brings deep emotional satisfaction',
      'Romantic evening at home that creates intimacy better than going out',
      'Financial decision prioritizing home or family security pays off',
      'Cooking or caring for someone creates deep connection and pleasure',
      'Emotional conversation where vulnerability strengthens relationship bond',
      'Purchase for home that creates lasting comfort and beauty',
      'Family tradition or nostalgic activity that brings unexpected joy',
      'You learn that emotional safety and nurturing care deepen love and connection'
    ]
  },

  'Venus-Leo': {
    name: 'Venus Ingress Leo',
    frequency: 'Approximately once per year',
    duration: '~3-4 weeks',
    planetEnergy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful and pleasurable.',
    signEnergy: 'Leo represents creativity, self-expression, confidence, joy, romance, and radiant presence. It\'s the energy of shining brightly, creating from the heart, and celebrating life with enthusiasm.',
    eventMeaning: 'Venus in Leo brings passionate, generous, dramatic love and attraction. Romantic and aesthetic energy becomes bold and theatrical. The next 3-4 weeks favor grand romance, creative self-expression, celebration, and generous love. Love becomes more confident, playful, and dramatic. Excellent for romance, creative projects, entertainment, or expressing yourself boldly. Beauty tastes become luxurious and attention-getting. May seek too much attention - shine authentically but allow others their spotlight too.',
    loveRelationships: 'Peak romance and passion time. Perfect for grand romantic gestures, dramatic date nights, creative expressions of love, or playful celebration together. Express love generously, confidently, and theatrically. Attraction to partners who appreciate your radiance and celebrate you. Relationships thrive through fun, romance, mutual admiration, and creative play. Give and receive compliments and praise. Some relationships deepen through loyalty and devotion. Single? You\'re magnetic - shine and attract admirers.',
    familyHome: 'Family time becomes more joyful, celebratory, and fun. Excellent for family parties, entertainment, creative projects together, or celebrating family achievements. Home becomes stage for self-expression - decorate boldly and luxuriously. Express love for family generously and praise their accomplishments. Children (yours or others\') bring special joy. Family pride increases. Create more play and celebration in family life. Make home beautiful and impressive.',
    businessCareer: 'Career success through confident self-expression, creativity, and generous leadership. Excellent for work in entertainment, arts, luxury goods, teaching, working with children, or any field requiring charisma. Your confidence and creative talents attract professional recognition. Good time to showcase work, present boldly, or take center stage professionally. Lead with warmth and generosity. Build professional relationships through authentic appreciation. Charge what you\'re worth confidently.',
    moneyFinances: 'Financial confidence and earning through creativity or performance. Good time to increase prices based on unique value, pursue creative income, or earn through entertaining or teaching. Spending on luxury, entertainment, creative expression, or items that make you feel special. Generous with money but ensure you can afford it. Financial decisions should reflect your worth and creative value. Invest in self-expression and joy within budget. Money through shining your talents.',
    predictions: [
      'Romantic gesture or date that creates magical, memorable experience',
      'Creative project or performance that receives recognition and appreciation',
      'Purchase of luxury or beauty item that makes you feel confident and special',
      'Relationship deepens through playful fun and mutual celebration',
      'Financial opportunity through showcasing your creative talents boldly',
      'Compliment or praise you give someone brightens their day significantly',
      'Social event or party where you shine and attract positive attention',
      'Generous act of love creates deep appreciation and connection',
      'Creative self-expression brings unexpected joy and recognition',
      'You learn that confident, generous self-expression attracts love and opportunity'
    ]
  },

  'Venus-Virgo': {
    name: 'Venus Ingress Virgo',
    frequency: 'Approximately once per year',
    duration: '~3-4 weeks',
    planetEnergy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful and pleasurable.',
    signEnergy: 'Virgo represents refinement, service, health, organization, discernment, and practical improvement. It\'s the energy of making things better through detailed attention and skillful craft.',
    eventMeaning: 'Venus in Virgo brings practical, helpful, refined love and attraction. Romantic and aesthetic energy becomes service-oriented and detail-focused. The next 3-4 weeks favor showing love through helpful actions, improving relationships, health and wellness focus, and refining your environment. Love becomes more practical and analytical. Excellent for relationship improvement, health and beauty routines, organizing spaces beautifully, or acts of service. Beauty tastes become understated and functional. May be overly critical - help and improve, but accept imperfection.',
    loveRelationships: 'Love through practical service, helpful actions, and attentive care. Perfect time for showing affection by helping partner, supporting their health, or improving daily life together. Express love through noticing details of what they need and providing it. Attraction to competent, helpful, health-conscious partners. Relationships improve through addressing practical issues, establishing healthy routines, or refining how you relate. Some may analyze relationship too much - help but don\'t criticize.',
    familyHome: 'Family relationships benefit from practical help and service. Excellent for organizing home beautifully and functionally, establishing family health routines, or helping family members with practical needs. Home improvement focusing on efficiency and refined beauty. Family time through shared work projects or wellness activities. Show love for family through useful assistance. Create more organized, healthy, beautiful home environment. Attention to detail improves family life quality.',
    businessCareer: 'Career success through quality work, helpful service, and attention to detail. Excellent for work in healthcare, wellness, crafts, editing, analytics, quality control, or service professions. Your competence and helpful approach attract professional recognition. Good time to refine work quality, organize workspace beautifully, or improve work processes. Build client relationships through reliable, excellent service. Earn through skillful, detail-oriented work. Value your expertise appropriately.',
    moneyFinances: 'Financial improvement through practical analysis and refined budgeting. Good time to organize finances, cut unnecessary expenses, invest in health and quality, or earn through skilled service. Spending on health, wellness, quality tools, or practical beauty that serves a purpose. Financial decisions should be analytical and efficient. Money through competent work and attention to value. Build wealth through practical improvements and refined financial systems. Invest in what improves quality of life.',
    predictions: [
      'Helpful action or service you provide strengthens relationship significantly',
      'Home organization or refinement that improves both beauty and function',
      'Health or wellness improvement through attention to diet, exercise, or self-care',
      'Financial analysis or budget refinement that reveals savings opportunity',
      'Relationship improves through addressing practical issues helpfully',
      'Purchase of quality item that serves practical need beautifully',
      'Work quality or service excellence receives appreciation and recognition',
      'Detail you notice about partner\'s needs allows you to help them perfectly',
      'Daily routine improvement creates more time, health, and satisfaction',
      'You learn that practical service and attention to detail are powerful expressions of love'
    ]
  },

  'Venus-Libra': {
    name: 'Venus Ingress Libra',
    frequency: 'Approximately once per year',
    duration: '~3-4 weeks',
    planetEnergy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful and pleasurable.',
    signEnergy: 'Libra represents balance, partnership, beauty, harmony, diplomacy, and fairness. It\'s the energy of relationships, aesthetics, and seeking equilibrium through connection with others.',
    eventMeaning: 'Venus in Libra is the goddess of love in her second home sign - Venus rules Libra, so this placement maximizes relationship harmony, beauty, and partnership. Love becomes more romantic, balanced, and aesthetically focused. The next 3-4 weeks favor partnerships, commitments, beautifying environments, social activities, and seeking balance. This is the most romantic, partnership-oriented, beauty-seeking Venus transit. Perfect time for weddings, commitments, or relationship deepening. May avoid conflict for harmony - seek peace but address issues.',
    loveRelationships: 'Peak romance and partnership time. Perfect for weddings, commitments, relationship discussions, or deepening partnerships. Romance becomes elegant, balanced, and harmonious. Express love through beautiful gestures, fair consideration, and creating aesthetic experiences together. Attraction to charming, balanced, aesthetically aware partners. Relationships thrive through equality, beauty, and mutual consideration. Social activities together strengthen bonds. Single? Focus on partnership attracts ideal partners. Some avoid necessary conflicts - seek harmony but address issues diplomatically.',
    familyHome: 'Family harmony through balance, fairness, and beauty. Excellent for family social events, beautifying home aesthetically, or mediating family relationships diplomatically. Home becomes showcase of beauty and peaceful atmosphere. Family decisions made fairly and collaboratively. Decor improvements focusing on balance and elegance. Family time through cultural activities, art, or social gatherings. Create more peace, beauty, and balance in family relationships and home environment.',
    businessCareer: 'Career success through partnership, diplomacy, and aesthetic sense. Excellent for work in law, counseling, design, fashion, beauty, arts, mediation, or relationship-oriented fields. Your charm, fairness, and aesthetic sense attract professional success. Good time to form partnerships, collaborate, beautify work, or mediate conflicts. Build client relationships through diplomatic grace and aesthetic awareness. Negotiate contracts or agreements. Create beautiful, harmonious work.',
    moneyFinances: 'Financial partnerships and balanced money management. Good time for partnership financial agreements, collaborative ventures, or balanced budgeting. Earning through beauty work, design, law, counseling, or relationship services. Spending on beauty, art, fashion, or aesthetic improvements. Financial decisions should be fair and balanced. Partnership income or shared financial planning favored. Money through charm, aesthetic sense, and relationship skills. Invest in beauty and partnerships.',
    predictions: [
      'Romantic connection or relationship commitment that feels perfectly balanced',
      'Aesthetic improvement to space creates beautiful, harmonious environment',
      'Partnership or collaboration that succeeds through mutual fairness and balance',
      'Social event where your charm attracts romantic or professional opportunities',
      'Financial partnership or agreement reached through fair negotiation',
      'Purchase of beautiful item or aesthetic experience that brings lasting pleasure',
      'Relationship conversation about equality improves balance and satisfaction',
      'Diplomatic approach to conflict resolves it gracefully and harmoniously',
      'Wedding, commitment, or partnership celebration of your own or others\'',
      'You learn that balanced partnership and aesthetic beauty create deep satisfaction'
    ]
  },

  'Venus-Scorpio': {
    name: 'Venus Ingress Scorpio',
    frequency: 'Approximately once per year',
    duration: '~3-4 weeks',
    planetEnergy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful and pleasurable.',
    signEnergy: 'Scorpio represents depth, transformation, power, intimacy, truth, and regeneration. It\'s the energy of diving deep, facing shadows, and emerging transformed through intensity.',
    eventMeaning: 'Venus in Scorpio brings intense, deep, transformative love and attraction. Romantic and aesthetic energy becomes passionate and all-or-nothing. The next 3-4 weeks favor deep intimacy, emotional transformation, passionate connections, and facing relationship truths. Love becomes more intense, loyal, and sexually charged. Excellent for deepening bonds, healing relationship wounds, or transformative intimacy. Beauty tastes become dark and magnetic. May become possessive or jealous - embrace depth but allow freedom.',
    loveRelationships: 'Intense, passionate, deeply bonding romance. Perfect time for deepening emotional and sexual intimacy, sharing secrets, or transforming relationship through truth. Express love with intensity, loyalty, and passionate devotion. Attraction to deep, mysterious, emotionally powerful partners. Relationships either deepen profoundly or end decisively - no surface connection satisfies. Sexual intimacy reaches new depths. Jealousy or power struggles possible - address honestly. Vulnerability and trust transform relationships. Some commit deeply or heal old wounds.',
    familyHome: 'Family dynamics intensify - hidden issues surface for transformation. Excellent for deep family healing conversations, addressing family shadows, or transforming family relationships through honesty. Home becomes private sanctuary and place for deep emotional work. Family financial matters like inheritance or shared resources. Power dynamics in family need addressing. Family secrets may surface. Intense family emotions require honest expression. Transform family patterns through facing truth.',
    businessCareer: 'Career success through depth, intensity, transformation, and powerful presence. Excellent for work in psychology, research, finance, crisis management, detective work, surgery, or transformative fields. Your intensity and depth attract professional recognition. Good time to transform career, address workplace power dynamics, or pursue deep, focused work. Build professional relationships through trust and depth. Earn through powerful, transformative work. Uncover hidden professional opportunities.',
    moneyFinances: 'Financial transformation and deep money work. Good time for investments, dealing with shared finances, taxes, debt, or inheritance. Earning through transformative work, depth services, research, or managing others\' resources. Spending on deep experiences, transformation, or what empowers you. Financial decisions should penetrate beneath surface to real value. Money through intensity, power, and transformation. Address financial shadows or hidden issues. Transform financial situation profoundly.',
    predictions: [
      'Romantic or sexual intimacy deepens to transformative new level',
      'Financial opportunity through inheritance, investment, or shared resources',
      'Relationship transforms through confronting difficult truth or shadow honestly',
      'Powerful attraction or connection that feels fated and intense',
      'Purchase or investment in something powerful, transformative, or deeply valuable',
      'Family secret or hidden dynamic surfaces and transforms relationships',
      'Deep emotional healing through vulnerability and intimate connection',
      'Power dynamic in relationship addressed honestly, creating healthier balance',
      'Passionate loyalty or devotion deepens commitment profoundly',
      'You learn that depth, intensity, and truth create transformative love and connection'
    ]
  },

  'Venus-Sagittarius': {
    name: 'Venus Ingress Sagittarius',
    frequency: 'Approximately once per year',
    duration: '~3-4 weeks',
    planetEnergy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful and pleasurable.',
    signEnergy: 'Sagittarius represents expansion, optimism, adventure, truth-seeking, freedom, and philosophical understanding. It\'s the energy of growth, exploration, and finding meaning through broadening horizons.',
    eventMeaning: 'Venus in Sagittarius brings adventurous, free-spirited, optimistic love and attraction. Romantic and aesthetic energy becomes expansive and truth-seeking. The next 3-4 weeks favor adventure, travel, learning together, freedom in relationships, and optimistic pleasure. Love becomes more honest, adventurous, and philosophical. Excellent for travel romance, outdoor adventures, learning together, or exploring new experiences. Beauty tastes become exotic and eclectic. May avoid commitment for freedom - enjoy adventure but honor important bonds.',
    loveRelationships: 'Romance through adventure, honesty, and shared exploration. Perfect time for travel together, outdoor adventures, learning experiences, or philosophical conversations. Express love through honesty, freedom, optimism, and sharing growth. Attraction to adventurous, honest, philosophical partners. Relationships thrive through shared adventures, mutual freedom, and authentic truth-telling. Need for independence within togetherness. Some meet partners while traveling or exploring. Too much routine feels stifling - add adventure and variety.',
    familyHome: 'Family adventures, travel, and outdoor activities strengthen bonds. Excellent for family trips, cultural experiences, educational family time, or philosophical discussions with family. Home may feel confining - get outside or expand space. Family relationships benefit from more freedom, honesty, and optimism. International family connections or multicultural family experiences. Give family members space to grow. Share beliefs and life philosophy with family. Create more adventure and learning in family life.',
    businessCareer: 'Career success through adventure, teaching, expansion, and optimistic vision. Excellent for work in travel, education, publishing, international business, outdoor industries, or philosophical fields. Your optimism and big-picture vision attract professional opportunities. Good time to expand business, travel for work, teach or publish, or pursue international opportunities. Build professional relationships through honesty and shared vision. Risk-taking and growth favored over safety and stagnation.',
    moneyFinances: 'Financial optimism and growth opportunities. Good time for growth investments, international financial opportunities, or earning through travel, teaching, or publishing. Spending on travel, education, adventure, or experiences that broaden horizons. Financial decisions should consider growth and opportunity. Money through teaching, travel, inspiring others, or broad vision. Abundance mindset attracts opportunities but verify optimism with facts. Invest in growth and experiences.',
    predictions: [
      'Travel or adventure creates romantic opportunity or deepens relationship',
      'Educational experience or class you take together strengthens bond through shared growth',
      'Financial opportunity through international connection or expansive thinking',
      'Outdoor adventure or physical activity that brings joy and freedom',
      'Honest conversation resolves issue through direct truth-telling',
      'Purchase of travel, experience, or adventure that creates lasting memories',
      'Meeting someone while traveling or exploring who becomes significant',
      'Freedom and space you give relationship actually strengthens it',
      'Philosophical or meaningful conversation deepens connection',
      'You learn that freedom, honesty, and adventure create authentic love and joy'
    ]
  },

  'Venus-Capricorn': {
    name: 'Venus Ingress Capricorn',
    frequency: 'Approximately once per year',
    duration: '~3-4 weeks',
    planetEnergy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful and pleasurable.',
    signEnergy: 'Capricorn represents ambition, responsibility, discipline, achievement, mastery, and building lasting structures. It\'s the energy of climbing the mountain through persistent effort and mature commitment.',
    eventMeaning: 'Venus in Capricorn brings serious, committed, traditional love and attraction. Romantic and aesthetic energy becomes goal-oriented and mature. The next 3-4 weeks favor serious relationships, commitment, traditional expressions of love, and building lasting partnerships. Love becomes more responsible, loyal, and achievement-oriented. Excellent for commitments, traditional partnerships, career advancement through relationships, or creating lasting value. Beauty tastes become classic and timeless. May be too serious - commitment matters but enjoy lightness too.',
    loveRelationships: 'Serious, committed, traditional romance. Perfect time for engagements, marriage, discussing long-term commitment, or building future together. Express love through responsibility, loyalty, commitment, and building security together. Attraction to mature, ambitious, reliable partners with long-term potential. Relationships assessed for viability and long-term success. Traditional commitments and formal relationships favored. Show love through consistent actions over time. Some relationships deepen into serious commitment or partnership becomes more goal-oriented.',
    familyHome: 'Family responsibilities and traditional family structures emphasized. Excellent for family financial planning, property investment, honoring family traditions, or taking on family leadership role. Home becomes place of quality, structure, and lasting value. Family time through respecting traditions and building security together. Express love for family through responsibility and commitment. Home improvements focusing on lasting quality and value. Build family legacy and structure.',
    businessCareer: 'Career success through professional relationships, traditional networking, and quality work. Excellent for work in business, finance, real estate, traditional luxury, or fields requiring authority. Your professionalism and reliability attract career advancement. Good time to network with authority figures, build professional reputation, or advance through relationships. Form professional partnerships with long-term potential. Earn respect through quality work and commitment. Money and relationships combine professionally.',
    moneyFinances: 'Financial seriousness and long-term wealth building. Good time for major investments, real estate, traditional wealth-building, or financial planning for future. Earning through professional work, quality services, or building lasting value. Spending on quality that lasts, traditional luxury, or investment in future. Financial decisions should be conservative, strategic, and long-term focused. Money through commitment, responsibility, and building authority. Create lasting financial security.',
    predictions: [
      'Relationship commitment or engagement that feels serious and right',
      'Financial investment in quality, property, or lasting value that builds wealth',
      'Professional opportunity through relationship or networking with authority figure',
      'Traditional romantic gesture or formal commitment that deepens partnership',
      'Purchase of classic, quality item that lasts and appreciates in value',
      'Family responsibility or leadership role that builds your authority and respect',
      'Relationship discussion about long-term goals aligns you with partner',
      'Career advancement through professional relationship or committed work',
      'Building security and structure in relationship creates lasting foundation',
      'You learn that serious commitment and traditional values create lasting love and success'
    ]
  },

  'Venus-Aquarius': {
    name: 'Venus Ingress Aquarius',
    frequency: 'Approximately once per year',
    duration: '~3-4 weeks',
    planetEnergy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful and pleasurable.',
    signEnergy: 'Aquarius represents innovation, individuality, friendship, progress, humanitarian ideals, and revolutionary thinking. It\'s the energy of breaking from tradition to create a better future for all.',
    eventMeaning: 'Venus in Aquarius brings unconventional, friendly, freedom-loving love and attraction. Romantic and aesthetic energy becomes innovative and community-oriented. The next 3-4 weeks favor friendship-based romance, social causes, unconventional relationships, and progressive values. Love becomes more intellectual, independent, and equality-focused. Excellent for friendships deepening into romance, social activism together, unconventional partnerships, or expressing unique aesthetic. Beauty tastes become modern and unconventional. May be emotionally detached - intellect matters but so do feelings.',
    loveRelationships: 'Romance through friendship, intellectual connection, and shared ideals. Perfect time for friendships becoming romantic, unconventional relationship structures, or connecting over social causes. Express love through respecting independence, intellectual stimulation, and supporting each other\'s individuality. Attraction to unique, progressive, humanitarian partners. Relationships thrive through friendship, freedom, equality, and shared vision for better world. Need space and independence. Some explore non-traditional relationship approaches.',
    familyHome: 'Family relationships benefit from more freedom, equality, and accepting individuality. Excellent for progressive family structures, family social activism, or giving family members space to be unique. Home becomes gathering place for friends and community. Technology or modernization at home. Family time through group activities or social causes. Respect everyone\'s uniqueness rather than demanding conformity. Create more equality and freedom in family dynamics.',
    businessCareer: 'Career success through innovation, networking, progressive work, and unique approach. Excellent for work in technology, social causes, networking, innovation, or humanitarian fields. Your unique perspective and progressive approach attract professional recognition. Good time to network widely, join professional groups, launch innovative projects, or advocate for progress at work. Build relationships through shared ideals and community. Earn through unique talents and serving collective needs.',
    moneyFinances: 'Financial innovation and unconventional wealth-building. Good time for technology investments, cryptocurrency, crowdfunding, or progressive financial approaches. Earning through innovation, social networking, technology, or humanitarian work. Spending on technology, social causes, or what supports community and innovation. Financial decisions should be forward-thinking and consider collective good. Money through unique gifts and serving progressive causes. Think outside traditional financial patterns.',
    predictions: [
      'Friendship deepens into romance through intellectual and idealistic connection',
      'Social networking or community involvement leads to romantic or financial opportunity',
      'Financial opportunity through technology, innovation, or progressive venture',
      'Unconventional relationship approach or structure that works perfectly for you',
      'Purchase of technology or innovation that improves quality of life uniquely',
      'Social cause or humanitarian work you engage in together strengthens bond',
      'Freedom and independence you give relationship actually strengthens it',
      'Meeting someone unique and unconventional who fascinates you',
      'Group or community connection that brings pleasure and belonging',
      'You learn that friendship, freedom, and accepting uniqueness create authentic love'
    ]
  },

  'Venus-Pisces': {
    name: 'Venus Ingress Pisces',
    frequency: 'Approximately once per year',
    duration: '~3-4 weeks',
    planetEnergy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful and pleasurable.',
    signEnergy: 'Pisces represents compassion, spirituality, imagination, transcendence, unity, and dissolving boundaries. It\'s the energy of mystical connection, artistic inspiration, and merging with the infinite.',
    eventMeaning: 'Venus in Pisces is the goddess of love exalted - Venus is exalted in Pisces, so this placement maximizes unconditional love, compassion, and spiritual connection. Love becomes transcendent, selfless, and spiritually romantic. The next 3-4 weeks favor soul connections, spiritual romance, artistic expression, compassionate love, and surrendering to love. This is the most romantic, compassionate, spiritually beautiful Venus transit. Perfect time for deep soul bonding or artistic creation. May lose boundaries - love unconditionally but maintain healthy limits.',
    loveRelationships: 'Transcendent, spiritual, unconditionally loving romance. Perfect time for soul mate connections, spiritual bonding, romantic idealism, or selfless expressions of love. Express love through compassion, spiritual connection, creativity, and gentle understanding. Attraction to sensitive, artistic, spiritual partners. Relationships deepen through shared spirituality, art, music, or helping others together. Forgiveness and unconditional acceptance heal wounds. Boundaries may blur - love deeply but protect yourself too. Romantic magic and enchantment peak.',
    familyHome: 'Family relationships benefit from compassion, forgiveness, and spiritual connection. Excellent for healing old family wounds, spiritual or artistic family activities, or practicing unconditional love with family. Home becomes spiritual sanctuary and artistic haven. Family time through music, art, meditation, or compassionate service. Let go of old family resentments. Create peaceful, transcendent atmosphere at home. Express love through gentle acceptance and spiritual understanding.',
    businessCareer: 'Career success through compassion, creativity, and spiritual service. Excellent for work in arts, music, film, photography, healing, spiritual services, charity, or helping professions. Your compassion and imagination attract professional recognition. Good time for creative projects, compassionate service work, or connecting work to something greater. Build professional relationships through empathy and artistic sensitivity. Earn through helping, creating, or spiritual work. Trust intuition about career.',
    moneyFinances: 'Financial intuition and earning through compassion or creativity. Good time for charitable giving, earning through arts or healing, or trusting financial intuition. Spending on art, music, spiritual development, or helping others. Financial decisions benefit from combining intuition with practical analysis. Money through imagination, compassion, and service. Boundaries around money may blur - be generous but protect resources. Sometimes trust is wiser than calculation, but maintain practical limits.',
    predictions: [
      'Soul connection or spiritual romance that feels transcendent and fated',
      'Artistic or creative expression that channels beautiful inspiration',
      'Compassionate act or selfless giving that creates deep connection and meaning',
      'Music, art, or beauty that moves you to tears and opens your heart',
      'Forgiveness (giving or receiving) in relationship heals wound and deepens love',
      'Financial help you give or receive comes from place of genuine compassion',
      'Spiritual practice or meditation together deepens romantic connection',
      'Purchase of art, music, or spiritual item that brings lasting beauty and peace',
      'Romantic experience so magical it feels like dream come true',
      'You learn that unconditional love and compassion are most beautiful expressions of Venus'
    ]
  },

  'Mercury-Aries': {
    name: 'Mercury Ingress Aries',
    frequency: 'Approximately once per year',
    duration: '~2-3 weeks',
    planetEnergy: 'Mercury represents communication, thinking, learning, information processing, connections, and mental agility. It\'s how you think, speak, learn, and exchange information with the world.',
    signEnergy: 'Aries represents new beginnings, courage, independence, leadership, initiative, and the pioneering spirit. It\'s the spark of self-assertion, the drive to be first, and pure initiating force.',
    eventMeaning: 'Mercury in Aries brings quick, direct, bold communication and thinking. Mental energy runs high and fast. The next 2-3 weeks favor speaking up assertively, making quick decisions, starting new learning projects, and direct communication. Thoughts and words become more straightforward, sometimes blunt. Excellent for debates, competitive thinking, or pioneering new ideas. Mind works quickly but may lack patience for details.',
    loveRelationships: 'Communication in relationships becomes more direct and honest - say what you mean clearly. Good time to initiate important conversations or express desires boldly. Flirting through confident, assertive communication. Mental attraction to bold, independent thinkers. Arguments may arise but resolve quickly if addressed directly. Text first, think about what to say later. Impatience with indirect communication - speak up.',
    familyHome: 'Direct, honest family communication favored - say what needs saying. Good time to initiate family discussions, assert your perspective, or make quick family decisions. Communication with siblings becomes more competitive or playful sparring. Home projects requiring quick thinking and action. Less patience for family small talk - get to the point. Lead family conversations.',
    businessCareer: 'Excellent for work requiring quick thinking, bold communication, or pioneering ideas. Pitch new ideas assertively, lead meetings confidently, or make fast decisions. Sales through direct approach, debates, or competitive fields. Your mental quickness and courage impress others. Start new communication projects. Speak up in meetings. Network boldly. Avoid impulsive emails you\'ll regret - speed is good, but think first.',
    moneyFinances: 'Quick financial decisions and bold money communication. Good time to negotiate raise assertively, pitch business ideas directly, or start new income stream requiring mental initiative. Money through competitive thinking, sales, or pioneering ventures. Research investments quickly but verify facts. Impulsive purchases possible - channel mental energy into smart financial action, not reactive spending.',
    predictions: [
      'Direct conversation you\'ve been avoiding finally happens and resolves issue',
      'Quick thinking or bold idea solves problem others have been overthinking',
      'Assertive communication gets you what diplomatic approach couldn\'t',
      'Competitive discussion or debate where your mental quickness shines',
      'New learning project or study you initiate with enthusiasm',
      'Fast decision that others hesitate on turns out to be right',
      'Email, message, or conversation where your directness is exactly what\'s needed',
      'Pioneering idea or unconventional thinking opens new possibility',
      'Argument that clears air and improves relationship through honesty',
      'Mental breakthrough through decisive action rather than endless analysis'
    ]
  },

  'Mercury-Taurus': {
    name: 'Mercury Ingress Taurus',
    frequency: 'Approximately once per year',
    duration: '~2-3 weeks',
    planetEnergy: 'Mercury represents communication, thinking, learning, information processing, connections, and mental agility. It\'s how you think, speak, learn, and exchange information with the world.',
    signEnergy: 'Taurus represents stability, sensory pleasure, material security, patience, persistence, comfort, and tangible beauty. It\'s the energy of grounding, enjoying physical reality, and building lasting value.',
    eventMeaning: 'Mercury in Taurus brings slower, more deliberate, practical thinking and communication. Mental energy becomes grounded and patient. The next 2-3 weeks favor practical planning, learning tangible skills, financial discussions, and thoughtful communication. Thoughts focus on what\'s real, useful, and valuable. Excellent for financial analysis, learning crafts, or thorough study. Mind resists rushing - takes time to process but reaches sound conclusions.',
    loveRelationships: 'Communication in relationships becomes more sensual, practical, and grounded. Express affection through voice tone, thoughtful words, or discussing shared values and future security. Good time for serious relationship discussions about money, commitment, or building future together. Words matter less than consistent, reliable communication. Some prefer physical presence to texting. Show love through practical communication and discussing tangible plans.',
    familyHome: 'Family communication about money, property, values, or practical matters flows well. Good time for family financial planning, discussing home improvements, or conversations about inheritance or shared resources. Communication with family becomes more reliable and grounded. Stubborn family discussions require patience. Practical home projects benefit from thorough planning. Voice your values clearly but patiently.',
    businessCareer: 'Excellent for work requiring practical thinking, financial analysis, or building tangible value through communication. Sales through demonstrating quality and value. Teaching practical, hands-on skills. Writing about finance, food, nature, or material topics. Your thorough, reliable thinking gets recognized. Good for contracts, salary negotiations, or business planning. Avoid rushing decisions - take time to think through implications. Quality communication over quick responses.',
    moneyFinances: 'Peak time for financial planning, budgeting, and practical money discussions. Think through investments carefully and thoroughly. Good time to negotiate salary based on proven value, discuss financial security, or plan long-term financial strategy. Earning through practical thinking, financial analysis, or valuing your skills appropriately. Money decisions should be slow and deliberate - avoid pressure to decide quickly. Build financial security through sound thinking.',
    predictions: [
      'Financial discussion or negotiation where your practical thinking gets you fair value',
      'Thorough analysis or patient study reveals insight others missed by rushing',
      'Communication about values or money that strengthens relationship or security',
      'Learning practical skill that has tangible, lasting value',
      'Slow, deliberate decision that proves wiser than quick choice would have been',
      'Contract or agreement reached through patient, thorough discussion',
      'Your consistent, reliable communication builds trust with someone important',
      'Financial plan or budget you create thoughtfully improves your security',
      'Stubborn discussion where patience and persistence finally reach resolution',
      'You learn that taking time to think thoroughly prevents costly mistakes'
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

  'Mercury-Cancer': {
    name: 'Mercury Ingress Cancer',
    frequency: 'Approximately once per year',
    duration: '~2-3 weeks',
    planetEnergy: 'Mercury represents communication, thinking, learning, information processing, connections, and mental agility. It\'s how you think, speak, learn, and exchange information with the world.',
    signEnergy: 'Cancer represents nurturing, emotions, safety, family, roots, intuition, and the protective instinct. It\'s the energy of home, emotional security, and caring for yourself and others.',
    eventMeaning: 'Mercury in Cancer brings emotional, intuitive, memory-focused thinking and communication. Mental energy connects to feelings and past experiences. The next 2-3 weeks favor emotional conversations, family discussions, journaling, memory work, and intuitive thinking. Thoughts and words carry more emotional content. Excellent for therapy, family communication, or understanding emotional patterns. Mind remembers vividly but may get stuck in past or moody thinking.',
    loveRelationships: 'Communication in relationships becomes more emotional, nurturing, and vulnerable. Perfect time for sharing feelings, discussing family or future, or emotionally intimate conversations. Express care through supportive words and emotional attunement. Attraction to partners who feel emotionally safe. Listen to feelings, not just words. Text or call to check in emotionally. Some conversations trigger past relationship memories - address patterns compassionately.',
    familyHome: 'Peak time for family communication and emotional discussions. Excellent for talking with parents, siblings, or family about feelings, memories, or family history. Home planning conversations flow well. Emotional needs in family require expression. Memories surface in family discussions. Good time for family therapy or healing conversations. Create safe space for emotional communication. Listen with nurturing attention.',
    businessCareer: 'Excellent for work requiring emotional intelligence, nurturing communication, or memory/history. Counseling, childcare, family business, real estate, food service, or care professions thrive. Your empathy and emotional attunement help in professional communication. Good for workplace discussions about needs and feelings. Trust intuition about work decisions. Create emotionally safe work environment through caring communication. Avoid being too subjective or moody in professional settings.',
    moneyFinances: 'Financial discussions about security, family needs, home, or emotional comfort. Good time to talk about financial safety, savings for family, or money for home. Earning through nurturing work, emotional intelligence, or family-oriented services. Financial decisions consider emotional security, not just numbers. Intuition about money opportunities strong but verify feelings with facts. Money discussions with family require emotional sensitivity.',
    predictions: [
      'Emotional conversation deepens relationship through vulnerable sharing',
      'Memory or past experience surfaces with important lesson for present',
      'Family discussion where listening with empathy resolves longstanding issue',
      'Intuitive feeling about person or situation proves accurate',
      'Journal entry or emotional writing provides clarity and healing',
      'Nurturing words you offer someone provide exactly the comfort they need',
      'Discussion about home, family, or security moves important decision forward',
      'Therapy or emotional conversation produces breakthrough in understanding',
      'Communication about needs and feelings improves relationship safety',
      'You learn that honoring emotional truth in communication deepens connection'
    ]
  },

  'Mercury-Leo': {
    name: 'Mercury Ingress Leo',
    frequency: 'Approximately once per year',
    duration: '~2-3 weeks',
    planetEnergy: 'Mercury represents communication, thinking, learning, information processing, connections, and mental agility. It\'s how you think, speak, learn, and exchange information with the world.',
    signEnergy: 'Leo represents creativity, self-expression, confidence, joy, romance, and radiant presence. It\'s the energy of shining brightly, creating from the heart, and celebrating life with enthusiasm.',
    eventMeaning: 'Mercury in Leo brings confident, creative, dramatic communication and thinking. Mental energy becomes bold and expressive. The next 2-3 weeks favor creative writing, public speaking, teaching with flair, storytelling, and confident self-expression. Thoughts and words carry more warmth, enthusiasm, and personal style. Excellent for presentations, performance, creative projects, or inspiring others. Mind is creative but may be overly proud or dramatic.',
    loveRelationships: 'Communication in relationships becomes more romantic, playful, and expressive. Perfect time for love letters, romantic declarations, or playful banter. Express affection through creative, generous words and compliments. Flirting through confident, entertaining conversation. Attraction to partners who appreciate your expressive style. Conversations should be fun and uplifting. Some may be more dramatic in communication - enjoy the theater but stay genuine.',
    familyHome: 'Family communication becomes more playful, warm, and expressive. Good time for family storytelling, creative projects, or entertaining conversations. Express appreciation for family members generously. Communication with children flows especially well - play with words and ideas. Home discussions benefit from optimism and creativity. Pride in family increases. Lead family conversations with warmth and confidence. Avoid being too dominating in family discussions.',
    businessCareer: 'Excellent for work requiring confident communication, creativity, or performance. Teaching, entertainment, sales through charisma, public speaking, creative writing, or leadership communication thrives. Your bold, warm communication style impresses others. Perfect time for presentations, pitching creative ideas, or taking center stage professionally. Inspiring others through words. Networking through generous, confident engagement. Avoid arrogance - confidence works, but humility helps too.',
    moneyFinances: 'Financial discussions benefit from confidence and creative thinking. Good time to pitch business ideas boldly, negotiate with flair, or sell through enthusiastic presentation. Earning through creative communication, performance, teaching, or inspiring others. Financial optimism strong but verify bold ideas with practical analysis. Money through expressing your unique talents and shining professionally. Generous spending on creative expression or entertainment within budget.',
    predictions: [
      'Presentation or public speaking where your confidence and creativity shine',
      'Creative idea or project you express boldly receives enthusiastic response',
      'Romantic conversation or love letter that expresses feelings beautifully',
      'Teaching or sharing knowledge where your warmth and enthusiasm inspire others',
      'Compliment or generous words you offer brightens someone\'s day significantly',
      'Communication where your authentic self-expression is your greatest asset',
      'Storytelling or entertaining conversation that captivates your audience',
      'Pitch or proposal delivered with confidence succeeds through your charisma',
      'Playful, joyful conversation restores your energy and enthusiasm',
      'You learn that confident, authentic self-expression attracts right opportunities'
    ]
  },

  'Mercury-Virgo': {
    name: 'Mercury Ingress Virgo',
    frequency: 'Approximately once per year',
    duration: '~2-3 weeks',
    planetEnergy: 'Mercury represents communication, thinking, learning, information processing, connections, and mental agility. It\'s how you think, speak, learn, and exchange information with the world.',
    signEnergy: 'Virgo represents refinement, service, health, organization, discernment, and practical improvement. It\'s the energy of making things better through detailed attention and skillful craft.',
    eventMeaning: 'Mercury in Virgo is the analyst in his home sign - Mercury rules Virgo, so this placement maximizes analytical thinking, precision, and practical problem-solving. Mental energy becomes detailed, critical, and service-oriented. The next 2-3 weeks favor organizing information, analyzing systems, practical learning, editing, and helpful communication. This is the most precise, analytical, detail-oriented Mercury transit. Mind excels at refinement but may get lost in perfectionism.',
    loveRelationships: 'Communication in relationships becomes more practical, helpful, and analytical. Express love through useful advice, noticing details about partner\'s needs, or helpful conversations. Good time for practical relationship discussions about daily life, health, or improvements. Attraction to intelligent, competent communicators. Listen analytically and offer solutions. Text or talk about practical matters. Some may be overly critical - offer help, not criticism.',
    familyHome: 'Family communication benefits from practical problem-solving and attention to details. Excellent for discussing home organization, health issues, daily routines, or improvements. Help family members through useful advice and practical assistance. Home planning conversations become more detailed and analytical. Create systems for better family communication. Organize family schedules and responsibilities. Avoid being too critical of family - help, don\'t nitpick.',
    businessCareer: 'Peak time for work requiring precision, analysis, editing, organization, or practical problem-solving. Writing with attention to detail, teaching skills, healthcare communication, technical work, or quality analysis excels. Your analytical thinking and helpful communication impress others. Perfect time for refining proposals, organizing information, solving practical work problems, or improving communication systems. Detail-oriented projects succeed. Avoid analysis paralysis - sometimes done is better than perfect.',
    moneyFinances: 'Excellent for financial analysis, budgeting, organizing financial information, or practical money planning. Think through financial details carefully and catch errors others miss. Good time for financial consulting, accounting work, or earning through analytical skills. Money discussions focus on practical details and efficiency. Cut financial waste through careful analysis. Invest after thorough research. Financial communication should be precise and helpful.',
    predictions: [
      'Detail you notice in communication, contract, or information prevents problem',
      'Analytical thinking solves practical problem that\'s been causing inefficiency',
      'Helpful advice or useful information you share assists someone significantly',
      'Editing, organizing, or refining project improves its quality noticeably',
      'Health information or practical wellness communication improves your wellbeing',
      'Financial analysis reveals opportunity for savings or efficiency',
      'Practical discussion about daily life improves relationship or work situation',
      'Skill you learn or refine increases your competence and value',
      'Discernment helps you communicate clearly and avoid misunderstanding',
      'You learn that attention to detail in communication prevents larger problems'
    ]
  },

  'Mercury-Libra': {
    name: 'Mercury Ingress Libra',
    frequency: 'Approximately once per year',
    duration: '~2-3 weeks',
    planetEnergy: 'Mercury represents communication, thinking, learning, information processing, connections, and mental agility. It\'s how you think, speak, learn, and exchange information with the world.',
    signEnergy: 'Libra represents balance, partnership, beauty, harmony, diplomacy, and fairness. It\'s the energy of relationships, aesthetics, and seeking equilibrium through connection with others.',
    eventMeaning: 'Mercury in Libra brings diplomatic, balanced, relational thinking and communication. Mental energy seeks harmony and considers multiple perspectives. The next 2-3 weeks favor negotiations, partnerships discussions, diplomatic communication, and aesthetic thinking. Thoughts and words become more considerate, fair, and relationship-focused. Excellent for mediation, collaboration, contracts, or beautifying language. Mind sees both sides but may struggle with decisions.',
    loveRelationships: 'Communication in relationships becomes more harmonious, considerate, and partnership-focused. Perfect time for important relationship discussions, commitment talks, or resolving conflicts diplomatically. Express affection through beautiful words, listening to partner\'s perspective, and seeking balance. Flirting through charm and intellectual conversation. Attraction to articulate, fair-minded partners. Text or talk about relationship equality and mutual needs. Some may avoid difficult topics for harmony - address issues tactfully but honestly.',
    familyHome: 'Family communication benefits from diplomacy, fairness, and balance. Excellent for mediating family conflicts, discussing partnership or marriage in family, or beautifying home communication. Consider all family perspectives before speaking. Create more harmonious family discussions through tactful communication. Home planning conversations focus on aesthetics and balance. Negotiate family decisions fairly. Avoid indecision - seek balance but make choices.',
    businessCareer: 'Excellent for work requiring diplomacy, partnership, negotiation, or aesthetic communication. Law, counseling, design communication, sales through charm, mediation, or collaborative projects thrive. Your fair, balanced communication style impresses others. Perfect time for contracts, partnership discussions, client relationships, or presenting ideas beautifully. Network through gracious, considerate engagement. Balance professional relationships. Communicate with both logic and charm.',
    moneyFinances: 'Financial discussions benefit from balanced thinking and fair negotiation. Good time for partnership financial agreements, collaborative business deals, or balanced budget planning. Earning through diplomatic communication, design work, relationship-oriented services, or consulting. Money decisions consider fairness and balance between parties. Negotiate financial arrangements that work for everyone. Financial communication should be both logical and considerate.',
    predictions: [
      'Diplomatic conversation resolves conflict better than force or avoidance',
      'Partnership discussion where listening to both sides reaches fair solution',
      'Contract or agreement negotiated with balance benefits everyone involved',
      'Aesthetic idea or beautiful communication elevates quality of your work',
      'Relationship conversation about equality and fairness improves connection',
      'Mediation or balanced thinking helps resolve someone else\'s dispute',
      'Charming, considerate communication opens opportunity that demands wouldn\'t',
      'Decision made by weighing both perspectives proves wiser than one-sided choice',
      'Collaboration or discussion demonstrates power of considering multiple viewpoints',
      'You learn that diplomatic, fair communication builds better relationships than being right'
    ]
  },

  'Mercury-Scorpio': {
    name: 'Mercury Ingress Scorpio',
    frequency: 'Approximately once per year',
    duration: '~2-3 weeks',
    planetEnergy: 'Mercury represents communication, thinking, learning, information processing, connections, and mental agility. It\'s how you think, speak, learn, and exchange information with the world.',
    signEnergy: 'Scorpio represents depth, transformation, power, intimacy, truth, and regeneration. It\'s the energy of diving deep, facing shadows, and emerging transformed through intensity.',
    eventMeaning: 'Mercury in Scorpio brings deep, intense, investigative thinking and communication. Mental energy penetrates beneath surface to hidden truths. The next 2-3 weeks favor research, investigation, deep conversations, psychology, and transformative thinking. Thoughts and words carry more intensity and power. Excellent for therapy, detective work, understanding hidden dynamics, or speaking difficult truths. Mind is laser-focused but may become obsessive or suspicious.',
    loveRelationships: 'Communication in relationships becomes more intense, honest, and depth-seeking. Perfect time for deep emotional conversations, discussing relationship shadows, or intimate truth-telling. Express feelings with intensity and authenticity - superficial words feel empty. Attraction to partners who communicate deeply and honestly. Address relationship power dynamics or hidden issues. Sexual communication or discussion of intimacy. Some conversations may feel confrontational - depth doesn\'t always feel comfortable, but it transforms.',
    familyHome: 'Family communication surfaces hidden dynamics, secrets, or unspoken truths. Excellent for addressing family issues that have been avoided, discussing inheritance or shared resources, or healing family shadows through honest conversation. Intense family discussions transform relationships. Investigate family history or patterns. Home discussions about privacy, boundaries, or shared power. Avoid manipulation - use communication power for healing, not control.',
    businessCareer: 'Excellent for work requiring investigation, research, depth analysis, or transformative communication. Psychology, research, detective work, crisis management, finance, or depth consulting thrives. Your penetrating thinking and powerful communication impress others. Perfect time for uncovering hidden information, strategic thinking, or addressing workplace power dynamics honestly. Deep focused work over superficial networking. Communicate truths others avoid. Avoid being too intense or suspicious professionally.',
    moneyFinances: 'Financial investigations, research, and discussions about shared resources, taxes, debt, or investments. Think deeply about money and uncover hidden financial truths or opportunities. Good time for discussing joint finances, inheritance, or financial transformation. Earning through research, investigation, transformation work, or depth services. Money discussions require honesty about power and control. Financial decisions penetrate beneath surface appearances to real value.',
    predictions: [
      'Deep conversation or investigation uncovers hidden truth that changes everything',
      'Research or analytical thinking reveals information others missed',
      'Honest, intense discussion transforms relationship through confronting shadow',
      'Financial or resource investigation surfaces important hidden information',
      'Psychological insight through deep thinking helps you understand pattern or behavior',
      'Secret or unspoken truth finally communicated, freeing stuck situation',
      'Therapy or transformative conversation produces breakthrough in understanding',
      'Detective work or investigation solves mystery or reveals crucial detail',
      'Power dynamic finally addressed through honest, direct communication',
      'You learn that truth and depth, though intense, bring real transformation and power'
    ]
  },

  'Mercury-Sagittarius': {
    name: 'Mercury Ingress Sagittarius',
    frequency: 'Approximately once per year',
    duration: '~2-3 weeks',
    planetEnergy: 'Mercury represents communication, thinking, learning, information processing, connections, and mental agility. It\'s how you think, speak, learn, and exchange information with the world.',
    signEnergy: 'Sagittarius represents expansion, optimism, adventure, truth-seeking, freedom, and philosophical understanding. It\'s the energy of growth, exploration, and finding meaning through broadening horizons.',
    eventMeaning: 'Mercury in Sagittarius brings optimistic, philosophical, big-picture thinking and communication. Mental energy expands toward meaning and truth. The next 2-3 weeks favor learning, teaching, travel planning, philosophical discussions, and honest direct communication. Thoughts and words become more optimistic, broad, and truth-seeking. Excellent for education, publishing, adventure planning, or exploring ideas. Mind sees big picture but may miss important details.',
    loveRelationships: 'Communication in relationships becomes more honest, optimistic, and philosophical. Perfect time for discussing life philosophy, future adventures, or sharing beliefs and meaning. Express feelings honestly and directly - say what you mean. Attraction to partners with broad minds and adventurous spirits. Talk about growth, learning, travel, or exploring together. Keep communication light and optimistic. Some may be too blunt - honesty is good, but tact helps.',
    familyHome: 'Family communication becomes more open, honest, and educational. Excellent for discussing family travel, cultural experiences, beliefs, or education. Share knowledge and teach family members. Family discussions benefit from optimism and big-picture thinking. Plan family adventures or learning experiences. International family connections. Home conversations explore meaning and philosophy. Avoid being preachy or too blunt - inspire, don\'t lecture.',
    businessCareer: 'Excellent for work requiring teaching, publishing, travel, international communication, or philosophical thinking. Education, travel industry, publishing, consulting, or inspirational work thrives. Your optimistic, big-picture communication impresses others. Perfect time for presenting vision, teaching what you know, networking internationally, or expanding professional horizons. Think strategically and communicate expansively. Avoid overpromising - enthusiasm is great, but be realistic too.',
    moneyFinances: 'Financial discussions benefit from optimistic thinking and big-picture strategy. Good time for discussing growth investments, international opportunities, or expanding income through teaching or travel. Earning through education, publishing, travel work, or inspirational services. Money decisions consider growth and opportunity, not just security. Financial communication should be honest and direct. Avoid excessive optimism - faith is good, but verify facts.',
    predictions: [
      'Educational opportunity or class that expands your mind and horizons',
      'Honest, direct conversation resolves issue through truth-telling',
      'Travel discussion or planning that excites you about future adventure',
      'Teaching or sharing knowledge where your enthusiasm inspires others',
      'Big-picture thinking or strategy that solves problem stuck in details',
      'International connection or cross-cultural communication broadens perspective',
      'Philosophical or meaningful conversation answers question you\'ve been pondering',
      'Optimistic words you speak lift someone\'s spirits or confidence',
      'Publishing, writing, or content creation reaches broader audience',
      'You learn that honest, expansive communication opens more doors than careful hedging'
    ]
  },

  'Mercury-Capricorn': {
    name: 'Mercury Ingress Capricorn',
    frequency: 'Approximately once per year',
    duration: '~2-3 weeks',
    planetEnergy: 'Mercury represents communication, thinking, learning, information processing, connections, and mental agility. It\'s how you think, speak, learn, and exchange information with the world.',
    signEnergy: 'Capricorn represents ambition, responsibility, discipline, achievement, mastery, and building lasting structures. It\'s the energy of climbing the mountain through persistent effort and mature commitment.',
    eventMeaning: 'Mercury in Capricorn brings serious, strategic, goal-oriented thinking and communication. Mental energy becomes disciplined and focused on achievement. The next 2-3 weeks favor business planning, strategic thinking, serious discussions, learning practical skills, and professional communication. Thoughts and words become more mature, structured, and authority-building. Excellent for career planning, business communication, or mastering complex subjects. Mind is strategic but may be overly pessimistic or rigid.',
    loveRelationships: 'Communication in relationships becomes more serious, practical, and goal-oriented. Perfect time for discussing long-term commitment, relationship goals, or building future together. Express feelings through responsible, mature words and practical planning. Attraction to partners who communicate seriously and reliably. Talk about ambitions, careers, or serious matters. Less small talk, more meaningful discussion. Some may be too serious - commitment is good, but enjoy lightness too.',
    familyHome: 'Family communication becomes more structured, responsible, and focused on long-term planning. Excellent for discussing family finances, property, responsibilities, or long-term family goals. Respect family hierarchy and traditions in communication. Home planning conversations become practical and strategic. Family business or career discussions. Address family responsibilities maturely. Create family communication structures. Avoid being too controlling or rigid - guide, don\'t dictate.',
    businessCareer: 'Peak time for professional communication, business planning, career strategy, and building authority. Business proposals, professional presentations, career discussions, management communication, or strategic planning excels. Your serious, competent communication impresses others. Perfect time for networking with authority figures, negotiating career advancement, or demonstrating expertise. Communicate with professionalism and strategic thinking. Build professional reputation through reliable, high-quality communication.',
    moneyFinances: 'Excellent for financial planning, business strategy, investment analysis, and serious money discussions. Think long-term about wealth-building and financial goals. Good time for financial consulting, discussing career income growth, or planning financial security. Earning through professional expertise, business acumen, or demonstrating competence. Money discussions should be strategic and realistic. Conservative financial thinking prevents costly mistakes. Build wealth systematically through disciplined financial communication and planning.',
    predictions: [
      'Strategic thinking or business plan that positions you for long-term success',
      'Professional communication where your competence and maturity impress authority',
      'Career discussion or negotiation that advances your professional goals',
      'Financial plan or serious money conversation improves long-term security',
      'Responsibility you communicate or take on builds your authority and reputation',
      'Business proposal or presentation delivered professionally achieves its goal',
      'Practical learning or skill mastery that increases your professional value',
      'Serious relationship conversation about commitment or future moves things forward',
      'Disciplined thinking prevents impulsive decision and saves you from mistake',
      'You learn that strategic, professional communication builds lasting success'
    ]
  },

  'Mercury-Aquarius': {
    name: 'Mercury Ingress Aquarius',
    frequency: 'Approximately once per year',
    duration: '~2-3 weeks',
    planetEnergy: 'Mercury represents communication, thinking, learning, information processing, connections, and mental agility. It\'s how you think, speak, learn, and exchange information with the world.',
    signEnergy: 'Aquarius represents innovation, individuality, friendship, progress, humanitarian ideals, and revolutionary thinking. It\'s the energy of breaking from tradition to create a better future for all.',
    eventMeaning: 'Mercury in Aquarius brings innovative, unconventional, progressive thinking and communication. Mental energy becomes original and future-focused. The next 2-3 weeks favor brainstorming, networking, technological communication, humanitarian discussions, and thinking outside the box. Thoughts and words become more unique, inventive, and community-oriented. Excellent for technology projects, social causes, group communication, or revolutionary ideas. Mind is brilliant but may be too detached or erratic.',
    loveRelationships: 'Communication in relationships becomes more friendly, intellectual, and unconventional. Perfect time for discussing freedom within relationship, future vision, or progressive relationship approaches. Express feelings through intellectual connection and friendship. Attraction to unique, independent communicators. Talk about ideas, social causes, or future possibilities. Text or message about interesting concepts. Some may be too detached - intellectual connection is good, but emotions matter too.',
    familyHome: 'Family communication benefits from giving space for individuality and unconventional ideas. Excellent for discussing progressive family approaches, technology at home, or humanitarian family values. Respect each family member\'s unique perspective. Home planning conversations become innovative and future-focused. Family group chats or online communication. Discuss social issues or community involvement with family. Avoid being too rebellious or detached - innovate within connection.',
    businessCareer: 'Excellent for work requiring innovation, technology, networking, or progressive thinking. Tech communication, social media, networking, team collaboration, humanitarian work, or innovative fields thrive. Your original, progressive thinking impresses others. Perfect time for brainstorming, launching tech projects, networking widely, or communicating revolutionary ideas. Collaborate with groups. Think about future and progress. Communicate your unique perspective boldly.',
    moneyFinances: 'Financial discussions benefit from innovative thinking and unconventional approaches. Good time for discussing cryptocurrency, tech investments, crowdfunding, or progressive financial strategies. Earning through technology, networking, innovation, or social causes. Money decisions consider future and community, not just personal gain. Financial communication should be forward-thinking and collaborative. Network for financial opportunities. Think outside traditional financial box.',
    predictions: [
      'Innovative idea or unconventional thinking solves problem traditional approach couldn\'t',
      'Networking or social communication leads to unexpected opportunity',
      'Technology or social media communication succeeds through your unique approach',
      'Group discussion or collaboration where your original perspective adds value',
      'Humanitarian conversation or discussion of social cause inspires meaningful action',
      'Brainstorming session produces brilliant, unconventional solution',
      'Friendship or intellectual connection deepens through idea exchange',
      'Communication about freedom or individuality improves relationship understanding',
      'Progressive thinking about career or money opens new possibility',
      'You learn that your unique perspective and innovative thinking are valuable assets'
    ]
  },

  'Mercury-Pisces': {
    name: 'Mercury Ingress Pisces',
    frequency: 'Approximately once per year',
    duration: '~2-3 weeks',
    planetEnergy: 'Mercury represents communication, thinking, learning, information processing, connections, and mental agility. It\'s how you think, speak, learn, and exchange information with the world.',
    signEnergy: 'Pisces represents compassion, spirituality, imagination, transcendence, unity, and dissolving boundaries. It\'s the energy of mystical connection, artistic inspiration, and merging with the infinite.',
    eventMeaning: 'Mercury in Pisces brings intuitive, imaginative, compassionate thinking and communication. Mental energy becomes fluid and spiritually attuned. The next 2-3 weeks favor creative writing, poetry, spiritual discussions, compassionate communication, and intuitive thinking. Thoughts and words become more empathetic, artistic, and subtle. Excellent for art, music, therapy communication, or spiritual learning. Mind is inspired but may be confused, vague, or overly escapist.',
    loveRelationships: 'Communication in relationships becomes more romantic, empathetic, and spiritually connected. Perfect time for poetic love expressions, compassionate listening, or discussing dreams and spirituality together. Express feelings through creative words, music, or subtle hints. Attraction to romantic, sensitive communicators. Listen to unspoken communication and emotional undercurrents. Some may avoid direct communication - imagination is beautiful, but clarity helps too.',
    familyHome: 'Family communication benefits from compassion, forgiveness, and emotional sensitivity. Excellent for healing family conversations, discussing spirituality or creativity with family, or listening to unspoken family needs. Express love for family through empathetic understanding. Home planning conversations consider emotional and spiritual atmosphere. Music, art, or spiritual practice in family communication. Avoid vagueness or passive-aggressive hints - be compassionate but clear.',
    businessCareer: 'Excellent for work requiring creativity, compassion, intuition, or artistic communication. Writing, arts, music, healing professions, counseling, photography, or spiritual work thrives. Your empathetic, imaginative communication impresses others. Perfect time for creative projects, compassionate client work, or artistic presentations. Trust intuition about professional communication. Network through empathy and creativity. Communicate with both heart and inspiration.',
    moneyFinances: 'Financial discussions benefit from intuition and creative thinking. Good time for earning through creative work, healing services, or artistic communication. Money decisions consider emotional and spiritual factors, not just logic. Trust financial intuition but verify with practical analysis. Earning through compassion, imagination, or helping others. Financial communication should be gentle and understanding. Avoid financial vagueness or escapism - dreams need practical grounding.',
    predictions: [
      'Intuitive feeling about communication or person proves remarkably accurate',
      'Creative or poetic expression of idea communicates better than literal words',
      'Compassionate conversation provides healing or comfort to someone struggling',
      'Dream or subconscious insight reveals answer to question you\'ve been pondering',
      'Artistic or musical communication expresses what words alone cannot',
      'Empathetic listening helps you understand unspoken needs or feelings',
      'Spiritual or philosophical discussion deepens your understanding beautifully',
      'Imagination or creative thinking solves problem logical approach couldn\'t',
      'Forgiveness or compassionate words you speak heal relationship wound',
      'You learn that intuitive, heart-centered communication often conveys more than logic'
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
