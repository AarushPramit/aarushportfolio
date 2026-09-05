"use client";

import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-black px-6 pb-16 pt-28 text-white md:px-14">
  {/* Background watermark */}
  <h1 className="pointer-events-none absolute left-6 top-0 select-none text-[90px] font-semibold tracking-[-0.08em] text-white/[0.05] md:left-14 md:text-[200px]">
    Aarush
  </h1>

  <div className="relative z-10 mx-auto max-w-7xl pt-24">
    <div className="grid items-center gap-14 lg:grid-cols-2">
      {/* Left */}
      <div className="max-w-xl">
        <h2 className="mb-8 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
          Crafting Experiences
        </h2>

        <div className="space-y-7 text-lg leading-9 text-zinc-400">
          <p>
            I'm focused on bridging the gap between AI and product design by
            creating systems that feel intelligent, intuitive, and human.
          </p>

          <p>
            My approach blends logic with emotion. I'm deeply inspired by music and how
            the rhythm, tone, and atmosphere influence how I design interactions
            and visual systems.
          </p>

          <p>
            I aim to build experiences that don't just function well, but feel right.
          </p>
        </div>

            {/* Skills */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
                  Focus
                </p>

                <div className="space-y-3 text-white">
                  <p>AI + UX</p>
                  <p>Product Strategy</p>
                  <p>Interaction Design</p>
                </div>
              </div>

              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
                  Approach
                </p>

                <div className="space-y-3 text-white">
                  <p>Clarity over noise</p>
                  <p>Emotion-driven design</p>
                  <p>Minimal systems</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative overflow-hidden rounded-[30px] border border-white/10">
            <div className="relative aspect-[4/5]">
              <Image
                src="/aarush.jpg"
                alt="Aarush portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-20 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">
          <p> Aarush Pramit</p>

          <div className="mt-4 flex gap-6 md:mt-0">
            <a href="https://www.linkedin.com/in/aarushpramit/" className="transition hover:text-white">
              LinkedIn
            </a>
            <a href="https://github.com/AarushPramit" className="transition hover:text-white">
              GitHub
            </a>
            <a href="mailto:aarushpramit061205@gmail.com" className="transition hover:text-white">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}