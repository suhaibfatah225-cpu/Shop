import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Categories() {
  const categories = [
    { name: "Music", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=200&auto=format&fit=crop" },
    { name: "Men's Fashion", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=200&auto=format&fit=crop" },
    { name: "Women's Fashion", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=200&auto=format&fit=crop" },
    { name: "SuperMarket", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=200&auto=format&fit=crop" },
    { name: "Home", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=200&auto=format&fit=crop" },
    { name: "Books", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=200&auto=format&fit=crop" },
    { name: "Mobiles", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=200&auto=format&fit=crop" },
    { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=200&auto=format&fit=crop" }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-green-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900">Shop By <span className="text-green-600">Category</span></h2>
        </div>
        <Link className="flex items-center gap-1 text-green-600 font-medium hover:text-green-700 transition-colors">
          View All Categories
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all cursor-pointer group">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-50 border-2 border-transparent group-hover:border-green-100 transition-colors">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-800 text-center">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
