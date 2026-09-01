"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { SylvaHero } from "@/shaders/threeui-entry";
import "@/shaders/threeui.css";

export function Scene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="shader-frame relative w-full h-screen overflow-hidden bg-[#0A0D08]">
      {/* Floating Header Controls */}
      <div className="absolute top-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none">
        <Link
          href="/#work"
          className="pointer-events-auto inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#F3EBDD]/90 backdrop-blur-xl border border-[#556B2F]/30 text-[#28301D] text-xs font-bold uppercase tracking-wider hover:bg-[#FAF7EF] hover:border-[#556B2F]/60 hover:-translate-x-0.5 shadow-lg transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 text-[#556B2F] group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="pointer-events-auto hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#182012]/80 backdrop-blur-xl border border-[#556B2F]/40 text-[#FAF7EF] text-xs font-semibold tracking-wide shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#8A9A5B] animate-pulse" />
          <span>Six-Face Lattice Matrix • 3D GLSL Shader</span>
        </div>
      </div>

      {/* 3D WebGL Shader Canvas */}
      {mounted ? (
        <SylvaHero
          variant="living-green"
          headingFont="lexend"
          bodyFont="lexend"
          headingWeight="300"
          bodyWeight="300"
          primaryColor="#ffffff"
          headingSize={63}
          bodySize={16.5}
          headingLetterSpacing={-0.006}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-[#0A0D08] text-[#8A9A5B] text-xs font-mono tracking-widest uppercase">
          Initializing 3D Shader Engine...
        </div>
      )}
    </div>
  );
}
