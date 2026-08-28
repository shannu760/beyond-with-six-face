import React from "react";
import Image from "next/image";
import { PROFILE } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="bg-[#F3ECDD] py-24 sm:py-32">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Portrait Image & Experience Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[#252D1D]/15 border border-[#39452B]/20">
                <Image
                  src="/assets/portrait_about_v2_web.jpg"
                  alt={`${PROFILE.name} portrait`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#252D1D] text-[#F3ECDD] px-6 py-5 rounded-2xl shadow-xl shadow-[#252D1D]/30 border border-[#C8A95B]/30">
                <span className="font-serif text-3xl font-medium block">3+</span>
                <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-[#737C5A]">
                  Years in AI
                </span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-[#737C5A] font-mono text-xs font-semibold tracking-widest uppercase">
              <span className="w-7 h-[1px] bg-[#737C5A]" />
              <span>Behind BEYOND</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1E2216] font-normal leading-snug">
              I&apos;m {PROFILE.name} — the creator behind BEYOND.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#2C3122] leading-relaxed">
              <p>
                I&apos;ve spent the last three years inside AI tools: not just using them, but tracking
                how fast they change and what they&apos;re actually good for. At {PROFILE.age}, I run
                two YouTube channels where I write the script, generate the voice, and produce the
                visuals myself — without ever stepping in front of a camera.
              </p>
              <p>
                I can read and write code — C, Python, Java, HTML, CSS, and modern web architectures —
                but most of what I build happens through AI. I&apos;m a builder who works through AI
                first: turning an idea into a finished video, a working tool, or a piece of content
                using whatever the fastest, sharpest tool for the job is.
              </p>
              <p className="font-medium text-[#1E2216]">
                I don&apos;t just want to watch this technology grow. I want to build with it, every single day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
