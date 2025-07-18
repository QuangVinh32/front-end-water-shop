import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition duration-300 p-4 mt-4 group cursor-pointer">
        {/* Hình ảnh */}
        <div className="overflow-hidden rounded-lg relative">
          <img
            src={product.image[0]} // ✅ lấy ảnh đầu tiên
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Trạng thái còn hàng / hết hàng */}
          <span
            className={`absolute top-2 left-2 text-xs px-2 py-1 rounded font-medium ${
              product.inStock ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            }`}
          >
            {product.inStock ? 'Còn hàng' : 'Hết hàng'}
          </span>
        </div>

        {/* Đánh giá + số đã bán */}
        <div className="mt-3 text-sm text-gray-600 flex items-center gap-1">
          <span className="text-yellow-500 font-semibold">{product.rating}</span>
          <span>⭐</span>
          <span className="text-gray-500">| Đã bán {product.sold}</span>
        </div>

        {/* Tên sản phẩm */}
        <h3 className="font-medium flex items-center text-gray-800 mt-1 overflow-hidden text-ellipsis whitespace-nowrap">
          {product.name}
        </h3>

        {/* Giá */}
        <div className="mt-2 flex items-center gap-2">
          {product.originalPrice && (
            <span className="line-through text-gray-400 text-sm">
              {product.originalPrice.toLocaleString()}₫
            </span>
          )}
          {product.salePrice ? (
            <span className="text-red-600 font-bold text-lg">
              {product.salePrice.toLocaleString()}₫
            </span>
          ) : (
            <span className="text-gray-500 text-sm">Liên hệ</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
