"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, Compass, ShieldCheck, Mail } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"story" | "notes">("notes");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubmitted(true);
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#070709] text-[#e8e6e3] selection:bg-[#d4af37] selection:text-black font-sans">
      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="mist-orb-1 absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,rgba(168,123,31,0.04)_45%,transparent_70%)] blur-3xl" />
        <div className="mist-orb-2 absolute top-1/3 -left-48 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(180,130,40,0.08)_0%,transparent_70%)] blur-3xl" />
        <div className="mist-orb-1 absolute bottom-0 -right-48 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.07)_0%,transparent_70%)] blur-3xl" />
        {/* Subtle grid mesh overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      {/* Luxury Border Frame Accents */}
      <div className="pointer-events-none fixed inset-4 md:inset-8 border border-[#d4af37]/15 z-20 pointer-events-none hidden sm:block">
        <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#d4af37]/60" />
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#d4af37]/60" />
        <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#d4af37]/60" />
        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#d4af37]/60" />
      </div>

      {/* TOP HEADER */}
      <header className="relative z-10 w-full pt-10 sm:pt-14 px-6 md:px-16 flex flex-col items-center">
        {/* Emblem / Monogram */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full border border-[#d4af37]/40 flex items-center justify-center bg-black/40 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <span className="font-serif text-[#d4af37] text-sm tracking-widest font-semibold">K</span>
          </div>
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#c9b06b]/90 font-medium">
            KHAYVAN · HAUTE PARFUMERIE
          </span>
        </div>

        {/* Badge: A NEW CHAPTER BEGINS */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#121118]/70 backdrop-blur-md text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.1)]">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>A NEW CHAPTER BEGINS</span>
        </div>
      </header>

      {/* HERO MAIN BODY */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-16 text-center flex flex-col items-center justify-center">
        {/* Brand Name */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-[0.2em] uppercase font-light text-white mb-2 drop-shadow-2xl">
          <span className="gold-gradient-text">KHAYVAN</span>
        </h1>

        {/* The Art of Fragrance */}
        <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-[#d4af37]/90 tracking-[0.18em] uppercase mb-8">
          THE ART OF FRAGRANCE
        </p>

        {/* Central Aesthetic Perfume Flacon Art */}
        <div className="floating-bottle relative my-6 w-36 sm:w-44 h-52 sm:h-60 flex items-center justify-center">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#d4af37]/20 via-[#aa771c]/10 to-transparent blur-xl" />
          
          {/* Glass Bottle Silhouette Representation */}
          <div className="relative w-28 sm:w-32 h-44 sm:h-48 rounded-t-xl rounded-b-2xl border border-[#d4af37]/40 bg-gradient-to-b from-white/10 via-black/80 to-[#120e06]/95 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.15)] flex flex-col items-center justify-between p-3.5">
            {/* Bottle Stopper / Cap */}
            <div className="absolute -top-7 w-12 sm:w-14 h-7 rounded-sm bg-gradient-to-b from-[#f5e6b3] via-[#d4af37] to-[#8a681d] border border-[#f3e5ab]/60 shadow-[0_2px_10px_rgba(0,0,0,0.6)] flex items-center justify-center">
              <div className="w-8 h-[1px] bg-black/40" />
            </div>

            {/* Spritz Neck */}
            <div className="absolute -top-1 w-6 h-2 bg-[#d4af37] border-x border-black/40" />

            {/* Label Plaque */}
            <div className="mt-8 w-full py-3 px-2 border border-[#d4af37]/30 bg-black/70 rounded flex flex-col items-center justify-center text-center">
              <span className="font-serif text-[11px] tracking-[0.25em] text-[#d4af37] font-semibold">KHAYVAN</span>
              <span className="text-[7px] tracking-[0.2em] text-[#a09c95] uppercase">PARFUM</span>
            </div>

            {/* Bottom Liquid Amber Horizon */}
            <div className="w-full h-8 rounded-b-xl bg-gradient-to-t from-[#d4af37]/30 to-transparent flex items-center justify-center">
              <span className="text-[7px] tracking-[0.25em] text-[#c9b06b]/70">THALASSERY</span>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-zinc-100 max-w-2xl mt-4 mb-4">
          Something Extraordinary Is Coming.
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-xl mx-auto mb-10">
          A new fragrance experience is on its way. Crafted to inspire, designed to be remembered.
        </p>

        {/* Interactive VIP Waitlist Input */}
        <div className="w-full max-w-md mx-auto mb-12">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]/70" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email for private reveal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37] text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-500 transition-all backdrop-blur-md"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa771c] text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Notify Me</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-2xl border border-[#d4af37]/40 bg-[#12100d]/90 backdrop-blur-md flex items-center justify-center gap-3 text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.15)] animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
              <p className="text-xs sm:text-sm text-zinc-200">
                You are on the private allocation list. We will notify you upon unveiling.
              </p>
            </div>
          )}
          <p className="text-[11px] text-zinc-500 mt-2.5 tracking-wide">
            Strictly limited first bottling · Reserved for connoisseurs
          </p>
        </div>

        {/* Interactive Fragrance Teaser Accordion / Tab */}
        <div className="w-full max-w-xl mx-auto rounded-xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-sm p-4 sm:p-5">
          <div className="flex justify-center gap-6 border-b border-zinc-800/80 pb-3 mb-4 text-xs tracking-[0.2em] uppercase">
            <button
              onClick={() => setActiveTab("notes")}
              className={`transition-colors pb-1 ${
                activeTab === "notes"
                  ? "text-[#d4af37] border-b border-[#d4af37] font-medium"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Olfactory Prelude
            </button>
            <button
              onClick={() => setActiveTab("story")}
              className={`transition-colors pb-1 ${
                activeTab === "story"
                  ? "text-[#d4af37] border-b border-[#d4af37] font-medium"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              The Provenance
            </button>
          </div>

          {activeTab === "notes" ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37]/90 block mb-1">Top Notes</span>
                <p className="text-xs text-zinc-300">Spiced Sunlit Bergamot & Green Cardamom</p>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37]/90 block mb-1">Heart Notes</span>
                <p className="text-xs text-zinc-300">Thalassery Black Pepper, Damask Rose & Iris</p>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37]/90 block mb-1">Base Notes</span>
                <p className="text-xs text-zinc-300">Smoked Royal Amber, Oud & Pure Sandalwood</p>
              </div>
            </div>
          ) : (
            <div className="text-center text-xs text-zinc-400 leading-relaxed py-1 px-3">
              Born from the historic spice capital of Malabar. Blending centuries of aromatic heritage with contemporary avant-garde perfumery.
            </div>
          )}
        </div>
      </section>

      {/* FOOTER & SIGNATURE PROVENANCE */}
      <footer className="relative z-10 w-full pb-10 sm:pb-14 pt-6 px-6 md:px-16 flex flex-col items-center text-center border-t border-zinc-900/80 bg-black/30 backdrop-blur-sm">
        {/* COMING SOON Banner */}
        <div className="mb-6">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.45em] uppercase text-[#d4af37] drop-shadow">
            COMING SOON
          </span>
        </div>

        {/* Provenance Details */}
        <div className="flex flex-col items-center gap-1.5 mb-6">
          <span className="font-serif text-sm sm:text-base tracking-[0.25em] uppercase text-zinc-200">
            BY THWEEB
          </span>
          <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#c9b06b]/80">
            <Compass className="w-3.5 h-3.5" />
            <span>THALASSERY · KERALA</span>
          </div>
          <span className="text-[10px] text-zinc-600 tracking-widest font-mono">
            11.7491° N, 75.4890° E
          </span>
        </div>

        {/* Divider line */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mb-5" />

        {/* Legal & Year */}
        <p className="text-[11px] sm:text-xs text-zinc-500 tracking-[0.2em] uppercase font-light">
          © 2026 · ALL RIGHTS RESERVED
        </p>
      </footer>
    </main>
  );
}

