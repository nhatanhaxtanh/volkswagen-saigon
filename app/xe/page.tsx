import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { cars, PHONE_HREF } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Các dòng xe Volkswagen – Showroom Sài Gòn",
  description: "Danh sách đầy đủ các dòng xe Volkswagen tại Showroom Sài Gòn: Tiguan, Teramont, Touareg, Viloran. Liên hệ 076 4949837.",
};

export default function XePage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      {/* Page header */}
      <div className="bg-[#001e50] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft size={15} />
            Trang chủ
          </Link>
          <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-2">
            Showroom Volkswagen Sài Gòn
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Tất cả dòng xe Volkswagen
          </h1>
          <p className="text-white/60 mt-2 text-sm">
            {cars.length} dòng xe · Hỗ trợ vay đến 85% · Lái thử miễn phí
          </p>
        </div>
      </div>

      {/* Car grid */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
            >
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
              <div className="p-5 flex flex-col flex-1">
                <h2 className="font-bold text-[#001e50] text-sm leading-snug mb-3 flex-1">
                  {car.name}
                </h2>
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
          ))}
        </div>
      </div>
    </main>
  );
}
