/**
 * Eclipse and Lunation Interpretations
 * Solar Eclipses, New Moons, and Full Moons by zodiac sign
 * Format: Name, Frequency, Duration, Sign Energy, Event Meaning, Life Area Interpretations, 10 Predictions
 */

export interface SolarEclipseInterpretation {
  name: string;
  frequency: string;
  duration: string;
  signEnergy: string;
  eventMeaning: string;
  loveRelationships: string;
  familyHome: string;
  businessCareer: string;
  moneyFinances: string;
  predictions: string[];
}

export interface NewMoonInterpretation {
  name: string;
  frequency: string;
  duration: string;
  signEnergy: string;
  eventMeaning: string;
  loveRelationships: string;
  familyHome: string;
  businessCareer: string;
  moneyFinances: string;
  predictions: string[];
}

export interface FullMoonInterpretation {
  name: string;
  frequency: string;
  duration: string;
  signEnergy: string;
  eventMeaning: string;
  loveRelationships: string;
  familyHome: string;
  businessCareer: string;
  moneyFinances: string;
  predictions: string[];
}

export interface LunarEclipseInterpretation {
  name: string;
  frequency: string;
  duration: string;
  signEnergy: string;
  eventMeaning: string;
  loveRelationships: string;
  familyHome: string;
  businessCareer: string;
  moneyFinances: string;
  predictions: string[];
}

/**
 * Get Solar Eclipse interpretation by sign
 */
export function getSolarEclipseInterpretation(sign: string): SolarEclipseInterpretation | null {
  return SOLAR_ECLIPSES[sign] || null;
}

/**
 * Get New Moon interpretation by sign
 */
export function getNewMoonInterpretation(sign: string): NewMoonInterpretation | null {
  return NEW_MOONS[sign] || null;
}

/**
 * Get Full Moon interpretation by sign
 */
export function getFullMoonInterpretation(sign: string): FullMoonInterpretation | null {
  return FULL_MOONS[sign] || null;
}

/**
 * Get Lunar Eclipse interpretation by sign
 */
export function getLunarEclipseInterpretation(sign: string): LunarEclipseInterpretation | null {
  return LUNAR_ECLIPSES[sign] || null;
}

// ============================================================================
// SOLAR ECLIPSE INTERPRETATIONS (Sample: Aries, Taurus, Gemini)
// ============================================================================

const SOLAR_ECLIPSES: Record<string, SolarEclipseInterpretation> = {
  'Aries': {
    name: 'Solar Eclipse in Aries',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Aries represents new beginnings, courage, independence, leadership, initiative, passion, and the warrior spirit. It\'s the spark of self-assertion, the drive to be first, and the courage to start fresh.',
    eventMeaning: 'A Solar Eclipse in Aries marks a powerful reset in how you assert yourself and pursue your individual path. This is a cosmic new beginning for your identity, independence, and courage. Old versions of yourself die so bolder ones can emerge. Expect sudden shifts in your sense of self, leadership opportunities, or the courage to break free and start something entirely new. This eclipse says: "Who you were is ending. Who you\'re becoming is braver."',
    loveRelationships: 'Relationships undergo dramatic shifts in power dynamics and independence. You may suddenly realize you\'ve lost yourself in a relationship and reclaim your identity, or meet someone who inspires you to be braver. Single people become more confident and direct in pursuit of love. Existing relationships require renegotiation of independence vs. togetherness. Passionate new beginnings or bold endings likely.',
    familyHome: 'Family dynamics shift as you assert yourself more strongly or break free from family expectations. You may move out suddenly, set new boundaries with family, or take on a leadership role in family matters. Home becomes a place where you can be more authentically yourself. Conflicts with family members who try to control you reach breaking points, leading to healthier dynamics.',
    businessCareer: 'Major career rebirth through bold action and self-assertion. You may start your own business, take on leadership role, switch to more independent career path, or finally pursue what you\'re passionate about. Working for others feels increasingly frustrating - you need autonomy now. Courage to take career risks that have been intimidating you. Identity becomes more tied to what you do independently.',
    moneyFinances: 'Financial independence becomes crucial priority. You may start earning money through self-employment, take financial risks on new ventures, or make bold investment decisions. Dependence on others\' money feels increasingly uncomfortable. Sudden expenses related to new beginnings (starting business, moving, etc.) but also sudden opportunities to earn through your own initiative and courage.',
    predictions: [
      'You will quit job, relationship, or situation where you felt powerless and start fresh',
      'Sudden realization that you\'ve been playing small - confidence surges',
      'New leadership opportunity or role that requires you to be braver than before',
      'Impulsive decision to start business, project, or venture you\'ve been afraid to begin',
      'Relationship ultimatum: you need more independence or it\'s over',
      'Physical appearance change (new haircut, style, fitness routine) symbolizing new identity',
      'Conflict with authority figure leads to you claiming your own authority',
      'Meeting someone who inspires you to be bolder and more authentic',
      'Sudden move or major life change that requires courage and quick action',
      'Ending of old identity and rebirth as more confident, independent version of yourself'
    ]
  },

  'Taurus': {
    name: 'Solar Eclipse in Taurus',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Taurus represents stability, material security, sensory pleasure, values, persistence, patience, and building lasting resources. It\'s the energy of grounding, enjoying physical reality, and creating tangible worth.',
    eventMeaning: 'A Solar Eclipse in Taurus shakes the foundation of your material security, values, and sense of stability. This cosmic reset asks: "What do you truly value? What makes you feel secure?" Sudden changes in finances, possessions, or self-worth force you to rebuild on more authentic ground. Old security structures crumble so you can create real stability based on your true values, not fear or external expectations.',
    loveRelationships: 'Relationship values undergo complete revision. You may suddenly realize you\'ve been settling for less than you deserve, or that you value different qualities in partnership than before. Physical intimacy and sensory connection become more important. You attract or commit to partners who share your true values, not just convenience or habit. Relationships that don\'t provide real security or pleasure end. Those that do deepen significantly.',
    familyHome: 'Home and family security structures transform dramatically. Sudden moves, property purchases or sales, home renovations, or changes in living situation. You may finally buy home you\'ve been saving for, or suddenly need to move due to financial changes. Family money matters come to head - inheritances, shared resources, or financial support issues. Creating home environment that reflects your true values becomes priority.',
    businessCareer: 'Career shifts toward work that provides real financial security and aligns with your values. You may leave stable job that pays well but feels meaningless for work that pays less initially but builds lasting value. Or suddenly realize your skills are worth more and demand appropriate compensation. Starting business related to earth, beauty, food, finance, or tangible products. Career must feel stable and valuable.',
    moneyFinances: 'Major financial reset - sudden windfalls or sudden losses that change your relationship with money. You may receive inheritance, lose job, get significant raise, or have major expense that forces financial restructuring. Your values around money shift completely - what felt worth spending on before no longer does, or vice versa. Building multiple income streams for real security. Investing in tangible assets.',
    predictions: [
      'Sudden job loss or unexpected windfall completely changes your financial situation',
      'You will finally demand the salary/compensation you actually deserve',
      'Major purchase or sale of property, vehicle, or valuable possession',
      'Realization that you\'ve been sacrificing happiness for false security',
      'Investment in yourself (education, business, health) that builds lasting value',
      'Relationship ends because values are incompatible, or deepens through shared values',
      'Unexpected expense forces you to radically change spending habits',
      'Discovery of new income source or talent that can be monetized',
      'Material possessions you thought mattered no longer feel important',
      'Building foundation for long-term financial security through patient, persistent effort'
    ]
  },

  'Gemini': {
    name: 'Solar Eclipse in Gemini',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Gemini represents communication, curiosity, learning, connections, versatility, information exchange, and mental agility. It\'s the energy of questions, conversations, siblings, short trips, and seeing multiple perspectives.',
    eventMeaning: 'A Solar Eclipse in Gemini creates a major reset in how you think, communicate, and gather information. This eclipse says: "What you thought you knew is changing. How you\'ve been communicating isn\'t working anymore." Sudden shifts in education, communication methods, or local environment force you to learn new ways of thinking and expressing yourself. Old mental patterns die so more curious, versatile ones can emerge.',
    loveRelationships: 'Communication in relationships undergoes complete transformation. You may suddenly realize you and partner aren\'t really talking to each other, or discover communication is better than you thought. Need for mental stimulation and interesting conversation becomes crucial. You attract partners who challenge you intellectually or bore easily with partners who don\'t. Relationships require honest, curious dialogue or won\'t survive this eclipse.',
    familyHome: 'Major shifts with siblings, neighbors, or local community. Sibling relationship becomes closer or reaches breaking point. You may move to different neighborhood, or suddenly become very active in local community. Home becomes hub for communication and social connection. Family communication patterns change - secrets revealed, honest conversations finally happen, or you stop talking to family members who won\'t communicate authentically.',
    businessCareer: 'Career shift toward communication, teaching, writing, sales, media, or information-based work. You may go back to school, get certification, start blog or social media presence, or pivot to role requiring more communication skills. Networking becomes crucial for career success. Multiple projects or income streams replace single focus. Career must engage your mind and curiosity or you\'ll get restless.',
    moneyFinances: 'Financial opportunities through communication, teaching, selling, or information sharing. You may monetize your knowledge, start consulting business, earn through writing or speaking, or profit from local business ventures. Multiple small income sources replace or supplement single income. Financial decisions require gathering more information and considering multiple options. Short-term contracts or gig work increases income flexibility.',
    predictions: [
      'Sudden opportunity to teach, write, speak publicly, or share your knowledge',
      'Major shift in relationship with sibling - reconciliation or final break',
      'Back to school for new certification, degree, or skill that opens doors',
      'Local move to different neighborhood or sudden change in community involvement',
      'Communication breakthrough in relationship where you finally understand each other',
      'Starting blog, podcast, YouTube channel, or social media presence that grows quickly',
      'Information you learn or conversation you have completely changes your perspective',
      'Multiple job offers or opportunities requiring you to choose between interesting options',
      'Technology or communication device upgrade that changes how you connect with world',
      'Realization that you need more mental stimulation and variety in daily life'
    ]
  },

  'Cancer': {
    name: 'Solar Eclipse in Cancer',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Cancer represents emotions, nurturing, family, home, roots, security, intuition, and the protective mother energy. It\'s the urge to belong, to care for others, and to create emotional safety.',
    eventMeaning: 'A Solar Eclipse in Cancer creates major reset in emotional life, family dynamics, and sense of home and belonging. This eclipse asks: "Where do you truly belong? Who is your real family? What makes you feel emotionally safe?" Sudden changes in home situation, family structure, or emotional patterns force you to rebuild security on more authentic emotional foundation. Old ways of nurturing yourself and others end so healthier patterns can emerge.',
    loveRelationships: 'Relationship becomes more emotionally honest or ends due to emotional dishonesty. You may finally express vulnerability you\'ve been hiding, or realize partner can\'t meet your emotional needs. Need for emotional security and family compatibility intensifies. You attract nurturing partners or realize current partner isn\'t capable of true emotional intimacy. Relationships require genuine emotional connection or won\'t survive this eclipse.',
    familyHome: 'Major family transformation - births, deaths, marriages, or separations reshape family structure. You may move to different home, buy or sell property, or completely change living situation. Family secrets surface requiring emotional healing. Relationship with mother or maternal figures reaches crisis and resolution. Some cut ties with toxic family, others heal and deepen family bonds. Home must feel emotionally safe.',
    businessCareer: 'Career shifts toward more nurturing, caring, or family-oriented work. You may leave career that doesn\'t honor work-life balance for one allowing family time. Starting home-based business or family business. Career must feel like you belong and are cared for, not just paid. Some prioritize family over career advancement. Emotional fulfillment matters more than status.',
    moneyFinances: 'Financial changes related to family, home, or emotional security. You may invest in home, receive or give family financial support, or restructure finances to feel more secure. Emotional relationship with money changes - spending on emotional comfort vs. true security. Real estate or family business finances highlighted. Building financial safety net becomes priority.',
    predictions: [
      'Major move or home purchase that changes your entire sense of belonging',
      'Family member\'s life change (birth, death, marriage) reshapes family dynamics',
      'You will finally express emotional needs you\'ve been afraid to voice',
      'Relationship ends because emotional intimacy is impossible or deepens through vulnerability',
      'Mother or maternal figure relationship reaches healing crisis',
      'Discovering where you truly belong - may not be where you thought',
      'Home becomes sanctuary through intentional creation of emotional safety',
      'Family secret revealed that requires emotional processing and healing',
      'Career change prioritizing family and emotional well-being over money or status',
      'Intuition about family or home situation proves absolutely correct - trust your gut'
    ]
  },

  'Leo': {
    name: 'Solar Eclipse in Leo',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Leo represents creativity, self-expression, joy, confidence, recognition, leadership, romance, and the radiant performer. It\'s the urge to shine, to create, to be seen and celebrated for who you truly are.',
    eventMeaning: 'A Solar Eclipse in Leo initiates major rebirth in self-expression, creativity, and how you shine in the world. This eclipse says: "Stop dimming your light. Express who you really are." Sudden opportunities or crises around creative expression, romance, children, or public recognition force you to claim your authentic radiance. Old ways of seeking approval die so you can shine for your own joy, not others\' applause.',
    loveRelationships: 'Romance undergoes dramatic transformation. You may fall suddenly in love with someone who sees and celebrates your authentic self, or realize current relationship doesn\'t allow you to shine. Need for playfulness, passion, and being truly seen intensifies. Some relationships become more joyful and expressive, others end if they require you to dim your light. Love must celebrate who you are.',
    familyHome: 'Children or creative projects become central focus. You may have child, child reaches important milestone, or creative "baby" (business, art, project) is born. Family dynamics shift around recognition and appreciation. You may finally demand to be seen and valued in family, or step into leadership role. Home becomes stage for creative expression and joy.',
    businessCareer: 'Career breakthrough through creative self-expression and authentic leadership. You may finally pursue creative career you\'ve been afraid to attempt, step into leadership role, or go public with talents. Work must allow you to shine and create. Some leave jobs where they\'re invisible for roles where they\'re celebrated. Performance, arts, entertainment, or leadership careers favored. Recognition arrives or you stop needing it.',
    moneyFinances: 'Financial opportunities through creative work, performance, or leadership. You may monetize creative talents, earn through being in spotlight, or profit from taking creative risks. Generosity with money reflects abundance mindset. Some spend on things that bring joy and self-expression. Creative investments or speculative risks highlighted - calculated courage pays off.',
    predictions: [
      'Creative project or performance that puts you in spotlight - ready or not',
      'Romantic relationship that makes you feel truly seen and celebrated',
      'You will stop hiding your talents and let yourself be fully visible',
      'Child or creative "baby" born that changes your life purpose',
      'Recognition or award for creative work or leadership arrives',
      'Decision to pursue creative passion even if it seems risky or impractical',
      'Relationship ends because you can\'t shine in it or deepens through mutual celebration',
      'Discovery of creative talent or form of self-expression you didn\'t know you had',
      'Leadership role thrust upon you that requires confident performance',
      'Joy becomes non-negotiable - you choose what makes you happy over what\'s expected'
    ]
  },

  'Virgo': {
    name: 'Solar Eclipse in Virgo',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Virgo represents service, health, organization, refinement, analysis, practical skill, and the dedicated craftsperson. It\'s the urge to improve, to be useful, to perfect your craft and serve meaningfully.',
    eventMeaning: 'A Solar Eclipse in Virgo creates major reset in health, daily routines, work, and service. This eclipse asks: "How can you serve more meaningfully? Is your body healthy? Are your daily habits supporting or sabotaging you?" Sudden health issues or work changes force you to refine how you care for yourself and contribute to the world. Perfectionism and self-criticism must give way to practical improvement.',
    loveRelationships: 'Relationship becomes more practical and service-oriented or ends due to impracticality. You may focus on daily acts of service showing love, or realize partner doesn\'t contribute equally to relationship work. Need for useful partnership and shared routines intensifies. Some relationships improve through better communication about practical needs, others end if they\'re all romance and no reality. Love shows up in the details.',
    familyHome: 'Home organization and health routines transform. You may completely reorganize living space, establish new health habits, or change daily family routines. Caring for family member\'s health needs or your own health affecting family. Home becomes more functional and efficient. Some downsize or simplify living situation. Daily family life requires better systems and routines.',
    businessCareer: 'Work life undergoes major restructuring for greater efficiency and meaning. You may change jobs to more service-oriented work, perfect your craft through training, or completely reorganize work processes. Health-related careers or skilled trades favored. Your contribution and usefulness must be meaningful. Some leave corporate jobs for hands-on skilled work. Mastery and service matter more than status.',
    moneyFinances: 'Financial improvement through practical skills, efficient systems, and useful service. You may earn more through perfecting craft, offering valuable service, or organizing finances better. Budget and financial routines refined. Health-related expenses or earning through health/service work highlighted. Money comes through being genuinely useful and skilled.',
    predictions: [
      'Health issue that requires you to completely change daily habits and routines',
      'New job or work role focused on service, skill, or helping others',
      'You will organize and refine some area of life that\'s been chaotic',
      'Relationship improves through practical daily acts of service and care',
      'Discovery of health issue that was being ignored - address it now',
      'Perfectionism reaches breaking point - you learn "good enough" is actually good enough',
      'Skill or craft you\'ve been developing reaches level of professional mastery',
      'Daily routine completely restructured for better health and productivity',
      'You quit job or relationship that feels useless or meaningless',
      'Service to others becomes central life purpose - you find meaning through being useful'
    ]
  },

  'Libra': {
    name: 'Solar Eclipse in Libra',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Libra represents partnership, balance, harmony, beauty, fairness, diplomacy, and relating to others. It\'s the urge to connect, to create beauty and peace, to find yourself through relationship with another.',
    eventMeaning: 'A Solar Eclipse in Libra initiates major transformation in relationships, partnerships, and how you relate to others. This eclipse asks: "Are your relationships balanced? Do you know who you are outside of partnership? Is harmony real or just conflict avoidance?" Sudden relationship changes or partnership opportunities force you to find authentic balance between self and other. Codependence or excessive independence must give way to true partnership.',
    loveRelationships: 'Relationship reaches major turning point - commitment, marriage, separation, or complete transformation of dynamics. You may meet significant partner who mirrors your growth needs, or existing relationship requires major rebalancing of power and give-take. Some relationships become more equal and harmonious, others end if fairness is impossible. Partnership must honor both people equally.',
    familyHome: 'Family relationships require rebalancing of fairness and reciprocity. You may finally address unequal family dynamics, or create more harmonious family environment through diplomacy. Home becomes place of beauty and partnership. Some move in with partner or family member. Fairness in shared living situations highlighted. Peace at home requires honest conflict resolution, not avoidance.',
    businessCareer: 'Career shifts toward partnership, collaboration, or beauty/aesthetic work. You may start business partnership, work in relationship-oriented field (counseling, mediation, law), or focus on design and aesthetics. Collaboration becomes more important than solo work. Some leave competitive environments for cooperative ones. Fairness and beauty in work environment matter.',
    moneyFinances: 'Financial partnership or shared resources undergo transformation. You may merge finances with partner, divorce and divide assets, or renegotiate financial fairness in relationship. Business partnerships and financial balance highlighted. Money earned through partnership, beauty/design work, or relationship services. Fair exchange in all financial dealings becomes essential.',
    predictions: [
      'Significant relationship begins, deepens through commitment, or ends - major turning point',
      'You will finally address unfair relationship dynamic you\'ve been tolerating',
      'Business partnership opportunity that requires you to share control and profits',
      'Meeting someone who perfectly mirrors what you need to learn about yourself',
      'Decision point between staying single and independent or committing to partnership',
      'Artistic or design project that expresses your aesthetic vision publicly',
      'Relationship conflict that can\'t be avoided anymore - must be resolved or ended',
      'You discover you\'ve lost yourself in relationship and reclaim your identity',
      'Legal matter or contract negotiation requiring fairness and diplomacy',
      'Balance between independence and partnership finally achieved through honest relating'
    ]
  },

  'Scorpio': {
    name: 'Solar Eclipse in Scorpio',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Scorpio represents transformation, depth, intensity, power, intimacy, shared resources, death and rebirth, and psychological truth. It\'s the urge to merge completely, to transform, to access hidden power.',
    eventMeaning: 'A Solar Eclipse in Scorpio creates profound death and rebirth experience. This eclipse demands: "What must die so you can transform? What truth can you no longer avoid? Where is your real power?" Sudden crisis or transformation in intimacy, shared resources, or psychological patterns forces you to face your shadows and emerge more powerful. Superficiality dies. Authenticity and power are reborn.',
    loveRelationships: 'Relationship reaches point of total transformation or ending. Surface-level connection impossible now - you need deep intimacy, psychological honesty, and powerful merging or nothing. Some relationships deepen through facing shadows together, others end because intimacy isn\'t possible. Sexual and emotional intensity peaks. Possessiveness or power struggles must be transformed into empowerment. All or nothing.',
    familyHome: 'Family secrets, inheritances, or psychological patterns surface powerfully. You may deal with family member\'s death, inheritance, or deep psychological healing of family wounds. Toxic family dynamics reach crisis requiring transformation or cutting ties. Home becomes place of deep transformation and healing. Some move due to major life transition. Power dynamics in family must be addressed.',
    businessCareer: 'Career transformation through accessing your power and depth. You may work in transformative fields (psychology, healing, death/dying, investigation, research, finance). Major career death and rebirth - leaving old career identity completely for more powerful authentic work. Using psychological insight and intensity in work. Power struggles at work reach climax. Your real power emerges.',
    moneyFinances: 'Major financial transformation through shared resources, inheritance, investments, or debt. You may receive inheritance, settle divorce finances, take on or pay off major debt, or transform relationship with money completely. Psychological relationship with money faces transformation. Earning through depth work, transformation services, or managing others\' resources. Financial power dynamics shift dramatically.',
    predictions: [
      'Major life crisis or transformation that completely changes who you are',
      'Inheritance or shared financial matter that transforms your resources',
      'Relationship intensifies to point of total intimacy or complete ending',
      'Deep psychological pattern or family wound finally surfaces for healing',
      'You will access personal power you didn\'t know you had through crisis',
      'Death (literal or metaphorical) of old identity - complete transformation',
      'Sexual intimacy deepens profoundly or reveals relationship isn\'t working',
      'Power struggle reaches breaking point - you claim your power or leave situation',
      'Secret revealed that changes everything you thought you knew',
      'Rebirth after darkness - you emerge from crisis more powerful and authentic'
    ]
  },

  'Sagittarius': {
    name: 'Solar Eclipse in Sagittarius',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Sagittarius represents expansion, philosophy, truth-seeking, adventure, higher education, belief systems, foreign cultures, and the quest for meaning. It\'s the urge to grow beyond limits, seek truth, and find life\'s meaning.',
    eventMeaning: 'A Solar Eclipse in Sagittarius initiates major expansion in consciousness, beliefs, and life philosophy. This eclipse asks: "What do you really believe? What gives your life meaning? Where do you need to grow?" Sudden opportunities for travel, education, or spiritual growth force you to expand beyond current limitations. Old beliefs and restrictions die so you can access greater truth and freedom.',
    loveRelationships: 'Relationship requires shared philosophy, adventure, and room to grow or it ends. You may connect with partner from different culture or background, or existing relationship needs more freedom and adventure. Honesty and philosophical alignment become essential. Some relationships expand through travel and learning together, others end if they\'re too limiting or dishonest. Growth and truth matter most.',
    familyHome: 'Family may scatter geographically or expand culturally. You may move far from family home, family member goes abroad, or family welcomes foreign/different perspectives. Home becomes base for adventures rather than restriction. Family beliefs questioned and expanded. Some leave family religion or philosophy for own truth. Physical or philosophical expansion away from family origins.',
    businessCareer: 'Career expansion through education, international work, teaching, or philosophical pursuits. You may go back to school, start teaching career, work internationally, or pursue work with greater meaning and purpose. Travel for work increases. Career must offer growth, learning, and philosophical alignment. Some leave meaningless work for purpose-driven careers even at lower pay. Truth and expansion required.',
    moneyFinances: 'Financial expansion through education, international ventures, teaching, or philosophical work. You may invest in education, earn through teaching or international business, or take financial risks for growth. Optimistic financial approach - some gamble and win, others overextend. Money earned through sharing wisdom or facilitating growth. Generosity and abundance mindset attract resources.',
    predictions: [
      'Major travel opportunity or relocation that expands your worldview completely',
      'Educational opportunity you\'ve wanted finally becomes available - take it',
      'You will question and possibly abandon belief system you\'ve held your whole life',
      'Meeting someone from completely different background who changes your perspective',
      'Book, teaching, or philosophical insight that transforms your understanding of life',
      'Teaching or publishing opportunity to share your wisdom with wider audience',
      'Relationship requires more freedom and adventure or feels too confining',
      'Risk-taking that pays off through optimism and faith in possibility',
      'Foreign country or culture calls to you strongly - may relocate',
      'Discovery that your life\'s meaning and purpose is bigger than you thought possible'
    ]
  },

  'Capricorn': {
    name: 'Solar Eclipse in Capricorn',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Capricorn represents ambition, achievement, responsibility, structure, authority, mastery, and building lasting legacy. It\'s the urge to climb the mountain, master your craft, and build something that endures.',
    eventMeaning: 'A Solar Eclipse in Capricorn creates major reset in career, public status, and relationship with authority and achievement. This eclipse asks: "What are you building? Are you living up to your responsibilities? What legacy will you leave?" Sudden career changes or encounters with authority force you to step into mature leadership or release need for external validation. Time to build something real that lasts.',
    loveRelationships: 'Relationship becomes more committed and structured or ends due to lack of commitment. You may take serious step like marriage or buying home together, or realize partner isn\'t capable of mature commitment. Responsibility and long-term planning in relationships highlighted. Some choose partners who are more mature and ambitious. Casual relationships feel empty - commitment and building together required.',
    familyHome: 'Family responsibilities intensify or relationship with father/authority figures transforms. You may care for aging parent, step into family leadership role, or finally break free from family authority. Home becomes foundation for public success. Some buy property or make long-term home investment. Family legacy and traditions require attention. Mature responsibility toward family.',
    businessCareer: 'Major career breakthrough, achievement, or transformation in public role. You may get promotion, start serious business, achieve professional recognition, or completely change career path toward greater mastery. Public reputation shifts. Authority figures either support or block you - your response determines outcome. This is time to step into leadership and build legacy work. Mastery and achievement required.',
    moneyFinances: 'Financial achievement through career success, disciplined planning, and building structures. You may receive major raise or bonus, invest in long-term wealth building, or restructure finances for sustainability. Earning through mastery, leadership, or taking responsibility. Some make or lose money through business ventures. Mature financial planning yields results over time.',
    predictions: [
      'Major career promotion, achievement, or recognition of your mastery',
      'You will step into leadership role requiring maturity and responsibility',
      'Relationship commitment like engagement, marriage, or long-term partnership decision',
      'Business launch or career change that requires serious commitment and hard work',
      'Encounter with authority figure who either mentors or tests you significantly',
      'Public visibility increases - your reputation and status shift',
      'Father or authority figure relationship reaches resolution or transformation',
      'You finally commit fully to long-term goal you\'ve been dabbling with',
      'Achievement unlocked through years of disciplined, patient effort',
      'Legacy work begins - building something that will outlast you'
    ]
  },

  'Aquarius': {
    name: 'Solar Eclipse in Aquarius',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Aquarius represents innovation, revolution, community, friendship, humanitarian ideals, individuality, technology, and the future. It\'s the urge to be uniquely yourself while contributing to collective progress.',
    eventMeaning: 'A Solar Eclipse in Aquarius initiates radical awakening to your authentic individuality and social consciousness. This eclipse demands: "Who are you really, beyond all conditioning? What\'s your contribution to collective evolution?" Sudden changes in friendships, community involvement, or personal freedom force you to break free from conformity and embrace your unique genius. Old social masks die so authentic innovation can emerge.',
    loveRelationships: 'Relationship requires authentic individuality and friendship or it ends. You may need more freedom and space in relationship, or attract unconventional partner who celebrates your uniqueness. Traditional relationship structures feel confining - you need partnership that honors individuality. Some relationships become more equal and friendship-based, others end if they require conformity. Freedom and authenticity essential.',
    familyHome: 'Family dynamics shift toward more independence and unconventional arrangements. You may create non-traditional family structure, distance from family expectations, or suddenly embrace family\'s unique qualities. Home becomes hub for community and innovation. Some move to intentional communities or co-housing. Family must accept your authentic individuality. Breaking free from family conformity.',
    businessCareer: 'Career transformation toward innovation, technology, humanitarian work, or independent consulting. You may work in tech, social change, group facilitation, or any field serving collective progress. Traditional career structures feel restrictive - you need autonomy. Networking and community connections open opportunities. Your unique perspective and innovative ideas become valuable. Contribution to larger cause matters.',
    moneyFinances: 'Financial opportunities through innovation, technology, networking, and group endeavors. You may earn through tech work, consulting, teaching innovation, or collaborative projects. Unconventional income sources emerge. Cryptocurrency, innovative investments, or group financial ventures highlighted. Money through being uniquely yourself and contributing to progress. Friendship networks provide resources.',
    predictions: [
      'Sudden awakening to ways you\'ve been conforming instead of being authentic',
      'Friendship that ends due to different values or new friendship with kindred spirit',
      'You will break free from expectation or situation requiring you to be someone you\'re not',
      'Technology or innovation project that lets your genius shine',
      'Community or social cause calls to you strongly - activism or involvement increases',
      'Unconventional relationship or life path choice that honors your uniqueness',
      'Networking connection or group involvement opens unexpected opportunity',
      'Your weird, unique qualities become your greatest strengths and contributions',
      'Need for freedom in relationship or life structure becomes non-negotiable',
      'Vision of future you want to create inspires revolutionary life changes'
    ]
  },

  'Pisces': {
    name: 'Solar Eclipse in Pisces',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Pisces represents spirituality, compassion, imagination, surrender, transcendence, unity, dreams, and dissolution of boundaries. It\'s the urge to merge with something greater, to access infinite compassion and spiritual truth.',
    eventMeaning: 'A Solar Eclipse in Pisces creates profound spiritual awakening and ego dissolution. This eclipse whispers: "Surrender. Let go. Trust something greater than yourself." Sudden spiritual experiences, compassionate callings, or creative inspiration force you to release control and trust the flow. Ego boundaries dissolve. Connection to something infinite and mystical becomes undeniable. Material concerns fade as spiritual reality intensifies.',
    loveRelationships: 'Relationship becomes deeply spiritual and transcendent or ends due to lack of spiritual connection. You may experience soulmate-level union beyond ego, or realize relationship is too worldly and lacks depth. Compassion, forgiveness, and unconditional love required. Some relationships heal through radical forgiveness and letting go. Boundaries dissolve in intimacy - beautiful but requires wisdom. Soul connection essential.',
    familyHome: 'Family healing through compassion, forgiveness, and spiritual perspective. You may forgive family members you\'ve resented, or compassionately distance from toxic family. Home becomes spiritual sanctuary - meditation space, altar, or peaceful retreat. Caring for family member with compassion. Some family secrets surface requiring forgiveness. Spiritual practice at home intensifies. Sacred space needed.',
    businessCareer: 'Career shift toward healing, spirituality, creativity, or compassionate service. You may work in healing arts, spiritual teaching, creative fields, or nonprofit service. Material ambition feels empty - you need meaningful spiritual work. Some leave lucrative careers to serve others or create art. Your intuition and compassion become professional gifts. Purpose over profit.',
    moneyFinances: 'Financial relationship transforms toward trust, flow, and non-attachment. You may experience financial loss teaching non-attachment, or abundance through spiritual work and creative expression. Earning through healing, art, spirituality, or compassionate service. Money anxiety dissolves through spiritual trust. Generosity and tithing increase. Financial miracles possible through faith. Letting go of material grasping.',
    predictions: [
      'Profound spiritual experience or awakening that changes your entire worldview',
      'Creative or artistic inspiration floods through you - channel it into expression',
      'You will forgive someone (possibly yourself) you thought you\'d never forgive',
      'Compassionate service or healing work becomes central life calling',
      'Boundary dissolution in relationship creates transcendent intimacy or confusing merger',
      'Dream or vision provides spiritual guidance or creative direction',
      'Release of attachment to material outcome brings peace and paradoxical abundance',
      'Meditation, spiritual practice, or artistic expression deepens profoundly',
      'You surrender control and trust in divine flow - miracles follow',
      'Connection to something greater than yourself becomes undeniable and life-defining'
    ]
  }
};

// ============================================================================
// NEW MOON INTERPRETATIONS (Sample: Aries, Taurus, Gemini)
// ============================================================================

const NEW_MOONS: Record<string, NewMoonInterpretation> = {
  'Aries': {
    name: 'New Moon in Aries',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Aries represents new beginnings, courage, independence, leadership, initiative, passion, and the warrior spirit. It\'s the spark of self-assertion, the drive to be first, and the courage to start fresh.',
    eventMeaning: 'The New Moon in Aries is the ultimate fresh start of the zodiac year - pure initiating energy for new beginnings in identity and independence. This is your cosmic permission slip to start something new, be braver, and assert yourself more boldly. Plant seeds for who you want to become and what you want to lead. The next two weeks favor bold action, courage, and claiming your independence.',
    loveRelationships: 'Perfect time to make first move romantically, assert needs in existing relationship, or start fresh after breakup. Your confidence is attractive now. Be direct about what you want. Single people should actively pursue dates rather than waiting. Couples benefit from trying new activities together or one partner taking leadership in planning. Passion and spontaneity strengthen bonds.',
    familyHome: 'Good time to assert yourself with family, set new boundaries, or take leadership role in family matters. Start home projects that require initiative and energy. If you\'ve been too passive with family dynamics, speak up now. Good for physically active family activities or starting new family traditions you initiate.',
    businessCareer: 'Ideal timing to start new project, launch business, apply for leadership position, or pitch bold idea. Your initiative and confidence impress others now. Begin new work routines, take on challenging assignment, or assert yourself with boss/clients. Entrepreneurial ventures and self-employed work especially favored. Be the first to volunteer.',
    moneyFinances: 'Start new income stream, investment strategy, or savings plan. Take initiative on financial goals you\'ve been postponing. Good time to ask for raise or negotiate higher rates. Self-employment and independent contracting opportunities arise. Be bold but not reckless with money - calculated risks favored over impulsive ones.',
    predictions: [
      'You will start something new you\'ve been afraid to begin',
      'Confidence surge makes you more attractive and magnetic to others',
      'Bold action at work gets noticed by superiors - volunteer for challenge',
      'First move you make romantically will be well-received',
      'Exercise or fitness routine you start now will stick',
      'Conflict you\'ve been avoiding needs to be addressed directly',
      'Leadership opportunity arises - say yes even if you feel underqualified',
      'Your initiative on project or idea impresses someone important',
      'Impatience leads to quick decision that turns out right',
      'New beginning in how you present yourself to world - fresh image or style'
    ]
  },

  'Taurus': {
    name: 'New Moon in Taurus',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Taurus represents stability, material security, sensory pleasure, values, persistence, patience, and building lasting resources. It\'s the energy of grounding, enjoying physical reality, and creating tangible worth.',
    eventMeaning: 'The New Moon in Taurus is your annual opportunity to plant seeds for material security, financial growth, and pleasure. This grounding energy supports starting anything you want to last and build slowly over time. Set intentions around money, possessions, self-worth, and sensory enjoyment. The next two weeks favor patience, persistence, and practical steps toward tangible goals.',
    loveRelationships: 'Focus on building stable, sensual, pleasure-filled relationship foundation. Good time to deepen commitment, create romantic routines, or enjoy physical intimacy. Plan dates that engage the senses - good food, beautiful settings, physical touch. Discuss shared values and long-term security together. Show love through tangible actions and quality time, not just words.',
    familyHome: 'Perfect timing for home improvements, buying furniture or décor, starting garden, or making home more comfortable and beautiful. Begin saving for home purchase or renovation. Create family routines around meals and comfort. Good for slowly building family financial security through practical planning. Enjoy simple pleasures at home.',
    businessCareer: 'Start projects with long-term value, begin building client base, or lay foundation for business growth. Good time to update skills that increase earning power, ask for raise based on proven value, or start side business related to beauty, food, finance, or tangible products. Focus on quality over quantity in your work.',
    moneyFinances: 'Ideal for starting savings plan, investment strategy, or multiple income streams. Set financial goals you can build toward patiently. Begin budget that allows for both security and pleasure. Good time to assess and increase your self-worth, which directly affects earning potential. Plant seeds for long-term wealth through consistent, practical actions.',
    predictions: [
      'Savings or investment plan you start now builds significant wealth over time',
      'Realization about your true worth leads to asking for more money',
      'Small luxury purchase or sensory pleasure that feels deeply satisfying',
      'Home or garden project begun now creates lasting beauty and comfort',
      'Relationship deepens through simple, consistent quality time together',
      'Discovery of talent or skill that can generate steady income',
      'Commitment to valuing yourself more changes how others treat you',
      'Practical decision about money that provides long-term security',
      'Purchase of quality item that lasts years rather than cheap temporary fix',
      'New routine or habit around food, rest, or pleasure improves health and happiness'
    ]
  },

  'Gemini': {
    name: 'New Moon in Gemini',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Gemini represents communication, curiosity, learning, connections, versatility, information exchange, and mental agility. It\'s the energy of questions, conversations, siblings, short trips, and seeing multiple perspectives.',
    eventMeaning: 'The New Moon in Gemini activates your curiosity, communication, and desire to learn. This is your annual fresh start for education, networking, and information gathering. Set intentions around improving communication skills, learning something new, connecting with others, or starting writing/teaching projects. The next two weeks favor asking questions, having conversations, and staying mentally active and versatile.',
    loveRelationships: 'Focus on communication quality in relationships. Start having deeper conversations, ask partner interesting questions, or plan intellectually stimulating dates. Good time to meet potential partners through social networks, classes, or local events. Keep things light and fun while building mental connection. Variety and curiosity keep romance fresh now.',
    familyHome: 'Great time to improve communication with siblings, neighbors, or local community. Start family group chat, plan regular sibling calls, or organize neighborhood gathering. Good for beginning home office setup, creating reading nook, or making home more conducive to learning and communication. Short family trips or local exploration favored.',
    businessCareer: 'Perfect for starting communication-based projects - blog, newsletter, social media presence, or networking initiative. Begin learning new skills through courses or certifications. Reach out to contacts and build professional network. Good time to pitch ideas, improve presentations, or take on roles requiring communication. Multiple projects and variety keep you engaged.',
    moneyFinances: 'Financial opportunities through communication, teaching, selling, or information sharing. Start consulting work, freelance writing, or teaching side gig. Multiple small income sources more effective than single focus. Research investments and financial strategies - gather information before committing. Short-term contracts or gig work brings flexibility and variety.',
    predictions: [
      'Conversation or piece of information you encounter changes your perspective',
      'Networking connection made now leads to opportunity within weeks',
      'Class, workshop, or learning experience you start opens new doors',
      'Writing, teaching, or speaking project begun now gains traction quickly',
      'Sibling or neighbor relationship improves through better communication',
      'Local short trip or exploration of your area reveals interesting discovery',
      'Social media post or online presence you create gets unexpected response',
      'Multiple options or opportunities arise requiring mental agility to navigate',
      'Book, podcast, or article you discover provides answer you\'ve been seeking',
      'Communication skill you develop now becomes valuable asset in career'
    ]
  },

  'Cancer': {
    name: 'New Moon in Cancer',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Cancer represents emotions, nurturing, family, home, roots, security, intuition, and the protective mother energy. It\'s the urge to belong, to care for others, and to create emotional safety.',
    eventMeaning: 'The New Moon in Cancer is your annual opportunity to plant emotional seeds, deepen family bonds, and create greater sense of belonging and security. Set intentions around emotional healing, family relationships, home improvements, or nurturing yourself and others. The next two weeks favor creating emotional safety, honoring feelings, and building deeper connections.',
    loveRelationships: 'Perfect time to deepen emotional intimacy, express vulnerable feelings, or create more security in relationship. Share emotions you\'ve been holding back. Create nurturing rituals together - cooking, creating cozy home environment, or simply holding each other. If single, attract emotionally available partners by being emotionally honest yourself. Emotional connection and safety deepen.',
    familyHome: 'Excellent timing for home improvements, family gatherings, or emotional healing with family. Start renovations that make home feel more secure and comfortable. Initiate family traditions or healing conversations. Good for nest building - decorating, creating cozy spaces, or simply spending quality time at home. Plant seeds for family you want to create or belong to.',
    businessCareer: 'Start work that involves caring, nurturing, or emotional intelligence. Good time to begin home-based business, work with families or children, or bring more emotional awareness to professional life. Create nurturing work environment. Set boundaries between work and home. Career intentions should include emotional fulfillment, not just financial success.',
    moneyFinances: 'Financial planning around home, family, and security. Start saving for home purchase, family needs, or emergency fund. Invest in what makes you feel emotionally and financially secure. Good time to assess what you truly need vs. emotional spending. Build financial safety net. Money intentions focus on security and taking care of loved ones.',
    predictions: [
      'Home project or improvement you start creates lasting emotional comfort',
      'Emotional conversation with family member deepens bond significantly',
      'You will express vulnerable feeling you\'ve been afraid to share',
      'Creating ritual or routine that makes you feel emotionally nurtured',
      'Decision to prioritize emotional needs over external expectations',
      'Financial plan for home or family security gets started',
      'Relationship deepens through mutual emotional honesty and nurturing',
      'Intuitive insight about family or home situation guides important decision',
      'You finally let yourself feel and process emotion you\'ve been avoiding',
      'Sense of belonging and emotional safety increases through intentional creation'
    ]
  },

  'Leo': {
    name: 'New Moon in Leo',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Leo represents creativity, self-expression, joy, confidence, recognition, leadership, romance, and the radiant performer. It\'s the urge to shine, to create, to be seen and celebrated for who you truly are.',
    eventMeaning: 'The New Moon in Leo ignites creative spark and permission to shine. This is your annual fresh start for self-expression, creativity, romance, and claiming your spotlight. Set intentions around creative projects, leadership goals, romantic desires, or simply allowing yourself more joy and playfulness. The next two weeks favor bold self-expression and letting your authentic light shine.',
    loveRelationships: 'Perfect time to initiate romance, plan special dates, or express love dramatically and creatively. Be playful, generous, and expressive. Show your love boldly. If single, put yourself out there confidently - you\'re magnetic now. Create fun, joy, and passion. Plan romantic gesture or date that celebrates your connection. Let yourself be seen and adored.',
    familyHome: 'Good time to start creative home projects, plan family celebrations, or bring more joy and playfulness to family life. Create space for creative expression at home - art studio, music area, or theater corner. Plan family fun activities. If you have children, start new creative activities with them. Let home be place of celebration and joy.',
    businessCareer: 'Ideal for launching creative projects, stepping into leadership, or starting work that lets you shine. Begin creative business, artistic venture, or role requiring confident performance. Your creative ideas and leadership qualities get noticed now. Start project you\'re passionate about. Take creative risks. Put your work out publicly.',
    moneyFinances: 'Financial opportunities through creative work, performance, or leadership. Start monetizing creative talents or hobbies. Invest in creative tools, courses, or projects. Good time to start side business doing what you love. Generous investments in joy and self-expression pay off through increased confidence and opportunities. Creative courage attracts resources.',
    predictions: [
      'Creative project you start generates excitement and positive response',
      'Romantic gesture or bold expression of love goes beautifully',
      'You will step into spotlight or leadership role you\'ve been avoiding',
      'Child or creative "baby" (idea, business, art) conceived and begun',
      'Joy and playfulness you bring to life attracts wonderful people and opportunities',
      'Performance or public sharing of talents boosts confidence significantly',
      'You finally let yourself do creative thing you\'ve been afraid to attempt',
      'Celebration or party you organize brings people together joyfully',
      'Recognition or appreciation arrives for something you created',
      'Permission granted (by yourself) to shine fully without dimming your light'
    ]
  },

  'Virgo': {
    name: 'New Moon in Virgo',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Virgo represents service, health, organization, refinement, analysis, practical skill, and the dedicated craftsperson. It\'s the urge to improve, to be useful, to perfect your craft and serve meaningfully.',
    eventMeaning: 'The New Moon in Virgo is perfect timing for improving health, organizing life, and refining your skills. Set intentions around health goals, daily routines, work efficiency, or developing practical skills. This is your annual fresh start for self-improvement through practical action. The next two weeks favor creating better habits, organizing chaos, and serving meaningfully.',
    loveRelationships: 'Focus on practical improvements in relationship. Start helpful daily rituals together - morning coffee, evening walks, meal prep. Show love through useful acts of service. Communicate about practical needs clearly. If single, improve yourself first - health, organization, skills - and attract partner through being your best self. Practical care strengthens bonds.',
    familyHome: 'Perfect timing for home organization projects, establishing health routines, or creating efficient family systems. Start decluttering, organizing, or simplifying living space. Begin health habits for whole family. Create chore systems that actually work. Meal planning and healthy eating routines. Make home more functional and healthy.',
    businessCareer: 'Ideal for improving work processes, learning new skills, or starting service-oriented work. Begin efficiency systems, skill development programs, or health-related career path. Perfect time to organize work life, refine your craft, or start being more useful and valuable at work. Your competence and attention to detail get recognized.',
    moneyFinances: 'Start practical financial systems - budgeting, tracking, organizing. Good time to assess skills and invest in training that increases earning power. Financial improvement through better organization and eliminating waste. Start side work offering practical skills or services. Money grows through being genuinely useful and skilled.',
    predictions: [
      'Health routine or habit you start significantly improves wellbeing within weeks',
      'Organization project transforms chaotic area into functional, peaceful space',
      'Skill you begin learning opens professional doors you didn\'t expect',
      'Work efficiency system you implement saves significant time and stress',
      'Relationship improves through discussing and meeting practical needs',
      'Budget or financial system you create provides clarity and control',
      'Service you offer helps someone significantly and feels deeply meaningful',
      'Health issue gets addressed through practical daily habit changes',
      'Perfectionism releases slightly - you accept "good enough" and feel lighter',
      'Useful contribution you make gets appreciated and opens more opportunities'
    ]
  },

  'Libra': {
    name: 'New Moon in Libra',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Libra represents partnership, balance, harmony, beauty, fairness, diplomacy, and relating to others. It\'s the urge to connect, to create beauty and peace, to find yourself through relationship with another.',
    eventMeaning: 'The New Moon in Libra is ideal for starting new relationships, improving existing ones, or creating more balance and beauty in life. Set intentions around partnership, fairness, aesthetic projects, or finding middle ground in conflicts. This is your annual fresh start for relationships and harmony. The next two weeks favor collaboration, diplomacy, and creating beauty.',
    loveRelationships: 'Perfect time to start new relationship, deepen commitment in existing one, or rebalance relationship dynamics. Have conversation about fairness and reciprocity. Plan beautiful romantic experiences. If single, actively seek partnership - you\'re attractive and relationship-ready now. Focus on balance, beauty, and fair give-and-take. Partnership potential high.',
    familyHome: 'Good time to create more harmony at home, beautify living space, or improve family fairness. Start home decoration projects focused on beauty and balance. Mediate family conflicts diplomatically. Create peaceful, aesthetically pleasing home environment. Good for starting to live with partner or roommate. Shared space and cooperation favored.',
    businessCareer: 'Ideal for starting business partnerships, collaborative projects, or work in beauty/design fields. Begin relationship-oriented career - counseling, mediation, customer relations. Partnership opportunities arise. Your diplomatic skills and eye for aesthetics get noticed. Start projects requiring collaboration and fairness. Teamwork succeeds.',
    moneyFinances: 'Financial partnerships or shared resource planning begins. Good time to discuss money with partner, start joint accounts, or begin business partnership. Earning through beauty, design, relationships, or fair mediation. Investment in aesthetics and partnership. Money flows through balanced cooperation and creating beauty.',
    predictions: [
      'New relationship begins or existing one reaches new commitment level',
      'Aesthetic or design project you start beautifies space significantly',
      'Conflict resolved through fair compromise that honors both sides',
      'Business or creative partnership opportunity emerges',
      'You finally address unfair dynamic and request balance',
      'Beauty treatment, wardrobe upgrade, or aesthetic improvement boosts confidence',
      'Diplomatic conversation prevents or resolves conflict gracefully',
      'Collaboration you initiate produces better result than solo work would',
      'Artistic expression or creative project reflects your aesthetic vision',
      'Balance achieved between independence and partnership through honest discussion'
    ]
  },

  'Scorpio': {
    name: 'New Moon in Scorpio',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Scorpio represents transformation, depth, intensity, power, intimacy, shared resources, death and rebirth, and psychological truth. It\'s the urge to merge completely, to transform, to access hidden power.',
    eventMeaning: 'The New Moon in Scorpio invites you into the depths for transformation and rebirth. Set intentions around deep healing, intimate connections, psychological growth, or accessing your hidden power. This is your annual opportunity for profound change and accessing truth beneath the surface. The next two weeks favor deep work, intimate merging, and facing shadows.',
    loveRelationships: 'Time to deepen intimacy dramatically or release relationships that can\'t go deep. Initiate vulnerable conversations about desires, fears, and psychological patterns. Sexual intimacy and emotional merging intensify beautifully. If single, attract intense, transformative connections. Focus on depth, truth, and powerful bonding. Superficial connections feel empty.',
    familyHome: 'Good time to begin deep family healing work, address family secrets, or transform home into sanctuary for transformation. Start therapy or healing work around family wounds. Initiate difficult but necessary family conversations. Some begin joint family financial planning or inheritance discussions. Create private, intimate space at home.',
    businessCareer: 'Perfect for starting transformative work - therapy, healing, research, investigation, or financial management. Begin deep professional development or psychological training. Start business involving transformation, depth, or managing resources. Your intensity and psychological insight become professional assets. Power and depth work favored.',
    moneyFinances: 'Excellent time to start investment planning, debt payoff strategies, or shared resource management. Begin researching investments deeply or working with financial advisor. Good for starting to manage others\' money or resources. Transform your relationship with money through psychological awareness. Shared finances and deep financial planning.',
    predictions: [
      'Deep conversation or therapeutic work catalyzes profound personal transformation',
      'Sexual or emotional intimacy reaches new depth of connection',
      'You finally face psychological pattern or shadow you\'ve been avoiding',
      'Financial strategy or investment plan you start builds significant wealth',
      'Power you didn\'t know you had emerges through crisis or challenge',
      'Intimate relationship deepens through complete honesty and vulnerability',
      'Research or investigation you begin reveals hidden truth or information',
      'Transformation work (therapy, healing, shadow work) initiated yields deep results',
      'Shared resource or financial matter gets organized and empowered',
      'You release attachment or pattern that\'s been blocking your power'
    ]
  },

  'Sagittarius': {
    name: 'New Moon in Sagittarius',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Sagittarius represents expansion, philosophy, truth-seeking, adventure, higher education, belief systems, foreign cultures, and the quest for meaning. It\'s the urge to grow beyond limits, seek truth, and find life\'s meaning.',
    eventMeaning: 'The New Moon in Sagittarius is your annual invitation to expand, explore, and seek greater truth and meaning. Set intentions around travel, education, philosophical growth, or broadening your worldview. This is perfect time to start adventures, studies, or truth-seeking journeys. The next two weeks favor optimism, exploration, and expanding beyond comfort zone.',
    loveRelationships: 'Perfect for starting adventurous relationship or adding adventure to existing one. Plan trips together, explore new philosophies, or learn something new as couple. If single, expand social circles and meet people from different backgrounds. Honesty and shared growth essential. Keep relationship expanding and exploring. Freedom and truth strengthen bonds.',
    familyHome: 'Good time to plan family travel, expose family to different cultures, or expand family philosophically. Start planning move to different place or making home base for adventures. Begin family learning projects or philosophical discussions. Home becomes launching pad for exploration rather than limitation. Expand family horizons.',
    businessCareer: 'Ideal for starting educational pursuits, teaching careers, international work, or philosophical endeavors. Begin advanced degree, teaching project, travel-related business, or work with broader purpose and meaning. Start publishing, speaking, or sharing wisdom. Career must offer growth, learning, and philosophical alignment. Expansion favored.',
    moneyFinances: 'Financial opportunities through education, teaching, travel, or international ventures. Start investing in education or ventures with growth potential. Good time to take calculated financial risks based on optimism and research. Money through sharing knowledge or facilitating others\' growth. Generous, abundant mindset attracts resources.',
    predictions: [
      'Travel plans you make lead to life-changing experience and expanded perspective',
      'Educational program you start opens doors and possibilities you hadn\'t imagined',
      'Philosophical or spiritual teaching profoundly shifts your worldview',
      'Risk you take based on optimism and faith pays off wonderfully',
      'Person from different background you meet expands your understanding',
      'Teaching or sharing knowledge opportunity begins and grows',
      'Freedom and adventure you claim in life creates joy and growth',
      'Book you start reading or writing changes your life direction',
      'International connection or opportunity emerges',
      'Meaning and purpose in life becomes clearer through exploration and truth-seeking'
    ]
  },

  'Capricorn': {
    name: 'New Moon in Capricorn',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Capricorn represents ambition, achievement, responsibility, structure, authority, mastery, and building lasting legacy. It\'s the urge to climb the mountain, master your craft, and build something that endures.',
    eventMeaning: 'The New Moon in Capricorn is perfect timing for setting ambitious goals and committing to long-term achievement. Set intentions around career advancement, mastery, building structures, or taking on important responsibilities. This is your annual fresh start for serious commitment to your mountain. The next two weeks favor disciplined planning, patient building, and stepping into authority.',
    loveRelationships: 'Time to get serious about relationship commitment or long-term planning together. Have conversations about future, shared goals, and building something lasting. If single, attract mature, ambitious partners ready for real commitment. Focus on building solid foundation, not just romantic feelings. Commitment, responsibility, and long-term planning strengthen bonds.',
    familyHome: 'Perfect for starting long-term home projects, making property investments, or taking on family responsibilities. Begin serious home improvements or savings for property purchase. Step into family leadership role or care for aging family. Create solid family structures and traditions. Build foundation for family legacy.',
    businessCareer: 'Ideal timing for career advancement, starting serious business, or committing to mastery path. Set long-term professional goals and create strategic plan. Start building reputation and authority in your field. Begin work requiring serious commitment and discipline. Your ambition and responsibility get recognized. Leadership and mastery favored.',
    moneyFinances: 'Excellent for starting serious financial planning, long-term investments, or building sustainable wealth. Begin retirement planning, real estate investing, or business venture requiring capital. Set ambitious financial goals and create realistic plan. Money through mastery, leadership, and taking responsibility. Patient wealth-building succeeds.',
    predictions: [
      'Career goal you set and commit to fully leads to significant achievement',
      'Business or professional venture you start builds into lasting success',
      'Commitment you make in relationship deepens into serious partnership',
      'Financial plan you create and follow builds substantial wealth over time',
      'Responsibility you take on matures you and opens leadership opportunities',
      'Long-term project you begin becomes source of pride and legacy',
      'Authority figure mentors you or you step into authority role yourself',
      'Disciplined habit or practice you start yields visible results',
      'Property investment or home purchase plan gets initiated',
      'Public recognition arrives for patient, persistent effort and mastery'
    ]
  },

  'Aquarius': {
    name: 'New Moon in Aquarius',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Aquarius represents innovation, revolution, community, friendship, humanitarian ideals, individuality, technology, and the future. It\'s the urge to be uniquely yourself while contributing to collective progress.',
    eventMeaning: 'The New Moon in Aquarius is your annual fresh start for innovation, authenticity, and social connection. Set intentions around being more uniquely yourself, contributing to causes you care about, or connecting with your community and friends. This is perfect time to start innovative projects or break free from conformity. The next two weeks favor authenticity, innovation, and collective contribution.',
    loveRelationships: 'Perfect for starting unconventional relationships or adding more freedom and friendship to existing ones. Connect with partner as best friends, not just lovers. Give each other space to be individuals. If single, attract unique, independent partners through being authentically yourself. Friendship, freedom, and acceptance of uniqueness strengthen bonds.',
    familyHome: 'Good time to create unconventional family arrangements, embrace family\'s unique qualities, or distance from family expectations. Start making home hub for community and friendship. Create space reflecting your authentic individuality. Technology upgrades at home. Begin living arrangement that honors independence. Break free from family conformity.',
    businessCareer: 'Ideal for starting innovative work, technology projects, or community-oriented ventures. Begin freelance consulting, tech startup, or work serving collective good. Network actively and build community connections. Your unique perspective and innovative ideas become valuable. Start work that honors your authentic genius. Innovation and contribution favored.',
    moneyFinances: 'Financial opportunities through innovation, technology, networking, and unique offerings. Start earning through tech work, consulting, or sharing unique gifts. Begin unconventional income streams or group financial ventures. Invest in innovation and future technologies. Money through being authentic and contributing to progress. Community provides resources.',
    predictions: [
      'Innovative idea or project you start gains support from community',
      'Friendship formed now becomes important, supportive relationship',
      'You break free from expectation or pattern and feel liberated',
      'Technology project or online presence you create opens opportunities',
      'Community or cause involvement begins and becomes meaningful',
      'Unique gift or quirk you embrace becomes your greatest strength',
      'Networking connection leads to opportunity perfect for your authentic self',
      'Freedom you claim in relationship or life allows you to breathe',
      'Vision of future you want to create inspires concrete action',
      'Being weird, unique, authentic you attracts right people and opportunities'
    ]
  },

  'Pisces': {
    name: 'New Moon in Pisces',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Pisces represents spirituality, compassion, imagination, surrender, transcendence, unity, dreams, and dissolution of boundaries. It\'s the urge to merge with something greater, to access infinite compassion and spiritual truth.',
    eventMeaning: 'The New Moon in Pisces invites you into spiritual depths and imaginative realms. Set intentions around spiritual practice, creative expression, compassionate service, or surrendering control. This is your annual opportunity to connect with something greater than yourself. The next two weeks favor meditation, artistic creation, spiritual practice, and trusting the flow.',
    loveRelationships: 'Perfect for deepening spiritual connection in relationship or attracting soulmate-level union. Share dreams, meditate together, or create art together. If single, trust divine timing and let relationship unfold naturally. Compassion, forgiveness, and unconditional love deepen bonds. Spiritual connection and transcendent intimacy favored. Soul-level relating.',
    familyHome: 'Good time to create spiritual sanctuary at home, practice forgiveness with family, or bring more compassion to family dynamics. Start meditation space, altar, or peaceful retreat area. Begin spiritual practices at home. Forgive family members. Create sacred, peaceful home environment. Compassionate family healing.',
    businessCareer: 'Ideal for starting healing work, spiritual teaching, creative career, or compassionate service. Begin artistic projects, healing practice, nonprofit work, or spiritual teaching. Start trusting intuition in professional life. Career must feel spiritually meaningful and creative. Purpose-driven work over material ambition. Service and creativity favored.',
    moneyFinances: 'Start earning through healing, art, spirituality, or compassionate service. Financial relationship transforms toward trust and flow. Begin tithing or generous giving. Let go of money anxiety through spiritual practice. Trust abundance will flow when you follow spiritual calling. Money through creative expression and healing work. Divine provision.',
    predictions: [
      'Spiritual practice you begin deepens connection to divine significantly',
      'Creative or artistic project you start channels profound inspiration',
      'Forgiveness you offer (to yourself or other) creates profound healing and peace',
      'Compassionate service you begin feels deeply meaningful and purposeful',
      'Dream or vision provides clear spiritual guidance or creative direction',
      'Meditation or spiritual practice becomes daily practice that grounds you',
      'Artistic expression you allow emerges beautifully and authentically',
      'Surrender of control you practice brings unexpected blessings and miracles',
      'Boundary dissolution in relationship creates beautiful intimacy and unity',
      'Connection to something greater becomes undeniable source of peace and purpose'
    ]
  }
};

// ============================================================================
// FULL MOON INTERPRETATIONS (Sample: Aries, Taurus, Gemini)
// ============================================================================

const FULL_MOONS: Record<string, FullMoonInterpretation> = {
  'Aries': {
    name: 'Full Moon in Aries',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Aries represents courage, independence, leadership, initiative, self-assertion, passion, and the warrior spirit. It\'s the drive to be first, the spark of new beginnings, and the courage to stand alone.',
    eventMeaning: 'The Full Moon in Aries brings your independence, courage, and self-assertion to peak visibility. This is a culmination point for anything you started around identity, leadership, or autonomy six months ago. Issues of independence vs. partnership, courage vs. fear, and self vs. others reach climax. You see clearly where you\'ve been too passive or too aggressive, where you need to assert yourself or where you\'ve been too selfish. This moon demands balance between brave self-assertion and consideration of others.',
    loveRelationships: 'Relationship tensions between independence and togetherness peak now. You may feel torn between your needs and partner\'s needs, or between staying and leaving. Arguments about who\'s being selfish or who\'s sacrificing too much. This moon illuminates where you\'ve lost yourself in relationship or where you\'ve been too self-focused. Resolution comes through honest assertion of needs while truly hearing partner\'s needs. Some relationships end if balance impossible.',
    familyHome: 'Family conflicts around independence and boundaries reach boiling point. You may finally stand up to controlling family member, or realize you\'ve been too rebellious and need to consider family needs. Issues with assertive family members come to head. The balance between being strong individual and family member becomes clear. Some family relationships heal through honest confrontation, others end if respect impossible.',
    businessCareer: 'Career achievements around leadership and independence become visible, or lack thereof becomes obvious. You may get promotion/recognition for initiative, or realize you\'ve been too passive at work. Conflicts with boss about autonomy peak - you need more independence or can\'t work there. Your courage and leadership are tested. Success comes through balanced assertion - confident but not arrogant, independent but collaborative.',
    moneyFinances: 'Financial results of independent action become clear. Business or investment you started six months ago shows profit or loss. You see where self-employment is working or where you need structure of employment. Tension between financial independence and financial partnership peaks. Clarity about whether your courage with money has been wisdom or recklessness. Balance between bold risks and smart strategy required.',
    predictions: [
      'Major argument in relationship forces honest conversation about needs and independence',
      'Career achievement or recognition for leadership and initiative becomes public',
      'Realization that you\'ve been too aggressive or too passive - course correction needed',
      'Decision point: stay in situation requiring compromise or leave to maintain independence',
      'Confrontation with authority figure where you must stand up for yourself',
      'Physical energy peaks - great for athletic competition or physical challenge',
      'Impulsive action taken now has immediate visible consequences - choose wisely',
      'You will see clearly who truly supports your independence vs. who tries to control you',
      'Business or independent venture you started shows first real results',
      'Emotional climax around self-worth and identity - you know who you are now'
    ]
  },

  'Taurus': {
    name: 'Full Moon in Taurus',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Taurus represents material security, stability, sensory pleasure, values, persistence, patience, and building lasting worth. It\'s the energy of grounding, tangible reality, and what you can touch and keep.',
    eventMeaning: 'The Full Moon in Taurus illuminates your material security, values, and self-worth. This is a culmination point for financial matters, possessions, and anything related to stability you started six months ago. The tension between holding on and letting go, between security and change, between material and spiritual becomes crystal clear. You see what truly has value and what you\'ve been clinging to out of fear. This moon demands balance between building security and being open to transformation.',
    loveRelationships: 'Relationship issues around security, possessions, and values reach peak visibility. Tension between stability and growth becomes obvious. You may see clearly whether partner shares your values or if you\'ve been settling for security over happiness. Money and possessions in relationship come to head - who owns what, who earns what, shared resources. Resolution through honest discussion of values and what makes you feel truly secure in partnership.',
    familyHome: 'Home and family security matters culminate. Mortgage, property purchase, or home renovation you started shows results. Family financial matters come to head - inheritance, shared resources, or support issues resolved. You see clearly whether home environment provides real comfort or just familiar discomfort. Some may move or make major home changes now. Balance between family stability and necessary change required.',
    businessCareer: 'Career achievements around building value and financial security become visible. Raise, bonus, or financial reward for persistent work arrives, or you realize current job will never provide security you need. Your true worth and skills are illuminated - you see clearly what you bring to table and whether you\'re being compensated fairly. Decision point about staying in stable but limiting job vs. risking change for growth.',
    moneyFinances: 'Major financial climax - investment shows profit or loss, savings goal reached or proves unrealistic, income strategy pays off or needs revision. Tension between spending for pleasure and saving for security peaks. You see clearly where you\'ve been wise with money and where you\'ve let fear or greed guide you. Some experience sudden expense or windfall that forces financial restructuring. Truth about your financial situation becomes undeniable.',
    predictions: [
      'Financial result of six-month effort becomes visible - profit, loss, or plateau',
      'Major purchase decision or sale of valuable possession happens now',
      'Relationship money conversation reveals whether values truly align',
      'You will clearly see your worth and whether others appreciate it appropriately',
      'Home or property matter that\'s been pending reaches resolution',
      'Realization about what you truly value vs. what you thought you valued',
      'Sensory experience or pleasure that reminds you why physical life matters',
      'Decision to keep building slowly or make radical change to increase security',
      'Someone\'s true values revealed through their actions with money or possessions',
      'Emotional release around self-worth issues - you know you\'re valuable now'
    ]
  },

  'Gemini': {
    name: 'Full Moon in Gemini',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Gemini represents communication, curiosity, learning, connections, mental agility, information exchange, and versatility. It\'s the energy of questions, conversations, short trips, siblings, and multiple perspectives.',
    eventMeaning: 'The Full Moon in Gemini brings communication, learning, and information to peak clarity. This is culmination point for anything you started around education, communication, or networking six months ago. The tension between facts and meaning, between talking and listening, between versatility and depth becomes crystal clear. You see where communication has been clear or confusing, where curiosity has led to wisdom or just distraction. This moon demands balance between gathering information and integrating wisdom.',
    loveRelationships: 'Communication in relationships reaches climax - you finally say what needs to be said, or realize words aren\'t enough. Tension between mental connection and emotional intimacy peaks. You see clearly whether you and partner can really talk to each other or have been talking past each other. Some couples have breakthrough conversation that clears air completely. Others realize they speak different languages and can\'t bridge gap. Truth comes out now.',
    familyHome: 'Sibling relationships, neighbor issues, or local community matters come to head. Information about family you didn\'t know gets revealed. Communication patterns in family become crystal clear - who talks, who listens, who lies, who tells truth. Decision about staying in current neighborhood or moving reaches climax. Short trip or family visit planned months ago happens now with surprising revelations.',
    businessCareer: 'Communication projects, writing, teaching, or networking efforts show results. Blog, social media presence, or information product you launched gains traction or proves ineffective. Skills you\'ve been learning are tested - you either have mastery or realize you need more practice. Networking efforts pay off with connections or prove you\'ve been networking in wrong circles. Truth about your communication effectiveness becomes obvious.',
    moneyFinances: 'Financial results of communication, teaching, selling, or information work become clear. Multiple income streams you started show profit or prove too scattered. Freelance or gig work you\'ve been doing either provides enough income or proves unstable. Information you need about financial decision arrives. Truth about financial details you\'ve been confused about gets clarified. Some receive payment for communication work or information owed.',
    predictions: [
      'Conversation you have or information you receive changes everything',
      'Communication project shows results - viral post, successful presentation, or clear failure',
      'Truth comes out in relationship - either clears air completely or reveals unbridgeable gap',
      'Sibling or neighbor situation that\'s been brewing reaches resolution',
      'Learning or skill you\'ve practiced gets publicly tested - you pass or know you need more work',
      'Multiple opportunities or options you\'ve been juggling require final decision',
      'Short trip or local event reveals unexpected information or connection',
      'Writing, teaching, or speaking opportunity you worked toward happens or falls through',
      'Technology or communication breakdown forces you to communicate in person',
      'Mental clarity after period of confusion - you finally understand situation completely'
    ]
  },

  'Cancer': {
    name: 'Full Moon in Cancer',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Cancer represents emotions, nurturing, family, home, roots, security, intuition, and the protective mother energy. It\'s the urge to belong, to care for others, and to create emotional safety.',
    eventMeaning: 'The Full Moon in Cancer illuminates your emotional needs, family bonds, and sense of belonging. This is culmination point for home and family matters you initiated six months ago. Emotions peak, family dynamics become crystal clear, and your need for emotional security reaches maximum visibility. Tension between public ambition and private emotional needs becomes obvious. Balance between caring for others and caring for yourself required.',
    loveRelationships: 'Emotional needs in relationship reach peak visibility - you see clearly whether they\'re being met or neglected. Vulnerability and emotional honesty either bring you closer or reveal unbridgeable emotional distance. Family compatibility with partner becomes highlighted issue. Some relationships deepen through emotional sharing, others end if emotional intimacy is impossible. True feelings become undeniable.',
    familyHome: 'Family matters, home situations, or mother relationships reach emotional climax. Truth about family dynamics becomes crystal clear. Home you\'ve been working on shows results or reveals problems. Family secrets may surface. Emotional patterns in family reach peak intensity. Some family bonds strengthen through crisis, others break if they\'re toxic. Home vs. career tension peaks.',
    businessCareer: 'Work-life balance issues reach crisis point. Career success may conflict with family needs or emotional well-being. Public achievements feel empty if home life suffers. You see clearly whether career allows emotional fulfillment or requires sacrificing too much. Some choose family over career advancement now. Emotional intelligence at work gets tested.',
    moneyFinances: 'Financial results of home investments, family business, or emotional spending become visible. Real estate matters reach resolution. You see clearly whether money is providing real security or just buying temporary comfort. Family financial matters come to head. Emotional relationship with money illuminated - spending for comfort vs. true security becomes obvious.',
    predictions: [
      'Major emotional realization about what you truly need to feel safe and belong',
      'Family issue that\'s been building reaches crisis and demands resolution',
      'Home project or move you started shows final results - success or complications',
      'Relationship conversation where true feelings can no longer be hidden',
      'Mother or maternal figure relationship reaches peak of closeness or final break',
      'Work-life balance breaks - you must choose to prioritize differently',
      'Emotional breakthrough or breakdown that leads to healthier patterns',
      'Family secret revealed that changes your understanding of family history',
      'You will honor your emotional needs even if it disappoints others',
      'Home becomes sanctuary through emotional honesty or feels like prison through emotional repression'
    ]
  },

  'Leo': {
    name: 'Full Moon in Leo',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Leo represents creativity, self-expression, joy, confidence, recognition, leadership, romance, and the radiant performer. It\'s the urge to shine, to create, to be seen and celebrated for who you truly are.',
    eventMeaning: 'The Full Moon in Leo brings creative expression, romance, and self-confidence to peak visibility. This is culmination of what you started expressing or creating six months ago. Your need for recognition, joy, and authentic self-expression reaches maximum intensity. Tension between being yourself and serving others becomes obvious. Recognition arrives or you realize you don\'t need it. Creative projects show results.',
    loveRelationships: 'Romance reaches dramatic peak - passionate declarations, grand gestures, or relationship becomes public. You see clearly whether partner celebrates your authentic self or requires you to dim your light. Need for playfulness and passion either fulfilled beautifully or glaringly absent. Some relationships deepen through mutual celebration, others end if joy and passion are missing. Love becomes visible.',
    familyHome: 'Children or creative projects reach important milestone or crisis. Parenting challenges peak. You see clearly whether family celebrates your individuality or requires conformity. Home either supports creative expression or feels like it stifles it. Recognition from family arrives or you realize you\'ve been seeking validation in wrong places. Family drama reaches theatrical climax.',
    businessCareer: 'Creative work or leadership reaches public visibility - success and recognition or exposure of flaws. Your talents and self-expression at work either get celebrated or ignored, making career satisfaction obvious. Creative projects you launched show results. Leadership abilities tested publicly. You see whether work allows you to shine or keeps you invisible.',
    moneyFinances: 'Financial results of creative work, speculative investments, or generous spending become visible. Money earned through self-expression and creativity shows profit or loss. Spending on joy and celebration either feels worth it or reveals overindulgence. Creative investments pay off or prove too risky. Relationship between confidence and financial success becomes obvious.',
    predictions: [
      'Creative project or performance reaches completion and public visibility',
      'Recognition or award for creative work - or realization you don\'t need external validation',
      'Romantic relationship reaches peak passion or dramatic ending',
      'Child reaches important milestone or parenting challenge comes to head',
      'You will be seen publicly - ready or not - for who you truly are',
      'Creative risk you took shows results - success or valuable learning',
      'Leadership ability tested in public situation',
      'Joy you\'ve claimed attracts abundance or reveals where you\'ve been seeking wrong things',
      'Confidence peaks - you finally see your own radiance',
      'Decision point: keep shining or dim your light for others - choose wisely'
    ]
  },

  'Virgo': {
    name: 'Full Moon in Virgo',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Virgo represents service, health, organization, refinement, analysis, practical skill, and the dedicated craftsperson. It\'s the urge to improve, to be useful, to perfect your craft and serve meaningfully.',
    eventMeaning: 'The Full Moon in Virgo illuminates health, work, daily routines, and service. This is culmination of health improvements or work reorganization you started six months ago. Your body\'s condition, work efficiency, and daily habits become crystal clear. Perfectionism vs. acceptance reaches peak tension. You see what\'s actually working practically vs. what you\'ve been telling yourself. Service and usefulness tested.',
    loveRelationships: 'Practical realities of relationship become impossible to ignore. You see clearly who does what, who contributes, whether partnership is balanced in daily reality. Acts of service and practical care either feel reciprocated or glaringly one-sided. Communication about practical needs reaches peak honesty. Health issues may affect relationship. Love shows up in details or doesn\'t show up at all.',
    familyHome: 'Home organization efforts show results or reveal deeper chaos. Health issues in family come to head. Daily routines and family systems either work smoothly or break down completely, showing what needs fixing. Caretaking of family members reaches peak - sustainable service or unsustainable sacrifice becomes obvious. Health of home environment gets truth check.',
    businessCareer: 'Work efficiency and usefulness reach point of evaluation. Your skills, organization, and contribution either get recognized for their value or revealed as inadequate. Health affects work capacity. Job satisfaction based on meaningful service becomes clear issue. Perfectionism at work reaches breaking point - good enough or never enough? Your practical value shows.',
    moneyFinances: 'Financial results of budgeting, organizing, or service work become visible. Money saved through efficiency shows up or disorganization costs you. Earning through practical skills and service reaches evaluation point. Health expenses may surface. Financial systems you created either work or need refinement. True value of your skills becomes monetarily obvious.',
    predictions: [
      'Health issue that\'s been developing becomes impossible to ignore - address it',
      'Work project you\'ve perfected reaches completion or you realize it\'s good enough',
      'Organization system you implemented shows its value through saved time and money',
      'Relationship imbalance in daily contribution becomes obvious - must address',
      'Skill you\'ve developed reaches mastery level or you see gaps requiring more work',
      'Service you\'ve been providing reaches sustainable limit - boundaries needed',
      'Perfectionism costs you - you finally accept "good enough" and feel relief',
      'Health routine you started shows visible results in how you feel',
      'Job evaluation shows your practical value - raise or reality check',
      'Daily habits reveal themselves as health-supporting or health-destroying - choose different'
    ]
  },

  'Libra': {
    name: 'Full Moon in Libra',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Libra represents partnership, balance, harmony, beauty, fairness, diplomacy, and relating to others. It\'s the urge to connect, to create beauty and peace, to find yourself through relationship with another.',
    eventMeaning: 'The Full Moon in Libra illuminates relationships, partnerships, and balance. This is culmination of relationship dynamics you\'ve been working on for six months. Partnership needs reach peak visibility. You see clearly whether relationships are balanced or you\'ve lost yourself. Tension between independence and partnership, between self and other, reaches maximum intensity. Fairness and beauty demand attention.',
    loveRelationships: 'Relationship reaches turning point - deeper commitment or honest ending. Balance between give and take becomes crystal clear. You see whether partnership honors both people equally or requires one person to disappear. Conflict that\'s been avoided can\'t be avoided anymore. Some relationships achieve beautiful balance, others reveal imbalance is unfixable. Marriage, separation, or major relationship decision point.',
    familyHome: 'Family relationship fairness becomes obvious issue. You see clearly whether family dynamics are reciprocal or exploitative. Home either feels harmonious and beautiful or reveals discord underneath surface peace. Partnership with family member around home reaches resolution. Aesthetic projects at home show results. Peace at home requires honest conflict resolution, not continued avoidance.',
    businessCareer: 'Business partnerships reach evaluation point - working beautifully or falling apart. Collaboration vs. solo work tension reaches peak. You see whether work relationships are fair and productive. Career in relationship-oriented fields (counseling, mediation, design) reaches professional milestone. Client relationships show their true nature. Your diplomatic skills tested publicly.',
    moneyFinances: 'Shared financial arrangements with partner reach truth moment. You see clearly whether money is being handled fairly. Business partnership finances become transparent - profit-sharing working or problematic. Investments in beauty, art, or aesthetic projects show financial return or prove costly. Money and relationship fairness directly linked - imbalance in one affects other.',
    predictions: [
      'Relationship reaches major decision point - commitment deepens or ends',
      'Unfair dynamic you\'ve tolerated becomes unbearable - must address',
      'Business partnership shows profit or reveals one person carrying unfair burden',
      'Aesthetic project you created receives public appreciation or criticism',
      'Conflict you\'ve avoided erupts - diplomacy required but honesty more important',
      'You finally see yourself clearly in mirror of relationship - beautiful or concerning',
      'Legal matter, contract, or agreement reaches resolution',
      'Wedding, engagement, or relationship celebration - or separation finalized',
      'Balance between independence and partnership achieved or revealed as impossible',
      'Beauty you\'ve created becomes visible - in art, relationships, or environment'
    ]
  },

  'Scorpio': {
    name: 'Full Moon in Scorpio',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Scorpio represents transformation, depth, intensity, power, intimacy, shared resources, death and rebirth, and psychological truth. It\'s the urge to merge completely, to transform, to access hidden power.',
    eventMeaning: 'The Full Moon in Scorpio brings transformation, power, and deep truth to maximum intensity. This is culmination of psychological work or transformation you started six months ago. Hidden things surface powerfully. Your relationship with power, intimacy, and shared resources reaches crisis and resolution. Death and rebirth cycle completes. Superficiality becomes impossible. Truth can\'t be avoided. Real power emerges or false power exposed.',
    loveRelationships: 'Relationship intensity peaks - complete intimacy or total ending. Sexual and emotional depth either reaches transcendent union or reveals impossibility of true intimacy. Power struggles come to head. Jealousy, possessiveness, or control issues explode or transform. You see whether relationship can handle your full intensity and depth. Secrets revealed. Relationship either transforms completely or dies. No middle ground.',
    familyHome: 'Family secrets reach point of revelation. Inheritance matters, shared family resources, or psychological family patterns come to head. Power dynamics in family become crystal clear - who has it, who abuses it, who reclaims it. Family member\'s crisis requires your depth and strength. Home either becomes sanctuary for transformation or scene of power struggles. Truth about family can\'t be hidden.',
    businessCareer: 'Career power dynamics reach climax. You access your real professional power or see where you\'ve given it away. Work involving transformation, depth, psychology, finance, or investigation reaches major milestone. Power struggle with boss or colleague comes to head. Your psychological insight and intensity either get valued or threatening. Career transformation completes - old identity dies, new emerges.',
    moneyFinances: 'Major financial transformation completes - inheritance received, debt paid or incurred, investment shows major gain or loss, divorce finances settled. Shared money with partner reaches truth point. Your relationship with money transforms completely - psychological patterns become obvious. Financial power you\'ve built shows itself. Hidden money matters revealed. Financial rebirth after financial death.',
    predictions: [
      'Secret revealed that changes everything - in relationship, family, or finances',
      'Psychological breakthrough after sustained shadow work and therapy',
      'Inheritance or shared financial matter finally resolved',
      'Sexual intimacy reaches new depth or reveals relationship lacks real intimacy',
      'Power you\'ve been building emerges fully - you claim it or lose it',
      'Transformation you\'ve undergone becomes visible to others - you\'re different now',
      'Intense emotional or psychological crisis leads to profound rebirth',
      'Power struggle reaches breaking point - you win, lose, or transcend the game',
      'Death (metaphorical or literal) completes a cycle - grief and liberation',
      'Your real power accessed through surrendering false control - paradox understood'
    ]
  },

  'Sagittarius': {
    name: 'Full Moon in Sagittarius',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Sagittarius represents expansion, philosophy, truth-seeking, adventure, higher education, belief systems, foreign cultures, and the quest for meaning. It\'s the urge to grow beyond limits, seek truth, and find life\'s meaning.',
    eventMeaning: 'The Full Moon in Sagittarius brings truth, meaning, and expansion to peak visibility. This is culmination of educational pursuits, travel plans, or philosophical growth you started six months ago. Your beliefs and worldview reach point of confirmation or crisis. Need for freedom, adventure, and growth reaches maximum intensity. Tension between details and big picture, between local and foreign, becomes obvious. Truth demands to be spoken.',
    loveRelationships: 'Relationship philosophy and need for freedom reach peak visibility. You see clearly whether partner shares your values and vision for growth. Honesty in relationship reaches maximum - truth spoken or relationship built on lies exposed. Adventure and growth in partnership either happening beautifully or glaringly absent. Cultural or philosophical differences with partner come to head. Commitment vs. freedom tension peaks.',
    familyHome: 'Family beliefs and values reach point of agreement or irreconcilable difference. You see clearly whether family supports your growth or holds you back. Geographic distance from family may reach resolution - moving far away or returning. Family travel plans culminate. Religious or philosophical differences in family come to head. Home either supports adventure or feels like cage.',
    businessCareer: 'Educational pursuits reach completion or deadline. Teaching, publishing, or international work reaches major milestone. Career meaning and purpose either confirmed or questioned deeply. Work travel culminates in success or exhaustion. You see whether career offers growth and learning or has become stagnant. Professional philosophy tested publicly. Truth about career path becomes undeniable.',
    moneyFinances: 'Financial results of educational investment, international ventures, or philosophical pursuits become visible. Tuition paid shows value through degree completion or questions arise about worth. Teaching income or international business shows profit or loss. Optimistic financial risks show results - wisdom or foolishness becomes clear. Generosity returns multiplied or proves unsustainable.',
    predictions: [
      'Educational program reaches graduation or you realize it\'s not serving growth',
      'Travel experience or international opportunity reaches culmination point',
      'Truth you\'ve been avoiding must be spoken - honesty can\'t be delayed',
      'Philosophical or religious belief confirmed through experience or shattered by reality',
      'Teaching or publishing project reaches public visibility',
      'Relationship requires more freedom and honesty or ends due to restriction and dishonesty',
      'Risk you took based on faith and optimism shows results - lesson learned either way',
      'Foreign country or culture calls strongly - relocation decision point',
      'Meaning and purpose in life becomes crystal clear or reaches crisis requiring new direction',
      'Growth you\'ve pursued shows visible expansion in consciousness and worldview'
    ]
  },

  'Capricorn': {
    name: 'Full Moon in Capricorn',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Capricorn represents ambition, achievement, responsibility, structure, authority, mastery, and building lasting legacy. It\'s the urge to climb the mountain, master your craft, and build something that endures.',
    eventMeaning: 'The Full Moon in Capricorn brings career, achievement, and public status to peak visibility. This is culmination of professional efforts you started six months ago. Your ambitions, responsibilities, and relationship with authority reach maximum intensity. Achievement arrives or goals prove unrealistic. Tension between public success and private life peaks. You see what you\'ve actually built vs. what you told yourself you were building. Legacy work shows itself.',
    loveRelationships: 'Relationship commitment reaches peak visibility - serious partnership or realization it\'s not going anywhere. You see clearly whether relationship has solid foundation or just romantic fantasy. Partner\'s career ambitions may conflict with relationship needs. Age difference or maturity imbalance becomes highlighted issue. Some relationships formalize through marriage or commitment, others end if they lack structure and future. Building together or building apart becomes obvious.',
    familyHome: 'Family responsibilities reach maximum intensity. Aging parent care, family business matters, or family legacy issues come to head. Relationship with father or authority figures reaches resolution or final break. Home becomes foundation for career success or career demands sacrifice home life. Family expectations about achievement and success reach crisis point. Traditional family structures either support you or constrain you - becomes obvious which.',
    businessCareer: 'Major career achievement, promotion, recognition, or public milestone. Years of work show results - success or need to change direction. Professional reputation reaches peak visibility - celebrated or criticized publicly. Authority figures either support or block you definitively. Leadership abilities tested at highest level. You see whether current career path leads to mastery and legacy or just exhaustion and emptiness. Public success vs. personal fulfillment tension peaks.',
    moneyFinances: 'Financial results of career efforts, business ventures, or long-term planning become visible. Major raise, bonus, or financial recognition arrives - or you see current path won\'t provide financial security you need. Business profit or loss becomes undeniable. Long-term investments show results. Financial maturity and discipline either pay off or reveal where you\'ve been unrealistic. Career and money directly linked - truth about earning potential becomes clear.',
    predictions: [
      'Major career achievement, promotion, or public recognition arrives',
      'Professional goal reached after years of effort - celebration earned',
      'Authority figure makes final decision affecting your career - support or obstacle',
      'Public visibility increases dramatically - reputation solidifies',
      'Relationship commitment decision based on solid foundation or lack thereof',
      'Family responsibility reaches peak - you step up or step away',
      'Business venture shows profit or reveals need for restructuring',
      'Legacy work becomes visible - what you\'re building to last becomes clear',
      'Work-life balance breaks - you must restructure priorities',
      'Achievement unlocked through discipline and mastery - or you see mountain is wrong one'
    ]
  },

  'Aquarius': {
    name: 'Full Moon in Aquarius',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Aquarius represents innovation, revolution, community, friendship, humanitarian ideals, individuality, technology, and the future. It\'s the urge to be uniquely yourself while contributing to collective progress.',
    eventMeaning: 'The Full Moon in Aquarius brings authenticity, innovation, and social connections to peak visibility. This is culmination of community involvement or innovation you started six months ago. Your unique individuality and contribution to collective reach maximum expression. Tension between fitting in and standing out peaks. Friendships reach point of deeper connection or ending. You see clearly where you\'ve been authentic vs. conforming. Revolutionary change completes or proves impossible.',
    loveRelationships: 'Relationship need for freedom and authenticity reaches peak. You see clearly whether partner accepts your uniqueness or requires conformity. Friendship aspect of romance either strong or missing - becomes obvious which. Unconventional relationship structures either working beautifully or creating problems. Need for independence in partnership vs. togetherness reaches maximum tension. Some relationships deepen through accepting each other\'s authentic weirdness, others end if conformity is required.',
    familyHome: 'Family acceptance of your authentic individuality reaches truth point. You see clearly whether family celebrates your uniqueness or rejects it. Unconventional family arrangements or living situations show results. Home either supports your innovation and freedom or feels restrictive. Community involvement or friendship networks may conflict with family expectations. Distance from family conformity pressure becomes necessary or family evolves to accept you.',
    businessCareer: 'Innovative work, technology projects, or community ventures reach public visibility. Your unique contributions and ideas either get celebrated or rejected. Networking efforts show results - community support or isolation. Work requiring innovation and authenticity reaches milestone. Freelance or consulting work culminates. You see whether career honors your authentic genius or requires you to fit corporate mold. Contribution to collective progress becomes visible.',
    moneyFinances: 'Financial results of innovative ventures, technology work, or community projects become clear. Unconventional income streams show profit or prove unstable. Networking for financial opportunities pays off or proves insufficient. Cryptocurrency or innovative investments show gains or losses. Money through being authentic vs. conforming becomes obvious - you see whether being yourself is financially viable. Community financially supports your work or doesn\'t.',
    predictions: [
      'Friendship reaches deeper level of authentic connection or ends due to different values',
      'Innovative project or idea reaches public visibility - celebrated or criticized',
      'You will choose authenticity over acceptance - consequences and liberation follow',
      'Community or cause involvement reaches milestone or proves unsatisfying',
      'Technology project you\'ve worked on launches or fails - lessons either way',
      'Networking efforts pay off with perfect-fit opportunity or reveal wrong circles',
      'Unique qualities you\'ve embraced become your greatest professional assets',
      'Relationship requires more freedom or you realize you need more independence',
      'Revolutionary change you\'ve sought completes or you see it\'s not coming - adapt',
      'Vision of future you want becomes crystal clear - you commit fully or pivot completely'
    ]
  },

  'Pisces': {
    name: 'Full Moon in Pisces',
    frequency: 'Once per year',
    duration: '~2 weeks',
    signEnergy: 'Pisces represents spirituality, compassion, imagination, surrender, transcendence, unity, dreams, and dissolution of boundaries. It\'s the urge to merge with something greater, to access infinite compassion and spiritual truth.',
    eventMeaning: 'The Full Moon in Pisces brings spirituality, compassion, and creative inspiration to peak illumination. This is culmination of spiritual practice, creative projects, or compassionate service you started six months ago. Connection to something greater reaches maximum visibility. Boundaries dissolve completely - transcendent union or confusing merger becomes obvious. Dreams manifest or reveal themselves as illusions. Compassion reaches limit or deepens into unconditional love. Surrender completes.',
    loveRelationships: 'Spiritual connection in relationship reaches peak visibility - soulmate union or disillusionment. You see clearly whether relationship is transcendent spiritual connection or codependent illusion. Boundaries in relationship either beautifully dissolved for intimacy or dangerously dissolved into loss of self. Compassion and forgiveness reach ultimate test. Fantasy about partner meets reality. Unconditional love or sacrificial martyrdom - becomes obvious which.',
    familyHome: 'Family healing through forgiveness and compassion reaches culmination or proves impossible. You see clearly whether family wounds can heal or require distance for your wellbeing. Home either becomes spiritual sanctuary or needs to be released. Caring for family member reaches sustainable compassion or unsustainable sacrifice - truth becomes clear. Family secrets surface requiring forgiveness or boundary. Spiritual practice at home shows fruits.',
    businessCareer: 'Creative or spiritual work reaches public visibility. Artistic projects complete or prove unfinishable. Healing practice, spiritual teaching, or compassionate service work reaches milestone or burnout. You see whether career feeds soul or drains it. Intuition in professional decisions either proven right or revealed as wishful thinking. Purpose-driven work shows meaning or reveals you\'ve been avoiding practical reality. Boundaries at work tested.',
    moneyFinances: 'Financial results of creative work, healing services, or spiritual pursuits become visible. Money through art, spirituality, or compassion shows viability or proves financially unsustainable. You see clearly whether spiritual approach to money works or whether you\'ve been avoiding financial responsibility. Generosity either returns abundance or proves you gave more than you could afford. Financial illusions dissolve - reality check on money. Trust in divine provision tested.',
    predictions: [
      'Spiritual experience or mystical revelation confirms your faith or shatters illusions',
      'Creative or artistic project reaches completion and public sharing',
      'Forgiveness you offer creates profound healing or reveals you\'re forgiving the unforgivable',
      'Compassionate service reaches beautiful fulfillment or complete burnout - boundaries needed',
      'Dream or vision either manifests in reality or proves to be fantasy requiring release',
      'Relationship reaches transcendent intimacy or reveals codependence - truth emerges',
      'Artistic expression receives recognition or you realize you create for yourself, not others',
      'Surrender to divine flow brings miracles or you see where you\'ve been avoiding responsibility',
      'Boundary dissolution creates beautiful unity or dangerous merger - wisdom to know difference',
      'Connection to something greater becomes undeniable foundation or you realize you\'ve been escaping reality'
    ]
  }
};


// ============================================================================
// LUNAR ECLIPSE INTERPRETATIONS
// ============================================================================

const LUNAR_ECLIPSES: Record<string, LunarEclipseInterpretation> = {
  'Aries': {
    name: 'Lunar Eclipse in Aries',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Aries represents courage, independence, leadership, initiative, self-assertion, passion, and the warrior spirit. It\'s the drive to be first, the spark of new beginnings, and the courage to stand alone.',
    eventMeaning: 'A Lunar Eclipse in Aries brings intense emotional release around independence, self-assertion, and identity. This is a karmic completion point for patterns of people-pleasing, self-sacrifice, or losing yourself in relationships. Major endings occur in how you assert yourself - old anger, suppressed rage, or codependent patterns purge from your system. This eclipse demands you let go of who you thought you should be and release all the ways you\'ve dimmed your authentic power. Expect emotional catharsis around independence, courage, and standing alone. This is about ending cycles of weakness and birthing fierce self-reliance.',
    loveRelationships: 'Relationship patterns around independence and identity reach karmic completion and emotional release. You may finally end relationships where you\'ve lost yourself, or purge codependent patterns that have haunted you for years. Anger and resentment you\'ve suppressed erupts and clears. Some relationships end dramatically if they require you to be less than you are. Others transform through your emotional honesty about needing autonomy. This is about releasing the need to dim your light for love, letting go of partnerships that kept you small, and emotionally purging all the ways you\'ve betrayed yourself for acceptance.',
    familyHome: 'Family patterns around assertion and boundaries reach karmic ending. You emotionally release generations of people-pleasing, finally let go of family members who try to control you, or complete a cycle of suppressing your true self for family approval. Old anger at family dynamics surfaces for final purging. You may physically or emotionally leave family situations that have kept you weak. This eclipse completes your journey of reclaiming power from family, ending cycles where you had to be someone you\'re not to belong, and releasing the emotional weight of family expectations.',
    businessCareer: 'Career patterns of passivity, fear of leadership, or working for others\' approval reach karmic completion. You emotionally release jobs, bosses, or professional identities that kept you playing small. Suppressed frustration with authority or career limitations erupts and clears. This eclipse may bring endings in employment where you couldn\'t be autonomous, completion of professional cycles where you couldn\'t lead, or emotional purging of all the ways work has drained your courage. You release what must die professionally so fierce independence can be born.',
    moneyFinances: 'Financial codependence patterns reach karmic completion. You emotionally release dependence on others\' money, let go of financial situations that kept you powerless, or complete cycles of earning that required you to sacrifice autonomy. Financial anger or resentment surfaces and clears. This eclipse brings endings to income that came at the cost of your independence, completion of debt cycles that kept you controlled, and emotional purging of all shame around financial self-reliance. You must let go of financial security that costs you your soul.',
    predictions: [
      'Relationship ends dramatically after years of losing yourself - liberation through painful release',
      'Suppressed anger erupts and clears completely - you finally express what you\'ve held for years',
      'Job resignation or firing that completes cycle of working where you couldn\'t be authentic',
      'Emotional breakdown and breakthrough around self-worth - old patterns purge from system',
      'Family relationship reaches final ending or transformation through brutal honesty',
      'Physical symptoms related to suppressed rage finally surface and begin healing',
      'You will stop apologizing for your existence - people-pleasing pattern ends',
      'Karmic relationship completion - you understand the lesson and can finally let go',
      'Identity crisis that feels like death but is actually rebirth into authentic self',
      'Release of all the ways you\'ve made yourself small - emergence of fierce wholeness'
    ]
  },

  'Taurus': {
    name: 'Lunar Eclipse in Taurus',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Taurus represents material security, stability, sensory pleasure, values, persistence, patience, and building lasting worth. It\'s the energy of grounding, tangible reality, and what you can touch and keep.',
    eventMeaning: 'A Lunar Eclipse in Taurus brings intense emotional release around security, values, and self-worth. This is a karmic completion point for patterns of clinging to material security at the cost of growth, hoarding out of fear, or defining your worth by possessions. Major endings occur in your relationship with money, comfort, and stability - what you\'ve held onto out of fear must be released. This eclipse demands you let go of false security, release attachments to things that no longer serve your evolution, and emotionally purge all the ways you\'ve confused having with being. Expect dramatic loss or willing release of what seemed permanent but was actually imprisoning.',
    loveRelationships: 'Relationship patterns around security and possession reach karmic completion. You may finally release relationships you\'ve clung to out of fear of being alone, or let go of partners you\'ve tried to own or control. Patterns of staying for security rather than love end dramatically. This eclipse brings emotional release of all the ways you\'ve confused love with having someone, or valued relationships for what they provide rather than who someone is. You must let go of love that felt safe but kept you stuck, releasing possessiveness and fear-based attachment to find real emotional freedom.',
    familyHome: 'Family patterns around inheritance, material security, and home stability reach karmic ending. You may lose inherited property, release family wealth patterns that kept you trapped, or let go of the family home that represented false security. Emotional attachment to family resources or generational wealth completes its cycle. This eclipse purges your soul of the belief that family and material stability are the same thing, releases emotional dependence on family financial support, and completes cycles where you sacrificed growth for comfort at home.',
    businessCareer: 'Career patterns of staying in stable but soul-deadening work reach karmic completion. You emotionally release jobs that paid well but cost you your values, let go of career paths chosen for security rather than meaning, or complete cycles of building worth in work that doesn\'t matter. This eclipse brings endings to professional situations where you sold your soul for a paycheck, completion of careers that felt permanent but trapped you, and purging of all the ways you\'ve measured your worth by your salary or position.',
    moneyFinances: 'Major financial release and karmic completion around money patterns. You may lose money or possessions you were attached to, release financial security that was actually limiting your growth, or complete cycles of earning and hoarding out of fear. Material loss teaches spiritual lessons. This eclipse purges your soul of the belief that money equals security, releases poverty consciousness and scarcity wounds, and completes karmic patterns of defining self-worth by net worth. What must be financially released for your soul\'s evolution will be taken or surrendered.',
    predictions: [
      'Job loss or career ending that completes cycle of valuing security over meaning',
      'Financial loss that hurts but teaches you that you are not what you own',
      'Home you\'ve been attached to must be released - physical move completes karmic cycle',
      'Relationship ends because you realize you were clinging for security not love',
      'Inheritance issues complete - you release attachment to family money or property',
      'Possessions you valued lose meaning or must be sold - material attachment purges',
      'Self-worth crisis when external securities disappear - emergence of real value',
      'Pattern of hoarding or holding on ends through loss or conscious release',
      'You discover what really matters when what seemed permanent disappears',
      'Complete release of false security - birth of real trust in your inherent worth'
    ]
  },

  'Gemini': {
    name: 'Lunar Eclipse in Gemini',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Gemini represents communication, curiosity, learning, connections, mental agility, information exchange, and versatility. It\'s the energy of questions, conversations, short trips, siblings, and multiple perspectives.',
    eventMeaning: 'A Lunar Eclipse in Gemini brings intense emotional release around communication, information, and mental patterns. This is a karmic completion point for patterns of overthinking, mental anxiety, superficial connections, or saying what others want to hear. Major endings occur in how you communicate and think - old stories you\'ve told yourself, relationships based on talk rather than truth, or mental patterns that have kept you scattered must be released. This eclipse demands you let go of lies you\'ve told, mental distractions that have kept you from feeling, and all the ways you\'ve used words to avoid emotional truth. Expect emotional purging of conversations never had, truths never spoken, and mental noise that has drowned out your intuition.',
    loveRelationships: 'Communication patterns and superficial relating reach karmic completion. You may finally end relationships that were all talk and no depth, release partners with whom you could never have real conversations, or purge patterns of saying what you think others want to hear. Lies in relationships - yours or theirs - get exposed for final clearing. This eclipse brings emotional release of all the ways you\'ve avoided vulnerable communication, completes cycles of mental connection without emotional intimacy, and purges your soul of the need to be interesting rather than honest in love.',
    familyHome: 'Sibling relationships, family communication patterns, and neighborhood connections reach karmic ending. You may release toxic sibling dynamics, complete cycles of family gossip or superficial talk, or let go of communities where you never felt truly known. Family secrets that have been talked around finally surface for completion. This eclipse purges patterns of family communication that avoided real issues, releases the emotional weight of unsaid family truths, and completes karmic cycles with siblings or extended family that have kept you mentally exhausted but emotionally disconnected.',
    businessCareer: 'Career patterns around communication, teaching, or information work reach karmic completion. You may leave jobs that required you to speak without meaning, release professional identities built on superficial expertise, or complete cycles of networking that kept you busy but unfulfilled. This eclipse brings endings to work that was all data and no wisdom, completion of professional relationships based on exchange rather than connection, and emotional purging of careers where your words had no real impact or truth.',
    moneyFinances: 'Financial patterns around multiple income streams, communication work, or scattered earning reach karmic completion. You emotionally release income that came from talking rather than substance, let go of financial strategies based on distraction or mental cleverness, or complete cycles of earning that kept you busy but not prosperous. This eclipse purges financial anxiety rooted in mental rather than practical reality, releases the need to have backup plans for your backup plans, and completes patterns of financial decision-making based on information overwhelm rather than inner knowing.',
    predictions: [
      'Truth you\'ve avoided speaking finally erupts - conversation that changes everything',
      'Relationship ends when you realize you\'ve never really talked about what matters',
      'Sibling relationship reaches final completion or transformation through honesty',
      'Mental breakdown from information overwhelm leads to surrender and intuitive knowing',
      'Job involving communication or teaching ends - cycle of empty words completes',
      'Social media, networking, or communication platform you\'ve relied on becomes obsolete',
      'You stop lying to yourself - mental stories that kept you safe but stuck collapse',
      'Gossip or casual talk you engaged in comes back with karmic consequences',
      'Learning or education path you\'ve been on completes - you know enough, time to feel',
      'Release of mental anxiety through finally admitting you don\'t have to know everything'
    ]
  },

  'Cancer': {
    name: 'Lunar Eclipse in Cancer',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Cancer represents emotions, nurturing, family, home, roots, security, intuition, and the protective mother energy. It\'s the urge to belong, to care for others, and to create emotional safety.',
    eventMeaning: 'A Lunar Eclipse in Cancer brings the most intense emotional release and karmic completion around family, home, and emotional needs. This is the ultimate purging of family wounds, mother issues, and patterns of over-caring or emotional smothering. Major endings occur in family dynamics - relationships with parents, especially mother, reach crisis and completion. Old emotional patterns of seeking security through others, caring for everyone but yourself, or staying in situations because they\'re familiar must be emotionally purged. This eclipse demands you release family karma, let go of the past that has defined you, and emotionally complete your childhood so you can be born as your own person.',
    loveRelationships: 'Codependent relationship patterns and emotional enmeshment reach karmic completion. You may finally leave relationships where you\'ve been the caretaker to your own detriment, release partners who needed mothering rather than partnership, or purge patterns of seeking partners to fill childhood emotional voids. This eclipse brings massive emotional release of all the ways you\'ve confused nurturing with enabling, caring with controlling, or emotional intensity with intimacy. You must let go of relationships that kept you emotionally regressed, release the need to be needed, and complete family patterns you\'ve been repeating in romantic relationships.',
    familyHome: 'Family relationships reach ultimate karmic completion and emotional crisis. Mother relationships especially highlighted - final healing or final break. You may lose family members, home, or family structure you\'ve clung to. Childhood wounds surface for final purging and release. This eclipse completes your emotional umbilical cord to family - you must separate to survive. Endings with family that feel like death but are actually liberation. Home you\'ve lived in may be lost or left. All the ways your family has kept you emotionally imprisoned complete their cycle. Grief and freedom arrive together.',
    businessCareer: 'Career patterns of sacrificing professional success for family needs reach karmic completion. You emotionally release work situations where you were treated like family in unhealthy ways, let go of jobs that exploited your nurturing nature, or complete cycles of working in family business that drained your soul. This eclipse brings endings to careers where emotional labor was expected without compensation, completes professional identities built on caretaking, and purges the belief that work should feel like family rather than honorable exchange.',
    moneyFinances: 'Financial patterns around family support, home investments, or emotional spending reach karmic completion. You may lose money supporting family members who never reciprocated, release home or property with deep emotional attachment, or complete cycles of financial codependence with family. This eclipse purges financial patterns rooted in emotional need for security, releases money spent buying love or belonging, and completes karmic cycles where family and finances were unhealthily entangled. Financial separation from family becomes necessary for survival.',
    predictions: [
      'Mother relationship reaches final crisis - healing or permanent separation',
      'Home you\'ve lived in must be released - physical move completes emotional cycle',
      'Family member\'s death or permanent estrangement completes karmic pattern',
      'Emotional breakdown so complete you finally release childhood wounds',
      'Caretaking relationship ends when you realize you can\'t save anyone but yourself',
      'Family secrets surface that change everything you thought you knew',
      'You stop seeking family\'s approval - emotional umbilical cord finally cut',
      'Childhood home sold or lost - grief and liberation as past physically disappears',
      'Pattern of emotional eating, drinking, or numbing reaches crisis requiring change',
      'You birth yourself as your own parent - family patterns complete, you are free'
    ]
  },

  'Leo': {
    name: 'Lunar Eclipse in Leo',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Leo represents creativity, self-expression, joy, confidence, recognition, leadership, romance, and the radiant performer. It\'s the urge to shine, to create, to be seen and celebrated for who you truly are.',
    eventMeaning: 'A Lunar Eclipse in Leo brings intense emotional release around self-expression, creativity, and the need for recognition. This is a karmic completion point for patterns of performing for approval, creating for validation, or basing your worth on external applause. Major endings occur in creative projects, romantic relationships, or anything related to your authentic self-expression - what you\'ve created for the wrong reasons or who you\'ve performed being must be released. This eclipse demands you let go of the need to be special, release creative works that no longer represent who you are, and emotionally purge all the ways you\'ve confused being seen with being loved. Expect dramatic endings in romance, creative completion, or ego death.',
    loveRelationships: 'Romantic patterns and dramatic love dynamics reach karmic completion. You may finally end relationships that were passionate but unsustainable, release partners who couldn\'t truly see or celebrate you, or purge patterns of loving people for how special they made you feel. Grand romantic gestures reveal themselves as empty. This eclipse brings emotional release of all the ways you\'ve performed in relationships, completes cycles of being with partners who needed your radiance but couldn\'t match it, and purges addiction to romantic drama. Love that was theater rather than truth must end.',
    familyHome: 'Family patterns around favoritism, specialness, or parental approval reach karmic ending. You may release the role of golden child or family star, let go of needing to be the center of family attention, or complete cycles of performing for parental love. Relationships with children reach crisis points requiring release and transformation. This eclipse purges family dynamics where love was conditional on achievement or performance, releases the emotional wound of never being enough no matter how you shined, and completes patterns of seeking family validation through being special.',
    businessCareer: 'Creative career patterns and need for professional recognition reach karmic completion. You may leave careers in performance, leadership, or creative fields that have drained your authentic joy, release work where your value was measured by applause, or complete cycles of professional identity built on being admired. This eclipse brings endings to creative projects that no longer represent your truth, completes leadership roles that required you to perform rather than serve, and emotionally purges the need for professional fame or recognition to feel worthy.',
    moneyFinances: 'Financial patterns around creative work, speculative risks, or earning through performance reach karmic completion. You emotionally release income streams that required you to perform or be "on," let go of investments made from ego rather than wisdom, or complete cycles of spending to look special or impress others. This eclipse purges financial patterns rooted in compensating for unworthiness through lavish spending, releases money lost in creative or romantic pursuits that fed ego but not soul, and completes the karmic lesson that your worth isn\'t your net worth or your ability to shine.',
    predictions: [
      'Major romantic relationship ends dramatically - passion that burned too bright burns out',
      'Creative project you invested heart in must be abandoned or completely transformed',
      'Public humiliation or exposure strips away performed persona to reveal authentic self',
      'Relationship with child reaches crisis requiring you to release control and expectations',
      'Performance, leadership role, or creative work that defined you suddenly ends',
      'You realize people love your performance but not you - painful but liberating truth',
      'Creative block so complete you must surrender creating for approval and find authentic joy',
      'Investment in being special collapses - ego death births real self-worth',
      'You stop performing and watch who leaves - those who stay see real you',
      'Complete release of needing to be extraordinary - freedom of being ordinary and whole'
    ]
  },

  'Virgo': {
    name: 'Lunar Eclipse in Virgo',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Virgo represents service, health, organization, refinement, analysis, practical skill, and the dedicated craftsperson. It\'s the urge to improve, to be useful, to perfect your craft and serve meaningfully.',
    eventMeaning: 'A Lunar Eclipse in Virgo brings intense emotional release around perfectionism, health, and service patterns. This is a karmic completion point for patterns of self-criticism, over-working, serving others while neglecting yourself, or trying to perfect your way to worthiness. Major endings occur in work situations, health crises that force change, or service dynamics where you\'ve given too much - what you\'ve done out of fear of not being good enough must be released. This eclipse demands you let go of impossible standards, release work that has consumed you, and emotionally purge all the ways you\'ve tried to earn love through usefulness. Expect health breakdowns that demand attention, work endings that free you, or emotional collapse of perfectionist patterns.',
    loveRelationships: 'Relationship patterns of fixing, criticizing, or serving reach karmic completion. You may finally leave relationships where you\'ve been the healer to broken partners, release partnerships where you were valued for usefulness but not essence, or purge patterns of nitpicking and criticism that mask fear of intimacy. This eclipse brings emotional release of all the ways you\'ve tried to perfect partners or be perfect for them, completes cycles of relationships where you were appreciated for what you did but not who you are, and purges the belief that love must be earned through flawless service.',
    familyHome: 'Family patterns around caretaking, criticism, and never being good enough reach karmic ending. You may release the role of family servant or problem-solver, let go of family members whose constant needs have drained you, or complete cycles of trying to organize or fix your family. This eclipse purges family dynamics where love was conditional on perfection or usefulness, releases the emotional weight of family health issues you\'ve managed, and completes patterns of sacrificial service to family that has cost you your own wellbeing.',
    businessCareer: 'Work patterns of over-functioning, perfectionism, and unsustainable service reach karmic completion. You may quit jobs where you were overworked and undervalued, leave careers in service fields that have led to burnout, or release professional identities built on being indispensable. This eclipse brings endings to work situations where your health suffered for the job, completes cycles of trying to perfect your way to career security, and emotionally purges the belief that your value is your productivity. Health crisis may force career change.',
    moneyFinances: 'Financial patterns around compensation for service, budgeting anxiety, or earning through practical skills reach karmic completion. You emotionally release underpaid service work, let go of financial anxiety rooted in feeling you haven\'t done enough, or complete cycles of managing others\' money while neglecting your own abundance. This eclipse purges financial patterns of scarcity despite hard work, releases the belief that suffering equals success, and completes karmic lessons around being compensated for your true worth rather than your endless effort.',
    predictions: [
      'Health crisis forces you to stop, rest, and release patterns of overwork',
      'Job ends or you quit due to burnout - cycle of sacrificial service completes',
      'Relationship where you\'ve been caretaker or critic reaches final breaking point',
      'Perfectionist patterns collapse when you realize good enough was always enough',
      'Family member you\'ve been caring for must find other support - you release responsibility',
      'Critical voice in your head finally exhausts itself - self-compassion emerges',
      'Work project you\'ve tried to perfect must be released unfinished - surrender of control',
      'Health issue you\'ve ignored through service to others demands attention',
      'You stop trying to be useful and discover you\'re loved for being, not doing',
      'Complete breakdown of earning love through perfection - wholeness found in flaws'
    ]
  },

  'Libra': {
    name: 'Lunar Eclipse in Libra',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Libra represents partnership, balance, harmony, beauty, fairness, diplomacy, and relating to others. It\'s the urge to connect, to create beauty and peace, to find yourself through relationship with another.',
    eventMeaning: 'A Lunar Eclipse in Libra brings intense emotional release around relationships, partnerships, and balance. This is a karmic completion point for patterns of losing yourself in relationships, people-pleasing, avoiding conflict to maintain false peace, or defining yourself through partners. Major endings occur in significant relationships - marriages, business partnerships, or closest friendships that have completed their karmic purpose must be released. This eclipse demands you let go of relationships that require you to disappear, release the need to be liked at the cost of being real, and emotionally purge all the ways you\'ve abandoned yourself for harmony. Expect dramatic relationship endings, divorces, or separations that feel devastating but are liberating.',
    loveRelationships: 'Major romantic relationships and marriage patterns reach karmic completion and ending. You may divorce, separate from long-term partner, or finally leave relationships where you\'ve lost yourself completely. Patterns of staying for appearances, compromising your truth for partnership, or loving people who couldn\'t love you back come to dramatic conclusion. This eclipse brings the most intense emotional release around romantic codependence, completes soul contracts with partners you\'ve been tied to across lifetimes, and purges your need to be in relationship to feel whole. Being alone becomes essential for finding yourself again.',
    familyHome: 'Family patterns around fairness, favoritism, or family partnerships reach karmic ending. You may release family members who required constant diplomatic management, let go of family business partnerships that have drained you, or complete cycles of being the family peacekeeper at your own expense. This eclipse purges family dynamics where conflict was avoided at all costs, releases relationships with family members where reciprocity never existed, and completes patterns of making yourself smaller so family relationships could seem harmonious.',
    businessCareer: 'Business partnership patterns and collaborative work reach karmic completion. You may dissolve business partnerships, leave careers requiring constant diplomacy and relationship management, or release professional identities built on being likable rather than authentic. This eclipse brings endings to work in mediation, counseling, or relationship fields if they\'ve cost you your own balance, completes professional relationships where you gave more than received, and purges career patterns of valuing harmony over truth or fairness over personal integrity.',
    moneyFinances: 'Financial patterns around shared resources, partnership money, or earning through relationship work reach karmic completion. You may divide shared assets in separation or divorce, release financial dependence on partner income, or complete cycles of financial imbalance in partnerships. This eclipse purges financial patterns where peace cost you prosperity, releases money lost in trying to maintain relationships or appearances, and completes karmic lessons around fair exchange versus self-sacrifice in financial partnerships.',
    predictions: [
      'Marriage or major partnership ends after years - liberation through devastating loss',
      'You finally choose yourself over keeping peace - relationship consequences follow',
      'Business partnership dissolves when fairness proves impossible',
      'Pattern of people-pleasing collapses - you stop caring who you disappoint',
      'Divorce or separation completes karmic relationship that has run its course',
      'You discover who you are when you\'re not reflecting someone else',
      'Legal matters, contracts, or agreements reach final resolution or dissolution',
      'Friendship that required you to be diplomatic rather than honest ends',
      'You stop seeking balance with others and find it within yourself',
      'Complete release of defining yourself through relationships - wholeness in solitude'
    ]
  },

  'Scorpio': {
    name: 'Lunar Eclipse in Scorpio',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Scorpio represents transformation, depth, intensity, power, intimacy, shared resources, death and rebirth, and psychological truth. It\'s the urge to merge completely, to transform, to access hidden power.',
    eventMeaning: 'A Lunar Eclipse in Scorpio brings the most intense emotional purging, death, and karmic completion of all eclipses. This is the ultimate transformation point - major death and rebirth cycles complete, power dynamics reach final resolution, and deep psychological patterns that have haunted you for lifetimes get emotionally exorcised. Major endings occur in anything involving power, intimacy, shared resources, or psychological depth - toxic relationships, financial entanglements, addictions, or shadow patterns must die. This eclipse demands total emotional surrender, complete release of control, and letting go of everything that must die for your soul to be reborn. Expect actual deaths, metaphorical deaths, complete psychological transformation, and the end of who you\'ve been.',
    loveRelationships: 'The most intense relationship endings and transformations possible. Relationships based on power, control, obsession, or trauma bonding reach final death. You may leave or lose partners in dramatic, painful completions that feel like part of you is dying. Patterns of jealousy, possessiveness, manipulation, or sexual enmeshment get emotionally purged from your system. This eclipse completes karmic relationships that have spanned lifetimes, releases soul ties that have kept you bound, and demands complete death of codependent, obsessive, or psychologically toxic love patterns. Only relationships that can handle total truth and transformation survive.',
    familyHome: 'Family patterns involving power, abuse, inheritance, or deep psychological wounds reach ultimate karmic completion. You may experience actual death of family member, final break from abusive family dynamics, or complete emotional death of family enmeshment. Family secrets that have poisoned generations surface for final purging. This eclipse completes inheritance battles or shared family resource conflicts, releases transgenerational trauma patterns, and demands emotional exorcism of family darkness. Home may be lost through death, divorce, or necessary separation from toxic family system.',
    businessCareer: 'Career patterns involving power dynamics, transformation work, or shared business resources reach karmic completion. You may leave careers in psychology, healing, finance, or any depth work that has consumed you, experience professional death and rebirth, or release work identities that have kept you in your shadow. This eclipse brings endings to jobs involving other people\'s resources or power, completes professional transformations that have been years in process, and purges career patterns rooted in control, manipulation, or avoiding your real power.',
    moneyFinances: 'Major financial death and rebirth through loss of shared resources, inheritance, or investments. You may lose money in divorce, inheritance disputes, business dissolution, or investment collapse. Financial patterns around power, control, debt, or other people\'s money reach karmic completion. This eclipse purges your relationship with money at the deepest level, completes cycles of financial enmeshment or manipulation, and demands you release financial security built on unstable foundations. Total financial transformation possible - death of old money patterns, birth of new financial power.',
    predictions: [
      'Actual death of someone close completes karmic cycle and transforms you completely',
      'Relationship of intense passion, jealousy, or control finally ends - painful liberation',
      'Financial loss through divorce, inheritance battle, or investment collapse',
      'Addiction, obsession, or compulsive pattern reaches crisis requiring complete surrender',
      'Sexual or psychological trauma surfaces for final healing and release',
      'You access your real power by releasing need to control outcomes',
      'Secret that has haunted you gets revealed - shame transforms to freedom',
      'Psychological breakthrough after years of therapy or shadow work',
      'Complete death of old identity - you emerge transformed beyond recognition',
      'Total surrender of control births real power - phoenix rising from ashes'
    ]
  },

  'Sagittarius': {
    name: 'Lunar Eclipse in Sagittarius',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Sagittarius represents expansion, philosophy, truth-seeking, adventure, higher education, belief systems, foreign cultures, and the quest for meaning. It\'s the urge to grow beyond limits, seek truth, and find life\'s meaning.',
    eventMeaning: 'A Lunar Eclipse in Sagittarius brings intense emotional release around beliefs, meaning, and the search for truth. This is a karmic completion point for patterns of spiritual bypassing, endless seeking without finding, escaping through philosophy or travel, or believing in truths that keep you safe but stuck. Major endings occur in educational pursuits, belief systems, travel or relocation plans, or anything related to your search for meaning - what you\'ve believed must be emotionally released so real truth can emerge. This eclipse demands you let go of philosophies that no longer serve you, release the need to have all the answers, and emotionally purge all the ways you\'ve used expansion to avoid depth. Expect crisis of faith, educational endings, or geographical completions.',
    loveRelationships: 'Relationship patterns around freedom, honesty, and shared philosophy reach karmic completion. You may finally leave relationships that felt like cages, release partners who didn\'t share your vision or truth, or purge patterns of escaping intimacy through adventure or philosophical differences. This eclipse brings emotional release of all the ways you\'ve used freedom to avoid commitment or honesty to avoid vulnerability, completes relationships with people from different cultures or backgrounds that couldn\'t bridge the gap, and purges the belief that perfect love exists somewhere else if you just keep searching.',
    familyHome: 'Family patterns around religion, education, or cultural identity reach karmic ending. You may release family belief systems that have constrained you, let go of family expectations about education or success, or complete cycles of geographical distance from family. This eclipse purges family religious or philosophical indoctrination, releases the emotional weight of being the family truth-teller who nobody wanted to hear, and completes patterns of escaping family through travel or relocation. You may finally return home or permanently leave.',
    businessCareer: 'Career patterns in education, teaching, publishing, or international work reach karmic completion. You may leave teaching positions, complete educational programs that no longer serve your path, or release careers requiring constant travel that have exhausted you. This eclipse brings endings to work that promised meaning but delivered only motion, completes professional identities built on being the wise teacher or truth-teller, and purges career patterns of seeking perfect purpose instead of accepting your actual path.',
    moneyFinances: 'Financial patterns around educational investments, international business, or risk-taking based on optimism reach karmic completion. You emotionally release money lost in degree programs that didn\'t deliver promised opportunities, let go of international business ventures that failed, or complete cycles of financial risk-taking based on faith rather than wisdom. This eclipse purges financial patterns of spending on experiences over stability, releases money lost in seeking meaning through travel or education, and completes the lesson that abundance comes from grounded action not optimistic belief.',
    predictions: [
      'Educational program you invested years in must be abandoned - degree incomplete but lesson learned',
      'Relationship ends due to incompatible life philosophies or one person needing more freedom',
      'International move or relocation plan falls apart - you must stay and face what you\'ve avoided',
      'Religious or spiritual belief system you built life on collapses - faith crisis and rebirth',
      'Teaching position or publishing contract ends - cycle of sharing wisdom completes',
      'Travel or adventure you planned gets cancelled - forced to find meaning where you are',
      'Truth you\'ve been speaking finally exhausts you - surrender of needing to be right',
      'Optimism that has sustained you breaks - dark night of soul before real faith emerges',
      'You stop seeking answers elsewhere and find truth has been within you all along',
      'Complete release of needing to understand everything - peace in mystery'
    ]
  },

  'Capricorn': {
    name: 'Lunar Eclipse in Capricorn',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Capricorn represents ambition, achievement, responsibility, structure, authority, mastery, and building lasting legacy. It\'s the urge to climb the mountain, master your craft, and build something that endures.',
    eventMeaning: 'A Lunar Eclipse in Capricorn brings intense emotional release around career, achievement, and authority. This is a karmic completion point for patterns of overwork, sacrificing personal life for professional success, seeking approval from authority figures, or building achievements on unstable foundations. Major endings occur in career, public reputation, or relationship with authority - what you\'ve built out of fear or external pressure rather than authentic ambition must crumble. This eclipse demands you let go of success that costs you your soul, release need for external validation of your worth, and emotionally purge all the ways you\'ve climbed ladders leaning against the wrong walls. Expect career endings, falls from public status, or authority figures\ final impact.',
    loveRelationships: 'Relationship patterns around commitment, structure, and emotional availability reach karmic completion. You may finally leave relationships that were committed in form but empty of feeling, release partners who were successful but emotionally unavailable, or purge patterns of choosing partners for status rather than love. This eclipse brings emotional release of all the ways you\'ve treated relationships like business arrangements, completes cycles of being with partners who couldn\'t be vulnerable, and purges the belief that commitment means staying in structures that imprison rather than support you.',
    familyHome: 'Family patterns around responsibility, achievement pressure, and parental authority reach karmic ending. You may release the role of responsible family member carrying everyone, let go of father or authority figure whose approval you\'ve sought, or complete cycles of family expectations about success and achievement. This eclipse purges family dynamics where love was conditional on accomplishment, releases the emotional weight of family legacy or business you never wanted, and completes patterns of sacrificing your life for family duty or reputation.',
    businessCareer: 'Major career endings, professional identity death, or public status loss. You may be fired, forced to resign, see business fail, or watch career you built for years collapse. This eclipse completes karmic cycles in careers chosen for security rather than passion, brings endings to professional roles that have consumed your personal life, and purges work identities built on others\' expectations rather than your authentic ambition. What must professionally die for your soul to live will be taken or released. Falling from mountain you never wanted to climb.',
    moneyFinances: 'Financial patterns around career income, business investments, or long-term security planning reach karmic completion. You may lose money through business failure, career loss, or collapse of financial structures you built, release financial strategies based on fear and control, or complete cycles of earning that cost you more than money could buy. This eclipse purges your relationship with money as status or security, releases financial patterns rooted in scarcity and fear of not having enough, and completes the lesson that real wealth includes time, health, and relationships sacrificed for material success.',
    predictions: [
      'Career you\'ve built for years suddenly ends - firing, resignation, or business failure',
      'Public reputation damaged or status lost - fall from professional mountain',
      'Relationship ends when you realize you committed to structure without love',
      'Father or authority figure relationship reaches final completion through loss or break',
      'Achievement you sacrificed everything for proves empty - success without fulfillment',
      'Family business or legacy you were supposed to carry must be released',
      'Health crisis from overwork forces complete career restructuring',
      'You quit prestigious position that was killing your soul',
      'Professional identity dies - crisis of "who am I without my title or achievement"',
      'Complete release of climbing for approval - finding your own mountain to climb'
    ]
  },

  'Aquarius': {
    name: 'Lunar Eclipse in Aquarius',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Aquarius represents innovation, revolution, community, friendship, humanitarian ideals, individuality, technology, and the future. It\'s the urge to be uniquely yourself while contributing to collective progress.',
    eventMeaning: 'A Lunar Eclipse in Aquarius brings intense emotional release around authenticity, friendships, and belonging to community. This is a karmic completion point for patterns of conforming to groups, losing yourself in causes, intellectualizing emotions, or being so different you\'re isolated. Major endings occur in friendships, community involvement, or group affiliations - connections that have kept you from authentic individuality must be released. This eclipse demands you let go of friend groups that require you to be someone you\'re not, release causes you\'ve served at the cost of personal life, and emotionally purge all the ways you\'ve hidden your uniqueness to belong. Expect friendship endings, community exiles, or technology/innovation projects that complete.',
    loveRelationships: 'Relationship patterns around friendship, freedom, and emotional detachment reach karmic completion. You may finally leave relationships that were mentally connected but emotionally distant, release partners who loved your uniqueness but couldn\'t handle your humanity, or purge patterns of prioritizing friendship and community over intimate partnership. This eclipse brings emotional release of all the ways you\'ve used independence to avoid vulnerability, completes relationships where you were too different to truly connect, and purges the belief that authentic love requires you to be emotionally detached or unconventional.',
    familyHome: 'Family patterns around being the black sheep, family rejection of your uniqueness, or chosen family dynamics reach karmic ending. You may release biological family who never accepted your authentic self, let go of chosen family or friend groups that became as constraining as blood family, or complete cycles of being so different from family you never felt you belonged. This eclipse purges the wound of family rejection for being yourself, releases the need to find perfect accepting tribe, and completes patterns of choosing between authenticity and belonging.',
    businessCareer: 'Career patterns in technology, innovation, community organizing, or humanitarian work reach karmic completion. You may leave careers in tech that have dehumanized you, release work in social causes that have consumed your personal life, or complete professional identities built on being the innovative outsider. This eclipse brings endings to work that promised utopian vision but delivered burnout, completes collaborative or collective work projects, and purges career patterns of sacrificing present life for future vision that never arrives.',
    moneyFinances: 'Financial patterns around unconventional income, cryptocurrency, technology investments, or community financial support reach karmic completion. You emotionally release money lost in innovative but unstable ventures, let go of financial strategies based on future prediction rather than present reality, or complete cycles of financially supporting causes or friends at your own expense. This eclipse purges financial patterns of rejecting traditional security for innovative risk, releases money lost in technology or cryptocurrency speculation, and completes the lesson that financial freedom requires practical foundation not just revolutionary ideas.',
    predictions: [
      'Major friendship ends when you realize you\'ve been performing your uniqueness for acceptance',
      'Community or group you belonged to exiles or disappoints you - forced to stand alone',
      'Technology project or innovation you invested in fails or completes its cycle',
      'You choose authentic messiness over curated uniqueness - watch who stays',
      'Cause or humanitarian work you dedicated yourself to betrays its ideals',
      'Online community or social media platform you relied on becomes toxic or obsolete',
      'Friendship group that defined your identity dissolves - identity crisis and rebirth',
      'You stop being interesting and become real - loneliness before authentic connection',
      'Revolutionary change you fought for either completes or proves impossible',
      'Complete release of needing to be special or different - freedom in ordinary humanity'
    ]
  },

  'Pisces': {
    name: 'Lunar Eclipse in Pisces',
    frequency: 'Roughly every 18-19 years in this sign',
    duration: '~6 months of influence',
    signEnergy: 'Pisces represents spirituality, compassion, imagination, surrender, transcendence, unity, dreams, and dissolution of boundaries. It\'s the urge to merge with something greater, to access infinite compassion and spiritual truth.',
    eventMeaning: 'A Lunar Eclipse in Pisces brings the most profound spiritual and emotional release - complete dissolution of ego, surrender of control, and karmic completion of victim patterns, addiction, or spiritual bypassing. This is the ultimate ending point for illusions, escapism, martyrdom, or confusing transcendence with avoidance. Major endings occur in anything involving boundaries, spirituality, creativity, or compassion - relationships, substances, beliefs, or identities that have kept you from reality must dissolve. This eclipse demands total surrender, complete release of illusions, and emotionally purging all the ways you\'ve used spirituality, substances, or fantasy to avoid life. Expect spiritual crisis, addiction endings, creative completions, or the death of who you thought you were supposed to be.',
    loveRelationships: 'The most painful relationship endings involving illusion, fantasy, addiction, or spiritual connection. You may leave or lose soulmate relationships that were beautiful illusions, release partners you tried to save or who tried to save you, or purge patterns of confusing love with suffering or compassion with codependence. This eclipse brings complete emotional dissolution of relationships based on fantasy rather than reality, completes karmic soul contracts with partners who taught you through pain, and purges the belief that unconditional love means accepting unacceptable treatment. Only love rooted in reality and healthy boundaries can survive.',
    familyHome: 'Family patterns around addiction, mental illness, victimhood, or spiritual/religious enmeshment reach karmic completion. You may lose family members to addiction or illness, finally detach from family members whose chaos has consumed you, or complete cycles of being family scapegoat or savior. This eclipse purges transgenerational addiction and mental health patterns, releases the emotional weight of family secrets involving shame or suffering, and completes patterns of sacrificing yourself to save family members who won\'t save themselves. Compassion transforms from enabling to healthy boundaries.',
    businessCareer: 'Career patterns in healing, spirituality, creativity, or service reach karmic completion through burnout or disillusionment. You may leave careers in healthcare, counseling, spiritual work, or arts that have drained you completely, release professional identities built on saving others, or complete creative projects that consumed years. This eclipse brings endings to work that promised spiritual meaning but delivered only exhaustion, completes cycles of compassionate service without boundaries, and purges career patterns of martyrdom or believing your suffering serves others.',
    moneyFinances: 'Financial patterns around creative work, spiritual services, or financial confusion reach karmic completion. You may lose money to deception, see creative or spiritual work fail financially, or complete cycles of giving money away out of guilt or misplaced compassion. This eclipse purges financial illusions and magical thinking, releases money lost to addiction or enabling others, and completes the lesson that spiritual values require practical financial foundation. Financial reality check ends years of avoiding money matters through spiritual bypass.',
    predictions: [
      'Addiction or escapist pattern reaches crisis requiring complete surrender and recovery',
      'Relationship based on fantasy, spiritual connection, or mutual suffering finally ends',
      'Creative or spiritual work you devoted years to must be released incomplete',
      'Illusion about someone or situation completely shatters - painful reality emerges',
      'Family member with addiction or illness you\'ve tried to save must be released to their path',
      'Spiritual belief system that sustained you collapses - dark night before real awakening',
      'You stop saving others and discover your compassion was enabling',
      'Dreams and visions that guided you revealed as escapism - return to reality required',
      'Complete emotional breakdown and breakthrough - ego dissolution births authentic self',
      'Total surrender of control, fantasy, and victim stories - freedom through acceptance of what is'
    ]
  }
};

export default {
  SOLAR_ECLIPSES,
  NEW_MOONS,
  FULL_MOONS,
  LUNAR_ECLIPSES
};
