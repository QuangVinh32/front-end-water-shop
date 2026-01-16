import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { useTheme } from "../ui/theme/AppThemeContext";

// Import banner images
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";

const slides = [
  { id: 1, image: banner1 },
  { id: 2, image: banner2 },
  { id: 3, image: banner3 },
  { id: 4, image: banner4 },
];

const SimpleSwiper = () => {
  const { colors } = useTheme();

  return (
    <section
      id="swiper"
      className="shadow-sm overflow-hidden"
      style={{
        backgroundColor: colors.bgPrimary,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
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
        loop
        className="w-full"
        style={
          {
            // custom màu pagination theo theme
            "--swiper-pagination-color": colors.accent,
            "--swiper-pagination-bullet-inactive-color": colors.border,
            "--swiper-pagination-bullet-inactive-opacity": "1",
          } as React.CSSProperties
        }
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="flex justify-center items-center"
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="h-[250px] sm:h-[490px] w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SimpleSwiper;
