import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import logo from "../assets/images/logo.png";

const Footers = () => {
  const footerLinks = {
    company: [
      { name: 'Giới thiệu', href: '#' },
      { name: 'Điều khoản sử dụng', href: '#' },
      { name: 'Chính sách bảo mật', href: '#' },
      { name: 'Cách thức hoạt động', href: '#' },
      { name: 'Liên hệ với chúng tôi', href: '#' },
    ],
    getHelp: [
      { name: 'Đặt hàng & giao hàng', href: '#' },
      { name: 'Dịch vụ 24h', href: '#' },
      { name: 'Tư vấn nhanh', href: '#' },
    ],
    support: [
      { name: 'Câu hỏi thường gặp', href: '#' },
      { name: 'Chính sách hoàn trả', href: '#' },
      { name: 'Hợp tác kinh doanh', href: '#' },
    ],
    contact: [
      { name: 'Facebook', href: '#' },
      { name: 'Zalo Hỗ trợ 24/7', href: '#' },
    ],
  }

  const categoryTitles = {
    company: 'Lựa chọn',
    getHelp: 'Dịch vụ',
    support: 'Hỗ trợ',
    contact: 'Liên hệ'
  }

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
           <div className="mb-6">
              <img src={logo} alt="logo" className="mx-auto lg:mx-0 w-40 mb-4" />
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-200 p-3 rounded-full bg-muted text-foreground hover:bg-orange-400 hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-200 p-3 rounded-full bg-muted text-foreground hover:bg-orange-400 hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-200 p-3 rounded-full bg-muted text-foreground hover:bg-orange-400 hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-medium mb-4 bg-orange-400 rounded-lg text-white text-center">
                    {categoryTitles[category]}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-orange-400 flex justify-start items-center gap-2 transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} <span className="font-medium text-orange-400">Dịch Vụ Xe Du Lịch</span>.
              Đã đăng ký bản quyền.
            </p>
            <p className="text-gray-600 text-sm">
              Thiết kế & phát triển bởi <span className="font-semibold text-orange-400">Lê Quang Vinh 🚍</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footers
