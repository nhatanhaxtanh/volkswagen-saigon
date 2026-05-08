import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { cars, PHONE_HREF } from "@/lib/data";

export default function CarModels() {
  return (
    <section id="xe" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-2">
            Showroom Volkswagen Thảo Điền
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001e50]">
            Các dòng xe Volkswagen
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Đa dạng lựa chọn từ SUV, MPV đến Sedan – phù hợp mọi nhu cầu và phong cách sống.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-gray-100"
            >
              <div className="relative h-52 bg-gray-100 overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                {car.badge && (
                  <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
                    {car.badge}
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#001e50] text-sm leading-snug mb-2 line-clamp-2">
                  {car.name}
                </h3>
                <div className="mb-3">
                  {car.originalPrice && (
                    <p className="text-gray-400 text-xs line-through">
                      {car.originalPrice}
                    </p>
                  )}
                  <p className="text-blue-600 font-bold text-base">{car.price}</p>
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
                    href="#lai-thu"
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
    </section>
  );
}
