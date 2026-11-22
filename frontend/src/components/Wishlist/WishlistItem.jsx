
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star, Trash2 } from "lucide-react";

const WishlistItem = ({ product, onRemove, onAddToCart }) => {
  return (
    <div className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row">

      {/* Product Image */}
      <Link
        to={`/products/${product.id}`}
        className="h-48 shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:w-48"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </Link>

      {/* Product Info */}
      <div className="flex flex-1 flex-col justify-between gap-4">

        <div>
          <p className="text-sm text-blue-600">
            {product.category}
          </p>

          <Link
            to={`/products/${product.id}`}
            className="mt-1 block text-lg font-semibold text-gray-900 hover:text-blue-600"
          >
            {product.name}
          </Link>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />

            <span className="text-sm text-gray-700">
              {product.rating}
            </span>

            <span className="text-xs text-gray-400">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>

            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3">

          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            <ShoppingCart size={17} />
            Add to Cart
          </button>

          <button
            type="button"
            onClick={() => onRemove(product.id)}
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:border-red-500 hover:text-red-500"
          >
            <Trash2 size={17} />
            Remove
          </button>

        </div>
      </div>

    </div>
  );
};

export default WishlistItem;
