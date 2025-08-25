import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const QuickCheckInPricing = () => {
  const pricingData = [
    {
      id: 1,
      name: "Starter",
      price: "990.000",
      period: "VNĐ/tháng",
      description: "Phù hợp cho nhà hàng nhỏ, quán ăn",
      features: [
        "Quản lý review cơ bản",
        "QR Check-in",
        "Marketing email tự động",
        "Báo cáo cơ bản",
        "Hỗ trợ 8/5",
        "Tối đa 100 khách/tháng",
      ],
      recommended: false,
    },
    {
      id: 2,
      name: "Professional", 
      price: "2.490.000",
      period: "VNĐ/tháng",
      description: "Lý tưởng cho nhà hàng trung bình",
      features: [
        "Tất cả tính năng Starter",
        "AI phân tích review",
        "Marketing automation nâng cao",
        "Social media integration",
        "Loyalty program",
        "Báo cáo chi tiết",
        "Hỗ trợ 24/7",
        "Không giới hạn khách hàng",
      ],
      recommended: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: "Custom",
      period: "Liên hệ",
      description: "Giải pháp toàn diện cho chuỗi F&B",
      features: [
        "Tất cả tính năng Professional",
        "Multi-location management",
        "Advanced analytics & BI",
        "Custom integration",
        "Dedicated account manager",
        "On-site training",
        "White-label solution",
        "Priority support",
      ],
      recommended: false,
    },
  ];

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Bảng Giá QuickCheckIn"
          paragraph="Chọn gói phù hợp với quy mô nhà hàng của bạn. Tất cả gói đều bao gồm dùng thử miễn phí 30 ngày."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((pricing) => (
            <div key={pricing.id} className="w-full">
              <div
                className={`relative z-10 rounded-xl bg-white px-8 py-10 shadow-signUp dark:bg-gray-dark ${
                  pricing.recommended
                    ? "border-2 border-primary"
                    : ""
                }`}
              >
                {pricing.recommended && (
                  <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2 transform">
                    <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                      🔥 Phổ Biến Nhất
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
                    {pricing.name}
                  </h3>
                  <p className="mb-6 text-base text-body-color">
                    {pricing.description}
                  </p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-black dark:text-white">
                      {pricing.price}
                    </span>
                    <span className="text-base text-body-color">
                      {pricing.period}
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <ul className="space-y-3">
                    {pricing.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                          <svg
                            className="h-3 w-3 text-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-base text-body-color">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <Link
                    href="/register"
                    className={`inline-block rounded-md px-7 py-3 text-center text-base font-medium transition duration-300 ${
                      pricing.recommended
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-gray-2 text-body-color hover:bg-primary hover:text-white"
                    }`}
                  >
                    {pricing.name === "Enterprise" ? "Liên Hệ Tư Vấn" : "Bắt Đầu Ngay"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-base text-body-color">
            💳 Thanh toán linh hoạt: Thẻ tín dụng, chuyển khoản, ví điện tử
          </p>
          <p className="text-base text-body-color">
            🔄 Hủy bất cứ lúc nào, không ràng buộc hợp đồng dài hạn
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuickCheckInPricing;
