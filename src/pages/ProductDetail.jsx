import { useParams, Link } from 'react-router-dom';
import ProductData from '../pages/ProductData';

const ProductDetail = () => {
  const { id } = useParams();
  const product = ProductData.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold">Không tìm thấy sản phẩm</h2>
        <Link to="/home" className="mt-4 inline-block text-blue-500 underline">Quay lại trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link to="/product" className="text-green-600 text-sm hover:underline inline-block mb-6">← Quay lại</Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-md rounded-xl p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-lg"
        />

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">{product.name}</h2>

          <p className="text-gray-600 mb-4">
            {product.description || 'Thức uống thơm ngon, giải khát tuyệt vời.'}
          </p>

          <div className="mb-6 space-y-2">
            <p>
              <span className="text-gray-500">Giá gốc:</span>{' '}
              <span className="line-through text-gray-400">{product.originalPrice.toLocaleString()}₫</span>
            </p>
            <p>
              <span className="text-gray-500">Giá khuyến mãi:</span>{' '}
              <span className="text-orange-600 font-semibold text-xl">{product.salePrice.toLocaleString()}₫</span>
            </p>
            <p>
              <span className="text-gray-500">Đã bán:</span>{' '}
              <span className="text-black font-medium">{product.sold}</span>
            </p>
            <p>
              <span className="text-gray-500">Đánh giá:</span>{' '}
              <span className="text-yellow-500">{product.rating} ⭐</span>
            </p>
          </div>

          <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
