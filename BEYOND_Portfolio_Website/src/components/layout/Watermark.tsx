'use client';

import React from 'react';

export default function Watermark() {
  return (
    <>
      {/* 1. Large Fixed Background Watermark Stamp (Subtle luxury brand mark behind page content) */}
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] pointer-events-none z-[0] opacity-[0.06] mix-blend-luminosity select-none"
        aria-hidden="true"
      >
        <img 
          src="/images/watermark.png" 
          alt="" 
          className="w-full h-full object-contain animate-[spin_120s_linear_infinite]"
        />
      </div>

      {/* 2. Visible Floating Watermark Badge Seal (Bottom-Left fixed for all visitors) */}
      <div 
        className="fixed bottom-6 left-6 z-40 flex items-center gap-3 p-2 pr-4 bg-olive-dark/80 backdrop-blur-md border border-gold/30 rounded-full shadow-2xl transition-all duration-500 hover:scale-105 hover:border-gold group cursor-pointer"
        aria-label="BEYOND Official Verification Seal"
      >
        <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gold/40 flex-shrink-0 bg-black/40">
          <img 
            src="/images/watermark.png" 
            alt="BEYOND Watermark Seal" 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
            <span className="font-display font-bold text-xs tracking-wider text-cream uppercase">
              BEYOND
            </span>
          </div>
          <span className="text-[10px] font-body text-gold/80 tracking-widest uppercase">
            STAY AHEAD. THINK BEYOND.
          </span>
        </div>
      </div>
    </>
  );
}
