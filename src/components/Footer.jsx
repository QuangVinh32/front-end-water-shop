import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

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
    <motion.footer
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-gray-50"
    >
      <div className="section-container">
        <motion.div
          variants={fadeIn('up', 0.3)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div
            variants={fadeIn('right', 0.4)}
            className="lg:col-span-4"
          >
          <motion.div
            variants={fadeIn('right', 0.3)}
            className="flex items-center gap-1 cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-4 h-4 bg-blue-600 rounded-full opacity-75"
            ></motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-4 h-4 bg-green-500 rounded-full -ml-2"
            ></motion.div>
          </motion.div>
            <motion.p
              variants={fadeIn('up', 0.6)}
              className="text-gray-600 mb-6"
            >
              Chúng tôi phục vụ trà chanh, trà sữa, nước ép, soda, cafe và nhiều loại thức uống thơm ngon khác. Không gian thân thiện, phục vụ tận tình.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.7)}
              className="flex gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Links Columns */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  variants={fadeIn('up', 0.3 * (categoryIndex + 1))}
                >
                  <motion.h3
                    variants={textVariant(0.2)}
                    className="text-lg  font-medium mb-4 bg-green-600 rounded-lg text-white text-center "
                  >
                    {categoryTitles[category]}
                  </motion.h3>
                  <motion.ul
                    variants={fadeIn('up', 0.4)}
                    className="space-y-3"
                  >
                    {links.map((link, index) => (
                      <motion.li
                        key={index}
                        variants={fadeIn('up', 0.1 * (index + 1))}
                      >
                        <motion.a
                          whileHover={{ x: 5 }}
                          href={link.href}
                          className="text-gray-600 hover:text-gray-900 hover:text-green-600"
                        >
                          {link.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          className="border-t border-gray-200 mt-12 pt-8"
        >
          <motion.div
            variants={fadeIn('up', 0.9)}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <motion.p
              variants={fadeIn('right', 1.0)}
              className="text-gray-600 text-sm"
            >
              © {new Date().getFullYear()} Trà Chanh Nhà Mình. Đã đăng ký bản quyền.
            </motion.p>
            <motion.p
              variants={fadeIn('left', 1.0)}
              className="text-gray-600 text-sm"
            >
              Thiết kế bởi Nhóm Dev Uống Trà ☕
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
