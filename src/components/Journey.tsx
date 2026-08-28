"use client";

import { motion } from "framer-motion";
import { JOURNEY_DATA } from "@/data/journey";
import { Calendar, CheckCircle, Milestone } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="py-24 lg:py-36 bg-[#E8DDC8]/40 relative border-t border-[#556B2F]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#556B2F]/10 border border-[#556B2F]/20 text-[#556B2F] text-xs font-bold uppercase tracking-widest mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>05 // EVOLUTION & MILESTONES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#28301D]">
            THE JOURNEY.
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#556B2F]/20 space-y-16">
          {JOURNEY_DATA.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Olive Node Circle */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#FAF7EF] border-4 border-[#556B2F] shadow-sm group-hover:scale-125 group-hover:bg-[#6B7A3A] transition-transform duration-300" />

              <div className="p-8 rounded-3xl bg-[#FAF7EF] border border-[#556B2F]/15 shadow-soft-shadow hover:border-[#556B2F]/30 hover:shadow-card-hover transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#556B2F]">
                      {item.year}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#556B2F]/10 text-[#556B2F] text-xs font-bold uppercase tracking-wider">
                      {item.period}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#28301D] mb-3">
                  {item.title}
                </h3>

                <p className="text-base text-[#6F735F] leading-relaxed mb-6">
                  {item.summary}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2.5 mb-6">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#28301D]">
                      <CheckCircle className="w-4 h-4 text-[#556B2F] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#556B2F]/10">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-[#E8DDC8]/50 text-[#28301D] text-xs font-medium"
                    >
                      {tag}
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
