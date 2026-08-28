import React from "react";
import { SKILLS } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="bg-[#39452B] text-[#EFE7D2] py-24 sm:py-32">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 text-[#E8DFC9] font-mono text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-7 h-[1px] bg-[#E8DFC9]" />
            <span>What I Do</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F3ECDD] leading-tight">
            One person,
            <br />
            a full pipeline.
          </h2>
        </div>

        {/* 3x3 Grid with unified border structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#F3ECDD]/20 border border-[#F3ECDD]/20 rounded-3xl overflow-hidden shadow-2xl">
          {SKILLS.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#39452B] p-8 sm:p-9 flex flex-col justify-between min-h-[220px] hover:bg-[#252D1D] transition-colors duration-300 group"
            >
              <div className="flex justify-between items-start">
                <span className="font-serif text-sm text-[#737C5A] group-hover:text-[#C8A95B] transition-colors">
                  {skill.num}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-serif text-xl sm:text-2xl text-[#F3ECDD] font-medium mb-2 group-hover:translate-x-1 transition-transform">
                  {skill.title}
                </h3>
                <div className="font-mono text-xs text-[#E8DFC9]/90 tracking-wider uppercase mb-2">
                  {skill.tools}
                </div>
                <p className="text-xs sm:text-sm text-[#EFE7D2]/80 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
