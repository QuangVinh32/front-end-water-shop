import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import ProductData from './ProductData';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from "swiper/react";
import RatingStars from './RatingStars';

const reviews = [
  {
    productId: 1,
    name: "Lê Quang Vinh",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    rating: 5,
    text: "Sản phẩm tốt, giao hàng nhanh, rất hài lòng.",
  },
  {
    productId: 1,
    name: "Nguyễn Thị Lan",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 4,
    text: "Dịch vụ ổn, chất lượng sản phẩm khá tốt.",
  },
  {
    productId: 2,
    name: "Phạm Thị Ánh",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
    text: "Sản phẩm rất tuyệt vời. Mình sẽ mua lại lần sau!",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = ProductData.find(p => p.id === parseInt(id ?? '', 10));
  const [selectedImage, setSelectedImage] = useState(product?.image?.[0]);

  const productReviews = reviews.filter(r => r.productId === product?.id);
  const totalReviews = productReviews.length;
  const averageRating = totalReviews > 0
    ? (productReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
    : 0;

  if (!product) {
    return (
      <div className="max-w-screen-xl flex items-center justify-center bg-gray-50 ">
        <div className="text-center p-8 bg-white rounded-xl shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy sản phẩm</h2>
          <p className="text-gray-600 mb-6">Sản phẩm bạn đang tìm không tồn tại hoặc đã bị xóa.</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 text-white font-medium rounded-lg hover:bg-green-700 transition duration-300"
          >
            Quay lại trang chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-27 sm:mt-28 mb-12">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center flex-wrap gap-2">
          <li>
            <Link to="/" className="text-green-600 hover:text-green-800 font-medium">Trang chủ</Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link to="/product" className="text-green-600 hover:text-green-800 font-medium">Sản phẩm</Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-500">{product.name}</li>
        </ol>
      </nav>

      {/* Product Detail */}
      <div className="shadow border-gray-200 border-1 p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Images */}
          <div className="lg:w-1/4 flex flex-col">
            <div className="p-4 aspect-square flex items-center justify-center">
              <img src={selectedImage} alt={product.name} className="w-full h-full object-contain " />
            </div>
            <div className="mt-4">
              <Swiper
                spaceBetween={10}
                slidesPerView={4}   // mặc định hiển thị 4 ảnh
                grabCursor={true}
              >
                {product.image.map((imgUrl, i) => (
                  <SwiperSlide key={i}>
                    <button
                      onClick={() => setSelectedImage(imgUrl)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition ${selectedImage === imgUrl ? "border-green-500" : "border-transparent"
                        }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`thumb-${i}`}
                        className="w-full h-full object-cover hover:opacity-80"
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Info */}
          <div className="lg:w-3/5 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-gradient-to-r from-blue-500 to-green-500  text-white border-green-600 text-xs font-semibold px-3 py-1 ">{product.category}</span>
                <span className={`text-xs font-semibold px-3 py-1 ${product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-600 text-white'}`}>
                  {product.inStock ? 'Còn hàng' : 'Hết hàng'}
                </span>
              </div>

              {/* Giá */}
              <div className="mt-4 flex items-center gap-3">
                {product.originalPrice && (
                  <span className="line-through text-gray-400 text-lg">{product.originalPrice.toLocaleString()}₫</span>
                )}
                <span className="text-red-600 font-bold text-2xl">{product.salePrice.toLocaleString()}₫</span>
              </div>

              <RatingStars rating={product.rating} />


              {/* Mô tả */}
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h2 className="font-semibold text-gray-900 mb-2">Mô tả sản phẩm</h2>
                <p className="text-gray-700 leading-relaxed line-clamp-3">{product.description}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white rounded-lg py-3 font-medium hover:bg-green-700 transition">
                🛒 Thêm vào giỏ hàng
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 rounded-lg py-3 font-medium hover:bg-yellow-500 transition">
                ⚡ Mua ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-10 bg-white shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Đánh giá sản phẩm</h2>
        <div className="flex items-center gap-4 mb-6">
          <div className="text-yellow-500 text-3xl font-bold">{averageRating}</div>
          <div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < Math.round(Number(averageRating)) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 text-sm">{totalReviews} đánh giá</span>
          </div>
        </div>

        <div className="space-y-4">
          {totalReviews > 0 ? (
            productReviews.map((r, i) => (
              <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                <img src={r.image} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-gray-800">{r.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className={`w-4 h-4 ${j < r.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mt-1">{r.text}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center py-8">Chưa có đánh giá nào.</p>
          )}
        </div>
      </div>

      {/* Related */}
      <div className="mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Sản phẩm liên quan</h2>
          <Link to="/product" className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center">
            Xem tất cả
            <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {ProductData.filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 5)
            .map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
