import { useTheme } from "../ui/theme/AppThemeContext";

import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";

import "../App.css";

const CompanyLogo = () => {
  const { colors } = useTheme();

  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <div
      className="max-w-7xl mx-auto py-20 flex flex-col sm:flex-row sm:items-center items-start"
      style={{
        // backgroundColor: colors.bgPrimary,
        // borderTop: `1px solid ${colors.border}`,
      }}
    >
      <div className="marquee-wrapper w-full overflow-hidden">
        <div className="marquee-content flex items-center">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="mx-12 h-8 w-36 object-contain transition-all duration-300"
              style={{
                filter: "grayscale(100%)",
                opacity: 0.6,
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
