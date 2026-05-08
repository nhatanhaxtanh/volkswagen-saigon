"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { BASE_IMG, PHONE, PHONE_HREF } from "@/lib/data";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: `${BASE_IMG}/2025/05/Volkswagen-Tiguan-Platinum-WHITE.webp`,
    label: "Volkswagen Tiguan Platinum",
    title: "Khám phá trải nghiệm",
    titleAccent: "lái xe tuyệt vời",
    desc: "Showroom Volkswagen chính hãng tại TP.HCM. Tư vấn chuyên nghiệp, lái thử miễn phí, hỗ trợ vay vốn lên đến 85% giá trị xe.",
  },
  {
    image: `${BASE_IMG}/2024/11/Teramont.webp`,
    label: "Volkswagen Teramont 2025",
    title: "SUV hạng sang",
    titleAccent: "cho mọi hành trình",
    desc: "Teramont 2025 – chiếc SUV 7 chỗ lớn nhất của Volkswagen, mạnh mẽ và đầy đủ trang bị với giá ưu đãi giảm thuế.",
  },
  {
    image: `${BASE_IMG}/2024/11/Volkswagen-Touareg-Elegance.webp`,
    label: "Volkswagen Touareg Elegance",
    title: "Đỉnh cao sang trọng",
    titleAccent: "đẳng cấp vượt trội",
    desc: "Touareg – biểu tượng của sự tinh tế và công nghệ, dành cho những ai tìm kiếm trải nghiệm lái xe hoàn hảo nhất.",
  },
  {
    image: `${BASE_IMG}/2024/11/xe-volkswagen-viloran-3.webp`,
    label: "Volkswagen Viloran Luxury",
    title: "MPV hạng sang",
    titleAccent: "lý tưởng cho gia đình",
    desc: "Viloran – không gian nội thất đẳng cấp, thoải mái tuyệt đối cho cả gia đình với thiết kế sang trọng hiện đại.",
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
      {/* Embla viewport */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div key={i} className="relative flex-[0_0_100%] h-full">
              {/* Background image */}
              <Image
                src={slide.image}
                alt={slide.label}
                fill
                className="object-cover object-center opacity-80"
                priority={i === 0}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#001e50]/80 via-[#001e50]/30 to-transparent" />

              {/* Content */}
              <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
                <div className="max-w-2xl">
                  <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-4">
                    {slide.label}
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    {slide.title}
                    <span className="block text-blue-400">{slide.titleAccent}</span>
                  </h1>
                  <p className="text-white/80 text-lg mb-8 leading-relaxed">
                    {slide.desc}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#lai-thu"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "bg-blue-500 hover:bg-blue-400 text-white text-base px-8 h-12"
                      )}
                    >
                      Đăng ký lái thử
                    </a>
                    <a
                      href="#xe"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "border-white text-white hover:bg-white hover:text-[#001e50] text-base px-8 h-12 bg-transparent"
                      )}
                    >
                      Xem các dòng xe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors backdrop-blur-sm"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors backdrop-blur-sm"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === current ? "w-8 bg-white" : "w-3 bg-white/40"
            )}
          />
        ))}
      </div>

      {/* Stats */}
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
