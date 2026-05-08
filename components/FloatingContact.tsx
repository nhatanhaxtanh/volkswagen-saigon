"use client";

import { Phone } from "lucide-react";
import { PHONE_HREF, ZALO_URL } from "@/lib/data";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Zalo */}
      <a
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-blue-500 hover:bg-blue-400 flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Chat Zalo"
        style={{ width: 52, height: 52 }}
      >
        <span className="text-white font-bold text-sm">Zalo</span>
      </a>

      {/* Phone */}
      <a
        href={PHONE_HREF}
        className="w-13 h-13 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-lg transition-all hover:scale-110 animate-pulse"
        aria-label="Gọi điện"
        style={{ width: 52, height: 52 }}
      >
        <Phone size={22} className="text-white" />
      </a>
    </div>
  );
}
