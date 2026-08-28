"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code2, Cpu, Globe, GraduationCap, Compass, ArrowUpRight } from "lucide-react";
import { HeroScene } from "./three/HeroScene";
import { SOCIAL_LINKS } from "@/data/social";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-16 lg:pt-40 lg:pb-24 flex flex-col justify-between bg-noise overflow-hidden">
      
      {/* Background ambient lighting gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#556B2F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#6B7A3A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            
            {/* Introduction Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8DDC8]/80 border border-[#556B2F]/20 text-[#556B2F] text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#556B2F]" />
              <span>Creative Technologist & Founder</span>
            </motion.div>

            {/* High Impact Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#28301D] leading-[1.05] mb-6"
            >
              I BUILD <br className="hidden sm:block" />
              <span className="text-[#556B2F] italic font-normal">DIGITAL WORLDS.</span>
            </motion.h1>

            {/* Supporting Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-xl text-[#6F735F] max-w-xl font-normal leading-relaxed mb-10"
            >
              {SOCIAL_LINKS.heroSubtext}
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#556B2F] text-[#FAF7EF] font-semibold text-sm tracking-wide shadow-olive-glow hover:bg-[#6B7A3A] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#work"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#E8DDC8]/80 hover:bg-[#E8DDC8] text-[#28301D] border border-[#556B2F]/20 font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 text-[#556B2F]" />
              </a>
            </motion.div>

          </div>

          {/* Right Hero Visual Stack (Portrait + 3D WebGL Element) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 relative flex flex-col items-center lg:items-end justify-center"
          >
            <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-3xl overflow-hidden bg-[#FAF7EF] border border-[#556B2F]/20 shadow-soft-shadow p-6 flex flex-col justify-between group">
              
              {/* Top BEYOND Brand Watermark */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <img src="/images/profile-logo.png" alt="BEYOND emblem" className="w-8 h-8 object-contain" />
                  <div>
                    <span className="font-extrabold text-sm tracking-widest text-[#28301D] block">BEYOND</span>
                    <span className="text-[10px] text-[#6F735F] font-mono">THINK BEYOND. BUILD BEYOND.</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#556B2F]/10 text-[#556B2F] text-[10px] font-bold uppercase tracking-wider">
                  FOUNDER PORTFOLIO
                </div>
              </div>

              {/* Center Portrait Image & 3D WebGL Canvas Layer */}
              <div className="relative w-full h-[280px] my-2 flex items-center justify-center overflow-hidden rounded-2xl bg-[#E8DDC8]/40">
                {/* 3D WebGL Background Canvas */}
                <div className="absolute inset-0 z-0">
                  <HeroScene />
                </div>
                
                {/* Founder Shanmukha Portrait */}
                <img
                  src="/images/portrait.png"
                  alt="Shanmukha Krishna Founder of BEYOND"
                  className="relative z-10 h-full object-contain drop-shadow-xl"
                />
              </div>

              {/* Founder Signature Badge */}
              <div className="flex items-center justify-between z-10 pt-2 border-t border-[#556B2F]/10">
                <div>
                  <h3 className="font-bold text-lg text-[#28301D]">Shanmukha Krishna</h3>
                  <p className="text-xs text-[#556B2F] font-semibold tracking-wider uppercase">Founder of BEYOND</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#6F735F]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for Projects</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* 4 Feature Indicator Pillars Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div className="p-4 rounded-2xl bg-[#FAF7EF] border border-[#556B2F]/15 flex items-start gap-3 shadow-sm">
            <div className="p-2 rounded-xl bg-[#556B2F]/10 text-[#556B2F]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#28301D] block">MULTIDISCIPLINARY</span>
              <span className="text-xs text-[#6F735F]">Design · Code · AI · Content</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF7EF] border border-[#556B2F]/15 flex items-start gap-3 shadow-sm">
            <div className="p-2 rounded-xl bg-[#556B2F]/10 text-[#556B2F]">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#28301D] block">EXPERIMENTING DAILY</span>
              <span className="text-xs text-[#6F735F]">Building · Learning · Sharing</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF7EF] border border-[#556B2F]/15 flex items-start gap-3 shadow-sm">
            <div className="p-2 rounded-xl bg-[#556B2F]/10 text-[#556B2F]">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#28301D] block">CREATOR & BUILDER</span>
              <span className="text-xs text-[#6F735F]">Always curious, always growing</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF7EF] border border-[#556B2F]/15 flex items-start gap-3 shadow-sm">
            <div className="p-2 rounded-xl bg-[#556B2F]/10 text-[#556B2F]">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#28301D] block">BASED IN INDIA</span>
              <span className="text-xs text-[#6F735F]">Working globally remote</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
