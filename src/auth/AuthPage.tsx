import React, { useState, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

import {
  UserIcon,
  LockClosedIcon,
  UserCircleIcon,
  HomeIcon,
  EnvelopeIcon,
  PhoneIcon,
  PhotoIcon,
  SparklesIcon,
  ArrowPathIcon,
  CloudIcon,
  FireIcon
} from "@heroicons/react/24/solid";


export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const payload = Object.fromEntries(form.entries());
    setIsLoading(true);
    setMessage(null);

    try {
      if (isLogin) {
        const res = await axios.post("http://localhost:8080/api/login", payload);
        toast.success(`Đăng nhập thành công! Chào mừng ${res.data.username || ""}`);

        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }
      } else {
        const res = await axios.post("http://localhost:8080/api/register", payload);
        toast.success(`Đăng ký thành công! Chào mừng ${res.data.username || ""}`);

        const loginRes = await axios.post("http://localhost:8080/api/login", {
          username: payload.username,
          password: payload.password,
        });
        if (loginRes.data.token) {
          localStorage.setItem("token", loginRes.data.token);
        }
      }

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Đã xảy ra lỗi! Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className=" flex flex-col md:flex-row bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Left side - Decorative image */}
      <div className="md:w-1/2 relative hidden md:block overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-emerald-700/50 z-10" />

        {/* Content with animations */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-8">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mb-6 animate-pulse">
            <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-3 rounded-full animate-spin-slow">
              <SparklesIcon className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg animate-bounce-in">
            Fresh Water Shop
          </h1>

          <p className="text-xl max-w-md text-emerald-100 drop-shadow-md animate-fade-in">
            Tươi mát mỗi ngày – Freshness Every Sip
          </p>

          {/* Animated elements */}
          <div className="mt-10 flex space-x-4">
            <div className="animate-bounce">
              <div className="bg-blue-500/20 backdrop-blur-sm p-3 rounded-full">
                <div className="bg-blue-500 p-2 rounded-full">
                  <CloudIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>
              <div className="bg-amber-500/20 backdrop-blur-sm p-3 rounded-full">
                <div className="bg-amber-500 p-2 rounded-full">
                  <FireIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>
              <div className="bg-emerald-500/20 backdrop-blur-sm p-3 rounded-full">
                <div className="bg-emerald-500 p-2 rounded-full">
                  <ArrowPathIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 lg:p-12 bg-white">
        <div className="max-w-md w-full mx-auto h-[600px]">
          <div className="text-center mb-8">
            <div className="mx-auto bg-emerald-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <UserCircleIcon className="h-8 w-8 text-emerald-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {isLogin ? "Đăng nhập tài khoản" : "Tạo tài khoản mới"}
            </h1>
            <p className="text-gray-600">
              {isLogin
                ? "Vui lòng nhập thông tin đăng nhập"
                : "Điền thông tin để tạo tài khoản"}
            </p>
          </div>

          {message && (
            <div className={`mb-6 p-4 rounded-lg ${message.type === "success"
              ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
              : "bg-red-100 text-red-700 border border-red-200"
              }`}>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {message.type === "success" ? (
                    <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{message.text}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <UserIcon className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Họ và tên"
                    className="w-full pl-10 pr-4 py-3 border rounded-lg  "
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <HomeIcon className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Địa chỉ"
                    className="w-full pl-10 pr-4 py-3 border rounded-lg  "
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <EnvelopeIcon className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full pl-10 pr-4 py-3 border  rounded-lg  "
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Số điện thoại"
                    className="w-full pl-10 pr-4 py-3 border rounded-lg  "
                    required
                  />
                </div>

                <div className="relative col-span-2">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <PhotoIcon className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    name="image"
                    placeholder="URL ảnh đại diện (tùy chọn)"
                    className="w-full pl-10 pr-4 py-3 border  rounded-lg  "
                  />
                </div>
              </div>
            )}

            {/* Username input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <UserIcon className="h-5 w-5" />
              </div>
              <input
                type="text"
                name="username"
                placeholder="Tên đăng nhập"
                className="w-full pl-10 pr-4 py-3 border  rounded-lg  "
                required
              />
            </div>

            {/* Password input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <LockClosedIcon className="h-5 w-5" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Mật khẩu"
                className="w-full pl-10 pr-10 py-3 border  rounded-lg  "
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-emerald-600"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Remember me & forgot password chỉ hiển thị login, col-span-2 để canh cho form register chuẩn */}
            {isLogin && (
              <div className="flex items-center justify-between col-span-2">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500  rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Ghi nhớ đăng nhập
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-emerald-600 hover:text-emerald-500">
                    Quên mật khẩu?
                  </a>
                </div>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`col-span-2 w-full py-3 px-4 rounded-lg shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition ${isLoading
                ? "bg-emerald-400 cursor-not-allowed"
                : "bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800"
                }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Đang xử lý...
                </div>
              ) : isLogin ? (
                "Đăng nhập"
              ) : (
                "Đăng ký"
              )}
            </button>
          </form>
          <div className="mt-8 pt-5 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium text-emerald-600 hover:text-emerald-500"
              >
                {isLogin ? "Đăng ký ngay" : "Đăng nhập"}
              </button>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}