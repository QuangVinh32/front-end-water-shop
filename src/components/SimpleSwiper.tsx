import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'; // thêm EffectCoverflow
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import banner images
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';

const slides = [
  { id: 1, image: banner1 },
  { id: 2, image: banner2 },
  { id: 3, image: banner3 },
  { id: 4, image: banner4 },
];

const SimpleSwiper = () => {
  return (
    <section id="swiper" className="shadow-sm overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        effect="flip"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="flex justify-center items-center">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="h-[250px] sm:h-[450px] w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SimpleSwiper;
