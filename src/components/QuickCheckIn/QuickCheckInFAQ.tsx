"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const QuickCheckInFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      id: 1,
      question: "QuickCheckIn có phù hợp với mọi loại hình nhà hàng không?",
      answer: "QuickCheckIn được thiết kế linh hoạt để phù hợp với mọi loại hình F&B từ quán ăn nhỏ, nhà hàng cao cấp đến chuỗi thức ăn nhanh. Hệ thống có thể tùy chỉnh theo nhu cầu cụ thể của từng mô hình kinh doanh."
    },
    {
      id: 2,
      question: "Thời gian triển khai QuickCheckIn mất bao lâu?",
      answer: "Thông thường, việc triển khai hoàn tất trong vòng 24-48 giờ. Đội ngũ kỹ thuật sẽ hỗ trợ setup, training và đảm bảo hệ thống hoạt động ổn định trước khi bàn giao."
    },
    {
      id: 3,
      question: "QuickCheckIn có tích hợp được với hệ thống POS hiện tại không?",
      answer: "Có, QuickCheckIn hỗ trợ tích hợp với hầu hết các hệ thống POS phổ biến như CUKCUK, KiotViet, Sapo, và nhiều hệ thống khác thông qua API. Đội ngũ kỹ thuật sẽ hỗ trợ tích hợp miễn phí."
    },
    {
      id: 4,
      question: "Dữ liệu khách hàng có được bảo mật an toàn không?",
      answer: "Tuyệt đối an toàn. QuickCheckIn tuân thủ các tiêu chuẩn bảo mật quốc tế ISO 27001, mã hóa dữ liệu end-to-end, và tuân thủ luật bảo vệ dữ liệu cá nhân của Việt Nam."
    },
    {
      id: 5,
      question: "Chi phí nâng cấp gói dịch vụ như thế nào?",
      answer: "Bạn có thể nâng cấp gói bất cứ lúc nào. Chi phí sẽ được tính theo tỷ lệ thời gian sử dụng còn lại trong chu kỳ thanh toán hiện tại. Không có phí setup bổ sung khi nâng cấp."
    },
    {
      id: 6,
      question: "QuickCheckIn có hỗ trợ đa ngôn ngữ không?",
      answer: "Hiện tại QuickCheckIn hỗ trợ Tiếng Việt và Tiếng Anh. Chúng tôi đang phát triển thêm các ngôn ngữ khác như Trung, Nhật, Hàn để phục vụ thị trường khách du lịch quốc tế."
    },
    {
      id: 7,
      question: "Có thể hủy dịch vụ bất cứ lúc nào không?",
      answer: "Có, bạn có thể hủy dịch vụ bất cứ lúc nào mà không mất phí phạt. Dữ liệu sẽ được xuất ra file backup trước khi xóa theo yêu cầu của khách hàng."
    },
    {
      id: 8,
      question: "QuickCheckIn có hoạt động offline không?",
      answer: "QuickCheckIn có chế độ offline cơ bản cho các tính năng thiết yếu như check-in QR code. Dữ liệu sẽ được đồng bộ tự động khi có kết nối internet trở lại."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Câu Hỏi Thường Gặp"
          paragraph="Những thắc mắc phổ biến về QuickCheckIn và giải đáp chi tiết từ đội ngũ chuyên gia."
          center
        />

        <div className="mx-auto max-w-4xl">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={faq.id}
                className="rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    <svg
                      className={`h-5 w-5 transform transition-transform duration-200 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index
                      ? "max-h-96 border-t border-gray-200 dark:border-gray-700"
                      : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-4">
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact support */}
          <div className="mt-12 text-center">
            <div className="rounded-lg bg-primary/5 p-8 dark:bg-gray-dark">
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Vẫn có câu hỏi khác?
              </h3>
              <p className="mb-6 text-base text-body-color">
                Đội ngũ tư vấn chuyên nghiệp của chúng tôi sẵn sàng hỗ trợ 24/7
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
                <a
                  href="mailto:admin@checkpay.vn"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90"
                >
                  📧 Email Hỗ Trợ
                </a>
                <a
                  href="tel:1900-XXX-XXX"
                  className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-base font-medium text-primary hover:bg-primary hover:text-white"
                >
                  📞 Hotline: 1900-XXX-XXX
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickCheckInFAQ;
