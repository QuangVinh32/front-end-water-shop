// src/data/products.js

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
    category: "Trà",
    originalPrice: 25000,
    salePrice: 18000,
    rating: 4.7,
    sold: 312,
    image: Tra01
  },
  {
    id: 2,
    name: "Trà sữa truyền thống",
    category: "Sữa",
    originalPrice: 30000,
    salePrice: 25000,
    rating: 4.9,
    sold: 483,
    image: TraSua01
  },
  {
    id: 3,
    name: "Nước ép cam",
    category: "Nước ép",
    originalPrice: 35000,
    salePrice: 30000,
    rating: 4.8,
    sold: 231,
    image: Kem01
  },
  {
    id: 4,
    name: "Cà phê sữa",
    category: "Cafe",
    originalPrice: 32000,
    salePrice: 28000,
    rating: 4.6,
    sold: 198,
    image: Kem02
  },
  {
    id: 5,
    name: "Soda bạc hà",
    category: "Soda",
    originalPrice: 32000,
    salePrice: 27000,
    rating: 4.5,
    sold: 102,
    image: Tra02
  },
    {
    id: 6,
    name: "Sữa tươi",
    category: "Soda",
    originalPrice: 32000,
    salePrice: 27000,
    rating: 4.5,
    sold: 102,
    image: TraSua02
  },

    {
    id: 7,
    name: "Cafe đen",
    category: "Cafe",
    originalPrice: 32000,
    salePrice: 27000,
    rating: 4.5,
    sold: 102,
    image: Cafe01
  },
    {
    id: 8,
    name: "Cafe sữa đá",
    category: "Cafe",
    originalPrice: 32000,
    salePrice: 27000,
    rating: 4.5,
    sold: 102,
    image: Cafe02
  },
      {
    id: 9,
    name: "Trà tươi đào",
    category: "Trà Sữa",
    originalPrice: 32000,
    salePrice: 27000,
    rating: 4.5,
    sold: 102,
    image: TraSua03
  },
        {
    id: 9,
    name: "Trà tưa",
    category: "Trà Sữa",
    originalPrice: 32000,
    salePrice: 27000,
    rating: 4.5,
    sold: 102,
    image: TraSua04
  },
];

export default ProductData;
