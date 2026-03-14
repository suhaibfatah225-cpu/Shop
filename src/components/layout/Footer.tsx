import { ShoppingCart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info (Takes up 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg mb-6">
              <div className="text-green-600">
                <ShoppingCart size={24} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">FreshCart</span>
            </Link>
            
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-md">
              FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.
            </p>
            
            <div className="flex flex-col gap-3 text-sm text-gray-400 mb-6">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-green-500" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-green-500" />
                <span>support@freshcart.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-green-500" />
                <span>123 Commerce Street, New York, NY 10001</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Shop</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link to="#" className="hover:text-green-500 transition-colors">All Products</Link></li>
              <li><Link to="#" className="hover:text-green-500 transition-colors">Categories</Link></li>
              <li><Link to="#" className="hover:text-green-500 transition-colors">Brands</Link></li>
              <li><Link to="#" className="hover:text-green-500 transition-colors">Electronics</Link></li>
              <li><Link to="#" className="hover:text-green-500 transition-colors">Men's Fashion</Link></li>
              <li><Link to="#" className="hover:text-green-500 transition-colors">Women's Fashion</Link></li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Account</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link to="#" className="hover:text-green-500 transition-colors">My Account</Link></li>
              <li><Link to="#" className="hover:text-green-500 transition-colors">Order History</Link></li>
              <li><Link to="#" className="hover:text-green-500 transition-colors">Wishlist</Link></li>
              <li><Link to="#" className="hover:text-green-500 transition-colors">Shopping Cart</Link></li>
              <li><Link to="/login" className="hover:text-green-500 transition-colors">Sign In</Link></li>
              <li><Link to="/register" className="hover:text-green-500 transition-colors">Create Account</Link></li>
            </ul>
          </div>

          {/* Support & Legal Links */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            <div className="mb-6 lg:mb-8">
              <h3 className="text-white font-bold mb-6">Support</h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                <li><Link to="#" className="hover:text-green-500 transition-colors">Contact Us</Link></li>
                <li><Link to="#" className="hover:text-green-500 transition-colors">Help Center</Link></li>
                <li><Link to="#" className="hover:text-green-500 transition-colors">Shipping Info</Link></li>
                <li><Link to="#" className="hover:text-green-500 transition-colors">Returns & Refunds</Link></li>
                <li><Link to="#" className="hover:text-green-500 transition-colors">Track Order</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-6">Legal</h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                <li><Link to="#" className="hover:text-green-500 transition-colors">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:text-green-500 transition-colors">Terms of Service</Link></li>
                <li><Link to="#" className="hover:text-green-500 transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 FreshCart. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <CreditCard size={16} />
              <span>Visa</span>
            </div>
            <div className="flex items-center gap-1">
              <CreditCard size={16} />
              <span>Mastercard</span>
            </div>
            <div className="flex items-center gap-1">
              <CreditCard size={16} />
              <span>PayPal</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
