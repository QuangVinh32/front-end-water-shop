import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import ProductPagination from './ProductPagination';
import ProductData from './ProductData';

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const filteredProducts = ProductData.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === 'Tất cả' || product.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  return (
    <div className="max-w-7xl mx-auto px-4 mt-2 sm:px-6 lg:px-8">
        <h1 className="text-2xl text-center mt-10 md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
          Danh sách sản phẩm
        </h1>
        <ProductFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <ProductPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />



    </div>
  );

};

export default ProductPage;
