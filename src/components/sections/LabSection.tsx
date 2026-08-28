'use client';

import React, { useEffect, useState } from 'react';
import { Bot, Code2, Globe, Box, Settings, Video, PenTool, Lightbulb } from 'lucide-react';
import { animateView, spring, stagger } from 'motion';

const categories = [
  { name: 'AI & Machine Learning', tag: 'AI', icon: Bot, desc: 'Exploring generative models, neural architectures, and intelligent workflows.' },
  { name: 'Creative Coding', tag: '3D', icon: Code2, desc: 'Generative algorithms, procedural visuals, and real-time interactive art.' },
  { name: 'Web Development', tag: 'DEV', icon: Globe, desc: 'Modern high-performance web frameworks and spatial interfaces.' },
  { name: '3D & WebGL', tag: '3D', icon: Box, desc: 'Raw Three.js, shaders, and immersive WebGL particle environments.' },
  { name: 'Automation', tag: 'AI', icon: Settings, desc: 'Building autonomous pipeline agents and productivity tooling.' },
  { name: 'Video Editing', tag: 'MEDIA', icon: Video, desc: 'Cinematic storytelling, color grading, and dynamic visual effects.' },
  { name: 'Design Systems', tag: 'MEDIA', icon: PenTool, desc: 'Luxury UI/UX, editorial layout hierarchy, and component design.' },
  { name: 'Educational Tech', tag: 'DEV', icon: Lightbulb, desc: 'Interactive visual learning engines and conceptual simulators.' }
];

const filterTabs = [
  { id: 'ALL', label: 'ALL EXPERIMENTS' },
  { id: 'AI', label: 'AI & AUTOMATION' },
  { id: '3D', label: '3D & CREATIVE' },
  { id: 'DEV', label: 'WEB & DEV' },
  { id: 'MEDIA', label: 'MEDIA & DESIGN' },
];

export default function LabSection() {
  const [activeFilter, setActiveFilter] = useState('ALL');

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

  const handleFilterChange = (filterId: string) => {
    if (filterId === activeFilter) return;

    const updateDOM = () => {
      setActiveFilter(filterId);
    };

    // Use Motion's animateView for View Transition API animations with spring physics
    try {
      if (typeof window !== 'undefined' && 'startViewTransition' in document) {
        animateView(updateDOM, { type: spring, duration: 0.6, bounce: 0.2 })
          .add('.lab-card')
          .enter(
            { opacity: [0, 1], transform: ['scale(0.85)', 'scale(1)'] },
            { delay: stagger(0.04) }
          )
          .exit(
            { opacity: [1, 0], transform: ['scale(1)', 'scale(0.85)'] }
          );
      } else {
        updateDOM();
      }
    } catch {
      updateDOM();
    }
  };

  const filteredCategories = activeFilter === 'ALL' 
    ? categories 
    : categories.filter(c => c.tag === activeFilter);

  return (
    <section id="lab" className="bg-olive-black py-24 section-dark">
      <div className="section-container mx-auto px-4 md:px-8 text-center">
        
        <div className="mb-12 reveal">
          <h2 className="heading-section text-cream font-display font-bold text-4xl md:text-5xl mb-4">
            BEYOND LAB
          </h2>
          <p className="text-beige/60 font-body text-lg">
            Where ideas become experiments. Explore multidisciplinary research domains.
          </p>
        </div>

        {/* Filter Tabs using View Transitions */}
        <div className="flex flex-wrap justify-center gap-3 mb-14 reveal">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleFilterChange(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-gold text-olive-dark shadow-[0_0_20px_rgba(200,169,91,0.4)] scale-105'
                    : 'bg-olive-dark/40 text-beige/60 hover:text-cream border border-olive-sage/20 hover:border-gold/40'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-5xl mx-auto mb-16">
          {filteredCategories.map((cat, index) => (
            <div 
              key={cat.name}
              className="lab-card group relative flex flex-col items-center justify-center p-6 aspect-square rounded-full border border-olive-sage/10 bg-olive-dark/30 backdrop-blur-sm hover:border-gold/50 hover:bg-olive-dark/50 transition-all duration-500 ease-out-expo glass-dark cursor-pointer shadow-lg"
            >
              <cat.icon className="text-olive-sage group-hover:text-gold w-10 h-10 mb-4 transition-all duration-500 group-hover:scale-110" strokeWidth={1.5} />
              <span className="text-cream text-sm font-medium tracking-wide text-center">
                {cat.name}
              </span>
              
              {/* Tooltip Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-4 bg-olive-black/95 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-10 pointer-events-none scale-95 group-hover:scale-100">
                <span className="text-beige text-xs text-center leading-relaxed">
                  {cat.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal flex items-center justify-center gap-4">
          <div className="h-px bg-olive-sage/20 w-12 md:w-24"></div>
          <span className="text-gold/60 text-xs font-semibold tracking-widest uppercase">
            EXPERIMENTS COMING SOON
          </span>
          <div className="h-px bg-olive-sage/20 w-12 md:w-24"></div>
        </div>

      </div>
    </section>
  );
}
