import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { ADDRESS, BASE_IMG, EMAIL, navLinks, PHONE, PHONE_HREF, ZALO_URL } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src={`${BASE_IMG}/2025/04/2-png.webp`}
              alt="Volkswagen Thảo Điền"
              width={160}
              height={44}
              className="h-12 w-auto object-contain mb-4"
              unoptimized
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Đại lý Volkswagen chính hãng tại TP.HCM. Chúng tôi cam kết mang
              đến trải nghiệm mua xe tốt nhất với dịch vụ chuyên nghiệp và
              tận tâm.
            </p>
            <div className="flex gap-4">
              {[
                { label: "Facebook", href: "#", icon: "f" },
                { label: "Instagram", href: "#", icon: "in" },
                { label: "YouTube", href: "#", icon: "yt" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center text-xs font-bold transition-colors"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-start gap-3 text-gray-400 hover:text-white text-sm transition-colors group"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0 group-hover:text-blue-400" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-white text-sm transition-colors group"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 group-hover:text-blue-400" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <span>{ADDRESS}</span>
              </li>
            </ul>

            {/* Map embed */}
            <div className="mt-4 rounded-lg overflow-hidden h-36">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1782085613064!2d106.74693!3d10.8096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527e6a0a7e2bd%3A0x0!2s507C+Vo+Nguyen+Giap%2C+An+Khanh%2C+Thu+Duc!5e0!3m2!1sen!2svn!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2025 Volkswagen Thảo Điền. Bảo lưu mọi quyền.
          </p>
          <p className="text-gray-500 text-xs">
            507C Võ Nguyễn Giáp, An Khánh, Thủ Đức, TP.HCM
          </p>
        </div>
      </div>
    </footer>
  );
}
