import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BeyondLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  withLink?: boolean;
  href?: string;
  className?: string;
  glow?: boolean;
}

export function BeyondLogo({
  size = "md",
  showText = true,
  withLink = true,
  href = "/",
  className = "",
  glow = true,
}: BeyondLogoProps) {
  const sizeMap = {
    sm: { icon: "w-7 h-7", text: "text-lg tracking-wider", full: "h-7" },
    md: { icon: "w-9 h-9", text: "text-xl tracking-widest", full: "h-9" },
    lg: { icon: "w-12 h-12", text: "text-2xl tracking-widest", full: "h-12" },
    xl: { icon: "w-16 h-16", text: "text-3xl tracking-widest", full: "h-16" },
  };

  const content = (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <div className={`relative ${sizeMap[size].icon} flex items-center justify-center`}>
        {glow && (
          <div className="absolute inset-0 rounded-lg bg-cyan-500/25 blur-md group-hover:bg-cyan-400/40 transition-all duration-300 pointer-events-none" />
        )}
        <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            src="/images/beyond-symbol.png"
            alt="BEYOND AI"
            width={64}
            height={64}
            className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className={`font-black text-white ${sizeMap[size].text} font-sans uppercase`}>
              B<span className="text-cyan-400">E</span>YOND
            </span>
            <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold tracking-widest rounded bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300">
              AI
            </span>
          </div>
        </div>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link href={href} className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
