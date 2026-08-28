import React from "react";
import Link from "next/link";
import {
  Video,
  TrendingUp,
  LayoutGrid,
  Sparkles,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap,
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import { Card3DTilt } from "@/components/3d/Card3DTilt";

const iconMap: Record<string, React.ReactNode> = {
  Video: <Video className="w-6 h-6 text-cyan-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-purple-400" />,
  LayoutGrid: <LayoutGrid className="w-6 h-6 text-pink-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-emerald-400" />,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Zap className="w-3.5 h-3.5" />
            <span>Full-Suite 3D AI Creative Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for <span className="text-gradient">3D Viral Impact</span> & Authority
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Whether you need broadcast-ready video commercials, multi-variant performance ads, responsive display banner suites, photorealistic 8K CGI stills, or customized corporate AI workshops — we deliver at superhuman speed.
          </p>
        </div>

        {/* Services Grid with 3D Card Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const isWide = index === 3 || index === 4;
            return (
              <Card3DTilt
                key={service.id}
                className={`h-full ${isWide ? "lg:col-span-1.5" : ""}`}
              >
                <div className="glass-panel rounded-3xl p-8 border border-white/10 flex flex-col justify-between group h-full relative overflow-hidden bg-[#0a0c16]/90 shadow-xl">
                  {/* Accent Top Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Top Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                        {iconMap[service.icon]}
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2.5 mb-8">
                      {service.features.slice(0, 4).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Card Footer */}
                  <div className="pt-6 border-t border-white/10 space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <Clock className="w-3.5 h-3.5 text-purple-400" />
                        <span>{service.turnaround}</span>
                      </div>
                      <div className="font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {service.roiStat}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <span className="text-[11px] text-gray-400 uppercase tracking-wider block">Starting At</span>
                        <span className="text-xl font-extrabold text-white">{service.priceStarting}</span>
                      </div>

                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500 text-gray-200 hover:text-black font-semibold text-xs transition-all group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                      >
                        <span>Explore Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            );
          })}
        </div>

        {/* Bottom Comprehensive CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl glass-panel border border-cyan-500/30">
            <span className="text-sm text-gray-300">
              Need a custom multi-service enterprise campaign or immediate workshop booking?
            </span>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center gap-1.5"
            >
              <span>Build Custom Creative Brief</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
