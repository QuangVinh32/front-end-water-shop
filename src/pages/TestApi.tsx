import React, { useEffect, useState } from "react";
import productService from "../services/ProductService";

const TestApi = () => {
    const [products, setProducts] = useState<any[]>([]);
    console.log("products", products);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await productService.getAll({});
                console.log("API response:", res.data); 
                setProducts(res.data.content || []);  
            } catch (err) {
                console.error("Lỗi khi gọi API:", err);
            }
        };

        fetchProducts();
    }, []);
    return (
        <div>
            <div className="grid grid-cols-3 gap-4 p-4">
                
                {products.map((p, idx) => (
                    <div key={idx} className="border rounded-xl p-4 shadow">
                        <img
                            src={`${p.productImages[0]}`}
                            alt={p.productName}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="mt-2 text-lg font-bold">{p.productName}</h3>
                        <p className="text-gray-600">{p.description}</p>
                        {/* <p className="mt-1 text-green-600 font-semibold">
                            {p.price.toLocaleString()} đ
                        </p> */}
                        <p className="text-sm text-red-500">Giảm giá: {p.discount}%</p>
                        <p className="text-sm">Số lượng: {p.quantity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestApi;
