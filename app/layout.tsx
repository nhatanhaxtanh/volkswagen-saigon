import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Volkswagen Thảo Điền – Đại lý VW chính hãng tại TP.HCM",
  description:
    "Showroom Volkswagen Thảo Điền – Mua xe VW chính hãng, tư vấn miễn phí, lái thử tận nơi, hỗ trợ vay 85%. Hotline: 076 4949837",
  keywords: "Volkswagen, VW, Thảo Điền, mua xe, Tiguan, Teramont, Viloran, Touareg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
