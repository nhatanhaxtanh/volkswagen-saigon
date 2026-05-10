import { MetadataRoute } from "next";
import { cars, news, SITE_URL } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const carPages = cars.map((car) => ({
    url: `${SITE_URL}${car.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const newsPages = news.map((article) => ({
    url: `${SITE_URL}/tin-tuc/${article.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/xe`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...carPages,
    ...newsPages,
  ];
}
