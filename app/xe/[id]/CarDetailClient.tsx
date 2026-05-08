"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { PHONE, PHONE_HREF, ZALO_URL, type Car } from "@/lib/data";

export default function CarDetailClient({
  car,
  related,
}: {
  car: Car;
  related: Car[];
}) {
  const [activeImg, setActiveImg] = useState(0);

  const prevImg = () => setActiveImg((i) => (i === 0 ? car.gallery.length - 1 : i - 1));
  const nextImg = () => setActiveImg((i) => (i === car.gallery.length - 1 ? 0 : i + 1));

  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      {/* Breadcrumb */}
      <div className="bg-[#001e50]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-1.5 text-xs md:text-sm text-white/60 overflow-hidden">
          <Link href="/" className="hover:text-white transition-colors shrink-0">Trang chủ</Link>
          <span>/</span>
          <Link href="/xe" className="hover:text-white transition-colors shrink-0">Các dòng xe</Link>
          <span>/</span>
          <span className="text-white truncate">{car.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-16">

          {/* ── Gallery ── */}
          <div className="space-y-3">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white shadow-md">
              <Image
                src={car.gallery[activeImg]}
                alt={car.name}
                fill
                className="object-cover transition-all duration-500"
                unoptimized
                priority
              />
              {car.gallery.length > 1 && (
                <>
                  {/* Always visible on mobile, hover on desktop */}
                  <button
                    onClick={prevImg}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-white touch-manipulation"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-white touch-manipulation"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
              <div className="absolute bottom-3 right-3 bg-black/40 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
                {activeImg + 1} / {car.gallery.length}
              </div>
            </div>

            {/* Thumbnails */}
            {car.gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {car.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={cn(
                      "relative flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 transition-all touch-manipulation",
                      i === activeImg ? "border-blue-600" : "border-transparent opacity-50"
                    )}
                  >
                    <Image src={img} alt="" fill className="object-cover" unoptimized />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Info ── */}
          <div className="flex flex-col">
            {car.badge && (
              <Badge className="bg-blue-600 text-white w-fit mb-3">{car.badge}</Badge>
            )}
            <h1 className="text-xl md:text-3xl font-bold text-[#001e50] leading-tight mb-1">
              {car.name}
            </h1>
            <p className="text-gray-500 text-sm mb-4">{car.tagline}</p>

            {/* Price */}
            <div className="bg-blue-50 rounded-xl p-4 mb-4">
              {car.originalPrice && (
                <p className="text-gray-400 text-sm line-through">{car.originalPrice}</p>
              )}
              <p className="text-2xl font-bold text-blue-600">{car.price}</p>
              {car.originalPrice && (
                <p className="text-green-600 text-xs font-medium mt-0.5">
                  Tiết kiệm{" "}
                  {(
                    (parseInt(car.originalPrice.replace(/\D/g, "")) -
                      parseInt(car.price.replace(/\D/g, ""))) /
                    1_000_000
                  ).toLocaleString()}
                  .000.000 ₫ so với giá niêm yết
                </p>
              )}
              <p className="text-gray-500 text-xs mt-1">Giá chưa bao gồm phí đường bộ & bảo hiểm</p>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-5">{car.desc}</p>

            {/* CTA */}
            <div className="flex gap-3 mb-3">
              <a
                href={PHONE_HREF}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "flex-1 bg-[#001e50] hover:bg-blue-800 text-white gap-2 justify-center text-sm"
                )}
              >
                <Phone size={16} />
                <span className="hidden sm:inline">Gọi </span>{PHONE}
              </a>
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "flex-1 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white gap-2 justify-center text-sm"
                )}
              >
                <MessageCircle size={16} />
                Zalo
              </a>
            </div>
            <a
              href="/#lai-thu"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full bg-blue-500 hover:bg-blue-400 text-white justify-center"
              )}
            >
              Đăng ký lái thử miễn phí
            </a>

            {/* Quick specs */}
            <div className="grid grid-cols-2 gap-2 md:gap-3 mt-5">
              {car.specs.slice(0, 4).map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-3 border border-gray-100">
                  <p className="text-gray-400 text-xs mb-0.5">{s.label}</p>
                  <p className="text-[#001e50] font-semibold text-xs md:text-sm">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Specs + Features ── */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-[#001e50] mb-4 pb-2 border-b border-gray-200">
              Thông số kỹ thuật
            </h2>
            <div className="rounded-xl overflow-hidden border border-gray-100">
              {car.specs.map((s, i) => (
                <div
                  key={s.label}
                  className={cn(
                    "flex justify-between px-4 py-3 text-sm gap-4",
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  )}
                >
                  <span className="text-gray-500 shrink-0">{s.label}</span>
                  <span className="font-semibold text-[#001e50] text-right">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-bold text-[#001e50] mb-4 pb-2 border-b border-gray-200">
              Trang bị nổi bật
            </h2>
            <div className="space-y-2.5">
              {car.features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Related ── */}
        {related.length > 0 && (
          <div>
            <h2 className="text-lg md:text-xl font-bold text-[#001e50] mb-5 pb-2 border-b border-gray-200">
              Xe khác tại showroom
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {related.map((c) => (
                <Link
                  key={c.id}
                  href={c.href}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group"
                >
                  <div className="relative h-28 md:h-36 overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="p-2.5 md:p-3">
                    <p className="text-[#001e50] font-semibold text-xs leading-snug line-clamp-2 mb-1">
                      {c.name}
                    </p>
                    <p className="text-blue-600 font-bold text-xs md:text-sm">{c.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
