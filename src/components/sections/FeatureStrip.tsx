'use client';

import React, { useEffect } from 'react';
import { Layers, Sparkles, User, Globe } from 'lucide-react';

export default function FeatureStrip() {
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

  const features = [
    {
      icon: Layers,
      title: 'MULTIDISCIPLINARY',
      subtitle: 'Design • Code • AI • Content',
      delay: 'reveal-delay-1',
    },
    {
      icon: Sparkles,
      title: 'EXPERIMENTING DAILY',
      subtitle: 'Building • Learning • Sharing',
      delay: 'reveal-delay-2',
    },
    {
      icon: User,
      title: 'STUDENT • CREATOR • BUILDER',
      subtitle: 'Always curious, always growing.',
      delay: 'reveal-delay-3',
    },
    {
      icon: Globe,
      title: 'BASED IN INDIA',
      subtitle: 'Working globally',
      delay: 'reveal-delay-4',
    },
  ];

  return (
    <section className="bg-olive-dark py-6 border-b border-olive-sage/20 section-olive">
      <div className="section-container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`reveal ${feature.delay} flex flex-col items-center text-center px-4 md:border-r md:border-olive-sage/20 last:border-r-0`}
            >
              <feature.icon className="text-gold mb-3" size={20} strokeWidth={1.5} />
              <h3 className="text-cream text-sm font-semibold tracking-wide uppercase mb-1">
                {feature.title}
              </h3>
              <p className="text-beige/60 text-xs tracking-wide">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
