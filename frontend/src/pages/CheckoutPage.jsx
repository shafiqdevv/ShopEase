
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ShippingForm from "../components/Checkout/ShippingForm";
import OrderSummary from "../components/Checkout/OrderSummary";
import PaymentMethod from "../components/Checkout/PaymentMethod";

import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItems } = useCart();

  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const navigate = useNavigate();

  const handleShippingSubmit = (data) => {
    setShippingInfo(data);
  };

  const handlePlaceOrder = () => {
    if (!shippingInfo || cartItems.length === 0) return;

    const order = {
      id: `ORD-${Date.now()}`,
      items: cartItems,
      shippingInfo,
      paymentMethod,
      createdAt: new Date().toISOString(),
    };

    navigate("/order-success", {
      state: { order },
    });
  };

  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Your Cart is Empty
          </h1>

          <Link
            to="/products"
            className="mt-5 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Checkout
        </h1>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

          {/* Checkout Forms */}
          <div className="space-y-8 rounded-xl border border-gray-200 bg-white p-6 lg:col-span-2">

            <ShippingForm onSubmit={handleShippingSubmit} />

            {shippingInfo && (
              <>
                <div className="border-t border-gray-200 pt-6">
                  <PaymentMethod onChange={setPaymentMethod} />
                </div>

                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Place Order
                </button>
              </>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <OrderSummary items={cartItems} />
          </div>

        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
