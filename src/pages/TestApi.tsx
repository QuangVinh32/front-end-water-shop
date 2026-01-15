import React, { useEffect, useState } from "react";
import productService from "../services/ProductService";
import { useTheme } from "../ui/theme/AppThemeContext";

const TestApi = () => {
  const { colors, text } = useTheme();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await productService.getAll({});
        setProducts(res.data.content || []);
      } catch (err) {
        console.error("Lỗi khi gọi API:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div
      style={{
        background: colors.bgPrimary,
        minHeight: "100vh",
        padding: 16,
      }}
    >
      <h1 style={text.h1}>Test API + Theme</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          marginTop: 16,
        }}
      >
        {products.map((p, idx) => (
          <div
            key={idx}
            style={{
              background: colors.surface,
              border: `1px solid ${colors.border}`,
              borderRadius: 16,
              padding: 16,
            }}
          >
            <img
              src={p.productImages?.[0]}
              alt={p.productName}
              style={{
                width: "100%",
                height: 160,
                objectFit: "cover",
                borderRadius: 12,
              }}
            />

            <h3 style={{ ...text.h2, marginTop: 8 }}>
              {p.productName}
            </h3>

            <p style={text.caption}>{p.description}</p>

            <p
              style={{
                ...text.body,
                color: colors.accent,
                fontWeight: 600,
                marginTop: 4,
              }}
            >
              {p.price?.toLocaleString()} đ
            </p>

            <p style={{ ...text.caption, color: colors.error }}>
              Giảm giá: {p.discount}%
            </p>

            <p style={text.caption}>Số lượng: {p.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestApi;
