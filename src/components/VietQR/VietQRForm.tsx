'use client';

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { bankList, Bank, getBankLogoPath } from "@/data/bankList";
import Image from "next/image";

// Add at the top of the file
interface FormData {
  phoneNumber: string;
  bank: string;
  accountNumber: string;
  displayName: string;
  partner: string;
  amount: string;
  description: string;
  type: 'qr' | 'qr_amount' | 'qr_amount_logo';
}

interface FormErrors {
  phoneNumber: string;
  accountNumber: string;
  bank: string;
  displayName: string;
  amount: string;
}

// Simple encryption function using base64 and XOR that works with Unicode characters
const encryptData = (data: string): string => {
  // Add input validation
  if (!data) {
    throw new Error('Data to encrypt cannot be empty');
  }

  const encryptionKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
  if (!encryptionKey) {
    throw new Error('Encryption key not found in environment variables');
  }

  // XOR operation with the key
  let result = '';
  for (let i = 0; i < data.length; i++) {
    const charCode = data.charCodeAt(i) ^ encryptionKey.charCodeAt(i % encryptionKey.length);
    result += String.fromCharCode(charCode);
  }

  // Convert to base64 for URL safety - handling Unicode characters properly
  try {
    // First encode with encodeURIComponent to handle Unicode, then convert to base64
    return btoa(encodeURIComponent(result).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    ));
  } catch (e) {
    console.error("Error encoding data:", e);
    return "";
  }
};

// Generate custom VietQR URL
const generateVietQRUrl = (formData: any): string => {
  // Create a string with important user data
  const dataToEncrypt = [
    formData.phoneNumber,
    formData.bank,
    formData.accountNumber,
    formData.displayName,
    formData.partner,
  ].join('|');

  // Encrypt the data
  const encryptedData = encryptData(dataToEncrypt);

  // Create the base URL
  let url = `https://vietqr.checkpay.vn/image/${encryptedData}.png`;

  // Add optional query parameters
  const queryParams: string[] = [];

  // Add type parameter using the selected type or default to qr_amount_logo
  queryParams.push(`type=${formData.type || 'qr_amount_logo'}`);

  if (formData.amount) {
    queryParams.push(`amount=${formData.amount}`);
  } else {
    queryParams.push('amount=');
  }
  if (formData.description) {
    queryParams.push(`description=${encodeURIComponent(formData.description)}`);
  } else {
    queryParams.push('description=');
  }

  // Add query parameters to URL if they exist
  if (queryParams.length > 0) {
    url += `?${queryParams.join('&')}`;
  }

  return url;
};

const VietQRForm = () => {
  const [formData, setFormData] = useState<FormData>({
    phoneNumber: "",
    bank: "",
    accountNumber: "",
    displayName: "",
    partner: "", // Default to empty string to require explicit partner selection
    amount: "",
    description: "",
    type: "qr_amount_logo", // Default type
  });

  const [errors, setErrors] = useState<FormErrors>({
    phoneNumber: "",
    accountNumber: "",
    bank: "",
    displayName: "",
    amount: "", // Added amount field to errors
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState(""); // State to store the generated URL
  const [qrLoadError, setQrLoadError] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const initialFormState = {
    phoneNumber: "",
    bank: "",
    accountNumber: "",
    displayName: "",
    partner: "",
    amount: "",
    description: "",
    type: "qr_amount_logo" as const,
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setErrors({
      phoneNumber: "",
      accountNumber: "",
      bank: "",
      displayName: "",
      amount: "",
    });
    setGeneratedUrl("");
    setQrLoadError(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Effect to handle scrolling and highlighting when URL is generated
  useEffect(() => {
    if (generatedUrl) {
      // Scroll to the result section
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      // Apply highlight effect
      setIsHighlighted(true);

      // Remove highlight after animation completes
      const timer = setTimeout(() => {
        setIsHighlighted(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [generatedUrl]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Special handling for amount field
    if (name === 'amount') {
      // Only allow empty string or integer values
      if (value === '' || /^[0-9]+$/.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    let errors = {
      phoneNumber: "",
      accountNumber: "",
      bank: "",
      displayName: "",
      amount: ""
    };

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Số điện thoại phải là 10 chữ số.";
      valid = false;
    }

    if (!/^\d+$/.test(formData.accountNumber)) {
      errors.accountNumber = "Số tài khoản phải là chữ số.";
      valid = false;
    }

    if (!formData.bank) {
      errors.bank = "Vui lòng chọn ngân hàng.";
      valid = false;
    }

    if (!formData.displayName.trim()) {
      errors.displayName = "Tên hiển thị không được để trống.";
      valid = false;
    }

    // Validate amount is an integer if provided
    if (formData.amount && !Number.isInteger(Number(formData.amount))) {
      errors.amount = "Số tiền phải là số nguyên.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Generate the custom VietQR URL
      const vietQrUrl = generateVietQRUrl(formData);
      setGeneratedUrl(vietQrUrl);
      console.log("Generated VietQR URL:", vietQrUrl);
      console.log("Form Data Submitted:", formData);
      // Reset highlight status to ensure animation triggers even when regenerating
      setIsHighlighted(false);
    }
  };

  // Filter banks that support transfers
  const supportedBanks = bankList;

  // Memoize filtered banks
  const filteredBanks = useMemo(() => 
    supportedBanks.filter(bank =>
      bank.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bank.shortName.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [searchTerm, supportedBanks]
  );

  // Memoize handlers
  const handleBankSelect = useCallback((bin: string) => {
    setFormData(prev => ({ ...prev, bank: bin }));
    setDropdownOpen(false);
    setSearchTerm("");
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const selectedBank = supportedBanks.find(bank => bank.bin === formData.bank);

  // Function to generate URL with only partner and type params
  const generatePartnerTypeUrl = () => {
    const baseUrl = generatedUrl.split('?')[0];
    const typeParam = formData.type || 'qr_amount_logo';
    return `${baseUrl}?type=${typeParam}`;
  };

  // Function to generate URL with only type param (for integration)
  const generateUrlWithType = () => {
    const baseUrl = generatedUrl.split('?')[0];
    const typeParam = formData.type || 'qr_amount_logo';
    return `${baseUrl}?type=${typeParam}`;
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Cấu trúc của 1 link QR ngân hàng</h3>
      <div className="mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="text-gray-700 dark:text-gray-300 mb-4">
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md font-mono text-sm break-all">
            https://vietqr.checkpay.vn/image/[mã_rút_gọn_stk].png?type=<span className="text-purple-600 dark:text-purple-400">[loại_qr]</span>&amount=<span className="text-green-600 dark:text-green-400">[số_tiền]</span>&description=<span className="text-blue-600 dark:text-blue-400">[nội_dung]</span>
          </div>
          <div className="mt-3 text-sm">
            <p><span className="font-semibold">Trong đó:</span></p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className="font-medium text-purple-600 dark:text-purple-400">[loại_qr]</span>: Loại QR (<span className="italic">qr</span>: chỉ QR, <span className="italic">qr_amount</span>: QR + số tiền, <span className="italic">qr_amount_logo</span>: đầy đủ)</li>
              <li><span className="font-medium">[mã_rút_gọn_stk]</span>: Thông tin tài khoản được tạo và rút gọn sau khi tạo liên kết</li>
              <li><span className="font-medium text-green-600 dark:text-green-400">[số_tiền]</span>: Số tiền chuyển khoản</li>
              <li><span className="font-medium text-blue-600 dark:text-blue-400">[nội_dung]</span>: Nội dung chuyển khoản</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-medium mb-2">Tạo link QR ngân hàng:</h3>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-xm font-medium text-gray-700 dark:text-gray-300">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 text-gray-900 dark:text-gray-100 p-2"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Vui lòng nhập số điện thoại hợp lệ.</p>
        </div>

        <div className="mb-4" ref={dropdownRef}>
          <label htmlFor="bank" className="block text-xm font-medium text-gray-700 dark:text-gray-300">
            Ngân hàng <span className="text-red-500">*</span>
          </label>
          <div className="relative mt-1">
            <button
              type="button"
              className="w-full flex items-center justify-between rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-2 bg-white dark:bg-gray-700 text-xm h-10"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selectedBank ? (
                <div className="flex items-center">
                  <div className="bg-white rounded-sm p-1 flex items-center justify-center mr-2">
                    <Image
                      src={getBankLogoPath(selectedBank.bin)}
                      alt={selectedBank.shortName}
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="text-gray-900 dark:text-gray-100">{selectedBank.shortName} - {selectedBank.name}</span>
                </div>
              ) : (
                <span className="text-gray-500 dark:text-gray-400">Chọn ngân hàng</span>
              )}
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute z-10 mt-1 w-full rounded-md bg-white dark:bg-gray-700 shadow-lg max-h-60 overflow-y-auto">
                <div className="sticky top-0 bg-white dark:bg-gray-700 p-2 border-b border-gray-200 dark:border-gray-600">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Tìm ngân hàng..."
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800"
                    onClick={(e) => e.stopPropagation()}  // Prevent dropdown from closing when clicking inside
                  />
                </div>
                <ul className="py-1">
                  {filteredBanks.length > 0 ? (
                    filteredBanks.map((bank) => (
                      <li
                        key={bank.id}
                        onClick={() => handleBankSelect(bank.bin)}
                        className="flex items-center px-3 py-2 text-xm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        <div className="flex items-center justify-center mr-2">
                          <Image
                          src={getBankLogoPath(bank.bin)}
                          alt={bank.shortName}
                          height={40}
                          width={40}
                          />
                        </div>
                        <span className="text-gray-900 dark:text-gray-100">{bank.shortName} - {bank.name}</span>
                      </li>
                    ))
                  ) : (
                    <li className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">Không tìm thấy ngân hàng</li>
                  )}
                </ul>
              </div>
            )}
          </div>
          {errors.bank && <p className="text-red-500 text-sm">{errors.bank}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="accountNumber" className="block text-xm font-medium text-gray-700 dark:text-gray-300">
            Số tài khoản <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 text-gray-900 dark:text-gray-100 p-2"
          />
          {errors.accountNumber && <p className="text-red-500 text-sm">{errors.accountNumber}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="displayName" className="block text-xm font-medium text-gray-700 dark:text-gray-300">
            Tên hiển thị <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 text-gray-900 dark:text-gray-100 p-2"
          />
          {errors.displayName && <p className="text-red-500 text-sm">{errors.displayName}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-xm font-medium text-gray-700 dark:text-gray-300">
            Số tiền
          </label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="VND"
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 text-gray-900 dark:text-gray-100 p-2"
          />
          {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-xm font-medium text-gray-700 dark:text-gray-300">
            Nội dung
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 text-gray-900 dark:text-gray-100 p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="type" className="block text-xm font-medium text-gray-700 dark:text-gray-300">
            Loại QR
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 text-gray-900 dark:text-gray-100 p-2"
          >
            <option value="qr">Chỉ QR</option>
            <option value="qr_amount">QR + số tiền</option>
            <option value="qr_amount_logo">QR đầy đủ (có logo)</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="partner" className="block text-xm font-medium text-gray-700 dark:text-gray-300">
            Đối tác
          </label>
          <select
            name="partner"
            value={formData.partner}
            onChange={handleChange}
            className="mt-1 mb-10 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 text-gray-900 dark:text-gray-100 p-2"
          >
            <option value="">Chọn đối tác</option>
            <option value="relisoft">Relisoft</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          Tạo liên kết VietQR
        </button>
      </form>

      {generatedUrl && (
        <div
          ref={resultRef}
          className={`mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-500 ${isHighlighted ? 'ring-2 ring-indigo-500 scale-102' : ''
            }`}
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            VietQR URL với số tiền
            {isHighlighted && (
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 animate-pulse">
                Mới
              </span>
            )}
          </h3>
          <div className={`bg-gray-100 dark:bg-gray-700 p-3 rounded-md ${isHighlighted ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''
            }`}>
            <p className="text-sm text-gray-800 dark:text-gray-200 break-all">{generatedUrl}</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            <button
              onClick={() => {
                navigator.clipboard.writeText(generatedUrl);
                alert("URL đã được sao chép!");
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Sao chép URL với số tiền
            </button>
            <button
              onClick={() => window.open(generatedUrl, '_blank')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Hiển thị QR
            </button>
          </div>

          {/* URL for software integration */}
          <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              URL hỗ trợ các phầm mềm khác tích hợp QR thanh toán cho đơn hàng
            </h3>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
              <p className="text-sm text-gray-800 dark:text-gray-200 break-all">
                {generateUrlWithType()}
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(generateUrlWithType());
                  alert("URL tích hợp với tham số loại QR đã được sao chép!");
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Sao chép URL tích hợp
              </button>
            </div>
          </div>
        </div>
      )}

      {generatedUrl && (
        <div>
          {qrLoadError ? (
            <div className="text-red-500 mt-2">
              Failed to load QR code. Please try again.
            </div>
          ) : (
            <Image
              src={generatedUrl}
              alt="VietQR Code"
              width={200}
              height={200}
              onError={() => setQrLoadError(true)}
              onLoad={() => setQrLoadError(false)}
            />
          )}
        </div>
      )}

      <button
        type="button"
        onClick={resetForm}
        className="mt-2 w-full rounded-md bg-gray-200 py-2 px-4 text-gray-700 font-medium shadow-sm hover:bg-gray-300"
      >
        Reset Form
      </button>
    </div>
  );
};

export default VietQRForm;