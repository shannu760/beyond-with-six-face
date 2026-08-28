import React from "react";
import { WHY_ITEMS } from "@/lib/data";

export function WhySection() {
  return (
    <section className="bg-[#E8DFC9] py-24 sm:py-32">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 text-[#737C5A] font-mono text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-7 h-[1px] bg-[#737C5A]" />
            <span>Why Work With Me</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E2216] leading-tight">
            Small team,
            <br />
            full pipeline.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#39452B]/15 border border-[#39452B]/15 rounded-3xl overflow-hidden shadow-xl">
          {WHY_ITEMS.map((item) => (
            <div
              key={item.num}
              className="bg-[#E8DFC9] p-8 sm:p-12 hover:bg-[#F3ECDD] transition-colors duration-300 group"
            >
              <span className="font-mono text-xs font-semibold tracking-widest text-[#737C5A] block mb-4">
                {item.num}
              </span>
              <h3 className="font-serif text-2xl text-[#1E2216] font-medium mb-3 group-hover:translate-x-1 transition-transform">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-[#3C4230] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
