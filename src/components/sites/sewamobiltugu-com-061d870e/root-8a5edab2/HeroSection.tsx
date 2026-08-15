"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { assetRoot } from "./content";

const slides = [
  {
    src: `${assetRoot}/hero-1.webp`,
    alt: "Rekomendasi armada perjalanan dari Sewa Mobil Tugu",
  },
  {
    src: `${assetRoot}/hero-2.webp`,
    alt: "Pilihan layanan perjalanan dari Sewa Mobil Tugu",
  },
] as const;

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPointerOver, setIsPointerOver] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (isPointerOver || prefersReducedMotion) {
      return;
    }

    const autoplay = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 5000);

    return () => {
      window.clearInterval(autoplay);
    };
  }, [isPointerOver, prefersReducedMotion]);

  const showPreviousSlide = () => {
    setActiveSlide((currentSlide) =>
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1,
    );
  };

  const showNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
  };

  return (
    <section
      aria-label="Banner utama"
      aria-roledescription="carousel"
      className="pt-[105px] md:pt-[115px]"
    >
      <div
        className="relative aspect-[2698/1200] w-full overflow-hidden bg-neutral-100"
        onPointerEnter={() => setIsPointerOver(true)}
        onPointerLeave={() => setIsPointerOver(false)}
      >
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            loading="eager"
            sizes="100vw"
            aria-hidden={index !== activeSlide}
            className={`object-cover transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${
              index === activeSlide ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          />
        ))}

        <button
          type="button"
          aria-label="Tampilkan slide sebelumnya"
          onClick={showPreviousSlide}
          className="absolute inset-y-0 left-0 z-10 flex w-10 items-center justify-center text-4xl font-light text-white/75 drop-shadow-md transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white sm:w-14"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          aria-label="Tampilkan slide berikutnya"
          onClick={showNextSlide}
          className="absolute inset-y-0 right-0 z-10 flex w-10 items-center justify-center text-4xl font-light text-white/75 drop-shadow-md transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white sm:w-14"
        >
          <span aria-hidden="true">›</span>
        </button>

        <div
          className="absolute inset-x-0 bottom-2.5 z-10 flex justify-center gap-2 sm:bottom-4"
          aria-label="Pilih slide"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Tampilkan slide ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
              onClick={() => setActiveSlide(index)}
              className={`size-2 rounded-full border border-white shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:size-2.5 ${
                index === activeSlide ? "bg-white" : "bg-white/35 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
