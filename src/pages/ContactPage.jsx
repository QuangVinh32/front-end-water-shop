import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock,
  FaFacebookF, FaInstagram, FaTiktok, FaYoutube,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 flex flex-col items-center justify-center">
      <div className="w-full max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
            Liên hệ với Quán Nước Chúng Tôi
          </h1>

        </div>

        {/* Thông tin liên hệ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 space-y-4">
            {/* Địa chỉ */}
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">Địa chỉ quán</h3>
                <p className="text-gray-600">Tiến Thủy, Quỳnh Lưu, Nghệ An</p>
              </div>
            </div>

            {/* Hotline */}
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FaPhoneAlt className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">Hotline đặt hàng</h3>
                <p className="text-gray-600 text-lg font-medium">0939 456 789</p>
                <p className="text-sm text-gray-500 mt-1">(Zalo/Call/Message)</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-amber-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">Email góp ý</h3>
                <p className="text-gray-600">trcuong666@gmail.com</p>
              </div>
            </div>

            {/* Giờ mở cửa */}
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FaClock className="text-purple-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">Giờ mở cửa</h3>
                <p className="text-gray-600">Thứ 2 - Chủ nhật: 8:00 - 22:00</p>
              </div>
            </div>

            {/* Mạng xã hội */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">Kết nối với chúng tôi</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-600 transition-colors group">
                  <FaFacebookF className="w-5 h-5 text-blue-600 group-hover:text-white" />
                </a>
                <a href="#" className="bg-pink-100 p-3 rounded-full hover:bg-pink-600 transition-colors group">
                  <FaInstagram className="w-5 h-5 text-pink-600 group-hover:text-white" />
                </a>
                <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-black transition-colors group">
                  <FaTiktok className="w-5 h-5 text-black group-hover:text-white" />
                </a>
                <a href="#" className="bg-red-100 p-3 rounded-full hover:bg-red-600 transition-colors group">
                  <FaYoutube className="w-5 h-5 text-red-600 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Bên phải: bạn có thể thêm Google Map, hoặc biểu mẫu liên hệ */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1rem', minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
