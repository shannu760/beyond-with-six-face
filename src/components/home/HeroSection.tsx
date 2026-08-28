"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Play, ShieldCheck, Zap, Star, Trophy, Users, Box } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import { HologramSphere3D } from "@/components/3d/HologramSphere3D";
import { Card3DTilt } from "@/components/3d/Card3DTilt";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & CTA (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-xs sm:text-sm font-semibold text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.2)] animate-pulse-slow">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <Box className="w-4 h-4 text-cyan-400" />
              <span>Next-Gen 3D AI Creative Studio & Labs</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Superhuman{" "}
              <span className="text-gradient">3D AI Creatives</span>, Ads & Workshops.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We engineer high-converting <strong className="text-white">AI Advertisements</strong>, viral <strong className="text-white">Social Ads</strong>, responsive <strong className="text-white">AI Banners</strong>, photorealistic <strong className="text-white">8K CGI Images</strong>, and conduct hands-on <strong className="text-white">AI Corporate Masterclasses</strong>. 
              Delivered in 24–48 hours at 80% lower cost than traditional agencies.
            </p>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold text-base shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_45px_rgba(0,240,255,0.6)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span>Get Free AI Creative Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel border border-white/20 text-white font-semibold text-base hover:bg-white/10 hover:border-cyan-400/50 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Explore AI Capabilities</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Holographic AI Neural Core (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <Card3DTilt className="w-full max-w-md">
              <div className="glass-panel rounded-3xl p-6 border border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.25)] relative overflow-hidden bg-[#0a0c16]/90 flex flex-col items-center">
                <div className="w-full h-80 relative flex items-center justify-center">
                  <HologramSphere3D />
                </div>
                <div className="text-center mt-2 space-y-1">
                  <div className="text-sm font-bold text-white flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Beyond Neural Engine v4.8</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Proprietary Multi-Modal Generative AI Architecture
                  </p>
                </div>
              </div>
            </Card3DTilt>
          </div>
        </div>

        {/* Live Metric Stats Bar with 3D Tilt */}
        <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <Card3DTilt>
            <div className="glass-panel p-5 rounded-2xl border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white text-gradient-cyan">
                {COMPANY_INFO.stats.creativesDelivered}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">
                AI Ads & Images Delivered
              </div>
            </div>
          </Card3DTilt>

          <Card3DTilt>
            <div className="glass-panel p-5 rounded-2xl border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
                +{COMPANY_INFO.stats.averageRoasBoost}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">
                Average ROAS Improvement
              </div>
            </div>
          </Card3DTilt>

          <Card3DTilt>
            <div className="glass-panel p-5 rounded-2xl border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">
                24–48h
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">
                Lightning Fast Turnaround
              </div>
            </div>
          </Card3DTilt>

          <Card3DTilt>
            <div className="glass-panel p-5 rounded-2xl border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-pink-400">
                {COMPANY_INFO.stats.workshopsConducted}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">
                Corporate Teams Trained
              </div>
            </div>
          </Card3DTilt>
        </div>

        {/* Featured 3D Showcase Teaser */}
        <div className="mt-16">
          <Card3DTilt maxTilt={8}>
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-cyan-500/30 p-2 sm:p-4 shadow-[0_0_50px_rgba(0,240,255,0.2)]">
              <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-black">
                <Image
                  src="/images/showcase-1.png"
                  alt="Beyond AI Creative Showcase"
                  fill
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold">
                      Featured 3D AI Production
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-medium backdrop-blur-md">
                      Automotive 4K AI Commercial
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold text-white max-w-2xl">
                    Nexus Motors: Futuristic Cinematic AI Ad Campaign
                  </h3>
                  <p className="text-sm text-gray-300 mt-1 max-w-xl hidden sm:block">
                    Produced entirely with neural video engines and custom synthetic lighting in under 48 hours. Resulted in a +420% video completion rate.
                  </p>
                </div>
              </div>
            </div>
          </Card3DTilt>
        </div>
      </div>
    </section>
  );
}
