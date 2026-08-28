'use client';

import React, { useEffect, useRef, useState } from 'react';
import { inView } from 'motion';

const steps = [
  "DISCOVER", "THINK", "DESIGN", "BUILD", "EXPERIMENT", "REFINE", "LAUNCH"
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!sectionRef.current) return;

    const stopInView = inView(
      sectionRef.current,
      () => {
        steps.forEach((_, i) => {
          setTimeout(() => {
            setActiveIndex((prev) => Math.max(prev, i));
          }, i * 350);
        });
      },
      { amount: 0.3 }
    );

    return () => stopInView();
  }, []);

  const progressWidth = activeIndex >= 0 ? `${(activeIndex / (steps.length - 1)) * 100}%` : '0%';
  const progressHeight = activeIndex >= 0 ? `${(activeIndex / (steps.length - 1)) * 100}%` : '0%';

  return (
    <section 
      ref={sectionRef}
      className="bg-olive-dark py-24 section-olive overflow-hidden relative"
    >
      <div className="section-container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <span className="label-upper text-gold text-sm font-medium tracking-wider uppercase">
            THE PROCESS
          </span>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden md:block relative w-full max-w-6xl mx-auto">
          {/* Background Line */}
          <div className="absolute top-5 left-0 w-full h-[1px] bg-olive-sage/20"></div>
          
          {/* Animated Progress Line */}
          <div 
            className="absolute top-5 left-0 h-[1px] bg-gold transition-all duration-700 ease-out"
            style={{ width: progressWidth }}
          ></div>

          <div className="flex justify-between relative z-10">
            {steps.map((step, index) => {
              const isActive = index <= activeIndex;
              return (
                <div key={index} className="flex flex-col items-center group">
                  {/* Node */}
                  <div className={[
                    "w-10 h-10 rounded-full flex items-center justify-center bg-olive-dark border-2 transition-all duration-500 ease-out mb-4",
                    isActive ? "border-gold shadow-[0_0_15px_rgba(200,169,91,0.4)]" : "border-olive-sage/30"
                  ].join(" ")}>
                    <div className={[
                      "w-3 h-3 rounded-full transition-all duration-500",
                      isActive ? "bg-gold scale-100" : "bg-transparent scale-0"
                    ].join(" ")}></div>
                  </div>
                  
                  {/* Text */}
                  <span className={[
                    "font-display text-lg font-bold transition-colors duration-500",
                    isActive ? "text-gold" : "text-olive-sage/50"
                  ].join(" ")}>
                    0{index + 1}
                  </span>
                  <span className={[
                    "text-xs tracking-wider uppercase font-medium mt-1 transition-colors duration-500",
                    isActive ? "text-cream" : "text-beige/30"
                  ].join(" ")}>
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden relative w-full pl-6 border-l border-olive-sage/20">
          <div 
            className="absolute top-0 left-[-1px] w-[2px] bg-gold transition-all duration-700 ease-out"
            style={{ height: progressHeight }}
          ></div>
          
          <div className="flex flex-col gap-10">
            {steps.map((step, index) => {
              const isActive = index <= activeIndex;
              return (
                <div key={index} className="relative flex flex-col group">
                  {/* Node */}
                  <div className={[
                    "absolute -left-[35px] top-1 w-6 h-6 rounded-full flex items-center justify-center bg-olive-dark border-2 transition-all duration-500 ease-out",
                    isActive ? "border-gold" : "border-olive-sage/30"
                  ].join(" ")}>
                    <div className={[
                      "w-2 h-2 rounded-full transition-all duration-500",
                      isActive ? "bg-gold scale-100" : "bg-transparent scale-0"
                    ].join(" ")}></div>
                  </div>
                  
                  {/* Text */}
                  <div className="flex items-center gap-3">
                    <span className={[
                      "font-display text-lg font-bold transition-colors duration-500",
                      isActive ? "text-gold" : "text-olive-sage/50"
                    ].join(" ")}>
                      0{index + 1}
                    </span>
                    <span className={[
                      "text-sm tracking-wider uppercase font-medium transition-colors duration-500",
                      isActive ? "text-cream" : "text-beige/30"
                    ].join(" ")}>
                      {step}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
