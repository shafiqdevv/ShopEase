
import { Link } from "react-router-dom";
import { ArrowRight, Tag } from "lucide-react";

const PromotionalBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 py-12">

      <div className="relative min-h-[350px] md:min-h-[420px] rounded-3xl overflow-hidden flex items-center">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 px-7 py-12 md:px-16 max-w-2xl text-white">

          {/* Discount Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full mb-6">
            <Tag size={16} />

            <span className="text-sm font-semibold">
              Limited Time Offer
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            Up to 50% Off
            <br />
            Selected Items.
          </h2>

          {/* Description */}
          <p className="text-gray-200 text-base md:text-lg leading-7 mb-8 max-w-lg">
            Don't miss out on our exclusive deals.
            Shop your favorite products at amazing prices.
          </p>

          {/* Button */}
          <Link
            to="/products?sort=discount"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-full font-medium transition-all duration-300"
          >
            Shop Deals
            <ArrowRight size={19} />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
