import React, { useState, useEffect, useMemo } from 'react';
import ProductCard from '../pages/ProductCard';
import ProductFilter from '../pages/ProductFilter';
import ProductPagination from '../pages/ProductPagination';
import ProductData from '../pages/ProductData';

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  // Lọc sản phẩm được memo hóa
  const filteredProducts = useMemo(() => {
    return ProductData.filter((product) => {
      const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory =
        selectedCategory === 'Tất cả' || product.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / productsPerPage));

  // Reset trang khi bộ lọc thay đổi
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Đảm bảo trang hiện tại không vượt quá tổng số trang
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  // Tính toán trang an toàn và sản phẩm hiện tại
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const indexOfFirst = (safeCurrentPage - 1) * productsPerPage;
  const indexOfLast = safeCurrentPage * productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Danh sách nước uống</h1>

      <ProductFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Danh sách sản phẩm */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
        {currentProducts.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Hiển thị thông báo khi không có sản phẩm */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">Không tìm thấy sản phẩm nào phù hợp</p>
        </div>
      )}

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className="mt-10">
          <ProductPagination
            currentPage={safeCurrentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProductPage;