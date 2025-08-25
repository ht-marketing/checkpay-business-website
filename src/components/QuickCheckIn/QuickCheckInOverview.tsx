import SectionTitle from "../Common/SectionTitle";

const QuickCheckInOverview = () => {
  return (
    <section id="overview" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Tổng Quan QuickCheckIn"
          paragraph="Giải pháp toàn diện cho nhà hàng hiện đại - từ quản lý review đến marketing tự động và trải nghiệm check-in không giới hạn."
          center
        />

        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-blue-600/10 p-8">
                <div className="h-full w-full rounded-2xl bg-white dark:bg-gray-dark shadow-lg p-6">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-2">QuickCheckIn Dashboard</div>
                      <div className="text-sm text-body-color">Tổng quan hoạt động F&B</div>
                    </div>

                    {/* Review Management */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-black dark:text-white">Quản Lý Review</h4>
                        <p className="text-sm text-body-color">AI phân tích sentiment</p>
                        <div className="mt-2 flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="text-xs text-green-600">Rating: 4.8/5.0</span>
                        </div>
                      </div>
                    </div>

                    {/* Marketing Automation */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-black dark:text-white">Marketing Tự Động</h4>
                        <p className="text-sm text-body-color">Campaign thông minh</p>
                        <div className="mt-2 flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                          <span className="text-xs text-blue-600">ROI: +245%</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Check-in */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-black dark:text-white">Check-in Nhanh</h4>
                        <p className="text-sm text-body-color">QR Code liền mạch</p>
                        <div className="mt-2 flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                          <span className="text-xs text-purple-600">Thời gian: 3 giây</span>
                        </div>
                      </div>
                    </div>

                    {/* Mini stats */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-primary">98%</div>
                          <div className="text-xs text-body-color">Hài lòng</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-500">+40%</div>
                          <div className="text-xs text-body-color">Doanh thu</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="mt-10 lg:mt-0">
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  🎯 Tối Ưu Trải Nghiệm Khách Hàng
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  QuickCheckIn tích hợp hoàn hảo giữa công nghệ và trải nghiệm khách hàng, 
                  giúp nhà hàng xây dựng mối quan hệ bền vững với thực khách.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  📊 Phân Tích Dữ Liệu Thông Minh
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Hệ thống AI phân tích hành vi khách hàng, đưa ra insights để tối ưu 
                  chiến lược marketing và nâng cao chất lượng dịch vụ.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  🚀 Tăng Trưởng Doanh Thu
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Với các tính năng marketing tự động và quản lý review hiệu quả, 
                  nhà hàng có thể tăng trưởng doanh thu lên đến 40% trong 6 tháng đầu.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-body-color">Hài Lòng Khách Hàng</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">40%</div>
                  <div className="text-sm text-body-color">Tăng Doanh Thu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickCheckInOverview;
