"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Target element hover checks
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [data-cursor-interactive]");
      const projectCard = target.closest("[data-cursor-project]");

      if (projectCard) {
        setIsHovered(true);
        setCursorText("VIEW");
      } else if (interactive) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Small inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#556B2F] rounded-full pointer-events-none z-50 mix-blend-difference hidden lg:block"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Expanded ring / badge */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center hidden lg:flex border border-[#556B2F]"
        style={{
          backgroundColor: cursorText ? "rgba(85, 107, 47, 0.9)" : "rgba(85, 107, 47, 0.15)",
          backdropFilter: "blur(4px)",
        }}
        animate={{
          x: position.x - (cursorText ? 36 : isHovered ? 24 : 16),
          y: position.y - (cursorText ? 36 : isHovered ? 24 : 16),
          width: cursorText ? 72 : isHovered ? 48 : 32,
          height: cursorText ? 72 : isHovered ? 48 : 32,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-bold tracking-widest text-[#FAF7EF] uppercase"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
