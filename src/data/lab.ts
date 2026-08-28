export interface LabExperiment {
  id: string;
  title: string;
  category: string;
  description: string;
  badge: string;
  accentColor: string;
  tags: string[];
  interactiveType: "shader" | "particles" | "motion" | "ai";
}

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: "exp-01",
    title: "Verdant Swarm Simulator",
    category: "3D & Particles",
    description: "GPU-driven organic pollen particle swarm reacting to mouse gravity wells and fluid vector fields.",
    badge: "Interactive 3D",
    accentColor: "#556B2F",
    tags: ["Three.js", "WebGL", "Physics"],
    interactiveType: "particles"
  },
  {
    id: "exp-02",
    title: "Generative Script-to-Story Engine",
    category: "AI & Multimodal",
    description: "Autonomous pipeline transforming raw prompt concepts into scene breakdown, shot list, and image prompts.",
    badge: "GenAI Workflow",
    accentColor: "#6B7A3A",
    tags: ["LLM API", "Python", "Node.js"],
    interactiveType: "ai"
  },
  {
    id: "exp-03",
    title: "Liquid Glass UI Distortion Shader",
    category: "Shader Design",
    description: "Fragment shader simulating organic glass refraction, caustics, and subtle chromatic aberration.",
    badge: "GLSL Shader",
    accentColor: "#8A9A5B",
    tags: ["GLSL", "React Three Fiber", "UI"],
    interactiveType: "shader"
  },
  {
    id: "exp-04",
    title: "Kinetic Editorial Typography",
    category: "Motion & UI",
    description: "Variable font weight interpolation driven by cursor velocity and scroll position dynamics.",
    badge: "Motion UI",
    accentColor: "#556B2F",
    tags: ["Framer Motion", "Typography", "CSS"],
    interactiveType: "motion"
  }
];
