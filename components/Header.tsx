"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BASE_IMG, navLinks, PHONE, PHONE_HREF } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#001e50] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={`${BASE_IMG}/2025/04/2-png.webp`}
            alt="Volkswagen Thảo Điền"
            width={140}
            height={40}
            className="h-10 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
            unoptimized
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 text-white font-semibold text-sm hover:text-blue-300 transition-colors"
          >
            <Phone size={16} />
            {PHONE}
          </a>
          <a
            href="#lai-thu"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-blue-500 hover:bg-blue-400 text-white border-none"
            )}
          >
            Đăng ký lái thử
          </a>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="lg:hidden text-white p-2">
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#001e50] border-white/10 w-72 p-0">
            <div className="flex flex-col h-full pt-6">
              <div className="px-6 mb-6">
                <Image
                  src={`${BASE_IMG}/2025/04/2-png.webp`}
                  alt="Volkswagen Thảo Điền"
                  width={140}
                  height={40}
                  className="h-10 w-auto object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                  unoptimized
                />
              </div>
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors border-b border-white/10"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto px-6 pb-8 flex flex-col gap-3">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-white font-semibold text-sm"
                >
                  <Phone size={16} />
                  {PHONE}
                </a>
                <a
                  href="#lai-thu"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants(),
                    "bg-blue-500 hover:bg-blue-400 text-white w-full justify-center"
                  )}
                >
                  Đăng ký lái thử
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
