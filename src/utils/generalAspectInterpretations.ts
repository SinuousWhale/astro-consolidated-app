import { getAspectFrequency, getAspectDuration, getAspectDirection } from './aspectCalculations';

/**
 * General Transit-to-Transit Aspect Interpretations
 * Pure planet-to-planet aspects without house considerations
 * Format: Name, Frequency, Duration, Planet Energies, Aspect Meaning, Category Interpretations, 10 Predictions
 */

export interface GeneralAspectInterpretation {
  name: string;
  frequency: string;
  duration: string;
  direction?: 'approaching' | 'leaving' | 'exact';
  currentOrb?: number;
  maxOrb?: number;
  planet1Energy: string;
  planet2Energy: string;
  aspectMeaning: string;
  loveRelationships: string;
  familyHome: string;
  businessCareer: string;
  moneyFinances: string;
  predictions: string[];
}

/**
 * Get general interpretation for a transit-to-transit aspect
 */
export function getGeneralAspectInterpretation(
  planet1: string,
  planet2: string,
  aspectType: string,
  currentOrb: number = 5,
  maxOrb?: number
): GeneralAspectInterpretation | null {
  const key = `${planet1}-${planet2}-${aspectType}`;
  const reverseKey = `${planet2}-${planet1}-${aspectType}`;

  // Check both directions
  const interpretation = GENERAL_ASPECTS[key] || GENERAL_ASPECTS[reverseKey];

  if (!interpretation) return null;

  // Use currentOrb as maxOrb if maxOrb is not provided (for backward compatibility)
  const orbToUse = maxOrb || currentOrb;

  // Calculate duration and frequency using the accurate functions
  const duration = getAspectDuration(planet1, planet2, aspectType, orbToUse);
  const frequency = getAspectFrequency(planet1, planet2, aspectType);

  // Determine aspect direction (approaching/exact/separating)
  const direction = getAspectDirection(planet1, planet2, aspectType, currentOrb, orbToUse);

  return {
    ...interpretation,
    duration: `Total duration: ${duration} (from entering to leaving ${orbToUse}° orb, accounting for retrograde motion)`,
    frequency: `Frequency: ${frequency}`,
    direction: direction,
    currentOrb: currentOrb,
    maxOrb: orbToUse
  };
}

// GENERAL ASPECT INTERPRETATIONS DATABASE
const GENERAL_ASPECTS: Record<string, GeneralAspectInterpretation> = {

  // ============================================================================
  // SATURN - URANUS ASPECTS
  // ============================================================================

  'Saturn-Uranus-Conjunction': {
    name: 'Saturn Conjunction Uranus',
    frequency: 'Occurs approximately every 45 years',
    duration: '6-12 months',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Uranus represents change, innovation, freedom, rebellion, awakening, and breakthrough. It disrupts the status quo and demands authenticity and liberation.',
    aspectMeaning: 'The conjunction merges Saturn\'s need for structure with Uranus\'s drive for freedom, creating tension between the old and new. This is a revolutionary aspect that breaks down outdated structures to rebuild them in innovative ways. Expect sudden changes that ultimately lead to greater stability.',
    loveRelationships: 'Relationships undergo radical restructuring. Conventional arrangements may suddenly feel confining, leading to unconventional solutions or relationship formats. Long-term commitments may form suddenly or existing ones may break free from traditional expectations. You need both stability and freedom now.',
    familyHome: 'Home life and family structures transform dramatically. You may make sudden moves, renovate in unexpected ways, or restructure living arrangements. Traditional family roles get challenged, leading to more authentic dynamics. Elder family members may resist changes younger ones insist upon.',
    businessCareer: 'Career path takes unexpected turns toward greater autonomy and innovation. Traditional career structures feel limiting, prompting freelance work, entrepreneurship, or radical industry changes. Authority figures may resist your innovations, but persistence pays off. Build new systems.',
    moneyFinances: 'Financial structures require modernization. Traditional investment strategies may fail while innovative approaches succeed. Expect unexpected expenses related to technology or sudden opportunities through unconventional means. Build financial independence while maintaining responsibility.',
    predictions: [
      'Sudden realization that old systems in your life no longer work',
      'Unexpected opportunity to break free from limiting commitment or structure',
      'Technology disrupts your established routines, forcing adaptation',
      'Authority figure either supports your innovation or becomes obstacle to overcome',
      'Long-term plan suddenly accelerates or changes direction entirely',
      'You will quit something you thought was permanent (job, relationship, living situation)',
      'Invention or breakthrough idea that could change your life trajectory',
      'Clash between what you should do (Saturn) and what you want to do (Uranus)',
      'Sudden responsibility for implementing change or innovation in your field',
      'Breaking point followed by breakthrough - crisis leads to liberation'
    ]
  },

  'Saturn-Uranus-Opposition': {
    name: 'Saturn Opposition Uranus',
    frequency: 'Occurs approximately every 45 years',
    duration: '6-12 months',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Uranus represents change, innovation, freedom, rebellion, awakening, and breakthrough. It disrupts the status quo and demands authenticity and liberation.',
    aspectMeaning: 'The opposition creates maximum tension between Saturn\'s need for order and Uranus\'s demand for freedom. This is a tug-of-war between security and liberation, tradition and innovation. External circumstances force you to find balance between stability and change.',
    loveRelationships: 'Relationship feels like battleground between commitment and freedom. Partner may demand more security while you crave independence, or vice versa. Ultimatums possible. The key is finding unconventional ways to honor both needs. Breakups or breakthroughs equally likely.',
    familyHome: 'Generational conflicts intensify as old and new clash. Parents vs. children, tradition vs. progress. Someone wants to maintain family traditions while others rebel. Home situation may feel unstable, forcing choice between staying put or making dramatic change.',
    businessCareer: 'Career crisis point where you must choose between security and authenticity. Employer may demand conformity while you need creative freedom. You may be forced to innovate within rigid structure or leave to create your own path. Authority conflicts likely.',
    moneyFinances: 'Financial tension between playing it safe and taking calculated risks. Traditional income sources may be unstable, pushing you toward innovative revenue streams. Bills and responsibilities demand attention just as opportunities for change arise. Budget carefully while exploring new options.',
    predictions: [
      'Someone in authority tells you "no" right when you want to break free',
      'Job security threatened, forcing you to consider entrepreneurial leap',
      'Relationship ultimatum: commit fully or I\'m leaving',
      'Living situation becomes untenable, must move but finances are tight',
      'Your innovative idea faces harsh criticism from established experts',
      'Torn between safe boring option and exciting risky option',
      'Technology failure or breakthrough happens at crucial moment',
      'You will rebel against restriction even if it costs you security',
      'Elder or authority figure blocks your progress, creating showdown',
      'Crisis forces you to build new structure combining old wisdom and new methods'
    ]
  },

  'Saturn-Uranus-Trine': {
    name: 'Saturn Trine Uranus',
    frequency: 'Occurs every 13-15 years',
    duration: '4-8 months',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Uranus represents change, innovation, freedom, rebellion, awakening, and breakthrough. It disrupts the status quo and demands authenticity and liberation.',
    aspectMeaning: 'The trine harmonizes Saturn\'s structure with Uranus\'s innovation, making change feel natural and productive. This is the ideal time to implement reforms, modernize systems, and build something new that lasts. Breakthroughs happen through disciplined effort.',
    loveRelationships: 'Relationship finds perfect balance between commitment and freedom. You can make lasting changes that honor both security and authenticity. Unconventional relationships stabilize or traditional ones successfully incorporate more independence. Easy progress.',
    familyHome: 'Home improvements or moves happen smoothly. Family embraces positive changes without drama. You can modernize your living space or family dynamics in practical ways. Elder and younger generations understand each other and find common ground.',
    businessCareer: 'Career innovations succeed because you build them on solid foundation. Employers support your progressive ideas. Perfect time to start business, launch product, or restructure operations. Authority figures mentor your growth. Promotions through innovation.',
    moneyFinances: 'Financial experimentation pays off. New investment strategies work because you\'ve done homework. Technology increases income in practical ways. You can save money through innovative efficiency or earn through modern methods while maintaining stability.',
    predictions: [
      'Your innovative idea gets green light from authority or investor',
      'Perfect opportunity to modernize outdated system with support from above',
      'Technology upgrade that actually makes your life easier and more efficient',
      'Successful launch of business or project combining your experience with new methods',
      'Authority figure surprises you by supporting your unconventional approach',
      'Relationship improves by giving each other more freedom within commitment',
      'Home renovation or move that happens smoothly and improves your life',
      'Financial windfall through combining traditional work with modern technology',
      'You will mentor someone younger or learn from elder in mutually beneficial way',
      'Build something lasting that also breaks new ground in your field'
    ]
  },

  'Saturn-Uranus-Square': {
    name: 'Saturn Square Uranus',
    frequency: 'Occurs every 20-22 years',
    duration: '6-10 months',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Uranus represents change, innovation, freedom, rebellion, awakening, and breakthrough. It disrupts the status quo and demands authenticity and liberation.',
    aspectMeaning: 'The square creates friction between Saturn\'s rules and Uranus\'s rebellion, forcing difficult choices and uncomfortable growth. Established structures resist necessary change. This aspect demands you work hard to break through limitations and build new systems despite obstacles.',
    loveRelationships: 'Relationship strain between security needs and freedom desires. You may feel trapped by commitments or anxious about lack of structure. Partner resists changes you need or pushes changes you fear. Growth requires uncomfortable conversations and compromises neither wants to make.',
    familyHome: 'Family responsibilities conflict with personal need for change. You want to move but family obligations keep you stuck, or vice versa. Home repairs or changes cost more and take longer than planned. Generational clashes require patience and persistence.',
    businessCareer: 'Career frustration as innovation meets bureaucracy. Your progressive ideas get blocked by rigid systems. You must work harder to prove unconventional methods work. Authority figures resist your approach. Persistence and strategy required to make progress.',
    moneyFinances: 'Financial pressure to change but limited resources to do so. Unexpected expenses drain savings meant for new ventures. Must find creative ways to fund innovation while meeting existing obligations. Budgeting and discipline required during transition.',
    predictions: [
      'Your boss or client resists the innovation you know is necessary',
      'Unexpected bill arrives right when you planned to invest in change',
      'Relationship argument about commitment level or lack of freedom',
      'Technology breaks down at worst possible time, forcing expensive upgrade',
      'You feel trapped by responsibility but breaking free seems too risky',
      'Three steps forward, two steps back as you push against resistance',
      'Someone older or in authority blocks your progress, requiring strategic workaround',
      'You will have to work twice as hard to prove your unconventional approach works',
      'Home or family situation prevents desired change, creating frustration',
      'Breakthrough comes after sustained effort and multiple setbacks - don\'t give up'
    ]
  },

  'Saturn-Uranus-Sextile': {
    name: 'Saturn Sextile Uranus',
    frequency: 'Occurs every 13-15 years',
    duration: '4-8 months',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Uranus represents change, innovation, freedom, rebellion, awakening, and breakthrough. It disrupts the status quo and demands authenticity and liberation.',
    aspectMeaning: 'The sextile offers opportunities to blend structure with innovation if you actively pursue them. This aspect won\'t force change but makes it easier if you take initiative. Small consistent reforms lead to significant long-term improvements.',
    loveRelationships: 'Opportunity to improve relationship through small but meaningful changes. If you speak up about needs, partner will likely be receptive. Good time to try new activities together while honoring commitment. Progress requires initiative but flows smoothly once started.',
    familyHome: 'Home improvements or family changes go smoothly if you initiate them. Family members open to reasonable modifications. Good time to update home systems, rearrange furniture, or gradually shift family dynamics. Take action on ideas.',
    businessCareer: 'Career opportunities arise if you propose innovations to superiors. Your ideas get considered seriously if you present them professionally. Good time to update skills, try new approaches, or suggest improvements. Initiative rewarded.',
    moneyFinances: 'Financial opportunities through modernizing your approach. If you research new investment strategies or income streams, you\'ll find viable options. Technology can improve earnings if you put in effort to learn it. Opportunities won\'t force themselves on you.',
    predictions: [
      'Boss asks for your input on improving systems - speak up!',
      'Chance to learn new technology or skill that future-proofs your career',
      'Relationship conversation about needs goes better than expected',
      'Home improvement project you\'ve been considering gets easier to execute',
      'Networking opportunity with someone who bridges traditional and innovative worlds',
      'Small change you implement now prevents bigger problems later',
      'Financial advisor or article shows you practical way to modernize investments',
      'You will find middle ground between security and change if you look for it',
      'Authority figure more receptive to your ideas than you thought - try asking',
      'Steady progress through consistent small innovations rather than dramatic leaps'
    ]
  },

  // ============================================================================
  // JUPITER - SATURN ASPECTS
  // ============================================================================

  'Jupiter-Saturn-Conjunction': {
    name: 'Jupiter Conjunction Saturn',
    frequency: 'Occurs approximately every 20 years',
    duration: '3-6 months',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, abundance, wisdom, beliefs, and opportunities. It encourages us to reach higher, learn more, and embrace possibilities.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and maturity. It asks us to build, commit, work hard, and accept reality.',
    aspectMeaning: 'The conjunction merges Jupiter\'s optimism with Saturn\'s realism, creating opportunities to build something significant that lasts. This is a "start of a new 20-year cycle" energy where your biggest ambitions can manifest through dedicated effort. Dream big but build carefully.',
    loveRelationships: 'Relationship reaches significant milestone - engagement, marriage, moving in together, or serious commitment talk. Love becomes more real and grounded. If single, you attract serious partners interested in long-term potential, not casual flings. Relationships that lack foundation will end.',
    familyHome: 'Major family milestone or responsibility. Marriage, birth, buying home, caring for aging parent. Family structure solidifies in important ways. You build lasting family traditions or take on significant family role. Sacrifices made for family pay long-term dividends.',
    businessCareer: 'Career breakthrough through hard work paying off. Promotion, business launch, major achievement, or recognition for sustained effort. Your ambitions align with reality - what you can actually accomplish. Build empire one brick at a time. Authority recognizes your potential.',
    moneyFinances: 'Major financial milestone through disciplined planning. Down payment saved, debt paid off, investment portfolio established, retirement planning begins. Growth happens through wisdom, not luck. Building wealth that lasts requires patience now but succeeds.',
    predictions: [
      'Job promotion or business launch after years of preparation',
      'Engagement or marriage after realistic assessment of compatibility',
      'Down payment finally saved for house purchase',
      'Major certification or degree completed opening career doors',
      'Mentor or authority figure offers opportunity requiring serious commitment',
      'Business plan gets approved by investor or bank',
      'You will set realistic 5-10 year goal and actually begin building toward it',
      'Family responsibility accepted that matures you significantly',
      'Financial advisor helps you create concrete long-term wealth plan',
      'Dream becomes achievable goal through strategic planning and consistent effort'
    ]
  },

  'Jupiter-Saturn-Opposition': {
    name: 'Jupiter Opposition Saturn',
    frequency: 'Occurs approximately every 10 years during 20-year cycle',
    duration: '3-6 months',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, abundance, wisdom, beliefs, and opportunities. It encourages us to reach higher, learn more, and embrace possibilities.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and maturity. It asks us to build, commit, work hard, and accept reality.',
    aspectMeaning: 'The opposition creates tension between Jupiter\'s optimism and Saturn\'s realism, between expansion and limitation. You feel pulled between opportunity and responsibility, growth and security. External reality tests your beliefs and ambitions, forcing mature choices.',
    loveRelationships: 'Relationship at crossroads between growth together or growing apart. One partner wants more (commitment, kids, adventure) while other feels burdened or cautious. Beliefs about future clash with current reality. Must find balance between hope and realism about relationship.',
    familyHome: 'Family obligations limit personal growth opportunities or vice versa. Want to travel/study/expand but family needs you home. Or want stability but family circumstances force change. Generations clash over values and beliefs. Reality check on family ideals.',
    businessCareer: 'Career frustration as ambitions hit practical limitations. Want promotion but company structure blocks you. Big opportunity requires sacrifice of security. Authority figure dampens your enthusiasm or timing is wrong for expansion. Patience and realism required.',
    moneyFinances: 'Financial tension between spending for opportunity and saving for security. Want to invest in growth but obligations demand caution. Big expense conflicts with savings goals. Must balance optimism with realistic assessment of resources. Avoid overextending.',
    predictions: [
      'Boss says "not yet" to promotion you feel ready for',
      'Partner wants to make big purchase while you want to save money',
      'Opportunity arises but timing conflicts with other responsibilities',
      'Your optimistic plan meets harsh reality check from authority or expert',
      'Want to quit job and travel but bills won\'t let you',
      'Belief system or philosophy tested by real-world consequences',
      'You will have to choose between exciting opportunity and secure stability',
      'Family elder\'s conservative advice conflicts with your growth vision',
      'Loan denied or investor says no, forcing you to scale back ambitions',
      'Integration point - finding realistic path to growth that honors both expansion and responsibility'
    ]
  },

  'Jupiter-Saturn-Trine': {
    name: 'Jupiter Trine Saturn',
    frequency: 'Occurs multiple times during 20-year cycle',
    duration: '2-4 months',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, abundance, wisdom, beliefs, and opportunities. It encourages us to reach higher, learn more, and embrace possibilities.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and maturity. It asks us to build, commit, work hard, and accept reality.',
    aspectMeaning: 'The trine harmonizes Jupiter\'s vision with Saturn\'s discipline, making ambitious goals achievable through steady effort. This is the "success through merit" aspect where hard work meets opportunity. Build your dreams on solid foundation. Optimism guided by wisdom.',
    loveRelationships: 'Relationship grows steadily in healthy direction. Commitment deepens naturally without pressure. Shared goals and values align. If single, you attract quality partners who are both fun and responsible. Easy progress toward relationship milestones. Mature love flourishes.',
    familyHome: 'Family growth and expansion through wise planning. Successful home purchase, addition to family, or move that improves life. Family supports your ambitions and you honor family responsibilities. Multigenerational harmony and mutual support.',
    businessCareer: 'Career success through competence and reliability. Promotions earned through proven track record. Business grows sustainably. Authority figures mentor and support you. Your ambition is matched by your skill and work ethic. Recognition and reward.',
    moneyFinances: 'Financial growth through wise investments and disciplined saving. Raises, bonuses, or profitable ventures based on your proven value. Money comes through legitimate effort and smart planning. Building wealth that lasts. Financial maturity pays off.',
    predictions: [
      'Promotion or raise based on proven track record and skill',
      'Successful home purchase at good price after patient searching',
      'Business grows profitably through word-of-mouth and reputation',
      'Education or certification completed that immediately improves career prospects',
      'Mentor introduces you to opportunity perfectly suited to your skills',
      'Investment strategy pays off because you did thorough research',
      'Relationship milestone reached through mutual growth and compatibility',
      'Authority figure recommends you for prestigious position or opportunity',
      'You will achieve goal through steady consistent effort without drama',
      'Financial security grows as ambition and responsibility work together'
    ]
  },

  'Jupiter-Saturn-Square': {
    name: 'Jupiter Square Saturn',
    frequency: 'Occurs multiple times during 20-year cycle',
    duration: '3-5 months',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, abundance, wisdom, beliefs, and opportunities. It encourages us to reach higher, learn more, and embrace possibilities.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and maturity. It asks us to build, commit, work hard, and accept reality.',
    aspectMeaning: 'The square creates friction between Jupiter\'s expansion and Saturn\'s contraction, between hope and fear. Growth requires overcoming obstacles and self-doubt. Your ambitions face tests and delays that ultimately strengthen them if you persist. Success requires working harder than expected.',
    loveRelationships: 'Relationship growth blocked by fears or practical obstacles. Want to move forward but timing or circumstances create delays. One partner optimistic while other is pessimistic. Must work through doubts and limitations to reach next level. Patience and effort required.',
    familyHome: 'Family responsibilities limit personal growth or cost more than expected. Home purchase delayed by finances or logistics. Family doesn\'t support your ambitions or their needs conflict with your goals. Perseverance required to balance family and growth.',
    businessCareer: 'Career ambitions meet frustrating obstacles. Qualified but overlooked for promotion. Business grows slower than hoped. Authority figures skeptical of your abilities. Must prove yourself repeatedly. Success delayed but not denied if you keep pushing.',
    moneyFinances: 'Financial goals harder to reach than anticipated. Expenses exceed projections or income growth slower than needed. Must budget tighter and work harder for desired prosperity. Avoid get-rich-quick schemes. Legitimate wealth requires more time and effort.',
    predictions: [
      'Qualified for promotion but someone else gets it - stay persistent',
      'Business grows slower than projected, requiring budget adjustments',
      'Education takes longer or costs more than planned - finish anyway',
      'Loan application denied, forcing you to save longer or improve credit',
      'Partner doubts your big plans, creating relationship friction',
      'Authority figure criticizes your work, damaging confidence temporarily',
      'You will question if your dreams are realistic - they are, keep going',
      'Extra obstacle appears right before breakthrough - final test',
      'Must work two jobs or double shifts to fund your growth',
      'Success comes but later and harder than expected - builds character and competence'
    ]
  },

  'Jupiter-Saturn-Sextile': {
    name: 'Jupiter Sextile Saturn',
    frequency: 'Occurs multiple times during 20-year cycle',
    duration: '2-4 months',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, abundance, wisdom, beliefs, and opportunities. It encourages us to reach higher, learn more, and embrace possibilities.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and maturity. It asks us to build, commit, work hard, and accept reality.',
    aspectMeaning: 'The sextile offers opportunities to grow through disciplined effort if you take initiative. This aspect supports your goals but won\'t do the work for you. Doors open if you knock. Your optimism can manifest into reality through concrete action and planning.',
    loveRelationships: 'Opportunity to strengthen relationship through shared goals and planning. If you initiate conversations about future, partner responds well. Good time to take practical steps toward commitment if you want it. Progress possible but requires effort from you.',
    familyHome: 'Home improvement or family plans succeed if you act on them. Family supportive if you ask for help. Good time to plan moves, renovations, or family events. Resources available but you must organize and execute. Take initiative.',
    businessCareer: 'Career opportunities available if you apply yourself. Trainings, networking events, or job openings favor you if you pursue them. Bosses receptive to your proposals if you present them well. Success through preparation and follow-through.',
    moneyFinances: 'Financial opportunities through combining optimism with planning. Good time to meet with financial advisor, research investments, or ask for raise. Profitable ventures possible if you do homework. Money flows to those who prepare and act.',
    predictions: [
      'Networking event connects you with mentor or opportunity - attend it',
      'Job posting perfectly matches your skills - apply even if you doubt yourself',
      'Partner open to discussing big life plans if you initiate conversation',
      'Home you can afford comes on market - act quickly',
      'Boss asks for your input on project - volunteer your ideas',
      'Financial advisor offers strategy that makes sense - implement it',
      'You will find that door is unlocked if you just try the handle',
      'Education or skill training available at right time - enroll',
      'Small consistent effort compounds into significant gain over this period',
      'Opportunity won\'t chase you but is available if you reach for it'
    ]
  },

  // ============================================================================
  // MARS - JUPITER ASPECTS
  // ============================================================================

  'Mars-Jupiter-Conjunction': {
    name: 'Mars Conjunction Jupiter',
    frequency: 'Occurs approximately every 2 years',
    duration: '1-2 weeks',
    planet1Energy: 'Mars represents action, drive, passion, assertiveness, courage, anger, and physical energy. It pushes us to take initiative, compete, fight for what we want, and assert our will.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, abundance, wisdom, beliefs, and opportunities. It encourages us to reach higher, learn more, and embrace possibilities.',
    aspectMeaning: 'The conjunction amplifies both action and optimism, creating powerful momentum for pursuing goals. This is "lucky action" energy where courage meets opportunity. Your initiatives succeed and risks pay off. Confidence and energy run high. Go after what you want boldly.',
    loveRelationships: 'Passionate pursuit of romance succeeds. Confident approach attracts partners. Existing relationship heats up with adventure and enthusiasm. Bold declarations of love or taking relationship to next level. Sexual confidence and generosity. Fun and excitement.',
    familyHome: 'Energetic family activities or successful home projects. Renovations happen quickly and turn out well. Family adventures and travel. Active, fun time with children. Moving or relocating happens smoothly. High energy at home in positive way.',
    businessCareer: 'Career breakthroughs through bold action. Successful job search, product launch, or business expansion. Your enthusiasm is contagious and persuasive. Sales success. Promotions through demonstrating initiative. Taking calculated risks pays off handsomely.',
    moneyFinances: 'Financial windfalls through active pursuit. Successful negotiations, sales commissions, bonuses for performance. Investments you actively research pay off. Gambling or speculation more likely to succeed now. Generous with money but it comes back multiplied.',
    predictions: [
      'Job interview where your confidence wins them over immediately',
      'Bold ask for raise or promotion is granted',
      'You make first move romantically and it goes perfectly',
      'Business deal closes faster and better than expected',
      'Athletic competition or physical challenge where you excel',
      'Travel opportunity or adventure that exceeds expectations',
      'Sales pitch or presentation that convinces audience enthusiastically',
      'Risk you take pays off bigger than anticipated',
      'You will feel unstoppable energy and confidence - use it!',
      'Lucky break comes from taking decisive action at right moment'
    ]
  },

  'Mars-Jupiter-Opposition': {
    name: 'Mars Opposition Jupiter',
    frequency: 'Occurs once during 2-year cycle',
    duration: '1-2 weeks',
    planet1Energy: 'Mars represents action, drive, passion, assertiveness, courage, anger, and physical energy. It pushes us to take initiative, compete, fight for what we want, and assert our will.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, abundance, wisdom, beliefs, and opportunities. It encourages us to reach higher, learn more, and embrace possibilities.',
    aspectMeaning: 'The opposition creates tension between action and excess, between courage and overconfidence. You may push too hard or want too much too fast. External reality checks your aggression or overreach. Moderation and wisdom must temper your drive.',
    loveRelationships: 'Relationship conflicts from excessive demands or unrealistic expectations. One partner pushes too hard while other resists. Sexual appetites mismatched. Arguments over different activity levels or adventure needs. Tone down the aggression and listen more.',
    familyHome: 'Family tensions from restlessness or overactivity. Arguments escalate quickly. Home projects bigger and more expensive than planned. Impulsive decisions about moving or renovating backfire. Slow down and consider consequences before acting.',
    businessCareer: 'Career conflicts from overreaching or arrogance. Promising too much or taking on more than you can handle. Boss or client frustrated by your overconfidence. Competitors push back. Rein in the ego and deliver more than you promise.',
    moneyFinances: 'Financial overextension through overspending or risky investments. Overconfidence in deals or negotiations. Gambling losses. Generous but broke. Legal issues from aggressive business tactics. Exercise restraint and strategic thinking over impulse.',
    predictions: [
      'Argument with partner because you pushed too hard or demanded too much',
      'Overpromise on deadline and then can\'t deliver',
      'Impulse purchase you regret when credit card bill arrives',
      'Overconfident in competition and lose to someone you underestimated',
      'Legal trouble or penalty from being too aggressive in business',
      'Work out too hard and injure yourself',
      'Big talk that others challenge you to back up',
      'Travel plans disrupted by not checking details carefully',
      'You will learn the difference between confidence and overconfidence',
      'Moderation and strategy succeed where aggression and excess fail'
    ]
  },

  'Mars-Jupiter-Trine': {
    name: 'Mars Trine Jupiter',
    frequency: 'Occurs twice during 2-year cycle',
    duration: '1 week',
    planet1Energy: 'Mars represents action, drive, passion, assertiveness, courage, anger, and physical energy. It pushes us to take initiative, compete, fight for what we want, and assert our will.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, abundance, wisdom, beliefs, and opportunities. It encourages us to reach higher, learn more, and embrace possibilities.',
    aspectMeaning: 'The trine harmonizes action with opportunity, creating "effortless success" energy. What you initiate flows smoothly toward victory. Courage meets good timing. This is a "can\'t lose" period where confidence is justified and risks pay off. Act boldly with wisdom.',
    loveRelationships: 'Romance flows effortlessly. Chemistry and compatibility combine perfectly. Dates go better than planned. Sexual connection fantastic. If single, attractive partners approach you. Easy time strengthening bonds through shared adventures and enthusiasm.',
    familyHome: 'Family activities fun and successful. Home projects completed ahead of schedule and under budget. Moving or relocating goes smoothly. Great time for family travel or celebration. Everyone energetic and getting along well.',
    businessCareer: 'Career wins through enthusiastic action. Job offers, successful presentations, smooth negotiations. Right place right time for opportunities. Your initiative impresses superiors. Projects succeed beyond expectations. Natural leadership recognized.',
    moneyFinances: 'Financial gains through confident action. Successful investments, sales bonuses, profitable ventures. Money comes from doing what you love. Generous giving returns multiplied. Perfect time for negotiating raise or starting business.',
    predictions: [
      'Job opportunity lands in your lap with better terms than you asked for',
      'Romantic pursuit succeeds easily - they\'re as into you as you are them',
      'Business pitch goes so well they expand the offer',
      'Athletic or competitive success that feels natural and fun',
      'Travel experience that exceeds all expectations',
      'Investment or business deal pays off quickly and well',
      'You will win contest, game, or competition you enter',
      'Physical energy high - great time to start fitness routine that sticks',
      'Mentor or sponsor believes in you and opens doors',
      'Everything you touch seems to turn to gold this week - maximize it!'
    ]
  },

  'Mars-Jupiter-Square': {
    name: 'Mars Square Jupiter',
    frequency: 'Occurs twice during 2-year cycle',
    duration: '1 week',
    planet1Energy: 'Mars represents action, drive, passion, assertiveness, courage, anger, and physical energy. It pushes us to take initiative, compete, fight for what we want, and assert our will.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, abundance, wisdom, beliefs, and opportunities. It encourages us to reach higher, learn more, and embrace possibilities.',
    aspectMeaning: 'The square creates friction between action and judgment, between aggression and excess. Opportunities tempt you to overextend. Confidence becomes arrogance. You push too hard, want too much, or act without thinking. Growth requires learning restraint and strategy.',
    loveRelationships: 'Relationship friction from being too pushy or insensitive. Sexual aggression that doesn\'t match partner\'s mood. Saying too much in anger. Planning adventures without consulting partner. Back off and be more considerate.',
    familyHome: 'Home conflicts from impulsive decisions or excessive projects. Starting renovations without proper planning. Family arguments escalating unnecessarily. Children overstimulated. Rushing when patience needed. Slow down.',
    businessCareer: 'Career setbacks from overconfidence or aggression. Promising more than you can deliver. Alienating colleagues with competitiveness. Taking shortcuts that backfire. Respect process and other people. Strategic patience beats aggressive rushing.',
    moneyFinances: 'Financial losses from impulsive risks or overspending. Bad bets, risky investments without research, or generous spending you can\'t afford. Expensive mistakes from not reading fine print. Think before acting with money.',
    predictions: [
      'Impulsive investment or purchase you regret within days',
      'Overconfident in negotiation and lose deal',
      'Argument at work from being too aggressive or arrogant',
      'Speeding ticket or accident from driving too fast',
      'Gym injury from lifting too much too soon',
      'Date goes badly because you talked too much about yourself',
      'Business expansion that costs more than projected',
      'Legal issue from not following proper procedures',
      'You will learn that more and faster isn\'t always better',
      'Success comes from tempering enthusiasm with wisdom and patience'
    ]
  },

  'Mars-Jupiter-Sextile': {
    name: 'Mars Sextile Jupiter',
    frequency: 'Occurs twice during 2-year cycle',
    duration: '1 week',
    planet1Energy: 'Mars represents action, drive, passion, assertiveness, courage, anger, and physical energy. It pushes us to take initiative, compete, fight for what we want, and assert our will.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, abundance, wisdom, beliefs, and opportunities. It encourages us to reach higher, learn more, and embrace possibilities.',
    aspectMeaning: 'The sextile offers opportunities for successful action if you take initiative. Doors open to those who knock boldly. This aspect supports your efforts but requires you to make the first move. Confidence combined with follow-through brings rewards.',
    loveRelationships: 'Romantic opportunities if you put yourself out there. Good results from asking someone out or planning adventurous date. Partner receptive to your initiatives. Take action on attraction - don\'t just hope.',
    familyHome: 'Home improvements succeed if you start them. Family activities go well if you organize them. Good time for house hunting or minor renovations. Energy available but you must channel it productively.',
    businessCareer: 'Career advancement through proactive effort. Apply for jobs, propose projects, volunteer for challenges. Your initiative gets noticed and rewarded. Network, pitch, present - action brings opportunity.',
    moneyFinances: 'Financial gains through active pursuit. Research investments and act on good ones. Ask for raise. Pursue sales leads. Money comes to those who work for it confidently this week.',
    predictions: [
      'Resume you submit gets interview - make sure you apply',
      'Date you suggest goes really well',
      'Workout routine you start feels great and sustainable',
      'Business contact you reach out to responds positively',
      'Home project you begin completes easily',
      'Negotiation succeeds if you ask confidently',
      'You will find that taking initiative pays off quickly',
      'Travel opportunity if you book it',
      'Team or project you volunteer for boosts your reputation',
      'Small bold actions lead to surprisingly good results'
    ]
  },

  // ============================================================================
  // SATURN - NEPTUNE ASPECTS (Sample)
  // ============================================================================

  'Saturn-Neptune-Conjunction': {
    name: 'Saturn Conjunction Neptune',
    frequency: 'Occurs approximately every 36 years',
    duration: '8-12 months',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Neptune represents dreams, spirituality, imagination, compassion, illusion, transcendence, and dissolution of boundaries. It connects us to the infinite and the mystical.',
    aspectMeaning: 'The conjunction merges Saturn\'s structure with Neptune\'s dissolution, creating opportunities to manifest dreams into reality or watch illusions crumble into harsh reality. This rare aspect asks you to build something spiritual, make dreams practical, or face where fantasy has replaced responsibility. Spiritual discipline, creative manifestation, or disillusionment equally possible.',
    loveRelationships: 'Relationship fantasies meet reality check, or spiritual connection deepens into committed partnership. You may finally commit to soulmate relationship or realize "perfect partner" was illusion. Unconditional love requires boundaries. Compassion needs structure. Some relationships become more spiritual and committed, others dissolve as illusions fade. True love vs. fantasy love becomes clear.',
    familyHome: 'Family ideals and harsh realities must integrate. You may care for ill or aging family member (Saturn duty meets Neptune compassion), or family secrets and addictions come to light requiring structured intervention. Home becomes spiritual sanctuary through disciplined practice. Or home illusions crumble requiring practical rebuilding. Compassionate responsibility toward family.',
    businessCareer: 'Career path integrates spiritual values with material responsibility. Ideal for work in healing, arts, spirituality, or helping professions if you build sustainable structure. Dreams of creative or spiritual career must become practical plans or remain fantasies. Some experience disillusionment with career and rebuild on more authentic foundation. Manifesting vision requires discipline.',
    moneyFinances: 'Financial dreams require realistic planning and hard work to manifest. Investment illusions or financial deception possible - verify everything. Or spiritual approach to money (tithing, ethical investing, generosity) becomes structured practice. Some lose money through fantasy or lack of boundaries. Others build wealth through disciplined pursuit of inspired vision. Reality check on finances.',
    predictions: [
      'Dream or vision you\'ve had for years either manifests through disciplined work or proves to be unrealistic',
      'Spiritual practice becomes daily disciplined routine rather than occasional escape',
      'Relationship partner reveals they\'re not who you thought - illusion dissolves',
      'Creative or artistic project requires more structure and hard work than you imagined',
      'Family member\'s addiction or illness requires your compassionate but boundaried support',
      'Financial opportunity that seems too good to be true probably is - verify thoroughly',
      'You will build something beautiful and transcendent through patient, persistent effort',
      'Compassion fatigue teaches you that helping others requires protecting yourself',
      'Career disillusionment leads to rebuilding work life on more authentic spiritual values',
      'Integration point between idealism and realism - you learn to dream practically'
    ]
  },

  'Saturn-Neptune-Opposition': {
    name: 'Saturn Opposition Neptune',
    frequency: 'Occurs approximately once per 36-year cycle',
    duration: '8-12 months',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Neptune represents dreams, spirituality, imagination, compassion, illusion, transcendence, and dissolution of boundaries. It connects us to the infinite and the mystical.',
    aspectMeaning: 'The opposition creates tension between Saturn\'s demand for structure and Neptune\'s call to transcend boundaries. Reality vs. fantasy, responsibility vs. escape, discipline vs. surrender - these polarities reach maximum tension. This aspect forces you to choose: ground your dreams in reality or watch them dissolve, face harsh truths or stay in denial. Integration requires honoring both material limits and spiritual vision.',
    loveRelationships: 'Relationship pulled between practical commitment (Saturn) and romantic idealism (Neptune). Partner may represent one pole while you embody the other - one wants commitment, other wants freedom; one is practical, other is dreamy. Projection and disillusionment possible. Or you\'re torn between staying in stable-but-uninspiring relationship vs. leaving for fantasy that may not be real. Integration means committed love that also honors spiritual connection.',
    familyHome: 'Family responsibilities (Saturn) conflict with desire for escape or spiritual retreat (Neptune). Aging parents need care when you need personal freedom. Home repairs demand money you wanted for creative pursuits. Family secrets or addictions can no longer be ignored - reality must be faced. Balancing duty to family with your own spiritual or creative needs becomes critical. Neither extreme works - find middle ground.',
    businessCareer: 'Career tension between practical security (Saturn) and creative/spiritual calling (Neptune). Stable job feels soul-crushing, but pursuing dreams feels financially irresponsible. Work environment may expose deception or illusion that must be confronted. Or authority figures demand you abandon idealism for "realism." Success requires building sustainable structure that also serves your vision - neither pure pragmatism nor pure idealism works.',
    moneyFinances: 'Financial reality check reveals where you\'ve been in denial or fantasy. Investments based on hope rather than research fail. Or fear of loss (Saturn) prevents you from trusting financial flow (Neptune). Extreme caution vs. blind faith - you must find balance. Verify all financial information thoroughly. Budget realistically while still giving to causes you believe in. Spiritual values and practical finances must both be honored.',
    predictions: [
      'Dream you\'ve been pursuing reveals its impracticality - you must revise or release it',
      'Authority figure or reality situation forces you to face what you\'ve been denying',
      'Relationship reaches crisis point between commitment and freedom - choose integration',
      'Financial loss teaches you to verify information and maintain healthy skepticism',
      'Family duty conflicts with personal spiritual path - you must honor both somehow',
      'Career disillusionment peak - neither selling out nor starving artist works, find balance',
      'Addiction or escapism pattern can no longer be avoided - get help and build structure',
      'Creative or spiritual project needs business plan and budget or it won\'t survive',
      'You will learn to dream with your eyes open - vision grounded in reality',
      'Integration of practical responsibility with compassionate idealism becomes your work'
    ]
  },

  'Saturn-Neptune-Trine': {
    name: 'Saturn Trine Neptune',
    frequency: 'Occurs approximately twice per 36-year cycle',
    duration: '6-10 months',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Neptune represents dreams, spirituality, imagination, compassion, illusion, transcendence, and dissolution of boundaries. It connects us to the infinite and the mystical.',
    aspectMeaning: 'The trine creates harmonious flow between structure and spirit, making it easier to manifest dreams into reality through disciplined work. This is the aspect of practical mysticism - building cathedrals, creating inspired art through craft mastery, or serving compassionately within sustainable systems. Dreams become achievable goals. Spiritual insights translate into tangible work. Ideal time for bringing vision into form.',
    loveRelationships: 'Relationships deepen through both spiritual connection and practical commitment. You can be both romantic and realistic, honoring the transcendent bond while handling daily life together responsibly. Soulmate connections gain structure and longevity. Compassion becomes sustainable through healthy boundaries. Unconditional love expressed through consistent actions. Ideal time for spiritual partnership that also handles bills and responsibilities.',
    familyHome: 'Family responsibilities handled with compassion and wisdom. Caring for aging or ill family members feels meaningful rather than burdensome. Home becomes spiritual sanctuary through disciplined practice - meditation room gets built, creative space gets organized. Family healing through structured therapy or spiritual practice. Practical steps toward family dreams succeed. Home improvements that create beauty and peace.',
    businessCareer: 'Excellent period for work combining spiritual values with material success. Creative or healing professions thrive if you build sustainable business structure. Artistic vision manifests through patient craftsmanship. Spiritual or service work generates income through wise business practices. Mentor may help you structure your gifts into viable career. Dreams become practical plans that actually work.',
    moneyFinances: 'Financial planning grounded in values and vision succeeds. Ethical investments prove wise. Money earned through work you believe in flows more easily. Financial discipline doesn\'t require sacrificing what matters - you find budget that supports both security and soul. Generosity and savings both possible. Building wealth while honoring spiritual values works now. Financial dreams manifest through realistic planning.',
    predictions: [
      'Creative or spiritual project you\'ve been working on patiently finally comes together beautifully',
      'Career combines your ideals with practical success - doing well by doing good',
      'Relationship commitment deepens through both romantic connection and mature partnership',
      'Financial plan that honors both security and generosity creates peace and prosperity',
      'Artistic work reaches new level through dedicated practice and skill refinement',
      'Spiritual practice becomes integrated daily routine rather than special occasional activity',
      'You will build something that serves others while also sustaining you',
      'Mentor or guide helps you structure your vision into achievable steps',
      'Family situation improves through compassionate but boundaried approach',
      'Integration of idealism and realism makes your dreams actually achievable'
    ]
  },

  'Saturn-Neptune-Square': {
    name: 'Saturn Square Neptune',
    frequency: 'Occurs approximately twice per 36-year cycle',
    duration: '7-11 months',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Neptune represents dreams, spirituality, imagination, compassion, illusion, transcendence, and dissolution of boundaries. It connects us to the infinite and the mystical.',
    aspectMeaning: 'The square creates friction between reality and idealism, forcing growth through confronting where dreams meet limits. Saturn says "work within reality" while Neptune says "transcend limitations" - this conflict demands you mature both your vision and your discipline. Illusions crumble, but refined dreams become achievable. Practical challenges force spiritual growth. Spiritual insights require practical application or they remain useless fantasies.',
    loveRelationships: 'Relationship fantasies challenged by reality - you must love the real person, not your projection. Disappointment possible when partner shows human limitations. Or your idealism feels crushed by relationship\'s practical demands - bills, chores, compromises. Crisis pushes you to develop mature love that embraces both spiritual connection and human imperfection. Neither fantasy nor cynicism - realistic devotion. Love grows up.',
    familyHome: 'Family illusions or secrets can no longer be maintained - reality intrudes. Idealized family image meets actual family dysfunction. Caring for family members tests your compassion with real limits on time, money, energy. Home repairs reveal more problems than expected. You must develop compassionate responsibility - helping family while protecting yourself. Fantasy family vs. real family reconciliation required.',
    businessCareer: 'Career ideals tested by practical obstacles and limitations. Dream job isn\'t what you imagined, or path to creative career proves harder than expected. Authority figures may seem to block your vision, but they may be pushing you to make it more realistic. Work situation exposes where you\'ve been naive or impractical. Success requires refining vision to match reality while not abandoning core values. Mature your dreams.',
    moneyFinances: 'Financial reality check forces you to budget and plan rather than hope and wish. "The universe will provide" meets "you need to pay rent." Investment losses possible if you\'ve been in denial. Or fear blocks you from wise opportunities. Neither blind faith nor paralyzed fear - you must develop realistic financial planning that also trusts the process. Money anxiety pushes spiritual and practical growth simultaneously.',
    predictions: [
      'Dream reveals its flaws and limitations - you must revise it to make it actually achievable',
      'Relationship partner disappoints your fantasy but offers real human love if you can accept it',
      'Financial wake-up call forces you to create real budget and verify all information',
      'Creative project seems impossible until you break it into realistic practical steps',
      'Family situation requires you to help compassionately while maintaining firm boundaries',
      'Career setback teaches you to build stronger foundation under your dreams',
      'Spiritual belief tested by harsh reality - your faith must mature beyond naive idealism',
      'You will learn to work patiently within limitations while still holding vision',
      'Addiction or escapism pattern creates crisis that forces you to get real help',
      'Integration crisis - you must develop realistic idealism and visionary pragmatism'
    ]
  },

  'Saturn-Neptune-Sextile': {
    name: 'Saturn Sextile Neptune',
    frequency: 'Occurs approximately twice per 36-year cycle',
    duration: '5-8 months',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Neptune represents dreams, spirituality, imagination, compassion, illusion, transcendence, and dissolution of boundaries. It connects us to the infinite and the mystical.',
    aspectMeaning: 'The sextile offers opportunities to blend structure with spirituality through conscious effort. This is the aspect of making small, practical steps toward your dreams. Not automatic like the trine, but supportive - you must reach for the opportunity. Perfect for starting spiritual practices with discipline, beginning creative projects methodically, or taking realistic steps toward idealistic goals. Effort now builds toward manifestation later.',
    loveRelationships: 'Opportunity to develop relationships that honor both romance and reality. Small daily acts of love and commitment strengthen spiritual bond. You can take practical steps to improve relationship while maintaining idealism - couples therapy, date night routine, shared spiritual practice. Potential for grounding fantasy into sustainable partnership if you do the work. Romantic gestures gain staying power through consistent effort.',
    familyHome: 'Opportunity to create home environment supporting spiritual and practical needs. Small improvements make home more peaceful and beautiful. Family relationships improve through structured compassion - scheduled calls, therapy appointments, boundary-setting conversations. Good time to establish meditation space, creative corner, or healing environment at home. Practical steps toward family harmony work if you take them.',
    businessCareer: 'Opportunity to integrate spiritual values into career through practical steps. Take class that helps you monetize creative gifts. Start side business doing work you believe in. Volunteer in field you want to enter. Networking in spiritual or creative communities opens doors if you follow through professionally. Dreams become job descriptions you can actually apply for. Small career moves toward meaningful work succeed.',
    moneyFinances: 'Opportunity to align finances with values through realistic planning. Start tithing or charitable giving structure. Begin ethical investment research. Create budget that funds both security and soul. Financial education in areas matching your values. Small steps toward financial dreams work - saving for retreat, funding creative project gradually, building emergency fund. Money and meaning can both be honored through effort.',
    predictions: [
      'Class or workshop helps you develop creative or spiritual gift into marketable skill',
      'Small daily spiritual practice you start now builds into transformative long-term routine',
      'Relationship improves through consistent small acts of commitment and romance',
      'Budget or financial plan you create allows you to save and donate simultaneously',
      'Home improvement project makes space more peaceful and functionally beautiful',
      'Career opportunity in meaningful work appears if you\'ve been preparing for it',
      'Mentor offers guidance on making your vision practical - you must follow through',
      'Creative project advances through disciplined regular effort even in small increments',
      'Family relationship heals through structured compassionate communication',
      'You will learn that small realistic steps toward dreams work better than giant leaps'
    ]
  },

  // ============================================================================
  // VENUS - SOUTH NODE ASPECTS (Sample)
  // ============================================================================

  'Venus-South Node-Opposition': {
    name: 'Venus Opposition South Node',
    frequency: 'Occurs twice during ~18-month nodal cycle',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful.',
    planet2Energy: 'South Node represents past patterns, comfort zone, what comes easily but may hold you back, karmic release, and what you\'re meant to move away from. It\'s familiar but limiting.',
    aspectMeaning: 'Venus opposing South Node (conjunct North Node) pulls you toward new relationship patterns, values, and sources of pleasure that align with your soul\'s growth direction. This aspect says: "Your old way of loving and what you used to value no longer serves your evolution." You\'re drawn to people, beauty, and pleasures that challenge your comfort zone and help you grow. Tension between familiar relationship patterns and destined new ones.',
    loveRelationships: 'Strong pull toward relationships that represent your growth edge, not your comfort zone. You may attract partners very different from your usual type, or existing relationship requires you to love differently than you\'re used to. Old relationship patterns feel increasingly unsatisfying. New ways of relating feel uncomfortable but right. Letting go of who you thought you needed to love in order to love who you\'re meant to love.',
    familyHome: 'Family relationship patterns you inherited no longer feel right. You may create very different family dynamics than what you grew up with, or make home in way that challenges family traditions. Releasing family values that aren\'t truly yours. Home becomes expression of authentic values, not inherited ones. Some distance from family patterns feels necessary for growth.',
    businessCareer: 'Career values shifting away from what\'s always felt safe toward what truly fulfills you. Work you\'ve always done well feels empty now. New career directions that align with authentic values call to you even if they\'re unfamiliar. Money and security can no longer be your only values - meaningful work matters more. Releasing career identity you\'ve outgrown.',
    moneyFinances: 'What you value and spend money on is changing. Old financial priorities feel shallow. You may spend less on things that used to bring pleasure, more on things aligned with growth. Releasing attachment to money and possessions as primary source of security. Finding abundance through aligning with authentic values rather than pursuing wealth for its own sake.',
    predictions: [
      'Attraction to someone very different from your usual type who challenges you to grow',
      'Relationship pattern you\'ve repeated for years suddenly feels unbearable - you change it',
      'Career opportunity that pays less but aligns with your real values becomes more appealing',
      'Possession or lifestyle you thought you valued no longer brings satisfaction',
      'Family expectation about relationships or values you can no longer pretend to share',
      'Letting go of what you thought you needed in partner to discover what you actually need',
      'Financial priority shift - investing in growth and meaning over comfort and security',
      'Artistic or aesthetic preference changes - what you find beautiful evolves',
      'You will release relationship or value system that\'s familiar but no longer authentic',
      'Growing toward new way of loving and valuing that feels destined even if uncomfortable'
    ]
  },

  // ============================================================================
  // VENUS - MARS ASPECTS
  // ============================================================================

  'Venus-Mars-Conjunction': {
    name: 'Venus Conjunction Mars',
    frequency: 'Approximately every 2 years',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful.',
    planet2Energy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    aspectMeaning: 'Venus and Mars unite, merging love with desire, attraction with pursuit, pleasure with passion. This is the classic lovers\' aspect - magnetic attraction, sexual chemistry, and the perfect blend of receptivity and assertion. Relationships heat up. Creative passion ignites. You know what you want and go after it with charm and confidence. Art meets action. Beauty seeks expression through bold creation.',
    loveRelationships: 'Peak time for romance, attraction, and sexual chemistry. Single? You\'re magnetic - attraction is mutual and electric. Pursue who you want boldly but charmingly. In relationship? Passion reignites. Physical intimacy intensifies. Perfect time to seduce your partner or be seduced. Chemistry is undeniable. New relationships starting now have strong physical component. Romance and desire beautifully balanced.',
    familyHome: 'Creative projects at home succeed beautifully. Decorating or beautifying space with energetic action works well. Family dynamics benefit from combining assertiveness with charm. Some family passion or conflict around values, money, or relationships - address it directly but diplomatically. Good time for family creative projects or active enjoyment together.',
    businessCareer: 'Excellent for work combining creativity with action - design, sales, entertainment, beauty industry, athletics, or anything requiring both artistic vision and competitive drive. Charm and assertiveness make you magnetic to clients and bosses. Perfect time to pursue what you want at work boldly. Creative passion translates into productive action.',
    moneyFinances: 'Money opportunities through combining charm with initiative. Sales, creative work, or beautification services generate income. Spending on pleasure or beauty feels right but don\'t overspend on impulse. Financial assertiveness combined with social grace succeeds. Good time to negotiate raise charmingly but firmly. Money flows through passion and creative action.',
    predictions: [
      'Powerful attraction to someone - chemistry is immediate and mutual',
      'Creative project you\'re passionate about comes together beautifully',
      'Existing relationship passion reignites through bold romantic gesture',
      'Sales, negotiation, or persuasion succeeds through charm plus confidence',
      'Purchase or indulgence brings genuine pleasure and satisfaction',
      'Artistic or creative work benefits from decisive action and energy',
      'You will pursue what you want romantically and succeed',
      'Physical chemistry and sexual attraction peak',
      'Money opportunity through creative, passionate, or beautifying work',
      'Perfect balance of giving and taking, receiving and pursuing in love'
    ]
  },

  'Venus-Mars-Opposition': {
    name: 'Venus Opposition Mars',
    frequency: 'Approximately once per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful.',
    planet2Energy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    aspectMeaning: 'Venus and Mars stand opposite, creating magnetic tension between desire and values, passion and harmony, assertion and accommodation. Attraction is strong but challenging - what you want vs. what feels good, pursuing vs. receiving. Relationships face push-pull dynamic. Creative tension is productive if balanced, exhausting if extremes. Integration requires honoring both planets.',
    loveRelationships: 'Attraction mixed with friction. Strong chemistry but different wants or values create tension. One partner wants action while other wants harmony. Sexual attraction intense but timing or approach differs. Arguments about giving vs. taking, independence vs. togetherness. This isn\'t bad - it\'s passion showing itself through contrast. Balance assertiveness with receptivity. Neither dominance nor passivity - equal partnership.',
    familyHome: 'Family conflicts about values, money, beauty, or action likely. You want to beautify home but others want different action. Money disagreements about spending on pleasure vs. other priorities. Creative vision for family meets resistance. Neither force your will nor accommodate everyone - find middle ground that honors all needs.',
    businessCareer: 'Work tension between creative vision and aggressive execution. Your artistic approach may clash with others\' direct methods, or vice versa. Sales or client work requires balancing charm with assertiveness - too much of either fails. Competition in beauty, creative, or relationship-based fields. Use tension productively - contrast creates interest.',
    moneyFinances: 'Financial tension between spending on pleasure (Venus) and investing in action or goals (Mars). Money conflicts with partner possible. Impulsive spending on beauty or pleasure vs. saving for active pursuits. Neither extreme works - budget for both pleasure and action. Financial assertiveness balanced with grace succeeds better than either alone.',
    predictions: [
      'Attraction to someone challenging - chemistry mixed with friction',
      'Relationship argument that actually increases passion if resolved well',
      'Creative project requires balancing artistic vision with decisive action',
      'Money disagreement with partner about spending priorities',
      'You must assert yourself diplomatically - neither aggressive nor passive',
      'Sexual tension or timing differences with partner require communication',
      'Competition or conflict in creative or relationship arena pushes you to improve',
      'Purchase decision between beautiful option and practical action',
      'You will learn to balance receiving and pursuing, harmony and assertion',
      'Productive tension creates better result than either approach alone would'
    ]
  },

  'Venus-Mars-Trine': {
    name: 'Venus Trine Mars',
    frequency: 'Approximately twice per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful.',
    planet2Energy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    aspectMeaning: 'Venus and Mars flow harmoniously together, creating effortless attraction, natural passion, and easy balance between giving and taking. This is grace meeting courage, beauty meeting action. Romance flows easily. Creative projects manifest smoothly. You pursue what you want charmingly. Physical energy and aesthetic sense align perfectly. Attraction is mutual and comfortable.',
    loveRelationships: 'Romance and relationships flow beautifully. Attraction is natural and reciprocated. Dating goes smoothly - you know how to pursue charmingly and receive graciously. Sexual chemistry is easy and satisfying. Giving and taking balance naturally. Perfect time for romantic dates, honest conversations, or physical intimacy. Existing relationships find renewed harmony between independence and togetherness.',
    familyHome: 'Family harmony achieved through balanced assertiveness and accommodation. Home beautification projects proceed smoothly with everyone\'s energy aligned. Creative family activities bring joy and connection. Money decisions about home improvements or family pleasures made easily. Good time for family gatherings combining beauty, pleasure, and active enjoyment.',
    businessCareer: 'Excellent flow in work combining creativity and action. Design, sales, entertainment, beauty, athletics - all succeed through natural integration of vision and execution. Charm and confidence work together to advance career. Client relationships thrive. Creative passion translates effortlessly into productive work. Perfect time to pursue career goals in artistic or people-oriented fields.',
    moneyFinances: 'Money flows through work you enjoy that also energizes you. Creative efforts, sales, beautification services, or active pursuits generate income easily. Spending on both pleasure and action feels balanced and right. Financial decisions made smoothly. Income from combining charm with initiative. Money and enjoyment align naturally.',
    predictions: [
      'Romance or date goes smoothly with natural chemistry and easy conversation',
      'Creative project flows effortlessly from vision to completion',
      'Sales, negotiation, or persuasion succeeds through natural charm and confidence',
      'Physical activity or athletic pursuit brings both pleasure and achievement',
      'Relationship finds perfect balance of passion and harmony',
      'Purchase brings genuine satisfaction without buyer\'s remorse',
      'Work project combining creativity and action succeeds beautifully',
      'You pursue what you want and it comes to you easily',
      'Sexual chemistry flows naturally and satisfies both partners',
      'Money earned through work you genuinely enjoy and feel energized by'
    ]
  },

  'Venus-Mars-Square': {
    name: 'Venus Square Mars',
    frequency: 'Approximately twice per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful.',
    planet2Energy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    aspectMeaning: 'Venus and Mars clash, creating friction between what you want and how you pursue it, between pleasure and action, harmony and assertion. Desire is strong but expression is awkward. Timing feels off. Too aggressive or too passive - finding balance is the challenge. This square forces you to mature how you pursue what you want and create what you value. Productive friction if you work with it.',
    loveRelationships: 'Attraction exists but pursuit is clumsy or timing is off. Come on too strong or not strong enough. Want romance but act aggressively, or want passion but act too accommodating. Relationship tension between what each person wants and how they\'re asking for it. Arguments about sex, money, values, or independence. Learn to assert desires without demands, to accommodate without erasing yourself.',
    familyHome: 'Family friction about money, values, beauty, or action. Disagreements about home improvements - you want beautification but family wants different action. Creative vision meets resistance or criticism. Money conflicts about pleasure spending. Neither force your will aggressively nor accommodate resentfully. Express what you want clearly but hear others too.',
    businessCareer: 'Work frustration between creative vision and execution challenges. Timing feels off. Client or boss wants different approach than what feels right to you. Sales or persuasion requires recalibrating - too pushy or too passive, find right pressure. Creative blocks from trying too hard or not trying hard enough. Success requires adjusting your approach, not abandoning your vision.',
    moneyFinances: 'Financial friction between pleasure spending and active pursuits. Impulse purchases don\'t satisfy as expected. Want to spend on beauty but angry you can\'t afford it. Earning requires more aggressive action than feels comfortable, or charm isn\'t enough without push. Budget tension about allocating money. Learn realistic financial assertiveness - neither reckless nor deprived.',
    predictions: [
      'Romantic pursuit that\'s awkward but teaches you better approach',
      'Argument with partner about sex, money, or values leads to clearer communication',
      'Purchase that seems desirable proves disappointing - teaches discernment',
      'Creative project frustrated by poor execution - requires refining your process',
      'Financial decision between pleasure and action creates tension - budget for both',
      'Sales or negotiation fails from wrong approach - too aggressive or too accommodating',
      'Attraction to someone inappropriate or poorly timed teaches you about your desires',
      'You will learn to assert what you want without aggression',
      'Work requires balancing artistic vision with practical action',
      'Relationship growth through navigating friction between independence and connection'
    ]
  },

  'Venus-Mars-Sextile': {
    name: 'Venus Sextile Mars',
    frequency: 'Approximately twice per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, beauty, pleasure, values, attraction, relationships, harmony, and what brings joy. It\'s how you love, what you value, and what you find beautiful.',
    planet2Energy: 'Mars represents action, drive, passion, assertiveness, courage, anger, physical energy, and the warrior spirit. It\'s how you pursue what you want, assert your will, and take initiative.',
    aspectMeaning: 'Venus and Mars create supportive opportunity to blend attraction with action, pleasure with pursuit. Not automatic like the trine - requires conscious effort, but rewards it. Perfect time to take initiative in romance, combine creativity with action, or pursue what brings you joy. Opportunities arise if you reach for them. Charm plus confidence opens doors.',
    loveRelationships: 'Good opportunity for romance if you take action. Make the first move, plan a special date, or express attraction directly. Chemistry is there but won\'t develop without initiative. Existing relationships improve through small efforts - romantic gesture, honest conversation, or physical affection. Sexual connection deepens if you initiate. Balance of giving and taking works if both participate.',
    familyHome: 'Opportunity to improve family harmony or home beauty through small active efforts. Start decorating project, initiate family activity, or address relationship friction directly but kindly. Money decisions about home or family made cooperatively. Good time to combine aesthetic vision with practical action at home. Works if you take the step.',
    businessCareer: 'Career opportunities in creative, people-oriented, or aesthetically focused work if you pursue them actively. Network in your field, pitch your ideas, or take initiative on projects combining creativity and action. Sales, design, entertainment, beauty fields favor action now. Charm plus confidence gets you noticed. Follow through on opportunities.',
    moneyFinances: 'Financial opportunities through combining pleasure with productivity. Side income from creative work, sales, or beautification services if you pursue it. Good time to ask for raise diplomatically but confidently. Spending on both pleasure and productive pursuits feels balanced. Small financial initiatives toward what you value pay off.',
    predictions: [
      'Romantic opportunity if you make the first move or accept invitation',
      'Creative project succeeds if you take concrete action steps',
      'Sales or networking opportunity opens if you show up and engage',
      'Small romantic gesture you initiate improves relationship significantly',
      'Purchase of something beautiful and useful brings satisfaction',
      'Initiative in creative or people-oriented work gets recognized',
      'Physical activity you enjoy also improves your health or appearance',
      'Money opportunity through work you find both pleasant and energizing',
      'Social or romantic invitation if you\'ve been putting yourself out there',
      'You will learn that combining charm with initiative creates opportunities'
    ]
  },

  // ============================================================================
  // JUPITER - SATURN ASPECTS (Major social/generational cycle ~20 years)
  // ============================================================================

  'Jupiter-Saturn-Conjunction': {
    name: 'Jupiter Conjunction Saturn',
    frequency: 'Occurs approximately every 20 years',
    duration: '6-10 months',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    aspectMeaning: 'The Great Conjunction merges expansion with contraction, optimism with realism, growth with responsibility. This rare generational aspect marks major societal shifts and personal turning points where dreams must meet reality. You must balance hope with hard work, vision with practical planning, faith with discipline. Neither pure optimism nor pessimism works - mature, grounded expansion is required.',
    loveRelationships: 'Relationship becomes serious and growth-oriented simultaneously. You may commit to partnership that also allows growth, or grow in ways that require more commitment. Optimism about love tempered by realistic expectations. Marriage or serious commitment possible if both expansion and responsibility are honored. Some relationships end if they prevent growth or lack commitment. Mature love that\'s both hopeful and realistic.',
    familyHome: 'Family expansion (children, extended family) requires more responsibility and structure. Growing family needs practical planning and discipline. Or family limitations force you to grow in constrained circumstances. Balancing family freedom with family duty becomes essential. Home expansion or improvement requires realistic budgeting and patient work. Finding meaning in family responsibilities.',
    businessCareer: 'Major career turning point where opportunity meets responsibility. Growth opportunity requires disciplined commitment to succeed. Or limited circumstances force innovative growth strategies. Best time in 20 years to start ambitious long-term career project if you\'re willing to work hard consistently. Promotion possible if you\'ve earned it. Career expansion must be structured and sustainable. Building something meaningful that lasts.',
    moneyFinances: 'Financial growth through disciplined expansion. Investment opportunities require research and long-term commitment. Speculation must be grounded in reality. Or financial limitations force you to grow income through hard work and skill development. Best time to start building long-term wealth if you combine vision with discipline. Neither reckless optimism nor fearful contraction - wise, measured growth.',
    predictions: [
      'Major life opportunity appears that requires serious long-term commitment to fulfill',
      'Career advancement possible if you\'ve built solid foundation through consistent work',
      'Relationship becomes both more committed and more growth-oriented simultaneously',
      'Financial investment or business venture succeeds through combining vision with discipline',
      'Educational opportunity requires balancing optimism about learning with hard work required',
      'You will learn to dream big but plan realistically',
      'Family expansion or commitment brings both joy and responsibility',
      'Long-term goal becomes achievable through patient, consistent effort',
      'Authority figures may support your growth if you demonstrate maturity',
      'Integration of hope and realism creates sustainable success over next 20 years'
    ]
  },

  'Jupiter-Saturn-Opposition': {
    name: 'Jupiter Opposition Saturn',
    frequency: 'Occurs approximately once per 20-year cycle',
    duration: '5-9 months',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    aspectMeaning: 'Maximum tension between expansion and limitation, opportunity and obstacle, optimism and pessimism. Jupiter says "grow, take risks" while Saturn says "be cautious, work hard." This opposition forces you to find balance - neither reckless expansion nor fearful contraction works. Choose integration: grow responsibly, expand within realistic limits, dream but plan carefully. Crisis pushes maturity.',
    loveRelationships: 'Relationship pulled between growth/freedom (Jupiter) and commitment/responsibility (Saturn). One partner may want expansion while other wants security. Or you feel torn between staying in committed relationship and pursuing personal growth opportunities. Neither abandoning commitment nor sacrificing all growth works. Integration requires growing together within committed framework. Mature compromises needed.',
    familyHome: 'Family responsibilities (Saturn) conflict with desire for growth or adventure (Jupiter). Children need care when career opportunity beckons. Aging parents need help when you want to travel or study. Home repairs drain money you wanted for enrichment. Balancing family duty with personal expansion essential. Neither extreme works - find sustainable middle ground that honors both needs.',
    businessCareer: 'Career tension between playing it safe (Saturn) and seizing growth opportunities (Jupiter). Stable job feels limiting but risky venture feels irresponsible. Or promotion opportunity requires more commitment than you want to give. Authority figures may resist your expansion plans. Success requires proving that growth can be responsible and discipline can enable expansion. Demonstrate your vision is grounded.',
    moneyFinances: 'Financial tension between conservative saving (Saturn) and optimistic investing/spending (Jupiter). Fear of loss vs. faith in abundance. Investment opportunity that feels risky but promising requires careful evaluation. Or expenses for growth (education, travel) conflict with need to save. Balance required - neither hoarding nor gambling works. Verify opportunities thoroughly, then invest wisely in growth.',
    predictions: [
      'Major opportunity appears but requires more commitment or work than you anticipated',
      'Relationship crisis between growth needs and commitment responsibilities forces maturity',
      'Financial decision between safe option and growth opportunity requires careful evaluation',
      'Career choice between security and expansion teaches you to find responsible middle ground',
      'Family duty conflicts with personal growth goal - must honor both somehow',
      'Authority figure blocks your expansion plans forcing you to prove your responsibility',
      'Educational or travel opportunity conflicts with practical obligations',
      'You will learn that true growth happens within structure, not by avoiding it',
      'Optimism tested by reality but faith matures rather than dies',
      'Integration of expansion and limitation creates sustainable long-term success'
    ]
  },

  'Jupiter-Saturn-Trine': {
    name: 'Jupiter Trine Saturn',
    frequency: 'Occurs approximately twice per 20-year cycle',
    duration: '4-7 months',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    aspectMeaning: 'Harmonious flow between expansion and structure, opportunity and discipline. This is the aspect of building dreams into reality through patient work. Jupiter provides vision and opportunity, Saturn provides plan and persistence. Perfect time for ambitious projects that succeed through combining optimism with realism. Growth feels natural and sustainable. Work pays off. Luck favors the prepared.',
    loveRelationships: 'Relationships grow stronger through both commitment and expansion. You can deepen commitment while still growing individually. Long-term relationship planning succeeds - marriage, buying house together, starting family. Mature love that\'s both stable and enriching. Partners support each other\'s growth within committed framework. Relationship becomes both anchor and launching pad. Realistic romantic dreams come true.',
    familyHome: 'Family growth handled responsibly and successfully. Having children or expanding family goes smoothly with good planning. Home purchase or improvement succeeds through patient work and wise budgeting. Family provides both stability and growth opportunities. Balancing family duty with personal growth works naturally. Building family traditions and creating family legacy. Home becomes stable yet enriching environment.',
    businessCareer: 'Excellent period for major career building. Hard work pays off with real advancement. Education or training leads to better position. Starting business succeeds if you\'ve planned well. Promotion or recognition comes from sustained effort. Mentors support your growth. Authority figures help rather than hinder. Building professional reputation that lasts. Career expansion on solid foundation. Patient effort yields substantial results.',
    moneyFinances: 'Financial growth through wise planning and disciplined action. Investments chosen carefully pay off over time. Savings plans succeed through consistent contributions. Income increases through skill development and hard work. Building wealth slowly but surely. Financial risks calculated carefully work out well. Budget that funds both security and growth succeeds. Long-term financial goals become achievable through patient effort.',
    predictions: [
      'Career advancement or promotion comes from your sustained excellent performance',
      'Long-term goal you\'ve been working toward patiently finally succeeds',
      'Educational achievement or certification opens doors to better opportunities',
      'Relationship commitment deepens while still allowing individual growth',
      'Financial investment or savings plan shows solid returns from patient accumulation',
      'Business or project you\'ve built carefully begins to thrive',
      'Authority figure or mentor actively supports your growth and advancement',
      'Home purchase or major improvement succeeds through wise planning',
      'You will build something meaningful that provides both stability and growth',
      'Integration of vision and discipline creates lasting success'
    ]
  },

  'Jupiter-Saturn-Square': {
    name: 'Jupiter Square Saturn',
    frequency: 'Occurs approximately twice per 20-year cycle',
    duration: '5-8 months',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    aspectMeaning: 'Friction between expansion desires and practical limitations forces growth through challenge. Jupiter\'s optimism crashes into Saturn\'s reality checks. Opportunities appear but harder to achieve than expected. Limitations frustrate but force you to develop better strategies. This square teaches mature ambition - dream big but work hard, take risks but plan carefully, grow but within reality\'s constraints. Success through proving yourself.',
    loveRelationships: 'Relationship growth blocked by practical obstacles or commitment fears. Want to expand relationship but money, time, or fear limits it. Or commitment feels limiting to growth. Frustration pushes you to either work harder for what you want or reconsider if it\'s realistic. Some relationships end if incompatible growth vs. security needs can\'t be reconciled. Others deepen through working through obstacles together. Love matures through challenge.',
    familyHome: 'Family expansion desires meet practical limitations. Want children but money or timing problematic. Want larger home but can\'t afford it. Or family responsibilities limit your growth opportunities. Frustration forces creative solutions or acceptance of reality. Neither giving up dreams nor ignoring limits works. Must develop realistic plan and work patiently toward it. Family challenges teach resourcefulness.',
    businessCareer: 'Career opportunity appears but harder to achieve than hoped. Promotion requires more work or qualifications than expected. Business idea needs more capital or preparation. Or established job limits growth causing frustration. Authority figures may seem to block advancement. Success requires proving yourself through consistent excellence, getting needed education, or building better plan. Work obstacles teach discipline and skill.',
    moneyFinances: 'Financial growth blocked by lack of capital, debt, or unexpected expenses. Want to invest or expand but money is tight. Or risky opportunity appears when you should be conservative. Frustration forces you to work harder, earn more, budget better, or reconsider your approach. Neither reckless risk nor complete avoidance works. Develop solid plan and execute it patiently. Financial challenges teach wisdom.',
    predictions: [
      'Career goal proves harder to achieve than hoped - requires more work, time, or qualifications',
      'Financial opportunity appears but lacks capital or has more risk than you realized',
      'Relationship growth blocked by practical obstacles requiring creative problem-solving',
      'Educational or travel plans delayed by money or responsibilities - patience needed',
      'Business venture requires more work or resources than anticipated to succeed',
      'You will learn to work harder and smarter when easy path is blocked',
      'Authority figure criticism, though harsh, contains truth that helps you improve',
      'Optimism tested by obstacles but perseverance develops into mature determination',
      'Family expansion desires must wait or require more practical preparation',
      'Integration crisis - you must develop realistic optimism and disciplined growth'
    ]
  },

  'Jupiter-Saturn-Sextile': {
    name: 'Jupiter Sextile Saturn',
    frequency: 'Occurs approximately twice per 20-year cycle',
    duration: '3-6 months',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    aspectMeaning: 'Opportunity to blend growth with discipline through conscious effort. Not automatic like the trine - you must reach for it. Perfect time to start long-term growth projects, take calculated risks, or work toward ambitious goals through patient effort. Small consistent steps toward big dreams pay off. Doors open if you show up prepared and work hard. Opportunity favors those who combine vision with discipline.',
    loveRelationships: 'Opportunity to strengthen relationship through small consistent efforts. Regular date nights, savings plan for future together, or relationship counseling to grow together. Won\'t happen automatically - requires initiative and follow-through. Can deepen commitment while respecting growth needs if both work at it. Small steps toward relationship goals succeed. Building partnership that\'s both stable and enriching takes effort but works.',
    familyHome: 'Opportunity to improve family life through practical planning. Start college fund for children, create family routines that work, or begin home improvement project. Small consistent family investments pay off. Family harmony grows through combining structure with encouragement. Works if you take action - create the plan, start the fund, begin the project. Building stable yet growth-oriented family environment.',
    businessCareer: 'Career growth opportunities appear if you\'ve been preparing for them. Networking, extra training, or professional development pay off. Won\'t fall in lap - must pursue actively and professionally. Small career moves toward bigger goals succeed. Mentorship opportunity if you seek it. Authority figures receptive if you demonstrate competence and commitment. Building career advancement through steady professional effort.',
    moneyFinances: 'Financial growth through smart planning and consistent action. Start retirement fund, begin conservative investment program, or create realistic budget. Research opportunities then invest wisely. Small amounts saved or invested consistently accumulate well. Financial education in practical investing pays off. Building wealth requires effort but clear path exists. Take first steps toward financial goals.',
    predictions: [
      'Career opportunity appears if you\'ve been building skills and networking',
      'Small consistent savings or investment plan you start now grows substantially over time',
      'Relationship deepens through regular date nights or counseling you initiate',
      'Educational class or certification you pursue opens career doors later',
      'Financial plan combining security and growth works if you create and follow it',
      'Mentor offers guidance if you seek it professionally and respectfully',
      'Home improvement or family project succeeds through planning and steady work',
      'You will learn that small disciplined steps toward big dreams actually work',
      'Authority figure supports your initiative if you demonstrate preparedness',
      'Opportunity to build something lasting if you combine vision with consistent effort'
    ]
  },

  // ==========================================
  // JUPITER-URANUS ASPECTS (All 5)
  // ==========================================

  'Jupiter-Uranus-Conjunction': {
    name: 'Jupiter Conjunction Uranus',
    frequency: 'Occurs approximately every 14 years',
    duration: '6-10 months (with retrograde periods)',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    aspectMeaning: 'Revolutionary expansion and breakthrough growth! This rare conjunction merges Jupiter\'s expansion with Uranus\'s revolution, creating massive breakthrough opportunities, sudden abundance, lightning-bolt realizations, and quantum leaps forward. Expect the unexpected - windfalls, sudden travel, shocking opportunities, revolutionary beliefs, or liberation into greater freedom. The universe opens doors you didn\'t know existed. Break free from limiting philosophies and expand into radical authenticity. Innovation and faith combine.',
    loveRelationships: 'Sudden exciting relationship developments or breakthroughs in existing partnership. May meet someone completely unexpected or relationship evolves in revolutionary ways. Unconventional romance flourishes - age gaps, long distance, different backgrounds. Freedom and growth both essential. Relationship breakthroughs through honesty and authenticity. May suddenly travel together or relationship takes unexpected turn. Need space to be individuals while growing together. Electric attraction and philosophical connection.',
    familyHome: 'Unexpected family expansion or sudden positive changes in home life. May relocate suddenly to amazing opportunity. Family member has breakthrough success. Unconventional family arrangements work beautifully. Home renovation or move happens quickly and excitingly. Family gains freedom and growth simultaneously. Adopt progressive parenting approaches. Extended family connections through technology. Liberation from limiting family patterns while deepening authentic bonds.',
    businessCareer: 'Major career breakthrough or sudden revolutionary opportunity! May launch innovative business, get unexpected promotion, or career takes exciting new direction. Technology and innovation central to success. International opportunities appear suddenly. Teaching, publishing, or sharing revolutionary ideas flourishes. Freedom and growth in work. Break free from conventional career path into authentic calling. Entrepreneurial ventures succeed through innovation. Sudden recognition or viral success possible.',
    moneyFinances: 'Sudden financial windfall or unexpected money opportunity! Investment breakthroughs through technology or innovation. May profit from cryptocurrency, tech stocks, or progressive ventures. Sudden income increase through unconventional means. Financial freedom through innovative thinking. Lucky breaks with money. Risk-taking pays off spectacularly - but stay grounded. Abundance through authenticity. May receive unexpected inheritance or bonus. Financial liberation.',
    predictions: [
      'Sudden major opportunity appears that\'s unlike anything you\'ve experienced before',
      'Unexpected financial windfall or income source emerges - possibly through technology',
      'You will break free from limiting belief system into revolutionary new philosophy',
      'Career takes exciting unexpected turn toward more authentic and innovative direction',
      'May suddenly relocate or travel to amazing opportunity you didn\'t anticipate',
      'Relationship breakthrough brings both freedom and deeper connection simultaneously',
      'Revolutionary idea or innovation you develop gains recognition or goes viral',
      'You will experience quantum leap in consciousness or life circumstances',
      'Unconventional choice that seemed risky leads to spectacular expansion',
      'Liberation into authentic self creates abundance beyond previous limitations'
    ]
  },

  'Jupiter-Uranus-Opposition': {
    name: 'Jupiter Opposition Uranus',
    frequency: 'Occurs approximately every 14 years (midpoint of Jupiter-Uranus cycle)',
    duration: '6-10 months (with retrograde periods)',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    aspectMeaning: 'Tension between expansion and revolution, tradition and innovation, faith and freedom. You\'re pulled between optimistic growth and radical change, conventional opportunity and revolutionary path, established wisdom and breakthrough insight. Must integrate both - neither pure optimism nor pure rebellion works. The opposition demands you find middle ground between expansion within system and breaking free entirely. Growth requires some risk, freedom requires some wisdom. Breakthroughs through balancing faith with authenticity.',
    loveRelationships: 'Tension between relationship growth and personal freedom needs. Partner may want more commitment while you need more space (or vice versa). Must balance togetherness with independence. Relationship can\'t be too conventional or too unstable. Need partner who supports both growth and authenticity. May struggle between exciting new attraction and established relationship. Integration: grow together while honoring individuality. Neither total merger nor complete independence - mature freedom within commitment.',
    familyHome: 'Tension between family expansion and personal liberation. May feel torn between family responsibilities and desire to break free. Home feels either too confining or too chaotic. Balancing family growth with individual authenticity challenging. Teenager\'s rebellion creates family tension. Must honor both family bonds and freedom needs. Integration: create family structure that allows everyone authentic expression. Neither rigid control nor total chaos - wise freedom.',
    businessCareer: 'Career tension between conventional opportunity and revolutionary path. Offered promotion in established field while drawn to innovative venture. Must balance security with authentic calling. Traditional success may feel limiting; pure innovation may feel risky. Integration: bring innovation into established field or add structure to revolutionary ideas. Neither pure conformity nor reckless rebellion. Wise risk-taking. Breakthrough through synthesis.',
    moneyFinances: 'Financial tension between conventional investments and revolutionary opportunities. Traditional savings feel limiting; cryptocurrency or innovation feel risky. Must balance security and growth. May over-extend financially through excessive optimism or miss opportunities through excessive caution. Integration: diversify between stable and innovative investments. Neither pure safety nor pure risk - wise allocation. Breakthrough through balanced portfolio.',
    predictions: [
      'You will face choice between conventional opportunity and revolutionary path - seek synthesis',
      'Relationship requires balancing commitment with freedom - neither extreme works',
      'Financial decision between security and innovation best resolved through diversification',
      'Career tension between promotion in established field and authentic calling arises',
      'You will learn that growth AND freedom are both possible through integration',
      'Family situation requires honoring both togetherness and individual authenticity',
      'Exciting opportunity that seems perfect may require sacrificing important freedom',
      'Revolutionary path that seems exciting may need more wisdom and planning',
      'You face tension between belief system and awakening insight - both have value',
      'Breakthrough comes through synthesis of expansion and revolution, not choosing one'
    ]
  },

  'Jupiter-Uranus-Trine': {
    name: 'Jupiter Trine Uranus',
    frequency: 'Occurs approximately 2-3 times during the 14-year Jupiter-Uranus cycle',
    duration: '4-8 months (with retrograde periods)',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    aspectMeaning: 'Effortless revolutionary expansion! Growth and breakthrough flow naturally together. Lucky breaks, sudden opportunities, and exciting developments happen with ease. Perfect time for innovation, authentic risk-taking, progressive ventures, and quantum leaps forward. The universe supports your liberation and expansion. Breakthroughs feel natural, windfalls seem destined, and revolutionary paths feel right. Trust sudden insights and unexpected opportunities. Freedom and growth aligned. Grace meets revolution.',
    loveRelationships: 'Exciting relationship developments flow naturally! May meet someone unexpectedly who\'s perfect for you. Existing relationship evolves in liberating and growth-oriented ways. Freedom and commitment both feel natural. Unconventional romance flourishes effortlessly. May travel together spontaneously with beautiful results. Relationship breakthrough happens with ease. Both partners grow individually while deepening connection. Authenticity attracts love. Electric harmony.',
    familyHome: 'Family life expands in exciting unexpected ways! May relocate to wonderful opportunity that appears suddenly. Family member has breakthrough success. Unconventional family arrangements bring joy. Home improvements or changes flow smoothly. Family grows through adoption, extended family, or new additions. Liberation from old family patterns feels natural. Progressive parenting works beautifully. Family freedom and togetherness both thrive.',
    businessCareer: 'Career breakthrough or exciting opportunity appears naturally! Perfect time to launch innovative venture, change careers, or take authentic risk. Technology, innovation, or progressive ideas central to success. International opportunities flow easily. Teaching or sharing revolutionary ideas flourishes. Recognition for authentic work. Freedom in career with growth and abundance. Entrepreneurial success through innovation. Lucky career breaks.',
    moneyFinances: 'Financial breakthrough or unexpected windfall! Lucky with money, especially through innovation or technology. Perfect time to invest in progressive ventures, cryptocurrency, or innovative companies. Financial freedom through wise risk-taking. Income increases through authentic work. Generous opportunities appear. Abundance through being true to yourself. Financial experiments succeed. Trust intuition about money.',
    predictions: [
      'Unexpected opportunity appears that\'s both exciting and abundant - say yes!',
      'Financial windfall through technology, innovation, or being in right place at right time',
      'You will meet someone or encounter opportunity that changes life trajectory beautifully',
      'Career breakthrough happens naturally through authentic expression of your gifts',
      'Revolutionary idea or innovation flows easily and gains recognition',
      'Perfect timing for major positive life change - relocation, career shift, or new venture',
      'Relationship evolves in exciting liberating ways that also deepen connection',
      'Freedom and abundance both increase through following authentic path',
      'Lucky break rewards you for being true to yourself rather than conforming',
      'Sudden insight or awakening leads to effortless expansion in life circumstances'
    ]
  },

  'Jupiter-Uranus-Square': {
    name: 'Jupiter Square Uranus',
    frequency: 'Occurs approximately 3-4 times during the 14-year Jupiter-Uranus cycle',
    duration: '4-8 months (with retrograde periods)',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    aspectMeaning: 'Revolutionary growth through creative tension and breakthrough challenges! The square creates friction between expansion and liberation, forcing innovation through discomfort. Restless for more freedom, growth, excitement, and authenticity. May take impulsive risks or rebel against limitations. The challenge: channel revolutionary energy wisely rather than burning bridges recklessly. You must grow AND break free, but with awareness. Tension produces breakthroughs if you work with it consciously. Impatience catalyzes necessary change.',
    loveRelationships: 'Relationship restlessness or sudden changes create growth challenges. May feel confined and crave freedom or excitement. Tempted by new attraction or unconventional relationship. Impulsive relationship decisions possible - pause before major changes. However, stagnant relationships DO need shaking up. The key: pursue authentic freedom within relationship first, revolution only if truly necessary. Tension reveals what needs to evolve. Growth through honest communication about freedom needs.',
    familyHome: 'Family tension from competing needs for expansion and liberation. May want to relocate suddenly or break free from family obligations. Teenager rebellion or family member\'s sudden changes create challenges. Impulsive home decisions possible - be mindful. However, truly limiting family patterns DO need breaking. The key: create space for everyone\'s authenticity rather than escaping. Family grows through navigating freedom needs consciously. Constructive rebellion.',
    businessCareer: 'Career restlessness drives change - possibly too impulsively. May want to quit job suddenly, launch business without planning, or take excessive risks. However, stagnant career DOES need shaking up. The key: plan revolutionary career moves rather than burning bridges. Innovative ideas need grounding in reality. Entrepreneurial urges need business plans. Breakthrough through channeling rebellious energy into strategic innovation. Risk-taking with wisdom.',
    moneyFinances: 'Financial impulsiveness or excessive risk-taking possible. May gamble on cryptocurrency, risky investments, or untested ventures. However, overly cautious financial approach MAY need disrupting. The key: take calculated risks, not reckless ones. Innovate financially but protect foundation. Diversify rather than betting everything. Revolutionary financial thinking good; impulsive financial decisions problematic. Breakthrough through balanced risk.',
    predictions: [
      'You will feel intense restlessness driving desire for more freedom and excitement',
      'Impulsive decision to quit, relocate, or radically change life tempts you - pause first',
      'Sudden opportunity appears but requires rushing decision - get more information',
      'Relationship or career feels confining - address the feeling rather than escaping',
      'Financial gamble seems exciting but carries real risk - calculate before committing',
      'You learn difference between authentic liberation and impulsive rebellion',
      'Tension or disruption forces innovation you were avoiding - ultimately beneficial',
      'Revolutionary idea needs grounding in practical planning to succeed',
      'Breakthrough happens through channeling restless energy into conscious change',
      'You will grow by taking wise risks rather than either reckless or no risks'
    ]
  },

  'Jupiter-Uranus-Sextile': {
    name: 'Jupiter Sextile Uranus',
    frequency: 'Occurs approximately 2-3 times during the 14-year Jupiter-Uranus cycle',
    duration: '3-6 months (with retrograde periods)',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    aspectMeaning: 'Opportunity for breakthrough growth through conscious initiative! Not automatic like the trine - you must reach for revolutionary opportunities. Perfect time to launch innovative projects, take calculated risks toward freedom, or experiment with progressive ideas. Doors to expansion and liberation open if you knock. Small authentic steps toward big breakthroughs pay off. Opportunity favors those who combine wisdom with innovation, faith with authenticity.',
    loveRelationships: 'Opportunity to bring exciting new energy into relationship if you initiate it. Plan spontaneous trip together, try unconventional date, or introduce progressive ideas to partnership. Won\'t happen automatically - requires creative effort. Can deepen connection through shared adventures and authentic communication if both participate. Small experiments in relationship freedom and growth succeed. Building partnership that\'s both committed and liberating takes initiative but works.',
    familyHome: 'Opportunity to improve family life through innovative approaches. Try progressive parenting method, introduce new technology to home, or experiment with unconventional family activities. Small changes toward more authentic family expression pay off. Family harmony grows through combining tradition with innovation. Works if you take action - suggest the activity, research the method, introduce the change. Building family environment that honors both togetherness and individuality.',
    businessCareer: 'Career growth opportunities through innovation if you pursue them actively. Perfect time to pitch creative idea, propose progressive project, or network in unconventional ways. Won\'t fall in lap - must demonstrate initiative and authenticity. Small career experiments toward bigger breakthrough succeed. Mentorship or collaboration opportunity if you seek it. Authority figures receptive to well-presented innovative ideas. Building career advancement through strategic innovation.',
    moneyFinances: 'Financial growth through smart innovative investing and conscious action. Research cryptocurrency or tech investments then invest wisely. Start side income through progressive skills. Learn about innovative financial tools. Small amounts invested in growth sectors accumulate well. Financial education in emerging technologies pays off. Building wealth through balanced innovation - neither pure safety nor pure risk. Take first experimental steps.',
    predictions: [
      'Career opportunity appears for those who\'ve been developing innovative skills',
      'Small investment in technology or progressive sector you research now grows over time',
      'Relationship deepens through spontaneous adventure or authentic conversation you initiate',
      'Class, workshop, or learning about emerging field you pursue opens doors later',
      'Financial strategy combining security with calculated innovation works if you create it',
      'Mentor in innovative field offers guidance if you reach out professionally',
      'Family activity or home change you suggest brings fresh energy and connection',
      'You will learn that conscious experimentation leads to breakthrough results',
      'Progressive idea you present to authority figure gets supportive reception',
      'Opportunity to expand life through innovation if you combine wisdom with authentic action'
    ]
  },

  // ==========================================
  // JUPITER-NEPTUNE ASPECTS (All 5)
  // ==========================================

  'Jupiter-Neptune-Conjunction': {
    name: 'Jupiter Conjunction Neptune',
    frequency: 'Occurs approximately every 13 years',
    duration: '6-10 months (with retrograde periods)',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, illusion, and divine connection. It dissolves boundaries and merges with the infinite.',
    aspectMeaning: 'Mystical expansion and spiritual abundance! This rare conjunction merges Jupiter\'s growth with Neptune\'s transcendence, creating profound spiritual awakening, divine guidance, inspired creativity, and compassionate expansion. Faith deepens into mystical knowing, abundance flows through surrender, and dreams manifest through belief. The veil thins - expect synchronicities, spiritual breakthroughs, inspired visions, and connection to something greater. Compassion and creativity flourish. Beware: illusions about opportunities or excessive idealism possible. Trust intuition but verify facts.',
    loveRelationships: 'Deeply romantic and spiritually connected relationship experiences. May meet soulmate or twin flame connection. Existing relationship reaches transcendent depths through vulnerability and spiritual sharing. Unconditional love and compassion flourish. Idealization of partner possible - see them clearly. Romantic dreams come true but stay grounded. Spiritual growth through partnership. Artistic or creative collaboration deepens bond. Forgiveness and surrender heal wounds. Divine timing in love.',
    familyHome: 'Family life blessed with compassion, forgiveness, and spiritual connection. Home becomes sanctuary for creativity and meditation. Family healing through empathy and understanding. May welcome family member through adoption or spiritual means. Creative projects beautify home. However, boundary issues possible - compassion with clarity needed. Fantasy about family perfection vs. reality. Spiritual practices strengthen family bonds. Unconditional love expressed.',
    businessCareer: 'Career expansion through creative, spiritual, or compassionate work! Perfect time to launch artistic venture, healing practice, or mission-driven business. Teaching spiritual wisdom or creative arts flourishes. International or cross-cultural work expands. Inspired vision guides career. However, verify business details - confusion or deception possible. Dream big but check contracts. Abundance through service and creativity. Work feels meaningful and inspired.',
    moneyFinances: 'Financial abundance through faith, creativity, or spiritual work. Money flows through inspired action and divine timing. Generosity attracts more. Investments in art, spirituality, or compassionate ventures. However, financial illusions possible - verify before investing. Confusion about money or unrealistic expectations. Don\'t give money to questionable schemes. Abundance real if grounded. Wealth through inspired service. Trust but verify.',
    predictions: [
      'Profound spiritual awakening or mystical experience opens new dimension of consciousness',
      'Creative inspiration flows abundantly - perfect time for artistic or imaginative projects',
      'You may meet deeply spiritual person or soulmate connection that feels divinely guided',
      'Compassionate service or healing work expands - you help many through empathy',
      'Financial opportunity through creative or spiritual means - but verify all details',
      'Dreams, visions, or synchronicities provide genuine guidance and inspiration',
      'Career takes more meaningful direction toward service, creativity, or spirituality',
      'You will learn to trust divine timing while staying grounded in practical reality',
      'Boundary confusion or idealization of opportunity requires discernment',
      'Faith and imagination combine to manifest beautiful dreams into reality'
    ]
  },

  'Jupiter-Neptune-Opposition': {
    name: 'Jupiter Opposition Neptune',
    frequency: 'Occurs approximately every 13 years (midpoint of Jupiter-Neptune cycle)',
    duration: '6-10 months (with retrograde periods)',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, illusion, and divine connection. It dissolves boundaries and merges with the infinite.',
    aspectMeaning: 'Tension between faith and illusion, optimism and escapism, wisdom and confusion. Pulled between expansive growth and dissolving boundaries, concrete opportunity and intangible dreams, philosophical truth and mystical mystery. Must integrate both - neither pure logic nor pure fantasy works. The opposition demands discernment between genuine spiritual insight and deceptive illusion, real opportunity and false promise. Growth requires faith AND clarity. Expansion needs inspiration AND grounding.',
    loveRelationships: 'Tension between romantic idealization and relationship reality. May project fantasy onto partner or feel disillusioned when they\'re human. Drawn between authentic commitment and escapist romance. Must balance spiritual connection with practical partnership. Compassion essential but boundaries also needed. May struggle between deep soulmate feeling and concerning red flags. Integration: honor spiritual connection while seeing partner clearly. Neither cynicism nor idealization - compassionate realism.',
    familyHome: 'Tension between family ideals and reality. May feel disappointed family doesn\'t match dream. Torn between self-sacrifice for family and own spiritual needs. Balancing compassion with healthy boundaries challenging. Family member\'s issues require wisdom not enabling. Must honor both family connection and individual spiritual path. Integration: create family life that\'s both grounded and spiritually nourishing. Neither martyrdom nor escape - loving presence with clarity.',
    businessCareer: 'Career tension between inspired vision and practical reality. Dream job may have concerning aspects. Spiritual calling may conflict with financial needs. Must balance meaningful work with realistic income. May face deception in business - trust but verify. Torn between faith in venture and legitimate concerns. Integration: pursue inspired work while protecting yourself practically. Neither pure idealism nor cynicism - wise faith.',
    moneyFinances: 'Financial tension between abundance faith and realistic assessment. May over-extend based on optimistic assumptions or spiritual beliefs about money. Alternatively, may miss real opportunities through excessive caution. Investment that seems blessed may have hidden issues. Must balance faith with due diligence. Integration: trust divine abundance while checking facts thoroughly. Neither gambling on faith nor blocking blessings - discerning openness.',
    predictions: [
      'You face choice between inspiring opportunity and practical concerns - investigate thoroughly',
      'Romantic attraction feels spiritually significant but may involve idealization or projection',
      'Financial opportunity requires careful verification - some details don\'t add up',
      'Career vision inspires you but implementation needs grounding in realistic planning',
      'You will learn difference between genuine intuition and wishful thinking',
      'Family situation requires both compassion and boundaries - neither guilt nor detachment',
      'Spiritual teaching or opportunity needs discernment - trust inner wisdom not charisma',
      'Creative project inspires you but needs practical structure to succeed',
      'You learn that faith AND wisdom are both necessary for true expansion',
      'Integration of spiritual ideals with practical reality creates genuine growth'
    ]
  },

  'Jupiter-Neptune-Trine': {
    name: 'Jupiter Trine Neptune',
    frequency: 'Occurs approximately 2-3 times during the 13-year Jupiter-Neptune cycle',
    duration: '4-8 months (with retrograde periods)',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, illusion, and divine connection. It dissolves boundaries and merges with the infinite.',
    aspectMeaning: 'Effortless spiritual expansion and blessed abundance! Growth and transcendence flow naturally together. Miracles, synchronicities, and divine guidance happen with ease. Perfect time for spiritual practices, creative projects, compassionate service, and faith-based ventures. The universe supports your dreams. Inspiration feels natural, abundance seems destined, and spiritual paths feel right. Trust divine timing and follow inspired guidance. Creativity and compassion aligned. Grace flows.',
    loveRelationships: 'Beautiful romantic and spiritual connection flows naturally! May meet soulmate through perfect timing. Existing relationship deepens through spiritual sharing and unconditional love. Forgiveness and compassion heal easily. Creative or artistic collaboration brings joy. Romantic dreams manifest effortlessly. Both partners grow spiritually through love. Boundaries healthy, connection deep. Relationship feels blessed and divinely guided. Unconditional love expressed naturally.',
    familyHome: 'Family life blessed with harmony, creativity, and spiritual connection! Family healing happens naturally through forgiveness. Home becomes beautiful sanctuary. May expand family through joyful means. Creative projects or spiritual practices unite family. Compassion and understanding flow easily. Family member experiences positive breakthrough. Home improvements inspired and successful. Generational healing. Family feels like blessing.',
    businessCareer: 'Career expansion through creative or spiritual work flows beautifully! Perfect time to launch artistic venture, healing practice, or meaningful business. Inspired ideas succeed naturally. Teaching or sharing wisdom flourishes. International opportunities appear easily. Work feels purposeful and abundant. Creative recognition. Career aligns with soul purpose effortlessly. Meaningful success through authentic service. Abundance through inspired action.',
    moneyFinances: 'Financial blessings and abundance flow naturally! Money comes through creative work, spiritual service, or perfect timing. Generous spirit attracts more. Investments in meaningful ventures succeed. Financial intuition accurate. Abundance through faith and inspired action. Giving and receiving balanced beautifully. Wealth through purposeful work. Financial dreams manifest. Divine providence real and tangible.',
    predictions: [
      'Spiritual breakthrough or mystical experience happens naturally and transforms perspective',
      'Creative project flows with inspiration and gains recognition or success',
      'Soulmate connection or deep spiritual friendship enters life through perfect timing',
      'Financial abundance flows through inspired creative or spiritual work',
      'Compassionate service expands naturally - helping others brings joy and meaning',
      'Dream or vision provides accurate guidance that leads to positive opportunity',
      'Career opportunity aligns perfectly with soul purpose and brings both meaning and abundance',
      'Family healing happens through natural forgiveness and compassionate understanding',
      'Artistic or creative talents flourish - perfect time to share gifts with world',
      'Faith in divine timing proven accurate as blessings unfold effortlessly'
    ]
  },

  'Jupiter-Neptune-Square': {
    name: 'Jupiter Square Neptune',
    frequency: 'Occurs approximately 3-4 times during the 13-year Jupiter-Neptune cycle',
    duration: '4-8 months (with retrograde periods)',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, illusion, and divine connection. It dissolves boundaries and merges with the infinite.',
    aspectMeaning: 'Inspired growth through creative tension between faith and illusion! The square creates friction between expansion and dissolution, forcing discernment through discomfort. May be overly optimistic, idealistic, or confused about opportunities. Spiritual bypassing or escapism tempting. However, the tension also produces profound creativity, deepened faith, and refined intuition. The challenge: pursue dreams with eyes open, expand with discernment, believe but verify. Friction refines ability to distinguish genuine inspiration from wishful thinking.',
    loveRelationships: 'Romantic idealization or confusion creates growth challenges. May fall for fantasy of person rather than reality. Spiritual connection feels strong but practical incompatibilities exist. Tempted to ignore red flags through compassion or hope. However, stagnant relationships DO need more romance and spiritual depth. The key: bring inspiration to partnership while staying honest about issues. Love with eyes open. Neither cynicism nor fantasy - compassionate clarity. Growth through honest romantic discernment.',
    familyHome: 'Family idealism or boundary confusion creates tension. May sacrifice too much for family or enable rather than help. Alternatively, may escape family through spirituality or fantasy. Home renovation ideas may be unrealistic or confusing. However, family DOES need more compassion and creativity. The key: serve family from wholeness not martyrdom. Compassion with boundaries. Neither enabling nor abandoning - present clarity. Family healing through grounded spirituality.',
    businessCareer: 'Career confusion or over-optimism drives necessary learning. Business opportunity may seem more promising than reality. Spiritual calling may lack practical foundation. May be deceived or self-deceived about venture. However, career DOES need more meaning and inspiration. The key: ground inspired vision in realistic planning. Verify all details. Neither pure fantasy nor giving up on dreams - wise faith. Career breakthrough through discerning inspiration.',
    moneyFinances: 'Financial over-optimism or confusion possible. May invest based on hope rather than research. Spiritual beliefs about abundance may bypass practical financial planning. Confusing money situation or deceptive opportunity. However, financial approach MAY need more faith and generosity. The key: trust abundance while checking facts thoroughly. Neither reckless faith nor fearful hoarding - wise generosity. Financial growth through grounded spiritual prosperity.',
    predictions: [
      'You feel drawn to opportunity that seems divinely guided - but verify all details first',
      'Romantic attraction feels like soulmate but may involve idealization or projection',
      'Financial investment or spiritual venture requires more research than you think',
      'Career opportunity inspiring but practical concerns valid - investigate thoroughly',
      'You will learn to distinguish genuine intuition from wishful thinking',
      'Spiritual teaching or guru charismatic but requires discernment - trust yourself',
      'Creative project needs grounding in reality to manifest successfully',
      'Family situation requires compassion AND boundaries - both simultaneously',
      'Confusion or disappointment ultimately refines your spiritual discernment',
      'Growth happens through pursuing inspired dreams while staying practically grounded'
    ]
  },

  'Jupiter-Neptune-Sextile': {
    name: 'Jupiter Sextile Neptune',
    frequency: 'Occurs approximately 2-3 times during the 13-year Jupiter-Neptune cycle',
    duration: '3-6 months (with retrograde periods)',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, illusion, and divine connection. It dissolves boundaries and merges with the infinite.',
    aspectMeaning: 'Opportunity for spiritual expansion through conscious initiative! Not automatic like the trine - you must reach for inspired possibilities. Perfect time to begin spiritual practices, creative projects, compassionate service, or faith-based ventures. Doors to transcendence and abundance open if you knock. Small inspired steps toward big dreams pay off. Opportunity favors those who combine faith with action, dreams with initiative. Grace available but requires participation.',
    loveRelationships: 'Opportunity to deepen relationship spiritually if you initiate it. Suggest meditation together, attend spiritual event, or share creative project. Won\'t happen automatically - requires vulnerable sharing. Can strengthen bond through compassion and forgiveness if both participate. Small romantic gestures or spiritual conversations deepen intimacy. Building relationship that\'s both grounded and soulful takes effort but works beautifully.',
    familyHome: 'Opportunity to improve family life through creative or spiritual approaches. Start family meditation, introduce artistic activities, or create beautiful home space. Small changes toward more compassionate family expression pay off. Family harmony grows through combining practical care with spiritual awareness. Works if you take action - create the ritual, start the conversation, beautify the space. Building family environment that\'s both functional and inspired.',
    businessCareer: 'Career growth opportunities through meaningful or creative work if you pursue them. Perfect time to pitch inspired idea, propose artistic project, or network in spiritual/creative communities. Won\'t fall in lap - must demonstrate vision and initiative. Small career moves toward more purposeful work succeed. Mentorship in creative field if you seek it. Authority figures receptive to well-presented inspired ideas. Building career through service and creativity.',
    moneyFinances: 'Financial growth through smart spiritual/creative investing and conscious action. Research socially responsible investments then commit wisely. Start side income through creative or healing skills. Learn about values-based financial planning. Small amounts invested in meaningful ventures accumulate well. Financial education in ethical prosperity pays off. Building wealth through purpose-driven choices. Take first inspired steps.',
    predictions: [
      'Career opportunity in creative or spiritual field appears for those actively developing talents',
      'Small investment in meaningful venture or values-based fund you research grows over time',
      'Relationship deepens through spiritual conversation or creative activity you initiate',
      'Class, retreat, or workshop in spirituality or arts you attend opens doors later',
      'Financial strategy combining abundance mindset with practical planning works if you create it',
      'Mentor in creative or spiritual field offers guidance if you reach out with sincere interest',
      'Family ritual or creative project you suggest brings beauty and deeper connection',
      'You will learn that inspired action produces results - dreams need doing',
      'Spiritual practice or creative hobby you begin now becomes ongoing source of growth',
      'Opportunity to expand life meaningfully if you combine faith with conscious initiative'
    ]
  }

};

export default GENERAL_ASPECTS;






