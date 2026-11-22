
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Search,
  Heart,
  ShoppingCart,
  UserRound,
  Menu,
  X,
} from "lucide-react";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Cart Context
  const { cartCount } = useCart();

  // Wishlist Context
  const { wishlistCount } = useWishlist();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Shop<span className="text-blue-600">Ease.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-5">

          <button
            aria-label="Search"
            className="hidden text-gray-700 hover:text-blue-600 sm:block"
          >
            <Search size={21} />
          </button>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            aria-label={`Wishlist, ${wishlistCount} items`}
            className="relative hidden text-gray-700 hover:text-blue-600 sm:block"
          >
            <Heart size={21} />

            {wishlistCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] text-white">
                {wishlistCount > 99 ? "99+" : wishlistCount}
              </span>
            )}
          </Link>

          {/* Shopping Cart */}
          <Link
            to="/cart"
            aria-label={`Shopping cart, ${cartCount} items`}
            className="relative text-gray-700 hover:text-blue-600"
          >
            <ShoppingCart size={21} />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/login"
            aria-label="Account"
            className="hidden text-gray-700 hover:text-blue-600 sm:block"
          >
            <UserRound size={21} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-gray-700 md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="flex items-center gap-6 border-t border-gray-200 pt-4 sm:hidden">

              {/* Mobile Wishlist */}
              <Link
                to="/wishlist"
                onClick={() => setIsOpen(false)}
                aria-label={`Wishlist, ${wishlistCount} items`}
                className="relative"
              >
                <Heart size={21} />

                {wishlistCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] text-white">
                    {wishlistCount > 99 ? "99+" : wishlistCount}
                  </span>
                )}
              </Link>

              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                aria-label="Account"
              >
                <UserRound size={21} />
              </Link>

              <button aria-label="Search">
                <Search size={21} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
