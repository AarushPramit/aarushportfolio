import Navbar from "@/components/navbar";
import UIHero from "@/components/ui/ui-hero";
import UIDesignerSection from "@/components/ui/ui-designer-section";
import Footer from "@/components/footer";
import ShaderBackground from "@/components/ShaderBackground";
import CursorGlow from "@/components/cursor-glow";

export default function UIPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <ShaderBackground />

      {/* Foreground Content */}
      <div className="relative z-10">
        <CursorGlow />
        <Navbar />

        {/* Hero + Graphic Design */}
        <section className="pt-28">
          <UIHero />
        </section>

        {/* UI Designer Section */}
        <section className="py-28">
          <UIDesignerSection />
        </section>

        <Footer />
      </div>
    </main>
  );
}