
import { useState } from "react";
import { Search, X } from "lucide-react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    console.log("Searching for:", search);
  };

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center w-full max-w-md border border-gray-300 rounded-full px-4 py-2 focus-within:border-blue-600 transition-colors"
    >
      <Search size={20} className="text-gray-400 shrink-0" />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full px-3 outline-none text-sm text-gray-700 bg-transparent"
      />

      {search && (
        <button
          type="button"
          onClick={clearSearch}
          aria-label="Clear search"
          className="text-gray-400 hover:text-gray-700"
        >
          <X size={18} />
        </button>
      )}

      <button
        type="submit"
        className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
