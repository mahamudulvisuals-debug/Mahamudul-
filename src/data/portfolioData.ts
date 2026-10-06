import { Project, ExperienceItem, EducationItem, Article, Testimonial, Slide } from '../types';

export const PERSONAL_INFO = {
  name: 'Mahamudul Hassan',
  role: 'Presentation Designer & Pitch Deck Specialist',
  tagline: 'Transforming ideas into high-impact visual stories that close deals and raise capital.',
  status: 'Available for Select Q2 / Q3 Projects',
  email: 'mahamudul.visuals@gmail.com',
  bookingUrl: 'https://tidycal.com/mahamudul/30mins',
  website: 'https://mahamudulhassan.com',
  location: 'Global / Worldwide',
  bio: `Welcome to my creative space! I’m Mahamudul Hassan, a presentation designer and visual storyteller with a passion for transforming ideas into stunning, impactful slides. I believe a great presentation isn’t just about beautiful design—it’s about telling a compelling story that connects with your audience.

With a mix of creativity, strategy, and design expertise, I help businesses, entrepreneurs, and professionals bring their ideas to life through engaging and persuasive presentations. Whether it’s a high-stakes pitch, an investor deck, or a keynote speech, I craft slides that do more than just look good—they speak, inspire, and leave a lasting impression.`,
  socialLinks: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mahamudulhassan', icon: 'linkedin' },
    { name: 'X / Twitter', url: 'https://x.com/mahamudulhsn', icon: 'twitter' },
    { name: 'Instagram', url: 'https://www.instagram.com/itsmahamudul', icon: 'instagram' },
    { name: 'Behance', url: 'https://www.behance.net/mahamudulhassan', icon: 'behance' },
    { name: 'Dribbble', url: 'https://dribbble.com/mahamudulhassan', icon: 'dribbble' },
  ],
  stats: [
    { label: 'Capital Raised by Clients', value: '$45M+' },
    { label: 'Decks & Keynotes Crafted', value: '320+' },
    { label: 'Global Clients & Founders', value: '180+' },
    { label: 'Years of Visual Storytelling', value: '8+' },
  ]
};

export const CLIENT_LOGOS = [
  { name: 'Apple', url: 'https://mahamudulhassan.com/wp-content/uploads/2025/02/apple.png' },
  { name: 'HubSpot', url: 'https://mahamudulhassan.com/wp-content/uploads/2025/02/hubs.png' },
  { name: 'Inc. Magazine', url: 'https://mahamudulhassan.com/wp-content/uploads/2025/02/inc.png' },
  { name: 'Microsoft', url: 'https://mahamudulhassan.com/wp-content/uploads/2025/02/micro.png' },
  { name: 'IBM', url: 'https://mahamudulhassan.com/wp-content/uploads/2025/02/ibm.png' },
  { name: 'Yahoo', url: 'https://mahamudulhassan.com/wp-content/uploads/2025/02/yahoo.png' },
];

export const DEMO_DECK_SLIDES: Slide[] = [
  {
    id: 1,
    title: 'THE NEXT EVOLUTION IN ENTERPRISE COMMERCE',
    category: 'EXECUTIVE OVERVIEW',
    subtitle: 'Confidential Investor Pitch Deck · Series A Financing',
    description: 'Transforming how global brands orchestrate decentralized inventory and autonomous checkout experiences.',
    keyMetric: { value: '$14.2B', label: 'Total Addressable Market' },
    points: [
      'Empowering enterprise brands with real-time distributed supply routing',
      'AI-driven algorithmic demand forecasting across 40+ markets',
      'Patent-pending low-latency ledger synchronization'
    ],
    theme: 'dark',
    layoutType: 'hero'
  },
  {
    id: 2,
    title: 'THE FRICTION IN TRADITIONAL CHANNELS',
    category: 'PROBLEM STATEMENT',
    subtitle: 'Legacy software causes 34% drop-off at enterprise point of conversion',
    description: 'Existing retail monoliths were engineered for linear supply chains, unable to support synchronous omnichannel fulfillment.',
    keyMetric: { value: '38 Days', label: 'Average Legacy Integration Delay' },
    points: [
      'Fragmented data silos between warehouse ERP and customer-facing interfaces',
      'High latency during flash-sale spikes leading to $2.1M average lost revenue',
      'Over-reliance on brittle custom middleware with 18% annual maintenance overhead'
    ],
    theme: 'dark',
    layoutType: 'split'
  },
  {
    id: 3,
    title: 'THE AUTONOMOUS FULFILLMENT PLATFORM',
    category: 'OUR SOLUTION',
    subtitle: 'Sub-second API routing that converts 2.8x higher than legacy stacks',
    description: 'A unified operational cockpit that connects supplier nodes, digital storefronts, and 3PL carriers seamlessly.',
    keyMetric: { value: '99.99%', label: 'Uptime SLA with Global Latency < 45ms' },
    points: [
      'Plug-and-play SDKs for Shopify Plus, Salesforce Commerce, and custom headless stacks',
      'Predictive inventory balancing reducing dead stock write-downs by 42%',
      'Single pane of glass analytics for CFOs, COOs, and operations leads'
    ],
    theme: 'accent',
    layoutType: 'flow'
  },
  {
    id: 4,
    title: 'VALIDATED TRACTION & RAPID ADOPTION',
    category: 'GROWTH METRICS',
    subtitle: 'Scaling from $400K to $3.8M ARR in 14 months with zero churn',
    description: 'Consistent top-decile SaaS benchmarks driven by strong customer expansion and programmatic upsells.',
    keyMetric: { value: '410%', label: 'Year-Over-Year ARR Expansion' },
    points: [
      '142 Enterprise logos onboarded including 8 Fortune 500 pilots',
      '128% Net Revenue Retention (NRR) driven by organic store expansion',
      'Customer Acquisition Payback Period compressed to 6.2 months'
    ],
    theme: 'dark',
    layoutType: 'stats'
  },
  {
    id: 5,
    title: 'BUSINESS MODEL & REVENUE ENGINE',
    category: 'UNIT ECONOMICS',
    subtitle: 'Predictable high-margin SaaS subscription plus volumetric take-rate',
    description: 'Diversified dual revenue streams creating resilient, compounding monthly recurring revenue with 82% gross margins.',
    keyMetric: { value: '82%', label: 'Gross Margin' },
    points: [
      'Tiered monthly platform licensing based on processed node volume',
      '0.45% usage fee on total gross merchandise value routed via protocol',
      'Enterprise professional onboarding and white-glove migration services'
    ],
    theme: 'dark',
    layoutType: 'split'
  },
  {
    id: 6,
    title: 'THE CAPITAL ASK & CAPITAL ALLOCATION',
    category: 'FINANCING GOALS',
    subtitle: 'Seeking $6,000,000 Series A to accelerate tier-1 market expansion',
    description: 'Funding will provide 24 months of runway to expand the engineering core, scale enterprise sales, and achieve cash-flow breakeven.',
    keyMetric: { value: '$6.0M', label: 'Series A Target (55% Committed)' },
    points: [
      '50% Engineering & Product: Accelerate AI dispatching and multi-tenant scaling',
      '30% Enterprise Go-To-Market: Scale US & European commercial sales directors',
      '20% Working Capital & Strategic Integrations: Certified carrier ecosystem'
    ],
    theme: 'accent',
    layoutType: 'stats'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'monarch-inc',
    title: 'Monarch Inc. Brand Redesign',
    subtitle: 'Executive Presentation System & Series B Strategic Pitch',
    category: 'Pitch Decks',
    client: 'Monarch Inc.',
    year: '2024',
    image: 'https://mahamudulhassan.com/wp-content/uploads/2025/02/project-4-1.jpg',
    deliverables: ['Investor Pitch Deck', 'Visual Brand Architecture', 'Keynote Template System', 'Financial Modeling Slides'],
    summary: 'Monarch Inc. needed to reposition itself from a regional logistics operator into an AI-powered global supply chain infrastructure leader. We overhauled their entire visual language and crafted an authoritative 35-slide investor deck.',
    challenge: 'The existing deck was overloaded with dense text, unorganized technical diagrams, and inconsistent typography that failed to communicate their proprietary competitive moat to top-tier Silicon Valley VCs.',
    solution: 'Designed a bold architectural visual language featuring high-contrast typography, clear hierarchy, bespoke 3D-styled data visualizations, and an unhurried, confidence-inspiring narrative structure.',
    outcome: 'Monarch closed a $18M Series B round led by premier venture funds within 6 weeks of rolling out the new presentation.',
    metrics: [
      { label: 'Series B Closed', value: '$18M' },
      { label: 'VC Partner Meetings', value: '28' },
      { label: 'Slide Deck Read-Through', value: '94%' },
      { label: 'Turnaround Time', value: '12 Days' }
    ],
    tags: ['Pitch Deck', 'Series B', 'Logistics', 'Data Viz', 'Typography']
  },
  {
    id: 'bloom-app',
    title: 'Bloom App Design & Pitch',
    subtitle: 'Mobile Health Product Deck & Seed Funding Story',
    category: 'Web & Product',
    client: 'Bloom Health Technologies',
    year: '2024',
    image: 'https://mahamudulhassan.com/wp-content/uploads/2025/02/project-1-1.jpg',
    deliverables: ['Seed Pitch Deck', 'Interactive Mobile App Showcase', 'Investor One-Pager', 'Figma Presentation System'],
    summary: 'Bloom is an AI-powered holistic wellness and habit tracking platform. We crafted a vibrant, empathy-centered presentation that brought the mobile app experience into the boardroom.',
    challenge: 'Translating complex circadian rhythm science and biometric data into an intuitive consumer proposition that investors could fall in love with in less than 5 minutes.',
    solution: 'Created realistic mobile mockups nested inside fluid editorial slide layouts with micro-narratives focused on user daily journeys, retention metrics, and consumer habit loops.',
    outcome: 'Bloom oversubscribed their seed round, securing $3.5M from leading consumer tech angel syndicates.',
    metrics: [
      { label: 'Seed Round Raised', value: '$3.5M' },
      { label: 'Oversubscription Rate', value: '140%' },
      { label: 'Investor Pitch Duration', value: '18 min' },
      { label: 'Slide Count', value: '16 Slides' }
    ],
    tags: ['Mobile App', 'Seed Pitch', 'HealthTech', 'Consumer UX', 'UI Showcase']
  },
  {
    id: 'extra-space',
    title: 'Extra Space Website & Spatial Deck',
    subtitle: 'Commercial Real Estate Pitch & Spatial Storytelling',
    category: 'Web & Product',
    client: 'Extra Space Urban Storage',
    year: '2023',
    image: 'https://mahamudulhassan.com/wp-content/uploads/2025/02/project-3-1.jpg',
    deliverables: ['Commercial Expansion Deck', 'Corporate Web Design Concept', 'Interactive Spatial Map Slides', 'Board Presentation'],
    summary: 'A contemporary visual system and comprehensive board presentation for an urban space optimization and self-storage enterprise expanding across 12 metropolitan centers.',
    challenge: 'Storage is traditionally viewed as utilitarian and dry. The presentation needed to feel modern, sleek, and architecturally visionary to win municipal approvals and institutional investment.',
    solution: 'Engineered an ultra-clean architectural aesthetic with generous negative space, crisp isometric spatial graphics, and financial yield comparisons presented with crystal clarity.',
    outcome: 'Secured multi-site municipal approvals and $24M in project development debt financing.',
    metrics: [
      { label: 'Project Financing', value: '$24M' },
      { label: 'Cities Approved', value: '12 Centers' },
      { label: 'Institutional Approval', value: '100%' },
      { label: 'Design System Assets', value: '45+ Modules' }
    ],
    tags: ['Real Estate', 'Commercial Deck', 'Architecture', 'Urban Space', 'Yield Analysis']
  },
  {
    id: 'serene-branding',
    title: 'Serene Branding & Keynote',
    subtitle: 'Holistic Lifestyle Identity & Global Summit Keynote',
    category: 'Brand Identity',
    client: 'Serene Collective',
    year: '2023',
    image: 'https://mahamudulhassan.com/wp-content/uploads/2025/02/project-2-1.jpg',
    deliverables: ['Global Keynote Presentation', 'Brand Guidelines Deck', 'Investor Summary Deck', 'Stage Visuals (16:9 Widescreen)'],
    summary: 'A tranquil yet luxurious identity and stage keynote deck crafted for Serene Collective’s European launch event before 2,500 industry leaders and luxury hospitality partners.',
    challenge: 'Crafting slides that felt serene and organic without sacrificing high-end luxury authority on massive 4K LED stage screens.',
    solution: 'Curated warm earth tones, elegant serif typography pairings, and minimalist layout balance that looked breathtaking both on personal iPads and 50-foot stage monitors.',
    outcome: 'The launch keynote generated over 150 immediate corporate partnership inquiries and won praise across European lifestyle media.',
    metrics: [
      { label: 'Keynote Audience', value: '2,500+' },
      { label: 'Partnership Leads', value: '150+' },
      { label: 'Screen Aspect Ratio', value: '16:9 Widescreen' },
      { label: 'Brand Guidelines', value: '60 Pages' }
    ],
    tags: ['Keynote', 'Brand Identity', 'Stage Design', 'Luxury', 'Event Presentation']
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Design Lead',
    company: 'IMAZIN',
    period: '2020 – Present',
    location: 'Remote / Global Agency',
    description: 'Leading a specialized presentation and visual design team crafting high-stakes investor decks, corporate narratives, and brand systems for Fortune 500 clients and high-growth venture-backed startups.',
    highlights: [
      'Helped early and growth-stage founders secure over $45M+ in venture capital rounds',
      'Developed bespoke master presentation design systems for executive teams',
      'Trained and directed junior presentation designers in typographic hierarchy and data storytelling'
    ]
  },
  {
    role: 'Creative Director',
    company: 'SlideStack',
    period: '2022 – 2024',
    location: 'Digital Marketplace',
    description: 'Directed creative vision and template architecture for SlideStack, a global marketplace delivering premium PowerPoint, Keynote, and Google Slides themes used by thousands of business professionals worldwide.',
    highlights: [
      'Engineered over 150+ modular presentation themes with 99% user satisfaction rating',
      'Standardized color frameworks, master slides, and reusable data visualization components',
      'Curated content strategies for corporate pitches, consulting frameworks, and executive reports'
    ]
  },
  {
    role: 'Visual Designer',
    company: 'Webfarus',
    period: '2017 – 2018',
    location: 'Faro, Portugal (Remote)',
    description: 'Created engaging visual identities, website designs, digital marketing assets, and client pitch materials for an international digital marketing agency.',
    highlights: [
      'Designed responsive web layouts and client proposal decks that increased agency win rates by 35%',
      'Collaborated directly with European founders on branding and visual identity rollout',
      'Balanced rigorous UX structure with modern aesthetic appeal across digital assets'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Masters in Sociology',
    institution: 'National University of Bangladesh',
    period: '2014 – 2015',
    description: 'Deepened foundational understanding of social structures, human behavior, cultural dynamics, and audience perception. This sociological grounding uniquely informs Mahamudul’s approach to persuasive visual communication and investor psychology.'
  },
  {
    degree: 'Bachelor in Sociology',
    institution: 'National University of Bangladesh',
    period: '2010 – 2013',
    description: 'Formative academic training in societal issues, human interactions, critical thinking, and research methodology—instilling disciplined analytical frameworks applicable to corporate storytelling.'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'vc-deck-psychology',
    title: 'The 30-Second Hook: Why Modern VCs Skim and How to Win Them',
    date: 'February 2025',
    readTime: '5 min read',
    category: 'Pitch Strategy',
    excerpt: 'Venture capitalists spend an average of 2 minutes and 40 seconds reviewing a seed deck. Here is how to construct slides that communicate your moat in the first 30 seconds.',
    content: [
      'Every week, venture partners review between 40 to 80 pitch decks. Most are opened on a laptop during an Uber ride or skimmed quickly between partner meetings.',
      'The single biggest mistake founders make is treating their deck like a technical whitepaper. Investors do not read sentences; they scan visual anchors: bold numbers, clear headlines, and clean graphs.',
      'Rule 1: The headline must be an active assertion, not a topic label. Instead of "Market Size", write "$14B TAM Expanding at 24% CAGR Driven by Cloud Migration".',
      'Rule 2: Restrict each slide to one dominant idea. If an investor has to search for what matters, you have already lost them.'
    ]
  },
  {
    id: 'typography-keynotes',
    title: 'Typography for the 50th Row: Principles of Large-Scale Stage Slides',
    date: 'January 2025',
    readTime: '4 min read',
    category: 'Keynote Craft',
    excerpt: 'Designing a presentation for a 4K LED wall in a convention hall requires a radically different discipline than a PDF read on a 13-inch MacBook.',
    content: [
      'When you design on a desktop monitor 20 inches from your face, 18pt font looks gigantic. On a stage where audience members sit 80 feet away, that same font becomes invisible smudge.',
      'We design keynotes starting with minimum 48pt text for secondary notes, and 96pt+ for core thesis assertions.',
      'High contrast is non-negotiable. Ambient stage lighting washes out subtle grays. True deep blacks (#000000) and crisp warm whites (#F5F5F7) ensure maximum punch and legibility.'
    ]
  },
  {
    id: 'data-viz-clarity',
    title: 'Transforming Ugly Excel Charts into Board-Ready Visuals',
    date: 'November 2024',
    readTime: '6 min read',
    category: 'Data Design',
    excerpt: 'How to distill 50-row spreadsheets into intuitive bar charts, cohorts, and unit economic waterfalls that command authority.',
    content: [
      'Financial models are inherently complex, but presentation slides are a communication tool, not an audit ledger.',
      'Always highlight the delta or trendline in your brand’s primary accent color, while keeping historical baseline figures in muted neutral tones.',
      'Never leave raw numbers without their relevant benchmark. A $2M ARR milestone only impresses when contextualized against the 6-month growth curve.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Mahamudul transformed our rambling 40-page deck into a razor-sharp 16-slide story that secured our $18M Series B. His grasp of investor psychology and typographic discipline is second to none.',
    author: 'David Sterling',
    role: 'CEO & Co-Founder',
    company: 'Monarch Logistics'
  },
  {
    id: '2',
    quote: 'We had 2 weeks before our Silicon Valley demo day. Mahamudul worked with lightning speed, delivered breathtaking visual slides, and our round was oversubscribed by 40%.',
    author: 'Elena Rostova',
    role: 'Founder',
    company: 'Bloom Health Tech'
  },
  {
    id: '3',
    quote: 'The keynote presentation he built for our European launch had 2,500 people in complete awe. Clean, cinematic, and profoundly persuasive.',
    author: 'Julian Vance',
    role: 'Head of Growth',
    company: 'Serene Collective'
  }
];
