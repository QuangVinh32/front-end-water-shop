import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
    return (
        <div className="w-full ">
            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={4}
                spaceBetween={10}
                breakpoints={{
                    480: { slidesPerView: 3, spaceBetween: 15 },
                    768: { slidesPerView: 4, spaceBetween: 20 },
                    1024: { slidesPerView: 5, spaceBetween: 25 },
                    1280: { slidesPerView: 6, spaceBetween: 30 },
                }}
            >
                {categories.map((c, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center cursor-pointer">
                            <div className="w-13 h-13 flex items-center justify-center rounded-full border border-orange-400 bg-orange-100">
                                <span className="text-2xl">{c.icon}</span>
                            </div>
                            <p className="text-sm font-semibold mt-2">{c.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}
