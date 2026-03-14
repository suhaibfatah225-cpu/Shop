import { ShoppingCart, Home, ArrowLeft, Apple, Carrot, Leaf, Cherry } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[85vh] relative overflow-hidden bg-[#f8fdfa] flex flex-col items-center justify-center px-4 py-12">
      {/* Floating Background Icons */}
      <Apple className="absolute top-20 left-[10%] text-green-200 w-8 h-8 opacity-50 -rotate-12" />
      <Leaf className="absolute bottom-32 right-[15%] text-green-200 w-10 h-10 opacity-50 rotate-45" />
      <Carrot className="absolute top-40 right-[20%] text-green-200 w-8 h-8 opacity-50 rotate-12" />
      <Cherry className="absolute bottom-40 left-[20%] text-green-200 w-8 h-8 opacity-50 -rotate-45" />
      <Apple className="absolute top-1/2 left-[5%] text-green-200 w-6 h-6 opacity-30 rotate-90" />
      <Leaf className="absolute top-1/3 right-[5%] text-green-200 w-6 h-6 opacity-30 -rotate-90" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full">
        
        {/* 404 Graphic */}
        <div className="relative mb-8">
          <div className="w-48 h-36 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center border border-gray-50">
            <ShoppingCart size={64} className="text-[#22c55e]" strokeWidth={2} />
          </div>
          {/* 404 Badge */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#22c55e] rounded-full flex items-center justify-center shadow-lg border-4 border-[#f8fdfa]">
            <span className="text-white font-bold text-xl">404</span>
          </div>
          {/* Smiley Face below cart */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[#22c55e]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></div>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3C3 3 7.5 9 12 9C16.5 9 21 3 21 3" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></div>
          </div>
        </div>

        {/* Text */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-4 mt-8 text-center tracking-tight">
          Oops! Nothing Here
        </h1>
        <p className="text-gray-500 text-center max-w-md mb-8 leading-relaxed">
          Looks like this page went out of stock! Don't worry, there's plenty more fresh content to explore.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <Link 
            to="/" 
            className="flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-sm w-full sm:w-auto justify-center"
          >
            <Home size={18} />
            Go to Homepage
          </Link>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors shadow-sm border border-gray-200 w-full sm:w-auto justify-center"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Popular Destinations */}
        <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 w-full max-w-lg">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider text-center mb-4">
            POPULAR DESTINATIONS
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/shop" className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
              All Products
            </Link>
            <Link to="/shop?category=electronics" className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Categories
            </Link>
            <Link to="/shop" className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Today's Deals
            </Link>
            <Link to="/" className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
