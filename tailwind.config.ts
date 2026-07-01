import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#040404",
        "bg-secondary": "#0B0B0B",
        card: "#121212",
        "electric-blue": "#3B82F6",
        purple: "#7C3AED",
        cyan: "#06B6D4",
        indigo: "#6366F1",
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        "text-primary": "#FFFFFF",
        "text-secondary": "#B8B8B8",
        muted: "#707070",
        divider: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-desktop": ["clamp(64px,6vw,88px)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "hero-mobile": ["42px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(48px,4.5vw,72px)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(36px,3.5vw,52px)", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(28px,2.5vw,40px)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "aurora": "linear-gradient(135deg, #3B82F6 0%, #7C3AED 30%, #06B6D4 60%, #6366F1 100%)",
        "aurora-subtle": "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(124,58,237,0.1) 50%, rgba(6,182,212,0.15) 100%)",
        "card-gradient": "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "blue-glow": "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.3) 0%, transparent 70%)",
        "purple-glow": "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.3) 0%, transparent 70%)",
        "mesh-gradient": "radial-gradient(at 40% 20%, rgba(59,130,246,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(124,58,237,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(6,182,212,0.08) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(99,102,241,0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(59,130,246,0.08) 0px, transparent 50%)",
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(59,130,246,0.25), 0 0 80px rgba(59,130,246,0.1)",
        "glow-purple": "0 0 40px rgba(124,58,237,0.25), 0 0 80px rgba(124,58,237,0.1)",
        "glow-cyan": "0 0 40px rgba(6,182,212,0.25), 0 0 80px rgba(6,182,212,0.1)",
        "card-shadow": "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 20px 60px rgba(0,0,0,0.5)",
        "premium": "0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.4), 0 0 80px rgba(59,130,246,0.05)",
        "premium-hover": "0 0 0 1px rgba(59,130,246,0.3), 0 30px 60px rgba(0,0,0,0.5), 0 0 100px rgba(59,130,246,0.15)",
        "nav": "0 1px 0 0 rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.4)",
      },
      animation: {
        "aurora": "aurora 8s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee 30s linear infinite reverse",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
        "border-glow": "border-glow 3s ease-in-out infinite",
        "particle": "particle 20s linear infinite",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(59,130,246,0.3)" },
          "50%": { borderColor: "rgba(124,58,237,0.5)" },
        },
        particle: {
          "0%": { transform: "translateY(100vh) translateX(0px)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "0.5" },
          "100%": { transform: "translateY(-100px) translateX(100px)", opacity: "0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
