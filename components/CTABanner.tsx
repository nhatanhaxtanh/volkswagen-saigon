import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { PHONE, PHONE_HREF } from "@/lib/data";
import { Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-[#001e50] py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Sẵn sàng sở hữu chiếc Volkswagen mơ ước?
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Liên hệ ngay để được tư vấn miễn phí và đặt lịch lái thử hôm nay.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#lai-thu"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-blue-500 hover:bg-blue-400 text-white px-10 text-base font-semibold"
            )}
          >
            Đăng ký lái thử
          </a>
          <a
            href={PHONE_HREF}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white text-white hover:bg-white hover:text-[#001e50] px-10 text-base font-semibold bg-transparent"
            )}
          >
            <Phone size={18} className="mr-2" />
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
