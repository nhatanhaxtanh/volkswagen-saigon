import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cars, PHONE, PHONE_HREF, ZALO_URL } from "@/lib/data";
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
  return {
    title: `${car.name} – Giá ${car.price} | Volkswagen Sài Gòn`,
    description: car.desc,
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

  return <CarDetailClient car={car} related={related} />;
}
