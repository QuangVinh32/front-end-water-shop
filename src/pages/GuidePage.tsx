import CompanyLogo from "../components/CompanyLogo";
import { useTheme } from "../ui/theme/AppThemeContext";
import TestApi from "./TestApi";

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
      style={{
        background: colors.bgPrimary,
        padding: "40px 16px",
        // marginTop: 80,
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Title */}
        <div style={{ marginBottom: 40, marginTop: 100 }}>
          <h2 style={text.h1}>Quy trình mua hàng đơn giản</h2>
          <p style={{ ...text.body, maxWidth: 700, margin: "8px auto" }}>
            Chỉ với 4 bước đơn giản, bạn có thể thưởng thức những thức uống tuyệt vời tại nhà
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                borderRadius: 24,
                padding: 32,
                transition: "all 0.3s",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: colors.accent,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                {index + 1}
              </div>

              <div style={{ fontSize: 48, marginBottom: 16 }}>{step.icon}</div>
              <h3 style={text.h2}>{step.title}</h3>
              <p style={text.caption}>{step.description}</p>
            </div>
          ))}
        </div>

        {/* <img
          src="http://localhost:8080/files/image/1757742701106.jpg"
          style={{
            marginTop: 40,
            borderRadius: 24,
            maxWidth: "100%",
          }}
        /> */}
      </div>

      <CompanyLogo />
    </div>
  );
}
