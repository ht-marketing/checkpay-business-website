const QuickCheckInStats = () => {
  const stats = [
    {
      id: 1,
      number: "2,500+",
      title: "Nhà Hàng Đối Tác",
      description: "Tin tưởng sử dụng QuickCheckIn",
    },
    {
      id: 2,
      number: "98%",
      title: "Khách Hàng Hài Lòng",
      description: "Đánh giá tích cực về dịch vụ",
    },
    {
      id: 3,
      number: "40%",
      title: "Tăng Trưởng Doanh Thu",
      description: "Trung bình trong 6 tháng đầu",
    },
    {
      id: 4,
      number: "24/7",
      title: "Hỗ Trợ Khách Hàng",
      description: "Đội ngũ tư vấn chuyên nghiệp",
    },
  ];

  return (
    <section className="bg-primary bg-opacity-5 py-16 dark:bg-gray-dark md:py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="wow fadeInUp" data-wow-delay=".1s">
                <div className="mb-4 text-4xl font-bold text-primary lg:text-5xl">
                  {stat.number}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                  {stat.title}
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional section about ROI */}
        <div className="mt-16 text-center">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white lg:text-3xl">
              Lợi Tức Đầu Tư Ấn Tượng
            </h3>
            <p className="mx-auto max-w-3xl text-base text-body-color dark:text-body-color-dark lg:text-lg">
              QuickCheckIn không chỉ giúp tối ưu hóa hoạt động kinh doanh mà còn mang lại 
              ROI ấn tượng thông qua việc tăng cường trải nghiệm khách hàng và tự động hóa marketing.
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
                <div className="text-2xl font-bold text-green-500">ROI 300%</div>
                <div className="text-sm text-body-color">Trong 12 tháng đầu</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
                <div className="text-2xl font-bold text-blue-500">-60%</div>
                <div className="text-sm text-body-color">Chi phí marketing</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-dark">
                <div className="text-2xl font-bold text-purple-500">+85%</div>
                <div className="text-sm text-body-color">Khách hàng quay lại</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickCheckInStats;
