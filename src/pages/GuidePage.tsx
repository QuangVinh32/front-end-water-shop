import CompanyLogo from "../components/CompanyLogo";
import { useTheme } from "../ui/theme/AppThemeContext";

export default function GuidePage() {
  const { colors, text } = useTheme();

  const steps = [
    {
      title: "1. Chọn sản phẩm nước uống",
      description: "Tìm loại nước phù hợp với nhu cầu: giải khát, thể thao hoặc sức khỏe.",
      icon: "🥤",
    },
    {
      title: "2. Thêm vào giỏ hàng",
      description: "Bạn có thể chọn nhiều sản phẩm trước khi tiến hành thanh toán.",
      icon: "🛒",
    },
    {
      title: "3. Thanh toán",
      description: "Chọn phương thức thanh toán và xác nhận đơn hàng của bạn.",
      icon: "💳",
    },
    {
      title: "4. Nhận hàng",
      description: "Sản phẩm sẽ được giao tận nơi trong thời gian sớm nhất.",
      icon: "📦",
    },
  ];

  return (
    <div
      className="relative py-10 px-4 mt-20 text-center overflow-hidden"
      style={{ backgroundColor: colors.bgPrimary }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: colors.textPrimary }}
          >
            Quy trình mua hàng đơn giản
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto"
            style={{ color: colors.textSecondary }}
          >
            Chỉ với 4 bước đơn giản, bạn có thể thưởng thức những thức uống tuyệt vời tại nhà
          </p>
        </div>

        {/* Desktop steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{ backgroundColor: colors.surface }}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div
                    className="w-16 h-1 rounded-full transition-colors"
                    style={{ backgroundColor: colors.border }}
                  />
                  <div
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4 h-4 rounded-full transition-colors"
                    style={{ backgroundColor: colors.border }}
                  />
                </div>
              )}

              <div
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center font-bold"
                style={{
                  backgroundColor: colors.accent,
                  color: "#fff",
                }}
              >
                {index + 1}
              </div>

              <div className="mb-6 text-5xl">{step.icon}</div>

              <h3
                className="font-bold text-xl mb-3 text-center"
                style={{ color: colors.textPrimary }}
              >
                {step.title}
              </h3>

              <p
                className="text-sm text-center"
                style={{ color: colors.textSecondary }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden relative mb-16 mx-4">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1"
            style={{ backgroundColor: colors.accent }}
          />
          {steps.map((step, index) => (
            <div key={index} className="flex items-center mb-12 last:mb-0">
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 pr-8 text-right">
                    <h3
                      className="font-bold text-xl mb-2"
                      style={{ color: colors.textPrimary }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: colors.textSecondary }}
                    >
                      {step.description}
                    </p>
                  </div>
                  <div
                    className="relative w-12 h-12 rounded-full flex items-center justify-center font-bold z-10"
                    style={{ backgroundColor: colors.accent, color: "#fff" }}
                  >
                    {index + 1}
                  </div>
                  <div className="w-1/2" />
                </>
              ) : (
                <>
                  <div className="w-1/2" />
                  <div
                    className="relative w-12 h-12 rounded-full flex items-center justify-center font-bold z-10"
                    style={{ backgroundColor: colors.accent, color: "#fff" }}
                  >
                    {index + 1}
                  </div>
                  <div className="w-1/2 pl-8 text-left">
                    <h3
                      className="font-bold text-xl mb-2"
                      style={{ color: colors.textPrimary }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: colors.textSecondary }}
                    >
                      {step.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <CompanyLogo />
    </div>
  );
}
