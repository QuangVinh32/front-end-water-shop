import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  const navLinks = [
    { href: "/home", label: "Trang chủ" },
    { href: "/about", label: "Hướng dẫn mua hàng" },
    { href: "/product", label: "Sản phẩm" },
    { href: "/recruitment", label: "Tuyển dụng" },
    // { href: "/contact", label: "Liên hệ" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">

        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full -ml-2"></div>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:bg-gray-200 rounded-lg p-2 hover:text-green-600"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Cart + Button */}
        <div className='flex items-center gap-4'>
          <button className="relative hover:bg-gray-200 p-2 rounded-xl transition">
            <FiShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            </span>
          </button>
          <button
            className="hidden md:block mr-10 rounded-sm bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2.5 shadow-md hover:shadow-lg hover:shadow-green-500/40 
             transition duration-300"
            onClick={() => window.location.href = "/auth"}
          >
            Đăng nhập
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2 ${activeLink === link.href ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
              Get in touch
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
