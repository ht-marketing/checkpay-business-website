import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CheckPay - Kiểm Tra Thanh Toán - Dịch Vụ Nhanh Chóng & An Toàn",
  description: "CheckPay - Kiểm tra thanh toán nhanh chóng, chính xác và an toàn. Dịch vụ hỗ trợ 24/7, giúp bạn theo dõi và xác nhận giao dịch dễ dàng. Truy cập ngay!",
  // other metadata
  metadataBase: new URL('https://checkpay.vn'),
  openGraph: {
    title: 'CheckPay - Giải pháp thanh toán số',
    description: 'CheckPay cung cấp các giải pháp thanh toán số và QR code cho doanh nghiệp.',
    url: 'https://checkpay.vn',
    siteName: 'CheckPay',
    images: [
      {
        url: 'https://checkpay.vn/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CheckPay Logo',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CheckPay - Giải pháp thanh toán số',
    description: 'CheckPay cung cấp các giải pháp thanh toán số và QR code cho doanh nghiệp.',
    images: ['https://checkpay.vn/images/twitter-image.png'],
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Video />
      <Features />
      <Brands />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
