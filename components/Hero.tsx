import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { BASE_IMG, PHONE, PHONE_HREF } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#001e50] overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={`${BASE_IMG}/2025/05/Volkswagen-Tiguan-Platinum-WHITE.webp`}
          alt="Volkswagen Tiguan Platinum"
          fill
          className="object-cover object-center opacity-40"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001e50]/90 via-[#001e50]/60 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 w-full">
        <div className="max-w-2xl">
          <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-4">
            Volkswagen Thảo Điền
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Khám phá trải nghiệm
            <span className="block text-blue-400">lái xe tuyệt vời</span>
          </h1>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Showroom Volkswagen chính hãng tại TP.HCM. Tư vấn chuyên nghiệp,
            lái thử miễn phí, hỗ trợ vay vốn lên đến 85% giá trị xe.
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

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-md">
            {[
              { value: "10+", label: "Dòng xe" },
              { value: "85%", label: "Hỗ trợ vay" },
              { value: "100%", label: "Chính hãng" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-blue-400">{s.value}</p>
                <p className="text-white/70 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <div className="w-px h-12 bg-white/30 animate-pulse" />
        <span className="text-xs">Cuộn xuống</span>
      </div>
    </section>
  );
}
