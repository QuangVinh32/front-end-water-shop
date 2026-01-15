import React from "react";
import { useTheme } from "../ui/theme/AppThemeContext";
import {
  Instagram,
  Facebook,
  Phone,
  Twitch,
} from "lucide-react";

const Footer = () => {
  const { colors } = useTheme();

  const footerLinks = {
    company: [
      { name: "Giới thiệu", href: "#" },
      { name: "Điều khoản sử dụng", href: "#" },
      { name: "Chính sách bảo mật", href: "#" },
      { name: "Cách thức hoạt động", href: "#" },
      { name: "Liên hệ với chúng tôi", href: "#" },
    ],
    getHelp: [
      { name: "Đặt hàng & giao hàng", href: "#" },
      { name: "Dịch vụ 24h", href: "#" },
      { name: "Tư vấn nhanh", href: "#" },
    ],
    support: [
      { name: "Câu hỏi thường gặp", href: "#" },
      { name: "Chính sách hoàn trả", href: "#" },
      { name: "Hợp tác kinh doanh", href: "#" },
    ],
    contact: [
      { name: "Facebook", href: "#" },
      { name: "Zalo Hỗ trợ 24/7", href: "#" },
    ],
  };

  const categoryTitles: Record<string, string> = {
    company: "Về quán",
    getHelp: "Dịch vụ",
    support: "Hỗ trợ",
    contact: "Liên hệ",
  };

  return (
    <footer style={{ backgroundColor: colors.bgSecondary }}>
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-1 cursor-pointer">
              <div
                className="w-4 h-4 rounded-full opacity-75"
                style={{ backgroundColor: colors.accent }}
              />
              <div
                className="w-4 h-4 rounded-full -ml-2"
                style={{ backgroundColor: colors.accentHover }}
              />
            </div>

            <p
              className="mb-6"
              style={{ color: colors.textSecondary }}
            >
              Chúng tôi phục vụ trà chanh, trà sữa, nước ép, soda, cafe và nhiều loại
              thức uống thơm ngon khác. Không gian thân thiện, phục vụ tận tình.
            </p>

            <div className="flex justify-center gap-5">
              {[Facebook, Phone, Instagram, Twitch].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                  style={{
                    backgroundColor: colors.surface,
                    color: colors.textPrimary,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accent;
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.surface;
                    e.currentTarget.style.color = colors.textPrimary;
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3
                    className="text-lg mb-4"
                    style={{
                      color: colors.textPrimary,
                      borderBottom: `2px solid ${colors.accent}`,
                    }}
                  >
                    {categoryTitles[category]}
                  </h3>

                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          style={{ color: colors.textSecondary }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = colors.accent)
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color =
                              colors.textSecondary)
                          }
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
        <div
          className="border-t mt-12 pt-8"
          style={{ borderColor: colors.border }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-sm"
              style={{ color: colors.textDisabled }}
            >
              © {new Date().getFullYear()} Trà Chanh Nhà Mình. Đã đăng ký bản quyền.
            </p>
            <p
              className="text-sm"
              style={{ color: colors.textDisabled }}
            >
              Thiết kế bởi Nhóm Dev Uống Trà ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
