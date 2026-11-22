
import CartItem from "./CartItem";

const CartList = ({
  items,
  onUpdateQuantity,
  onRemove,
}) => {
  if (!items || items.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white px-6 py-16 text-center">
        <h3 className="text-xl font-semibold text-gray-800">
          Your cart is empty
        </h3>

        <p className="mt-2 text-gray-500">
          Looks like you haven't added any products yet.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white px-5">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default CartList;
