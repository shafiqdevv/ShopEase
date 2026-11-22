
import { Minus, Plus, Trash2 } from "lucide-react";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex flex-col gap-4 border-b border-gray-200 py-5 sm:flex-row sm:items-center">

      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-24 rounded-lg bg-gray-100 object-cover"
      />

      {/* Product Information */}
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-gray-800">
          {item.name}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {item.category}
        </p>

        <p className="mt-2 font-semibold text-gray-900">
          ${item.price}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() =>
            onUpdateQuantity(item.id, item.quantity - 1)
          }
          disabled={item.quantity <= 1}
          className="rounded-md border p-2 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>

        <span className="min-w-6 text-center font-medium">
          {item.quantity}
        </span>

        <button
          onClick={() =>
            onUpdateQuantity(item.id, item.quantity + 1)
          }
          className="rounded-md border p-2 transition hover:bg-gray-100"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Subtotal */}
      <div className="flex items-center justify-between gap-4 sm:w-28 sm:flex-col sm:items-end">
        <p className="font-bold text-gray-900">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 transition hover:text-red-700"
          aria-label="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>

    </div>
  );
};

export default CartItem;
