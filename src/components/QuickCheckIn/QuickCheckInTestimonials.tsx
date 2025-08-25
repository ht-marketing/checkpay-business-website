import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "../Testimonials/SingleTestimonial";

const testimonialsData: Testimonial[] = [
  // {
  //   id: 1,
  //   name: "Nguyễn Minh Hoàng",
  //   designation: "Chủ Nhà Hàng Pho24",
  //   content:
  //     "QuickCheckIn đã thay đổi hoàn toàn cách chúng tôi tương tác với khách hàng. Doanh thu tăng 45% trong 6 tháng đầu nhờ hệ thống marketing tự động.",
  //   image: "/images/testimonials/auth-01.png",
  //   star: 5,
  // },
  // {
  //   id: 2,
  //   name: "Trần Thị Lan",
  //   designation: "Quản Lý Chuỗi Highlands Coffee",
  //   content:
  //     "Tính năng quản lý review thông minh giúp chúng tôi nâng cao rating từ 4.2 lên 4.8 sao chỉ trong 3 tháng. Khách hàng rất hài lòng với trải nghiệm check-in nhanh chóng.",
  //   image: "/images/testimonials/auth-02.png",
  //   star: 5,
  // },
  // {
  //   id: 3,
  //   name: "Lê Văn Đức",
  //   designation: "CEO KFC Việt Nam",
  //   content:
  //     "Hệ thống loyalty program của QuickCheckIn giúp chúng tôi giữ chân khách hàng hiệu quả. Tỷ lệ khách hàng quay lại tăng 80% so với trước đây.",
  //   image: "/images/testimonials/auth-03.png",
  //   star: 5,
  // },
];

const QuickCheckInTestimonials = () => {
  return (
    <section className="relative z-10 bg-gray-light py-16 dark:bg-gray-dark md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Khách Hàng Nói Gì Về QuickCheckIn"
          paragraph="Hàng nghìn nhà hàng đã tin tưởng và đạt được thành công với QuickCheckIn. Đây là những chia sẻ thật từ các đối tác của chúng tôi."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id}>
              <SingleTestimonial testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Case Study Section */}
        <div className="mt-16">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800 lg:p-12">
              <h3 className="mb-6 text-center text-2xl font-bold text-black dark:text-white lg:text-3xl">
                📈 Case Study: Nhà Hàng Món Huế
              </h3>
              
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    Thách Thức
                  </h4>
                  <ul className="space-y-2 text-body-color">
                    <li>• Rating thấp (3.8 sao) trên các platform</li>
                    <li>• Chi phí marketing cao không hiệu quả</li>
                    <li>• Thiếu dữ liệu khách hàng để phân tích</li>
                    <li>• Quy trình check-in chậm chạp</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    Kết Quả Sau 6 Tháng
                  </h4>
                  <ul className="space-y-2 text-body-color">
                    <li>• ⭐ Rating tăng lên 4.7 sao</li>
                    <li>• 📈 Doanh thu tăng 52%</li>
                    <li>• 💰 Giảm 40% chi phí marketing</li>
                    <li>• 👥 Tăng 90% khách hàng thân thiết</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <blockquote className="text-lg italic text-body-color">
                  "QuickCheckIn không chỉ là công cụ, mà là đối tác chiến lược giúp chúng tôi 
                  xây dựng thương hiệu mạnh mẽ trong ngành F&B"
                </blockquote>
                <cite className="mt-4 block text-sm font-semibold text-black dark:text-white">
                  - Nguyễn Văn An, Chủ Nhà Hàng Món Huế
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickCheckInTestimonials;
