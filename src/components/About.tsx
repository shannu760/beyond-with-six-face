"use client";

import { motion } from "framer-motion";
import { Compass, Lightbulb, Zap, Leaf } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/social";

const PHILOSOPHY_PILLARS = [
  {
    icon: Compass,
    title: "Organic Design Systems",
    description: "Interfaces should feel calm, responsive, and alive — bridging natural aesthetics with modern digital structure."
  },
  {
    icon: Lightbulb,
    title: "AI-Augmented Creation",
    description: "Leveraging generative models and autonomous agents to unlock unprecedented creative scale and speed."
  },
  {
    icon: Zap,
    title: "Technical Rigor",
    description: "Building resilient Next.js architectures, clean TypeScript, and GPU-conscious WebGL graphics."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-36 bg-[#E8DDC8]/40 relative overflow-hidden border-y border-[#556B2F]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#556B2F] mb-3 block">
              01 // ABOUT PHILOSOPHY
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#28301D] leading-tight">
              {SOCIAL_LINKS.aboutStatement}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <p className="text-lg sm:text-2xl text-[#28301D] font-normal leading-relaxed mb-6">
              {SOCIAL_LINKS.aboutBio}
            </p>
            <p className="text-base text-[#6F735F] leading-relaxed">
              Every project is an opportunity to experiment, refine, and push beyond standard templates. From WebGL shader simulations to autonomous AI agents, my work balances aesthetic luxury with engineering discipline.
            </p>
          </motion.div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {PHILOSOPHY_PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-2xl bg-[#F3EBDD] border border-[#556B2F]/15 shadow-soft-shadow hover:shadow-[0_20px_40px_-12px_rgba(85,107,47,0.2)] hover:border-[#556B2F]/35 hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-[#556B2F]/10 flex items-center justify-center text-[#556B2F] mb-6 group-hover:bg-[#556B2F] group-hover:text-[#FAF7EF] group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#28301D] mb-3 group-hover:text-[#556B2F] transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#6F735F] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Personal Details Tag Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 p-6 rounded-2xl bg-[#556B2F] text-[#FAF7EF] flex flex-wrap items-center justify-between gap-6 shadow-md hover:shadow-[0_16px_32px_-8px_rgba(85,107,47,0.3)] transition-shadow duration-500"
        >
          <div className="flex items-center gap-3">
            <Leaf className="w-5 h-5 text-[#8A9A5B]" />
            <span className="text-sm font-semibold tracking-wide">Digital Garden Mindset: Constant Evolution & Open Exploration</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-[#E8DDC8]/80 font-medium">
            <span>Location: Andhra Pradesh, India</span>
            <span>•</span>
            <span>Available for Select Collaborations</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
