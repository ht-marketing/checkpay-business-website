"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const RegisterForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    customerType: "individual", // Default to individual
    companyName: "",
    shortName: "",
    businessName: "", // New field for individual business name
  });

  // Error state
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    companyName: "",
    shortName: "",
    businessName: "", // New error field
  });

  // Add ref to track currently focused element
  const focusedInputRef = useRef<string | null>(null);

  // Add loading and response states
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    // Store the name of the focused input
    focusedInputRef.current = name;

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }

    setFormData({
      ...formData,
      [name]: type === "radio" ? e.target.id : value,
    });
  };

  // Validate form
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Vui lòng nhập họ và đệm";
      valid = false;
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Vui lòng nhập tên";
      valid = false;
    }

    // Phone validation - updated to match VietQRForm
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại phải là 10 chữ số.";
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
      valid = false;
    }

    // Short name validation - applied to both customer types
    if (formData.shortName.trim()) {
      // Check for only letters and underscores
      if (!/^[a-zA-Z_]+$/.test(formData.shortName)) {
        newErrors.shortName = "Tên viết tắt chỉ được chứa chữ cái và dấu gạch dưới (_)";
        valid = false;
      } else if (formData.shortName.trim().length < 7) {
        newErrors.shortName = "Tên viết tắt phải có ít nhất 7 ký tự";
        valid = false;
      }
    }

    // Organization fields validation
    if (formData.customerType === "organization") {
      if (!formData.companyName.trim()) {
        newErrors.companyName = "Vui lòng nhập tên công ty/tổ chức";
        valid = false;
      }

      if (!formData.shortName.trim()) {
        newErrors.shortName = "Vui lòng nhập tên viết tắt";
        valid = false;
      }
    }
    // Individual/Business Household fields validation
    else if (formData.customerType === "individual") {
      if (!formData.businessName.trim()) {
        newErrors.businessName = "Vui lòng nhập tên hộ kinh doanh/địa điểm kinh doanh";
        valid = false;
      }

      if (!formData.shortName.trim()) {
        newErrors.shortName = "Vui lòng nhập tên viết tắt";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      setApiResponse(null);

      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          // Success case
          setApiResponse({
            success: true,
            message: data.message,
          });
        } else {
          // Error case
          setApiResponse({
            success: false,
            message: data.message || 'Đã xảy ra lỗi khi xử lý yêu cầu.',
          });
        }
      } catch (error) {
        setApiResponse({
          success: false,
          message: 'Không thể kết nối đến máy chủ. Vui lòng thử lại sau.',
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("Form has errors");
    }
  };

  // Input field component for reuse - updated to match VietQRForm style
  const InputField = ({
    label,
    id,
    name,
    type,
    value,
    onChange,
    required = true,
    error = "",
    placeholder = "",
  }: {
    label: string;
    id: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    error?: string;
    placeholder?: string;
  }) => {
    // Add ref to maintain focus
    const inputRef = useRef<HTMLInputElement>(null);

    // Re-apply focus after render if this was the focused input
    useEffect(() => {
      if (focusedInputRef.current === name && inputRef.current) {
        inputRef.current.focus();
      }
    });

    return (
      <div>
        <label
          htmlFor={id}
          className="block text-xm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 text-gray-900 dark:text-gray-100 p-2"
          required={required}
          onFocus={() => {
            focusedInputRef.current = name;
          }}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  };

  // Success screen component - enhanced version with disabled button
  const SuccessScreen = ({ message }: { message: string }) => {
    const [confirmed, setConfirmed] = useState(false);
    
    return (
      <div className="text-center py-8">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h3 className="text-2xl leading-6 font-bold text-gray-900 dark:text-gray-100 mb-4">
          Đăng ký thành công!
        </h3>
        
        <div className="mt-4 mb-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-md mx-auto max-w-lg shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="mt-2 text-lg text-red-700 dark:text-red-300 font-medium text-left">
                {message}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 mb-6">
          <label className="flex items-center justify-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={() => setConfirmed(!confirmed)}
              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Tôi xác nhận đã kiểm tra email và đặt mật khẩu cho tài khoản
            </span>
          </label>
        </div>
        
        <div className="mt-4">
          <Link
            href="https://checkpay.vn/download"
            className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white transition-colors duration-200 ${
              confirmed 
                ? "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
                : "bg-indigo-400 cursor-not-allowed"
            }`}
            onClick={(e) => !confirmed && e.preventDefault()}
            aria-disabled={!confirmed}
            tabIndex={confirmed ? 0 : -1}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Đăng nhập ngay
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">
        Đăng ký tài khoản CheckPay
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
      </p>

      {apiResponse?.success ? (
        <SuccessScreen message={apiResponse.message} />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Personal Information */}
              <InputField
                label="Họ và đệm"
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />

              <InputField
                label="Tên"
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
            </div>

            <div className="space-y-6 mb-6">
              <InputField
                label="Số điện thoại"
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
              {!errors.phone && (
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Vui lòng nhập số điện thoại hợp lệ (10 chữ số).
                </p>
              )}

              <InputField
                label="Email"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            {/* Customer Type Selection */}
            <div className="mb-6">
              <p className="block text-xm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Loại khách hàng
              </p>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="individual"
                    name="customerType"
                    checked={formData.customerType === "individual"}
                    onChange={handleChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    Cá nhân/Hộ Kinh Doanh
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="organization"
                    name="customerType"
                    checked={formData.customerType === "organization"}
                    onChange={handleChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    Tổ chức
                  </span>
                </label>
              </div>
            </div>

            {/* Fields for Individual/Business Household */}
            {formData.customerType === "individual" && (
              <div className="space-y-6 mb-6 transition-all duration-300 ease-in-out">
                <InputField
                  label="Tên hộ kinh doanh/địa điểm kinh doanh"
                  id="businessName"
                  name="businessName"
                  type="text"
                  value={formData.businessName}
                  onChange={handleChange}
                  error={errors.businessName}
                  placeholder="Ví dụ: Hộ Kinh Doanh ABC"
                  required={true}
                />

                <InputField
                  label="Tên viết tắt"
                  id="shortName"
                  name="shortName"
                  type="text"
                  value={formData.shortName}
                  onChange={handleChange}
                  error={errors.shortName}
                  placeholder="Ví dụ: ABC_DEF"
                  required={true}
                />
                {!errors.shortName && formData.shortName && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Tên viết tắt phải có ít nhất 7 ký tự và chỉ chứa chữ cái và dấu gạch dưới (_)
                  </p>
                )}
              </div>
            )}

            {/* Conditional Organization Fields */}
            {formData.customerType === "organization" && (
              <div className="space-y-6 mb-6 transition-all duration-300 ease-in-out">
                <InputField
                  label="Tên công ty/tổ chức"
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  error={errors.companyName}
                  placeholder="Ví dụ: Công ty TNHH ABC"
                />

                <InputField
                  label="Tên viết tắt"
                  id="shortName"
                  name="shortName"
                  type="text"
                  value={formData.shortName}
                  onChange={handleChange}
                  error={errors.shortName}
                  placeholder="Ví dụ: ABC_DEF"
                />
                {!errors.shortName && formData.shortName && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Tên viết tắt phải có ít nhất 7 ký tự và chỉ chứa chữ cái và dấu gạch dưới (_)
                  </p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50"
            >
              {isLoading ? "Đang xử lý..." : "Đăng ký"}
            </button>
          </form>

          {/* API Error Message */}
          {apiResponse && !apiResponse.success && (
            <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
              <p className="text-red-600 dark:text-red-400 text-sm">
                {apiResponse.message}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RegisterForm;
