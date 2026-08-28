'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'WORK', href: '#work' },
  { label: 'LAB', href: '#lab' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTENT', href: '#content' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out-expo ${
          scrolled ? 'py-3 glass-dark text-cream' : 'py-5 bg-transparent text-olive-dark'
        }`}
      >
        <div className="section-container flex items-center justify-between mx-auto px-6 max-w-7xl">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold/50 bg-black/80 p-0.5 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-gold shadow-md">
              <img 
                src="/images/profile-logo.png" 
                alt="BEYOND Profile Logo" 
                className="w-full h-full object-cover rounded-full" 
              />
            </div>
            <span className={`font-display font-bold text-base tracking-wider uppercase transition-colors ${scrolled ? 'text-cream group-hover:text-gold' : 'text-olive-dark group-hover:text-gold'}`}>
              BEYOND
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-[13px] font-medium tracking-[0.06em] uppercase transition-colors duration-500 ease-out-expo hover:text-olive-sage ${
                    scrolled ? 'text-cream' : 'text-olive-dark'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-gold transition-all duration-500 ease-out-expo ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* CTA / Hamburger */}
          <div className="flex items-center gap-4">
            <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer" className="hidden lg:flex px-4 py-2 rounded-full border border-gold/40 text-gold text-xs font-bold tracking-wider hover:bg-gold hover:text-black transition-all items-center gap-1 shadow-sm">
              ⚡ VIBE CODE
            </a>
            <a href="#contact" className="hidden lg:flex btn-primary items-center">
              LET'S WORK TOGETHER <ArrowRight size={14} strokeWidth={1.5} className="ml-1" />
            </a>
            <button
              className="lg:hidden p-2 text-current"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] glass-dark flex flex-col items-center justify-center min-h-screen">
          <button
            className="absolute top-6 right-6 p-2 text-cream"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={32} strokeWidth={1.5} />
          </button>
          
          <div className="flex flex-col items-center gap-8 text-cream">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-2xl font-display font-bold tracking-widest uppercase transition-colors hover:text-gold ${
                  activeSection === link.href.substring(1) ? 'text-gold' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary mt-8 flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              LET'S WORK TOGETHER <ArrowRight size={16} strokeWidth={1.5} className="ml-2" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
