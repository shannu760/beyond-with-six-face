'use client';

import React from 'react';
import { Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-olive-dark py-20 border-t border-gold/20 section-dark">
      <div className="section-container mx-auto px-4 flex flex-col items-center">
        
        {/* Animated Logo Ring */}
        <div className="relative flex justify-center items-center mb-10 w-36 h-36">
          <div className="absolute w-[130px] h-[130px] border border-gold/40 rounded-full animate-[spin_12s_linear_infinite]"></div>
          <div className="w-16 h-16 rounded-xl overflow-hidden border border-gold/50 bg-black/60 p-1 flex items-center justify-center relative z-10 shadow-xl">
            <img 
              src="/images/logo.png" 
              alt="BEYOND Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Text */}
        <h2 className="heading-section text-cream font-display font-bold text-2xl md:text-3xl text-center leading-tight mb-8">
          THINK BEYOND.<br />BUILD BEYOND.
        </h2>

        {/* Socials */}
        <div className="flex gap-6 mb-16">
          <a href="https://youtube.com/@godeditz08" target="_blank" rel="noopener noreferrer" className="text-olive-sage hover:text-gold transition-colors">
            <Youtube className="w-6 h-6" strokeWidth={1.5} />
            <span className="sr-only">YouTube</span>
          </a>
          <a href="https://instagram.com/beyond_official_2026" target="_blank" rel="noopener noreferrer" className="text-olive-sage hover:text-gold transition-colors">
            <Instagram className="w-6 h-6" strokeWidth={1.5} />
            <span className="sr-only">Instagram</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-beige/40 text-xs font-body tracking-wide">
          © {new Date().getFullYear()} BEYOND. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
