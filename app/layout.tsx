import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { SITE_URL, PHONE, ADDRESS, EMAIL } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Volkswagen Sài Gòn – Đại lý VW chính hãng tại TP.HCM",
    template: "%s | Volkswagen Sài Gòn",
  },
  description:
    "Showroom Volkswagen Sài Gòn – Mua xe VW chính hãng, tư vấn miễn phí, lái thử tận nơi, hỗ trợ vay 85%. Hotline: 076 4949837",
  keywords: "Volkswagen, VW, Sài Gòn, mua xe, Tiguan, Teramont, Viloran, Touareg",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: "Volkswagen Sài Gòn",
    title: "Volkswagen Sài Gòn – Đại lý VW chính hãng tại TP.HCM",
    description:
      "Showroom Volkswagen Sài Gòn – Mua xe VW chính hãng, tư vấn miễn phí, lái thử tận nơi, hỗ trợ vay 85%. Hotline: 076 4949837",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Volkswagen Sài Gòn" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volkswagen Sài Gòn – Đại lý VW chính hãng tại TP.HCM",
    description:
      "Showroom Volkswagen Sài Gòn – Mua xe VW chính hãng, tư vấn miễn phí, lái thử tận nơi, hỗ trợ vay 85%.",
    images: ["/og-default.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Volkswagen Sài Gòn",
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "507C Võ Nguyễn Giáp, An Khánh",
    addressLocality: "Thủ Đức",
    addressRegion: "TP.HCM",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.8231,
    longitude: 106.7553,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "19:00",
  },
  sameAs: [`https://zalo.me/0764949837`],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
