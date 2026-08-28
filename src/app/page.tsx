import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Projects } from "@/components/Projects";
import { ContentChannels } from "@/components/ContentChannels";
import { CreativeLab } from "@/components/CreativeLab";
import { Journey } from "@/components/Journey";
import { Philosophy } from "@/components/Philosophy";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F3EBDD] text-[#28301D] overflow-x-hidden selection:bg-[#556B2F] selection:text-[#FAF7EF]">
      {/* Navigation */}
      <Navigation />

      {/* Main Portfolio Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <ContentChannels />
        <CreativeLab />
        <Journey />
        <Philosophy />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
