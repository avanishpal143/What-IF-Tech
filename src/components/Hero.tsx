"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";

const stats = [
  { value: "~20–30 min", label: "Proprietary Mesh Bake" },
  { value: "±5%", label: "vs. Sekonic L-858" },
  { value: "11", label: "Portrait Presets" },
  { value: "6", label: "Cine Camera Presets" },
];

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 1.5 + 0.5,
  duration: Math.random() * 12 + 8,
  delay: Math.random() * 5,
}));

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Background parallax movement
  const [backgroundOffset, setBackgroundOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      mouseX.set(x);
      mouseY.set(y);

      setBackgroundOffset({
        x: (e.clientX / window.innerWidth - 0.5) * 25,
        y: (e.clientY / window.innerHeight - 0.5) * 25,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Glow effect mask styling
  const radialBg = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(245,200,66,0.06), transparent 80%)`;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise-texture px-6 sm:px-12 md:px-20 pt-32 pb-20"
      style={{ background: "#0d0d0d" }}
    >
      {/* Dynamic Cursor Glow Trail */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: radialBg }}
      />

      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12] pointer-events-none filter grayscale transition-transform duration-700 ease-out"
        style={{
          backgroundImage: "url('https://pub-4920bb193f79485cb96f6ad32dc0966f.r2.dev/Landing_Page_Images/bg1.png')",
          transform: `translate(${backgroundOffset.x * 0.3}px, ${backgroundOffset.y * 0.3}px) scale(1.06)`,
        }}
      />

      {/* Grid overlay lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Linear Fade to bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d]/30 to-[#0d0d0d] pointer-events-none" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/30"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold tracking-widest text-[#f5c842] uppercase mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#f5c842] animate-ping" />
          iOS TestFlight Beta — Free
        </motion.div>

        {/* Hero Title */}
        <div className="text-center overflow-hidden">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-extrabold tracking-tight text-white leading-[1.02] font-display"
          >
            Scan the room. <br />
            <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent italic font-light">
              Light it like a DP.
            </span>
          </motion.h1>
        </div>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-sm sm:text-base md:text-lg text-white/70 max-w-4xl text-center leading-relaxed font-sans"
        >
          WATT-IF is a lighting design tool. Scan a real location with your iPhone&apos;s LiDAR, bake a photometrically calibrated 3D scene with our proprietary mesh engine, drop real cinema fixtures (Aputure, ARRI, ETC Source Four), and export a Set Plan PDF for your Gaffer. Everything you see is physical — candela, lumens, lux, key/fill in stops. Nothing is stylised.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
        >
          <a
            href="https://testflight.apple.com/join/BSy2A8Yy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-extrabold text-sm hover:bg-[#f5c842] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_35px_rgba(245,200,66,0.3)]"
          >
            Get the iOS Beta
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#demo"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all text-white/75 hover:text-white font-semibold text-sm flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 text-white/70 fill-current" />
            Watch Live Demo
          </a>
        </motion.div>

        {/* Rating and Reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-4 text-[11px] text-white/40 tracking-wide"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#f5c842] stroke-none" />
            ))}
            <span className="font-bold text-white/80 ml-1">4.9/5</span>
            <span>from 2,400+ reviews</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&q=80"
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="User avatar"
                  className="w-6 h-6 rounded-full border border-[#0d0d0d] object-cover"
                />
              ))}
            </div>
            <span>50,000+ teams worldwide</span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full border-t border-white/5 pt-12 text-center"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#f5c842] mt-2.5 font-bold">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
