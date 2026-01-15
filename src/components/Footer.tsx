import React from "react";
import {
  Instagram,
  Facebook,
  Phone,
  Twitch,
} from "lucide-react";
import { useTheme } from "../ui/theme/AppThemeContext";

const Footer = () => {
  const { colors, text } = useTheme();

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
    <footer
      style={{
        background: colors.bgSecondary,
        color: colors.textPrimary,
        borderTop: `1px solid ${colors.border}`,
      }}
    >
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-1 mb-4">
              <div
                className="w-4 h-4 rounded-full"
                style={{ background: colors.accent }}
              />
              <div
                className="w-4 h-4 rounded-full -ml-2"
                style={{ background: colors.accentHover }}
              />
            </div>

            <p
              className="mb-6 text-sm leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              Chúng tôi phục vụ trà chanh, trà sữa, nước ép, soda, cafe và nhiều
              loại thức uống thơm ngon khác. Không gian thân thiện, phục vụ tận
              tình.
            </p>

            <div className="flex gap-4">
              {[
                { icon: <Facebook />, href: "#" },
                { icon: <Phone />, href: "#" },
                { icon: <Instagram />, href: "#" },
                { icon: <Twitch />, href: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="p-3 rounded-full transition-all"
                  style={{
                    background: colors.surface,
                    color: colors.textPrimary,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.accent;
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = colors.surface;
                    e.currentTarget.style.color = colors.textPrimary;
                  }}
                >
                  {item.icon}
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
                    className="text-base font-semibold mb-4 inline-block px-3 py-1 rounded"
                    style={{
                      background: colors.accent,
                      color: "#fff",
                    }}
                  >
                    {categoryTitles[category]}
                  </h3>

                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-sm transition-colors"
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

        {/* Bottom */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm"
          style={{
            borderTop: `1px solid ${colors.border}`,
            color: colors.textSecondary,
          }}
        >
          <p>
            © {new Date().getFullYear()} Trà Chanh Nhà Mình. Đã đăng ký bản quyền.
          </p>
          <p>Thiết kế bởi Nhóm Dev Uống Trà ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
