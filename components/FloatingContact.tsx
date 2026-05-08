"use client";

import { Phone } from "lucide-react";
import { PHONE_HREF, ZALO_URL } from "@/lib/data";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3">
      {/* Zalo */}
      <a
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        className="w-13 h-13 rounded-full bg-blue-500 hover:bg-blue-400 flex items-center justify-center shadow-xl transition-all hover:scale-110 touch-manipulation"
        style={{ width: 52, height: 52 }}
      >
        <span className="text-white font-bold text-xs">Zalo</span>
      </a>

      {/* Phone – pulse animation */}
      <a
        href={PHONE_HREF}
        aria-label="Gọi điện"
        className="rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-xl transition-all hover:scale-110 touch-manipulation relative"
        style={{ width: 52, height: 52 }}
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />
        <Phone size={22} className="text-white relative z-10" />
      </a>
    </div>
  );
}
