
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "My Account", path: "/login" },
  ];

  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg">
      <div className="flex items-center justify-between px-5 py-4">
        <h2 className="text-lg font-semibold">Menu</h2>

        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="text-gray-600 hover:text-blue-600"
        >
          <X size={22} />
        </button>
      </div>

      <nav className="flex flex-col px-5 pb-6 gap-5">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
