export interface CareerClub {
  id: string;
  name: string;
  period: string;
  role: string;
  category: 'pro' | 'state' | 'club';
  achievements: string[];
  description: string;
  logo?: string;
  badgeHighlight?: string;
}

export interface CoachingRole {
  id: string;
  role: string;
  organization: string;
  period: string;
  highlights: string[];
  type: 'sports-science' | 'academy' | 'corporate' | 'school';
  subInstitutes?: string[];
  techUsed?: string[];
}

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: 'match' | 'team' | 'coaching' | 'portrait';
  caption: string;
  year?: string;
}

export const PERSONAL_DATA = {
  name: "John Benedict M",
  badgeName: "JOHN BENEDICT . M",
  tagline: "Ex-I-League Professional Footballer | Elite Strength & Conditioning Specialist | Sports Scientist",
  shortBio: "With over 15 years as a professional football stalwart across India's top leagues and now an elite Strength & Conditioning coach at Sree Kanteerava Stadium's Centre of Sports and Science, John Benedict merges high-performance on-pitch battle experience with modern sports science technology.",
  contact: {
    phone: "9845469799",
    displayPhone: "+91 98454 69799",
    email: "john.mogle18@gmail.com",
    address: "#51, New CementLine, AustinTown, Bangalore – 560047, Karnataka, India",
    location: "Bangalore, India",
    workVenue: {
      title: "Centre for Sports Science (CSS)",
      gate: "Gate No. 8",
      stadium: "Sree Kanteerava Outdoor Stadium",
      city: "Bangalore, Karnataka",
      fullAddress: "Centre for Sports Science, Gate No. 8, Sree Kanteerava Outdoor Stadium, Sampangi Rama Nagar, Bangalore – 560001",
      directionsUrl: "https://www.google.com/maps/search/?api=1&query=Centre+for+Sports+Science+Gate+8+Sree+Kanteerava+Outdoor+Stadium+Bangalore",
      instructions: "Currently active on-site as Strength & Conditioning Coach. If you would like to meet John in person for an athlete evaluation, academy training, or consultation, please visit him at Gate No. 8, Sree Kanteerava Outdoor Stadium."
    }
  },
  personalProfile: {
    fatherName: "Micheal Dass (Late)",
    dob: "01 / 03 / 1989",
    qualification: "B.A. (Bachelor of Arts)",
    currentPursuit: "Pursuing B.P.Ed. (Bachelor of Physical Education)",
    coachingLicense: "AIFF D-License Course (Completed in Mumbai)",
    nationality: "Indian",
    maritalStatus: "Married",
    religion: "Christian (RC)",
    languages: ["English", "Hindi", "Kannada", "Tamil"],
  },
  physicalAttributes: {
    dominantFoot: "Right Foot",
    height: "5'11\" (180 cm)",
    weight: "80 kg",
    preferredPositions: ["Central Defender (CB)", "Right Wing (RW)"],
    secondarySpecialty: "Middle Distance Running (Represented University in 800m & 1600m)",
  },
  statsSummary: [
    { label: "Pro Football Career", value: "15+ Yrs", desc: "Top-tier national & state level" },
    { label: "Championships & Trophies", value: "6+", desc: "National, BDFA & State titles" },
    { label: "Sports Science Tech Systems", value: "5", desc: "Force Plates, IKD, DASH-R, K-Push" },
    { label: "Talent Scout Evaluator", value: "3 Years", desc: "Karnataka State ID (2023-2025)" },
  ]
};

export const PLAYING_CAREER: CareerClub[] = [
  {
    id: "mumbai-fc-high-league",
    name: "Mumbai Football Club",
    period: "2006 – 2010",
    role: "Central Defender / Right Wing",
    category: "pro",
    logo: "/images/logo_mumbai_fc.jpg",
    badgeHighlight: "I-League & 2nd Div Champions",
    achievements: [
      "2nd Division National League Champions (2007–2008) — Earned Historic Promotion to I-League Top Tier",
      "Represented Mumbai FC in the prestigious 2008 Federation Cup in Kolkata against top national powerhouses",
      "Core squad member of the inaugural Mumbai FC squad established in June 2007 under GM Henry Menezes & Head Coach David Booth",
      "3-Year professional contract playing in India's top flight"
    ],
    description: "Anchor of the defense and versatile wing player during Mumbai FC's historic formative era, competing at the highest echelon of Indian football in the National I-League and Federation Cup."
  },
  {
    id: "pune-fc",
    name: "Pune Football Club",
    period: "2011 – 2013",
    role: "Defender / Wing Back",
    category: "pro",
    logo: "/images/logo_pune_fc.jpg",
    badgeHighlight: "I-League Premier Tier",
    achievements: [
      "Competed 2 full seasons for Pune Football Club, one of India's most scientifically developed football clubs",
      "Contributed to solid defensive campaigns in national cup competitions and top-tier league clashes"
    ],
    description: "Played two seasons at Pune FC, recognized across India for pioneering professional football operations, high-tempo tactical organization, and elite youth development."
  },
  {
    id: "bengal-mumbai-fc",
    name: "Bengal Mumbai Football Club (BMFC)",
    period: "2010 – 2011",
    role: "Central Defender",
    category: "pro",
    badgeHighlight: "Mumbai Elite Division",
    achievements: [
      "Key defensive starter for a 1-year campaign in Western India's competitive circuit",
      "Demonstrated aerial authority and disciplined marking against seasoned overseas and domestic strikers"
    ],
    description: "Represented BMFC in high-intensity Mumbai and state-wide tournaments, delivering strong physical presence and tactical solidity."
  },
  {
    id: "bdfa-xi",
    name: "Bangalore District Football Association XI (BDFA XI)",
    period: "2014",
    role: "Defensive Leader / Wing",
    category: "state",
    logo: "/images/logo_bdfa.png",
    badgeHighlight: "National Champions 🏆",
    achievements: [
      "WINNERS of the 3rd All India Football Tournament — Patna, Bihar (2014)",
      "Selected as one of Bangalore's top elite footballers to represent the district association on the national stage",
      "Key contributor in high-stakes knockout clashes culminating in lifting the national trophy"
    ],
    description: "Captained or anchored the BDFA district representative team to national glory in Bihar, overcoming premier state teams across India."
  },
  {
    id: "hal-club",
    name: "Hindustan Aeronautics Limited (HAL) Club",
    period: "2013 – 2014",
    role: "Defender",
    category: "pro",
    logo: "/images/logo_hal.png",
    badgeHighlight: "Runners-Up All India 🥈",
    achievements: [
      "Runners-Up in the prestigious 'All India Football Tournament' held at Gadhinglaj, Maharashtra (2013)",
      "Represented legendary public-sector football institution HAL during top-tier inter-state matches"
    ],
    description: "Competed for one of Karnataka's most storied institutional clubs, securing podium finishes in national all-India competitions."
  },
  {
    id: "karnataka-state-youth",
    name: "Karnataka State Representative Teams",
    period: "2003 – 2006",
    role: "State Defender / Midfielder",
    category: "state",
    logo: "/images/logo_ksfa.png",
    badgeHighlight: "National Trophies",
    achievements: [
      "Represented Karnataka State U-21 in the Dutta Roy Trophy held at Tirunelveli, Tamil Nadu (2006)",
      "Represented Karnataka State U-19 in the Dr. B.C. Roy Trophy held at Thrissur, Kerala (2005)",
      "Represented Karnataka State U-16 in the Mr. Iqbal Hussain Trophy at Udhagamandalam / Ooty, Tamil Nadu (2004)",
      "Karnataka State Under 16 squad (Stand-by in 2003)"
    ],
    description: "Progressed through every single age group of Karnataka state football, serving as an irreplaceable defensive stalwart at India's foremost national youth championships."
  },
  {
    id: "southern-blues",
    name: "Southern Blues Football Club",
    period: "2003 – 2005",
    role: "Starting Defender / Right Wing",
    category: "club",
    badgeHighlight: "Back-to-Back Champions 🏆🏆",
    achievements: [
      "A-Division League Champions (2004 – 2005)",
      "B-Division League Champions (2003 – 2004)",
      "Achieved back-to-back promotions through unbeaten tactical discipline"
    ],
    description: "Spearheaded Southern Blues to successive divisional titles, earning immediate recognition from state selectors."
  },
  {
    id: "institutional-clubs",
    name: "CIL & BEL (Institutional Football)",
    period: "2005 – 2007, 2015 – 2016",
    role: "Senior Defensive Stalwart",
    category: "club",
    badgeHighlight: "Institutional Leagues",
    achievements: [
      "Controlect Inspection Of Electronics (CIL) — 2005 to 2006 and 2015 to 2016",
      "Bharat Electronics Limited (BEL) — 2006 to 2007",
      "Competed against high-caliber institutional setups and Bangalore Super Division teams"
    ],
    description: "Represented two of the most disciplined engineering institutions in India in official corporate and institutional football tournaments."
  },
  {
    id: "student-union-fc",
    name: "Student Union Football Club (SUFC)",
    period: "2014 – 2015",
    role: "Veteran Defender & Leader",
    category: "club",
    logo: "/images/logo_sufc.png",
    badgeHighlight: "Since 1955 Bangalore Club",
    achievements: [
      "Competed in the Bangalore Super Division with historic Cox Town outfit Student Union FC",
      "Guided young prospects with tactical leadership on the pitch"
    ],
    description: "Brought veteran leadership to one of Bangalore's most historic clubs, dating back to 1955."
  },
  {
    id: "university-athletics",
    name: "University Track & Field Representative",
    period: "Collegiate Years",
    role: "Middle Distance Athlete",
    category: "state",
    badgeHighlight: "800m & 1600m Specialist",
    achievements: [
      "Represented the University in both 800 Meters and 1600 Meters track events",
      "Exceptional VO2 max and aerobic base that empowered 90-minute high-intensity running as an overlapping wing back"
    ],
    description: "Dual-sport excellence: combined middle-distance university endurance with professional football speed and agility."
  }
];

export const SPORTS_SCIENCE_TECHNOLOGIES = [
  {
    id: "force-plates",
    name: "Dual Force Plates",
    acronym: "FP",
    category: "Biomechanical Power & Asymmetry",
    description: "Utilized for high-frequency kinematic analysis of vertical ground reaction forces (vGRF), eccentric rate of force development (RFD), countermovement jumps (CMJ), and left-to-right force distribution symmetry during take-off and landing.",
    applications: [
      "Detection of neuromuscular fatigue and recovery readiness",
      "Bilateral landing asymmetry scoring to prevent ACL and knee ligament tears",
      "Reactive Strength Index (RSI) calculation for explosive acceleration"
    ],
    color: "emerald"
  },
  {
    id: "ikd",
    name: "Isokinetic Dynamometry",
    acronym: "IKD",
    category: "Gold-Standard Muscular Torque",
    description: "The clinical and sports science gold standard for measuring isolated joint muscle performance at controlled angular velocities. Assesses concentric and eccentric torque of the knee flexors and extensors.",
    applications: [
      "Hamstring-to-Quadriceps (H:Q) functional ratio calculation",
      "Safe, data-driven Return-To-Play (RTP) clearance post-injury",
      "Identification of muscular imbalances before onset of chronic strains"
    ],
    color: "cyan"
  },
  {
    id: "k-push",
    name: "K-Push Dynamometry",
    acronym: "KP",
    category: "Isometric Force Measurement",
    description: "Precision wireless handheld and anchored dynamometer designed for instantaneous muscle strength assessment, tracking peak isometric force curves, and monitoring athletic rehabilitation progress.",
    applications: [
      "Upper and lower extremity isometric strength testing",
      "Real-time biofeedback during rehabilitation and resistance training",
      "Objective benchmarking across pre-season and mid-season cycles"
    ],
    color: "gold"
  },
  {
    id: "dash-r",
    name: "DASH-R Sprint Laser Diagnostics",
    acronym: "DASH",
    category: "Sprint Speed & Acceleration Profiling",
    description: "High-precision laser timing and speed profiling system engineered to capture fractional split-second acceleration curves, maximum velocity (V-max), and deceleration mechanics.",
    applications: [
      "0-10m and 0-30m acceleration breakdown for wingers and defenders",
      "Horizontal force-velocity profiling (F-v profile)",
      "Deceleration capacity assessment to mitigate hamstring injury mechanisms"
    ],
    color: "emerald"
  },
  {
    id: "blazepod",
    name: "BlazePod Reaction Training",
    acronym: "PODS",
    category: "Cognitive Agility & Neuro-Athletics",
    description: "Visual reaction pod training combining cognitive-perceptual stimuli with sport-specific physical movement patterns to sharpen decision-making speed and peripheral awareness.",
    applications: [
      "Neuro-cognitive reaction time testing and visual tracking",
      "Agility change-of-direction under visual stimulus",
      "Goalkeeper and defender spatial reaction conditioning"
    ],
    color: "cyan"
  }
];

export const COACHING_EXPERIENCE: CoachingRole[] = [
  {
    id: "kanteerava-sports-science",
    role: "Strength & Conditioning Coach",
    organization: "Centre of Sports and Science (CSS) — Sree Kanteerava Stadium",
    period: "Current / Ongoing",
    type: "sports-science",
    highlights: [
      "Providing elite-level athletic conditioning, functional power development, and biomechanical performance analysis for elite athletes at Karnataka's premier sports hub",
      "Deploying clinical-grade sports science equipment including force plates, isokinetic dynamometry, and laser sprint systems",
      "Designing individualized periodization schedules balancing hyper-velocity, hypertrophy, and injury prevention"
    ],
    techUsed: ["Force Plates", "Isokinetic Dynamometry (IKD)", "K-Push", "DASH-R", "BlazePod"]
  },
  {
    id: "roots-football",
    role: "Lead Trainer — Athletic Development",
    organization: "ROOTS Football Team",
    period: "Current / Ongoing",
    type: "sports-science",
    highlights: [
      "Heading complete athletic conditioning and physical development across U15, U17, and U19 elite age groups",
      "Implementing structured speed-agility-quickness (SAQ) protocols tailored specifically to youth physiology and match demands",
      "Conducting ongoing physiological evaluations to ensure seamless transition of academy graduates into senior teams"
    ],
    techUsed: ["Youth Periodization", "SAQ Drills", "Fatigue Monitoring", "Plyometric Progressions"]
  },
  {
    id: "karnataka-talent-evaluator",
    role: "Technical Evaluator",
    organization: "Karnataka Talent Identification",
    period: "2023, 2024, 2025",
    type: "sports-science",
    highlights: [
      "Selected as official technical expert to scout, benchmark, and evaluate high-potential footballers across Karnataka State",
      "Applying objective sports science metrics combined with professional eye-test tactical evaluation",
      "Recommending elite prospects for state representative camps and national youth tournaments"
    ],
    techUsed: ["Physical Profiling", "Technical Rubrics", "Match Performance Evaluation"]
  },
  {
    id: "kids-chaupal",
    role: "Football Coach",
    organization: "Kids Chaupal Pvt Ltd",
    period: "2023 – 2026",
    type: "school",
    subInstitutes: [
      "GIG International School",
      "Yashasvi International School",
      "Jeff International School"
    ],
    highlights: [
      "Directing progressive football curricula across three renowned international schools",
      "Instilling core football fundamentals, tactical understanding, sportsmanship, and physical literacy in young athletes",
      "Preparing school representative squads for inter-school and state championships"
    ]
  },
  {
    id: "cathedral-school",
    role: "Football & Athletics Coach",
    organization: "Cathedral High School, Bangalore",
    period: "2023",
    type: "school",
    highlights: [
      "Coached both football squads and track-and-field athletics teams, drawing upon university 800m/1600m competitive background",
      "Structured track endurance programs alongside team ball drills"
    ]
  },
  {
    id: "legends-de-sporting",
    role: "Head Coach & Senior Player",
    organization: "Legends De Sporting",
    period: "2020 – 2022",
    type: "academy",
    highlights: [
      "Dual player-coach responsibility leading team tactical sessions and starting as #29 on match days",
      "Fostered winning mentality and high-tempo transitional football"
    ]
  },
  {
    id: "miku-academy",
    role: "Football Coach",
    organization: "Miku Football Academy",
    period: "2020 – 2022",
    type: "academy",
    highlights: [
      "Structured age-specific developmental tiers focusing on spatial awareness, first touch, and competitive small-sided games"
    ]
  },
  {
    id: "synergy-sports",
    role: "Academy Coach",
    organization: "Synergy Sports Academy",
    period: "2018 – 2019",
    type: "academy",
    highlights: [
      "Delivered technical skill training modules and grassroots player development programs"
    ]
  },
  {
    id: "ncfe-excellence",
    role: "Football Coach",
    organization: "National Center For Excellence (NCFE)",
    period: "2016 – 2018",
    type: "school",
    highlights: [
      "Spearheaded school team conditioning and tactical development, winning multiple inter-school fixtures"
    ]
  },
  {
    id: "biocon-corporate",
    role: "Corporate Fitness Trainer",
    organization: "Biocon Ltd.",
    period: "2017 – 2018",
    type: "corporate",
    highlights: [
      "Designed corporate employee wellness, posture correction, and functional strength conditioning programs for corporate executives and laboratory personnel"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "suit-portrait",
    src: "/images/john_suit_portrait.jpg",
    title: "John Benedict M — Professional Headshot",
    category: "portrait",
    caption: "Executive and professional coaching portrait of John Benedict M.",
    year: "Current"
  },
  {
    id: "match-mahindra",
    src: "/images/match_action_mahindra_vs_mumbai.png",
    title: "High-Stakes League Action — Mumbai FC",
    category: "match",
    caption: "John Benedict (#18 in blue) in intense on-ball action against Mahindra United during the premier league campaign.",
    year: "2008"
  },
  {
    id: "match-tackle",
    src: "/images/match_action_tackle.jpg",
    title: "Decisive Defensive Challenge",
    category: "match",
    caption: "Executing a clinical tackle to break an opposition counter-attack.",
    year: "2009"
  },
  {
    id: "match-celebration",
    src: "/images/match_action_celebration.jpg",
    title: "Match Day Composure — #18 in Blue",
    category: "match",
    caption: "John Benedict (#18) communicating with backline teammates during competitive action.",
    year: "2008"
  },
  {
    id: "mumbai-fc-squad-2007",
    src: "/images/team_mumbai_fc_debut_2007.jpg",
    title: "The Inaugural Mumbai Football Club Team",
    category: "team",
    caption: "The first Mumbai Football Club squad established in June 2007, led by General Manager Henry Menezes and Head Coach David Booth.",
    year: "2007"
  },
  {
    id: "karnataka-state-squad",
    src: "/images/team_karnataka_squad_2006.jpg",
    title: "Karnataka State Representative Squad",
    category: "team",
    caption: "John Benedict with the Karnataka State representative team at the National Championship.",
    year: "2006"
  },
  {
    id: "team-kanteerava",
    src: "/images/team_kanteerava_stadium.jpg",
    title: "Sree Kanteerava Stadium — High Performance Squad",
    category: "coaching",
    caption: "John Benedict at the Centre of Sports and Science with the elite performance team at Sree Kanteerava Stadium.",
    year: "2024"
  },
  {
    id: "team-legends-sporting",
    src: "/images/team_legends_de_sporting.jpg",
    title: "Legends De Sporting Championship Squad",
    category: "coaching",
    caption: "Coaching and leading the yellow brigade of Legends De Sporting to league victories.",
    year: "2021"
  },
  {
    id: "jersey-29",
    src: "/images/john_jersey_29.jpg",
    title: "Jersey #29 — Legends De Sporting",
    category: "portrait",
    caption: "John Benedict M donning Jersey #29 on the pitch as player-coach.",
    year: "2021"
  },
  {
    id: "red-jersey-smile",
    src: "/images/john_red_jersey_portrait.jpg",
    title: "Athlete Portrait — Pune FC Era",
    category: "portrait",
    caption: "Post-match smile in the red kit during I-League campaign.",
    year: "2012"
  }
];

export const ACHIEVEMENTS = [
  {
    title: "All India Football Tournament Champions",
    organization: "Bangalore District Football Association XI (BDFA XI)",
    year: "2014",
    location: "Patna, Bihar",
    highlight: "National Title",
    icon: "Trophy"
  },
  {
    title: "National 2nd Division League Champions",
    organization: "Mumbai Football Club",
    year: "2007 – 2008",
    location: "India",
    highlight: "Promoted to I-League Top Tier",
    icon: "Medal"
  },
  {
    title: "A-Division League Champions",
    organization: "Southern Blues Football Club",
    year: "2004 – 2005",
    location: "Bangalore",
    highlight: "League Champions",
    icon: "Trophy"
  },
  {
    title: "B-Division League Champions",
    organization: "Southern Blues Football Club",
    year: "2003 – 2004",
    location: "Bangalore",
    highlight: "League Champions",
    icon: "Trophy"
  },
  {
    title: "All India Football Tournament Runners-Up",
    organization: "Hindustan Aeronautics Limited (HAL)",
    year: "2013",
    location: "Gadhinglaj, Maharashtra",
    highlight: "Silver Medalist",
    icon: "Award"
  },
  {
    title: "Federation Cup Finalist Stage Competitor",
    organization: "Mumbai Football Club",
    year: "2008",
    location: "Kolkata, West Bengal",
    highlight: "Premier National Cup",
    icon: "Shield"
  },
  {
    title: "Karnataka State U-21 (Dutta Roy Trophy)",
    organization: "Karnataka State Football Association",
    year: "2006",
    location: "Tirunelveli, Tamil Nadu",
    highlight: "State Representative",
    icon: "Star"
  },
  {
    title: "Karnataka State U-19 (Dr. B.C. Roy Trophy)",
    organization: "Karnataka State Football Association",
    year: "2005",
    location: "Thrissur, Kerala",
    highlight: "National Youth Championship",
    icon: "Star"
  },
  {
    title: "Karnataka State U-16 (Mr. Iqbal Hussain Trophy)",
    organization: "Karnataka State Football Association",
    year: "2004",
    location: "Udhagamandalam, Tamil Nadu",
    highlight: "Youth State Cap",
    icon: "Star"
  },
  {
    title: "University 800m & 1600m Middle Distance Representative",
    organization: "University Athletics",
    year: "Collegiate",
    location: "State Universities",
    highlight: "Athletics Honors",
    icon: "Zap"
  }
];

