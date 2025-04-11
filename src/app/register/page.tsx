import Breadcrumb from "@/components/Common/Breadcrumb";
import RegisterForm from "@/components/Register/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VietQR",
  description: "VietQR",
  // other metadata
};

const RegisterPage = () => {
  return (
    <>
      <Breadcrumb pageName="Đăng ký" description="" />
      <div className="container p-6">
        <h1 className="text-3xl font-semibold text-center my-8">
        Tạo tài khoản để sử dụng dịch vụ
        </h1>
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;