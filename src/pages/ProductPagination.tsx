import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductPagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-10 mb-10">
      {/* Nút trước */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center justify-center w-9 h-9 rounded-full border transition-colors ${currentPage === 1
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-white text-gray-700 hover:bg-blue-100 hover:text-green-600 border-gray-300'
          }`}
      >
        <ChevronLeft size={18} />
      </button>

      {/* Các nút số trang */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-9 h-9 rounded-full font-medium text-sm transition-all border ${currentPage === page
            ? 'bg-green-600 text-white border-green-600'
            : 'bg-white text-gray-700 hover:bg-blue-100 hover:text-green-600 border-gray-300'
            }`}
        >
          {page}
        </button>
      ))}

      {/* Nút sau */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center w-9 h-9 rounded-full border transition-colors ${currentPage === totalPages
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-white text-gray-700 hover:bg-blue-100 hover:text-green-600 border-gray-300'
          }`}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default ProductPagination;
