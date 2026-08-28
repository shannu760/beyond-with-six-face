"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS_DATA } from "@/data/skills";
import { CheckCircle2, Sparkles } from "lucide-react";

export function Expertise() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories = activeCategory === "all"
    ? SKILLS_DATA
    : SKILLS_DATA.filter((cat) => cat.id === activeCategory);

  return (
    <section id="expertise" className="py-24 lg:py-36 bg-[#F3EBDD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-bold uppercase tracking-widest text-[#556B2F] mb-3 block"
            >
              02 // TECHNICAL & CREATIVE DOMAINS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-[#28301D]"
            >
              EXPERTISE & CAPABILITIES
            </motion.h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-[#556B2F] text-[#FAF7EF] shadow-sm scale-105"
                  : "bg-[#E8DDC8]/60 text-[#6F735F] hover:text-[#28301D] hover:bg-[#E8DDC8]"
              }`}
            >
              All Capabilities
            </button>
            {SKILLS_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#556B2F] text-[#FAF7EF] shadow-sm scale-105"
                    : "bg-[#E8DDC8]/60 text-[#6F735F] hover:text-[#28301D] hover:bg-[#E8DDC8]"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Category Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredCategories.map((category, index) => (
              <motion.div
                layout
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-2xl bg-[#FAF7EF] border border-[#556B2F]/15 shadow-soft-shadow hover:border-[#556B2F]/35 hover:shadow-[0_20px_40px_-12px_rgba(85,107,47,0.2)] hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-widest text-[#556B2F] uppercase">
                      {category.number}
                    </span>
                    <Sparkles className="w-4 h-4 text-[#6B7A3A] group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#28301D] mb-3 group-hover:text-[#556B2F] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-sm text-[#6F735F] leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                {/* Skills Tag Cloud */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#556B2F]/10">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                        skill.highlight
                          ? "bg-[#556B2F]/15 text-[#556B2F] border border-[#556B2F]/30 font-semibold hover:bg-[#556B2F] hover:text-[#FAF7EF]"
                          : "bg-[#E8DDC8]/50 text-[#28301D] hover:bg-[#E8DDC8] hover:border-[#556B2F]/20"
                      }`}
                    >
                      {skill.highlight && <CheckCircle2 className="w-3.5 h-3.5 text-[#556B2F] group-hover:text-inherit" />}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
