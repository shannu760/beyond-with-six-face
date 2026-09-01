"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="work" className="py-24 lg:py-36 bg-[#E8DDC8]/30 relative border-t border-[#556B2F]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-[#556B2F] mb-3 block"
          >
            03 // PORTFOLIO CASE STUDIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-[#28301D]"
          >
            SELECTED WORK.
          </motion.h2>
        </div>

        {/* Alternating Editorial Project List */}
        <div className="space-y-28">
          {PROJECTS_DATA.map((project, index) => {
            const isEven = index % 2 === 0;
            const isFullWidth = index === 2;
            const href = project.liveUrl || project.githubUrl || "#";
            const isExternal = href.startsWith("http");

            if (isFullWidth) {
              // Full-width Hero Case Study layout - Clean hovering image
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  data-cursor-project="true"
                  className="rounded-3xl bg-[#FAF7EF] border border-[#556B2F]/20 overflow-hidden shadow-soft-shadow hover:shadow-[0_24px_48px_-12px_rgba(85,107,47,0.22)] hover:border-[#556B2F]/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group"
                >
                  {isExternal ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden bg-[#28301D]/5"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                      <div className="absolute inset-0 bg-[#556B2F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="block relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden bg-[#28301D]/5"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                      <div className="absolute inset-0 bg-[#556B2F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </Link>
                  )}
                </motion.div>
              );
            }

            return (
              // Split Alternating Editorial layout
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                {/* Visual Image Column */}
                {isExternal ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-project="true"
                    className={`lg:col-span-7 relative group cursor-pointer block ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#28301D]/5 border border-[#556B2F]/15 shadow-soft-shadow group-hover:shadow-[0_24px_48px_-12px_rgba(85,107,47,0.2)] group-hover:border-[#556B2F]/35 group-hover:-translate-y-1.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                      <div className="absolute inset-0 bg-[#556B2F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </a>
                ) : (
                  <Link
                    href={href}
                    data-cursor-project="true"
                    className={`lg:col-span-7 relative group cursor-pointer block ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#28301D]/5 border border-[#556B2F]/15 shadow-soft-shadow group-hover:shadow-[0_24px_48px_-12px_rgba(85,107,47,0.2)] group-hover:border-[#556B2F]/35 group-hover:-translate-y-1.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                      <div className="absolute inset-0 bg-[#556B2F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </Link>
                )}

                {/* Content Column */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#556B2F] mb-3">
                    <span>{project.number}</span>
                    <span>/</span>
                    <span>{project.category}</span>
                    <span>/</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#28301D] mb-4">
                    {project.title}
                  </h3>

                  <p className="text-base text-[#6F735F] leading-relaxed mb-6">
                    {project.fullDescription}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-[#FAF7EF] border border-[#556B2F]/15 text-[#28301D] text-xs font-medium hover:-translate-y-0.5 hover:border-[#556B2F]/40 hover:bg-[#E8DDC8]/60 transition-all duration-300 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      project.liveUrl.startsWith("http") ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#556B2F] text-[#FAF7EF] text-xs font-semibold hover:bg-[#6B7A3A] hover:shadow-[0_12px_24px_-6px_rgba(85,107,47,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-sm"
                        >
                          <span>Live Preview</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <Link
                          href={project.liveUrl}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#556B2F] text-[#FAF7EF] text-xs font-semibold hover:bg-[#6B7A3A] hover:shadow-[0_12px_24px_-6px_rgba(85,107,47,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-sm"
                        >
                          <span>Launch Experience</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      )
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7EF] border border-[#556B2F]/20 text-[#28301D] text-xs font-semibold hover:bg-[#E8DDC8] hover:border-[#556B2F]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                      >
                        <Github className="w-4 h-4 text-[#556B2F]" />
                        <span>GitHub Repo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
