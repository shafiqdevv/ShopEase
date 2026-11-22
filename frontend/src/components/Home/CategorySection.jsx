
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Electronics",
    count: "120 Products",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800",
    slug: "electronics",
  },
  {
    id: 2,
    name: "Fashion",
    count: "240 Products",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800",
    slug: "fashion",
  },
  {
    id: 3,
    name: "Accessories",
    count: "85 Products",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
    slug: "accessories",
  },
  {
    id: 4,
    name: "Home & Living",
    count: "160 Products",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800",
    slug: "home-living",
  },
];

const CategorySection = () => {
  return (
    <section className="py-20 px-5 lg:px-8 max-w-7xl mx-auto">

      {/* Section Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Explore Categories
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Shop By Category
          </h2>

          <p className="text-gray-500 mt-3">
            Find exactly what you're looking for.
          </p>
        </div>

        <Link
          to="/categories"
          className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors"
        >
          View All
          <ArrowUpRight size={18} />
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/products?category=${category.slug}`}
            className="group relative h-[300px] overflow-hidden rounded-2xl"
          >
            {/* Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 text-white flex items-end justify-between">

              <div>
                <h3 className="text-xl font-bold mb-2">
                  {category.name}
                </h3>

                <p className="text-sm text-gray-200">
                  {category.count}
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ArrowUpRight size={20} />
              </div>

            </div>
          </Link>
        ))}

      </div>
    </section>
  );
};

export default CategorySection;
