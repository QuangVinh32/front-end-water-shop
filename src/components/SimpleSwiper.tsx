import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import banner images
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';


// Slides array with images
const slides = [
    { id: 1, image: banner1 },
    { id: 2, image: banner2 },
    { id: 3, image: banner3 },
    { id: 4, image: banner4 },
    // { id: 5, image: banner5 },
];

const SimpleSwiper = () => {
    return (
        <section
            id="swipper"
            className="shadow-lg bg-yellow-200"
        >
            <Swiper
                modules={[ Pagination, Autoplay]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="w-full max-w-4xl"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="w-full h-full flex justify-center items-center overflow-hidden bg-gray-200">
                            <img
                                src={slide.image}
                                alt={`Slide ${slide.id}`}
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </section>
    );
};

export default SimpleSwiper;
