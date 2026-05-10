import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cars, PHONE, PHONE_HREF, ZALO_URL, SITE_URL } from "@/lib/data";
import CarDetailClient from "./CarDetailClient";

export function generateStaticParams() {
  return cars.map((car) => ({ id: car.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const car = cars.find((c) => c.id === id);
  if (!car) return {};
  const url = `${SITE_URL}${car.href}`;
  return {
    title: `${car.name} – Giá ${car.price}`,
    description: car.desc,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${car.name} – Giá ${car.price} | Volkswagen Sài Gòn`,
      description: car.desc,
      images: [{ url: car.image, width: 1200, height: 630, alt: car.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${car.name} – Giá ${car.price} | Volkswagen Sài Gòn`,
      description: car.desc,
      images: [car.image],
    },
  };
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const car = cars.find((c) => c.id === id);
  if (!car) notFound();

  const related = cars.filter((c) => c.id !== car.id).slice(0, 4);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: car.name,
    description: car.desc,
    image: car.image,
    brand: { "@type": "Brand", name: "Volkswagen" },
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      price: car.price.replace(/\D/g, ""),
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}${car.href}`,
      seller: { "@type": "AutoDealer", name: "Volkswagen Sài Gòn" },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Các dòng xe", item: `${SITE_URL}/xe` },
      { "@type": "ListItem", position: 3, name: car.name, item: `${SITE_URL}${car.href}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CarDetailClient car={car} related={related} />
    </>
  );
}
