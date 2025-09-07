import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/AuthService";
import { setUserInfo } from "../helpers/Common";
import { toast } from "react-toastify";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // LOGIN
      try {
        const res = await authService.login({
          username: formData.username,
          password: formData.password,
        });
        const userData = res.data;
        setUserInfo(userData);
        toast.success("Đăng nhập thành công!");
        navigate("/home");
      } catch (err) {
        toast.error(err);
        toast.error("Đăng nhập thất bại!");
      }
    } else {
      // REGISTER
      if (formData.password !== formData.confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
      }
      try {
        const res = await authService.register({
          username: formData.username,
          password: formData.password,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
        });
        toast.success("Đăng ký thành công! Hãy đăng nhập.");
        setIsLogin(true);
      } catch (err) {
        console.error(err);
        toast.error("Đăng ký thất bại!");
      }
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
              <>
                <div className="flex gap-2">
                  <div className="mb-4">
                    <label className="flex text-gray-700 text-sm font-medium mb-2" htmlFor="fullName">
                      Họ và tên
                    </label>
                    <input
                      className="bg-gray-50 border border-green-300 text-gray-900 rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      id="fullName"
                      type="text"
                      placeholder="Nhập họ và tên"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required={!isLogin}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="flex text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="bg-gray-50 border border-green-300 text-gray-900 rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      id="email"
                      type="email"
                      placeholder="Nhập địa chỉ email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required={!isLogin}
                    />
                  </div>
                </div>


                <div className="flex gap-2">
                  <div className="mb-4">
                    <label className="flex text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
                      Số điện thoại
                    </label>
                    <input
                      className="bg-gray-50 border border-green-300 text-gray-900 rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      id="phone"
                      type="tel"
                      placeholder="Nhập số điện thoại"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required={!isLogin}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="flex text-gray-700 text-sm font-medium mb-2" htmlFor="address">
                      Địa chỉ
                    </label>
                    <input
                      className="bg-gray-50 border border-green-300 text-gray-900 rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      id="address"
                      type="text"
                      placeholder="Nhập địa chỉ"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required={!isLogin}
                    />
                  </div></div>

              </>
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
                placeholder="Nhập tên đăng nhập"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4 relative">
              <label className="flex text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  className="bg-gray-50 border border-green-300 text-gray-900 rounded-lg 
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="mb-6 relative">
                <label className="flex text-gray-700 text-sm font-medium mb-2" htmlFor="confirmPassword">
                  Xác nhận mật khẩu
                </label>
                <div className="relative">
                  <input
                    className="bg-gray-50 border border-green-300 text-gray-900 rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Xác nhận mật khẩu"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required={!isLogin}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </button>
                </div>
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