'use client';

import React from 'react';

const technologies = [
  "HTML/CSS", "JavaScript", "React/Next.js", "Node.js", 
  "Python", "Three.js", "MongoDB", "AI Tools", 
  "Git/GitHub", "VS Code", "Figma", "Canva"
];

export default function SkillsStrip() {
  return (
    <section id="skills" className="bg-olive-dark py-4 border-y border-olive-sage/20 relative overflow-hidden flex items-center">
      <div className="absolute left-0 top-0 bottom-0 px-6 bg-olive-dark z-10 flex items-center shadow-[10px_0_20px_rgba(37,43,24,0.9)]">
        <span className="text-gold uppercase tracking-wider text-xs font-medium whitespace-nowrap">
          WHAT I WORK WITH —
        </span>
      </div>
      
      <div className="flex pl-48 sm:pl-56">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {technologies.map((tech, index) => (
            <div key={`tech-1-${index}`} className="flex items-center mx-6 group">
              <div className="w-1.5 h-1.5 rounded-full bg-olive-sage/40 mr-3 group-hover:bg-gold transition-colors"></div>
              <span className="text-beige/60 text-sm font-body group-hover:text-cream transition-colors duration-300">
                {tech}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {technologies.map((tech, index) => (
            <div key={`tech-2-${index}`} className="flex items-center mx-6 group">
              <div className="w-1.5 h-1.5 rounded-full bg-olive-sage/40 mr-3 group-hover:bg-gold transition-colors"></div>
              <span className="text-beige/60 text-sm font-body group-hover:text-cream transition-colors duration-300">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
