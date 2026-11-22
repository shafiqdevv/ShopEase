import { Routes, Route } from "react-router-dom";

// Navbar
import Navbar from "./components/Navbar/Navbar";

// Home Components
import HeroSection from "./components/Home/HeroSection";
import CategorySection from "./components/Home/CategorySection";
import FeaturedProducts from "./components/Home/FeaturedProducts";
import NewArrivals from "./components/Home/NewArrivals";
import PromotionalBanner from "./components/Home/PromotionalBanner";
import Newsletter from "./components/Home/Newsletter";

// Pages
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";

import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";

// Home Page
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <NewArrivals />
      <PromotionalBanner />
      <Newsletter />
    </>
  );
};

// App
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/products/:id" element={<ProductDetailsPage />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/wishlist" element={<WishlistPage />} />

        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/order-success" element={<OrderSuccessPage />} />
      </Routes>
    </>
  );
};

export default App;
