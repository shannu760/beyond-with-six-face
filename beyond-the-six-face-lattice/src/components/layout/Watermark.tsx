"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export function Watermark() {
  const [opacity, setOpacity] = useState(0.85);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / (docHeight || 1);
      // Smoothly vary watermark opacity based on scroll
      setOpacity(Math.max(0.4, 0.9 - scrollProgress * 0.4));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Brand watermark"
      className="fixed bottom-6 left-6 z-30 pointer-events-none hidden lg:block transition-opacity duration-300"
      style={{ opacity }}
    >
      <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#39452B]/30 shadow-md shadow-[#252D1D]/10 bg-[#E8DFC9]/60 backdrop-blur-sm p-1">
        <Image
          src="/assets/logo_web.png"
          alt="BEYOND Seal"
          fill
          className="object-contain p-1"
          unoptimized
        />
      </div>
    </aside>
  );
}
