"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { OrbitalArcs } from "@/components/3d/OrbitalArcs";
import { PortalCanvas } from "@/components/3d/PortalCanvas";
import { PROFILE } from "@/lib/data";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#E8DFC9]"
    >
      {/* 2D Particle physics canvas */}
      <OrbitalArcs />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#39452B]/10 border border-[#39452B]/20 text-[#39452B] font-mono text-xs font-semibold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#39452B] animate-pulse" />
              <span>AI CREATOR &amp; BUILDER — AGE {PROFILE.age}</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[0.98] text-[#1E2216] tracking-tight">
              I create with
              <br />
              what&apos;s <span className="text-[#737C5A] italic font-serif">next.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#3C4230] leading-relaxed max-w-xl">
              {PROFILE.subheadline}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-4 rounded-full bg-[#252D1D] text-[#F3ECDD] hover:bg-[#1E2216] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#252D1D]/20 group"
              >
                <span>Work With Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#skills"
                className="inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-4 rounded-full bg-transparent border-1.5 border-[#252D1D] text-[#252D1D] hover:bg-[#252D1D] hover:text-[#F3ECDD] transition-all transform hover:-translate-y-0.5 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="pt-2">
              <a
                href="#content"
                className="inline-flex items-center gap-3 font-mono text-xs font-semibold tracking-widest uppercase text-[#252D1D] hover:text-[#737C5A] transition-colors group"
              >
                <span className="w-9 h-9 rounded-full border border-[#252D1D] flex items-center justify-center group-hover:bg-[#252D1D] group-hover:text-[#F3ECDD] transition-all">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span>Watch My World</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual, Portal & Portrait */}
          <div className="lg:col-span-5 flex justify-center items-end relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] flex items-center justify-center">
              {/* Three.js Portal Background */}
              <PortalCanvas />

              {/* Orbit Ring */}
              <div className="absolute inset-[-6%] rounded-full border border-dashed border-[#39452B]/35 animate-spin-slow pointer-events-none">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#39452B] rounded-full shadow-[0_0_0_6px_rgba(57,69,43,0.15)]" />
              </div>

              {/* Founder Portrait */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <div className="relative w-full h-[95%]">
                  <Image
                    src="/assets/portrait_hero_v2_web.png"
                    alt="Shanmukha Krishna, founder of Beyond"
                    fill
                    className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(37,45,29,0.3)]"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              {/* Circular Seal Emblem */}
              <div className="absolute -left-6 bottom-8 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#252D1D] border-2 border-[#C8A95B]/40 flex items-center justify-center shadow-xl shadow-[#252D1D]/40 animate-float">
                <div className="relative w-3/4 h-3/4">
                  <Image
                    src="/assets/logo_web.png"
                    alt="Beyond Mark"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>

              {/* Floating Tech Chips */}
              <div className="absolute top-8 -right-4 z-20 bg-[#F3ECDD] border border-[#39452B]/20 rounded-xl px-3.5 py-2 font-mono text-[11px] font-semibold tracking-wider uppercase text-[#252D1D] shadow-lg shadow-[#252D1D]/10 animate-float hidden sm:block">
                AI Video · Veo / Kling
              </div>
              <div className="absolute bottom-16 -right-2 z-20 bg-[#F3ECDD] border border-[#39452B]/20 rounded-xl px-3.5 py-2 font-mono text-[11px] font-semibold tracking-wider uppercase text-[#252D1D] shadow-lg shadow-[#252D1D]/10 animate-float-delayed hidden sm:block">
                2 YouTube Channels
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute right-8 bottom-8 hidden lg:flex flex-col items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[#737C5A] z-10">
        <span>Scroll</span>
        <div className="w-[1px] h-10 bg-[#737C5A] relative overflow-hidden">
          <div className="absolute top-[-100%] left-0 w-full h-full bg-[#252D1D] animate-[scrolldrop_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
