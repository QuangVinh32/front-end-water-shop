import {
    FaCoffee,
    FaCocktail,
    FaCheckCircle,
    FaStar,
    FaPaperPlane,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

import jobPositions from "../pages/jobData";

const iconMap = {
    coffee: <FaCoffee className="text-amber-600" />,
    cocktail: <FaCocktail className="text-blue-500" />,
};

const RecruitmentPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">

            <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-4">
                Tuyển dụng nhân sự
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
                Cùng gia nhập đội ngũ trẻ trung và năng động của chúng tôi để phát triển thương hiệu quán nước hàng đầu Việt Nam
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                {jobPositions.map((position) => (
                    <div
                        key={position.id}
                        className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 transform transition-all  flex flex-col justify-between h-full"
                    >
                        <div>
                            <div className="bg-gradient-to-r from-blue-500 to-green-500 px-6 py-5 flex items-center">
                                <div className="bg-white p-3 rounded-full mr-4 shadow-md">
                                    {iconMap[position.iconType]}
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-white">
                                    {position.title}
                                </h2>
                            </div>

                            <div className="p-6 space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Yêu cầu:</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        {position.requirements.map((req, index) => (
                                            <li key={index} className="flex items-start">
                                                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Quyền lợi:</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        {position.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start">
                                                <FaStar className="text-yellow-500 mt-1 mr-2" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-green-50 px-6 py-4 border-t border-gray-200 mt-auto">
                            <div className="flex flex-col sm:flex-row justify-between items-center">
                                <p className="text-gray-700 text-sm md:text-base mb-2 sm:mb-0">
                                    <span className="font-medium">Hạn nộp hồ sơ:</span> {position.deadline}
                                </p>
                                <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center">
                                    Ứng tuyển ngay
                                    <FaPaperPlane className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                        Nộp hồ sơ ứng tuyển
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Gửi CV của bạn đến chúng tôi qua các kênh liên hệ sau
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <FaEnvelope className="text-blue-500 text-2xl" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                        <p className="text-blue-500 font-medium">trcuong666@gmail.com</p>
                        <p className="text-gray-600 text-sm mt-2">Gửi CV kèm tiêu đề: [Vị trí ứng tuyển] - [Họ tên]</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <FaPhone className="text-green-500 text-2xl" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Điện thoại</h3>
                        <p className="text-green-500 font-medium">0357700838</p>
                        <p className="text-gray-600 text-sm mt-2">Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                            <FaMapMarkerAlt className="text-amber-500 text-2xl" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Trực tiếp</h3>
                        <p className="text-amber-500 font-medium">Quỳnh Phú, Quỳnh Lưu, Nghệ An</p>
                        <p className="text-gray-600 text-sm mt-2">Nghệ An (Tầng trệt, toà nhà Moonlight)</p>
                    </div>
                </div>
            </div>

            {/* Working Environment */}
            <div className="mt-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-6">
                    Môi trường làm việc
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="aspect-square bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
                            <span className="text-gray-500">Hình ảnh {item}</span>
                        </div>
                    ))}
                </div>
                <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                    Không gian làm việc hiện đại, trẻ trung với đầy đủ trang thiết bị tiện nghi.
                    Đội ngũ nhân viên thân thiện, nhiệt tình và luôn sẵn sàng hỗ trợ lẫn nhau.
                </p>
            </div>
        </div>
    );
};

export default RecruitmentPage;
