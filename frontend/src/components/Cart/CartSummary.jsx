
import { useMemo } from "react";
import { Link } from "react-router-dom";

const CartSummary = ({ items }) => {
  const subtotal = useMemo(() => {
    return items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [items]);

  const shipping = subtotal === 0 || subtotal >= 100 ? 0 : 10;

  const tax = subtotal * 0.05;

  const total = subtotal + shipping + tax;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="mb-5 text-xl font-bold text-gray-900">
        Order Summary
      </h2>

      {/* Subtotal */}
      <div className="mb-4 flex justify-between text-sm">
        <span className="text-gray-500">Subtotal</span>
        <span className="font-medium">${subtotal.toFixed(2)}</span>
      </div>

      {/* Shipping */}
      <div className="mb-4 flex justify-between text-sm">
        <span className="text-gray-500">Shipping</span>
        <span className="font-medium">
          {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
        </span>
      </div>

      {/* Tax */}
      <div className="mb-4 flex justify-between text-sm">
        <span className="text-gray-500">Estimated Tax (5%)</span>
        <span className="font-medium">${tax.toFixed(2)}</span>
      </div>

      <div className="my-5 border-t border-gray-200" />

      {/* Total */}
      <div className="mb-6 flex justify-between">
        <span className="font-semibold text-gray-900">Total</span>
        <span className="text-xl font-bold text-gray-900">
          ${total.toFixed(2)}
        </span>
      </div>

      {/* Checkout */}
      <Link
        to="/checkout"
        className={`block rounded-lg py-3 text-center font-semibold text-white transition ${
          items.length === 0
            ? "pointer-events-none bg-gray-400"
            : "bg-gray-900 hover:bg-blue-600"
        }`}
        aria-disabled={items.length === 0}
      >
        Proceed to Checkout
      </Link>

      <p className="mt-4 text-center text-xs text-gray-400">
        Shipping is free on orders over $100.
      </p>
    </div>
  );
};

export default CartSummary;
