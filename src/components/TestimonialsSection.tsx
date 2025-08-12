import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

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
    name: "Nguyễn Thị Lan",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "Họ phản hồi rất nhanh và luôn đặt khách hàng lên hàng đầu.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 pt-8 pb-10 px-4 max-w-7xl mx-auto"
    >
      <div className="text-center">
        <h2 className="text-3xl text-green-600 md:text-4xl font-bold mb-4">
          Khách hàng nói gì về chúng tôi
        </h2>
        <p className="text-gray-600">
          Những điều khiến họ yêu thích dịch vụ của chúng tôi
        </p>
      </div>

      <div>
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
          className="testimonials-swiper relative"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className='h-full md:py-6 py-4'>
              <div className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="flex justify-center mb-2 text-yellow-500">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>

                <h3 className="font-semibold text-xl mb-3">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600">
                  {testimonial.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-4 sm:mt-0 mt-2">
          <button
            className="swiper-button-prev-custom bg-green-500 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="swiper-button-next-custom bg-green-500 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
