'use client';

import React, { useEffect } from 'react';
import { Instagram, Youtube, Mail } from 'lucide-react';

export default function ContactSection() {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
    const projectType = (form.elements.namedItem('projectType') as HTMLSelectElement)?.value || '';
    const budget = (form.elements.namedItem('budget') as HTMLSelectElement)?.value || '';
    const timeline = (form.elements.namedItem('timeline') as HTMLSelectElement)?.value || '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';

    const subject = encodeURIComponent(`Project Inquiry: ${projectType || 'New Project'} from ${name || 'Client'}`);
    const body = encodeURIComponent(
      `Hi Krishna,\n\nName: ${name}\nClient Email: ${email}\nProject Type: ${projectType}\nBudget: ${budget}\nTimeline: ${timeline}\n\nMessage:\n${message}\n`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=krishna.addanki.633@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="bg-cream py-24 section-beige">
      <div className="section-container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Info */}
          <div className="lg:w-5/12 flex flex-col reveal">
            <h2 className="heading-section text-olive-dark font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              LET'S BUILD<br />SOMETHING<br />BEYOND.
            </h2>
            <p className="text-olive-sage font-body text-lg mb-12">
              Have an idea, project or experiment worth building?
            </p>

            <div className="space-y-8 mt-auto">
              <div>
                <span className="block text-xs font-bold tracking-wider uppercase text-gold mb-4">EMAIL</span>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=krishna.addanki.633@gmail.com&su=Project%20Inquiry%20%7C%20BEYOND" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-olive-dark font-medium text-lg hover:text-gold transition-colors flex items-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  krishna.addanki.633@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-xs font-bold tracking-wider uppercase text-gold mb-4">SOCIALS</span>
                <div className="flex flex-col gap-4">
                  <a href="https://instagram.com/beyond_official_2026" target="_blank" rel="noopener noreferrer" className="text-olive-dark font-medium hover:text-gold transition-colors flex items-center gap-3">
                    <Instagram className="w-5 h-5" />
                    beyond_official_2026 (Brand)
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-olive-dark/70 font-medium hover:text-gold transition-colors flex items-center gap-3 text-sm">
                    <Instagram className="w-4 h-4" />
                    Personal
                  </a>
                  <a href="https://youtube.com/@godeditz08" target="_blank" rel="noopener noreferrer" className="text-olive-dark font-medium hover:text-gold transition-colors flex items-center gap-3">
                    <Youtube className="w-5 h-5" />
                    GOD EDITZ
                  </a>
                  <a href="https://youtube.com/@the_dimensionless" target="_blank" rel="noopener noreferrer" className="text-olive-dark font-medium hover:text-gold transition-colors flex items-center gap-3">
                    <Youtube className="w-5 h-5" />
                    THE_DIMENSIONLESS
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-7/12 reveal reveal-delay-2">
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs font-bold tracking-wider uppercase text-olive-sage mb-2">NAME</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="bg-transparent border-b border-olive-sage/30 py-3 text-olive-dark placeholder-olive-sage/40 focus:outline-none focus:border-gold transition-colors font-body"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs font-bold tracking-wider uppercase text-olive-sage mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@example.com"
                    className="bg-transparent border-b border-olive-sage/30 py-3 text-olive-dark placeholder-olive-sage/40 focus:outline-none focus:border-gold transition-colors font-body"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col md:col-span-1">
                  <label htmlFor="projectType" className="text-xs font-bold tracking-wider uppercase text-olive-sage mb-2">PROJECT TYPE</label>
                  <select 
                    id="projectType"
                    defaultValue=""
                    className="bg-transparent border-b border-olive-sage/30 py-3 text-olive-dark focus:outline-none focus:border-gold transition-colors font-body appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select...</option>
                    <option value="portfolio">Portfolio</option>
                    <option value="webapp">Web App</option>
                    <option value="ai">AI Project</option>
                    <option value="content">Content</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col md:col-span-1">
                  <label htmlFor="budget" className="text-xs font-bold tracking-wider uppercase text-olive-sage mb-2">BUDGET</label>
                  <select 
                    id="budget"
                    defaultValue=""
                    className="bg-transparent border-b border-olive-sage/30 py-3 text-olive-dark focus:outline-none focus:border-gold transition-colors font-body appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select...</option>
                    <option value="tier1">&lt; $1K</option>
                    <option value="tier2">$1K - $5K</option>
                    <option value="tier3">$5K - $10K</option>
                    <option value="tier4">$10K+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>
                <div className="flex flex-col md:col-span-1">
                  <label htmlFor="timeline" className="text-xs font-bold tracking-wider uppercase text-olive-sage mb-2">TIMELINE</label>
                  <select 
                    id="timeline"
                    defaultValue=""
                    className="bg-transparent border-b border-olive-sage/30 py-3 text-olive-dark focus:outline-none focus:border-gold transition-colors font-body appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select...</option>
                    <option value="fast">&lt; 1 month</option>
                    <option value="medium">1-3 months</option>
                    <option value="slow">3-6 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-bold tracking-wider uppercase text-olive-sage mb-2">MESSAGE</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Tell me about your idea..."
                  className="bg-transparent border-b border-olive-sage/30 py-3 text-olive-dark placeholder-olive-sage/40 focus:outline-none focus:border-gold transition-colors font-body resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=krishna.addanki.633@gmail.com&su=Project%20Inquiry%20%7C%20BEYOND"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto btn-primary bg-olive-dark text-cream hover:bg-gold hover:text-olive-black px-10 py-4 rounded-full text-sm font-bold tracking-wider uppercase inline-flex items-center justify-center transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  START A PROJECT →
                </a>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
