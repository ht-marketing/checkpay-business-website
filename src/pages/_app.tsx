import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>CheckPay - Giải pháp thanh toán số</title>
        <meta name="description" content="CheckPay cung cấp các giải pháp thanh toán số và QR code cho doanh nghiệp." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://checkpay.vn" />
        <meta property="og:title" content="CheckPay - Giải pháp thanh toán số" />
        <meta property="og:description" content="CheckPay cung cấp các giải pháp thanh toán số và QR code cho doanh nghiệp." />
        <meta property="og:image" content="https://checkpay.vn/images/og-image.png" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:site_name" content="CheckPay" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://checkpay.vn" />
        <meta name="twitter:title" content="CheckPay - Giải pháp thanh toán số" />
        <meta name="twitter:description" content="CheckPay cung cấp các giải pháp thanh toán số và QR code cho doanh nghiệp." />
        <meta name="twitter:image" content="https://checkpay.vn/images/twitter-image.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;