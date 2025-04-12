import Breadcrumb from '@/components/Common/Breadcrumb';
import DownloadOptions from './DownloadOptions';

export const metadata = {
  title: 'Tải CheckPay - Ứng dụng quản lý thanh toán',
  description: 'Tải ứng dụng CheckPay cho Web, Android và iOS để quản lý thanh toán hiệu quả cho doanh nghiệp của bạn.',
};

export default function DownloadPage() {
  return (
    <>
      <Breadcrumb
        pageName="Hỗ trợ"
        description=""
      />
      <div className="container">
        <h1 className="text-3xl font-semibold text-center my-8">
        Tải CheckPay
        </h1>
      </div>
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-1/2">
            <p className="text-center text-lg">
            Quản lý thanh toán hiệu quả cho doanh nghiệp của bạn trên mọi nền tảng
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen mt-8">
      <div className="container mx-auto px-4 py-16">
        <DownloadOptions />
      </div>
    </div>
    </>
  );

}
