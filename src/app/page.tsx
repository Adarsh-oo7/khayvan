"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Compass,
  Mail,
  Volume2,
  VolumeX,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"notes" | "story" | "artisan">("notes");
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Countdown timer calculation
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 18,
    minutes: 36,
    seconds: 54,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Ambient gold vapor canvas particles
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.2,
      fadeSpeed: Math.random() * 0.005 + 0.002,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.alpha += p.fadeSpeed;

        if (p.alpha > 0.65 || p.alpha < 0.15) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(212, 175, 55, 0.4)";
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

  // Ambient sound synthesizer toggle (Web Audio API)
  const toggleSound = () => {
    if (!soundEnabled) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.0001, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);
        gainNode.connect(ctx.destination);
        gainNodeRef.current = gainNode;

        // Warm harmonic ambient frequencies
        const freqs = [108, 162, 216, 324];
        freqs.forEach((freq) => {
          const osc = ctx.createOscillator();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          osc.connect(gainNode);
          osc.start();
        });

        setSoundEnabled(true);
      } catch {
        setSoundEnabled(false);
      }
    } else {
      if (gainNodeRef.current && audioContextRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioContextRef.current.currentTime + 1);
        setTimeout(() => {
          audioContextRef.current?.close();
          setSoundEnabled(false);
        }, 1000);
      } else {
        setSoundEnabled(false);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubmitted(true);
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#070709] text-[#e8e6e3] selection:bg-[#d4af37] selection:text-black font-sans">
      {/* Dynamic Gold Vapor Dust Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[1] w-full h-full opacity-60"
      />

      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="mist-orb-1 absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.13)_0%,rgba(168,123,31,0.04)_45%,transparent_70%)] blur-3xl" />
        <div className="mist-orb-2 absolute top-1/3 -left-48 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(180,130,40,0.08)_0%,transparent_70%)] blur-3xl" />
        <div className="mist-orb-1 absolute bottom-0 -right-48 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.07)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35" />
      </div>

      {/* Luxury Border Frame Accents */}
      <div className="pointer-events-none fixed inset-4 md:inset-8 border border-[#d4af37]/15 z-20 hidden sm:block">
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]/70" />
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#d4af37]/70" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#d4af37]/70" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]/70" />
      </div>

      {/* TOP BAR / NAVIGATION */}
      <header className="relative z-10 w-full pt-8 sm:pt-12 px-6 md:px-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#d4af37]/40 flex items-center justify-center bg-black/50 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.18)]">
            <span className="font-serif text-[#d4af37] text-sm font-semibold tracking-wider">K</span>
          </div>
          <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.35em] text-[#c9b06b]/90 font-medium">
            KHAYTHUB · HAUTE PARFUMERIE
          </span>
        </div>

        {/* Ambient Audio Toggle */}
        <button
          onClick={toggleSound}
          title={soundEnabled ? "Mute atmosphere" : "Play ambient resonance"}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-950/70 hover:border-[#d4af37]/50 text-zinc-400 hover:text-[#d4af37] text-[11px] tracking-widest uppercase transition-all"
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
              <span className="text-[#d4af37]">Ambiance On</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5" />
              <span>Ambiance Off</span>
            </>
          )}
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-10 md:py-14 text-center flex flex-col items-center justify-center">
        {/* Badge: A NEW CHAPTER BEGINS */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/35 bg-[#121118]/80 backdrop-blur-md text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.12)] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>A NEW CHAPTER BEGINS</span>
        </div>

        {/* Brand Name */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-[0.22em] uppercase font-light text-white mb-3">
          <span className="gold-gradient-text drop-shadow-[0_10px_25px_rgba(212,175,55,0.2)]">
            KHAYTHUB
          </span>
        </h1>

        {/* THE ART OF FRAGRANCE */}
        <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-[#d4af37]/90 tracking-[0.2em] uppercase mb-8">
          THE ART OF FRAGRANCE
        </p>

        {/* Flacon Visual Centerpiece */}
        <div className="floating-bottle relative my-4 w-36 sm:w-44 h-52 sm:h-56 flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#d4af37]/25 via-[#aa771c]/10 to-transparent blur-xl" />

          {/* Bottle Structure */}
          <div className="relative w-28 sm:w-32 h-44 sm:h-48 rounded-t-xl rounded-b-2xl border border-[#d4af37]/45 bg-gradient-to-b from-white/10 via-black/85 to-[#151109]/95 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.2)] flex flex-col items-center justify-between p-3.5">
            {/* Bottle Stopper / Cap */}
            <div className="absolute -top-7 w-12 sm:w-14 h-7 rounded-sm bg-gradient-to-b from-[#fbf3d5] via-[#d4af37] to-[#8a681d] border border-[#f3e5ab]/70 shadow-[0_2px_12px_rgba(0,0,0,0.7)] flex items-center justify-center">
              <div className="w-8 h-[1px] bg-black/45" />
            </div>

            {/* Spritz Neck */}
            <div className="absolute -top-1 w-6 h-2 bg-[#d4af37] border-x border-black/50" />

            {/* Label Plaque */}
            <div className="mt-8 w-full py-3.5 px-2 border border-[#d4af37]/35 bg-black/75 rounded flex flex-col items-center justify-center text-center">
              <span className="font-serif text-[11px] tracking-[0.28em] text-[#d4af37] font-semibold">
                KHAYTHUB
              </span>
              <span className="text-[7px] tracking-[0.22em] text-[#a09c95] uppercase">
                PARFUM
              </span>
            </div>

            {/* Bottom Liquid Horizon */}
            <div className="w-full h-8 rounded-b-xl bg-gradient-to-t from-[#d4af37]/35 to-transparent flex items-center justify-center">
              <span className="text-[7px] tracking-[0.25em] text-[#c9b06b]/70 font-mono">
                THALASSERY
              </span>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-zinc-100 max-w-2xl mt-4 mb-3">
          Something Extraordinary Is Coming.
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-xl mx-auto mb-8">
          A new fragrance experience is on its way. Crafted to inspire, designed to be remembered.
        </p>

        {/* Countdown Timer Module */}
        <div className="mb-10 w-full max-w-md mx-auto grid grid-cols-4 gap-2.5 sm:gap-4 text-center">
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HOURS", value: timeLeft.hours },
            { label: "MINS", value: timeLeft.minutes },
            { label: "SECS", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="py-3 px-2 rounded-xl border border-zinc-800/90 bg-zinc-950/60 backdrop-blur-md flex flex-col items-center"
            >
              <span className="font-serif text-xl sm:text-2xl text-[#d4af37] font-semibold tracking-wider">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-500 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* VIP Early Access Form */}
        <div className="w-full max-w-md mx-auto mb-12">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]/70" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email for private allocation"
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
                You are on the private allocation list. You will receive exclusive early access.
              </p>
            </div>
          )}
          <p className="text-[11px] text-zinc-500 mt-2.5 tracking-wide">
            Strictly limited first bottling · Reserved for connoisseurs
          </p>
        </div>

        {/* Olfactory Prelude & Heritage Tabs */}
        <div className="w-full max-w-xl mx-auto rounded-xl border border-zinc-800/80 bg-zinc-950/50 backdrop-blur-sm p-4 sm:p-5">
          <div className="flex justify-center gap-5 sm:gap-8 border-b border-zinc-800/80 pb-3 mb-4 text-xs tracking-[0.2em] uppercase">
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
            <button
              onClick={() => setActiveTab("artisan")}
              className={`transition-colors pb-1 ${
                activeTab === "artisan"
                  ? "text-[#d4af37] border-b border-[#d4af37] font-medium"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              By Thweeb
            </button>
          </div>

          {activeTab === "notes" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37]/90 block mb-1">
                  Top Notes
                </span>
                <p className="text-xs text-zinc-300">Spiced Sunlit Bergamot & Green Cardamom</p>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37]/90 block mb-1">
                  Heart Notes
                </span>
                <p className="text-xs text-zinc-300">Thalassery Black Pepper, Damask Rose & Iris</p>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37]/90 block mb-1">
                  Base Notes
                </span>
                <p className="text-xs text-zinc-300">Smoked Royal Amber, Oud & Pure Sandalwood</p>
              </div>
            </div>
          )}

          {activeTab === "story" && (
            <div className="text-center text-xs text-zinc-400 leading-relaxed py-2 px-3">
              Born from the historic spice capital of Malabar. Blending centuries of aromatic maritime heritage with modern avant-garde French perfumery.
            </div>
          )}

          {activeTab === "artisan" && (
            <div className="text-center text-xs text-zinc-400 leading-relaxed py-2 px-3">
              Independently envisioned and meticulously crafted by Thweeb in Thalassery, Kerala. Every flacon reflects rare raw materials, patient maceration, and artisanal precision.
            </div>
          )}
        </div>
      </section>

      {/* FOOTER & PROVENANCE SIGNATURE */}
      <footer className="relative z-10 w-full pb-10 sm:pb-14 pt-8 px-6 md:px-16 flex flex-col items-center text-center border-t border-zinc-900/80 bg-black/40 backdrop-blur-md">
        {/* COMING SOON Banner */}
        <div className="mb-6">
          <span className="inline-block px-5 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#14120f]/60 text-xs sm:text-sm font-semibold tracking-[0.45em] uppercase text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.12)]">
            COMING SOON
          </span>
        </div>

        {/* Provenance Details */}
        <div className="flex flex-col items-center gap-1.5 mb-6">
          <span className="font-serif text-sm sm:text-base tracking-[0.25em] uppercase text-zinc-200 font-medium">
            BY THWEEB
          </span>
          <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#c9b06b]/90">
            <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>THALASSERY · KERALA</span>
          </div>
          <span className="text-[10px] text-zinc-600 tracking-widest font-mono">
            11.7491° N, 75.4890° E
          </span>
        </div>

        {/* Direct Concierge WhatsApp Preview Link */}
        <div className="mb-6 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="https://wa.me/?text=Hello%20KHAYTHUB%2C%20I%20would%20like%20to%20inquire%20about%20the%20private%20fragrance%20allocation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-zinc-400 hover:text-[#d4af37] transition-colors py-1.5 px-4 border border-zinc-800 rounded-full hover:border-[#d4af37]/40 bg-zinc-950/60"
          >
            <MessageCircle className="w-3 h-3 text-[#d4af37]" />
            <span>Private Concierge Inquiries</span>
          </a>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span className="text-[11px] tracking-[0.25em] text-[#d4af37]/80 font-mono">
            KHAYTHUB.COM
          </span>
        </div>

        {/* Divider line */}
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mb-5" />

        {/* Legal & Year */}
        <p className="text-[11px] sm:text-xs text-zinc-500 tracking-[0.2em] uppercase font-light">
          © 2026 · ALL RIGHTS RESERVED
        </p>
      </footer>
    </main>
  );
}
