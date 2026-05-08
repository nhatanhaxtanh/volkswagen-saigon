import { reviews, BASE_IMG } from "@/lib/data";
import Image from "next/image";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">★</span>
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-2">
            Khách hàng nói gì
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001e50]">
            Đánh giá từ khách hàng
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <Stars count={r.rating} />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6 italic">
                &ldquo;{r.comment}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <Image
                    src={`${BASE_IMG}/2024/11/Anh-dai-dien.webp`}
                    alt={r.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#001e50] text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">Đã mua {r.car}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
