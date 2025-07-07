const categories = [
  'Tất cả', 'Trà Sữa', 'Trà trái cây', 'Nước ép', 'Sinh tố', 'Cafe', 'Sữa tươi',
  'Soda', 'Kem', 'Đồ ăn vặt', 'Đồ uống nóng', 'Chè', 'Sữa chua', 'Tàu hủ', 'Mỳ Cay'
];

const ProductFilter = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between border-1 border-gray-200 bg-white p-4 rounded-xl shadow-md">

      {/* Tìm kiếm */}
      <div className="w-full md:w-1/3">
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-green-500 transition">
          <div className="px-3 text-gray-400">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm nước uống..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 pr-4 bg-white text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Danh mục */}
      <div className="w-full md:w-2/3 overflow-x-auto">
        <div className="flex gap-2 flex-nowrap whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm border transition whitespace-nowrap ${selectedCategory === cat
                ? 'bg-green-500 text-white border-green-500 shadow-sm'
                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-green-100 hover:text-green-700'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
