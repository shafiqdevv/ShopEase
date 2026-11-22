
import { Link, useLocation, Navigate } from "react-router-dom";
import { CheckCircle, Package, ShoppingBag } from "lucide-react";

const OrderSuccessPage = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return <Navigate to="/" replace />;
  }

  const total = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = total >= 100 ? 0 : 10;
  const tax = total * 0.05;
  const finalTotal = total + shipping + tax;

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">

        {/* Success Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle size={42} className="text-green-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Order Placed Successfully!
        </h1>

        <p className="mt-3 text-gray-500">
          Thank you for shopping with ShopEase.
        </p>

        {/* Order Details */}
        <div className="mt-8 rounded-xl bg-gray-50 p-6 text-left">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-gray-500">Order Number</p>
              <p className="mt-1 font-semibold text-gray-900">
                {order.id}
              </p>
            </div>

            <Package size={28} className="text-blue-600" />
          </div>

          <div className="my-5 border-t border-gray-200" />

          <div className="space-y-3 text-sm">
            <div className="flex justify-between gap-3">
              <span className="text-gray-500">Customer</span>
              <span className="font-medium text-gray-900">
                {order.shippingInfo.fullName}
              </span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-gray-500">Payment Method</span>
              <span className="font-medium text-gray-900">
                {order.paymentMethod === "cash"
                  ? "Cash on Delivery"
                  : "Credit / Debit Card (Demo)"}
              </span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-gray-500">Items</span>
              <span className="font-medium text-gray-900">
                {order.items.reduce(
                  (sum, item) => sum + item.quantity,
                  0
                )}
              </span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-gray-500">Total</span>
              <span className="font-bold text-blue-600">
                ${finalTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/products"
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            <ShoppingBag size={18} />
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
};

export default OrderSuccessPage;
