
import { Link } from "react-router-dom";
import { ArrowRight, Star, ShoppingCart } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 89.99,
    oldPrice: 119.99,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
  },
  {
    id: 2,
    name: "Classic Wrist Watch",
    category: "Accessories",
    price: 129.99,
    oldPrice: 159.99,
    rating: 4.6,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
  },
  {
    id: 3,
    name: "Premium Sneakers",
    category: "Fashion",
    price: 74.99,
    oldPrice: 99.99,
    rating: 4.9,
    reviews: 210,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
  },
  {
    id: 4,
    name: "Modern Backpack",
    category: "Accessories",
    price: 59.99,
    oldPrice: 79.99,
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800",
  },
];

const FeaturedProducts = () => {
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">

      {/* Section Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Our Selection
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Featured Products
          </h2>

          <p className="text-gray-500 mt-3">
            Handpicked products just for you.
          </p>
        </div>

        <Link
          to="/products"
          className="hidden sm:flex items-center gap-2 text-sm font-semibold hover:text-blue-600 transition-colors"
        >
          View All
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {featuredProducts.map((product) => (
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

              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Featured
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

              {/* Price and Add to Cart */}
              <div className="flex items-center justify-between gap-2">

                <div>
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through ml-2">
                    ${product.oldPrice}
                  </span>
                </div>

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

export default FeaturedProducts;
