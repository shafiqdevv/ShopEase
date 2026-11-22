
import { useMemo } from "react";

const OrderSummary = ({ items }) => {
  const { subtotal, shipping, tax, total } = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const shipping = subtotal === 0 || subtotal >= 100 ? 0 : 10;
    const tax = subtotal * 0.05;
    const total = subtotal + shipping + tax;

    return { subtotal, shipping, tax, total };
  }, [items]);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="mb-6 text-xl font-bold text-gray-900">
        Order Summary
      </h2>

      {/* Products */}
      <div className="max-h-72 space-y-4 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="h-16 w-16 rounded-lg bg-gray-100 object-cover"
            />

            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900">
                {item.name}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Quantity: {item.quantity}
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-900">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-6 border-t border-gray-200" />

      {/* Price Details */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Tax (5%)</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="my-5 border-t border-gray-200" />

      {/* Total */}
      <div className="flex justify-between">
        <span className="text-lg font-bold text-gray-900">
          Total
        </span>

        <span className="text-xl font-bold text-blue-600">
          ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default OrderSummary;
