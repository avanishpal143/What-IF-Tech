import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Dashboard } from "@/components/Dashboard";
import { Testimonials } from "@/components/Testimonials";
import { Integrations } from "@/components/Integrations";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="relative bg-[#0d0d0d] min-h-screen text-white font-sans selection:bg-white/10 selection:text-white">
      <CursorGlow />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Dashboard />
      <Testimonials />
      <Integrations />
      <FAQ />
      <Footer />
    </main>
  );
}
