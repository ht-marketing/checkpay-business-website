"use client";
import Link from "next/link";
import { useState } from "react";

const QuickCheckInHero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  QuickCheckIn
                  <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    {" "}All-in-One{" "}
                  </span>
                  cho Nhà Hàng
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Nền tảng tích hợp quản lý review, marketing thông minh và check-in nhanh chóng. 
                  Giúp nhà hàng tăng trưởng doanh thu và xây dựng thương hiệu hiệu quả.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/register"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🚀 Bắt Đầu Miễn Phí
                  </Link>
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="inline-flex items-center rounded-sm border border-body-color px-8 py-4 text-base font-semibold text-body-color duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white dark:border-white/60 dark:text-white dark:hover:border-primary dark:hover:bg-primary"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" className="mr-3">
                      <path fill="currentColor" d="M8 5v14l11-7z"/>
                    </svg>
                    Xem Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="102.5"
                y1="-149.5"
                x2="426.5"
                y2="204.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="101.24"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.64" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Video Modal would go here if needed */}
    </>
  );
};

export default QuickCheckInHero;
