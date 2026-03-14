import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const slides = [
    {
      id: 1,
      title: "Fast & Free Delivery",
      subtitle: "Same day delivery available",
      button1: "Order Now",
      button1Style: "bg-white text-purple-600 hover:bg-gray-50",
      button2: "Delivery Info",
      button2Style: "bg-transparent border-2 border-white text-white hover:bg-white/10",
    },
    {
      id: 2,
      title: "Premium Quality Guaranteed",
      subtitle: "Fresh from farm to your table",
      button1: "Shop Now",
      button1Style: "bg-white text-blue-600 hover:bg-gray-50",
      button2: "Learn More",
      button2Style: "bg-transparent border-2 border-white text-white hover:bg-white/10",
    },
    {
      id: 3,
      title: "Organic & Healthy Choices",
      subtitle: "Discover our new organic section",
      button1: "Explore",
      button1Style: "bg-white text-green-600 hover:bg-gray-50",
      button2: "View Offers",
      button2Style: "bg-transparent border-2 border-white text-white hover:bg-white/10",
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-green-600 overflow-hidden group">
      
      {/* Static Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-multiply bg-cover bg-center"
        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop")` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-transparent"></div>

      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative flex items-center">
            
            {/* Content */}
            <div className="container mx-auto px-8 md:px-16 relative z-10">
              <div className="max-w-xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 transition-all duration-500 transform translate-y-0">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  {slide.subtitle}
                </p>
                <div className="flex gap-4">
                  <button className={`${slide.button1Style} px-8 py-3 rounded-md font-semibold transition-colors`}>
                    {slide.button1}
                  </button>
                  <button className={`${slide.button2Style} px-8 py-3 rounded-md font-semibold transition-colors`}>
                    {slide.button2}
                  </button>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
