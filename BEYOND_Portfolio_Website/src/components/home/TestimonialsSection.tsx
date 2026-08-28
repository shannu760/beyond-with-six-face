import React from "react";
import Link from "next/link";
import { Star, ShieldCheck, Quote, ArrowRight, TrendingUp } from "lucide-react";
import { REVIEWS } from "@/lib/data";
import { Card3DTilt } from "@/components/3d/Card3DTilt";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-xs font-semibold text-yellow-300">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span>4.9/5 Average Rating Across 120+ Global Clients</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved by <span className="text-gradient">CMOs, Founders</span> & Leaders
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Read verified reviews from brands and agencies that scaled their performance ads, visual branding, and internal team capabilities with Beyond.
          </p>
        </div>

        {/* Reviews Grid with 3D Card Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <Card3DTilt key={rev.id} className="h-full">
              <div className="glass-panel rounded-3xl p-7 border border-white/10 flex flex-col justify-between h-full relative bg-[#0a0c16]/90 shadow-xl">
                <div>
                  {/* Rating & Verified Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified Client
                    </span>
                  </div>

                  {/* Service Tag */}
                  <div className="text-xs font-medium text-cyan-400 mb-3">
                    Service: {rev.serviceUsed}
                  </div>

                  {/* Quote Text */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-6 italic">
                    &ldquo;{rev.feedback}&rdquo;
                  </p>
                </div>

                {/* Client Info & Metric */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/5 p-2 rounded-lg border border-emerald-500/10">
                    <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                    <span>{rev.metric}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-white text-xs shadow-md">
                      {rev.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                      <p className="text-xs text-gray-400">
                        {rev.role} • <span className="text-gray-300">{rev.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-12 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View All Client Case Studies & Detailed Video Testimonials</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
