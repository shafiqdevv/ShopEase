
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors duration-200 ${
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
  );
};

export default NavLinks;
