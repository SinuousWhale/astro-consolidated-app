// Eclipse Aspect Interpretations - When a Solar or Lunar Eclipse aspects a planet

export interface EclipseAspectInterpretation {
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

/**
 * Get interpretation for eclipse aspect to a planet
 * @param planet - The planet being aspected by the eclipse
 * @param aspect - The aspect type (Conjunction, Opposition, Square, Trine, Sextile)
 */
export function getEclipseAspectInterpretation(
  planet: string,
  aspect: string
): EclipseAspectInterpretation | null {
  const key = `${planet}-${aspect}`;
  return ECLIPSE_ASPECTS[key] || null;
}

const ECLIPSE_ASPECTS: Record<string, EclipseAspectInterpretation> = {
  // URANUS ECLIPSE ASPECTS
  'Uranus-Square': {
    name: 'Solar Eclipse Square Uranus',
    frequency: 'Occurs during eclipses (approximately every 6 months)',
    duration: '6 months to 1 year (eclipse effects last until next eclipse season)',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset, destiny activation, fated endings and beginnings, shadow work, and powerful 6-month to 1-year transformational cycles. Eclipses are cosmic wild cards bringing unexpected but necessary change.',
    planet2Energy: 'Uranus represents revolution, awakening, breakthrough, liberation, authenticity, innovation, sudden change, rebellion, and freedom. It\'s the cosmic awakener that shatters limitations.',
    aspectMeaning: 'BREAKTHROUGH CRISIS through sudden disruption! The eclipse squares your Uranus, forcing transformation through UNEXPECTED challenges, revolutionary friction, or liberating pressure. This intense 6-month cycle pushes you OUT of false security into necessary authentic freedom. Structures break down SUDDENLY, uncomfortable awakenings emerge, breakthrough liberation comes through disruption. The universe is FORCING you to break free from what limits your authentic self!',
    loveRelationships: 'Relationship disruption FORCES authentic freedom and liberation! SUDDEN crisis or unexpected challenge in love catalyzes breakthrough authenticity. Old relationship patterns that limited freedom break down through disruption - pushes you into honest authentic connection. Romantic friction reveals need for independence, space, or radical honesty in intimacy. Unexpected event or partner\'s sudden change forces you to claim authentic self IN relationship. Crisis liberates you from false partnership security into real intimate freedom.',
    familyHome: 'Family or home SUDDEN disruption forces authentic liberation! Unexpected challenge or crisis IN family catalyzes breakthrough freedom and authenticity. Old domestic patterns or family structures break down through disruption - pushes collective evolution and individual liberation. Home situation sudden change reveals need for authentic expression within family. Unexpected family event forces you to claim independence while maintaining connection. Crisis liberates family from comfortable stagnation into authentic dynamic growth.',
    businessCareer: 'Career SUDDEN disruption forces revolutionary breakthrough and authentic work! Unexpected professional challenge or work crisis catalyzes liberation from limiting career patterns. Old professional structures or job situations break down through disruption - pushes you into authentic destined work path. Career friction reveals need for innovation, freedom, or radical professional authenticity. Unexpected work event forces you to claim authentic professional identity. Crisis liberates career from false security into breakthrough purposeful work!',
    moneyFinances: 'Financial SUDDEN disruption forces innovative abundance breakthrough! Unexpected money challenge or resource crisis catalyzes liberation from limiting financial patterns. Old money structures or security approaches break down through disruption - pushes innovative authentic prosperity path. Financial friction reveals need for progressive resource thinking or authentic abundance approach. Unexpected financial event forces you to claim innovative money freedom. Crisis liberates finances from false security into breakthrough authentic prosperity!',
    predictions: [
      'SUDDEN disruption or unexpected challenge FORCES necessary liberation and awakening',
      'Structure or stability breaks down unexpectedly - pushes you into authentic freedom',
      'Revolutionary friction or conflict catalyzes breakthrough innovation or change',
      'Technology or system failure forces rapid adaptation and progressive solution',
      'Relationship or commitment sudden crisis reveals need for freedom or authenticity',
      'Unexpected event or shock awakens you to truth you\'ve been avoiding',
      'Rebellious breakthrough through crisis - you claim freedom despite discomfort',
      'Liberation emerges through disruption, sudden challenge, or unexpected friction',
      'Eclipse-Uranus square = cosmic WAKE UP CALL forcing authentic revolutionary change',
      'Crisis is cosmic gift - breakdown creates breakthrough into liberated authentic life!'
    ]
  },

  'Uranus-Conjunction': {
    name: 'Solar Eclipse Conjunction Uranus',
    frequency: 'Occurs during eclipses (rare and powerful alignment)',
    duration: '6 months to 1 year (INTENSE eclipse effects, revolutionary transformation)',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset, destiny activation, fated endings and beginnings, shadow work, and powerful 6-month to 1-year transformational cycles.',
    planet2Energy: 'Uranus represents revolution, awakening, breakthrough, liberation, authenticity, innovation, sudden change, rebellion, and freedom.',
    aspectMeaning: 'REVOLUTIONARY awakening and liberation reset! The eclipse conjuncts your Uranus, bringing SUDDEN karmic shifts in freedom, authenticity, innovation, and breakthrough. This is a RADICAL 6-month to 1-year cycle of liberation and awakening. Old limiting structures or patterns SHATTER while NEW revolutionary authentic self emerges SUDDENLY. Unexpected breakthroughs or life-changing disruptions happen now!',
    loveRelationships: 'SUDDEN fated romantic liberation or breakthrough authentic love! Revolutionary relationship beginning, ending, or transformation happens UNEXPECTEDLY. Authentic love aligned with freedom emerges suddenly - or limiting relationship shatters for liberation. Unexpected romantic awakening reveals true desires and authentic connection needs. Love breaks free from convention - radical honest partnership or liberating independence manifests instantly.',
    familyHome: 'Family or home SUDDEN revolutionary transformation and authentic liberation! Unexpected family breakthrough or home situation dramatic change happens instantly. Old family patterns SHATTER - NEW authentic dynamic emerges suddenly. Freedom and authenticity surge in domestic life - unexpected positive change or liberating disruption. Family awakens collectively to authentic expression and progressive dynamics.',
    businessCareer: 'Career SUDDEN revolutionary breakthrough and authentic work liberation! Unexpected professional opportunity or radical career change happens instantly. Old work patterns SHATTER - NEW innovative authentic career emerges suddenly. Freedom and authenticity surge in professional life - breakthrough into destined progressive work. Career awakens to authentic purpose through unexpected revolutionary opportunity.',
    moneyFinances: 'Financial SUDDEN innovative breakthrough and abundance liberation! Unexpected money opportunity or radical resource transformation happens instantly. Old financial patterns SHATTER - NEW innovative authentic prosperity emerges suddenly. Freedom and authenticity surge in money approach - breakthrough into progressive abundance. Financial awakening to authentic wealth through unexpected revolutionary opportunity.',
    predictions: [
      'SUDDEN unexpected breakthrough or opportunity aligned with authentic purpose',
      'Revolutionary change or disruption shatters old limiting patterns INSTANTLY',
      'Awakening to true authentic self - liberation from conditioned false identity',
      'Technology, innovation, or progressive opportunity manifests unexpectedly',
      'Freedom surge - break free from relationship, career, or pattern that limited you',
      'Unexpected insight or realization changes life direction dramatically and suddenly',
      'Rebellious authentic expression emerges - you claim radical individuality',
      'Karmic liberation - sudden release from old karma through unexpected event',
      'Eclipse-Uranus conjunction = COSMIC LIGHTNING BOLT of liberation and awakening',
      'This is YOUR revolutionary moment - embrace sudden change with courage and freedom!'
    ]
  },

  'Uranus-Opposition': {
    name: 'Solar Eclipse Opposition Uranus',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset and destiny activation.',
    planet2Energy: 'Uranus represents revolution, awakening, breakthrough, and liberation.',
    aspectMeaning: 'Freedom and authenticity tension requiring integration! The eclipse opposes your Uranus, creating karmic pressure around independence, change, and innovation. This 6-month cycle challenges you to balance freedom with relationship, integrate rebellious energy, and awaken authentically despite external stability pressure.',
    loveRelationships: 'Freedom challenge forces balance between independence and relationship/commitment. Change tension reveals authentic needs vs. external stability or others\' resistance. Relationship tension around freedom, space, and individuality needs.',
    familyHome: 'Family tension around freedom and change. Home situation challenges balance between independence and family responsibility. Unexpected family dynamics require conscious navigation.',
    businessCareer: 'Career freedom vs. stability tension. Professional change meets resistance. Must integrate innovative ideas with traditional structures.',
    moneyFinances: 'Financial independence vs. security dynamics. Resource freedom challenged by practical constraints. Innovation in money approach meets resistance.',
    predictions: [
      'Freedom challenge forces balance between independence and relationship/commitment',
      'Change tension reveals authentic needs vs. external stability',
      'Innovation opposition: breakthrough ideas vs. conservative pressure',
      'Relationship tension around freedom, space, individuality',
      'Sudden disruption from external source forces conscious choice about liberation',
      'Rebellious urge vs. social expectation requires integration',
      'Technology or progress meets resistance - navigate consciously',
      'Authentic awakening emerges through navigating freedom tension',
      'Eclipse opposition creates healthy tension for growth',
      'Integration of freedom and responsibility leads to authentic balance'
    ]
  },

  'Uranus-Trine': {
    name: 'Solar Eclipse Trine Uranus',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year (transformation flows naturally with EXCITEMENT)',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset and destiny activation.',
    planet2Energy: 'Uranus represents revolution, awakening, breakthrough, and liberation.',
    aspectMeaning: 'Flowing breakthrough and liberation transformation! The eclipse trines your Uranus, bringing EASY karmic shifts in freedom, natural innovation surges, and effortless authentic awakening. This fortunate 6-month cycle supports smooth liberation, harmonious breakthrough, and graceful independence with destiny. EXCITING POSITIVE CHANGES FLOW NATURALLY!',
    loveRelationships: 'Natural romantic breakthrough flows effortlessly. Exciting authentic love connection happens smoothly. Freedom and intimacy balance naturally. Revolutionary love evolution without crisis.',
    familyHome: 'Family liberation and authentic expression flow smoothly. Home innovation happens naturally. Progressive family dynamics emerge with ease.',
    businessCareer: 'Career breakthrough flows naturally. Professional innovation happens smoothly. Authentic work path opens effortlessly with exciting opportunities.',
    moneyFinances: 'Financial innovation flows naturally. Progressive abundance happens smoothly. Authentic prosperity path opens with exciting opportunities.',
    predictions: [
      'Natural breakthrough or innovation arrives effortlessly - exciting change flows smoothly',
      'Freedom and liberation increase naturally without crisis or disruption',
      'Authentic self-expression emerges gracefully - embody individuality with ease',
      'Technology or progressive opportunity appears naturally at perfect timing',
      'Change happens smoothly - life evolves excitingly toward greater freedom',
      'Independence and relationship balance naturally - freedom within connection',
      'Awakening or realization flows harmoniously - truth revealed gently',
      'Liberation emerges naturally - feel free, authentic, innovative with ease',
      'Eclipse-Uranus trine = COSMIC GIFT of effortless breakthrough and freedom',
      'Enjoy this fortunate cycle - positive revolutionary change flows naturally!'
    ]
  },

  'Uranus-Sextile': {
    name: 'Solar Eclipse Sextile Uranus',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year (opportunity requires conscious action)',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset and destiny activation.',
    planet2Energy: 'Uranus represents revolution, awakening, breakthrough, and liberation.',
    aspectMeaning: 'Breakthrough and freedom opportunity through initiative! The eclipse sextiles your Uranus, offering karmic opportunities for liberation, innovation advancement IF you take authentic action. This 6-month cycle presents openings for breakthrough, independence, awakening - but requires conscious engagement and willingness to change.',
    loveRelationships: 'Romantic breakthrough opportunity available through conscious initiative. Freedom and authentic connection opening requires engagement. Take action for revolutionary love.',
    familyHome: 'Family liberation opportunity through conscious effort. Home innovation opening requires initiative. Engage actively for progressive family dynamics.',
    businessCareer: 'Career breakthrough opportunity through initiative. Professional innovation opening requires action. Pursue authentic work path consciously.',
    moneyFinances: 'Financial innovation opportunity through conscious action. Progressive prosperity opening requires engagement. Take initiative for authentic abundance.',
    predictions: [
      'Breakthrough opportunity appears - take initiative and innovation manifests',
      'Freedom or independence opening presents itself - act courageously for liberation',
      'Technology or progressive opportunity available - engage actively',
      'Authentic expression potential visible - consciously embody true individuality',
      'Change opportunity present - participate deliberately for transformation',
      'Community or network innovation opening - contribute progressive ideas actively',
      'Awakening possible through conscious questioning of status quo',
      'Liberation upgrade available through conscious authentic action',
      'Eclipse-Uranus sextile = OPPORTUNITY for breakthrough through initiative',
      'Seize opportunities actively - conscious action brings liberation and innovation!'
    ]
  },


  // MERCURY ECLIPSE ASPECTS
  'Mercury-Conjunction': {
    name: 'Solar Eclipse Conjunction Mercury',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year (MAJOR mental transformation cycle)',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset, destiny activation, fated endings and beginnings, shadow work, and powerful transformational cycles.',
    planet2Energy: 'Mercury represents communication, thinking, learning, information processing, curiosity, and mental connection. It\'s how you perceive, express, and understand the world.',
    aspectMeaning: 'Powerful mental and communication reset! The eclipse conjuncts your Mercury, bringing karmic shifts in thinking, communication, learning, and perception. This is a MAJOR 6-month to 1-year cycle of mental transformation. Old thought patterns, communication styles, or learning approaches end while NEW purposeful mental clarity emerges. Fated conversations, breakthrough insights, or significant communication events happen now.',
    loveRelationships: 'Fated romantic conversation or communication breakthrough transforms love life! Important relationship dialogue happens now that changes romantic direction. Mental clarity about love needs and desires emerges. Communication in partnership transforms - old patterns release, new authentic dialogue begins.',
    familyHome: 'Family communication breakthrough or important domestic conversation transforms home life! Mental clarity about family needs and home direction emerges. Communication in family transforms - old patterns release, new authentic dialogue begins.',
    businessCareer: 'MAJOR career communication breakthrough or professional mental transformation! Important work conversation, business decision, or career-related information that changes professional direction. Mental clarity about career path and work purpose emerges.',
    moneyFinances: 'Financial decision clarity or important money communication transforms abundance! Mental breakthrough about financial strategy and prosperity approach. Money conversations or information that changes resource direction.',
    predictions: [
      'MAJOR communication breakthrough or transformation in how you think/speak',
      'Fated conversation or news that changes your mental perspective permanently',
      'Learning or educational opportunity aligned with karmic path',
      'Decision or mental clarity about important life direction',
      'Communication project, writing, or teaching mission begins or transforms',
      'Technology, information, or connection shift aligns with destiny',
      'Mental release of old limiting beliefs - NEW empowered thinking emerges',
      'Karmic message, insight, or information revealed at perfect timing',
      'Eclipse-Mercury conjunction = DESTINY MENTAL RESET',
      'Your mind becomes instrument of your soul purpose!'
    ]
  },

  'Mercury-Opposition': {
    name: 'Solar Eclipse Opposition Mercury',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset and destiny activation.',
    planet2Energy: 'Mercury represents communication, thinking, learning, information.',
    aspectMeaning: 'Mental tension requiring integration! Communication challenges push authentic expression. Mental friction creates opportunity for deeper understanding and honest dialogue.',
    loveRelationships: 'Communication challenge forces authentic romantic expression. Conversation tension reveals true feelings. Relationship dialogue friction creates deeper connection opportunity.',
    familyHome: 'Family communication challenge forces honest expression. Domestic conversation tension reveals true feelings. Home dialogue friction creates deeper family connection.',
    businessCareer: 'Professional communication challenge forces authentic career expression. Work conversation tension reveals true thinking. Career dialogue friction creates purposeful opportunity.',
    moneyFinances: 'Financial communication challenge forces authentic money dialogue. Resource conversation tension reveals true abundance thinking. Money dialogue friction creates prosperity opportunity.',
    predictions: [
      'Communication challenge forces authentic truth vs. comfortable words',
      'Mental tension reveals true thinking vs. habitual expression',
      'Partnership conversation requires vulnerable honest communication',
      'Information creates mental conflict requiring integration',
      'Learning challenge: integrate opposing viewpoints',
      'Decision between familiar and necessary new perspective',
      'Shadow mental pattern revealed through communication',
      'Authentic expression emerges through friction',
      'Eclipse opposition creates healthy mental tension',
      'Integration leads to authentic communication!'
    ]
  },

  'Mercury-Square': {
    name: 'Solar Eclipse Square Mercury',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Mercury represents communication and thinking.',
    aspectMeaning: 'Mental crisis and communication breakthrough! Challenges force transformation through friction. Uncomfortable truths emerge, breakthrough understanding through difficulty.',
    loveRelationships: 'Love communication breakdown FORCES authentic dialogue! Relationship friction catalyzes breakthrough honest expression. Crisis creates deeper connection.',
    familyHome: 'Family communication breakdown FORCES authentic dialogue! Home friction catalyzes breakthrough honest expression. Crisis creates deeper family connection.',
    businessCareer: 'Career communication breakdown FORCES authentic dialogue! Work friction catalyzes breakthrough purposeful expression. Crisis creates professional breakthrough.',
    moneyFinances: 'Financial communication breakdown FORCES authentic dialogue! Money friction catalyzes breakthrough purposeful expression. Crisis creates abundance breakthrough.',
    predictions: [
      'Communication breakdown FORCES mental transformation',
      'Information crisis reveals limiting thought patterns',
      'Difficult conversation pushes necessary growth',
      'Learning challenge forces new skills development',
      'Technology breakdown requires new approach',
      'Decision crisis: must develop new framework',
      'Uncomfortable truth revealed through challenge',
      'Mental breakthrough emerges through friction',
      'Crisis FORCES necessary mental evolution',
      'Breakdown creates breakthrough in thinking!'
    ]
  },

  'Mercury-Trine': {
    name: 'Solar Eclipse Trine Mercury',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Mercury represents communication and thinking.',
    aspectMeaning: 'Flowing mental transformation! EASY communication breakthroughs, effortless mental clarity. Smooth integration of new ideas, harmonious communication.',
    loveRelationships: 'Natural love communication flows effortlessly! Important conversations happen smoothly. Mental clarity emerges naturally. Authentic connection deepens with ease.',
    familyHome: 'Natural family communication flows effortlessly! Important conversations happen smoothly. Mental clarity emerges naturally. Authentic connection deepens with ease.',
    businessCareer: 'Natural career communication flows effortlessly! Important conversations happen smoothly. Mental clarity emerges naturally. Purposeful expression flows with ease.',
    moneyFinances: 'Natural financial communication flows effortlessly! Important conversations happen smoothly. Mental clarity emerges naturally. Prosperity flows with ease.',
    predictions: [
      'Mental breakthrough arrives effortlessly at perfect timing',
      'Communication flows smoothly with ease and grace',
      'Learning opportunity appears naturally',
      'Information arrives easily, providing clarity',
      'Writing, speaking, teaching flows naturally',
      'Technology upgrade happens smoothly',
      'Mental clarity emerges naturally without struggle',
      'Fated conversation happens gracefully',
      'Eclipse trine = GIFT of effortless transformation',
      'Mental evolution flows naturally!'
    ]
  },

  'Mercury-Sextile': {
    name: 'Solar Eclipse Sextile Mercury',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Mercury represents communication and thinking.',
    aspectMeaning: 'Communication opportunity through initiative! Openings for transformation IF you take action. Growth potential requires conscious engagement.',
    loveRelationships: 'Love communication opportunity through initiative! Conversation potential - engage actively. Mental clarity through conscious reflection. Take action for transformation.',
    familyHome: 'Family communication opportunity through initiative! Conversation potential - engage actively. Mental clarity through conscious reflection. Take action for transformation.',
    businessCareer: 'Career communication opportunity through initiative! Conversation potential - engage actively. Mental clarity through conscious reflection. Take action for transformation.',
    moneyFinances: 'Financial communication opportunity through initiative! Conversation potential - engage actively. Mental clarity through conscious reflection. Take action for transformation.',
    predictions: [
      'Communication opportunity - take initiative',
      'Learning opening - act on it for growth',
      'Important conversation opportunity - pursue it',
      'Information available - seek it actively',
      'Writing/speaking opportunity - manifest it',
      'Technology tool available - use it',
      'Mental clarity through conscious thinking',
      'Connection opportunity - engage deliberately',
      'Eclipse sextile = OPPORTUNITY through action',
      'Conscious communication brings breakthrough!'
    ]
  }
,

  // VENUS ECLIPSE ASPECTS
  'Venus-Conjunction': {
    name: 'Solar Eclipse Conjunction Venus',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year (MAJOR love and value transformation)',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset, destiny activation, fated endings and beginnings, shadow work, and powerful transformational cycles.',
    planet2Energy: 'Venus represents love, relationships, values, beauty, money, pleasure, attraction, harmony, and what you cherish most. It\'s how you give and receive love and what brings you joy.',
    aspectMeaning: 'Powerful love and value reset! The eclipse conjuncts your Venus, bringing MAJOR karmic shifts in relationships, self-worth, money, and what you value. This is a transformational 6-month to 1-year cycle where old love patterns, financial approaches, or value systems end while NEW aligned relationships and authentic prosperity emerge. Fated romantic encounters, significant relationship changes, or money breakthroughs happen now.',
    loveRelationships: 'FATED romantic transformation! Significant love beginning, ending, or profound evolution. Karmic relationship manifests or releases. Soul mate encounter possible or existing partnership transforms deeply. Old love patterns dissolve - NEW authentic love aligned with destiny emerges.',
    familyHome: 'Family relationship transformation and home value shifts! Important family connection changes or domestic harmony evolves. Home becomes more beautiful or family love deepens. Values around family and belonging reset.',
    businessCareer: 'Career value alignment and professional relationship transformation! Work partnerships change or career aligns with true values. Money through work transforms - compensation reflects worth. Professional harmony and creative expression emerge.',
    moneyFinances: 'MAJOR financial transformation and abundance reset! Money patterns shift dramatically - old approaches end, NEW prosperity aligned with values begins. Income sources change, financial self-worth transforms, karmic money breakthrough manifests.',
    predictions: [
      'FATED love encounter or significant relationship transformation',
      'Financial breakthrough or money pattern major shift',
      'Self-worth and value system profound reset',
      'Karmic relationship release or soul connection manifests',
      'Creative expression or artistic path activates',
      'Beauty, pleasure, joy approach transforms',
      'Money magnetism increases through value alignment',
      'Partnership (romantic or business) destiny moment',
      'Eclipse-Venus conjunction = LOVE AND ABUNDANCE RESET',
      'Your heart and values align with soul purpose!'
    ]
  },

  'Venus-Opposition': {
    name: 'Solar Eclipse Opposition Venus',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset and destiny activation.',
    planet2Energy: 'Venus represents love, values, beauty, relationships, money, and pleasure.',
    aspectMeaning: 'Love and value tension requiring integration! Relationship dynamics challenge authentic worth expression. Balance personal values with partnership needs, integrate self-love with romantic giving.',
    loveRelationships: 'Relationship tension forces balance between self-worth and partnership! Love challenge reveals authentic needs vs. partner dynamics. Must integrate independence with intimacy, personal values with shared connection.',
    familyHome: 'Family relationship tension around values and harmony. Home dynamics challenge balance between personal needs and family peace. Integration of individual worth with collective family values.',
    businessCareer: 'Professional partnership tension around worth and values. Career relationships challenge authentic value expression. Must balance personal creative vision with collaborative harmony.',
    moneyFinances: 'Financial tension between personal worth and external value dynamics. Money challenge reveals authentic prosperity vs. security pressure. Integration of self-value with practical abundance.',
    predictions: [
      'Relationship tension forces clarity about authentic love needs',
      'Partnership challenge reveals true values vs. compromise',
      'Money dynamics create opportunity for worth integration',
      'Self-love vs. romantic giving requires conscious balance',
      'Value conflict pushes authentic priority clarity',
      'Beauty or pleasure tension reveals true desires',
      'Financial partnership friction creates growth opportunity',
      'Love opposition creates healthy relationship evolution',
      'Eclipse opposition balances heart with practical needs',
      'Integration of values leads to authentic harmony!'
    ]
  },

  'Venus-Square': {
    name: 'Solar Eclipse Square Venus',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Venus represents love, values, and money.',
    aspectMeaning: 'Love and value CRISIS forces transformation! Relationship or money challenges push breakthrough through friction. Uncomfortable heart lessons emerge, authentic worth revealed through difficulty.',
    loveRelationships: 'Love CRISIS forces authentic relationship transformation! Romantic friction catalyzes breakthrough honest connection. Relationship patterns that limited true intimacy break down through challenge - pushes genuine love.',
    familyHome: 'Family relationship CRISIS forces authentic connection transformation! Domestic friction catalyzes breakthrough family harmony. Old patterns break down through challenge - pushes genuine family love.',
    businessCareer: 'Career value CRISIS forces authentic professional transformation! Work friction catalyzes breakthrough purposeful expression. Old patterns break down through challenge - pushes aligned career.',
    moneyFinances: 'Financial CRISIS forces authentic abundance transformation! Money friction catalyzes breakthrough prosperity consciousness. Old financial patterns break down through challenge - pushes aligned wealth.',
    predictions: [
      'Love crisis FORCES necessary relationship evolution',
      'Financial challenge reveals limiting money patterns',
      'Self-worth crisis pushes authentic value clarity',
      'Relationship friction creates deeper intimacy opportunity',
      'Money breakdown forces new prosperity approach',
      'Value conflict reveals true priorities',
      'Pleasure or beauty challenge transforms desires',
      'Partnership crisis creates authentic connection',
      'Crisis FORCES heart alignment with truth',
      'Breakdown creates breakthrough in love and money!'
    ]
  },

  'Venus-Trine': {
    name: 'Solar Eclipse Trine Venus',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Venus represents love, values, and money.',
    aspectMeaning: 'Flowing love and abundance transformation! EASY relationship breakthroughs, effortless financial blessings. Heart opening flows naturally, value alignment harmonious, beauty and pleasure emerge gracefully.',
    loveRelationships: 'Natural love breakthrough flows effortlessly! Romance blossoms smoothly, relationships deepen with ease. Fated love connection manifests naturally. Heart opens to authentic intimacy gracefully.',
    familyHome: 'Natural family harmony flows effortlessly! Home becomes more beautiful smoothly. Family relationships deepen with ease. Domestic love and peace emerge gracefully.',
    businessCareer: 'Natural career-value alignment flows effortlessly! Professional relationships harmonize smoothly. Creative work expression emerges with ease. Work satisfaction and harmony flow gracefully.',
    moneyFinances: 'Natural financial abundance flows effortlessly! Money manifests smoothly, prosperity increases with ease. Financial self-worth aligns naturally. Abundance and generosity emerge gracefully.',
    predictions: [
      'Love breakthrough arrives effortlessly at perfect timing',
      'Financial blessing flows smoothly with ease',
      'Self-worth increases naturally without struggle',
      'Romantic opportunity appears gracefully',
      'Money magnetism flows naturally',
      'Creative expression emerges with ease',
      'Beauty and pleasure increase naturally',
      'Partnership harmony flows gracefully',
      'Eclipse trine = GIFT of effortless love and abundance',
      'Heart evolution flows naturally!'
    ]
  },

  'Venus-Sextile': {
    name: 'Solar Eclipse Sextile Venus',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Venus represents love, values, and money.',
    aspectMeaning: 'Love and abundance opportunity through initiative! Relationship and financial openings IF you take action. Heart growth potential requires conscious engagement with beauty, value, pleasure.',
    loveRelationships: 'Love opportunity through initiative! Romantic potential - engage actively. Relationship deepening through conscious connection. Take action for heart transformation.',
    familyHome: 'Family harmony opportunity through initiative! Domestic beauty potential - engage actively. Home value through conscious effort. Take action for family transformation.',
    businessCareer: 'Career-value opportunity through initiative! Professional harmony potential - engage actively. Creative expression through conscious effort. Take action for work transformation.',
    moneyFinances: 'Financial opportunity through initiative! Abundance potential - engage actively. Prosperity through conscious value alignment. Take action for money transformation.',
    predictions: [
      'Love opportunity - pursue romantic potential',
      'Financial opening - take initiative for abundance',
      'Self-worth opportunity - consciously claim value',
      'Relationship potential - engage deliberately',
      'Money manifestation - act on opportunity',
      'Creative expression - pursue artistic potential',
      'Beauty upgrade - take conscious action',
      'Partnership opening - engage actively',
      'Eclipse sextile = OPPORTUNITY through heart action',
      'Conscious love and value choices bring blessings!'
    ]
  }
,

  // MARS ECLIPSE ASPECTS
  'Mars-Conjunction': {
    name: 'Solar Eclipse Conjunction Mars',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year (MAJOR action and drive transformation)',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset, destiny activation, fated endings and beginnings, shadow work, and powerful transformational cycles.',
    planet2Energy: 'Mars represents action, drive, passion, courage, assertion, anger, sexuality, energy, and warrior spirit. It\'s how you pursue desires and assert your will.',
    aspectMeaning: 'Powerful action and drive reset! The eclipse conjuncts your Mars, bringing MAJOR karmic shifts in energy, passion, courage, and how you assert yourself. This is a transformational 6-month to 1-year cycle where old action patterns, anger expression, or drive approaches end while NEW purposeful energy and authentic courage emerge. Fated initiatives begin, passion ignites, warrior spirit activates.',
    loveRelationships: 'FATED passionate transformation! Sexual energy and romantic desire reset powerfully. Relationship passion ignites or transforms - old patterns of pursuit or anger in love release. NEW authentic desire and courageous romantic expression emerge.',
    familyHome: 'Family action and assertion transformation! How you express anger or take initiative in family resets. Domestic warrior energy activates - courage to defend family or transform home dynamics emerges powerfully.',
    businessCareer: 'MAJOR career drive and professional action transformation! Work energy and ambition reset - old approaches to career assertion end, NEW purposeful professional courage emerges. Initiative aligned with destiny activates powerfully.',
    moneyFinances: 'Financial action and earning drive transformation! How you pursue money and assert worth resets. Earning energy transforms - NEW courageous approach to financial achievement and abundance pursuit emerges powerfully.',
    predictions: [
      'MAJOR energy shift - drive and passion transform powerfully',
      'Fated initiative or project begins with courage',
      'Action pattern reset - old approaches end, NEW begins',
      'Anger or assertion transforms - healthy boundaries emerge',
      'Sexual energy or desire resets powerfully',
      'Warrior spirit activates - courage for life mission',
      'Physical energy or health practices transform',
      'Conflict resolution or competition approach shifts',
      'Eclipse-Mars conjunction = WARRIOR DESTINY ACTIVATION',
      'Your action and courage align with soul purpose!'
    ]
  },

  'Mars-Opposition': {
    name: 'Solar Eclipse Opposition Mars',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset and destiny activation.',
    planet2Energy: 'Mars represents action, drive, passion, anger, and assertion.',
    aspectMeaning: 'Action and assertion tension requiring integration! Conflict dynamics challenge authentic courage expression. Balance personal drive with partnership needs, integrate anger with peace, assertion with receptivity.',
    loveRelationships: 'Passion tension forces balance between desire and relationship harmony! Sexual energy or anger in love requires conscious navigation. Must integrate personal drive with partner needs, assertion with intimacy.',
    familyHome: 'Family conflict tension around action and assertion. Home dynamics challenge balance between personal initiative and family peace. Integration of individual drive with collective harmony.',
    businessCareer: 'Professional conflict tension around drive and ambition. Career assertion challenges collaborative dynamics. Must balance personal goals with team harmony, competition with cooperation.',
    moneyFinances: 'Financial action tension between aggressive pursuit and sustainable approach. Earning drive challenged by practical constraints. Integration of ambition with wise resource management.',
    predictions: [
      'Conflict tension forces clarity about authentic assertion',
      'Partnership challenge reveals true desires vs. compromise',
      'Anger dynamics create opportunity for healthy expression',
      'Drive vs. receptivity requires conscious balance',
      'Competition friction pushes strategic courage',
      'Sexual or passion tension reveals true desires',
      'Action opposition creates growth through navigation',
      'Aggression vs. peace integration opportunity',
      'Eclipse opposition balances warrior with diplomat',
      'Integration of drive leads to authentic power!'
    ]
  },

  'Mars-Square': {
    name: 'Solar Eclipse Square Mars',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Mars represents action, drive, and passion.',
    aspectMeaning: 'Action CRISIS forces drive transformation! Conflict or challenge pushes breakthrough through friction. Anger lessons emerge, authentic courage revealed through difficulty, warrior spirit tested.',
    loveRelationships: 'Passion CRISIS forces authentic desire transformation! Sexual or anger friction catalyzes breakthrough honest expression. Relationship conflict breaks down limiting patterns - pushes genuine intimacy and courage.',
    familyHome: 'Family conflict CRISIS forces authentic assertion transformation! Domestic friction catalyzes breakthrough healthy boundaries. Old anger patterns break down through challenge - pushes genuine family courage.',
    businessCareer: 'Career conflict CRISIS forces authentic drive transformation! Professional friction catalyzes breakthrough purposeful action. Old ambition patterns break down through challenge - pushes aligned achievement.',
    moneyFinances: 'Financial action CRISIS forces authentic earning transformation! Money pursuit friction catalyzes breakthrough prosperity drive. Old earning patterns break down through challenge - pushes aligned abundance action.',
    predictions: [
      'Conflict crisis FORCES necessary action evolution',
      'Challenge reveals limiting drive or anger patterns',
      'Frustration pushes authentic courage development',
      'Competition or obstacle creates warrior breakthrough',
      'Energy crisis forces new vitality approach',
      'Anger breakdown reveals healthy assertion path',
      'Physical challenge transforms health practices',
      'Initiative blockage creates strategic action',
      'Crisis FORCES alignment of drive with purpose',
      'Breakdown creates breakthrough in courage and action!'
    ]
  },

  'Mars-Trine': {
    name: 'Solar Eclipse Trine Mars',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Mars represents action, drive, and passion.',
    aspectMeaning: 'Flowing action and drive transformation! EASY courage breakthroughs, effortless energy alignment. Passion ignites naturally, warrior spirit emerges gracefully, initiative flows harmoniously.',
    loveRelationships: 'Natural passion breakthrough flows effortlessly! Sexual energy and romantic desire ignite smoothly. Relationship courage emerges with ease. Authentic desire and assertion flow gracefully in love.',
    familyHome: 'Natural family courage flows effortlessly! Domestic action and initiative happen smoothly. Family boundaries emerge with ease. Authentic assertion and protection flow gracefully at home.',
    businessCareer: 'Natural career drive flows effortlessly! Professional action and ambition align smoothly. Work courage emerges with ease. Authentic achievement and initiative flow gracefully.',
    moneyFinances: 'Natural financial drive flows effortlessly! Money pursuit and earning action align smoothly. Abundance courage emerges with ease. Authentic prosperity initiative flows gracefully.',
    predictions: [
      'Action breakthrough arrives effortlessly at perfect timing',
      'Energy and vitality flow smoothly with ease',
      'Courage emerges naturally without struggle',
      'Initiative and drive align gracefully',
      'Passion ignites naturally',
      'Conflict resolution flows with ease',
      'Physical energy increases naturally',
      'Warrior spirit emerges gracefully',
      'Eclipse trine = GIFT of effortless courage and action',
      'Drive evolution flows naturally!'
    ]
  },

  'Mars-Sextile': {
    name: 'Solar Eclipse Sextile Mars',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Mars represents action, drive, and passion.',
    aspectMeaning: 'Action and courage opportunity through initiative! Drive and passion openings IF you take bold action. Warrior growth potential requires conscious engagement with energy, assertion, desire.',
    loveRelationships: 'Passion opportunity through initiative! Sexual energy potential - engage courageously. Relationship assertion through conscious action. Take bold steps for desire transformation.',
    familyHome: 'Family courage opportunity through initiative! Domestic action potential - engage boldly. Home assertion through conscious effort. Take courageous steps for family transformation.',
    businessCareer: 'Career drive opportunity through initiative! Professional action potential - engage ambitiously. Work courage through conscious effort. Take bold steps for achievement transformation.',
    moneyFinances: 'Financial action opportunity through initiative! Earning potential - engage courageously. Prosperity drive through conscious effort. Take bold steps for abundance transformation.',
    predictions: [
      'Action opportunity - pursue initiative courageously',
      'Energy opening - engage drive actively',
      'Courage potential - take bold conscious action',
      'Passion opportunity - pursue desires deliberately',
      'Competition opening - engage strategically',
      'Conflict resolution - address actively',
      'Physical vitality - pursue health consciously',
      'Assertion opening - express boundaries actively',
      'Eclipse sextile = OPPORTUNITY through courageous action',
      'Conscious bold choices activate warrior spirit!'
    ]
,

  // JUPITER ECLIPSE ASPECTS
  'Jupiter-Conjunction': {
    name: 'Solar Eclipse Conjunction Jupiter',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year (MAJOR expansion and growth transformation)',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset, destiny activation, fated endings and beginnings, shadow work, and powerful transformational cycles.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, abundance, wisdom, opportunity, faith, higher learning, and blessings. It\'s how you grow and where life expands.',
    aspectMeaning: 'Powerful expansion and opportunity reset! The eclipse conjuncts your Jupiter, bringing MAJOR karmic shifts in growth, abundance, wisdom, and life expansion. This is a BLESSED 6-month to 1-year cycle where old limiting beliefs or growth patterns end while NEW expansive opportunities and authentic optimism emerge. Fated blessings manifest, wisdom activates, major growth begins.',
    loveRelationships: 'FATED romantic expansion and love blessing! Relationship grows significantly or new abundant love manifests. Faith in love restored, optimism in romance expands. Soul mate connection or relationship evolution brings joy and growth.',
    familyHome: 'Family blessing and home expansion! Domestic situation grows positively - home enlarges or family abundance increases. Wisdom in family dynamics emerges, collective faith and joy expand.',
    businessCareer: 'MAJOR career expansion and professional blessing! Opportunity aligned with purpose manifests - promotion, new position, or business growth. Professional wisdom activates, career abundance expands significantly.',
    moneyFinances: 'MAJOR financial expansion and abundance blessing! Money increases significantly, prosperity consciousness expands. Income sources multiply, financial wisdom emerges, wealth manifestation accelerates powerfully.',
    predictions: [
      'MAJOR opportunity or blessing manifests aligned with destiny',
      'Growth and expansion in key life area significantly',
      'Abundance consciousness expands - prosperity increases',
      'Wisdom or higher learning opportunity activates',
      'Faith and optimism restore powerfully',
      'Travel or educational experience transforms perspective',
      'Generosity or giving capacity expands',
      'Lucky break or fortunate timing manifests',
      'Eclipse-Jupiter conjunction = BLESSED EXPANSION RESET',
      'Your growth and abundance align with soul purpose!'
    ]
  },

  'Jupiter-Opposition': {
    name: 'Solar Eclipse Opposition Jupiter',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset and destiny activation.',
    planet2Energy: 'Jupiter represents expansion, growth, optimism, and abundance.',
    aspectMeaning: 'Growth and expansion tension requiring integration! Opportunity dynamics challenge authentic optimism expression. Balance personal growth with partnership expansion, integrate faith with practical reality.',
    loveRelationships: 'Relationship expansion tension forces balance between personal growth and partnership! Love opportunity or abundance challenge reveals authentic needs vs. shared vision. Must integrate individual faith with romantic collaboration.',
    familyHome: 'Family growth tension around expansion and opportunity. Home dynamics challenge balance between personal development and family faith. Integration of individual wisdom with collective optimism.',
    businessCareer: 'Professional expansion tension around opportunity and growth. Career abundance challenges collaborative dynamics. Must balance personal vision with team growth, ambition with shared success.',
    moneyFinances: 'Financial expansion tension between aggressive growth and sustainable abundance. Opportunity challenged by practical constraints. Integration of optimism with wise resource management.',
    predictions: [
      'Opportunity tension forces clarity about authentic growth',
      'Expansion challenge reveals true vision vs. external expectations',
      'Abundance dynamics create integration opportunity',
      'Faith vs. doubt requires conscious balance',
      'Growth conflict pushes wisdom development',
      'Opportunity opposition creates conscious choice',
      'Optimism vs. realism integration needed',
      'Blessing friction reveals true priorities',
      'Eclipse opposition balances expansion with grounding',
      'Integration of growth leads to authentic abundance!'
    ]
  },

  'Jupiter-Square': {
    name: 'Solar Eclipse Square Jupiter',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Jupiter represents expansion, growth, and abundance.',
    aspectMeaning: 'Growth CRISIS forces expansion transformation! Opportunity challenge or excess pushes breakthrough through friction. Over-confidence lessons emerge, authentic optimism revealed through difficulty.',
    loveRelationships: 'Love expansion CRISIS forces authentic relationship growth! Romantic excess or opportunity friction catalyzes breakthrough balanced connection. Over-commitment patterns break down through challenge - pushes genuine faith in love.',
    familyHome: 'Family growth CRISIS forces authentic expansion transformation! Domestic excess or opportunity friction catalyzes breakthrough balanced dynamics. Over-extension patterns break down through challenge - pushes genuine family wisdom.',
    businessCareer: 'Career expansion CRISIS forces authentic growth transformation! Professional excess or opportunity friction catalyzes breakthrough balanced success. Over-ambition patterns break down through challenge - pushes aligned achievement.',
    moneyFinances: 'Financial expansion CRISIS forces authentic abundance transformation! Money excess or opportunity friction catalyzes breakthrough balanced prosperity. Over-spending patterns break down through challenge - pushes wise wealth.',
    predictions: [
      'Opportunity crisis FORCES necessary growth wisdom',
      'Excess or over-confidence reveals limiting belief patterns',
      'Growth challenge pushes authentic expansion approach',
      'Opportunity overload creates prioritization wisdom',
      'Faith crisis forces deeper spiritual understanding',
      'Abundance breakdown reveals sustainable prosperity path',
      'Over-extension forces healthy boundary development',
      'Optimism challenge creates realistic hope',
      'Crisis FORCES alignment of growth with truth',
      'Breakdown creates breakthrough in wisdom and abundance!'
    ]
  },

  'Jupiter-Trine': {
    name: 'Solar Eclipse Trine Jupiter',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Jupiter represents expansion, growth, and abundance.',
    aspectMeaning: 'Flowing expansion and abundance transformation! EASY opportunity breakthroughs, effortless blessings. Growth flows naturally, wisdom emerges gracefully, optimism and faith align harmoniously.',
    loveRelationships: 'Natural love expansion flows effortlessly! Romantic blessing and relationship growth happen smoothly. Faith in love increases with ease. Abundant joyful connection emerges gracefully.',
    familyHome: 'Natural family blessing flows effortlessly! Home expansion and domestic abundance happen smoothly. Family wisdom increases with ease. Joyful harmonious growth emerges gracefully.',
    businessCareer: 'Natural career expansion flows effortlessly! Professional opportunity and success happen smoothly. Work wisdom increases with ease. Abundant purposeful achievement emerges gracefully.',
    moneyFinances: 'Natural financial expansion flows effortlessly! Money blessing and prosperity happen smoothly. Abundance consciousness increases with ease. Wealth and generosity emerge gracefully.',
    predictions: [
      'Opportunity breakthrough arrives effortlessly at perfect timing',
      'Blessing and abundance flow smoothly with ease',
      'Growth emerges naturally without struggle',
      'Wisdom opportunity appears gracefully',
      'Faith and optimism increase naturally',
      'Financial expansion flows with ease',
      'Learning or travel opportunity emerges naturally',
      'Generosity and joy flow gracefully',
      'Eclipse trine = GIFT of effortless expansion and blessing',
      'Growth evolution flows naturally!'
    ]
  },

  'Jupiter-Sextile': {
    name: 'Solar Eclipse Sextile Jupiter',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Jupiter represents expansion, growth, and abundance.',
    aspectMeaning: 'Expansion and opportunity through initiative! Growth and abundance openings IF you take optimistic action. Blessing potential requires conscious engagement with faith, wisdom, generosity.',
    loveRelationships: 'Love expansion opportunity through initiative! Romantic growth potential - engage optimistically. Relationship blessing through conscious faith. Take action for love transformation.',
    familyHome: 'Family growth opportunity through initiative! Domestic expansion potential - engage optimistically. Home blessing through conscious effort. Take action for family transformation.',
    businessCareer: 'Career expansion opportunity through initiative! Professional growth potential - engage optimistically. Work blessing through conscious effort. Take action for achievement transformation.',
    moneyFinances: 'Financial expansion opportunity through initiative! Abundance potential - engage optimistically. Prosperity blessing through conscious effort. Take action for wealth transformation.',
    predictions: [
      'Opportunity opening - pursue growth potential',
      'Expansion chance - take initiative actively',
      'Wisdom opportunity - learn consciously',
      'Blessing potential - engage with faith',
      'Abundance opening - pursue optimistically',
      'Travel or education - take conscious action',
      'Growth upgrade - engage deliberately',
      'Generosity opportunity - give actively',
      'Eclipse sextile = OPPORTUNITY through optimistic action',
      'Conscious growth choices activate blessings!'
    ]
  }
,

  // SATURN ECLIPSE ASPECTS
  'Saturn-Conjunction': {
    name: 'Solar Eclipse Conjunction Saturn',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year (MAJOR structure and mastery transformation)',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset, destiny activation, fated endings and beginnings, shadow work, and powerful transformational cycles.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, mastery, limitation, authority, time, commitment, and karmic lessons. It\'s where you build lasting achievement through effort.',
    aspectMeaning: 'Powerful structure and mastery reset! The eclipse conjuncts your Saturn, bringing MAJOR karmic shifts in responsibility, discipline, authority, and long-term commitment. This is a SERIOUS 6-month to 1-year cycle where old limiting structures or responsibilities end while NEW authentic mastery and purposeful discipline emerge. Karmic lessons complete, authority activates, commitment deepens.',
    loveRelationships: 'FATED relationship commitment and maturity transformation! Love becomes serious - commitment deepens or karmic relationship releases. Responsibility in partnership resets, authentic mature love emerges. Lasting love foundation builds or limiting relationship ends.',
    familyHome: 'Family responsibility and home structure transformation! Domestic authority shifts, household commitment resets. Foundation strengthens or old family pattern completes. Mature family dynamics emerge, home stability deepens.',
    businessCareer: 'MAJOR career authority and professional mastery transformation! Leadership responsibility activates or career structure resets. Professional discipline deepens, lasting achievement foundation builds. Karmic work lesson completes, authentic authority emerges.',
    moneyFinances: 'Financial discipline and long-term security transformation! Money responsibility resets, wealth foundation strengthens. Financial maturity deepens, sustainable prosperity structure builds. Karmic money lesson completes, authentic abundance mastery emerges.',
    predictions: [
      'MAJOR responsibility or commitment activates aligned with destiny',
      'Structure or foundation resets - old limitations release',
      'Discipline and mastery deepen significantly',
      'Authority or leadership role manifests',
      'Karmic lesson completes - wisdom earned through effort',
      'Long-term commitment begins or transforms',
      'Limitation releases - authentic boundaries emerge',
      'Time investment in lasting achievement',
      'Eclipse-Saturn conjunction = MASTERY DESTINY ACTIVATION',
      'Your discipline and responsibility align with soul purpose!'
    ]
  },

  'Saturn-Opposition': {
    name: 'Solar Eclipse Opposition Saturn',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset and destiny activation.',
    planet2Energy: 'Saturn represents structure, discipline, responsibility, and mastery.',
    aspectMeaning: 'Structure and responsibility tension requiring integration! Authority dynamics challenge authentic discipline expression. Balance personal mastery with external expectations, integrate freedom with commitment.',
    loveRelationships: 'Relationship commitment tension forces balance between independence and responsibility! Love duty or structure challenges authentic connection. Must integrate personal freedom with partnership commitment, spontaneity with stability.',
    familyHome: 'Family responsibility tension around structure and duty. Home dynamics challenge balance between personal needs and family obligations. Integration of individual freedom with collective responsibility.',
    businessCareer: 'Professional authority tension around discipline and structure. Career responsibility challenges personal vision. Must balance creative freedom with professional duty, innovation with tradition.',
    moneyFinances: 'Financial responsibility tension between security and growth. Money discipline challenged by expansion needs. Integration of caution with opportunity, saving with investing.',
    predictions: [
      'Responsibility tension forces clarity about authentic commitment',
      'Authority challenge reveals true discipline vs. external pressure',
      'Structure dynamics create integration opportunity',
      'Commitment vs. freedom requires conscious balance',
      'Limitation friction pushes boundary wisdom',
      'Duty opposition creates conscious choice',
      'Discipline vs. spontaneity integration needed',
      'Mastery friction reveals true priorities',
      'Eclipse opposition balances structure with flow',
      'Integration of responsibility leads to authentic authority!'
    ]
  },

  'Saturn-Square': {
    name: 'Solar Eclipse Square Saturn',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Saturn represents structure, discipline, and responsibility.',
    aspectMeaning: 'Structure CRISIS forces mastery transformation! Limitation or responsibility challenge pushes breakthrough through friction. Karmic lessons emerge through difficulty, authentic discipline revealed through obstacles.',
    loveRelationships: 'Relationship commitment CRISIS forces authentic maturity transformation! Love responsibility or limitation friction catalyzes breakthrough mature connection. Commitment patterns that limited growth break down through challenge - pushes genuine lasting love.',
    familyHome: 'Family responsibility CRISIS forces authentic structure transformation! Domestic duty or limitation friction catalyzes breakthrough stable foundation. Old obligation patterns break down through challenge - pushes genuine family mastery.',
    businessCareer: 'Career authority CRISIS forces authentic discipline transformation! Professional responsibility or limitation friction catalyzes breakthrough lasting achievement. Old structure patterns break down through challenge - pushes aligned mastery.',
    moneyFinances: 'Financial discipline CRISIS forces authentic security transformation! Money responsibility or limitation friction catalyzes breakthrough sustainable prosperity. Old scarcity patterns break down through challenge - pushes wise abundance.',
    predictions: [
      'Limitation crisis FORCES necessary mastery development',
      'Responsibility challenge reveals outdated structure patterns',
      'Obstacle pushes authentic discipline and perseverance',
      'Authority conflict creates leadership breakthrough',
      'Time pressure forces prioritization wisdom',
      'Commitment breakdown reveals true dedication path',
      'Structure collapse creates stronger foundation',
      'Karmic lesson intensity develops soul strength',
      'Crisis FORCES alignment of discipline with purpose',
      'Breakdown creates breakthrough in mastery and authority!'
    ]
  },

  'Saturn-Trine': {
    name: 'Solar Eclipse Trine Saturn',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Saturn represents structure, discipline, and responsibility.',
    aspectMeaning: 'Flowing structure and mastery transformation! EASY discipline breakthroughs, effortless responsibility alignment. Authority emerges naturally, commitment deepens gracefully, lasting foundation builds harmoniously.',
    loveRelationships: 'Natural relationship commitment flows effortlessly! Love maturity and stability deepen smoothly. Lasting partnership foundation builds with ease. Authentic responsible connection emerges gracefully.',
    familyHome: 'Natural family responsibility flows effortlessly! Home structure and stability strengthen smoothly. Domestic foundation builds with ease. Authentic mature family dynamics emerge gracefully.',
    businessCareer: 'Natural career authority flows effortlessly! Professional discipline and mastery align smoothly. Lasting achievement foundation builds with ease. Authentic leadership and responsibility emerge gracefully.',
    moneyFinances: 'Natural financial discipline flows effortlessly! Money security and stability strengthen smoothly. Wealth foundation builds with ease. Authentic sustainable prosperity emerges gracefully.',
    predictions: [
      'Responsibility breakthrough arrives effortlessly at perfect timing',
      'Structure and discipline flow smoothly with ease',
      'Mastery emerges naturally without struggle',
      'Authority opportunity appears gracefully',
      'Commitment deepens naturally',
      'Foundation strengthens with ease',
      'Discipline upgrade flows naturally',
      'Time investment yields results gracefully',
      'Eclipse trine = GIFT of effortless mastery and structure',
      'Discipline evolution flows naturally!'
    ]
  },

  'Saturn-Sextile': {
    name: 'Solar Eclipse Sextile Saturn',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Saturn represents structure, discipline, and responsibility.',
    aspectMeaning: 'Structure and mastery opportunity through initiative! Discipline and responsibility openings IF you take committed action. Authority potential requires conscious engagement with effort, patience, dedication.',
    loveRelationships: 'Love commitment opportunity through initiative! Relationship maturity potential - engage responsibly. Partnership stability through conscious effort. Take committed action for lasting transformation.',
    familyHome: 'Family responsibility opportunity through initiative! Home structure potential - engage diligently. Domestic stability through conscious effort. Take committed action for foundation transformation.',
    businessCareer: 'Career authority opportunity through initiative! Professional mastery potential - engage disciplined. Work achievement through conscious effort. Take committed action for leadership transformation.',
    moneyFinances: 'Financial discipline opportunity through initiative! Security potential - engage responsibly. Prosperity foundation through conscious effort. Take committed action for wealth transformation.',
    predictions: [
      'Responsibility opportunity - commit consciously',
      'Structure opening - build deliberately',
      'Mastery potential - practice with discipline',
      'Authority opportunity - lead responsibly',
      'Commitment opening - dedicate consciously',
      'Foundation upgrade - invest effort actively',
      'Discipline improvement - engage persistently',
      'Time investment - plan strategically',
      'Eclipse sextile = OPPORTUNITY through disciplined action',
      'Conscious commitment choices build lasting success!'
    ]
  },

  // NEPTUNE ECLIPSE ASPECTS
  'Neptune-Conjunction': {
    name: 'Solar Eclipse Conjunction Neptune',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year (MAJOR spiritual and creative transformation)',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset, destiny activation, fated endings and beginnings, shadow work, and powerful transformational cycles.',
    planet2Energy: 'Neptune represents spirituality, dreams, illusion, compassion, creativity, transcendence, divine connection, imagination, and dissolution of boundaries. It\'s where you connect with the infinite.',
    aspectMeaning: 'Powerful spiritual and creative reset! The eclipse conjuncts your Neptune, bringing MAJOR karmic shifts in spirituality, creativity, compassion, and divine connection. This is a MYSTICAL 6-month to 1-year cycle where old illusions or spiritual patterns dissolve while NEW authentic divine alignment and creative inspiration emerge. Spiritual awakening intensifies, compassion deepens, artistic vision activates.',
    loveRelationships: 'FATED spiritual love and divine romantic connection! Relationship transcends to soul level - unconditional love awakens or karmic illusion dissolves. Compassionate authentic love emerges, spiritual partnership manifests or fantasy releases. Divine romantic destiny activates.',
    familyHome: 'Family compassion and home spiritual transformation! Domestic environment becomes sacred space, family forgiveness deepens. Healing ancestral patterns, spiritual connection in family emerges. Home becomes sanctuary of peace and creativity.',
    businessCareer: 'MAJOR creative career and spiritual work transformation! Artistic expression or healing profession activates. Work becomes spiritual mission, creative vision manifests professionally. Compassionate service or artistic destiny emerges.',
    moneyFinances: 'Financial spirituality and abundance consciousness transformation! Money relationship becomes spiritual practice, prosperity flows through giving. Financial illusions dissolve, authentic divine abundance trust emerges. Wealth through creative or healing work.',
    predictions: [
      'MAJOR spiritual awakening or divine connection deepens',
      'Creative inspiration or artistic vision activates powerfully',
      'Illusion dissolves - truth revealed through spiritual clarity',
      'Compassion and forgiveness capacity expands significantly',
      'Dream life intensifies - subconscious messages emerge',
      'Psychic sensitivity or intuition strengthens',
      'Healing or artistic expression manifests',
      'Addiction or escapism pattern releases',
      'Eclipse-Neptune conjunction = DIVINE AWAKENING RESET',
      'Your spirit and creativity align with soul purpose!'
    ]
  },

  'Neptune-Opposition': {
    name: 'Solar Eclipse Opposition Neptune',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset and destiny activation.',
    planet2Energy: 'Neptune represents spirituality, dreams, illusion, compassion, and creativity.',
    aspectMeaning: 'Spiritual and reality tension requiring integration! Illusion dynamics challenge authentic clarity expression. Balance divine connection with practical grounding, integrate compassion with boundaries, dreams with reality.',
    loveRelationships: 'Relationship illusion tension forces balance between fantasy and reality! Love idealization or spiritual connection challenges authentic needs. Must integrate divine romance with practical partnership, compassion with healthy boundaries.',
    familyHome: 'Family compassion tension around reality and fantasy. Home dynamics challenge balance between spiritual ideals and practical needs. Integration of divine family vision with realistic expectations.',
    businessCareer: 'Professional creativity tension around vision and practicality. Career spirituality challenges material success. Must balance artistic dreams with professional reality, inspiration with discipline.',
    moneyFinances: 'Financial spirituality tension between divine trust and practical security. Money idealism challenged by material needs. Integration of abundance faith with wise resource management.',
    predictions: [
      'Illusion tension forces clarity about truth vs. fantasy',
      'Spiritual challenge reveals authentic connection vs. escapism',
      'Compassion dynamics create boundary opportunity',
      'Dreams vs. reality requires conscious integration',
      'Creativity friction pushes practical manifestation',
      'Confusion opposition creates clarity through navigation',
      'Faith vs. doubt integration needed',
      'Artistic vision meets practical constraints consciously',
      'Eclipse opposition balances spirituality with grounding',
      'Integration of divine leads to authentic transcendence!'
    ]
  },

  'Neptune-Square': {
    name: 'Solar Eclipse Square Neptune',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Neptune represents spirituality, dreams, and illusion.',
    aspectMeaning: 'Spiritual CRISIS forces transcendence transformation! Illusion or confusion challenge pushes breakthrough through friction. Deception lessons emerge, authentic divine connection revealed through difficulty, creative chaos catalyzes clarity.',
    loveRelationships: 'Love illusion CRISIS forces authentic spiritual connection! Romantic deception or fantasy friction catalyzes breakthrough honest divine love. Idealization patterns that limited truth break down through challenge - pushes genuine compassionate intimacy.',
    familyHome: 'Family illusion CRISIS forces authentic compassion transformation! Domestic confusion or deception friction catalyzes breakthrough healing boundaries. Old martyr patterns break down through challenge - pushes genuine spiritual family connection.',
    businessCareer: 'Career confusion CRISIS forces authentic creative transformation! Professional illusion or chaos friction catalyzes breakthrough inspired work. Old escapism patterns break down through challenge - pushes aligned spiritual service.',
    moneyFinances: 'Financial confusion CRISIS forces authentic abundance transformation! Money illusion or chaos friction catalyzes breakthrough spiritual prosperity. Old scarcity consciousness breaks down through challenge - pushes divine wealth trust.',
    predictions: [
      'Illusion crisis FORCES spiritual clarity and truth',
      'Deception or confusion reveals authentic divine path',
      'Escapism challenge pushes healthy spiritual practice',
      'Creative chaos catalyzes inspired breakthrough',
      'Addiction or fantasy breakdown creates healing',
      'Confusion dissolves through surrender and faith',
      'Boundaries emerge from compassion fatigue',
      'Victim pattern releases through empowerment',
      'Crisis FORCES alignment of spirit with truth',
      'Breakdown creates breakthrough in divine connection!'
    ]
  },

  'Neptune-Trine': {
    name: 'Solar Eclipse Trine Neptune',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Neptune represents spirituality, dreams, and creativity.',
    aspectMeaning: 'Flowing spiritual and creative transformation! EASY divine connection breakthroughs, effortless inspiration. Compassion flows naturally, artistic expression emerges gracefully, transcendence happens harmoniously.',
    loveRelationships: 'Natural spiritual love flows effortlessly! Divine romantic connection and soul mate energy manifest smoothly. Compassionate unconditional love deepens with ease. Authentic transcendent intimacy emerges gracefully.',
    familyHome: 'Natural family compassion flows effortlessly! Home spiritual energy and healing atmosphere manifest smoothly. Divine family connection deepens with ease. Authentic peaceful sanctuary emerges gracefully.',
    businessCareer: 'Natural creative career flows effortlessly! Artistic expression and spiritual work align smoothly. Inspired professional vision manifests with ease. Authentic healing or creative service emerges gracefully.',
    moneyFinances: 'Natural financial spirituality flows effortlessly! Divine abundance trust and prosperity consciousness manifest smoothly. Money flows through giving with ease. Authentic spiritual wealth emerges gracefully.',
    predictions: [
      'Spiritual breakthrough arrives effortlessly at perfect timing',
      'Creative inspiration flows smoothly with ease',
      'Divine connection deepens naturally without effort',
      'Compassion and forgiveness emerge gracefully',
      'Artistic expression manifests naturally',
      'Dreams and intuition flow with clarity',
      'Healing energy increases naturally',
      'Transcendent experience emerges gracefully',
      'Eclipse trine = GIFT of effortless divine connection',
      'Spiritual evolution flows naturally!'
    ]
  },

  'Neptune-Sextile': {
    name: 'Solar Eclipse Sextile Neptune',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Neptune represents spirituality, dreams, and creativity.',
    aspectMeaning: 'Spiritual and creative opportunity through initiative! Divine connection and inspiration openings IF you take faithful action. Transcendence potential requires conscious engagement with meditation, creativity, compassion.',
    loveRelationships: 'Love spirituality opportunity through initiative! Divine romantic potential - engage compassionately. Soul connection through conscious faith. Take spiritual action for love transformation.',
    familyHome: 'Family compassion opportunity through initiative! Home spiritual potential - engage lovingly. Healing atmosphere through conscious effort. Take compassionate action for family transformation.',
    businessCareer: 'Career creativity opportunity through initiative! Spiritual work potential - engage inspired. Artistic expression through conscious effort. Take creative action for professional transformation.',
    moneyFinances: 'Financial spirituality opportunity through initiative! Divine abundance potential - engage trustingly. Prosperity consciousness through conscious effort. Take faithful action for wealth transformation.',
    predictions: [
      'Spiritual opportunity - meditate and connect consciously',
      'Creative opening - express artistically',
      'Divine potential - engage with faith actively',
      'Compassion opportunity - forgive consciously',
      'Healing opening - pursue spiritual practice',
      'Artistic upgrade - create deliberately',
      'Intuition development - trust inner guidance',
      'Dream work - engage subconscious actively',
      'Eclipse sextile = OPPORTUNITY through spiritual action',
      'Conscious divine choices activate transcendence!'
    ]
  },

  // PLUTO ECLIPSE ASPECTS
  'Pluto-Conjunction': {
    name: 'Solar Eclipse Conjunction Pluto',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year (MAJOR transformation and power transformation)',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset, destiny activation, fated endings and beginnings, shadow work, and powerful transformational cycles.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, shadow work, intensity, regeneration, soul evolution, and phoenix rising from ashes. It\'s where you experience total metamorphosis.',
    aspectMeaning: 'INTENSE transformation and power reset! The eclipse conjuncts your Pluto, bringing MAJOR karmic shifts in personal power, shadow integration, and soul evolution. This is a PROFOUND 6-month to 1-year cycle of death-rebirth where old identity or power patterns completely dissolve while NEW authentic empowered self emerges from the ashes. Total transformation, shadow work intensifies, phoenix rising activates.',
    loveRelationships: 'FATED transformational love and soul-level intimacy! Relationship undergoes complete death-rebirth - obsessive patterns release or profound soul connection forms. Sexual power transforms, emotional depth intensifies. Karmic love completes or transformational partnership begins. Total relationship metamorphosis.',
    familyHome: 'Family power dynamics and ancestral transformation! Deep family secrets surface or generational patterns heal completely. Domestic power shifts dramatically, home undergoes total transformation. Shadow family work intensifies, profound healing or empowerment emerges.',
    businessCareer: 'MAJOR career power and professional transformation! Complete professional metamorphosis - old career dies, NEW empowered work rises. Leadership power activates, influence expands profoundly. Career becomes soul mission, transformational work emerges.',
    moneyFinances: 'Financial transformation and wealth power reset! Money relationship completely transforms - scarcity consciousness dies, abundance empowerment rises. Shared resources or inheritance, financial power increases profoundly. Total prosperity metamorphosis.',
    predictions: [
      'TOTAL transformation - old self dies, NEW empowered self emerges',
      'Shadow work intensifies - hidden patterns surface for healing',
      'Personal power activates - claim authentic authority',
      'Death-rebirth cycle in major life area',
      'Obsession or control pattern releases through awareness',
      'Soul evolution accelerates profoundly',
      'Phoenix rising - emerge stronger from crisis',
      'Shared resources or inheritance manifests',
      'Eclipse-Pluto conjunction = SOUL METAMORPHOSIS RESET',
      'Your power and transformation align with soul purpose!'
    ]
  },

  'Pluto-Opposition': {
    name: 'Solar Eclipse Opposition Pluto',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset and destiny activation.',
    planet2Energy: 'Pluto represents transformation, power, death-rebirth, and shadow work.',
    aspectMeaning: 'Power and transformation tension requiring integration! Control dynamics challenge authentic empowerment expression. Balance personal power with partnership transformation, integrate shadow with light, death with rebirth.',
    loveRelationships: 'Relationship power tension forces balance between control and surrender! Love intensity or transformation challenges authentic intimacy. Must integrate personal empowerment with partnership depth, independence with soul-level merging.',
    familyHome: 'Family power tension around control and transformation. Home dynamics challenge balance between personal authority and collective evolution. Integration of individual shadow work with family healing.',
    businessCareer: 'Professional power tension around authority and transformation. Career control challenges collaborative empowerment. Must balance personal influence with shared power, ambition with collective evolution.',
    moneyFinances: 'Financial power tension between personal wealth and shared resources. Money control challenged by partnership needs. Integration of individual prosperity with joint transformation.',
    predictions: [
      'Power tension forces clarity about authentic authority vs. control',
      'Transformation challenge reveals shadow patterns needing integration',
      'Control dynamics create empowerment opportunity',
      'Death-rebirth vs. security requires conscious balance',
      'Intensity friction pushes healthy power expression',
      'Shadow opposition creates awareness through mirror',
      'Obsession vs. freedom integration needed',
      'Power struggle reveals true empowerment path',
      'Eclipse opposition balances transformation with stability',
      'Integration of power leads to authentic metamorphosis!'
    ]
  },

  'Pluto-Square': {
    name: 'Solar Eclipse Square Pluto',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Pluto represents transformation, power, and death-rebirth.',
    aspectMeaning: 'Transformation CRISIS forces power metamorphosis! Intense challenge or crisis pushes breakthrough through destruction-recreation. Shadow lessons emerge intensely, authentic power revealed through complete breakdown, phoenix rising through fire.',
    loveRelationships: 'Love transformation CRISIS forces authentic intimacy metamorphosis! Relationship intensity or power struggle friction catalyzes breakthrough soul-level connection. Control patterns that limited depth break down through crisis - pushes genuine transformational love.',
    familyHome: 'Family power CRISIS forces authentic shadow transformation! Domestic intensity or control friction catalyzes breakthrough healing empowerment. Old family secrets or patterns break down through crisis - pushes genuine ancestral healing.',
    businessCareer: 'Career power CRISIS forces authentic professional transformation! Work intensity or authority friction catalyzes breakthrough empowered leadership. Old control patterns break down through crisis - pushes aligned soul work.',
    moneyFinances: 'Financial transformation CRISIS forces authentic wealth metamorphosis! Money intensity or power friction catalyzes breakthrough empowered prosperity. Old scarcity consciousness breaks down through crisis - pushes profound abundance transformation.',
    predictions: [
      'Crisis FORCES total transformation and power reclamation',
      'Breakdown reveals shadow patterns requiring integration',
      'Power struggle pushes authentic authority development',
      'Death-rebirth intensity creates profound evolution',
      'Control crisis forces surrender and empowerment',
      'Destruction clears path for complete regeneration',
      'Shadow work intensity brings deep healing',
      'Obsession breakdown creates healthy boundaries',
      'Crisis FORCES soul-level metamorphosis',
      'Total breakdown creates phoenix breakthrough!'
    ]
  },

  'Pluto-Trine': {
    name: 'Solar Eclipse Trine Pluto',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Pluto represents transformation, power, and death-rebirth.',
    aspectMeaning: 'Flowing transformation and power evolution! EASY metamorphosis breakthroughs, effortless empowerment. Shadow integration flows naturally, regeneration emerges gracefully, phoenix rising happens harmoniously.',
    loveRelationships: 'Natural transformational love flows effortlessly! Soul-level intimacy and relationship depth deepen smoothly. Sexual empowerment and emotional intensity align with ease. Authentic transformational connection emerges gracefully.',
    familyHome: 'Natural family transformation flows effortlessly! Ancestral healing and power shifts happen smoothly. Deep family connection and shadow integration unfold with ease. Authentic empowered family dynamics emerge gracefully.',
    businessCareer: 'Natural career transformation flows effortlessly! Professional power and leadership authority align smoothly. Soul work and transformational influence manifest with ease. Authentic empowered purpose emerges gracefully.',
    moneyFinances: 'Natural financial transformation flows effortlessly! Wealth empowerment and shared resource blessing align smoothly. Money power and abundance consciousness deepen with ease. Authentic prosperous metamorphosis emerges gracefully.',
    predictions: [
      'Transformation breakthrough arrives effortlessly at perfect timing',
      'Power and empowerment flow smoothly with ease',
      'Shadow integration happens naturally without struggle',
      'Death-rebirth cycle flows gracefully',
      'Personal authority emerges naturally',
      'Regeneration and healing flow with ease',
      'Soul evolution accelerates naturally',
      'Phoenix rising emerges gracefully',
      'Eclipse trine = GIFT of effortless transformation',
      'Metamorphosis evolution flows naturally!'
    ]
  },

  'Pluto-Sextile': {
    name: 'Solar Eclipse Sextile Pluto',
    frequency: 'Occurs during eclipses',
    duration: '6 months to 1 year',
    planet1Energy: 'Solar Eclipse represents MAJOR karmic reset.',
    planet2Energy: 'Pluto represents transformation, power, and death-rebirth.',
    aspectMeaning: 'Transformation and power opportunity through initiative! Metamorphosis and empowerment openings IF you take deep action. Phoenix potential requires conscious engagement with shadow work, intensity, regeneration.',
    loveRelationships: 'Love transformation opportunity through initiative! Soul intimacy potential - engage deeply. Relationship empowerment through conscious shadow work. Take transformational action for love metamorphosis.',
    familyHome: 'Family transformation opportunity through initiative! Ancestral healing potential - engage courageously. Home empowerment through conscious shadow work. Take deep action for family metamorphosis.',
    businessCareer: 'Career transformation opportunity through initiative! Professional power potential - engage strategically. Work empowerment through conscious evolution. Take deep action for career metamorphosis.',
    moneyFinances: 'Financial transformation opportunity through initiative! Wealth power potential - engage wisely. Prosperity empowerment through conscious evolution. Take deep action for money metamorphosis.',
    predictions: [
      'Transformation opportunity - embrace change consciously',
      'Power opening - claim authority actively',
      'Shadow work potential - integrate consciously',
      'Death-rebirth opportunity - let go deliberately',
      'Empowerment upgrade - develop strength actively',
      'Regeneration opening - heal deeply',
      'Soul evolution - transform consciously',
      'Phoenix potential - rise deliberately',
      'Eclipse sextile = OPPORTUNITY through transformational action',
      'Conscious deep choices activate metamorphosis!'
    ]
  }
};
