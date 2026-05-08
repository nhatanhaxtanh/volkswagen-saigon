"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { cars, PHONE_HREF } from "@/lib/data";
import useEmblaCarousel from "embla-carousel-react";

export default function CarModels() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="xe" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-2">
              Showroom Volkswagen Sài Gòn
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#001e50]">
              Các dòng xe Volkswagen
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {/* Nav arrows */}
            <button
              onClick={scrollPrev}
              disabled={!canPrev}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#001e50] hover:bg-[#001e50] hover:text-white hover:border-[#001e50] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canNext}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#001e50] hover:bg-[#001e50] hover:text-white hover:border-[#001e50] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {cars.map((car) => (
              <div
                key={car.id}
                className="flex-[0_0_280px] md:flex-[0_0_300px] lg:flex-[0_0_320px] group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-52 bg-gray-50 overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    {car.badge && (
                      <Badge className="absolute top-3 left-3 bg-blue-600 text-white text-xs">
                        {car.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-[#001e50] text-sm leading-snug mb-3 flex-1">
                      {car.name}
                    </h3>
                    <div className="mb-4">
                      {car.originalPrice && (
                        <p className="text-gray-400 text-xs line-through mb-0.5">
                          {car.originalPrice}
                        </p>
                      )}
                      <p className="text-blue-600 font-bold text-lg">{car.price}</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={PHONE_HREF}
                        className={cn(
                          buttonVariants({ size: "sm" }),
                          "flex-1 bg-[#001e50] hover:bg-blue-800 text-white text-xs justify-center"
                        )}
                      >
                        Liên hệ
                      </a>
                      <a
                        href="/#lai-thu"
                        className={cn(
                          buttonVariants({ variant: "outline", size: "sm" }),
                          "flex-1 border-[#001e50] text-[#001e50] hover:bg-[#001e50] hover:text-white text-xs justify-center"
                        )}
                      >
                        Lái thử
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View all button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/xe"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-[#001e50] hover:bg-blue-800 text-white px-10 gap-2"
            )}
          >
            Xem tất cả xe
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
