import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { news, SITE_URL } from "@/lib/data";

export function generateStaticParams() {
  return news.map((article) => ({ id: article.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = news.find((a) => a.id === id);
  if (!article) return {};
  const url = `${SITE_URL}/tin-tuc/${article.id}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = news.find((a) => a.id === id);
  if (!article) notFound();

  const related = news.filter((a) => a.id !== article.id);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    publisher: {
      "@type": "Organization",
      name: "Volkswagen Sài Gòn",
      url: SITE_URL,
    },
    url: `${SITE_URL}/tin-tuc/${article.id}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Hero */}
        <div className="bg-[#001e50] py-10">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/#tin-tuc"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-5 transition-colors"
            >
              <ArrowLeft size={15} />
              Tin tức & Sự kiện
            </Link>
            <div className="flex items-center gap-2 text-blue-300 text-xs font-medium mb-3">
              <Calendar size={13} />
              {article.date}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              {article.title}
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* Featured image */}
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </div>

          {/* Article content */}
          <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 prose-custom">
            {article.content.map((block, i) => {
              if (block.type === "h2")
                return (
                  <h2 key={i} className="text-xl md:text-2xl font-bold text-[#001e50] mt-8 mb-3 first:mt-0">
                    {block.text}
                  </h2>
                );
              if (block.type === "h3")
                return (
                  <h3 key={i} className="text-lg font-bold text-[#001e50] mt-6 mb-2">
                    {block.text}
                  </h3>
                );
              if (block.type === "ul")
                return (
                  <ul key={i} className="my-4 space-y-2 pl-1">
                    {block.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              return (
                <p key={i} className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                  {block.text}
                </p>
              );
            })}
          </article>

          {/* Related articles */}
          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="text-xl font-bold text-[#001e50] mb-6">Bài viết liên quan</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((a) => (
                  <Link
                    key={a.id}
                    href={`/tin-tuc/${a.id}`}
                    className="group flex gap-4 bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative w-32 flex-shrink-0">
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        unoptimized
                      />
                    </div>
                    <div className="py-4 pr-4 flex flex-col justify-center">
                      <p className="text-blue-500 text-xs mb-1">{a.date}</p>
                      <h3 className="text-sm font-bold text-[#001e50] leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                        {a.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
