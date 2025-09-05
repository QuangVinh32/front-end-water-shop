const SingleFillStar = ({ rating, max = 5 }) => {
  // Tính phần trăm fill dựa trên max (mặc định 5)
  const percent = Math.min((rating / max) * 100, 100);

  return (
    <div className="relative w-5 h-5">
      {/* Ngôi sao xám (nền) */}
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 text-gray-300"
        fill="currentColor"
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.834 1.48 8.276L12 18.896l-7.416 4.52 1.48-8.276L0 9.306l8.332-1.151z" />
      </svg>

      {/* Ngôi sao vàng, cắt theo % */}
      <div
        className="absolute top-0 left-0 overflow-hidden"
        style={{ width: `${percent}%` }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.834 1.48 8.276L12 18.896l-7.416 4.52 1.48-8.276L0 9.306l8.332-1.151z" />
        </svg>
      </div>
    </div>
  );
};

export default SingleFillStar;
