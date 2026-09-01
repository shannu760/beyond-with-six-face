"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

export interface ConnectionEdgeProps {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  sourceHandle?: string; // "true", "false", or "output"
  isActive?: boolean;
  onDelete: () => void;
}

export function ConnectionEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourceHandle,
  isActive = false,
  onDelete
}: ConnectionEdgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate cubic bezier curvature
  const deltaX = Math.abs(targetX - sourceX) * 0.5;
  const curvature = Math.max(deltaX, 50);

  const path = `M ${sourceX} ${sourceY} C ${sourceX + curvature} ${sourceY}, ${targetX - curvature} ${targetY}, ${targetX} ${targetY}`;

  // Midpoint for delete button
  const midX = (sourceX + targetX) / 2;
  const midY = (sourceY + targetY) / 2;

  const getEdgeColor = () => {
    if (sourceHandle === "true") return "#10B981"; // Emerald for True
    if (sourceHandle === "false") return "#F43F5E"; // Rose for False
    return isActive ? "#C8A95B" : "#8A9A5B";
  };

  return (
    <g
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer group"
    >
      {/* Invisible wider hit-area path for easy hovering */}
      <path
        d={path}
        fill="none"
        stroke="transparent"
        strokeWidth={20}
      />

      {/* Main Visible Curve */}
      <path
        d={path}
        fill="none"
        stroke={getEdgeColor()}
        strokeWidth={isActive ? 3 : 2}
        className={`transition-all ${isActive ? "edge-flow-animated" : "hover:stroke-[#C8A95B]"}`}
      />

      {/* Hover Delete Button in the middle */}
      {isHovered && (
        <foreignObject
          x={midX - 12}
          y={midY - 12}
          width={24}
          height={24}
          className="overflow-visible"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            title="Delete connection"
            className="w-6 h-6 rounded-full bg-[#182012] border border-rose-500/60 text-rose-400 hover:bg-rose-500 hover:text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </foreignObject>
      )}
    </g>
  );
}
