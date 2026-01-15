import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";
import "../App.css";
import { useTheme } from "../ui/theme/AppThemeContext";

const CompanyLogo = () => {
  const { colors } = useTheme();

  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "80px 16px",
        background: colors.bgPrimary,
      }}
    >
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              style={{
                margin: "0 48px",
                height: 32,
                width: 144,
                objectFit: "contain",
                filter: "grayscale(100%)",
                opacity: 0.6,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(0%)";
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(100%)";
                e.currentTarget.style.opacity = "0.6";
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
