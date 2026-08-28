import React from "react";
import Link from "next/link";
import { ArrowRight, Play, ExternalLink } from "lucide-react";
import { CHANNELS, AI_TOOLS } from "@/lib/data";

export function WorkSection() {
  return (
    <section id="content" className="bg-[#252D1D] text-[#EFE7D2] py-24 sm:py-32">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 text-[#737C5A] font-mono text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-7 h-[1px] bg-[#737C5A]" />
            <span>Two Dimensions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F3ECDD] leading-tight">
            I create in more
            <br />
            than one world.
          </h2>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: God Editz */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#737C5A]/15 to-[#39452B]/40 border border-[#F3ECDD]/15 rounded-3xl p-8 flex flex-col justify-between hover:border-[#F3ECDD]/40 transition-all duration-300 transform hover:-translate-y-1.5 group">
            <div>
              <span className="font-serif text-sm text-[#737C5A]">01</span>
              {/* Visual Thumbnail simulation */}
              <div className="h-36 rounded-2xl my-6 bg-gradient-to-br from-[#6B7A4A] to-[#1C2113] flex items-center justify-center relative overflow-hidden border border-[#F3ECDD]/10">
                <div className="w-14 h-14 rounded-full bg-[#F3ECDD]/15 border border-[#F3ECDD]/50 flex items-center justify-center text-[#F3ECDD] group-hover:bg-[#F3ECDD] group-hover:text-[#252D1D] group-hover:scale-110 transition-all">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              <h3 className="font-serif text-2xl text-[#F3ECDD] font-medium mb-1">
                {CHANNELS[0].title}
              </h3>
              <p className="font-mono text-xs text-[#737C5A] tracking-wider uppercase mb-3">
                {CHANNELS[0].category}
              </p>
              <p className="text-sm text-[#EFE7D2]/85 leading-relaxed mb-6">
                {CHANNELS[0].description}
              </p>
            </div>

            <a
              href={CHANNELS[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#F3ECDD] hover:text-[#C8A95B] border-b border-[#F3ECDD]/30 pb-1 w-fit transition-colors"
            >
              <span>{CHANNELS[0].linkLabel}</span>
            </a>
          </div>

          {/* Card 2: The Dimensionless */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#737C5A]/15 to-[#39452B]/40 border border-[#F3ECDD]/15 rounded-3xl p-8 flex flex-col justify-between hover:border-[#F3ECDD]/40 transition-all duration-300 transform hover:-translate-y-1.5 group">
            <div>
              <span className="font-serif text-sm text-[#737C5A]">02</span>
              {/* Visual Thumbnail simulation */}
              <div className="h-36 rounded-2xl my-6 bg-gradient-to-br from-[#45543A] to-[#17190F] flex items-center justify-center relative overflow-hidden border border-[#F3ECDD]/10">
                <div className="w-14 h-14 rounded-full bg-[#F3ECDD]/15 border border-[#F3ECDD]/50 flex items-center justify-center text-[#F3ECDD] group-hover:bg-[#F3ECDD] group-hover:text-[#252D1D] group-hover:scale-110 transition-all">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              <h3 className="font-serif text-2xl text-[#F3ECDD] font-medium mb-1">
                {CHANNELS[1].title}
              </h3>
              <p className="font-mono text-xs text-[#737C5A] tracking-wider uppercase mb-3">
                {CHANNELS[1].category}
              </p>
              <p className="text-sm text-[#EFE7D2]/85 leading-relaxed mb-6">
                {CHANNELS[1].description}
              </p>
            </div>

            <a
              href={CHANNELS[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#F3ECDD] hover:text-[#C8A95B] border-b border-[#F3ECDD]/30 pb-1 w-fit transition-colors"
            >
              <span>{CHANNELS[1].linkLabel}</span>
            </a>
          </div>

          {/* Card 3: Call to Action Card */}
          <div className="md:col-span-2 lg:col-span-3 bg-[#737C5A] text-[#252D1D] rounded-3xl p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="font-mono text-xs font-semibold tracking-widest uppercase mb-4 text-[#252D1D]">
                Let&apos;s Build
              </div>
              <h3 className="font-serif text-3xl font-medium leading-tight mb-3">
                Something Beyond.
              </h3>
              <p className="text-sm text-[#252D1D]/90 leading-relaxed mb-6">
                Have a channel, product, or idea you want created with AI? Let&apos;s bring it to life.
              </p>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 font-mono text-xs font-semibold tracking-wider uppercase px-6 py-3.5 rounded-full bg-[#252D1D] text-[#F3ECDD] hover:bg-[#1E2216] transition-all"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* AI Tools Strip */}
        <div className="border-t border-[#F3ECDD]/15 mt-16 pt-10">
          <div className="font-mono text-xs font-semibold tracking-widest uppercase text-[#737C5A] mb-6">
            AI Tools I Work With
          </div>
          <div className="flex flex-wrap gap-3">
            {AI_TOOLS.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#F3ECDD]/20 font-mono text-xs sm:text-sm text-[#EFE7D2] hover:bg-[#F3ECDD]/10 hover:border-[#F3ECDD]/50 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#737C5A]" />
                <span>{tool}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
