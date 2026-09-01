"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { N8nNavbar } from "@/components/navigation/N8nNavbar";
import {
  LayoutTemplate,
  Sparkles,
  ArrowRight,
  Layers,
  Webhook,
  Clock,
  Play,
  Copy,
  Check,
  Loader2
} from "lucide-react";
import { WORKFLOW_TEMPLATES, WorkflowTemplate } from "@/lib/templates";

export default function N8nTemplatesGalleryPage() {
  const router = useRouter();
  const [cloningId, setCloningId] = useState<string | null>(null);

  const handleUseTemplate = async (template: WorkflowTemplate) => {
    setCloningId(template.id);
    try {
      const res = await fetch("/api/workflows", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${template.name} (Clone)`,
          description: template.description,
          triggerType: template.triggerType,
          webhookPath: template.webhookPath ? `${template.webhookPath}-${Date.now().toString().slice(-4)}` : undefined,
          nodes: template.nodes,
          edges: template.edges
        })
      });

      const data = await res.json();
      if (data.success && data.data) {
        router.push(`/n8n/canvas/${data.data.id}`);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setCloningId(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#12170D] text-[#F3EBDD]">
      <N8nNavbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 space-y-8">
        <div className="pb-6 border-b border-[#556B2F]/20">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C8A95B] font-bold">
            Blueprint Gallery
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F3EBDD] tracking-tight mt-1">
            Automation Blueprints
          </h1>
          <p className="text-xs sm:text-sm text-[#D9CAA8]/80 mt-1 max-w-2xl">
            Pre-configured production pipelines ready to deploy with one click. Select any blueprint to clone into your visual canvas studio.
          </p>
        </div>

        {/* Blueprint Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKFLOW_TEMPLATES.map((tpl) => (
            <div
              key={tpl.id}
              className="p-6 rounded-3xl bg-[#182012] border border-[#556B2F]/25 hover:border-[#C8A95B]/60 hover:shadow-[0_16px_36px_-8px_rgba(85,107,47,0.3)] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-[#252B18] text-[#C8A95B] border border-[#556B2F]/30 font-bold">
                    {tpl.badge}
                  </span>
                  <span className="text-[10px] font-mono text-[#8A9A5B]">
                    {tpl.nodes.length} Steps
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#F3EBDD] group-hover:text-[#C8A95B] transition-colors">
                    {tpl.name}
                  </h3>
                  <p className="text-xs text-[#D9CAA8]/70 leading-relaxed mt-2">
                    {tpl.description}
                  </p>
                </div>

                {/* Steps Visual Chain */}
                <div className="p-3 rounded-2xl bg-[#12170D] border border-[#556B2F]/15 space-y-1.5 font-mono text-[10px]">
                  <div className="text-[9px] uppercase tracking-widest text-[#69704A]">Node Pipeline:</div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[#D9CAA8]">
                    {tpl.nodes.map((n, i) => (
                      <React.Fragment key={n.id}>
                        <span className="px-1.5 py-0.5 rounded bg-[#1C2516] border border-[#556B2F]/20 truncate max-w-[120px]">
                          {n.name}
                        </span>
                        {i < tpl.nodes.length - 1 && <span className="text-[#69704A]">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[#556B2F]/15">
                <button
                  onClick={() => handleUseTemplate(tpl)}
                  disabled={cloningId === tpl.id}
                  className="w-full py-2.5 rounded-xl bg-[#556B2F] hover:bg-[#6B7A3A] text-[#FAF7EF] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 disabled:opacity-50"
                >
                  {cloningId === tpl.id ? (
                    <Loader2 className="w-4 h-4 animate-spin text-[#FAF7EF]" />
                  ) : (
                    <Sparkles className="w-4 h-4 text-[#C8A95B]" />
                  )}
                  <span>{cloningId === tpl.id ? "Cloning Blueprint..." : "Use This Blueprint"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
