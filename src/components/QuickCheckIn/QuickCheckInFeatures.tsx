import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Quản Lý Review Thông Minh",
    paragraph: "AI tự động phân tích và đề xuất cách phản hồi review. Theo dõi rating và sentiment analysis để nâng cao chất lượng dịch vụ.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Marketing Automation",
    paragraph: "Tự động gửi email, SMS marketing dựa trên hành vi khách hàng. Tạo campaign nhắc nhở và ưu đãi cá nhân hóa.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 5v6h5l2 7h2l-2-7h6l2 7h2l-2-7h3V5H3zm5 9h4l2 5H8l2-5z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "QR Code Check-in",
    paragraph: "Khách hàng check-in nhanh chóng bằng QR code. Thu thập thông tin khách hàng và tích điểm loyalty tự động.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V9h9v12z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Báo Cáo Phân Tích",
    paragraph: "Dashboard trực quan với insights về khách hàng, doanh thu, và hiệu quả marketing. Xuất báo cáo chi tiết.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Loyalty Program",
    paragraph: "Hệ thống tích điểm và ưu đãi tự động. Khuyến khích khách hàng quay lại với các chương trình loyalty hấp dẫn.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Social Media Integration",
    paragraph: "Tích hợp Facebook, Instagram, Google. Tự động đăng bài, chia sẻ review tích cực và quản lý presence trên mạng xã hội.",
  },
];

const QuickCheckInFeatures = () => {
  return (
    <section id="features" className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <div key={feature.id} className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {feature.title}
                </h3>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                  {feature.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickCheckInFeatures;
