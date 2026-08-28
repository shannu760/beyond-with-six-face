export interface TimelineMilestone {
  year: string;
  period: string;
  title: string;
  summary: string;
  details: string[];
  tags: string[];
}

export const JOURNEY_DATA: TimelineMilestone[] = [
  {
    year: "2026",
    period: "PRESENT",
    title: "Building Autonomous Products & Interactive Systems",
    summary: "Architecting BEYOND — expanding into multi-agent AI ecosystems, custom WebGL visual experiences, and high-impact digital products.",
    details: [
      "Pioneering autonomous multi-agent coding engines & generative workflows.",
      "Designing luxury editorial digital experiences with Three.js & Next.js 14.",
      "Creating faceless AI video production pipelines with automated voice and script synthesis."
    ],
    tags: ["Next.js 14", "Three.js", "AI Agents", "Creative Direction"]
  },
  {
    year: "2025",
    period: "EVOLUTION",
    title: "Deepening AI Integration & 3D WebGL Interfaces",
    summary: "Merged creative frontend engineering with generative AI models, building bespoke interactive 3D web environments and shaders.",
    details: [
      "Developed custom WebGL shader playgrounds & organic particle simulations.",
      "Built AI-powered content automation tools for script writing and media generation.",
      "Refined modular component architectures with React, TypeScript, and Framer Motion."
    ],
    tags: ["React", "TypeScript", "GLSL Shaders", "Generative AI"]
  },
  {
    year: "2024",
    period: "GENESIS",
    title: "Foundations in Creative Development & Web Architecture",
    summary: "Started exploring modern web development, UI design systems, and responsive interface design.",
    details: [
      "Mastered core web fundamentals, JavaScript ES6+, HTML5, and CSS systems.",
      "Crafted responsive UI components and personal experiments.",
      "Established initial digital footprint and workflow automation scripts."
    ],
    tags: ["JavaScript", "HTML/CSS", "UI Design", "Git"]
  }
];
