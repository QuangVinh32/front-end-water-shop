import React from 'react'
import {  FaTwitter, FaLinkedinIn, } from 'react-icons/fa'
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Facebook,
  Phone,
  Send,
  Twitch,
  Twitter,
  User, MessageSquare,
} from "lucide-react";  
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
    <footer className="bg-white">
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
              <div className="flex justify-center gap-5">
                {[
                  { icon: <Facebook/>, href: "#" },
                  { icon: <Phone />, href: "#" },
                  { icon: <Instagram />, href: "#" },
                  { icon: <Twitch />, href: "#" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    className="p-3 rounded-full bg-muted text-foreground hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {item.icon}
                  </a>
                ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg mb-4 bg-gradient-to-r from-blue-500 to-green-500  text-white border-green-600">
                    {categoryTitles[category]}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-green-600"
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
