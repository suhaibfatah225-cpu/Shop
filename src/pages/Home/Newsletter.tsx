import { Mail, Apple, Play, Truck, RefreshCcw, ShieldCheck, Headset } from 'lucide-react';

export default function Newsletter() {
  return (
    <div className="container mx-auto px-4 py-12">
      
      {/* Main Newsletter & App Promo Card */}
      <div className="bg-[#f0fdf4] rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center justify-between mb-8">
        
        {/* Left Side - Newsletter */}
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-sm">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="font-bold text-green-700 text-sm tracking-wide">NEWSLETTER</h4>
              <p className="text-xs text-gray-500">50,000+ subscribers</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Get the Freshest Updates <span className="text-green-600">Delivered Free</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Weekly recipes, seasonal offers & exclusive member perks.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-white border border-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Fresh Picks Weekly
            </span>
            <span className="bg-white border border-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Free Delivery Codes
            </span>
            <span className="bg-white border border-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Members-Only Deals
            </span>
          </div>

          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="flex-1 px-6 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
              required
            />
            <button 
              type="submit" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              Subscribe
              <span className="text-xl leading-none">→</span>
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
            <span className="text-yellow-500">✨</span> Unsubscribe anytime. No spam, ever.
          </p>
        </div>

        {/* Right Side - App Promo */}
        <div className="w-full lg:w-[400px] bg-[#0f172a] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-green-400 mb-6 border border-white/5">
              📱 MOBILE APP
            </div>
            
            <h3 className="text-2xl font-bold mb-3">Shop Faster on Our App</h3>
            <p className="text-gray-400 text-sm mb-8">
              Get app-exclusive deals & 15% off your first order.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 flex items-center gap-4 transition-colors">
                <Apple size={28} />
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Download on</div>
                  <div className="font-semibold text-sm">App Store</div>
                </div>
              </button>
              
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 flex items-center gap-4 transition-colors">
                <Play size={28} className="text-green-400" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Get it on</div>
                  <div className="font-semibold text-sm">Google Play</div>
                </div>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
              <span>4.9 • 100K+ downloads</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Features Strip */}
      <div className="bg-[#f0fdf4] rounded-2xl p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <Truck size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Free Shipping</h4>
              <p className="text-xs text-gray-500">On orders over 500 EGP</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <RefreshCcw size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Easy Returns</h4>
              <p className="text-xs text-gray-500">14-day return policy</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Secure Payment</h4>
              <p className="text-xs text-gray-500">100% secure checkout</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <Headset size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">24/7 Support</h4>
              <p className="text-xs text-gray-500">Contact us anytime</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
