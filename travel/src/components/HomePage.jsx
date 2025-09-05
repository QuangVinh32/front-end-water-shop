import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import hue from "../assets/images/hue.jpg";
import mykhe from "../assets/images/mykhe.jpg";
import hoian from "../assets/images/hoian.jpg";
import bana from "../assets/images/bana.jpg";



const HomePage = () => {
  const carImages = [
    "https://picsum.photos/600/400?random=11",
    "https://picsum.photos/600/400?random=12",
    "https://picsum.photos/600/400?random=13",
  ];


  const routes = [
    {
      id: 1,
      from: "TP. Đà Nẵng",
      to: "TP. Hội An",
      price: "350.000đ/chiều",
    //   time: "45 phút",
      img: hoian,
    },
    {
      id: 2,
      from: "TP. Đà Nẵng",
      to: "Bà Nà Hills",
      price: "500.000đ/chiều",
    //   time: "1 giờ 45 phút",
      img: bana,
    },
    {
      id: 3,
      from: "TP. Đà Nẵng",
      to: "Thừa Thiên Huế",
      price: "800.000đ/chiều",
    //   time: "2 giờ 15 phút",
      img: hue,
    },
    {
      id: 4,
      from: "TP. Đà Nẵng",
      to: "Biển mỹ khê",
      price: "600.000đ/chiều",
    //   time: "1 giờ 15 phút",
      img: mykhe,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      content: "Xe sạch sẽ, tài xế thân thiện. Đi từ TP. Đà Nẵng ra Hội An rất thoải mái!",
      rating: 5,
    },
    {
      id: 2,
      name: "Trần Thị B",
      content: "Dịch vụ chuyên nghiệp, giá hợp lý. Sẽ đặt lại lần sau.",
      rating: 4,
    },
    {
      id: 3,
      name: "Lê Minh C",
      content: "Chuyến đi Huế thật tuyệt vời, tài xế vui tính, nhiệt tình.",
      rating: 5,
    },

  ];

return (
    <div className="bg-white min-h-screen">
        {/* Header */}
        <header className="bg-orange-400 text-white py-4 text-center text-2xl font-bold shadow-md">
            Dịch Vụ Xe Du Lịch TP. Đà Nẵng
        </header>

        {/* Thông tin xe */}
        <section className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-6">Thông Tin Xe</h2>
            <div className="bg-gray-100 p-6 shadow-lg flex flex-col md:flex-row gap-6">
                {/* Swiper cho hình ảnh xe */}
                <div className="w-full md:w-1/2">
                    <Swiper
                        spaceBetween={10}
                        centeredSlides={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className=""
                    >
                        {carImages.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    alt={`Xe du lịch ${index + 1}`}
                                    className="w-full h-64 md:h-80 object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Mô tả xe */}
                <div className="flex-1">
                    <h3 className="text-xl font-semibold">Xe 7 chỗ - Toyota Fortuner</h3>
                    <p className="text-gray-600 mt-2">
                        Đời 2022, máy lạnh, wifi, ghế ngả thoải mái
                    </p>
                    <p className="text-gray-800 mt-2">
                        Phù hợp cho gia đình và nhóm bạn 4-6 người
                    </p>
                    <div className="flex justify-center gap-3 mt-6">
                        <a
                            href="tel:0905123456"
                            className="bg-orange-400 text-white px-4 py-2 rounded-full font-bold hover:bg-orange-600"
                        >
                            📞 Gọi Ngay
                        </a>
                        <a
                            href="https://zalo.me/0905123456"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-600"
                        >
                            Zalo
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-blue-700 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-800"
                        >
                            Facebook
                        </a>
                    </div>
                    {/* Ca sáng và tối */}
                    <div className="mt-6">
                        <h4 className="font-semibold text-gray-700 mb-2">Các ca phục vụ:</h4>
                        <ul className="list-inside text-gray-600">
                            <li>Ca sáng: 6:00 - 11:00</li>
                            <li>Ca chiều: 13:00 - 17:00</li>
                            <li>Ca tối: 19:00 - 23:00</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Tuyến phổ biến */}
        <section className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Tuyến Phổ Biến</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {routes.map((r) => (
                    <div
                        key={r.id}
                        className="bg-white shadow-md hover:shadow-lg transition overflow-hidden"
                    >
                        <img
                            src={r.img}
                            alt={`${r.from} - ${r.to}`}
                            className="w-full h-auto object-cover"
                        />
                        <div className="p-5">
                            <div className="h-[45px] font-semibold text-gray-800">
                                {r.from} → {r.to}
                            </div>
                            <p className="text-orange-400 font-bold mt-2">{r.price}</p>
                            {/* <p className="text-gray-600">Thời gian: {r.time}</p> */}
                            <div className="mt-4 flex justify-evenly gap-3">
                                <a
                                    href="https://zalo.me/0905123456"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-orange-400 text-white px-3 py-2 text-sm font-medium hover:bg-blue-600"
                                >
                                    Zalo
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-orange-400 text-white px-3 py-2  text-sm font-medium hover:bg-blue-800"
                                >
                                    Facebook
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Đánh giá khách hàng */}
        <section className="bg-gray-50 py-10">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Khách Hàng Nói Gì?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-white p-6 shadow-md">
                            <h4 className="font-bold text-lg">{t.name}</h4>
                            <div className="flex text-orange-400 my-2">
                                {[...Array(2)].map((_, i) => (
                                    <i
                                        key={i}
                                        className={`ri-star-${
                                            i < t.rating ? "fill" : "line"
                                        } text-lg`}
                                    ></i>
                                ))}
                            </div>
                            <p className="text-gray-600 italic">"{t.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    </div>
);
};

export default HomePage;
