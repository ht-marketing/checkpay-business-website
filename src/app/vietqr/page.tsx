import Breadcrumb from "@/components/Common/Breadcrumb";
import VietQRForm from "@/components/VietQR/VietQRForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VietQR",
  description: "VietQR",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="VietQR" description="" />
      <div className="container p-6">
        <h1 className="text-3xl font-semibold text-center my-8">
          Cấu hình thông tin để tạo VietQR
        </h1>
        <VietQRForm />
      </div>
    </>
  );
};

export default ContactPage;