"use client";

import { motion } from "framer-motion";

const mmkFeatures = [
  {
    title: "Press-and-hold voice capture",
    desc: "Tap and hold the M/mk avatar, speak the recipe name and intent. Release. The recipe lands in Your Recipes with a thumbnail and the M/mk transcript.",
  },
  {
    title: "110 lighting Q&A entries",
    desc: "\"What's the difference between Rembrandt and Loop?\" \"Why does the Godfather office look that way?\" Embedded knowledge base — answers in plain language, not vague LLM output.",
  },
  {
    title: "Photometric-grounded suggestions",
    desc: "Silent Director (next-sprint UI) reads the lux meter in real time and suggests fixture moves backed by Sekonic-matching numbers — not vibes. \"Your key is at 800 lx, your fill is at 200 lx, ratio is 2 stops, dropping the fill 50% takes you to 3 stops for the noir look you're asking for.\"",
  },
  {
    title: "Real-world placement notes",
    desc: "M/mk doesn't just simulate. Recipes carry placement notes — where to put the actual fixture on set, what to clamp it to, which cable run. The PDF includes them.",
  },
];

const cinemaKnowledge = [
  {
    dp: "Roger Deakins",
    title: "Blade Runner 2049 — Interrogation",
    desc: "Single Fresnel overhead at 80° down, warm CTO gel. Eyes go dark. Oppressive, clinical. 10:1 key-to-fill ratio.",
    tint: "group-hover:border-[#f5c842]/20"
  },
  {
    dp: "Gordon Willis",
    title: "The Godfather — Office",
    desc: "Overhead key at 80° tilt, warm CTO. Eyes in deep shadow. The Prince of Darkness signature. 8:1 ratio.",
    tint: "group-hover:border-[#f5c842]/20"
  },
  {
    dp: "James Laxton",
    title: "Moonlight — Beach",
    desc: "Cool blue key (8000 K, CTB) from camera-right. Warm accent from camera-left. Skin glows against blue shadows.",
    tint: "group-hover:border-blue-500/20"
  },
  {
    dp: "Emmanuel Lubezki",
    title: "The Revenant — Forest",
    desc: "Warm backlight (CTO) from directly behind. Cool skylight fill from camera-left. No front key. Golden rim.",
    tint: "group-hover:border-yellow-500/20"
  },
  {
    dp: "Hoyte van Hoytema",
    title: "Her — Apartment",
    desc: "Giant soft key from camera-right, 4000 K, half-CTO. Matching soft fill from camera-left. Dreamy overexposure.",
    tint: "group-hover:border-red-500/20"
  },
  {
    dp: "Linus Sandgren",
    title: "La La Land — Planetarium",
    desc: "Deep blue under-fill (8000 K) from below. Purple strip lights from both sides. Cool backlight. No warm tones.",
    tint: "group-hover:border-indigo-500/20"
  },
];

export function Testimonials() {
  return (
    <section id="mmk" className="relative py-24 sm:py-32 bg-[#0d0d0d] overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 md:px-20 relative z-10">
        {/* M/mk AI Header */}
        <div className="text-left max-w-4xl">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#f5c842] border-l-2 border-[#f5c842] pl-3">
            M/mk AI · Voice Recipe Capture
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display">
            &ldquo;Hey M/mk, save this as the softbox key recipe.&rdquo;
          </h2>
          <p className="mt-6 text-xs sm:text-sm md:text-base text-white/70 leading-relaxed max-w-4xl font-sans">
            M/mk is the voice-driven recipe-capture surface — press the M/mk avatar in the bottom bar, hold to speak, release to transcribe. M/mk saves your current sandbox state to Your Recipes with the name you gave it. 110 lighting Q&amp;A entries cover ratios, color theory, fixture types, cinematic references, and real-world placement advice — embedded knowledge, not LLM hallucination. A lux-backed Silent Director with suggestion cards is implemented in the codebase and wiring into the UI next sprint.
          </p>
        </div>

        {/* Features / Image split */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image first on mobile, but right column on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:order-2 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.01] shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-40 z-10" />
            <img
              src="https://pub-4920bb193f79485cb96f6ad32dc0966f.r2.dev/Landing_Page_Images/ChatGPT%20Image%20Mar%2031%2C%202026%2C%2012_26_05%20PM.png"
              alt="M/mk AI Voice Capture Interface"
              className="w-full h-auto object-cover filter grayscale-[10%]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:order-1 space-y-6 sm:space-y-8"
          >
            {mmkFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 items-start group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
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
        </div>

        {/* Divider */}
        <div className="my-24 border-t border-white/5" />

        {/* Cinema Scene Knowledge Header */}
        <div className="text-left max-w-4xl">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#f5c842] border-l-2 border-[#f5c842] pl-3">
            Cinema Scene Knowledge
          </span>
          <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight font-display">
            M/mk knows these films.
          </h2>
          <p className="mt-6 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
            Ask M/mk about any of these scenes and it walks you through the lighting DNA, then guides you to recreate it with real gear in your space — or with virtual fixtures on your scanned splat. Same vocabulary your gaffer uses.
          </p>
        </div>

        {/* Cinema Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cinemaKnowledge.map((movie, idx) => (
            <motion.div
              key={movie.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`group p-6 sm:p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${movie.tint}`}
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-[#f5c842] transition-colors font-display">
                  {movie.dp}
                </span>
                <h4 className="mt-3 text-sm sm:text-base font-bold text-white leading-snug font-display">
                  {movie.title}
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-white/50 leading-relaxed font-sans">
                  {movie.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
