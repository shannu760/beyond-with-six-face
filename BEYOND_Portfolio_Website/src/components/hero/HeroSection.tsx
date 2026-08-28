'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Youtube, Instagram } from 'lucide-react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate parallax offsets
  const parallaxX = mousePosition.x * -10;
  const parallaxY = mousePosition.y * -10;

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-beige overflow-hidden pt-[120px]"
    >
      <div className="section-container mx-auto px-6 max-w-7xl h-full flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Column */}
        <div className="w-full lg:w-[40%] z-10 flex flex-col justify-center h-full pt-10 lg:pt-0 reveal">
          <div className="text-olive-sage label-upper mb-6 flex items-center text-xs md:text-sm font-medium tracking-wider uppercase">
            — CREATIVE TECHNOLOGIST
          </div>
          
          <h1 className="heading-hero font-display font-black text-[clamp(4rem,7.5vw,7.5rem)] leading-[0.9] tracking-tighter mb-8 flex flex-col">
            <span className="text-olive-dark">I BUILD</span>
            <span className="text-olive-dark">DIGITAL</span>
            <span className="text-olive-sage">WORLDS.</span>
          </h1>
          
          <p className="body-editorial font-body text-base md:text-lg text-olive-dark/70 max-w-[420px] leading-relaxed mb-10">
            At the intersection of AI, code, design
            and content — I turn ideas into experiences
            that <strong className="font-bold text-olive-dark">inspire</strong>, <strong className="font-bold text-olive-dark">engage</strong> and create <strong className="font-bold text-olive-dark">impact</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#contact" className="btn-primary flex items-center justify-center w-fit transition-all duration-500 ease-out-expo">
              LET'S WORK TOGETHER <ArrowRight size={14} strokeWidth={1.5} className="ml-2" />
            </a>
            <a href="#work" className="btn-secondary flex items-center justify-center w-fit transition-all duration-500 ease-out-expo">
              EXPLORE MY WORK <ArrowRight size={14} strokeWidth={1.5} className="ml-2" />
            </a>
          </div>
          
          <div className="flex items-center gap-3 cursor-pointer group transition-all duration-500 ease-out-expo">
            <div className="w-8 h-8 rounded-full border border-olive-sage/50 flex items-center justify-center transition-all duration-500 ease-out-expo group-hover:border-gold group-hover:scale-110">
              <Play size={14} strokeWidth={1.5} className="fill-olive-sage text-olive-sage group-hover:fill-gold group-hover:text-gold transition-colors duration-500" />
            </div>
            <span className="label-upper text-olive-sage uppercase tracking-wider text-xs font-medium group-hover:text-gold transition-colors duration-500">
              WATCH MY WORLD
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[60%] h-[60vh] lg:h-[85vh] relative mt-10 lg:mt-0 flex items-end justify-center lg:justify-end reveal reveal-delay-2">
          {/* Portal Background Area (Placeholder for PortalCanvas) */}
          <div className="absolute inset-0 w-full h-full z-0 opacity-50 bg-gradient-to-tr from-olive-sage/20 to-transparent rounded-full blur-3xl" />
          
          {/* Portrait Image */}
          <div 
            className="relative z-10 w-full max-w-[500px] lg:max-w-[800px] flex flex-col items-center lg:items-end transition-transform duration-500 ease-out-expo"
            style={{ transform: `translate(${parallaxX}px, ${parallaxY}px)` }}
          >
            <img 
              src="/images/portrait.png" 
              alt="Shanmukha Krishna" 
              className="w-full h-auto max-h-[70vh] lg:max-h-[85vh] object-contain object-bottom drop-shadow-2xl"
              style={{
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              }}
            />
            
            {/* Signature */}
            <div className="absolute bottom-10 lg:bottom-20 right-0 lg:right-10 flex flex-col items-center lg:items-end z-20">
              <span className="font-accent italic text-2xl md:text-3xl lg:text-4xl text-olive-dark mb-1">
                Shanmukha Krishna
              </span>
              <span className="label-upper uppercase tracking-[0.2em] text-[10px] md:text-xs text-olive-sage font-medium">
                FOUNDER OF BEYOND
              </span>
            </div>
          </div>
        </div>
        
      </div>

      {/* Social Links */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-20 reveal reveal-delay-3">
        <a href="https://youtube.com/@godeditz08" target="_blank" rel="noreferrer" aria-label="YouTube - God Editz" className="w-9 h-9 rounded-full glass-olive flex items-center justify-center text-cream hover:text-gold hover:scale-110 transition-all duration-500 ease-out-expo">
          <Youtube size={16} strokeWidth={1.5} />
        </a>
        <a href="https://www.instagram.com/beyond_official_2026/" target="_blank" rel="noreferrer" aria-label="Instagram - BEYOND Official" className="w-9 h-9 rounded-full glass-olive flex items-center justify-center text-cream hover:text-gold hover:scale-110 transition-all duration-500 ease-out-expo">
          <Instagram size={16} strokeWidth={1.5} />
        </a>
        <a href="https://www.instagram.com/shanmukha_krishna_03/" target="_blank" rel="noreferrer" aria-label="Instagram - Personal" className="w-9 h-9 rounded-full glass-olive flex items-center justify-center text-cream hover:text-gold hover:scale-110 transition-all duration-500 ease-out-expo" style={{ opacity: 0.7 }}>
          <Instagram size={16} strokeWidth={1.5} />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-4 z-20 opacity-70 animate-bounce reveal reveal-delay-4">
        <span className="label-upper uppercase tracking-widest text-[10px] text-olive-sage font-medium origin-center rotate-90 translate-y-[-20px]">
          SCROLL
        </span>
        <ArrowRight size={14} strokeWidth={1.5} className="text-olive-sage rotate-90" />
      </div>
      
    </section>
  );
}
