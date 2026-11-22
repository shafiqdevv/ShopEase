
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";

import { useWishlist } from "../../context/WishlistContext";

const ProductCard = ({ product, onAddToCart }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">

      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-label={
            isWishlisted
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className="absolute right-3 top-3 rounded-full bg-white p-2 shadow-md transition hover:scale-110"
        >
          <Heart
            size={20}
            className={
              isWishlisted
                ? "fill-red-500 text-red-500"
                : "text-gray-600"
            }
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-blue-600">
          {product.category}
        </p>

        <Link to={`/products/${product.id}`}>
          <h3 className="mt-1 font-semibold text-gray-900 hover:text-blue-600">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1 text-yellow-500">
          <Star size={15} fill="currentColor" />

          <span className="text-sm text-gray-700">
            {product.rating}
          </span>

          <span className="text-xs text-gray-400">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="font-bold text-gray-900">
              ${product.price}
            </span>

            {product.oldPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="rounded-lg bg-gray-900 p-2 text-white transition hover:bg-blue-600"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
