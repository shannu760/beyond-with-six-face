'use client';

import React, { useEffect, useState } from 'react';
import { ExternalLink, X, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { animateView, spring, stagger } from 'motion';

interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  link: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: '01',
    name: 'BEYOND PORTFOLIO',
    category: 'PERSONAL PROJECT',
    description: 'A premium portfolio website with 3D portal, orbital particle systems, and editorial design.',
    longDescription: 'Engineered as a showcase of high-end creative technology. Features a raw Three.js portal scene with concentric torus geometries and emissive lighting, a Canvas 2D data-pixel orbital arc system, and custom editorial typography built on Next.js 14.',
    tech: ['Next.js 14', 'Three.js', 'Canvas 2D', 'Tailwind CSS', 'Motion'],
    link: '#home',
    highlights: ['Interactive Three.js Portal', 'Canvas 2D Data Pixel Arcs', 'Motion View Transitions API']
  },
  {
    id: '02',
    name: 'Six-Face Lattice Matrix',
    category: '3D & Creative Coding',
    description: 'Built with custom GLSL shaders and Three.js physics. Explores mathematical lattice symmetry and interactive fluid motion in browser viewports.',
    longDescription: 'An experimental 3D geometry engine exploring volumetric refraction, GPU-instanced particle networks, and real-time audio reactivity. Built with custom GLSL shaders and Three.js physics.',
    tech: ['Three.js', 'WebGL', 'GLSL', 'React Three Fiber', 'Motion'],
    link: '/scene',
    highlights: ['Mathematical Lattice Symmetry', 'Custom GLSL Refraction Shaders', 'Interactive Fluid Physics']
  },
  {
    id: '03',
    name: 'THE DIMENSIONLESS',
    category: 'EXPERIMENT',
    description: 'A philosophical content platform exploring ideas at the intersection of technology and human experience.',
    longDescription: 'An experimental media initiative dissecting complex concepts in modern artificial intelligence, human potential, and digital philosophy through short-form visual essays.',
    tech: ['Content Strategy', 'Visual Design', 'AI Audio', 'Motion Design'],
    link: 'https://youtube.com/@the_dimensionless',
    highlights: ['Digital Philosophy Essays', 'Generative Media Pipelines', 'Concept Architecture']
  }
];

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const openProject = (project: Project) => {
    const updateDOM = () => {
      setSelectedProject(project);
    };

    try {
      if (typeof window !== 'undefined' && 'startViewTransition' in document) {
        animateView(updateDOM, { type: spring, duration: 0.7, bounce: 0.25 })
          .add('.project-card')
          .enter({ opacity: [0, 1] })
          .exit({ opacity: [1, 0] });
      } else {
        updateDOM();
      }
    } catch {
      updateDOM();
    }
  };

  const closeProject = () => {
    const updateDOM = () => {
      setSelectedProject(null);
    };

    try {
      if (typeof window !== 'undefined' && 'startViewTransition' in document) {
        animateView(updateDOM, { type: spring, duration: 0.5, bounce: 0.2 })
          .add('.project-card');
      } else {
        updateDOM();
      }
    } catch {
      updateDOM();
    }
  };

  return (
    <section id="work" className="bg-beige py-24 section-beige relative">
      <div className="section-container mx-auto px-4 md:px-8">
        
        <div className="mb-16 reveal">
          <h2 className="heading-section text-olive-dark font-display font-bold text-4xl md:text-5xl mb-4">
            SELECTED WORK
          </h2>
          <p className="text-olive-sage font-body text-lg">
            A selection of personal projects, experiments, and creative platforms.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card reveal ${index % 2 === 0 ? '' : 'reveal-delay-1'} bg-olive-dark rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 hover:-translate-y-2 transition-transform duration-500 ease-out-expo shadow-xl group border border-olive-sage/10 hover:border-gold/30`}
            >
              <div className="md:w-1/3">
                <span className="text-gold font-display font-bold text-6xl md:text-8xl opacity-80 block mb-4 group-hover:scale-105 transition-transform duration-500">
                  {project.id}
                </span>
                <span className="inline-block bg-olive-sage/20 text-gold text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4 border border-gold/30">
                  {project.category}
                </span>
              </div>
              
              <div className="md:w-2/3 flex flex-col">
                <h3 className="heading-section text-cream font-display font-bold text-3xl md:text-4xl mb-4 group-hover:text-gold transition-colors">
                  {project.name}
                </h3>
                <p className="text-beige/70 font-body text-base md:text-lg mb-6 max-w-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-olive-sage border border-olive-sage/30 px-3 py-1 rounded-full bg-olive-black/30">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  <button 
                    onClick={() => openProject(project)}
                    className="btn-primary text-cream hover:text-gold flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transition-all"
                  >
                    EXPLORE DETAILS <ArrowRight className="w-4 h-4" />
                  </button>
                  {project.link !== '#' && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-beige/60 hover:text-gold flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> VISIT LINK
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal with View Transition animation */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-olive-black/80 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-3xl bg-olive-dark border border-gold/40 rounded-2xl p-6 md:p-10 shadow-2xl text-cream overflow-hidden">
            <button 
              onClick={closeProject}
              className="absolute top-6 right-6 p-2 rounded-full bg-olive-black/60 text-cream hover:text-gold border border-gold/30 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-gold font-display font-bold text-3xl">{selectedProject.id}</span>
              <span className="bg-gold/20 text-gold text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-gold/40">
                {selectedProject.category}
              </span>
            </div>

            <h3 className="font-display font-bold text-3xl md:text-4xl text-cream mb-4">
              {selectedProject.name}
            </h3>

            <p className="text-beige/80 font-body text-base md:text-lg mb-6 leading-relaxed">
              {selectedProject.longDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold tracking-widest text-gold uppercase mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> KEY HIGHLIGHTS
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-beige/70">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-bold tracking-widest text-gold uppercase mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" /> TECH STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="text-xs text-cream bg-olive-black/50 border border-gold/30 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-olive-sage/20 flex justify-end gap-4">
              <button 
                onClick={closeProject}
                className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-beige/70 hover:text-cream border border-olive-sage/30 transition-colors"
              >
                CLOSE
              </button>
              {selectedProject.link !== '#' && (
                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-cream hover:text-gold flex items-center gap-2 text-xs font-semibold tracking-wider uppercase"
                >
                  OPEN PROJECT <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
