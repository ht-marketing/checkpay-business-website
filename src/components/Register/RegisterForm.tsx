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

    // Organization fields validation
    if (formData.customerType === "organization") {
      if (!formData.companyName.trim()) {
        newErrors.companyName = "Vui lòng nhập tên công ty/tổ chức";
        valid = false;
      }

      if (!formData.shortName.trim()) {
        newErrors.shortName = "Vui lòng nhập tên viết tắt";
        valid = false;
      } else if (formData.shortName.trim().length < 7) {
        newErrors.shortName = "Tên viết tắt phải có ít nhất 7 ký tự";
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
      } else if (formData.shortName.trim().length < 7) {
        newErrors.shortName = "Tên viết tắt phải có ít nhất 7 ký tự";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Form validation passed, submit form
      console.log("Form submitted:", formData);
      // API call would go here
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

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">
        Đăng ký tài khoản CheckPay
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
      </p>

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
                Tên viết tắt phải có ít nhất 7 ký tự
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
                Tên viết tắt phải có ít nhất 7 ký tự
              </p>
            )}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
