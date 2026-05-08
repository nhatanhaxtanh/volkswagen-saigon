import { Users, CarFront, Truck, BadgePercent } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Tư vấn chuyên nghiệp",
    desc: "Đội ngũ tư vấn viên được đào tạo bài bản, hỗ trợ bạn chọn xe phù hợp nhất.",
  },
  {
    icon: CarFront,
    title: "Lái thử miễn phí",
    desc: "Trải nghiệm cảm giác lái xe Volkswagen hoàn toàn miễn phí tại showroom.",
  },
  {
    icon: Truck,
    title: "Giao xe tận nhà",
    desc: "Dịch vụ giao xe tận nơi, tiết kiệm thời gian quý báu của bạn.",
  },
  {
    icon: BadgePercent,
    title: "Hỗ trợ vay 85%",
    desc: "Thủ tục nhanh gọn, hỗ trợ vay vốn lên đến 85% giá trị xe với lãi suất ưu đãi.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="dich-vu" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-2">
            Tại sao chọn chúng tôi
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001e50]">
            Dịch vụ vượt trội
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Chúng tôi cam kết mang đến trải nghiệm mua xe tốt nhất với dịch vụ hàng đầu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="text-center group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#001e50] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 transition-colors">
                  <Icon size={28} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#001e50] text-lg mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
