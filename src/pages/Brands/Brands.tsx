import React, { useState } from 'react';
import { Tag, Truck, RefreshCcw, ShieldCheck, Headset } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandCard: React.FC<{ brand: any }> = ({ brand }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Link 
      to={`/shop?brand=${brand.name.toLowerCase()}`} 
      className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center justify-center hover:shadow-lg hover:border-purple-100 transition-all group"
    >
      <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl mb-4 flex items-center justify-center p-4 group-hover:bg-purple-50 transition-colors">
        {!imgError && brand.logo ? (
          <img 
            src={brand.logo} 
            alt={brand.name} 
            onError={() => setImgError(true)}
            className="max-w-[80%] max-h-[80%] object-contain opacity-80 group-hover:opacity-100 transition-opacity brightness-0"
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="text-xl font-bold text-black tracking-wider uppercase text-center">
            {brand.name}
          </span>
        )}
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors text-center">
        {brand.name}
      </span>
    </Link>
  );
};

export default function Brands() {
   const brands = [
    { id: 1, name: 'Canon', logo: 'https://cdn.worldvectorlogo.com/logos/canon-1.svg' },
    { id: 2, name: 'SONY', logo: 'https://cdn.worldvectorlogo.com/logos/sony-logo.svg' },
    { id: 3, name: 'Infinix', logo: 'https://cdn.worldvectorlogo.com/logos/infinix-1.svg' },
    { id: 4, name: 'Realme', logo: 'https://cdn.worldvectorlogo.com/logos/realme-1.svg' },
  
    { id: 5, name: 'Nokia', logo: 'https://cdn.worldvectorlogo.com/logos/nokia-3.svg' },
    { id: 6, name: 'OPPO', logo: 'https://cdn.worldvectorlogo.com/logos/oppo-1.svg' },
    { id: 7, name: 'Huawei', logo: 'https://cdn.worldvectorlogo.com/logos/huawei-2.svg' },
    { id: 8, name: 'Apple', logo: 'https://cdn.worldvectorlogo.com/logos/apple-14.svg' },
    { id: 9, name: 'Xiaomi', logo: 'https://cdn.worldvectorlogo.com/logos/xiaomi-4.svg' },
    
    { id: 10, name: 'Samsung', logo: 'https://cdn.worldvectorlogo.com/logos/samsung-1.svg' },
    { id: 11, name: 'Jack & Jones', logo: 'https://cdn.worldvectorlogo.com/logos/jack-jones-1.svg' },
    { id: 12, name: 'LC Waikiki', logo: 'https://cdn.worldvectorlogo.com/logos/lc-waikiki.svg' },
    { id: 13, name: 'Andora', logo: '' }, 
    { id: 14, name: 'Puma', logo: 'https://cdn.worldvectorlogo.com/logos/puma-logo.svg' },
    
    { id: 15, name: 'Reserved', logo: 'https://cdn.worldvectorlogo.com/logos/reserved-1.svg' },
    { id: 16, name: 'Adidas', logo: 'https://cdn.worldvectorlogo.com/logos/adidas-8.svg' },
    { id: 17, name: 'DeFacto', logo: 'https://cdn.worldvectorlogo.com/logos/defacto-1.svg' },
    { id: 18, name: 'Beko', logo: 'https://cdn.worldvectorlogo.com/logos/beko-1.svg' },
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-400 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="font-medium text-white">Brands</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Tag size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-1">Top Brands</h1>
              <p className="text-white/90">Shop from your favorite brands</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>

      {/* Features Strip */}
      <div className="bg-[#f0fdf4] py-12 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">
                <Truck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base">Free Shipping</h4>
                <p className="text-sm text-gray-500">On orders over 500 EGP</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">
                <RefreshCcw size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base">Easy Returns</h4>
                <p className="text-sm text-gray-500">14-day return policy</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base">Secure Payment</h4>
                <p className="text-sm text-gray-500">100% secure checkout</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">
                <Headset size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base">24/7 Support</h4>
                <p className="text-sm text-gray-500">Contact us anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
