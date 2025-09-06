import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Đăng nhập với:', formData.username, formData.password);
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
      }
      console.log('Đăng ký với:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
        <div className="py-6 px-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            {isLogin ? 'Đăng Nhập' : 'Tạo Tài Khoản'}
          </h2>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label className="flex text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                  Họ và tên
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  id="name"
                  type="text"
                  placeholder="Nhập họ và tên"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                />
              </div>
            )}

            <div className="mb-4">
              <label className="flex text-gray-700 text-sm font-medium mb-2" htmlFor="username">
                Tài khoản
              </label>
              <input
                className="bg-gray-50 border border-green-300 text-gray-900 rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="username"
                type="text"
                placeholder="Nhập địa chỉ username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="flex text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                Mật khẩu
              </label>
              <input
                className="bg-gray-50 border border-green-300 text-gray-900 rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="password"
                type="password"
                placeholder="Nhập mật khẩu"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {!isLogin && (
              <div className="mb-6">
                <label className="flex text-gray-700 text-sm font-medium mb-2" htmlFor="confirmPassword">
                  Xác nhận mật khẩu
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  id="confirmPassword"
                  type="password"
                  placeholder="Xác nhận mật khẩu"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required={!isLogin}
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium rounded-lg 
              text-sm px-5 py-2.5 text-center hover:bg-blue-700 
              focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              {isLogin ? 'Đăng Nhập' : 'Đăng Ký'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-blue-600 hover:underline"
            >
              {isLogin ? 'Chưa có tài khoản? Đăng ký ngay' : 'Đã có tài khoản? Đăng nhập'}
            </button>
          </div>

          {/* Nút quay về */}
          <div className="mt-6 text-center">
            <Link
              to="/home"
              className="inline-block text-sm px-4 py-2 bg-gray-200 hover:bg-gray-300 
              text-gray-700 rounded-lg transition"
            >
              ⬅ Quay về trang chính
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
