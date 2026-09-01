export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: string;
  year: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "beyond-n8n-platform",
    number: "01",
    title: "BEYOND — AI Workflow Automation Engine (n8n Clone)",
    subtitle: "Visual Node Graph & Autonomous Execution Runtime",
    description: "A full-stack workflow automation platform combining interactive pan/zoom node graphs, DAG topological execution, NVIDIA Nemotron AI pipelines, and webhooks.",
    fullDescription: "Engineered from scratch with live node glow telemetry, sandboxed JS expression evaluation, Prisma SQLite database persistence, and multi-step pipeline automation.",
    category: "AI & Systems",
    year: "2026",
    tags: ["Next.js 14", "TypeScript", "Node Graph", "DAG Engine", "NVIDIA Nemotron", "Prisma", "Tailwind CSS"],
    image: "/images/showcase-1.png",
    liveUrl: "http://localhost:3002",
    githubUrl: "https://github.com/shannu760/beyond-portfolio",
    featured: true
  },
  {
    id: "six-face-lattice",
    number: "02",
    title: "Six-Face Lattice Matrix",
    subtitle: "Interactive 3D Geometric Shader Playground",
    description: "An experimental 3D geometry engine exploring volumetric refraction, GPU-instanced particle networks, and real-time audio reactivity.",
    fullDescription: "Built with custom GLSL shaders and Three.js physics. Explores mathematical lattice symmetry and interactive fluid motion in browser viewports.",
    category: "3D & Creative Coding",
    year: "2025",
    tags: ["Three.js", "WebGL", "GLSL", "React Three Fiber", "Motion"],
    image: "/images/showcase-2.png",
    liveUrl: "/scene",
    githubUrl: "https://github.com/shannu760/beyond-with-six-face",
    featured: true
  },
  {
    id: "ai-video-production",
    number: "03",
    title: "Cinematic AI Video Pipeline",
    subtitle: "Generative Storytelling & Faceless Media Engine",
    description: "An automated creative pipeline distilling text scripts into full-scale video storyboards, voice synthesis, and dynamic visual montages.",
    fullDescription: "Combines multimodal LLMs with custom image generation APIs and automated video assembly scripts to produce high-engagement video content.",
    category: "AI Video & Content",
    year: "2025",
    tags: ["Generative AI", "Python", "Node.js", "Video Processing", "AI Audio"],
    image: "/images/showcase-3.png",
    liveUrl: "https://youtube.com/@the_dimensionless",
    githubUrl: "https://github.com/shannu760",
    featured: true
  },
  {
    id: "dimensionless-studio",
    number: "04",
    title: "Beyond Portfolio Website",
    subtitle: "Personal Portfolio & Digital Showcase Platform",
    description: "A calm, organic digital showcase highlighting architectural web design, fluid typography, and bespoke micro-interactions.",
    fullDescription: "Crafted for luxury editorial presentation with warm beige backgrounds, olive accents, custom cursor tracking, and frame-rate independent physics.",
    category: "Web & Product Design",
    year: "2026",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "UI/UX Design"],
    image: "/images/showcase-4.png",
    liveUrl: "/#hero",
    githubUrl: "https://github.com/shannu760/beyond-with-six-face",
    featured: true
  }
];
