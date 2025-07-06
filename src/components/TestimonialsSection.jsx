import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const testimonials = [
  {
    id: 1,
    name: "Lê Quang Vinh",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Tôi rất hài lòng với dịch vụ. Họ rất nhiệt tình và hỗ trợ nhanh chóng.",
  },
  {
    id: 2,
    name: "Nguyễn Việt Anh",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Sản phẩm tốt, trải nghiệm mượt mà. Tôi sẽ giới thiệu cho bạn bè.",
  },
  {
    id: 3,
    name: "Nguyễn Mạnh Quân",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "Dịch vụ khách hàng tuyệt vời. Họ luôn có mặt khi tôi cần.",
  },
  {
    id: 4,
    name: "Phạm Thị Ánh",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Tôi cảm thấy an tâm khi sử dụng dịch vụ của họ. Rất chuyên nghiệp!",
  },
  {
    id: 5,
    name: "Hồ Văn Quyền",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Tôi đã dùng dịch vụ hơn một năm và rất hài lòng về mọi thứ.",
  },
  {
    id: 6,
    name: "Hoàng Yến Nhi",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "Họ phản hồi rất nhanh và luôn đặt khách hàng lên hàng đầu.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 pt-8 pb-16 px-4 max-w-7xl mx-auto"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.h2 variants={textVariant(0.2)} className="text-3xl text-green-600 md:text-4xl font-bold mb-4">
          Khách hàng nói gì về chúng tôi
        </motion.h2>
        <motion.p variants={fadeIn('up', 0.4)} className="text-gray-600">
          Những điều khiến họ yêu thích dịch vụ của chúng tôi
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn('up', 0.5)}
        className=""
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12 relative"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className='h-full md:py-12 py-4'>
              <motion.div

                variants={fadeIn('up', 0.2 * index)}
                className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col"
              >
                <motion.div
                  variants={fadeIn('down', 0.3 * index)}
                  className="w-24 h-24 mx-auto mb-4"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>

                <motion.div
                  variants={fadeIn('up', 0.2)}
                  className="flex justify-center mb-2 text-yellow-500"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </motion.div>

                <motion.h3
                  variants={textVariant(0.2)}
                  className="font-semibold text-xl mb-3"
                >
                  {testimonial.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn('up', 0.2 * index)}
                  className="text-gray-600"
                >
                  {testimonial.text}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div
          variants={fadeIn('up', 0.7)}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button
            variants={fadeIn('right', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            variants={fadeIn('left', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
