// src/pages/ProductDetail.jsx
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ProductData from './ProductData';
import ProductCard from '../pages/ProductCard';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const product = ProductData.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product?.image?.[0]);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


  if (!product) {
    return (
      <div className="max-w-screen-xl flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy sản phẩm</h2>
          <p className="text-gray-600 mb-6">Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition duration-300"
          >
            Xem sản phẩm khác
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 mb-10">
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          <li>
            <Link to="/" className="text-green-600 hover:text-green-800 font-medium">
              Trang chủ
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link to="/product" className="text-gray-500 hover:text-green-800">
              Sản phẩm
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <span className="text-gray-500">{product.category}</span>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <span className="text-gray-500 ">{product.name}</span>
          </li>
        </ol>
      </nav>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="flex flex-col lg:flex-row gap-8 p-6">
          <div className="lg:w-2/5 flex flex-col">
            <div className="bg-gray-50 overflow-hidden aspect-square flex items-center justify-center p-6 rounded-xl">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>

            <div className="flex gap-2 mt-4">
              {product.image.map((imgUrl, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    selectedImage === imgUrl ? 'border-green-500' : 'border-transparent'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`thumbnail-${index}`}
                    className="w-full h-full object-cover hover:opacity-80"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-3/5">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
                  <div className="flex items-center mt-1">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
              

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                  
                  <svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  
                  <span className="ml-1 text-gray-800 font-medium">{product.rating}</span>
                </div>
                <div className="text-gray-600">Đã bán: <span className="font-medium">{product.sold}</span></div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h2 className="text-lg font-medium text-gray-900 mb-2">Mô tả sản phẩm</h2>
                <p className="text-gray-700">{product.description}</p>
              </div>
              

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-900 mb-1">Giá sản phẩm</h3>
                <div className="flex items-baseline">
                  {product.originalPrice && (
                    <span className="text-gray-500 text-lg line-through mr-3">
                      {product.originalPrice.toLocaleString()}₫
                    </span>
                  )}
                  <span className="text-2xl font-bold text-red-600">
                    {product.salePrice ? `${product.salePrice.toLocaleString()}₫` : 'Liên hệ'}
                  </span>

                  {product.salePrice && product.originalPrice && (
                    <span className="ml-3 bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded">
                      Tiết kiệm {((product.originalPrice - product.salePrice) / 1000).toFixed(0)}k
                    </span>
                  )}
                </div>
              </div>
              {/* <div className="mt-4">
              <span className={`inline-block px-3 py-1 text-sm font-medium rounded-lg ${
                product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {product.inStock ? 'Còn hàng' : 'Hết hàng'}
              </span>
            </div> */}

              <div className="mt-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 border border-transparent rounded-lg py-3 px-8 text-base font-medium text-white hover:bg-green-700 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Thêm vào giỏ hàng
                  </button>

                  <button className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 border border-transparent rounded-lg py-3 px-8 text-base font-medium text-gray-900 hover:bg-yellow-500 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Mua ngay
                  </button>
                </div>

                <div className="mt-6 flex justify-center">
                  <Link to="/" className="text-green-600 hover:text-green-800 flex items-center text-sm font-medium">
                    <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Tiếp tục mua sắm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>


      <div className="mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Sản phẩm liên quan</h2>
          <Link to="/product" className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center">
            Xem tất cả
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
          {ProductData
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 5)
            .map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;