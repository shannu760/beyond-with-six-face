"use client";

import { SOCIAL_LINKS } from "@/data/social";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#E8DDC8]/60 border-t border-[#556B2F]/15 text-[#28301D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#556B2F]/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 rounded-full bg-[#556B2F] text-[#FAF7EF] flex items-center justify-center text-xs font-bold">
                B
              </div>
              <span className="font-bold tracking-widest text-lg text-[#28301D]">
                {SOCIAL_LINKS.brand}
              </span>
            </div>
            <p className="text-xs text-[#6F735F]">
              Designed, built and constantly evolving.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-[#6F735F]">
            <a href="#about" className="hover:text-[#28301D] transition-colors">About</a>
            <a href="#work" className="hover:text-[#28301D] transition-colors">Work</a>
            <a href="#expertise" className="hover:text-[#28301D] transition-colors">Expertise</a>
            <a href="#lab" className="hover:text-[#28301D] transition-colors">Lab</a>
            <a href="#journey" className="hover:text-[#28301D] transition-colors">Journey</a>
            <a href="#contact" className="hover:text-[#28301D] transition-colors">Contact</a>
          </div>

          {/* Back to top trigger */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#FAF7EF] border border-[#556B2F]/20 text-[#556B2F] hover:bg-[#556B2F] hover:text-[#FAF7EF] transition-all shadow-sm flex items-center gap-2 text-xs font-semibold"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F735F]">
          <span>© 2026 {SOCIAL_LINKS.brand} — {SOCIAL_LINKS.name}. All rights reserved.</span>
          <span>Built with Next.js, Three.js & Framer Motion.</span>
        </div>

      </div>
    </footer>
  );
}
