import { Truck, Gift, Phone, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="bg-gray-50 border-b border-gray-200 text-xs py-2 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center text-gray-600">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Truck size={14} className="text-green-600" />
            <span>Free Shipping on Orders 500 EGP</span>
          </div>
          <div className="flex items-center gap-2">
            <Gift size={14} className="text-green-600" />
            <span>New Arrivals Daily</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+1 (800) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>support@freshcart.com</span>
          </div>
          <div className="flex items-center gap-4 border-l pl-4 border-gray-300">
            <Link to="/login" className="flex items-center gap-1 hover:text-green-600 transition-colors">
              <User size={14} />
              <span>Sign In</span>
            </Link>
            <Link to="/register" className="flex items-center gap-1 hover:text-green-600 transition-colors">
              <User size={14} />
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
