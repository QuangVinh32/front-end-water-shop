import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
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
    company: 'Về quán',
    getHelp: 'Dịch vụ',
    support: 'Hỗ trợ',
    contact: 'Liên hệ'
  }

  return (
    <footer className="bg-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full -ml-2"></div>
            </div>
            <p className="text-gray-600 mb-6">
              Chúng tôi phục vụ trà chanh, trà sữa, nước ép, soda, cafe và nhiều loại thức uống thơm ngon khác. Không gian thân thiện, phục vụ tận tình.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-colors"
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
                  <h3 className="text-lg font-medium mb-4 bg-green-600 rounded-lg text-white text-center">
                    {categoryTitles[category]}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-gray-900 hover:text-green-600"
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
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Trà Chanh Nhà Mình. Đã đăng ký bản quyền.
            </p>
            <p className="text-gray-600 text-sm">
              Thiết kế bởi Nhóm Dev Uống Trà ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
