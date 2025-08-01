import CompanyLogo from "../components/CompanyLogo";

export default function GuidePage() {
  const steps = [
    {
      title: '1. Chọn sản phẩm nước uống',
      description: 'Tìm loại nước phù hợp với nhu cầu: giải khát, thể thao hoặc sức khỏe.',
      icon: '🥤',
    },
    {
      title: '2. Thêm vào giỏ hàng',
      description: 'Bạn có thể chọn nhiều sản phẩm trước khi tiến hành thanh toán.',
      icon: '🛒',
    },
    {
      title: '3. Thanh toán',
      description: 'Chọn phương thức thanh toán và xác nhận đơn hàng của bạn.',
      icon: '💳',
    },
    {
      title: '4. Nhận hàng',
      description: 'Sản phẩm sẽ được giao tận nơi trong thời gian sớm nhất.',
      icon: '📦',
    },
  ];

  return (
    <div className="relative py-10 px-4 text-center overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10">
          {/* <div className="inline-block bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-lg mb-4 text-sm font-medium">
            Hướng dẫn đặt hàng
          </div> */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Quy trình mua hàng đơn giản
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Chỉ với 4 bước đơn giản, bạn có thể thưởng thức những thức uống tuyệt vời tại nhà
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Line between steps (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-1 bg-gray-200 group-hover:bg-green-500 transition-colors duration-500 rounded-full"></div>
                  <div className="absolute top-1/2 right-0 transform translate-y-[-50%] w-4 h-4 rounded-full bg-gray-300 group-hover:bg-green-500 transition-colors duration-500"></div>
                </div>
              )}

              {/* Step number (top-right) */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-100 to-green-100 flex items-center justify-center text-gray-700 font-bold">
                {index + 1}
              </div>

              {/* Icon (hiển thị tự nhiên, không bao trong hình tròn nữa) */}
              <div className="mb-6 text-5xl">{step.icon}</div>

              {/* Title & Description */}
              <h3 className="font-bold text-xl text-gray-800 mb-3 text-center">{step.title}</h3>
              <p className="text-sm text-gray-600 text-center">{step.description}</p>

              {/* Thanh dưới hover: bo tròn hai đầu */}
              {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div> */}
            </div>
          ))}

        </div>

        {/* Timeline for mobile */}
        <div className="lg:hidden relative mb-16 mx-4">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-green-500"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex items-center mb-12 last:mb-0">
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 pr-8 text-right">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white font-bold z-10">
                    {index + 1}
                  </div>
                  <div className="w-1/2"></div>
                </>
              ) : (
                <>
                  <div className="w-1/2"></div>
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white font-bold z-10">
                    {index + 1}
                  </div>
                  <div className="w-1/2 pl-8 text-left">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        {/* <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Sẵn sàng đặt hàng?</h3>
              <p className="text-gray-600">Khám phá hàng trăm sản phẩm đồ uống chất lượng</p>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Mua hàng ngay
            </button>
          </div>
        </div> */}
      </div>
      <CompanyLogo />
    </div>
  );
}