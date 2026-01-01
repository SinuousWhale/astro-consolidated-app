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
  },

  // ==========================================
  // JUPITER-PLUTO ASPECTS (All 5)
  // ==========================================

  'Jupiter-Pluto-Conjunction': {
    name: 'Jupiter Conjunction Pluto',
    frequency: 'Occurs approximately every 12-13 years',
    duration: '6-12 months (with retrograde periods)',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Massive transformational growth and powerful expansion! This rare conjunction merges Jupiter\'s growth with Pluto\'s total transformation, creating profound regeneration, empowered abundance, and phoenix-like rebirth into greater potential. What needs to die will be eliminated; what needs to grow will be empowered tremendously. Expect power surges, deep psychological breakthroughs, total life transformation, and quantum leaps through death-rebirth cycles. You gain tremendous power and wisdom through facing what must transform. Expansion through intensity and depth.',
    loveRelationships: 'Relationship transforms completely - total death-rebirth of partnership. May meet intensely powerful soul connection or existing relationship goes through profound metamorphosis. Surface relating dies; authentic depth emerges. Power dynamics must transform. Psychological healing through intimacy. Empowered love through vulnerability and truth. However, control issues or obsession possible - share power don\'t dominate. Relationship becomes vehicle for profound growth and transformation. Love deepens through shadow work together.',
    familyHome: 'Family undergoes major transformation and regeneration. Old family patterns die; healthier dynamics emerge. May deal with family crisis that ultimately empowers everyone. Inheritance or family resources increase substantially. Home renovation or relocation transforms living situation. Family healing through confronting buried issues. Psychological depth work with family members. Empowerment through releasing family shadows. What must end in family will; what must grow will flourish tremendously.',
    businessCareer: 'Career transformation and massive professional growth! May completely change career path toward empowered calling. Rise to position of significant power and influence. Business success through strategic depth and transformation of industry. Research, investigation, or depth work central to success. Psychological insight gives professional advantage. Eliminate what\'s not working; invest totally in what is. Empire-building possible. Success through authentic power not manipulation. Career phoenix moment.',
    moneyFinances: 'Major financial transformation and wealth-building power! Resources increase dramatically through strategic investment, inheritance, or total financial regeneration. Perfect time for financial transformation - eliminate debt, restructure finances, invest in growth powerfully. Wealth through psychology of money and eliminating limiting beliefs. Investments in transformation industries succeed. However, obsession with money or power struggles over resources possible. Empower yourself financially through facing money shadows. Phoenix wealth.',
    predictions: [
      'Total life transformation in major area - complete death-rebirth into empowered version of self',
      'You gain significant power, influence, or resources through profound transformation',
      'Psychological breakthrough eliminates deep pattern and unleashes tremendous growth',
      'Career undergoes phoenix moment - what dies opens space for massive advancement',
      'Financial regeneration through strategic investment or eliminating money blocks',
      'Relationship transforms through deep intimacy and shadow work - surface dies, depth emerges',
      'You will confront what must die in life and find courage to let it transform completely',
      'Power increases dramatically but must be used wisely not manipulatively',
      'Crisis or intense pressure ultimately catalyzes breakthrough growth and empowerment',
      'You become profoundly more powerful, wealthy, and wise through transformational growth'
    ]
  },

  'Jupiter-Pluto-Opposition': {
    name: 'Jupiter Opposition Pluto',
    frequency: 'Occurs approximately every 12-13 years (midpoint of Jupiter-Pluto cycle)',
    duration: '6-12 months (with retrograde periods)',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Tension between expansion and transformation, optimism and intensity, growth and death-rebirth. Pulled between wanting more and needing to eliminate, seeking abundance and confronting shadows, expanding outward and diving deep. Must integrate both - neither pure optimism nor pure intensity works. The opposition demands you grow THROUGH transformation, expand THROUGH depth, succeed THROUGH shadow work. Power requires wisdom, growth requires elimination. Integration of light and shadow produces real empowerment.',
    loveRelationships: 'Tension between relationship growth and power transformation. May want expansion while partner wants depth (or vice versa). Pulled between optimistic love and confronting relationship shadows. Power struggle or control issues surface. Must balance growth with psychological truth. Relationship can\'t be only light or only intense. Integration: expand through honoring depth, grow through shadow work. Neither avoiding intensity nor drowning in it - wise depth.',
    familyHome: 'Tension between family expansion and family transformation. Wanting more while needing to eliminate. Family power dynamics surface. May feel torn between optimistic family vision and dealing with family wounds. Balancing growth with healing challenging. Must honor both expansion desires and transformation needs. Integration: grow family through healing shadows. Neither toxic positivity nor endless processing - empowered growth through depth.',
    businessCareer: 'Career tension between expansion and transformation. Offered growth opportunity while deep career change needed. Must balance ambition with authentic power. Success may require eliminating what doesn\'t serve. Power struggles with authority possible. Torn between conventional success and transformational calling. Integration: expand career through authentic transformation. Neither selling out nor sabotaging success - empowered growth through integrity.',
    moneyFinances: 'Financial tension between expansion and transformation. Want more while needing to eliminate money blocks. May over-extend financially while transformation required. Investment opportunity while debt elimination needed. Power struggles over resources. Must balance abundance mindset with financial reality. Integration: grow wealth through transforming money psychology. Neither greed nor poverty consciousness - empowered prosperity through shadow work.',
    predictions: [
      'You face choice between conventional growth and transformational path - synthesis needed',
      'Relationship requires both expansion and depth work - can\'t have one without other',
      'Financial opportunity while money shadows surface - address both simultaneously',
      'Career growth possible but requires eliminating what\'s inauthentic or dead',
      'Power struggle teaches you difference between authentic power and control',
      'You will learn that true expansion requires transformation not just addition',
      'Family situation needs both optimistic vision and dealing with buried issues',
      'Opportunity tempts you but feels like selling soul - negotiate from empowered place',
      'Crisis or intensity ultimately serves growth if you don\'t avoid transformation',
      'Integration of growth and depth, light and shadow, creates real empowerment'
    ]
  },

  'Jupiter-Pluto-Trine': {
    name: 'Jupiter Trine Pluto',
    frequency: 'Occurs approximately 2-3 times during the 12-13 year Jupiter-Pluto cycle',
    duration: '4-10 months (with retrograde periods)',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Effortless transformational growth and empowered expansion! Growth and transformation flow naturally together. Profound regeneration feels destined, power increases naturally, and phoenix moments happen with grace. Perfect time for deep transformation, strategic empowerment, psychological healing, and massive growth through depth work. The universe supports your empowerment. Transformation feels right, wealth flows through power, and rebirth seems natural. Trust deep processes and profound changes. Depth and expansion aligned.',
    loveRelationships: 'Relationship transforms beautifully and deepens naturally! May meet powerful soul connection that feels destined. Existing partnership evolves through natural psychological intimacy. Shadow work strengthens bond effortlessly. Power shared equally and lovingly. Relationship becomes vehicle for mutual empowerment. Deep truth-telling heals and bonds. Transformation through love flows gracefully. Both partners grow through depth and authenticity. Empowered partnership.',
    familyHome: 'Family transformation and growth flow naturally! Family healing happens through depth conversations that feel right. Old patterns release easily. Family resources or inheritance flow smoothly. Home transformation or powerful improvement succeeds. Family empowerment through facing truth together. Generational patterns heal naturally. Family member experiences positive phoenix moment. Deep family bonds strengthen through authentic relating. Empowered family.',
    businessCareer: 'Career breakthrough through strategic depth and transformation! Perfect time for major career move, powerful advancement, or transformational business launch. Success through research, psychology, investigation, or transformation industries. Strategic thinking and depth work succeed naturally. Rise to position of significant influence. Professional empowerment through authentic expertise. Career transforms naturally toward greater power and meaning. Strategic empire-building works.',
    moneyFinances: 'Financial transformation and wealth-building flow powerfully! Money increases through strategic investment, inheritance, or financial regeneration. Perfect time for major financial moves - eliminate debt, restructure powerfully, invest strategically. Wealth through understanding power and psychology of money. Investments in transformation sectors succeed. Financial empowerment through releasing money blocks. Abundance through depth and strategy. Phoenix finances.',
    predictions: [
      'Major life transformation happens naturally and empowers you tremendously',
      'Financial breakthrough through strategic investment or releasing money blocks',
      'Career advancement to position of real power and influence flows smoothly',
      'Psychological healing or therapy produces profound positive transformation',
      'Relationship deepens through shadow work and authentic intimacy naturally',
      'You eliminate what no longer serves easily and growth fills the space immediately',
      'Inheritance, windfall, or major resource increase flows to you at perfect timing',
      'Professional success through depth expertise - research, psychology, or strategy',
      'Crisis resolves through deep work and produces unexpected empowerment',
      'Transformation feels natural not forced - phoenix rebirth happens with grace'
    ]
  },

  'Jupiter-Pluto-Square': {
    name: 'Jupiter Square Pluto',
    frequency: 'Occurs approximately 3-4 times during the 12-13 year Jupiter-Pluto cycle',
    duration: '4-10 months (with retrograde periods)',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Transformational growth through intense challenge and power struggles! The square creates friction between expansion and elimination, forcing profound change through crisis. Obsessive ambition, power struggles, or compulsive growth possible. May want success at any cost or resist necessary transformation. However, the tension produces tremendous empowerment if worked with consciously. The challenge: pursue growth through shadow work not avoidance, seek power through integrity not manipulation, expand through transformation not bypassing. Crisis catalyzes necessary rebirth.',
    loveRelationships: 'Relationship power struggles or transformational crisis drives growth. Control issues surface - either yours or partner\'s. Jealousy, obsession, or intensity challenges. May try to change partner or resist being controlled. Relationship feels intense and pressured. However, stagnant dynamics DO need transforming. The key: share power authentically, transform through vulnerability not force. Neither dominating nor submitting - mutual empowerment. Growth through honest depth work on relationship shadows.',
    familyHome: 'Family power dynamics or crisis creates transformational pressure. Struggles over control, inheritance, or family resources. May feel family obligations overwhelming or resist necessary family changes. Compulsive family patterns surface. However, unhealthy family dynamics DO need eliminating. The key: transform family patterns through boundaries and honesty not force or avoidance. Neither controlling family nor being controlled - empowered relating. Family healing through facing shadows together.',
    businessCareer: 'Career ambition or power struggles drive intense growth challenges. May pursue success compulsively or face workplace power dynamics. Ruthless competition or ethical compromises tempting. Obsession with advancement or control issues with authority. However, career DOES need major transformation. The key: pursue power through integrity and depth work not manipulation. Neither selling soul nor giving up ambition - empowered authentic success. Career transformation through shadow work.',
    moneyFinances: 'Financial obsession or power struggles around money. May pursue wealth compulsively or face conflicts over resources. Risky financial moves driven by greed or fear. Debt pressure or financial crisis forcing transformation. However, money patterns DO need deep transformation. The key: transform financial psychology and eliminate money shadows rather than just pursuing more. Neither greed nor deprivation - empowered prosperity through shadow work. Financial rebirth through depth.',
    predictions: [
      'You face intense pressure or crisis that ultimately forces necessary transformation',
      'Power struggle teaches difference between authentic empowerment and manipulation',
      'Financial pressure or obsession reveals money shadows that need healing',
      'Career ambition becomes compulsive - success at what cost? Reassess values',
      'Relationship intensity or control issues surface what needs transforming',
      'You will learn that true growth requires facing shadows not bypassing them',
      'Crisis or elimination that feels devastating ultimately creates space for rebirth',
      'Obsessive pattern reveals psychological wound needing healing and integration',
      'Temptation to use power manipulatively tests your integrity - choose wisely',
      'Transformation happens through accepting death-rebirth not resisting change'
    ]
  },

  'Jupiter-Pluto-Sextile': {
    name: 'Jupiter Sextile Pluto',
    frequency: 'Occurs approximately 2-3 times during the 12-13 year Jupiter-Pluto cycle',
    duration: '3-8 months (with retrograde periods)',
    planet1Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Opportunity for empowered growth through conscious transformation! Not automatic like the trine - you must reach for depth and power. Perfect time to begin deep psychological work, strategic empowerment, transformational projects, or shadow integration for growth. Doors to power and profound change open if you knock. Small transformative steps toward big empowerment pay off. Opportunity favors those who combine wisdom with depth work, faith with shadow integration.',
    loveRelationships: 'Opportunity to deepen relationship through conscious intimacy work. Suggest couples therapy, share vulnerable truth, or explore relationship shadows together. Won\'t happen automatically - requires courage to go deep. Can empower bond through psychological honesty if both participate. Small authentic conversations or shadow work strengthen partnership. Building relationship that\'s both growth-oriented and deeply transformative takes initiative but works powerfully.',
    familyHome: 'Opportunity to transform family dynamics through conscious depth work. Start family therapy, address buried family issues, or heal generational patterns. Small changes toward authentic family relating pay off. Family empowerment grows through combining love with psychological truth. Works if you take action - initiate the conversation, start the healing, face the shadow. Building family environment that\'s both healthy and psychologically deep.',
    businessCareer: 'Career growth opportunities through strategic depth work if you pursue them. Perfect time to develop powerful expertise, research deeply, or propose transformational project. Won\'t fall in lap - must demonstrate strategic thinking and depth. Small career moves toward positions of power succeed. Mentorship with powerful person if you seek it. Authority figures receptive to well-researched transformational proposals. Building career power through strategic depth.',
    moneyFinances: 'Financial growth through smart strategic investing and transformation work. Research powerful investment strategies then commit wisely. Eliminate debt or financial blocks strategically. Learn about wealth psychology and shadow work around money. Small amounts invested in transformation sectors accumulate powerfully. Financial education in psychology of wealth pays off. Building prosperity through transforming money consciousness. Take first empowered steps.',
    predictions: [
      'Career opportunity in powerful field appears for those developing strategic depth expertise',
      'Small investment in transformation sector or strategic fund you research grows substantially',
      'Relationship deepens through vulnerable conversation or shadow work you courageously initiate',
      'Therapy, depth psychology, or shadow work you begin produces significant empowerment',
      'Financial strategy combining growth mindset with eliminating blocks works if you commit',
      'Mentor in powerful position offers guidance if you approach with authentic depth',
      'Family healing opportunity through addressing buried issue you courageously raise',
      'You will learn that conscious transformation produces exponential growth',
      'Research or investigation project you pursue reveals powerful insights and opportunities',
      'Opportunity to expand power through combining wisdom with psychological depth work'
    ]
  },

  // ==========================================
  // SATURN-URANUS ASPECTS (All 5)
  // ==========================================

  'Saturn-Uranus-Conjunction': {
    name: 'Saturn Conjunction Uranus',
    frequency: 'Occurs approximately every 45 years',
    duration: '8-14 months (with retrograde periods)',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    aspectMeaning: 'Revolutionary restructuring and breakthrough discipline! This rare generational conjunction merges Saturn\'s structure with Uranus\'s revolution, creating innovative systems, structured freedom, disciplined awakening, and radical responsibility. Old structures that must evolve will break; new systems that honor both order and innovation emerge. Expect sudden changes to established systems, revolutionary approaches to tradition, structured breakthroughs, and freedom through wise discipline. Neither pure rebellion nor rigid control - conscious evolution of structures.',
    loveRelationships: 'Relationship structure revolutionizes or commitment becomes more authentic and free. May suddenly commit to unconventional partnership or restructure existing relationship for more freedom. Traditional relationship forms evolve into progressive structures. Need commitment that honors both stability and individuality. Sudden relationship changes that ultimately create better foundation. Marriage or partnership based on authentic freedom not just convention. Neither complete instability nor rigid tradition - conscious committed authenticity.',
    familyHome: 'Family structures undergo revolutionary changes. Old family rules that no longer serve break down; progressive family systems emerge. May suddenly relocate or completely restructure home life. Parenting approaches become more progressive yet disciplined. Family traditions evolve to honor both roots and innovation. Sudden family changes create ultimately more authentic foundation. Home becomes space for both stability and freedom. Generational patterns consciously revolutionized.',
    businessCareer: 'Career structure revolutionizes completely! May suddenly change careers to more authentic path or restructure existing work for more freedom. Industry undergoes major systematic innovation. Leadership style becomes more progressive yet responsible. Success through innovative yet disciplined approaches. Entrepreneurship combining structure with breakthrough thinking. Traditional career path evolves or breaks entirely. Professional liberation through strategic revolution. New career systems emerge.',
    moneyFinances: 'Financial structures undergo revolutionary change. Traditional financial approaches break down; innovative systems emerge. May suddenly restructure finances for more freedom or completely change money management. Investments in both stable and revolutionary sectors. Financial liberation through disciplined innovation. Budget systems that honor both security and flexibility. Cryptocurrency meets traditional finance. Financial breakthroughs through systematic innovation. New financial foundation.',
    predictions: [
      'Major life structure suddenly changes - career, relationship, or living situation revolutionizes',
      'You break free from limiting tradition or system but build something better in its place',
      'Sudden career change toward more authentic work that still provides stability',
      'Relationship commits in unconventional way or traditional partnership gains more freedom',
      'Financial system you create balances security with innovation successfully',
      'Industry or field undergoes major systematic innovation you participate in or lead',
      'You will learn that true freedom requires structure and real structure allows freedom',
      'Old established pattern suddenly breaks - initially disruptive but ultimately liberating',
      'Revolutionary idea you implement with discipline creates lasting systematic change',
      'Generational shift happens - old ways evolve into progressive systems through your work'
    ]
  },

  'Saturn-Uranus-Opposition': {
    name: 'Saturn Opposition Uranus',
    frequency: 'Occurs approximately every 45 years (midpoint of Saturn-Uranus cycle)',
    duration: '8-14 months (with retrograde periods)',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    aspectMeaning: 'Maximum tension between structure and freedom, tradition and revolution, control and liberation. Pulled between established order and breakthrough change, security and authenticity, discipline and rebellion. Must integrate both - neither pure conformity nor pure chaos works. The opposition demands you find freedom WITHIN structure, innovate WITHIN responsibility, rebel CONSCIOUSLY not reactively. True liberation requires some foundation. Real structure allows some flexibility. Integration essential.',
    loveRelationships: 'Relationship tension between commitment and freedom. Feel torn between wanting security and needing space. Partner may want more structure while you need liberation (or vice versa). Traditional relationship expectations conflict with authentic needs. Must balance commitment with individuality. Neither total merger nor complete independence works. Integration: create committed partnership that honors both stability and freedom. Conscious relationship restructuring. Mature liberation.',
    familyHome: 'Family tension between tradition and progress. Old family rules feel limiting; complete rebellion seems irresponsible. Torn between family obligations and personal freedom. Established home structure conflicts with need for change. Must honor both family stability and individual authenticity. Integration: evolve family traditions consciously, create progressive yet stable home life. Neither rigid control nor abandoning responsibilities - wise family evolution.',
    businessCareer: 'Career tension between security and authentic calling. Established career path feels limiting; complete career change seems risky. Authority conflicts or workplace restrictions challenge you. Torn between conventional success and revolutionary path. Must balance security with authenticity. Integration: bring innovation into established field or add structure to revolutionary work. Neither selling out nor reckless rebellion - strategic authentic career evolution.',
    moneyFinances: 'Financial tension between security and freedom. Traditional investments feel limiting; pure innovation feels risky. May want financial freedom but need stability. Torn between conservative money management and revolutionary financial approaches. Must balance both. Integration: diversify between stable foundations and innovative opportunities. Neither pure safety nor pure risk - wise financial structure with flexibility.',
    predictions: [
      'You face choice between security and freedom in major life area - synthesis required',
      'Relationship requires balancing commitment with space - neither extreme works long-term',
      'Career tension between established position and authentic calling needs integration',
      'Financial decision between safety and innovation best resolved through balanced approach',
      'Authority conflict teaches you to honor both structure and authentic self-expression',
      'You will learn that true freedom requires foundation and real security allows flexibility',
      'Family situation demands both honoring tradition and allowing progressive evolution',
      'Sudden disruption to established order ultimately serves conscious restructuring',
      'Rebellion or restriction that seems intolerable reveals need for mature integration',
      'Breakthrough comes through finding freedom within responsibility not choosing one'
    ]
  },

  'Saturn-Uranus-Trine': {
    name: 'Saturn Trine Uranus',
    frequency: 'Occurs approximately 2-3 times during the 45-year Saturn-Uranus cycle',
    duration: '6-12 months (with retrograde periods)',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    aspectMeaning: 'Effortless innovative structure and breakthrough discipline! Structure and freedom flow naturally together. Revolutionary ideas gain practical foundation, established systems innovate gracefully, and authentic change happens with stability. Perfect time for systematic innovation, structured breakthroughs, disciplined liberation, and progressive institution-building. The universe supports conscious evolution. Innovation feels practical, structure feels freeing, and change happens with grace. Build new systems naturally.',
    loveRelationships: 'Relationship structure and freedom balance beautifully! Commitment deepens while both partners maintain authentic individuality. May formalize unconventional partnership naturally. Relationship evolves progressively while remaining stable. Both tradition and innovation honored. Partnership provides security and freedom simultaneously. Relationship agreements that honor both people work easily. Committed authentic love flows naturally. Stable liberation.',
    familyHome: 'Family structure evolves naturally toward more progressive yet stable form! Family traditions update gracefully. Home life balances routine with flexibility beautifully. May relocate or restructure home in ways that work for everyone. Progressive parenting approaches combine with healthy boundaries. Family provides both roots and wings naturally. Generational evolution happens smoothly. Stable innovative family.',
    businessCareer: 'Career innovation and professional structure flow beautifully! Perfect time for systematic career advancement, structured entrepreneurship, or innovative professional development. Leadership style balances tradition with progress naturally. Success through bringing innovation into established field. Professional reputation grows through reliable innovation. Career provides both security and authentic expression. Strategic breakthroughs work.',
    moneyFinances: 'Financial structure and innovation balance perfectly! Money management system that honors both security and growth works beautifully. Investments balanced between stable foundations and innovative opportunities succeed. Financial planning allows both discipline and flexibility. Innovative financial strategies implemented with wisdom. Wealth through systematic innovation. Secure financial freedom flows naturally.',
    predictions: [
      'Career advancement through innovative yet disciplined approach happens naturally',
      'Financial system balancing security and growth you create works beautifully long-term',
      'Relationship commitment deepens while both partners maintain authentic freedom',
      'Revolutionary idea you implement with structure gains recognition and lasting success',
      'Professional innovation within established field brings advancement and respect',
      'Home or life restructuring happens smoothly and improves both stability and freedom',
      'You build something new that honors both tradition and progress successfully',
      'Breakthrough happens through patient systematic innovation not rushed revolution',
      'Authority supports your progressive ideas because you present them strategically',
      'Perfect balance of structure and freedom creates lasting positive life changes'
    ]
  },

  'Saturn-Uranus-Square': {
    name: 'Saturn Square Uranus',
    frequency: 'Occurs approximately 4-5 times during the 45-year Saturn-Uranus cycle',
    duration: '6-12 months (with retrograde periods)',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    aspectMeaning: 'Revolutionary change through structural challenge and breaking tension! The square creates maximum friction between order and chaos, forcing evolution through crisis. Structures break under pressure for awakening, restrictions trigger rebellion, or impulsive changes create instability. May feel trapped and want to break free reactively or resist necessary change rigidly. However, tension produces crucial evolution if worked with consciously. The challenge: restructure wisely not destroy recklessly, liberate authentically not rebel impulsively, change progressively not chaotically.',
    loveRelationships: 'Relationship restrictions or sudden changes create growth challenges. May feel trapped in partnership and want to break free impulsively. Or partner suddenly changes creating instability. Commitment feels limiting; freedom feels scary. Relationship structures that worked no longer do. However, stagnant relationship patterns DO need evolving. The key: restructure partnership consciously not abandon impulsively. Neither staying in dead relationship nor leaving without working on patterns - conscious evolution through honest communication.',
    familyHome: 'Family structures feel restrictive or sudden family disruptions occur. May want to break free from family obligations impulsively. Or family member\'s rebellion creates chaos. Old family rules no longer work but complete chaos problematic. Torn between honoring family and personal freedom. However, unhealthy family patterns DO need changing. The key: evolve family dynamics consciously not escape or control. Restructure family relating through boundaries and authenticity.',
    businessCareer: 'Career restrictions or sudden workplace changes create intense pressure. May feel trapped in job and want to quit impulsively. Or company restructures suddenly creating uncertainty. Conflict with authority or rigid systems. However, stagnant career DOES need revolutionizing. The key: change career strategically not impulsively. Plan exit or negotiate changes rather than burning bridges. Neither tolerating intolerable situation nor quitting without preparation - strategic career revolution.',
    moneyFinances: 'Financial restrictions or sudden money disruptions. Traditional financial approaches feel limiting but impulsive changes risky. May want financial freedom but fear instability. Unexpected expenses disrupt budget. Financial structure breaks down requiring rebuilding. However, limiting money patterns DO need changing. The key: restructure finances consciously not reactively. Neither rigid limitation nor reckless freedom - wise financial evolution through strategic changes.',
    predictions: [
      'You feel intensely trapped in situation and tempted to break free impulsively - pause first',
      'Sudden disruption to established structure initially feels catastrophic but forces needed evolution',
      'Career or relationship that feels restrictive requires conscious restructuring not escape',
      'Financial pressure or unexpected expense forces examination of money patterns',
      'Authority conflict or restriction triggers rebellion - respond strategically not reactively',
      'You will learn difference between conscious liberation and impulsive destruction',
      'Structure you built breaks down revealing it wasn\'t serving authentic self anymore',
      'Tension between security and freedom ultimately produces more conscious balanced approach',
      'Crisis forces necessary change you were avoiding - ultimately growth opportunity',
      'Evolution happens through accepting that some structures must change not holding rigid'
    ]
  },

  'Saturn-Uranus-Sextile': {
    name: 'Saturn Sextile Uranus',
    frequency: 'Occurs approximately 2-3 times during the 45-year Saturn-Uranus cycle',
    duration: '5-10 months (with retrograde periods)',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    aspectMeaning: 'Opportunity for structured innovation through conscious initiative! Not automatic like the trine - you must reach for progressive evolution. Perfect time to begin systematic changes, structured experimentation, disciplined innovation, or conscious pattern-breaking. Doors to evolutionary change open if you knock strategically. Small progressive steps toward big structural change pay off. Opportunity favors those who combine discipline with innovation, wisdom with breakthrough thinking.',
    loveRelationships: 'Opportunity to evolve relationship structure consciously if you initiate it. Suggest new relationship agreement, try progressive date format, or renegotiate commitments authentically. Won\'t happen automatically - requires honest conversation. Can strengthen partnership through allowing more freedom within commitment if both participate. Small experiments in relationship structure succeed. Building partnership that honors both stability and authenticity takes initiative but works.',
    familyHome: 'Opportunity to update family structures through conscious innovation. Introduce progressive family rule, experiment with new home routine, or try unconventional family activity. Small changes toward more authentic family structure pay off. Family harmony grows through combining tradition with innovation. Works if you take action - propose the change, start the conversation, try the experiment. Building family environment that honors both roots and growth.',
    businessCareer: 'Career evolution opportunities through innovative yet strategic action. Perfect time to propose progressive project within established role, add innovative skill to traditional expertise, or network between conventional and progressive fields. Won\'t fall in lap - must demonstrate both reliability and innovation. Small strategic career experiments succeed. Mentorship bridging tradition and innovation if you seek it. Building career through progressive professionalism.',
    moneyFinances: 'Financial growth through smart systematic innovation. Research balanced investment approach then implement wisely. Update budget to allow both savings and flexibility. Learn about innovative financial tools while maintaining foundation. Small amounts invested in both stable and growth sectors work well. Financial education in progressive yet responsible wealth-building pays off. Building prosperity through strategic financial evolution.',
    predictions: [
      'Career opportunity for those who\'ve demonstrated both reliability and innovative thinking',
      'Financial strategy balancing security with calculated innovation you create works long-term',
      'Relationship evolves positively through conversation about structure and freedom you initiate',
      'Progressive skill or approach you systematically develop opens professional doors',
      'System or structure you consciously update works better than old rigid or chaotic approaches',
      'Mentor who bridges traditional expertise and innovative thinking offers guidance',
      'Small systematic experiments in life structure you try prove successful',
      'You will learn that conscious incremental change produces lasting evolution',
      'Authority receptive to progressive proposal you present professionally with planning',
      'Opportunity to evolve life structure through combining discipline with authentic innovation'
    ]
  },

  // ==========================================
  // SATURN-PLUTO ASPECTS (All 5)
  // ==========================================

  'Saturn-Pluto-Conjunction': {
    name: 'Saturn Conjunction Pluto',
    frequency: 'Occurs approximately every 33-38 years',
    duration: '10-18 months (with retrograde periods)',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Generational structural transformation and disciplined metamorphosis! This rare conjunction merges Saturn\'s structure with Pluto\'s total transformation, creating profound systematic change, empowered responsibility, death of old orders, and rebirth of foundations. Established systems that no longer serve will be eliminated; powerful new structures emerge from the ashes. Expect societal restructuring, institutional transformation, disciplined elimination of dead patterns, and profound empowerment through facing shadow of authority. Build through destruction. Empower through discipline. Phoenix institutions.',
    loveRelationships: 'Relationship structure undergoes total transformation or commitment is profoundly tested. Partnership must eliminate what\'s dead and rebuild on authentic foundation. Power dynamics in relationship reach crisis requiring restructuring. May formalize relationship through shadow work or end relationships that can\'t transform. Commitment becomes real through facing relationship depths honestly. Marriage or partnership rebuilt on psychological truth and authentic power-sharing. Neither surface relating nor power struggles - deep committed transformation.',
    familyHome: 'Family structures undergo generational transformation. Old family power dynamics or ancestral patterns must die; healthier family systems emerge. May deal with family crisis involving authority, control, or resources that ultimately restructures everything. Inheritance or family power transitions. Home foundation literally or metaphorically rebuilt. Family healing through confronting power shadows and rebuilding on truth. Generational karma resolved through disciplined shadow work. Family phoenix.',
    businessCareer: 'Career and professional structures undergo total transformation! May rise to positions of significant power and responsibility through crisis or elimination of old guard. Industry restructuring or total career metamorphosis. Success requires both strategic discipline and psychological depth. Leadership tested through pressure - emerge more powerful. Professional mastery through confronting career shadows. Build empire through disciplined elimination of what doesn\'t serve. Institutional transformation. Career rebirth through crisis.',
    moneyFinances: 'Financial structures undergo profound transformation and disciplined rebuilding. May face financial crisis requiring total restructuring or gain significant wealth through strategic transformation. Eliminate debt and rebuild finances systematically. Investments in transformation and restructuring sectors. Financial empowerment through disciplined shadow work around money and power. Wealth built through strategic elimination and focused discipline. Financial phoenix through systematic transformation. Power through fiscal responsibility.',
    predictions: [
      'Major life structure undergoes death-rebirth - career, family, or foundation transforms totally',
      'You gain significant power and authority through facing crisis with discipline and depth',
      'Financial restructuring or crisis ultimately creates stronger more empowered foundation',
      'Career reaches position of real responsibility through elimination of old guard or systems',
      'Relationship transforms through shadow work and rebuilding on authentic foundation or ends',
      'Family power dynamics reach crisis requiring confronting ancestral patterns and rebuilding',
      'You will learn that true power requires both discipline and psychological transformation',
      'Institutional or systematic change you participate in reshapes field or society',
      'Crisis or pressure reveals what structures must die so stronger ones can emerge',
      'Generational transformation happens - you become authority through disciplined depth work'
    ]
  },

  'Saturn-Pluto-Opposition': {
    name: 'Saturn Opposition Pluto',
    frequency: 'Occurs approximately every 33-38 years (midpoint of Saturn-Pluto cycle)',
    duration: '10-18 months (with retrograde periods)',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Maximum tension between structure and transformation, control and power, preservation and elimination. Pulled between maintaining order and total change, building up and tearing down, responsibility and metamorphosis. Must integrate both - neither rigid control nor destructive chaos works. The opposition demands you transform THROUGH discipline, empower THROUGH responsibility, rebuild THROUGH systematic elimination. Real power requires structure. True transformation needs wise timing. Integration creates lasting empowerment.',
    loveRelationships: 'Relationship tension between stability and transformation. May want security while partner wants total change (or vice versa). Pulled between commitment to existing structure and need for relationship rebirth. Power struggles over who controls relationship direction. Must balance preservation with transformation. Integration: restructure relationship through disciplined shadow work. Neither avoiding depth nor forcing transformation - wise committed metamorphosis. Empower partnership through honest structure.',
    familyHome: 'Family tension between maintaining traditions and transforming patterns. Torn between family responsibilities and need for liberation from toxic dynamics. Power struggles with family authority figures. Must honor both family structure and transformation needs. Family patterns that need dying conflict with desire for stability. Integration: transform family dynamics through disciplined boundaries and honest depth work. Neither perpetuating dysfunction nor abandoning family - empowered family restructuring.',
    businessCareer: 'Career tension between structural advancement and total career transformation. Offered authority role in dying system or drawn to transformational work without security. Power struggles with established authority. Must balance professional responsibility with authentic empowerment. Integration: bring disciplined transformation into established field or add structure to transformational work. Neither serving dead system nor destroying career - strategic empowered evolution.',
    moneyFinances: 'Financial tension between security and transformation. Traditional financial structure feels dead but complete overhaul feels risky. Power struggles over resources or control of finances. Must balance fiscal responsibility with necessary financial transformation. Integration: restructure finances through disciplined elimination of what doesn\'t serve. Neither rigid preservation nor destructive change - wise systematic financial metamorphosis. Empowered through balanced approach.',
    predictions: [
      'You face choice between maintaining dying structure and transforming completely - integrate both',
      'Relationship requires both commitment and transformation - can\'t have one without other',
      'Power struggle with authority teaches integration of structure and empowerment',
      'Career tension between secure position in old system and transformational calling',
      'Financial decision between preservation and transformation best resolved through discipline',
      'You will learn that real transformation requires structure and true power needs responsibility',
      'Family situation demands both honoring stability and allowing necessary elimination',
      'Authority crisis or power conflict ultimately produces more empowered structural wisdom',
      'Structure that feels dead must transform but chaos isn\'t answer - wise systematic change',
      'Integration of discipline and depth, structure and transformation, creates lasting power'
    ]
  },

  'Saturn-Pluto-Trine': {
    name: 'Saturn Trine Pluto',
    frequency: 'Occurs approximately 2-3 times during the 33-38 year Saturn-Pluto cycle',
    duration: '8-14 months (with retrograde periods)',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Effortless structural transformation and disciplined empowerment! Structure and depth work flow naturally together. Systematic elimination feels wise, disciplined transformation seems destined, and empowered building happens with grace. Perfect time for strategic metamorphosis, structured depth work, disciplined shadow integration, and building power through wisdom. The universe supports systematic transformation. Elimination feels right, discipline empowers, and phoenix moments have foundation. Transform systematically.',
    loveRelationships: 'Relationship transforms through natural disciplined depth work! Partnership evolves through structured shadow work and psychological honesty that feels right. Commitment deepens through facing relationship depths together systematically. Power shared wisely and lovingly. Relationship rebuilt on stronger foundation through natural elimination of dysfunctional patterns. Deep intimacy through disciplined vulnerability. Both partners empowered through committed transformation. Stable profound love.',
    familyHome: 'Family transformation through disciplined depth work flows naturally! Family patterns transform through systematic healing conversations. Old dysfunctions eliminated through natural honest confrontations. Family power restructures wisely. Home rebuilt or restructured powerfully and successfully. Family empowerment through facing shadows together with discipline. Generational patterns heal through committed work. Family foundation strengthened through transformation. Empowered family structure.',
    businessCareer: 'Career transformation and power building flow beautifully! Perfect time for strategic career transformation, systematic professional development, or disciplined empire-building. Rise to position of real authority through depth expertise. Success through research, strategy, psychology, or transformation industries. Professional empowerment through disciplined mastery. Career rebuilt on stronger foundation naturally. Strategic advancement through depth work. Powerful professional success.',
    moneyFinances: 'Financial transformation through disciplined strategic work! Wealth builds through systematic investment, strategic elimination of debt, and focused financial discipline. Perfect time for major financial restructuring - works smoothly. Money psychology transforms through shadow work. Investments in transformation sectors with good structure succeed. Financial empowerment through strategic planning and depth work. Systematic wealth-building. Empowered prosperity.',
    predictions: [
      'Career transformation happens naturally through disciplined depth work and strategic planning',
      'Financial restructuring or wealth-building through systematic discipline succeeds powerfully',
      'Relationship deepens through structured shadow work - commitment strengthens through depth',
      'Professional advancement to position of real authority flows through demonstrated mastery',
      'Systematic elimination of life patterns that don\'t serve creates space for empowerment',
      'Family healing through disciplined confrontation of dysfunction happens successfully',
      'You build something powerful and lasting through combining structure with transformation',
      'Strategic planning for major life change you create and implement systematically works',
      'Depth expertise or research you pursue with discipline brings recognition and power',
      'Transformation feels natural when approached with structure - phoenix with foundation'
    ]
  },

  'Saturn-Pluto-Square': {
    name: 'Saturn Square Pluto',
    frequency: 'Occurs approximately 4-5 times during the 33-38 year Saturn-Pluto cycle',
    duration: '8-14 months (with retrograde periods)',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Transformational challenge through structural crisis and power pressure! The square creates intense friction between preservation and elimination, forcing profound change through crushing pressure. Structures collapse under transformation pressure, control fails under power challenges, or resistance creates crisis. May feel oppressed by authority, trapped in dying system, or compulsively controlling. However, the crucible produces profound empowerment if worked with consciously. The challenge: transform systematically not chaotically, empower authentically not manipulatively, eliminate consciously not destructively.',
    loveRelationships: 'Relationship crisis or power struggles create transformational pressure. Control issues, manipulation, or toxic power dynamics surface. May feel trapped in relationship or compulsively try to change partner. Commitment feels oppressive or responsibility overwhelms. However, dysfunctional relationship patterns DO need eliminating. The key: transform relationship through honest boundaries and shadow work not control or avoidance. Neither dominating nor submitting - mutual empowerment through difficult honest work. Crisis catalyzes necessary relationship transformation.',
    familyHome: 'Family crisis involving power, control, or oppressive structures. May feel crushed by family responsibilities or face family member\'s destructive behavior. Toxic family authority or dysfunctional family systems reach breaking point. However, unhealthy family patterns DO need total elimination. The key: transform family dynamics through boundaries and depth work not replicating control patterns. Neither enabling dysfunction nor becoming tyrant - empowered authentic family restructuring through crisis.',
    businessCareer: 'Career crisis or oppressive workplace situations create intense pressure. May face abusive authority, toxic work environment, or company collapse. Feel trapped in career or face ruthless power dynamics. Intense pressure to perform or maintain control. However, dead-end career situations DO need eliminating. The key: transform career strategically through crisis not impulsively. Neither tolerating abuse nor becoming abusive - empowered professional transformation through facing shadow. Career phoenix through pressure.',
    moneyFinances: 'Financial crisis or power struggles around money. Debt pressure, financial collapse, or money control issues. May feel financially trapped or obsess about financial control. Resource conflicts or financial manipulation. However, dysfunctional money patterns DO need total transformation. The key: restructure finances through disciplined elimination not panic or rigidity. Neither financial chaos nor rigid control - empowered financial transformation through facing money shadows. Crisis catalyzes financial rebirth.',
    predictions: [
      'You face intense structural crisis or crushing pressure that forces profound transformation',
      'Power struggle or oppressive situation teaches difference between control and empowerment',
      'Financial crisis or debt pressure ultimately produces total financial restructuring',
      'Career situation becomes intolerable forcing necessary career transformation through crisis',
      'Relationship power dynamics reach breaking point requiring total honest restructuring',
      'You will learn that systems must sometimes collapse completely to rebuild stronger',
      'Authority oppression or control issues reveal where you must claim authentic power',
      'Crisis that feels overwhelming ultimately produces profound empowerment through depth work',
      'Responsibility pressure or structural demands force elimination of what you can\'t sustain',
      'Transformation happens through accepting crisis as catalyst not avoiding necessary change'
    ]
  },

  'Saturn-Pluto-Sextile': {
    name: 'Saturn Sextile Pluto',
    frequency: 'Occurs approximately 2-3 times during the 33-38 year Saturn-Pluto cycle',
    duration: '6-12 months (with retrograde periods)',
    planet1Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Opportunity for disciplined transformation through strategic initiative! Not automatic like the trine - you must reach for systematic depth work. Perfect time to begin structured shadow work, strategic elimination of patterns, disciplined psychological transformation, or systematic empowerment projects. Doors to power open if you knock strategically with depth. Small disciplined transformative steps toward big empowerment pay off. Opportunity favors those who combine structure with depth work, responsibility with shadow integration.',
    loveRelationships: 'Opportunity to strengthen relationship through disciplined depth work if you initiate. Suggest structured couples therapy, commit to shadow work schedule, or create framework for honest communication. Won\'t happen automatically - requires committed effort. Can empower partnership through systematic psychological honesty if both participate. Small regular depth conversations or structured intimacy practices strengthen bond. Building relationship through committed transformation takes discipline but works powerfully.',
    familyHome: 'Opportunity to transform family dynamics through systematic work. Start family therapy with structure, create framework for addressing family issues, or systematically work on generational patterns. Small disciplined steps toward family healing pay off. Family empowerment grows through combining structure with depth work. Works if you commit - schedule the sessions, create the framework, do the work systematically. Building healthy family through disciplined transformation.',
    businessCareer: 'Career empowerment opportunities through strategic depth work and discipline. Perfect time to systematically develop powerful expertise, research deeply with structure, or propose transformational project with solid planning. Won\'t fall in lap - must demonstrate both discipline and depth. Small systematic career moves toward power positions succeed. Mentorship with powerful person if you approach strategically. Building career authority through disciplined mastery.',
    moneyFinances: 'Financial empowerment through systematic transformation work. Create disciplined plan to eliminate debt, systematically research powerful investments, or structure financial psychology work. Small regular financial discipline combined with shadow work on money accumulates powerfully. Financial education in strategic wealth-building with psychological awareness pays off. Building prosperity through systematic financial transformation. Strategic empowered wealth.',
    predictions: [
      'Career opportunity in position of authority for those systematically building depth expertise',
      'Financial strategy combining disciplined savings with strategic transformation works long-term',
      'Relationship strengthens through committed regular shadow work or therapy you both commit to',
      'Systematic research or depth study you pursue with discipline produces powerful results',
      'Debt elimination plan or financial restructuring you create and follow systematically succeeds',
      'Mentor in position of power offers guidance if you approach with demonstrated discipline',
      'Family healing through structured therapy or committed depth work you initiate',
      'You will learn that systematic transformation produces lasting empowerment',
      'Professional project combining strategic planning with depth produces recognition',
      'Opportunity to build power through combining disciplined structure with psychological depth'
    ]
  },

  // ==========================================
  // URANUS-NEPTUNE ASPECTS (All 5)
  // ==========================================

  'Uranus-Neptune-Conjunction': {
    name: 'Uranus Conjunction Neptune',
    frequency: 'Occurs approximately every 171 years (last in 1993)',
    duration: '2-3 years (with retrograde periods)',
    planet1Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    planet2Energy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, illusion, and divine connection. It dissolves boundaries and merges with the infinite.',
    aspectMeaning: 'Generational spiritual awakening and mystical revolution! This extremely rare conjunction merges Uranus\'s revolution with Neptune\'s transcendence, creating collective spiritual breakthroughs, technological mysticism, dissolution of old spiritual systems, and radical compassion. Expect societal spiritual awakening, innovative spirituality, digital spirituality, revolutionary art and music, or liberation through divine connection. The generation born under this seeks to revolutionize spirituality and spiritualize revolution. Mystical breakthroughs through technology. Compassion through authenticity.',
    loveRelationships: 'Relationship based on spiritual connection AND personal freedom. May meet unconventional soulmate or relationship transcends traditional boundaries. Love that honors both mystical unity and individual authenticity. Spiritual partnership that allows complete freedom. Relationship may be long-distance, unconventional, or transcend normal categories. Divine love through radical acceptance. Neither codependent merger nor isolated independence - transcendent freedom. Mystical authentic love.',
    familyHome: 'Family spirituality revolutionizes or unconventional spiritual family emerges. Home becomes sanctuary for both meditation and innovation. Family connected through spiritual awareness and individual freedom. May create chosen family based on spiritual values. Progressive spiritual practices at home. Mystical connection honors everyone\'s uniqueness. Family transcends traditional forms. Spiritual community as family. Unconventional sacred space.',
    businessCareer: 'Career in revolutionary spiritual work, innovative arts, technology with soul, or compassionate innovation. Perfect for digital spirituality, progressive healing, visionary art, or humanitarian technology. Work transcends traditional categories - spiritual AND innovative. Career mission involves awakening collective consciousness. Success through authentic inspired vision. Revolutionary creative or healing work. Bringing divine into innovation.',
    moneyFinances: 'Financial approach balances spiritual trust with innovative systems. Money through creative, spiritual, or technological work. May profit from digital spirituality, visionary arts, or compassionate technology. Financial freedom through inspired innovation. Investments in spiritual tech or progressive healing. However, verify opportunities - idealistic schemes possible. Abundance through authentic spiritual innovation. Trust intuition but use discernment.',
    predictions: [
      'You participate in generational shift toward more authentic, innovative spirituality',
      'Career combines spiritual values with progressive innovation successfully',
      'Relationship transcends conventional boundaries while maintaining deep spiritual connection',
      'Creative or artistic breakthrough combines innovation with mystical inspiration',
      'You help revolutionize collective approach to spirituality, healing, or consciousness',
      'Technology and spirituality integrate in your work or life in meaningful ways',
      'Unconventional spiritual path that honors both freedom and divine connection calls you',
      'You will bridge awakening and transcendence, revolution and compassion, for collective',
      'Financial abundance flows through authentic spiritual or creative innovation',
      'Generation transformation toward unity consciousness through individual authenticity'
    ]
  },

  'Uranus-Neptune-Sextile': {
    name: 'Uranus Sextile Neptune',
    frequency: 'Occurs several times during the long Uranus-Neptune cycle',
    duration: '1-2 years (with retrograde periods)',
    planet1Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    planet2Energy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, illusion, and divine connection. It dissolves boundaries and merges with the infinite.',
    aspectMeaning: 'Opportunity for inspired innovation through conscious spiritual action! Doors open to integrate awakening with transcendence, innovation with compassion, freedom with unity. Perfect time to begin progressive spiritual practices, innovative creative projects, or compassionate revolutionary work. Small inspired authentic steps toward mystical breakthroughs pay off. Opportunity favors those who combine innovation with spirituality, freedom with love.',
    loveRelationships: 'Opportunity to bring spiritual depth and freedom into relationship if you initiate. Suggest meditation together, explore unconventional spiritual practices, or introduce progressive relationship concepts. Can deepen through honoring both mystical connection and individual authenticity. Small experiments in spiritual freedom strengthen bond. Building relationship that\'s both transcendent and liberating takes effort but works beautifully.',
    familyHome: 'Opportunity to introduce spiritual innovation into family life. Start family meditation with creative approach, use technology for spiritual connection, or try progressive spiritual practices at home. Small changes toward inspired spiritual family expression pay off. Family harmony through combining spirituality with freedom. Works if you introduce it - suggest the practice, share the inspiration.',
    businessCareer: 'Career opportunities in innovative spiritual or creative fields if you pursue them. Perfect time to launch digital spirituality project, propose progressive healing work, or network in visionary creative communities. Won\'t fall in lap - must demonstrate inspired innovation. Small career moves toward spiritually meaningful innovative work succeed. Mentorship in progressive spiritual or creative field possible.',
    moneyFinances: 'Financial growth through innovative spiritual or creative work and action. Research investments in spiritual technology, progressive healing, or visionary arts. Start side income through inspired creative or healing skills. Learn about values-based innovative finance. Small amounts invested in meaningful innovation grow. Building wealth through inspired progressive service.',
    predictions: [
      'Career opportunity in spiritual innovation or progressive healing appears if actively developing',
      'Creative project combining spiritual inspiration with innovation you start gains traction',
      'Relationship deepens through spiritual practice or progressive concept you introduce',
      'Workshop, retreat, or learning in innovative spirituality you attend opens doors',
      'Financial strategy combining spiritual values with innovation works if you create it',
      'Mentor in progressive spiritual or visionary creative field offers guidance if you reach out',
      'Family spiritual practice you introduce brings both depth and freedom',
      'You will learn that inspired action manifests mystical breakthroughs',
      'Progressive spiritual idea you share authentically resonates with others',
      'Opportunity to blend awakening and transcendence through conscious initiative'
    ]
  },

  'Uranus-Neptune-Square': {
    name: 'Uranus Square Neptune',
    frequency: 'Occurs multiple times during the long Uranus-Neptune cycle',
    duration: '1-2 years (with retrograde periods)',
    planet1Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    planet2Energy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, illusion, and divine connection. It dissolves boundaries and merges with the infinite.',
    aspectMeaning: 'Spiritual confusion through revolutionary tension! The square creates friction between awakening and transcendence, authenticity and illusion, freedom and surrender. May experience spiritual disillusionment, confusion about authentic path, or tension between individual truth and collective consciousness. However, the friction refines spiritual discernment and produces innovative mysticism. The challenge: honor both radical truth AND compassion, freedom AND unity, clarity AND mystery. Integration creates conscious spirituality.',
    loveRelationships: 'Relationship tension between freedom and spiritual unity. May want authentic independence while partner wants mystical merger (or vice versa). Spiritual idealization conflicts with need for truth. Confusion about whether relationship is divinely guided or escapist fantasy. Must balance spiritual connection with honest boundaries. Neither complete dissolution nor isolated awakening - conscious spiritual partnership with integrity.',
    familyHome: 'Family spiritual confusion or tension between tradition and innovation. May feel disillusioned with family spiritual beliefs or confused about family spiritual path. Torn between family unity and authentic spiritual truth. Spiritual bypassing of family issues possible. Must honor both compassion and clarity. Neither enabling through spirituality nor rejecting connection - honest spiritual family relating.',
    businessCareer: 'Career confusion between spiritual calling and practical reality. Spiritual work may feel confusing or innovative path may lack grounding. May be deceived or self-deceived about spiritual career. Tension between authentic truth and collective ideals. However, career DOES need more spiritual meaning. The key: ground spiritual vision in honest reality. Verify spiritual opportunities. Neither fantasy nor cynicism - discerning spiritual work.',
    moneyFinances: 'Financial confusion around spiritual abundance or innovative schemes. May invest based on spiritual beliefs without verification or innovative opportunity that seems too good to be true. Tension between spiritual money beliefs and authentic reality. However, financial approach MAY need more spiritual trust. The key: trust divine abundance while checking facts. Neither spiritual bypassing nor blocking blessings - wise spiritual prosperity.',
    predictions: [
      'You face confusion about spiritual path requiring discernment between truth and illusion',
      'Relationship spiritual idealization conflicts with need for authentic boundaries',
      'Financial opportunity seems divinely guided but requires thorough verification',
      'Career spiritual calling needs grounding in practical reality to manifest',
      'You learn to distinguish genuine spiritual insight from escapist fantasy',
      'Spiritual teacher or community charismatic but requires honest discernment',
      'Creative or spiritual project needs both inspiration AND practical structure',
      'Family situation requires both spiritual compassion AND honest boundaries',
      'Disillusionment with spiritual beliefs ultimately refines authentic spirituality',
      'Growth through integrating revolutionary truth with compassionate mystery'
    ]
  },

  'Uranus-Neptune-Trine': {
    name: 'Uranus Trine Neptune',
    frequency: 'Occurs several times during the long Uranus-Neptune cycle',
    duration: '1-2 years (with retrograde periods)',
    planet1Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    planet2Energy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, illusion, and divine connection. It dissolves boundaries and merges with the infinite.',
    aspectMeaning: 'Effortless spiritual innovation and mystical awakening! Revolution and transcendence flow naturally together. Spiritual breakthroughs happen with grace, innovative compassion feels natural, and authentic mysticism flows easily. Perfect time for progressive spiritual practices, visionary creative work, or compassionate revolution. The universe supports spiritual evolution. Awakening feels divinely guided, innovation serves unity, and freedom expands consciousness naturally. Inspired breakthroughs.',
    loveRelationships: 'Relationship beautifully balances spiritual depth and authentic freedom! May meet unconventional soulmate naturally or existing partnership evolves toward spiritual freedom. Both mystical connection and individual authenticity flow easily. Love transcends boundaries while honoring truth. Spiritual growth and personal liberation both supported. Relationship feels divinely guided yet authentically free. Transcendent authentic love.',
    familyHome: 'Family spirituality evolves naturally toward progressive authentic forms! Spiritual practices that honor both unity and individuality emerge easily. Family connected through mystical awareness and personal freedom. Home becomes sanctuary for inspired spiritual innovation. Family healing through compassionate truth. Generational spiritual evolution happens gracefully. Spiritually connected liberated family.',
    businessCareer: 'Career in innovative spiritual work flows beautifully! Perfect time for digital spirituality, progressive healing, visionary arts, or compassionate technology. Inspired creative or spiritual work succeeds naturally. Career mission of awakening consciousness manifests easily. Success through authentic spiritual innovation. Recognition for progressive spiritual or creative work. Meaningful abundant work.',
    moneyFinances: 'Financial abundance through spiritual innovation flows naturally! Money through progressive healing, visionary arts, spiritual technology, or inspired creativity. Investments in spiritual innovation succeed. Financial freedom through authentic inspired work. Divine abundance real and tangible. Generosity and prosperity balanced beautifully. Wealth through spiritual service.',
    predictions: [
      'Spiritual breakthrough or mystical awakening happens naturally and transforms consciousness',
      'Creative or visionary project combines innovation with spirituality and succeeds beautifully',
      'Relationship balances deep spiritual connection with authentic personal freedom effortlessly',
      'Career in progressive spiritual, healing, or creative work manifests naturally',
      'Financial abundance flows through inspired innovative spiritual or creative service',
      'You participate in collective spiritual evolution through authentic individual awakening',
      'Innovative spiritual practice or creative expression becomes ongoing source of growth',
      'Technology and spirituality integrate naturally in meaningful ways',
      'Freedom and unity, awakening and transcendence, both increase simultaneously',
      'Divine guidance and authentic truth align perfectly creating effortless spiritual evolution'
    ]
  },

  'Uranus-Neptune-Opposition': {
    name: 'Uranus Opposition Neptune',
    frequency: 'Occurs once during the long Uranus-Neptune cycle',
    duration: '1-2 years (with retrograde periods)',
    planet1Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    planet2Energy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, illusion, and divine connection. It dissolves boundaries and merges with the infinite.',
    aspectMeaning: 'Maximum tension between awakening and transcendence, truth and mystery, freedom and surrender. Pulled between radical authenticity and mystical dissolution, revolutionary clarity and compassionate acceptance, individual truth and collective consciousness. Must integrate both - neither pure rationality nor pure faith works. The opposition demands conscious spirituality that honors both truth AND mystery, freedom AND unity, clarity AND compassion. Integration creates mature mysticism.',
    loveRelationships: 'Relationship tension between authentic truth and spiritual idealization. May feel torn between honest individual needs and mystical unity. Partner wants spiritual merger while you need truth and space (or vice versa). Must balance spiritual connection with authentic boundaries. Neither complete dissolution nor isolated truth - integration of mystical love with honest individuality. Conscious spiritual partnership.',
    familyHome: 'Family tension between spiritual ideals and authentic reality. May feel disillusioned when family doesn\'t match spiritual vision or torn between family unity and personal truth. Must honor both compassionate connection and honest boundaries. Neither spiritual bypassing nor cynical rejection - wise spiritual family relating that honors both love and truth.',
    businessCareer: 'Career tension between spiritual mission and authentic practical reality. Spiritual calling may conflict with need for clarity and independence. Drawn to mystical work but need innovative freedom. Must balance inspired service with authentic truth. Neither losing self in collective nor isolating from purpose - integration of spiritual mission with authentic innovation.',
    moneyFinances: 'Financial tension between spiritual abundance faith and innovative practical reality. Spiritual money beliefs may bypass honest assessment or innovative approach may lack faith. Must balance divine trust with authentic verification. Neither blind faith nor blocking blessings - integration of spiritual prosperity consciousness with honest innovative financial planning.',
    predictions: [
      'You face choice between spiritual beliefs and authentic truth - both have value, integrate',
      'Relationship requires balancing mystical connection with honest individual boundaries',
      'Spiritual path or teacher requires discernment - honor inspiration while maintaining clarity',
      'Career balancing spiritual service with authentic freedom and innovation needed',
      'Financial decision between spiritual trust and practical innovation resolved through wisdom',
      'You will learn that truth AND compassion, freedom AND unity are both necessary',
      'Family situation demands both spiritual love and honest authentic boundaries',
      'Spiritual disillusionment ultimately serves more conscious authentic spirituality',
      'Creative work requires both mystical inspiration and innovative honest structure',
      'Integration of awakening and transcendence creates mature conscious spirituality'
    ]
  },

  // ==========================================
  // URANUS-PLUTO ASPECTS (All 5)
  // ==========================================

  'Uranus-Pluto-Conjunction': {
    name: 'Uranus Conjunction Pluto',
    frequency: 'Occurs approximately every 110-140 years (last in 1965-1966)',
    duration: '3-4 years (with retrograde periods)',
    planet1Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Generational revolutionary transformation and total evolutionary breakthrough! This extremely rare conjunction merges Uranus\'s revolution with Pluto\'s total transformation, creating massive societal upheaval, collective death-rebirth, radical empowerment, and quantum evolutionary leaps. The generation born under this transforms civilization through revolutionary power, radical truth, and total system change. Expect institutional collapse and rebirth, technological transformation, liberation through elimination, and empowerment through awakening. Nothing remains unchanged. Total revolutionary metamorphosis.',
    loveRelationships: 'Relationship undergoes total revolutionary transformation or unconventional powerful connection emerges. Partnership must evolve or die - no middle ground. Power and freedom both essential. Relationship transformed through radical honesty and authentic empowerment. Unconventional committed depth. Neither control nor instability - revolutionary empowered partnership through total honesty. Transformed liberated love.',
    familyHome: 'Family power structures revolutionize completely or unconventional family emerges from crisis. Old family patterns die through awakening; authentic family systems born. Family transformation through revolutionary truth-telling. Generational trauma eliminated through radical healing. Home completely transformed or relocated. Family liberation through empowered honesty. Revolutionary family rebirth.',
    businessCareer: 'Career completely revolutionizes or powerful breakthrough in transformational work! May change careers entirely toward empowered authentic calling. Industry undergoes total revolutionary transformation. Success through radical innovation in transformation sectors. Professional liberation through powerful truth. Empire-building through revolutionary disruption. Career phoenix through awakening. Total professional metamorphosis.',
    moneyFinances: 'Financial system completely transforms or wealth through revolutionary transformation. Traditional finance revolutionizes. May gain power through innovative transformation industries. Financial liberation through eliminating old money patterns entirely. Investments in revolutionary transformation sectors. Cryptocurrency, disruptive tech, transformation. However, volatile - revolutionary but risky. Total financial metamorphosis possible.',
    predictions: [
      'You participate in generational revolutionary transformation of societal power structures',
      'Career undergoes complete metamorphosis toward authentic empowered calling',
      'Financial approach revolutionizes - old money patterns die, innovative systems emerge',
      'Relationship transforms totally through radical honesty or ends to allow authentic rebirth',
      'You help disrupt and transform outdated systems through revolutionary empowered action',
      'Family power dynamics undergo total revolutionary healing and restructuring',
      'Professional success through innovative disruption in transformation industries',
      'You will embody generational shift toward authentic power through revolutionary truth',
      'Crisis or upheaval catalyzes total life transformation toward empowered freedom',
      'Generational mission: transform civilization through revolutionary awakening to authentic power'
    ]
  },

  'Uranus-Pluto-Square': {
    name: 'Uranus Square Pluto',
    frequency: 'Occurs several times during the long Uranus-Pluto cycle (like 2012-2015)',
    duration: '2-3 years (with retrograde periods)',
    planet1Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Revolutionary transformation through crisis and radical pressure! The square creates intense friction between liberation and elimination, forcing evolutionary change through upheaval. Systems break down, power structures crumble, sudden transformations occur. Impulsive revolution or compulsive transformation possible. However, the pressure produces necessary evolution. The challenge: transform systematically not chaotically, revolutionize consciously not destructively, empower authentically not manipulatively. Crisis catalyzes awakening.',
    loveRelationships: 'Relationship crisis or sudden transformation creates intense pressure. Power struggles combined with freedom needs. May want to break free while relationship needs deep work. Sudden changes or control issues. However, stagnant power dynamics DO need revolutionizing. The key: transform through honest liberation not impulsive escape. Neither dominating nor fleeing - revolutionary empowerment through crisis work. Conscious relationship metamorphosis.',
    familyHome: 'Family crisis involving power and freedom. Sudden family upheavals or revolutionary family changes. May feel trapped in family dynamics and want sudden freedom. Family power structures break down under pressure. However, toxic family patterns DO need revolutionary transformation. The key: transform family through authentic boundaries not impulsive rebellion. Crisis catalyzes family evolution.',
    businessCareer: 'Career crisis or sudden revolutionary changes create pressure. Industry disruption, company transformation, or impulsive career change. Power struggles combined with need for freedom. May feel trapped and want sudden exit. However, dead career situations DO need revolutionary transformation. The key: revolutionize career consciously through crisis not impulsively. Strategic career transformation through disruption.',
    moneyFinances: 'Financial crisis or sudden money transformation. Revolutionary financial changes or disruptive economic forces. May take impulsive financial risks or face sudden losses. However, dysfunctional money patterns DO need revolutionary transformation. The key: transform finances through conscious innovation not panic. Neither reckless revolution nor rigid control - wise financial metamorphosis through crisis.',
    predictions: [
      'You face crisis forcing sudden transformation and revolutionary change - ultimately evolutionary',
      'Power struggle combined with freedom needs teaches authentic empowered liberation',
      'Financial disruption or crisis ultimately produces revolutionary financial transformation',
      'Career situation becomes intolerable forcing necessary revolutionary career metamorphosis',
      'Relationship power dynamics and freedom needs collide requiring total honest transformation',
      'You will learn that evolutionary change sometimes requires crisis and disruption',
      'System or structure breaks down suddenly revealing it must transform entirely',
      'Crisis pressure produces revolutionary awakening to authentic power',
      'Sudden upheaval forces elimination of what can\'t evolve - makes space for rebirth',
      'Transformation through accepting revolutionary change as evolutionary necessity'
    ]
  },

  'Uranus-Pluto-Trine': {
    name: 'Uranus Trine Pluto',
    frequency: 'Occurs several times during the long Uranus-Pluto cycle',
    duration: '2-3 years (with retrograde periods)',
    planet1Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Effortless revolutionary transformation and empowered liberation! Awakening and metamorphosis flow naturally together. Revolutionary changes feel destined, transformational breakthroughs happen with grace, and empowered freedom flows easily. Perfect time for radical transformation, innovative depth work, or liberated empowerment. The universe supports evolutionary change. Revolution serves transformation, freedom empowers, and phoenix moments feel natural. Conscious evolution.',
    loveRelationships: 'Relationship transforms naturally toward empowered freedom! Partnership evolves through authentic honesty and revolutionary depth work easily. Both transformation and liberation flow naturally. Power shared freely, freedom runs deep. Relationship becomes vehicle for mutual empowerment and awakening. Revolutionary intimacy through natural honesty. Transformed liberated partnership.',
    familyHome: 'Family transformation and liberation flow naturally! Old patterns eliminated easily through awakening. Family power restructures toward authentic freedom. Generational trauma heals through natural revolutionary honesty. Home transforms or relocates successfully. Family empowerment through honest liberation. Revolutionary family healing happens gracefully. Empowered free family.',
    businessCareer: 'Career revolutionary transformation flows beautifully! Perfect time for major career change, innovative transformation work, or empowered entrepreneurship. Success through disruptive innovation, transformation industries, or revolutionary leadership. Professional liberation through authentic power. Career evolves toward empowered freedom naturally. Revolutionary professional success.',
    moneyFinances: 'Financial transformation through innovative liberation flows naturally! Wealth through revolutionary industries, transformation sectors, or disruptive innovation. Financial freedom through empowered strategic changes. Investments in breakthrough transformation technologies succeed. Money liberation through eliminating limiting patterns easily. Revolutionary financial empowerment.',
    predictions: [
      'Career transforms naturally toward more empowered authentic revolutionary calling',
      'Financial breakthrough through innovative transformation or disruptive technology',
      'Relationship evolves beautifully through natural deep honesty creating empowered freedom',
      'Major life transformation happens gracefully producing liberation and authentic power',
      'Professional success through revolutionary innovation in transformation fields',
      'Family healing through natural elimination of toxic patterns and empowered truth',
      'You eliminate what no longer serves effortlessly through awakening - space fills with power',
      'Revolutionary changes you make flow easily and produce lasting empowerment',
      'Crisis resolves naturally through deep revolutionary work producing unexpected freedom',
      'Evolution feels natural not forced - phoenix liberation through graceful transformation'
    ]
  },

  'Uranus-Pluto-Sextile': {
    name: 'Uranus Sextile Pluto',
    frequency: 'Occurs several times during the long Uranus-Pluto cycle',
    duration: '2-3 years (with retrograde periods)',
    planet1Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Opportunity for empowered revolution through conscious transformation! Doors open to integrate liberation with depth, innovation with elimination, freedom with power. Perfect time to begin revolutionary transformation projects, innovative depth work, or liberating empowerment practices. Small revolutionary transformative steps toward big empowered breakthroughs pay off. Opportunity favors those who combine awakening with shadow work, freedom with depth.',
    loveRelationships: 'Opportunity to transform relationship through revolutionary honesty if you initiate. Suggest radical truth-telling, explore power dynamics authentically, or introduce liberating depth practices. Can empower partnership through honest revolutionary shadow work if both participate. Small authentic liberating conversations strengthen bond. Building relationship through empowered freedom takes courage but works powerfully.',
    familyHome: 'Opportunity to revolutionize family dynamics through transformational work. Address family power patterns authentically, introduce revolutionary honesty, or courageously face family shadows. Small steps toward empowered family liberation pay off. Family healing through combining transformation with awakening. Works if you initiate - start the conversation, face the truth.',
    businessCareer: 'Career opportunities in revolutionary transformation fields if you pursue them. Perfect time to develop disruptive innovation expertise, propose transformational breakthrough project, or network in revolutionary industries. Small strategic career moves toward empowered innovative transformation succeed. Mentorship in powerful transformational field possible.',
    moneyFinances: 'Financial empowerment through revolutionary transformation work. Research investments in disruptive transformation technologies, innovative depth industries, or revolutionary change sectors. Start income through breakthrough transformation skills. Small amounts invested in revolutionary sectors accumulate powerfully. Building wealth through empowered innovative transformation.',
    predictions: [
      'Career opportunity in transformational innovation for those developing revolutionary expertise',
      'Investment in disruptive transformation sector you research grows substantially',
      'Relationship strengthens through revolutionary honesty or depth work you courageously initiate',
      'Transformational breakthrough project combining innovation with depth you start succeeds',
      'Family healing through addressing power dynamics or shadows you courageously raise',
      'You will learn that conscious revolutionary transformation produces lasting empowerment',
      'Mentor in powerful transformational innovation field offers guidance if you approach authentically',
      'System or pattern you consciously revolutionize transforms powerfully',
      'Crisis or shadow you face with revolutionary honesty produces unexpected liberation',
      'Opportunity to empower life through combining awakening truth with transformational depth'
    ]
  },

  'Uranus-Pluto-Opposition': {
    name: 'Uranus Opposition Pluto',
    frequency: 'Occurs once during the long Uranus-Pluto cycle',
    duration: '2-3 years (with retrograde periods)',
    planet1Energy: 'Uranus represents revolution, awakening, liberation, innovation, sudden breakthroughs, and radical authenticity. It breaks patterns, shocks systems, and demands freedom.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Maximum tension between revolution and transformation, freedom and power, awakening and depth. Pulled between sudden change and deep process, liberation and elimination, breakthrough and metamorphosis. Must integrate both - neither impulsive rebellion nor controlling transformation works. The opposition demands you transform THROUGH awakening, empower THROUGH freedom, revolutionize THROUGH depth. True liberation requires shadow work. Real power needs authenticity. Integration creates conscious evolution.',
    loveRelationships: 'Relationship tension between revolutionary freedom and transformational depth. May want sudden liberation while partner wants deep work (or vice versa). Pulled between breaking free and transforming together. Power dynamics conflict with freedom needs. Must balance both. Integration: revolutionize relationship through deep honest work. Neither impulsive escape nor controlling transformation - conscious empowered evolution.',
    familyHome: 'Family tension between revolutionary independence and transformational healing. May want sudden freedom from family while deep work needed. Torn between liberation and facing family shadows. Power struggles combined with freedom needs. Must honor both. Integration: transform family through authentic liberation. Neither escaping shadows nor trapped in control - empowered honest family evolution.',
    businessCareer: 'Career tension between revolutionary change and transformational depth. Want sudden career freedom while deep professional transformation needed. Pulled between disruptive innovation and strategic depth work. Must balance breakthrough with power. Integration: revolutionize career through transformational mastery. Neither impulsive change nor controlling preservation - strategic authentic career evolution.',
    moneyFinances: 'Financial tension between revolutionary freedom and transformational power. Want sudden financial liberation while deep money work needed. Torn between disruptive financial innovation and strategic wealth transformation. Must balance both. Integration: revolutionize finances through transforming money psychology. Neither reckless freedom nor rigid control - empowered conscious financial evolution.',
    predictions: [
      'You face choice between sudden change and deep transformation - both needed, integrate',
      'Relationship requires both revolutionary honesty and transformational depth work',
      'Career balancing innovative breakthrough with strategic transformational mastery needed',
      'Financial decision between disruptive innovation and transformational depth resolved through wisdom',
      'Power struggle with authority while seeking freedom teaches authentic empowered liberation',
      'You will learn that true revolution requires transformation and real power needs freedom',
      'Family situation demands both liberating truth and transformational shadow work',
      'Crisis reveals that neither escape nor control works - conscious evolution needed',
      'Sudden awakening must integrate with deep transformation for lasting change',
      'Integration of freedom and power, revolution and depth, creates conscious empowered evolution'
    ]
  },

  // ==========================================
  // NEPTUNE-PLUTO ASPECTS (All 5)
  // ==========================================

  'Neptune-Pluto-Sextile': {
    name: 'Neptune Sextile Pluto',
    frequency: 'Occurs for extended periods (like 1940s-1980s, 2025-2130s)',
    duration: 'Active for decades as background generational influence',
    planet1Energy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, illusion, and divine connection. It dissolves boundaries and merges with the infinite.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Generational opportunity for spiritual transformation through conscious action! This long-duration aspect creates background potential for integrating transcendence with depth, spirituality with power, compassion with transformation. Generations born under this have natural ability to transform spiritually and spiritualize transformation. Opportunity to heal collective through spiritual depth work, transform consciousness, or empower compassion. Must be activated consciously through individual initiative.',
    loveRelationships: 'Opportunity for deep spiritual intimacy if you both commit to depth work. Relationship can access both mystical transcendence and transformational power through conscious practice. Suggest spiritual shadow work together, couples therapy with spiritual dimension, or deep soulful vulnerability practices. Building spiritually transformative partnership takes initiative but taps generational potential.',
    familyHome: 'Opportunity to heal family karma through spiritual depth work. Generational family patterns can transform through combining spirituality with shadow work. Start family spiritual healing practices, address ancestral trauma with compassion, or create space for transcendent family intimacy. Transformational spiritual family healing possible through conscious commitment.',
    businessCareer: 'Career in transformational spirituality or spiritual transformation work has generational support. Perfect for depth psychology with spiritual awareness, healing work combining shadow integration with divine connection, or compassionate transformation industries. Success through spiritual depth work. Must activate potential through developing expertise and initiative.',
    moneyFinances: 'Financial abundance through spiritual transformation work possible. Money through healing, depth psychology, spiritual counseling, or transformational spirituality. Investments in spiritual healing or consciousness transformation sectors. Must activate generational potential through developing skills and taking action. Wealth through transformational spiritual service.',
    predictions: [
      'You can develop natural talent for spiritual depth work - psychology meets spirituality',
      'Career in transformational healing or spiritual psychology taps generational potential',
      'Relationship reaches transcendent depths through shadow work you both commit to',
      'Family generational healing through spiritual depth practices you initiate',
      'Financial abundance flows through developing spiritual transformation expertise',
      'You bridge spirituality and psychology, transcendence and depth, for collective healing',
      'Spiritual practice combined with shadow work you pursue produces profound transformation',
      'Generational gift: ability to transform compassionately and spiritualize power',
      'Professional success through combining spiritual wisdom with transformational depth',
      'You activate generational potential through consciously developing spiritual depth skills'
    ]
  },

  'Neptune-Pluto-Conjunction': {
    name: 'Neptune Conjunction Pluto',
    frequency: 'Occurs approximately every 492 years (last in 1890s)',
    duration: 'Active for 10-15 years',
    planet1Energy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, illusion, and divine connection. It dissolves boundaries and merges with the infinite.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Generational spiritual transformation and mystical metamorphosis! This extremely rare conjunction represents massive collective consciousness evolution, spiritual death-rebirth of civilization, and transformation of collective mysticism. The generation embodies fusion of transcendence and power, compassion and depth, spirituality and transformation. Collective consciousness undergoes total spiritual regeneration. Mystical empowerment. Divine transformation.',
    loveRelationships: 'Generational capacity for transcendent transformational love. Relationships can access profound spiritual depth and transformational intimacy. Love becomes vehicle for both divine connection and psychological healing. Spiritual soulmate bonds with transformational power. Deep mystical union through shadow work. Transcendent empowered love.',
    familyHome: 'Generational family consciousness transformation. Family karma can undergo profound spiritual healing. Ancestral patterns transformed through divine compassion. Family becomes vehicle for collective consciousness evolution. Home as sacred space for transformational spirituality. Mystical family rebirth.',
    businessCareer: 'Generational talent for transformational spiritual work. Career success through depth psychology, spiritual healing, consciousness transformation, or mystical arts. Professional mission involves transforming collective consciousness. Work as vehicle for spiritual evolution. Empowered spiritual service.',
    moneyFinances: 'Generational relationship with money transforms spiritually. Wealth consciousness evolves toward spiritual values and transformational service. Money as energy for consciousness transformation. Financial power through spiritual depth work. Abundance through transformational spiritual service.',
    predictions: [
      'You embody generational capacity for profound spiritual transformation',
      'Career in consciousness transformation or spiritual depth work is life purpose',
      'Relationship accesses transcendent depths through transformational intimacy',
      'You participate in collective consciousness evolution through spiritual depth work',
      'Family generational karma transformed through spiritual shadow integration',
      'Financial abundance through serving collective consciousness transformation',
      'You bridge mysticism and psychology for collective spiritual evolution',
      'Generational mission: transform civilization consciousness through spiritual depth',
      'Professional success through empowered compassionate transformational work',
      'You activate rare generational gift: mystical transformation power'
    ]
  },

  'Neptune-Pluto-Square': {
    name: 'Neptune Square Pluto',
    frequency: 'Rare - occurs infrequently in the long cycle',
    duration: 'Active for several years when it occurs',
    planet1Energy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, illusion, and divine connection. It dissolves boundaries and merges with the infinite.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Spiritual transformation through crisis and collective shadow confrontation. Tension between transcendence and depth, spiritual ideals and transformational reality, compassion and power. Collective spiritual illusions surface for transformation. May experience spiritual disillusionment serving deeper awakening. The challenge: transform spirituality consciously, spiritualize transformation authentically. Crisis refines collective consciousness.',
    loveRelationships: 'Relationship crisis around spiritual depth or transformational spirituality. Power struggles combined with spiritual confusion. Must transform spiritual idealization while deepening authentic mystical connection. Crisis serves deeper spiritual intimacy. Neither spiritual bypassing nor cynical depth - conscious transformational spirituality in partnership.',
    familyHome: 'Family spiritual crisis or transformational pressure on family consciousness. Generational spiritual illusions surface. Family karma reaches crisis requiring deep spiritual transformation. Must face family shadows with compassion. Crisis catalyzes family spiritual evolution.',
    businessCareer: 'Career crisis in spiritual or transformational work or spiritual confusion about power. Professional spiritual ideals challenged by transformational reality. Must ground spiritual work in authentic depth. Crisis refines spiritual professional mission.',
    moneyFinances: 'Financial spiritual illusions or transformational money crisis. Spiritual abundance beliefs challenged by power realities. Must transform money consciousness through depth work. Crisis serves financial spiritual maturation.',
    predictions: [
      'You face spiritual crisis requiring transformation of consciousness',
      'Collective spiritual illusions surface for healing transformation',
      'Career spiritual ideals tested by transformational reality - integration needed',
      'Relationship spiritual bypassing must transform into authentic depth work',
      'Financial spiritual beliefs require grounding in transformational reality',
      'You learn that true spirituality requires shadow work and real power needs compassion',
      'Family spiritual illusions surface requiring honest transformational work',
      'Crisis serves collective consciousness evolution through spiritual transformation',
      'Spiritual disillusionment ultimately produces more authentic mystical depth',
      'Transformation of spirituality through crisis creates conscious collective evolution'
    ]
  },

  'Neptune-Pluto-Trine': {
    name: 'Neptune Trine Pluto',
    frequency: 'Rare - occurs infrequently in the long cycle',
    duration: 'Active for several years when it occurs',
    planet1Energy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, illusion, and divine connection. It dissolves boundaries and merges with the infinite.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Effortless spiritual transformation and mystical empowerment! Transcendence and depth flow naturally together. Collective consciousness evolution happens with grace. Spiritual metamorphosis feels destined. Perfect time for transformational spirituality, depth mysticism, or empowered compassion. The universe supports consciousness evolution. Spirituality transforms naturally, power spiritualizes, and collective healing flows.',
    loveRelationships: 'Relationship spiritually transforms naturally! Partnership deepens through mystical intimacy and shadow work that flows easily. Transcendent love empowered by psychological depth. Spiritual connection strengthened by transformational honesty. Soulmate depths through natural authentic vulnerability. Mystically empowered love.',
    familyHome: 'Family consciousness evolution flows naturally! Generational karma heals through spiritual depth work that feels right. Family transforms spiritually through compassionate shadow integration. Ancestral patterns released through divine grace. Home becomes sacred transformational space naturally. Spiritually empowered family.',
    businessCareer: 'Career in transformational spirituality flows beautifully! Success through depth psychology, spiritual healing, consciousness transformation work. Professional mission of collective evolution manifests naturally. Recognition for authentic spiritual depth work. Career as vehicle for mystical empowerment. Abundant spiritual service.',
    moneyFinances: 'Financial abundance through transformational spiritual work flows naturally! Wealth through consciousness evolution, spiritual depth work, or transformational healing. Money serves spiritual transformation mission. Financial empowerment through mystical service. Abundant spiritual prosperity.',
    predictions: [
      'Spiritual transformation happens naturally producing profound consciousness evolution',
      'Career in transformational spirituality succeeds beautifully serving collective healing',
      'Relationship reaches transcendent depths through shadow work flowing easily',
      'Family generational healing through spiritual transformation happens gracefully',
      'Financial abundance flows through authentic transformational spiritual service',
      'You facilitate collective consciousness evolution through natural spiritual depth',
      'Spiritual practice and shadow work integrate effortlessly producing empowerment',
      'Professional success through authentic mystical transformation work',
      'Collective healing happens through your spiritually empowered transformational work',
      'Grace flows through transformation - mystical metamorphosis feels natural and destined'
    ]
  },

  'Neptune-Pluto-Opposition': {
    name: 'Neptune Opposition Pluto',
    frequency: 'Extremely rare in the long cycle',
    duration: 'Active for several years when it occurs',
    planet1Energy: 'Neptune represents spirituality, transcendence, dreams, compassion, imagination, illusion, and divine connection. It dissolves boundaries and merges with the infinite.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, depth psychology, elimination, regeneration, and total metamorphosis. It destroys to rebuild stronger.',
    aspectMeaning: 'Maximum tension between spirituality and transformation, transcendence and depth, compassion and power. Collective consciousness torn between mystical dissolution and transformational empowerment. Must integrate both - neither spiritual bypassing nor psychological reductionism works. The opposition demands spirituality grounded in depth and transformation infused with compassion. Integration creates conscious collective evolution.',
    loveRelationships: 'Relationship tension between spiritual idealization and transformational reality. Must balance transcendent connection with psychological depth work. Neither spiritual bypassing nor cynical analysis - integration of mystical love with honest shadow work. Conscious spiritually empowered partnership.',
    familyHome: 'Family tension between spiritual unity and transformational truth. Must honor both compassionate connection and deep healing work. Neither spiritual denial nor destructive confrontation - wise family evolution through spiritual depth integration.',
    businessCareer: 'Career tension between spiritual service and transformational power. Must balance mystical mission with authentic empowerment. Neither spiritual martyrdom nor ruthless transformation - integration of compassionate service with empowered depth work.',
    moneyFinances: 'Financial tension between spiritual abundance consciousness and transformational money reality. Must integrate divine trust with deep money psychology work. Neither spiritual bypassing nor materialist reduction - wise spiritual financial transformation.',
    predictions: [
      'You face choice between spiritual ideals and transformational depth - integrate both',
      'Collective consciousness requires both transcendent compassion and honest shadow work',
      'Career balancing spiritual service with authentic transformational power needed',
      'Relationship requiring both mystical connection and psychological depth work',
      'You will learn that true spirituality requires depth and real transformation needs compassion',
      'Financial approach integrating spiritual abundance with transformational money psychology',
      'Family healing requiring both divine love and honest transformational work',
      'Collective evolution through integrating spirituality and psychology',
      'Spiritual maturation through accepting shadow and psychological depth through divine grace',
      'Integration of transcendence and transformation creates conscious collective spiritual evolution'
    ]
  },

  // ==========================================
  // SUN-JUPITER ASPECTS (All 5)
  // ==========================================

  'Sun-Jupiter-Conjunction': {
    name: 'Sun Conjunction Jupiter',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    aspectMeaning: 'Annual renewal of optimism, growth, and life purpose expansion! The Sun\'s identity merges with Jupiter\'s growth, creating opportunities, confidence, and expansive self-expression. Perfect time for new beginnings, taking risks, pursuing goals, and believing in yourself. Luck and abundance flow naturally. Your authentic self attracts opportunities. Generosity and faith combine. Annual boost of optimism and life force.',
    loveRelationships: 'Relationship optimism and growth! Love feels abundant and expansive. Great time to take relationship to next level, plan adventures together, or express generous love. Confidence in partnership attracts positive developments. May meet someone inspiring or relationship grows through shared optimism. Authentic self-expression in love. Generous affection.',
    familyHome: 'Family joy and expansion! Perfect time for family celebrations, gatherings, or positive developments. Generosity with family. May expand family through new addition or deepen family bonds. Home improvement projects succeed. Family members feel optimistic. Your vitality uplifts family. Abundant family love.',
    businessCareer: 'Career opportunities and professional growth! Excellent time to pursue advancement, pitch ideas, or take professional risks. Confidence and optimism attract success. Leadership shines. May receive recognition or new opportunities. Perfect for launching projects or expanding business. Professional abundance. Authentic career expression.',
    moneyFinances: 'Financial opportunities and abundance! Money flows more easily. Good time for investments, asking for raise, or financial expansion. Generosity attracts abundance. However, avoid overconfidence or overspending. Trust but verify opportunities. Financial optimism grounded in reality works best. Prosperous period.',
    predictions: [
      'Significant opportunity appears this week - pursue it with confidence',
      'Your authentic self-expression attracts positive recognition and growth',
      'Financial opportunity or increase comes through being generous and optimistic',
      'Relationship grows through shared adventure, optimism, or taking next step',
      'Career advancement possible through confident authentic leadership',
      'Perfect timing to launch project, pursue goal, or take calculated risk',
      'You feel more confident, optimistic, and purposeful than usual',
      'Generosity you show returns as abundance and opportunities',
      'Teaching, sharing wisdom, or inspiring others brings joy and growth',
      'Annual renewal of faith in yourself and life purpose'
    ]
  },

  'Sun-Jupiter-Opposition': {
    name: 'Sun Opposition Jupiter',
    frequency: 'Occurs once per year (opposite the conjunction)',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    aspectMeaning: 'Tension between ego and expansion, identity and growth, confidence and overconfidence. May feel pulled between authentic self and desire for more. Risk of overextending, exaggerating, or excessive optimism. However, also brings perspective on growth needs. Must integrate both - authentic self-expression AND growth. Neither arrogance nor self-limitation. Balance confidence with wisdom.',
    loveRelationships: 'Relationship tension between individual needs and relationship growth. May want more while partner wants stability (or vice versa). Exaggeration or unrealistic expectations possible. Must balance authentic self with relationship expansion. Neither sacrificing self nor demanding too much. Integrate: grow together while honoring individuality.',
    familyHome: 'Family tension between personal goals and family expansion. May feel torn between self-focus and family generosity. Overcommitment possible. Must balance vitality with family growth. Neither selfish nor over-giving. Family harmony through balanced authentic presence.',
    businessCareer: 'Career tension between ambition and realistic capacity. May overestimate abilities or take excessive risks. Overconfidence possible. However, may also play too small. Must balance authentic confidence with wise growth. Neither arrogance nor timidity. Strategic ambitious expansion.',
    moneyFinances: 'Financial tension between spending and growing. May overspend or overestimate income. Excessive optimism about money possible. Must balance generosity with wisdom. Neither stinginess nor recklessness. Financial growth through balanced confident planning.',
    predictions: [
      'Temptation to overcommit or take excessive risk - check realistic capacity first',
      'Opportunity seems bigger than reality - verify details before committing',
      'Balance between confidence and humility needed in professional situations',
      'Relationship requires balancing individual authenticity with shared growth',
      'Financial decision between expanding and overextending - choose wisely',
      'You learn that true confidence doesn\'t require exaggeration',
      'Perspective gained on where authentic growth is needed versus ego inflation',
      'Opportunity teaches difference between authentic expansion and overreach',
      'Integration of self-expression and growth wisdom creates maturity',
      'Balance of being yourself fully while staying humble and realistic'
    ]
  },

  'Sun-Jupiter-Trine': {
    name: 'Sun Trine Jupiter',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    aspectMeaning: 'Effortless growth and abundant self-expression! Opportunities flow naturally, confidence feels right, and authentic self attracts success. Perfect timing for advancement, creative projects, and joyful expansion. Luck seems to favor you. Generous spirit brings returns. Faith and vitality aligned. Trust the flow of abundance.',
    loveRelationships: 'Love flows beautifully! Relationship grows naturally through authentic expression. May meet someone wonderful through perfect timing. Existing partnership expands through shared joy and optimism. Generous love attracts generous love. Romantic opportunities appear effortlessly. Authentic affection.',
    familyHome: 'Family life blessed with harmony and growth! Family celebrations or positive developments happen naturally. Generosity with family feels right and reciprocated. Home improvements or family expansion flow smoothly. Family members support your authentic self-expression. Abundant family joy.',
    businessCareer: 'Career advancement flows naturally! Opportunities appear at perfect timing. Your authentic leadership recognized and rewarded. Professional growth through being yourself. Projects succeed easily. Recognition or promotion possible. Confident authentic work attracts success. Professional abundance.',
    moneyFinances: 'Financial blessings flow naturally! Money comes through being generous and authentic. Opportunities appear at right time. Investments or financial decisions work out well. Income increases through doing what you love. Financial confidence grounded in reality. Natural prosperity.',
    predictions: [
      'Opportunity appears at perfect timing and feels absolutely right - say yes!',
      'Your authentic self-expression attracts success effortlessly this week',
      'Financial increase or opportunity comes through doing what you genuinely love',
      'Relationship grows beautifully through natural generous authentic connection',
      'Career recognition for being authentically yourself in professional role',
      'Perfect week to pursue goals - timing favors you and doors open easily',
      'Generosity and optimism you naturally express returns as abundance',
      'Teaching, inspiring, or uplifting others brings joy and opportunities',
      'Faith in yourself and life justified by positive developments',
      'Grace period where being yourself is enough to attract growth'
    ]
  },

  'Sun-Jupiter-Square': {
    name: 'Sun Square Jupiter',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    aspectMeaning: 'Growth through creative tension and overcoming excess! The square creates friction between self-expression and expansion, forcing growth through challenges. Restlessness for more, risk of overdoing, or excessive confidence. However, tension produces necessary growth. The challenge: expand authentically not arrogantly, grow wisely not recklessly. Friction refines authentic ambitious expression.',
    loveRelationships: 'Relationship restlessness or excessive demands. May want more excitement or growth in partnership. Risk of overreacting or expecting too much. However, stagnant relationship patterns DO need shaking up. The key: pursue authentic growth in relationship not ego satisfaction. Neither settling nor demanding perfection. Growth through honest confident communication.',
    familyHome: 'Family tension from competing commitments or excessive generosity. May overextend with family or neglect family for personal goals. Balancing self-expression with family needs challenging. However, growth IS needed. The key: expand family life authentically not escape it. Neither over-giving nor selfish. Family growth through balanced presence.',
    businessCareer: 'Career restlessness drives ambitious moves - possibly overambitious. May take excessive risks or overestimate abilities. However, playing too small also problem. The key: pursue authentic career growth not ego inflation. Plan ambitious moves realistically. Neither timid nor reckless. Career growth through confident wise action.',
    moneyFinances: 'Financial overconfidence or excessive spending possible. May take risky financial moves or overestimate income. However, financial caution that limits growth also problem. The key: expand finances wisely not recklessly. Calculated risks grounded in reality. Neither fearful nor gambling. Financial growth through balanced confidence.',
    predictions: [
      'Restlessness drives desire for more - channel into authentic purposeful growth',
      'Temptation to take excessive risk or overcommit - pause and plan realistically',
      'Opportunity seems urgent requiring quick decision - get more information first',
      'Relationship or career feels limiting - address authentically don\'t escape impulsively',
      'Financial gamble tempts - calculate real risk versus optimistic assumptions',
      'You learn difference between authentic confident growth and ego-driven excess',
      'Tension forces examination of where you\'re playing too small or too big',
      'Challenge teaches balancing faith in yourself with realistic planning',
      'Growth happens through pursuing authentic expansion with wisdom',
      'Friction refines ability to be confident AND humble simultaneously'
    ]
  },

  'Sun-Jupiter-Sextile': {
    name: 'Sun Sextile Jupiter',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    aspectMeaning: 'Opportunity for growth through conscious initiative! Doors open if you knock with confidence and authenticity. Perfect timing to pursue opportunities, take calculated risks, or express yourself boldly. Won\'t happen automatically - requires authentic action. Growth favors those who believe in themselves and act. Opportunity period for confident expansion.',
    loveRelationships: 'Relationship growth opportunity if you initiate. Perfect time to express feelings, plan adventure together, or take relationship forward. Won\'t happen alone - requires generous authentic expression. Can deepen through shared optimism and growth if both participate. Romantic opportunity if you pursue with confidence.',
    familyHome: 'Family growth opportunity through generous initiative. Plan family celebration, express appreciation, or invest in family expansion. Small generous acts create family abundance. Family harmony through authentic joyful presence. Works if you show up confidently and generously.',
    businessCareer: 'Career opportunity appears for those who pursue confidently. Perfect time to pitch ideas, ask for advancement, or take professional risk. Must demonstrate confidence and authentic value. Opportunities favor those showing initiative. Professional growth through confident authentic action.',
    moneyFinances: 'Financial opportunity through wise confident action. Ask for raise, pursue income opportunity, or invest wisely. Research then act with confidence. Small calculated financial risks succeed. Financial growth through combining optimism with initiative. Must take action to activate opportunity.',
    predictions: [
      'Career opportunity appears for those who\'ve been confidently developing skills',
      'Financial increase possible if you ask confidently or pursue opportunity actively',
      'Relationship grows through romantic gesture or adventure you confidently initiate',
      'Learning opportunity or course you pursue with enthusiasm opens doors later',
      'Business expansion or project you launch with confidence gains traction',
      'Professional connection or mentor appears if you network with authentic confidence',
      'Family celebration or gathering you organize brings joy and strengthens bonds',
      'You learn that confident authentic initiative activates opportunities',
      'Goal you pursue with optimism and action this week progresses significantly',
      'Opportunity to expand life if you combine authentic self-expression with action'
    ]
  },

  // ==========================================
  // SUN-SATURN ASPECTS (All 5)
  // ==========================================

  'Sun-Saturn-Conjunction': {
    name: 'Sun Conjunction Saturn',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    aspectMeaning: 'Annual reality check and disciplined purpose alignment! The Sun\'s identity meets Saturn\'s structure, creating serious self-assessment, mature responsibility, and disciplined goal-setting. Time to commit to long-term goals, accept necessary limitations, and build lasting foundations. Maturity and authority increase. May feel heavy but productive. Annual realism strengthens authentic purpose.',
    loveRelationships: 'Relationship seriousness and commitment focus. Perfect time to formalize commitment, have serious relationship talk, or strengthen partnership through discipline. May feel less romantic but more real. Relationship matures through honest realistic assessment. Commitment deepens through accepting reality and working together.',
    familyHome: 'Family responsibilities and structure focus. Must address family obligations or establish better family boundaries. Time to be responsible family member or create sustainable family systems. May feel burdened but builds lasting family strength. Mature authentic family relating.',
    businessCareer: 'Career discipline and professional advancement through hard work. Perfect time to commit to career goals, demonstrate responsibility, or pursue authority positions. Recognition for consistent effort. Must prove competence through discipline. Career advancement through mature professional presence. Build career foundation.',
    moneyFinances: 'Financial discipline and realistic planning. Time to create budget, eliminate debt, or commit to savings plan. Must face financial reality honestly. Restrict spending, increase discipline. Financial security through structured responsible money management. Long-term financial foundation building.',
    predictions: [
      'Important commitment or responsibility appears requiring serious decision',
      'Career advancement possible through demonstrating discipline and competence',
      'Financial reality check leads to creating sustainable budget or savings plan',
      'Relationship deepens through honest conversation about commitment and future',
      'You gain maturity and authority through accepting responsibility',
      'Perfect time to commit to long-term goal with realistic disciplined plan',
      'Recognition or respect earned through consistent responsible effort',
      'Limitation or challenge reveals what authentic goals truly matter',
      'Authority figure acknowledges your competence and maturity',
      'Annual assessment of purpose leads to recommitment with greater wisdom'
    ]
  },

  'Sun-Saturn-Opposition': {
    name: 'Sun Opposition Saturn',
    frequency: 'Occurs once per year (opposite the conjunction)',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    aspectMeaning: 'Tension between self-expression and limitation, vitality and responsibility, individual will and authority. Feel pulled between what you want and what\'s required. Restriction or authority challenge possible. Must integrate both - authentic expression AND discipline. Neither rebellion nor submission. Balance freedom with responsibility.',
    loveRelationships: 'Relationship tension between individual needs and commitment requirements. May feel restricted by partnership or partner feels you\'re uncommitted. Must balance self-expression with relationship responsibility. Neither losing self nor avoiding commitment. Integration through authentic committed individuality.',
    familyHome: 'Family tension between personal goals and family obligations. Feel torn between self-focus and family duty. Must balance authentic self-expression with mature family responsibility. Neither escaping family nor sacrificing self. Wise integration of both.',
    businessCareer: 'Career tension between authentic calling and practical requirements. Authority conflict or career restrictions possible. Must balance creative self-expression with professional discipline. Neither selling out nor sabotaging career. Strategic authentic professional presence.',
    moneyFinances: 'Financial tension between wants and limitations. Feel restricted financially or financial discipline feels oppressive. Must balance authentic desires with fiscal responsibility. Neither deprivation nor recklessness. Wise financial maturity through realistic planning.',
    predictions: [
      'Authority figure or restriction challenges your authentic self-expression',
      'Choice between what you want and what\'s responsible requires wisdom',
      'Relationship requires balancing individuality with commitment - both needed',
      'Career limitation or requirement conflicts with authentic desires - integrate',
      'Financial reality limits wants - maturity means accepting and planning wisely',
      'You learn that true freedom requires accepting some limitations',
      'Conflict with authority teaches standing up for self while respecting structure',
      'Restriction reveals where discipline actually serves authentic purpose',
      'Challenge forces maturity - neither rebellious nor compliant but wise',
      'Integration of self-expression and responsibility creates authentic maturity'
    ]
  },

  'Sun-Saturn-Trine': {
    name: 'Sun Trine Saturn',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    aspectMeaning: 'Effortless disciplined achievement and mature self-expression! Purpose and structure flow naturally together. Hard work feels right and produces results. Authority respects you, responsibility feels manageable, and goals progress steadily. Perfect timing for commitments, career advancement, and building lasting success. Discipline serves authentic purpose naturally.',
    loveRelationships: 'Relationship commitment and stability flow naturally! Perfect time to formalize relationship, make long-term plans, or strengthen partnership through mature communication. Commitment feels right not restrictive. Building lasting love through natural discipline and respect. Stable authentic partnership.',
    familyHome: 'Family responsibility and harmony flow naturally! Family obligations feel manageable and meaningful. Perfect time to establish family structures or fulfill family duties. Building lasting family foundation through natural mature presence. Family respects authentic leadership.',
    businessCareer: 'Career advancement through natural disciplined effort! Hard work produces recognition and results. Authority figures support you. Perfect time for professional commitments, leadership roles, or career building. Success through authentic competent presence. Deserved professional advancement.',
    moneyFinances: 'Financial discipline and security building flow naturally! Savings plans work, budgets feel sustainable, financial goals progress. Building lasting wealth through natural responsible money management. Financial maturity produces tangible results. Secure prosperity.',
    predictions: [
      'Career advancement or recognition earned through consistent disciplined effort',
      'Financial plan or savings strategy you implement works steadily and reliably',
      'Relationship commitment deepens naturally through mature realistic partnership',
      'Authority figure respects your competence and grants responsibility or advancement',
      'Long-term goal progresses significantly through disciplined consistent action',
      'Professional project or responsibility you handle competently brings recognition',
      'Family structure or commitment you establish creates lasting stability',
      'Hard work feels purposeful and produces visible tangible results',
      'Maturity and authenticity combine to attract respect and opportunities',
      'Discipline serves your authentic purpose - effort feels meaningful not burdensome'
    ]
  },

  'Sun-Saturn-Square': {
    name: 'Sun Square Saturn',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    aspectMeaning: 'Growth through challenge, limitation, and maturity tests! The square creates friction between self-expression and restriction, forcing authentic growth through obstacles. May feel blocked, criticized, or burdened. However, challenges build strength and character. The challenge: persist through difficulty not give up, mature through limits not rebel. Friction builds authentic resilient purpose.',
    loveRelationships: 'Relationship challenges or commitment pressures. May feel relationship is too much work or partner criticizes. Must address relationship limitations honestly. However, easy relationships may lack depth. The key: work through challenges maturely not escape them. Build stronger relationship through facing difficulties together. Mature committed love.',
    familyHome: 'Family burdens or responsibility pressures. May feel overwhelmed by family obligations or criticized by family. Must face family difficulties maturely. However, avoiding family also problem. The key: address family challenges responsibly with boundaries. Neither escaping nor martyrdom. Mature family presence.',
    businessCareer: 'Career obstacles or authority challenges. May face criticism, delays, or extra work requirements. Must prove competence through difficulty. However, giving up also failure. The key: persist through challenges professionally. Build career strength through overcoming obstacles. Neither quitting nor complaining. Professional maturity.',
    moneyFinances: 'Financial pressure or restrictions. May face expenses, income challenges, or financial reality checks. Must address money problems disciplined. However, ignoring finances worsens situation. The key: face financial reality and create sustainable plan. Neither panic nor denial. Financial maturity through difficulty.',
    predictions: [
      'Challenge or obstacle tests your commitment to authentic goals - persist wisely',
      'Authority criticism or restriction ultimately strengthens your competence',
      'Financial pressure forces creating realistic sustainable budget or plan',
      'Relationship difficulty requiring mature honest work - builds stronger foundation',
      'Career obstacle or delay teaches patience and persistence - proves character',
      'You learn that authentic success requires working through challenges not avoiding them',
      'Limitation reveals where unrealistic approaches need maturing',
      'Burden or responsibility forces developing discipline and strength',
      'Criticism or feedback, though harsh, ultimately improves your work or approach',
      'Character building through accepting challenges as growth opportunities'
    ]
  },

  'Sun-Saturn-Sextile': {
    name: 'Sun Sextile Saturn',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, tradition, limitations, and the established order. It asks us to build, commit, and work within boundaries.',
    aspectMeaning: 'Opportunity for advancement through disciplined initiative! Doors to success open if you demonstrate competence and responsibility. Perfect timing for commitments, taking on responsibility, or proving yourself professionally. Won\'t happen automatically - requires disciplined action. Advancement favors those who work hard and show maturity.',
    loveRelationships: 'Relationship growth opportunity through mature initiative. Perfect time to have serious conversation, make commitment, or strengthen partnership through responsible action. Won\'t deepen alone - requires mature honest communication. Can build stronger relationship if both commit to work.',
    familyHome: 'Family stability opportunity through responsible initiative. Establish family structure, address family issue maturely, or commit to family improvement. Small disciplined family actions create lasting results. Family harmony through mature authentic presence.',
    businessCareer: 'Career opportunity through demonstrating competence. Perfect time to take on responsibility, prove yourself to authority, or pursue advancement through hard work. Must show discipline and capability. Opportunities favor those demonstrating professional maturity.',
    moneyFinances: 'Financial opportunity through disciplined action. Create savings plan, eliminate debt strategically, or invest wisely. Small consistent financial discipline accumulates results. Financial security through responsible committed money management.',
    predictions: [
      'Career opportunity appears for those who\'ve demonstrated consistent competence',
      'Financial strategy combining discipline with realistic goals you create works long-term',
      'Relationship deepens through serious conversation or commitment you initiate maturely',
      'Authority figure notices your reliable work and grants responsibility or advancement',
      'Long-term goal you commit to with disciplined plan progresses significantly',
      'Professional responsibility you accept competently leads to recognition later',
      'Family structure or commitment you establish creates lasting positive foundation',
      'You learn that consistent disciplined action produces real advancement',
      'Mature approach to challenge you take earns respect and opportunities',
      'Opportunity to build success through combining authentic purpose with discipline'
    ]
  },

  // ============================================================================
  // SUN-URANUS ASPECTS (Annual revolutionary awakening cycles)
  // ============================================================================

  'Sun-Uranus-Conjunction': {
    name: 'Sun Conjunction Uranus',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, breakthrough, innovation, authenticity, sudden change, and freedom. It\'s where you break free, awaken, rebel, and express your unique genius.',
    aspectMeaning: 'Annual revolutionary awakening of authentic self! The Sun\'s identity merges with Uranus\'s liberation, creating breakthrough self-expression, sudden insights, and freedom-seeking. Perfect time for radical authenticity, breaking free from limitations, embracing your uniqueness, and revolutionary change. Innovation and individuality flow naturally. Your authentic genius attracts awakening. Independence and originality combine. Annual boost of revolutionary life force.',
    loveRelationships: 'Relationship liberation and authentic connection! Love feels electric and unconventional. Perfect time to break free from relationship patterns that limit you, embrace unconventional love, express your authentic self fully. Sudden attractions or breakthrough insights about love possible. Freedom and authenticity essential now. Exciting, unpredictable romantic energy. Good time to revolutionize how you love.',
    familyHome: 'Family freedom and home innovation! Perfect time for sudden home changes, breaking family patterns, creating unconventional living situations. Home environment needs more space for individuality. Family dynamics may shift suddenly. Good time to introduce progressive ideas to family. Home technology upgrades favored. Liberation from family expectations possible.',
    businessCareer: 'Career breakthrough and professional innovation! Excellent time to pursue unconventional career moves, introduce revolutionary ideas at work, break free from professional limitations. Sudden opportunities for advancement through innovation. Your unique approach attracts recognition. Good time to start innovative projects, embrace new technology, express authentic professional identity. Leadership through authenticity.',
    moneyFinances: 'Financial liberation and innovative income! Money flows through unconventional or innovative channels. Sudden financial insights or opportunities through technology/progress. Good time to revolutionize how you earn, invest in innovation, embrace progressive financial strategies. Financial independence important. Unexpected gains through authentic self-expression possible. Break free from limiting financial patterns.',
    predictions: [
      'Sudden insight about your authentic life path appears - embrace it fully',
      'Your unique genius or unconventional approach attracts significant opportunity',
      'Unexpected change or awakening liberates you from limiting pattern',
      'Revolutionary idea or innovation you express receives positive recognition',
      'Sudden meeting with unconventional person catalyzes important breakthrough',
      'Freedom-seeking impulse you honor leads to authentic self-expression',
      'Technology or progressive approach you adopt transforms your effectiveness',
      'Authentic self-expression you risk brings unexpected reward or connection',
      'Sudden change in circumstances creates space for your true individuality',
      'Opportunity to break free from limitation and embrace your revolutionary nature'
    ]
  },

  'Sun-Uranus-Opposition': {
    name: 'Sun Opposition Uranus',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, breakthrough, innovation, authenticity, sudden change, and freedom. It\'s where you break free, awaken, rebel, and express your unique genius.',
    aspectMeaning: 'Annual tension between identity and freedom requiring integration! The Sun\'s ego faces Uranus\'s revolution, creating pull between stability and change, conformity and authenticity. Challenge is to honor both your core identity AND your need for freedom/innovation. Sudden disruptions may force authentic self-expression. Resistance to change creates crisis; embracing evolution creates breakthrough. Integration of tradition and innovation essential.',
    loveRelationships: 'Relationship tension between commitment and freedom! Love requires balancing togetherness with independence. Partner may seem unpredictable or need space. Challenge is honoring your authentic self within relationship without causing unnecessary disruption. Sudden relationship changes possible if authenticity suppressed. Good time to renegotiate freedom within partnership. Compromise between stability and excitement needed.',
    familyHome: 'Family tension between tradition and change! Home life requires balancing security with innovation. Family members may rebel or seek independence. Challenge is honoring family connections while allowing individuality. Sudden home disruptions possible. Good time to integrate progressive ideas with family values. Finding middle ground between conformity and authenticity essential.',
    businessCareer: 'Career tension between established role and innovation! Work requires balancing responsibility with breakthrough thinking. Authority figures may resist your unconventional ideas, or you may chafe against limitations. Challenge is expressing authenticity without unnecessary disruption. Sudden professional changes possible. Good time to find innovative solutions within existing structures. Integration of tradition and progress.',
    moneyFinances: 'Financial tension between security and risk! Money matters require balancing stability with innovative opportunities. Sudden financial changes possible. Challenge is taking calculated risks without reckless disruption. Good time to integrate conservative financial management with progressive income strategies. Find balance between security and financial freedom. Unexpected expenses or opportunities may arise.',
    predictions: [
      'Sudden disruption forces you to choose between conformity and authentic self-expression',
      'Your resistance to necessary change creates crisis - embracing evolution resolves it',
      'Unexpected challenge from authority or partner reveals where you need more freedom',
      'Sudden opportunity requires you to balance stability with revolutionary change',
      'Tension between your established identity and emerging authentic self reaches peak',
      'Disruption you initially resist ultimately liberates you from limiting pattern',
      'Conflict between security and freedom forces important integration and growth',
      'Sudden change in circumstances reveals what must evolve in your self-expression',
      'Your attempt to balance tradition and innovation creates breakthrough solution',
      'Opportunity to integrate your core identity with your revolutionary authentic nature'
    ]
  },

  'Sun-Uranus-Trine': {
    name: 'Sun Trine Uranus',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, breakthrough, innovation, authenticity, sudden change, and freedom. It\'s where you break free, awaken, rebel, and express your unique genius.',
    aspectMeaning: 'Annual effortless revolutionary authentic self-expression! The Sun\'s identity flows harmoniously with Uranus\'s innovation, creating natural breakthrough, easy authenticity, and inspired freedom. Perfect time for innovative projects, authentic self-expression, embracing change joyfully. Your unique genius flows without resistance. Sudden opportunities feel right and exciting. Liberation comes naturally. Excellent for trying new approaches, expressing individuality, pioneering initiatives. Innovation meets purpose gracefully.',
    loveRelationships: 'Relationship innovation and authentic connection flow easily! Love feels exciting, free, and authentic. Perfect time for spontaneous romantic adventures, trying new experiences together, expressing your unique self in love. Attraction to unconventional partners or situations. Freedom within relationship feels natural. Good time to refresh romance with innovative approaches. Electric, exciting romantic energy without disruption.',
    familyHome: 'Family freedom and home innovation flow naturally! Perfect time for exciting home improvements, introducing progressive ideas to family, creating space for individuality. Family supports your authentic self-expression. Home changes feel right and easy. Good time to adopt new technology at home, try unconventional living arrangements, celebrate family uniqueness. Liberation and connection balance perfectly.',
    businessCareer: 'Career innovation and professional breakthrough flow effortlessly! Excellent time to introduce innovative ideas at work, take on unconventional projects, express your unique professional identity. Recognition comes through authenticity and innovation. Sudden opportunities align with your talents. Good time to pioneer new approaches, embrace technology, lead progressive initiatives. Your authentic genius shines professionally.',
    moneyFinances: 'Financial innovation and unexpected abundance flow easily! Money opportunities through unconventional or progressive channels appear naturally. Good time to try innovative income strategies, invest in technology/innovation, embrace progressive financial approaches. Sudden financial gains through authentic self-expression possible. Financial freedom and security align. Your unique talents attract unexpected income.',
    predictions: [
      'Innovative idea you express effortlessly attracts enthusiastic support and opportunity',
      'Your authentic self-expression naturally aligns with exciting breakthrough chance',
      'Sudden opportunity appears that perfectly matches your unique talents and interests',
      'Progressive approach you adopt flows smoothly and produces impressive results',
      'Unconventional choice you make with confidence leads to liberating outcome',
      'Technology or innovation you embrace enhances your effectiveness effortlessly',
      'Authentic risk you take with excitement pays off better than expected',
      'Sudden insight about your path feels both liberating and absolutely right',
      'Your unique genius attracts recognition and opportunity without struggle',
      'Opportunity to express your revolutionary authentic nature flows naturally and joyfully'
    ]
  },

  'Sun-Uranus-Square': {
    name: 'Sun Square Uranus',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, breakthrough, innovation, authenticity, sudden change, and freedom. It\'s where you break free, awaken, rebel, and express your unique genius.',
    aspectMeaning: 'Growth through revolutionary friction and forced authenticity! The Sun\'s ego clashes with Uranus\'s rebellion, creating restlessness, sudden disruptions, and pressure to break free. Challenge is channeling revolutionary energy constructively rather than destructively. Resistance to authentic self-expression creates crisis; embracing change creates breakthrough. Tension forces necessary evolution. Good time to consciously choose authentic freedom rather than reactive rebellion. Crisis produces innovation.',
    loveRelationships: 'Relationship friction forcing authentic freedom! Love feels restless or confining. Tension between commitment and independence creates challenges. Partner may seem unpredictable or rebellious. Challenge is expressing authentic needs without unnecessary disruption. Sudden relationship upsets force honest communication. Good time to address freedom issues constructively. Crisis reveals what must change. Reactive rebellion causes damage; conscious authenticity creates growth.',
    familyHome: 'Family friction forcing necessary change! Home life feels restrictive or unstable. Sudden family disruptions or rebellions possible. Tension between security and freedom creates challenges. Challenge is honoring your authentic needs while maintaining connections. Good time to address limiting family patterns constructively. Crisis forces overdue changes. Resistance creates bigger problems; embracing evolution brings relief and liberation.',
    businessCareer: 'Career friction forcing innovative breakthrough! Work feels restrictive or chaotic. Tension with authority or sudden professional disruptions possible. Challenge is expressing authentic professional identity constructively. Good time to channel frustration into innovation rather than rebellion. Crisis forces necessary career evolution. Resistance to change creates bigger problems; embracing new approaches creates opportunity. Constructive revolution favored over reactive rebellion.',
    moneyFinances: 'Financial friction forcing liberating change! Money situation feels unstable or restrictive. Sudden expenses or unexpected financial changes possible. Challenge is balancing security with necessary financial evolution. Good time to address limiting financial patterns constructively. Crisis forces overdue financial changes. Reactive financial risks dangerous; conscious innovative financial strategies productive. Disruption ultimately liberating.',
    predictions: [
      'Sudden disruption forces you to choose authentic freedom over comfortable limitation',
      'Your suppressed need for change erupts - channel it constructively for breakthrough',
      'Friction with authority or established patterns reveals necessary evolution',
      'Restlessness you feel is calling you to express suppressed authentic genius',
      'Crisis or unexpected change forces overdue revolutionary shift in your life',
      'Your resistance to authentic self-expression creates bigger disruption than acceptance would',
      'Sudden upset you navigate consciously produces liberating breakthrough and growth',
      'Tension between security and freedom reaches point requiring conscious choice',
      'Frustration you channel into innovation produces unexpected positive results',
      'Opportunity to transform crisis into conscious revolutionary authentic evolution'
    ]
  },

  'Sun-Uranus-Sextile': {
    name: 'Sun Sextile Uranus',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, breakthrough, innovation, authenticity, sudden change, and freedom. It\'s where you break free, awaken, rebel, and express your unique genius.',
    aspectMeaning: 'Opportunity for breakthrough through authentic initiative! The Sun\'s purpose harmonizes with Uranus\'s innovation, creating potential for revolutionary self-expression IF you take action. Opportunities for breakthrough, innovation, and authentic freedom appear - but require your conscious engagement. Perfect time to try new approaches, express your unique genius, take innovative risks. Success comes through initiative and courage. Passive approach wastes potential; active authentic expression creates exciting results.',
    loveRelationships: 'Relationship opportunity for authentic connection through initiative! Love potential for exciting new experiences, authentic expression, refreshing connection. Perfect time to suggest spontaneous date, try new activities together, express your unique self in relationship. Opportunity to attract unconventional romantic connection IF you put yourself out there. Taking authentic romantic risks favored. Initiative brings exciting results.',
    familyHome: 'Family opportunity for positive change through initiative! Perfect time to suggest home improvements, introduce progressive family ideas, create more space for individuality. Family receptive to innovation IF you present it. Good time to adopt new home technology, try unconventional living arrangements, celebrate family uniqueness. Taking initiative for positive home change brings good results.',
    businessCareer: 'Career opportunity for innovative advancement through initiative! Excellent time to propose innovative ideas at work, volunteer for unconventional projects, express your unique professional talents. Recognition available IF you step forward authentically. Good time to pioneer new approaches, embrace progressive technology, lead innovative initiatives. Taking calculated professional risks brings opportunity. Your authentic genius recognized IF expressed.',
    moneyFinances: 'Financial opportunity through innovative initiative! Money potential through unconventional or progressive channels IF you pursue it. Good time to explore innovative income strategies, invest in technology/innovation, try new financial approaches. Unexpected financial gains possible through authentic self-expression and initiative. Financial freedom available through conscious action. Your unique talents can attract income IF applied.',
    predictions: [
      'Innovative opportunity appears - seize it with confidence for breakthrough results',
      'Your authentic self-expression and initiative attracts exciting recognition',
      'Sudden chance to try unconventional approach succeeds IF you take the risk',
      'Progressive idea you propose receives support and creates positive change',
      'Opportunity to express your unique genius appears - initiative required to actualize',
      'Unconventional connection or opportunity you pursue actively produces exciting outcome',
      'Technology or innovation you embrace proactively enhances your effectiveness',
      'Authentic risk you take with courage pays off with liberating results',
      'Sudden insight you act upon leads to breakthrough and positive change',
      'Opportunity for revolutionary authentic advancement through conscious initiative and courage'
    ]
  },

  // ============================================================================
  // SUN-NEPTUNE ASPECTS (Annual spiritual transcendence cycles)
  // ============================================================================

  'Sun-Neptune-Conjunction': {
    name: 'Sun Conjunction Neptune',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Neptune represents spirituality, transcendence, divine connection, compassion, imagination, dreams, illusion, and dissolution of boundaries. It\'s where you connect to the infinite, create beauty, and transcend the ego.',
    aspectMeaning: 'Annual spiritual awakening of divine purpose! The Sun\'s identity merges with Neptune\'s transcendence, creating mystical self-expression, divine inspiration, and compassionate creativity. Perfect time for spiritual practice, creative inspiration, surrendering to higher guidance, expressing compassion. Ego boundaries dissolve into something greater. Your authentic self connects to divine source. Imagination and spirituality flow naturally. Annual boost of mystical life force. Discernment needed to distinguish inspiration from illusion.',
    loveRelationships: 'Relationship transcendence and divine love! Love feels mystical, compassionate, and soulful. Perfect time for romantic idealism, spiritual connection with partner, expressing unconditional love. Deep empathy and soul connection possible. Romance feels magical and transcendent. Good time to forgive, express devotion, connect through shared spiritual practice. Warning: see partner clearly while honoring divine love - discernment prevents disillusionment.',
    familyHome: 'Family compassion and home sanctuary! Perfect time for creating peaceful home environment, expressing unconditional love for family, practicing forgiveness. Home becomes spiritual sanctuary. Family connections deepen through compassion. Good time for creative home projects, meditation space, artistic home improvements. Spiritual or artistic family activities favored. Boundaries with family may need conscious attention.',
    businessCareer: 'Career inspiration and creative professional expression! Excellent time to pursue creative/spiritual career opportunities, bring compassion to work, follow inspired professional vision. Recognition through artistic or healing work. Good time to help others professionally, express your ideals through work, pursue meaningful career path. Warning: maintain clarity about practical career matters while following inspiration - discernment prevents confusion.',
    moneyFinances: 'Financial inspiration and spiritual abundance! Money flows through creative, healing, or spiritual channels. Good time to trust divine abundance, pursue inspired financial opportunities, give generously. Financial decisions benefit from both spiritual trust AND practical discernment. Warning: verify practical financial details while honoring intuitive guidance. Avoid financial fantasy or escapism. Balance inspiration with clarity.',
    predictions: [
      'Spiritual insight about your life purpose appears through meditation or dream',
      'Your creative or compassionate expression attracts divine support and recognition',
      'Mystical experience or synchronicity confirms you\'re aligned with higher path',
      'Inspired vision you receive feels both transcendent and deeply meaningful',
      'Compassionate action you take creates ripple effect beyond what you can see',
      'Creative project you undertake with divine inspiration flows beautifully',
      'Soul connection with someone reveals deeper spiritual dimension of relationship',
      'Dream or intuition you trust leads to inspired and beneficial outcome',
      'Your surrender to higher guidance dissolves obstacle and opens miraculous path',
      'Opportunity to express your divine purpose through creative compassionate authentic self'
    ]
  },

  'Sun-Neptune-Opposition': {
    name: 'Sun Opposition Neptune',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Neptune represents spirituality, transcendence, divine connection, compassion, imagination, dreams, illusion, and dissolution of boundaries. It\'s where you connect to the infinite, create beauty, and transcend the ego.',
    aspectMeaning: 'Annual tension between ego and transcendence requiring integration! The Sun\'s identity faces Neptune\'s dissolution, creating confusion between self and selflessness, clarity and mystery. Challenge is honoring both your individual purpose AND your connection to something greater. Illusions or idealizations may require honest examination. Resistance to spiritual truth creates confusion; embracing both clarity and mystery creates wisdom. Integration of ego and soul essential. Discernment crucial.',
    loveRelationships: 'Relationship tension between reality and ideal! Love requires balancing romantic idealization with seeing partner clearly. Confusion about relationship possible if projecting fantasies rather than seeing truth. Challenge is honoring soul connection while maintaining healthy boundaries. Good time to examine illusions, practice compassionate honesty, integrate ideals with reality. Disillusionment possible but ultimately clarifying. See partner\'s humanity AND divinity.',
    familyHome: 'Family tension between compassion and boundaries! Home life requires balancing unconditional love with healthy limits. Family members may seem unclear or confusing. Challenge is expressing compassion without losing yourself or enabling dysfunction. Good time to examine family illusions, practice loving boundaries, integrate ideals with reality. Confusion clears through honest compassionate communication. Balance empathy with discernment.',
    businessCareer: 'Career tension between inspiration and clarity! Work requires balancing creative vision with practical reality. Confusion about professional direction possible if chasing fantasies rather than grounded goals. Challenge is pursuing meaningful work while maintaining clear boundaries and expectations. Good time to examine career illusions, ground inspired visions in reality. Integration of idealism and practicality essential. Verify details.',
    moneyFinances: 'Financial tension between trust and clarity! Money matters require balancing spiritual abundance mindset with practical financial management. Confusion about finances possible through unclear thinking or avoidance. Challenge is trusting divine provision while taking grounded financial action. Good time to examine financial illusions, verify all financial details carefully. Balance faith with discernment. Avoid financial escapism or fantasy.',
    predictions: [
      'Confusion you experience reveals illusion you need to release to see truth clearly',
      'Your idealization of situation dissolves - clarity painful but ultimately liberating',
      'Tension between your ego desires and soul\'s path requires honest examination',
      'Disappointment you feel reveals unrealistic expectation that needed reality check',
      'Boundary issue forces you to integrate compassion with healthy self-protection',
      'Confusion clears when you balance practical reality with spiritual trust',
      'Illusion you release reveals more authentic and grounded spiritual path',
      'Challenge between clarity and mystery resolved through discernment and faith',
      'Your honest examination of idealization leads to more sustainable divine connection',
      'Opportunity to integrate ego identity with soul purpose through compassionate clarity'
    ]
  },

  'Sun-Neptune-Trine': {
    name: 'Sun Trine Neptune',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Neptune represents spirituality, transcendence, divine connection, compassion, imagination, dreams, illusion, and dissolution of boundaries. It\'s where you connect to the infinite, create beauty, and transcend the ego.',
    aspectMeaning: 'Annual effortless spiritual creative self-expression! The Sun\'s identity flows harmoniously with Neptune\'s transcendence, creating natural divine inspiration, easy creative flow, and compassionate authenticity. Perfect time for spiritual practice, creative projects, expressing compassion, following intuition. Your purpose aligns with divine guidance effortlessly. Imagination and spirituality enhance self-expression without confusion. Excellent for artistic work, healing activities, meditation. Inspiration meets clarity gracefully. Magic flows naturally.',
    loveRelationships: 'Relationship magic and soul connection flow easily! Love feels transcendent, compassionate, and divinely inspired. Perfect time for romantic intimacy, spiritual connection with partner, expressing unconditional love. Soul-level understanding comes naturally. Romance feels mystical and beautiful. Good time for creative dates, sharing dreams, spiritual practices together. Deep empathy and forgiveness flow without effort. Love transcends without losing clarity.',
    familyHome: 'Family harmony and home sanctuary flow naturally! Perfect time for creating beautiful peaceful home, expressing unconditional family love, artistic home projects. Home feels like spiritual retreat. Family connections deepen through natural compassion. Good time to create meditation space, enjoy artistic activities together, practice forgiveness. Beauty and peace permeate home life effortlessly. Healing family energy.',
    businessCareer: 'Career inspiration and creative professional flow effortlessly! Excellent time for creative/spiritual work, bringing compassion to professional life, following inspired career vision. Recognition comes through artistic or healing talents naturally. Good time to help others through work, express ideals professionally, pursue meaningful projects. Inspiration and clarity align perfectly. Your divine purpose expressed through career.',
    moneyFinances: 'Financial inspiration and abundant flow easily! Money opportunities through creative, healing, or spiritual work appear naturally. Good time to trust divine abundance while taking inspired action, give generously, pursue meaningful income. Financial decisions benefit from both intuition and clarity. Your creative or compassionate talents attract income effortlessly. Spiritual and material abundance align. Generosity returns multiplied.',
    predictions: [
      'Creative inspiration flows effortlessly and produces beautiful meaningful results',
      'Your compassionate authentic expression attracts divine support and recognition',
      'Spiritual practice or meditation brings clear insight about your life purpose',
      'Soul connection with someone feels natural, healing, and divinely orchestrated',
      'Artistic project you undertake flows with inspired ease and touches hearts',
      'Intuitive guidance you trust leads to blessed and beneficial outcome',
      'Your surrender to divine flow dissolves obstacle and opens miraculous path',
      'Compassionate action you take naturally creates healing ripple effect',
      'Dream or vision you receive feels both mystical and absolutely clear',
      'Opportunity to express your soul purpose through creative compassionate work flows naturally'
    ]
  },

  'Sun-Neptune-Square': {
    name: 'Sun Square Neptune',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Neptune represents spirituality, transcendence, divine connection, compassion, imagination, dreams, illusion, and dissolution of boundaries. It\'s where you connect to the infinite, create beauty, and transcend the ego.',
    aspectMeaning: 'Growth through spiritual confusion requiring discernment! The Sun\'s ego clashes with Neptune\'s dissolution, creating confusion, illusion, and crisis of faith. Challenge is developing discernment between divine inspiration and escapist fantasy. Resistance to spiritual truth creates greater confusion; embracing both clarity and mystery creates wisdom. Tension forces necessary spiritual maturation. Good time to consciously examine illusions, verify details, practice grounded spirituality. Crisis produces authentic faith. Confusion ultimately clarifying.',
    loveRelationships: 'Relationship confusion forcing spiritual discernment! Love feels unclear or disillusioning. Romantic fantasies clash with reality. Confusion about partner or relationship possible through idealization or deception. Challenge is seeing clearly while maintaining compassion. Good time to examine projections, verify trust, practice loving honesty. Crisis reveals necessary truth. Painful disillusionment ultimately liberating. Authentic soul connection requires seeing reality clearly, not just ideal.',
    familyHome: 'Family confusion forcing healthy boundaries! Home life feels chaotic or unclear. Compassion clashes with self-protection needs. Confusion about family dynamics possible through enabling or unclear boundaries. Challenge is expressing love without losing yourself. Good time to examine family illusions, establish compassionate boundaries, practice grounded empathy. Crisis forces necessary clarity. Confusion resolved through honest loving communication. Balance sacrifice with self-care.',
    businessCareer: 'Career confusion forcing grounded clarity! Work feels unclear or disillusioning. Creative vision clashes with practical reality. Confusion about professional direction possible through unrealistic expectations or unclear information. Challenge is pursuing meaningful work while maintaining clarity. Good time to verify all professional details, examine career fantasies, ground inspired vision in reality. Crisis forces necessary practical assessment. Confusion clears through honest discernment.',
    moneyFinances: 'Financial confusion forcing practical discernment! Money situation feels unclear or concerning. Spiritual abundance mindset clashes with financial reality. Confusion possible through financial fantasy, unclear information, or avoidance. Challenge is balancing faith with practical financial management. Good time to verify all financial details carefully, examine money illusions, practice grounded financial spirituality. Crisis forces necessary financial clarity. Confusion resolved through honest practical assessment.',
    predictions: [
      'Confusion or disillusionment forces you to distinguish divine guidance from wishful thinking',
      'Your illusion about situation dissolves - clarity painful but ultimately necessary',
      'Deception or self-deception revealed requires honest examination and discernment',
      'Crisis of faith you navigate develops authentic spiritual maturity and wisdom',
      'Confusion you experience is calling you to verify details and see reality clearly',
      'Your escape into fantasy creates bigger problem - facing truth resolves it',
      'Disappointment you feel reveals unrealistic expectation that needed grounding',
      'Boundary issue forces you to balance compassion with healthy self-protection',
      'Confusion clears when you integrate spiritual ideals with practical reality',
      'Opportunity to transform spiritual confusion into grounded authentic divine connection'
    ]
  },

  'Sun-Neptune-Sextile': {
    name: 'Sun Sextile Neptune',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Neptune represents spirituality, transcendence, divine connection, compassion, imagination, dreams, illusion, and dissolution of boundaries. It\'s where you connect to the infinite, create beauty, and transcend the ego.',
    aspectMeaning: 'Opportunity for spiritual creativity through inspired initiative! The Sun\'s purpose harmonizes with Neptune\'s transcendence, creating potential for divine inspiration, creative flow, and compassionate expression IF you take action. Opportunities for spiritual growth, artistic creation, and soul-level connection appear - but require your conscious engagement. Perfect time to practice meditation, pursue creative projects, express compassion. Success comes through spiritual initiative and inspired action. Passive approach wastes potential; active divine engagement creates beautiful results.',
    loveRelationships: 'Relationship opportunity for soul connection through initiative! Love potential for mystical romance, spiritual intimacy, compassionate expression. Perfect time to suggest romantic spiritual date, share dreams with partner, express unconditional love actively. Opportunity to attract soul-level connection IF you open your heart. Taking inspired romantic risks favored. Initiative brings transcendent results. Active compassion deepens love.',
    familyHome: 'Family opportunity for healing connection through initiative! Perfect time to suggest spiritual family activities, create peaceful home sanctuary, express compassion actively. Family receptive to artistic or healing initiatives IF you present them. Good time to create meditation space, plan creative home projects, practice active forgiveness. Taking initiative for home beauty and peace brings blessed results.',
    businessCareer: 'Career opportunity for meaningful work through initiative! Excellent time to propose creative/spiritual professional projects, volunteer to help others through work, express your ideals actively. Recognition available IF you step forward with inspired vision. Good time to pursue artistic or healing career opportunities, bring compassion to workplace, follow divine professional calling. Taking inspired career risks brings opportunity. Your creative talents recognized IF expressed.',
    moneyFinances: 'Financial opportunity through creative initiative! Money potential through artistic, healing, or spiritual channels IF you pursue it actively. Good time to explore inspired income strategies, invest in creative projects, practice generous giving. Financial gains possible through compassionate work and inspired action. Divine abundance available through conscious initiative. Your creative or spiritual talents can attract income IF applied with faith and effort.',
    predictions: [
      'Creative opportunity appears - pursue it with inspired action for beautiful results',
      'Your compassionate initiative and spiritual authenticity attracts divine support',
      'Chance to express your artistic or healing gifts succeeds IF you take the risk',
      'Spiritual practice you commit to actively brings profound insight and peace',
      'Opportunity to make soul connection appears - initiative required to actualize',
      'Inspired vision you act upon with faith produces miraculous and meaningful outcome',
      'Creative project you initiate with divine inspiration touches hearts and succeeds',
      'Compassionate action you take proactively creates unexpected healing ripple effect',
      'Intuitive guidance you follow with courage leads to blessed and beneficial result',
      'Opportunity for spiritual creative advancement through conscious inspired initiative and faith'
    ]
  },

  // ============================================================================
  // SUN-PLUTO ASPECTS (Annual transformation and empowerment cycles)
  // ============================================================================

  'Sun-Pluto-Conjunction': {
    name: 'Sun Conjunction Pluto',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Pluto represents transformation, death and rebirth, power, depth, shadow work, elimination, regeneration, and psychological intensity. It\'s where you confront the underworld, reclaim power, and undergo total metamorphosis.',
    aspectMeaning: 'Annual death-rebirth of authentic power! The Sun\'s identity merges with Pluto\'s transformation, creating intense self-examination, empowerment through depth, and cathartic release. Perfect time for shadow work, reclaiming power, letting go what no longer serves, profound self-transformation. Ego dies to be reborn stronger. Your authentic self confronts and integrates the depths. Power and vulnerability combine. Annual boost of transformative life force. Intensity required for breakthrough.',
    loveRelationships: 'Relationship intensity and transformative intimacy! Love feels deep, powerful, and all-consuming. Perfect time for profound soul connection, sexual intimacy, psychological honesty in relationship. Power dynamics surface for healing. Deep vulnerability and authentic power combine. Good time to release relationship patterns that limit you, deepen commitment through shared transformation. Warning: intensity can be overwhelming - channel it toward depth and healing rather than control or obsession.',
    familyHome: 'Family transformation and home regeneration! Perfect time for deep family healing, releasing ancestral patterns, profound home changes. Family power dynamics surface for resolution. Home becomes place of transformation and empowerment. Good time to eliminate what no longer serves from home, address family psychological issues, reclaim power in family dynamics. Major home renovation or elimination favored. Deep family healing possible.',
    businessCareer: 'Career empowerment and professional transformation! Excellent time for reclaiming professional power, pursuing positions of influence, undergoing career metamorphosis. Recognition through depth, intensity, and transformative impact. Good time to eliminate what limits professional growth, address workplace power dynamics, pursue meaningful influential work. Leadership through authentic power and psychological depth. Major career transformation possible.',
    moneyFinances: 'Financial transformation and empowered resources! Money situation undergoes profound change. Good time to eliminate financial patterns that limit you, reclaim financial power, invest in transformation. Shared resources or inheritance issues may arise. Financial regeneration through release and empowerment. Good time to address financial psychology, heal money shadows, build powerful financial foundation. Major financial metamorphosis possible.',
    predictions: [
      'Profound realization about your authentic power transforms your life direction',
      'Your willingness to release what no longer serves creates space for powerful rebirth',
      'Deep psychological work you undertake produces liberating breakthrough and empowerment',
      'Shadow aspect you integrate transforms into your greatest source of authentic power',
      'Intense experience forces you to confront and reclaim suppressed personal power',
      'Your courage to face the depths reveals profound truth about your life purpose',
      'Elimination of limiting pattern creates powerful regeneration and new beginning',
      'Vulnerability you risk with authentic person creates transformative soul connection',
      'Power you reclaim through shadow work produces breakthrough in every life area',
      'Opportunity to undergo profound death-rebirth cycle and emerge powerfully transformed'
    ]
  },

  'Sun-Pluto-Opposition': {
    name: 'Sun Opposition Pluto',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Pluto represents transformation, death and rebirth, power, depth, shadow work, elimination, regeneration, and psychological intensity. It\'s where you confront the underworld, reclaim power, and undergo total metamorphosis.',
    aspectMeaning: 'Annual tension between ego and transformation requiring integration! The Sun\'s identity faces Pluto\'s death-rebirth, creating power struggles, control issues, and crisis forcing evolution. Challenge is honoring both your will AND the necessity of surrender and transformation. Resistance to necessary change creates crisis; embracing death-rebirth creates empowerment. Integration of power and vulnerability essential. Shadow confrontation unavoidable. Transformation through conflict and release.',
    loveRelationships: 'Relationship power struggles forcing transformation! Love involves intense power dynamics or control issues. Tension between autonomy and deep merger. Partner may trigger your shadows or power issues. Challenge is maintaining authentic self while surrendering to transformative love. Good time to address power imbalances, release toxic patterns, choose empowered vulnerability. Crisis forces necessary relationship transformation. Resistance creates damage; embrace of depth creates healing.',
    familyHome: 'Family power struggles forcing healing transformation! Home life involves intense dynamics or control issues. Tension between independence and family depth/enmeshment. Challenge is maintaining boundaries while engaging necessary family healing. Good time to address toxic family patterns, reclaim power from family dynamics, practice healthy vulnerability. Crisis forces overdue family transformation. Resistance perpetuates dysfunction; conscious work creates breakthrough.',
    businessCareer: 'Career power struggles forcing professional evolution! Work involves intense authority conflicts or control issues. Tension between your will and organizational/power structures. Challenge is maintaining authentic professional identity while navigating power realities. Good time to address toxic workplace dynamics, reclaim professional power constructively. Crisis forces necessary career transformation. Resistance creates conflict; strategic empowered evolution creates advancement.',
    moneyFinances: 'Financial power struggles forcing monetary transformation! Money situation involves control issues or shared resource conflicts. Tension between financial autonomy and shared financial power. Challenge is maintaining healthy financial boundaries while addressing necessary financial psychology. Good time to resolve financial control issues, heal money shadows, reclaim financial power. Crisis forces overdue financial change. Resistance perpetuates problems; conscious transformation creates empowerment.',
    predictions: [
      'Power struggle forces you to examine and transform unhealthy control patterns',
      'Your resistance to necessary change creates crisis - surrender to transformation resolves it',
      'Conflict with powerful person reveals shadow aspect you need to integrate',
      'Intense situation forces you to choose between ego attachment and empowered evolution',
      'Control issue you face reveals where you need to reclaim authentic power',
      'Crisis you navigate transforms victim mentality into empowered authentic strength',
      'Confrontation with shadow or power dynamic produces breakthrough and liberation',
      'Tension between will and surrender resolved through conscious transformation',
      'Your willingness to release ego death produces profound rebirth and empowerment',
      'Opportunity to integrate ego will with transformative power through shadow work and release'
    ]
  },

  'Sun-Pluto-Trine': {
    name: 'Sun Trine Pluto',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Pluto represents transformation, death and rebirth, power, depth, shadow work, elimination, regeneration, and psychological intensity. It\'s where you confront the underworld, reclaim power, and undergo total metamorphosis.',
    aspectMeaning: 'Annual effortless transformative empowerment! The Sun\'s identity flows harmoniously with Pluto\'s depth, creating natural psychological insight, easy power reclamation, and graceful transformation. Perfect time for shadow work, deep self-examination, eliminating limiting patterns, profound personal growth. Your purpose aligns with transformative power effortlessly. Intensity enhances self-expression without crisis. Excellent for therapy, depth work, powerful leadership. Empowerment meets authenticity gracefully. Regeneration flows naturally.',
    loveRelationships: 'Relationship depth and transformative intimacy flow easily! Love feels powerful, profound, and soul-transforming. Perfect time for deep vulnerable sharing, sexual intimacy, psychological honesty in relationship. Power and tenderness combine naturally. Transformative conversations deepen connection without conflict. Good time to release relationship patterns together, support each other\'s growth, experience empowered merger. Depth without drama. Soul connection through authentic power.',
    familyHome: 'Family healing and home transformation flow naturally! Perfect time for profound family conversations, releasing ancestral patterns together, empowering home changes. Family supports your transformation and vice versa. Home becomes place of natural regeneration. Good time to eliminate what no longer serves from home, address family psychology constructively, reclaim healthy family power. Deep healing without crisis. Empowered family evolution.',
    businessCareer: 'Career empowerment and professional depth flow effortlessly! Excellent time for assuming leadership, pursuing influential positions, making profound professional impact. Recognition through depth, authenticity, and transformative contribution. Good time to eliminate what limits professional growth, mentor others through transformation, lead with authentic power. Your depth and intensity attract career advancement naturally. Powerful professional presence emerges effortlessly.',
    moneyFinances: 'Financial empowerment and resource regeneration flow easily! Money transformation through natural release and rebuilding. Good time to eliminate limiting financial patterns, invest in growth/transformation, build powerful financial foundation. Shared resources or financial depth work flows smoothly. Your psychological relationship with money heals naturally. Financial power increases through authentic strategic action. Regenerative financial cycles favor you. Abundance through elimination and empowerment.',
    predictions: [
      'Profound insight about your power emerges naturally and transforms your approach',
      'Your authentic depth and intensity attracts recognition and influential opportunity',
      'Shadow work you undertake flows smoothly and produces liberating empowerment',
      'Elimination of limiting pattern happens gracefully and creates immediate improvement',
      'Deep conversation or therapeutic work produces breakthrough without crisis',
      'Your natural psychological depth connects you with powerful influential people',
      'Transformative change you make flows easily and produces lasting positive results',
      'Power you reclaim feels natural, authentic, and immediately beneficial',
      'Vulnerability you risk with right person creates profound soul-level connection',
      'Opportunity to express your transformative authentic power flows naturally and successfully'
    ]
  },

  'Sun-Pluto-Square': {
    name: 'Sun Square Pluto',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Pluto represents transformation, death and rebirth, power, depth, shadow work, elimination, regeneration, and psychological intensity. It\'s where you confront the underworld, reclaim power, and undergo total metamorphosis.',
    aspectMeaning: 'Growth through intense confrontation and forced transformation! The Sun\'s ego clashes with Pluto\'s death-rebirth, creating power struggles, control crises, and pressure to evolve. Challenge is surrendering ego attachments while reclaiming authentic power. Resistance to transformation creates greater crisis; embracing shadow work and release creates empowerment. Tension forces necessary psychological evolution. Good time to consciously work with intensity, face shadows, release control. Crisis produces profound growth. Breakdown leads to breakthrough.',
    loveRelationships: 'Relationship intensity forcing transformative growth! Love involves power struggles, control issues, or deep crises. Jealousy, possessiveness, or manipulation possible. Toxic patterns surface intensely. Challenge is addressing power dynamics without destructive behavior. Good time for deep honest communication, therapy, releasing toxic relationship patterns. Crisis reveals what must transform for relationship health. Resistance creates damage; conscious shadow work creates profound healing. Intensity channeled constructively deepens authentic bond.',
    familyHome: 'Family intensity forcing necessary healing! Home life involves power struggles, control battles, or deep crises. Toxic family patterns surface intensely. Hidden family issues erupt. Challenge is addressing dysfunction without perpetuating it. Good time for family therapy, confronting toxic patterns, reclaiming power in healthy ways. Crisis forces overdue family healing work. Resistance perpetuates trauma; conscious transformation creates liberation. Intensity reveals what must change.',
    businessCareer: 'Career intensity forcing professional transformation! Work involves power struggles, authority conflicts, or professional crisis. Control issues or toxic workplace dynamics surface. Challenge is navigating power realities without compromising integrity. Good time to address professional toxicity, reclaim career power constructively, make necessary job changes. Crisis forces overdue career evolution. Resistance creates burnout; conscious empowered change creates advancement. Confrontation produces clarity.',
    moneyFinances: 'Financial intensity forcing monetary transformation! Money situation involves crisis, control issues, or deep financial psychology. Toxic financial patterns surface intensely. Shared resource conflicts possible. Challenge is addressing financial shadows without destructive behavior. Good time to confront money fears, transform financial patterns, reclaim financial power. Crisis forces necessary financial evolution. Resistance perpetuates problems; conscious transformation creates empowerment. Breakdown produces breakthrough.',
    predictions: [
      'Intense power struggle forces you to confront and transform unhealthy control patterns',
      'Your resistance to necessary transformation creates crisis - embrace of shadow work resolves it',
      'Control issue erupts revealing deep psychological pattern requiring conscious healing',
      'Crisis forces you to choose between destructive ego attachment and empowered evolution',
      'Shadow aspect you\'ve avoided confronts you intensely - integration produces breakthrough',
      'Power struggle you navigate consciously transforms into authentic empowerment',
      'Breakdown of control or structure you experience leads to profound regeneration',
      'Intense emotion you process through depth work produces liberating transformation',
      'Confrontation you handle with psychological awareness creates unexpected empowerment',
      'Opportunity to transform crisis into conscious death-rebirth and profound authentic power'
    ]
  },

  'Sun-Pluto-Sextile': {
    name: 'Sun Sextile Pluto',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'The Sun represents core identity, life purpose, vitality, ego, creative self-expression, and conscious will. It\'s who you are meant to become.',
    planet2Energy: 'Pluto represents transformation, death and rebirth, power, depth, shadow work, elimination, regeneration, and psychological intensity. It\'s where you confront the underworld, reclaim power, and undergo total metamorphosis.',
    aspectMeaning: 'Opportunity for empowerment through transformative initiative! The Sun\'s purpose harmonizes with Pluto\'s depth, creating potential for profound growth, power reclamation, and psychological breakthrough IF you take action. Opportunities for shadow work, elimination, and transformative change appear - but require your conscious engagement. Perfect time to pursue therapy, do deep inner work, eliminate limiting patterns, reclaim power. Success comes through courage to face depths and take transformative action. Passive approach wastes potential; active depth work creates profound results.',
    loveRelationships: 'Relationship opportunity for deep healing through initiative! Love potential for profound intimacy, transformative vulnerability, psychological honesty. Perfect time to suggest couples therapy, initiate deep conversation, address power dynamics constructively. Opportunity for soul-level healing connection IF you have courage to go deep. Taking vulnerable risks favored. Initiative brings transformative results. Active depth work deepens authentic bond.',
    familyHome: 'Family opportunity for healing transformation through initiative! Perfect time to suggest family therapy, initiate difficult conversations, address toxic patterns constructively. Family receptive to healing work IF you present it courageously. Good time to eliminate what no longer serves from home, address family psychology, reclaim healthy family power. Taking initiative for profound family healing brings liberating results.',
    businessCareer: 'Career opportunity for empowerment through initiative! Excellent time to pursue positions of influence, propose transformative projects, demonstrate leadership depth. Recognition available IF you step forward with authentic power. Good time to mentor others, eliminate what limits professional growth, address workplace dynamics constructively. Taking strategic empowered career risks brings advancement. Your depth and intensity recognized IF expressed courageously.',
    moneyFinances: 'Financial opportunity through transformative initiative! Money potential through elimination and strategic rebuilding IF you take action. Good time to address limiting financial patterns, invest in transformation/growth, build powerful financial foundation. Financial empowerment available through conscious psychological work with money. Your willingness to transform financial shadows can increase resources IF you apply discipline and depth. Strategic financial action produces powerful results.',
    predictions: [
      'Opportunity for profound growth appears - pursue it with courage for transformative results',
      'Your initiative to do deep psychological work produces liberating breakthrough',
      'Chance to eliminate limiting pattern succeeds powerfully IF you take action',
      'Therapeutic or depth work you commit to actively creates profound positive change',
      'Opportunity to reclaim authentic power appears - initiative required to actualize',
      'Difficult conversation you initiate courageously resolves long-standing issue',
      'Shadow work you pursue actively transforms weakness into strength and empowerment',
      'Strategic elimination you make proactively creates immediate improvement and regeneration',
      'Vulnerability you risk with psychological awareness creates deep healing connection',
      'Opportunity for transformative empowerment through conscious initiative and courageous depth work'
    ]
  },

  // ============================================================================
  // MERCURY-JUPITER ASPECTS (Annual growth and learning cycles)
  // ============================================================================

  'Mercury-Jupiter-Conjunction': {
    name: 'Mercury Conjunction Jupiter',
    frequency: 'Occurs 1-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    aspectMeaning: 'Thinking expands with optimism and vision! Mercury\'s mind merges with Jupiter\'s wisdom, creating expansive thinking, optimistic communication, and abundant learning opportunities. Perfect time for studying, teaching, writing, publishing, exploring ideas. Mental horizons broaden. Communication becomes generous and inspiring. Excellent for big-picture thinking, philosophical discussions, educational pursuits. Risk of over-promising or exaggerating - temper enthusiasm with realism. Overall: mind opens to possibility and growth.',
    loveRelationships: 'Relationship communication expands with optimism! Conversations feel inspiring and growth-oriented. Perfect time for discussing future together, sharing philosophies, planning adventures. Optimistic about relationship possibilities. Good time to explore new relationship territories, be generous with words, share big dreams. Warning: avoid making unrealistic promises - enthusiasm should be balanced with follow-through.',
    familyHome: 'Family communication becomes optimistic and expansive! Perfect time for inspiring family discussions, educational family activities, sharing wisdom across generations. Home feels intellectually stimulating. Good time for family travel planning, discussing family values and beliefs, teaching family members. Generous communication creates family growth. Avoid exaggerating or over-promising family commitments.',
    businessCareer: 'Professional communication expands with vision! Excellent time for pitching big ideas, pursuing learning opportunities, networking expansively, publishing professional work. Thinking big about career possibilities. Good time for professional development, teaching others, sharing expertise widely. Your ideas attract recognition. Warning: back up enthusiasm with realistic plans - avoid over-promising professionally.',
    moneyFinances: 'Financial thinking becomes optimistic and expansive! Good time to explore financial growth opportunities, learn about investments, plan abundant financial future. Mental approach to money expands. Excellent for financial education, discussing financial philosophy, thinking big about income possibilities. Warning: temper financial optimism with practical analysis - avoid risky financial decisions based solely on enthusiasm.',
    predictions: [
      'Big idea you communicate attracts enthusiastic support and growth opportunity',
      'Your optimistic communication inspires others and opens unexpected doors',
      'Learning opportunity you pursue with enthusiasm expands your mental horizons significantly',
      'Conversation about future possibilities creates exciting shared vision and connection',
      'Writing or teaching you do reaches wider audience than expected',
      'Your generous sharing of knowledge or ideas creates beneficial ripple effect',
      'Philosophical discussion you engage in broadens your perspective profoundly',
      'Educational pursuit or study you begin with excitement proves highly rewarding',
      'Optimistic message you send receives better response than you anticipated',
      'Opportunity to expand your mind and communication creates lasting growth and wisdom'
    ]
  },

  'Mercury-Jupiter-Opposition': {
    name: 'Mercury Opposition Jupiter',
    frequency: 'Occurs 1-2 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    aspectMeaning: 'Tension between details and big picture requiring balance! Mercury\'s focus on specifics faces Jupiter\'s expansive vision, creating challenge between precision and possibility. Risk of mental overload, scattered thinking, or communication that promises more than it delivers. Challenge is integrating careful thinking with optimistic vision. Too much detail causes paralysis; too much expansion causes impracticality. Balance needed between analysis and faith, facts and philosophy. Integration creates wise, realistic optimism.',
    loveRelationships: 'Relationship communication requires balancing ideals and reality! Tension between discussing practical relationship details and future dreams. Partner\'s communication may seem either too limiting or too unrealistic. Challenge is honoring both day-to-day communication AND inspiring future vision. Good time to balance romantic idealism with honest practical discussions. Integrate relationship facts with relationship faith.',
    familyHome: 'Family communication requires balancing practicality and vision! Tension between focusing on home details and discussing big family possibilities. Challenge is honoring both practical family needs AND expansive family dreams. Good time to balance realistic family discussions with inspiring family philosophy. Avoid getting lost in details OR unrealistic family expectations. Integration of practicality and optimism needed.',
    businessCareer: 'Professional communication requires balancing details and vision! Tension between focusing on work specifics and thinking big about career. Challenge is honoring both careful professional analysis AND expansive career possibilities. Good time to balance realistic project details with inspiring professional vision. Avoid paralysis in details OR unrealistic professional promises. Integrate precision with possibility.',
    moneyFinances: 'Financial thinking requires balancing caution and opportunity! Tension between careful financial analysis and optimistic financial expansion. Challenge is honoring both realistic financial assessment AND growth-oriented financial thinking. Good time to balance practical financial management with exploring financial opportunities. Avoid financial paralysis through over-analysis OR risky decisions through excessive optimism. Wise balance essential.',
    predictions: [
      'Tension between your detailed thinking and big vision forces wise integration',
      'Your tendency to over-promise requires conscious balance with realistic delivery',
      'Communication challenge reveals need to integrate facts with optimistic possibility',
      'Mental overload you feel resolves when you prioritize and balance focus',
      'Conflict between practical details and inspiring vision creates breakthrough synthesis',
      'Your scattered thinking consolidates when you balance analysis with faith',
      'Challenge to communicate both honestly AND optimistically produces mature wisdom',
      'Tension between precision and expansion resolved through conscious integration',
      'You learn to balance careful thinking with optimistic growth-oriented mindset',
      'Opportunity to integrate detailed analysis with expansive vision creates wise realistic optimism'
    ]
  },

  'Mercury-Jupiter-Trine': {
    name: 'Mercury Trine Jupiter',
    frequency: 'Occurs 1-2 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    aspectMeaning: 'Thinking and communication flow with natural optimism and growth! Mercury\'s mind harmonizes gracefully with Jupiter\'s wisdom, creating effortless learning, inspiring communication, and abundant mental opportunities. Perfect time for teaching, studying, writing, publishing, networking. Ideas flow generously and optimistically. Communication inspires without exaggeration. Excellent for philosophical discussions, educational pursuits, expanding knowledge. Mental growth feels natural and joyful. Wisdom and communication align beautifully.',
    loveRelationships: 'Relationship communication flows with natural optimism and inspiration! Conversations feel uplifting and growth-oriented effortlessly. Perfect time for discussing future dreams, sharing philosophies, exploring together intellectually. Generosity in communication deepens connection naturally. Good time for inspiring relationship talks, learning together, growing through shared ideas. Optimism and honesty balance perfectly. Communication creates relationship growth.',
    familyHome: 'Family communication flows with natural wisdom and inspiration! Perfect time for uplifting family discussions, educational family activities, sharing knowledge across generations. Home conversations feel expansive and positive. Good time for family learning, discussing family values joyfully, teaching family members naturally. Generous communication creates family harmony and growth effortlessly. Wisdom flows through family connections.',
    businessCareer: 'Professional communication flows with natural vision and growth! Excellent time for presenting ideas, pursuing professional development, networking effectively, publishing work. Career thinking expands naturally and realistically. Good time for teaching professionally, learning new skills, sharing expertise. Your ideas attract recognition effortlessly. Communication creates professional opportunities and advancement naturally. Wisdom and career align.',
    moneyFinances: 'Financial thinking flows with natural optimism and wisdom! Good time to explore financial growth opportunities, learn about smart investments, plan abundant financial future realistically. Mental approach to money expands wisely. Excellent for financial education, discussing sound financial philosophy, thinking optimistically yet practically about income. Financial growth through wise thinking flows naturally. Abundance mindset meets financial wisdom.',
    predictions: [
      'Idea you communicate effortlessly attracts enthusiastic support and opportunity',
      'Your naturally optimistic communication inspires others and opens doors smoothly',
      'Learning opportunity flows to you and expands your knowledge joyfully',
      'Conversation about possibilities creates inspiring shared vision without effort',
      'Writing or teaching you do resonates widely and produces natural success',
      'Your generous knowledge-sharing creates beneficial connections effortlessly',
      'Philosophical discussion you enjoy broadens your perspective naturally and pleasantly',
      'Educational pursuit you begin flows smoothly and proves highly rewarding',
      'Optimistic message you share receives warm enthusiastic response naturally',
      'Opportunity for mental and communicative growth flows to you effortlessly and abundantly'
    ]
  },

  'Mercury-Jupiter-Square': {
    name: 'Mercury Square Jupiter',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    aspectMeaning: 'Growth through mental friction and excessive optimism requiring discipline! Mercury\'s thinking clashes with Jupiter\'s expansion, creating scattered focus, over-promising, or unrealistic mental expectations. Challenge is channeling enthusiasm into realistic plans rather than empty promises. Tension between wanting to learn everything and mastering something specific. Risk of saying too much, promising too much, or thinking too big without follow-through. Crisis teaches balance between optimism and realism. Conscious discipline transforms enthusiasm into wisdom.',
    loveRelationships: 'Relationship communication friction through unrealistic expectations! Tendency to over-promise in relationship or discuss future without realistic foundation. Partner may seem to exaggerate or make empty promises. Challenge is expressing enthusiasm while maintaining honest realistic communication. Good time to consciously balance romantic idealism with truthful practical discussions. Crisis teaches value of promises you can keep. Transform excessive optimism into mature realistic hope.',
    familyHome: 'Family communication friction through scattered focus or exaggeration! Home discussions may involve unrealistic expectations or broken promises. Challenge is expressing family optimism while maintaining practical honest communication. Good time to consciously balance inspiring family vision with realistic family commitments. Crisis reveals importance of follow-through on family promises. Transform scattered family communication into focused realistic optimism.',
    businessCareer: 'Professional communication friction through over-promising or scattered focus! Work discussions may involve unrealistic commitments or inability to deliver what you promised. Challenge is expressing professional enthusiasm while maintaining realistic honest communication. Good time to consciously balance big career vision with practical achievable steps. Crisis teaches value of under-promising and over-delivering. Transform scattered professional thinking into disciplined focused growth.',
    moneyFinances: 'Financial thinking friction through excessive optimism or risky decisions! Money decisions may involve unrealistic expectations or financial over-extension. Challenge is maintaining financial enthusiasm while exercising practical cautious analysis. Good time to consciously balance financial growth mindset with realistic risk assessment. Crisis teaches value of financial discipline and honest assessment. Transform financial over-optimism into wise balanced financial thinking.',
    predictions: [
      'Over-promise you make teaches important lesson about realistic commitments',
      'Your scattered focus consolidates when you consciously prioritize and discipline thinking',
      'Communication that promised too much requires honest correction and follow-through',
      'Excessive optimism you feel requires conscious grounding in practical reality',
      'Mental friction forces you to balance enthusiasm with realistic achievable plans',
      'Your tendency to exaggerate requires conscious discipline toward honest communication',
      'Scattered learning or thinking consolidates into focused meaningful growth',
      'Crisis of unrealistic expectations teaches value of under-promising and over-delivering',
      'You learn to channel enthusiasm into disciplined realistic optimistic action',
      'Opportunity to transform excessive optimism into wise balanced growth-oriented thinking'
    ]
  },

  'Mercury-Jupiter-Sextile': {
    name: 'Mercury Sextile Jupiter',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    aspectMeaning: 'Opportunity for mental growth through communicative initiative! Mercury\'s thinking harmonizes with Jupiter\'s wisdom, creating potential for learning, inspiring communication, and knowledge expansion IF you take action. Opportunities for study, teaching, writing, networking appear - but require your engagement. Perfect time to pursue education, share ideas actively, explore philosophies. Success through initiative in learning and communication. Passive approach wastes potential; active mental engagement creates growth and opportunity.',
    loveRelationships: 'Relationship communication opportunity through initiative! Potential for inspiring conversations, shared learning, intellectual growth together IF you initiate. Perfect time to suggest meaningful discussions, plan learning experiences together, share philosophies actively. Opportunity for relationship growth through communication IF you take the lead. Initiative in generous honest communication deepens connection. Active engagement brings inspiring results.',
    familyHome: 'Family communication opportunity through initiative! Potential for uplifting family discussions, educational family activities, wisdom-sharing IF you initiate. Perfect time to suggest family learning experiences, share knowledge with family members, discuss family values actively. Family receptive to inspiring communication IF you present it. Initiative in generous family communication creates harmony and growth. Active engagement brings positive results.',
    businessCareer: 'Professional communication opportunity through initiative! Potential for career advancement through presenting ideas, pursuing learning, networking IF you take action. Perfect time to pitch proposals, pursue professional development actively, share expertise. Recognition available IF you step forward with ideas. Initiative in professional learning and communication creates opportunities. Active engagement brings career growth and success.',
    moneyFinances: 'Financial growth opportunity through learning and initiative! Potential for improved financial situation through financial education, wise planning IF you pursue it actively. Perfect time to learn about investments, explore income opportunities, discuss financial growth strategies. Financial expansion available through knowledgeable initiative. Active financial learning and wise action bring improvement. Passive approach wastes opportunity.',
    predictions: [
      'Learning opportunity appears - pursue it actively for significant mental growth',
      'Your initiative to communicate ideas attracts support and creates opportunity',
      'Chance to teach or share knowledge succeeds IF you step forward actively',
      'Educational pursuit you begin with enthusiasm produces rewarding results',
      'Networking or communication you initiate actively creates beneficial connections',
      'Opportunity to expand thinking through study appears - initiative required to actualize',
      'Philosophical discussion you initiate broadens your and others\' perspectives',
      'Writing or publishing opportunity you pursue actively succeeds and resonates',
      'Your active generous sharing of ideas creates unexpected positive ripple effect',
      'Opportunity for mental communicative growth through conscious initiative and active engagement'
    ]
  },

  // ============================================================================
  // MERCURY-SATURN ASPECTS (Annual discipline and mastery cycles)
  // ============================================================================

  'Mercury-Saturn-Conjunction': {
    name: 'Mercury Conjunction Saturn',
    frequency: 'Occurs 1-2 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, mastery, limitation, time, commitment, and achievement through effort. It\'s where you build lasting success through patient work and maturity.',
    aspectMeaning: 'Thinking becomes serious, disciplined, and structured! Mercury\'s mind merges with Saturn\'s discipline, creating focused concentration, serious communication, and methodical learning. Perfect time for serious study, strategic planning, structured writing, important conversations requiring maturity. Mental focus sharpens. Communication becomes more careful and authoritative. Excellent for detailed work, long-term planning, professional communications. May feel mentally heavy or pessimistic - but produces lasting results. Depth over breadth.',
    loveRelationships: 'Relationship communication becomes serious and committed! Conversations feel mature and realistic. Perfect time for discussing long-term commitment, addressing relationship responsibilities, having serious important talks. Communication may feel heavy but builds lasting foundation. Good time for practical relationship planning, addressing challenges honestly, making mature relationship commitments. Depth and honesty over lighthearted chitchat.',
    familyHome: 'Family communication becomes serious and structured! Perfect time for important family discussions, addressing family responsibilities, planning long-term family matters. Home conversations feel mature and realistic. Good time for discussing family obligations, addressing family challenges honestly, making family commitments. Communication may feel heavy but creates lasting family structure. Responsibility and honesty emphasized.',
    businessCareer: 'Professional communication becomes disciplined and authoritative! Excellent time for serious work discussions, strategic career planning, structured professional writing, important business meetings. Thinking sharpens for detailed professional work. Good time for demonstrating professional maturity, communicating with authority, making long-term career commitments. Your serious communication attracts professional respect. Discipline and mastery in professional expression.',
    moneyFinances: 'Financial thinking becomes serious and disciplined! Good time for careful financial planning, serious budgeting, structured financial decisions, long-term financial strategy. Mental approach to money becomes realistic and conservative. Excellent for detailed financial analysis, addressing financial responsibilities, making mature financial commitments. Cautious financial thinking prevents mistakes. Discipline creates lasting financial security.',
    predictions: [
      'Serious conversation you have creates lasting understanding and commitment',
      'Your disciplined focused thinking produces important breakthrough or achievement',
      'Structured plan you create carefully provides solid foundation for success',
      'Important message you communicate with maturity attracts respect and recognition',
      'Detailed work or study you undertake with discipline yields lasting valuable results',
      'Serious commitment you make through careful communication proves enduring and significant',
      'Professional communication demonstrating expertise and maturity advances your career',
      'Realistic honest conversation you initiate resolves long-standing issue',
      'Focused concentration you apply to complex problem produces important solution',
      'Opportunity to communicate with authority and discipline creates lasting achievement and respect'
    ]
  },

  'Mercury-Saturn-Opposition': {
    name: 'Mercury Opposition Saturn',
    frequency: 'Occurs 1-2 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, mastery, limitation, time, commitment, and achievement through effort. It\'s where you build lasting success through patient work and maturity.',
    aspectMeaning: 'Tension between free thinking and mental limitation requiring balance! Mercury\'s curiosity faces Saturn\'s restriction, creating mental blocks, communication obstacles, or self-doubt in thinking. Challenge is honoring both open inquiry AND disciplined focus. Risk of mental pessimism, fear of speaking, or excessive criticism. Resistance to structure creates chaos; excessive structure stifles creativity. Integration needed between curiosity and discipline, flexibility and rigor. Balance creates mature discernment.',
    loveRelationships: 'Relationship communication faces obstacles requiring patience! Tension between free expression and fear of judgment or rejection. Partner\'s communication may seem critical or limiting. Challenge is honoring both authentic expression AND mature responsible communication. Good time to work through communication blocks, address fears about speaking truth, balance honesty with sensitivity. Integration of freedom and responsibility in communication needed.',
    familyHome: 'Family communication faces blocks requiring maturity! Tension between wanting to speak freely and feeling limited by family judgment or responsibility. Challenge is honoring both authentic family expression AND mature responsible family communication. Good time to work through family communication patterns, address critical family voices, balance truth-telling with respect. Integration of openness and structure needed in family communication.',
    businessCareer: 'Professional communication faces obstacles requiring discipline! Tension between creative professional thinking and limiting professional structures or authority. Challenge is honoring both innovative professional ideas AND realistic professional constraints. Good time to work through professional communication blocks, address fear of authority judgment, balance creativity with professionalism. Integration of innovation and discipline creates professional maturity.',
    moneyFinances: 'Financial thinking faces blocks requiring realistic assessment! Tension between financial optimism and limiting financial reality or fears. Challenge is honoring both positive financial thinking AND realistic financial constraints. Good time to work through financial mental blocks, address money fears honestly, balance hope with practical assessment. Integration of financial faith and financial discipline creates wise money management.',
    predictions: [
      'Communication block you experience reveals fear or pattern requiring conscious work',
      'Your mental limitation or self-doubt requires addressing underlying critical voice',
      'Tension between free thinking and disciplined structure forces wise integration',
      'Critical feedback you receive, though painful, ultimately improves your thinking',
      'Mental obstacle you face teaches importance of balancing curiosity with focus',
      'Fear of speaking or expressing you confront requires courage to overcome',
      'Conflict between your ideas and authority/structure forces mature consideration',
      'Self-doubt in thinking you work through produces stronger discernment',
      'Communication challenge requires balancing authentic expression with responsibility',
      'Opportunity to integrate free inquiry with disciplined structure creates mature wisdom'
    ]
  },

  'Mercury-Saturn-Trine': {
    name: 'Mercury Trine Saturn',
    frequency: 'Occurs 1-2 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, mastery, limitation, time, commitment, and achievement through effort. It\'s where you build lasting success through patient work and maturity.',
    aspectMeaning: 'Thinking and communication flow with natural discipline and mastery! Mercury\'s mind harmonizes gracefully with Saturn\'s structure, creating effortless focus, authoritative communication, and productive mental discipline. Perfect time for serious study, detailed work, professional writing, important strategic planning. Concentration comes naturally. Communication carries natural authority without harshness. Excellent for complex problem-solving, structured learning, mature conversations. Mental discipline feels easy and rewarding. Wisdom and focus align beautifully.',
    loveRelationships: 'Relationship communication flows with natural maturity and depth! Conversations feel serious yet comfortable, committed yet authentic. Perfect time for discussing long-term plans, addressing relationship realities honestly, making mature commitments naturally. Communication depth without heaviness. Good time for realistic relationship planning, speaking truth with sensitivity, building lasting communication patterns. Maturity and honesty combine effortlessly. Communication strengthens commitment.',
    familyHome: 'Family communication flows with natural wisdom and structure! Perfect time for important family discussions, addressing family responsibilities comfortably, planning family matters wisely. Home conversations feel mature and productive naturally. Good time for structured family planning, honest family communication, making family commitments. Seriousness and warmth balance perfectly. Family communication creates lasting foundation effortlessly.',
    businessCareer: 'Professional communication flows with natural authority and discipline! Excellent time for important work presentations, strategic career planning, professional writing, serious business discussions. Your communication carries natural professional weight and respect. Good time for demonstrating expertise, communicating with authority, planning long-term career strategy. Discipline and professionalism come naturally. Career advancement through communication flows smoothly.',
    moneyFinances: 'Financial thinking flows with natural discipline and wisdom! Good time for serious financial planning, structured budgeting, wise financial decisions, long-term financial strategy. Mental approach to money becomes naturally realistic and disciplined. Excellent for detailed financial analysis, making sound financial commitments, implementing financial structure. Cautious wise financial thinking comes naturally. Financial security through disciplined thinking builds effortlessly.',
    predictions: [
      'Serious conversation you have naturally creates lasting understanding and commitment',
      'Your disciplined thinking effortlessly produces important achievement or breakthrough',
      'Complex problem you approach with focus resolves smoothly and permanently',
      'Professional communication demonstrating natural expertise advances your career',
      'Detailed work or study you undertake flows productively and yields lasting results',
      'Mature honest communication you offer naturally earns respect and deepens connection',
      'Strategic plan you create with discipline provides solid successful foundation',
      'Your naturally authoritative communication attracts recognition and opportunity',
      'Focused concentration comes easily and produces significant valuable results',
      'Opportunity for communication with natural discipline and wisdom creates lasting achievement'
    ]
  },

  'Mercury-Saturn-Square': {
    name: 'Mercury Square Saturn',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, mastery, limitation, time, commitment, and achievement through effort. It\'s where you build lasting success through patient work and maturity.',
    aspectMeaning: 'Growth through mental blocks and communication obstacles requiring discipline! Mercury\'s thinking clashes with Saturn\'s limitation, creating self-doubt, mental pessimism, or fear of expression. Challenge is pushing through mental obstacles rather than accepting limitation as permanent. Tendency toward negative thinking, excessive self-criticism, or communication anxiety. Crisis forces development of mental discipline and mature discernment. Conscious effort transforms obstacles into mastery. Persistence through difficulty builds lasting mental strength.',
    loveRelationships: 'Relationship communication friction through fear or criticism! Communication may feel blocked, awkward, or judged. Self-doubt in expressing feelings or fear of partner\'s judgment. Challenge is speaking truth despite fear of rejection or criticism. Good time to consciously work through communication blocks, address critical inner voice, practice vulnerable honest expression. Crisis teaches communication courage. Persistence through difficulty builds authentic mature relationship communication.',
    familyHome: 'Family communication friction through blocks or criticism! Home conversations may feel stifled, critical, or difficult. Self-doubt about family expression or fear of family judgment. Challenge is communicating authentically despite family criticism or limiting patterns. Good time to consciously work through family communication obstacles, address critical family voices, speak truth with maturity. Crisis forces family communication growth. Persistence builds healthier family expression.',
    businessCareer: 'Professional communication friction through obstacles or self-doubt! Work communication may feel blocked, judged, or inadequate. Fear of authority judgment or excessive professional self-criticism. Challenge is expressing professional ideas despite fear or obstacles. Good time to consciously push through professional communication blocks, address imposter syndrome, communicate competently despite doubts. Crisis builds professional communication strength. Persistence creates career advancement.',
    moneyFinances: 'Financial thinking friction through pessimism or fear! Money thoughts may feel anxious, limited, or overwhelmingly responsible. Excessive financial worry or paralyzing financial fear. Challenge is thinking practically about money without mental paralysis or pessimism. Good time to consciously work through financial mental blocks, address money anxiety, think realistically without catastrophizing. Crisis develops financial mental discipline. Persistence builds wise financial thinking.',
    predictions: [
      'Communication block you face requires conscious courage to speak truth anyway',
      'Your mental self-doubt reveals critical inner voice requiring compassionate challenge',
      'Obstacle in thinking or expression you push through builds lasting mental strength',
      'Fear of judgment you confront consciously frees your authentic communication',
      'Mental difficulty or pessimism you work through develops mature discernment',
      'Critical feedback you receive, though difficult, ultimately improves your mastery',
      'Communication challenge forces you to develop discipline and mental persistence',
      'Self-doubt you consciously overcome produces stronger confidence and competence',
      'Mental friction you navigate with discipline transforms into lasting achievement',
      'Opportunity to transform mental obstacles into mastery through conscious persistent effort'
    ]
  },

  'Mercury-Saturn-Sextile': {
    name: 'Mercury Sextile Saturn',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, mastery, limitation, time, commitment, and achievement through effort. It\'s where you build lasting success through patient work and maturity.',
    aspectMeaning: 'Opportunity for mental mastery through disciplined initiative! Mercury\'s thinking harmonizes with Saturn\'s structure, creating potential for focused achievement, authoritative communication, and disciplined learning IF you take action. Opportunities for serious study, strategic planning, professional communication appear - but require your effort. Perfect time to pursue structured learning, practice discipline, communicate with authority. Success through mental discipline and initiative. Passive approach wastes potential; active disciplined effort creates lasting results.',
    loveRelationships: 'Relationship communication opportunity through mature initiative! Potential for serious important conversations, long-term planning, committed communication IF you initiate. Perfect time to suggest meaningful relationship discussions, address important topics maturely, make relationship commitments actively. Opportunity for relationship depth through honest communication IF you have the courage. Initiative in mature authentic communication strengthens relationship. Active engagement brings lasting results.',
    familyHome: 'Family communication opportunity through responsible initiative! Potential for important family discussions, structured family planning, mature family communication IF you initiate. Perfect time to suggest serious family conversations, address family responsibilities actively, make family commitments. Family receptive to mature honest communication IF you present it. Initiative in responsible family communication creates harmony and structure. Active engagement brings positive results.',
    businessCareer: 'Professional communication opportunity through disciplined initiative! Potential for career advancement through demonstrating expertise, strategic planning, professional communication IF you take action. Perfect time to present professional ideas with authority, pursue structured professional development, communicate maturely. Recognition available IF you step forward with discipline and competence. Initiative in professional mastery creates opportunities. Active disciplined effort brings career success.',
    moneyFinances: 'Financial planning opportunity through disciplined initiative! Potential for improved financial situation through serious planning, structured budgeting, responsible financial decisions IF you pursue it actively. Perfect time to create financial plan, implement financial discipline, make wise financial commitments. Financial security available through disciplined initiative. Active responsible financial action brings improvement. Passive approach wastes opportunity.',
    predictions: [
      'Opportunity for serious study or planning appears - pursue it with discipline for success',
      'Your initiative to communicate with authority attracts respect and recognition',
      'Chance to demonstrate expertise or maturity succeeds IF you step forward actively',
      'Important conversation you initiate maturely resolves issue and strengthens connection',
      'Structured plan you create with discipline provides foundation for lasting achievement',
      'Opportunity to show professional competence appears - initiative required to actualize',
      'Serious commitment you make after careful thought proves enduring and significant',
      'Detailed work you undertake with disciplined effort yields valuable lasting results',
      'Your active practice of mental discipline creates breakthrough in mastery',
      'Opportunity for achievement through disciplined communication and focused initiative'
    ]
  },

  // ============================================================================
  // MERCURY-URANUS ASPECTS (Revolutionary thinking and innovative communication)
  // ============================================================================

  'Mercury-Uranus-Conjunction': {
    name: 'Mercury Conjunction Uranus',
    frequency: 'Occurs 1-2 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, breakthrough, innovation, authenticity, sudden change, and freedom. It\'s where you break free, awaken, rebel, and express your unique genius.',
    aspectMeaning: 'Mind awakens with revolutionary brilliance! Mercury\'s thinking merges with Uranus\'s innovation, creating breakthrough insights, unconventional communication, and mental liberation. Perfect time for innovative thinking, expressing unique ideas, learning progressive subjects, sudden mental breakthroughs. Mind operates at accelerated innovative pace. Communication becomes electric and original. Excellent for technology, invention, radical new perspectives. May feel mentally restless - channel energy into creative problem-solving. Genius flows through authenticity.',
    loveRelationships: 'Relationship communication becomes exciting and unconventional! Conversations feel electric and liberating. Perfect time for honest authentic discussions, trying new communication styles, expressing your unique perspective in relationship. Sudden relationship insights or breakthroughs possible. Freedom of thought and expression essential. Good time for refreshing relationship through innovative communication. Excitement and authenticity over predictability.',
    familyHome: 'Family communication becomes innovative and liberating! Perfect time for introducing progressive ideas to family, having breakthrough family conversations, trying new family communication styles. Home discussions feel fresh and authentic. Good time for family brainstorming, embracing family uniqueness, communicating with radical honesty. Technology may facilitate family connection. Liberation from limiting family communication patterns.',
    businessCareer: 'Professional communication becomes innovative and breakthrough-oriented! Excellent time for pitching revolutionary ideas, embracing new professional technology, expressing unique professional perspective, making innovative professional connections. Thinking accelerates professionally. Good time for creative problem-solving, unconventional professional approaches, communicating authentic professional vision. Your innovative ideas attract recognition. Professional liberation through authentic expression.',
    moneyFinances: 'Financial thinking becomes innovative and liberating! Good time to explore unconventional income ideas, learn about innovative investments, think creatively about financial freedom. Mental approach to money becomes progressive and original. Excellent for financial brainstorming, exploring tech-based income, thinking outside financial boxes. Sudden financial insights possible. Liberation from limiting financial thinking patterns.',
    predictions: [
      'Sudden brilliant insight appears that solves problem in completely new way',
      'Your unconventional idea communicated authentically attracts enthusiastic support',
      'Breakthrough in thinking liberates you from limiting mental pattern',
      'Innovative approach to communication you try creates exciting new connections',
      'Technology or progressive idea you learn accelerates your mental capabilities',
      'Unexpected conversation produces revolutionary insight or opportunity',
      'Your authentic unique perspective expressed boldly receives recognition',
      'Mental breakthrough you experience changes how you see important situation',
      'Innovative communication style you adopt refreshes relationships and opportunities',
      'Opportunity to express genius through revolutionary authentic thinking and communication'
    ]
  },

  'Mercury-Uranus-Opposition': {
    name: 'Mercury Opposition Uranus',
    frequency: 'Occurs 1-2 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, breakthrough, innovation, authenticity, sudden change, and freedom. It\'s where you break free, awaken, rebel, and express your unique genius.',
    aspectMeaning: 'Tension between conventional thinking and revolutionary insight requiring integration! Mercury\'s logical mind faces Uranus\'s radical innovation, creating mental tension between conformity and breakthrough. Challenge is honoring both practical communication AND revolutionary authentic expression. Risk of mental chaos, scattered brilliance, or rebellious communication lacking follow-through. Resistance to new ideas creates stagnation; excessive novelty creates instability. Integration of tradition and innovation needed. Balance creates grounded genius.',
    loveRelationships: 'Relationship communication tension between stability and excitement! Conflict between conventional relationship discussion and radical authentic expression. Partner may seem unpredictably communicative or too conventional. Challenge is honoring both stable practical communication AND exciting authentic expression. Good time to integrate reliable communication with refreshing honesty, predictability with spontaneity. Balance needed between communication safety and liberation.',
    familyHome: 'Family communication tension between tradition and progressive ideas! Conflict between conventional family discussion patterns and revolutionary family communication. Challenge is honoring both family communication traditions AND innovative authentic family expression. Good time to integrate family communication stability with progressive honest family dialogue. Balance needed between respecting family norms and expressing authentic family truth.',
    businessCareer: 'Professional communication tension between conventional and innovative! Conflict between traditional professional communication and radical new professional ideas. Challenge is honoring both professional communication norms AND innovative breakthrough professional thinking. Good time to integrate professional conventions with authentic innovative professional expression. Balance needed between career stability and professional revolution.',
    moneyFinances: 'Financial thinking tension between conventional and radical! Conflict between traditional financial thinking and innovative unconventional financial ideas. Challenge is honoring both proven financial wisdom AND progressive innovative financial approaches. Good time to integrate conservative financial thinking with calculated innovative financial strategies. Balance needed between financial security and liberating financial innovation.',
    predictions: [
      'Mental tension forces you to integrate conventional wisdom with revolutionary insight',
      'Your scattered brilliant ideas require conscious organization and practical application',
      'Communication conflict reveals need to balance authenticity with consideration',
      'Tension between old thinking patterns and new insights creates breakthrough synthesis',
      'Rebellious communication you temper with wisdom creates productive change',
      'Mental restlessness you channel constructively produces innovative practical solution',
      'Challenge to communicate both reliably AND authentically produces mature integration',
      'Conflict between conventional and radical thinking resolved through balanced innovation',
      'You learn to express unique ideas in ways others can actually receive and use',
      'Opportunity to integrate traditional communication with revolutionary authentic expression'
    ]
  },

  'Mercury-Uranus-Trine': {
    name: 'Mercury Trine Uranus',
    frequency: 'Occurs 1-2 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, breakthrough, innovation, authenticity, sudden change, and freedom. It\'s where you break free, awaken, rebel, and express your unique genius.',
    aspectMeaning: 'Thinking and communication flow with natural innovation and brilliance! Mercury\'s mind harmonizes gracefully with Uranus\'s genius, creating effortless breakthroughs, inspiring innovative communication, and liberated authentic expression. Perfect time for creative problem-solving, learning new technology, expressing unique ideas, embracing progressive thinking. Mental brilliance flows naturally without chaos. Communication innovates effortlessly. Excellent for inventive work, unconventional learning, authentic dialogue. Genius and practicality align beautifully.',
    loveRelationships: 'Relationship communication flows with natural excitement and authenticity! Conversations feel fresh, honest, and liberating effortlessly. Perfect time for spontaneous meaningful talks, trying new communication approaches, expressing authentic unique perspective in relationship. Freedom and connection balance perfectly. Good time for refreshing relationship dialogue, sharing innovative ideas, communicating with joyful honesty. Excitement and depth combine naturally.',
    familyHome: 'Family communication flows with natural innovation and authenticity! Perfect time for progressive family discussions, introducing new family ideas naturally, communicating with refreshing family honesty. Home conversations feel exciting and liberated comfortably. Good time for family brainstorming, embracing family uniqueness joyfully, trying new family communication styles. Innovation and family warmth combine effortlessly.',
    businessCareer: 'Professional communication flows with natural innovation and breakthrough! Excellent time for presenting innovative ideas, adopting new professional technology, expressing unique professional perspective. Brilliant professional thinking emerges naturally and practically. Good time for creative professional problem-solving, unconventional yet effective professional approaches, authentic professional networking. Your innovative professionalism attracts recognition effortlessly.',
    moneyFinances: 'Financial thinking flows with natural innovation and insight! Good time to discover innovative income opportunities, learn progressive financial approaches, think creatively about financial freedom naturally. Mental approach to money becomes refreshingly original yet practical. Excellent for exploring new financial technologies, unconventional yet sound financial strategies, liberating financial thinking. Financial innovation flows wisely and naturally.',
    predictions: [
      'Brilliant solution appears naturally and works perfectly when implemented',
      'Your innovative idea communicated effortlessly attracts enthusiastic support',
      'Breakthrough in thinking flows to you naturally and changes everything positively',
      'Technology or progressive approach you adopt enhances capabilities smoothly',
      'Unexpected conversation produces exciting insight that proves highly valuable',
      'Your authentic unique communication naturally creates beneficial new connections',
      'Mental innovation you apply effortlessly solves long-standing problem',
      'Progressive idea you express naturally resonates and creates positive change',
      'Learning new skill or technology flows easily and proves immediately useful',
      'Opportunity for genius expression through natural innovative authentic communication'
    ]
  },

  'Mercury-Uranus-Square': {
    name: 'Mercury Square Uranus',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, breakthrough, innovation, authenticity, sudden change, and freedom. It\'s where you break free, awaken, rebel, and express your unique genius.',
    aspectMeaning: 'Growth through mental restlessness and disruptive communication requiring focus! Mercury\'s thinking clashes with Uranus\'s revolution, creating scattered mental energy, impulsive communication, or rebellious thinking lacking grounding. Challenge is channeling innovative energy into productive breakthroughs rather than scattered chaos. Tendency toward mental overload, saying shocking things impulsively, or brilliant ideas without follow-through. Crisis forces disciplined innovation. Conscious focus transforms mental chaos into grounded genius.',
    loveRelationships: 'Relationship communication friction through impulsiveness or chaos! Communication may feel scattered, shocking, or disruptively honest. Tendency to say things impulsively that upset partner. Challenge is expressing authentic truth while maintaining relationship consideration. Good time to consciously channel honest communication into productive dialogue, temper impulsive expression with wisdom. Crisis teaches value of grounded authentic communication. Transform rebellious speech into constructive honesty.',
    familyHome: 'Family communication friction through disruption or rebellion! Home discussions may feel chaotic, shocking, or rebelliously honest. Impulsive family communication creates upset. Challenge is expressing family authenticity while maintaining family respect. Good time to consciously channel family truth-telling into constructive family dialogue, balance radical honesty with family sensitivity. Crisis forces family communication maturity. Transform family rebellion into grounded family authenticity.',
    businessCareer: 'Professional communication friction through impulsiveness or disruption! Work communication may feel scattered, inappropriately rebellious, or brilliantly chaotic. Tendency to express innovative ideas impulsively without professional consideration. Challenge is channeling professional innovation into productive professional breakthrough. Good time to consciously focus scattered professional brilliance, express innovative ideas with professional grounding. Crisis teaches disciplined innovation. Transform chaos into grounded professional genius.',
    moneyFinances: 'Financial thinking friction through impulsiveness or scattered innovation! Money decisions may feel chaotic or impulsively radical. Tendency toward financial impulsiveness disguised as financial innovation. Challenge is channeling innovative financial thinking into grounded practical financial strategies. Good time to consciously focus scattered financial brilliance, balance financial innovation with financial wisdom. Crisis teaches disciplined financial innovation. Transform financial chaos into grounded creative financial thinking.',
    predictions: [
      'Impulsive communication you consciously moderate before speaking prevents later regret',
      'Your scattered mental energy focused through discipline produces breakthrough',
      'Rebellious expression you temper with wisdom creates productive change not chaos',
      'Mental restlessness you channel into focused innovation solves important problem',
      'Shocking truth you communicate with consideration creates growth not disruption',
      'Brilliant scattered ideas you organize consciously produce practical valuable results',
      'Communication friction teaches you to balance authentic expression with wisdom',
      'Mental chaos you consciously focus transforms into grounded innovative thinking',
      'Impulsive innovative idea you refine with discipline becomes genuinely useful',
      'Opportunity to transform mental chaos into focused grounded genius through conscious discipline'
    ]
  },

  'Mercury-Uranus-Sextile': {
    name: 'Mercury Sextile Uranus',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, breakthrough, innovation, authenticity, sudden change, and freedom. It\'s where you break free, awaken, rebel, and express your unique genius.',
    aspectMeaning: 'Opportunity for innovative breakthrough through mental initiative! Mercury\'s thinking harmonizes with Uranus\'s innovation, creating potential for brilliant insights, liberating communication, and mental breakthroughs IF you take action. Opportunities for learning new technology, expressing unique ideas, trying innovative approaches appear - but require your engagement. Perfect time to pursue progressive learning, communicate authentically, experiment with new thinking. Success through innovative mental initiative. Passive approach wastes potential; active innovative engagement creates breakthrough.',
    loveRelationships: 'Relationship communication opportunity through innovative initiative! Potential for refreshing relationship dialogue, breakthrough relationship understanding, authentic connection IF you initiate. Perfect time to suggest trying new communication style, sharing unique perspective honestly, having spontaneous meaningful conversation. Opportunity for relationship breakthrough through authentic communication IF you take the risk. Initiative in honest innovative communication deepens connection.',
    familyHome: 'Family communication opportunity through progressive initiative! Potential for family breakthrough, refreshed family dialogue, innovative family solutions IF you initiate. Perfect time to suggest progressive family discussion, share new family ideas actively, communicate family truth authentically. Family receptive to innovative honest communication IF you present it. Initiative in authentic progressive family communication creates positive change.',
    businessCareer: 'Professional communication opportunity through innovative initiative! Potential for career breakthrough through expressing innovative ideas, adopting new professional approaches, networking unconventionally IF you take action. Perfect time to pitch creative professional ideas, learn new professional technology actively, communicate unique professional perspective. Recognition available IF you step forward innovatively. Initiative in professional innovation creates opportunities.',
    moneyFinances: 'Financial innovation opportunity through mental initiative! Potential for improved financial situation through innovative financial thinking, learning new financial approaches, exploring unconventional income IF you pursue it actively. Perfect time to research innovative investments, explore progressive income strategies, think creatively about financial freedom. Financial breakthrough available through innovative initiative.',
    predictions: [
      'Innovative opportunity appears - seize it actively for breakthrough results',
      'Your initiative to express unique idea attracts support and creates opportunity',
      'Chance to learn new technology or approach succeeds IF you pursue it actively',
      'Authentic communication you initiate courageously refreshes important relationship',
      'Opportunity for mental breakthrough appears - initiative required to actualize',
      'Progressive idea you pursue actively produces exciting valuable results',
      'Innovative approach to problem you try proactively works brilliantly',
      'Your active experimentation with new thinking creates unexpected breakthrough',
      'Authentic honest communication you risk with courage liberates and connects',
      'Opportunity for breakthrough through innovative mental initiative and authentic expression'
    ]
  },

  // ============================================================================
  // MERCURY-NEPTUNE ASPECTS (Mystical and creative communication)
  // ============================================================================

  'Mercury-Neptune-Conjunction': {
    name: 'Mercury Conjunction Neptune',
    frequency: 'Occurs 1-2 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Neptune represents spirituality, transcendence, divine connection, compassion, imagination, dreams, illusion, and dissolution of boundaries. It\'s where you connect to the infinite, create beauty, and transcend the ego.',
    aspectMeaning: 'Mind dissolves into mystical inspiration and creative imagination! Mercury\'s thinking merges with Neptune\'s transcendence, creating poetic communication, intuitive knowing, and spiritual mental connection. Perfect time for creative writing, spiritual study, compassionate communication, following intuitive guidance. Logical boundaries dissolve into inspiration. Communication becomes artistic and empathetic. Excellent for poetry, music, meditation, dream interpretation. Warning: verify practical details - discernment between divine inspiration and confusion essential. Magic and mystery in thinking.',
    loveRelationships: 'Relationship communication becomes romantic and soul-connected! Conversations feel poetic, empathetic, and spiritually intimate. Perfect time for romantic communication, sharing dreams and ideals, expressing unconditional understanding. Deep soul-level communication possible. Good time for compassionate listening, forgiving communication, connecting through shared spirituality. Warning: maintain clarity - see partner\'s reality while honoring mystical connection. Balance romance with honesty.',
    familyHome: 'Family communication becomes compassionate and imaginative! Perfect time for empathetic family discussions, sharing family dreams, creative family communication, expressing unconditional family love. Home conversations feel gentle and understanding. Good time for family creative projects, spiritual family connection, compassionate family forgiveness. Warning: maintain family boundaries - balance compassion with clarity about family reality.',
    businessCareer: 'Professional communication becomes inspired and creative! Excellent time for creative professional work, compassionate professional communication, inspired professional vision, artistic career pursuits. Thinking becomes imaginative and intuitive professionally. Good time for helping professions, creative industries, spiritual career communication. Warning: verify professional details carefully - balance inspiration with practical professional clarity. Document everything.',
    moneyFinances: 'Financial thinking becomes idealistic and intuitive! Good time to trust financial intuition while verifying practical details, pursue creative income, give generously, think spiritually about abundance. Mental approach to money becomes idealistic. Warning: financial confusion possible through unclear thinking or wishful financial thinking - verify all financial details carefully. Balance financial faith with financial facts. Avoid financial escapism.',
    predictions: [
      'Creative or spiritual inspiration flows through your thinking and communication',
      'Your compassionate empathetic communication creates deep meaningful connection',
      'Intuitive insight you trust (after verification) proves valuable and accurate',
      'Artistic or poetic expression you create touches hearts and resonates deeply',
      'Dream or mystical experience provides genuine insight about important situation',
      'Your gentle compassionate words heal someone\'s pain or confusion',
      'Spiritual study or practice deepens your understanding and inner peace',
      'Creative writing or communication you produce flows beautifully and meaningfully',
      'Empathetic listening you offer creates profound understanding and connection',
      'Opportunity to express soul through creative compassionate inspired communication'
    ]
  },

  'Mercury-Neptune-Opposition': {
    name: 'Mercury Opposition Neptune',
    frequency: 'Occurs 1-2 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Neptune represents spirituality, transcendence, divine connection, compassion, imagination, dreams, illusion, and dissolution of boundaries. It\'s where you connect to the infinite, create beauty, and transcend the ego.',
    aspectMeaning: 'Tension between logical clarity and mystical confusion requiring discernment! Mercury\'s rational mind faces Neptune\'s dissolution, creating mental fog, communication confusion, or challenge between facts and fantasy. Risk of deception, self-deception, or unclear thinking. Challenge is honoring both practical clarity AND spiritual intuition. Too much logic denies inspiration; too much mysticism denies reality. Integration needed between reason and intuition, facts and faith. Balance creates grounded spirituality. Verify everything.',
    loveRelationships: 'Relationship communication confusion requiring honest clarity! Tension between seeing relationship clearly and romantic projection or illusion. Communication may feel unclear, confusing, or potentially deceptive. Challenge is honoring both spiritual connection AND honest realistic communication. Good time to verify relationship assumptions, practice compassionate honesty, balance romantic ideals with relationship reality. Clarify through gentle honest communication.',
    familyHome: 'Family communication confusion requiring loving boundaries! Tension between family compassion and family clarity. Family communication may feel unclear, confusing, or enabling. Challenge is honoring both family empathy AND honest clear family communication. Good time to clarify family misunderstandings gently, establish compassionate family boundaries, balance family ideals with family reality. Integration of family love and family truth.',
    businessCareer: 'Professional communication confusion requiring practical clarity! Tension between professional inspiration and professional clarity. Work communication may feel unclear, confusing, or unreliable. Challenge is honoring both creative professional vision AND practical professional clarity. Good time to verify professional information carefully, clarify professional misunderstandings, balance professional ideals with professional reality. Document professional communication clearly.',
    moneyFinances: 'Financial confusion requiring practical discernment! Tension between financial intuition and financial clarity. Money situation may feel confusing, unclear, or potentially deceptive. Challenge is honoring both financial faith AND practical financial reality. Good time to verify all financial information carefully, clarify financial confusion, balance financial ideals with financial facts. Avoid financial wishful thinking - verify everything financially twice.',
    predictions: [
      'Confusion you experience reveals illusion requiring honest examination and clarity',
      'Your tendency to see what you wish requires conscious grounding in actual facts',
      'Communication misunderstanding you clarify gently resolves through compassionate honesty',
      'Deception or self-deception revealed teaches importance of verification and discernment',
      'Mental fog you navigate carefully by verifying details produces important clarity',
      'Idealization you release painfully reveals more authentic grounded spiritual path',
      'Challenge between inspiration and practicality resolved through balanced discernment',
      'Confusion clears when you integrate spiritual trust with practical verification',
      'Your honest examination of illusion creates more sustainable authentic understanding',
      'Opportunity to integrate mystical intuition with practical clarity through compassionate discernment'
    ]
  },

  'Mercury-Neptune-Trine': {
    name: 'Mercury Trine Neptune',
    frequency: 'Occurs 1-2 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Neptune represents spirituality, transcendence, divine connection, compassion, imagination, dreams, illusion, and dissolution of boundaries. It\'s where you connect to the infinite, create beauty, and transcend the ego.',
    aspectMeaning: 'Thinking and communication flow with natural inspiration and spiritual clarity! Mercury\'s mind harmonizes gracefully with Neptune\'s mysticism, creating effortless creative expression, clear intuitive knowing, and compassionate communication. Perfect time for creative writing, spiritual learning, empathetic dialogue, artistic communication. Inspiration and clarity align beautifully. Communication becomes naturally poetic without confusion. Excellent for music, art, meditation, helping others. Intuition and reason dance gracefully together.',
    loveRelationships: 'Relationship communication flows with natural romance and soul connection! Conversations feel poetic, empathetic, and spiritually intimate effortlessly. Perfect time for romantic communication, sharing dreams naturally, expressing compassionate understanding. Soul-level understanding comes without trying. Good time for gentle meaningful talks, creative relationship expression, spiritual connection through communication. Magic and clarity combine perfectly.',
    familyHome: 'Family communication flows with natural compassion and creativity! Perfect time for empathetic family discussions, creative family projects, spiritual family connection flowing naturally. Home conversations feel gentle, understanding, and inspired comfortably. Good time for compassionate family listening, imaginative family activities, expressing unconditional family love naturally. Family harmony through creative loving communication flows effortlessly.',
    businessCareer: 'Professional communication flows with natural creativity and inspiration! Excellent time for creative professional work, compassionate professional communication, inspired professional ideas flowing practically. Thinking becomes naturally imaginative yet clear professionally. Good time for creative industries, helping professions, artistic career communication, inspired professional vision manifesting smoothly. Your inspired professionalism attracts recognition naturally.',
    moneyFinances: 'Financial thinking flows with natural intuition and wisdom! Good time to trust verified financial intuition, pursue creative income naturally, think abundantly yet realistically about money. Mental approach to money becomes naturally idealistic yet grounded. Excellent for creative financial strategies, spiritual abundance mindset with practical application, generous giving flowing naturally. Financial intuition and financial clarity align beautifully.',
    predictions: [
      'Creative inspiration flows naturally and expresses beautifully and clearly',
      'Your compassionate communication naturally creates deep healing connection',
      'Intuitive insight emerges clearly and proves accurate and valuable',
      'Artistic expression you create effortlessly resonates deeply and meaningfully',
      'Spiritual understanding you gain feels both mystical and perfectly clear',
      'Your gentle empathetic listening naturally heals and deepens connection',
      'Creative writing or communication flows smoothly and touches hearts',
      'Dream or vision you receive feels both transcendent and actionably clear',
      'Compassionate words you speak naturally create understanding and peace',
      'Opportunity for soul expression through creative inspired clear compassionate communication'
    ]
  },

  'Mercury-Neptune-Square': {
    name: 'Mercury Square Neptune',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Neptune represents spirituality, transcendence, divine connection, compassion, imagination, dreams, illusion, and dissolution of boundaries. It\'s where you connect to the infinite, create beauty, and transcend the ego.',
    aspectMeaning: 'Growth through mental confusion and communication illusion requiring discernment! Mercury\'s thinking clashes with Neptune\'s fog, creating mental chaos, unclear communication, or deceptive thinking. Challenge is developing discernment between divine inspiration and wishful fantasy. Tendency toward self-deception, communication confusion, or avoiding practical reality through escapism. Crisis forces development of grounded spirituality. Conscious verification transforms confusion into clear intuitive wisdom. Verify everything twice.',
    loveRelationships: 'Relationship communication friction through confusion or deception! Communication may feel unclear, confusing, or potentially dishonest. Romantic illusions or misunderstandings likely. Challenge is seeing relationship truth clearly while maintaining compassion. Good time to consciously verify relationship assumptions, address unclear communication directly yet gently, practice honest empathetic communication. Crisis teaches importance of compassionate clarity. Transform romantic confusion into grounded loving honesty.',
    familyHome: 'Family communication friction through confusion or enabling! Home discussions may feel unclear, confusing, or dishonestly compassionate. Family illusions or misunderstandings surface. Challenge is expressing family truth clearly while maintaining family love. Good time to consciously clarify family confusion, establish loving family boundaries, address family enabling patterns. Crisis forces family communication clarity. Transform family confusion into compassionate honest family communication.',
    businessCareer: 'Professional communication friction through confusion or unreliability! Work communication may feel unclear, confusing, or professionally deceptive. Professional illusions or misunderstandings create problems. Challenge is maintaining professional clarity while pursuing creative professional vision. Good time to consciously verify all professional information, clarify professional confusion, document professional communication carefully. Crisis teaches professional discernment. Transform professional confusion into grounded creative professionalism.',
    moneyFinances: 'Financial confusion friction requiring practical verification! Money thinking may feel confusing, unclear, or wishfully unrealistic. Financial illusions or potential financial deception. Challenge is maintaining practical financial clarity while trusting financial intuition. Good time to consciously verify all financial details carefully, address financial confusion directly, think realistically about money. Crisis forces financial mental clarity. Transform financial confusion into grounded wise financial thinking.',
    predictions: [
      'Communication confusion forces you to verify facts and distinguish truth from fantasy',
      'Your tendency toward wishful thinking requires conscious grounding in reality',
      'Deception or misunderstanding you clarify directly teaches importance of verification',
      'Mental fog you navigate by checking details carefully produces important clarity',
      'Escapist thinking you consciously address creates breakthrough to practical spirituality',
      'Illusion you release painfully reveals more authentic grounded path forward',
      'Confusion that seemed overwhelming clears when you verify facts compassionately',
      'Communication misunderstanding you address honestly resolves and strengthens connection',
      'Your conscious practice of discernment transforms confusion into clear grounded wisdom',
      'Opportunity to transform mental confusion into grounded spiritual clarity through verification'
    ]
  },

  'Mercury-Neptune-Sextile': {
    name: 'Mercury Sextile Neptune',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Neptune represents spirituality, transcendence, divine connection, compassion, imagination, dreams, illusion, and dissolution of boundaries. It\'s where you connect to the infinite, create beauty, and transcend the ego.',
    aspectMeaning: 'Opportunity for inspired creative communication through intuitive initiative! Mercury\'s thinking harmonizes with Neptune\'s mysticism, creating potential for artistic expression, spiritual learning, compassionate communication IF you take action. Opportunities for creative writing, empathetic dialogue, spiritual study appear - but require your engagement. Perfect time to pursue creative communication, practice compassionate listening, trust verified intuition. Success through inspired mental initiative. Passive approach wastes potential; active creative engagement creates beautiful results.',
    loveRelationships: 'Relationship communication opportunity through romantic initiative! Potential for poetic romantic dialogue, soul-level connection, compassionate understanding IF you initiate. Perfect time to suggest meaningful spiritual conversation, share dreams actively, express love creatively and compassionately. Opportunity for deep empathetic connection IF you open your heart. Initiative in romantic compassionate communication deepens love.',
    familyHome: 'Family communication opportunity through compassionate initiative! Potential for empathetic family dialogue, creative family connection, spiritual family understanding IF you initiate. Perfect time to suggest creative family project, share family dreams actively, express compassionate family understanding. Family receptive to gentle creative communication IF you present it. Initiative in empathetic family communication creates harmony.',
    businessCareer: 'Professional communication opportunity through creative initiative! Potential for career advancement through creative professional work, compassionate professional communication, inspired professional ideas IF you take action. Perfect time to pursue creative professional projects actively, communicate professionally with empathy, share inspired professional vision. Recognition available IF you step forward creatively and compassionately.',
    moneyFinances: 'Financial opportunity through creative intuitive initiative! Potential for improved financial situation through creative income, intuitive financial strategies, generous giving IF you pursue it actively. Perfect time to explore creative income opportunities, trust verified financial intuition, practice abundant financial thinking with action. Financial improvement available through inspired initiative.',
    predictions: [
      'Creative opportunity appears - pursue it actively for beautiful meaningful results',
      'Your initiative to communicate compassionately creates deep healing connection',
      'Chance to express artistic or spiritual ideas succeeds IF you step forward actively',
      'Intuitive insight you act upon with verification produces valuable outcome',
      'Opportunity for soul-level communication appears - initiative required to actualize',
      'Creative project you initiate with inspiration flows beautifully and resonates',
      'Compassionate listening you offer actively creates profound understanding',
      'Spiritual learning you pursue with openness deepens wisdom and peace',
      'Your active creative expression touches hearts and creates meaningful impact',
      'Opportunity for inspired communication through compassionate creative initiative'
    ]
  },

  // ============================================================================
  // MERCURY-PLUTO ASPECTS (Deep psychological and transformative thinking)
  // ============================================================================

  'Mercury-Pluto-Conjunction': {
    name: 'Mercury Conjunction Pluto',
    frequency: 'Occurs 1-2 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Pluto represents transformation, death and rebirth, power, depth, shadow work, elimination, regeneration, and psychological intensity. It\'s where you confront the underworld, reclaim power, and undergo total metamorphosis.',
    aspectMeaning: 'Mind penetrates depths with psychological intensity and transformative power! Mercury\'s thinking merges with Pluto\'s depth, creating penetrating insight, powerful communication, and mental transformation. Perfect time for research, investigation, depth psychology, uncovering truth, powerful persuasive communication. Thinking becomes laser-focused and profound. Communication carries transformative weight. Excellent for detective work, therapy, shadow examination, strategic planning. Intensity and focus produce breakthrough. Mental power through depth.',
    loveRelationships: 'Relationship communication becomes intensely deep and transformative! Conversations feel powerful, penetrating, and psychologically profound. Perfect time for deep vulnerable relationship discussions, addressing relationship shadows, transformative honest communication. Communication intensity can heal or overwhelm. Good time for couples therapy, profound truth-telling, addressing relationship power dynamics. Warning: intensity can become controlling - channel into healing depth, not manipulation.',
    familyHome: 'Family communication becomes intensely deep and transformative! Perfect time for profound family conversations, addressing family shadows, transformative family truth-telling, healing family psychological patterns. Home discussions feel powerful and penetrating. Good time for family therapy, uncovering family secrets, addressing family power dynamics. Warning: intensity can overwhelm - channel into healing, not control or confrontation.',
    businessCareer: 'Professional communication becomes powerfully strategic and penetrating! Excellent time for strategic professional planning, powerful professional presentations, research-oriented work, persuasive professional communication. Thinking becomes intensely focused professionally. Good time for investigations, negotiations, addressing professional power dynamics, transformative professional projects. Your powerful professional communication attracts recognition. Depth and strategy in professional expression.',
    moneyFinances: 'Financial thinking becomes intensely strategic and transformative! Good time for deep financial research, strategic financial planning, addressing financial shadows, transformative financial decisions. Mental approach to money becomes powerfully focused. Excellent for financial investigation, addressing money psychology, powerful financial strategy, shared resource negotiations. Deep financial transformation through intense focused financial thinking.',
    predictions: [
      'Penetrating insight you gain reveals hidden truth that transforms your understanding',
      'Your powerful focused communication persuades and creates significant impact',
      'Deep research or investigation you undertake uncovers important valuable information',
      'Psychological insight about yourself or situation produces profound breakthrough',
      'Powerful conversation you have transforms relationship or situation permanently',
      'Your mental focus and intensity accomplish what seemed impossible through depth',
      'Truth you uncover through persistent investigation creates important change',
      'Strategic plan you create with intense focus provides powerful foundation',
      'Shadow aspect you examine mentally transforms into source of power and wisdom',
      'Opportunity to transform thinking through deep psychological penetrating mental power'
    ]
  },

  'Mercury-Pluto-Opposition': {
    name: 'Mercury Opposition Pluto',
    frequency: 'Occurs 1-2 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Pluto represents transformation, death and rebirth, power, depth, shadow work, elimination, regeneration, and psychological intensity. It\'s where you confront the underworld, reclaim power, and undergo total metamorphosis.',
    aspectMeaning: 'Tension between surface thinking and psychological depth requiring integration! Mercury\'s light communication faces Pluto\'s intense depth, creating mental power struggles, communication control issues, or obsessive thinking. Risk of manipulative communication, mental paranoia, or overwhelming psychological intensity. Challenge is honoring both light communication AND deep psychological truth. Too much surface denies depth; too much intensity overwhelms. Integration needed between ease and intensity, trust and investigation. Balance creates grounded psychological wisdom.',
    loveRelationships: 'Relationship communication power struggles requiring honest depth! Tension between easy relationship communication and intense psychological truth. Communication may feel controlling, suspicious, or overwhelmingly intense. Challenge is honoring both comfortable communication AND necessary relationship depth. Good time to address communication control issues, balance trust with honesty, practice deep communication without manipulation. Integration of ease and psychological honesty.',
    familyHome: 'Family communication power struggles requiring healing truth! Tension between easy family communication and intense family psychological truth. Family communication may feel controlling, secretive, or overwhelmingly confrontational. Challenge is honoring both family comfort AND necessary family depth and healing. Good time to address family control patterns, balance family trust with family truth, communicate family depth without family manipulation.',
    businessCareer: 'Professional communication power struggles requiring strategic honesty! Tension between easy professional communication and intense professional truth or strategy. Work communication may feel controlling, political, or suspiciously intense. Challenge is honoring both professional diplomacy AND necessary professional depth and truth. Good time to address professional control dynamics, balance professional trust with professional honesty, communicate professionally with depth not manipulation.',
    moneyFinances: 'Financial thinking power struggles requiring deep honesty! Tension between easy financial thinking and intense financial psychological truth. Money thoughts may feel controlling, paranoid, or obsessively intense. Challenge is honoring both financial optimism AND necessary deep financial examination. Good time to address financial control issues, balance financial trust with financial investigation, think deeply about money without financial paranoia.',
    predictions: [
      'Communication power struggle forces you to examine and transform control patterns',
      'Your tendency toward mental intensity or suspicion requires conscious moderation',
      'Conflict reveals need to balance light communication with psychological depth',
      'Mental obsession or paranoia you work through consciously produces grounded wisdom',
      'Power struggle in communication teaches importance of honesty without manipulation',
      'Intense mental focus you balance with trust creates breakthrough understanding',
      'Challenge to communicate both deeply AND respectfully produces psychological maturity',
      'Tension between surface ease and necessary depth resolved through balanced integration',
      'You learn to investigate truth thoroughly while maintaining communication trust',
      'Opportunity to integrate light communication with psychological depth through balanced honesty'
    ]
  },

  'Mercury-Pluto-Trine': {
    name: 'Mercury Trine Pluto',
    frequency: 'Occurs 1-2 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Pluto represents transformation, death and rebirth, power, depth, shadow work, elimination, regeneration, and psychological intensity. It\'s where you confront the underworld, reclaim power, and undergo total metamorphosis.',
    aspectMeaning: 'Thinking and communication flow with natural depth and transformative power! Mercury\'s mind harmonizes gracefully with Pluto\'s intensity, creating effortless penetrating insight, naturally powerful communication, and easy psychological understanding. Perfect time for research, therapy, strategic planning, deep meaningful communication. Mental depth comes naturally without overwhelm. Communication persuades effortlessly through authentic power. Excellent for investigation, psychology, transformation through understanding. Power and clarity align beautifully.',
    loveRelationships: 'Relationship communication flows with natural depth and transformation! Conversations feel naturally deep, powerful, and psychologically honest without overwhelm. Perfect time for meaningful vulnerable talks, addressing relationship depth naturally, transformative honest communication. Deep understanding comes effortlessly. Good time for couples therapy flowing smoothly, profound truth-sharing naturally, addressing relationship psychology comfortably. Depth and ease combine perfectly.',
    familyHome: 'Family communication flows with natural depth and healing! Perfect time for meaningful family discussions, addressing family psychology naturally, transformative family truth-telling comfortably. Home conversations feel naturally deep and healing without drama. Good time for family therapy flowing smoothly, uncovering family patterns gently, healing family shadows naturally. Family depth and family warmth combine effortlessly.',
    businessCareer: 'Professional communication flows with natural strategic power! Excellent time for powerful professional presentations flowing smoothly, strategic career planning naturally, research work producing easy breakthroughs. Thinking becomes naturally deep and strategic professionally. Good time for persuasive professional communication, addressing professional depth comfortably, transformative professional projects flowing smoothly. Your natural professional depth attracts recognition effortlessly.',
    moneyFinances: 'Financial thinking flows with natural strategic depth! Good time for financial research producing easy insights, strategic financial planning flowing naturally, addressing money psychology comfortably. Mental approach to money becomes naturally deep and powerful. Excellent for financial investigation flowing smoothly, transformative financial decisions made wisely, powerful financial strategy coming naturally. Financial depth and financial wisdom align beautifully.',
    predictions: [
      'Deep insight comes naturally and produces effortless breakthrough understanding',
      'Your naturally powerful communication persuades and transforms without force',
      'Research or investigation flows smoothly and uncovers valuable truth easily',
      'Psychological understanding emerges naturally and creates profound positive change',
      'Meaningful conversation flows naturally and transforms relationship beautifully',
      'Your natural mental focus accomplishes complex task smoothly and powerfully',
      'Truth you discover naturally creates important positive transformation',
      'Strategic thinking flows effortlessly and produces excellent practical results',
      'Shadow work or self-examination flows gently and produces empowering clarity',
      'Opportunity for transformative understanding through natural depth and mental power'
    ]
  },

  'Mercury-Pluto-Square': {
    name: 'Mercury Square Pluto',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Pluto represents transformation, death and rebirth, power, depth, shadow work, elimination, regeneration, and psychological intensity. It\'s where you confront the underworld, reclaim power, and undergo total metamorphosis.',
    aspectMeaning: 'Growth through mental intensity and communication power struggles requiring conscious depth! Mercury\'s thinking clashes with Pluto\'s intensity, creating obsessive thinking, controlling communication, or mental power struggles. Challenge is channeling psychological intensity into healing depth rather than manipulation or paranoia. Tendency toward mental obsession, suspicious thinking, or controlling persuasive communication. Crisis forces development of grounded psychological wisdom. Conscious awareness transforms mental intensity into healing transformative power.',
    loveRelationships: 'Relationship communication friction through intensity or control! Communication may feel controlling, suspicious, or obsessively focused. Tendency toward jealous thinking or manipulative relationship communication. Challenge is expressing deep relationship truth without control or manipulation. Good time to consciously address communication control patterns, work through relationship suspicions, communicate deeply yet respectfully. Crisis teaches healthy psychological relationship communication. Transform control into empowered vulnerability.',
    familyHome: 'Family communication friction through intensity or control! Home discussions may feel controlling, secretive, or obsessively intense. Tendency toward family power struggles or manipulative family communication. Challenge is expressing deep family truth without family control or confrontation. Good time to consciously address family control patterns, work through family secrets healthily, communicate family depth without family manipulation. Crisis forces healthy family psychological communication.',
    businessCareer: 'Professional communication friction through intensity or control! Work communication may feel controlling, politically manipulative, or obsessively strategic. Tendency toward professional power struggles or suspicious professional thinking. Challenge is expressing professional depth and strategy without manipulation or paranoia. Good time to consciously address professional control patterns, communicate professionally with depth yet respect. Crisis teaches ethical professional psychological power.',
    moneyFinances: 'Financial thinking friction through obsession or control! Money thoughts may feel obsessively intense, controlling, or paranoidly suspicious. Tendency toward financial power struggles or compulsive financial thinking. Challenge is thinking deeply about money without financial obsession or control. Good time to consciously address financial control patterns, work through money psychology, think deeply about finances without paranoia. Crisis develops healthy financial psychological awareness.',
    predictions: [
      'Mental obsession you consciously moderate produces healthy focused determination',
      'Your controlling communication you transform consciously becomes empowered honesty',
      'Power struggle in thinking forces you to examine and heal control patterns',
      'Suspicious thoughts you investigate rationally either confirm truth or reveal paranoia',
      'Mental intensity you channel into therapy or shadow work produces breakthrough',
      'Communication control tendency you address consciously transforms into authentic power',
      'Obsessive thinking you work through consciously becomes productive focused research',
      'Power struggle forces you to communicate deeply yet respectfully and honestly',
      'Mental crisis you navigate through depth work produces psychological maturity',
      'Opportunity to transform mental intensity into grounded healing psychological power'
    ]
  },

  'Mercury-Pluto-Sextile': {
    name: 'Mercury Sextile Pluto',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    planet2Energy: 'Pluto represents transformation, death and rebirth, power, depth, shadow work, elimination, regeneration, and psychological intensity. It\'s where you confront the underworld, reclaim power, and undergo total metamorphosis.',
    aspectMeaning: 'Opportunity for transformative understanding through focused mental initiative! Mercury\'s thinking harmonizes with Pluto\'s depth, creating potential for penetrating insight, powerful communication, and psychological breakthrough IF you take action. Opportunities for deep research, therapeutic work, strategic planning appear - but require your engagement. Perfect time to pursue depth psychology, investigate truth, communicate powerfully. Success through mental depth and initiative. Passive approach wastes potential; active depth work creates transformative results.',
    loveRelationships: 'Relationship communication opportunity through deep initiative! Potential for profound relationship understanding, transformative relationship dialogue, healing relationship truth IF you initiate. Perfect time to suggest couples therapy actively, initiate deep meaningful conversation, address relationship shadows courageously. Opportunity for relationship transformation through honest depth IF you take the risk. Initiative in powerful vulnerable communication heals and deepens love.',
    familyHome: 'Family communication opportunity through healing initiative! Potential for family psychological breakthrough, transformative family dialogue, deep family healing IF you initiate. Perfect time to suggest family therapy actively, initiate important family conversations, address family patterns courageously. Family receptive to deep honest communication IF you present it with care. Initiative in healing family communication creates positive transformation.',
    businessCareer: 'Professional communication opportunity through strategic initiative! Potential for career advancement through powerful professional communication, strategic professional planning, deep professional work IF you take action. Perfect time to present powerful professional ideas actively, pursue strategic professional development, communicate professionally with depth. Recognition available IF you step forward with focused strategic power.',
    moneyFinances: 'Financial transformation opportunity through strategic initiative! Potential for improved financial situation through deep financial research, strategic financial planning, addressing money psychology IF you pursue it actively. Perfect time to investigate financial opportunities thoroughly, address limiting money patterns, make powerful strategic financial decisions. Financial breakthrough available through focused financial initiative.',
    predictions: [
      'Opportunity for deep research appears - pursue it actively for powerful insights',
      'Your initiative to communicate with depth and power creates significant impact',
      'Chance to do therapeutic or shadow work succeeds IF you pursue it actively',
      'Strategic plan you create with focused intensity provides powerful foundation',
      'Opportunity for psychological breakthrough appears - initiative required to actualize',
      'Deep conversation you initiate courageously transforms relationship profoundly',
      'Investigation you pursue with focused determination uncovers important truth',
      'Your active engagement with psychological depth produces empowering clarity',
      'Powerful communication you risk with authenticity creates transformative results',
      'Opportunity for mental transformation through focused depth work and strategic initiative'
    ]
  },

  // ============================================================================
  // VENUS-JUPITER ASPECTS (Love expansion and abundant attraction)
  // ============================================================================

  'Venus-Jupiter-Conjunction': {
    name: 'Venus Conjunction Jupiter',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    aspectMeaning: 'Love and abundance merge with joyful expansion! Venus\'s affection combines with Jupiter\'s generosity, creating abundant love, optimistic relationships, expanded beauty and pleasure. Perfect time for romance, socializing, enjoying life, expressing generosity, attracting abundance. Love feels expansive and generous. Beauty and joy multiply. Excellent for celebrations, artistic expression, romantic adventures, financial growth. Warning: avoid excess or overindulgence - balance enjoyment with moderation. Overall: love and luck flow abundantly.',
    loveRelationships: 'Relationship love expands with abundant joy! Romance feels generous, optimistic, and blessed. Perfect time for romantic adventures, expressing love abundantly, taking relationship to next level, celebrating love together. Attraction intensifies positively. Good time for romantic travel, lavish romantic gestures, optimistic relationship discussions. New love may blossom. Warning: avoid over-promising or excessive romantic idealism - balance enthusiasm with realism.',
    familyHome: 'Family love and home joy expand abundantly! Perfect time for family celebrations, generous family expressions, beautifying home lavishly, enjoying family togetherness. Home feels abundant and joyful. Good time for family gatherings, expressing family generosity, creating beautiful family memories. Family relationships deepen through shared joy. Warning: avoid family overindulgence or excessive family spending.',
    businessCareer: 'Professional success and career growth expand! Excellent time for career advancement, professional recognition, beneficial professional networking, successful professional ventures. Work feels rewarding and abundant. Good time for professional celebrations, generous professional gestures, expanding professional opportunities. Your professional value recognized and rewarded. Warning: avoid professional overconfidence or unrealistic career expectations.',
    moneyFinances: 'Financial abundance and money luck expand! Money flows more easily and abundantly. Good time for wise financial growth, beneficial investments, generous giving, attracting financial opportunity. Financial optimism justified but verify details. Excellent for expanding income, enjoying financial blessings, sharing financial abundance. Warning: avoid financial overindulgence or excessive spending - enjoy abundance while maintaining financial wisdom.',
    predictions: [
      'Abundant love or financial blessing flows to you naturally and joyfully',
      'Your generous expression of affection attracts reciprocal love and appreciation',
      'Romantic opportunity appears that feels blessed and genuinely promising',
      'Social event or celebration you attend creates joyful beneficial connections',
      'Artistic or creative expression you share receives enthusiastic warm response',
      'Financial opportunity you pursue with optimism succeeds and rewards you well',
      'Your joyful generous energy attracts abundant positive opportunities',
      'Beautiful experience or pleasure you enjoy multiplies your joy and gratitude',
      'Relationship deepens through shared celebration, adventure, or generosity',
      'Opportunity for abundant love, beauty, and prosperity through joyful generous expression'
    ]
  },

  'Venus-Jupiter-Opposition': {
    name: 'Venus Opposition Jupiter',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    aspectMeaning: 'Tension between love and excess requiring balance! Venus\'s pleasure faces Jupiter\'s expansion, creating tendency toward overindulgence, unrealistic romantic expectations, or excessive spending. Challenge is enjoying abundance while maintaining healthy limits. Risk of romantic idealization, financial extravagance, or seeking too much pleasure. Resistance to limits creates problems; conscious moderation creates sustainable joy. Integration of enjoyment and wisdom needed. Balance pleasure with responsibility.',
    loveRelationships: 'Relationship tension between romance and reality! Love may feel either excessively idealized or disappointingly limited. Tendency toward unrealistic romantic expectations or fear relationship can\'t meet your needs. Challenge is balancing romantic idealism with realistic love appreciation. Good time to examine romantic expectations, practice grateful love while maintaining healthy standards. Integrate romantic dreams with relationship reality.',
    familyHome: 'Family tension between generosity and boundaries! Home life requires balancing family generosity with healthy family limits. Tendency toward family overindulgence or resentment about family demands. Challenge is expressing family love generously while maintaining sustainable family boundaries. Good time to balance family giving with family receiving, integrate family joy with family responsibility.',
    businessCareer: 'Professional tension between ambition and satisfaction! Career requires balancing professional growth desires with current professional appreciation. Tendency toward unrealistic career expectations or settling for less than you deserve. Challenge is pursuing career growth while valuing current professional blessings. Good time to balance career ambition with career gratitude, integrate professional expansion with professional contentment.',
    moneyFinances: 'Financial tension between abundance and excess! Money requires balancing financial enjoyment with financial responsibility. Tendency toward overspending or excessive financial restriction. Challenge is enjoying financial blessings while maintaining financial wisdom. Good time to balance financial pleasure with financial prudence, integrate financial abundance mindset with practical financial management.',
    predictions: [
      'Overindulgence you moderate consciously prevents later regret or consequence',
      'Your unrealistic expectation examined honestly becomes wise balanced hope',
      'Tension between desire and reality forces gratitude for actual blessings',
      'Excessive spending or giving you balance creates sustainable generosity',
      'Romantic idealization you temper with reality creates authentic appreciation',
      'Challenge between wanting more and enjoying what you have produces contentment',
      'Financial excess you moderate wisely prevents financial problems later',
      'Relationship expectation you adjust realistically strengthens actual love',
      'You learn to balance joyful abundance with wise healthy boundaries',
      'Opportunity to integrate abundant enjoyment with wise moderation and balance'
    ]
  },

  'Venus-Jupiter-Trine': {
    name: 'Venus Trine Jupiter',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    aspectMeaning: 'Love and abundance flow naturally with joyful grace! Venus\'s affection harmonizes beautifully with Jupiter\'s generosity, creating effortless love expansion, natural financial abundance, and graceful beautiful experiences. Perfect time for romance, socializing, artistic expression, attracting blessings. Love and luck flow without excess. Beauty and joy multiply naturally. Excellent for celebrations, relationships, creative work, wise financial growth. Enjoyment and wisdom balance perfectly. Blessings feel deserved and sustainable.',
    loveRelationships: 'Relationship love flows with natural abundant joy! Romance feels generous, blessed, and beautifully expansive effortlessly. Perfect time for romantic adventures flowing smoothly, expressing love generously naturally, celebrating relationship joyfully. Deep appreciation and attraction flow without trying. Good time for romantic travel, meaningful romantic gestures, relationship growth through shared joy. Love feels both abundant and authentic.',
    familyHome: 'Family love and home beauty flow abundantly and naturally! Perfect time for joyful family gatherings, beautifying home easily, generous family expressions flowing smoothly. Home feels blessed and harmonious naturally. Good time for family celebrations, creating beautiful family memories effortlessly, enjoying family togetherness. Family love expands gracefully and sustainably.',
    businessCareer: 'Professional success and recognition flow naturally! Excellent time for career advancement flowing smoothly, beneficial professional networking naturally, professional value recognized effortlessly. Work feels rewarding and blessed without struggle. Good time for professional opportunities appearing naturally, successful professional ventures, expanding career gracefully. Your professional worth appreciated and rewarded naturally.',
    moneyFinances: 'Financial abundance and wise growth flow naturally! Money opportunities appear effortlessly and succeed smoothly. Good time for wise investments flowing naturally, financial blessings arriving gracefully, generous giving flowing from abundance. Financial growth feels natural and sustainable. Excellent for attracting income effortlessly, enjoying financial blessings wisely, sharing abundance generously. Prosperity and wisdom align beautifully.',
    predictions: [
      'Abundant blessing flows to you naturally and feels deserved and joyful',
      'Your generous affection naturally attracts reciprocal love and appreciation',
      'Romantic opportunity appears effortlessly and feels genuinely promising and blessed',
      'Social connection or celebration creates joyful meaningful relationship naturally',
      'Artistic expression you share resonates widely and brings joyful success',
      'Financial opportunity flows to you naturally and succeeds smoothly',
      'Your joyful energy effortlessly attracts abundant positive opportunities',
      'Beautiful experience you enjoy naturally multiplies joy and deepens gratitude',
      'Relationship deepens naturally through shared celebration, joy, and appreciation',
      'Opportunity for love, beauty, and abundance flows naturally through joyful generous grace'
    ]
  },

  'Venus-Jupiter-Square': {
    name: 'Venus Square Jupiter',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    aspectMeaning: 'Growth through excess and overindulgence requiring conscious moderation! Venus\'s pleasure clashes with Jupiter\'s expansion, creating tendency toward overindulgence, wasteful spending, or unrealistic romantic expectations. Challenge is channeling joy into sustainable pleasure rather than excessive consumption. Tension between enjoying life and maintaining balance. Risk of romantic idealization, financial extravagance, or pleasure-seeking without limits. Crisis teaches moderation. Conscious wisdom transforms excess into sustainable abundant joy.',
    loveRelationships: 'Relationship friction through romantic excess or unrealistic expectations! Love may involve overidealization, excessive romantic demands, or disappointment from unrealistic hopes. Tendency toward romantic extravagance or feeling relationship never enough. Challenge is expressing love generously while maintaining realistic expectations. Good time to consciously moderate romantic idealization, balance romantic enthusiasm with honest appreciation. Crisis teaches sustainable realistic love. Transform excess into wise affection.',
    familyHome: 'Family friction through overindulgence or excessive demands! Home life may involve family extravagance, unrealistic family expectations, or resentment about family boundaries. Tendency toward spoiling family or feeling family never appreciates enough. Challenge is expressing family love while maintaining healthy family limits. Good time to consciously balance family generosity with family boundaries. Crisis teaches sustainable family love. Transform family excess into wise family affection.',
    businessCareer: 'Professional friction through unrealistic ambition or overconfidence! Career may involve overestimating opportunities, unrealistic professional expectations, or professional extravagance. Tendency toward professional overconfidence or feeling undervalued professionally. Challenge is pursuing career growth while maintaining realistic professional assessment. Good time to consciously balance career ambition with career realism. Crisis teaches wise professional growth. Transform professional excess into sustainable career expansion.',
    moneyFinances: 'Financial friction through overspending or unrealistic expectations! Money may involve excessive spending, financial overextension, or unrealistic financial hopes. Tendency toward financial extravagance or feeling money never enough. Challenge is enjoying financial abundance while maintaining financial responsibility. Good time to consciously moderate spending, balance financial optimism with financial wisdom. Crisis teaches sustainable prosperity. Transform financial excess into wise abundant financial management.',
    predictions: [
      'Overindulgence you consciously moderate before consequences teaches wise pleasure',
      'Your unrealistic expectation you adjust realistically creates sustainable satisfaction',
      'Excessive spending you catch and correct prevents financial problems and regret',
      'Romantic idealization you temper consciously creates authentic appreciation',
      'Tendency to want more you balance with gratitude produces contentment',
      'Extravagant gesture you moderate wisely becomes meaningful sustainable generosity',
      'Financial overextension you address early prevents larger financial crisis',
      'Professional overconfidence you moderate creates realistic successful advancement',
      'You learn that sustainable joy requires wisdom, not just endless excess',
      'Opportunity to transform excessive desires into wise sustainable abundant joy'
    ]
  },

  'Venus-Jupiter-Sextile': {
    name: 'Venus Sextile Jupiter',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, wisdom, abundance, luck, philosophy, and higher learning. It\'s where you grow, take risks, explore, believe, and find meaning.',
    aspectMeaning: 'Opportunity for love and abundance through joyful initiative! Venus\'s affection harmonizes with Jupiter\'s generosity, creating potential for romantic expansion, financial growth, and beautiful experiences IF you take action. Opportunities for love, prosperity, and joy appear - but require your engagement. Perfect time to pursue romance actively, express generosity, create beauty, take social initiative. Success through joyful action. Passive approach wastes potential; active joyful engagement creates blessings.',
    loveRelationships: 'Relationship opportunity for abundant love through initiative! Potential for romantic growth, joyful connection, relationship expansion IF you initiate. Perfect time to plan romantic adventure actively, express love generously, suggest meaningful celebration. Opportunity for deepening love through shared joy IF you take the lead. Initiative in generous affection creates relationship blessings. Active engagement brings romantic abundance.',
    familyHome: 'Family opportunity for joyful connection through initiative! Potential for family celebration, home beautification, generous family expressions IF you initiate. Perfect time to suggest family gathering actively, beautify home with effort, express family generosity. Family receptive to joyful initiatives IF you present them. Initiative in family love creates family harmony and joy. Active engagement brings family blessings.',
    businessCareer: 'Professional opportunity for growth through initiative! Potential for career advancement, professional recognition, beneficial networking IF you take action. Perfect time to pursue professional opportunities actively, express professional value, expand professional connections. Recognition available IF you step forward with confidence. Initiative in professional excellence creates career blessings. Active engagement brings professional abundance.',
    moneyFinances: 'Financial opportunity for growth through wise initiative! Potential for income increase, beneficial investments, financial expansion IF you pursue it actively. Perfect time to explore income opportunities, make wise financial moves, express financial confidence. Financial growth available through knowledgeable action. Initiative in wise financial strategies creates prosperity. Active engagement brings financial abundance.',
    predictions: [
      'Opportunity for love or abundance appears - seize it actively for joyful results',
      'Your initiative to express affection or generosity attracts reciprocal blessings',
      'Chance for romantic connection or adventure succeeds IF you pursue it actively',
      'Social or creative initiative you take creates joyful beneficial outcomes',
      'Financial opportunity you pursue with confidence produces rewarding results',
      'Opportunity to beautify or enhance your life appears - action required to actualize',
      'Your active generosity or kindness creates unexpected positive ripple effects',
      'Celebration or joy you initiate actively brings people together meaningfully',
      'Initiative in expressing your values attracts aligned abundant opportunities',
      'Opportunity for love, beauty, and prosperity through joyful generous initiative'
    ]
  },

  // ============================================================================
  // VENUS-SATURN ASPECTS (Love maturity and committed values)
  // ============================================================================

  'Venus-Saturn-Conjunction': {
    name: 'Venus Conjunction Saturn',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, mastery, limitation, time, commitment, and achievement through effort. It\'s where you build lasting success through patient work and maturity.',
    aspectMeaning: 'Love and values become serious, committed, and enduring! Venus\'s affection merges with Saturn\'s commitment, creating mature love, serious relationships, and enduring values. Perfect time for relationship commitments, serious love discussions, building lasting beauty, valuing quality over quantity. Love feels deep and responsible. Relationships mature. Excellent for long-term relationship planning, commitment ceremonies, creating enduring art, wise financial planning. May feel emotionally reserved - but builds lasting foundation. Depth over superficiality.',
    loveRelationships: 'Relationship love becomes serious and committed! Romance feels mature, realistic, and deeply committed. Perfect time for serious relationship discussions, making relationship commitments, addressing relationship responsibilities, planning long-term future together. Love deepens through mutual responsibility. Good time for engagement, marriage planning, addressing relationship challenges honestly, building lasting relationship foundation. Commitment over casual romance.',
    familyHome: 'Family love and home become structured and responsible! Perfect time for serious family commitments, addressing family responsibilities, creating lasting family structure, investing in home quality. Home feels stable and mature. Good time for family duty fulfillment, important family discussions, building enduring family legacy, making wise home investments. Responsibility and family depth emphasized.',
    businessCareer: 'Professional values and work become disciplined and committed! Excellent time for demonstrating professional commitment, building lasting professional reputation, making wise career investments, valuing professional quality. Work feels serious and meaningful. Good time for professional commitments, long-term career planning, demonstrating professional maturity, building enduring professional excellence. Mastery and professional depth valued.',
    moneyFinances: 'Financial values become serious and disciplined! Good time for serious financial planning, wise long-term investments, financial commitment and responsibility, valuing financial quality and security. Financial approach becomes conservative and mature. Excellent for building lasting financial foundation, addressing financial responsibilities, making serious financial commitments, investing in enduring financial security. Discipline creates lasting prosperity.',
    predictions: [
      'Serious relationship commitment you make proves enduring and deeply meaningful',
      'Your mature responsible approach to love attracts genuine lasting connection',
      'Financial discipline you practice builds solid foundation for future security',
      'Important commitment you make carefully proves wise and enduringly valuable',
      'Relationship challenge you address honestly strengthens bond permanently',
      'Quality investment you make in beauty or value proves lastingly worthwhile',
      'Your demonstration of loyalty and commitment earns deep respect and trust',
      'Serious love conversation you have creates lasting understanding and clarity',
      'Responsible choice you make about values proves wise over time',
      'Opportunity to build lasting love, beauty, and value through committed mature effort'
    ]
  },

  'Venus-Saturn-Opposition': {
    name: 'Venus Opposition Saturn',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, mastery, limitation, time, commitment, and achievement through effort. It\'s where you build lasting success through patient work and maturity.',
    aspectMeaning: 'Tension between love and limitation requiring integration! Venus\'s pleasure faces Saturn\'s restriction, creating emotional coldness, relationship obstacles, or feelings of unworthiness. Challenge is honoring both love\'s need for warmth AND relationship\'s need for commitment. Risk of emotional withdrawal, fear of rejection, or excessive relationship duty. Resistance to commitment creates loneliness; excessive duty stifles joy. Integration of love and responsibility needed. Balance creates mature sustainable affection.',
    loveRelationships: 'Relationship tension between love and fear! Romance may feel blocked, rejected, or burdened by duty. Fear of vulnerability or commitment versus need for connection. Partner may seem cold or overly demanding. Challenge is expressing authentic affection while honoring relationship responsibilities. Good time to work through fear of rejection, balance relationship freedom with relationship commitment, practice vulnerable committed love. Integration of warmth and maturity.',
    familyHome: 'Family tension between love and duty! Home life requires balancing family affection with family responsibilities. May feel family duty overwhelms family joy or family coldness blocks connection. Challenge is expressing family love while fulfilling family obligations. Good time to balance family warmth with family responsibility, work through family emotional blocks, integrate family joy with family duty.',
    businessCareer: 'Professional tension between values and limitations! Career requires balancing professional values with professional constraints or demands. May feel undervalued professionally or professional duty overwhelming. Challenge is honoring your professional worth while meeting professional responsibilities. Good time to balance professional satisfaction with professional duty, address professional worth issues, integrate professional joy with professional commitment.',
    moneyFinances: 'Financial tension between pleasure and restriction! Money requires balancing financial enjoyment with financial responsibility or limitations. May feel financially deprived or financially burdened. Challenge is enjoying financial resources while maintaining financial discipline. Good time to balance financial pleasure with financial responsibility, work through scarcity fears, integrate financial joy with financial wisdom.',
    predictions: [
      'Emotional block or fear you work through consciously opens path to mature love',
      'Your fear of rejection you face courageously allows authentic vulnerable connection',
      'Relationship obstacle forces you to clarify commitment level and emotional needs',
      'Financial limitation teaches you to value quality and appreciate what you have',
      'Feeling of unworthiness you address heals and allows receiving deserved love',
      'Challenge between duty and joy resolved through conscious integration',
      'Cold period in relationship you navigate patiently leads to deeper commitment',
      'Responsibility you accept while maintaining self-love creates sustainable balance',
      'You learn to balance authentic emotional warmth with mature responsibility',
      'Opportunity to integrate love and limitation through patient mature commitment'
    ]
  },

  'Venus-Saturn-Trine': {
    name: 'Venus Trine Saturn',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, mastery, limitation, time, commitment, and achievement through effort. It\'s where you build lasting success through patient work and maturity.',
    aspectMeaning: 'Love and commitment flow naturally with mature grace! Venus\'s affection harmonizes beautifully with Saturn\'s commitment, creating effortless mature love, natural lasting relationships, and graceful enduring values. Perfect time for relationship commitments flowing smoothly, demonstrating love through reliability, creating lasting beauty naturally. Love and responsibility balance perfectly without heaviness. Commitment feels natural and joyful. Excellent for serious relationship steps, enduring artistic creation, wise financial decisions. Maturity and affection unite beautifully.',
    loveRelationships: 'Relationship love flows with natural commitment and maturity! Romance feels both warm and reliable, joyful and committed effortlessly. Perfect time for relationship commitments made naturally, demonstrating love through consistent actions, building lasting relationship foundation smoothly. Deep affection and responsibility combine without conflict. Good time for engagement flowing naturally, addressing relationship realities comfortably, expressing committed love. Maturity and warmth balanced perfectly.',
    familyHome: 'Family love and responsibility flow naturally together! Perfect time for family commitments made comfortably, demonstrating family love through reliability, creating lasting family structure naturally. Home feels both warm and stable effortlessly. Good time for family obligations met joyfully, important family planning flowing smoothly, building enduring family legacy naturally. Family duty and family affection unite beautifully.',
    businessCareer: 'Professional values and commitment flow naturally! Excellent time for demonstrating professional excellence effortlessly, building lasting professional reputation naturally, making wise career commitments smoothly. Professional worth recognized and rewarded naturally. Good time for career advancement through reliability, professional maturity demonstrated gracefully, long-term professional success building naturally. Quality work flows with natural discipline.',
    moneyFinances: 'Financial wisdom and value flow naturally! Good time for wise financial decisions made comfortably, building lasting financial security naturally, demonstrating financial discipline effortlessly. Financial stability and financial enjoyment balance perfectly. Excellent for long-term investments flowing smoothly, financial planning coming naturally, creating enduring prosperity wisely. Financial maturity feels natural and rewarding.',
    predictions: [
      'Relationship commitment you make naturally proves enduring and deeply fulfilling',
      'Your reliable demonstration of love naturally strengthens bond and deepens trust',
      'Financial decision you make wisely builds lasting security and proves valuable',
      'Quality investment in beauty or value you make naturally proves worthwhile',
      'Mature approach to love you take naturally attracts genuine committed connection',
      'Responsibility you accept comfortably creates stable foundation for lasting joy',
      'Your consistent loyalty naturally earns deep respect and reciprocal commitment',
      'Serious conversation flows naturally and creates lasting understanding',
      'Wise choice about values you make comfortably proves beneficial over time',
      'Opportunity for lasting love and value through natural mature committed grace'
    ]
  },

  'Venus-Saturn-Square': {
    name: 'Venus Square Saturn',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, mastery, limitation, time, commitment, and achievement through effort. It\'s where you build lasting success through patient work and maturity.',
    aspectMeaning: 'Growth through love obstacles and feelings of unworthiness requiring courage! Venus\'s affection clashes with Saturn\'s limitation, creating emotional blocks, fear of rejection, or feelings of being unlovable. Challenge is pushing through fear to receive deserved love. Tendency toward emotional withdrawal, self-denial of pleasure, or excessive relationship duty. Crisis forces development of self-worth and mature love capacity. Conscious courage transforms fear into worthy authentic mature affection.',
    loveRelationships: 'Relationship friction through fear or emotional blocks! Love may feel blocked, rejected, or burdened by excessive duty. Fear of vulnerability or feelings of unworthiness block connection. Challenge is risking emotional openness despite fear of rejection. Good time to consciously work through love fears, address feelings of unworthiness, practice vulnerable despite fear. Crisis teaches emotional courage. Persistence through fear builds capacity for mature authentic love.',
    familyHome: 'Family friction through duty or emotional coldness! Home life may feel emotionally restricted, burdened by family duty, or blocked by family coldness. Feelings of family unworthiness or excessive family obligation. Challenge is expressing family affection despite family emotional blocks. Good time to consciously work through family fears, balance family duty with family warmth, address family worth issues. Crisis forces family emotional growth.',
    businessCareer: 'Professional friction through feeling undervalued or blocked! Career may feel limited, underappreciated, or burdened by professional duty. Feelings of professional unworthiness or blocked professional advancement. Challenge is asserting professional worth despite professional obstacles. Good time to consciously address professional worth, work through career blocks, balance professional duty with professional satisfaction. Crisis teaches professional self-worth.',
    moneyFinances: 'Financial friction through scarcity or restriction! Money may feel limited, blocked, or burdened by financial duty. Feelings of financial unworthiness or excessive financial restriction. Challenge is valuing yourself financially despite financial blocks. Good time to consciously work through scarcity mentality, address financial worth issues, balance financial discipline with financial enjoyment. Crisis develops financial self-worth and discipline.',
    predictions: [
      'Emotional block or rejection you face courageously teaches self-worth and resilience',
      'Your fear of vulnerability you push through consciously opens path to authentic love',
      'Feeling of unworthiness you address directly heals and allows receiving deserved affection',
      'Financial limitation you navigate builds appreciation and wise financial discipline',
      'Love obstacle you work through patiently strengthens commitment and maturity',
      'Duty that feels burdensome you reframe creates meaningful contribution',
      'Fear of rejection you face anyway develops emotional courage and authenticity',
      'You learn that you are worthy of love despite fears or past rejections',
      'Financial or emotional restriction you work through builds lasting inner worth',
      'Opportunity to transform fear and unworthiness into mature worthy authentic love'
    ]
  },

  'Venus-Saturn-Sextile': {
    name: 'Venus Sextile Saturn',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, mastery, limitation, time, commitment, and achievement through effort. It\'s where you build lasting success through patient work and maturity.',
    aspectMeaning: 'Opportunity for lasting love through committed initiative! Venus\'s affection harmonizes with Saturn\'s commitment, creating potential for mature relationships, enduring values, and lasting beauty IF you take action. Opportunities for serious relationship steps, wise financial decisions, quality investments appear - but require your effort. Perfect time to pursue committed love actively, demonstrate reliability, invest in quality. Success through mature initiative. Passive approach wastes potential; active committed effort creates enduring results.',
    loveRelationships: 'Relationship opportunity for lasting commitment through initiative! Potential for serious relationship deepening, meaningful commitment, mature love IF you initiate. Perfect time to suggest commitment actively, demonstrate love through reliable actions, address relationship future seriously. Opportunity for enduring relationship through committed action IF you take the step. Initiative in mature reliable love creates lasting bond.',
    familyHome: 'Family opportunity for lasting structure through initiative! Potential for important family commitments, enduring family planning, stable home foundation IF you initiate. Perfect time to suggest family commitments actively, invest in home quality, create family structure. Family receptive to responsible initiatives IF you present them thoughtfully. Initiative in family reliability creates lasting family harmony.',
    businessCareer: 'Professional opportunity for lasting advancement through committed initiative! Potential for career growth through demonstrated reliability, professional commitment, quality work IF you take action. Perfect time to demonstrate professional excellence actively, make career commitments, invest in professional quality. Recognition available IF you step forward with mature competence. Initiative in professional reliability creates lasting career success.',
    moneyFinances: 'Financial opportunity for lasting security through wise initiative! Potential for financial growth through wise planning, quality investments, financial discipline IF you pursue it actively. Perfect time to make wise financial commitments, invest in quality and value, practice financial discipline actively. Financial security available through committed action. Initiative in wise financial management creates lasting prosperity.',
    predictions: [
      'Opportunity for serious relationship step appears - pursue it actively for lasting bond',
      'Your initiative to demonstrate reliable love strengthens commitment and trust',
      'Chance to make wise financial investment succeeds IF you pursue it actively',
      'Quality over quantity choice you make actively proves valuable over time',
      'Opportunity for lasting commitment appears - initiative required to actualize',
      'Responsible action you take actively creates stable foundation for enduring joy',
      'Your active demonstration of loyalty earns deep respect and reciprocal commitment',
      'Wise investment in beauty or value you make actively proves worthwhile',
      'Initiative in mature love or values you take creates meaningful lasting results',
      'Opportunity for enduring love and prosperity through committed mature initiative'
    ]
  },

  // ============================================================================
  // VENUS-URANUS ASPECTS (Love liberation and authentic attraction)
  // ============================================================================

  'Venus-Uranus-Conjunction': {
    name: 'Venus Conjunction Uranus',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, breakthrough, innovation, authenticity, sudden change, and freedom. It\'s where you break free, awaken, rebel, and express your unique genius.',
    aspectMeaning: 'Love awakens with electric authentic attraction! Venus\'s affection merges with Uranus\'s liberation, creating sudden romantic breakthroughs, unconventional relationships, and authentic attraction. Perfect time for exciting new love, refreshing existing relationships, expressing unique values, liberating artistic expression. Love feels electric and free. Attraction to the unusual. Excellent for authentic self-expression, unconventional beauty, freedom in love, innovative art. May bring sudden relationship changes - embrace authentic evolution. Excitement over predictability.',
    loveRelationships: 'Relationship love becomes electric and liberating! Romance feels exciting, unconventional, and authentically free. Perfect time for sudden romantic attraction, refreshing relationship through innovation, expressing authentic self in love, trying new relationship approaches. Sudden romantic breakthroughs or changes possible. Good time for honest authentic love, unconventional romance, freedom within relationship, exciting romantic adventures. Liberation from limiting relationship patterns.',
    familyHome: 'Family love and home become innovative and liberating! Perfect time for refreshing family relationships through honesty, embracing family uniqueness, trying unconventional home approaches, expressing authentic family values. Home feels fresh and free. Good time for innovative home improvements, progressive family communication, celebrating family individuality, breaking limiting family patterns. Liberation in family love.',
    businessCareer: 'Professional values become innovative and authentic! Excellent time for unconventional career moves, expressing unique professional values, innovative professional approaches, authentic professional self-expression. Work feels exciting and liberating. Good time for creative professional breakthroughs, progressive professional values, authentic professional identity, innovative artistic work. Your unique professional approach attracts recognition.',
    moneyFinances: 'Financial values become innovative and liberating! Good time for unconventional income opportunities, innovative financial approaches, expressing unique financial values, financial liberation. Financial approach becomes progressive and original. Excellent for exploring innovative income, breaking limiting financial patterns, valuing financial freedom, unexpected financial opportunities. Liberation from conventional financial thinking.',
    predictions: [
      'Sudden exciting romantic attraction appears that feels authentic and liberating',
      'Your authentic unique self-expression attracts genuine aligned connection',
      'Unexpected relationship breakthrough liberates you from limiting pattern',
      'Innovation or change you embrace in love creates refreshing exciting energy',
      'Financial opportunity through unconventional channel appears unexpectedly',
      'Your expression of authentic values attracts like-minded exciting people',
      'Sudden change in relationship or values leads to greater authentic freedom',
      'Unconventional approach to beauty or love you try succeeds brilliantly',
      'Liberating choice in relationship you make courageously proves right',
      'Opportunity for electric authentic love and liberation through honest unique expression'
    ]
  },

  'Venus-Uranus-Opposition': {
    name: 'Venus Opposition Uranus',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, breakthrough, innovation, authenticity, sudden change, and freedom. It\'s where you break free, awaken, rebel, and express your unique genius.',
    aspectMeaning: 'Tension between stability and freedom in love requiring integration! Venus\'s harmony faces Uranus\'s disruption, creating relationship unpredictability, sudden attractions or separations, or conflict between security and excitement. Challenge is honoring both connection AND freedom. Risk of relationship instability, sudden breakups, or choosing chaos over commitment. Resistance to change creates stagnation; excessive change destroys connection. Integration of stability and authenticity needed. Balance creates dynamic sustainable love.',
    loveRelationships: 'Relationship tension between commitment and freedom! Love requires balancing togetherness with independence. Partner may seem unpredictable or relationship feels restricting. Sudden romantic disruptions or unexpected attractions possible. Challenge is honoring both connection AND authentic freedom needs. Good time to renegotiate relationship freedom, integrate stability with excitement, address relationship authenticity. Balance needed between security and liberation.',
    familyHome: 'Family tension between tradition and freedom! Home life requires balancing family connection with individual freedom. Sudden family disruptions or family members seeking independence. Challenge is honoring both family bonds AND individual authenticity. Good time to integrate family stability with family freedom, allow family individuality while maintaining connection. Balance needed between family security and family liberation.',
    businessCareer: 'Professional tension between stability and innovation! Career requires balancing professional security with authentic professional expression. Sudden professional changes or tension between conventional and unique professional approaches. Challenge is honoring both career stability AND authentic professional values. Good time to integrate professional security with professional authenticity. Balance needed between career safety and career freedom.',
    moneyFinances: 'Financial tension between security and freedom! Money requires balancing financial stability with financial innovation or freedom. Sudden financial changes or tension between conventional and unconventional financial approaches. Challenge is honoring both financial security AND financial freedom needs. Good time to integrate financial stability with financial innovation. Balance needed between financial safety and financial liberation.',
    predictions: [
      'Relationship disruption forces you to balance authentic freedom with genuine connection',
      'Your need for both security and excitement requires conscious integration',
      'Sudden change in relationship or finances teaches importance of balance',
      'Tension between stability and freedom resolved through conscious negotiation',
      'Unexpected attraction or disruption reveals what needs to evolve in relationships',
      'You learn to maintain connection while honoring authentic individual freedom',
      'Financial or romantic instability teaches value of balancing security with innovation',
      'Challenge between predictability and excitement creates dynamic sustainable approach',
      'Sudden change you initially resist ultimately creates healthier balance',
      'Opportunity to integrate commitment and freedom through conscious balanced evolution'
    ]
  },

  'Venus-Uranus-Trine': {
    name: 'Venus Trine Uranus',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, breakthrough, innovation, authenticity, sudden change, and freedom. It\'s where you break free, awaken, rebel, and express your unique genius.',
    aspectMeaning: 'Love and freedom flow naturally with exciting authentic grace! Venus\'s affection harmonizes beautifully with Uranus\'s liberation, creating effortless romantic excitement, natural authentic attraction, and graceful innovative beauty. Perfect time for exciting love flowing smoothly, refreshing relationships naturally, expressing unique values effortlessly. Love and freedom balance perfectly. Attraction feels both exciting and comfortable. Excellent for unconventional romance, authentic self-expression, innovative art, liberated pleasure. Excitement enhances rather than threatens connection.',
    loveRelationships: 'Relationship love flows with natural excitement and authenticity! Romance feels both thrilling and comfortable, free and connected effortlessly. Perfect time for exciting romantic adventures flowing naturally, refreshing relationship spontaneously, expressing authentic self in love easily. Freedom and intimacy balance beautifully. Good time for trying new relationship experiences naturally, honest authentic communication flowing smoothly, exciting romantic spontaneity. Electric connection without disruption.',
    familyHome: 'Family love and freedom flow naturally together! Perfect time for exciting family experiences flowing smoothly, refreshing family relationships naturally, expressing authentic family individuality comfortably. Home feels both stable and exciting effortlessly. Good time for innovative home improvements flowing easily, progressive family communication naturally, celebrating family uniqueness joyfully. Family freedom and family connection unite beautifully.',
    businessCareer: 'Professional values and innovation flow naturally! Excellent time for exciting career opportunities appearing naturally, expressing unique professional values effortlessly, innovative professional approaches succeeding smoothly. Professional authenticity and professional success align perfectly. Good time for unconventional career moves flowing naturally, creative professional breakthroughs, authentic professional self-expression attracting recognition naturally.',
    moneyFinances: 'Financial innovation and prosperity flow naturally! Good time for unexpected income opportunities appearing smoothly, innovative financial approaches succeeding naturally, financial freedom and financial security balancing perfectly. Financial breakthroughs flow effortlessly. Excellent for unconventional income flowing naturally, wise innovative financial decisions, progressive financial approaches proving successful. Abundance through authentic innovation.',
    predictions: [
      'Exciting romantic opportunity appears naturally and feels both thrilling and right',
      'Your authentic unique expression naturally attracts aligned exciting connection',
      'Unexpected blessing or opportunity flows to you effortlessly through being yourself',
      'Relationship refreshes naturally through spontaneous exciting shared experience',
      'Financial breakthrough appears unexpectedly and succeeds smoothly',
      'Your innovation or unique approach naturally attracts recognition and success',
      'Exciting change flows naturally and enhances rather than disrupts your life',
      'Authentic self-expression you risk effortlessly attracts positive response',
      'Freedom and connection balance perfectly in relationship naturally',
      'Opportunity for exciting authentic love and liberation flowing naturally through genuine grace'
    ]
  },

  'Venus-Uranus-Square': {
    name: 'Venus Square Uranus',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, breakthrough, innovation, authenticity, sudden change, and freedom. It\'s where you break free, awaken, rebel, and express your unique genius.',
    aspectMeaning: 'Growth through relationship disruption and restless freedom-seeking requiring conscious choice! Venus\'s harmony clashes with Uranus\'s rebellion, creating sudden relationship upsets, impulsive attractions, or restless dissatisfaction with status quo. Challenge is channeling freedom needs into conscious evolution rather than destructive rebellion. Tendency toward relationship chaos, impulsive breakups, or sabotaging stability for novelty. Crisis forces conscious choice between authentic freedom and destructive disruption. Awareness transforms restlessness into conscious liberation.',
    loveRelationships: 'Relationship friction through disruption or restless freedom-seeking! Love may feel suddenly disrupted, impulsively changing, or suffocatingly restrictive. Tendency toward sudden attractions, impulsive relationship decisions, or sabotaging stable love for excitement. Challenge is consciously addressing authentic freedom needs without destructive chaos. Good time to consciously examine what truly needs changing versus fear of intimacy. Crisis teaches difference between authentic liberation and avoidance. Transform impulsive disruption into conscious relationship evolution.',
    familyHome: 'Family friction through disruption or rebellion! Home life may feel suddenly chaotic, restrictively conventional, or impulsively changing. Tendency toward family disruptions, rebellious family behavior, or rejecting family stability for freedom. Challenge is consciously expressing family authenticity without destructive family disruption. Good time to consciously address real family limitations versus rebellion against connection. Crisis forces conscious family evolution. Transform family rebellion into authentic family freedom.',
    businessCareer: 'Professional friction through disruption or restless change! Career may feel suddenly unstable, restrictively conventional, or impulsively changing. Tendency toward sudden career changes, sabotaging professional stability, or rebellious professional behavior. Challenge is consciously pursuing authentic professional freedom without destructive professional chaos. Good time to consciously examine what truly needs professional evolution versus fear of professional commitment. Crisis teaches wise professional innovation.',
    moneyFinances: 'Financial friction through impulsive disruption! Money may feel suddenly unstable or restrictively limited. Tendency toward impulsive financial decisions, sudden financial disruptions, or rebellious financial behavior. Challenge is consciously pursuing financial freedom without destructive financial chaos. Good time to consciously address real financial limitations versus impulsive financial rebellion. Crisis teaches wise financial innovation. Transform financial impulsiveness into conscious financial liberation.',
    predictions: [
      'Sudden relationship disruption forces you to examine authentic freedom needs versus fear',
      'Your restless dissatisfaction reveals what truly needs conscious evolution not destruction',
      'Impulsive attraction or decision you moderate consciously prevents later regret',
      'Sudden upset you navigate awareness reveals authentic need requiring honest address',
      'Tendency to sabotage stability you recognize consciously transforms into wise change',
      'Financial or romantic impulsiveness you moderate creates conscious beneficial innovation',
      'Crisis forces you to distinguish authentic liberation from destructive disruption',
      'You learn that real freedom comes through conscious choice not reactive rebellion',
      'Relationship or value challenge you address consciously creates authentic evolution',
      'Opportunity to transform restless disruption into conscious authentic liberation'
    ]
  },

  'Venus-Uranus-Sextile': {
    name: 'Venus Sextile Uranus',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Uranus represents revolution, awakening, liberation, breakthrough, innovation, authenticity, sudden change, and freedom. It\'s where you break free, awaken, rebel, and express your unique genius.',
    aspectMeaning: 'Opportunity for exciting authentic love through liberating initiative! Venus\'s affection harmonizes with Uranus\'s freedom, creating potential for romantic excitement, authentic attraction, liberating self-expression IF you take action. Opportunities for unconventional love, innovative beauty, refreshing connections appear - but require your courage. Perfect time to try new approaches in love actively, express unique values boldly, pursue authentic connections. Success through courageous authenticity. Passive approach wastes potential; active authentic engagement creates exciting results.',
    loveRelationships: 'Relationship opportunity for exciting renewal through initiative! Potential for romantic adventure, refreshing connection, authentic deepening IF you initiate. Perfect time to suggest spontaneous romantic experience actively, try new relationship approach courageously, express authentic self boldly in relationship. Opportunity for exciting breakthrough through honest initiative IF you risk authenticity. Initiative in authentic freedom-honoring love creates exciting connection.',
    familyHome: 'Family opportunity for refreshing connection through initiative! Potential for family liberation, innovative family experiences, authentic family expression IF you initiate. Perfect time to suggest progressive family activity actively, try unconventional family approach, express authentic family individuality. Family receptive to honest innovative initiatives IF you present them courageously. Initiative in authentic family freedom creates positive family evolution.',
    businessCareer: 'Professional opportunity for innovative breakthrough through initiative! Potential for exciting career advancement, unconventional professional success, authentic professional expression IF you take action. Perfect time to try innovative professional approach actively, express unique professional values boldly, pursue unconventional career opportunity. Recognition available IF you step forward authentically and courageously. Initiative in professional authenticity creates exciting career breakthrough.',
    moneyFinances: 'Financial opportunity for innovative income through initiative! Potential for unexpected financial gain, unconventional income, financial liberation IF you pursue it actively. Perfect time to explore innovative income opportunities courageously, try progressive financial approaches, express authentic financial values. Financial breakthrough available through innovative action. Initiative in authentic financial innovation creates unexpected prosperity.',
    predictions: [
      'Opportunity for exciting love or connection appears - pursue it actively for thrilling results',
      'Your initiative to express authentic unique self attracts aligned exciting people',
      'Chance for refreshing relationship breakthrough succeeds IF you take the risk actively',
      'Unconventional approach to love or beauty you try courageously works wonderfully',
      'Opportunity for financial innovation appears - initiative required to actualize',
      'Your authentic bold self-expression attracts unexpected positive recognition',
      'Spontaneous romantic or social initiative you take creates exciting meaningful connection',
      'Innovation you pursue actively creates refreshing beneficial change',
      'Your courageous honest expression liberates and attracts authentic connection',
      'Opportunity for exciting authentic love and liberation through courageous innovative initiative'
    ]
  },

  // ============================================================================
  // VENUS-NEPTUNE ASPECTS (Transcendent and unconditional love)
  // ============================================================================

  'Venus-Neptune-Conjunction': {
    name: 'Venus Conjunction Neptune',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Neptune represents spirituality, transcendence, divine connection, compassion, imagination, dreams, illusion, and dissolution of boundaries. It\'s where you connect to the infinite, create beauty, and transcend the ego.',
    aspectMeaning: 'Love dissolves into transcendent divine beauty! Venus\'s affection merges with Neptune\'s spirituality, creating soul-level romantic connection, unconditional love, and transcendent beauty appreciation. Perfect time for spiritual romantic love, artistic inspiration, compassionate connection, idealizing love and beauty. Love feels mystical and boundless. Beauty becomes divine. Excellent for romantic idealism, spiritual love, artistic creation, compassionate giving. Warning: maintain discernment - distinguish genuine soul connection from projection or illusion. Verify reality while honoring magic.',
    loveRelationships: 'Relationship love becomes transcendent and soul-connected! Romance feels mystical, compassionate, and divinely inspired. Perfect time for soul-level romantic connection, expressing unconditional love, romantic idealism, spiritual intimacy. Love transcends ordinary boundaries. Good time for romantic fantasy, forgiving love, compassionate understanding, connecting through shared spirituality. Warning: see partner clearly while honoring divine connection - balance romantic idealization with relationship reality.',
    familyHome: 'Family love becomes unconditional and compassionate! Perfect time for forgiving family wounds, expressing unconditional family love, compassionate family understanding, spiritual family connection. Home becomes sanctuary. Good time for creating beautiful home sanctuary, compassionate family forgiveness, artistic family expression, dissolving family boundaries through love. Warning: maintain healthy family boundaries while expressing family compassion.',
    businessCareer: 'Professional values become inspired and compassionate! Excellent time for artistic career work, compassionate professional expression, inspired professional vision, spiritual career pursuits. Work becomes inspired and meaningful. Good time for creative industries, helping professions, spiritual career work, artistic professional expression. Warning: verify professional reality while following professional inspiration - balance vision with practical professional clarity.',
    moneyFinances: 'Financial values become idealistic and spiritual! Good time for trusting divine financial abundance, generous financial giving, valuing spiritual over material, inspired financial intuition. Financial approach becomes idealistic. Warning: financial confusion possible through unclear thinking or wishful financial fantasy - verify all financial details carefully while honoring financial faith. Balance financial idealism with financial reality.',
    predictions: [
      'Soul-level romantic connection appears that feels divinely orchestrated and magical',
      'Your compassionate loving expression creates profound healing and deep connection',
      'Artistic or creative inspiration flows through you and creates transcendent beauty',
      'Romantic experience feels mystical and reveals spiritual dimension of love',
      'Your unconditional acceptance and compassion transforms relationship profoundly',
      'Financial or romantic blessing appears through surrendering to divine flow',
      'Creative or romantic inspiration you trust (with verification) proves genuine',
      'Compassionate forgiving act of love creates miraculous relationship healing',
      'Beauty or art that touches your soul reveals divine presence in ordinary life',
      'Opportunity for transcendent soul-level love through compassionate spiritual connection'
    ]
  },

  'Venus-Neptune-Opposition': {
    name: 'Venus Opposition Neptune',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Neptune represents spirituality, transcendence, divine connection, compassion, imagination, dreams, illusion, and dissolution of boundaries. It\'s where you connect to the infinite, create beauty, and transcend the ego.',
    aspectMeaning: 'Tension between real love and romantic illusion requiring discernment! Venus\'s affection faces Neptune\'s fog, creating romantic confusion, idealization, or potential deception in love. Challenge is honoring both soul-level connection AND seeing relationship reality clearly. Risk of romantic illusion, deception, or escapist fantasy in love. Resistance to reality creates disillusionment; excessive skepticism denies spiritual love. Integration of romantic idealism and honest clarity needed. Balance creates grounded spiritual love.',
    loveRelationships: 'Relationship confusion between soul connection and projection! Love requires distinguishing genuine spiritual bond from romantic fantasy. Tendency toward romantic idealization or potential romantic deception. Partner may seem perfect (projection) or confusing (reality unclear). Challenge is honoring soul connection while seeing partner clearly. Good time to verify romantic assumptions compassionately, balance romantic ideals with relationship reality, practice discerning love. Clarify gently through honest compassionate communication.',
    familyHome: 'Family confusion between compassion and boundaries! Home life requires balancing unconditional family love with clear family boundaries. Tendency toward family enabling or family confusion through unclear family dynamics. Challenge is expressing family compassion while maintaining family clarity. Good time to clarify family confusion gently, establish loving family boundaries, balance family ideals with family reality. Integration of family compassion and family truth.',
    businessCareer: 'Professional confusion between vision and reality! Career requires balancing professional idealism with professional clarity. Tendency toward professional idealization or professional confusion through unclear professional situation. Challenge is honoring professional vision while seeing professional reality clearly. Good time to verify professional assumptions, clarify professional confusion, balance professional ideals with professional reality. Discernment between professional inspiration and professional fantasy.',
    moneyFinances: 'Financial confusion between faith and reality! Money requires balancing financial idealism with financial clarity. Tendency toward financial confusion, wishful financial thinking, or potential financial deception. Challenge is honoring financial faith while verifying financial reality carefully. Good time to clarify financial confusion, verify all financial details compassionately, balance financial ideals with financial facts. Discernment between financial intuition and financial fantasy.',
    predictions: [
      'Romantic confusion reveals illusion requiring honest compassionate examination',
      'Your idealization of person or situation dissolves - painful but clarifying truth emerges',
      'Deception or self-deception in love revealed teaches importance of clear seeing',
      'Financial or romantic confusion clears through gentle honest verification',
      'Boundary issue in love forces you to balance compassion with self-protection',
      'Disappointment you feel reveals unrealistic expectation requiring reality adjustment',
      'Challenge between romantic ideal and relationship reality resolved through discernment',
      'Confusion about values or love clears when you verify facts compassionately',
      'You learn to honor soul connection while seeing people clearly and honestly',
      'Opportunity to integrate romantic spirituality with clear grounded honest discernment'
    ]
  },

  'Venus-Neptune-Trine': {
    name: 'Venus Trine Neptune',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Neptune represents spirituality, transcendence, divine connection, compassion, imagination, dreams, illusion, and dissolution of boundaries. It\'s where you connect to the infinite, create beauty, and transcend the ego.',
    aspectMeaning: 'Love and spirituality flow naturally with divine grace! Venus\'s affection harmonizes beautifully with Neptune\'s transcendence, creating effortless soul-level connection, natural artistic inspiration, and graceful compassionate love. Perfect time for romantic spirituality flowing smoothly, artistic creation flowing beautifully, compassionate love naturally expressed. Soul connection and clarity balance perfectly. Beauty feels divine yet real. Excellent for spiritual romance, inspired art, unconditional love, transcendent beauty. Magic and reality unite gracefully.',
    loveRelationships: 'Relationship love flows with natural soul connection and clarity! Romance feels both mystical and real, compassionate and clear effortlessly. Perfect time for soul-level romantic intimacy flowing naturally, expressing unconditional love easily, spiritual romantic connection without confusion. Deep divine love and honest clarity combine perfectly. Good time for romantic magic flowing naturally, compassionate understanding naturally deepening connection, forgiveness flowing effortlessly. Transcendent love grounded in reality.',
    familyHome: 'Family love flows with natural compassion and beauty! Perfect time for unconditional family love expressed naturally, beautiful home creation flowing easily, compassionate family forgiveness naturally healing. Home feels like spiritual sanctuary effortlessly. Good time for artistic family expression flowing naturally, family compassion creating harmony gracefully, beautiful family memories created effortlessly. Family love transcends without confusion.',
    businessCareer: 'Professional values flow with natural inspiration and clarity! Excellent time for artistic career work flowing beautifully, compassionate professional expression naturally resonating, inspired professional vision manifesting smoothly. Creative professional work and practical professional success align perfectly. Good time for helping professions naturally rewarding, artistic career naturally successful, inspired professional work naturally recognized. Vision and professionalism unite gracefully.',
    moneyFinances: 'Financial values flow with natural abundance and wisdom! Good time for financial blessings appearing naturally, generous giving flowing from abundance naturally, financial faith and financial clarity balancing perfectly. Financial intuition and financial reality align beautifully. Excellent for inspired financial decisions proving wise naturally, abundance mindset attracting prosperity naturally, financial generosity creating more abundance. Spiritual and material prosperity unite gracefully.',
    predictions: [
      'Soul-level connection appears naturally and feels both magical and genuinely real',
      'Your compassionate loving expression naturally creates profound healing and deep bond',
      'Artistic inspiration flows effortlessly and creates beauty that touches hearts deeply',
      'Romantic experience feels naturally transcendent yet grounded in genuine connection',
      'Financial or romantic blessing flows to you naturally through divine grace',
      'Your unconditional compassion naturally transforms relationship beautifully',
      'Creative work you produce effortlessly resonates deeply and proves successful',
      'Forgiving compassionate act naturally heals relationship and deepens authentic love',
      'Beauty that touches your soul appears naturally and reveals divine in everyday life',
      'Opportunity for soul-level love through natural compassionate spiritual graceful connection'
    ]
  },

  'Venus-Neptune-Square': {
    name: 'Venus Square Neptune',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Neptune represents spirituality, transcendence, divine connection, compassion, imagination, dreams, illusion, and dissolution of boundaries. It\'s where you connect to the infinite, create beauty, and transcend the ego.',
    aspectMeaning: 'Growth through romantic illusion and escapist fantasy requiring conscious discernment! Venus\'s affection clashes with Neptune\'s fog, creating romantic delusion, financial escapism, or self-deceptive idealization. Challenge is developing discernment between divine inspiration and wishful fantasy in love. Tendency toward romantic escapism, financial confusion, or avoiding relationship reality through idealization. Crisis forces development of grounded spirituality in love. Conscious verification transforms illusion into clear authentic spiritual connection.',
    loveRelationships: 'Relationship friction through romantic illusion or deception! Love may involve idealization, deception, or escapist romantic fantasy. Tendency toward seeing what you wish rather than relationship reality or being deceived romantically. Challenge is seeing love clearly while maintaining compassion. Good time to consciously verify romantic assumptions, address romantic illusions honestly, practice discerning compassionate love. Crisis teaches importance of clear seeing in love. Transform romantic fantasy into grounded genuine spiritual connection.',
    familyHome: 'Family friction through enabling or confusion! Home life may involve family deception, enabling family dysfunction, or escapist family fantasy. Tendency toward family idealization or confusing unclear family dynamics. Challenge is expressing family compassion while maintaining family clarity and boundaries. Good time to consciously address family illusions, establish loving clear family boundaries, verify family reality compassionately. Crisis forces healthy family discernment. Transform family confusion into grounded family compassion.',
    businessCareer: 'Professional friction through idealistic confusion! Career may involve professional deception, unrealistic professional expectations, or escapist professional fantasy. Tendency toward professional idealization or confusing unclear professional situation. Challenge is pursuing meaningful professional work while maintaining professional clarity. Good time to consciously verify professional details, address professional illusions, ground professional vision in professional reality. Crisis teaches professional discernment.',
    moneyFinances: 'Financial friction through wishful thinking or deception! Money may involve financial deception, financial escapism, or wishful unrealistic financial thinking. Tendency toward financial confusion or avoiding financial reality through financial fantasy. Challenge is trusting financial intuition while verifying financial reality carefully. Good time to consciously verify all financial details, address financial illusions, balance financial faith with financial facts. Crisis forces financial clarity. Transform financial fantasy into wise grounded financial spirituality.',
    predictions: [
      'Romantic illusion you address courageously reveals reality requiring honest acceptance',
      'Your tendency toward escapist fantasy you recognize consciously grounds your spirituality',
      'Deception or self-deception in love forces you to see clearly with compassion',
      'Financial or romantic confusion you clarify through verification produces important wisdom',
      'Idealization that causes suffering you release painfully leads to authentic grounded love',
      'Boundary you establish while maintaining compassion creates healthy sustainable connection',
      'Wishful thinking about love or money you address honestly creates realistic foundation',
      'Enabling pattern you recognize and change transforms into healthy compassionate boundaries',
      'You learn that real spiritual love requires seeing clearly not just ideally',
      'Opportunity to transform romantic illusion into clear grounded compassionate authentic love'
    ]
  },

  'Venus-Neptune-Sextile': {
    name: 'Venus Sextile Neptune',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Neptune represents spirituality, transcendence, divine connection, compassion, imagination, dreams, illusion, and dissolution of boundaries. It\'s where you connect to the infinite, create beauty, and transcend the ego.',
    aspectMeaning: 'Opportunity for soul-level love through compassionate initiative! Venus\'s affection harmonizes with Neptune\'s spirituality, creating potential for transcendent romantic connection, artistic inspiration, spiritual beauty IF you take action. Opportunities for soul-level love, creative inspiration, compassionate connection appear - but require your openness. Perfect time to pursue spiritual romance actively, create art from inspiration, express unconditional love. Success through compassionate initiative. Passive approach wastes potential; active spiritual engagement creates beautiful results.',
    loveRelationships: 'Relationship opportunity for soul connection through compassionate initiative! Potential for transcendent romantic intimacy, spiritual romantic deepening, unconditional love IF you initiate. Perfect time to suggest spiritual romantic experience actively, express unconditional compassionate love, share romantic dreams. Opportunity for soul-level connection through compassionate openness IF you risk vulnerability. Initiative in spiritual compassionate love deepens romantic bond.',
    familyHome: 'Family opportunity for healing compassion through initiative! Potential for family forgiveness, beautiful home creation, spiritual family connection IF you initiate. Perfect time to suggest compassionate family healing actively, create beautiful home sanctuary, express unconditional family love. Family receptive to compassionate spiritual initiatives IF you present them gently. Initiative in family compassion creates profound family healing.',
    businessCareer: 'Professional opportunity for inspired work through creative initiative! Potential for artistic career success, compassionate professional impact, inspired professional vision IF you take action. Perfect time to pursue creative professional work actively, express professional compassion, share inspired professional vision. Recognition available IF you step forward with creative compassionate authenticity. Initiative in inspired professional work creates meaningful career success.',
    moneyFinances: 'Financial opportunity for abundant blessings through generous initiative! Potential for financial growth through creative income, spiritual abundance, generous giving IF you pursue it actively. Perfect time to trust verified financial intuition, give generously from abundance, pursue creative income. Financial blessings available through faithful action. Initiative in spiritual financial approaches creates unexpected prosperity.',
    predictions: [
      'Opportunity for soul-level romantic connection appears - pursue it actively with open heart',
      'Your initiative to express compassionate love creates profound healing and deep bond',
      'Chance for artistic creation or inspiration succeeds beautifully IF you act upon it',
      'Spiritual or romantic experience you initiate actively creates transcendent meaningful connection',
      'Opportunity for financial blessing appears through creative or compassionate channel',
      'Your active expression of unconditional love naturally attracts reciprocal deep affection',
      'Creative project you initiate with inspiration flows beautifully and resonates deeply',
      'Compassionate forgiving initiative you take actively heals relationship profoundly',
      'Your active pursuit of beauty or spiritual love creates magical meaningful results',
      'Opportunity for soul-level connection through compassionate spiritual creative initiative'
    ]
  },

  // ============================================================================
  // VENUS-PLUTO ASPECTS (Transformative and intense love)
  // ============================================================================

  'Venus-Pluto-Conjunction': {
    name: 'Venus Conjunction Pluto',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Pluto represents transformation, death and rebirth, power, depth, shadow work, elimination, regeneration, and psychological intensity. It\'s where you confront the underworld, reclaim power, and undergo total metamorphosis.',
    aspectMeaning: 'Love transforms through intense depth and passionate power! Venus\'s affection merges with Pluto\'s intensity, creating deep transformative love, powerful attraction, and profound value transformation. Perfect time for intense romantic connection, transformative relationship work, deep artistic expression, addressing love shadows. Love feels all-consuming and transformative. Attraction becomes magnetic and powerful. Excellent for depth psychology in love, passionate intimacy, transformative art, reclaiming power in relationships. Warning: intensity can overwhelm or control - channel into healing depth not manipulation. Transformation through love.',
    loveRelationships: 'Relationship love becomes intensely transformative and powerful! Romance feels deep, passionate, and soul-transforming. Perfect time for profound vulnerable intimacy, addressing relationship shadows, transformative honest communication, powerful sexual connection. Love intensity can heal or overwhelm. Good time for couples therapy, profound truth-telling, addressing relationship power dynamics, transformative relationship commitment. Warning: intensity can become obsessive or controlling - channel into healing vulnerable depth not manipulation or possession.',
    familyHome: 'Family love becomes intensely deep and transformative! Perfect time for profound family healing, addressing family shadows, transformative family truth-telling, deep family psychological work. Home becomes place of transformation. Good time for family therapy, uncovering family patterns, addressing family power dynamics, deep family forgiveness through shadow work. Warning: intensity can overwhelm - channel into healing not family control or manipulation.',
    businessCareer: 'Professional values become powerfully transformative! Excellent time for transformative career decisions, powerful professional impact, deep meaningful professional work, reclaiming professional power. Work becomes intensely meaningful. Good time for addressing professional power dynamics, transformative professional projects, powerful professional expression, career transformation through deep work. Your powerful professional values attract recognition.',
    moneyFinances: 'Financial values transform through powerful depth! Good time for transformative financial decisions, addressing money shadows, powerful financial strategy, shared resource transformation. Financial approach becomes intensely focused. Excellent for deep financial psychology work, eliminating limiting money patterns, powerful financial transformation, reclaiming financial power. Financial regeneration through release and empowerment.',
    predictions: [
      'Powerful transformative romantic connection appears that feels destined and deeply intense',
      'Your vulnerable depth in love creates profound transformation and powerful healing bond',
      'Financial or romantic shadow you address courageously transforms into source of power',
      'Intense attraction you feel leads to transformative soul-level connection',
      'Your willingness to go deep in love creates powerful profound authentic intimacy',
      'Powerful choice about values or love you make transforms your life direction',
      'Intense experience in love or finances forces powerful psychological transformation',
      'Your courage to address love shadows produces liberating empowering breakthrough',
      'Powerful passionate connection transforms both you and partner profoundly',
      'Opportunity for profound love transformation through intense powerful vulnerable depth'
    ]
  },

  'Venus-Pluto-Opposition': {
    name: 'Venus Opposition Pluto',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Pluto represents transformation, death and rebirth, power, depth, shadow work, elimination, regeneration, and psychological intensity. It\'s where you confront the underworld, reclaim power, and undergo total metamorphosis.',
    aspectMeaning: 'Tension between light love and intense transformation requiring integration! Venus\'s harmony faces Pluto\'s intensity, creating love power struggles, obsessive attraction, or control issues in relationships. Challenge is honoring both affection AND depth transformation. Risk of possessiveness, jealousy, or manipulative love dynamics. Resistance to depth creates superficiality; excessive intensity overwhelms. Integration of lightness and depth needed. Balance creates powerful sustainable love.',
    loveRelationships: 'Relationship power struggles requiring deep transformation! Love involves intense power dynamics, control issues, or deep psychological challenges. Tendency toward jealousy, possessiveness, or manipulative love patterns. Partner may trigger your shadows or power issues. Challenge is loving deeply while maintaining healthy power balance. Good time to address love power dynamics honestly, release toxic love patterns, practice empowered vulnerable love. Integration of affection and transformation.',
    familyHome: 'Family power struggles requiring healing transformation! Home life involves intense family dynamics, control issues, or deep family psychological work. Tendency toward family power struggles or toxic family patterns surfacing. Challenge is loving family while addressing family power imbalances. Good time to address family control patterns, release toxic family dynamics, reclaim healthy family power. Integration of family affection and family transformation.',
    businessCareer: 'Professional power struggles requiring value transformation! Career involves intense professional dynamics, power struggles, or deep professional challenges. Tendency toward professional control issues or feeling professionally controlled. Challenge is valuing your professional worth while navigating professional power realities. Good time to address professional power dynamics, reclaim professional power constructively, transform professional values. Integration of professional affection and professional power.',
    moneyFinances: 'Financial power struggles requiring money transformation! Money involves control issues, shared resource conflicts, or deep financial psychology. Tendency toward financial power struggles or toxic financial patterns. Challenge is valuing yourself financially while addressing financial power dynamics. Good time to address financial control issues, heal money shadows, reclaim financial power. Integration of financial enjoyment and financial transformation.',
    predictions: [
      'Love power struggle forces you to examine and transform unhealthy relationship patterns',
      'Your resistance to relationship transformation creates crisis - embrace of depth resolves it',
      'Jealousy or control issue reveals shadow requiring conscious psychological healing work',
      'Intense relationship challenge forces you to choose between toxic patterns and empowered love',
      'Financial or romantic power dynamic surfaces requiring conscious transformation',
      'Challenge between light affection and deep intensity resolved through conscious integration',
      'Control issue you address honestly transforms into empowered vulnerable authentic connection',
      'You learn to love deeply and powerfully while maintaining healthy equal power balance',
      'Toxic love pattern you release painfully creates space for authentic empowered love',
      'Opportunity to integrate light loving affection with deep transformative psychological power'
    ]
  },

  'Venus-Pluto-Trine': {
    name: 'Venus Trine Pluto',
    frequency: 'Occurs once per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Pluto represents transformation, death and rebirth, power, depth, shadow work, elimination, regeneration, and psychological intensity. It\'s where you confront the underworld, reclaim power, and undergo total metamorphosis.',
    aspectMeaning: 'Love and transformation flow naturally with powerful grace! Venus\'s affection harmonizes beautifully with Pluto\'s depth, creating effortless profound connection, natural powerful attraction, and graceful transformative love. Perfect time for deep intimacy flowing smoothly, transformative relationship work flowing naturally, powerful artistic expression flowing effortlessly. Love and power balance perfectly without drama. Depth feels natural and comfortable. Excellent for profound romantic connection, shadow work in love, passionate intimacy, powerful beauty creation. Transformation enhances rather than threatens love.',
    loveRelationships: 'Relationship love flows with natural transformative depth! Romance feels both tender and powerful, gentle and intense effortlessly. Perfect time for profound vulnerable intimacy flowing naturally, addressing relationship depth comfortably, powerful sexual connection without drama. Deep transformation and comfortable affection combine perfectly. Good time for couples therapy flowing smoothly, profound truth-sharing naturally, powerful commitment naturally deepening. Depth and ease unite beautifully.',
    familyHome: 'Family love flows with natural transformative healing! Perfect time for profound family healing flowing naturally, addressing family psychology comfortably, deep family forgiveness naturally transforming. Home feels both comfortable and deeply meaningful effortlessly. Good time for family therapy flowing smoothly, uncovering family patterns gently, healing family wounds naturally. Family depth and family warmth combine beautifully.',
    businessCareer: 'Professional values flow with natural transformative power! Excellent time for powerful professional impact flowing naturally, transformative career decisions made wisely, deep meaningful professional work succeeding smoothly. Professional power and professional affection align perfectly. Good time for influential professional work, transformative professional projects flowing naturally, powerful professional values naturally recognized. Impact and harmony unite gracefully.',
    moneyFinances: 'Financial values flow with natural transformative power! Good time for powerful financial decisions made wisely, financial transformation flowing naturally, money shadows healing comfortably. Financial power and financial enjoyment balance perfectly. Excellent for shared resource harmony flowing naturally, wise financial transformation, powerful financial strategy succeeding smoothly. Financial depth and financial prosperity unite beautifully.',
    predictions: [
      'Profound romantic connection flows naturally and feels both powerful and comfortable',
      'Your naturally powerful loving presence creates deep transformation without drama',
      'Financial or romantic transformation happens gracefully and produces lasting positive change',
      'Deep intimate conversation flows naturally and transforms relationship beautifully',
      'Powerful attraction you feel naturally develops into meaningful profound connection',
      'Your natural depth and intensity in love naturally attracts reciprocal deep affection',
      'Shadow work in love or values flows gently and produces empowering clarity naturally',
      'Powerful choice about love or values you make naturally proves profoundly wise',
      'Transformative experience in love feels natural and enhances rather than disrupts',
      'Opportunity for profound transformative love through natural powerful graceful depth'
    ]
  },

  'Venus-Pluto-Square': {
    name: 'Venus Square Pluto',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Pluto represents transformation, death and rebirth, power, depth, shadow work, elimination, regeneration, and psychological intensity. It\'s where you confront the underworld, reclaim power, and undergo total metamorphosis.',
    aspectMeaning: 'Growth through love intensity and power struggles requiring conscious transformation! Venus\'s affection clashes with Pluto\'s intensity, creating obsessive love, control struggles, or compulsive attraction. Challenge is channeling passionate intensity into healing transformation not destructive possession. Tendency toward jealousy, obsessive attraction, or toxic love patterns. Crisis forces development of empowered authentic love. Conscious awareness transforms love obsession into profound empowered vulnerable connection.',
    loveRelationships: 'Relationship friction through intensity or control! Love may feel obsessive, controlling, or intensely conflicted. Tendency toward jealousy, possessiveness, or manipulative love behavior. Attraction feels compulsive or overwhelming. Challenge is loving deeply without controlling or being controlled. Good time to consciously address love power issues, work through love obsession, release toxic love patterns. Crisis teaches empowered vulnerable love. Transform controlling love into healing powerful authentic connection.',
    familyHome: 'Family friction through intensity or control! Home life may feel intensely controlling or emotionally overwhelming. Tendency toward family power struggles, family manipulation, or toxic family emotional intensity. Challenge is loving family deeply without family control dynamics. Good time to consciously address family power issues, work through family psychological patterns, release toxic family dynamics. Crisis forces healthy family transformation. Transform family control into empowered family love.',
    businessCareer: 'Professional friction through power struggles or obsession! Career may feel intensely competitive, controlling, or obsessively consuming. Tendency toward professional power struggles or compulsive professional ambition. Challenge is valuing professional success without obsessive professional control. Good time to consciously address professional power issues, balance professional intensity with professional wellbeing. Crisis teaches professional empowerment. Transform professional obsession into powerful balanced career passion.',
    moneyFinances: 'Financial friction through obsession or control! Money may feel obsessively important or involve financial power struggles. Tendency toward compulsive financial behavior or financial control issues. Challenge is valuing financial security without obsessive financial control or fear. Good time to consciously address money psychology, work through financial shadows, release toxic financial patterns. Crisis develops healthy financial empowerment. Transform financial obsession into wise powerful financial management.',
    predictions: [
      'Love intensity or obsession you work through consciously transforms into empowered depth',
      'Your tendency toward jealousy or control you address honestly heals and opens authentic love',
      'Power struggle in love forces you to choose empowered vulnerability over destructive control',
      'Compulsive attraction you examine consciously either transforms healthily or releases wisely',
      'Financial or romantic shadow you confront courageously produces liberating breakthrough',
      'Toxic love pattern you recognize and release creates space for authentic empowered connection',
      'Control issue you address through therapy or shadow work transforms into healthy power',
      'Obsessive feeling you work through consciously becomes passionate healthy depth',
      'You learn that real power in love comes through vulnerability not control',
      'Opportunity to transform love intensity into conscious empowered vulnerable authentic depth'
    ]
  },

  'Venus-Pluto-Sextile': {
    name: 'Venus Sextile Pluto',
    frequency: 'Occurs 2-3 times per year',
    duration: '1-2 weeks',
    planet1Energy: 'Venus represents love, relationships, beauty, values, pleasure, harmony, art, attraction, and connection. It\'s how you give and receive love, what you value, and what brings you joy.',
    planet2Energy: 'Pluto represents transformation, death and rebirth, power, depth, shadow work, elimination, regeneration, and psychological intensity. It\'s where you confront the underworld, reclaim power, and undergo total metamorphosis.',
    aspectMeaning: 'Opportunity for transformative love through vulnerable initiative! Venus\'s affection harmonizes with Pluto\'s depth, creating potential for profound romantic connection, powerful attraction, transformative beauty IF you take action. Opportunities for deep intimacy, shadow work in love, passionate connection appear - but require your courage. Perfect time to pursue deep love actively, address love shadows courageously, express powerful passion. Success through vulnerable depth. Passive approach wastes potential; active transformative engagement creates profound results.',
    loveRelationships: 'Relationship opportunity for profound intimacy through vulnerable initiative! Potential for deep transformative connection, powerful romantic depth, soul-level intimacy IF you initiate. Perfect time to suggest couples therapy actively, initiate profound conversation courageously, express deep passionate love. Opportunity for transformative relationship through vulnerable depth IF you risk openness. Initiative in powerful vulnerable love creates profound romantic transformation.',
    familyHome: 'Family opportunity for deep healing through courageous initiative! Potential for family transformation, profound family healing, deep family connection IF you initiate. Perfect time to suggest family therapy actively, address family shadows courageously, express deep family love. Family receptive to healing depth work IF you present it with care and courage. Initiative in transformative family work creates profound family healing.',
    businessCareer: 'Professional opportunity for powerful impact through deep initiative! Potential for transformative career advancement, powerful professional success, meaningful professional depth IF you take action. Perfect time to pursue influential professional work actively, express powerful professional values, address professional depth courageously. Recognition available IF you step forward with authentic powerful depth. Initiative in transformative professional work creates powerful career impact.',
    moneyFinances: 'Financial opportunity for transformation through strategic initiative! Potential for financial growth through deep financial work, powerful financial decisions, shared resource transformation IF you pursue it actively. Perfect time to address money shadows actively, make powerful strategic financial decisions, transform limiting financial patterns. Financial empowerment available through courageous financial depth work.',
    predictions: [
      'Opportunity for profound romantic connection appears - pursue it courageously for deep results',
      'Your initiative to risk vulnerable depth in love creates transformative powerful intimacy',
      'Chance to address love or financial shadows succeeds profoundly IF you pursue it actively',
      'Deep conversation you initiate courageously transforms relationship powerfully and permanently',
      'Opportunity for powerful attraction appears - initiative required to develop into depth',
      'Your courageous expression of passionate depth attracts reciprocal powerful love',
      'Shadow work in love or values you pursue actively produces empowering liberating clarity',
      'Powerful choice about love or finances you make courageously proves transformatively wise',
      'Your active engagement with love depth creates profound meaningful lasting transformation',
      'Opportunity for transformative powerful love through courageous vulnerable depth initiative'
    ]
  }

};

export default GENERAL_ASPECTS;






