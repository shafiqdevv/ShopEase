
import { ShoppingCart, Star, CheckCircle } from "lucide-react";

const ProductInfo = ({ product, onAddToCart }) => {
  const discount =
    product.oldPrice
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100
        )
      : 0;

  return (
    <div className="flex flex-col gap-5">

      {/* Category */}
      <p className="text-sm font-medium text-blue-600">
        {product.category}
      </p>

      {/* Product Name */}
      <h1 className="text-3xl font-bold text-gray-900">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-yellow-500">
          <Star size={18} fill="currentColor" />
          <span className="font-semibold text-gray-900">
            {product.rating}
          </span>
        </div>

        <span className="text-sm text-gray-500">
          ({product.reviews} reviews)
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-3xl font-bold text-gray-900">
          ${product.price}
        </span>

        {product.oldPrice && (
          <>
            <span className="text-lg text-gray-400 line-through">
              ${product.oldPrice}
            </span>

            {discount > 0 && (
              <span className="rounded-md bg-red-100 px-2 py-1 text-sm font-medium text-red-600">
                {discount}% OFF
              </span>
            )}
          </>
        )}
      </div>

      {/* Description */}
      <p className="leading-7 text-gray-600">
        {product.description || "No description available."}
      </p>

      {/* Stock Status */}
      <div className="flex items-center gap-2 text-sm font-medium text-green-600">
        <CheckCircle size={18} />
        In Stock
      </div>

      {/* Add to Cart */}
      <button
        onClick={() => onAddToCart(product)}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        <ShoppingCart size={20} />
        Add to Cart
      </button>

    </div>
  );
};

export default ProductInfo;
