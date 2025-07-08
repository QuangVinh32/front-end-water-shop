import { useParams, Link } from 'react-router-dom';
import ProductData from '../pages/ProductData';

const ProductDetail = () => {
  const { id } = useParams();
  const product = ProductData.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold">Không tìm thấy sản phẩm</h2>
        <Link to="/home" className="mt-4 inline-block text-blue-500 underline">
          Quay lại trang chủ
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link
        to="/product"
        className="text-green-600 text-sm hover:underline inline-block mb-6"
      >
        ← Quay lại
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl p-8">
        {/* Ảnh sản phẩm */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-80 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Thông tin chi tiết */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-green-600 mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              {product.description || 'Thức uống thơm ngon, giải khát tuyệt vời.'}
            </p>

            <div className="space-y-2 text-base">
              <p>
                <span className="text-gray-500">Giá gốc:</span>{' '}
                <span className="line-through text-gray-400">
                  {product.originalPrice.toLocaleString()}₫
                </span>
              </p>
              <p>
                <span className="text-gray-500">Giá khuyến mãi:</span>{' '}
                <span className="text-orange-600 font-bold text-2xl">
                  {product.salePrice.toLocaleString()}₫
                </span>
              </p>
              <p>
                <span className="text-gray-500">Đã bán:</span>{' '}
                <span className="font-medium text-black">{product.sold}</span>
              </p>
              <p>
                <span className="text-gray-500">Đánh giá:</span>{' '}
                <span className="text-yellow-500 font-medium">{product.rating} ⭐</span>
              </p>
            </div>
          </div>

          <button className="mt-8 bg-green-500 text-white text-lg px-6 py-3 rounded-xl hover:bg-green-600 transition-all shadow-md">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
