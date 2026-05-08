import Image from "next/image";
import { news } from "@/lib/data";

export default function LatestNews() {
  return (
    <section id="tin-tuc" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-2">
            Cập nhật mới nhất
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001e50]">
            Tin tức & Sự kiện
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article) => (
            <article
              key={article.title}
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-5">
                <p className="text-blue-500 text-xs font-medium mb-2">{article.date}</p>
                <h3 className="font-bold text-[#001e50] text-base leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <button className="mt-4 text-blue-600 text-sm font-semibold hover:underline">
                  Đọc thêm →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
