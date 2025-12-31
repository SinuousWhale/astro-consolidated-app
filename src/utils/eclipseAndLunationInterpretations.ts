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
  }
};

export default {
  SOLAR_ECLIPSES,
  NEW_MOONS,
  FULL_MOONS
};
