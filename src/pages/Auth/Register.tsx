import { useForm } from 'react-hook-form';
import { useState } from 'react';
import api from '../../services/api';
import toast from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Truck, ShieldCheck, Headset, User, Phone } from 'lucide-react';

export default function Register() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const navigate = useNavigate();

  const password = watch("password");

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await api.post('/auth/signup', data);
      toast.success('Account created successfully! Please sign in.');
      navigate('/login');
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || 'An unexpected error occurred';
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
  
        <div className="hidden lg:flex flex-col items-center text-center px-8">
          <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-8 p-6">
            <img 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/2e5810ff3e-e750761ebcd4ae5907db.png" 
              alt="Fresh Groceries in Cart" 
              className="w-full h-auto object-cover rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            FreshCart - Your One-Stop Shop for Fresh Products
          </h2>
          <p className="text-gray-500 mb-8 max-w-md">
            Join thousands of happy customers who trust FreshCart for their daily grocery needs
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Truck size={18} className="text-green-600" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-green-600" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Headset size={18} className="text-green-600" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-8 sm:p-10">
          
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-1 mb-4">
              <span className="text-3xl font-bold text-green-600">Fresh</span>
              <span className="text-3xl font-bold text-gray-900">Cart</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Create an Account</h3>
            <p className="text-gray-500 text-sm">Sign up to start your fresh shopping experience</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                  {...register('name', { required: 'Name is required' })}
                />
              </div>
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone size={18} className="text-gray-400" />
                </div>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                  {...register('phone', { required: 'Phone number is required' })}
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message as string}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className={`w-full pl-10 pr-10 py-2.5 border rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all ${errors.password ? 'border-red-500' : 'border-gray-200'}`}
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    }
                  })}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message as string}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input
                  type={showRePassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className={`w-full pl-10 pr-10 py-2.5 border rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all ${errors.rePassword ? 'border-red-500' : 'border-gray-200'}`}
                  {...register('rePassword', { 
                    required: 'Please confirm your password',
                    validate: value => value === password || "Passwords do not match"
                  })}
                />
                <button 
                  type="button"
                  onClick={() => setShowRePassword(!showRePassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showRePassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.rePassword && <p className="text-red-500 text-xs mt-1">{errors.rePassword.message as string}</p>}
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-medium py-3 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account? <Link to="/login" className="font-semibold text-green-600 hover:text-green-700">Sign In</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
