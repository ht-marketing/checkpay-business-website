import Link from "next/link";

const QuickCheckInCTA = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="relative z-10 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-blue-600 px-8 py-12 md:p-[70px]">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <span className="mb-4 block text-base font-semibold text-white">
                🚀 Sẵn Sàng Tăng Trưởng?
              </span>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                Bắt Đầu Hành Trình
                <br className="xs:block hidden" />
                Thành Công Với QuickCheckIn
              </h2>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="text-center lg:text-right">
                <p className="mb-8 text-base font-medium text-white/80">
                  Tham gia cùng hàng nghìn nhà hàng đã thành công với QuickCheckIn. 
                  Dùng thử miễn phí 30 ngày, không cần thẻ tín dụng.
                </p>
                
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-end">
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3 text-center text-base font-medium text-primary shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-primary"
                  >
                    Dùng Thử Miễn Phí 30 Ngày
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-7 py-3 text-center text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-primary"
                  >
                    Tư Vấn Miễn Phí
                  </Link>
                </div>

                <div className="mt-6 text-center lg:text-right">
                  <p className="text-sm text-white/60">
                    ✓ Hỗ trợ setup miễn phí &nbsp;&nbsp; ✓ Không ràng buộc hợp đồng &nbsp;&nbsp; ✓ Hỗ trợ 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div>
            <span className="absolute left-4 top-4 -z-[1]">
              <svg
                width="50"
                height="79"
                viewBox="0 0 50 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="47.7119"
                  cy="76.9617"
                  r="1.74121"
                  transform="rotate(180 47.7119 76.9617)"
                  fill="white"
                  fillOpacity="0.08"
                />
                <circle
                  cx="47.7119"
                  cy="61.6385"
                  r="1.74121"
                  transform="rotate(180 47.7119 61.6385)"
                  fill="white"
                  fillOpacity="0.08"
                />
                <circle
                  cx="47.7119"
                  cy="46.3163"
                  r="1.74121"
                  transform="rotate(180 47.7119 46.3163)"
                  fill="white"
                  fillOpacity="0.08"
                />
                <circle
                  cx="47.7119"
                  cy="30.9951"
                  r="1.74121"
                  transform="rotate(180 47.7119 30.9951)"
                  fill="white"
                  fillOpacity="0.08"
                />
                <circle
                  cx="47.7119"
                  cy="15.6719"
                  r="1.74121"
                  transform="rotate(180 47.7119 15.6719)"
                  fill="white"
                  fillOpacity="0.08"
                />
              </svg>
            </span>
            <span className="absolute bottom-4 right-4 -z-[1]">
              <svg
                width="50"
                height="79"
                viewBox="0 0 50 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="2.28808"
                  cy="2.03827"
                  r="1.74121"
                  fill="white"
                  fillOpacity="0.08"
                />
                <circle
                  cx="2.28808"
                  cy="17.3615"
                  r="1.74121"
                  fill="white"
                  fillOpacity="0.08"
                />
                <circle
                  cx="2.28808"
                  cy="32.6837"
                  r="1.74121"
                  fill="white"
                  fillOpacity="0.08"
                />
                <circle
                  cx="2.28808"
                  cy="48.0049"
                  r="1.74121"
                  fill="white"
                  fillOpacity="0.08"
                />
                <circle
                  cx="2.28808"
                  cy="63.3281"
                  r="1.74121"
                  fill="white"
                  fillOpacity="0.08"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Additional info section */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
              Setup Nhanh Chóng
            </h3>
            <p className="text-base text-body-color">
              Triển khai trong 24h với đội ngũ hỗ trợ chuyên nghiệp
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
              <svg className="h-8 w-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
              Bảo Mật Tối Đa
            </h3>
            <p className="text-base text-body-color">
              Dữ liệu được bảo vệ với chuẩn bảo mật quốc tế ISO 27001
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
              <svg className="h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
              Hiệu Suất Cao
            </h3>
            <p className="text-base text-body-color">
              Uptime 99.9% đảm bảo hoạt động ổn định 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickCheckInCTA;
