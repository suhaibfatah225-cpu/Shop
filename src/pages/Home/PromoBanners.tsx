import { ArrowRight, Flame, Sparkles } from 'lucide-react';

export default function PromoBanners() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Banner - Green */}
        <div className="bg-[#00a669] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden group cursor-pointer">
          {/* Background Decoration */}
          <div className="absolute -right-10 -top-10 w-64 h-64 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Flame size={16} className="text-orange-300" />
              <span>Deal of the Day</span>
            </div>
            
            <h3 className="text-3xl font-bold mb-2">Fresh Organic Fruits</h3>
            <p className="text-white/90 mb-6">Get up to 40% off on selected organic fruits</p>
            
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl font-bold">40% OFF</span>
              <span className="text-sm bg-white/20 px-2 py-1 rounded">Use code: <strong>ORGANIC40</strong></span>
            </div>
            
            <button className="bg-white text-[#00a669] px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors">
              Shop Now
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Banner - Orange/Red Gradient */}
        <div className="bg-gradient-to-br from-[#ff7e5f] to-[#feb47b] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden group cursor-pointer">
          {/* Background Decoration */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Sparkles size={16} className="text-yellow-200" />
              <span>New Arrivals</span>
            </div>
            
            <h3 className="text-3xl font-bold mb-2">Exotic Vegetables</h3>
            <p className="text-white/90 mb-6">Discover our latest collection of premium vegetables</p>
            
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl font-bold">25% OFF</span>
              <span className="text-sm bg-white/20 px-2 py-1 rounded">Use code: <strong>FRESH25</strong></span>
            </div>
            
            <button className="bg-white text-[#ff7e5f] px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors">
              Explore Now
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
