import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import woocommerce from '../assets/woocommerce.png'
import meundies from '../assets/meundies.png'
import sitepoint from '../assets/sitepoint.png'
import '../App.css'; 

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <div className="max-w-7xl mx-auto py-20 flex flex-col sm:flex-row sm:items-center items-start">
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
