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
  }
,

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
