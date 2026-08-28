import React from "react";

export default function NotFound() {
  return (
    <main className="relative min-h-[100svh] w-full bg-black overflow-x-hidden font-['Geist_Mono:SemiBold'] select-none">
      {/* 1. Background Video — lowest layer, opacity 100%, no overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260801_001207_ec20d138-aa45-4b2b-ab8c-bdc71607f240.mp4"
      />

      {/* 2. Header Logo — BEYOND brand logo centered at top */}
      <header
        aria-label="BEYOND"
        className="absolute top-[32px] sm:top-[60px] left-1/2 -translate-x-1/2 z-10 flex items-center justify-center pointer-events-auto"
      >
        <a href="/" className="flex items-center gap-3 group transition-transform hover:scale-105">
          <img
            src="/images/profile-logo.png"
            alt="BEYOND"
            className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full border border-white/40 group-hover:border-white transition-all shadow-md"
          />
          <span className="text-white font-['Geist_Mono:SemiBold'] font-bold text-xl md:text-2xl tracking-[0.2em] uppercase drop-shadow">
            BEYOND
          </span>
        </a>
      </header>

      {/* 3. Centered 404 Content Group */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[min(100%-40px,360px)] sm:w-[483px] flex flex-col items-center text-center gap-[28px] sm:gap-[44px]">
        {/* 404 Heading */}
        <h1
          className="font-['Geist_Mono:SemiBold'] font-semibold leading-[1.1] text-center tracking-[-0.09em] sm:tracking-[-24.6459px] text-[clamp(140px,52vw,200px)] sm:text-[295.751px] h-auto min-h-0 pb-4 sm:pb-8"
          style={{
            backgroundImage:
              "linear-gradient(247.3282658084845deg, rgb(255, 255, 255) 2.5334%, rgba(255, 255, 255, 0.4) 93.612%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          404
        </h1>

        {/* Solid White Divider */}
        <div className="w-full sm:w-[425px] h-[1px] bg-white flex-shrink-0" />

        {/* Message */}
        <p className="font-['Geist_Mono:SemiBold'] font-semibold leading-[1.1] text-white text-center tracking-[-1.3px] sm:tracking-[-2px] text-[clamp(16px,4.5vw,20px)] sm:text-[24px] w-full">
          The path may be broken, but the journey isn't. Let's get you back.
        </p>
      </div>
    </main>
  );
}
