"use client";

import { JSX, useEffect, useState } from 'react';
import { FaGlobe, FaAndroid, FaApple } from 'react-icons/fa';

const WEBSITE_URL = "https://quanly.checkpay.vn";
const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.checkpay.checkpay_manager";
const IOS_URL = "https://apps.apple.com/vn/app/check-pay/id6740187521";

type Platform = 'web' | 'android' | 'ios' | null;

export default function DownloadOptions() {
  const [userPlatform, setUserPlatform] = useState<Platform>(null);

  useEffect(() => {
    // Detect user platform
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (/android/i.test(userAgent)) {
      setUserPlatform('android');
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      setUserPlatform('ios');
    } else {
      setUserPlatform('web');
    }
  }, []);

  const DownloadCard = ({ 
    platform, 
    title, 
    description, 
    icon, 
    url 
  }: { 
    platform: Platform; 
    title: string; 
    description: string; 
    icon: JSX.Element; 
    url: string;
  }) => {
    const isHighlighted = userPlatform === platform;
    
    return (
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
          isHighlighted 
            ? 'ring-2 ring-indigo-500 dark:ring-indigo-400' 
            : 'hover:border-gray-300'
        }`}
      >
        <div className="flex flex-col items-center text-center h-full">
          <div className={`text-4xl mb-4 ${
            isHighlighted 
              ? 'text-indigo-600 dark:text-indigo-400' 
              : 'text-gray-700 dark:text-gray-300'
          }`}>
            {icon}
          </div>
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{description}</p>
          <div className={`mt-auto inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium ${
            isHighlighted 
              ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}>
            {isHighlighted ? 'Được đề xuất cho bạn' : 'Tải xuống'}
          </div>
        </div>
      </a>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <DownloadCard
        platform="web"
        title="Phiên bản Web"
        description="Truy cập trực tiếp trên trình duyệt không cần cài đặt. Tối ưu cho việc quản lý trên máy tính."
        icon={<FaGlobe />}
        url={WEBSITE_URL}
      />
      
      <DownloadCard
        platform="android"
        title="Phiên bản Android"
        description="Tải ứng dụng trên thiết bị Android của bạn từ Google Play Store."
        icon={<FaAndroid />}
        url={ANDROID_URL}
      />
      
      <DownloadCard
        platform="ios"
        title="Phiên bản iOS"
        description="Tải ứng dụng trên iPhone hoặc iPad của bạn từ App Store."
        icon={<FaApple />}
        url={IOS_URL}
      />
    </div>
  );
}
