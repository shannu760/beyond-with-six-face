export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "creative-development",
    number: "01",
    title: "CREATIVE DEVELOPMENT",
    description: "Building immersive, high-performance web applications with modern frontend frameworks and WebGL graphics.",
    skills: [
      { name: "React / Next.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Three.js / WebGL", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Framer Motion", highlight: true },
      { name: "Canvas 2D / Shaders" },
      { name: "HTML5 / CSS3" },
      { name: "Performance Optimization" }
    ]
  },
  {
    id: "ai-engineering",
    number: "02",
    title: "AI & GENERATIVE SYSTEMS",
    description: "Integrating intelligent models, multimodal generative pipelines, and autonomous agent workflows.",
    skills: [
      { name: "Generative AI APIs", highlight: true },
      { name: "Autonomous Agents", highlight: true },
      { name: "AI Video & Audio", highlight: true },
      { name: "Prompt Engineering" },
      { name: "LLM Orchestration" },
      { name: "Python / Node.js" },
      { name: "Workflow Automation" }
    ]
  },
  {
    id: "design-systems",
    number: "03",
    title: "DESIGN & VISUAL SYSTEMS",
    description: "Architecting editorial design systems, organic visual identities, and intuitive user experiences.",
    skills: [
      { name: "UI / UX Design", highlight: true },
      { name: "Editorial Layouts", highlight: true },
      { name: "Interaction Design", highlight: true },
      { name: "Motion Graphics" },
      { name: "Design Systems" },
      { name: "Typography & Color Theory" },
      { name: "Prototyping" }
    ]
  },
  {
    id: "building-infrastructure",
    number: "04",
    title: "PRODUCT & ARCHITECTURE",
    description: "Connecting resilient backend infrastructure, REST APIs, databases, and deployment platforms.",
    skills: [
      { name: "REST APIs & WebSockets", highlight: true },
      { name: "PostgreSQL / Prisma", highlight: true },
      { name: "Git & Version Control", highlight: true },
      { name: "Vercel / Cloud Hosting" },
      { name: "System Design" },
      { name: "Clean Architecture" }
    ]
  }
];
