import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ShaderBackground from "@/components/ShaderBackground";
import UXHero from "@/components/ux/ux-hero";
import UXTimeline from "@/components/ux/ux-timeline";
import cursorGlow from "@/components/cursor-glow";
import CursorGlow from "@/components/cursor-glow";

export default function UXPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <ShaderBackground />
      

      <div className="relative z-10">
        <CursorGlow />
        <Navbar />

        <section className="pt-28">
          <UXHero />
        </section>

        <UXTimeline />
        <section className="px-6 py-28 md:px-16">
  <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
    <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
      UX CASE STUDIES
    </p>

    <h2 className="mt-4 text-4xl font-semibold md:text-6xl">
      View my work as a UX Designer
    </h2>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
      Explore detailed case studies covering research, user flows, wireframes,
      usability testing and the design decisions behind each product.
    </p>

    <a
      href="https://medium.com/@aarushpramit061205"
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-12 inline-flex items-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:bg-cyan-400/20"
    >
      <span className="text-lg font-medium">View UX Case Studies</span>
      <svg
        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M13 5l7 7-7 7"
        />
      </svg>
    </a>
  </div>
</section>

        <Footer />
      </div>
    </main>
  );
}