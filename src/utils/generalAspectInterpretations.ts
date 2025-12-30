/**
 * General Transit-to-Transit Aspect Interpretations
 * Pure planet-to-planet aspects without house considerations
 * Format: Name, Frequency, Duration, Planet Energies, Aspect Meaning, Category Interpretations, 10 Predictions
 */

export interface GeneralAspectInterpretation {
  name: string;
  frequency: string;
  duration: string;
  planet1Energy: string;
  planet2Energy: string;
  aspectMeaning: string;
  loveRelationships: string;
  familyHome: string;
  businessCareer: string;
  moneyFinances: string;
  predictions: string[];
}

// Aspect frequency data
const ASPECT_FREQUENCY: Record<string, { rarity: string; timing: string }> = {
  'Conjunction': { rarity: 'Varies by planets involved', timing: 'When planets align at same degree' },
  'Opposition': { rarity: 'Varies by planets involved', timing: 'When planets are 180° apart' },
  'Trine': { rarity: 'Harmonious, moderately common', timing: 'When planets are 120° apart' },
  'Square': { rarity: 'Challenging, moderately common', timing: 'When planets are 90° apart' },
  'Sextile': { rarity: 'Opportunistic, fairly common', timing: 'When planets are 60° apart' }
};

// Planet speed for duration calculation
const PLANET_DAILY_MOTION: Record<string, number> = {
  'Sun': 1.0,
  'Moon': 13.2,
  'Mercury': 1.4,
  'Venus': 1.2,
  'Mars': 0.6,
  'Jupiter': 0.08,
  'Saturn': 0.03,
  'Uranus': 0.01,
  'Neptune': 0.006,
  'Pluto': 0.004
};

function calculateDuration(planet1: string, planet2: string, orb: number = 8): string {
  const speed1 = PLANET_DAILY_MOTION[planet1] || 0.5;
  const speed2 = PLANET_DAILY_MOTION[planet2] || 0.5;
  const combinedSpeed = speed1 + speed2;
  const days = Math.ceil((orb * 2) / combinedSpeed);

  if (days < 7) return `${days} days`;
  if (days < 60) return `${Math.ceil(days / 7)} weeks`;
  if (days < 365) return `${Math.ceil(days / 30)} months`;
  return `${Math.ceil(days / 365)} years`;
}

/**
 * Get general interpretation for a transit-to-transit aspect
 */
export function getGeneralAspectInterpretation(
  planet1: string,
  planet2: string,
  aspectType: string,
  orb: number = 5
): GeneralAspectInterpretation | null {
  const key = `${planet1}-${planet2}-${aspectType}`;
  const reverseKey = `${planet2}-${planet1}-${aspectType}`;

  // Check both directions
  const interpretation = GENERAL_ASPECTS[key] || GENERAL_ASPECTS[reverseKey];

  if (!interpretation) return null;

  // Calculate duration
  const duration = calculateDuration(planet1, planet2, orb);
  const frequency = ASPECT_FREQUENCY[aspectType];

  return {
    ...interpretation,
    duration: `${duration} (given ${orb}° orb). ${frequency.rarity}.`,
    frequency: `${frequency.timing}. ${frequency.rarity}.`
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

};

export default GENERAL_ASPECTS;
