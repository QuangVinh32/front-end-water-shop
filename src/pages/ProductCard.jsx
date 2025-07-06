
const ProductCard = ({ product }) => {
    return (
        <div className="rounded-xl overflow-hidden shadow hover:shadow-lg hover:scale-105 transition p-4 mt-6">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-lg"
            />

            <div className="mt-3 text-sm text-gray-600 flex items-center gap-1">
                <span className="text-yellow-500 font-semibold">{product.rating}</span>
                <span>⭐</span>
                <span>Đã bán ({product.sold})</span>
            </div>

            <h3 className="text-base font-medium line-clamp-2 mt-1">{product.name}</h3>

            <div className="mt-2">
                {product.originalPrice ? (
                    <span className="line-through text-gray-400 text-sm mr-2">
                        {product.originalPrice.toLocaleString()} VNĐ
                    </span>
                ) : null}

                {product.salePrice ? (
                    <span className="text-red-600 font-bold">
                        {product.salePrice.toLocaleString()} VNĐ
                    </span>
                ) : (
                    <span className="text-gray-500">Liên hệ</span>
                )}

            </div>

        </div>
    );
};

export default ProductCard;
