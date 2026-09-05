import Navbar from "@/components/navbar";
import CursorGlow from "@/components/cursor-glow";
import ShaderBackground from "@/components/ShaderBackground";
import AboutSection from "@/components/about/about-section";
import Footer from "@/components/footer";
import ContactSection from "@/components/about/contact-section";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <ShaderBackground />

      <div className="relative z-10">
        <CursorGlow />
        <Navbar />

        <section className="pt-28">
          <AboutSection />
        </section>

        <section className="py-28">
          <ContactSection />
        </section>

        <Footer />
      </div>
    </main>
  );
}