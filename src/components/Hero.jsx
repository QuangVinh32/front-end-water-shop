import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import TestimonialsSection from './TestimonialsSection';
import SimpleSwiper from './SimpleSwiper';
import ProductCard from '../pages/ProductCard';
import ProductData from '../pages/ProductData';

const Hero = () => {
  return (
    <>
      <section id="home" className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-34 pb-2 max-w-screen-xl mx-auto box-border">
        {/* Cột trái */}
        <div className="w-full md:w-1/2 space-y-8">
          <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {/* Huy hiệu sao */}
            <div className="flex items-center gap-2 bg-yellow-500 w-fit px-4 py-2 rounded-full hover:bg-white transition-colors cursor-pointer group">
              <span className="text-white group-hover:scale-110 transition-transform">★</span>
              <span className="text-sm font-medium text-white group-hover:text-yellow-500">Thương hiệu đồ uống yêu thích</span>
            </div>
          </motion.div>

          <motion.h1
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Chào mừng đến với{' '}
            <span className="text-green-600 inline-block">
              Quán nước giải khát
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-200/60"></span>
            </span>{' '}
            của chúng tôi!
            <span className="inline-block ml-2 animate-pulse">🍹</span>
          </motion.h1>

          <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg md:text-xl max-w-xl text-gray-700"
          >
            Thưởng thức trà chanh, trà sữa, nước ép, soda, cà phê và nhiều loại thức uống thơm ngon khác – phục vụ nhanh chóng, giá cả hợp lý, không gian thoáng mát.
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex gap-3 max-w-md"
          >
            {/* Form đăng ký nhận khuyến mãi */}
            <input
              type="email"
              placeholder="Nhập email để nhận ưu đãi"
              className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all text-gray-600"
            />
            <button className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-green-100 active:scale-95">
              Đăng ký
            </button>
          </motion.div>
        </div>

        {/* Cột phải - Hình ảnh */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-0"
        >
          {/* <div>
            <img
              src={banner}
              alt="Quán nước"
              className="rounded-lg w-full h-[550px] object-cover transition-transform duration-300"
            />
          </div> */}
          <SimpleSwiper />

        </motion.div>
      </section>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {ProductData.slice(0, 10).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <TestimonialsSection />

    </>

  )
}

export default Hero
