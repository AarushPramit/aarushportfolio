"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-7xl space-y-32">

        {/* ---------- ABOUT ME ---------- */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
            ABOUT ME
          </p>

          <h1 className="mb-14 text-5xl font-semibold tracking-tight md:text-7xl">
            Designing with
            <br />
            Curiosity & Intent.
          </h1>

          <div className="grid items-center gap-14 md:grid-cols-2">

            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative h-[420px] w-[320px] overflow-hidden rounded-[34px] border border-cyan-400/20">
                <Image
                  src="/aarush.jpg"
                  alt="Aarush"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 text-zinc-300">
              <p className="text-xl leading-9">
                I'm Aarush, a product designer pursuing B.Tech in Artificial
                Intelligence. I enjoy designing interfaces that feel effortless,
                combining visual storytelling with thoughtful user experiences.
              </p>

              <p className="text-lg leading-8 text-zinc-400">
                Beyond design, my interests naturally gravitate toward the creative world.
                I’m deeply passionate about music, fashion, and food, and I love traveling to immerse myself in different cultures,
                drawing inspiration from them and creating work as a tribute to their essence. My designs are heavily influenced by
                the kind of music I listen to (primarily house music or progressive house). I like to create products that don’t just seem visually appealing, but also stand the test of time by being genuinely useful.
                 
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {["Figma", "UX Research", "Prototyping", "AI"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 px-4 py-2 text-sm text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ---------- BURNT PALETTE ---------- */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
            Graphic Design Instagram Account
          </p>

          <h2 className="mb-14 text-4xl font-semibold md:text-6xl">
            Burnt Palette
          </h2>

          <div className="grid items-center gap-14 md:grid-cols-2">

            {/* Brand Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative h-[360px] w-[360px] overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/burntpalettelogo.png"
                  alt="Burnt Palette"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <p className="text-lg leading-9 text-zinc-300">
                Burnt Palette is where I share my latest design explorations,
                visual experiments and creative process. It's a space where ideas
                evolve, styles are tested and concepts come to life beyond
                structured projects.
              </p>

              <p className="text-lg leading-9 text-zinc-400">
                Follow along for UI inspirations, behind-the-scenes iterations,
                branding studies and ongoing creative direction.
              </p>

              <a
                href="https://www.instagram.com/burnt_palette"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/15 px-8 py-4 text-lg font-medium transition hover:border-cyan-400 hover:bg-cyan-400/10"
              >
                View Instagram Account
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}