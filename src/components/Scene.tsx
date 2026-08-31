"use client";

import { SylvaHero } from "@/shaders/threeui-entry";
import "@/shaders/threeui.css";

export function Scene() {
  return (
    <div className="shader-frame" style={{ width: "100%", height: "100vh", position: "relative" }}>
      <SylvaHero
        variant="living-green"
        headingFont="lexend"
        bodyFont="lexend"
        headingWeight="300"
        bodyWeight="300"
        primaryColor="#ffffff"
        headingSize={63}
        bodySize={16.5}
        headingLetterSpacing={-0.006}
      />
    </div>
  );
}
