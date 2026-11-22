
import { ArrowUpDown } from "lucide-react";

const ProductSort = ({ sortBy, setSortBy, productsCount }) => {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

      {/* Products Count */}
      <p className="text-sm text-gray-500">
        Showing <span className="font-semibold text-gray-800">{productsCount}</span> products
      </p>

      {/* Sort Select */}
      <div className="flex items-center gap-2">
        <ArrowUpDown size={18} className="text-gray-500" />

        <label htmlFor="sort" className="text-sm text-gray-600">
          Sort by:
        </label>

        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>
      </div>

    </div>
  );
};

export default ProductSort;
