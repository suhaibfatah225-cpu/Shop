import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Star, StarHalf, Minus, Plus, ShoppingCart, Heart, Share2, Truck, RefreshCcw, ShieldCheck, Check, Maximize2, X } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const [isImageFullScreen, setIsImageFullScreen] = useState(false);

  useEffect(() => {
    if (isImageFullScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isImageFullScreen]);

  // Hardcoded products for now, matching Shop.tsx
  const products = [
    {
      id: 1,
      name: "Woman Shawl",
      category: "Women's Fashion",
      price: 191,
      rating: 4.2,
      reviews: 12,
      image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Woman Shawl",
      category: "Women's Fashion",
      price: 149,
      rating: 4.4,
      reviews: 15,
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Woman Shawl",
      category: "Women's Fashion",
      price: 149,
      rating: 4.8,
      reviews: 9,
      image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 6,
      name: "Woman Bordeaux Long Sleeve Blouse BORDEAUX",
      category: "Women's Fashion",
      price: 349,
      oldPrice: 499,
      discount: "-30%",
      rating: 3.5,
      reviews: 6,
      image: "https://images.unsplash.com/photo-1598522325825-7038166ceb52?auto=format&fit=crop&q=80&w=400",
    }
  ];

  // Find product or use a default one if not found (for demo purposes)
  const product = products.find(p => p.id === Number(id)) || products[0];

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
    <div className="bg-gray-50/50 min-h-screen pb-16">
      <div className="container mx-auto px-4 py-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
          <span>›</span>
          <Link to="/shop?category=womens-fashion" className="hover:text-green-600 transition-colors">{product.category}</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        {/* Main Product Section */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Left Side - Images */}
            <div className="flex flex-col gap-6">
              {/* Main Image */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-gray-100 flex items-center justify-center p-4 group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
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
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="flex flex-col">
              
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
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="text-gray-500">{product.rating} ({product.reviews} reviews)</span>
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

        {/* Tabs Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-100 px-6">
            <button 
              onClick={() => setActiveTab('details')}
              className={`px-6 py-5 font-medium text-sm transition-colors border-b-2 ${
                activeTab === 'details' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Product Details
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-5 font-medium text-sm transition-colors border-b-2 ${
                activeTab === 'reviews' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Reviews ({product.reviews})
            </button>
            <button 
              onClick={() => setActiveTab('shipping')}
              className={`px-6 py-5 font-medium text-sm transition-colors border-b-2 ${
                activeTab === 'shipping' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Shipping & Returns
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8 md:p-10">
            {activeTab === 'details' && (
              <div className="animate-in fade-in duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">About this Product</h3>
                <p className="text-gray-600 mb-10">
                  Material Polyester Blend Colour Name Multicolour Department Women
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Product Information */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-6">Product Information</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-500">Category</span>
                        <span className="font-medium text-gray-900">{product.category}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-500">Brand</span>
                        <span className="font-medium text-gray-900">DeFacto</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-500">Items Sold</span>
                        <span className="font-medium text-gray-900">25257+ sold</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-6">Key Features</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        Premium Quality Product
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        100% Authentic Guarantee
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        Fast & Secure Packaging
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        Quality Tested
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="animate-in fade-in duration-300 text-gray-500">
                Reviews content will go here.
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="animate-in fade-in duration-300 text-gray-500">
                Shipping and returns information will go here.
              </div>
            )}
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
    </div>
  );
}
