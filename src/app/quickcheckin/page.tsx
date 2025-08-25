import QuickCheckInHero from "@/components/QuickCheckIn/QuickCheckInHero";
import QuickCheckInOverview from "@/components/QuickCheckIn/QuickCheckInOverview";
import QuickCheckInFeatures from "@/components/QuickCheckIn/QuickCheckInFeatures";
import QuickCheckInStats from "@/components/QuickCheckIn/QuickCheckInStats";
import QuickCheckInTestimonials from "@/components/QuickCheckIn/QuickCheckInTestimonials";
import QuickCheckInPricing from "@/components/QuickCheckIn/QuickCheckInPricing";
import QuickCheckInFAQ from "@/components/QuickCheckIn/QuickCheckInFAQ";
import QuickCheckInCTA from "@/components/QuickCheckIn/QuickCheckInCTA";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QuickCheckIn - Giải Pháp Marketing & Review cho Nhà Hàng | CheckPay",
  description: "QuickCheckIn - Nền tảng tích hợp quản lý review, marketing thông minh và check-in nhanh chóng cho nhà hàng, quán ăn. Tăng trưởng doanh thu và xây dựng thương hiệu hiệu quả.",
  metadataBase: new URL('https://checkpay.vn'),
  openGraph: {
    title: 'QuickCheckIn - Giải Pháp All-in-One cho Nhà Hàng',
    description: 'QuickCheckIn giúp nhà hàng quản lý review, marketing và check-in khách hàng một cách thông minh và hiệu quả.',
    url: 'https://checkpay.vn/quickcheckin',
    siteName: 'CheckPay',
    images: [
      {
        url: 'https://checkpay.vn/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QuickCheckIn Platform',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickCheckIn - Giải Pháp All-in-One cho Nhà Hàng',
    description: 'QuickCheckIn giúp nhà hàng quản lý review, marketing và check-in khách hàng một cách thông minh và hiệu quả.',
    images: ['https://checkpay.vn/images/twitter-image.png'],
  },
};

export default function QuickCheckInPage() {
  return (
    <>
      <ScrollUp />
      <QuickCheckInHero />
      <QuickCheckInOverview />
      <QuickCheckInFeatures />
      <QuickCheckInStats />
      <QuickCheckInTestimonials />
      <QuickCheckInPricing />
      <QuickCheckInFAQ />
      <QuickCheckInCTA />
    </>
  );
}
