import Hero from './Hero';
import Features from './Features';
import Categories from './Categories';
import PromoBanners from './PromoBanners';
import FeaturedProducts from './FeaturedProducts';
import Newsletter from './Newsletter';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <Categories />
      <PromoBanners />
      <FeaturedProducts />
      <Newsletter />
    </div>
  );
}
