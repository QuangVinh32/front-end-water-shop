import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";
import { getUserInfo, removeUserInfo } from "../helpers/Common";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useTheme } from "../ui/theme/AppThemeContext";

const Navbar = () => {
  const { colors, text } = useTheme();

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

  const isActiveLink = (href: string) => location.pathname === href;

  return (
    <nav
      style={{
        background: colors.bgSecondary,
        borderBottom: `1px solid ${colors.border}`,
      }}
      className="fixed top-0 left-0 right-0 z-50 shadow-sm"
    >
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <div className="flex items-center gap-1">
            <div
              style={{ background: colors.accent }}
              className="w-4 h-4 rounded-full opacity-90"
            />
            <div
              style={{ background: colors.accentHover }}
              className="w-4 h-4 rounded-full -ml-2"
            />
          </div>
          <span
            style={{ color: colors.accent }}
            className="text-3xl font-extrabold hidden sm:block"
          >
            VinhShop
          </span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              style={{
                color: isActiveLink(link.href)
                  ? colors.accent
                  : colors.textSecondary,
                background: isActiveLink(link.href)
                  ? colors.surface
                  : "transparent",
              }}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <button
            onClick={() => navigate("/cart")}
            style={{ color: colors.textPrimary }}
            className="p-2 rounded-lg relative"
          >
            <FiShoppingCart size={20} />
            <span
              style={{ background: colors.error }}
              className="absolute -top-1 -right-1 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
            >
              0
            </span>
          </button>

          {/* User */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 p-2 rounded-lg"
              >
                <img
                  src={
                    user.image ||
                    "https://eric.edu.vn/upload/2025/03/meo-okkk-1-2.webp"
                  }
                  className="w-10 h-10 rounded-full border"
                  style={{ borderColor: colors.border }}
                />
                <span
                  style={{ color: colors.textPrimary }}
                  className="text-sm font-medium hidden sm:block"
                >
                  {user.username}
                </span>
              </button>

              {isDropdownOpen && (
                <div
                  style={{
                    background: colors.bgSecondary,
                    border: `1px solid ${colors.border}`,
                  }}
                  className="absolute right-0 top-full mt-3 w-48 rounded-lg shadow-lg py-2"
                >
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-sm flex items-center gap-2"
                    style={{ color: colors.textPrimary }}
                  >
                    <FiUser size={16} />
                    Hồ sơ của tôi
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-sm flex items-center gap-2"
                    style={{ color: colors.error }}
                  >
                    <FiLogOut size={16} />
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/auth")}
              style={{
                background: colors.accent,
                color: "#fff",
              }}
              className="px-5 py-3 rounded-lg text-sm font-medium shadow"
            >
              Đăng nhập
            </button>
          )}

          {/* Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg md:hidden"
            style={{ color: colors.textPrimary }}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          style={{ background: colors.bgSecondary }}
          className="md:hidden"
        >
          <div className="container mx-auto px-4 py-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  color: isActiveLink(link.href)
                    ? colors.accent
                    : colors.textPrimary,
                }}
                className="px-4 py-3 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
