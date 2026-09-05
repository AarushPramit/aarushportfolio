"use client";

import Intro from "@/components/intro";
import Navbar from "@/components/navbar";
import CursorGlow from "@/components/cursor-glow";
import HeroSection from "@/components/hero-section";
import ShaderBackground from "@/components/ShaderBackground";
import WorkSection from "@/components/work-section";
import ProductSection from "@/components/product-section";
import Footer from "@/components/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      {/* Background */}
      <ShaderBackground />

      {/* Intro overlay (plays once per session) */}
      <Intro />

      {/* Website */}
      <div className="relative z-10">
        <CursorGlow />
        <Navbar />

        <section id="home">
          <HeroSection />
        </section>

        <section id="ui">
          <WorkSection />
        </section>

        <section id="products">
          <ProductSection />
        </section>

        <section id="about">
          <Footer />
        </section>
      </div>
    </main>
  );
}   