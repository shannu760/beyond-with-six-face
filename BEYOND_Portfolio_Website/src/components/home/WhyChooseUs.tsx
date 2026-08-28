import React from "react";
import Link from "next/link";
import { Check, X, Zap, Shield, Rocket, Cpu, ArrowRight } from "lucide-react";

export function WhyChooseUs() {
  const comparisons = [
    {
      feature: "Turnaround Speed",
      traditional: "3 to 6 Weeks per campaign",
      beyond: "24 to 48 Hours flat",
      winner: "beyond",
    },
    {
      feature: "Cost per Asset",
      traditional: "$5,000 – $25,000+ per video/shoot",
      beyond: "Starting from $499 (80%+ Savings)",
      winner: "beyond",
    },
    {
      feature: "A/B Hook Variations",
      traditional: "1–2 variations (cost prohibitive)",
      beyond: "10–30 Multi-Variant Hooks/sprint",
      winner: "beyond",
    },
    {
      feature: "Custom Fine-Tuning",
      traditional: "Generic stock templates",
      beyond: "Proprietary LoRA Brand Fine-Tuning",
      winner: "beyond",
    },
    {
      feature: "Internal Team Training",
      traditional: "Black-box agency gatekeeping",
      beyond: "Hands-on Masterclasses & Workshops",
      winner: "beyond",
    },
    {
      feature: "Revisions Turnaround",
      traditional: "3–5 business days per tweak",
      beyond: "2–4 hours rapid iteration",
      winner: "beyond",
    },
  ];

  return (
    <section className="py-24 relative bg-[#08090e] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>The Beyond Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Traditional Creative Agencies vs <span className="text-gradient">Beyond AI</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Why leading D2C brands, e-commerce giants, and tech scale-ups are replacing legacy production houses with our superhuman AI creative engine.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass-panel rounded-3xl border border-white/15 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="py-5 px-6 text-sm font-bold text-gray-300 uppercase tracking-wider">
                    Performance Metric
                  </th>
                  <th className="py-5 px-6 text-sm font-semibold text-gray-400">
                    Legacy Traditional Agencies
                  </th>
                  <th className="py-5 px-6 text-sm font-extrabold text-cyan-400 bg-cyan-500/10 border-l border-cyan-500/30">
                    Beyond - The AI Kompany
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {comparisons.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-gray-400 flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400/80 shrink-0" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="py-4 px-6 font-semibold text-emerald-400 bg-cyan-500/5 border-l border-cyan-500/20">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{row.beyond}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
              01
            </div>
            <h4 className="text-lg font-bold text-white">Proprietary AI Pipeline</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              We leverage an ensemble of Flux Pro, Runway Gen-3, Midjourney v6+, Kling, and custom LoRAs to eliminate visual defects and guarantee 100% brand consistency.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold">
              02
            </div>
            <h4 className="text-lg font-bold text-white">Human Creative Direction</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              AI generates the raw superhuman assets; our award-winning human art directors, copywriters, and motion designers curate, polish, and optimize them for high conversion.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold">
              03
            </div>
            <h4 className="text-lg font-bold text-white">Internal Team Upskilling</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              We don&apos;t keep AI as a secret black box. Through our enterprise workshops, we train your creative and marketing teams to harness AI directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
