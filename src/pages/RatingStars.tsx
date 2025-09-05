import { Star } from "lucide-react";

const RatingStars = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => {
        const starValue = i + 1;
        const isFull = rating >= starValue;
        const isHalf = rating >= starValue - 0.5 && rating < starValue;

        return (
          <div key={i} className="relative w-4 h-4">
            {/* Nền xám */}
            <Star className="w-4 h-4 text-gray-300" />

            {isFull && (
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 absolute top-0 left-0" />
            )}

            {isHalf && (
              <Star
                className="w-4 h-4 text-yellow-400 fill-yellow-400 absolute top-0 left-0"
                style={{
                  clipPath: "inset(0 50% 0 0)", // chỉ fill 1 nửa
                }}
              />
            )}
          </div>
        );
      })}
      <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

export default RatingStars;
