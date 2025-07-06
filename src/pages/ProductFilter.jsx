
const categories = ['Tất cả', 'Trà Sữa', 'Trà trái cây', 'Nước ép','Sinh tố', 'Cafe', 'Sữa tươi', 'Soda', 'Kem', 'Đồ ăn vặt', 'Đồ uống nóng', 'Chè', 'Sữa chua','Tàu hủ','Mỳ Cay'];

const ProductFilter = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm z-10">
      {/* Tìm kiếm */}
<div className="w-full md:w-1/3">
  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-primary transition">
    {/* Icon bên trái */}
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

    {/* Input */}
    <input
      type="text"
      placeholder="Tìm kiếm nước uống..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full py-2 pr-4 focus:outline-none"
    />
  </div>
</div>


      {/* Danh mục lọc */}
      <div className="flex flex-wrap gap-2 w-full md:w-2/3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition text-sm ${
              selectedCategory === cat
                ? "bg-primary text-green-600 border-primary"
                : "bg-gray-100 text-gray-700 hover:bg-primary hover:text-white hover:border-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
