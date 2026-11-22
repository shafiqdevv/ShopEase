
import { Minus, Plus } from "lucide-react";

const QuantitySelector = ({ quantity, setQuantity, max = 99 }) => {
  const decrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increase = () => {
    setQuantity((prev) => Math.min(max, prev + 1));
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-gray-700">
        Quantity:
      </span>

      <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">

        <button
          type="button"
          onClick={decrease}
          disabled={quantity <= 1}
          aria-label="Decrease quantity"
          className="p-3 text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Minus size={16} />
        </button>

        <span className="min-w-12 text-center font-semibold text-gray-900">
          {quantity}
        </span>

        <button
          type="button"
          onClick={increase}
          disabled={quantity >= max}
          aria-label="Increase quantity"
          className="p-3 text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Plus size={16} />
        </button>

      </div>
    </div>
  );
};

export default QuantitySelector;
