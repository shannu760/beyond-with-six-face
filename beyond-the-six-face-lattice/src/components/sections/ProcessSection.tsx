import React from "react";
import { PROCESS_STEPS } from "@/lib/data";

export function ProcessSection() {
  return (
    <section id="process" className="bg-[#252D1D] text-[#EFE7D2] py-24 sm:py-32">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 text-[#737C5A] font-mono text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-7 h-[1px] bg-[#737C5A]" />
            <span>How I Work</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F3ECDD] leading-tight">
            From idea to
            <br />
            published, in five steps.
          </h2>
        </div>

        <div className="border-t border-[#F3ECDD]/15 divide-y divide-[#F3ECDD]/15">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-center transition-all duration-300 hover:pl-4 hover:bg-[#F3ECDD]/[0.03] group"
            >
              <div className="sm:col-span-2 font-serif text-lg text-[#737C5A] group-hover:text-[#C8A95B] transition-colors">
                {step.step}
              </div>
              <div className="sm:col-span-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F3ECDD] font-medium group-hover:translate-x-1 transition-transform">
                  {step.title}
                </h3>
              </div>
              <div className="sm:col-span-6">
                <p className="text-sm sm:text-base text-[#EFE7D2]/85 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
