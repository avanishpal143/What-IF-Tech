"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const flowSteps = [
  {
    num: "01",
    label: "Capture",
    title: "Walk the room with your iPhone",
    desc: "~half normal walking pace (0.3 m/s). Tilt up to catch the ceiling, down to catch the floor. The HUD counts frames — aim for 100–300. Cover every surface from ≥2 viewing angles.",
    tag: "iPhone 12 Pro+ · LiDAR · ARKit",
  },
  {
    num: "02",
    label: "Upload",
    title: "Background upload to the cloud",
    desc: "Native URLSession background-config upload. Frames + LiDAR depth + LiDAR confidence + ARKit poses + manifest. Put the phone down — the bake runs on a cloud H100. Push notification fires when ready.",
    tag: "~20–30 min wait",
  },
  {
    num: "03",
    label: "Bake",
    title: "Proprietary textured-mesh reconstruction",
    desc: "Thick-fragment pose-graph optimization corrects sensor drift. TSDF consensus fusion builds a clean triangle mesh. Best-view texture projection at 0.4cm color resolution delivers photographic sharpness on solid surfaces. Fully proprietary, $0 bakes — no commercial MVS SDKs or external services.",
    tag: "Proprietary Pipeline · 0.4cm Color Detail",
  },
  {
    num: "04",
    label: "Open in Sandbox",
    title: "You land INSIDE the room",
    desc: "Cinematic 3/4 framing on first frame — corner-anchored, 25% inset from the far wall, 25% perpendicular offset. The room reads with depth, not flat. Drop your first SpotLight — the import baseline tweens to 50% over 200 ms so your light dominates.",
    tag: "60 fps · GLSL 3.00 ES",
  },
];

const techChips = [
  "WATT-IF Mesh (proprietary textured-mesh)",
  "Thick-fragment PGO (Open3D)",
  "TSDF Consensus Fusion",
  "Best-view Texture Projection (0.4cm)",
  "Fully Proprietary · $0 Bakes · Apache-2.0 / MIT only",
];

export function Features() {
  const scrollRef = useRef(null);

  return (
    <section id="splat" className="relative py-24 sm:py-32 bg-[#0d0d0d] overflow-hidden">
      {/* Decorative vertical line in background */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/5 pointer-events-none hidden lg:block" />

      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 md:px-20 relative z-10">
        <div className="text-left max-w-4xl">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-wider text-[#f5c842] border-l-2 border-[#f5c842] pl-3"
          >
            Scan → Bake → Relight
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display"
          >
            Your real location. <br />Recreated, then relit.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xs sm:text-sm md:text-base text-white/70 leading-relaxed max-w-4xl"
          >
            No one else lets you walk into a location, capture it with your phone, and place physically-accurate cinema fixtures on the captured room — at home, in your hotel, on the plane to the shoot. The WATT-IF Mesh engine is a proprietary textured-mesh pipeline that reconstructs your space with sharp, relightable geometry. Thick-fragment pose-graph optimization corrects ARKit/ARCore drift, TSDF fusion builds a clean surface, and best-view texture projection at 0.4cm resolution delivers photographic detail. User-placed SpotLights cast correct shadows on the actual scanned geometry. It isn&apos;t a render preview. It&apos;s a relight.
          </motion.p>
        </div>

        {/* 4-Step Flow Grid with timeline linking */}
        <div ref={scrollRef} className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {flowSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              {/* Animated glow background on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#f5c842]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/40 tracking-wider font-display">
                    {step.num} / {step.label}
                  </span>
                  <span className="text-[10px] font-bold text-[#f5c842] bg-[#f5c842]/10 border border-[#f5c842]/20 px-2 py-0.5 rounded uppercase">
                    Step
                  </span>
                </div>
                <h3 className="mt-6 text-base font-bold text-white tracking-tight leading-snug group-hover:text-[#f5c842] transition-colors font-display">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-white/50 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 relative z-10">
                <span className="inline-flex text-[9px] font-semibold text-white/40 tracking-wider bg-white/5 border border-white/10 rounded px-2.5 py-1 uppercase">
                  {step.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Chips */}
        <div className="mt-16 flex flex-wrap gap-2.5">
          {techChips.map((chip, i) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-[10px] font-bold tracking-wide text-white/60 bg-white/[0.02] border border-white/5 hover:border-white/10 hover:text-white px-4 py-2.5 rounded-full transition-all duration-300 cursor-default"
            >
              {chip}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
