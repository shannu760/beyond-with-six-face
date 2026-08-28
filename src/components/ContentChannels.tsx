"use client";

import { motion } from "framer-motion";
import { CONTENT_CHANNELS, TECH_STACK } from "@/data/social";
import { Youtube, Play, ArrowUpRight, Layers } from "lucide-react";

export function ContentChannels() {
  return (
    <section id="content" className="py-24 lg:py-36 bg-[#E8DDC8]/30 relative border-y border-[#556B2F]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#556B2F] mb-3 flex items-center gap-2">
              <Youtube className="w-4 h-4 text-red-600" />
              <span>04 // TWO DIMENSIONS OF CREATION</span>
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#28301D]">
              I CREATE IN MORE THAN ONE DIMENSION.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <p className="text-base text-[#6F735F] leading-relaxed mb-4">
              Exploring creativity through visual storytelling, cinematic editing, philosophy, ideas, and digital media.
            </p>
            <a
              href="https://youtube.com/@godeditz08"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#556B2F] hover:underline hover:translate-x-1 transition-all duration-300"
            >
              <span>Explore My Content</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* 2 YouTube Channel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {CONTENT_CHANNELS.map((channel, index) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              data-cursor-project="true"
              className="rounded-3xl bg-[#FAF7EF] border border-[#556B2F]/20 overflow-hidden shadow-soft-shadow hover:shadow-[0_24px_48px_-12px_rgba(85,107,47,0.22)] hover:border-[#556B2F]/40 hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#28301D]/10">
                <img
                  src={channel.image}
                  alt={channel.name}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28301D]/80 via-transparent to-transparent opacity-80" />

                {/* Play Button Overlay */}
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label={`Watch ${channel.name} on YouTube`}
                >
                  <div className="w-16 h-16 rounded-full bg-[#FAF7EF]/90 backdrop-blur-md text-[#556B2F] flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-[#556B2F] group-hover:text-[#FAF7EF] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </a>

                {/* Channel Number Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#28301D]/80 backdrop-blur-md text-[#FAF7EF] text-xs font-bold tracking-widest">
                  {channel.number}
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-8">
                <span className="text-[11px] font-bold tracking-widest text-[#556B2F] uppercase block mb-2">
                  {channel.category}
                </span>

                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-2xl font-bold text-[#28301D] group-hover:text-[#556B2F] transition-colors duration-300">
                    {channel.name}
                  </h3>
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#6F735F] hover:text-[#556B2F] flex items-center gap-1 shrink-0 transition-colors"
                  >
                    <span>{channel.handle}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-sm text-[#6F735F] leading-relaxed mb-6">
                  {channel.description}
                </p>

                {/* Tags Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#556B2F]/10">
                  {(channel.tags || []).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#E8DDC8]/60 text-[#28301D] text-xs font-medium hover:bg-[#E8DDC8] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Marquee / Shelf */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 rounded-3xl bg-[#FAF7EF] border border-[#556B2F]/15 shadow-soft-shadow"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-[#556B2F]" />
              <h3 className="text-lg font-bold text-[#28301D]">Creative & Engineering Stack</h3>
            </div>
            <span className="text-xs font-mono text-[#6F735F]">TOOLS & FRAMEWORKS</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {TECH_STACK.map((tool) => (
              <div
                key={tool.name}
                className="p-3.5 rounded-xl bg-[#F3EBDD] border border-[#556B2F]/10 hover:border-[#556B2F]/30 hover:bg-[#E8DDC8] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-default group"
              >
                <span className="font-bold text-xs text-[#28301D] group-hover:text-[#556B2F] transition-colors mb-0.5">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
