
import { Link } from "react-router-dom";

import CartList from "../components/Cart/CartList";
import CartSummary from "../components/Cart/CartSummary";

import { useCart } from "../context/CartContext";

const CartPage = () => {
  // Cart Context
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartCount,
  } = useCart();

  // Update Quantity
  const handleUpdateQuantity = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  // Remove Product
  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Shopping Cart
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              {cartCount} items in your cart
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/products"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Continue Shopping
            </Link>

            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                className="text-sm font-medium text-red-500 hover:underline"
              >
                Clear Cart
              </button>
            )}
          </div>
        </div>

        {/* Cart Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Cart Items */}
          <div className="lg:col-span-2">
            <CartList
              items={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemove={handleRemove}
            />
          </div>

          {/* Cart Summary */}
          <div>
            <CartSummary items={cartItems} />
          </div>

        </div>
      </div>
    </main>
  );
};

export default CartPage;
