"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { BASE_IMG } from "@/lib/data";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: `${BASE_IMG}/2025/05/Volkswagen-Tiguan-Platinum-WHITE.webp`,
    label: "Volkswagen Tiguan Platinum",
    title: "Khám phá trải nghiệm",
    titleAccent: "lái xe tuyệt vời",
    desc: "Showroom Volkswagen chính hãng tại TP.HCM. Lái thử miễn phí, hỗ trợ vay 85%.",
  },
  {
    image: `${BASE_IMG}/2024/11/Teramont.webp`,
    label: "Volkswagen Teramont 2025",
    title: "SUV hạng sang",
    titleAccent: "cho mọi hành trình",
    desc: "Teramont 2025 – SUV 7 chỗ lớn nhất Volkswagen, mạnh mẽ và đầy đủ trang bị.",
  },
  {
    image: `${BASE_IMG}/2024/11/Volkswagen-Touareg-Elegance.webp`,
    label: "Volkswagen Touareg Elegance",
    title: "Đỉnh cao sang trọng",
    titleAccent: "đẳng cấp vượt trội",
    desc: "Touareg – biểu tượng tinh tế và công nghệ cho trải nghiệm lái xe hoàn hảo.",
  },
  {
    image: `${BASE_IMG}/2024/11/xe-volkswagen-viloran-3.webp`,
    label: "Volkswagen Viloran Luxury",
    title: "MPV hạng sang",
    titleAccent: "lý tưởng cho gia đình",
    desc: "Viloran – không gian đẳng cấp, thoải mái tuyệt đối cho cả gia đình.",
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <section className="relative h-screen bg-[#001e50] overflow-hidden pt-16">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div key={i} className="relative flex-[0_0_100%] h-full">
              <Image
                src={slide.image}
                alt={slide.label}
                fill
                className="object-cover object-center opacity-80"
                priority={i === 0}
                unoptimized
              />
              {/* Gradient: stronger on mobile, fades right on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001e50]/80 via-[#001e50]/40 to-[#001e50]/30 md:bg-none" />
              <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#001e50]/80 via-[#001e50]/30 to-transparent" />

              <div className="relative h-full max-w-7xl mx-auto px-5 flex items-center">
                <div className="w-full md:max-w-2xl">
                  <p className="text-blue-300 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3">
                    {slide.label}
                  </p>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                    {slide.title}
                    <span className="block text-blue-400">{slide.titleAccent}</span>
                  </h1>
                  <p className="text-white/80 text-sm md:text-lg mb-6 leading-relaxed max-w-md">
                    {slide.desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/#lai-thu"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "bg-blue-500 hover:bg-blue-400 text-white text-sm md:text-base px-6 md:px-8 h-11 md:h-12"
                      )}
                    >
                      Đăng ký lái thử
                    </a>
                    <a
                      href="/xe"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "border-white text-white hover:bg-white hover:text-[#001e50] text-sm md:text-base px-6 md:px-8 h-11 md:h-12 bg-transparent"
                      )}
                    >
                      Xem các dòng xe
                    </a>
                  </div>

                  {/* Stats – visible on mobile below buttons */}
                  <div className="flex gap-6 mt-8 md:hidden">
                    {[
                      { value: "10+", label: "Dòng xe" },
                      { value: "85%", label: "Hỗ trợ vay" },
                      { value: "100%", label: "Chính hãng" },
                    ].map((s) => (
                      <div key={s.label}>
                        <p className="text-xl font-bold text-blue-400">{s.value}</p>
                        <p className="text-white/60 text-xs">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next – smaller on mobile */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors backdrop-blur-sm touch-manipulation"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors backdrop-blur-sm touch-manipulation"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300 touch-manipulation",
              i === current ? "w-7 bg-white" : "w-3 bg-white/40"
            )}
          />
        ))}
      </div>

      {/* Stats desktop only */}
      <div className="absolute bottom-10 right-8 hidden md:flex gap-8">
        {[
          { value: "10+", label: "Dòng xe" },
          { value: "85%", label: "Hỗ trợ vay" },
          { value: "100%", label: "Chính hãng" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-2xl font-bold text-blue-400">{s.value}</p>
            <p className="text-white/60 text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
