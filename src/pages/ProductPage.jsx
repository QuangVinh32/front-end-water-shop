import React, { useState } from 'react';
import ProductCard from '../pages/ProductCard';
import ProductFilter from '../pages/ProductFilter';
import ProductPagination from '../pages/ProductPagination';
import ProductData from '../pages/ProductData';

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

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
    <div className="max-w-screen-xl mx-auto mt-18 px-4 sm:px-6 lg:px-8 py-8">

      {/* Tiêu đề với animation */}
      <motion.h1
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Danh sách nước uống
      </motion.h1>

      {/* Bộ lọc có animation */}
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <ProductFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </motion.div>

      {/* Danh sách sản phẩm có animation từng item */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
        {currentProducts.map((product, index) => (
          <motion.div
            key={product.id}
            variants={fadeIn('up', index * 0.1 + 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {/* Pagination có animation */}
      <motion.div
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10"
      >
        <ProductPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </motion.div>

    </div>
  );
};

export default ProductPage;
