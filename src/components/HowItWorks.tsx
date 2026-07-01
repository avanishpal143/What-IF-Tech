"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const sandboxFeatures = [
  {
    title: "Real fixture catalog",
    desc: "Categorised LED COB, LED Panel, LED Fresnel, Tungsten, HMI, Practical. Aputure, ARRI, ETC Source Four, and more — each at its real manufacturer-published candela.",
  },
  {
    title: "Roscolux gel library",
    desc: "Pick a named filter from the Rosco library, watch the wall colour shift exactly as the gel transmits the source spectrum. Or override with direct Hue/Sat.",
  },
  {
    title: "SUBJECT lux + breakdown",
    desc: "One always-visible chip shows total illuminance at the subject. Tap the speedometer for the floating Light Meter: Key Lux, Fill Lux, Key:Fill ratio in stops, EV @ ISO 100, suggested aperture.",
  },
  {
    title: "11 portrait presets, one tap",
    desc: "Rembrandt, Butterfly, Broad, Short, Split, Loop, Cross, Low Key, Paramount, High Key, Clamshell. Every preset instantiates as a full rig (stand + head + modifier) so you can fine-tune each fixture after.",
  },
  {
    title: "Recipes — save the look",
    desc: "Save any setup as a Recipe (fixtures + camera + subject). Apply later via the bake-directions sheet — Recipes are room-agnostic, so the sheet suggests sensible interpretations for the new room.",
  },
  {
    title: "Recipe Book — community library",
    desc: "Curated starter recipes you can browse, preview, and copy into Your Recipes for editing. Build a personal shot library that travels with you.",
  },
];

const presets = [
  { 
    name: "Rembrandt", 
    desc: "45° key, triangle shadow on cheek",
    keyPos: { x: 70, y: 35 },
    fillPos: { x: 30, y: 40 },
    rimPos: { x: 50, y: 15 },
    keyLux: "850 lx",
    fillLux: "210 lx",
    ratio: "4:1 (2 stops)"
  },
  { 
    name: "Butterfly", 
    desc: "High front key, nose shadow",
    keyPos: { x: 50, y: 30 },
    fillPos: { x: 50, y: 45 },
    rimPos: { x: 50, y: 10 },
    keyLux: "1200 lx",
    fillLux: "400 lx",
    ratio: "3:1 (1.5 stops)"
  },
  { 
    name: "Broad", 
    desc: "Key on near side, wider face",
    keyPos: { x: 80, y: 50 },
    fillPos: { x: 20, y: 40 },
    rimPos: null,
    keyLux: "750 lx",
    fillLux: "250 lx",
    ratio: "3:1 (1.5 stops)"
  },
  { 
    name: "Short", 
    desc: "Key on far side, more dramatic",
    keyPos: { x: 20, y: 50 },
    fillPos: { x: 80, y: 40 },
    rimPos: { x: 40, y: 10 },
    keyLux: "900 lx",
    fillLux: "150 lx",
    ratio: "6:1 (2.5 stops)"
  },
  { 
    name: "Split", 
    desc: "Hard 90° side, half in shadow",
    keyPos: { x: 90, y: 50 },
    fillPos: null,
    rimPos: null,
    keyLux: "1100 lx",
    fillLux: "0 lx",
    ratio: "∞:1 (Noir)"
  },
  { 
    name: "Loop", 
    desc: "30–45° off axis, small nose loop",
    keyPos: { x: 65, y: 35 },
    fillPos: { x: 35, y: 45 },
    rimPos: null,
    keyLux: "800 lx",
    fillLux: "300 lx",
    ratio: "2.7:1 (1.4 stops)"
  },
  { 
    name: "Cross", 
    desc: "Two equal lights, opposite sides",
    keyPos: { x: 20, y: 40 },
    fillPos: { x: 80, y: 40 },
    rimPos: null,
    keyLux: "600 lx",
    fillLux: "600 lx",
    ratio: "1:1 (0 stops)"
  },
  { 
    name: "Low Key", 
    desc: "Tight warm key, deep shadows",
    keyPos: { x: 25, y: 45 },
    fillPos: null,
    rimPos: { x: 75, y: 15 },
    keyLux: "500 lx",
    fillLux: "20 lx",
    ratio: "25:1 (4.6 stops)"
  },
  { 
    name: "Paramount", 
    desc: "High key + chin bounce + rim",
    keyPos: { x: 50, y: 25 },
    fillPos: { x: 50, y: 50 },
    rimPos: { x: 50, y: 10 },
    keyLux: "1400 lx",
    fillLux: "450 lx",
    ratio: "3:1 (1.5 stops)"
  },
  { 
    name: "High Key", 
    desc: "Soft source, minimal shadows",
    keyPos: { x: 40, y: 35 },
    fillPos: { x: 60, y: 35 },
    rimPos: { x: 50, y: 15 },
    keyLux: "1000 lx",
    fillLux: "800 lx",
    ratio: "1.2:1 (0.3 stops)"
  },
  { 
    name: "Clamshell", 
    desc: "Key above, fill below — beauty",
    keyPos: { x: 50, y: 20 },
    fillPos: { x: 50, y: 30 },
    rimPos: { x: 50, y: 10 },
    keyLux: "1600 lx",
    fillLux: "1100 lx",
    ratio: "1.5:1 (0.6 stops)"
  },
];

export function HowItWorks() {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const activePreset = presets[activePresetIndex];

  return (
    <section id="sandbox" className="relative py-24 sm:py-32 bg-[#0d0d0d] overflow-hidden border-t border-white/5">
      {/* Background radial highlight */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-[0.04] blur-[120px]"
        style={{ background: "radial-gradient(circle, #f5c842, transparent 75%)" }}
      />

      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 md:px-20 relative z-10">
        {/* Sandbox Header */}
        <div className="text-left max-w-4xl">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#f5c842] border-l-2 border-[#f5c842] pl-3">
            The Sandbox · 5-Tab Right-Panel Remote
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display">
            Drop a fixture. Read the lux. Match a Sekonic.
          </h2>
          <p className="mt-6 text-xs sm:text-sm md:text-base text-white/70 leading-relaxed max-w-4xl">
            The sandbox right panel (&ldquo;the remote&rdquo;) is a hero grid of five tabs — Lights, Models, Presets, Camera, Boards. Tap a fixture from the Real-Fixture picker and the active light slot is reconfigured to that fixture&apos;s manufacturer-published candela, beam angle, and CCT. The HUD lux meter at the subject matches a Sekonic L-858 incident reading within ±5%. Drop a key. Watch the meter. Dial Power, Modifier, Height, Rotate, Tilt, Gel, and Aim until the numbers match what your DP card needs.
          </p>
        </div>

        {/* Sandbox Content Split */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            {sandboxFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 items-start group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5c842] mt-2.5 flex-shrink-0 shadow-[0_0_8px_#f5c842]" />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#f5c842] transition-colors leading-snug font-display">
                    {feature.title}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-white/50 leading-relaxed font-sans">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.01] shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src="https://pub-4920bb193f79485cb96f6ad32dc0966f.r2.dev/WATT-IF-Bakery.png"
              alt="WATT-IF Sandbox light meter and remote control interface"
              className="w-full h-auto object-cover filter grayscale-[10%]"
            />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-24 border-t border-white/5" />

        {/* 11 Portrait Presets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-12 lg:gap-20 items-start">
          <div>
            <div className="text-left max-w-4xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#f5c842] border-l-2 border-[#f5c842] pl-3">
                11 Portrait Presets
              </span>
              <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight font-display">
                The classic recipes, one tap each.
              </h2>
              <p className="mt-6 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                Every preset is a full lighting recipe — key angle, fill ratio, color temperature, modifier shape — built from real portrait technique. Apply one and the full multi-fixture rig drops into your scanned room. Fine-tune any fixture individually after.
              </p>
            </div>

            {/* Presets clickable grid */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {presets.map((preset, i) => (
                <button
                  key={preset.name}
                  onClick={() => setActivePresetIndex(i)}
                  className={`p-4 rounded-xl text-left border transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-[90px] ${
                    activePresetIndex === i
                      ? "border-[#f5c842] bg-[#f5c842]/5 shadow-[0_0_15px_rgba(245,200,66,0.15)]"
                      : "border-white/5 bg-white/[0.01] hover:border-white/15 hover:bg-white/[0.02]"
                  }`}
                >
                  <div>
                    <h4 className={`text-xs font-bold leading-tight font-display ${activePresetIndex === i ? "text-[#f5c842]" : "text-white"}`}>
                      {preset.name}
                    </h4>
                    <p className="mt-1.5 text-[10px] text-white/40 leading-normal line-clamp-2">
                      {preset.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Relighting Simulator Panel */}
          <motion.div
            layout
            className="rounded-2xl border border-white/10 bg-white/[0.01] p-6 lg:p-8 shadow-2xl relative min-h-[460px] flex flex-col justify-between"
          >
            {/* Top Bar info */}
            <div>
              <span className="text-[9px] font-bold tracking-wider text-white/40 uppercase">Top-down Setup Simulation</span>
              <h3 className="text-lg font-bold text-white tracking-tight mt-1 font-display">{activePreset.name}</h3>
              <p className="text-xs text-white/50 leading-relaxed mt-1 font-sans">{activePreset.desc}</p>
            </div>

            {/* Simulated Canvas */}
            <div className="relative w-full h-[220px] bg-black/40 rounded-xl border border-white/5 overflow-hidden my-6 flex items-center justify-center">
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:10px_10px]" />
              
              {/* Subject (Center) */}
              <div className="relative w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center z-10">
                <span className="text-[10px] font-bold text-white/80">Talent</span>
                {/* Nose direction indicator */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-1.5 h-2 bg-[#f5c842] rounded-t-sm" />
              </div>

              {/* Camera (Bottom Center) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-6 border border-white/20 bg-white/5 rounded flex items-center justify-center">
                <span className="text-[8px] font-semibold text-white/50">CAM</span>
              </div>

              {/* Key Light Position */}
              {activePreset.keyPos && (
                <motion.div
                  initial={false}
                  animate={{ left: `${activePreset.keyPos.x}%`, top: `${activePreset.keyPos.y}%` }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  className="absolute w-7 h-7 rounded-full bg-[#f5c842] flex items-center justify-center shadow-[0_0_15px_#f5c842] z-20 cursor-default"
                >
                  <span className="text-[9px] font-black text-black">K</span>
                  {/* Light Cone beam */}
                  <div className="absolute w-[80px] h-[80px] bg-gradient-to-t from-[#f5c842]/10 to-transparent -translate-y-[45px] pointer-events-none origin-bottom scale-x-50" />
                </motion.div>
              )}

              {/* Fill Light Position */}
              {activePreset.fillPos && (
                <motion.div
                  initial={false}
                  animate={{ left: `${activePreset.fillPos.x}%`, top: `${activePreset.fillPos.y}%` }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  className="absolute w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.8)] z-20 cursor-default"
                >
                  <span className="text-[8px] font-extrabold text-black">F</span>
                  <div className="absolute w-[60px] h-[60px] bg-gradient-to-t from-white/10 to-transparent -translate-y-[35px] pointer-events-none origin-bottom scale-x-75" />
                </motion.div>
              )}

              {/* Rim Light Position */}
              {activePreset.rimPos && (
                <motion.div
                  initial={false}
                  animate={{ left: `${activePreset.rimPos.x}%`, top: `${activePreset.rimPos.y}%` }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  className="absolute w-5 h-5 rounded-full bg-[#06B6D4] flex items-center justify-center shadow-[0_0_10px_#06B6D4] z-20 cursor-default"
                >
                  <span className="text-[8px] font-extrabold text-black">R</span>
                </motion.div>
              )}
            </div>

            {/* Bottom info readout */}
            <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-white/30">Key Lux</span>
                <span className="text-xs font-bold text-white mt-1 font-display">{activePreset.keyLux}</span>
              </div>
              <div className="flex flex-col border-l border-white/5 pl-3">
                <span className="text-[9px] uppercase tracking-wider text-white/30">Fill Lux</span>
                <span className="text-xs font-bold text-white mt-1 font-display">{activePreset.fillLux}</span>
              </div>
              <div className="flex flex-col border-l border-white/5 pl-3">
                <span className="text-[9px] uppercase tracking-wider text-white/30">Key:Fill Stop</span>
                <span className="text-xs font-bold text-[#f5c842] mt-1 font-display">{activePreset.ratio}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
