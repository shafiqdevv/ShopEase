
import { Link } from "react-router-dom";
import { ArrowRight, Star, ShoppingCart } from "lucide-react";

const newProducts = [
  {
    id: 1,
    name: "Minimalist Leather Bag",
    category: "Accessories",
    price: 149.99,
    rating: 4.8,
    reviews: 45,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800",
  },
  {
    id: 2,
    name: "Smart Wireless Watch",
    category: "Electronics",
    price: 199.99,
    rating: 4.7,
    reviews: 32,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
  },
  {
    id: 3,
    name: "Premium Running Shoes",
    category: "Fashion",
    price: 89.99,
    rating: 4.9,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
  },
  {
    id: 4,
    name: "Modern Sunglasses",
    category: "Accessories",
    price: 49.99,
    rating: 4.6,
    reviews: 28,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800",
  },
];

const NewArrivals = () => {
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">

      {/* Section Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Just Arrived
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            New Arrivals
          </h2>

          <p className="text-gray-500 mt-3">
            Discover the latest additions to our collection.
          </p>
        </div>

        <Link
          to="/products?sort=newest"
          className="hidden sm:flex items-center gap-2 text-sm font-semibold hover:text-blue-600 transition-colors"
        >
          View All
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                New
              </span>
            </div>

            {/* Product Information */}
            <div className="p-5">
              <p className="text-xs text-gray-400 mb-2">
                {product.category}
              </p>

              <h3 className="text-base font-semibold text-gray-900 mb-3">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={15} fill="currentColor" />

                  <span className="text-sm font-medium text-gray-700">
                    {product.rating}
                  </span>
                </div>

                <span className="text-xs text-gray-400">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price and Cart */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price}
                </span>

                <button
                  onClick={() => handleAddToCart(product)}
                  aria-label={`Add ${product.name} to cart`}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
                >
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
