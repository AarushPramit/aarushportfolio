"use client";

import Image from "next/image";

const graphicWorks = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
  "/image7.jpg",
  "/image8.jpg",
  "/image9.jpg",
];

export default function UIHero() {
  // Duplicate images for seamless infinite loop
  const carouselImages = [...graphicWorks, ...graphicWorks];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 text-white md:px-14">
      {/* ---------------- UI DESIGNER ---------------- */}
      <div className="mb-28">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-400">
          UI Design
        </p>

        <h1 className="max-w-2xl text-5xl font-medium leading-tight tracking-[-0.04em] md:text-7xl">
          How I Work as a UI Designer
        </h1>

        <div className="mt-14 max-w-3xl space-y-7 text-lg leading-9 text-zinc-400">
          <p>
            A lot of my work is inspired by the kind of music I'm listening to at
            the moment. Rhythm, atmosphere and emotion often shape the visual
            direction before I even begin designing.
          </p>

          <p>
            I constantly collect inspiration from Pinterest, Dribbble and other
            beautifully crafted websites. Exploring different design languages
            helps me discover new layouts, interactions and typography systems.
          </p>

          <p>
            I usually vibe-code my ideas first to understand how an interface
            should feel, then translate those concepts into structured wireframes
            in Figma. Alongside product design, I also have hands-on experience
            with Adobe Photoshop and Illustrator for branding and visual design.
          </p>
        </div>
      </div>

      {/* ---------------- GRAPHIC DESIGN ---------------- */}
      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-400">
          Graphic Design
        </p>

        <h2 className="mb-12 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
          My Work as a Graphic Designer
        </h2>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

          <div className="carousel-track flex w-max gap-6">
            {carouselImages.map((src, index) => (
              <div
                key={index}
                className="relative h-[420px] w-[280px] flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A]"
              >
                <Image
                  src={src}
                  alt={`Graphic work ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="280px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-track {
          animation: scroll 30s linear infinite;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 12px));
          }
        }
      `}</style>
    </section>
  );
}