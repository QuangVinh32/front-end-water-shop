import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useTheme } from "../ui/theme/AppThemeContext";

const categories = [
  { name: "Cà phê", icon: "☕" },
  { name: "Trà sữa", icon: "🧋" },
  { name: "Sữa tươi", icon: "🥛" },
  { name: "Kem", icon: "🍦" },
  { name: "Nước ép", icon: "🍹" },
  { name: "Soda", icon: "🥤" },
  { name: "Trà", icon: "🍵" },
];

export default function CategorySwiper() {
  const { colors, text } = useTheme();

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: colors.bgPrimary,
      }}
    >
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={5}
        spaceBetween={10}
        breakpoints={{
          480: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 25 },
          1280: { slidesPerView: 6, spaceBetween: 30 },
        }}
        style={
          {
            "--swiper-navigation-color": colors.accent,
          } as React.CSSProperties
        }
      >
        {categories.map((c, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center cursor-pointer group">
              <div
                className="w-13 h-13 flex items-center justify-center rounded-full transition-all duration-300"
                style={{
                  border: `1px solid ${colors.border}`,
                  backgroundColor: colors.surface,
                }}
              >
                <span className="text-2xl">{c.icon}</span>
              </div>

              <p
                className="text-sm font-semibold mt-2 transition-colors duration-300"
                style={{
                  color: colors.accent,
                }}
              >
                {c.name}
              </p>

              {/* Hover effect */}
              <style>
                {`
                  .group:hover div {
                    background-color: ${colors.accent};
                  }
                  .group:hover span {
                    filter: brightness(1.2);
                  }
                  .group:hover p {
                    color: ${colors.accent};
                  }
                `}
              </style>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
