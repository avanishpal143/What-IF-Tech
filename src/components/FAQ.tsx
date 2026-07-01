"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function FAQ() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0d0d0d] overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 md:px-20 relative z-10">
        {/* Creator Bio Section */}
        <div className="text-left max-w-4xl">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#f5c842] border-l-2 border-[#f5c842] pl-3">
            The Creator
          </span>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-start">
          {/* Bio Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] w-full max-w-[320px] bg-white/[0.01]"
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663481438602/MVcBKhDFbvpNMPIF.webp"
              alt="Joshiua Cole"
              className="w-full h-full object-cover filter grayscale-[15%]"
            />
          </motion.div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-white tracking-tight font-display">
                Joshiua Cole
              </h3>
              <p className="mt-2 text-xs font-semibold text-[#f5c842] uppercase tracking-wider font-display">
                Creative Director, Leidos Inc. — Filmmaker — WATT-IF Inventor
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
              <p>
                WATT-IF was built by a Creative Director and filmmaker who got tired of watching talented people waste hours on lighting problems that could be solved in minutes — if the right tool existed. The gap between knowing what a lighting setup should look like and executing it on set was the problem WATT-IF was designed to close.
              </p>
              <p>
                With a background spanning high-volume content pipelines, broadcast production systems, and cinematic pre-production, WATT-IF isn&apos;t a side project. It&apos;s a lighting design tool that speaks the language of light in real units (candela, lumens, lux), reasons about physical fixtures from real manufacturers (Aputure, ARRI, ETC Source Four), and lets you scan your actual location and pre-light it before you load a single case.
              </p>
              <p>
                The Splat + Relight engine runs on the proprietary WATT-IF Splat trainer — Apache-2.0 / MIT only, zero Inria-licensed dependencies, commercial-clean. Anti-aliasing math from Mip-Splatting (CVPR 2024) and the KNN-init heuristic from LumiGauss (WACV 2025) are both clean-room re-implementations: algorithms in the public domain of ideas, never the encumbered source. Your bake is yours.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="mailto:contact@wattif.studio"
                className="inline-flex px-5 py-3 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all text-white/80 hover:text-white font-semibold text-xs"
              >
                Contact for Licensing
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-24 border-t border-white/5" />

        {/* Final CTA Section */}
        <div className="relative rounded-3xl overflow-hidden py-20 px-6 sm:px-12 text-center bg-white/[0.01] border border-white/5">
          {/* Background Highlight */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none filter grayscale bg-cover bg-center"
            style={{ backgroundImage: "url('https://pub-4920bb193f79485cb96f6ad32dc0966f.r2.dev/Landing_Page_Images/bg3.png')" }}
          />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight font-display">
              Scan a room. <br />
              <span className="text-white/60 italic font-light">Light it tonight.</span>
            </h2>
            <p className="mt-6 text-sm sm:text-base text-white/70 leading-relaxed font-sans max-w-3xl">
              The iOS beta is free during TestFlight. Capture your studio, your hotel, your location — bake it in the cloud, drop in real cinema fixtures, and AirDrop your Gaffer a Set Plan PDF before the morning call.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
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
            </div>

            <p className="mt-8 text-[11px] text-white/40 leading-normal">
              iPhone 12 Pro or later (LiDAR required for capture) · iOS 16+ · Android (ARCore) coming Q3 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
