
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8">

        <div className="max-w-2xl text-white">

          <span className="inline-block text-sm uppercase tracking-[4px] mb-6 text-gray-200">
            New Collection 2026
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Discover Your
            <br />
            Perfect Style.
          </h1>

          <p className="text-gray-200 text-base md:text-lg leading-8 max-w-lg mb-9">
            Explore our latest collection of premium products.
            Find everything you love, all in one place.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">

            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-full font-medium transition-all duration-300"
            >
              Shop Now
              <ArrowRight size={19} />
            </Link>

            <Link
              to="/categories"
              className="inline-flex items-center gap-2 border border-white/70 hover:bg-white hover:text-black text-white px-7 py-4 rounded-full font-medium transition-all duration-300"
            >
              Explore Collection
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
