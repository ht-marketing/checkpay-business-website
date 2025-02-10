import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg fill="#C20F0F"
      width="50" height="50" viewBox="-0.125 -0.125 1.5 1.5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" ><path d="M.813 1.125h.188A.125.125 0 0 0 1.126 1V.812a.063.063 0 0 1 .125 0V1a.25.25 0 0 1-.25.25H.25A.25.25 0 0 1 0 1V.812a.063.063 0 0 1 .125 0V1a.125.125 0 0 0 .125.125h.188a.063.063 0 0 1 0 .125h.375a.063.063 0 0 1 0-.125M.125.438a.063.063 0 1 1-.125 0V.25A.25.25 0 0 1 .25 0h.188a.063.063 0 1 1 0 .125H.25A.125.125 0 0 0 .125.25zm1 0V.25A.125.125 0 0 0 1 .125H.812a.063.063 0 0 1 0-.125H1a.25.25 0 0 1 .25.25v.188a.063.063 0 0 1-.125 0"/></svg>  
    ),
    title: "Tạo QR & Gạch nợ Realtime",
    paragraph:
      "Tạo mã QR động cho thanh toán, giúp khách hàng quét và thanh toán ngay lập tức. Hệ thống tự động ghi nhận và gạch nợ theo thời gian thực, giảm sai sót và tối ưu dòng tiền.",
  },
  {
    id: 2,
    icon: (
      <svg width="50" height="50" viewBox="0 0 1.5 1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.688 1.25h.625V.625A.125.125 0 0 0 1.188.5h-.25m-.25.5h.001M.688.75h.001M.688.5h.001M.438.5h.001m.499.75V.375A.125.125 0 0 0 .813.25h-.5a.125.125 0 0 0-.125.125v.875z" stroke="#C20F0F" strokeWidth=".125" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Quản lý chi nhánh",
    paragraph:
      "Hỗ trợ doanh nghiệp vận hành và giám sát nhiều chi nhánh trên cùng một nền tảng. Dễ dàng theo dõi doanh thu, giao dịch và hiệu suất từng chi nhánh.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 1.5 1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m0.75 0.063 0.688 0.313H0.063zM0.063 1.438h1.375" stroke="#C20F0F" strokeWidth="0.09375" strokeLinecap="round" strokeLinejoin="round"/><path d="M0.125 1.25V0.563h0.25v0.688zm1 0V0.563h0.25v0.688zm-0.5 0V0.563h0.25v0.688z" stroke="#C20F0F" strokeWidth="0.09375" strokeLinejoin="round"/></svg>
    ),
    title: "Quản lý ngân hàng",
    paragraph:
      "Kết nối, quản lý và theo dõi tài khoản từ nhiều ngân hàng khác nhau trên một giao diện thống nhất. Đồng bộ giao dịch giúp đối soát nhanh chóng và chính xác.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 0.938 0.938" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.344 0a.219.219 0 1 0 0 .437.219.219 0 1 0 0-.437M.219.562A.22.22 0 0 0 0 .781v.156h.688V.781A.22.22 0 0 0 .469.562zm.562.063H.75v.313h.188V.782A.156.156 0 0 0 .782.626" fill="#C20F0F"/><path d="M.719.25a.156.156 0 1 0 0 .313.156.156 0 0 0 0-.313" fill="#C20F0F"/></svg>
    ),
    title: "Phân quyền nhân viên",
    paragraph:
      "Tạo và phân quyền chi tiết cho từng nhân viên theo vai trò và trách nhiệm. Kiểm soát truy cập, giới hạn thao tác và đảm bảo tính bảo mật dữ liệu.",
  },
  {
    id: 5,
    icon: (
      <svg width="50" height="50" viewBox="0 0 2 2" fill="#C20F0F" xmlns="http://www.w3.org/2000/svg"><path d="M.375.688h.25v1.063h-.25zm1 .313v.75h.25V1zm-.5.75h.25V.25h-.25z"/></svg>
    ),
    title: "Báo cáo & Phân tích",
    paragraph:
      "Cung cấp hệ thống báo cáo chi tiết về giao dịch, doanh thu, công nợ và hiệu suất kinh doanh. Hỗ trợ ra quyết định với biểu đồ trực quan và phân tích chuyên sâu.",
  },
  {
    id: 6,
    icon: (
      <svg width="50" height="50" viewBox="0 0 1.5 1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.25.438A.063.063 0 0 1 .313.375h.063a.063.063 0 0 1 0 .125H.313A.063.063 0 0 1 .25.437m.313 0A.063.063 0 0 1 .626.374h.563a.063.063 0 1 1 0 .125H.626A.063.063 0 0 1 .563.436M.25.749A.063.063 0 0 1 .313.686h.063a.063.063 0 1 1 0 .125H.313A.063.063 0 0 1 .25.748m.313 0A.063.063 0 0 1 .626.685h.563a.063.063 0 1 1 0 .125H.626A.063.063 0 0 1 .563.747M.25 1.06A.063.063 0 0 1 .313.997h.063a.063.063 0 1 1 0 .125H.313a.063.063 0 0 1-.063-.063m.313 0A.063.063 0 0 1 .626.996h.563a.063.063 0 1 1 0 .125H.626a.063.063 0 0 1-.063-.063" fill="#C20F0F"/></svg>
    ),
    title: "Giao dịch chi tiết",
    paragraph:
      "Lưu trữ, theo dõi và truy xuất mọi giao dịch theo thời gian thực. Hỗ trợ tìm kiếm nhanh, lọc dữ liệu thông minh và truy vết lịch sử giao dịch dễ dàng.",
  },
  {
    id: 7,
    icon: (
      <svg width="50" height="50" viewBox="0 0 1.5 1.5" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#C20F0F" d="m1.163.263.006.005.188.188.005.005.005.008.002.005.002.005.002.007.001.007v.011l-.001.007-.002.009-.003.007-.003.006-.004.006-.005.006-.188.188A.063.063 0 0 1 1.074.65l.005-.006.083-.081H.563A.063.063 0 0 1 .501.508L.5.5A.063.063 0 0 1 .563.437h.599L1.081.356a.063.063 0 0 1-.005-.083l.005-.006a.06.06 0 0 1 .076-.01zm-.832.969-.188-.188-.006-.007-.004-.007-.003-.007-.002-.007-.001-.006-.001-.007V.996L.127.989.129.98.13.977.132.972.134.968.137.963.14.959.143.956.331.768.337.763a.06.06 0 0 1 .077 0L.42.768l.005.006a.06.06 0 0 1 0 .077L.42.857.338.938h.6A.063.063 0 0 1 1 .993v.014a.06.06 0 0 1-.055.055l-.007.001h-.6l.081.081.005.006a.063.063 0 0 1-.088.088z"/></svg>
    ),
    title: "Đối soát ngân hàng",
    paragraph:
      "Tự động đối soát số dư, giao dịch giữa hệ thống và ngân hàng, giúp phát hiện sai lệch, tránh thất thoát và đảm bảo số liệu chính xác.",
  },
];
export default featuresData;
