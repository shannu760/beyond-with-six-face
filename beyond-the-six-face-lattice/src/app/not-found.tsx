import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#252D1D] text-[#F3ECDD] flex flex-col items-center justify-center p-6 text-center">
      <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#C8A95B]/40 mb-8 shadow-xl">
        <Image
          src="/assets/logo_web.png"
          alt="BEYOND Seal"
          fill
          className="object-contain p-2"
          unoptimized
        />
      </div>

      <div className="font-mono text-xs tracking-widest text-[#737C5A] uppercase mb-2">
        Error 404 · Dimension Unfound
      </div>

      <h1 className="font-serif text-5xl sm:text-7xl font-normal text-[#F3ECDD] mb-4">
        Beyond The Horizon
      </h1>

      <p className="text-sm sm:text-base text-[#EFE7D2]/80 max-w-md mb-8 leading-relaxed">
        The page or coordinate you are trying to reach does not exist in this lattice.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider uppercase px-7 py-3.5 rounded-full bg-[#F3ECDD] text-[#252D1D] hover:bg-[#E8DFC9] transition-all transform hover:-translate-y-0.5"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to BEYOND</span>
      </Link>
    </div>
  );
}
