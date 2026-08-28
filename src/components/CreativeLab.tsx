"use client";

import { motion } from "framer-motion";
import { LAB_EXPERIMENTS } from "@/data/lab";
import { FlaskConical, Sparkles, Layers, Cpu } from "lucide-react";

export function CreativeLab() {
  return (
    <section id="lab" className="py-24 lg:py-36 bg-[#F3EBDD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#556B2F]/10 border border-[#556B2F]/20 text-[#556B2F] text-xs font-bold uppercase tracking-widest mb-3"
            >
              <FlaskConical className="w-3.5 h-3.5" />
              <span>04 // EXPERIMENTAL DIGITAL GARDEN</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-[#28301D]"
            >
              THE LAB.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base text-[#6F735F] max-w-md font-normal leading-relaxed"
          >
            A digital playground for unconstrained creative coding, WebGL shaders, AI workflow automation, and kinetic typography.
          </motion.p>
        </div>

        {/* 4 Experimental Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LAB_EXPERIMENTS.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl bg-[#FAF7EF] border border-[#556B2F]/15 shadow-soft-shadow hover:border-[#556B2F]/40 hover:shadow-[0_24px_48px_-12px_rgba(85,107,47,0.2)] hover:-translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#556B2F]/10 text-[#556B2F] text-xs font-semibold group-hover:bg-[#556B2F] group-hover:text-[#FAF7EF] transition-all duration-300">
                    <Sparkles className="w-3 h-3" />
                    <span>{exp.badge}</span>
                  </span>
                  <span className="text-xs font-mono text-[#6F735F]">
                    {exp.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#28301D] mb-3 group-hover:text-[#556B2F] transition-colors duration-300">
                  {exp.title}
                </h3>

                <p className="text-sm text-[#6F735F] leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              {/* Interactive Visual Graphic Mockup */}
              <div className="mt-4 p-4 rounded-xl bg-[#E8DDC8]/40 border border-[#556B2F]/10 flex items-center justify-between group-hover:bg-[#E8DDC8]/70 group-hover:border-[#556B2F]/25 transition-all duration-400">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#556B2F]" />
                  <span className="text-xs font-medium text-[#28301D]">Prototype Engine</span>
                </div>
                <div className="flex gap-1.5">
                  {exp.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#556B2F]/10 text-[#556B2F] font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
