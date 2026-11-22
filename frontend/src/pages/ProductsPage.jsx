
import { useMemo, useState } from "react";

import ProductFilters from "../components/Products/ProductFilters";
import ProductSort from "../components/Products/ProductSort";
import ProductGrid from "../components/Products/ProductGrid";

import { useCart } from "../context/CartContext";

// Temporary Mock Data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 89,
    oldPrice: 120,
    rating: 4.8,
    reviews: 120,
    image: "/images/headphones.jpg",
    createdAt: "2026-11-20",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 150,
    oldPrice: 180,
    rating: 4.5,
    reviews: 90,
    image: "/images/watch.jpg",
    createdAt: "2026-11-18",
  },
  {
    id: 3,
    name: "Classic T-Shirt",
    category: "Fashion",
    price: 25,
    oldPrice: 35,
    rating: 4.2,
    reviews: 65,
    image: "/images/tshirt.jpg",
    createdAt: "2026-11-19",
  },
  {
    id: 4,
    name: "Leather Backpack",
    category: "Accessories",
    price: 75,
    oldPrice: 95,
    rating: 4.7,
    reviews: 80,
    image: "/images/backpack.jpg",
    createdAt: "2026-11-15",
  },
  {
    id: 5,
    name: "Desk Lamp",
    category: "Home & Living",
    price: 45,
    oldPrice: 60,
    rating: 3.9,
    reviews: 40,
    image: "/images/lamp.jpg",
    createdAt: "2026-11-21",
  },
];

const ProductsPage = () => {
  const [filters, setFilters] = useState({
    category: "All",
    minPrice: "",
    maxPrice: "",
    rating: "All",
  });

  const [sortBy, setSortBy] = useState("featured");

  // Cart Context
  const { addToCart } = useCart();

  // Add to Cart
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  // Filtering and Sorting
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category Filter
    if (filters.category !== "All") {
      result = result.filter(
        (product) => product.category === filters.category
      );
    }

    // Minimum Price
    if (filters.minPrice !== "") {
      result = result.filter(
        (product) => product.price >= Number(filters.minPrice)
      );
    }

    // Maximum Price
    if (filters.maxPrice !== "") {
      result = result.filter(
        (product) => product.price <= Number(filters.maxPrice)
      );
    }

    // Rating Filter
    if (filters.rating !== "All") {
      result = result.filter(
        (product) => product.rating >= Number(filters.rating)
      );
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;

      default:
        break;
    }

    return result;
  }, [filters, sortBy]);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Our Products
          </h1>

          <p className="mt-2 text-gray-500">
            Discover products you'll love.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">

          {/* Filters */}
          <ProductFilters
            filters={filters}
            setFilters={setFilters}
          />

          {/* Products */}
          <div className="min-w-0 flex-1">

            <ProductSort
              sortBy={sortBy}
              setSortBy={setSortBy}
              productsCount={filteredProducts.length}
            />

            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />

          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
