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
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;