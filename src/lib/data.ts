export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  tag: string;
  features: string[];
  deliverables: string[];
  turnaround: string;
  roiStat: string;
  useCases: string[];
  priceStarting: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "ads" | "banners" | "images" | "workshops";
  categoryLabel: string;
  image: string;
  description: string;
  client: string;
  impact: string;
  toolsUsed: string[];
  aspectRatio?: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  serviceUsed: string;
  feedback: string;
  metric: string;
  verified: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  idealFor: string;
  deliveryTime: string;
  revisions: string;
}

export interface PaymentOption {
  id: string;
  name: string;
  description: string;
  badge: string;
  icon: string;
  supported: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "services" | "pricing" | "workshops";
}

export const SERVICES: Service[] = [
  {
    id: "ai-advertisements",
    slug: "ai-advertisements",
    title: "AI Advertisements & Commercials",
    shortDesc: "Cinematic, broadcast-grade AI video ads and commercial spots with photorealistic actors, synthetic voiceovers, and high-converting storytelling.",
    longDesc: "We produce cutting-edge AI commercials that rival traditional multi-million-dollar production studios. Utilizing advanced neural rendering, Runway Gen-3, Kling AI, and custom voice cloning, we deliver ready-to-broadcast ads in 48 hours without expensive camera crews, location scouting, or actors.",
    icon: "Video",
    tag: "High Conversion",
    features: [
      "Custom AI Actor & Avatar generation tailored to your exact brand persona",
      "Multilingual neural voiceover in 40+ languages with emotional inflection",
      "Cinematic 4K 60fps dynamic camera movements and VFX simulations",
      "Scriptwriting & Hook engineering optimized for TikTok, Reels, YouTube & TV",
      "Custom audio design, licensed soundtrack integration, and sound FX"
    ],
    deliverables: [
      "Full 4K commercial cuts (15s, 30s, 60s formats)",
      "Multi-ratio exports (9:16 vertical, 16:9 widescreen, 1:1 square)",
      "Layered project assets and raw high-res footage clips",
      "Commercial distribution license with full copyright transfer"
    ],
    turnaround: "48-72 Hours",
    roiStat: "+320% Higher ROAS vs Traditional Creatives",
    useCases: ["D2C Brand Launch", "SaaS Explainer Video", "TV & Streaming Ads", "App Install Campaigns"],
    priceStarting: "$1,499"
  },
  {
    id: "ai-ads",
    slug: "ai-ads",
    title: "AI Performance Ads & Social Creatives",
    shortDesc: "High-volume, multi-variant ad creatives specifically engineered for Meta, TikTok, and Google Ads algorithms to slash your CPA and maximize CTR.",
    longDesc: "In modern paid acquisition, creative fatigue kills ad accounts. We generate high-frequency, multi-hook AI performance ad batches that allow media buyers to test 20+ hooks and visual concepts every single week at a fraction of traditional agency costs.",
    icon: "TrendingUp",
    tag: "Scale Engine",
    features: [
      "Rapid Hook Variation Matrix (10+ opening visual hooks per ad concept)",
      "Dynamic Product Insertion & seasonal background transformations",
      "AI UGC (User-Generated Content) testimonials with native authentic aesthetic",
      "Platform-specific aspect ratio and caption styling optimizations",
      "A/B creative testing advisory based on performance benchmarks"
    ],
    deliverables: [
      "Batch of 10 to 30 tested ad variations per sprint",
      "Static and Motion hybrid ad formats (Animated Carousels & Reels)",
      "Targeted headline & primary copy variations powered by GPT-4o",
      "Dedicated creative dashboard for instant download"
    ],
    turnaround: "24-48 Hours",
    roiStat: "4.2x Average Click-Through Rate (CTR)",
    useCases: ["E-commerce Scaling", "Meta Advantage+ Campaigns", "TikTok Spark Ads", "Lead Generation Funnels"],
    priceStarting: "$899"
  },
  {
    id: "ai-banners",
    slug: "ai-banners",
    title: "AI Banners & Omnichannel Displays",
    shortDesc: "Ultra-crisp responsive banner suites and visual campaigns for Google Display Network, Amazon storefronts, and website hero headers.",
    longDesc: "Transform your brand across all digital touchpoints with hyper-personalized, ultra-sharp banner ecosystems. We produce cohesive omnichannel visual banners for programmatic advertising, Google Performance Max, Amazon A+ content, and web promotions.",
    icon: "LayoutGrid",
    tag: "Omnichannel",
    features: [
      "Full 12+ IAB Standard Ad Size generation in minutes",
      "Brand-aligned color palettes, typographic hierarchies, and micro-animations",
      "High-contrast CTA button designs engineered for maximum clickability",
      "Seasonal and flash sale theme adaptation without rebuilding assets",
      "Vector and WebP exports optimized for lightning-fast web load speeds"
    ],
    deliverables: [
      "Complete 12-piece IAB Standard Display Suite",
      "Hero Website & Landing Page Web Banners (Desktop, Tablet, Mobile)",
      "Social Header Bundles (LinkedIn, X/Twitter, Facebook, YouTube)",
      "Retina 2x/3x resolution files ready for ad networks"
    ],
    turnaround: "24 Hours",
    roiStat: "+85% Increase in Banner Engagement Rate",
    useCases: ["Google Performance Max", "Amazon Storefronts", "Black Friday / Flash Sales", "Brand Retargeting"],
    priceStarting: "$499"
  },
  {
    id: "ai-images",
    slug: "ai-images",
    title: "AI Hyper-realistic Images & CGI Visuals",
    shortDesc: "Magazine-quality product staging, virtual photoshoots, luxury aesthetic portraits, and 8K commercial visuals with zero physical cameras.",
    longDesc: "Say goodbye to $20,000 photo shoots, studio rentals, and shipping sample products overseas. Our proprietary AI rendering pipeline creates photorealistic lifestyle environments, model staging, 3D packaging renders, and editorial-grade commercial photography with unmatched fidelity.",
    icon: "Sparkles",
    tag: "8K Fidelity",
    features: [
      "Virtual Product Placement in any imaginable luxury or exotic setting",
      "Custom LoRA model training on your physical product line for 100% fidelity",
      "Ultra-HD 8K upscaling with microscopic texture preservation",
      "Studio lighting simulation (Golden hour, neon cyber, minimalist studio)",
      "Infinite variations: changing models, seasons, backgrounds in minutes"
    ],
    deliverables: [
      "8K resolution master image files (JPEG, PNG, TIFF)",
      "Transparent PNG background cutouts for flexible e-commerce cataloging",
      "Social media ready crop variations (1:1, 4:5, 16:9)",
      "Exclusive commercial property rights transfer"
    ],
    turnaround: "24-48 Hours",
    roiStat: "80% Savings compared to Physical Photoshoots",
    useCases: ["E-Commerce Hero Shots", "Print & Billboard Campaigns", "Luxury Packaging Staging", "Brand Lookbooks"],
    priceStarting: "$699"
  },
  {
    id: "ai-workshops",
    slug: "ai-workshops",
    title: "AI Corporate Workshops & Executive Upskilling",
    shortDesc: "Intensive, hands-on masterclasses for marketing teams, creative directors, and executives to master generative AI workflows and production pipelines.",
    longDesc: "Empower your in-house teams to produce enterprise-grade AI content. Our custom-tailored workshops provide practical, step-by-step training on Midjourney v6+, Flux Pro, ComfyUI, Runway Gen-3, Kling, ElevenLabs, and custom prompt engineering architectures for commercial scalability.",
    icon: "GraduationCap",
    tag: "Enterprise Training",
    features: [
      "Customized curriculum tailored to your company's industry and brand guidelines",
      "Live interactive prompting sessions & ComfyUI advanced pipeline builds",
      "Ethical AI usage, commercial rights mastery, and copyright protection frameworks",
      "Implementation roadmap for cutting creative production costs by 70%",
      "Post-workshop 30-day Q&A support and proprietary prompt library access"
    ],
    deliverables: [
      "Live 1-Day or Multi-Day intensive workshop (Remote or On-Site)",
      "Complete recording library & slide deck documentation",
      "Exclusive 'Beyond AI Prompt Bible' with 500+ commercial prompt recipes",
      "Team certification & 30 days of direct asynchronous mentorship"
    ],
    turnaround: "Scheduled on demand",
    roiStat: "10x In-house Creative Speed Multiplier",
    useCases: ["Creative Agency Teams", "Corporate Marketing Depts", "Executive Leadership", "Brand Design Studios"],
    priceStarting: "$2,499"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Ultra-Futuristic Cinematic Car Reveal",
    category: "ads",
    categoryLabel: "AI Video Ad",
    image: "/images/showcase-1.png",
    description: "Next-generation automotive commercial created with dynamic lighting, photorealistic chrome reflections, and particle effects.",
    client: "Nexus Motors",
    impact: "+420% Video Completion Rate on YouTube",
    toolsUsed: ["Runway Gen-3", "Flux Pro", "ComfyUI", "DaVinci Neural VFX"]
  },
  {
    id: "port-2",
    title: "Luxury Cybernetic Fashion & Avatar Staging",
    category: "images",
    categoryLabel: "AI Images",
    image: "/images/showcase-2.png",
    description: "Editorial fashion shoot staged in a neon-lit cyberpunk universe, showcasing hyper-detailed fabric textures and dramatic lighting.",
    client: "Aetheria Luxury Apparel",
    impact: "+280% Instagram Engagement & Direct Sales",
    toolsUsed: ["Midjourney v6.1", "Custom LoRA", "Topaz 8K Upscaler"]
  },
  {
    id: "port-3",
    title: "High-Performance Omnichannel Display Banner Set",
    category: "banners",
    categoryLabel: "AI Banners",
    image: "/images/showcase-3.png",
    description: "Multi-size responsive banner suite engineered for Black Friday & Q4 digital ad scale with eye-catching cyber gradients.",
    client: "VoltTech Audio",
    impact: "+92% CTR on Google Performance Max",
    toolsUsed: ["Flux Pro", "Figma AI Scripting", "WebP Suite"]
  },
  {
    id: "port-4",
    title: "Surreal Atmospheric Product Environment",
    category: "images",
    categoryLabel: "AI Images",
    image: "/images/showcase-4.png",
    description: "Virtual beverage & perfume staging set against an ethereal twilight backdrop, saving $35k in on-location production costs.",
    client: "Lumina Fragrances",
    impact: "Zero physical shooting cost • 24h Delivery",
    toolsUsed: ["Stable Diffusion XL", "Flux Pro", "Neural Lighting"]
  },
  {
    id: "port-5",
    title: "Executive AI Masterclass & Pipeline Transformation",
    category: "workshops",
    categoryLabel: "AI Workshop",
    image: "/images/showcase-magic.png",
    description: "2-Day intensive corporate workshop upskilling 85+ marketing leads on automated AI creative pipelines and commercial prompting.",
    client: "Global Tech Media Group",
    impact: "Saved 400+ hours/month in internal creative workflows",
    toolsUsed: ["ComfyUI", "Flux Pipeline", "ElevenLabs", "GPT-4o APIs"]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Marcus Vance",
    role: "Chief Marketing Officer",
    company: "Apex D2C Brands",
    avatar: "MV",
    rating: 5,
    serviceUsed: "AI Performance Ads & Commercials",
    feedback: "Beyond - The AI Kompany completely revolutionized our paid acquisition. What used to take our traditional agency 4 weeks and $25,000, Beyond delivered in 48 hours for a fraction of the price. Our Meta ROAS jumped from 1.8x to 4.1x immediately!",
    metric: "+340% ROAS Increase",
    verified: true
  },
  {
    id: "rev-2",
    name: "Elena Rostova",
    role: "VP of Creative Direction",
    company: "Nordic Luxury Group",
    avatar: "ER",
    rating: 5,
    serviceUsed: "AI Hyper-realistic Images & CGI",
    feedback: "The photorealism is staggering. Our customers cannot tell that our seasonal product lookbook was generated through AI rather than an overseas Milan photoshoot. The attention to lighting, material textures, and brand consistency is flawless.",
    metric: "Saved $45,000 in Photo Shoot Budgets",
    verified: true
  },
  {
    id: "rev-3",
    name: "David Sterling",
    role: "Head of Growth",
    company: "Synapse SaaS Solutions",
    avatar: "DS",
    rating: 5,
    serviceUsed: "AI Banners & Omnichannel Displays",
    feedback: "We needed 30+ ad banner sizes in 3 different language variants for our global launch. Beyond delivered the full suite within 24 hours. The visual punchiness gave us the highest CTR we've seen on Google Display in two years.",
    metric: "3.8x Click-Through Rate",
    verified: true
  },
  {
    id: "rev-4",
    name: "Dr. Aisha Patel",
    role: "Managing Director",
    company: "Horizon Media Agency",
    avatar: "AP",
    rating: 5,
    serviceUsed: "AI Corporate Workshops",
    feedback: "The AI Workshop provided by Beyond was the single highest-ROI training our 60-person creative team has ever attended. Their practical ComfyUI and prompt engineering frameworks cut our client turnaround times in half.",
    metric: "10x Creative Production Speed",
    verified: true
  },
  {
    id: "rev-5",
    name: "Liam O'Connor",
    role: "Founder & CEO",
    company: "Kuro Energy Beverages",
    avatar: "LO",
    rating: 5,
    serviceUsed: "AI Advertisements & Social Creatives",
    feedback: "Our TikTok ads generated by Beyond went viral with over 2.4 million organic and paid views within our first week. Their hook generation and synthetic voice realism is unmatched in the industry.",
    metric: "2.4M+ Video Views",
    verified: true
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter AI Creative Sprint",
    tagline: "Perfect for growing brands and startups wanting high-impact AI creative testing.",
    price: "$899",
    period: "per sprint / project",
    popular: false,
    idealFor: "E-Commerce Brands & Startups",
    deliveryTime: "48 Hours",
    revisions: "Unlimited during sprint",
    features: [
      "5 High-Converting AI Ad Variations (Static & Motion)",
      "10 Ultra-HD 8K AI Staged Product Photos",
      "Full IAB Standard Display Banner Set (6 sizes)",
      "Multilingual Voiceover & Custom Hook Scripts",
      "Commercial Rights & 4K Master Exports",
      "Dedicated Slack / WhatsApp Channel"
    ]
  },
  {
    id: "growth-scale",
    name: "Omnichannel Growth Engine",
    tagline: "Our most popular package for scaling brands requiring a weekly flood of fresh high-converting creatives.",
    price: "$1,999",
    period: "per sprint / month",
    popular: true,
    idealFor: "Scaling D2C, Tech & Media Agencies",
    deliveryTime: "24-48 Hours per batch",
    revisions: "Instant Priority Revisions",
    features: [
      "15 High-Impact AI Video Commercials & Social Ads",
      "25 8K Photorealistic Product & Lifestyle CGI Renders",
      "Complete Omnichannel Banner Ecosystem (12+ sizes)",
      "Custom LoRA Model Training on Your Specific Product",
      "Weekly A/B Hook Refresh Matrix to Beat Creative Fatigue",
      "Dedicated Senior AI Creative Director & Priority Queue",
      "Full Commercial Copyright & Project Source Assets"
    ]
  },
  {
    id: "enterprise-workshop",
    name: "Enterprise & AI Workshop Masterclass",
    tagline: "Comprehensive bespoke AI creative production plus hands-on masterclass upskilling for internal teams.",
    price: "$3,899",
    period: "custom engagement",
    popular: false,
    idealFor: "Enterprise Brands, Corporate Teams & Large Agencies",
    deliveryTime: "Dedicated Custom Schedule",
    revisions: "Dedicated Creative Retainer",
    features: [
      "Everything in Growth Scale + Unlimited Deliverables",
      "Full 1-Day or 2-Day Corporate AI Workshop (Remote or On-Site)",
      "Hands-on Training in ComfyUI, Midjourney v6+, Flux & Runway",
      "Private Beyond Prompt Bible (500+ Proprietary Recipes)",
      "Custom In-House Automated AI Pipeline Setup",
      "Direct White-Glove SLA & 24/7 VIP Support",
      "30-Day Executive Mentorship & Pipeline Auditing"
    ]
  }
];

export const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    id: "stripe-cards",
    name: "Credit / Debit Cards (Instant)",
    description: "Instant secure 256-bit encrypted checkout with zero processing delay. We accept all major cards globally.",
    badge: "Instant Activation",
    icon: "CreditCard",
    supported: ["Visa", "MasterCard", "American Express", "Discover", "JCB", "UnionPay"]
  },
  {
    id: "bank-wire",
    name: "Direct Bank Wire / ACH / SWIFT",
    description: "Ideal for corporate invoices, enterprise retainers, and international bank transfers with automated tax invoicing.",
    badge: "Zero Surcharge",
    icon: "Building2",
    supported: ["ACH (USA)", "SEPA (Europe)", "SWIFT (Global)", "Wire Transfer", "BACS (UK)"]
  },
  {
    id: "digital-wallets",
    name: "Apple Pay, Google Pay & PayPal",
    description: "One-click frictionless payments with biometric authentication and full buyer purchase protection.",
    badge: "1-Click Checkout",
    icon: "Smartphone",
    supported: ["Apple Pay", "Google Pay", "PayPal Commercial", "Shop Pay"]
  },
  {
    id: "crypto-web3",
    name: "Crypto & Stablecoins (Web3)",
    description: "Borderless instant settlements with zero chargeback risk and automated smart contract receipts.",
    badge: "Web3 Ready",
    icon: "Coins",
    supported: ["USDT (TRC20 / ERC20)", "USDC", "Bitcoin (BTC)", "Ethereum (ETH)", "Solana (SOL)"]
  },
  {
    id: "milestone-escrow",
    name: "Milestone-Based Escrow (Enterprise)",
    description: "Split payment structures: 50% deposit upon kickoff, 50% upon final creative sign-off and satisfaction.",
    badge: "100% Risk Free",
    icon: "ShieldCheck",
    supported: ["Escrow.com", "Net-30 for Verified Enterprise", "50/50 Split Milestone Invoicing"]
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "general",
    question: "Do I own 100% commercial rights to the AI ads and images created?",
    answer: "Yes, absolutely! Upon final delivery and payment, full commercial copyright and ownership of all generated videos, images, banners, and scripts are 100% transferred to your company. You can use them freely across broadcast TV, social media, paid ads, billboards, and print without paying any recurring royalties."
  },
  {
    category: "services",
    question: "How fast is your delivery turnaround time?",
    answer: "Our standard turnaround is 24 to 48 hours for ad batches, banner sets, and product images. For large enterprise video commercial campaigns or custom LoRA training, delivery takes 48 to 72 hours. We also offer 24-hour rush delivery for urgent product launches."
  },
  {
    category: "services",
    question: "How do you ensure our physical products look 100% accurate in AI photos?",
    answer: "We train proprietary custom LoRA neural models on your exact product specifications, logos, and dimensions. This ensures that every label, packaging angle, font, and material finish matches your real-world product with millimeter precision, eliminating typical AI hallucinations."
  },
  {
    category: "workshops",
    question: "What is included in your AI Corporate Workshops?",
    answer: "Our workshops are customized for your team's specific goals. They cover hands-on prompting mastery, ComfyUI workflow automation, synthetic voice generation with ElevenLabs, video generation with Runway Gen-3/Kling, and legal/commercial copyright frameworks. You also receive the 'Beyond AI Prompt Bible' and 30 days of post-training support."
  },
  {
    category: "pricing",
    question: "What payment methods do you accept and how does billing work?",
    answer: "We support Credit/Debit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, Google Pay, Bank Wire (ACH/SWIFT/SEPA), and Crypto/Stablecoins (USDT/USDC). For enterprise projects, we offer 50/50 milestone-based invoicing and Net-30 terms for qualified corporate accounts."
  },
  {
    category: "pricing",
    question: "What happens if we need revisions on our creative assets?",
    answer: "We provide unlimited revisions during the project sprint until you are 100% satisfied. Because of our agile AI pipeline, most revisions are completed in under 2 to 4 hours."
  }
];

export const COMPANY_INFO = {
  name: "Beyond - The AI Kompany",
  shortName: "Beyond",
  tagline: "Superhuman AI Creative Studio & Enterprise Masterclasses",
  description: "We help modern brands, marketing teams, and high-growth agencies create world-class AI advertisements, social ads, display banners, 8K CGI images, and master generative AI through hands-on corporate workshops.",
  email: "krishna.addanki633@gmail.com",
  phone: "+1 (800) 492-3966",
  whatsapp: "+1 (800) 492-3966",
  location: "Silicon Valley, CA • Global Remote Studio",
  hours: "24/7 Global Creative Operations",
  stats: {
    creativesDelivered: "12,500+",
    averageRoasBoost: "340%",
    workshopsConducted: "150+",
    clientSatisfaction: "99.4%",
    productionTimeSaved: "85%"
  }
};
