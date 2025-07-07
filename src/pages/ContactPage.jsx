import React from 'react';

const ContactPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 font-sans">
      <h1 className="text-4xl font-bold mb-4 text-center text-green-600">Liên hệ với Quán Nước Chúng Tôi</h1>
      <p className="text-center text-gray-600 mb-10">
        Bạn cần đặt món, góp ý, hoặc chỉ đơn giản muốn nói "Hello"? Hãy gửi tin nhắn cho chúng tôi nhé 🍹🍧
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Thông tin liên hệ */}
        <div className="space-y-4 text-sm sm:text-base">
          <div>
            <h3 className="font-semibold text-lg text-green-700">📍 Địa chỉ quán</h3>
            <p className="text-gray-700">123 Đường Trà Sữa, Phường Trà Chanh, Quận Soda, TP. HCM</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-green-700">📞 Hotline gọi món</h3>
            <p className="text-gray-700">0939 456 789 (Zalo/Call)</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-green-700">✉️ Email góp ý</h3>
            <p className="text-gray-700">guinhan@quannuoc.vn</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-green-700">⏰ Giờ mở cửa</h3>
            <p className="text-gray-700">Sáng 8:00 - Tối 10:00 (mỗi ngày)</p>
          </div>
        </div>

        {/* Form liên hệ */}
        <form className="space-y-4 bg-white p-6 rounded-lg shadow-lg border border-green-200">
          <div>
            <label className="block text-sm font-medium text-gray-700">👤 Tên của bạn</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Nguyễn Văn A"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">📧 Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="ban@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">📝 Tin nhắn</label>
            <textarea
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              rows="4"
              placeholder="Bạn muốn đặt trà chanh thêm topping trân châu? Hãy nói cho tụi mình biết 😍"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
          >
            Gửi liên hệ
          </button>
        </form>
      </div>

      {/* Google Maps */}
      <div className="mt-12">
        <iframe
          title="Bản đồ quán"
          className="w-full h-72 rounded-lg border"
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
