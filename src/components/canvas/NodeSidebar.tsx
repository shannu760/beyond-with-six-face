"use client";

import React, { useState } from "react";
import {
  X,
  Search,
  Play,
  Webhook,
  Clock,
  Brain,
  Sparkles,
  Code2,
  GitFork,
  Variable,
  Globe,
  MessageSquare,
  Mail,
  Plus
} from "lucide-react";
import { NODE_REGISTRY, NodeCategory } from "@/lib/engine/nodeTypes";

export interface NodeSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onAddNode: (type: string) => void;
}

const ICON_MAP: Record<string, any> = {
  Play,
  Webhook,
  Clock,
  Brain,
  Sparkles,
  Code2,
  GitFork,
  Variable,
  Globe,
  MessageSquare,
  Mail
};

const CATEGORIES: { id: NodeCategory | "all"; label: string }[] = [
  { id: "all", label: "All Nodes" },
  { id: "trigger", label: "Triggers" },
  { id: "ai", label: "AI Models" },
  { id: "logic", label: "Logic & Code" },
  { id: "action", label: "Actions & API" }
];

export function NodeSidebar({ isOpen, onClose, onAddNode }: NodeSidebarProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<NodeCategory | "all">("all");

  if (!isOpen) return null;

  const filteredNodes = Object.values(NODE_REGISTRY).filter((node) => {
    const matchesCat = selectedCategory === "all" || node.category === selectedCategory;
    const matchesSearch =
      node.name.toLowerCase().includes(search.toLowerCase()) ||
      node.description.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="absolute right-0 top-0 bottom-0 w-80 sm:w-96 bg-[#182012]/95 backdrop-blur-xl border-l border-[#556B2F]/30 z-40 flex flex-col shadow-2xl animate-fade-in">
      {/* Header */}
      <div className="p-4 border-b border-[#556B2F]/20 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-[#F3EBDD] tracking-wide">Add Node to Canvas</h2>
          <p className="text-[11px] text-[#D9CAA8]/70">Select an automation step</p>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-[#252B18] text-[#D9CAA8] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Search & Filter */}
      <div className="p-3 space-y-2 border-b border-[#556B2F]/15">
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#69704A]" />
          <input
            type="text"
            placeholder="Search triggers, AI, logic, HTTP..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[#12170D] border border-[#556B2F]/25 text-xs text-[#F3EBDD] placeholder-[#69704A] focus:outline-none focus:border-[#C8A95B]"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#556B2F] text-[#FAF7EF] font-bold"
                  : "bg-[#12170D] text-[#D9CAA8]/70 hover:bg-[#252B18]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Nodes List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {filteredNodes.length === 0 ? (
          <div className="text-center py-8 text-xs text-[#69704A]">
            No matching nodes found.
          </div>
        ) : (
          filteredNodes.map((node) => {
            const Icon = ICON_MAP[node.icon] || Plus;
            return (
              <div
                key={node.type}
                onClick={() => {
                  onAddNode(node.type);
                  onClose();
                }}
                className="p-3 rounded-xl bg-[#12170D] border border-[#556B2F]/20 hover:border-[#C8A95B]/60 hover:bg-[#1C2516] transition-all cursor-pointer group flex items-start gap-3 shadow-sm"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-[#FAF7EF] shrink-0 shadow-inner group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: node.accentColor }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#F3EBDD] group-hover:text-[#C8A95B] transition-colors">
                      {node.name}
                    </span>
                    <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#252B18] text-[#D9CAA8]/60">
                      {node.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#D9CAA8]/70 line-clamp-2 mt-0.5">
                    {node.description}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
