'use client';

import React, { useEffect } from 'react';
import { PenTool, Code, Bot, Video } from 'lucide-react';

export default function FreelanceCTA() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const capabilities = [
    { name: 'DESIGN', icon: PenTool },
    { name: 'CODE', icon: Code },
    { name: 'AI', icon: Bot },
    { name: 'CONTENT', icon: Video }
  ];

  return (
    <section className="bg-beige py-32 section-beige relative overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="section-container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
        
        <h2 className="reveal heading-section text-olive-dark font-display font-bold text-4xl md:text-6xl mb-6 max-w-4xl tracking-tight leading-tight">
          DON'T JUST HIRE A DEVELOPER.
        </h2>
        
        <p className="reveal reveal-delay-1 body-editorial text-olive-sage text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
          Hire someone who can think about the idea, design the experience, build the technology, and create the content around it.
        </p>
        
        <div className="reveal reveal-delay-2 flex flex-wrap justify-center gap-4 mb-14">
          {capabilities.map((cap, index) => (
            <div 
              key={index} 
              className="glass-olive bg-olive-dark/5 backdrop-blur-md border border-gold/30 px-6 py-3 rounded-full flex items-center gap-3 shadow-sm hover:bg-olive-dark/10 transition-colors duration-300"
            >
              <cap.icon className="text-gold w-4 h-4" strokeWidth={2} />
              <span className="text-olive-dark text-xs font-bold tracking-wider uppercase">
                {cap.name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="reveal reveal-delay-3">
          <a 
            href="#contact" 
            className="btn-primary bg-olive-dark text-cream hover:bg-gold hover:text-olive-black px-10 py-4 rounded-full text-base font-bold tracking-wider uppercase inline-flex items-center justify-center transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            LET'S TALK →
          </a>
        </div>

      </div>
    </section>
  );
}
