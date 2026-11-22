
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const RelatedProducts = ({ products = [], currentProductId }) => {
  const relatedProducts = products
    .filter((product) => product.id !== currentProductId)
    .slice(0, 4);

  if (!relatedProducts.length) return null;

  return (
    <section className="mt-16">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Related Products
        </h2>

        <p className="mt-2 text-gray-500">
          You might also like these products.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Product Image */}
            <div className="h-56 overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <p className="text-xs font-medium text-blue-600">
                {product.category}
              </p>

              <h3 className="mt-2 font-semibold text-gray-900">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="mt-2 flex items-center gap-1 text-sm">
                <Star
                  size={15}
                  fill="currentColor"
                  className="text-yellow-500"
                />

                <span className="font-medium text-gray-700">
                  {product.rating}
                </span>

                <span className="text-gray-400">
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <p className="mt-3 text-lg font-bold text-gray-900">
                ${product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
