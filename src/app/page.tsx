"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles, Compass } from "lucide-react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle ambient gold dust particle effect in the background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = 35;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.6,
      speedY: Math.random() * 0.35 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.45 + 0.2,
      fadeSpeed: Math.random() * 0.006 + 0.002,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.alpha += p.fadeSpeed;

        if (p.alpha > 0.6 || p.alpha < 0.15) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(212, 175, 55, 0.3)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 py-10 md:py-14 bg-[#070709] text-[#e8e6e3] overflow-hidden selection:bg-[#d4af37] selection:text-black">
      {/* Dynamic Background Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[1] w-full h-full opacity-60"
      />

      {/* Atmospheric Glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="mist-orb-1 absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,rgba(168,123,31,0.03)_50%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      {/* Subtle Luxury Corner Accents */}
      <div className="pointer-events-none fixed inset-4 md:inset-8 border border-[#d4af37]/15 z-20 hidden sm:block">
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]/60" />
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#d4af37]/60" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#d4af37]/60" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]/60" />
      </div>

      {/* TOP HEADER */}
      <header className="relative z-10 w-full flex flex-col items-center">
        {/* Badge: A NEW CHAPTER BEGINS */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/35 bg-[#121118]/80 backdrop-blur-md text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.12)]">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>A NEW CHAPTER BEGINS</span>
        </div>
      </header>

      {/* CENTER HERO CONTENT */}
      <section className="relative z-10 max-w-3xl mx-auto my-auto py-8 text-center flex flex-col items-center">
        {/* Brand Name */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-[0.24em] uppercase font-light text-white mb-2">
          <span className="gold-gradient-text drop-shadow-[0_10px_30px_rgba(212,175,55,0.22)]">
            KHAYTHUB
          </span>
        </h1>

        {/* THE ART OF FRAGRANCE */}
        <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-[#d4af37]/90 tracking-[0.22em] uppercase mb-8">
          THE ART OF FRAGRANCE
        </p>

        {/* Delicate Golden Divider */}
        <div className="flex items-center gap-3 mb-8 w-44">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#d4af37]/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#d4af37]/50" />
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-zinc-100 max-w-xl mb-4 leading-snug">
          Something Extraordinary Is Coming.
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-lg mb-10">
          A new fragrance experience is on its way. Crafted to inspire, designed to be remembered.
        </p>

        {/* COMING SOON Badge */}
        <div className="inline-block px-7 py-2.5 rounded-full border border-[#d4af37]/50 bg-gradient-to-b from-[#1c1810]/90 to-black/90 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.2)]">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.45em] uppercase text-[#d4af37]">
            COMING SOON
          </span>
        </div>
      </section>

      {/* FOOTER / SIGNATURE PROVENANCE */}
      <footer className="relative z-10 w-full flex flex-col items-center text-center pt-6">
        {/* BY THWEEB */}
        <span className="font-serif text-sm sm:text-base tracking-[0.28em] uppercase text-zinc-200 font-medium mb-1.5">
          BY THWEEB
        </span>

        {/* THALASSERY · KERALA */}
        <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#c9b06b]/90 mb-4">
          <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>THALASSERY · KERALA</span>
        </div>

        {/* Domain name */}
        <div className="mb-4">
          <span className="text-[11px] tracking-[0.25em] text-[#d4af37]/70 font-mono">
            khaythub.com
          </span>
        </div>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mb-4" />

        {/* © 2026 · ALL RIGHTS RESERVED */}
        <p className="text-[10px] sm:text-[11px] text-zinc-500 tracking-[0.25em] uppercase font-light">
          © 2026 · ALL RIGHTS RESERVED
        </p>
      </footer>
    </main>
  );
}
