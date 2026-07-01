"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const exportFormats = [
  {
    format: "PDF · Set Plan",
    name: "First scout day — share with electric department",
    desc: "Single-look layout: cover, top-down diagram, gear table with fixture, modifier, gel, height, distance from subject, and a power budget that calculates total wattage + 15 A and 20 A circuits needed. Red warning fires if any single circuit goes above 1,500 W.",
    tag: "Cover · Diagram · Gear · Power Budget",
  },
  {
    format: "PDF · Storyboard (coming)",
    name: "Day-of-shoot — the Gaffer's reference",
    desc: "Multi-shot book with per-shot thumbnails, camera body + lens diagnostic block, top-down lighting diagram, gear table, and per-shot notes. Backend ready; the in-app export button lands next sprint.",
    tag: "Multi-shot · Per-shot diagrams",
  },
  {
    format: "CSV · Gear",
    name: "Rental order to the rental house",
    desc: "Per-light spec sheet: fixture name, manufacturer, modifier, gel, cable run, stand, sandbag count. Imports cleanly into rental-house ordering systems.",
    tag: "Rental order",
  },
  {
    format: "JSON · Digital Twin",
    name: "Re-import on another device",
    desc: "Full scene state: every fixture pose, modifier, gel, intensity, the subject point, the camera pose, the scanned splat reference. If the shoot reschedules to next week, you can rebuild the entire lighting design with one tap on a different phone.",
    tag: "Scene archive",
  },
];

const cameras = [
  { 
    name: "Full-Frame Portrait", 
    body: "Sony A7 IV + Sigma 85 mm f/1.4 Art", 
    stop: "@ f/1.8",
    fov: "H: 24.0° · V: 16.1°",
    dof: "Near: 1.91m · Far: 2.09m",
    exposure: "f/1.8 · ISO 400 · 1/48s",
    aspect: "aspect-[3/2]"
  },
  { 
    name: "Environmental 35", 
    body: "Sony A7 IV + Sigma 35 mm f/1.4", 
    stop: "@ f/2.8",
    fov: "H: 54.4° · V: 37.8°",
    dof: "Near: 1.62m · Far: 2.61m",
    exposure: "f/2.8 · ISO 800 · 1/48s",
    aspect: "aspect-[3/2]"
  },
  { 
    name: "S35 Cinema 50", 
    body: "ARRI Alexa 35 + Sigma Cine 50 mm T1.5", 
    stop: "@ T2.0",
    fov: "H: 31.2° · V: 21.0°",
    dof: "Near: 1.84m · Far: 2.18m",
    exposure: "T2.0 · ISO 320 · 180° Shutter",
    aspect: "aspect-[1.85/1]"
  },
  { 
    name: "S35 Cinema 25", 
    body: "ARRI Alexa 35 + Sigma Cine 25 mm T2", 
    stop: "@ T2.8",
    fov: "H: 58.6° · V: 41.2°",
    dof: "Near: 1.34m · Far: 3.79m",
    exposure: "T2.8 · ISO 640 · 180° Shutter",
    aspect: "aspect-[1.85/1]"
  },
  { 
    name: "iPhone 15 Pro Main", 
    body: "The iPhone you're holding", 
    stop: "Native",
    fov: "H: 72.5° · V: 52.1°",
    dof: "Near: 0.50m · Far: ∞ (Deep)",
    exposure: "f/1.78 · ISO 100 · 1/120s",
    aspect: "aspect-[4/3]"
  },
  { 
    name: "Vintage Tele 135", 
    body: "Sony A7 IV + Sigma 135 mm f/1.8", 
    stop: "@ f/1.8",
    fov: "H: 15.2° · V: 10.1°",
    dof: "Near: 1.96m · Far: 2.04m",
    exposure: "f/1.8 · ISO 200 · 1/48s",
    aspect: "aspect-[3/2]"
  },
];

export function Dashboard() {
  const [activeCamIndex, setActiveCamIndex] = useState(0);
  const activeCam = cameras[activeCamIndex];

  return (
    <section id="setplan" className="relative py-24 sm:py-32 bg-[#0d0d0d] overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 md:px-20 relative z-10">
        {/* Set Plan Header */}
        <div className="text-left max-w-4xl">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#f5c842] border-l-2 border-[#f5c842] pl-3">
            Set Plan PDF · For the Gaffer
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display">
            Hand your crew a plan that prints.
          </h2>
          <p className="mt-6 text-xs sm:text-sm md:text-base text-white/70 leading-relaxed max-w-4xl">
            When the design is done, WATT-IF exports a Set Plan PDF: cover page, top-down lighting diagram with every fixture marked, gear table, and an automatic power budget. The Gaffer hangs it on the cart. The electrician runs the circuits to it. The DP signs it.
          </p>
        </div>

        {/* Export Formats Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {exportFormats.map((format, i) => (
            <motion.div
              key={format.format}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#f5c842]">
                  {format.format}
                </span>
                <h4 className="mt-3 text-sm sm:text-base font-bold text-white font-display">
                  {format.name}
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-white/50 leading-relaxed font-sans">
                  {format.desc}
                </p>
              </div>
              <div className="mt-6">
                <span className="inline-flex text-[9px] font-semibold text-white/40 tracking-wider bg-white/5 border border-white/10 rounded px-2.5 py-1 uppercase">
                  {format.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Power Budget Example Box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 rounded-2xl bg-white/[0.01] border border-white/5 w-full"
        >
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#f5c842]">
            Power Budget Example
          </div>
          <p className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
            3× Aputure 600D (720 W each) + 1× ARRI SkyPanel S60 (480 W) = <strong className="text-white">2,640 W</strong> total. The Set Plan PDF flags this needs <strong className="text-white">2× 15 A circuits</strong> (1,500 W cap each) or <strong className="text-white">2× 20 A circuits</strong> (1,920 W cap each). Catches the &ldquo;we can&apos;t run all four off one wall outlet&rdquo; mistake before the truck rolls.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="my-24 border-t border-white/5" />

        {/* Cine Camera Section */}
        <div id="camera" className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 lg:gap-20 items-start pt-4">
          <div>
            <div className="text-left max-w-4xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#f5c842] border-l-2 border-[#f5c842] pl-3">
                Cine Camera · Real Bodies + Real Lenses
              </span>
              <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight font-display">
                Pre-light through the actual lens.
              </h2>
              <p className="mt-6 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                The Cine camera simulates a real photographic exposure triangle — body, lens, aperture, shutter, ISO, focus distance — with depth-of-field and tone mapping. Pick a preset and the FOV snaps to the real-world geometry (FOV = 2·atan(sensor_w / (2·focal_length))), DOF wakes up, exposure scalar updates against the scene lux. You see what your actual camera will see at the actual stop, on the actual sensor, before you rent the lens.
              </p>
            </div>

            {/* Camera Presets interactive list */}
            <div className="mt-12 space-y-2">
              {cameras.map((cam, idx) => (
                <button
                  key={cam.name}
                  onClick={() => setActiveCamIndex(idx)}
                  className={`w-full text-left grid grid-cols-1 sm:grid-cols-[200px_1fr_auto] gap-4 items-center p-4 rounded-xl border transition-all duration-300 ${
                    activeCamIndex === idx
                      ? "border-[#f5c842] bg-[#f5c842]/5 shadow-[0_0_15px_rgba(245,200,66,0.1)]"
                      : "border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02]"
                  }`}
                >
                  <span className={`text-xs font-bold font-display ${activeCamIndex === idx ? "text-[#f5c842]" : "text-white"}`}>{cam.name}</span>
                  <span className="text-[11px] text-white/60 leading-normal">{cam.body}</span>
                  <span className="text-[11px] font-extrabold text-white/40 tracking-wider text-right">{cam.stop}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Viewfinder Preview Panel */}
          <motion.div
            layout
            className="rounded-2xl border border-white/10 bg-white/[0.01] p-6 shadow-2xl relative flex flex-col items-center"
          >
            {/* Top Diagnostics HUD */}
            <div className="w-full flex items-center justify-between text-[9px] font-bold text-white/40 uppercase tracking-widest border-b border-white/5 pb-3">
              <span>Viewfinder Simulator</span>
              <span className="text-[#f5c842] font-mono animate-pulse">Rec 24fps</span>
            </div>

            {/* Simulated Viewfinder Canvas */}
            <div className="w-full my-6 bg-black rounded-lg border border-white/10 overflow-hidden flex items-center justify-center relative aspect-[1.85/1]">
              {/* Glass glare effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/[0.05] pointer-events-none z-10" />

              {/* Grid Overlays */}
              <div className="absolute inset-0 border border-white/10 opacity-30 pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white/10 opacity-30 pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-2/3 w-px bg-white/10 opacity-30 pointer-events-none" />
              <div className="absolute left-0 right-0 top-1/3 h-px bg-white/10 opacity-30 pointer-events-none" />
              <div className="absolute left-0 right-0 top-2/3 h-px bg-white/10 opacity-30 pointer-events-none" />

              {/* Frame corners */}
              <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-white/40" />
              <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-white/40" />
              <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-white/40" />
              <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-white/40" />

              {/* Center crosshair */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center opacity-40">
                <div className="w-2 h-px bg-white" />
                <div className="h-2 w-px bg-white absolute" />
              </div>

              {/* Viewport size simulator based on active camera aspect ratio transition */}
              <motion.div
                layout
                className={`absolute bg-gradient-to-br from-[#f5c842]/5 to-transparent border border-[#f5c842]/20 flex flex-col items-center justify-center p-4`}
                style={{ width: "92%", height: "92%" }}
              >
                {/* Simulated subject silhouette inside camera viewport */}
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 opacity-20 flex items-center justify-center relative">
                  <div className="absolute top-0 w-2 h-2 rounded-full bg-[#f5c842] animate-ping" />
                  <span className="text-[8px] text-white">Subject</span>
                </div>
                <div className="mt-3 text-[10px] font-mono text-white/40 text-center tracking-tight">
                  {activeCam.name}<br />
                  <span className="text-white/60">{activeCam.fov}</span>
                </div>
              </motion.div>

              {/* Overlay data readouts inside canvas */}
              <div className="absolute bottom-2 left-3 text-[8px] font-mono text-white/50 z-20">
                <span>{activeCam.exposure}</span>
              </div>
              <div className="absolute bottom-2 right-3 text-[8px] font-mono text-[#f5c842] z-20 uppercase font-bold">
                <span>Sekonic ±5%</span>
              </div>
            </div>

            {/* Viewfinder Specs footer inside panel */}
            <div className="w-full grid grid-cols-2 gap-4 border-t border-white/5 pt-4 text-left">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-white/30">Field of View (FOV)</span>
                <p className="text-xs font-bold text-white mt-1 font-mono">{activeCam.fov}</p>
              </div>
              <div className="border-l border-white/5 pl-4">
                <span className="text-[9px] uppercase tracking-wider text-white/30">Depth of Field (DOF)</span>
                <p className="text-xs font-bold text-[#f5c842] mt-1 font-mono">{activeCam.dof}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cine Camera Footnote */}
        <p className="mt-12 text-xs text-white/40 leading-relaxed max-w-4xl border-t border-white/5 pt-6">
          Each preset reports horizontal + vertical FOV, equivalent full-frame focal length, DOF near / far / hyperfocal in metres, exposure scalar, noise rating (Clean / Acceptable / Visible Grain / Heavy Grain), and a motion-blur warning if your shutter is wrong for 24 fps. The lens&apos;s real aperture range is enforced (you can&apos;t dial T1.0 on a T2 lens), and ISO is clamped to the body&apos;s native range.
        </p>
      </div>
    </section>
  );
}
