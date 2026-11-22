
import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

const ProductFilters = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Accessories",
    "Home & Living",
  ];

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      category: "All",
      minPrice: "",
      maxPrice: "",
      rating: "All",
    });
  };

  return (
    <aside className="w-full lg:w-64">

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 flex w-full items-center justify-between rounded-lg border p-3 lg:hidden"
      >
        <span className="flex items-center gap-2 font-medium">
          <SlidersHorizontal size={18} />
          Filters
        </span>

        {isOpen ? <X size={18} /> : null}
      </button>

      {/* Filters Content */}
      <div className={`${isOpen ? "block" : "hidden"} rounded-xl border border-gray-200 bg-white p-5 lg:block`}>

        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Filters</h3>

          <button
            onClick={resetFilters}
            className="text-sm text-blue-600 hover:underline"
          >
            Reset All
          </button>
        </div>

        {/* Categories */}
        <div className="border-b pb-5">
          <h4 className="mb-3 font-medium">Categories</h4>

          <div className="space-y-3">
            {categories.map((category) => (
              <label
                key={category}
                className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
              >
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === category}
                  onChange={() => updateFilter("category", category)}
                  className="accent-blue-600"
                />

                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="border-b py-5">
          <h4 className="mb-3 font-medium">Price Range</h4>

          <div className="flex gap-2">
            <input
              type="number"
              min="0"
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) =>
                updateFilter("minPrice", e.target.value)
              }
              className="w-1/2 rounded-lg border p-2 text-sm outline-none focus:border-blue-500"
            />

            <input
              type="number"
              min="0"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) =>
                updateFilter("maxPrice", e.target.value)
              }
              className="w-1/2 rounded-lg border p-2 text-sm outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Rating */}
        <div className="pt-5">
          <h4 className="mb-3 font-medium">Minimum Rating</h4>

          <select
            value={filters.rating}
            onChange={(e) =>
              updateFilter("rating", e.target.value)
            }
            className="w-full rounded-lg border p-2 text-sm outline-none focus:border-blue-500"
          >
            <option value="All">All Ratings</option>
            <option value="4">4 Stars & Above</option>
            <option value="3">3 Stars & Above</option>
            <option value="2">2 Stars & Above</option>
          </select>
        </div>

      </div>
    </aside>
  );
};

export default ProductFilters;
