"use client";

import { motion } from "framer-motion";
import { Sparkles, Quote } from "lucide-react";

export function Philosophy() {
  const statementLines = ["LEARN.", "BUILD.", "BREAK.", "REBUILD.", "GO BEYOND."];

  return (
    <section className="py-28 lg:py-44 bg-[#28301D] text-[#FAF7EF] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#556B2F]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex flex-col items-start max-w-5xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#556B2F]/30 border border-[#8A9A5B]/30 text-[#E8DDC8] text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Quote className="w-3.5 h-3.5 text-[#8A9A5B]" />
            <span>CORE OPERATING CREED</span>
          </motion.div>

          {/* Oversized Staggered Typography */}
          <div className="space-y-2 sm:space-y-4">
            {statementLines.map((line, index) => {
              const isHighlight = line === "GO BEYOND.";
              return (
                <motion.h2
                  key={line}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none ${
                    isHighlight
                      ? "text-[#8A9A5B] italic font-normal"
                      : "text-[#FAF7EF]/90"
                  }`}
                >
                  {line}
                </motion.h2>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-[#556B2F]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full text-sm text-[#E8DDC8]/80 font-light"
          >
            <p className="max-w-xl leading-relaxed">
              Technology evolves when we dare to step outside standard boilerplate templates. I construct digital platforms with intentional craftsmanship and relentless curiosity.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#556B2F] text-[#FAF7EF] font-semibold text-xs tracking-wider uppercase hover:bg-[#6B7A3A] transition-all shrink-0 shadow-olive-glow"
            >
              <Sparkles className="w-4 h-4" />
              <span>Initiate Project</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
