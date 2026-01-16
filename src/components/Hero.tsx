import { Link } from 'react-router-dom';
import TestimonialsSection from './TestimonialsSection';
import SimpleSwiper from './SimpleSwiper';
import ProductCard from '../pages/ProductCard';
import ProductData from '../pages/ProductData';
import CategorySwiper from './CategorySwiper';
import { useTheme } from '../ui/theme/AppThemeContext';

const Hero = () => {
  const { colors, text } = useTheme();


  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const hours = now.getHours();
  const date = `Ngày ${day} Tháng ${month} Năm ${year}`;
  // const printdate = (0, utils_1.date_to_word)(new Date());

  console.log(date);
  console.log("hi guys", day, month, year, hours, now.getMinutes(), now.getSeconds());

  return (
    <>
      <section
        id="home"
        className="w-full pt-18 sm:pt-22"
        style={{ backgroundColor: colors.bgPrimary }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleSwiper />
        </div>
      </section>

      <section
        className="w-full py-10"
        style={{ backgroundColor: colors.bgPrimary }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <CategorySwiper />
        </div>
      </section>


      <section className="w-full py-8" style={{ backgroundColor: colors.bgPrimary }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: colors.accent }}
          >
            Danh sách sản phẩm nổi bật
          </h2>
        </div>
      </section>
      <section
        className="w-full py-10"
        style={{ backgroundColor: colors.bgPrimary }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {ProductData.slice(0, 10).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Link
            to="/product"
            className="mt-8 mx-auto w-[150px] h-[50px]
        flex items-center justify-center
        rounded-md text-white text-lg
        transition shadow-md hover:shadow-lg"
            style={{
              background: `linear-gradient(90deg, ${colors.textPrimary}, ${colors.accent})`,
            }}
          >
            Xem tất cả
          </Link>
        </div>
      </section>

      <TestimonialsSection />

    </>
  )
}
export default Hero
