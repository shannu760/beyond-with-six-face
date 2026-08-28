"use client";

import React, { useState } from "react";
import { ArrowRight, Mail, Instagram, Youtube, Send, CheckCircle } from "lucide-react";
import { PROFILE } from "@/lib/data";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    // Compose direct mailto link
    const subject = encodeURIComponent(`Project Inquiry | BEYOND — from ${name}`);
    const body = encodeURIComponent(
      `Hi Shanmukha,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent via BEYOND Portfolio`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#252D1D] text-[#EFE7D2] py-24 sm:py-32 text-center">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 text-[#737C5A] font-mono text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-7 h-[1px] bg-[#737C5A]" />
            <span>Let&apos;s Talk</span>
            <span className="w-7 h-[1px] bg-[#737C5A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F3ECDD] leading-tight">
            Have an idea
            <br />
            worth building?
          </h2>
          <p className="text-sm sm:text-base text-[#737C5A] mt-4">
            Whether it&apos;s a new faceless YouTube channel, cinematic AI video generation, or a custom digital tool.
          </p>
        </div>

        {/* Direct Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href={PROFILE.instagramBrand}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-full bg-[#F3ECDD] text-[#252D1D] hover:bg-[#E8DFC9] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#252D1D]/30"
          >
            <Instagram className="w-4 h-4" />
            <span>DM @beyond_official_2026</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={PROFILE.instagramPersonal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-full bg-transparent border border-[#737C5A] text-[#EFE7D2] hover:bg-[#737C5A]/20 transition-all transform hover:-translate-y-0.5"
          >
            <Instagram className="w-4 h-4" />
            <span>Personal Instagram</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Direct Inquiry Form */}
        <div className="max-w-xl mx-auto bg-[#39452B]/40 border border-[#F3ECDD]/15 rounded-3xl p-8 sm:p-10 text-left shadow-2xl backdrop-blur-sm mb-16">
          <h3 className="font-serif text-2xl text-[#F3ECDD] mb-2 font-medium">
            Send a Direct Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-[#737C5A] mb-6">
            Directly routes to <span className="text-[#F3ECDD]">{PROFILE.email}</span>
          </p>

          {submitted ? (
            <div className="bg-[#737C5A]/20 border border-[#737C5A]/40 rounded-2xl p-6 text-center space-y-2">
              <CheckCircle className="w-8 h-8 text-[#C8A95B] mx-auto" />
              <div className="font-serif text-lg text-[#F3ECDD]">Message client opened!</div>
              <p className="text-xs text-[#EFE7D2]/80">
                Your email client was triggered with your message details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#737C5A] mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Miller"
                  className="w-full bg-[#252D1D]/80 border border-[#F3ECDD]/20 rounded-xl px-4 py-3 text-sm text-[#F3ECDD] placeholder-[#737C5A] focus:outline-none focus:border-[#C8A95B] transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#737C5A] mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@example.com"
                  className="w-full bg-[#252D1D]/80 border border-[#F3ECDD]/20 rounded-xl px-4 py-3 text-sm text-[#F3ECDD] placeholder-[#737C5A] focus:outline-none focus:border-[#C8A95B] transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#737C5A] mb-1.5">
                  Project Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your channel concept, video idea, or project..."
                  className="w-full bg-[#252D1D]/80 border border-[#F3ECDD]/20 rounded-xl px-4 py-3 text-sm text-[#F3ECDD] placeholder-[#737C5A] focus:outline-none focus:border-[#C8A95B] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 font-mono text-xs font-semibold tracking-wider uppercase px-6 py-4 rounded-xl bg-[#F3ECDD] text-[#252D1D] hover:bg-[#E8DFC9] transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Send Inquiry to Shanmukha</span>
              </button>
            </form>
          )}
        </div>

        {/* Social / Channel References */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-14 pt-8 border-t border-[#F3ECDD]/10">
          <div className="text-left">
            <div className="font-mono text-[11px] tracking-widest uppercase text-[#737C5A] mb-1">
              Channel 01
            </div>
            <a
              href={PROFILE.godEditzUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-lg text-[#F3ECDD] hover:text-[#C8A95B] border-b border-[#F3ECDD]/30 pb-0.5 transition-colors"
            >
              God Editz ↗
            </a>
          </div>

          <div className="text-left">
            <div className="font-mono text-[11px] tracking-widest uppercase text-[#737C5A] mb-1">
              Channel 02
            </div>
            <a
              href={PROFILE.dimensionlessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-lg text-[#F3ECDD] hover:text-[#C8A95B] border-b border-[#F3ECDD]/30 pb-0.5 transition-colors"
            >
              The Dimensionless ↗
            </a>
          </div>

          <div className="text-left">
            <div className="font-mono text-[11px] tracking-widest uppercase text-[#737C5A] mb-1">
              Brand
            </div>
            <a
              href={PROFILE.instagramBrand}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-lg text-[#F3ECDD] hover:text-[#C8A95B] border-b border-[#F3ECDD]/30 pb-0.5 transition-colors"
            >
              @beyond_official_2026 ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
