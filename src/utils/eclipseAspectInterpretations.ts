// Eclipse Aspect Interpretations - When a Solar or Lunar Eclipse aspects a planet

export interface EclipseAspectInterpretation {
  title: string;
  description: string;
  themes: string[];
  manifestations: string[];
  duration: string;
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
  // MERCURY ECLIPSE ASPECTS
  'Mercury-Conjunction': {
    title: 'Solar Eclipse Conjunction Mercury',
    description: 'Powerful mental and communication reset! The eclipse conjuncts your Mercury, bringing karmic shifts in thinking, communication, learning, and perception. This is a MAJOR 6-month to 1-year cycle of mental transformation. Old thought patterns, communication styles, or learning approaches end while NEW purposeful mental clarity emerges. Fated conversations, breakthrough insights, or significant communication events happen now.',
    themes: [
      'Mental reset and communication transformation',
      'Karmic shifts in thinking and perception',
      'Fated conversations or important communications',
      'Breakthrough insights and mental clarity',
      'End of old thought patterns, birth of new understanding'
    ],
    manifestations: [
      'MAJOR communication breakthrough or transformation in how you think/speak',
      'Fated conversation or news that changes your mental perspective permanently',
      'Learning or educational opportunity aligned with karmic path',
      'Decision or mental clarity about important life direction',
      'Communication project, writing, or teaching mission begins or transforms',
      'Technology, information, or connection shift aligns with destiny',
      'Mental release of old limiting beliefs - NEW empowered thinking emerges',
      'Karmic message, insight, or information revealed at perfect timing'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (until next eclipse in same sign family)'
  },

  'Mercury-Opposition': {
    title: 'Solar Eclipse Opposition Mercury',
    description: 'Mental and communication tension requiring integration! The eclipse opposes your Mercury, creating karmic pressure between old and new thinking, familiar and destined communication styles. This 6-month cycle challenges you to balance inner truth with outer expression, integrate shadow mental patterns, and communicate authentically despite discomfort.',
    themes: [
      'Mental tension between old and new perspectives',
      'Communication challenges requiring authentic expression',
      'Integration of shadow thinking patterns',
      'Balancing inner truth with outer communication',
      'Relationship or partnership communication transformation'
    ],
    manifestations: [
      'Communication challenge forces you to speak authentic truth vs. comfortable words',
      'Mental tension reveals what you truly think vs. what you habitually express',
      'Partnership or relationship conversation requires vulnerable honest communication',
      'Information or news creates mental conflict requiring conscious integration',
      'Learning challenge: integrate opposing viewpoints or contradictory information',
      'Decision between familiar thinking and uncomfortable but necessary new perspective',
      'Shadow mental pattern revealed through external communication challenge',
      'Authentic expression emerges through communication friction or misunderstanding'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (tension requires conscious integration)'
  },

  'Mercury-Square': {
    title: 'Solar Eclipse Square Mercury',
    description: 'Mental crisis and communication breakthrough! The eclipse squares your Mercury, forcing transformation through mental friction, communication challenges, or information crisis. This difficult but powerful 6-month cycle pushes you OUT of mental comfort zone into necessary growth. Old thinking breaks down, uncomfortable truths emerge, and breakthrough understanding comes through challenge.',
    themes: [
      'Mental crisis forcing transformation',
      'Communication breakdown leading to breakthrough',
      'Uncomfortable truths and necessary mental friction',
      'Growth through mental or communication challenge',
      'Karmic push out of thinking comfort zone'
    ],
    manifestations: [
      'Communication breakdown or misunderstanding FORCES necessary mental transformation',
      'Information crisis or mental challenge reveals limiting thought patterns',
      'Difficult conversation or news pushes you into uncomfortable but needed growth',
      'Learning challenge or mental friction forces development of new skills/understanding',
      'Technology or communication system breakdown requires new approach',
      'Decision crisis: old thinking insufficient, must develop new mental framework',
      'Uncomfortable truth revealed through challenging communication or information',
      'Mental breakthrough emerges through friction, crisis, or communication difficulty'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (crisis catalyzes breakthrough)'
  },

  'Mercury-Trine': {
    title: 'Solar Eclipse Trine Mercury',
    description: 'Flowing mental and communication transformation! The eclipse trines your Mercury, bringing EASY karmic shifts in thinking, natural communication breakthroughs, and effortless mental clarity. This fortunate 6-month cycle supports smooth integration of new ideas, harmonious communication, and graceful mental evolution aligned with destiny.',
    themes: [
      'Effortless mental transformation and clarity',
      'Smooth communication breakthroughs',
      'Natural integration of new ideas and perspectives',
      'Harmonious learning and mental growth',
      'Graceful thinking evolution aligned with purpose'
    ],
    manifestations: [
      'Natural mental breakthrough or insight arrives effortlessly at perfect timing',
      'Communication flows smoothly - important conversations happen with ease and grace',
      'Learning opportunity appears naturally, education aligned with karmic path',
      'Information or message arrives easily, providing needed mental clarity',
      'Writing, speaking, or teaching flows naturally - communication gifts emerge',
      'Technology or connection upgrade happens smoothly, supporting mental growth',
      'Mental clarity about life direction emerges naturally without struggle',
      'Fated conversation or intellectual connection happens gracefully and harmoniously'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (transformation flows naturally)'
  },

  'Mercury-Sextile': {
    title: 'Solar Eclipse Sextile Mercury',
    description: 'Mental and communication opportunity through initiative! The eclipse sextiles your Mercury, offering karmic opportunities for thinking transformation IF you take action. This 6-month cycle presents openings for communication growth, learning advancement, and mental clarity - but requires conscious engagement and effort to manifest.',
    themes: [
      'Communication opportunities through conscious effort',
      'Mental growth potential requiring initiative',
      'Learning and thinking advancement through action',
      'Karmic openings in communication and information',
      'Breakthrough available through conscious engagement'
    ],
    manifestations: [
      'Communication opportunity appears - take initiative to engage and transformation happens',
      'Learning or educational opening presents itself - act on it for mental growth',
      'Important conversation or networking opportunity - pursue it consciously',
      'Information or insight available - actively seek it out for breakthrough',
      'Writing, speaking, or teaching opportunity - take action to manifest it',
      'Technology or communication tool becomes available - use it for advancement',
      'Mental clarity possible through conscious questioning and active thinking',
      'Partnership or connection opportunity for communication growth - engage deliberately'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (opportunity requires conscious action)'
  },

  // VENUS ECLIPSE ASPECTS
  'Venus-Conjunction': {
    title: 'Solar Eclipse Conjunction Venus',
    description: 'Powerful love and values reset! The eclipse conjuncts your Venus, bringing karmic shifts in relationships, values, money, pleasure, and aesthetics. This is a MAJOR 6-month to 1-year cycle of heart transformation. Old relationship patterns, value systems, or financial approaches end while NEW purposeful love and abundance emerges. Fated romantic encounters or significant value shifts happen now.',
    themes: [
      'Love and relationship reset',
      'Values and worth transformation',
      'Financial and abundance shifts',
      'Pleasure and aesthetic evolution',
      'Karmic relationship or money events'
    ],
    manifestations: [
      'MAJOR relationship beginning, ending, or transformation aligned with karmic path',
      'Fated romantic encounter or love connection that changes life direction',
      'Values shift dramatically - what you desire or find beautiful transforms',
      'Financial breakthrough, opportunity, or reset in money approach',
      'Creative or aesthetic project begins aligned with soul purpose',
      'Self-worth transformation - release old limiting value patterns',
      'Relationship pattern ends, NEW healthy love dynamic emerges',
      'Money or resources align with authentic values and destined path'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (until next eclipse in same sign family)'
  },

  'Venus-Opposition': {
    title: 'Solar Eclipse Opposition Venus',
    description: 'Love and values tension requiring integration! The eclipse opposes your Venus, creating karmic pressure in relationships, values, or finances. This 6-month cycle challenges you to balance self-love with partnership, integrate shadow relationship patterns, and align values with authentic purpose despite external pressure.',
    themes: [
      'Relationship tension between self and other',
      'Values conflict requiring integration',
      'Financial balance challenges',
      'Partnership or marriage transformation pressure',
      'Shadow love patterns revealed for healing'
    ],
    manifestations: [
      'Relationship challenge forces balance between your needs and partner\'s needs',
      'Partnership tension reveals what you truly value vs. what you compromise',
      'Financial conflict: self-worth vs. external validation or material security',
      'Romantic opposition: familiar love pattern vs. uncomfortable but authentic connection',
      'Values challenged by external relationship or financial situation',
      'Shadow desire or attachment revealed through partnership friction',
      'Marriage or committed relationship: integration of individual vs. couple values',
      'Authentic love emerges through relationship tension or values conflict'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (tension requires conscious integration)'
  },

  'Venus-Square': {
    title: 'Solar Eclipse Square Venus',
    description: 'Love crisis and values breakthrough! The eclipse squares your Venus, forcing transformation through relationship challenges, financial friction, or values crisis. This difficult but powerful 6-month cycle pushes you OUT of love and money comfort zones into necessary growth. Old relationship patterns break down, uncomfortable heart truths emerge, breakthrough love comes through challenge.',
    themes: [
      'Relationship crisis forcing growth',
      'Financial challenges catalyzing values shift',
      'Love friction breaking limiting patterns',
      'Values crisis revealing authentic desires',
      'Karmic push out of relationship comfort zone'
    ],
    manifestations: [
      'Relationship challenge or crisis FORCES necessary love pattern transformation',
      'Financial difficulty or money crisis reveals limiting abundance beliefs',
      'Romantic friction pushes you beyond comfortable but unfulfilling love patterns',
      'Values conflict forces clarification of authentic desires vs. conditioned wants',
      'Partnership breakdown or tension catalyzes breakthrough in self-worth',
      'Creative or aesthetic challenge pushes development of authentic expression',
      'Money or resource limitation forces alignment with true values',
      'Love breakthrough emerges through relationship difficulty or values friction'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (crisis catalyzes breakthrough)'
  },

  'Venus-Trine': {
    title: 'Solar Eclipse Trine Venus',
    description: 'Flowing love and values transformation! The eclipse trines your Venus, bringing EASY karmic shifts in relationships, natural financial blessings, and effortless heart opening. This fortunate 6-month cycle supports smooth love evolution, harmonious relationship growth, and graceful values alignment with destiny.',
    themes: [
      'Effortless love transformation and heart opening',
      'Natural financial blessings and abundance flow',
      'Smooth relationship evolution and harmony',
      'Graceful values alignment with purpose',
      'Easy creative and aesthetic breakthroughs'
    ],
    manifestations: [
      'Natural romantic connection or relationship deepening flows effortlessly',
      'Financial opportunity or money blessing arrives easily at perfect timing',
      'Love evolution happens smoothly - heart opening without struggle or drama',
      'Values naturally align with authentic purpose and soul desires',
      'Creative or artistic breakthrough emerges gracefully and harmoniously',
      'Self-worth upgrade happens naturally - you feel deserving without effort',
      'Partnership or relationship harmony increases smoothly and naturally',
      'Abundance and pleasure flow easily - you attract what you truly value'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (transformation flows naturally)'
  },

  'Venus-Sextile': {
    title: 'Solar Eclipse Sextile Venus',
    description: 'Love and values opportunity through initiative! The eclipse sextiles your Venus, offering karmic opportunities for relationship growth, financial advancement IF you take action. This 6-month cycle presents openings for love transformation, creative expression, values alignment - but requires conscious engagement and heart-centered effort.',
    themes: [
      'Romantic opportunities through conscious effort',
      'Financial growth potential requiring initiative',
      'Creative advancement through action',
      'Values alignment openings needing engagement',
      'Love breakthrough available through participation'
    ],
    manifestations: [
      'Romantic opportunity appears - take initiative for love connection to manifest',
      'Financial or creative opening presents itself - act on it for abundance growth',
      'Social or networking opportunity for relationship expansion - pursue it',
      'Artistic or aesthetic inspiration available - actively create to manifest it',
      'Partnership potential visible - engage deliberately for relationship depth',
      'Values clarification opportunity - consciously reflect on authentic desires',
      'Self-worth upgrade possible through conscious affirmation and action',
      'Pleasure or beauty enhancement available - actively choose what you truly value'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (opportunity requires conscious action)'
  },

  // MARS ECLIPSE ASPECTS
  'Mars-Conjunction': {
    title: 'Solar Eclipse Conjunction Mars',
    description: 'Powerful action and drive reset! The eclipse conjuncts your Mars, bringing karmic shifts in initiative, energy, desire, anger, and assertion. This is a MAJOR 6-month to 1-year cycle of will transformation. Old action patterns, anger expressions, or drive directions end while NEW purposeful empowered action emerges. Fated action opportunities or significant energy shifts happen now.',
    themes: [
      'Action and initiative reset',
      'Energy and drive transformation',
      'Desire and passion realignment',
      'Anger and assertion evolution',
      'Karmic action events or opportunities'
    ],
    manifestations: [
      'MAJOR action opportunity or initiative aligned with karmic mission begins',
      'Energy and vitality surge directed toward destined path and purpose',
      'Desire transformation - what you want and pursue shifts dramatically',
      'Anger or conflict catalyzes necessary assertion and boundary-setting',
      'Physical or athletic breakthrough aligned with body\'s authentic power',
      'Sexual energy or passion realigns with soul purpose and authentic desire',
      'Old passive or aggressive pattern ends - NEW balanced assertion emerges',
      'Karmic action taken at perfect timing - decisive move changes life direction'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (until next eclipse in same sign family)'
  },

  'Mars-Opposition': {
    title: 'Solar Eclipse Opposition Mars',
    description: 'Action and assertion tension requiring integration! The eclipse opposes your Mars, creating karmic pressure around initiative, conflict, desire, and energy. This 6-month cycle challenges you to balance self-assertion with cooperation, integrate shadow anger, and take action aligned with purpose despite external opposition.',
    themes: [
      'Action tension between self and others',
      'Conflict requiring balanced assertion',
      'Energy management challenges',
      'Desire vs. relationship dynamics',
      'Shadow anger revealed for integration'
    ],
    manifestations: [
      'Conflict or opposition forces clarification of authentic desires vs. people-pleasing',
      'Partnership tension reveals when to assert vs. when to cooperate',
      'Energy conflict: your drive vs. external demands or others\' needs',
      'Sexual or passionate tension requiring honest communication and boundaries',
      'Anger or frustration revealed through relationship or partnership friction',
      'Action opposition: must balance independent initiative with collaborative effort',
      'Shadow aggression or passivity revealed through external conflict',
      'Authentic assertion emerges through navigating opposition or confrontation'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (tension requires conscious integration)'
  },

  'Mars-Square': {
    title: 'Solar Eclipse Square Mars',
    description: 'Action crisis and drive breakthrough! The eclipse squares your Mars, forcing transformation through conflict, energy challenges, or initiative friction. This difficult but powerful 6-month cycle pushes you OUT of action comfort zone into necessary empowerment. Old passive or aggressive patterns break down, uncomfortable anger emerges, breakthrough assertion comes through challenge.',
    themes: [
      'Action crisis forcing empowerment',
      'Conflict catalyzing assertion breakthrough',
      'Energy challenges revealing true drive',
      'Frustration friction breaking limiting patterns',
      'Karmic push into courageous action'
    ],
    manifestations: [
      'Conflict or challenge FORCES necessary assertion and boundary-setting',
      'Energy crisis or frustration reveals limiting action patterns and passive tendencies',
      'Confrontation pushes you beyond comfortable avoidance into necessary action',
      'Desire friction forces clarification of authentic wants vs. conditioned drives',
      'Physical or athletic challenge catalyzes empowerment and strength development',
      'Anger or rage emerges through friction - must be channeled into constructive action',
      'Initiative blocked or challenged - forces development of strategic empowered approach',
      'Action breakthrough emerges through crisis, conflict, or energetic friction'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (crisis catalyzes breakthrough)'
  },

  'Mars-Trine': {
    title: 'Solar Eclipse Trine Mars',
    description: 'Flowing action and drive transformation! The eclipse trines your Mars, bringing EASY karmic shifts in initiative, natural energy surges, and effortless empowerment. This fortunate 6-month cycle supports smooth action alignment, harmonious drive expression, and graceful assertion evolution with destiny.',
    themes: [
      'Effortless action and initiative flow',
      'Natural energy and vitality surge',
      'Smooth drive and desire alignment',
      'Graceful assertion and empowerment',
      'Easy physical and athletic breakthroughs'
    ],
    manifestations: [
      'Natural action opportunity or initiative arrives effortlessly at perfect timing',
      'Energy and vitality surge smoothly - physical power and drive increase naturally',
      'Action flows harmoniously - what you do aligns easily with what you want',
      'Desire and passion naturally align with authentic purpose and soul mission',
      'Assertion happens gracefully - boundaries set smoothly without conflict',
      'Physical or athletic achievement comes naturally through aligned effort',
      'Sexual energy or passion flows harmoniously toward authentic fulfillment',
      'Empowerment emerges naturally - you feel capable and assertive without struggle'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (transformation flows naturally)'
  },

  'Mars-Sextile': {
    title: 'Solar Eclipse Sextile Mars',
    description: 'Action and drive opportunity through initiative! The eclipse sextiles your Mars, offering karmic opportunities for empowerment, energy advancement IF you take action. This 6-month cycle presents openings for assertive growth, physical achievement, desire fulfillment - but requires conscious engagement and courageous effort.',
    themes: [
      'Action opportunities through conscious effort',
      'Energy and drive potential requiring initiative',
      'Physical advancement through engagement',
      'Assertion openings needing courage',
      'Empowerment available through participation'
    ],
    manifestations: [
      'Action opportunity appears - take initiative and empowerment manifests',
      'Physical or athletic opening presents itself - engage actively for achievement',
      'Conflict or challenge opportunity - assert yourself consciously for growth',
      'Energy available for important initiative - channel it deliberately toward goals',
      'Desire fulfillment possible - take courageous action toward what you want',
      'Sexual or passionate opportunity - engage authentically for satisfaction',
      'Assertion potential visible - speak up or set boundaries deliberately',
      'Empowerment upgrade possible through conscious courageous action and effort'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (opportunity requires conscious action)'
  },

  // JUPITER ECLIPSE ASPECTS
  'Jupiter-Conjunction': {
    title: 'Solar Eclipse Conjunction Jupiter',
    description: 'MASSIVE expansion and opportunity reset! The eclipse conjuncts your Jupiter, bringing karmic shifts in growth, abundance, faith, and wisdom. This is a MAJOR 6-month to 1-year cycle of philosophical and spiritual transformation. Old belief systems or expansion approaches end while NEW purposeful growth and abundance emerges. Fated opportunities or life-changing expansion happens now.',
    themes: [
      'Expansion and growth reset',
      'Belief and philosophy transformation',
      'Abundance and opportunity surge',
      'Wisdom and meaning realignment',
      'Karmic expansion or travel events'
    ],
    manifestations: [
      'MAJOR opportunity or expansion aligned with life purpose and karmic mission',
      'Belief system transformation - old faith patterns end, NEW wisdom emerges',
      'Travel, education, or international opportunity changes life direction',
      'Financial or career expansion breakthrough aligned with authentic abundance',
      'Philosophical or spiritual awakening - meaning and purpose clarify dramatically',
      'Teaching, publishing, or sharing wisdom opportunity manifests at perfect timing',
      'Optimism and faith renewed - you see possibilities where before saw limitation',
      'Karmic blessing or lucky break opens doors to destined expansion path'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (until next eclipse in same sign family)'
  },

  'Jupiter-Opposition': {
    title: 'Solar Eclipse Opposition Jupiter',
    description: 'Expansion and belief tension requiring integration! The eclipse opposes your Jupiter, creating karmic pressure around growth, faith, and abundance. This 6-month cycle challenges you to balance optimism with realism, integrate shadow beliefs, and expand authentically despite external limitations or opposing philosophies.',
    themes: [
      'Growth tension between vision and reality',
      'Belief conflict requiring integration',
      'Abundance vs. limitation dynamics',
      'Philosophy vs. practical challenges',
      'Shadow optimism or excess revealed'
    ],
    manifestations: [
      'Expansion challenge forces balance between optimistic vision and realistic limits',
      'Belief tension reveals authentic faith vs. conditioned or excessive optimism',
      'Opportunity opposition: must integrate abundant possibility with practical constraints',
      'Philosophical conflict with partner, teacher, or authority about meaning and truth',
      'Travel or education tension: desire to expand vs. practical or relational limitations',
      'Financial abundance vs. partnership or relationship resource dynamics',
      'Shadow excess or overconfidence revealed through external opposition or feedback',
      'Authentic growth emerges through integrating expansion desire with grounded reality'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (tension requires conscious integration)'
  },

  'Jupiter-Square': {
    title: 'Solar Eclipse Square Jupiter',
    description: 'Expansion crisis and growth breakthrough! The eclipse squares your Jupiter, forcing transformation through opportunity challenges, belief friction, or expansion obstacles. This difficult but powerful 6-month cycle pushes you OUT of growth comfort zone into necessary wisdom development. Excessive optimism breaks down, uncomfortable truths about beliefs emerge, breakthrough faith comes through challenge.',
    themes: [
      'Expansion crisis forcing wisdom',
      'Opportunity challenges catalyzing growth',
      'Belief friction revealing authentic faith',
      'Excess or overconfidence breakdown',
      'Karmic push toward grounded expansion'
    ],
    manifestations: [
      'Opportunity challenge or expansion obstacle FORCES necessary growth strategy refinement',
      'Belief crisis reveals limiting or excessive faith patterns - must develop grounded wisdom',
      'Travel, education, or expansion plan hits friction - pushes realistic strategic approach',
      'Financial or career growth challenge forces clarification of authentic abundance path',
      'Philosophical friction or meaning crisis catalyzes deeper truth and purpose seeking',
      'Overconfidence or excess breaks down through challenge - humility and wisdom emerge',
      'Teaching or sharing wisdom challenged - forces development of authentic expertise',
      'Growth breakthrough emerges through crisis, opportunity friction, or belief challenge'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (crisis catalyzes breakthrough)'
  },

  'Jupiter-Trine': {
    title: 'Solar Eclipse Trine Jupiter',
    description: 'Flowing expansion and abundant transformation! The eclipse trines your Jupiter, bringing EASY karmic shifts in opportunity, natural growth surges, and effortless abundance. This extremely fortunate 6-month cycle supports smooth expansion, harmonious belief evolution, and graceful wisdom alignment with destiny. MAJOR BLESSINGS FLOW NATURALLY!',
    themes: [
      'Effortless expansion and opportunity flow',
      'Natural abundance and blessings surge',
      'Smooth growth and wisdom alignment',
      'Graceful belief and philosophy evolution',
      'Easy travel, education, spiritual breakthroughs'
    ],
    manifestations: [
      'Natural opportunity or expansion arrives effortlessly - doors open at perfect timing',
      'Abundance and blessings flow smoothly - financial or career growth happens naturally',
      'Belief evolution happens gracefully - wisdom and meaning deepen without crisis',
      'Travel or educational opportunity appears easily, perfectly aligned with purpose',
      'Teaching, publishing, or sharing wisdom flows naturally - your message reaches others',
      'Optimism and faith naturally increase - you see possibilities and act on them easily',
      'Spiritual or philosophical breakthrough emerges gracefully through synchronicity',
      'Lucky breaks and karmic blessings manifest smoothly - you\'re in the flow of abundance'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (transformation flows naturally with MAJOR BLESSINGS)'
  },

  'Jupiter-Sextile': {
    title: 'Solar Eclipse Sextile Jupiter',
    description: 'Expansion and opportunity through initiative! The eclipse sextiles your Jupiter, offering karmic opportunities for growth, abundance advancement IF you take action. This 6-month cycle presents openings for expansion, wisdom development, belief alignment - but requires conscious engagement and optimistic effort to manifest blessings.',
    themes: [
      'Growth opportunities through conscious effort',
      'Abundance potential requiring initiative',
      'Expansion advancement through engagement',
      'Wisdom openings needing pursuit',
      'Blessings available through participation'
    ],
    manifestations: [
      'Opportunity appears - take initiative and expansion manifests abundantly',
      'Travel or educational opening presents itself - pursue it for growth and wisdom',
      'Financial or career expansion potential - engage strategically for abundance',
      'Teaching or publishing opportunity available - act on it to share your wisdom',
      'Belief or philosophical exploration opening - consciously seek truth and meaning',
      'Network or connection opportunity for growth - pursue relationships deliberately',
      'Spiritual or higher learning potential visible - engage actively for breakthrough',
      'Abundance upgrade possible through conscious optimism, faith, and strategic action'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (opportunity requires conscious action)'
  },

  // SATURN ECLIPSE ASPECTS
  'Saturn-Conjunction': {
    title: 'Solar Eclipse Conjunction Saturn',
    description: 'MAJOR responsibility and structure reset! The eclipse conjuncts your Saturn, bringing karmic shifts in discipline, commitment, authority, and mastery. This is a SERIOUS 6-month to 1-year cycle of maturation and restructuring. Old limitations, responsibilities, or fear patterns end while NEW purposeful structure and mastery emerges. Fated commitments or significant authority events happen now.',
    themes: [
      'Responsibility and structure reset',
      'Discipline and commitment transformation',
      'Authority and mastery realignment',
      'Limitation and fear pattern release',
      'Karmic maturation or achievement events'
    ],
    manifestations: [
      'MAJOR responsibility or commitment aligned with life purpose and karmic mission',
      'Career achievement or professional recognition for sustained disciplined effort',
      'Authority role or leadership position manifests through demonstrated mastery',
      'Structure or limitation ends - NEW mature empowered framework emerges',
      'Fear pattern confronted and mastered - authentic confidence through discipline',
      'Long-term goal or ambition crystallizes - commitment to purposeful achievement',
      'Father, mentor, or authority figure relationship transforms significantly',
      'Karmic maturation - you step into adult responsibility and authentic authority'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (until next eclipse in same sign family)'
  },

  'Saturn-Opposition': {
    title: 'Solar Eclipse Opposition Saturn',
    description: 'Responsibility and structure tension requiring integration! The eclipse opposes your Saturn, creating karmic pressure around commitment, authority, and discipline. This 6-month cycle challenges you to balance freedom with responsibility, integrate shadow limitations, and commit authentically despite external pressure or conflicting duties.',
    themes: [
      'Responsibility tension between self and duty',
      'Authority conflict requiring balance',
      'Commitment vs. freedom dynamics',
      'Structure vs. spontaneity challenges',
      'Shadow fear or limitation revealed'
    ],
    manifestations: [
      'Commitment challenge forces balance between personal freedom and relationship/career duty',
      'Authority tension reveals authentic responsibility vs. external pressure or obligation',
      'Structure opposition: your discipline vs. others\' demands or partnership limitations',
      'Career or relationship commitment tension requiring conscious choice and boundaries',
      'Father figure or authority relationship conflict catalyzes independent maturity',
      'Limitation or fear revealed through external challenge or partnership constraint',
      'Shadow inadequacy or overcompensation revealed through opposition or feedback',
      'Authentic commitment emerges through navigating responsibility tension and duty conflict'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (tension requires conscious integration)'
  },

  'Saturn-Square': {
    title: 'Solar Eclipse Square Saturn',
    description: 'Structure crisis and mastery breakthrough! The eclipse squares your Saturn, forcing transformation through limitation challenges, responsibility friction, or fear confrontation. This difficult but empowering 6-month cycle pushes you OUT of comfort zone into necessary maturation. Old structures break down, uncomfortable fears emerge, breakthrough mastery comes through crisis.',
    themes: [
      'Structure crisis forcing growth',
      'Limitation challenges catalyzing mastery',
      'Responsibility friction revealing strength',
      'Fear confrontation breaking patterns',
      'Karmic push toward mature empowerment'
    ],
    manifestations: [
      'Limitation or obstacle FORCES necessary discipline, strategy, and mature approach',
      'Responsibility crisis reveals capacity for commitment and authentic authority',
      'Career or achievement challenge pushes development of real mastery and expertise',
      'Fear confrontation through difficult situation - must face it to break through',
      'Structure breakdown or failure forces rebuilding on solid purposeful foundation',
      'Authority challenge or conflict catalyzes independent mature decision-making',
      'Commitment test or pressure reveals authentic dedication vs. obligation',
      'Mastery breakthrough emerges through crisis, limitation, or responsibility friction'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (crisis catalyzes breakthrough)'
  },

  'Saturn-Trine': {
    title: 'Solar Eclipse Trine Saturn',
    description: 'Flowing structure and mastery transformation! The eclipse trines your Saturn, bringing EASY karmic shifts in responsibility, natural achievement recognition, and effortless discipline alignment. This fortunate 6-month cycle supports smooth commitment, harmonious authority development, and graceful maturation with destiny.',
    themes: [
      'Effortless achievement and mastery flow',
      'Natural responsibility and commitment ease',
      'Smooth discipline and structure alignment',
      'Graceful authority and leadership emergence',
      'Easy career and professional breakthroughs'
    ],
    manifestations: [
      'Natural career achievement or recognition arrives effortlessly through sustained effort',
      'Responsibility or commitment flows smoothly - duty aligns easily with purpose',
      'Discipline happens gracefully - structure and routine naturally support goals',
      'Authority or leadership role manifests naturally through demonstrated competence',
      'Long-term goal achievement comes smoothly through persistent aligned effort',
      'Limitation transforms into strength naturally - you mature through grace not crisis',
      'Father figure or mentor relationship flows harmoniously and supportively',
      'Mastery emerges naturally - you feel capable, responsible, and authoritative with ease'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (transformation flows naturally)'
  },

  'Saturn-Sextile': {
    title: 'Solar Eclipse Sextile Saturn',
    description: 'Structure and mastery opportunity through initiative! The eclipse sextiles your Saturn, offering karmic opportunities for achievement, commitment advancement IF you take disciplined action. This 6-month cycle presents openings for career growth, responsibility development, mastery alignment - but requires conscious sustained effort.',
    themes: [
      'Achievement opportunities through discipline',
      'Career advancement potential requiring effort',
      'Mastery development through commitment',
      'Responsibility openings needing engagement',
      'Authority available through demonstration'
    ],
    manifestations: [
      'Career opportunity appears - take disciplined action and achievement manifests',
      'Responsibility or leadership opening presents itself - commit actively for authority',
      'Professional advancement potential - engage strategically with sustained effort',
      'Mastery development opportunity available - practice deliberately for expertise',
      'Commitment potential visible - choose consciously and honor responsibility',
      'Structure or system improvement opening - implement disciplined approach',
      'Mentor or authority guidance available - seek it deliberately for growth',
      'Achievement upgrade possible through conscious discipline, commitment, and work'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (opportunity requires conscious action)'
  },

  // URANUS ECLIPSE ASPECTS
  'Uranus-Conjunction': {
    title: 'Solar Eclipse Conjunction Uranus',
    description: 'REVOLUTIONARY awakening and liberation reset! The eclipse conjuncts your Uranus, bringing SUDDEN karmic shifts in freedom, authenticity, innovation, and breakthrough. This is a RADICAL 6-month to 1-year cycle of liberation and awakening. Old limiting structures or patterns SHATTER while NEW revolutionary authentic self emerges SUDDENLY. Unexpected breakthroughs or life-changing disruptions happen now!',
    themes: [
      'Revolutionary awakening and liberation',
      'Sudden breakthrough and innovation surge',
      'Authenticity and individuality explosion',
      'Freedom and independence transformation',
      'Karmic disruption or unexpected breakthrough'
    ],
    manifestations: [
      'SUDDEN unexpected breakthrough or opportunity aligned with authentic purpose',
      'Revolutionary change or disruption shatters old limiting patterns INSTANTLY',
      'Awakening to true authentic self - liberation from conditioned false identity',
      'Technology, innovation, or progressive opportunity manifests unexpectedly',
      'Freedom surge - break free from relationship, career, or pattern that limited you',
      'Unexpected insight or realization changes life direction dramatically and suddenly',
      'Rebellious authentic expression emerges - you claim radical individuality',
      'Karmic liberation - sudden release from old karma through unexpected event'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (SUDDEN transformation, lasting liberation)'
  },

  'Uranus-Opposition': {
    title: 'Solar Eclipse Opposition Uranus',
    description: 'Freedom and authenticity tension requiring integration! The eclipse opposes your Uranus, creating karmic pressure around independence, change, and innovation. This 6-month cycle challenges you to balance freedom with relationship, integrate rebellious energy, and awaken authentically despite external stability pressure.',
    themes: [
      'Freedom tension between self and others',
      'Independence vs. commitment dynamics',
      'Change vs. stability conflict',
      'Authenticity vs. conformity challenges',
      'Rebellious energy requiring integration'
    ],
    manifestations: [
      'Freedom challenge forces balance between independence and relationship/commitment',
      'Change tension reveals authentic needs vs. external stability or others\' resistance',
      'Innovation opposition: your breakthrough ideas vs. traditional or conservative pressure',
      'Relationship or partnership tension around freedom, space, and individuality needs',
      'Sudden disruption from external source forces conscious choice about liberation',
      'Rebellious urge vs. social expectation - must integrate authentic self with community',
      'Technology or progressive change meets resistance - navigate consciously',
      'Authentic awakening emerges through navigating freedom tension and change conflict'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (tension requires conscious integration)'
  },

  'Uranus-Square': {
    title: 'Solar Eclipse Square Uranus',
    description: 'Breakthrough crisis and liberation through disruption! The eclipse squares your Uranus, forcing transformation through SUDDEN challenges, unexpected friction, or revolutionary pressure. This intense 6-month cycle pushes you OUT of false security into necessary authentic freedom. Structures break down SUDDENLY, uncomfortable awakenings emerge, breakthrough liberation comes through disruption.',
    themes: [
      'Breakthrough crisis through disruption',
      'Sudden challenges forcing liberation',
      'Revolutionary friction catalyzing change',
      'Unexpected events breaking patterns',
      'Karmic push into radical authenticity'
    ],
    manifestations: [
      'SUDDEN disruption or unexpected challenge FORCES necessary liberation and awakening',
      'Structure or stability breaks down unexpectedly - pushes you into authentic freedom',
      'Revolutionary friction or conflict catalyzes breakthrough innovation or change',
      'Technology or system failure forces rapid adaptation and progressive solution',
      'Relationship or commitment sudden crisis reveals need for freedom or authenticity',
      'Unexpected event or shock awakens you to truth you\'ve been avoiding',
      'Rebellious breakthrough through crisis - you claim freedom despite discomfort',
      'Liberation emerges through disruption, sudden challenge, or unexpected friction'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (crisis catalyzes breakthrough)'
  },

  'Uranus-Trine': {
    title: 'Solar Eclipse Trine Uranus',
    description: 'Flowing breakthrough and liberation transformation! The eclipse trines your Uranus, bringing EASY karmic shifts in freedom, natural innovation surges, and effortless authentic awakening. This fortunate 6-month cycle supports smooth liberation, harmonious breakthrough, and graceful independence with destiny. EXCITING POSITIVE CHANGES FLOW NATURALLY!',
    themes: [
      'Effortless breakthrough and innovation flow',
      'Natural freedom and liberation surge',
      'Smooth authenticity and awakening',
      'Graceful independence and change',
      'Easy technology and progressive opportunities'
    ],
    manifestations: [
      'Natural breakthrough or innovation arrives effortlessly - exciting change flows smoothly',
      'Freedom and liberation increase naturally without crisis or disruption',
      'Authentic self-expression emerges gracefully - you embody individuality with ease',
      'Technology or progressive opportunity appears naturally at perfect timing',
      'Change happens smoothly - life evolves excitingly toward greater freedom',
      'Independence and relationship balance naturally - freedom within connection',
      'Awakening or realization flows harmoniously - truth revealed gently and clearly',
      'Liberation emerges naturally - you feel free, authentic, and innovative with ease'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (transformation flows naturally with EXCITEMENT)'
  },

  'Uranus-Sextile': {
    title: 'Solar Eclipse Sextile Uranus',
    description: 'Breakthrough and freedom opportunity through initiative! The eclipse sextiles your Uranus, offering karmic opportunities for liberation, innovation advancement IF you take authentic action. This 6-month cycle presents openings for breakthrough, independence, awakening - but requires conscious engagement and willingness to change.',
    themes: [
      'Breakthrough opportunities through conscious action',
      'Freedom potential requiring initiative',
      'Innovation advancement through engagement',
      'Authenticity openings needing courage',
      'Liberation available through participation'
    ],
    manifestations: [
      'Breakthrough opportunity appears - take initiative and innovation manifests',
      'Freedom or independence opening presents itself - act courageously for liberation',
      'Technology or progressive opportunity available - engage actively for advancement',
      'Authentic expression potential visible - consciously embody true individuality',
      'Change opportunity present - participate deliberately for positive transformation',
      'Community or network innovation opening - contribute progressive ideas actively',
      'Awakening or realization possible through conscious questioning of status quo',
      'Liberation upgrade available through conscious authentic action and change embrace'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (opportunity requires conscious action)'
  },

  // NEPTUNE ECLIPSE ASPECTS
  'Neptune-Conjunction': {
    title: 'Solar Eclipse Conjunction Neptune',
    description: 'MYSTICAL spiritual awakening and transcendence reset! The eclipse conjuncts your Neptune, bringing karmic shifts in spirituality, compassion, creativity, and divine connection. This is a PROFOUND 6-month to 1-year cycle of spiritual transformation. Old illusions or escapist patterns dissolve while NEW divine purpose and spiritual clarity emerges. Mystical experiences or creative breakthroughs happen now!',
    themes: [
      'Spiritual awakening and divine connection',
      'Illusion dissolution and clarity emergence',
      'Compassion and unconditional love surge',
      'Creative and artistic breakthrough',
      'Karmic spiritual or mystical events'
    ],
    manifestations: [
      'PROFOUND spiritual awakening or mystical experience aligned with soul purpose',
      'Creative or artistic breakthrough - divine inspiration flows through you',
      'Illusion dissolves - you see truth with spiritual clarity and compassionate wisdom',
      'Compassion surge - unconditional love and service to others emerges naturally',
      'Psychic or intuitive abilities strengthen - divine guidance becomes clear',
      'Addiction or escapist pattern ends - spiritual path replaces old escape',
      'Dream, vision, or synchronicity reveals karmic purpose with divine clarity',
      'Karmic spiritual mission clarifies - you surrender to divine flow and service'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (until next eclipse in same sign family)'
  },

  'Neptune-Opposition': {
    title: 'Solar Eclipse Opposition Neptune',
    description: 'Spirituality and reality tension requiring integration! The eclipse opposes your Neptune, creating karmic pressure around illusion, compassion, and divine connection. This 6-month cycle challenges you to balance spirituality with practicality, integrate escapist shadows, and serve authentically despite confusion or external disillusionment.',
    themes: [
      'Spirituality tension between ideal and real',
      'Illusion vs. clarity conflict',
      'Compassion vs. boundaries dynamics',
      'Creativity vs. practical challenges',
      'Escapism or confusion revealed'
    ],
    manifestations: [
      'Spiritual challenge forces balance between divine ideal and earthly reality',
      'Illusion tension reveals true spiritual connection vs. escapist fantasy or avoidance',
      'Compassion opposition: your empathy vs. necessary boundaries or self-protection',
      'Relationship or partnership disillusionment requires spiritual discernment',
      'Creative vision vs. practical limitation - must integrate inspiration with reality',
      'Confusion or deception from external source forces clarity and discernment',
      'Addiction or escapist pattern revealed through relationship or external mirror',
      'Authentic spirituality emerges through navigating illusion tension and reality integration'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (tension requires conscious integration)'
  },

  'Neptune-Square': {
    title: 'Solar Eclipse Square Neptune',
    description: 'Spiritual crisis and divine breakthrough through confusion! The eclipse squares your Neptune, forcing transformation through illusion challenges, confusion friction, or spiritual disorientation. This difficult but enlightening 6-month cycle pushes you OUT of escapist comfort into necessary spiritual discernment. Illusions break down, uncomfortable truths about spirituality emerge, breakthrough divine clarity comes through crisis.',
    themes: [
      'Spiritual crisis forcing discernment',
      'Illusion breakdown catalyzing clarity',
      'Confusion friction revealing truth',
      'Escapism or addiction challenges',
      'Karmic push toward grounded spirituality'
    ],
    manifestations: [
      'Illusion or deception FORCES necessary spiritual discernment and reality check',
      'Confusion or disorientation reveals escapist patterns - must develop grounded spirituality',
      'Creative or spiritual vision hits friction - pushes realistic inspired manifestation',
      'Addiction or escapist behavior challenged through crisis - healing path emerges',
      'Relationship or trust betrayal catalyzes spiritual growth and compassionate boundaries',
      'Psychic or intuitive confusion forces development of clear discernment skills',
      'Fantasy or ideal breaks down through challenge - grounded divine connection emerges',
      'Spiritual breakthrough emerges through crisis, confusion friction, or illusion dissolution'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (crisis catalyzes breakthrough)'
  },

  'Neptune-Trine': {
    title: 'Solar Eclipse Trine Neptune',
    description: 'Flowing spiritual and creative transformation! The eclipse trines your Neptune, bringing EASY karmic shifts in divine connection, natural mystical experiences, and effortless compassion flow. This beautiful 6-month cycle supports smooth spiritual awakening, harmonious creative inspiration, and graceful transcendence with destiny. DIVINE GRACE AND INSPIRATION FLOW NATURALLY!',
    themes: [
      'Effortless spiritual awakening and flow',
      'Natural divine connection and grace',
      'Smooth creative inspiration surge',
      'Graceful compassion and service',
      'Easy mystical and psychic breakthroughs'
    ],
    manifestations: [
      'Natural spiritual awakening or mystical experience flows effortlessly and beautifully',
      'Creative or artistic inspiration surges smoothly - divine muse guides your expression',
      'Compassion and unconditional love increase naturally without martyrdom or boundary loss',
      'Psychic or intuitive clarity emerges gracefully - divine guidance becomes clear',
      'Spiritual practice or meditation deepens naturally with ease and divine support',
      'Healing ability or empathic gifts strengthen harmoniously and naturally',
      'Dream, vision, or synchronicity flows beautifully - spiritual messages arrive gently',
      'Divine connection emerges naturally - you feel held by grace, inspired, and spiritually aligned'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (transformation flows naturally with DIVINE GRACE)'
  },

  'Neptune-Sextile': {
    title: 'Solar Eclipse Sextile Neptune',
    description: 'Spiritual and creative opportunity through openness! The eclipse sextiles your Neptune, offering karmic opportunities for divine connection, mystical advancement IF you open spiritually. This 6-month cycle presents openings for spiritual growth, creative inspiration, compassionate service - but requires conscious receptivity and imagination.',
    themes: [
      'Spiritual opportunities through openness',
      'Creative potential requiring imagination',
      'Divine connection advancement through receptivity',
      'Compassion openings needing engagement',
      'Mystical experiences available through practice'
    ],
    manifestations: [
      'Spiritual opportunity appears - open your heart and divine connection deepens',
      'Creative or artistic inspiration opening presents itself - engage imaginatively',
      'Mystical or psychic development potential - practice meditation or spiritual work',
      'Compassionate service opportunity available - act on empathy for meaningful impact',
      'Healing modality or spiritual practice opening - explore it consciously',
      'Dream or intuitive guidance available - pay attention deliberately for clarity',
      'Artistic or musical expression potential visible - create consciously from inspiration',
      'Divine connection upgrade possible through conscious spiritual openness and practice'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (opportunity requires conscious openness)'
  },

  // PLUTO ECLIPSE ASPECTS
  'Pluto-Conjunction': {
    title: 'Solar Eclipse Conjunction Pluto',
    description: 'TOTAL TRANSFORMATION and rebirth reset! The eclipse conjuncts your Pluto, bringing INTENSE karmic shifts in power, death-rebirth, psychological depth, and shadow work. This is an EXTREME 6-month to 1-year cycle of profound metamorphosis. Old self DIES completely while NEW empowered authentic self is REBORN. Life-changing transformation or power events happen now - THIS IS MAJOR!',
    themes: [
      'Death-rebirth and total transformation',
      'Power and empowerment surge',
      'Shadow work and psychological depth',
      'Karmic elimination and renewal',
      'Profound metamorphosis and rebirth'
    ],
    manifestations: [
      'PROFOUND death-rebirth experience - old identity dies, powerful new self emerges',
      'Power surge - you claim authentic personal power aligned with soul purpose',
      'Shadow work breakthrough - unconscious patterns revealed and transformed completely',
      'Psychological transformation - therapy, healing, or crisis catalyzes total rebirth',
      'Karmic debt or pattern ELIMINATED - you are freed from old soul contract',
      'Sexual or intimate transformation - deep vulnerability and power integration',
      'Financial or resource transformation - inheritance, debt release, or power shift',
      'You become INSTRUMENT OF TRANSFORMATION - powerful purposeful impact on world'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (INTENSE transformation, complete rebirth)'
  },

  'Pluto-Opposition': {
    title: 'Solar Eclipse Opposition Pluto',
    description: 'Power and transformation tension requiring integration! The eclipse opposes your Pluto, creating karmic pressure around control, depth, and rebirth. This 6-month cycle challenges you to balance power with surrender, integrate shadow through relationship, and transform authentically despite external power struggles or control dynamics.',
    themes: [
      'Power tension between self and others',
      'Control vs. surrender dynamics',
      'Transformation vs. resistance conflict',
      'Shadow revealed through relationship',
      'Death-rebirth through partnership'
    ],
    manifestations: [
      'Power struggle forces balance between personal control and surrender to process',
      'Transformation tension reveals authentic power vs. manipulation or control patterns',
      'Shadow opposition: your unconscious patterns mirrored through partner or external power',
      'Relationship or partnership death-rebirth - intense transformation through intimacy',
      'Resource or financial power dynamic - must navigate control vs. shared power',
      'Sexual or intimate tension requiring deep vulnerability and psychological honesty',
      'External crisis or power challenge forces shadow work and authentic empowerment',
      'Authentic transformation emerges through navigating power tension and control integration'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (tension requires conscious integration)'
  },

  'Pluto-Square': {
    title: 'Solar Eclipse Square Pluto',
    description: 'TRANSFORMATION CRISIS and power breakthrough through intensity! The eclipse squares your Pluto, forcing metamorphosis through EXTREME challenges, power struggles, or psychological crisis. This INTENSE 6-month cycle pushes you through death-rebirth process forcibly. Old self dismantled through crisis, shadow confronted painfully, breakthrough empowerment emerges through destruction and renewal.',
    themes: [
      'Transformation crisis through intensity',
      'Power struggles catalyzing empowerment',
      'Shadow confrontation forcing growth',
      'Death-rebirth through challenge',
      'Karmic elimination through crisis'
    ],
    manifestations: [
      'CRISIS or intense challenge FORCES total transformation and psychological rebirth',
      'Power struggle or control battle reveals shadow patterns - must transform or break',
      'Psychological confrontation or breakdown catalyzes profound therapy and healing',
      'Death experience - literal loss or symbolic ending forces acceptance and renewal',
      'Sexual or intimate crisis pushes deep vulnerability and power integration work',
      'Financial or resource crisis forces elimination of debt, attachment, or control pattern',
      'Obsession or compulsion breaks down through friction - healing and freedom emerge',
      'Empowerment breakthrough emerges through crisis, power struggle, or shadow confrontation'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (INTENSE crisis catalyzes breakthrough)'
  },

  'Pluto-Trine': {
    title: 'Solar Eclipse Trine Pluto',
    description: 'Flowing transformation and empowerment! The eclipse trines your Pluto, bringing EASY karmic shifts in power, natural psychological breakthroughs, and effortless shadow integration. This powerful 6-month cycle supports smooth metamorphosis, harmonious empowerment, and graceful depth work with destiny. PROFOUND TRANSFORMATION FLOWS NATURALLY WITH POWER AND GRACE!',
    themes: [
      'Effortless transformation and rebirth flow',
      'Natural power and empowerment surge',
      'Smooth shadow integration and depth work',
      'Graceful psychological breakthroughs',
      'Easy sexual and intimate deepening'
    ],
    manifestations: [
      'Natural transformation or rebirth flows effortlessly - you evolve with power and grace',
      'Shadow integration happens smoothly - unconscious patterns surface and heal naturally',
      'Power and empowerment increase naturally without struggle or control dynamics',
      'Psychological insight or therapy breakthrough emerges gracefully and profoundly',
      'Sexual or intimate deepening flows harmoniously - vulnerability and power integrate',
      'Financial or resource transformation happens smoothly - inheritance or debt release',
      'Elimination of old patterns occurs naturally - what must die releases gracefully',
      'You become powerful transformative force naturally - authentic impact flows with ease'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (transformation flows naturally with POWER)'
  },

  'Pluto-Sextile': {
    title: 'Solar Eclipse Sextile Pluto',
    description: 'Transformation and power opportunity through depth! The eclipse sextiles your Pluto, offering karmic opportunities for empowerment, psychological advancement IF you engage deeply. This 6-month cycle presents openings for shadow work, power development, profound transformation - but requires conscious courage and psychological engagement.',
    themes: [
      'Transformation opportunities through depth',
      'Power potential requiring courage',
      'Shadow work advancement through engagement',
      'Psychological openings needing honesty',
      'Empowerment available through vulnerability'
    ],
    manifestations: [
      'Transformation opportunity appears - engage deeply and empowerment manifests',
      'Shadow work or therapy opening presents itself - pursue it courageously for healing',
      'Power development potential - act strategically from authentic strength not control',
      'Psychological insight available - consciously explore unconscious patterns for growth',
      'Sexual or intimate deepening opportunity - engage vulnerably for profound connection',
      'Financial or resource transformation potential - make empowered strategic decisions',
      'Crisis or challenge invitation for growth - meet it consciously for breakthrough',
      'Empowerment upgrade possible through conscious depth work, courage, and transformation'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (opportunity requires conscious engagement)'
  },

  // NODES ECLIPSE ASPECTS
  'North Node-Conjunction': {
    title: 'Solar Eclipse Conjunction North Node',
    description: 'ULTIMATE DESTINY ACTIVATION! The eclipse conjuncts your North Node, bringing MAXIMUM karmic alignment with life purpose and soul mission. This is THE MOST IMPORTANT 6-month to 1-year cycle for destiny manifestation. You are LAUNCHED onto your karmic path with cosmic support. Fated events, people, opportunities aligned with your soul\'s highest purpose manifest NOW. This is your DESTINY MOMENT!',
    themes: [
      'Maximum destiny activation and alignment',
      'Soul purpose clarity and manifestation',
      'Karmic mission launch and support',
      'Fated events and people arrival',
      'Life path crystallization and commitment'
    ],
    manifestations: [
      'FATED opportunity, person, or event appears that IS your destiny path',
      'Life purpose becomes crystal clear - you KNOW what you\'re meant to do',
      'Soul mission activates - you begin walking your karmic path with confidence',
      'Destiny-aligned career, relationship, or life direction manifests perfectly',
      'You feel PULLED by fate toward growth, purpose, unfamiliar but right direction',
      'Karmic support appears - doors open, help arrives, universe conspires for you',
      'Growth edge becomes exciting - you embrace unfamiliar with courage and purpose',
      'THIS IS IT - the eclipse that launches you toward your highest potential and destiny!'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (MAXIMUM DESTINY MANIFESTATION)'
  },

  'South Node-Conjunction': {
    title: 'Solar Eclipse Conjunction South Node',
    description: 'MAJOR KARMIC RELEASE AND COMPLETION! The eclipse conjuncts your South Node, bringing powerful endings of old patterns, past-life karma completion, and release of comfortable limitations. This 6-month to 1-year cycle CLEARS old soul debt and familiar patterns that no longer serve. What has been holding you back ENDS now. Completion and release prepare you for destiny ahead.',
    themes: [
      'Karmic completion and release',
      'Past pattern endings and closure',
      'Comfortable limitation release',
      'Soul debt clearing and freedom',
      'Preparation for destiny through release'
    ],
    manifestations: [
      'Major ending or completion of relationship, job, or pattern that kept you stuck',
      'Past-life karma or soul debt CLEARED - you are released from old contract',
      'Comfortable but limiting situation ends - you are freed for growth',
      'Familiar pattern or habit that no longer serves released naturally or through crisis',
      'Relationship, career, or life chapter COMPLETES - closure brings peace and freedom',
      'You let go of expertise, identity, or comfort zone that prevented destiny alignment',
      'Release creates space - what leaves makes room for North Node destiny ahead',
      'Karmic clearing prepares you for soul purpose - endings serve higher evolution'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (MAJOR RELEASE AND COMPLETION)'
  },

  'North Node-Opposition': {
    title: 'Solar Eclipse Opposition North Node (Conjunction South Node)',
    description: 'MAJOR KARMIC RELEASE AND COMPLETION! (This is the same as Eclipse Conjunction South Node) The eclipse opposes your North Node while conjuncting South Node, bringing powerful endings of old patterns, past-life karma completion, and release of comfortable limitations. See South Node-Conjunction interpretation above.',
    themes: [
      'Karmic completion and release',
      'Past pattern endings and closure',
      'Comfortable limitation release',
      'Soul debt clearing and freedom',
      'Preparation for destiny through release'
    ],
    manifestations: [
      'Major ending or completion - see South Node-Conjunction interpretation',
      'Past-life karma cleared - release from old patterns',
      'Comfortable limitations end - freedom for growth',
      'Familiar patterns released for destiny alignment',
      'Closure and completion serve higher evolution'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (MAJOR RELEASE AND COMPLETION)'
  },

  'South Node-Opposition': {
    title: 'Solar Eclipse Opposition South Node (Conjunction North Node)',
    description: 'ULTIMATE DESTINY ACTIVATION! (This is the same as Eclipse Conjunction North Node) The eclipse opposes your South Node while conjuncting North Node, bringing MAXIMUM karmic alignment with life purpose and soul mission. See North Node-Conjunction interpretation above.',
    themes: [
      'Maximum destiny activation and alignment',
      'Soul purpose clarity and manifestation',
      'Karmic mission launch and support',
      'Fated events and people arrival',
      'Life path crystallization and commitment'
    ],
    manifestations: [
      'FATED opportunity manifests - see North Node-Conjunction interpretation',
      'Life purpose crystal clear - destiny path visible',
      'Soul mission activates powerfully',
      'Universe conspires for your highest good',
      'Destiny moment - embrace your karmic path!'
    ],
    duration: 'Eclipse effects: 6 months to 1 year (MAXIMUM DESTINY MANIFESTATION)'
  }
};
