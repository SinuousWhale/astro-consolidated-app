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

  'Mars-Taurus': {
    name: 'Mars Ingress Taurus',
    frequency: 'Approximately every 2 years',
    duration: '~6 weeks',
    planetEnergy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    signEnergy: 'Taurus represents stability, sensory pleasure, material security, patience, persistence, comfort, and tangible beauty. It\'s the energy of grounding, enjoying physical reality, and building lasting value.',
    eventMeaning: 'Mars in Taurus brings slow, steady, persistent action and physical stamina. Drive becomes focused on tangible results and material security. The next 6 weeks favor patient pursuit of goals, building lasting value, physical endurance work, and securing resources. Action is deliberate but unstoppable once committed. Excellent for sustained effort, financial goals, physical projects, or building something real. Stubbornness intensifies - determination is strength but inflexibility can block progress.',
    loveRelationships: 'Sexual passion becomes more physical, sensual, and enduring. Pursue romance steadily and patiently - show interest through consistent action. Physical touch and sensual pleasure intensify in relationships. Attraction to stable, reliable partners. Existing relationships benefit from more physical affection and building security together. Possessiveness possible - channel into loyalty without smothering. Show desire through tangible actions and patient pursuit.',
    familyHome: 'Physical energy directed toward home improvement, building, or creating comfort and security. Excellent time for renovation projects, gardening, or improving property value. Family conflicts may become stubborn - address issues patiently but persistently. Assert family security needs. Physical work on home brings satisfaction. Build lasting family security through patient, consistent effort. Protect what you value.',
    businessCareer: 'Career action focused on building lasting value and financial security. Excellent for work requiring physical stamina, persistence, quality craftsmanship, or material results. Start business ventures with solid foundation, pursue financial goals steadily, or demonstrate reliable work ethic. Your persistence and tangible results impress others. Good for finance, agriculture, construction, crafts, or material production. Slow and steady wins.',
    moneyFinances: 'Strong financial drive and persistent money-making action. Excellent time to pursue income steadily, build wealth through patient effort, or secure financial resources. Earning through physical work, quality craftsmanship, or material production. Take calculated financial risks based on tangible value. Money goals achieved through persistence and consistent action. Build financial security through sustained effort. Protect and grow resources methodically.',
    predictions: [
      'Sustained physical effort on project produces tangible, valuable results',
      'Financial goal achieved through patient, persistent action over weeks',
      'Physical stamina and endurance increase significantly through consistent effort',
      'Home improvement or building project completes successfully',
      'Stubborn persistence on important matter finally achieves breakthrough',
      'Sexual or physical relationship deepens through consistent sensual attention',
      'Material security improves through protecting and building resources',
      'Quality work you produce through patient effort gets recognized and valued',
      'Determination on difficult task overcomes obstacles through sheer persistence',
      'You learn that slow, steady, consistent action creates lasting value and results'
    ]
  },

  'Mars-Gemini': {
    name: 'Mars Ingress Gemini',
    frequency: 'Approximately every 2 years',
    duration: '~6 weeks',
    planetEnergy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    signEnergy: 'Gemini represents curiosity, versatility, communication, mental quickness, learning, connections, and seeing multiple perspectives. It\'s the energy of questions, conversations, and information exchange.',
    eventMeaning: 'Mars in Gemini brings quick, versatile, mentally active drive and scattered energy. Action becomes focused on communication, learning, and pursuing multiple interests. The next 6 weeks favor mental challenges, communication projects, learning new skills quickly, and versatile pursuit of goals. Energy scatters across many interests - multitasking peaks. Excellent for debates, writing, sales, networking, or quick learning. Mental restlessness intensifies - stay focused or energy dissipates.',
    loveRelationships: 'Sexual passion expressed through mental stimulation and playful communication. Pursue romance through witty conversation, mental challenge, and variety. Physical chemistry needs mental connection to ignite. Attraction to intelligent, communicative, versatile partners. Existing relationships benefit from more conversation, variety, and playful interaction. Arguments may increase but resolve through communication. Keep romance mentally stimulating and varied.',
    familyHome: 'Mental and physical restlessness at home - need variety and stimulation. Good time for communication-focused family projects, short family trips, or mentally engaging home activities. Family conflicts addressed through discussion and debate. Multiple home projects started - finish what matters. Physical energy directed toward learning, communication, or connecting with siblings and neighbors. Home may feel confining - create mental stimulation.',
    businessCareer: 'Career drive focused on communication, networking, learning, and versatile projects. Excellent for work in writing, teaching, sales, media, consulting, or fields requiring mental agility. Pursue multiple professional opportunities simultaneously. Your quick thinking and versatile skills advance career. Good for debates, presentations, pitches, or learning new skills quickly. Avoid scattered focus - pursue key opportunities decisively. Mental energy drives professional action.',
    moneyFinances: 'Financial energy directed toward multiple income streams and versatile earning. Good time to pursue varied financial opportunities, earn through communication or teaching, or learn about money quickly. Spending on communication tools, learning, or varied interests. Financial decisions benefit from gathering information and staying mentally flexible. Money through networking, writing, sales, or intellectual work. Avoid scattered financial focus - diversify but don\'t disperse.',
    predictions: [
      'Quick thinking or mental agility helps you seize opportunity others miss',
      'Communication project or writing you pursue energetically succeeds',
      'Multiple opportunities arise simultaneously - your versatility handles them',
      'Debate or argument where your quick wit and mental courage win the day',
      'Learning new skill quickly through energetic mental focus',
      'Networking or social action leads to unexpected professional opportunity',
      'Short trip or local exploration energizes and creates connections',
      'Mental restlessness drives you to try something new and stimulating',
      'Sibling or neighbor interaction where your assertiveness clears air',
      'You learn that mental energy and versatile action create diverse opportunities'
    ]
  },

  'Mars-Cancer': {
    name: 'Mars Ingress Cancer',
    frequency: 'Approximately every 2 years',
    duration: '~6 weeks',
    planetEnergy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    signEnergy: 'Cancer represents nurturing, emotions, safety, family, roots, intuition, and the protective instinct. It\'s the energy of home, emotional security, and caring for yourself and others.',
    eventMeaning: 'Mars in Cancer brings emotional, protective, defensive drive and indirect action. Energy becomes focused on home, family, and emotional security. The next 6 weeks favor protecting what you love, pursuing family goals, home improvements, and emotional assertion. Action style becomes more indirect and intuitive. Excellent for home projects, family initiatives, or fighting for emotional security. Passive-aggression and moodiness intensify - channel emotion into protective action, not defensive withdrawal.',
    loveRelationships: 'Sexual passion connected to emotional security and intimacy. Pursue romance indirectly through creating safety and emotional connection. Physical chemistry needs emotional bonding to fully ignite. Attraction to partners who feel safe and family-oriented. Existing relationships benefit from more emotional assertion and fighting for relationship security. Moodiness or passive-aggression possible - communicate emotional needs directly. Protect relationship without smothering.',
    familyHome: 'Peak energy for home improvements, family protection, and creating domestic security. Excellent time for renovation, moving, defending family interests, or pursuing family goals assertively. Family conflicts may intensify emotionally - protect your needs while respecting others\'. Physical energy directed toward making home safe and comfortable. Fight for family but avoid being overly defensive. Nurturing action creates results.',
    businessCareer: 'Career drive focused on emotional security, family business, or nurturing professions. Excellent for work in real estate, food service, childcare, home-based business, or care professions. Pursue career goals that provide security and emotional satisfaction. Your protective instincts and emotional courage advance career. Good for asserting workplace boundaries or fighting for team/family atmosphere at work. Intuition guides career action wisely.',
    moneyFinances: 'Financial drive focused on security, home, and family needs. Excellent time to pursue income for family security, invest in property, or fight for financial safety. Earning through nurturing work, home-based business, or emotional intelligence. Take action to protect and build financial nest egg. Money goals connected to emotional security and family wellbeing. Channel emotional energy into practical financial protection and growth.',
    predictions: [
      'Home improvement or renovation you pursue energetically creates sanctuary',
      'Protective action on behalf of family or loved one makes real difference',
      'Financial move to increase security pays off through persistent effort',
      'Emotional boundary you assert changes relationship dynamics for better',
      'Intuitive action on opportunity your feelings tell you to pursue',
      'Family matter where your courage to fight for what\'s right resolves issue',
      'Real estate or property action taken decisively improves your situation',
      'Nurturing action or caring for someone creates deep bond and satisfaction',
      'Defensive response that actually protects something important and valuable',
      'You learn that emotional courage and protective action secure what you love'
    ]
  },

  'Mars-Leo': {
    name: 'Mars Ingress Leo',
    frequency: 'Approximately every 2 years',
    duration: '~6 weeks',
    planetEnergy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    signEnergy: 'Leo represents creativity, self-expression, confidence, joy, romance, and radiant presence. It\'s the energy of shining brightly, creating from the heart, and celebrating life with enthusiasm.',
    eventMeaning: 'Mars in Leo brings bold, confident, dramatic action and creative drive. Energy becomes focused on self-expression, creative pursuits, and courageous leadership. The next 6 weeks favor pursuing creative projects boldly, taking center stage, leadership action, and expressing yourself powerfully. Action style becomes more theatrical and confident. Excellent for creative work, performance, leadership, or romantic pursuit. Ego and pride intensify - channel into authentic confidence, not arrogance.',
    loveRelationships: 'Sexual passion becomes dramatic, playful, and confidence-driven. Pursue romance boldly and generously through grand gestures and confident expression. Physical chemistry intensifies through mutual admiration and playful energy. Attraction to confident, expressive, charismatic partners. Existing relationships heat up through more romance, play, and mutual celebration. Pride in relationship increases. Express desire confidently and generously. Avoid ego battles.',
    familyHome: 'Creative energy and leadership at home. Excellent time for home improvements that express personal style boldly, creative family projects, or taking leadership role in family. Family pride increases - celebrate family achievements. Physical energy directed toward creating beautiful, impressive home environment. Family conflicts may involve pride - address with confident generosity, not domination. Lead family activities with warmth and enthusiasm.',
    businessCareer: 'Career drive focused on creative expression, leadership, and recognition. Excellent for work in entertainment, arts, teaching, leadership positions, or fields requiring charisma and confidence. Pursue career goals boldly and showcase your talents. Your confidence and creative courage impress others. Good for presentations, performances, launching creative ventures, or taking center stage professionally. Lead with warmth and generosity. Earn recognition through authentic self-expression.',
    moneyFinances: 'Financial drive connected to creative work, self-expression, and generous action. Good time to pursue income through creative talents, charge what you\'re worth confidently, or invest in yourself. Earning through performance, teaching, creative work, or leadership. Spending on creative expression, entertainment, or what makes you feel special. Financial confidence increases - be bold but not reckless. Money through shining your unique talents.',
    predictions: [
      'Creative project you pursue with passion and confidence receives recognition',
      'Leadership opportunity where your courage and charisma are exactly what\'s needed',
      'Romantic pursuit through bold, confident action succeeds beautifully',
      'Performance or presentation where your energy and confidence shine',
      'Financial opportunity through showcasing your creative talents boldly',
      'Physical activity or competition where your enthusiasm gives you edge',
      'Creative risk or bold move that expresses authentic self pays off',
      'Family or work situation where your generous leadership makes difference',
      'Confidence breakthrough - you pursue something you wanted but feared',
      'You learn that bold, authentic self-expression and confident action attract success'
    ]
  },

  'Mars-Virgo': {
    name: 'Mars Ingress Virgo',
    frequency: 'Approximately every 2 years',
    duration: '~6 weeks',
    planetEnergy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    signEnergy: 'Virgo represents refinement, service, health, organization, discernment, and practical improvement. It\'s the energy of making things better through detailed attention and skillful craft.',
    eventMeaning: 'Mars in Virgo brings precise, analytical, service-oriented action and detailed drive. Energy becomes focused on improvement, organization, health, and skillful work. The next 6 weeks favor pursuing practical goals methodically, improving systems, health and fitness routines, and detailed problem-solving. Action style becomes more analytical and perfectionistic. Excellent for organization projects, skill development, health improvements, or quality work. Criticism and perfectionism intensify - channel into constructive improvement, not fault-finding.',
    loveRelationships: 'Sexual passion expressed through service, attention to detail, and practical care. Pursue romance through helpful actions, noticing partner\'s needs, and improving relationship practically. Physical chemistry builds through competence and attentive care. Attraction to skilled, health-conscious, helpful partners. Existing relationships benefit from addressing practical issues and establishing healthy routines together. Criticism of partner possible - offer help, not judgment. Show desire through useful actions.',
    familyHome: 'Energy directed toward home organization, improvement, and practical family help. Excellent time for organizing home efficiently, health and wellness routines, or helping family members practically. Family conflicts addressed through problem-solving and practical solutions. Physical energy focused on detailed home projects and creating efficient, healthy environment. Avoid being too critical of family - help them improve, don\'t just criticize. Serve family through useful action.',
    businessCareer: 'Career drive focused on quality work, skill development, and practical problem-solving. Excellent for work in healthcare, crafts, editing, analytics, quality control, organization, or service professions. Pursue career goals through demonstrating competence and attention to detail. Your skill and practical problem-solving advance career. Good for refining work quality, organizing projects, or improving professional processes. Earn recognition through excellence and useful service.',
    moneyFinances: 'Financial drive directed toward practical improvement, budgeting, and earning through skilled work. Excellent time to organize finances, cut wasteful expenses, or pursue income through competence and service. Earning through skilled work, healthcare, quality control, or analytical services. Spending on health, quality tools, or practical improvements. Financial action should be analytical and efficient. Build wealth through skill, service, and practical money management.',
    predictions: [
      'Organization or system improvement you implement creates efficiency and results',
      'Health and fitness routine you pursue energetically improves wellbeing significantly',
      'Detailed work or skill development produces high-quality, valuable results',
      'Problem-solving action on practical issue finally resolves persistent difficulty',
      'Home organization project you tackle energetically transforms living space',
      'Service or help you provide makes real difference in someone\'s life',
      'Budget or financial refinement reveals savings and improves security',
      'Quality work you pursue with attention to detail receives recognition',
      'Critical eye you apply constructively prevents error and improves outcome',
      'You learn that precise, skillful, service-oriented action creates excellent results'
    ]
  },

  'Mars-Libra': {
    name: 'Mars Ingress Libra',
    frequency: 'Approximately every 2 years',
    duration: '~6 weeks',
    planetEnergy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    signEnergy: 'Libra represents balance, partnership, beauty, harmony, diplomacy, and fairness. It\'s the energy of relationships, aesthetics, and seeking equilibrium through connection with others.',
    eventMeaning: 'Mars in Libra brings diplomatic, partnership-oriented, fair action and balanced drive. Energy becomes focused on relationships, collaboration, and seeking justice. The next 6 weeks favor pursuing goals through partnership, fighting for fairness, diplomatic assertion, and collaborative action. Action style becomes more considerate but may be indecisive. Excellent for negotiations, partnerships, advocacy, or beautifying projects. Conflict avoidance and indecision intensify - channel diplomacy into fair assertiveness, not passive accommodation.',
    loveRelationships: 'Sexual passion balanced with romance, consideration, and aesthetic experience. Pursue romance through charm, fairness, and creating beautiful shared experiences. Physical chemistry needs mental connection and mutual respect. Attraction to charming, fair-minded, aesthetically aware partners. Existing relationships benefit from more balanced give-and-take and diplomatic conflict resolution. Assert desires charmingly rather than aggressively. Fight for relationship equality and fairness.',
    familyHome: 'Energy directed toward family harmony, fair mediation, and home beautification. Excellent time for mediating family conflicts diplomatically, beautifying home aesthetically, or pursuing family goals through collaboration. Family relationships benefit from more fairness and balanced assertion. Physical energy focused on creating beautiful, harmonious home environment. Avoid conflict avoidance - pursue family harmony through fair assertiveness, not just keeping peace.',
    businessCareer: 'Career drive focused on partnerships, collaboration, fairness, and aesthetic work. Excellent for work in law, mediation, design, counseling, sales through charm, or relationship-oriented fields. Pursue career goals through collaboration and diplomatic assertion. Your charm and fairness advance career. Good for negotiations, forming partnerships, advocating for justice, or beautifying work. Balance assertiveness with consideration. Fight for professional fairness.',
    moneyFinances: 'Financial drive directed toward partnership ventures, fair negotiations, and balanced money management. Excellent time to pursue income through partnerships, negotiate fairly for what you\'re worth, or invest in beauty and balance. Earning through diplomatic work, design, law, or relationship services. Spending on beauty, art, or aesthetic improvements. Financial action should be fair and collaborative. Fight for financial fairness and balance.',
    predictions: [
      'Partnership or collaboration you pursue actively produces better results than solo effort',
      'Negotiation where your diplomatic assertiveness achieves fair, beneficial outcome',
      'Home beautification project you tackle creates harmonious, aesthetically pleasing space',
      'Conflict you mediate diplomatically resolves fairly for all parties',
      'Relationship matter where fighting for equality and fairness improves dynamics',
      'Career opportunity through networking, charm, and collaborative action',
      'Financial partnership or venture you pursue actively succeeds through mutual benefit',
      'Aesthetic or design work you pursue energetically receives appreciation',
      'Social action or advocacy for justice and fairness makes real difference',
      'You learn that diplomatic assertiveness and fighting for fairness create better results than aggression or avoidance'
    ]
  },

  'Mars-Scorpio': {
    name: 'Mars Ingress Scorpio',
    frequency: 'Approximately every 2 years',
    duration: '~6 weeks',
    planetEnergy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    signEnergy: 'Scorpio represents depth, transformation, power, intimacy, truth, and regeneration. It\'s the energy of diving deep, facing shadows, and emerging transformed through intensity.',
    eventMeaning: 'Mars in Scorpio is the warrior in one of his traditional home signs - Mars co-rules Scorpio, so this placement brings powerful, intense, strategic action. Drive becomes laser-focused, deeply passionate, and unstoppable. The next 6 weeks favor pursuing goals with total commitment, transformative action, strategic power moves, and facing difficult truths. Action style becomes more intense and focused. Excellent for research, investigation, transformation work, or pursuing deep desires. Obsession and control issues intensify - channel power wisely.',
    loveRelationships: 'Sexual passion reaches intense, transformative depths. Pursue romance with focused intensity and magnetic power. Physical chemistry becomes all-consuming and deeply bonding. Attraction to intense, mysterious, emotionally powerful partners. Existing relationships either deepen profoundly through intimacy and truth, or power struggles intensify. Assert desires with passionate honesty. Jealousy possible - channel into loyalty and depth, not control. Transform relationship through intense connection.',
    familyHome: 'Intense energy directed toward family transformation, uncovering family secrets, or pursuing family resources. Excellent time for deep home renovation, addressing family shadows, or pursuing family financial matters powerfully. Family conflicts may intensify - address hidden dynamics and power issues honestly. Physical energy focused on transforming home or eliminating what\'s dead. Fight for family deeply but avoid manipulation. Pursue family goals with unwavering commitment.',
    businessCareer: 'Career drive intensely focused on transformation, power, and deep work. Excellent for work in research, investigation, psychology, crisis management, surgery, finance, or transformative fields. Pursue career goals with total commitment and strategic power. Your intensity and depth impress others. Good for uncovering hidden information, pursuing ambitious goals relentlessly, or transforming career. Fight for professional power and recognition. Use influence wisely, not manipulatively.',
    moneyFinances: 'Intense financial drive and strategic money action. Excellent time to pursue investments powerfully, deal with shared finances or debt, or transform financial situation completely. Earning through research, transformative work, managing resources, or depth services. Take strategic financial action with focused intensity. Money goals achieved through unwavering commitment. Pursue financial power and transformation. Use money power wisely and ethically.',
    predictions: [
      'Goal you pursue with intense focus and unwavering commitment finally succeeds',
      'Sexual or emotional intimacy reaches transformative new depth',
      'Financial opportunity through investment, inheritance, or shared resources',
      'Investigation or research you pursue intensely uncovers crucial hidden information',
      'Transformation you pursue powerfully (career, habit, relationship) succeeds',
      'Power dynamic you address honestly and forcefully shifts in healthier direction',
      'Hidden truth or shadow issue you confront directly transforms situation',
      'Strategic action you take with perfect timing achieves desired result',
      'Passionate commitment or loyalty that deepens bond profoundly',
      'You learn that focused intensity, strategic action, and facing truth create powerful transformation'
    ]
  },

  'Mars-Sagittarius': {
    name: 'Mars Ingress Sagittarius',
    frequency: 'Approximately every 2 years',
    duration: '~6 weeks',
    planetEnergy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    signEnergy: 'Sagittarius represents expansion, optimism, adventure, truth-seeking, freedom, and philosophical understanding. It\'s the energy of growth, exploration, and finding meaning through broadening horizons.',
    eventMeaning: 'Mars in Sagittarius brings adventurous, optimistic, freedom-seeking action and expansive drive. Energy becomes focused on exploration, truth, learning, and broadening horizons. The next 6 weeks favor pursuing adventures boldly, educational goals, travel action, and fighting for truth and freedom. Action style becomes more direct, honest, and risk-taking. Excellent for travel, education, outdoor activities, publishing, or pursuing big visions. Restlessness and overconfidence intensify - channel optimism into wise action, not reckless gambles.',
    loveRelationships: 'Sexual passion expressed through adventure, honesty, and freedom. Pursue romance boldly and directly through shared adventures and authentic truth-telling. Physical chemistry needs freedom and excitement to thrive. Attraction to adventurous, honest, philosophical partners. Existing relationships benefit from more adventure, honesty, and independence. Fight for relationship freedom and growth. Restlessness in relationship possible - add adventure rather than escaping. Express desire honestly and optimistically.',
    familyHome: 'Adventurous energy and drive for freedom at home. Excellent time for family travel, outdoor family activities, or expanding home space. Family relationships benefit from more honesty, freedom, and shared adventures. Physical energy directed toward exploration and escape from confinement. Home may feel restrictive - plan adventures or expand boundaries. Fight for family freedom and growth. Avoid being preachy - inspire through action, not lectures.',
    businessCareer: 'Career drive focused on expansion, teaching, adventure, and pursuing big vision. Excellent for work in education, travel, publishing, international business, outdoor industries, or philosophical fields. Pursue career goals boldly and optimistically. Your vision and courage advance career. Good for taking career risks, expanding business, traveling for work, or teaching and inspiring others. Fight for professional freedom and growth. Think big and act courageously.',
    moneyFinances: 'Optimistic financial drive and risk-taking money action. Good time to pursue growth investments, international opportunities, or expand income through bold action. Earning through teaching, travel, publishing, or adventurous work. Spending on travel, education, adventure, or growth experiences. Financial action should be optimistic but not reckless - take calculated risks. Money through courage, vision, and expansion. Trust abundance but verify facts.',
    predictions: [
      'Adventure or travel you pursue boldly creates memorable experiences and growth',
      'Educational goal or class you tackle enthusiastically expands your horizons',
      'Risk you take (calculated, not reckless) pays off with growth and opportunity',
      'Honest, direct action on matter cuts through complexity and achieves result',
      'Physical or outdoor challenge you pursue courageously succeeds',
      'International connection or travel opportunity you pursue actively opens doors',
      'Teaching or sharing knowledge you do energetically inspires others',
      'Freedom or independence you fight for improves your situation',
      'Big vision or ambitious goal you pursue boldly moves forward significantly',
      'You learn that courageous action, honest pursuit, and adventurous spirit create growth and freedom'
    ]
  },

  'Mars-Capricorn': {
    name: 'Mars Ingress Capricorn',
    frequency: 'Approximately every 2 years',
    duration: '~6 weeks',
    planetEnergy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    signEnergy: 'Capricorn represents ambition, responsibility, discipline, achievement, mastery, and building lasting structures. It\'s the energy of climbing the mountain through persistent effort and mature commitment.',
    eventMeaning: 'Mars in Capricorn is the warrior exalted - Mars is exalted in Capricorn, so this placement brings strategic, disciplined, ambitious action at its best. Drive becomes focused on achievement, goals, and building lasting success. The next 6 weeks favor pursuing ambitious goals methodically, career advancement, disciplined work, and strategic action. Action style becomes more controlled and strategic. Excellent for business, career moves, achieving goals, or building structures. This is Mars at peak effectiveness. Avoid being too rigid or cold.',
    loveRelationships: 'Sexual passion expressed through commitment, achievement, and building future together. Pursue romance through demonstrating reliability, ambition, and long-term potential. Physical chemistry builds through respect and shared goals. Attraction to ambitious, mature, successful partners. Existing relationships benefit from more commitment, shared goals, and building security together. Assert desires maturely and responsibly. Some relationships deepen into serious commitment. Work toward relationship goals together.',
    familyHome: 'Disciplined energy directed toward family goals, property investment, and building family security. Excellent time for major home improvements, property purchases, or taking family leadership role. Family relationships benefit from more structure, responsibility, and shared achievement. Physical energy focused on building lasting family value and security. Fight for family goals and long-term success. Lead family with maturity and strategic action. Build family legacy.',
    businessCareer: 'Peak career drive and strategic professional action. Excellent for career advancement, business launches, leadership positions, or achieving ambitious professional goals. Pursue career goals with discipline, strategy, and unwavering commitment. Your competence and ambition impress others powerfully. Good for promotions, starting business, strategic career moves, or demonstrating authority. Fight for professional recognition and achievement. Build career success methodically. This is optimal time for career action.',
    moneyFinances: 'Strategic financial drive and disciplined money action. Excellent time to pursue income through career advancement, build wealth methodically, or invest for long-term security. Earning through professional work, business acumen, demonstrating competence, or authority positions. Take strategic financial action with long-term focus. Money goals achieved through discipline and persistence. Build wealth systematically. Pursue financial success and security with maturity and strategy.',
    predictions: [
      'Career goal you pursue strategically and persistently achieves significant success',
      'Ambitious project you tackle with discipline produces lasting, valuable results',
      'Professional opportunity or promotion through demonstrated competence and reliability',
      'Financial investment or business move you make strategically pays off long-term',
      'Leadership role or responsibility you take on builds your authority and success',
      'Goal you work toward methodically over weeks finally reaches achievement',
      'Structural or organizational action you take creates lasting improvement',
      'Mature, responsible approach to challenge succeeds where impulsive action failed',
      'Relationship commitment or serious step forward you pursue deliberately',
      'You learn that strategic, disciplined, ambitious action creates greatest success and achievement'
    ]
  },

  'Mars-Aquarius': {
    name: 'Mars Ingress Aquarius',
    frequency: 'Approximately every 2 years',
    duration: '~6 weeks',
    planetEnergy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    signEnergy: 'Aquarius represents innovation, individuality, friendship, progress, humanitarian ideals, and revolutionary thinking. It\'s the energy of breaking from tradition to create a better future for all.',
    eventMeaning: 'Mars in Aquarius brings innovative, unconventional, group-oriented action and progressive drive. Energy becomes focused on change, innovation, community action, and fighting for ideals. The next 6 weeks favor pursuing progressive goals, innovative projects, group activism, and asserting individuality. Action style becomes more unconventional and rebellious. Excellent for technology projects, social activism, group efforts, or revolutionary changes. Detachment and rebellion intensify - channel into constructive change, not mere opposition.',
    loveRelationships: 'Sexual passion expressed through freedom, friendship, and unconventional connection. Pursue romance through shared ideals, intellectual stimulation, and respecting independence. Physical chemistry needs mental connection and freedom to thrive. Attraction to unique, independent, progressive partners. Existing relationships benefit from more friendship, freedom, and equality. Assert desires intellectually and unconventionally. Fight for relationship freedom and progressive values. Some explore non-traditional relationship approaches.',
    familyHome: 'Rebellious energy and drive for freedom from family expectations. Excellent time for modernizing home with technology, creating space for friends and community, or pursuing unconventional family approaches. Family relationships benefit from more independence, equality, and accepting uniqueness. Physical energy directed toward innovation and breaking from tradition. Fight for individual freedom within family. Lead family toward progressive change. Avoid being too detached or rebellious.',
    businessCareer: 'Career drive focused on innovation, technology, networking, and progressive change. Excellent for work in technology, social causes, innovation, networking, or humanitarian fields. Pursue career goals through unconventional approaches and group collaboration. Your innovative thinking and progressive action advance career. Good for launching tech projects, network activism, advocating for workplace change, or pursuing unique career path. Fight for professional progress and innovation.',
    moneyFinances: 'Innovative financial drive and unconventional money action. Good time to pursue income through technology, innovation, networking, or social causes. Earning through unconventional work, tech fields, social networking, or progressive ventures. Spending on technology, innovation, or causes you believe in. Financial action should be forward-thinking and collaborative. Money through unique talents and serving collective needs. Think outside traditional financial approaches.',
    predictions: [
      'Innovative action or unconventional approach solves problem traditional methods couldn\'t',
      'Group project or community activism you pursue energetically creates change',
      'Technology project or innovation you tackle succeeds through unique approach',
      'Networking or social action leads to unexpected opportunity or connection',
      'Rebellion or break from tradition that frees you to authentic path',
      'Fight for social cause or humanitarian ideal makes real difference',
      'Unconventional career move or innovative project you pursue boldly pays off',
      'Friendship or group collaboration you initiate achieves collective goal',
      'Independence or freedom you assert improves your situation significantly',
      'You learn that innovative, unconventional, group-oriented action creates progressive change and freedom'
    ]
  },

  'Mars-Pisces': {
    name: 'Mars Ingress Pisces',
    frequency: 'Approximately every 2 years',
    duration: '~6 weeks',
    planetEnergy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    signEnergy: 'Pisces represents compassion, spirituality, imagination, transcendence, unity, and dissolving boundaries. It\'s the energy of mystical connection, artistic inspiration, and merging with the infinite.',
    eventMeaning: 'Mars in Pisces brings intuitive, compassionate, spiritually-guided action and diffuse drive. Energy becomes less directed and more flowing, following inspiration and intuition. The next 6 weeks favor pursuing spiritual goals, creative/artistic work, compassionate action, and surrendering to flow. Action style becomes more indirect and intuitive. Excellent for creative arts, spiritual practice, helping others, or imaginative pursuits. Boundaries and direction may dissolve - channel compassion into effective action, not escapism or victimhood.',
    loveRelationships: 'Sexual passion expressed through spiritual connection, imagination, and selfless giving. Pursue romance through compassion, creativity, and emotional/spiritual attunement. Physical chemistry needs emotional and spiritual connection to fully activate. Attraction to sensitive, artistic, spiritual partners. Existing relationships benefit from more compassion, forgiveness, and spiritual intimacy. Assert desires gently and intuitively. Some sacrifice for love - give selflessly but maintain boundaries. Pursue romantic ideals.',
    familyHome: 'Compassionate energy directed toward helping family, spiritual family time, or creating peaceful sanctuary. Excellent time for healing family wounds through forgiveness, artistic family projects, or making home spiritually peaceful. Family relationships benefit from more compassion, acceptance, and letting go. Physical energy may be lower - rest, restore, and pursue gentle activities. Fight for family compassionately. Create transcendent, peaceful home atmosphere. Serve family through gentle care.',
    businessCareer: 'Career drive focused on creative, healing, spiritual, or helping work. Excellent for work in arts, music, film, photography, healing professions, spiritual services, or charitable work. Pursue career goals intuitively and compassionately. Your creativity and empathy advance career. Good for artistic projects, compassionate service, or connecting work to something greater. Trust intuition about career action. Serve others through your work. Avoid escapism - channel inspiration into practical action.',
    moneyFinances: 'Intuitive financial drive and earning through creativity or compassion. Good time to pursue income through artistic work, healing services, or following financial intuition. Earning through creative, spiritual, or helping professions. Spending on art, music, spiritual development, or charitable giving. Financial action should combine intuition with practical grounding. Money through imagination, compassion, and service. Avoid financial escapism or confusion - trust intuition but verify facts.',
    predictions: [
      'Creative or artistic project you pursue inspired by imagination succeeds beautifully',
      'Compassionate action or helping someone in need brings deep satisfaction',
      'Spiritual practice or meditation you engage energetically produces insight and peace',
      'Intuitive action on opportunity your feelings guide you toward pays off',
      'Forgiveness or letting go you actively pursue frees you and heals situation',
      'Artistic performance or creative expression channels inspiration powerfully',
      'Service or sacrifice for cause or person you care about creates meaning',
      'Dream or intuitive guidance leads to unexpected opportunity or solution',
      'Boundary you dissolve (appropriately) creates connection and flow',
      'You learn that intuitive, compassionate, spiritually-guided action creates meaning and transcendence'
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
  },

  // ============================================================================
  // JUPITER INGRESSES - Growth, expansion, wisdom (12-13 months per sign)
  // ============================================================================

  'Jupiter-Aries': {
    name: 'Jupiter Ingress Aries',
    frequency: 'Approximately every 12 years',
    duration: '~12-13 months',
    planetEnergy: 'Jupiter represents expansion, growth, optimism, wisdom, luck, philosophy, higher learning, and abundance. It\'s how you grow, what you believe in, and where life expands.',
    signEnergy: 'Aries represents new beginnings, courage, independence, leadership, initiative, and the pioneering spirit. It\'s the spark of self-assertion, the drive to be first, and pure initiating force.',
    eventMeaning: '🌟 MAJOR YEAR-LONG CYCLE: Jupiter in Aries brings bold expansion, courageous growth, and pioneering opportunities. This year favors starting new ventures, taking leadership risks, independent growth, and expanding through courage. Confidence increases. Opportunities come through initiative and boldness. Perfect time to launch new projects, expand independently, take calculated risks, or lead others. Growth comes from being first, bold, and self-reliant.',
    loveRelationships: 'Romantic confidence and adventurous love opportunities expand. Single? Bold pursuit of romance brings luck - be the first to make a move. Existing relationships grow through more adventure, independence, and honesty. Attraction to confident, independent partners. Some relationships need more freedom and excitement to thrive. Honest, direct communication about relationship growth. Romance expands through courage and taking initiative.',
    familyHome: 'Family grows through independent pursuits and leadership. Good year for asserting yourself in family, taking leadership role, or expanding family through birth or new members. Home may expand or move to larger space. Family adventures and physical activities strengthen bonds. Independence from family increases positively. Support family members\' individual growth. Optimistic, active family year.',
    businessCareer: 'Major career expansion through bold initiatives and leadership. Excellent year for entrepreneurship, starting business, taking on leadership role, or pioneering new professional direction. Opportunities come through courage and initiative. Your confidence and vision attract success. Good for competitive fields, sales, athletics, or any work requiring boldness. Take calculated career risks - luck favors the brave. Expand independently.',
    moneyFinances: 'Financial growth through bold action and independent ventures. Good year for starting new income streams, investing in yourself, entrepreneurship, or taking calculated financial risks. Money expands through initiative, leadership, sales, or competitive fields. Spending on adventure, self-development, or what builds confidence brings returns. Financial optimism strong - be bold but verify opportunities. Wealth grows through courage and action.',
    predictions: [
      'Major new beginning or venture succeeds beyond expectations through your courage',
      'Leadership opportunity where your boldness and vision are exactly what\'s needed',
      'Entrepreneurial or independent project launches successfully',
      'Romantic adventure or bold pursuit leads to significant relationship',
      'Physical or athletic goal achieved through confident, persistent effort',
      'Financial opportunity through taking initiative others hesitated on',
      'Confidence breakthrough - you become bolder and more self-assured',
      'Travel or adventure expands your worldview significantly',
      'Competitive situation where your courage gives you winning edge',
      'You learn that growth comes from being bold, independent, and taking initiative'
    ]
  },

  'Jupiter-Taurus': {
    name: 'Jupiter Ingress Taurus',
    frequency: 'Approximately every 12 years',
    duration: '~12-13 months',
    planetEnergy: 'Jupiter represents expansion, growth, optimism, wisdom, luck, philosophy, higher learning, and abundance. It\'s how you grow, what you believe in, and where life expands.',
    signEnergy: 'Taurus represents stability, sensory pleasure, material security, patience, persistence, comfort, and tangible beauty. It\'s the energy of grounding, enjoying physical reality, and building lasting value.',
    eventMeaning: '🌟 MAJOR YEAR-LONG CYCLE: Jupiter in Taurus brings tangible abundance, steady growth, and material expansion. This year favors building wealth, enjoying sensory pleasures, creating beauty, and expanding security. Growth comes slowly but solidly. Perfect time for financial growth, property investment, building lasting value, or developing skills with tangible results. Patience rewarded. Quality over quantity.',
    loveRelationships: 'Relationships expand through commitment, stability, and sensory enjoyment. Love grows more grounded and physical. Good year for deepening commitment, marriage, or building future together. Attraction to stable, reliable, sensually oriented partners. Romance through quality time, physical pleasure, good food, nature, and beautiful experiences. Some relationships stabilize into long-term security. Love expands through patience and consistency.',
    familyHome: 'Major year for home expansion, property investment, or family financial growth. Buy property, renovate extensively, beautify home significantly, or expand living space. Family wealth and security increase. Family time through enjoying meals together, creating comfort, or shared pleasures. Good year for family financial planning or building family legacy. Home becomes more beautiful and comfortable. Invest in lasting family value.',
    businessCareer: 'Career growth through demonstrated value, quality work, and building tangible results. Excellent year for work in finance, real estate, agriculture, food, art, luxury goods, or any field producing material value. Raises and financial recognition for proven worth. Building business slowly and steadily succeeds better than rushing. Professional reputation for reliability and quality grows. Patient career development pays off.',
    moneyFinances: 'Peak year for financial expansion and wealth building. Money grows through patient investment, quality work, proven value, or building tangible assets. Excellent for real estate investment, starting savings, building multiple income streams slowly, or increasing prices based on quality. Spending on lasting quality, comfort, and beauty brings satisfaction. Financial security expands significantly. Build wealth steadily and enjoy prosperity.',
    predictions: [
      'Major financial growth or windfall through patient, quality work',
      'Property investment or home purchase increases security significantly',
      'Relationship deepens into committed partnership with long-term security',
      'Raise or financial recognition for your proven value and consistent quality',
      'Sensory pleasure or beautiful purchase brings lasting satisfaction',
      'Savings or investment account grows substantially through patient accumulation',
      'Quality of life improves through enjoying pleasures and building comfort',
      'Artistic or creative work gains financial value and recognition',
      'Nature experience or outdoor investment brings peace and growth',
      'You learn that slow, steady, quality-focused growth creates real abundance'
    ]
  },

  'Jupiter-Gemini': {
    name: 'Jupiter Ingress Gemini',
    frequency: 'Approximately every 12 years',
    duration: '~12-13 months',
    planetEnergy: 'Jupiter represents expansion, growth, optimism, wisdom, luck, philosophy, higher learning, and abundance. It\'s how you grow, what you believe in, and where life expands.',
    signEnergy: 'Gemini represents curiosity, versatility, communication, mental quickness, learning, connections, and seeing multiple perspectives. It\'s the energy of questions, conversations, and information exchange.',
    eventMeaning: '🌟 MAJOR YEAR-LONG CYCLE: Jupiter in Gemini brings intellectual expansion, communication growth, and learning opportunities. This year favors education, writing, networking, teaching, and mental development. Opportunities through connections and information. Perfect time for taking classes, writing book, expanding social network, learning new skills, or teaching what you know. Mind expands. Multiple opportunities arise. Variety brings growth.',
    loveRelationships: 'Romance expands through communication, intellectual connection, and variety. Meet partners through classes, social events, networking, or local activities. Attraction to intelligent, communicative, versatile partners. Existing relationships grow through more conversation, learning together, variety in activities, and mental stimulation. Some explore multiple romantic options or open relationship structures. Love grows through shared ideas and communication.',
    familyHome: 'Family communication expands and improves. Excellent year for family education, learning together, short family trips, or strengthening sibling relationships. Home may become communication hub or study space. Local community connections increase. Family time through conversation, games, learning, and varied activities. Some families expand through welcoming relatives or guests. Growth through family intellectual stimulation.',
    businessCareer: 'Major career expansion through communication, networking, education, or versatile skills. Excellent year for writing, teaching, media, sales, consulting, or any communication-based work. Multiple career opportunities or projects simultaneously. Professional education and skill development pay off. Networking opens significant doors. Speaking, presenting, or publishing brings recognition. Versatility and quick learning advance career.',
    moneyFinances: 'Financial growth through communication, teaching, writing, or multiple income streams. Good year for freelance work, consulting, tutoring, sales, or any money-making using your voice and ideas. Diversified income sources work better than single focus. Spending on education, communication tools, books, and learning brings returns. Money flows through networking, information, and connections. Variety in financial approaches brings abundance.',
    predictions: [
      'Educational opportunity or class significantly expands your knowledge and opportunities',
      'Writing project, book, or blog succeeds and reaches broader audience',
      'Networking connection leads to major professional or romantic opportunity',
      'Multiple opportunities arise simultaneously - your versatility handles them all',
      'Teaching or sharing knowledge creates unexpected income or recognition',
      'Short trip or local exploration opens new doors and connections',
      'Communication skill you develop becomes major professional asset',
      'Sibling or neighbor connection brings significant benefit or support',
      'Learning new language, skill, or subject opens entirely new possibilities',
      'You learn that growth comes through communication, learning, and diverse connections'
    ]
  },

  'Jupiter-Cancer': {
    name: 'Jupiter Ingress Cancer',
    frequency: 'Approximately every 12 years',
    duration: '~12-13 months (Jupiter is exalted in Cancer)',
    planetEnergy: 'Jupiter represents expansion, growth, optimism, wisdom, luck, philosophy, higher learning, and abundance. It\'s how you grow, what you believe in, and where life expands.',
    signEnergy: 'Cancer represents nurturing, emotions, safety, family, roots, intuition, and the protective instinct. It\'s the energy of home, emotional security, and caring for yourself and others.',
    eventMeaning: '🌟 MAJOR YEAR-LONG CYCLE (Jupiter Exalted): Jupiter in Cancer brings abundant emotional growth, family expansion, and home blessings. This is Jupiter at its most nurturing and protective. This year favors family growth, home improvement, emotional healing, creating security, and nurturing yourself and others. Luck comes through family, home, and emotional connections. Perfect time for buying property, family expansion, emotional development, or creating sanctuary. Growth through care and protection.',
    loveRelationships: 'Relationships expand through emotional depth, nurturing, and creating home together. Love becomes more caring, protective, and family-oriented. Good year for moving in together, marriage, starting family, or deepening emotional intimacy. Attraction to nurturing, family-minded, emotionally available partners. Existing relationships grow through more vulnerability, creating home, or planning family future. Love expands through emotional security and care.',
    familyHome: 'Peak year for family expansion and home growth. Excellent for buying property, major renovations, moving to larger home, or welcoming new family members (birth, adoption, marriage). Family relationships deepen and heal. Home becomes beautiful sanctuary. Family wealth or inheritance possible. Emotional bonds with family strengthen. Perfect time for creating family traditions or establishing roots. Home and family are major sources of joy and growth.',
    businessCareer: 'Career expansion through nurturing professions, family business, real estate, food service, or creating emotionally supportive work environment. Working from home or family-oriented business thrive. Emotional intelligence advances career. Building professional family or supportive team succeeds. Good for work in childcare, counseling, hospitality, or care professions. Workplace feels more like family. Career security increases.',
    moneyFinances: 'Major financial growth through real estate, family business, home-based work, or building security. Good year for property investment, saving for home, family financial planning, or building nest egg. Money expands through nurturing work, emotional intelligence, or caring services. Spending on home, family, and emotional security brings returns and satisfaction. Family financial support possible. Build wealth through protecting and nurturing resources.',
    predictions: [
      'Property purchase or major home improvement increases security and satisfaction significantly',
      'Family expansion through birth, adoption, marriage, or welcoming new members',
      'Emotional healing and growth transforms your life profoundly',
      'Relationship commitment deepens into creating home and family together',
      'Financial windfall or growth through real estate or family connections',
      'Home becomes beautiful, comfortable sanctuary that nurtures you',
      'Family relationships heal and deepen through increased caring and understanding',
      'Work-from-home opportunity or family business succeeds',
      'Emotional security and self-nurturing practices transform your wellbeing',
      'You learn that growth comes through nurturing yourself and others, creating roots and security'
    ]
  },

  'Jupiter-Leo': {
    name: 'Jupiter Ingress Leo',
    frequency: 'Approximately every 12 years',
    duration: '~12-13 months',
    planetEnergy: 'Jupiter represents expansion, growth, optimism, wisdom, luck, philosophy, higher learning, and abundance. It\'s how you grow, what you believe in, and where life expands.',
    signEnergy: 'Leo represents creativity, self-expression, confidence, joy, romance, and radiant presence. It\'s the energy of shining brightly, creating from the heart, and celebrating life with enthusiasm.',
    eventMeaning: '🌟 MAJOR YEAR-LONG CYCLE: Jupiter in Leo brings creative expansion, confidence growth, and joyful opportunities. This year favors self-expression, creative projects, romance, performance, and shining your light boldly. Luck comes through authenticity and creative courage. Perfect time for artistic pursuits, entertainment ventures, romantic adventures, or pursuing joy and passion. Confidence soars. Growth through expressing your authentic self.',
    loveRelationships: 'Peak romance year! Love expands dramatically through joy, passion, and creative expression. Single? You\'re magnetic and confident - attract admirers easily. Dramatic romantic opportunities and grand gestures. Good year for engagement, lavish weddings, or passionate romantic adventures. Existing relationships reignite through more play, romance, and mutual celebration. Express love boldly and generously. Romance as theater - make it grand and memorable.',
    familyHome: 'Family joy and pride increase. Excellent year for family celebrations, parties, creative family projects, or celebrating family achievements. Children (yours or others\') bring special joy and growth. Home becomes stage for entertaining and self-expression. Decorate boldly and create impressive, beautiful space. Family pride and loyalty strengthen. Lead family activities with warmth and generosity. Growth through family fun and celebration.',
    businessCareer: 'Major career expansion through creative work, performance, leadership, or self-expression. Excellent year for entertainment, arts, teaching, leadership positions, working with children, or any field requiring charisma and confidence. Showcase your talents boldly - recognition and appreciation likely. Good for starting creative business, taking center stage professionally, or leading with warmth and vision. Confidence attracts success. Shine professionally.',
    moneyFinances: 'Financial expansion through creative work, performance, leadership, or confident self-expression. Good year for increasing income through showcasing talents, charging what you\'re worth confidently, or starting creative ventures. Spending on creative expression, entertainment, luxury, or what makes you feel special brings joy but watch excess. Financial confidence strong - invest in yourself. Money through shining your unique gifts.',
    predictions: [
      'Creative project or performance receives major recognition and success',
      'Romantic opportunity or relationship that feels magical and destined',
      'Leadership role where your confidence and charisma shine and succeed',
      'Financial opportunity through showcasing your creative talents boldly',
      'Child or creative endeavor brings unexpected joy and fulfillment',
      'Confidence transformation - you become bolder, more authentic, more radiant',
      'Entertainment or social event where you shine and attract positive attention',
      'Generous creative or romantic gesture creates deep appreciation and connection',
      'Artistic or self-expression breakthrough leads to new opportunities',
      'You learn that growth comes through confident, authentic, joyful self-expression'
    ]
  },

  'Jupiter-Virgo': {
    name: 'Jupiter Ingress Virgo',
    frequency: 'Approximately every 12 years',
    duration: '~12-13 months',
    planetEnergy: 'Jupiter represents expansion, growth, optimism, wisdom, luck, philosophy, higher learning, and abundance. It\'s how you grow, what you believe in, and where life expands.',
    signEnergy: 'Virgo represents refinement, service, health, organization, discernment, and practical improvement. It\'s the energy of making things better through detailed attention and skillful craft.',
    eventMeaning: '🌟 MAJOR YEAR-LONG CYCLE: Jupiter in Virgo brings growth through improvement, skill development, health focus, and practical service. This year favors refining skills, improving health, organizing life systems, and serving others skillfully. Expansion comes through attention to detail and quality work. Perfect time for health improvements, skill mastery, organizing projects, or developing expertise. Growth through precision and service.',
    loveRelationships: 'Relationships grow through practical improvements, health and wellness together, and useful service to each other. Love expands by making relationship work better daily - better communication systems, healthier routines, practical problem-solving. Attraction to competent, health-conscious, helpful partners. Existing relationships improve through addressing practical issues and establishing beneficial routines. Love through acts of service and attention to details.',
    familyHome: 'Home and family improve through organization, health focus, and practical service. Excellent year for home organization projects, family health improvements, creating efficient systems, or helping family members practically. Family wellness routines benefit everyone. Home becomes more efficient, healthy, and beautifully organized. Family growth through useful assistance to each other. Practical improvements create lasting family benefit.',
    businessCareer: 'Career expansion through skill development, quality work, practical expertise, or service excellence. Excellent year for healthcare, crafts, editing, analytics, quality control, organization, or service professions. Professional development through education and skill refinement pays off significantly. Recognition for competence and attention to detail. Build career through being the best at what you do. Helpful service advances professional standing.',
    moneyFinances: 'Financial growth through skilled work, practical service, health professions, or improving financial systems. Good year for organizing finances, cutting waste, budgeting efficiently, or earning through expertise and competence. Spending on health, quality tools, professional development, or practical improvements brings returns. Money expands through skillful work and wise money management. Build wealth through quality and efficiency.',
    predictions: [
      'Health improvement or wellness routine significantly enhances your quality of life',
      'Skill development or professional training opens major career opportunities',
      'Organization or system you implement creates efficiency and growth',
      'Service or help you provide creates unexpectedly large positive impact',
      'Financial organization or budget refinement increases savings significantly',
      'Work quality or expertise gets recognized with raise or promotion',
      'Home organization project transforms your daily life for the better',
      'Practical improvement in relationship strengthens bond substantially',
      'Health professional or wellness practice creates breakthrough in wellbeing',
      'You learn that growth comes through skill refinement, practical improvement, and quality service'
    ]
  },

  'Jupiter-Libra': {
    name: 'Jupiter Ingress Libra',
    frequency: 'Approximately every 12 years',
    duration: '~12-13 months',
    planetEnergy: 'Jupiter represents expansion, growth, optimism, wisdom, luck, philosophy, higher learning, and abundance. It\'s how you grow, what you believe in, and where life expands.',
    signEnergy: 'Libra represents balance, partnership, beauty, harmony, diplomacy, and fairness. It\'s the energy of relationships, aesthetics, and seeking equilibrium through connection with others.',
    eventMeaning: '🌟 MAJOR YEAR-LONG CYCLE: Jupiter in Libra brings relationship expansion, partnership opportunities, and aesthetic growth. This year favors partnerships (romantic and business), marriage, collaboration, creating beauty, and seeking balance. Luck comes through others and cooperation. Perfect time for commitment, forming partnerships, beautifying life, diplomatic ventures, or legal matters. Growth through relationships and balance.',
    loveRelationships: 'Peak year for romance, partnership, and commitment! Single? Major romantic opportunities, possibly marriage-quality partnerships. Existing relationships expand through commitment, marriage, or deepening partnership. Attraction to charming, balanced, aesthetically aware partners. Romance becomes more harmonious, balanced, and aesthetically beautiful. Good year for weddings, relationship counseling, or improving partnership dynamics. Love expands through equality and mutual growth.',
    familyHome: 'Family harmony and balance increase. Excellent year for family partnerships, mediating family relationships diplomatically, or beautifying home aesthetically. Family weddings or commitment celebrations. Home becomes showcase of beauty, balance, and peaceful atmosphere. Family relationships improve through fairness, consideration, and diplomacy. Family growth through partnership and collaboration. Create more beauty and harmony at home.',
    businessCareer: 'Major career expansion through partnerships, collaboration, diplomacy, or aesthetic work. Excellent year for law, counseling, design, fashion, beauty, mediation, sales through charm, or relationship-oriented fields. Form beneficial professional partnerships or collaborations. Client relationships expand significantly. Work requiring fairness, balance, or beauty thrives. Networking and diplomatic skills advance career. Partnership opportunities are golden.',
    moneyFinances: 'Financial growth through partnerships, collaborative ventures, beauty work, law, counseling, or balanced money management. Good year for partnership business ventures, marriage financially benefiting you, or earning through aesthetic sense and relationship skills. Spending on beauty, art, fashion, or relationship harmony brings satisfaction. Partnership income or shared financial growth. Money through charm, fairness, and collaboration.',
    predictions: [
      'Major romantic partnership or marriage opportunity that transforms your life',
      'Business partnership or collaboration creates significant financial success',
      'Aesthetic project, design work, or beauty venture receives recognition and profit',
      'Legal matter or contract negotiation resolves favorably through fairness',
      'Home beautification or decoration creates harmonious, impressive space',
      'Relationship improves dramatically through counseling or mutual commitment to balance',
      'Social network or partnership circle expands your opportunities significantly',
      'Diplomatic skill or mediation you provide creates major positive outcome',
      'Wedding or commitment celebration (yours or someone close) brings joy',
      'You learn that growth comes through partnership, balance, beauty, and cooperation with others'
    ]
  },

  'Jupiter-Scorpio': {
    name: 'Jupiter Ingress Scorpio',
    frequency: 'Approximately every 12 years',
    duration: '~12-13 months',
    planetEnergy: 'Jupiter represents expansion, growth, optimism, wisdom, luck, philosophy, higher learning, and abundance. It\'s how you grow, what you believe in, and where life expands.',
    signEnergy: 'Scorpio represents depth, transformation, power, intimacy, truth, and regeneration. It\'s the energy of diving deep, facing shadows, and emerging transformed through intensity.',
    eventMeaning: '🌟 MAJOR YEAR-LONG CYCLE: Jupiter in Scorpio brings transformative expansion, deep growth, and power development. This year favors psychological growth, intimate connections, financial investments, facing shadows, and personal transformation. Growth through depth and intensity. Perfect time for therapy, research, investments, intimate bonding, or profound personal change. Luck comes through facing truth and embracing transformation.',
    loveRelationships: 'Relationships expand and transform through deep intimacy, emotional honesty, and facing relationship shadows. Love becomes more intense, passionate, and profoundly bonding. Good year for deepening commitment, transforming relationship through honesty, or healing relationship wounds. Attraction to deep, intense, emotionally powerful partners. Sexual intimacy reaches new depths. Some relationships transform completely or end to make room for deeper connections. Growth through emotional truth.',
    familyHome: 'Family transformation and deep healing. Excellent year for addressing family shadows, secrets, or hidden dynamics honestly. Family financial matters like inheritance or shared resources expand. Deep family therapy or healing conversations transform relationships. Home renovation or complete transformation. Uncover family history or roots. Family growth through facing difficult truths together. Emotional depth heals family patterns.',
    businessCareer: 'Career expansion through depth work, transformation, research, or power development. Excellent year for psychology, research, investigation, crisis management, surgery, finance (especially investments), or depth consulting. Uncover hidden professional opportunities or information. Career may transform completely. Building professional power and influence. Work requiring deep focus and transformation thrives. Strategic career power moves succeed.',
    moneyFinances: 'Major financial expansion through investments, shared resources, managing others\' money, inheritance, or transforming financial situation completely. Excellent year for strategic investments, dealing with debt or taxes successfully, or building wealth through depth understanding of finances. Money through transformation work, research, or managing resources. Financial power and control increase. Transform your relationship with money.',
    predictions: [
      'Investment or financial transformation creates significant wealth increase',
      'Inheritance or shared financial resource expands your security',
      'Psychological growth or therapy produces life-changing breakthrough',
      'Intimate relationship deepens profoundly or transforms completely',
      'Hidden information or research you uncover opens major opportunities',
      'Career transformation or power increase changes your professional trajectory',
      'Family secret or hidden dynamic surfaces and heals through honesty',
      'Sexual or emotional intimacy reaches unprecedented transformative depth',
      'Personal transformation through facing shadows creates authentic power',
      'You learn that growth comes through depth, truth, transformation, and embracing intensity'
    ]
  },

  'Jupiter-Sagittarius': {
    name: 'Jupiter Ingress Sagittarius',
    frequency: 'Approximately every 12 years',
    duration: '~12-13 months (Jupiter rules Sagittarius)',
    planetEnergy: 'Jupiter represents expansion, growth, optimism, wisdom, luck, philosophy, higher learning, and abundance. It\'s how you grow, what you believe in, and where life expands.',
    signEnergy: 'Sagittarius represents expansion, optimism, adventure, truth-seeking, freedom, and philosophical understanding. It\'s the energy of growth, exploration, and finding meaning through broadening horizons.',
    eventMeaning: '🌟 MAJOR YEAR-LONG CYCLE (Jupiter at Home): Jupiter in Sagittarius brings maximum expansion, optimism, adventure, and philosophical growth. This is Jupiter at its most expansive and optimistic. This year favors travel, higher education, teaching, publishing, adventure, exploring beliefs, and expanding horizons dramatically. Luck and opportunity abound. Perfect time for major adventures, educational pursuits, teaching, travel, or pursuing meaning. Growth comes naturally and abundantly.',
    loveRelationships: 'Romance expands through adventure, honesty, freedom, and shared exploration. Love becomes more optimistic, honest, and growth-oriented. Good year for meeting partners while traveling, long-distance relationships thriving, or exploring relationship through adventures together. Attraction to adventurous, honest, philosophical, freedom-loving partners. Existing relationships grow through travel, learning, honesty, and giving each other space. Love expands through freedom and shared meaning.',
    familyHome: 'Family expands through travel, education, cultural exploration, or welcoming new members from different backgrounds. Excellent year for family travel, international family connections, educational family pursuits, or exploring family beliefs and philosophy. Home may feel confining - expand space or travel frequently. Family relationships improve through more honesty, freedom, and optimism. Growth through family adventures and shared exploration.',
    businessCareer: 'Major career expansion through teaching, travel, publishing, international work, higher education, or philosophical/spiritual fields. Excellent year for education, travel industry, publishing, international business, teaching, coaching, or inspirational work. Career opportunities expand dramatically. Your vision and optimism attract success. Good for career risks, expanding business internationally, or taking on teaching/leadership role. Opportunities abound - say yes to growth.',
    moneyFinances: 'Financial expansion through education, travel, teaching, publishing, international work, or growth investments. Good year for expanding income through teaching what you know, international opportunities, or taking calculated financial risks based on vision. Spending on travel, education, and experiences brings growth and opportunities. Financial optimism strong and often justified. Money flows through sharing knowledge, travel, and expansion. Take wise risks.',
    predictions: [
      'Major travel adventure or international opportunity transforms your worldview',
      'Educational pursuit (degree, certification, teaching) expands career dramatically',
      'Publishing or teaching opportunity reaches broad audience successfully',
      'International connection or cross-cultural experience opens major doors',
      'Romantic adventure or meeting partner while traveling creates significant relationship',
      'Financial opportunity through bold vision and calculated risk-taking',
      'Philosophical or spiritual growth changes your entire life perspective',
      'Freedom or independence you pursue brings unexpected opportunities',
      'Optimistic leap of faith (job change, move, adventure) succeeds beyond expectations',
      'You learn that growth comes through courage, honesty, adventure, and expanding horizons'
    ]
  },

  'Jupiter-Capricorn': {
    name: 'Jupiter Ingress Capricorn',
    frequency: 'Approximately every 12 years',
    duration: '~12-13 months',
    planetEnergy: 'Jupiter represents expansion, growth, optimism, wisdom, luck, philosophy, higher learning, and abundance. It\'s how you grow, what you believe in, and where life expands.',
    signEnergy: 'Capricorn represents ambition, responsibility, discipline, achievement, mastery, and building lasting structures. It\'s the energy of climbing the mountain through persistent effort and mature commitment.',
    eventMeaning: '🌟 MAJOR YEAR-LONG CYCLE: Jupiter in Capricorn brings structured expansion, ambitious growth, and career advancement. This year favors building lasting success, career advancement, strategic planning, achieving goals, and expanding through discipline. Growth comes through responsibility and maturity. Perfect time for career advancement, building business, achieving ambitious goals, or expanding influence and authority. Patience and strategy bring real success.',
    loveRelationships: 'Relationships expand through commitment, building future together, and achieving goals as partnership. Love becomes more mature, responsible, and goal-oriented. Good year for engagement, marriage, or deepening commitment through building security together. Attraction to ambitious, mature, successful, responsible partners. Existing relationships grow through shared goals, traditional commitments, or building empire together. Love expands through mature partnership and shared achievement.',
    familyHome: 'Family expansion through property investment, building family legacy, or taking on family leadership role. Excellent year for buying property as investment, major home improvement increasing value, building family business, or creating family traditions and structure. Family wealth and status may increase. Family relationships improve through more structure and respect. Lead family wisely. Build lasting family security and legacy.',
    businessCareer: 'Peak year for career expansion and professional achievement. Major career advancement, promotions, starting successful business, building professional authority, or achieving ambitious career goals. Excellent for business, management, traditional fields, building systems, or work requiring strategic discipline. Professional recognition and success through competence and maturity. Build career empire patiently and strategically. Your ambition and discipline pay off handsomely.',
    moneyFinances: 'Major financial expansion through career advancement, business building, strategic investments, or disciplined wealth accumulation. Excellent year for building lasting wealth, property investment, increasing income through professional advancement, or starting profitable business. Spending on quality investments and career development brings returns. Financial growth through strategy, discipline, and building value. Conservative but expansive financial approach succeeds. Build empire systematically.',
    predictions: [
      'Major career advancement or promotion significantly increases status and income',
      'Business you start or build achieves success through strategic planning',
      'Property investment or real estate purchase increases wealth substantially',
      'Relationship commitment (engagement, marriage) creates lasting partnership',
      'Professional recognition or achievement establishes your authority in field',
      'Financial goal achieved through disciplined, persistent effort over the year',
      'Leadership role or increased responsibility advances your career trajectory',
      'Long-term goal you\'ve worked toward finally reaches fruition',
      'Building project (business, career, property) creates lasting value and success',
      'You learn that growth comes through discipline, strategy, responsibility, and patient building'
    ]
  },

  'Jupiter-Aquarius': {
    name: 'Jupiter Ingress Aquarius',
    frequency: 'Approximately every 12 years',
    duration: '~12-13 months',
    planetEnergy: 'Jupiter represents expansion, growth, optimism, wisdom, luck, philosophy, higher learning, and abundance. It\'s how you grow, what you believe in, and where life expands.',
    signEnergy: 'Aquarius represents innovation, individuality, friendship, progress, humanitarian ideals, and revolutionary thinking. It\'s the energy of breaking from tradition to create a better future for all.',
    eventMeaning: '🌟 MAJOR YEAR-LONG CYCLE: Jupiter in Aquarius brings progressive expansion, innovative growth, and humanitarian opportunities. This year favors technology, social causes, networking, unconventional approaches, community involvement, and expanding through innovation. Growth comes through being unique and serving collective. Perfect time for technology ventures, social activism, networking widely, or pursuing progressive vision. Future-oriented opportunities abound.',
    loveRelationships: 'Romance expands through friendship, intellectual connection, unconventional approaches, and shared ideals. Love becomes more free, equal, unique, and friendship-based. Good year for friendships becoming romantic, unconventional relationship structures, or connecting through social causes and communities. Attraction to unique, independent, progressive, humanitarian partners. Existing relationships grow through more friendship, freedom, equality, and shared vision for better world. Love expands through authenticity and progressive values.',
    familyHome: 'Family expands through accepting uniqueness, progressive approaches, technology, or community involvement. Excellent year for modernizing home with technology, creating space for friends and community, or exploring unconventional family structures. Family relationships improve through more freedom, equality, and accepting everyone\'s individuality. Some families expand through adoption, fostering, or welcoming diverse members. Growth through family embracing progress and uniqueness.',
    businessCareer: 'Major career expansion through technology, innovation, networking, social causes, or progressive work. Excellent year for tech industry, social entrepreneurship, networking-based work, innovation, humanitarian fields, or unconventional career paths. Professional network expands dramatically. Your innovative thinking and progressive approach attract opportunities. Good for launching tech ventures, networking widely, or advocating for workplace progress. Future-focused career moves succeed.',
    moneyFinances: 'Financial expansion through technology, innovation, networking, social causes, or unconventional income sources. Good year for tech investments, cryptocurrency, crowdfunding, network marketing (ethical), or earning through progressive work. Spending on technology, innovation, and causes you believe in brings opportunities. Financial growth through unique approaches and serving collective needs. Money flows through networking, innovation, and progressive thinking. Think outside traditional financial box.',
    predictions: [
      'Technology venture or innovation creates unexpected financial success',
      'Network or community connection leads to major professional opportunity',
      'Social cause or humanitarian work you engage in expands your influence',
      'Unconventional approach or unique idea opens doors traditional methods couldn\'t',
      'Friendship deepens into romantic relationship or business partnership',
      'Tech investment or progressive financial approach increases wealth significantly',
      'Group project or collaborative venture achieves success through shared vision',
      'Freedom or independence you assert creates new opportunities',
      'Progressive career move or unconventional path proves more successful than traditional',
      'You learn that growth comes through innovation, networking, embracing uniqueness, and serving collective'
    ]
  },

  'Jupiter-Pisces': {
    name: 'Jupiter Ingress Pisces',
    frequency: 'Approximately every 12 years',
    duration: '~12-13 months',
    planetEnergy: 'Jupiter represents expansion, growth, optimism, wisdom, luck, philosophy, higher learning, and abundance. It\'s how you grow, what you believe in, and where life expands.',
    signEnergy: 'Pisces represents compassion, spirituality, imagination, transcendence, unity, and dissolving boundaries. It\'s the energy of mystical connection, artistic inspiration, and merging with the infinite.',
    eventMeaning: '🌟 MAJOR YEAR-LONG CYCLE: Jupiter in Pisces brings spiritual expansion, compassionate growth, and creative abundance. This year favors spiritual development, creative arts, compassionate service, imagination, transcendence, and expanding through surrendering to flow. Growth comes through faith, compassion, and connecting to something greater. Perfect time for spiritual practice, artistic creation, healing work, or service to others. Mystical and creative opportunities abound.',
    loveRelationships: 'Romance expands through spiritual connection, unconditional love, compassion, and creative expression. Love becomes more transcendent, selfless, romantic, and spiritually oriented. Good year for soul mate connections, spiritual partnerships, or deepening relationship through shared spirituality, creativity, or service. Attraction to sensitive, artistic, spiritual, compassionate partners. Existing relationships grow through forgiveness, spiritual practice together, or creative collaboration. Love expands through compassion and spiritual unity.',
    familyHome: 'Family expands through compassion, forgiveness, spiritual connection, or creative pursuits. Excellent year for family healing through forgiveness, spiritual or artistic family activities, or creating peaceful sanctuary at home. Family relationships improve through more compassion, acceptance, and letting go. Some families expand through helping others or spiritual community. Home becomes spiritual and creative retreat. Growth through family compassion and spiritual understanding.',
    businessCareer: 'Major career expansion through creative, healing, spiritual, or compassionate work. Excellent year for arts, music, film, photography, healing professions, spiritual services, nonprofit work, or helping professions. Your creativity, compassion, and imagination attract professional success. Good for artistic projects, compassionate service work, or connecting career to spiritual purpose. Intuition guides career wisely. Work that serves others and expresses soul thrives. Trust the process.',
    moneyFinances: 'Financial expansion through creative work, healing services, spiritual work, or compassionate service. Good year for earning through arts, healing, spiritual services, or work you believe in spiritually. Spending on art, music, spiritual development, and charitable giving feels right and brings blessings. Financial intuition strong - trust subtle guidance but maintain practical grounding. Money flows through imagination, compassion, and service. Sometimes trust and generosity create abundance mysteriously.',
    predictions: [
      'Spiritual awakening or practice produces profound transformation and peace',
      'Creative or artistic project succeeds beyond expectations through inspired flow',
      'Compassionate service or helping others creates deep meaning and unexpected blessings',
      'Soul mate connection or spiritually profound relationship enters your life',
      'Artistic work gains recognition and financial success through authentic expression',
      'Forgiveness or letting go creates healing and freedom you didn\'t expect',
      'Financial blessing comes through unexpected source or mysterious timing',
      'Dream or intuitive guidance leads to important opportunity or decision',
      'Charitable giving or service to others returns to you multiplied',
      'You learn that growth comes through faith, compassion, creativity, surrender, and spiritual connection'
    ]
  },

  // ============================================================================
  // SATURN INGRESSES - Mastery, discipline, responsibility (~2.5 years per sign)
  // ============================================================================

  'Saturn-Aries': {
    name: 'Saturn Ingress Aries',
    frequency: 'Approximately every 29 years',
    duration: '~2.5 years',
    planetEnergy: 'Saturn represents discipline, responsibility, mastery, structure, limitation, maturity, and time. It\'s where you build, commit, face challenges, and achieve lasting accomplishment through effort.',
    signEnergy: 'Aries represents boldness, initiative, independence, courage, action, and pioneering spirit. It\'s the energy of self-assertion, leadership, new beginnings, and direct action.',
    eventMeaning: '⏰ MAJOR 2.5-YEAR CYCLE: Saturn in Aries brings mastery through bold initiative, disciplined action, and mature independence. This cycle requires you to build lasting leadership, develop courageous self-reliance, and master the art of strategic action. You must learn to assert yourself with wisdom, take initiative with responsibility, and pioneer with patience. This is about developing mature courage, disciplined boldness, and sustainable self-assertion. Structure meets fire, patience meets action.',
    loveRelationships: 'Romance matures through honest assertion, independent commitment, and courageous vulnerability. Relationships require direct communication, personal responsibility, and mutual respect for individuality. You learn to love with strength yet wisdom, passion yet patience. Long-term partnerships deepen through shared initiative, adventurous commitment, and mature honesty. Dating becomes more direct and purposeful. You attract partners who value courage, independence, and authentic self-expression. Commitment requires both passion and responsibility.',
    familyHome: 'Family responsibility requires leadership, independence, and mature initiative. Home life needs structure yet spontaneity, discipline yet adventure. You may take on family leadership roles, establish new family traditions, or pioneer new living arrangements. Responsibility for aging parents or younger family members requires courageous action. Home improvements favor bold projects with long-term value. Family relationships mature through honest boundaries and direct communication. You learn to balance independence with family commitment.',
    businessCareer: 'Major career development through disciplined leadership, strategic initiative, and mature boldness. Professional success requires courage plus patience, action plus planning, independence plus responsibility. You may pioneer new career directions, start your own business, or take on significant leadership roles. Authority comes through demonstrated competence and courageous decision-making. Career advancement requires sustained effort over the full 2.5 years. Professional reputation builds through reliable initiative and strategic action. Entrepreneurship favored with proper planning.',
    moneyFinances: 'Financial mastery through disciplined action, strategic investment, and independent money management. Money requires bold decisions with careful planning, initiative with responsibility. You learn to invest in yourself with wisdom, take calculated financial risks, and build sustainable income through entrepreneurial effort. Financial independence becomes priority. Budget discipline supports bold financial moves. Long-term wealth builds through patient action and strategic positioning. Financial lessons teach that courage without wisdom is reckless, but wisdom without courage leads nowhere.',
    predictions: [
      'You initiate a major 2.5-year project or commitment that requires sustained courage and effort',
      'Leadership opportunity or responsibility tests your ability to balance boldness with wisdom',
      'Financial independence becomes urgent priority, leading to disciplined action plan',
      'Relationship or partnership requires more honest assertion and mature boundaries',
      'Career advancement comes through pioneering initiative backed by solid preparation',
      'Physical discipline (fitness, martial arts, athletics) becomes important for confidence building',
      'You learn to say "no" with strength yet grace, establishing healthy boundaries',
      'Major decision requires both courage to act and wisdom to plan strategically',
      'Independence achieved through sustained effort rather than impulsive action',
      'You master the art of being both bold and responsible, passionate yet patient'
    ]
  },

  'Saturn-Taurus': {
    name: 'Saturn Ingress Taurus',
    frequency: 'Approximately every 29 years',
    duration: '~2.5 years',
    planetEnergy: 'Saturn represents discipline, responsibility, mastery, structure, limitation, maturity, and time. It\'s where you build, commit, face challenges, and achieve lasting accomplishment through effort.',
    signEnergy: 'Taurus represents stability, security, material comfort, sensory pleasure, values, and persistence. It\'s the energy of building, maintaining, enjoying physical reality, and valuing quality over quantity.',
    eventMeaning: '⏰ MAJOR 2.5-YEAR CYCLE: Saturn in Taurus brings mastery through patient building, disciplined finances, and mature values. This cycle requires you to establish solid foundations, develop financial discipline, and build lasting material security. You must learn what has real value versus temporary pleasure, practice sustainable abundance, and commit to quality over quantity. This is about developing financial maturity, building enduring resources, and mastering the physical world through patience and persistence.',
    loveRelationships: 'Romance matures through stability, loyalty, consistent affection, and shared values. Relationships require demonstration of commitment through actions not just words, financial responsibility, and building together toward security. You learn to love with patience, provide steadily, and value quality connection over quantity of romance. Long-term partnerships deepen through shared financial planning, creating comfortable home together, and consistent reliability. Dating becomes more practical and value-focused. You attract partners who are stable, reliable, and financially responsible. Commitment means building something tangible together.',
    familyHome: 'Family responsibility centers on financial security, stable home environment, and material provision. Home life needs solid foundation, comfortable environment, and financial discipline. You may purchase property, make lasting home improvements, or take on financial responsibility for family. Building family wealth or managing family resources becomes important. Home becomes sanctuary requiring investment and maintenance. Family relationships mature through shared values and practical support. You learn to provide steadily and create lasting security for loved ones.',
    businessCareer: 'Major career development through patient building, financial acumen, and demonstrable value creation. Professional success requires persistence, quality work, practical skills, and long-term vision. You may build your own business slowly but surely, develop valuable expertise, or create tangible professional assets. Authority comes through proven competence and reliable performance. Career advancement is gradual but solid over the full 2.5 years. Professional reputation builds through consistent quality and financial wisdom. Finance, real estate, agriculture, art, or luxury goods sectors favored.',
    moneyFinances: 'Financial mastery through disciplined saving, strategic investing, and building lasting wealth. Money requires patience, conservative approach, and long-term thinking. You learn to budget rigorously, invest in tangible assets (real estate, precious metals, quality goods), and build sustainable income streams. Financial security becomes top priority. Debt reduction essential. Long-term wealth builds through compound growth and patient accumulation. Financial lessons teach that slow and steady wins, quality beats quantity, and real wealth comes from what you keep not what you earn.',
    predictions: [
      'You commit to serious 2.5-year financial plan (debt elimination, savings goal, investment strategy)',
      'Major purchase or investment in tangible asset (home, land, business, quality goods) that lasts',
      'Career shift toward more stable, financially rewarding, or materially productive work',
      'Relationship or partnership requires more financial responsibility and practical commitment',
      'You develop valuable skill or expertise that becomes long-term income source',
      'Budget discipline becomes non-negotiable, leading to significant financial progress',
      'Physical health requires attention to diet, exercise, or chronic conditions - body demands respect',
      'You learn to distinguish between what has real value versus what merely looks good',
      'Property matter (purchase, sale, improvement, management) becomes significant focus',
      'You master the art of building slowly but surely, valuing quality, and creating lasting security'
    ]
  },

  'Saturn-Gemini': {
    name: 'Saturn Ingress Gemini',
    frequency: 'Approximately every 29 years',
    duration: '~2.5 years',
    planetEnergy: 'Saturn represents discipline, responsibility, mastery, structure, limitation, maturity, and time. It\'s where you build, commit, face challenges, and achieve lasting accomplishment through effort.',
    signEnergy: 'Gemini represents communication, learning, curiosity, versatility, connection, and information exchange. It\'s the energy of thinking, speaking, writing, learning, networking, and intellectual exploration.',
    eventMeaning: '⏰ MAJOR 2.5-YEAR CYCLE: Saturn in Gemini brings mastery through disciplined communication, structured learning, and mature thinking. This cycle requires you to develop mental discipline, improve communication skills, and build lasting knowledge. You must learn to think critically yet thoroughly, speak with authority yet clarity, and commit to intellectual growth. This is about developing mental maturity, mastering communication, and building intellectual credibility through focused study and practice.',
    loveRelationships: 'Romance matures through honest communication, intellectual connection, and meaningful conversation. Relationships require clear communication, mental compatibility, and shared learning. You learn to love through words that matter, conversations that deepen, and mental stimulation that endures. Long-term partnerships deepen through improved communication skills, shared intellectual interests, and mature dialogue. Dating becomes more communication-focused. You attract partners who value intelligence, honesty, and good conversation. Commitment requires both mental connection and verbal clarity.',
    familyHome: 'Family responsibility centers on communication, education, and sibling relationships. Home life needs better communication systems, space for learning, and intellectual stimulation. You may take responsibility for siblings, support family education, or improve family communication. Relationship with siblings may mature or require attention. Home becomes learning environment or communication hub. Family relationships mature through clearer communication and shared learning. You learn to communicate family needs clearly and listen more carefully.',
    businessCareer: 'Major career development through communication mastery, educational credentials, or information expertise. Professional success requires writing skills, public speaking, teaching ability, or technical knowledge. You may pursue advanced education, develop training programs, master new technology, or build communication-based career. Authority comes through demonstrated expertise and clear communication. Career advancement requires intellectual discipline over the full 2.5 years. Professional reputation builds through published work, teaching, or thought leadership. Writing, teaching, media, technology, or sales sectors favored.',
    moneyFinances: 'Financial mastery through information, communication skills, and intellectual assets. Money comes through teaching, writing, consulting, speaking, or knowledge work. You learn to monetize your mind, sell your expertise, and build income through intellectual property. Financial planning requires research and education. Multiple income streams favored over single source. Long-term wealth builds through developed expertise and communication platforms. Financial lessons teach that knowledge is profitable, information has value, and clear communication attracts opportunities.',
    predictions: [
      'You commit to major educational goal (degree, certification, skill mastery) requiring 2.5 years of focused study',
      'Writing project (book, blog, course, publication) becomes serious long-term commitment',
      'Communication skills dramatically improve through practice, training, or professional necessity',
      'Relationship with sibling matures or requires increased responsibility and better communication',
      'Career advancement tied to teaching, writing, public speaking, or demonstrating expertise',
      'You develop intellectual discipline - less scattered thinking, more focused learning and mastery',
      'Social media or online presence becomes professional asset requiring strategic management',
      'Important contract, negotiation, or agreement requires careful wording and clear communication',
      'You learn to think before speaking, commit to truth over gossip, and value quality information',
      'You master the art of clear communication, focused learning, and intellectual credibility'
    ]
  },

  'Saturn-Cancer': {
    name: 'Saturn Ingress Cancer',
    frequency: 'Approximately every 29 years',
    duration: '~2.5 years',
    planetEnergy: 'Saturn represents discipline, responsibility, mastery, structure, limitation, maturity, and time. It\'s where you build, commit, face challenges, and achieve lasting accomplishment through effort.',
    signEnergy: 'Cancer represents nurturing, emotions, family, home, roots, security, and protection. It\'s the energy of caring, belonging, emotional safety, and creating sanctuary.',
    eventMeaning: '⏰ MAJOR 2.5-YEAR CYCLE: Saturn in Cancer brings mastery through emotional maturity, family responsibility, and creating lasting security. This cycle requires you to build solid foundations in home and family, develop emotional discipline, and take on nurturing responsibilities. You must learn to care wisely, protect without smothering, and create sustainable emotional security. This is about maturing emotionally, honoring family commitments, and building a home that endures.',
    loveRelationships: 'Romance matures through emotional responsibility, nurturing commitment, and building family together. Relationships require emotional honesty, creating safe space for vulnerability, and demonstrating care through action. You learn to love by providing emotional security, honoring feelings while maintaining boundaries. Long-term partnerships deepen through discussing family plans, creating home together, and emotional maturity. Dating becomes more family-oriented. You attract partners who value emotional depth, family, and creating home. Commitment means building family and emotional security together.',
    familyHome: 'Family responsibility becomes central focus for 2.5 years. Home life needs solid foundation, emotional safety, and proper structure. You may care for aging parents, raise children with more discipline, or establish family traditions that last. Purchase or improvement of home property likely. Family relationships mature through clear boundaries and consistent care. Relationship with mother figure may require attention or reach new maturity. You learn to be both nurturing and boundaried, caring yet strong. Home becomes emotional sanctuary requiring investment and protection.',
    businessCareer: 'Major career development through businesses related to home, family, food, real estate, or caregiving. Professional success requires emotional intelligence, creating safe environments, and demonstrating care for others. You may start family business, work in real estate or hospitality, or build career around nurturing others. Authority comes through demonstrated care and emotional maturity. Career advancement requires balancing professional ambition with family needs over 2.5 years. Professional reputation builds through creating security for others.',
    moneyFinances: 'Financial mastery through real estate, family business, or security-focused investing. Money requires emotional discipline, protecting resources, and building family wealth. You learn to budget for family needs, invest in property or security, and create financial safety net. Financial security for family becomes top priority. Home purchase or improvement likely financial focus. Long-term wealth builds through real estate, family assets, and conservative protection of resources. Financial lessons teach that security beats risk, family wealth matters, and home is valuable investment.',
    predictions: [
      'You take on major family responsibility (caring for parent, raising child, supporting family member)',
      'Home purchase, major renovation, or relocation creates lasting foundation for family',
      'Emotional maturity deepens through family challenges requiring both care and boundaries',
      'Relationship becomes more serious with discussions of living together, marriage, or children',
      'Career shift toward work involving home, family, real estate, food, or caregiving',
      'Relationship with mother or mother figure reaches new level of maturity or requires increased care',
      'You establish family traditions, routines, or structures that provide lasting emotional security',
      'Financial planning centers on family security, home investment, or building family wealth',
      'You learn to care without losing yourself, nurture without enabling, protect without controlling',
      'You master the art of emotional maturity, family responsibility, and creating lasting home'
    ]
  },

  'Saturn-Leo': {
    name: 'Saturn Ingress Leo',
    frequency: 'Approximately every 29 years',
    duration: '~2.5 years',
    planetEnergy: 'Saturn represents discipline, responsibility, mastery, structure, limitation, maturity, and time. It\'s where you build, commit, face challenges, and achieve lasting accomplishment through effort.',
    signEnergy: 'Leo represents creativity, self-expression, confidence, joy, leadership, and recognition. It\'s the energy of shining, creating, celebrating, leading, and expressing authentic self.',
    eventMeaning: '⏰ MAJOR 2.5-YEAR CYCLE: Saturn in Leo brings mastery through disciplined creativity, mature leadership, and authentic self-expression. This cycle requires you to develop your creative gifts seriously, step into leadership with humility, and express yourself with both confidence and wisdom. You must learn to shine without arrogance, lead without domination, and create with discipline. This is about developing mature confidence, mastering creative skills, and building lasting legacy through authentic expression.',
    loveRelationships: 'Romance matures through authentic self-expression, generous giving, and playful commitment. Relationships require showing your true self, taking romantic leadership, and celebrating each other. You learn to love with both passion and maturity, generosity and boundaries. Long-term partnerships deepen through creative projects together, supporting each other\'s self-expression, and mature romance. Dating becomes more authentic and confident. You attract partners who appreciate your uniqueness and creative spirit. Commitment requires mutual recognition and celebrating each other\'s light.',
    familyHome: 'Family responsibility involves supporting children\'s development, creating joyful home environment, and modeling authentic leadership. Home life needs creative expression, celebration, and space for individual shine. You may take serious responsibility for children\'s education or creative development. Family relationships mature through encouraging individual expression while maintaining respect. Relationship with father figure may require attention. You learn to lead family with both strength and heart. Home becomes stage for creative expression and celebration.',
    businessCareer: 'Major career development through creative mastery, leadership roles, or performance-based work. Professional success requires developing creative skills seriously, stepping into leadership positions, and building personal brand. You may launch creative business, take on management role, or develop expertise in entertainment, arts, or leadership. Authority comes through demonstrated creative excellence and authentic leadership. Career advancement requires both confidence and humility over 2.5 years. Professional reputation builds through quality creative work and mature leadership.',
    moneyFinances: 'Financial mastery through creative work, leadership positions, or performance-based income. Money requires investing in your creative development, building your personal brand, and monetizing your unique talents. You learn to value your creative work appropriately, negotiate confidently, and build income through authentic self-expression. Financial success comes from what makes you uniquely you. Long-term wealth builds through developed creative mastery and leadership positions. Financial lessons teach that your authentic gifts have value, confidence attracts abundance, and creative mastery pays.',
    predictions: [
      'You commit seriously to creative project, artistic mastery, or performance skill over 2.5 years',
      'Leadership role or responsibility requires you to step up with both confidence and humility',
      'Creative work becomes professional career or serious income source through disciplined development',
      'Relationship with child or father figure matures or requires increased responsibility and attention',
      'You overcome fear of being seen and step into authentic self-expression publicly',
      'Creative talent reaches new level of mastery through consistent practice and discipline',
      'Career advancement comes through demonstrating creative excellence and mature leadership',
      'You learn to balance confidence with humility, self-expression with consideration for others',
      'Personal brand or public presence becomes important professional asset requiring strategic development',
      'You master the art of authentic leadership, disciplined creativity, and confident self-expression'
    ]
  },

  'Saturn-Virgo': {
    name: 'Saturn Ingress Virgo',
    frequency: 'Approximately every 29 years',
    duration: '~2.5 years',
    planetEnergy: 'Saturn represents discipline, responsibility, mastery, structure, limitation, maturity, and time. It\'s where you build, commit, face challenges, and achieve lasting accomplishment through effort.',
    signEnergy: 'Virgo represents analysis, refinement, service, health, organization, and practical skill. It\'s the energy of improvement, discernment, efficiency, helping, and mastering craft.',
    eventMeaning: '⏰ MAJOR 2.5-YEAR CYCLE: Saturn in Virgo brings mastery through skill refinement, service excellence, and health discipline. This cycle requires you to perfect your craft, improve your systems, and commit to service and wellness. You must learn to analyze wisely, improve without perfectionism, and serve without losing yourself. This is about developing practical mastery, improving health habits, and building excellence through attention to detail and consistent refinement.',
    loveRelationships: 'Romance matures through practical service, helpful actions, and attention to details that matter. Relationships require showing care through helpful deeds, improving together, and supporting each other\'s health and growth. You learn to love by being useful, noticing what partner needs, and helping without criticizing. Long-term partnerships deepen through daily routines together, health habits, and practical support. Dating becomes more discerning and health-conscious. You attract partners who value competence, health, and practical support. Commitment means improving life together through service and care.',
    familyHome: 'Family responsibility involves health matters, daily routines, and practical service. Home life needs better organization, efficient systems, and health-supporting environment. You may care for family member\'s health, improve home organization, or take on practical family tasks. Family relationships mature through helpful service and reducing criticism. You learn to help without enabling, improve without perfectionizing. Home becomes well-organized, health-supporting space. Daily family routines and chores require better systems and shared responsibility.',
    businessCareer: 'Major career development through technical mastery, analytical skills, or service excellence. Professional success requires attention to detail, continuous improvement, and practical problem-solving. You may develop specialized expertise, build efficient systems, or create service-based career. Authority comes through demonstrated competence and useful contribution. Career advancement requires skill mastery over 2.5 years. Professional reputation builds through quality work, reliability, and practical solutions. Healthcare, analysis, editing, crafts, administration, or technical services favored.',
    moneyFinances: 'Financial mastery through budgeting excellence, expense analysis, and efficient resource management. Money requires detailed tracking, reducing waste, and practical financial systems. You learn to analyze spending patterns, improve financial efficiency, and build wealth through careful management. Financial health requires same discipline as physical health. Long-term wealth builds through consistent saving, reducing unnecessary expenses, and practical investing. Financial lessons teach that small improvements compound, efficiency creates wealth, and financial wellness requires daily attention.',
    predictions: [
      'You commit to serious health improvement plan (diet, exercise, medical treatment) over 2.5 years',
      'Professional skill mastery becomes focus - you develop expertise through detailed study and practice',
      'Work systems and daily routines dramatically improve through better organization and efficiency',
      'Health issue requires attention and commitment to better habits and possibly medical care',
      'Career advancement comes through demonstrating technical competence and practical problem-solving',
      'You learn to improve without perfectionism, serve without losing yourself, analyze without criticizing',
      'Financial systems improve dramatically through budgeting discipline and expense analysis',
      'Relationship or partnership benefits from practical support and reducing critical tendencies',
      'Daily habits and routines become more structured, efficient, and health-supporting',
      'You master the art of practical excellence, useful service, and sustainable improvement'
    ]
  },

  'Saturn-Libra': {
    name: 'Saturn Ingress Libra',
    frequency: 'Approximately every 29 years',
    duration: '~2.5 years (Saturn is exalted in Libra)',
    planetEnergy: 'Saturn represents discipline, responsibility, mastery, structure, limitation, maturity, and time. It\'s where you build, commit, face challenges, and achieve lasting accomplishment through effort.',
    signEnergy: 'Libra represents balance, partnership, harmony, aesthetics, diplomacy, and fairness. It\'s the energy of relating, cooperating, creating beauty, and seeking equilibrium.',
    eventMeaning: '⏰ MAJOR 2.5-YEAR CYCLE (Saturn Exalted): Saturn in Libra brings mastery through balanced relationships, diplomatic maturity, and committed partnerships. This is Saturn at its most balanced and fair. This cycle requires you to build lasting partnerships, develop diplomatic skills, and commit to fairness and beauty. You must learn to relate with maturity, balance giving with receiving, and create harmony through structure. This is about developing relationship mastery, building committed partnerships, and balancing all areas of life with wisdom and grace.',
    loveRelationships: 'Romance matures through serious commitment, balanced partnership, and mature relating. Relationships require equality, fairness, clear agreements, and mutual commitment. You learn to love through balanced give-and-take, diplomatic communication, and committed partnership. Long-term partnerships deepen through marriage or serious commitment, working through relationship challenges, and creating lasting harmony. Dating becomes more serious and commitment-focused. Singles often meet serious partner during this cycle. You attract partners ready for mature commitment. This is prime time for engagement, marriage, or deepening existing commitment.',
    familyHome: 'Family responsibility involves creating harmony, mediating conflicts, and establishing fair systems. Home life needs balance, beauty, and peaceful environment. You may formalize family partnerships, improve home aesthetics, or create more equitable family arrangements. Family relationships mature through addressing imbalances and establishing fairness. Relationship with spouse or partner becomes more structured and committed. You learn to balance family needs with partnership needs. Home becomes beautiful, balanced sanctuary.',
    businessCareer: 'Major career development through partnership work, legal matters, design fields, or diplomatic roles. Professional success requires collaboration skills, aesthetic sense, and ability to create win-win solutions. You may form serious business partnership, work in law or mediation, or build career in arts or aesthetics. Authority comes through demonstrated fairness and diplomatic skill. Career advancement requires balancing independence with collaboration over 2.5 years. Professional reputation builds through creating harmony and beauty. Law, mediation, design, counseling, or partnership businesses favored.',
    moneyFinances: 'Financial mastery through partnership resources, balanced investing, and fair financial agreements. Money requires addressing financial imbalances, creating equitable arrangements, and building wealth through partnerships. You learn to balance earning with spending, investment with preservation, and mine with ours. Financial partnerships (marriage, business) require clear agreements and fairness. Long-term wealth builds through balanced approach and partnership assets. Financial lessons teach that fairness creates prosperity, balance beats extremes, and partnership wealth can exceed individual wealth.',
    predictions: [
      'Major relationship commitment (engagement, marriage, serious partnership) formalizes over this 2.5-year period',
      'Business partnership forms with clear agreements, roles, and commitment to shared success',
      'Legal matter (contract, marriage, divorce, lawsuit) requires serious attention and fair resolution',
      'You learn to balance career with relationship, independence with partnership, self with other',
      'Relationship challenges force you to develop diplomacy, fairness, and mature communication',
      'Career advancement comes through collaboration skills and ability to create win-win solutions',
      'Financial partnership (marriage, business) requires clear agreements about money and resources',
      'You develop aesthetic sense or appreciation for beauty that becomes important to you',
      'Imbalances in any area of life become obvious and require correction for peace',
      'You master the art of balanced partnership, diplomatic maturity, and committed relationships'
    ]
  },

  'Saturn-Scorpio': {
    name: 'Saturn Ingress Scorpio',
    frequency: 'Approximately every 29 years',
    duration: '~2.5 years',
    planetEnergy: 'Saturn represents discipline, responsibility, mastery, structure, limitation, maturity, and time. It\'s where you build, commit, face challenges, and achieve lasting accomplishment through effort.',
    signEnergy: 'Scorpio represents intensity, transformation, depth, power, intimacy, and regeneration. It\'s the energy of probing beneath surface, merging deeply, wielding power, and transforming through crisis.',
    eventMeaning: '⏰ MAJOR 2.5-YEAR CYCLE: Saturn in Scorpio brings mastery through emotional depth, psychological work, and transformative power. This cycle requires you to face your shadows, develop emotional resilience, and build through crisis and transformation. You must learn to handle power wisely, merge resources responsibly, and transform through deep work. This is about developing psychological maturity, mastering shared resources, and building strength through facing what is hidden or difficult.',
    loveRelationships: 'Romance matures through emotional depth, sexual intimacy, and psychological honesty. Relationships require facing difficult truths, sharing vulnerabilities, and building trust through crisis. You learn to love deeply yet wisely, merge yet maintain self, be intimate yet boundaried. Long-term partnerships deepen through working through jealousy, control issues, or power dynamics. Relationships either transform and deepen or end if trust is broken. Dating becomes more intense and psychologically focused. You attract partners who are deep, intense, and transformative. Commitment requires emotional and psychological honesty.',
    familyHome: 'Family responsibility involves dealing with difficult topics (death, inheritance, sexuality, power), shared resources, or family secrets. Home life needs emotional safety for depth and transformation. You may deal with family inheritance, care for dying family member, or address family psychological issues. Family relationships mature through addressing what was hidden or taboo. Shared family resources require responsible management. You learn to handle family power dynamics with maturity. Home becomes space for deep emotional work and transformation.',
    businessCareer: 'Major career development through crisis management, psychological work, financial services, or transformation work. Professional success requires handling difficult situations, managing shared resources, and facilitating transformation. You may work in psychology, finance, medicine, research, or crisis management. Authority comes through demonstrated ability to handle intensity and complexity. Career advancement requires emotional resilience over 2.5 years. Professional reputation builds through depth work and transformative impact. Psychology, finance, medicine, research, or detective work favored.',
    moneyFinances: 'Financial mastery through managing shared resources, investments, debt elimination, and strategic financial transformation. Money requires dealing with debt, taxes, inheritance, or joint finances. You learn to manage other people\'s money responsibly, invest strategically, and build wealth through transformation. Debt elimination becomes serious focus. Shared financial resources (marriage, inheritance, investment) require wise management. Long-term wealth builds through strategic investing and eliminating financial drain. Financial lessons teach that debt is bondage, shared money requires trust, and transformation creates wealth.',
    predictions: [
      'Major debt elimination or financial transformation occurs over this 2.5-year period',
      'Psychological work (therapy, shadow work, healing) becomes important for growth and maturity',
      'Inheritance matter, shared resources, or financial partnership requires serious attention',
      'Relationship deepens through crisis, emotional honesty, or facing difficult truths together',
      'Career shift toward work involving depth, crisis, transformation, finance, or psychology',
      'You face fears, shadows, or psychological patterns that have limited you',
      'Power dynamics in relationship or career must be addressed and transformed',
      'Sexual intimacy deepens through emotional honesty and vulnerability',
      'You develop resilience through facing difficulty rather than avoiding it',
      'You master the art of emotional depth, wise power use, and transformation through crisis'
    ]
  },

  'Saturn-Sagittarius': {
    name: 'Saturn Ingress Sagittarius',
    frequency: 'Approximately every 29 years',
    duration: '~2.5 years',
    planetEnergy: 'Saturn represents discipline, responsibility, mastery, structure, limitation, maturity, and time. It\'s where you build, commit, face challenges, and achieve lasting accomplishment through effort.',
    signEnergy: 'Sagittarius represents expansion, optimism, adventure, truth-seeking, freedom, and philosophical understanding. It\'s the energy of growth, exploration, teaching, and finding meaning through broadening horizons.',
    eventMeaning: '⏰ MAJOR 2.5-YEAR CYCLE: Saturn in Sagittarius brings mastery through disciplined learning, structured expansion, and mature philosophy. This cycle requires you to commit to higher education, develop teaching expertise, and build wisdom through structured exploration. You must learn to expand with planning, seek truth with discipline, and teach with authority. This is about developing intellectual maturity, mastering educational or philosophical domains, and building credibility as teacher or expert.',
    loveRelationships: 'Romance matures through shared philosophy, adventurous commitment, and intellectual growth together. Relationships require honesty, shared beliefs, and freedom within commitment. You learn to love through truth-telling, growing together, and respecting each other\'s need for expansion. Long-term partnerships deepen through travel together, shared educational pursuits, and philosophical alignment. Dating may involve people from different cultures or backgrounds. You attract partners who value truth, growth, and adventure. Commitment requires shared vision and room for individual growth.',
    familyHome: 'Family responsibility involves education, cultural connection, or supporting family member\'s growth and expansion. Home life needs space for learning, books, and cultural expression. You may support family member\'s education, integrate different cultural backgrounds in family, or teach family members. Family relationships mature through honesty and respecting each other\'s paths. You learn to provide freedom within family structure. Home becomes learning center and launch pad for adventures.',
    businessCareer: 'Major career development through higher education, teaching, publishing, international work, or philosophical pursuits. Professional success requires advanced credentials, teaching ability, or cross-cultural competence. You may pursue graduate degree, publish book or research, teach professionally, or work internationally. Authority comes through demonstrated expertise and teaching ability. Career advancement requires educational commitment over 2.5 years. Professional reputation builds through published work, teaching, or thought leadership. Education, publishing, travel, law, or philosophy sectors favored.',
    moneyFinances: 'Financial mastery through education, teaching income, international business, or publishing. Money requires investing in education, building expertise that pays, and creating teaching or consulting income. You learn to monetize your knowledge, charge appropriately for expertise, and build wealth through intellectual assets. Educational investment pays off long-term. International business or diverse income streams favored. Long-term wealth builds through educational credentials and teaching platforms. Financial lessons teach that expertise has value, education is investment, and teaching creates sustainable income.',
    predictions: [
      'You commit to major educational pursuit (advanced degree, certification, mastery training) over 2.5 years',
      'Teaching, training, or mentoring becomes significant part of your work and income',
      'Publishing project (book, research, blog, course) requires disciplined commitment',
      'International travel, relocation, or cross-cultural connection becomes important',
      'Your philosophy or belief system matures through testing, experience, and deeper study',
      'Career advancement requires educational credentials or demonstrated expertise',
      'Relationship or partnership involves different cultural backgrounds or philosophical alignment',
      'You learn to balance freedom with responsibility, expansion with planning',
      'Legal matter or ethical situation requires you to stand for truth and principle',
      'You master the art of disciplined learning, structured expansion, and authoritative teaching'
    ]
  },

  'Saturn-Capricorn': {
    name: 'Saturn Ingress Capricorn',
    frequency: 'Approximately every 29 years',
    duration: '~2.5 years (Saturn rules Capricorn)',
    planetEnergy: 'Saturn represents discipline, responsibility, mastery, structure, limitation, maturity, and time. It\'s where you build, commit, face challenges, and achieve lasting accomplishment through effort.',
    signEnergy: 'Capricorn represents ambition, achievement, structure, mastery, responsibility, and authority. It\'s the energy of building, achieving, leading with integrity, and reaching the mountain top through persistent effort.',
    eventMeaning: '⏰ MAJOR 2.5-YEAR CYCLE (Saturn at Home): Saturn in Capricorn brings maximum mastery through ambition, achievement, and building lasting structures. This is Saturn at its most disciplined and achievement-focused. This cycle requires you to commit to long-term goals, build professional authority, and achieve mastery in your chosen field. You must learn to work strategically, accept responsibility, and build something that lasts. This is about reaching professional maturity, building enduring achievements, and becoming an authority in your domain.',
    loveRelationships: 'Romance matures through serious commitment, traditional values, and building together toward shared goals. Relationships require responsibility, long-term vision, and demonstrating commitment through achievement. You learn to love through providing security, building together, and respecting ambition. Long-term partnerships deepen through supporting each other\'s goals, traditional commitment (marriage), and building legacy together. Dating becomes very serious and goal-oriented. You attract partners who are ambitious, responsible, and focused on achievement. Commitment means building something lasting together.',
    familyHome: 'Family responsibility reaches peak importance - caring for elders, providing for family, or establishing family legacy. Home life needs solid structure, traditional values, and respect for authority. You may become family provider, care for aging parents, or establish family business or wealth. Family relationships mature through accepting responsibility and honoring tradition. Relationship with father or authority figures becomes significant. You learn to lead family with wisdom and integrity. Home becomes foundation for achievement and legacy building.',
    businessCareer: 'Major career achievement and professional mastery during this critical 2.5-year period. Professional success requires strategic planning, accepting responsibility, and consistent excellent performance. You may achieve major promotion, start serious business, become recognized authority, or reach career pinnacle. Authority comes through demonstrated mastery and integrity over time. This is peak career-building period - what you build now lasts. Professional reputation solidifies. Career advancement requires total commitment. Management, executive roles, professional services, or mastery fields favored.',
    moneyFinances: 'Financial mastery through strategic planning, conservative investing, and building lasting wealth. Money requires disciplined saving, long-term investing, and building multiple income sources. You learn to manage money professionally, invest for retirement, and build wealth systematically. Financial security through achievement becomes top priority. Real estate, business ownership, and traditional investments favored. Long-term wealth builds through patient accumulation and strategic positioning. Financial lessons teach that wealth is built not found, time is friend, and discipline creates freedom.',
    predictions: [
      'Major career achievement or promotion recognizes your years of effort and positions you as authority',
      'You commit to ambitious 2.5-year goal that requires total focus and strategic execution',
      'Business launch or professional credentialing establishes you as expert in your field',
      'Relationship with father, mentor, or authority figure matures or requires serious responsibility',
      'Financial planning becomes highly disciplined with focus on retirement, property, or wealth building',
      'You accept major responsibility that tests your maturity and builds lasting credibility',
      'Career advancement requires balancing ambition with integrity, success with character',
      'Professional reputation solidifies - what you build now defines your legacy',
      'You learn that achievement without integrity is hollow, but principled success creates lasting respect',
      'You master the art of ambitious achievement, strategic building, and professional mastery'
    ]
  },

  'Saturn-Aquarius': {
    name: 'Saturn Ingress Aquarius',
    frequency: 'Approximately every 29 years',
    duration: '~2.5 years (Saturn co-rules Aquarius with Uranus)',
    planetEnergy: 'Saturn represents discipline, responsibility, mastery, structure, limitation, maturity, and time. It\'s where you build, commit, face challenges, and achieve lasting accomplishment through effort.',
    signEnergy: 'Aquarius represents innovation, community, individuality, progress, friendship, and humanitarian vision. It\'s the energy of awakening, connecting, revolutionizing, and serving collective evolution.',
    eventMeaning: '⏰ MAJOR 2.5-YEAR CYCLE (Saturn Co-Rules): Saturn in Aquarius brings mastery through structured innovation, committed community building, and disciplined progress. This cycle requires you to build lasting friendships, develop unique expertise, and commit to progressive causes. You must learn to innovate with planning, rebel with purpose, and serve community with consistency. This is about developing mature individuality, building community structures, and achieving mastery through unique approaches.',
    loveRelationships: 'Romance matures through friendship foundation, intellectual connection, and respecting individuality within commitment. Relationships require mental compatibility, shared ideals, and freedom within structure. You learn to love as best friend, honor uniqueness, and commit without possessing. Long-term partnerships deepen through shared community involvement, intellectual pursuits, and supporting each other\'s individuality. Dating often begins as friendship. You attract partners who are unique, intellectual, and community-minded. Commitment requires both togetherness and independence.',
    familyHome: 'Family responsibility involves creating community, supporting unique expression, and building progressive family culture. Home life needs space for individuality, technology, and community connection. You may create chosen family, integrate diverse people into family, or establish progressive family values. Family relationships mature through respecting differences and reducing judgment. You learn to balance family tradition with progressive values. Home becomes community hub or technology center.',
    businessCareer: 'Major career development through technology, innovation, community work, or unique expertise. Professional success requires developing specialized knowledge, networking strategically, and building community platforms. You may work in technology, social causes, community organizing, or innovative fields. Authority comes through demonstrated expertise and community contribution. Career advancement requires balancing independence with collaboration over 2.5 years. Professional reputation builds through unique contributions and network connections. Technology, social work, innovation, or community leadership favored.',
    moneyFinances: 'Financial mastery through network building, technology investments, and group economics. Money requires investing in innovation, building income through networks, and participating in collective wealth building. You learn to leverage technology for income, invest in future industries, and build wealth through communities. Financial planning includes cryptocurrency, technology stocks, or innovative investments. Group financial ventures favored over solo wealth building. Long-term wealth builds through networks, technology, and future-focused investing. Financial lessons teach that networks are net worth, innovation pays, and collective success beats solo effort.',
    predictions: [
      'You build or join community, group, or network that becomes central to your life over 2.5 years',
      'Technology skill or innovative expertise becomes serious professional asset and income source',
      'Friendship deepens into serious commitment (business partnership, romantic relationship, lifelong bond)',
      'Career shift toward work involving technology, community, innovation, or social causes',
      'You develop unique expertise or unconventional approach that distinguishes you professionally',
      'Community leadership role or social cause requires sustained commitment and organizational skill',
      'Financial strategy includes technology investments or participation in group wealth building',
      'You learn to balance independence with collaboration, uniqueness with belonging',
      'Progressive values or humanitarian vision require you to commit with action not just words',
      'You master the art of structured innovation, committed community building, and unique contribution'
    ]
  },

  'Saturn-Pisces': {
    name: 'Saturn Ingress Pisces',
    frequency: 'Approximately every 29 years',
    duration: '~2.5 years',
    planetEnergy: 'Saturn represents discipline, responsibility, mastery, structure, limitation, maturity, and time. It\'s where you build, commit, face challenges, and achieve lasting accomplishment through effort.',
    signEnergy: 'Pisces represents spirituality, compassion, imagination, transcendence, unity, and dissolution. It\'s the energy of connecting to divine, serving selflessly, creating artistically, and transcending ego boundaries.',
    eventMeaning: '⏰ MAJOR 2.5-YEAR CYCLE: Saturn in Pisces brings mastery through spiritual discipline, compassionate service, and creative structure. This cycle requires you to build spiritual practice, develop artistic mastery, and serve with boundaries. You must learn to structure the formless, discipline your imagination, and serve without martyrdom. This is about developing spiritual maturity, mastering creative arts, and building lasting connection to the divine through consistent practice.',
    loveRelationships: 'Romance matures through spiritual connection, compassionate service, and transcendent love. Relationships require forgiveness, unconditional love, and spiritual alignment. You learn to love selflessly yet wisely, merge spiritually yet maintain boundaries. Long-term partnerships deepen through spiritual practice together, serving others as couple, and creating art or music together. Dating becomes more spiritually focused. You attract partners who are compassionate, artistic, and spiritually aware. Commitment requires both transcendent love and practical boundaries.',
    familyHome: 'Family responsibility involves caring for those who cannot care for themselves, spiritual support, or healing family wounds. Home life needs space for spirituality, art, music, and retreat. You may care for ill or addicted family member, provide spiritual guidance, or create healing family environment. Family relationships mature through forgiveness and compassion. You learn to serve family without losing yourself. Home becomes sanctuary, art studio, or spiritual retreat.',
    businessCareer: 'Major career development through spiritual work, healing arts, creative mastery, or compassionate service. Professional success requires developing intuitive gifts, artistic skills, or healing abilities. You may work in healthcare, spirituality, arts, music, film, or service to marginalized. Authority comes through demonstrated compassion and creative excellence. Career advancement requires balancing idealism with practicality over 2.5 years. Professional reputation builds through healing impact and artistic beauty. Healthcare, spirituality, arts, film, music, or charity work favored.',
    moneyFinances: 'Financial mastery through creative work, healing services, or spiritual teaching. Money requires monetizing artistic gifts, charging for healing work, and building income through compassion and creativity. You learn to value your spiritual or creative gifts financially, charge appropriately for healing work, and build sustainable income from what feels like calling. Financial boundaries become essential - you cannot serve from empty cup. Long-term wealth builds through developed artistic mastery or healing expertise. Financial lessons teach that spiritual gifts have material value, compassion can pay, and you must receive to continue giving.',
    predictions: [
      'You commit to serious spiritual practice (meditation, yoga, prayer) that becomes daily discipline over 2.5 years',
      'Creative or artistic mastery develops through consistent practice and potential formal training',
      'Healing work or compassionate service becomes central to your life and possibly career',
      'You care for someone who is ill, addicted, or suffering, learning balance between service and boundaries',
      'Artistic work (music, film, photography, dance, poetry) becomes serious pursuit or profession',
      'You face and heal addiction, escapism, or victim patterns through spiritual or therapeutic work',
      'Career shift toward work involving healing, creativity, spirituality, or service to suffering',
      'You develop intuitive or psychic gifts through disciplined practice and study',
      'Financial boundaries become necessary - you learn to charge for spiritual/creative gifts',
      'You master the art of spiritual discipline, creative structure, and compassionate service with boundaries'
    ]
  },

  // ============================================================================
  // URANUS INGRESSES - Revolution, awakening, liberation (~7 years per sign)
  // ============================================================================

  'Uranus-Aries': {
    name: 'Uranus Ingress Aries',
    frequency: 'Approximately every 84 years',
    duration: '~7 years',
    planetEnergy: 'Uranus represents revolution, awakening, innovation, liberation, sudden change, and authentic individuality. It\'s where you break free, innovate, rebel, awaken, and express your unique genius.',
    signEnergy: 'Aries represents boldness, initiative, independence, courage, action, and pioneering spirit. It\'s the energy of self-assertion, leadership, new beginnings, and direct action.',
    eventMeaning: '🔮 REVOLUTIONARY 7-YEAR CYCLE: Uranus in Aries brings revolutionary awakening through bold action, radical independence, and pioneering innovation. This rare generational cycle (happens once in 84 years) creates revolutionary leaders, breakthrough innovations, and total reinvention of identity. You must break free from limitations, pioneer new paths, and assert your authentic self fearlessly. This is about awakening to your unique genius, leading revolutions, and boldly creating brand new possibilities through courageous action.',
    loveRelationships: 'Romance revolutionizes through sudden attractions, unconventional relationships, and freedom-based love. Relationships require total authenticity, independence within partnership, and excitement over security. You learn to love with both passion and freedom, commitment without caging. Sudden attractions or breakups possible as you awaken to what you really need. Long-term partnerships transform through more independence, honest expression, and exciting new dynamics. Dating becomes unpredictable and electric. You attract bold, independent, unconventional partners. Commitment requires freedom to be fully yourself.',
    familyHome: 'Family dynamics revolutionize through independence movements, unconventional arrangements, or sudden changes. Home life needs radical change, freedom, and space for authentic self-expression. You may break from family tradition, create unconventional family structure, or experience sudden family changes. Family relationships transform through everyone claiming their individuality. You learn to be true to yourself within family context. Home becomes launch pad for new identity and revolutionary self-expression.',
    businessCareer: 'Revolutionary 7-year career transformation through entrepreneurship, innovation, or radical reinvention. Professional success requires bold initiative, pioneering vision, and willingness to lead revolution. You may start groundbreaking business, pioneer new industry, or completely reinvent career direction. Authority comes through demonstrated courage and innovative leadership. Career path likely changes dramatically over these 7 years. Professional reputation builds through fearless innovation and authentic leadership. Entrepreneurship, technology, innovation, or revolutionary fields favored.',
    moneyFinances: 'Financial revolution through entrepreneurship, innovative income streams, or radical financial independence. Money requires bold financial moves, investing in yourself and innovation, and building independent wealth. You learn to earn money your own way, invest in revolutionary ideas, and create financial freedom through bold action. Financial independence becomes urgent need. Traditional financial paths feel constraining. Long-term wealth builds through entrepreneurial ventures and innovative investments. Financial lessons teach that freedom requires bold action, innovation pays, and financial independence equals life independence.',
    predictions: [
      'Major life reinvention begins - you become almost unrecognizable from who you were 7 years prior',
      'Entrepreneurial venture or bold career change allows you to be your own boss and express your genius',
      'Sudden awakening to your true self requires breaking free from limiting relationships or situations',
      'Revolutionary idea or innovation you pioneer could change your life and possibly impact many others',
      'Relationship dynamics revolutionize - more freedom, authenticity, or possible sudden changes',
      'You break free from family expectations and claim your right to live your own unique path',
      'Financial independence becomes achieved through bold action, entrepreneurship, or innovative income',
      'Physical appearance, style, or identity dramatically changes to reflect authentic self',
      'You become leader or pioneer in your field through courageous innovation and authentic vision',
      'You master the art of fearless authenticity, bold action, and revolutionary self-leadership'
    ]
  },

  'Uranus-Taurus': {
    name: 'Uranus Ingress Taurus',
    frequency: 'Approximately every 84 years',
    duration: '~7 years',
    planetEnergy: 'Uranus represents revolution, awakening, innovation, liberation, sudden change, and authentic individuality. It\'s where you break free, innovate, rebel, awaken, and express your unique genius.',
    signEnergy: 'Taurus represents stability, security, material comfort, sensory pleasure, values, and persistence. It\'s the energy of building, maintaining, enjoying physical reality, and valuing quality over quantity.',
    eventMeaning: '🔮 REVOLUTIONARY 7-YEAR CYCLE: Uranus in Taurus brings revolutionary transformation of values, finances, and material reality. This rare generational cycle revolutionizes money systems, environmental practices, and what we value. You must liberate yourself financially, revolutionize your relationship with money and resources, and discover what has real value beyond tradition. This is about financial awakening, revaluing everything, and building new relationship with physical reality and material security.',
    loveRelationships: 'Romance revolutionizes through revaluing what matters, unconventional approaches to security, and liberating from material expectations. Relationships require authentic values alignment, freedom from material pressure, and redefining what security means together. You learn to love based on genuine values not social expectations, create security through innovation not tradition. Long-term partnerships transform through new financial arrangements, revalued priorities, and unconventional approaches to stability. Dating involves people with innovative values. You attract partners who value authenticity over appearances. Commitment requires shared authentic values.',
    familyHome: 'Family finances revolutionize through innovative income, unexpected changes, or new values. Home life needs revolutionary changes in comfort, security systems, and material environment. You may experience unexpected financial changes, adopt eco-friendly or technological home systems, or completely revalue family priorities. Family relationships transform through changing what you value and how you provide security. You learn to create security through innovation not just tradition. Home becomes showcase for innovative living and authentic values.',
    businessCareer: 'Revolutionary 7-year career transformation in finance, agriculture, environment, technology applied to physical world, or values-based business. Professional success requires innovative approach to material world, sustainable practices, or financial technology. You may revolutionize traditional industry, work in fintech or greentech, or build business based on new values. Authority comes through demonstrated innovation in practical fields. Career likely involves cryptocurrency, sustainable business, or innovative finance. Professional reputation builds through values-driven innovation.',
    moneyFinances: 'Financial revolution through cryptocurrency, innovative investments, or completely new approach to money. Money requires embracing new financial technologies, investing in sustainable/innovative companies, and liberating from traditional financial systems. You learn about cryptocurrency, invest in future-focused assets, and build wealth through innovation. Financial security redefined - less about accumulation, more about freedom and alignment with values. Unexpected financial changes possible. Long-term wealth builds through investing in innovation, sustainability, and future. Financial lessons teach that value is changing, innovation disrupts markets, and authentic values create sustainable wealth.',
    predictions: [
      'Major financial revolution occurs - income sources, investment strategy, or relationship with money completely transforms',
      'You discover cryptocurrency, sustainable investing, or other innovative financial technology',
      'Unexpected financial change (windfall or loss) awakens you to new relationship with money and security',
      'Career shift toward sustainable business, financial technology, environmental work, or values-driven enterprise',
      'What you value completely transforms - possessions, relationships, or life priorities revolutionize',
      'Home becomes more eco-friendly, technologically advanced, or unconventionally comfortable',
      'Relationship requires renegotiating financial arrangements or redefining what security means together',
      'You liberate yourself from materialism while still honoring genuine need for physical comfort',
      'Body, health, or sensory experience revolutionizes through new approaches to wellness or pleasure',
      'You master the art of innovative stability, values-driven wealth, and liberated relationship with material world'
    ]
  },

  'Uranus-Gemini': {
    name: 'Uranus Ingress Gemini',
    frequency: 'Approximately every 84 years',
    duration: '~7 years',
    planetEnergy: 'Uranus represents revolution, awakening, innovation, liberation, sudden change, and authentic individuality. It\'s where you break free, innovate, rebel, awaken, and express your unique genius.',
    signEnergy: 'Gemini represents communication, learning, curiosity, versatility, connection, and information exchange. It\'s the energy of thinking, speaking, writing, learning, networking, and intellectual exploration.',
    eventMeaning: '🔮 REVOLUTIONARY 7-YEAR CYCLE: Uranus in Gemini brings revolutionary transformation of communication, technology, and information systems. This rare generational cycle revolutionizes how we think, communicate, learn, and connect. You must innovate your communication, embrace breakthrough technologies, and liberate your mind from limiting beliefs. This is about mental awakening, communication revolution, and connecting in radically new ways through technology and authentic expression.',
    loveRelationships: 'Romance revolutionizes through unconventional communication, mental connection, and freedom of expression. Relationships require intellectual excitement, authentic communication, and mental space. You learn to love through revolutionary honesty, exciting conversation, and mental stimulation. Sudden connections through technology or communication possible. Long-term partnerships transform through better communication technology, more authentic dialogue, and intellectual freedom. Dating often happens online or through unconventional communication. You attract intellectually innovative, communicative partners. Commitment requires mental freedom and authentic expression.',
    familyHome: 'Family communication revolutionizes through new technologies, honest dialogue, or breakthrough understanding. Home life needs space for learning, communication technology, and intellectual freedom. You may adopt new family communication technologies, experience sudden news from or about family, or breakthrough in family understanding. Relationship with siblings may change dramatically. Family relationships transform through more authentic communication and respecting different viewpoints. Home becomes technology hub and learning center.',
    businessCareer: 'Revolutionary 7-year career transformation through communication innovation, technology, education revolution, or information work. Professional success requires mastering new communication technologies, innovative thinking, or revolutionary teaching methods. You may work in tech communication, online education, social media innovation, or breakthrough information systems. Authority comes through demonstrated communication innovation. Career likely involves internet, AI, communication technology, or revolutionary education. Professional reputation builds through innovative ideas and communication mastery.',
    moneyFinances: 'Financial revolution through online income, communication-based business, or innovative information work. Money requires monetizing communication skills, leveraging technology, and creating multiple innovative income streams. You learn to earn through online platforms, teach or communicate innovatively, and build wealth through information and technology. Online business or side hustles likely. Financial freedom through diversified tech-savvy income. Long-term wealth builds through communication platforms, information products, and technology leverage. Financial lessons teach that information is currency, communication creates income, and technology enables financial freedom.',
    predictions: [
      'Major communication breakthrough revolutionizes how you think, speak, or connect with others',
      'You master new communication technology (AI, social media, online platforms) that transforms your work or life',
      'Online business, blog, podcast, or digital platform becomes significant income source or influence',
      'Relationship begins online or transforms through better communication technology and authentic dialogue',
      'Educational path completely changes - online learning, self-education, or revolutionary teaching method',
      'Sibling relationship transforms through breakthrough communication or unexpected changes',
      'You develop innovative ideas or communication style that distinguishes you professionally',
      'Information or news arrives suddenly that awakens you to new truth or perspective',
      'Social connections revolutionize - online communities, diverse networks, or unconventional friendships',
      'You master the art of revolutionary communication, mental freedom, and innovative connection'
    ]
  },

  'Uranus-Cancer': {
    name: 'Uranus Ingress Cancer',
    frequency: 'Approximately every 84 years',
    duration: '~7 years',
    planetEnergy: 'Uranus represents revolution, awakening, innovation, liberation, sudden change, and authentic individuality. It\'s where you break free, innovate, rebel, awaken, and express your unique genius.',
    signEnergy: 'Cancer represents nurturing, emotions, family, home, roots, security, and protection. It\'s the energy of caring, belonging, emotional safety, and creating sanctuary.',
    eventMeaning: '🔮 REVOLUTIONARY 7-YEAR CYCLE: Uranus in Cancer brings revolutionary transformation of family, home, and emotional life. This rare generational cycle revolutionizes family structures, home living, and emotional expression. You must liberate your emotions, create unconventional family or home arrangements, and redefine what security means. This is about emotional awakening, family revolution, and creating innovative approaches to nurture, belonging, and home.',
    loveRelationships: 'Romance revolutionizes through unconventional family arrangements, emotional freedom, and redefining home together. Relationships require emotional authenticity, freedom to feel, and innovative approaches to family and home. You learn to love with emotional honesty not just comfortable patterns, create home that honors both freedom and belonging. Sudden emotional awakenings or changes in relationship possible. Long-term partnerships transform through unconventional living arrangements, emotional breakthroughs, or redefining family. Dating involves people with progressive family values. You attract emotionally authentic, unconventional partners. Commitment requires emotional freedom and innovative home life.',
    familyHome: 'Family structure revolutionizes - unconventional arrangements, sudden changes, or liberation from family patterns. Home life needs radical changes, technological integration, or completely new living arrangement. You may create chosen family, adopt unconventional home (tiny house, community living, digital nomad), or experience sudden family changes. Family relationships transform through emotional honesty and accepting unconventional choices. You learn to honor both roots and freedom, belonging and authenticity. Home becomes innovative living space reflecting authentic values.',
    businessCareer: 'Revolutionary 7-year career transformation through home-based business, family innovation, real estate technology, or emotional intelligence work. Professional success requires innovative approaches to home/family services, emotional authenticity at work, or home-based entrepreneurship. You may work from home, innovate family services, or build career in domestic technology. Authority comes through emotional authenticity and innovative family/home solutions. Career likely involves remote work, family tech, or domestic innovation. Professional reputation builds through work-life integration and emotional intelligence.',
    moneyFinances: 'Financial revolution through home-based income, real estate innovation, or family finances transformation. Money requires creating income from home, investing in domestic technology or real estate innovation, and financial security through unconventional means. You learn to earn from home base, invest in family or property differently, and build wealth through domestic innovation. Work-from-home income likely. Unexpected family financial changes possible. Long-term wealth builds through home business, real estate technology, or family financial innovation. Financial lessons teach that home can create income, family finances can transform, and security comes through innovation.',
    predictions: [
      'Major home change over 7 years - move, renovation, unconventional living arrangement, or home revolution',
      'Family structure transforms - chosen family, unconventional arrangement, or liberation from family patterns',
      'Work-from-home opportunity or home-based business becomes primary income source',
      'Emotional breakthrough awakens you to patterns limiting authentic feeling and expression',
      'Relationship or family requires more emotional freedom and less adherence to traditional expectations',
      'Unexpected family change (birth, adoption, someone leaving) transforms family dynamics',
      'Mother or mother-figure relationship transforms through greater honesty and accepting differences',
      'Home becomes smart-home, eco-home, tiny house, or other innovative living space',
      'You create chosen family or community that provides belonging while honoring individuality',
      'You master the art of emotional freedom, innovative homemaking, and liberated nurturing'
    ]
  },

  'Uranus-Leo': {
    name: 'Uranus Ingress Leo',
    frequency: 'Approximately every 84 years',
    duration: '~7 years',
    planetEnergy: 'Uranus represents revolution, awakening, innovation, liberation, sudden change, and authentic individuality. It\'s where you break free, innovate, rebel, awaken, and express your unique genius.',
    signEnergy: 'Leo represents creativity, self-expression, confidence, joy, leadership, and recognition. It\'s the energy of shining, creating, celebrating, leading, and expressing authentic self.',
    eventMeaning: '🔮 REVOLUTIONARY 7-YEAR CYCLE: Uranus in Leo brings revolutionary transformation of creativity, self-expression, and leadership. This rare generational cycle revolutionizes entertainment, creative industries, and how we express individuality. You must liberate your creative genius, express yourself authentically and boldly, and lead through unique vision. This is about creative awakening, revolutionary self-expression, and leading through being utterly and unapologetically yourself.',
    loveRelationships: 'Romance revolutionizes through dramatic self-expression, unconventional romance, and freedom to shine. Relationships require celebrating each other\'s uniqueness, creative collaboration, and excitement over routine. You learn to love with dramatic authenticity, celebrate differences, and create exciting relationship. Sudden passionate attractions or dramatic relationship changes possible. Long-term partnerships transform through more creative expression, celebrating individuality, and exciting new adventures. Dating becomes more expressive and unconventional. You attract creative, confident, unique partners. Commitment requires mutual celebration and freedom to shine.',
    familyHome: 'Family dynamics revolutionize through supporting creative expression, unconventional parenting, or dramatic changes. Home life needs space for creativity, performance, and individual expression. You may raise children very progressively, create home studio or creative space, or experience dramatic family changes. Family relationships transform through celebrating uniqueness rather than conformity. You learn to lead family while honoring each person\'s light. Home becomes stage for creative expression and authentic celebration.',
    businessCareer: 'Revolutionary 7-year career transformation through creative innovation, entertainment technology, or unique leadership. Professional success requires expressing unique creative vision, innovative performance or art, or revolutionary leadership style. You may work in entertainment innovation, create breakthrough art, or lead through authentic self-expression. Authority comes through demonstrated creative genius and authentic leadership. Career likely involves creative technology, social media, entertainment innovation, or unique personal brand. Professional reputation builds through bold creative vision.',
    moneyFinances: 'Financial revolution through creative work, performance income, or monetizing your unique self-expression. Money requires building personal brand, creating innovative entertainment or art, and earning through authentic self-expression. You learn to monetize your creativity innovatively, build income through social media or performance, and create wealth by being uniquely you. Creative entrepreneurship favored. Unexpected creative opportunities. Long-term wealth builds through developed creative platform and authentic personal brand. Financial lessons teach that authentic self-expression attracts abundance, creativity is valuable, and your uniqueness is your wealth.',
    predictions: [
      'Major creative breakthrough - your unique creative genius emerges and revolutionizes your life',
      'You build significant social media presence, creative platform, or personal brand that generates income/influence',
      'Romantic relationship becomes more exciting, expressive, or experiences dramatic transformation',
      'Children (yours or others) inspire revolutionary changes in your life or you parent unconventionally',
      'Career shift toward creative field, entertainment, performance, or work requiring authentic self-expression',
      'You overcome fear of being seen and step boldly into public creative expression',
      'Leadership role requires you to lead through authentic example rather than authority',
      'Creative work (art, music, performance, content creation) becomes serious pursuit or profession',
      'You liberate your self-expression from others\' expectations and shine with authentic confidence',
      'You master the art of revolutionary creativity, authentic leadership, and bold self-expression'
    ]
  },

  'Uranus-Virgo': {
    name: 'Uranus Ingress Virgo',
    frequency: 'Approximately every 84 years',
    duration: '~7 years',
    planetEnergy: 'Uranus represents revolution, awakening, innovation, liberation, sudden change, and authentic individuality. It\'s where you break free, innovate, rebel, awaken, and express your unique genius.',
    signEnergy: 'Virgo represents analysis, refinement, service, health, organization, and practical skill. It\'s the energy of improvement, discernment, efficiency, helping, and mastering craft.',
    eventMeaning: '🔮 REVOLUTIONARY 7-YEAR CYCLE: Uranus in Virgo brings revolutionary transformation of health, work, and service. This rare generational cycle revolutionizes healthcare, work practices, and approaches to wellness and service. You must liberate your work life, revolutionize your health practices, and serve through innovative means. This is about health awakening, work revolution, and creating breakthrough approaches to service, wellness, and daily life.',
    loveRelationships: 'Romance revolutionizes through practical innovation, health-conscious relating, and serving each other uniquely. Relationships require healthy routines, useful partnership, and freedom in daily life. You learn to love through innovative service, support health and growth, and create efficient life together. Long-term partnerships transform through better health practices, work-life balance innovation, or new daily routines. Dating involves health-conscious or work-progressive people. You attract partners who value wellness and practical innovation. Commitment requires healthy daily life and useful partnership.',
    familyHome: 'Family health or daily routines revolutionize through new practices, technological healthcare, or service innovation. Home life needs health-supporting systems, efficient organization, or work-from-home setup. You may adopt revolutionary health practices for family, create highly organized or technological home, or innovate family service. Family relationships transform through better health awareness and more efficient systems. You learn to serve family through innovative means. Home becomes wellness center or highly efficient workspace.',
    businessCareer: 'Revolutionary 7-year career transformation through healthcare innovation, work technology, or service revolution. Professional success requires innovative approaches to health/wellness, technological skill mastery, or revolutionary service delivery. You may work in health tech, automate work processes, or revolutionize service industry. Authority comes through demonstrated innovation in practical fields. Career likely involves health technology, AI/automation, remote work, or service innovation. Professional reputation builds through efficient innovation and useful breakthroughs.',
    moneyFinances: 'Financial revolution through innovative work arrangements, health-based income, or efficiency creating wealth. Money requires working smarter not harder through technology, monetizing health or organization skills, and building wealth through efficient systems. You learn to automate income, work remotely or flexibly, and create passive income through systems. Gig economy or multiple income streams likely. Long-term wealth builds through technological skills, health expertise, or efficient business systems. Financial lessons teach that efficiency creates wealth, health is valuable, and smart work beats hard work.',
    predictions: [
      'Major health transformation - revolutionary diet, exercise, or wellness practice dramatically improves wellbeing',
      'Work arrangements revolutionize - remote work, freelancing, or technological automation transforms career',
      'You master breakthrough technology or skill that makes you highly valuable professionally',
      'Daily routines completely transform through technological tools or innovative efficiency systems',
      'Health breakthrough or crisis awakens you to importance of wellness and self-care',
      'Work-life balance improves dramatically through remote work, automation, or boundary setting',
      'Service work or helping profession adopts innovative approach or technology',
      'You develop expertise in health technology, productivity systems, or practical innovation',
      'Perfectionism releases as you embrace innovative experimentation over traditional perfection',
      'You master the art of efficient innovation, health technology, and liberated service'
    ]
  },

  'Uranus-Libra': {
    name: 'Uranus Ingress Libra',
    frequency: 'Approximately every 84 years',
    duration: '~7 years',
    planetEnergy: 'Uranus represents revolution, awakening, innovation, liberation, sudden change, and authentic individuality. It\'s where you break free, innovate, rebel, awaken, and express your unique genius.',
    signEnergy: 'Libra represents balance, partnership, harmony, aesthetics, diplomacy, and fairness. It\'s the energy of relating, cooperating, creating beauty, and seeking equilibrium.',
    eventMeaning: '🔮 REVOLUTIONARY 7-YEAR CYCLE: Uranus in Libra brings revolutionary transformation of relationships, partnerships, and social justice. This rare generational cycle revolutionizes marriage, partnership structures, and approaches to fairness and beauty. You must liberate your relationships, create unconventional partnerships, and fight for authentic fairness. This is about relationship awakening, partnership revolution, and creating radically new approaches to relating, justice, and beauty.',
    loveRelationships: 'Romance revolutionizes through unconventional commitments, equal partnerships, and freedom within relationship. Relationships require authentic equality, respect for independence, and innovative partnership structures. You learn to love with both commitment and freedom, togetherness without possession. Sudden relationship changes (meeting, commitment, or separation) possible. Long-term partnerships transform through renegotiating agreements, more equality, or unconventional arrangements (open relationship, living apart together). Dating becomes more progressive. You attract independent, unconventional, socially conscious partners. Commitment requires both partnership and independence.',
    familyHome: 'Family partnerships revolutionize through more equality, unconventional arrangements, or social justice involvement. Home life needs aesthetic innovation, partnership equality, and space for individual freedom within family. You may create more equal domestic arrangements, advocate for family member\'s rights, or redesign home beautifully. Family relationships transform through fairness and respecting each person\'s independence. You learn to balance family togetherness with individual freedom. Home becomes beautiful, harmonious space honoring both connection and autonomy.',
    businessCareer: 'Revolutionary 7-year career transformation through partnership innovation, social justice work, design revolution, or legal reform. Professional success requires innovative collaboration, fighting for fairness, or revolutionary aesthetics. You may form unconventional business partnerships, work in social justice or legal reform, or revolutionize design/aesthetics. Authority comes through demonstrated fairness and innovative collaboration. Career likely involves partnership law, social justice, design innovation, or mediation. Professional reputation builds through championing equality and creating beauty.',
    moneyFinances: 'Financial revolution through partnership finances, fair trade, or aesthetic innovation income. Money requires fair financial partnerships, investing in social justice or beauty, and earning through collaboration. You learn to share finances fairly, invest in companies with values alignment, and build wealth through partnerships. Financial equality in relationships becomes important. Long-term wealth builds through fair partnerships and values-driven investments. Financial lessons teach that financial fairness creates prosperity, partnership can increase wealth, and beauty/justice have economic value.',
    predictions: [
      'Major relationship transformation - marriage, divorce, or complete renegotiation of partnership terms',
      'Business partnership forms with innovative structure, equality, and unconventional agreements',
      'You become involved in social justice cause fighting for equality, fairness, or civil rights',
      'Relationship requires more equality, independence, or unconventional arrangement to survive/thrive',
      'Career shift toward partnership work, social justice, legal reform, design, or mediation',
      'You liberate yourself from codependency and learn to be both partnered and independent',
      'Aesthetic sense revolutionizes - your style, home design, or creative work becomes more innovative',
      'Legal matter or contract requires innovative solution or fighting for fairness',
      'You learn to balance partnership with independence, togetherness with freedom',
      'You master the art of revolutionary partnership, authentic fairness, and liberated relating'
    ]
  },

  'Uranus-Scorpio': {
    name: 'Uranus Ingress Scorpio',
    frequency: 'Approximately every 84 years',
    duration: '~7 years',
    planetEnergy: 'Uranus represents revolution, awakening, innovation, liberation, sudden change, and authentic individuality. It\'s where you break free, innovate, rebel, awaken, and express your unique genius.',
    signEnergy: 'Scorpio represents intensity, transformation, depth, power, intimacy, and regeneration. It\'s the energy of probing beneath surface, merging deeply, wielding power, and transforming through crisis.',
    eventMeaning: '🔮 REVOLUTIONARY 7-YEAR CYCLE: Uranus in Scorpio brings revolutionary transformation through crisis, sexuality liberation, and power shifts. This rare generational cycle revolutionizes sexuality, death/rebirth practices, and power structures. You must liberate your sexuality, transform through sudden crisis, and claim authentic power. This is about sexual awakening, power revolution, and creating radically new relationship to intimacy, transformation, and shared resources.',
    loveRelationships: 'Romance revolutionizes through sexual liberation, psychological breakthroughs, and power equality. Relationships require sexual authenticity, psychological honesty, and power sharing. You learn to love with both intensity and freedom, merge deeply yet maintain self. Sudden intense attractions or transformative breakups possible. Long-term partnerships transform through sexual exploration, psychological work together, or power rebalancing. Dating becomes more intense and psychologically honest. You attract deep, intense, transformative partners. Commitment requires sexual and psychological freedom.',
    familyHome: 'Family undergoes major transformation through crisis, inheritance, or power shifts. Home life needs psychological safety, privacy for intimacy, and space for transformation. You may deal with family death, receive inheritance, or experience family power dynamics shift. Family relationships transform through addressing secrets, power issues, or shared resources. You learn to handle family intensity with both depth and boundaries. Home becomes sanctuary for deep emotional work and transformation.',
    businessCareer: 'Revolutionary 7-year career transformation through financial innovation, psychology breakthrough, crisis management revolution, or power shifts. Professional success requires mastering new financial technologies, psychological depth, or transformative work. You may work in financial technology (cryptocurrency, fintech), psychology/therapy innovation, or crisis transformation. Authority comes through handling intensity and facilitating transformation. Career likely involves finance innovation, depth psychology, sexuality work, or crisis management. Professional reputation builds through transformative impact.',
    moneyFinances: 'Financial revolution through cryptocurrency, investment innovation, or shared resources transformation. Money requires understanding new financial technologies, strategic investing, and managing shared finances innovatively. You learn about cryptocurrency/blockchain, invest in transformative companies, and build wealth through strategic financial transformation. Debt elimination or inheritance possible. Unexpected financial transformation likely. Long-term wealth builds through financial innovation and strategic power moves. Financial lessons teach that financial power requires knowledge, transformation creates wealth, and shared resources need clear agreements.',
    predictions: [
      'Major sexual awakening or liberation transforms your intimate life and self-understanding',
      'Cryptocurrency, blockchain, or financial technology becomes important income or investment',
      'Psychological breakthrough through therapy, shadow work, or sudden crisis reveals deep truth',
      'Inheritance matter, debt elimination, or shared financial resources undergo major transformation',
      'Relationship deepens through sexual exploration, psychological honesty, or crisis weathered together',
      'Power dynamics in relationship, family, or career must shift toward equality and authenticity',
      'Career shift toward depth psychology, financial technology, sexuality work, or crisis transformation',
      'You face and transform fear, shame, or psychological pattern through sudden awakening',
      'Death or major loss triggers profound transformation and spiritual/psychological rebirth',
      'You master the art of sexual liberation, psychological depth, and authentic power'
    ]
  },

  'Uranus-Sagittarius': {
    name: 'Uranus Ingress Sagittarius',
    frequency: 'Approximately every 84 years',
    duration: '~7 years (Uranus is exalted in Sagittarius traditionally)',
    planetEnergy: 'Uranus represents revolution, awakening, innovation, liberation, sudden change, and authentic individuality. It\'s where you break free, innovate, rebel, awaken, and express your unique genius.',
    signEnergy: 'Sagittarius represents expansion, optimism, adventure, truth-seeking, freedom, and philosophical understanding. It\'s the energy of growth, exploration, teaching, and finding meaning through broadening horizons.',
    eventMeaning: '🔮 REVOLUTIONARY 7-YEAR CYCLE: Uranus in Sagittarius brings revolutionary transformation of beliefs, education, and freedom. This rare generational cycle revolutionizes religion, higher education, and global connection. You must liberate your beliefs, explore radically, and seek truth through breakthrough experiences. This is about philosophical awakening, educational revolution, and creating radically new approaches to meaning, truth, and expansion.',
    loveRelationships: 'Romance revolutionizes through cross-cultural connection, philosophical alignment, and adventure together. Relationships require shared vision for growth, intellectual freedom, and adventurous spirit. You learn to love with both passion and freedom, commitment to growth not just person. Sudden connections with people from different cultures/backgrounds possible. Long-term partnerships transform through travel together, shared educational pursuits, or philosophical breakthroughs. Dating involves people from diverse backgrounds. You attract adventurous, philosophically minded, freedom-loving partners. Commitment requires shared growth vision.',
    familyHome: 'Family expands through international connection, educational pursuits, or philosophical transformation. Home life needs space for learning, cultural diversity, and freedom to roam. You may have international family connections, support family member\'s education abroad, or integrate different cultures in family. Family relationships transform through accepting different beliefs and paths. You learn to honor family connection while respecting freedom to explore. Home becomes multicultural space and launch pad for adventures.',
    businessCareer: 'Revolutionary 7-year career transformation through educational innovation, international work, online teaching, or philosophical revolution. Professional success requires innovative teaching methods, cross-cultural expertise, or revolutionary ideas. You may teach online, work internationally, publish breakthrough ideas, or revolutionize education. Authority comes through demonstrated visionary thinking and teaching innovation. Career likely involves online education, international business, publishing innovation, or thought leadership. Professional reputation builds through revolutionary ideas.',
    moneyFinances: 'Financial revolution through international income, online education, or publishing innovation. Money requires earning internationally, teaching online, or monetizing revolutionary ideas. You learn to earn globally, build income through online courses or content, and create wealth through visionary ideas. International business or cryptocurrency likely. Location-independent income favored. Long-term wealth builds through intellectual property, online education, or global business. Financial lessons teach that ideas are valuable globally, online teaching creates freedom, and vision creates wealth.',
    predictions: [
      'Major international experience - extended travel, living abroad, or global business transforms worldview',
      'Philosophical or spiritual awakening completely revolutionizes your beliefs and life direction',
      'Online teaching, course creation, or content platform becomes significant income source',
      'Educational path revolutionizes - online learning, self-education, or completely new field of study',
      'Relationship with person from different culture/country expands your perspective dramatically',
      'Career becomes location-independent through online work or international opportunities',
      'You publish book, blog, or course sharing revolutionary ideas or experiences',
      'Religious or philosophical beliefs transform through direct experience challenging old certainties',
      'Legal matter or higher education opportunity creates breakthrough and expansion',
      'You master the art of philosophical freedom, global connection, and revolutionary vision'
    ]
  },

  'Uranus-Capricorn': {
    name: 'Uranus Ingress Capricorn',
    frequency: 'Approximately every 84 years',
    duration: '~7 years',
    planetEnergy: 'Uranus represents revolution, awakening, innovation, liberation, sudden change, and authentic individuality. It\'s where you break free, innovate, rebel, awaken, and express your unique genius.',
    signEnergy: 'Capricorn represents ambition, achievement, structure, mastery, responsibility, and authority. It\'s the energy of building, achieving, leading with integrity, and reaching the mountain top through persistent effort.',
    eventMeaning: '🔮 REVOLUTIONARY 7-YEAR CYCLE: Uranus in Capricorn brings revolutionary transformation of structures, career, and authority. This rare generational cycle revolutionizes government, corporations, and traditional power structures. You must liberate your career, revolutionize your approach to achievement, and claim authentic authority. This is about career awakening, structural revolution, and creating radically new approaches to success, leadership, and building lasting achievements.',
    loveRelationships: 'Romance revolutionizes through unconventional commitment structures, career-partnership balance, and redefining success together. Relationships require respecting career ambitions, innovative approach to commitment, and building together differently. You learn to love with both ambition and partnership, success and relationship. Long-term partnerships transform through new approaches to career balance, unconventional commitments, or building business together. Dating involves ambitious or unconventional professionals. You attract partners redefining success. Commitment requires supporting each other\'s authentic ambitions.',
    familyHome: 'Family structures revolutionize through unconventional authority, career changes affecting family, or breaking from family tradition. Home life needs balance between career and family, structured freedom, and respect for individual ambitions. You may become unconventional authority in family, experience family career shake-ups, or break from family business/expectations. Family relationships transform through honoring different definitions of success. You learn to balance family responsibility with authentic career path. Home becomes both foundation and launch pad for achievement.',
    businessCareer: 'Revolutionary 7-year career transformation through entrepreneurship, industry disruption, or complete career reinvention. Professional success requires innovative leadership, disrupting traditional structures, or building something revolutionary. You may start disruptive business, leave corporate for entrepreneurship, or revolutionize your industry. Authority comes through demonstrated innovation and authentic leadership. Career path likely completely transforms. Professional reputation builds through revolutionary achievements and structural innovation. Technology disrupting traditional industries favored.',
    moneyFinances: 'Financial revolution through entrepreneurship, cryptocurrency, or completely new income structures. Money requires building innovative income, investing in disruptive companies/technologies, and creating wealth through revolutionary achievement. You learn to build sustainable wealth innovatively, invest in future industries, and create financial freedom through authentic achievement. Traditional career paths feel limiting. Long-term wealth builds through entrepreneurial success and disruptive innovation. Financial lessons teach that old structures are crumbling, innovation disrupts industries, and authentic achievement creates sustainable wealth.',
    predictions: [
      'Major career revolution - you leave traditional path for entrepreneurship or completely reinvent profession',
      'You disrupt your industry or build innovative business that challenges traditional structures',
      'Relationship with authority figures (boss, father, mentor) transforms or breaks completely',
      'Corporate structure collapses or transforms, forcing you to rebuild career on authentic foundation',
      'You claim authentic authority and lead through innovation rather than tradition',
      'Financial independence achieved through entrepreneurship, cryptocurrency, or disruptive innovation',
      'Career-relationship balance revolutionizes through remote work, entrepreneurship, or new agreements',
      'You break from family expectations about career/success and build achievement your own way',
      'Professional reputation transforms from traditional success to innovative leadership',
      'You master the art of revolutionary leadership, authentic authority, and structural innovation'
    ]
  },

  'Uranus-Aquarius': {
    name: 'Uranus Ingress Aquarius',
    frequency: 'Approximately every 84 years',
    duration: '~7 years (Uranus rules Aquarius)',
    planetEnergy: 'Uranus represents revolution, awakening, innovation, liberation, sudden change, and authentic individuality. It\'s where you break free, innovate, rebel, awaken, and express your unique genius.',
    signEnergy: 'Aquarius represents innovation, community, individuality, progress, friendship, and humanitarian vision. It\'s the energy of awakening, connecting, revolutionizing, and serving collective evolution.',
    eventMeaning: '🔮 REVOLUTIONARY 7-YEAR CYCLE (Uranus at Home): Uranus in Aquarius brings maximum revolutionary transformation of society, technology, and consciousness. This is Uranus at its most revolutionary and transformative. This rare generational cycle creates quantum leaps in technology, social revolution, and collective awakening. You must awaken fully, contribute to collective evolution, and become vehicle for progressive change. This is about total awakening, joining revolutionary community, and serving the future through radical innovation and authentic uniqueness.',
    loveRelationships: 'Romance revolutionizes through friendship-based love, poly/open relating options, and complete freedom within commitment. Relationships require absolute authenticity, mental connection, and progressive values. You learn to love as best friend, honor total freedom, and create relationship structure that has never existed before. Sudden electric attractions or sudden freedom-seeking separations possible. Long-term partnerships transform into friendship-partnerships with radical freedom and authenticity. Dating happens through communities or online. You attract revolutionary, brilliant, socially conscious partners. Commitment requires total authenticity and progressive structure.',
    familyHome: 'Family structure completely revolutionizes - chosen family, community living, or radically progressive arrangements. Home life needs technology, community space, and total freedom for authentic expression. You may create intentional community, adopt futuristic home technology, or build chosen family that replaces traditional family. Family relationships transform through accepting everyone\'s uniqueness and progressive values. You learn that family is who you choose and love is freedom. Home becomes community hub, technology showcase, or revolutionary living experiment.',
    businessCareer: 'Revolutionary 7-year career transformation through breakthrough technology, social revolution, or community building. Professional success requires mastering emerging technology, building community platforms, or leading social change. You may work in AI, blockchain, social movements, community organizing, or revolutionary technology. Authority comes through demonstrated innovation and community contribution. Career likely involves technology revolution or social change. Professional reputation builds through revolutionary contribution to collective evolution. Technology, social change, community building, or humanitarian work essential.',
    moneyFinances: 'Financial revolution through cryptocurrency, technology income, or community economics. Money requires understanding cryptocurrency/blockchain deeply, earning through technology or community platforms, and building wealth through revolutionary participation. You learn to leverage technology for income, participate in decentralized finance, and build wealth through community and innovation. Traditional finance feels obsolete. Cryptocurrency and technology investments essential. Long-term wealth builds through technological expertise and community platforms. Financial lessons teach that future of money is here, technology enables financial freedom, and community creates collective wealth.',
    predictions: [
      'Total life awakening - you become unrecognizable from who you were, fully authentic and free',
      'You master breakthrough technology (AI, blockchain, etc.) that defines the future',
      'Community or network becomes your true family - chosen family replaces or supplements biological',
      'Career becomes vehicle for social change, technological revolution, or community building',
      'Cryptocurrency and blockchain become important income source and investment focus',
      'Friendship transforms into romantic partnership or partnership evolves into authentic friendship',
      'You become leader in social movement, technology revolution, or community transformation',
      'Home becomes futuristic, technologically advanced, or community living space',
      'You contribute to collective evolution through innovation, teaching, or community building',
      'You master the art of total authenticity, revolutionary innovation, and collective service'
    ]
  },

  'Uranus-Pisces': {
    name: 'Uranus Ingress Pisces',
    frequency: 'Approximately every 84 years',
    duration: '~7 years',
    planetEnergy: 'Uranus represents revolution, awakening, innovation, liberation, sudden change, and authentic individuality. It\'s where you break free, innovate, rebel, awaken, and express your unique genius.',
    signEnergy: 'Pisces represents spirituality, compassion, imagination, transcendence, unity, and dissolution. It\'s the energy of connecting to divine, serving selflessly, creating artistically, and transcending ego boundaries.',
    eventMeaning: '🔮 REVOLUTIONARY 7-YEAR CYCLE: Uranus in Pisces brings revolutionary transformation of spirituality, creativity, and consciousness. This rare generational cycle revolutionizes religion, mysticism, and collective compassion. You must awaken spiritually, liberate your creativity, and serve the collective through transcendent vision. This is about spiritual awakening, creative revolution, and creating radically new approaches to divinity, imagination, and unity consciousness.',
    loveRelationships: 'Romance revolutionizes through spiritual connection, unconditional love awakening, and transcendent partnership. Relationships require spiritual alignment, compassionate acceptance, and freedom to merge spiritually. You learn to love unconditionally yet wisely, merge souls yet maintain boundaries. Twin flame or soulmate connections possible through sudden spiritual awakening. Long-term partnerships transform through spiritual practice together, compassionate service as couple, or artistic collaboration. Dating becomes spiritually focused. You attract spiritually awakened, compassionate, artistic partners. Commitment requires spiritual resonance and transcendent vision.',
    familyHome: 'Family spirituality revolutionizes through awakening, healing ancestral wounds, or creating spiritual family culture. Home life needs space for spirituality, creativity, meditation, and retreat. You may guide family\'s spiritual awakening, heal family through forgiveness/compassion, or create home as sanctuary and spiritual center. Family relationships transform through unconditional love and spiritual acceptance. You learn to serve family spiritually while maintaining energetic boundaries. Home becomes temple, art studio, or healing sanctuary.',
    businessCareer: 'Revolutionary 7-year career transformation through spiritual innovation, healing arts revolution, or creative breakthrough. Professional success requires innovative spiritual teaching, revolutionary healing methods, or breakthrough artistic vision. You may work in spiritual technology, innovative healing, revolutionary art/music/film, or consciousness work. Authority comes through demonstrated spiritual wisdom and creative genius. Career likely involves spirituality, healing arts, creative innovation, or consciousness evolution. Professional reputation builds through transcendent impact and artistic beauty.',
    moneyFinances: 'Financial revolution through spiritual/creative work, healing services innovation, or transcendent art. Money requires monetizing spiritual gifts innovatively, creating revolutionary healing services, or building income through transcendent creativity. You learn to receive abundantly for spiritual work, charge appropriately for healing, and build wealth through gifts that feel divinely given. Financial boundaries essential - you cannot serve from empty cup. Long-term wealth builds through spiritual mastery, healing expertise, or artistic genius. Financial lessons teach that spiritual gifts have material value, healing creates abundance, and divine service deserves compensation.',
    predictions: [
      'Spiritual awakening completely transforms your consciousness and life direction',
      'Artistic or creative breakthrough - music, film, art, or writing emerges from divine inspiration',
      'Healing gifts or psychic abilities suddenly awaken and may become professional work',
      'You heal addiction, victimhood, or escapism through sudden spiritual awakening or crisis',
      'Career shifts toward spiritual teaching, healing arts, creative work, or consciousness evolution',
      'Relationship becomes spiritually focused - meditation together, healing work, or soul connection',
      'You develop innovative spiritual practice or healing method that helps many others',
      'Compassion awakens and you begin serving marginalized, suffering, or forgotten populations',
      'Dreams, visions, or psychic experiences guide you toward your authentic spiritual path',
      'You master the art of spiritual innovation, healing creativity, and transcendent service'
    ]
  },

  // ============================================================================
  // NEPTUNE INGRESSES - Spirituality, transcendence, dissolution (~14 years per sign)
  // ============================================================================

  'Neptune-Aries': {
    name: 'Neptune Ingress Aries',
    frequency: 'Approximately every 165 years',
    duration: '~14 years',
    planetEnergy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, and divine connection. It\'s where boundaries dissolve, you connect to the mystical, sacrifice for higher purpose, and experience unity consciousness.',
    signEnergy: 'Aries represents boldness, initiative, independence, courage, action, and pioneering spirit. It\'s the energy of self-assertion, leadership, new beginnings, and direct action.',
    eventMeaning: '🌊 MYSTICAL 14-YEAR JOURNEY: Neptune in Aries brings spiritual awakening through action, mystical pioneering, and dissolving the ego of self. This extremely rare generational cycle (happens once in 165 years) creates spiritual warriors, compassionate leaders, and visionary action-takers. You must merge spiritual vision with bold action, lead with compassion, and pioneer with divine guidance. This is about spiritual leadership, compassionate action, and dissolving separation between self and divine will.',
    loveRelationships: 'Romance becomes spiritually charged through passionate devotion, soulmate seeking, and divine partnership. Relationships require spiritual alignment with action, compassionate leadership together, and merging spiritual vision. You learn to love with both passion and divine surrender, take action guided by love. Idealization of bold, independent partners possible - discernment needed. Long-term partnerships deepen through spiritual practice together, compassionate action as couple, and dissolving ego in service of love. Dating involves spiritual seekers or compassionate activists. You attract divinely guided, passionate partners.',
    familyHome: 'Family spirituality centers on action, leadership with compassion, and spiritual pioneering. Home life needs space for spiritual practice, meditation, and peaceful retreat from action. You may lead family\'s spiritual awakening, act as spiritual warrior for family, or create home as spiritual training ground. Family relationships transform through compassionate leadership and spiritual action. You learn to balance spiritual service with family action. Home becomes both sanctuary and launch pad for spiritual missions.',
    businessCareer: 'Mystical 14-year career evolution through spiritual leadership, compassionate action, or visionary pioneering. Professional success requires combining spiritual vision with bold action, leading with compassion, or pioneering spiritual movements. You may become spiritual teacher who acts boldly, activist guided by divine vision, or entrepreneur serving spiritual mission. Authority comes through demonstrated spiritual courage. Career involves spiritual activism, compassionate leadership, or visionary action. Professional reputation builds through spiritually guided courage.',
    moneyFinances: 'Financial life becomes spiritually guided - earning through spiritual action, divine timing, and compassionate service. Money requires trusting divine guidance while taking action, serving spiritual mission, and releasing attachment to outcomes. You learn that spiritual action attracts divine support, compassion creates abundance, and bold faith manifests resources. Financial boundaries can dissolve - discernment essential. Long-term wealth builds through faith-guided action and spiritual service. Financial lessons teach that divine will guides prosperity, spiritual courage attracts support, and compassionate action creates abundance.',
    predictions: [
      'Spiritual awakening calls you to bold action - you become spiritual warrior or compassionate activist',
      'Vision or dream guides you to pioneer spiritual movement, healing modality, or consciousness work',
      'You learn to merge spiritual surrender with courageous action - acting as instrument of divine will',
      'Relationship becomes spiritual partnership focused on compassionate action and shared mission',
      'Career transforms into spiritual work requiring both vision and courage to manifest',
      'You develop ability to act from spiritual guidance rather than ego desire',
      'Identity dissolves and rebuilds around spiritual purpose rather than personal ambition',
      'Compassionate leadership emerges - you lead others through example of faith-guided action',
      'Artistic or creative work channels spiritual energy into bold, passionate expression',
      'You master the art of spiritual courage, compassionate action, and visionary leadership'
    ]
  },

  'Neptune-Taurus': {
    name: 'Neptune Ingress Taurus',
    frequency: 'Approximately every 165 years',
    duration: '~14 years',
    planetEnergy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, and divine connection. It\'s where boundaries dissolve, you connect to the mystical, sacrifice for higher purpose, and experience unity consciousness.',
    signEnergy: 'Taurus represents stability, security, material comfort, sensory pleasure, values, and persistence. It\'s the energy of building, maintaining, enjoying physical reality, and valuing quality over quantity.',
    eventMeaning: '🌊 MYSTICAL 14-YEAR JOURNEY: Neptune in Taurus brings spiritual awakening through nature, sacred sensuality, and dissolving materialism. This extremely rare generational cycle spiritualizes values, creates sacred relationship with earth, and transforms what we consider valuable. You must connect to earth spirituality, find divine in physical world, and release attachment to material security. This is about earth mysticism, sacred simplicity, and discovering that true security comes from spiritual connection not material accumulation.',
    loveRelationships: 'Romance becomes sacred sensuality, spiritual values alignment, and divine connection through physical intimacy. Relationships require shared spiritual values, sacred approach to sensuality, and building security through faith. You learn to love through sacred touch, worship through senses, and find divine in physical connection. Idealization of stable, sensual partners possible - discernment needed. Long-term partnerships deepen through spiritual values, sacred sexuality, and building together on spiritual foundation. Dating involves spiritually grounded people. You attract partners seeking divine through earthly experience.',
    familyHome: 'Family values transform spiritually - releasing materialism, embracing sacred simplicity, and finding security in faith. Home life needs natural beauty, sacred spaces, and connection to earth. You may create sanctuary home, practice earth-based spirituality, or release family attachment to material wealth. Family relationships transform through shared spiritual values and sacred appreciation of nature. You learn to provide through spiritual means and trust divine abundance. Home becomes sacred nature sanctuary.',
    businessCareer: 'Mystical 14-year career evolution through earth-based spirituality, sacred arts, or values-driven service. Professional success requires aligning work with spiritual values, creating beauty as spiritual practice, or serving earth/nature. You may work in environmental spirituality, sacred arts, healing through nature, or sustainable/spiritual business. Authority comes through demonstrated spiritual values. Career involves nature work, sacred arts, or earth-based healing. Professional reputation builds through spiritual integrity and sacred beauty.',
    moneyFinances: 'Financial life becomes spiritual practice - releasing attachment to money, trusting divine abundance, and finding security in faith. Money requires spiritual values alignment, sustainable/ethical earning, and generous giving. You learn that true wealth is spiritual, material security is illusion, and divine provides what you need. Financial boundaries dissolve - can lead to confusion or transcendent trust. Long-term wealth builds through spiritual values and trusting abundance. Financial lessons teach that attachment creates suffering, divine abundance is real, and true security comes from faith not money.',
    predictions: [
      'Values completely transform from material to spiritual - you release attachment to possessions and status',
      'Nature becomes your church - earth-based spirituality or environmental consciousness awakens deeply',
      'Financial life requires more faith - you learn to trust divine provision over material security',
      'Sacred sensuality awakens - physical intimacy becomes spiritual practice and worship',
      'Career shifts toward work honoring earth, creating beauty, or serving sustainable values',
      'You develop spiritual relationship with body, food, nature, and physical world',
      'Artistic work channels divine beauty through physical form - music, sculpture, gardening',
      'Material loss or release teaches that true security comes from spiritual connection',
      'You learn to enjoy physical world sacredly without attaching to or hoarding it',
      'You master the art of sacred simplicity, earth spirituality, and divine abundance trust'
    ]
  },

  'Neptune-Gemini': {
    name: 'Neptune Ingress Gemini',
    frequency: 'Approximately every 165 years',
    duration: '~14 years',
    planetEnergy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, and divine connection. It\'s where boundaries dissolve, you connect to the mystical, sacrifice for higher purpose, and experience unity consciousness.',
    signEnergy: 'Gemini represents communication, learning, curiosity, versatility, connection, and information exchange. It\'s the energy of thinking, speaking, writing, learning, networking, and intellectual exploration.',
    eventMeaning: '🌊 MYSTICAL 14-YEAR JOURNEY: Neptune in Gemini brings spiritual awakening through communication, divine channeling, and dissolving the rational mind. This extremely rare generational cycle spiritualizes communication, creates poetry and divine language, and transforms how we think and connect. You must channel divine messages, speak spiritual truth, and transcend rational thinking to access mystical knowing. This is about channeling, sacred communication, and discovering that words can carry divine energy.',
    loveRelationships: 'Romance becomes spiritual communication, soul connection through words, and telepathic intimacy. Relationships require spiritual dialogue, sharing mystical experiences, and mental/spiritual connection. You learn to love through divine words, connect telepathically, and share spiritual truths. Idealization of intellectual partners possible - discernment needed about deception. Long-term partnerships deepen through spiritual conversations, writing together, and telepathic connection. Dating involves spiritual seekers or poets. You attract partners who communicate divinely.',
    familyHome: 'Family communication becomes more spiritual, compassionate, and mystical. Home life needs space for sacred writing, spiritual learning, and quiet contemplation. You may channel messages for family, communicate spiritual truths, or create home library of spiritual wisdom. Relationship with siblings may become more spiritual or requires compassionate communication. Family relationships transform through honest spiritual dialogue and compassionate listening. Home becomes library and communication center for spiritual truth.',
    businessCareer: 'Mystical 14-year career evolution through spiritual communication, channeling, writing, or teaching mystical truths. Professional success requires channeling divine messages, communicating spiritual wisdom, or creating inspired content. You may become spiritual writer, channel, poet, or teacher of mystical communication. Authority comes through demonstrated spiritual truth in words. Career involves spiritual writing, channeling, teaching, or inspired communication. Professional reputation builds through divinely inspired words.',
    moneyFinances: 'Financial life becomes about communicating spiritual value, monetizing divine messages, or trusting intuitive financial guidance. Money requires sharing spiritual wisdom, writing inspired content, or teaching mystical truths. You learn to value spiritual communication, charge for channeled messages, and trust intuitive financial guidance. Financial confusion possible through unclear agreements - clarity essential. Long-term wealth builds through spiritual writing and divine communication. Financial lessons teach that spiritual words have value, divine messages deserve compensation, and intuitive guidance brings abundance.',
    predictions: [
      'Channeling or psychic communication abilities awaken - you receive and share divine messages',
      'Writing becomes spiritual practice - poetry, journaling, or books channel divine inspiration',
      'You learn to distinguish between divine guidance and mental confusion or deception',
      'Spiritual teaching or speaking becomes important - you communicate mystical truths to others',
      'Relationship deepens through spiritual dialogue and possibly telepathic or intuitive connection',
      'Mental boundaries dissolve - meditation and spiritual practice help manage overwhelm',
      'You develop compassionate communication - speaking truth with love and listening deeply',
      'Information overload or confusion requires you to find truth through spiritual discernment',
      'Sibling or communication relationship becomes more spiritual or teaches important lessons',
      'You master the art of divine communication, channeling truth, and speaking with spiritual clarity'
    ]
  },

  'Neptune-Cancer': {
    name: 'Neptune Ingress Cancer',
    frequency: 'Approximately every 165 years',
    duration: '~14 years',
    planetEnergy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, and divine connection. It\'s where boundaries dissolve, you connect to the mystical, sacrifice for higher purpose, and experience unity consciousness.',
    signEnergy: 'Cancer represents nurturing, emotions, family, home, roots, security, and protection. It\'s the energy of caring, belonging, emotional safety, and creating sanctuary.',
    eventMeaning: '🌊 MYSTICAL 14-YEAR JOURNEY: Neptune in Cancer brings spiritual awakening through family, divine nurturing, and dissolving emotional boundaries. This extremely rare generational cycle spiritualizes family and home, creates universal compassion, and transforms emotional life into mystical experience. You must learn unconditional love, embrace all humanity as family, and find divine mother/home within. This is about universal compassion, spiritual family, and discovering that true home is spiritual connection to all beings.',
    loveRelationships: 'Romance becomes unconditional love, soul family connection, and divine nurturing. Relationships require emotional/spiritual fusion, compassionate acceptance, and creating sacred home together. You learn to love unconditionally, nurture spiritually, and merge emotionally with divine beloved. Idealization of nurturing partners possible - boundary dissolution can cause codependency. Long-term partnerships deepen through unconditional love, spiritual family creation, and emotional healing together. Dating involves emotionally sensitive spiritual seekers. You attract partners seeking divine love and sacred home.',
    familyHome: 'Family becomes spiritual practice, home becomes sacred sanctuary, and family boundaries dissolve into universal love. Home life needs spiritual spaces, healing environments, and connection to water/ocean. You may create ashram-like home, care for many as extended family, or heal ancestral wounds spiritually. Family relationships transform through forgiveness, unconditional love, and spiritual acceptance. You learn to love family spiritually while maintaining energetic boundaries. Home becomes healing sanctuary and spiritual womb.',
    businessCareer: 'Mystical 14-year career evolution through healing, caregiving, spiritual family creation, or work with home/ocean/emotions. Professional success requires offering unconditional compassion, creating healing environments, or working with emotional/spiritual healing. You may become healer, work with families or children spiritually, create sanctuary spaces, or work near water. Authority comes through demonstrated compassion. Career involves healing, caregiving, family work, or creating sacred spaces. Professional reputation builds through unconditional love.',
    moneyFinances: 'Financial life becomes about trusting divine provision, earning through caregiving, or releasing attachment to security. Money requires faith over planning, earning through compassion, and generous giving to those in need. You learn that divine mother provides, emotional security beats financial security, and compassionate service attracts abundance. Financial boundaries dissolve - vulnerability to being taken advantage of without discernment. Long-term wealth builds through healing work and trusting divine nurturing. Financial lessons teach that divine provides what you need, security is spiritual, and compassionate giving creates receiving.',
    predictions: [
      'Unconditional love awakens - you experience divine love and learn to love all beings as family',
      'Home becomes sacred sanctuary - you create healing space for yourself and possibly others',
      'Healing work or caregiving becomes central - you nurture others with spiritual compassion',
      'Family wounds heal through forgiveness, compassion, and spiritual understanding of ancestry',
      'Emotional boundaries dissolve - you must learn energetic protection while staying compassionate',
      'Relationship with mother heals or reaches spiritual understanding and forgiveness',
      'You develop psychic empathy - feeling others\' emotions requires spiritual boundaries',
      'Ocean, water, or moon connection deepens - water becomes spiritual element for you',
      'You learn to differentiate between compassion and codependency, love and enmeshment',
      'You master the art of unconditional love, divine nurturing, and spiritual sanctuary creation'
    ]
  },

  'Neptune-Leo': {
    name: 'Neptune Ingress Leo',
    frequency: 'Approximately every 165 years',
    duration: '~14 years',
    planetEnergy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, and divine connection. It\'s where boundaries dissolve, you connect to the mystical, sacrifice for higher purpose, and experience unity consciousness.',
    signEnergy: 'Leo represents creativity, self-expression, confidence, joy, leadership, and recognition. It\'s the energy of shining, creating, celebrating, leading, and expressing authentic self.',
    eventMeaning: '🌊 MYSTICAL 14-YEAR JOURNEY: Neptune in Leo brings spiritual awakening through creativity, divine self-expression, and dissolving ego while shining. This extremely rare generational cycle spiritualizes art/entertainment, creates divine creativity, and transforms leadership into service. You must channel divine through creative expression, lead with humility, and shine for spiritual purpose not ego. This is about sacred artistry, humble leadership, and discovering that true creativity flows from divine source.',
    loveRelationships: 'Romance becomes divine romance, creative soul partnership, and spiritual celebration of love. Relationships require creative/spiritual fusion, celebrating divine in each other, and loving as spiritual practice. You learn to love divinely, create together spiritually, and celebrate relationship sacredly. Idealization of creative/charismatic partners possible - ego dissolution needed. Long-term partnerships deepen through creative spiritual practice, celebrating divine love, and co-creating beauty. Dating involves creative spiritual seekers. You attract divinely creative, spiritually confident partners.',
    familyHome: 'Family creativity and joy become spiritual - celebrating life sacredly, encouraging divine gifts in children, and creating home as stage for divine play. Home life needs creative/spiritual spaces, beauty, and joyful celebration. You may create artistically beautiful home, support family members\' creative gifts spiritually, or celebrate family sacredly. Family relationships transform through celebrating each person\'s divine light. You learn to lead family with humble spiritual confidence. Home becomes creative sanctuary and celebration space.',
    businessCareer: 'Mystical 14-year career evolution through sacred arts, spiritual entertainment, or humble creative leadership. Professional success requires channeling divine through creativity, entertaining/inspiring for spiritual uplift, or leading humbly. You may become spiritual artist, sacred performer, or leader serving divine creative expression. Authority comes through demonstrated spiritual creativity and humble radiance. Career involves sacred arts, spiritual entertainment, or humble leadership. Professional reputation builds through divinely inspired creativity.',
    moneyFinances: 'Financial life becomes about earning through spiritual creativity, monetizing divine expression, or generous giving from abundance. Money requires channeling divine through creative work, sharing creative gifts generously, and releasing attachment to recognition. You learn that divine creativity attracts abundance, spiritual art has value, and giving creates receiving. Financial ego can inflate or dissolve - humility essential. Long-term wealth builds through spiritual creative mastery. Financial lessons teach that divine source provides creative abundance, true wealth is spiritual joy, and sharing gifts creates flow.',
    predictions: [
      'Creative gifts awaken as divine channeling - art, music, performance becomes spiritual practice',
      'You learn to create from divine source rather than ego, channeling beauty and inspiration',
      'Leadership transforms from ego-driven to spiritually guided humble service',
      'Relationship becomes celebration of divine love through creativity, joy, and mutual adoration',
      'Career shifts toward sacred arts, spiritual entertainment, or humble inspiring leadership',
      'You develop ability to shine spiritually - radiating divine light without ego attachment',
      'Children or creative projects become spiritual teachers showing you divine play',
      'Ego dissolves in service of creative expression - you become vessel for divine beauty',
      'Joy and celebration become spiritual practices - finding divine in pleasure and playfulness',
      'You master the art of sacred creativity, humble radiance, and divine self-expression'
    ]
  },

  'Neptune-Virgo': {
    name: 'Neptune Ingress Virgo',
    frequency: 'Approximately every 165 years',
    duration: '~14 years',
    planetEnergy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, and divine connection. It\'s where boundaries dissolve, you connect to the mystical, sacrifice for higher purpose, and experience unity consciousness.',
    signEnergy: 'Virgo represents analysis, refinement, service, health, organization, and practical skill. It\'s the energy of improvement, discernment, efficiency, helping, and mastering craft.',
    eventMeaning: '🌊 MYSTICAL 14-YEAR JOURNEY: Neptune in Virgo brings spiritual awakening through service, sacred healing, and dissolving perfectionism. This extremely rare generational cycle spiritualizes healing/service, creates compassionate medicine, and transforms work into devotion. You must serve selflessly, heal with divine compassion, and release perfectionism for acceptance. This is about sacred service, divine healing, and discovering that true health is spiritual wholeness.',
    loveRelationships: 'Romance becomes sacred service partnership, healing each other divinely, and devotional love. Relationships require serving each other spiritually, healing together, and practical spiritual life. You learn to love through service, heal through compassion, and accept imperfection. Idealization then disillusionment possible - acceptance of human imperfection essential. Long-term partnerships deepen through serving together, healing practices, and devotional daily life. Dating involves healers or spiritual servers. You attract partners devoted to service and healing.',
    familyHome: 'Family service becomes spiritual - caring for family with divine compassion, creating healthy home sacredly, and serving daily with devotion. Home life needs healing space, cleanliness as spiritual practice, and healthy routines. You may create healing home environment, care for ill family spiritually, or maintain home as devotional practice. Family relationships transform through compassionate service and releasing judgment. You learn to serve family selflessly yet maintain boundaries. Home becomes healing sanctuary and service center.',
    businessCareer: 'Mystical 14-year career evolution through healing arts, spiritual service, or sacred health work. Professional success requires offering compassionate healing, serving selflessly, or creating spiritual health practices. You may become spiritual healer, holistic health practitioner, or worker serving marginalized with devotion. Authority comes through demonstrated compassion and healing skill. Career involves healing arts, spiritual service, or sacred health work. Professional reputation builds through selfless service and healing compassion.',
    moneyFinances: 'Financial life becomes about earning through healing service, trusting divine provision for servants, and releasing attachment to wealth. Money requires serving compassionately, charging fairly for healing, and trusting that divine supports those who serve. You learn that service creates abundance, healers deserve compensation, and attachment to perfection blocks flow. Financial confusion possible - clear boundaries essential. Long-term wealth builds through healing mastery and devoted service. Financial lessons teach that divine provides for servers, healing work has value, and perfectionism blocks abundance.',
    predictions: [
      'Healing gifts awaken - you become channel for divine healing energy and compassionate service',
      'Service transforms into spiritual devotion - daily work becomes sacred practice',
      'Health consciousness spiritualizes - you develop holistic understanding of body-mind-spirit',
      'Perfectionism dissolves through spiritual acceptance - you embrace imperfection with compassion',
      'Career shifts toward healing arts, holistic health, spiritual service, or compassionate care',
      'You develop spiritual discernment - distinguishing between divine guidance and mental noise',
      'Daily routines become spiritual practices - cleaning, organizing, working with devotion',
      'You learn to serve selflessly without martyrdom, help without enabling, heal with boundaries',
      'Addiction to work or perfectionism releases through spiritual surrender and trust',
      'You master the art of sacred service, divine healing, and compassionate devotion'
    ]
  },

  'Neptune-Libra': {
    name: 'Neptune Ingress Libra',
    frequency: 'Approximately every 165 years',
    duration: '~14 years',
    planetEnergy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, and divine connection. It\'s where boundaries dissolve, you connect to the mystical, sacrifice for higher purpose, and experience unity consciousness.',
    signEnergy: 'Libra represents balance, partnership, harmony, aesthetics, diplomacy, and fairness. It\'s the energy of relating, cooperating, creating beauty, and seeking equilibrium.',
    eventMeaning: '🌊 MYSTICAL 14-YEAR JOURNEY: Neptune in Libra brings spiritual awakening through partnership, divine beauty, and dissolving separation between self and other. This extremely rare generational cycle spiritualizes relationships, creates transcendent art, and transforms justice into compassion. You must find divine in relationships, create sacred beauty, and dissolve ego boundaries in love. This is about spiritual partnership, divine aesthetics, and discovering that separation is illusion.',
    loveRelationships: 'Romance becomes spiritual union, soulmate merging, and divine partnership. Relationships require spiritual fusion, creating beauty together, and dissolving boundaries in love. You learn to love as spiritual merging, create with beloved, and find divine through partnership. Idealization and disillusionment in love likely - discernment about projection essential. Long-term partnerships deepen through spiritual practice together, creating art/beauty, and experiencing unity. Dating involves spiritual seekers of beauty. You attract divinely beautiful, spiritually oriented partners seeking fusion.',
    familyHome: 'Family relationships spiritualize through forgiveness, seeking harmony, and creating beautiful peaceful home. Home life needs aesthetic beauty, peaceful energy, and space for art/music. You may create artistically beautiful home, mediate family conflicts with compassion, or bring divine beauty into family life. Family relationships transform through seeking harmony over rightness. You learn to balance family relationships with spiritual boundaries. Home becomes beautiful sanctuary of peace and art.',
    businessCareer: 'Mystical 14-year career evolution through creating beauty, spiritual partnerships, or work promoting peace/justice compassionately. Professional success requires creating transcendent art, forming spiritual partnerships, or serving justice with compassion. You may become artist channeling divine beauty, work in spiritual partnerships, or serve peace/justice work. Authority comes through demonstrated beauty and relational wisdom. Career involves arts, partnerships, mediation, or peace work. Professional reputation builds through divine beauty creation.',
    moneyFinances: 'Financial life becomes about partnership finances spiritually, earning through beauty creation, and balancing giving/receiving. Money requires fair partnerships, earning through art/beauty, and trusting divine partnership abundance. You learn that partnerships can confuse finances without clarity, beauty has spiritual value, and fair exchange creates flow. Financial boundaries in relationships dissolve - clarity and honesty essential. Long-term wealth builds through artistic mastery and spiritual partnerships. Financial lessons teach that partnership requires financial clarity, divine beauty deserves compensation, and fair exchange honors both.',
    predictions: [
      'Soulmate or twin flame connection appears - relationship becomes spiritual practice of union',
      'Artistic gifts awaken as divine channeling - you create transcendent beauty in art, music, or design',
      'You learn to balance spiritual merging with healthy boundaries in relationships',
      'Business or creative partnership forms based on spiritual values and shared vision',
      'Career shifts toward arts, beauty work, partnership counseling, or peace/justice work',
      'You develop ability to see divine in others, creating harmony through spiritual vision',
      'Codependency or idealization patterns require spiritual work on boundaries and projection',
      'Justice and fairness expand to compassionate understanding beyond right/wrong',
      'You learn that true partnership honors both union and individual sovereignty',
      'You master the art of spiritual partnership, divine beauty creation, and compassionate relating'
    ]
  },

  'Neptune-Scorpio': {
    name: 'Neptune Ingress Scorpio',
    frequency: 'Approximately every 165 years',
    duration: '~14 years',
    planetEnergy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, and divine connection. It\'s where boundaries dissolve, you connect to the mystical, sacrifice for higher purpose, and experience unity consciousness.',
    signEnergy: 'Scorpio represents intensity, transformation, depth, power, intimacy, and regeneration. It\'s the energy of probing beneath surface, merging deeply, wielding power, and transforming through crisis.',
    eventMeaning: '🌊 MYSTICAL 14-YEAR JOURNEY: Neptune in Scorpio brings spiritual awakening through crisis, mystical sexuality, and dissolving death/rebirth boundaries. This extremely rare generational cycle spiritualizes sexuality/death, creates mystical transformation, and dissolves fear through spiritual truth. You must face shadows compassionately, experience sacred sexuality, and find divine in darkness/transformation. This is about mystical death/rebirth, sacred sexuality, and discovering that the divine is found in depth and darkness.',
    loveRelationships: 'Romance becomes sacred sexuality, soul merging, and transformative spiritual union. Relationships require deep spiritual intimacy, sacred sexual connection, and transforming together through crisis. You learn to love through total merging, experience sex as worship, and transform through union. Obsession, possession, or addiction in love possible - spiritual boundaries essential. Long-term partnerships deepen through tantric practice, transforming shadows together, and death/rebirth cycles. Dating involves deeply spiritual, intense seekers. You attract transformative, mystically sexual, spiritually intense partners.',
    familyHome: 'Family transformation spiritualizes through healing wounds, facing shadows compassionately, and dealing with death/inheritance spiritually. Home life needs privacy for depth work, space for shadow healing, and connection to mystery. You may deal with family death spiritually, heal ancestral trauma, or transform family through spiritual crisis work. Family relationships transform through shadow work, forgiveness, and spiritual depth. You learn to hold space for family darkness with compassion. Home becomes sanctuary for deep healing and transformation.',
    businessCareer: 'Mystical 14-year career evolution through healing trauma, spiritual psychology, death work, or transformative service. Professional success requires offering deep healing, facilitating transformation, or working with death/sexuality spiritually. You may become depth psychologist, death doula, tantric teacher, or transformational healer. Authority comes through demonstrated ability to hold space for darkness. Career involves depth healing, death work, or sacred sexuality. Professional reputation builds through transformative healing power.',
    moneyFinances: 'Financial life becomes about earning through transformation work, managing shared resources spiritually, or releasing attachment through loss. Money requires trust through financial crisis, earning through depth healing, and managing shared resources with integrity. You learn that financial death leads to rebirth, healing work deserves compensation, and attachment to money creates suffering. Financial boundaries dissolve in partnerships - absolute honesty essential. Long-term wealth builds through healing mastery. Financial lessons teach that transformation creates abundance, death births new life, and spiritual power attracts resources.',
    predictions: [
      'Mystical sexual awakening - sexuality becomes spiritual practice and path to divine union',
      'Shadow work or depth psychology becomes central - you heal through facing darkness compassionately',
      'Death experience (literal or metaphorical) becomes spiritual initiation into deeper truth',
      'Psychic or mediumship abilities awaken - you sense beyond the veil',
      'Career shifts toward depth healing, death work, tantric teaching, or transformational therapy',
      'You develop ability to hold space for others\' darkness, pain, and transformation',
      'Addiction, obsession, or power struggles teach lessons about surrender and spiritual boundaries',
      'Financial crisis or loss teaches detachment and trust in spiritual provision',
      'You learn that divine is found in darkness, death births rebirth, power is spiritual',
      'You master the art of sacred sexuality, mystical transformation, and spiritual depth work'
    ]
  },

  'Neptune-Sagittarius': {
    name: 'Neptune Ingress Sagittarius',
    frequency: 'Approximately every 165 years',
    duration: '~14 years',
    planetEnergy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, and divine connection. It\'s where boundaries dissolve, you connect to the mystical, sacrifice for higher purpose, and experience unity consciousness.',
    signEnergy: 'Sagittarius represents expansion, optimism, adventure, truth-seeking, freedom, and philosophical understanding. It\'s the energy of growth, exploration, teaching, and finding meaning through broadening horizons.',
    eventMeaning: '🌊 MYSTICAL 14-YEAR JOURNEY: Neptune in Sagittarius brings spiritual awakening through seeking, divine truth questing, and dissolving dogmatic beliefs. This extremely rare generational cycle spiritualizes philosophy/religion, creates mystical seeking, and transforms belief into direct experience. You must seek divine truth directly, release religious dogma, and find faith through mystical experience. This is about mystical quest, spiritual seeking, and discovering that divine truth transcends all beliefs.',
    loveRelationships: 'Romance becomes spiritual quest partnership, seeking truth together, and adventuring into mystical realms. Relationships require shared spiritual vision, freedom to explore, and questing together. You learn to love through shared seeking, explore spiritually together, and find divine through adventure. Idealization of spiritual teachers or gurus as partners possible - discernment essential. Long-term partnerships deepen through spiritual adventures, seeking truth together, and expanding consciousness. Dating involves spiritual seekers or philosophers. You attract adventurous, truth-seeking, spiritually expansive partners.',
    familyHome: 'Family spirituality becomes seeking, questing, and exploring diverse spiritual traditions together. Home life needs space for study, multicultural spiritual practice, and freedom to roam. You may explore various spiritual paths with family, travel on spiritual quests, or study diverse wisdom traditions. Family relationships transform through accepting different spiritual paths. You learn to share spiritual wisdom without preaching. Home becomes ashram, study center, or launch pad for spiritual adventures.',
    businessCareer: 'Mystical 14-year career evolution through spiritual teaching, mystical writing, or guiding others\' spiritual quests. Professional success requires sharing mystical truths, teaching from direct experience, or guiding seekers. You may become spiritual teacher, write spiritual books, lead spiritual journeys, or teach mystical philosophy. Authority comes through demonstrated mystical wisdom and lived truth. Career involves spiritual education, mystical writing, or guiding seekers. Professional reputation builds through authentic spiritual seeking and wisdom.',
    moneyFinances: 'Financial life becomes about earning through teaching truth, trusting divine abundance, and releasing attachment to security for freedom. Money requires sharing spiritual wisdom, teaching from experience, and trusting that seeking truth attracts abundance. You learn that spiritual teaching has value, divine provides for seekers, and freedom requires trusting abundance. Financial boundaries dissolve in optimism - discernment about giving essential. Long-term wealth builds through teaching mastery. Financial lessons teach that truth attracts abundance, teaching creates flow, and trusting divine brings provision.',
    predictions: [
      'Spiritual seeking intensifies - you quest for direct mystical experience and divine truth',
      'Religious or philosophical beliefs dissolve into personal mystical experience',
      'Teaching spiritual truths becomes important - you share wisdom from direct experience',
      'International spiritual travel or immersion in foreign spiritual traditions transforms you',
      'Career shifts toward spiritual teaching, mystical writing, or guiding others\' awakening',
      'You develop ability to access mystical states - visions, revelations, divine guidance',
      'Relationship becomes shared spiritual quest - seeking, traveling, learning together',
      'Higher education in spiritual/mystical subjects or studying with spiritual teachers',
      'You learn to distinguish between spiritual bypassing and authentic mystical experience',
      'You master the art of mystical seeking, spiritual teaching, and living divine truth'
    ]
  },

  'Neptune-Capricorn': {
    name: 'Neptune Ingress Capricorn',
    frequency: 'Approximately every 165 years',
    duration: '~14 years',
    planetEnergy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, and divine connection. It\'s where boundaries dissolve, you connect to the mystical, sacrifice for higher purpose, and experience unity consciousness.',
    signEnergy: 'Capricorn represents ambition, achievement, structure, mastery, responsibility, and authority. It\'s the energy of building, achieving, leading with integrity, and reaching the mountain top through persistent effort.',
    eventMeaning: '🌊 MYSTICAL 14-YEAR JOURNEY: Neptune in Capricorn brings spiritual awakening through structure dissolution, sacred leadership, and dissolving material ambition. This extremely rare generational cycle spiritualizes authority, creates compassionate leadership, and transforms success into service. You must lead with spiritual vision, achieve for service not ego, and dissolve attachment to worldly success. This is about spiritual authority, humble achievement, and discovering that true success is serving the divine plan.',
    loveRelationships: 'Romance becomes spiritual partnership with shared mission, building spiritual legacy together, and devotional commitment. Relationships require shared spiritual goals, building together for service, and serious spiritual commitment. You learn to love through building together spiritually, commit deeply, and create spiritual legacy. Disillusionment with traditional success in relationships possible. Long-term partnerships deepen through spiritual missions, serving together, and building spiritual work/legacy. Dating involves serious spiritual workers. You attract committed, mission-driven, spiritually mature partners.',
    familyHome: 'Family responsibility becomes spiritual service, building spiritual legacy, and creating structure for spiritual work. Home life needs space for spiritual work, simplicity, and connection to mountains/earth. You may build spiritual family business, serve family mission, or create home supporting spiritual work. Family relationships transform through serving together and shared spiritual purpose. You learn to balance worldly responsibility with spiritual calling. Home becomes monastery, spiritual workspace, or service center.',
    businessCareer: 'Mystical 14-year career evolution through spiritualizing your profession, leading with compassion, or building spiritual organizations. Professional success requires serving spiritual mission through career, leading compassionately, or building structures for spiritual work. You may build spiritual organization, lead compassionately in traditional field, or achieve success serving divine will. Authority comes through demonstrated spiritual integrity. Career involves spiritual leadership, compassionate management, or building spiritual structures. Professional reputation builds through serving greater good.',
    moneyFinances: 'Financial life becomes about earning through spiritual service in world, building sustainable spiritual work, and releasing attachment to status/wealth. Money requires serving spiritual mission professionally, building sustainable spiritual income, and trusting divine while working responsibly. You learn that spiritual work can be professional, divine supports those building for service, and worldly success without spirit is empty. Financial confusion about charging for spiritual work requires clarity. Long-term wealth builds through spiritual professional mastery. Financial lessons teach that spiritual work deserves professional compensation, divine blesses responsible service, and true wealth is spiritual legacy.',
    predictions: [
      'Career transforms into spiritual mission - professional success serves spiritual purpose',
      'You build organization, business, or structure that serves spiritual/humanitarian mission',
      'Disillusionment with traditional success leads to redefining achievement as spiritual service',
      'Leadership role requires leading with compassion, integrity, and spiritual vision',
      'Relationship with authority figures spiritualizes or dissolves based on spiritual alignment',
      'You develop ability to manifest spiritual visions into practical reality',
      'Career achievement feels empty without spiritual purpose - you seek meaningful success',
      'Financial success becomes byproduct of serving spiritual mission with integrity',
      'You learn to balance worldly responsibility with spiritual surrender and trust',
      'You master the art of spiritual leadership, sacred achievement, and building for divine purpose'
    ]
  },

  'Neptune-Aquarius': {
    name: 'Neptune Ingress Aquarius',
    frequency: 'Approximately every 165 years',
    duration: '~14 years',
    planetEnergy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, and divine connection. It\'s where boundaries dissolve, you connect to the mystical, sacrifice for higher purpose, and experience unity consciousness.',
    signEnergy: 'Aquarius represents innovation, community, individuality, progress, friendship, and humanitarian vision. It\'s the energy of awakening, connecting, revolutionizing, and serving collective evolution.',
    eventMeaning: '🌊 MYSTICAL 14-YEAR JOURNEY: Neptune in Aquarius brings spiritual awakening through unity consciousness, divine vision for humanity, and dissolving separation between individuals. This extremely rare generational cycle spiritualizes technology, creates utopian visions, and transforms individuality into universal love. You must serve collective evolution, envision spiritual future, and dissolve ego into group consciousness. This is about universal love, spiritual community, and discovering that all beings are one.',
    loveRelationships: 'Romance becomes spiritual friendship, universal love, and soul group connection. Relationships require spiritual freedom, friendship foundation, and shared vision for humanity. You learn to love as universal compassion, be friends with lovers, and create spiritual communities together. Confusion about romantic vs platonic love possible. Long-term partnerships deepen through serving humanity together, spiritual friendship, and group spiritual work. Dating involves community members or online connections. You attract spiritually evolved, community-minded, humanitarian partners.',
    familyHome: 'Family becomes spiritual community, chosen family, and network of spiritual friends. Home life needs space for community gatherings, technology for connection, and group spiritual practice. You may create spiritual community home, blur lines between family/friends, or live communally. Family relationships transform through dissolving traditional boundaries. You learn that all humanity is family. Home becomes community center, group meditation space, or technological spiritual hub.',
    businessCareer: 'Mystical 14-year career evolution through serving collective evolution, spiritual technology, or building spiritual communities. Professional success requires serving humanity, creating spiritual networks, or developing consciousness technology. You may build spiritual community, develop meditation technology, serve humanitarian causes, or work in spiritual social media. Authority comes through demonstrated service to collective. Career involves community building, humanitarian work, spiritual technology, or collective consciousness work. Professional reputation builds through serving greater good.',
    moneyFinances: 'Financial life becomes about sharing resources communally, earning through serving collective, and trusting group abundance. Money requires serving community, possibly sharing finances, and trusting that collective supports those who serve. You learn that community creates abundance, spiritual networks provide, and individual wealth serves collective good. Financial boundaries dissolve in community - clarity about giving/receiving essential. Long-term wealth builds through community platforms. Financial lessons teach that shared wealth exceeds individual wealth, serving collective attracts abundance, and spiritual community provides.',
    predictions: [
      'Unity consciousness awakens - you experience all beings as one, dissolving separation',
      'Spiritual community becomes your true family - you find belonging in soul groups',
      'Career becomes serving collective evolution, building spiritual networks, or humanitarian work',
      'Technology becomes spiritual tool - you use social media, apps, or platforms for spiritual service',
      'Friendship and romance blur - you learn that love transcends categories',
      'You develop visionary abilities - seeing potential futures and spiritual evolution pathways',
      'Utopian visions inspire you to work toward spiritual transformation of society',
      'Financial sharing or community economics become part of your spiritual practice',
      'You learn to balance individual sovereignty with group consciousness and collective service',
      'You master the art of universal love, spiritual community building, and serving collective awakening'
    ]
  },

  'Neptune-Pisces': {
    name: 'Neptune Ingress Pisces',
    frequency: 'Approximately every 165 years',
    duration: '~14 years (Neptune rules Pisces)',
    planetEnergy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, and divine connection. It\'s where boundaries dissolve, you connect to the mystical, sacrifice for higher purpose, and experience unity consciousness.',
    signEnergy: 'Pisces represents spirituality, compassion, imagination, transcendence, unity, and dissolution. It\'s the energy of connecting to divine, serving selflessly, creating artistically, and transcending ego boundaries.',
    eventMeaning: '🌊 MYSTICAL 14-YEAR JOURNEY (Neptune at Home): Neptune in Pisces brings maximum spiritual awakening, divine connection, and ego dissolution. This is Neptune at its most mystical and transcendent. This extremely rare generational cycle creates spiritual renaissance, mystical arts flowering, and mass spiritual awakening. You must surrender completely to divine, serve selflessly, and dissolve all boundaries. This is about full spiritual awakening, complete surrender, and experiencing total unity with all that is.',
    loveRelationships: 'Romance becomes total spiritual union, unconditional divine love, and complete ego dissolution in beloved. Relationships require spiritual devotion, unconditional acceptance, and total surrender. You learn to love as divine loves, surrender completely, and merge into unity. Complete boundary dissolution can lead to codependency - spiritual discernment essential. Long-term partnerships deepen through spiritual practice, serving together selflessly, and experiencing divine love through each other. Dating involves mystics and spiritual devotees. You attract divinely devoted, boundaryless, spiritually surrendered partners.',
    familyHome: 'Family becomes expression of universal love, all beings as family, and serving suffering beings. Home life needs space for deep spirituality, retreat, and connection to ocean/water. You may create sanctuary home, welcome all beings as family, or serve from home. Family relationships transform through total forgiveness, unconditional love, and spiritual surrender. You learn to love all beings as divinely as you love family. Home becomes ashram, sanctuary, healing space, or spiritual retreat center.',
    businessCareer: 'Mystical 14-year career evolution through pure spiritual service, mystical arts, or complete devotion to divine work. Professional success requires total surrender to divine will, creating transcendent art, or serving suffering beings selflessly. You may become mystic, spiritual artist, healer serving marginalized, or devotee serving divine. Authority comes through demonstrated divine connection and selfless service. Career involves mystical spirituality, transcendent arts, healing, or serving suffering. Professional reputation builds through divine love and transcendent beauty.',
    moneyFinances: 'Financial life becomes total trust in divine provision, earning through spiritual gifts, and complete detachment from money. Money requires surrendering financial control to divine, serving freely, and trusting completely. You learn that divine provides everything, attachment to money creates suffering, and spiritual service attracts mysterious abundance. All financial boundaries dissolve - can lead to chaos or miraculous provision. Long-term wealth builds through complete trust. Financial lessons teach that divine is the source, total surrender brings total provision, and money is spiritual energy.',
    predictions: [
      'Complete spiritual awakening - ego dissolves, you experience unity consciousness and divine love',
      'Mystical experiences become frequent - visions, divine encounters, transcendent states',
      'Artistic or musical gifts channel pure divine inspiration creating transcendent beauty',
      'Service to suffering beings becomes central - you serve homeless, addicted, marginalized with devotion',
      'All boundaries dissolve - you must learn spiritual discernment to function while staying open',
      'Addiction or escapism may arise requiring spiritual healing and grounded practices',
      'Career becomes pure spiritual service - you surrender professional ambition for divine calling',
      'Financial miracles occur through complete trust - divine provides mysteriously',
      'You become vessel for divine love, healing, and beauty - ego completely surrendered',
      'You master the art of complete surrender, divine union, and serving as pure instrument of love'
    ]
  },

  // ============================================================================
  // PLUTO INGRESSES - Transformation, power, death/rebirth (~12-30 years per sign)
  // ============================================================================

  'Pluto-Aries': {
    name: 'Pluto Ingress Aries',
    frequency: 'Approximately every 248 years',
    duration: '~19-31 years (varies due to elliptical orbit)',
    planetEnergy: 'Pluto represents transformation, power, death/rebirth, depth, obsession, and the unconscious. It\'s where you face shadows, transform through crisis, wield power, die and are reborn, and undergo total metamorphosis.',
    signEnergy: 'Aries represents boldness, initiative, independence, courage, action, and pioneering spirit. It\'s the energy of self-assertion, leadership, new beginnings, and direct action.',
    eventMeaning: '💀 GENERATIONAL TRANSFORMATION: Pluto in Aries brings total transformation of identity, power through action, and death/rebirth of the self. This extremely rare generational cycle (happens once every 248 years) creates revolutionary leaders, transforms courage/leadership, and destroys/rebuilds identity itself. You must die to who you were, be reborn empowered, and wield transformative power through action. This is about identity death/rebirth, empowered action, and transforming how humanity expresses courage and leadership.',
    loveRelationships: 'Romance becomes transformative passion, power dynamics through assertion, and death/rebirth through relationship. Relationships require confronting power struggles, transforming through conflict, and being reborn through love. You learn to love powerfully, transform through passion, and face relationship shadows courageously. Power struggles or intense passion possible - shadow work essential. Long-term partnerships deepen through crisis transforming both people, power sharing, and continuous rebirth. Dating involves intense, powerful people. You attract transformative, powerful, shadow-aware partners.',
    familyHome: 'Family power dynamics transform, identity death/rebirth through family, and confronting family shadows. Home life needs privacy for transformation, space to process intensity, and safe place for rebirth. You may transform family power structures, be reborn through family crisis, or face family shadows courageously. Family relationships transform through power struggles resolved, secrets revealed, and rebirth after crisis. You learn to wield family power wisely. Home becomes transformation chamber and rebirth sanctuary.',
    businessCareer: 'Generational career transformation through wielding power, transforming industries, or being reborn professionally. Professional success requires facing career shadows, wielding power wisely, and transforming through professional crisis. You may destroy/rebuild career multiple times, transform entire industries, or wield significant power. Authority comes through demonstrated transformative power. Career path likely involves multiple complete transformations. Professional reputation builds through phoenix-like rebirths.',
    moneyFinances: 'Financial transformation through crisis and rebirth, power through wealth, and complete financial death/rebirth cycles. Money requires facing financial shadows, transforming through financial crisis, and wielding financial power wisely. You learn through financial death/rebirth, building wealth from nothing, and using money as transformative power. Financial obsession or power possible - wisdom essential. Long-term wealth builds through transformation mastery. Financial lessons teach that death precedes rebirth, crisis creates opportunity, and financial power requires wisdom.',
    predictions: [
      'Identity completely dies and is reborn - who you become is unrecognizable from who you were',
      'Power awakens within you - you must learn to wield it wisely without dominating others',
      'Multiple complete life transformations occur - each death births stronger, wiser self',
      'Career or life direction transforms through crisis forcing total reinvention',
      'Relationship power struggles teach you about healthy power dynamics and shadow integration',
      'You develop courage to face anything - transformation removes fear through direct confrontation',
      'Leadership emerges phoenix-like - you lead through demonstrated transformation',
      'Obsessive drive or compulsive action requires shadow work and wise power use',
      'You learn that true power comes from being reborn repeatedly, not from dominating',
      'You master the art of transformative action, wise power wielding, and continuous rebirth'
    ]
  },

  'Pluto-Taurus': {
    name: 'Pluto Ingress Taurus',
    frequency: 'Approximately every 248 years',
    duration: '~26-33 years (varies due to elliptical orbit)',
    planetEnergy: 'Pluto represents transformation, power, death/rebirth, depth, obsession, and the unconscious. It\'s where you face shadows, transform through crisis, wield power, die and are reborn, and undergo total metamorphosis.',
    signEnergy: 'Taurus represents stability, security, material comfort, sensory pleasure, values, and persistence. It\'s the energy of building, maintaining, enjoying physical reality, and valuing quality over quantity.',
    eventMeaning: '💀 GENERATIONAL TRANSFORMATION: Pluto in Taurus brings total transformation of values, power through resources, and death/rebirth of material reality. This extremely rare generational cycle transforms money systems, destroys/rebuilds values, and revolutionizes relationship with physical world. You must face what you truly value, transform through material crisis, and be reborn with authentic values. This is about values death/rebirth, financial transformation, and transforming how humanity relates to resources and physical reality.',
    loveRelationships: 'Romance becomes intense values alignment, power through resources, and transformation through material life together. Relationships require sharing power over resources, transforming values together, and facing material shadows. You learn to love through shared resources, transform values through partnership, and face possessiveness/jealousy. Obsessive attachment or possessiveness possible - letting go essential. Long-term partnerships deepen through financial crisis survived together, values transformed, and continuous material rebirth. Dating involves people with resources or values depth. You attract powerful, transformative, financially aware partners.',
    familyHome: 'Family finances transform through crisis, family values death/rebirth, and power dynamics around resources. Home life needs material security yet transformation capacity, beautiful space that can be rebuilt. You may transform family wealth, be reborn through financial crisis, or face family money shadows. Family relationships transform through honest resource discussion, values alignment, and shared financial power. You learn to steward family resources powerfully. Home becomes both secure base and transformation space.',
    businessCareer: 'Generational career transformation through resource mastery, financial power wielding, or transforming value creation. Professional success requires transforming industries\' economics, wielding financial power, or facing material shadows professionally. You may transform how entire sectors create value, wield significant financial power, or be reborn professionally through crisis. Authority comes through demonstrated financial transformation power. Career involves finance, resources, transformation of value systems. Professional reputation builds through phoenix-like financial rebirths.',
    moneyFinances: 'Complete financial death/rebirth cycles, power through wealth transformation, and obsessive focus on financial mastery. Money requires facing financial shadows deeply, transforming through complete loss/gain cycles, and wielding financial power wisely. You learn through total financial destruction/rebuilding, creating wealth from ashes, and understanding money as power. Obsession with money or resources possible - spiritual values essential. Long-term wealth builds through transformation, crisis mastery, strategic power. Financial lessons teach that attachments must die for rebirth, crisis reveals true values, and financial power requires spiritual wisdom.',
    predictions: [
      'Values completely transform - what you valued dies, authentic values emerge from ashes',
      'Financial crisis and rebirth cycles teach you true wealth versus material attachment',
      'Career involves transforming how value is created, money works, or resources flow',
      'You develop power over resources - able to create wealth from nothing repeatedly',
      'Relationship requires transforming shared resources, letting go of possession, power sharing',
      'Obsession with security or material wealth requires shadow work and spiritual values',
      'Environmental or earth transformation becomes focus - composting, regeneration, death/rebirth cycles',
      'Body transformation through death/rebirth - releasing old physical patterns',
      'You learn that true security comes from transformation capacity, not material accumulation',
      'You master the art of financial transformation, wise resource power, and authentic values'
    ]
  },

  'Pluto-Gemini': {
    name: 'Pluto Ingress Gemini',
    frequency: 'Approximately every 248 years',
    duration: '~25-31 years (varies due to elliptical orbit)',
    planetEnergy: 'Pluto represents transformation, power, death/rebirth, depth, obsession, and the unconscious. It\'s where you face shadows, transform through crisis, wield power, die and are reborn, and undergo total metamorphosis.',
    signEnergy: 'Gemini represents communication, learning, curiosity, versatility, connection, and information exchange. It\'s the energy of thinking, speaking, writing, learning, networking, and intellectual exploration.',
    eventMeaning: '💀 GENERATIONAL TRANSFORMATION: Pluto in Gemini brings total transformation of communication, power through information, and death/rebirth of thought itself. This extremely rare generational cycle transforms information systems, destroys/rebuilds communication, and revolutionizes how we think/speak. You must transform how you think, wield information as power, and be reborn intellectually. This is about mental death/rebirth, information transformation, and transforming how humanity communicates and processes information.',
    loveRelationships: 'Romance becomes deep communication, power through words, and transformation through dialogue. Relationships require truth-telling that transforms, powerful communication, and facing communication shadows. You learn to love through transformative words, speak power into relationship, and face lies/secrets. Obsessive thinking about partner or manipulative communication possible - truth essential. Long-term partnerships deepen through crisis conversations, secrets revealed/healed, and communication transformed. Dating involves deep communicators. You attract transformative, truth-seeking, powerful communicators.',
    familyHome: 'Family communication transforms through crisis, family secrets revealed, and power dynamics through information. Home life needs space for deep conversation, privacy for truth-telling, and capacity for mental transformation. You may reveal family secrets, transform through family truth-telling, or face family communication shadows. Relationship with siblings may transform through crisis or truth. Family relationships transform through honest communication, secrets exposed/healed, power of truth. You learn to wield family communication power wisely. Home becomes truth laboratory.',
    businessCareer: 'Generational career transformation through information power, transforming communication systems, or wielding data/knowledge. Professional success requires transforming how information flows, wielding communication power, or facing information shadows. You may transform entire communication industries, wield massive information power, or investigate/reveal truth professionally. Authority comes through demonstrated information transformation power. Career involves investigation, deep research, transformative writing/speaking. Professional reputation builds through truth-revealing.',
    moneyFinances: 'Financial transformation through information, power through knowledge, and earning through investigation/transformation of data. Money requires wielding information powerfully, transforming through learning, and earning through depth research or transformative communication. You learn that information is power and wealth, secrets revealed create value, and knowledge transforms finances. Obsession with information or mental control possible - wisdom essential. Long-term wealth builds through information mastery. Financial lessons teach that truth creates value, information is currency, and knowledge is transformative power.',
    predictions: [
      'Thinking completely transforms - mental patterns die, new consciousness emerges',
      'Secrets revealed transform your life - family, personal, or societal truths exposed',
      'Writing or communication becomes transformatively powerful - your words change lives',
      'Career involves investigation, research, revealing truth, or transforming information systems',
      'Relationship deepens through crisis conversations where secrets/shadows are revealed and healed',
      'Obsessive thinking or information addiction requires shadow work and mental discipline',
      'Sibling relationship transforms through crisis, truth-telling, or deep honesty',
      'You develop investigative powers - able to uncover hidden truth in any situation',
      'Education completely transforms - how you learn dies and is reborn',
      'You master the art of transformative communication, information power, and truth-revealing'
    ]
  },

  'Pluto-Cancer': {
    name: 'Pluto Ingress Cancer',
    frequency: 'Approximately every 248 years',
    duration: '~16-26 years (varies due to elliptical orbit)',
    planetEnergy: 'Pluto represents transformation, power, death/rebirth, depth, obsession, and the unconscious. It\'s where you face shadows, transform through crisis, wield power, die and are reborn, and undergo total metamorphosis.',
    signEnergy: 'Cancer represents nurturing, emotions, family, home, roots, security, and protection. It\'s the energy of caring, belonging, emotional safety, and creating sanctuary.',
    eventMeaning: '💀 GENERATIONAL TRANSFORMATION: Pluto in Cancer brings total transformation of family, power through emotion, and death/rebirth of roots/security. This extremely rare generational cycle transforms family structures, destroys/rebuilds emotional life, and revolutionizes home/belonging. You must face family shadows, transform through emotional crisis, and be reborn emotionally. This is about family death/rebirth, emotional transformation, and transforming how humanity nurtures, belongs, and creates home.',
    loveRelationships: 'Romance becomes intense emotional bonding, power through feelings, and transformation through family/home creation. Relationships require emotional depth/honesty, transforming through emotional crisis, and facing emotional shadows together. You learn to love through emotional power, transform feelings, and face abandonment/engulfment fears. Obsessive emotional attachment or emotional manipulation possible - boundaries essential. Long-term partnerships deepen through emotional death/rebirth together, creating family from ashes, and healing emotional wounds. Dating involves emotionally deep people. You attract transformative, emotionally powerful, shadow-aware partners.',
    familyHome: 'Family undergoes complete transformation - deaths, rebirths, secrets revealed, power struggles resolved. Home life needs emotional safety yet transformation capacity, sanctuary that can be rebuilt. You may face family death literally or metaphorically, transform ancestral patterns, or reveal/heal family shadows. Family relationships transform through emotional honesty, shadow work, and rebirth after crisis. Relationship with mother may transform through crisis or deep healing. You learn to wield emotional/family power wisely. Home becomes both sanctuary and transformation chamber.',
    businessCareer: 'Generational career transformation through family business, real estate transformation, or emotional power in profession. Professional success requires transforming family/caregiving systems, wielding emotional intelligence powerfully, or building from emotional depths. You may transform family business, rebuild real estate from ground up, or use emotional depth professionally. Authority comes through demonstrated emotional transformation power. Career involves family work, real estate transformation, emotional healing. Professional reputation builds through emotional depth and transformation.',
    moneyFinances: 'Financial transformation through family, power through real estate, and earning through emotional depth or caregiving transformation. Money requires transforming family finances, investing in property transformation, and earning through emotional or caregiving work. You learn through family financial crisis/rebirth, building wealth in real estate, and understanding emotional/financial connections. Obsession with security or family money possible - trust essential. Long-term wealth builds through property and family resources transformation. Financial lessons teach that family patterns affect finances, property transforms value, and emotional security enables financial risk.',
    predictions: [
      'Family undergoes complete transformation - death, crisis, rebirth creating stronger foundation',
      'Emotional patterns completely die and are reborn - childhood wounds healed through transformation',
      'Mother relationship transforms through crisis, death, or deep shadow work and healing',
      'Home completely transforms - move, rebuild, or total renovation reflecting inner transformation',
      'Career involves transforming family systems, real estate, caregiving, or emotional healing',
      'You develop emotional power - able to transmute any feeling and hold space for others\' emotions',
      'Relationship requires emotional honesty about shadows, fears, and deep needs',
      'Obsessive need for security or emotional control requires shadow work and trust',
      'Ancestral patterns surface to be transformed and healed permanently',
      'You master the art of emotional transformation, family healing, and creating secure sanctuary'
    ]
  },

  'Pluto-Leo': {
    name: 'Pluto Ingress Leo',
    frequency: 'Approximately every 248 years',
    duration: '~12-20 years (varies due to elliptical orbit)',
    planetEnergy: 'Pluto represents transformation, power, death/rebirth, depth, obsession, and the unconscious. It\'s where you face shadows, transform through crisis, wield power, die and are reborn, and undergo total metamorphosis.',
    signEnergy: 'Leo represents creativity, self-expression, confidence, joy, leadership, and recognition. It\'s the energy of shining, creating, celebrating, leading, and expressing authentic self.',
    eventMeaning: '💀 GENERATIONAL TRANSFORMATION: Pluto in Leo brings total transformation of creativity, power through self-expression, and death/rebirth of the ego. This extremely rare generational cycle transforms leadership, destroys/rebuilds creative power, and revolutionizes self-expression. You must transform creative power, face ego shadows, and be reborn as authentic leader. This is about ego death/rebirth, creative transformation, and transforming how humanity leads and creates.',
    loveRelationships: 'Romance becomes passionate transformation, power through love, and death/rebirth through creative partnership. Relationships require facing ego in love, transforming through passion, and sharing creative power. You learn to love transformatively, face jealousy/pride shadows, and be reborn through romance. Obsessive passion or ego battles possible - humility essential. Long-term partnerships deepen through ego death together, creating powerfully, and continuous rebirth through love. Dating involves creatively powerful people. You attract transformative, passionate, shadow-aware partners.',
    familyHome: 'Family creative power transforms, children transform you, and facing family ego shadows. Home life needs space for creative transformation, joyful rebirth, and powerful self-expression. You may be transformed by children/creative projects, face family pride/ego issues, or transform family creative legacy. Family relationships transform through ego work, celebrating rebirths, and creative power sharing. Relationship with father or children may be deeply transformative. You learn to lead family powerfully yet humbly. Home becomes creative transformation space.',
    businessCareer: 'Generational career transformation through creative power, transforming entertainment/arts, or leadership rebirth. Professional success requires transforming creative industries, wielding creative power, or being reborn as leader multiple times. You may destroy/rebuild creative career, transform entertainment itself, or wield significant leadership power. Authority comes through demonstrated creative/leadership transformation. Career involves creative transformation, powerful leadership, or entertainment revolution. Professional reputation builds through phoenix-like creative rebirths.',
    moneyFinances: 'Financial transformation through creative work, power through performance/art, and earning through creative rebirth. Money requires transforming creative monetization, wielding creative financial power, and earning through authentic self-expression. You learn through creative financial death/rebirth, building wealth through transformed creativity, and understanding creative power as wealth. Obsession with recognition or creative control possible - authenticity essential. Long-term wealth builds through creative mastery transformation. Financial lessons teach that creative authenticity attracts wealth, ego death births greater creativity, and true power is authentic expression.',
    predictions: [
      'Ego completely dies and is reborn - pride transforms into humble authentic power',
      'Creative power awakens transformatively - you create from deep unconscious power',
      'Children or creative projects transform you completely through death/rebirth processes',
      'Leadership emerges phoenix-like - you lead after being destroyed and rebuilt',
      'Relationship requires ego death and rebirth - facing pride, jealousy, need for control',
      'Career involves creative transformation, powerful artistic expression, or revolutionary entertainment',
      'You develop power to inspire through transformation - leading by example of rebirth',
      'Obsession with recognition or performance requires shadow work on ego and authenticity',
      'Father relationship may transform through crisis or provide deep transformation lessons',
      'You master the art of creative transformation, authentic leadership power, and humble radiance'
    ]
  },

  'Pluto-Virgo': {
    name: 'Pluto Ingress Virgo',
    frequency: 'Approximately every 248 years',
    duration: '~12-17 years (varies due to elliptical orbit)',
    planetEnergy: 'Pluto represents transformation, power, death/rebirth, depth, obsession, and the unconscious. It\'s where you face shadows, transform through crisis, wield power, die and are reborn, and undergo total metamorphosis.',
    signEnergy: 'Virgo represents analysis, refinement, service, health, organization, and practical skill. It\'s the energy of improvement, discernment, efficiency, helping, and mastering craft.',
    eventMeaning: '💀 GENERATIONAL TRANSFORMATION: Pluto in Virgo brings total transformation of health, power through service, and death/rebirth of daily life. This extremely rare generational cycle transforms healthcare/work, destroys/rebuilds service systems, and revolutionizes wellness. You must transform health practices, wield power through service, and be reborn through work. This is about health death/rebirth, service transformation, and transforming how humanity serves, heals, and maintains health.',
    loveRelationships: 'Romance becomes transformative service, power through devotion, and death/rebirth through daily life together. Relationships require serving each other deeply, transforming through health/work issues, and facing perfectionism shadows. You learn to love through transformative service, heal each other powerfully, and be reborn through devotion. Obsessive criticism or perfectionism possible - acceptance essential. Long-term partnerships deepen through health crisis survived together, serving powerfully, and continuous practical rebirth. Dating involves health-conscious servers. You attract transformative, devoted, healing partners.',
    familyHome: 'Family health transforms through crisis, family service patterns death/rebirth, and facing family perfectionism shadows. Home life needs health-supporting transformation capacity, clean yet changeable space, and service opportunities. You may transform family health, be reborn through health crisis, or face family service/perfectionism shadows. Family relationships transform through honest health discussion, service without martyrdom, and accepting imperfection. You learn to serve family powerfully yet maintain boundaries. Home becomes healing transformation laboratory.',
    businessCareer: 'Generational career transformation through healthcare revolution, service transformation, or work rebirth. Professional success requires transforming healthcare systems, wielding service power, or being reborn professionally through work crisis. You may transform healthcare, revolutionize service industries, or wield power through technical mastery. Authority comes through demonstrated healing/service transformation power. Career involves health transformation, powerful service, or work revolution. Professional reputation builds through practical transformation expertise.',
    moneyFinances: 'Financial transformation through health work, power through service, and earning through healing/analytical transformation. Money requires transforming health economics, earning through powerful service, and building wealth through practical mastery. You learn through work financial death/rebirth, creating wealth through healing/service, and understanding service as power. Obsession with efficiency or work addiction possible - balance essential. Long-term wealth builds through healing/service mastery. Financial lessons teach that service creates wealth, health work is valuable, and practical transformation builds sustainable income.',
    predictions: [
      'Health undergoes complete transformation - illness becomes catalyst for total wellness rebirth',
      'Work life dies and is reborn - career completely transforms through work crisis or mastery',
      'Healing gifts awaken powerfully - you become transformative healer or health revolutionary',
      'Perfectionism shadow work required - accepting imperfection while maintaining excellence',
      'Career involves healthcare transformation, service revolution, or powerful practical work',
      'Daily routines completely transform - what you do daily dies and is reborn multiple times',
      'Relationship requires transforming service patterns, healing perfectionism, sharing work power',
      'Obsession with health, work, or perfection requires shadow integration and self-acceptance',
      'You develop power to analyze and transform any system making it more efficient and healthy',
      'You master the art of healing transformation, powerful service, and practical rebirth mastery'
    ]
  },

  'Pluto-Libra': {
    name: 'Pluto Ingress Libra',
    frequency: 'Approximately every 248 years',
    duration: '~12-20 years (varies due to elliptical orbit)',
    planetEnergy: 'Pluto represents transformation, power, death/rebirth, depth, obsession, and the unconscious. It\'s where you face shadows, transform through crisis, wield power, die and are reborn, and undergo total metamorphosis.',
    signEnergy: 'Libra represents balance, partnership, harmony, aesthetics, diplomacy, and fairness. It\'s the energy of relating, cooperating, creating beauty, and seeking equilibrium.',
    eventMeaning: '💀 GENERATIONAL TRANSFORMATION: Pluto in Libra brings total transformation of relationships, power through partnership, and death/rebirth of fairness/beauty. This extremely rare generational cycle transforms partnership structures, destroys/rebuilds justice systems, and revolutionizes relating. You must transform relationships, face partnership shadows, and be reborn through union. This is about relationship death/rebirth, partnership transformation, and transforming how humanity relates, partners, and creates justice.',
    loveRelationships: 'Romance becomes total transformation through partnership, power struggles in relationship, and death/rebirth through union. Relationships require facing shadows together, transforming through intense partnership, and being reborn as couple. You learn to love through transformation, face codependency/power shadows, and be continuously reborn in relationship. Obsessive attachment or power battles possible - equality essential. Long-term partnerships deepen through crisis transforming both, shadow work together, and phoenix-like relationship rebirths. Dating involves transformative people seeking depth. You attract powerful, shadow-aware, transformative partners.',
    familyHome: 'Family partnerships transform through crisis, family justice issues death/rebirth, and facing family relationship shadows. Home life needs beautiful yet transformable space, partnership equality, and aesthetic that can be rebuilt. You may transform family partnerships, be reborn through family relationship crisis, or face family fairness shadows. Family relationships transform through power balancing, shadow work in relating, and relationship rebirth. You learn to partner in family powerfully yet fairly. Home becomes beautiful transformation space.',
    businessCareer: 'Generational career transformation through partnership power, transforming justice systems, or aesthetic revolution. Professional success requires transforming partnership industries, wielding relationship power, or being reborn through business partnerships. You may transform legal systems, revolutionize partnership structures, or wield aesthetic/relational power. Authority comes through demonstrated partnership transformation power. Career involves relationship transformation, justice reform, or aesthetic revolution. Professional reputation builds through partnership phoenix moments.',
    moneyFinances: 'Financial transformation through partnership finances, power through shared resources, and earning through relationship/aesthetic work. Money requires transforming partnership finances, managing shared money powerfully, and earning through relationship or beauty work. You learn through partnership financial death/rebirth, building wealth through relationships, and understanding partnership power dynamics with money. Obsession with partnership money or financial fairness possible - honesty essential. Long-term wealth builds through transformed partnerships. Financial lessons teach that partnership transforms finances, shared resources require power awareness, and financial fairness creates sustainable wealth.',
    predictions: [
      'Relationships undergo complete death/rebirth - partnerships transform you entirely',
      'Marriage or significant partnership transforms through crisis creating deeper union or ending',
      'Power struggles in relationship teach you about equality, shadow projection, and partnership',
      'Career involves transforming relationships, partnership law, justice reform, or aesthetic revolution',
      'Business partnership transforms through crisis - either rebirthing stronger or dissolving',
      'You develop power to mediate and transform conflicts into opportunities for rebirth',
      'Codependency shadow work required - learning to partner powerfully yet maintain self',
      'Obsession with relationships or partnership addiction requires shadow integration',
      'Justice or fairness becomes focus - you may fight for equality or transform legal systems',
      'You master the art of relationship transformation, partnership power dynamics, and union rebirth'
    ]
  },

  'Pluto-Scorpio': {
    name: 'Pluto Ingress Scorpio',
    frequency: 'Approximately every 248 years',
    duration: '~11-17 years (varies due to elliptical orbit - Pluto rules Scorpio)',
    planetEnergy: 'Pluto represents transformation, power, death/rebirth, depth, obsession, and the unconscious. It\'s where you face shadows, transform through crisis, wield power, die and are reborn, and undergo total metamorphosis.',
    signEnergy: 'Scorpio represents intensity, transformation, depth, power, intimacy, and regeneration. It\'s the energy of probing beneath surface, merging deeply, wielding power, and transforming through crisis.',
    eventMeaning: '💀 GENERATIONAL TRANSFORMATION (Pluto at Home): Pluto in Scorpio brings maximum transformation, ultimate power wielding, and complete death/rebirth. This is Pluto at its most intense and transformative. This extremely rare generational cycle creates profound transformation, sexual/psychological revolution, and deep shadow work collectively. You must face all shadows, wield power wisely, and be completely reborn. This is about total transformation, maximum power, and revolutionizing humanity\'s relationship with sex, death, power, and rebirth.',
    loveRelationships: 'Romance becomes total intensity, complete sexual/emotional fusion, and ultimate transformation through union. Relationships require absolute depth, facing all shadows together, and complete transformation through intimacy. You learn to love with maximum intensity, merge totally, and be utterly transformed by love. Obsession, possession, or power struggles likely - total honesty essential. Long-term partnerships deepen through intense crisis, complete shadow integration, and continuous death/rebirth. Dating involves extremely intense people. You attract totally transformative, deeply sexual, completely shadow-aware partners.',
    familyHome: 'Family undergoes maximum transformation - death, secrets, power struggles all surfacing for complete healing. Home life needs absolute privacy, transformation capacity, and space for intense shadow work. You may face family death/inheritance, transform completely through family crisis, or reveal/heal deepest family shadows. Family relationships transform through brutal honesty, complete shadow exposure, and total rebirth. You learn to wield family power with absolute wisdom. Home becomes ultimate transformation chamber.',
    businessCareer: 'Generational career transformation through maximum power wielding, transforming power structures, or complete professional rebirth. Professional success requires wielding ultimate power wisely, transforming fundamental structures, or being completely destroyed/rebuilt professionally. You may wield massive transformative power, revolutionize power itself, or undergo ultimate professional death/rebirth. Authority comes through demonstrated mastery of transformation and power. Career involves deep transformation, power work, or complete revolutionary change. Professional reputation builds through total transformation mastery.',
    moneyFinances: 'Complete financial transformation, maximum power through wealth, and ultimate financial death/rebirth. Money requires total financial honesty, wielding financial power absolutely, and complete financial transformation. You learn through total financial destruction/rebuilding, creating massive wealth from nothing, and wielding financial power wisely. Obsession with money/power likely - spiritual wisdom absolutely essential. Long-term wealth builds through complete transformation mastery. Financial lessons teach that maximum power requires maximum wisdom, total death enables total rebirth, and financial transformation creates ultimate wealth.',
    predictions: [
      'Complete life transformation - who you were dies entirely, you are utterly reborn',
      'Maximum power awakens - you wield transformative power that can create or destroy',
      'Sexual awakening at deepest level - sexuality becomes transformative spiritual power',
      'All shadows surface to be faced - no unconscious content remains hidden',
      'Death experiences (literal or metaphorical) transform you at the deepest core',
      'Career involves ultimate transformation work - deep healing, power dynamics, or death work',
      'Relationship becomes total fusion - complete merging teaching you about power and boundaries',
      'Obsession with control, power, or intensity requires deepest shadow integration work',
      'Financial transformation at maximum level - complete loss and/or massive wealth creation',
      'You master the art of total transformation, wise power wielding, and complete rebirth'
    ]
  },

  'Pluto-Sagittarius': {
    name: 'Pluto Ingress Sagittarius',
    frequency: 'Approximately every 248 years',
    duration: '~11-17 years (varies due to elliptical orbit)',
    planetEnergy: 'Pluto represents transformation, power, death/rebirth, depth, obsession, and the unconscious. It\'s where you face shadows, transform through crisis, wield power, die and are reborn, and undergo total metamorphosis.',
    signEnergy: 'Sagittarius represents expansion, optimism, adventure, truth-seeking, freedom, and philosophical understanding. It\'s the energy of growth, exploration, teaching, and finding meaning through broadening horizons.',
    eventMeaning: '💀 GENERATIONAL TRANSFORMATION: Pluto in Sagittarius brings total transformation of beliefs, power through truth, and death/rebirth of philosophy. This extremely rare generational cycle transforms religion/education, destroys/rebuilds belief systems, and revolutionizes truth-seeking. You must transform beliefs, face philosophical shadows, and be reborn through truth. This is about belief death/rebirth, truth transformation, and transforming how humanity seeks meaning, believes, and understands truth.',
    loveRelationships: 'Romance becomes transformative truth-seeking, power through shared beliefs, and death/rebirth through philosophical alignment. Relationships require brutal honesty, transforming beliefs together, and facing truth shadows. You learn to love through truth-telling, transform philosophy together, and be reborn through shared vision. Obsessive preaching or philosophical domination possible - openness essential. Long-term partnerships deepen through crisis transforming beliefs, truth revealed, and continuous philosophical rebirth. Dating involves truth-seekers or teachers. You attract transformative, honest, philosophically powerful partners.',
    familyHome: 'Family beliefs transform through crisis, family truth revealed, and facing family philosophical shadows. Home life needs space for learning transformation, diverse perspectives, and freedom to question. You may transform family religion, be reborn through family truth crisis, or face family belief shadows. Family relationships transform through honesty about beliefs, exposing family lies/dogma, and philosophical rebirth. You learn to share truth powerfully yet allow family diversity. Home becomes truth laboratory and study transformation center.',
    businessCareer: 'Generational career transformation through education revolution, transforming belief systems, or truth-telling power. Professional success requires transforming education, wielding truth power, or being reborn through teaching crisis. You may transform religious/educational institutions, wield power through publishing/teaching, or revolutionize philosophy itself. Authority comes through demonstrated truth transformation power. Career involves education transformation, powerful teaching, or truth revolution. Professional reputation builds through truth-revealing and belief transformation.',
    moneyFinances: 'Financial transformation through teaching, power through published truth, and earning through educational/philosophical transformation. Money requires earning through transformative teaching, publishing truth powerfully, and building wealth through education. You learn through educational financial death/rebirth, creating wealth through teaching, and understanding truth as financial power. Obsession with belief systems or educational control possible - humility essential. Long-term wealth builds through teaching/publishing mastery. Financial lessons teach that truth creates wealth, teaching transforms finances, and educational power builds sustainable income.',
    predictions: [
      'Beliefs completely die and are reborn - what you believed transforms entirely',
      'Truth revealed transforms your life - family secrets, philosophical awakening, or exposed lies',
      'Teaching or publishing becomes transformatively powerful - your truth changes lives',
      'International experience transforms you - travel, education abroad, or cross-cultural immersion',
      'Career involves transforming education, religious revolution, publishing truth, or philosophical work',
      'Relationship requires brutal honesty and shared vision - beliefs must align or transform',
      'Obsession with being right or philosophical domination requires shadow work and openness',
      'Higher education completely transforms - what/how you learn dies and is reborn',
      'You develop power to see and speak truth that transforms individuals and collective',
      'You master the art of truth transformation, powerful teaching, and belief system rebirth'
    ]
  },

  'Pluto-Capricorn': {
    name: 'Pluto Ingress Capricorn',
    frequency: 'Approximately every 248 years',
    duration: '~14-21 years (varies due to elliptical orbit)',
    planetEnergy: 'Pluto represents transformation, power, death/rebirth, depth, obsession, and the unconscious. It\'s where you face shadows, transform through crisis, wield power, die and are reborn, and undergo total metamorphosis.',
    signEnergy: 'Capricorn represents ambition, achievement, structure, mastery, responsibility, and authority. It\'s the energy of building, achieving, leading with integrity, and reaching the mountain top through persistent effort.',
    eventMeaning: '💀 GENERATIONAL TRANSFORMATION: Pluto in Capricorn brings total transformation of structures, power through authority, and death/rebirth of achievement systems. This extremely rare generational cycle transforms government/corporations, destroys/rebuilds power structures, and revolutionizes authority. You must transform career/ambition, face authority shadows, and be reborn professionally. This is about structural death/rebirth, authority transformation, and transforming how humanity builds, achieves, and wields institutional power.',
    loveRelationships: 'Romance becomes transformative achievement partnership, power through building together, and death/rebirth through shared ambition. Relationships require transforming traditional structures, facing authority shadows, and being reborn through commitment. You learn to love through powerful building, transform ambition together, and face control shadows. Obsessive control or ambition dominating relationship possible - equality essential. Long-term partnerships deepen through career crisis survived together, building powerfully, and continuous achievement rebirth. Dating involves ambitious powerful people. You attract transformative, achievement-oriented, authority-aware partners.',
    familyHome: 'Family structures completely transform, family authority death/rebirth, and facing family power shadows. Home life needs solid yet transformable foundation, respect for earned authority, and space for ambitious transformation. You may transform family business/legacy, be reborn through family authority crisis, or face family power abuse shadows. Family relationships transform through authority rebalancing, structure rebuilding, and power wisdom. Relationship with father or authority figures deeply transformative. You learn to wield family authority wisely. Home becomes both secure base and transformation structure.',
    businessCareer: 'Generational career transformation through wielding institutional power, destroying/rebuilding structures, or complete professional rebirth. Professional success requires transforming entire industries, wielding ultimate professional power, or being destroyed/rebuilt multiple times. You may destroy/rebuild career completely, transform corporate/government structures, or wield massive institutional power. Authority comes through demonstrated transformation of structures. Career involves structural transformation, power work, or revolutionary leadership. Professional reputation builds through phoenix-like professional rebirths.',
    moneyFinances: 'Complete financial structure transformation, power through wealth building, and earning through structural/professional transformation. Money requires transforming how you build wealth, wielding financial power structurally, and earning through professional mastery. You learn through complete career financial death/rebirth, building massive wealth from nothing, and understanding professional power as wealth. Obsession with success or financial control possible - integrity essential. Long-term wealth builds through structural transformation mastery. Financial lessons teach that structures must transform, professional power creates wealth, and sustainable success requires integrity plus transformation.',
    predictions: [
      'Career undergoes complete transformation - professional identity dies and is utterly reborn',
      'Power structures you\'re part of collapse and rebuild - corporation, government, or institution',
      'Ambition transforms from ego-driven to service-driven through crisis or shadow work',
      'Father or authority figure relationship transforms through crisis, death, or power shift',
      'Career involves transforming institutions, wielding structural power, or revolutionary leadership',
      'You develop power to build lasting structures from ashes of destruction',
      'Relationship requires transforming traditional structures and facing control shadows',
      'Obsession with success, control, or achievement requires deep shadow integration',
      'Financial transformation through complete career death/rebirth or structural collapse/rebuild',
      'You master the art of structural transformation, wise authority wielding, and professional rebirth'
    ]
  },

  'Pluto-Aquarius': {
    name: 'Pluto Ingress Aquarius',
    frequency: 'Approximately every 248 years',
    duration: '~20-24 years (varies due to elliptical orbit)',
    planetEnergy: 'Pluto represents transformation, power, death/rebirth, depth, obsession, and the unconscious. It\'s where you face shadows, transform through crisis, wield power, die and are reborn, and undergo total metamorphosis.',
    signEnergy: 'Aquarius represents innovation, community, individuality, progress, friendship, and humanitarian vision. It\'s the energy of awakening, connecting, revolutionizing, and serving collective evolution.',
    eventMeaning: '💀 GENERATIONAL TRANSFORMATION: Pluto in Aquarius brings total transformation of society, power through collective, and death/rebirth of community/technology. This extremely rare generational cycle transforms social structures, destroys/rebuilds networks, and revolutionizes technology and humanity itself. You must transform your relationship to collective, face social shadows, and be reborn through community. This is about social death/rebirth, collective transformation, and transforming how humanity connects, evolves collectively, and uses technology.',
    loveRelationships: 'Romance becomes transformative friendship, power through network, and death/rebirth through social connection. Relationships require transforming traditional romance into revolutionary partnership, facing social shadows, and being reborn through progressive love. You learn to love through friendship transformation, create with social networks, and face attachment shadows. Obsessive need for freedom or social control possible - authentic connection essential. Long-term partnerships deepen through social crisis survived together, community building, and continuous social rebirth. Dating through communities or networks. You attract transformative, socially conscious, revolutionary partners.',
    familyHome: 'Family becomes chosen family, family social networks transform, and facing family social shadows. Home life needs community space, technology integration, and room for progressive transformation. You may create chosen family completely, transform through family social crisis, or face family rejection shadows. Family relationships transform through accepting differences radically, social network rebuilding, and progressive rebirth. You learn that family is transformable and choosable. Home becomes community transformation hub.',
    businessCareer: 'Generational career transformation through technology revolution, social transformation, or network power wielding. Professional success requires transforming social structures, wielding network power, or being reborn through technological crisis. You may transform social movements, revolutionize technology itself, or wield massive network power. Authority comes through demonstrated collective transformation power. Career involves social transformation, technology revolution, or network building. Professional reputation builds through community transformation leadership.',
    moneyFinances: 'Financial transformation through network economics, power through collective wealth, and earning through social/technological transformation. Money requires transforming financial systems collectively, earning through networks, and building wealth through technology. You learn through social financial death/rebirth, creating wealth through communities, and understanding network power as wealth. Obsession with technology or social control possible - humanity essential. Long-term wealth builds through network transformation mastery. Financial lessons teach that collective transforms wealth, technology revolutionizes finances, and network power creates sustainable abundance.',
    predictions: [
      'Social identity dies and is reborn - who you are socially transforms completely',
      'Community undergoes complete transformation - network collapses and rebuilds',
      'Technology becomes transformative power - you wield tech to transform society',
      'Friendship transforms into family or family transforms into chosen community',
      'Career involves social transformation, technology revolution, or collective healing',
      'You develop power to transform social structures and build revolutionary networks',
      'Relationship requires progressive transformation - traditional structures must die',
      'Obsession with freedom, technology, or social perfection requires shadow integration',
      'Financial revolution through cryptocurrency, decentralized systems, or network economics',
      'You master the art of collective transformation, network power wielding, and social rebirth'
    ]
  },

  'Pluto-Pisces': {
    name: 'Pluto Ingress Pisces',
    frequency: 'Approximately every 248 years',
    duration: '~25-30 years (varies due to elliptical orbit)',
    planetEnergy: 'Pluto represents transformation, power, death/rebirth, depth, obsession, and the unconscious. It\'s where you face shadows, transform through crisis, wield power, die and are reborn, and undergo total metamorphosis.',
    signEnergy: 'Pisces represents spirituality, compassion, imagination, transcendence, unity, and dissolution. It\'s the energy of connecting to divine, serving selflessly, creating artistically, and transcending ego boundaries.',
    eventMeaning: '💀 GENERATIONAL TRANSFORMATION: Pluto in Pisces brings total transformation of spirituality, power through surrender, and death/rebirth of ego into unity. This extremely rare generational cycle transforms religion/spirituality, destroys/rebuilds compassion, and revolutionizes connection to divine. You must transform spiritually, face spiritual shadows, and be reborn into unity consciousness. This is about spiritual death/rebirth, divine transformation, and transforming how humanity connects to divine, serves compassionately, and experiences oneness.',
    loveRelationships: 'Romance becomes total spiritual transformation, power through surrender, and death/rebirth through divine union. Relationships require spiritual depth, transforming through compassion, and facing victim/savior shadows. You learn to love as spiritual transformation, surrender control through love, and be reborn through unconditional love. Obsessive savior complex or victim addiction possible - boundaries essential. Long-term partnerships deepen through spiritual crisis survived together, serving compassionately, and continuous spiritual rebirth. Dating involves spiritual transformers. You attract deeply compassionate, spiritually transformative, shadow-aware partners.',
    familyHome: 'Family spirituality undergoes total transformation, family addiction/victimhood patterns death/rebirth, and facing family spiritual shadows. Home life needs spiritual space, transformation through water/ocean, and sanctuary for spiritual crisis. You may transform family through spiritual awakening, be reborn through family addiction crisis, or face family savior/victim shadows. Family relationships transform through forgiveness, spiritual honesty, and compassionate rebirth. You learn to serve family spiritually yet maintain boundaries. Home becomes spiritual transformation sanctuary.',
    businessCareer: 'Generational career transformation through spiritual work, healing transformation, or artistic rebirth. Professional success requires transforming spirituality/healing, wielding compassionate power, or being reborn through artistic crisis. You may transform spiritual/healing industries, wield power through art/music, or revolutionize compassion itself. Authority comes through demonstrated spiritual transformation power. Career involves spiritual transformation, deep healing, or transcendent art. Professional reputation builds through spiritual rebirth and compassionate service.',
    moneyFinances: 'Financial transformation through spiritual work, power through healing, and earning through artistic/spiritual transformation. Money requires transforming relationship with money spiritually, earning through healing/art, and building wealth through surrender. You learn through financial victim patterns death/rebirth, creating wealth through spirituality, and understanding surrender as financial power. Obsession with spiritual purity or financial martyrdom possible - practical wisdom essential. Long-term wealth builds through spiritual/artistic mastery. Financial lessons teach that spiritual power creates wealth, surrender transforms finances, and serving creates sustainable abundance.',
    predictions: [
      'Spiritual awakening through complete ego death - who you thought you were dissolves entirely',
      'Addiction or victim patterns surface to be transformed and healed permanently',
      'Artistic or musical power awakens from depths - you create transformative transcendent art',
      'Healing gifts emerge powerfully - you become transformative healer serving suffering beings',
      'Career involves spiritual transformation, deep healing work, or transcendent artistic creation',
      'You develop power to hold space for others\' complete transformation with compassion',
      'Relationship requires spiritual depth and facing savior/victim shadow patterns',
      'Obsession with spirituality, martyrdom, or saving others requires boundary work',
      'Financial transformation through releasing poverty consciousness or spiritual materialism',
      'You master the art of spiritual transformation, compassionate power, and ego death/rebirth into unity'
    ]
  }
};

export default DETAILED_INGRESSES;
