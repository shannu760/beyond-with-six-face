"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/data/social";
import { Mail, Linkedin, Github, Instagram, Copy, Check, ArrowUpRight, MessageSquare } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-[#F3EBDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#556B2F]/10 border border-[#556B2F]/20 text-[#556B2F] text-xs font-bold uppercase tracking-widest mb-6">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>06 // INITIATE COLLABORATION</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#28301D] leading-[1.08] mb-6">
              LET'S BUILD SOMETHING INTERESTING.
            </h2>

            <p className="text-lg sm:text-xl text-[#6F735F] leading-relaxed max-w-xl mb-10">
              Have an idea, project, or experiment in mind? Whether you need interactive 3D WebGL interfaces, generative AI pipelines, or high-performance web products — let's connect.
            </p>

            {/* Email Box & Copy Trigger */}
            <div className="p-6 rounded-2xl bg-[#FAF7EF] border border-[#556B2F]/20 shadow-soft-shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6F735F] block mb-1">
                  DIRECT EMAIL
                </span>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="text-base sm:text-lg font-bold text-[#28301D] hover:text-[#556B2F] transition-colors break-all"
                >
                  {SOCIAL_LINKS.email}
                </a>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-xl bg-[#556B2F]/10 text-[#556B2F] hover:bg-[#556B2F] hover:text-[#FAF7EF] text-xs font-semibold flex items-center gap-2 transition-all shrink-0"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>

          </motion.div>

          {/* Right Column: Social Links & Direct Mail CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Primary Large Olive CTA Button */}
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="w-full p-8 rounded-3xl bg-[#556B2F] text-[#FAF7EF] shadow-olive-glow hover:bg-[#6B7A3A] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 group flex flex-col justify-between min-h-[180px]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E8DDC8]/80">
                  START A CONVERSATION
                </span>
                <div className="w-10 h-10 rounded-full bg-[#FAF7EF]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-5 h-5 text-[#FAF7EF]" />
                </div>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Send an Email →
              </span>
            </a>

            {/* Social Channels List */}
            <div className="p-6 rounded-3xl bg-[#FAF7EF] border border-[#556B2F]/15 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6F735F] block mb-2">
                PROFESSIONAL CHANNELS
              </span>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl hover:bg-[#E8DDC8]/50 text-[#28301D] font-medium text-sm transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-[#556B2F]" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6F735F] group-hover:text-[#556B2F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl hover:bg-[#E8DDC8]/50 text-[#28301D] font-medium text-sm transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-[#556B2F]" />
                  <span>GitHub Repository</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6F735F] group-hover:text-[#556B2F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl hover:bg-[#E8DDC8]/50 text-[#28301D] font-medium text-sm transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-[#556B2F]" />
                  <span>Instagram Showcase</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6F735F] group-hover:text-[#556B2F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
