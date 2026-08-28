import { Project, SkillItem, ProcessStep, WhyItem } from "@/types";

export const PROFILE = {
  name: "Shanmukha Krishna",
  brand: "BEYOND",
  age: 17,
  tagline: "I create with what's next.",
  subheadline:
    "Three years deep inside AI tools. Two YouTube channels, built and voiced entirely without a camera. I turn a blank prompt into a finished script, voice, video, or working tool — end to end.",
  email: "krishna.addanki.633@gmail.com",
  instagramBrand: "https://www.instagram.com/beyond_official_2026?igsi=MXYwZ2RtZW5yaHM0bg==",
  instagramPersonal: "https://www.instagram.com/shanmukha_krishna_03?igsi=aXFuanQwN2x4Mnhr",
  godEditzUrl: "https://youtube.com/@godeditz08?si=gbf-l2QnT4Xq3slx",
  dimensionlessUrl: "https://youtube.com/@the_dimensionless?si=c1pp-XJOH0Sce0uo",
};

export const FEATURE_STRIP = [
  {
    title: "AI-Native, 3 Years In",
    desc: "Researching and building with AI tools since 15.",
  },
  {
    title: "Two Channels, No Face",
    desc: "Scripted, voiced & produced with AI — no camera, ever.",
  },
  {
    title: "17 · Student · Builder",
    desc: "Still in school. Already shipping real content.",
  },
  {
    title: "Available for Freelance",
    desc: "Working remotely with creators & small brands.",
  },
];

export const CHANNELS: Project[] = [
  {
    id: "god-editz",
    title: "God Editz",
    category: "AI Editing · Visual Storytelling",
    description:
      "Cinematic, AI-produced edits — scripted, voiced and assembled without ever showing a face.",
    link: "https://youtube.com/@godeditz08?si=gbf-l2QnT4Xq3slx",
    linkLabel: "youtube.com/@godeditz08 ↗",
    tags: ["Google Veo", "Kling", "CapCut Pro", "Voice Synth"],
    featured: true,
  },
  {
    id: "the-dimensionless",
    title: "The Dimensionless",
    category: "Ideas · Thoughts · Storytelling",
    description:
      "A channel for ideas worth sitting with — built the same way: AI script, AI voice, AI visuals.",
    link: "https://youtube.com/@the_dimensionless?si=c1pp-XJOH0Sce0uo",
    linkLabel: "youtube.com/@the_dimensionless ↗",
    tags: ["Gemini", "Philosophy", "Visual Synthesis", "Faceless Content"],
    featured: true,
  },
];

export const AI_TOOLS = [
  "Gemini",
  "Google Veo",
  "Kling",
  "OpenManus",
  "Antigravity",
  "Replit",
  "Lovable",
  "CapCut Pro",
  "Three.js",
  "Next.js",
];

export const SKILLS: SkillItem[] = [
  {
    id: "01",
    num: "01",
    title: "AI Video & Visuals",
    tools: "Google Veo · Kling",
    description: "Turning a script into cinematic footage and visuals for fully faceless content.",
  },
  {
    id: "02",
    num: "02",
    title: "AI Agents & Automation",
    tools: "OpenManus · Antigravity",
    description: "Automating research, editing steps and repetitive parts of the production workflow.",
  },
  {
    id: "03",
    num: "03",
    title: "AI Writing & Strategy",
    tools: "Gemini & other LLMs",
    description: "Scripting, ideation and content strategy across two very different channels.",
  },
  {
    id: "04",
    num: "04",
    title: "AI App Building",
    tools: "Replit · Lovable",
    description: "Turning an idea into a working site or simple tool without writing code by hand.",
  },
  {
    id: "05",
    num: "05",
    title: "Copywriting",
    tools: "Scripts · Hooks · Captions",
    description: "Writing that's built to hold attention on screen, not just read well on paper.",
  },
  {
    id: "06",
    num: "06",
    title: "Content Writing",
    tools: "Descriptions · Notes · Ideas",
    description: "Clear, structured writing for whatever a project needs beyond the script itself.",
  },
  {
    id: "07",
    num: "07",
    title: "Video Editing",
    tools: "Cutting · Pacing · Assembly",
    description: "Assembling footage, voice and visuals into one finished, well-paced piece.",
  },
  {
    id: "08",
    num: "08",
    title: "Programming Basics",
    tools: "C · Python · Java · HTML/CSS",
    description: "Foundational coding across a few languages — still growing, honestly labelled.",
  },
  {
    id: "09",
    num: "09",
    title: "Fast Learning",
    tools: "3 Years, Daily",
    description: "New AI tools ship weekly. Testing and adopting them fast is the actual skill.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Idea",
    description: "Find the concept worth making — for a client's brand or one of my own channels.",
  },
  {
    step: "02",
    title: "Script",
    description: "Write it tightly, for how people actually watch — not how it reads on paper.",
  },
  {
    step: "03",
    title: "Generate",
    description: "Produce voice, visuals and footage using the sharpest AI tool for each part.",
  },
  {
    step: "04",
    title: "Assemble",
    description: "Edit everything into one finished piece, paced for retention.",
  },
  {
    step: "05",
    title: "Publish",
    description: "Ship it, then read what the data says before the next one.",
  },
];

export const WHY_ITEMS: WhyItem[] = [
  {
    num: "01",
    title: "One Person, Full Pipeline",
    description: "Script, voice, visuals and publishing — handled end to end, without handoffs.",
  },
  {
    num: "02",
    title: "I Live Inside These Tools",
    description: "Three years of daily, hands-on AI use — not a weekend hobby I picked up recently.",
  },
  {
    num: "03",
    title: "I Ship Without a Face",
    description: "Proof that content doesn't need a studio, a camera, or someone on screen.",
  },
  {
    num: "04",
    title: "Always Learning, On Purpose",
    description: "New tools ship weekly. Every project is a chance to get faster with the next one.",
  },
];
