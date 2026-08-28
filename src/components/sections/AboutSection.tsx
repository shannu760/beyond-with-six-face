'use client';

import React, { useEffect } from 'react';

export default function AboutSection() {
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
    <section id="about" className="bg-beige py-24 section-beige">
      <div className="section-container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Text Column */}
          <div className="lg:w-1/2 flex flex-col reveal">
            <h2 className="heading-section text-olive-dark font-display font-bold text-4xl md:text-5xl mb-10">
              BEHIND BEYOND
            </h2>
            
            <p className="font-accent italic text-olive-sage text-xl md:text-2xl mb-8 leading-relaxed">
              "BEYOND is more than a portfolio — it's a philosophy."
            </p>
            
            <div className="space-y-6 text-olive-dark/85 font-body text-base md:text-lg leading-relaxed">
              <p>
                Driven by an unyielding <strong className="text-olive-dark font-bold">curiosity</strong>, I refuse to operate within rigid boundaries. For years, I’ve navigated the convergence of artificial intelligence, full-stack code, cinematic visual editing, and human narrative. BEYOND is the physical manifestation of that pursuit—a space where raw concepts are forged into living experiences.
              </p>
              <p>
                I believe in <strong className="text-olive-dark font-bold">building</strong> with uncompromising intent. Whether structuring clean algorithms, designing immersive glassmorphic interfaces, or cutting high-impact visual edits, the standard remains singular: create work that commands attention and leaves an indelible imprint.
              </p>
              <p>
                True creation demands constant evolution. Through relentless <strong className="text-olive-dark font-bold">experimentation</strong>, I test new tools and paradigms daily. BEYOND stands not as a static record of past work, but as an active, breathing laboratory for tomorrow's innovations.
              </p>
            </div>
          </div>

          {/* Right Portrait Column */}
          <div className="lg:w-1/2 w-full reveal reveal-delay-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] border-l-4 border-gold pl-6">
              <div className="w-full h-full bg-cream relative overflow-hidden shadow-xl rounded-sm">
                <img 
                  src="/images/portrait.png" 
                  alt="Portrait" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out-expo"
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    e.currentTarget.src = 'https://via.placeholder.com/600x800/E8DCC3/252B18?text=PORTRAIT';
                  }}
                />
                <div className="absolute inset-0 bg-olive-dark/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
