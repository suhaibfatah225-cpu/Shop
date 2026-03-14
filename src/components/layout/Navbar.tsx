import { Search, Heart, ShoppingCart, Headset, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@heroui/react';

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between gap-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 min-w-max">
          <div className="text-green-600">
            <ShoppingCart size={28} strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">FreshCart</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl hidden lg:flex items-center">
          <div className="relative w-full flex items-center">
            <input 
              type="text" 
              placeholder="Search for products, brands and more..." 
              className="w-full border border-gray-300 rounded-full py-2.5 pl-6 pr-12 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
            />
            <button className="absolute right-1 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
          <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-green-600 transition-colors">Shop</Link>
          
          {/* Categories Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-green-600 transition-colors py-2">
              <span>Categories</span>
              <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
            </div>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 translate-y-2 group-hover:translate-y-0">
              <Link to="/shop" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">All Categories</Link>
              <Link to="/shop?category=electronics" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Electronics</Link>
              <Link to="/shop?category=womens-fashion" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Women's Fashion</Link>
              <Link to="/shop?category=mens-fashion" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Men's Fashion</Link>
              <Link to="/shop?category=beauty-health" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Beauty & Health</Link>
            </div>
          </div>

          <Link to="/brands" className="hover:text-green-600 transition-colors">Brands</Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6 min-w-max">
          <div className="hidden xl:flex items-center gap-2">
            <div className="bg-gray-100 p-2 rounded-full text-gray-600">
              <Headset size={20} />
            </div>
            <div className="flex flex-col text-xs">
              <span className="text-gray-500">Support</span>
              <span className="font-bold text-gray-800">24/7 Help</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-green-600 transition-colors">
              <Heart size={24} />
            </button>
            <button className="text-gray-600 hover:text-green-600 transition-colors relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                2
              </span>
            </button>
          </div>

          <Button 
            as={Link} 
            to="/login" 
            className="bg-green-600 text-white font-medium px-6 hidden sm:flex"
            startContent={<UserIcon />}
            radius="full"
          >
            Sign In
          </Button>
        </div>

      </div>
    </nav>
  );
}

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}
