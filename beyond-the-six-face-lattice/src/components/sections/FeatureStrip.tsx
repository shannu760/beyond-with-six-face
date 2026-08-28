import React from "react";
import { FEATURE_STRIP } from "@/lib/data";

export function FeatureStrip() {
  return (
    <div className="bg-[#252D1D] text-[#EFE7D2] border-y border-[#F3ECDD]/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {FEATURE_STRIP.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col gap-2 ${
                index > 0 ? "lg:border-l lg:border-[#F3ECDD]/15 lg:pl-8" : ""
              }`}
            >
              <h2 className="font-mono text-sm font-semibold tracking-wide text-[#F3ECDD]">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#737C5A] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
