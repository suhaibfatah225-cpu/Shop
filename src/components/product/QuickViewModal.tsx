import { X, Star, StarHalf, Minus, Plus, ShoppingCart, Heart, Share2, Truck, RefreshCcw, ShieldCheck, Check, Maximize2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface QuickViewModalProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const [isImageFullScreen, setIsImageFullScreen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarHalf key={i} size={16} className="fill-yellow-400 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} size={16} className="text-gray-300" />);
      }
    }
    return stars;
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <>
      <div className={`fixed inset-0 z-[100] flex items-start justify-center bg-white ${isImageFullScreen ? 'overflow-hidden' : 'overflow-y-auto'}`}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors z-50"
        >
          <X size={24} />
        </button>

        <div className="w-full min-h-screen p-4 md:p-8 lg:p-12 mt-10 lg:mt-0 lg:flex lg:items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              
              {/* Left Side - Images */}
              <div className="flex flex-col gap-6">
                {/* Main Image */}
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-gray-100 flex items-center justify-center p-4 bg-gray-50 group">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain mix-blend-multiply"
                    referrerPolicy="no-referrer"
                  />
                  <button 
                    onClick={() => setIsImageFullScreen(true)}
                    className="absolute bottom-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full text-gray-700 shadow-sm transition-opacity"
                  >
                    <Maximize2 size={20} />
                  </button>
                </div>
                
                {/* Thumbnails */}
                <div className="flex gap-4 justify-center">
                  {[1, 2, 3, 4].map((i) => (
                    <button 
                      key={i} 
                      className={`w-20 h-24 rounded-2xl border-2 overflow-hidden p-1 ${i === 1 ? 'border-green-600' : 'border-gray-100 hover:border-gray-300'}`}
                    >
                      <img 
                        src={product.image} 
                        alt={`${product.name} thumbnail ${i}`} 
                        className="w-full h-full object-contain mix-blend-multiply"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              </div>

            {/* Right Side - Details */}
            <div className="flex flex-col py-4">
              
              {/* Tags */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-4 py-1.5 bg-green-50 text-green-700 text-sm font-medium rounded-full">
                  {product.category}
                </span>
                <span className="px-4 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                  DeFacto
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">{renderStars(product.rating || 4.5)}</div>
                <span className="text-gray-500">{product.rating || 4.5} ({product.reviews || 12} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-bold text-gray-900">{product.price} EGP</span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-400 line-through mb-1">{product.oldPrice} EGP</span>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-8">
                <span className="px-3 py-1 bg-green-50 text-green-600 text-sm font-medium rounded-full flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  In Stock
                </span>
              </div>

              <hr className="border-gray-100 mb-8" />

              {/* Description */}
              <p className="text-gray-600 text-lg mb-8">
                Material Polyester Blend Colour Name Multicolour Department Women
              </p>

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">Quantity</label>
                <div className="flex items-center gap-6">
                  <div className="flex items-center border border-gray-200 rounded-xl h-14 w-32">
                    <button 
                      onClick={decreaseQuantity}
                      className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors rounded-l-xl"
                    >
                      <Minus size={18} />
                    </button>
                    <div className="flex-1 h-full flex items-center justify-center font-medium text-lg text-gray-900 border-x border-gray-200">
                      {quantity}
                    </div>
                    <button 
                      onClick={increaseQuantity}
                      className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors rounded-r-xl"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  <span className="text-gray-500">225 available</span>
                </div>
              </div>

              {/* Total Price */}
              <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-between mb-8">
                <span className="text-gray-600 text-lg font-medium">Total Price:</span>
                <span className="text-3xl font-bold text-green-600">{(product.price * quantity).toFixed(2)} EGP</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white h-14 rounded-xl text-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-sm">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="flex-1 bg-[#0f172a] hover:bg-[#1e293b] text-white h-14 rounded-xl text-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-sm">
                  Buy Now
                </button>
              </div>

              {/* Wishlist & Share */}
              <div className="flex items-center gap-4 mb-10">
                <button 
                  onClick={toggleWishlist}
                  className={`flex-1 h-14 border rounded-xl font-medium flex items-center justify-center gap-2 transition-colors ${
                    isWishlisted 
                      ? 'border-red-200 text-red-600 bg-red-50 hover:bg-red-100' 
                      : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Heart size={20} className={isWishlisted ? 'fill-red-600' : ''} />
                  {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
                </button>
                <button className="w-14 h-14 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-auto pt-8 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                    <Truck size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Free Delivery</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Orders over $50</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                    <RefreshCcw size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">30 Days Return</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Money back</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Secure Payment</h4>
                    <p className="text-xs text-gray-500 mt-0.5">100% Protected</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Full Screen Image Viewer */}
      {isImageFullScreen && (
        <div className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center">
          <button 
            onClick={() => setIsImageFullScreen(false)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
          >
            <X size={24} />
          </button>
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-w-full max-h-screen object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </>
  );
}
