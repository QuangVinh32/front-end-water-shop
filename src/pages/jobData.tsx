import { FaCoffee, FaCocktail, FaCheckCircle, FaStar, FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const JobPositions = [
    {
        id: 1,
        title: "Nhân viên bồi bàn",
        iconType: "coffee", 
        deadline: "30/08/2025",
        requirements: [
            "Giao tiếp tốt, thân thiện và năng động",
            "Có kinh nghiệm làm việc tại quán cafe/nhà hàng ít nhất 6 tháng",
            "Khả năng làm việc theo ca linh hoạt (sáng, chiều, tối)",
            "Ngoại hình ưa nhìn, chiều cao từ 1m50 trở lên",
            "Trung thực, nhiệt tình và có tinh thần trách nhiệm cao"
        ],
        benefits: [
            "Lương cơ bản: 5.000.000 - 7.000.000 VNĐ/tháng + thưởng doanh số",
            "Được đào tạo bài bản về kỹ năng phục vụ",
            "Môi trường làm việc trẻ trung, năng động",
            "Được hưởng các chế độ BHXH, BHYT theo luật lao động",
            "Khuyến mãi và ưu đãi khi sử dụng dịch vụ tại quán",
            "Thưởng lễ, tết và các dịp đặc biệt trong năm"
        ]
    },
    {
        id: 2,
        title: "Nhân viên pha chế",
        iconType: "cocktail", // 👈 Thêm dòng này
        deadline: "30/08/2025",
        requirements: [
            "Có kiến thức cơ bản về các loại đồ uống",
            "Tỉ mỉ, cẩn thận và sáng tạo trong công việc",
            "Có kinh nghiệm pha chế ít nhất 1 năm",
            "Khả năng làm việc dưới áp lực cao",
            "Sẵn sàng học hỏi và tiếp thu cái mới",
            
        ],
        benefits: [
            "Lương cơ bản: 6.000.000 - 8.000.000 VNĐ/tháng + thưởng sáng tạo",
            "Được đào tạo nâng cao tay nghề miễn phí",
            "Cơ hội tham gia các cuộc thi pha chế trong và ngoài công ty",
            "Môi trường làm việc chuyên nghiệp với đầy đủ trang thiết bị hiện đại",
            "Được cung cấp đồng phục và các dụng cụ cần thiết",
            "Thưởng lễ, tết và các dịp đặc biệt trong năm"
        ]
    }
];

export default JobPositions;
