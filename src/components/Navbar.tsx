import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";
import { getUserInfo, removeUserInfo } from "../helpers/Common";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setUser(getUserInfo());
  }, [location]);

  const handleLogout = () => {
    removeUserInfo();
    setUser(null);
    setIsDropdownOpen(false);
    navigate("/auth");
  };

  const navLinks = [
    { href: "/home", label: "Trang chủ" },
    { href: "/about", label: "Hướng dẫn mua hàng" },
    { href: "/product", label: "Sản phẩm" },
    { href: "/recruitment", label: "Tuyển dụng" },
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b border-gray-100 py-2">
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo và tên công ty */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('/home')}
        >
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-600 rounded-full opacity-85"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full -ml-2"></div>
          </div>
          <span className="text-3xl font-extrabold text-green-500 hidden sm:block">VinhShop</span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActiveLink(link.href)
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section: Cart, User */}
        <div className="flex items-center gap-3">
          {/* Cart Button */}
          <button
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
            onClick={() => navigate('/cart')}
          >
            <FiShoppingCart size={20} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>

          {user ? (
            <div className="relative">
              {/* User Avatar Button */}
              <button
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img
                  src={user.image || "https://eric.edu.vn/upload/2025/03/meo-okkk-1-2.webp"}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border border-gray-300"
                />
                <span className="text-sm font-medium text-gray-700 hidden sm:block">
                  {user.username}
                </span>
              </button>

              {/* User Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-3 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                  <button
                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    onClick={() => {
                      navigate('/profile');
                      setIsDropdownOpen(false);
                    }}
                  >
                    <FiUser size={16} />
                    <span>Hồ sơ của tôi</span>
                  </button>
                  <button
                    className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2"
                    onClick={handleLogout}
                  >
                    <FiLogOut size={16} />
                    <span>Đăng xuất</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                className="hidden md:block bg-gradient-to-r from-blue-500 to-blue-600 
               text-white px-5 py-3 rounded-lg text-sm font-medium shadow-sm 
               hover:shadow-md transition-all"
                onClick={() => navigate("/auth")}
              >
                Đăng nhập
              </button>
            </div>

          )}

          {/* Mobile Menu Button */}
          <div className="flex justify-center md:hidden">
            <button
              className="p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white ">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${isActiveLink(link.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              {!user && (
                <div className="flex flex-col gap-2 pt-2 border-t border-gray-100 mt-2 ">
                  <button
                    className="w-full hidden md:block bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-50"
                    onClick={() => {
                      navigate("/auth");
                      setIsMenuOpen(false);
                    }}
                  >
                    Đăng ký
                  </button>
                  <button
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-lg text-base font-medium"
                    onClick={() => {
                      navigate("/auth");
                      setIsMenuOpen(false);
                    }}
                  >
                    Đăng nhập
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;