'use client';

import React, { useEffect } from 'react';
import { ExternalLink, PlayCircle } from 'lucide-react';

export default function ContentSection() {
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

  return (
    <section id="content" className="bg-olive-dark py-24 section-olive overflow-hidden">
      <div className="section-container mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-12 lg:gap-8">
        
        {/* Left Column */}
        <div className="lg:w-[30%] flex flex-col justify-center reveal">
          <span className="label-upper text-gold text-sm font-medium tracking-wider uppercase mb-4 block">
            — TWO DIMENSIONS
          </span>
          <h2 className="heading-section text-cream font-display font-bold text-4xl md:text-5xl leading-tight tracking-tight mb-6">
            I CREATE<br />IN MORE THAN<br />ONE <span className="text-beige/60">DIMENSION.</span>
          </h2>
          <p className="text-beige/60 font-body text-base md:text-lg mb-8 leading-relaxed">
            Exploring creativity through visual storytelling, editing, ideas and philosophy.
          </p>
          <div>
            <a href="#work" className="btn-secondary text-cream border border-cream/30 hover:border-cream px-6 py-3 rounded-full transition-all duration-500 ease-out-expo inline-block font-medium text-sm tracking-wide">
              EXPLORE MY CONTENT →
            </a>
          </div>
        </div>

        {/* Right Area */}
        <div className="lg:w-[70%] flex flex-col md:flex-row gap-5">
          
          {/* Card 01 */}
          <a href="https://youtube.com/@godeditz08" target="_blank" rel="noopener noreferrer" 
             className="reveal reveal-delay-1 group flex-1 bg-olive-black/60 border border-olive-sage/10 rounded-2xl p-5 flex flex-col hover:-translate-y-2 hover:border-gold/30 transition-all duration-500 ease-out-expo">
            <div className="text-gold font-display font-bold text-xl mb-4">01</div>
            <div className="w-full aspect-video bg-gradient-to-br from-olive-dark to-olive-black rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
              <PlayCircle className="text-cream w-12 h-12 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 ease-out-expo relative z-10" strokeWidth={1.5} />
            </div>
            <div className="mt-auto">
              <h3 className="text-cream font-display font-bold text-lg mb-2 flex items-center justify-between">
                GOD EDITZ
                <ExternalLink className="text-beige/40 w-4 h-4 group-hover:text-gold transition-colors" />
              </h3>
              <p className="label-upper text-gold/60 text-xs tracking-wider font-medium">
                CINEMATIC • EDITING • VISUAL STORYTELLING
              </p>
            </div>
          </a>

          {/* Card 02 */}
          <a href="https://youtube.com/@the_dimensionless" target="_blank" rel="noopener noreferrer" 
             className="reveal reveal-delay-2 group flex-1 bg-olive-black/60 border border-olive-sage/10 rounded-2xl p-5 flex flex-col hover:-translate-y-2 hover:border-gold/30 transition-all duration-500 ease-out-expo">
            <div className="text-gold font-display font-bold text-xl mb-4">02</div>
            <div className="w-full aspect-video bg-gradient-to-br from-olive-dark to-olive-black rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
              <PlayCircle className="text-cream w-12 h-12 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 ease-out-expo relative z-10" strokeWidth={1.5} />
            </div>
            <div className="mt-auto">
              <h3 className="text-cream font-display font-bold text-lg mb-2 flex items-center justify-between">
                THE_DIMENSIONLESS
                <ExternalLink className="text-beige/40 w-4 h-4 group-hover:text-gold transition-colors" />
              </h3>
              <p className="label-upper text-gold/60 text-xs tracking-wider font-medium">
                PHILOSOPHY • IDEAS • STORYTELLING
              </p>
            </div>
          </a>

          {/* Card 03 - Let's Build CTA */}
          <div className="reveal reveal-delay-3 flex-1 bg-olive-dark border border-gold/20 rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full justify-center">
              <span className="label-upper text-gold text-xs font-medium tracking-wider uppercase mb-3">
                LET'S BUILD
              </span>
              <h3 className="heading-section text-cream font-display font-bold text-2xl mb-4 leading-tight">
                SOMETHING<br />BEYOND.
              </h3>
              <p className="text-beige/60 text-sm mb-6 leading-relaxed">
                Have an idea, project or experiment in mind? Let's bring it to life.
              </p>
              <a href="#contact" className="btn-primary-light bg-cream text-olive-dark hover:bg-gold hover:text-olive-black px-5 py-3 rounded-full text-sm font-medium tracking-wide inline-flex items-center justify-center transition-all duration-500 mt-auto">
                START A PROJECT →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
