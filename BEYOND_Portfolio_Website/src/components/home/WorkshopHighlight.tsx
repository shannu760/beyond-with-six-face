import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Sparkles, CheckCircle2, ArrowRight, BookOpen, Users, Award, ShieldCheck } from "lucide-react";

export function WorkshopHighlight() {
  return (
    <section className="py-24 relative bg-[#06070a] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl border border-purple-500/30 p-8 sm:p-12 lg:p-16 shadow-[0_0_50px_rgba(157,0,255,0.15)] relative overflow-hidden">
          {/* Top glowing bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-xs font-semibold text-purple-300">
                <GraduationCap className="w-4 h-4 text-purple-300" />
                <span>Executive & Team Upskilling</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Empower Your In-House Team with{" "}
                <span className="text-gradient">AI Masterclasses</span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Transform your marketing department, creative leads, and design team into an autonomous AI powerhouse. Our intensive 1-day and 2-day live corporate workshops teach the exact prompting architectures and neural pipelines we use internally.
              </p>

              {/* Checklist */}
              <div className="space-y-3 pt-2">
                {[
                  "Hands-on prompt engineering with Midjourney v6+, Flux Pro & ComfyUI",
                  "AI Commercial Video generation using Runway Gen-3 & Kling AI",
                  "Synthetic Voiceover & Multilingual translation with ElevenLabs",
                  "Proprietary 'Beyond Prompt Bible' (500+ Commercial Recipes included)",
                  "Commercial copyright frameworks, licensing & IP safety compliance"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm shadow-[0_0_25px_rgba(157,0,255,0.4)] hover:shadow-[0_0_35px_rgba(157,0,255,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  <span>Book Team Workshop</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services/ai-workshops"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-panel border border-white/20 text-gray-300 hover:text-white text-sm font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>View Curriculum</span>
                </Link>
              </div>
            </div>

            {/* Right Column Visual / Workshop Card */}
            <div className="relative">
              <div className="glass-panel rounded-2xl border border-white/15 p-6 space-y-6 shadow-2xl bg-[#0e101a]/90">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                      <Award className="w-5 h-5 text-purple-300" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Workshop Certification</div>
                      <div className="text-xs text-gray-400">Certified Generative AI Creative</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                    Live Interactive
                  </span>
                </div>

                <div className="space-y-4 text-xs text-gray-300">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span>Format Options</span>
                    <span className="font-semibold text-white">Remote (Zoom) or On-Site (Global)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span>Target Audience</span>
                    <span className="font-semibold text-white">Marketing, Creative Directors, CMOs</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span>Team Size</span>
                    <span className="font-semibold text-white">5 to 100+ Team Members</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span>Post-Training Support</span>
                    <span className="font-semibold text-emerald-400">30 Days Q&A + Prompt Bible</span>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-xs text-gray-400">
                    Trusted by over <strong className="text-white">150+ corporate creative teams</strong> worldwide.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
