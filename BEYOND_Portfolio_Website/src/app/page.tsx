"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { inView } from "motion";

// Navigation
import Navbar from "@/components/layout/Navbar";
import Watermark from "@/components/layout/Watermark";

// Hero
import HeroSection from "@/components/hero/HeroSection";

// 3D / Canvas — dynamic imports for performance
const PortalCanvas = dynamic(() => import("@/components/3d/PortalCanvas"), {
  ssr: false,
  loading: () => null,
});

const OrbitalArcs = dynamic(() => import("@/components/3d/OrbitalArcs"), {
  ssr: false,
  loading: () => null,
});

// Sections — dynamic imports for code splitting
const FeatureStrip = dynamic(
  () => import("@/components/sections/FeatureStrip"),
  { ssr: true }
);
const ContentSection = dynamic(
  () => import("@/components/sections/ContentSection"),
  { ssr: true }
);
const SkillsStrip = dynamic(
  () => import("@/components/sections/SkillsStrip"),
  { ssr: true }
);
const WorkSection = dynamic(
  () => import("@/components/sections/WorkSection"),
  { ssr: true }
);
const LabSection = dynamic(
  () => import("@/components/sections/LabSection"),
  { ssr: true }
);
const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection"),
  { ssr: true }
);
const ProcessSection = dynamic(
  () => import("@/components/sections/ProcessSection"),
  { ssr: true }
);
const FreelanceCTA = dynamic(
  () => import("@/components/sections/FreelanceCTA"),
  { ssr: true }
);
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection"),
  { ssr: true }
);

// Footer
const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: true,
});

export default function BeyondPortfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress for hero parallax and portal scaling
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const progress = Math.min(window.scrollY / heroHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // High-performance Motion inView scroll detection for reveal animations
  useEffect(() => {
    const stopInView = inView(
      ".reveal",
      (element) => {
        element.classList.add("is-visible");
      },
      { margin: "0px 0px -80px 0px", amount: 0.1 }
    );

    return () => stopInView();
  }, []);

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Watermark Seal & Background Stamp */}
      <Watermark />

      {/* Hero Section with 3D Portal and Orbital Arcs */}
      <div className="relative">
        {/* Orbital Arcs Canvas — behind everything */}
        <OrbitalArcs
          className="absolute inset-0 z-[1] pointer-events-none"
          intensity={0.6}
        />

        {/* 3D Portal */}
        <PortalCanvas
          className="absolute inset-0 z-[2] pointer-events-none"
          scrollProgress={scrollProgress}
        />

        {/* Hero Content — above 3D */}
        <div className="relative z-[5]">
          <HeroSection />
        </div>
      </div>

      {/* Feature Strip */}
      <FeatureStrip />

      {/* Content Section (YouTube Channels) */}
      <ContentSection />

      {/* Skills Strip */}
      <SkillsStrip />

      {/* Selected Work */}
      <WorkSection />

      {/* BEYOND Lab */}
      <LabSection />

      {/* About */}
      <AboutSection />

      {/* Process Timeline */}
      <ProcessSection />

      {/* Freelance CTA */}
      <FreelanceCTA />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
