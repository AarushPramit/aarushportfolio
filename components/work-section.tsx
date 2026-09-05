"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const works = [
  { id: 1, src: "/image1.jpg", title: "Nike Jordan" },
  { id: 2, src: "/image2.jpg", title: "Highest In The Room" },
  { id: 3, src: "/image3.jpg", title: "Travis Scott Poster" },
  { id: 4, src: "/image4.jpg", title: "Martin Garrix Cover" },
  { id: 5, src: "/image5.jpg", title: "Desire-Poster" },
  { id: 6, src: "/image6.jpg", title: "Billie Eilish" },
  { id: 7, src: "/image7.jpg", title: "Kanye West" },
  { id: 8, src: "/image8.jpg", title: "Satan-Poster" },
  { id: 9, src: "/image9.jpg", title: "The Weeknd" },
];

export default function WorkSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<(typeof works)[0] | null>(null);
   useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selected]);

  const scroll = (dir: "left" | "right") => {
    if (!carouselRef.current) return;

    const amount = carouselRef.current.clientWidth * 0.8;

    carouselRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="ui"
      className="relative z-10 px-6 py-28 text-white md:px-14"
    >
      {/* Heading */}
      <div className="mb-14">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#46D9FF]">
          Selected Projects
        </p>

        <h2 className="font-sans text-4xl font-medium tracking-[-0.04em] md:text-6xl">
          My Work as a
          <br />
          Graphic Designer.
        </h2>
      </div>

      {/* Expanded Card */}
      <AnimatePresence>
  {selected && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
    >
      {/* Scrollable Modal */}
      <div className="h-screen overflow-y-auto p-4 md:p-10">
        <motion.div
          initial={{ scale: 0.96, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.96, y: 20 }}
          transition={{ duration: 0.3 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-[#050505]"
        >
          <div className="grid md:grid-cols-2">
            {/* Left */}
            <div className="flex flex-col justify-center p-8 md:p-10">
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#46D9FF]">
                Graphic Design
              </p>

              <h3 className="mb-4 text-4xl font-medium md:text-5xl">
                {selected.title}
              </h3>

              <p className="mb-8 text-zinc-400">
                A visual exploration focused on bold typography, cinematic
                lighting and contemporary branding aesthetics.
              </p>

              <button
                onClick={() => setSelected(null)}
                className="w-full rounded-full bg-white px-7 py-3 text-black transition hover:bg-zinc-200 md:w-fit"
              >
                Close Project
              </button>
            </div>

            {/* Right */}
            <div className="relative flex min-h-[420px] items-center justify-center bg-[#0A0A0A] p-6 md:p-8">
              <Image
                src={selected.src}
                alt={selected.title}
                width={700}
                height={900}
                className="h-auto max-h-[80vh] w-full object-contain"
                priority
              />

              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 rounded-full bg-black/60 p-2 backdrop-blur transition hover:bg-black/80"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* Carousel controls */}
      {!selected && (
        <>
          <div className="mb-8 flex justify-end gap-3">
            <button
              onClick={() => scroll("left")}
              className="rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-md transition hover:border-[#46D9FF]/60"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-md transition hover:border-[#46D9FF]/60"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {works.map((work) => (
              <motion.div
                key={work.id}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(work)}
                className="group min-w-[320px] cursor-pointer snap-start md:min-w-[380px]"
              >
                <div className="overflow-hidden rounded-[26px] border border-white/10 bg-black transition duration-300 group-hover:border-[#46D9FF]/70">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={work.src}
                      alt={work.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="bg-gradient-to-b from-[#07121d] to-black p-5">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#46D9FF]">
                      Graphic Design
                    </p>

                    <h3 className="mt-2 font-sans text-xl font-medium">
                      {work.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}