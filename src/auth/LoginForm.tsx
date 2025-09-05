
export default function LoginForm() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h2>
            <form>
            <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                Mật khẩu
                </label>
                <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập mật khẩu của bạn"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Đăng nhập
            </button>
            </form>
        </div>
        </div>
    );
    }