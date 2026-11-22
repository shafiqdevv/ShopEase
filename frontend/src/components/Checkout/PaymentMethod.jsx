
import { useState } from "react";
import { CreditCard, Banknote } from "lucide-react";

const PaymentMethod = ({ onChange }) => {
  const [method, setMethod] = useState("cash");

  const handleChange = (value) => {
    setMethod(value);
    onChange(value);
  };

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold text-gray-900">
        Payment Method
      </h2>

      {/* Cash on Delivery */}
      <label
        className={`flex cursor-pointer items-center gap-4 rounded-xl border p-5 transition ${
          method === "cash"
            ? "border-blue-600 bg-blue-50"
            : "border-gray-200 hover:border-gray-400"
        }`}
      >
        <input
          type="radio"
          name="payment"
          value="cash"
          checked={method === "cash"}
          onChange={() => handleChange("cash")}
          className="h-4 w-4 accent-blue-600"
        />

        <Banknote size={24} className="text-gray-700" />

        <div>
          <h3 className="font-semibold text-gray-900">
            Cash on Delivery
          </h3>
          <p className="text-sm text-gray-500">
            Pay when your order arrives.
          </p>
        </div>
      </label>

      {/* Credit Card */}
      <label
        className={`flex cursor-pointer items-center gap-4 rounded-xl border p-5 transition ${
          method === "card"
            ? "border-blue-600 bg-blue-50"
            : "border-gray-200 hover:border-gray-400"
        }`}
      >
        <input
          type="radio"
          name="payment"
          value="card"
          checked={method === "card"}
          onChange={() => handleChange("card")}
          className="h-4 w-4 accent-blue-600"
        />

        <CreditCard size={24} className="text-gray-700" />

        <div>
          <h3 className="font-semibold text-gray-900">
            Credit / Debit Card
          </h3>
          <p className="text-sm text-gray-500">
            Online payment (Demo only).
          </p>
        </div>
      </label>
    </div>
  );
};

export default PaymentMethod;
