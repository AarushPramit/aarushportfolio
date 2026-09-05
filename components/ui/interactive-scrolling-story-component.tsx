"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PortfolioButton from "@/components/portfolio-button";
import Link from "next/link";

const slidesData = [
  {
    title: "User Interface",
    description:
      "Creating intuitive and engaging interfaces that not only look beautiful but also provide seamless experiences for users.",
    image: "/ui-project.jpeg",
  },
  {
    title: "User Experience & Research",
    description:
      "Understanding users through interviews, usability testing and research insights to design products that solve real problems.",
    image: "/ux-project.jpeg",
  },
];

export function ScrollingFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollableHeight = container.scrollHeight - window.innerHeight;
      const stepHeight = scrollableHeight / slidesData.length;

      const newIndex = Math.min(
        slidesData.length - 1,
        Math.floor(container.scrollTop / stepHeight)
      );

      setActiveIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const gridPatternStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
    `,
    backgroundSize: "56px 56px",
  };

  return (
    <section className="bg-[#050505] text-white">
      <div
        ref={scrollContainerRef}
        className="h-screen overflow-y-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div style={{ height: `${slidesData.length * 115}vh` }}>
          <div className="sticky top-0 flex h-screen items-center">
            <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 md:grid-cols-2">
              {/* LEFT CONTENT */}
              <div className="relative flex flex-col justify-center border-white/10 p-8 pb-28 md:border-r md:p-16 md:pb-24">
                {/* Progress bars */}
                <div className="absolute left-8 top-8 flex space-x-2 md:left-16 md:top-12">
                  {slidesData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const container = scrollContainerRef.current;
                        if (!container) return;

                        const scrollableHeight =
                          container.scrollHeight - window.innerHeight;
                        const stepHeight =
                          scrollableHeight / slidesData.length;

                        container.scrollTo({
                          top: stepHeight * index,
                          behavior: "smooth",
                        });
                      }}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        index === activeIndex
                          ? "w-12 bg-[#46D9FF]"
                          : "w-6 bg-white/20"
                      }`}
                    />
                  ))}
                </div>

                {/* Animated text */}
                <div className="relative h-[380px]">
                  {slidesData.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 flex flex-col transition-all duration-700 ${
                        index === activeIndex
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0 pointer-events-none"
                      }`}
                    >
                      <p className="mt-5 mb-3 text-sm uppercase tracking-[0.35em] text-[#46D9FF]">
  {index === 0 ? "01" : "02"}
</p>

                      <h2 className="font-sans text-5xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
                        {slide.title}
                      </h2>

                      <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400">
                        {slide.description}
                      </p>

                      <div className="mt-8">
  <PortfolioButton
    text="View More"
    href={activeIndex === 0 ? "/ui" : "/ux"}
  />
</div>
                    </div>
                  ))}
                </div>

                {/* Mobile Image */}
                <div className="mt-8 md:hidden">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10">
                    <Image
                      src={slidesData[activeIndex].image}
                      alt={slidesData[activeIndex].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* DESKTOP IMAGE */}
              <div
                className="hidden items-center justify-center p-8 md:flex"
                style={gridPatternStyle}
              >
                <div className="relative h-[78vh] w-[70%] overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
                  <div
                    className="absolute left-0 top-0 h-full w-full transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateY(-${activeIndex * 100}%)`,
                    }}
                  >
                    {slidesData.map((slide, index) => (
                      <div key={index} className="relative h-full w-full">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}