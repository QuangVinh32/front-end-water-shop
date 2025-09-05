import { Link } from 'react-router-dom';
import TestimonialsSection from './TestimonialsSection';
import SimpleSwiper from './SimpleSwiper';
import ProductCard from '../pages/ProductCard';
import ProductData from '../pages/ProductData';
import CategorySwiper from './CategorySwiper';

const Hero = () => {

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
        className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 sm:pt-10 pt-12 max-w-7xl mx-auto"
      >
        <SimpleSwiper />
      </section>
      <section
        id="category"
        className="px-4 sm:px-6 lg:px-8 sm:pt-8 pt-8 max-w-7xl mx-auto"
      >
        <CategorySwiper />
      </section>

      <div className="text-center mt-8">
        <h2 className="text-2xl text-green-600 md:text-3xl font-bold ">
          Danh sách sản phẩm nổi bật
        </h2>
        {/* <p className="text-gray-600">
          Những điều khiến họ yêu thích dịch vụ của chúng tôi
        </p> */}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {ProductData.slice(0, 10).map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <Link
          to="/product"
          className="text-center bg-gradient-to-r from-blue-500 to-green-500 
             mt-8 text-white text-lg cursor-pointer w-[150px] mx-auto h-[50px] 
             flex items-center justify-center rounded-sm 
             shadow-md hover:shadow-lg hover:shadow-green-500/40 
             transition duration-300"
        >
          Xem tất cả
        </Link>

      </div>
      <TestimonialsSection />

    </>
  )
}
export default Hero
