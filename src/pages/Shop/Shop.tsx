import { Heart, RefreshCcw, Eye, Plus, Star, StarHalf, Package, Truck, ShieldCheck, Headset } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import QuickViewModal from '../../components/product/QuickViewModal';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const categoryMap: Record<string, string> = {
    'electronics': 'Electronics',
    'womens-fashion': "Women's Fashion",
    'mens-fashion': "Men's Fashion",
    'beauty-health': 'Beauty & Health'
  };

  const selectedCategory = categoryParam ? categoryMap[categoryParam] : null;

  const products = [
    {
      id: 1,
      name: "Woman Shawl",
      category: "Women's Fashion",
      price: 191,
      rating: 4.2,
      reviews: 12,
      image: "https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg",
    },
    {
      id: 2,
      name: "Woman Shawl",
      category: "Women's Fashion",
      price: 149,
      rating: 4.4,
      reviews: 15,
      image: "https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg",
    },
    {
      id: 3,
      name: "Woman Shawl",
      category: "Women's Fashion",
      price: 149,
      rating: 4.8,
      reviews: 9,
      image: "https://ecommerce.routemisr.com/Route-Academy-products/1680403156501-cover.jpeg",
    },
    {
      id: 4,
      name: "Woman Shawl",
      category: "Women's Fashion",
      price: 149,
      rating: 4.4,
      reviews: 5,
      image: "https://ecommerce.routemisr.com/Route-Academy-products/1680402563605-cover.jpeg",
    },
    {
      id: 5,
      name: "Woman Shawl",
      category: "Women's Fashion",
      price: 349,
      rating: 3.2,
      reviews: 8,
      image: "https://ecommerce.routemisr.com/Route-Academy-products/1680402411833-cover.jpeg",
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
      image: "https://ecommerce.routemisr.com/Route-Academy-products/1680402295928-cover.jpeg",
    },
    {
      id: 7,
      name: "Woman Brown Long Sleeve Tunic LT.CAMEL",
      category: "Women's Fashion",
      price: 359,
      oldPrice: 499,
      discount: "-28%",
      rating: 4.0,
      reviews: 8,
      image: "https://ecommerce.routemisr.com/Route-Academy-products/1680401893316-cover.jpeg",
    },
    {
      id: 8,
      name: "Woman Standart Fit Knitted Cardigan",
      category: "Women's Fashion",
      price: 449,
      oldPrice: 499,
      discount: "-10%",
      rating: 3.5,
      reviews: 4,
      image: "https://ecommerce.routemisr.com/Route-Academy-products/1680401672268-cover.jpeg",
    },
    {
      id: 9,
      name: "Relaxed Fit Knitted Joggers Lilac",
      category: "Women's Fashion",
      price: 189,
      oldPrice: 499,
      discount: "-62%",
      rating: 2.8,
      reviews: 4,
      image: "https://ecommerce.routemisr.com/Route-Academy-products/1680401528864-cover.jpeg",
    },
    {
      id: 10,
      name: "Woman Socks",
      category: "Women's Fashion",
      price: 199,
      rating: 4.2,
      reviews: 4,
      image: "https://ecommerce.routemisr.com/Route-Academy-products/1680401176411-cover.jpeg",
    },
    {
      id: 11,
      name: "Woman Karma Socks Multicolour",
      category: "Women's Fashion",
      price: 199,
      rating: 2.8,
      reviews: 6,
      image: "https://ecommerce.routemisr.com/Route-Academy-products/1680400287654-cover.jpeg",
    },
    {
      id: 12,
      name: "Logo T-Shirt Green",
      category: "Men's Fashion",
      price: 379,
      oldPrice: 744,
      discount: "-49%",
      rating: 4.3,
      reviews: 4,
      image: "https://ecommerce.routemisr.com/Route-Academy-products/1680399913757-cover.jpeg",
    },
    {
      id: 13,
      name: "Orca Leather Boots Anthracite",
      category: "Men's Fashion",
      price: 3064,
      oldPrice: 4829,
      discount: "-37%",
      rating: 3.4,
      reviews: 6,
      image: "https://ecommerce.routemisr.com/Route-Academy-products/1680399661234-cover.jpeg",
    },
    {
      id: 14,
      name: "Softride Enzo NXT CASTLEROCK-High Risk R",
      category: "Men's Fashion",
      price: 2999,
      rating: 4.7,
      reviews: 3,
      image: "https://ecommerce.routemisr.com/Route-Academy-products/1680396593789-cover.jpeg",
    },
    {
      id: 15,
      name: "ESS Big Logo Hoodie TR Puma Black",
      category: "Men's Fashion",
      price: 2599,
      oldPrice: 2649,
      discount: "-2%",
      rating: 4.5,
      reviews: 4,
      image: "https://ecommerce.routemisr.com/Route-Academy-products/1680396038304-cover.jpeg",
    }
  ];

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const openQuickView = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarHalf key={i} size={14} className="fill-yellow-400 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} size={14} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* Header Banner */}
      <div className="bg-[#38d373] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="font-medium text-white">{selectedCategory || "All Products"}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Package size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-1">{selectedCategory || "All Products"}</h1>
              <p className="text-white/90">Explore our {selectedCategory ? selectedCategory.toLowerCase() : "complete"} product collection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-500 mb-6 font-medium">Showing {filteredProducts.length} products</p>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100">
            <Package size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl text-gray-600 font-medium">No products found in this category.</h3>
            <Link to="/shop" className="text-green-600 hover:underline mt-2 inline-block">View all products</Link>
          </div>
        )}

        {filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              
              return (
                <div key={product.id} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-lg transition-shadow group relative flex flex-col">
                  
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discount}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 transition-opacity">
                    <button 
                      onClick={() => toggleWishlist(product.id)}
                      className={`w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center transition-colors ${
                        isWishlisted ? 'text-red-500 hover:bg-red-50' : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
                      }`}
                    >
                      <Heart size={16} className={isWishlisted ? 'fill-red-500' : ''} />
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-500 hover:text-green-600 hover:bg-green-50 transition-colors">
                      <RefreshCcw size={16} />
                    </button>
                    <button 
                      onClick={() => openQuickView(product)}
                      className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-500 hover:text-green-600 hover:bg-green-50 transition-colors"
                    >
                      <Eye size={16} />
                    </button>
                  </div>

                  {/* Product Image */}
                  <div 
                    className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center cursor-pointer"
                    onClick={() => openQuickView(product)}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col flex-grow">
                    <span className="text-xs text-gray-500 mb-1">{product.category}</span>
                    <h3 
                      className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 flex-grow hover:text-green-600 cursor-pointer transition-colors"
                      onClick={() => openQuickView(product)}
                    >
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex">{renderStars(product.rating)}</div>
                      <span className="text-xs text-gray-500 ml-1">{product.rating} ({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">{product.price} EGP</span>
                        </div>
                        {product.oldPrice && (
                          <span className="text-xs text-gray-400 line-through">{product.oldPrice} EGP</span>
                        )}
                      </div>
                      
                      <button className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors shadow-sm">
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}
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

      <QuickViewModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
}
