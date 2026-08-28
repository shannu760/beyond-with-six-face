import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Watermark } from "@/components/layout/Watermark";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { WorkSection } from "@/components/sections/WorkSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhySection } from "@/components/sections/WhySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="relative bg-[#E8DFC9] min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main Assembly */}
      <HeroSection />
      <FeatureStrip />
      <WorkSection />
      <AboutSection />
      <SkillsSection />
      <ProcessSection />
      <WhySection />
      <ContactSection />

      {/* Footer & Floating Watermark */}
      <Footer />
      <Watermark />
    </main>
  );
}
