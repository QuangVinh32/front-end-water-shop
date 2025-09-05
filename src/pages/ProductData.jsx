import TraSua01 from '../assets/tra-sua-01.png';
import TraSua02 from '../assets/tra-sua-02.png';
import TraSua03 from '../assets/tra-sua-03.png';
import TraSua04 from '../assets/tra-sua-04.png';

import Tra01 from '../assets/tra-01.png';
import Tra02 from '../assets/tra-02.png';
import Kem01 from '../assets/kem-01.png';
import Kem02 from '../assets/kem-02.png';
import Cafe01 from '../assets/cafe-01.png';
import Cafe02 from '../assets/cafe-02.png';

const ProductData = [
  {
    id: 1,
    name: "Trà đào",
    category: "Trà trái cây",
    originalPrice: 25000,
    salePrice: 18000,
    rating:3,
    sold: 312,
    image: [Tra01,Tra02,TraSua01],
    inStock: true,
    description: "Trà đào thơm mát với hương vị đào tự nhiên, giúp giải nhiệt hiệu quả trong những ngày nắng nóng."
  },
  {
    id: 2,
    name: "Trà sữa truyền thống",
    category: "Trà Sữa",
    originalPrice: 30000,
    salePrice: 25000,
    rating: 4.9,
    sold: 483,
    image: [TraSua01, TraSua02, TraSua03, TraSua04],
    inStock: true,
    description: "Trà sữa truyền thống đậm đà vị trà, hòa quyện cùng vị béo nhẹ của sữa, thích hợp cho mọi lứa tuổi."
  },
  {
    id: 3,
    name: "Nước ép cam",
    category: "Nước ép",
    originalPrice: 35000,
    salePrice: 30000,
    rating: 4.8,
    sold: 231,
    image: [Kem01,Kem02,Tra01,Tra02],
    inStock: false,
    description: "Nước ép cam nguyên chất 100%, giàu vitamin C, tăng cường đề kháng và thanh lọc cơ thể."
  },
  {
    id: 4,
    name: "Kem vani",
    category: "Kem",
    originalPrice: 32000,
    salePrice: 28000,
    rating: 4.6,
    sold: 198,
    image: [Kem02,TraSua02,Kem02,Tra01,Tra02],
    inStock: true,
    description: "Recognising the importance of play is not new: over two millennia ago, the Greek philosopher Plato extolled its virtues as a means of developing skills for adult life, and ideas about play-based learning have been developing since the 19th century.But we live in changing times, and Whitebread is mindful of a worldwide decline in play, pointing out that over half the people in the world now live in cities. ‘The opportunities for free play, which I experienced almost every day of my childhood, are becoming increasingly scarce,’ he says. Outdoor play is curtailed by perceptions of risk to do with traffic, as well as parents’ increased wish to protect their children from being the victims of crime, and by the emphasis on ‘earlier is better’ which is leading to greater competition in academic learning and schools.International bodies like the United Nations and the European Union have begun to develop policies concerned with children’s right to play, and to consider implications for leisure facilities and educational programmes. But what they often lack is the evidence to base policies on."
  },
  {
    id: 5,
    name: "Soda bạc hà",
    category: "Soda",
    originalPrice: 32000,
    salePrice: 27000,
    rating: 4.5,
    sold: 102,
    image: [Tra02],
    inStock: true,
    description: "Soda bạc hà tươi mát, vị the the sảng khoái, lý tưởng để giải khát nhanh chóng."
  },
  {
    id: 6,
    name: "Sữa tươi trân châu",
    category: "Sữa tươi",
    originalPrice: 32000,
    salePrice: 27000,
    rating: 4.5,
    sold: 102,
    image: [TraSua02],
    inStock: true,
    description: "Sữa tươi kết hợp trân châu dẻo ngon, mang lại hương vị độc đáo và bổ dưỡng."
  },
  {
    id: 7,
    name: "Cafe đen",
    category: "Cafe",
    originalPrice: 32000,
    salePrice: 27000,
    rating: 4.5,
    sold: 102,
    image: [Cafe01],
    inStock: true,
    description: "Cafe đen nguyên chất, đậm vị và thơm lừng, dành cho những ai yêu thích sự mạnh mẽ."
  },
  {
    id: 8,
    name: "Cafe sữa đá",
    category: "Cafe",
    originalPrice: 32000,
    salePrice: 27000,
    rating: 4.5,
    sold: 102,
    image: [Cafe02],
    inStock: false,
    description: "Cafe sữa đá pha trộn giữa vị đắng nhẹ của cafe và vị béo của sữa, thích hợp dùng mỗi sáng."
  },
  {
    id: 9,
    name: "Trà sữa đào",
    category: "Trà Sữa",
    originalPrice: 32000,
    salePrice: 27000,
    rating: 4.5,
    sold: 102,
    image: [TraSua03],
    inStock: true,
    description: "Sự kết hợp hài hòa giữa trà sữa và hương đào dịu nhẹ, tạo nên thức uống thơm ngon, độc đáo."
  },
  {
    id: 10,
    name: "Trà sữa trân châu đen",
    category: "Trà Sữa",
    originalPrice: 32000,
    salePrice: 27000,
    rating: 4.5,
    sold: 102,
    image: [TraSua04],
    inStock: true,
    description: "Trà sữa trân châu đen với lớp trân châu dai ngon, hấp dẫn và cực kỳ bắt vị."
  }
];

export default ProductData;
