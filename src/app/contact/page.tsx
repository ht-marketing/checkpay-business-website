import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hỗ trợ",
  description: "Hotline - 0938.894.833 - admin@checkpay.vn",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hỗ trợ"
        description=""
      />
      <div className="container">
        <h1 className="text-3xl font-semibold text-center my-8">
          Liên hệ với chúng tôi
        </h1>
      </div>
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-1/2">
            <p className="text-center text-lg">
              Để được hỗ trợ tốt nhất, vui lòng điền thông tin vào form bên dưới
              hoặc liên hệ trực tiếp qua thông tin bên dưới.
            </p>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default ContactPage;
