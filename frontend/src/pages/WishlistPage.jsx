
import { Link } from "react-router-dom";

import WishlistItem from "../components/Wishlist/WishlistItem";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const WishlistPage = () => {
  const {
    wishlistItems,
    wishlistCount,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            My Wishlist
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {wishlistCount} products in your wishlist
          </p>
        </div>

        {/* Wishlist Items */}
        {wishlistItems.length > 0 ? (
          <div className="space-y-5">
            {wishlistItems.map((product) => (
              <WishlistItem
                key={product.id}
                product={product}
                onRemove={removeFromWishlist}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          /* Empty Wishlist */
          <div className="rounded-xl border border-gray-200 bg-white px-6 py-16 text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Your Wishlist is Empty
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              You haven't added any products to your wishlist yet.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Explore Products
            </Link>
          </div>
        )}

      </div>
    </main>
  );
};

export default WishlistPage;
