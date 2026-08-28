"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Eye, ArrowRight, X, ExternalLink, Zap, CheckCircle2, Box } from "lucide-react";
import { PORTFOLIO_ITEMS, PortfolioItem } from "@/lib/data";
import { Card3DTilt } from "@/components/3d/Card3DTilt";

export function ShowcaseGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: "all", label: "All Work" },
    { id: "ads", label: "AI Video Ads" },
    { id: "banners", label: "AI Banners" },
    { id: "images", label: "AI CGI & Images" },
    { id: "workshops", label: "AI Workshops" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300">
              <Box className="w-3.5 h-3.5" />
              <span>3D Interactive Production Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Real Impact. <span className="text-gradient">Superhuman 3D</span> Visuals.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl">
              Explore our recent AI ad campaigns, photorealistic product staging, omnichannel banner sets, and enterprise workshop results.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    : "glass-panel text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card3DTilt key={item.id}>
              <div
                onClick={() => setSelectedItem(item)}
                className="glass-panel rounded-3xl overflow-hidden border border-white/10 group cursor-pointer flex flex-col justify-between h-full bg-[#0a0c16]/90 shadow-xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090e] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-cyan-300">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Hover overlay icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-cyan-500 text-black flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Card Meta */}
                <div className="p-6 space-y-3">
                  <div className="text-xs font-mono text-gray-400 uppercase">
                    Client: <span className="text-gray-200">{item.client}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-400">
                      {item.impact}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-cyan-400 group-hover:translate-x-1 transition-transform">
                      <span>Inspect 3D</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Modal for Expanded View */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
            <div className="glass-panel max-w-4xl w-full rounded-3xl border border-white/20 overflow-hidden shadow-2xl bg-[#0b0d14] relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white border border-white/20 hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto w-full bg-black">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold">
                        {selectedItem.categoryLabel}
                      </span>
                      <span className="text-xs text-gray-400">
                        Client: {selectedItem.client}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-white mb-3">
                      {selectedItem.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-6">
                      {selectedItem.description}
                    </p>

                    <div className="space-y-3 bg-white/5 rounded-2xl p-4 border border-white/10 mb-6">
                      <div className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                        Business Impact & ROI
                      </div>
                      <div className="text-base font-bold text-emerald-400 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span>{selectedItem.impact}</span>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-gray-400 mb-2">
                        Neural Stack & AI Engines:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.toolsUsed.map((tool, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                    <Link
                      href="/contact"
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center text-sm font-bold shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
                    >
                      Request Similar Creative
                    </Link>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="px-4 py-3 rounded-xl glass-panel text-gray-300 hover:text-white text-sm font-medium"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
