"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BASE_IMG, cars } from "@/lib/data";
import Image from "next/image";

export default function TestDriveForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", car: "", note: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="lai-thu" className="relative py-14 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={`${BASE_IMG}/2025/05/93.webp`}
          alt="Volkswagen interior"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#001e50]/85" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left content */}
        <div className="text-white">
          <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-3">
            Hoàn toàn miễn phí
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Đăng ký lái thử xe
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Trải nghiệm cảm giác lái xe Volkswagen thực thụ. Chúng tôi sẽ liên
            hệ xác nhận lịch hẹn trong vòng 24 giờ.
          </p>
          <ul className="space-y-3">
            {[
              "Lái thử tại showroom hoặc tận nhà",
              "Tư vấn viên đồng hành trong suốt quá trình",
              "Không áp lực, không phí phát sinh",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/80">
                <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#001e50] mb-2">
                Đăng ký thành công!
              </h3>
              <p className="text-gray-500">
                Chúng tôi sẽ liên hệ bạn trong vòng 24 giờ để xác nhận lịch lái thử.
              </p>
              <button
                className={cn(
                  buttonVariants(),
                  "mt-6 bg-[#001e50] hover:bg-blue-800 text-white"
                )}
                onClick={() => setSubmitted(false)}
              >
                Đăng ký lại
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-xl font-bold text-[#001e50] mb-2">
                Điền thông tin đăng ký
              </h3>
              <div>
                <Label htmlFor="name" className="text-[#001e50] font-medium mb-1.5 block">
                  Họ và tên *
                </Label>
                <Input
                  id="name"
                  placeholder="Nguyễn Văn A"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border-gray-200 focus:border-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-[#001e50] font-medium mb-1.5 block">
                  Số điện thoại *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="0xxxxxxxxx"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="border-gray-200 focus:border-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="car" className="text-[#001e50] font-medium mb-1.5 block">
                  Xe muốn lái thử
                </Label>
                <select
                  id="car"
                  value={form.car}
                  onChange={(e) => setForm({ ...form, car: e.target.value })}
                  className="w-full h-10 px-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="">-- Chọn dòng xe --</option>
                  {cars.map((car) => (
                    <option key={car.id} value={car.name}>
                      {car.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="note" className="text-[#001e50] font-medium mb-1.5 block">
                  Ghi chú
                </Label>
                <textarea
                  id="note"
                  placeholder="Thời gian mong muốn, câu hỏi..."
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              <button
                type="submit"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-[#001e50] hover:bg-blue-800 text-white h-12 text-base font-semibold justify-center"
                )}
              >
                Đăng ký ngay
              </button>
              <p className="text-xs text-gray-400 text-center">
                Thông tin của bạn được bảo mật hoàn toàn
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
