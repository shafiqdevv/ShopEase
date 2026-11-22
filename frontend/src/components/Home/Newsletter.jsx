
import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="px-5 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-3xl px-6 py-14 md:py-20 text-center">

        {/* Heading */}
        <div className="max-w-2xl mx-auto">

          <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-6">
            <Mail size={25} />
          </div>

          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Stay Connected
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Subscribe to Our Newsletter
          </h2>

          <p className="text-gray-500 leading-7 mb-8">
            Get updates about new products, exclusive offers,
            and special discounts directly in your inbox.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage("");
              }}
              placeholder="Enter your email address"
              className="flex-1 min-w-0 px-5 py-4 rounded-full border border-gray-200 outline-none focus:border-blue-600 transition-colors"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-full font-medium transition-colors"
            >
              Subscribe
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Feedback */}
          {message && (
            <p
              role="status"
              className="mt-5 text-sm font-medium text-blue-600"
            >
              {message}
            </p>
          )}

          <p className="text-xs text-gray-400 mt-5">
            No spam. Unsubscribe anytime.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
