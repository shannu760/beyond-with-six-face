export const SOCIAL_LINKS = {
  name: "Shanmukha Krishna",
  brand: "BEYOND",
  role: "Creative Technologist & Founder of BEYOND",
  location: "India / Available Globally Remote",
  email: "krishna.addanki633@gmail.com",
  linkedin: "https://www.linkedin.com/in/shanmukha-krishna-2b39b2367/",
  github: "https://github.com/shannu760",
  youtubeGodEditz: "https://youtube.com/@godeditz08",
  youtubeDimensionless: "https://youtube.com/@the_dimensionless",
  instagram: "https://instagram.com",
  heroHeadline: "I BUILD DIGITAL WORLDS.",
  heroSubtext: "At the intersection of AI, code, design and content — I turn ideas into experiences that inspire, engage and create impact.",
  aboutStatement: "CURIOUS BY DEFAULT.",
  aboutBio: "I am Shanmukha Krishna, founder of BEYOND. I work at the convergence of software engineering, 3D WebGL interfaces, generative AI systems, and cinematic storytelling. I build digital products, media channels, and interactive experiences that go beyond standard templates.",
  philosophyStatement: "LEARN.\nBUILD.\nBREAK.\nREBUILD.\nGO BEYOND."
};

export interface ContentChannel {
  id: string;
  number: string;
  name: string;
  handle: string;
  url: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
}

export const CONTENT_CHANNELS: ContentChannel[] = [
  {
    id: "god-editz",
    number: "01",
    name: "GOD EDITZ",
    handle: "@godeditz08",
    url: "https://youtube.com/@godeditz08",
    category: "CINEMATIC • EDITING • VISUAL STORYTELLING",
    tags: ["Video Editing", "VFX", "Cinematic Motion", "Storytelling"],
    description: "High-octane cinematic edits, visual storytelling, dynamic pacing, and experimental motion design.",
    image: "/images/god-editz-thumb.jpg"
  },
  {
    id: "the-dimensionless",
    number: "02",
    name: "THE_DIMENSIONLESS",
    handle: "@the_dimensionless",
    url: "https://youtube.com/@the_dimensionless",
    category: "PHILOSOPHY • IDEAS • STORYTELLING",
    tags: ["Philosophy", "Deep Thinking", "AI Insights", "Creation"],
    description: "Exploring deep ideas, digital philosophy, creative technology insights, and mind-expanding perspectives.",
    image: "/images/dimensionless-thumb.jpg"
  }
];

export const TECH_STACK = [
  { name: "HTML5 / CSS" },
  { name: "JavaScript" },
  { name: "React / Next.js" },
  { name: "Beyond Portfolio Website" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "Three.js" },
  { name: "MongoDB" },
  { name: "AI Tools" },
  { name: "Git / GitHub" },
  { name: "VS Code" },
  { name: "Figma" }
];
