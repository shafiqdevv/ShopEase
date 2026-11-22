
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import ProductGallery from "../components/Products/ProductGallery";
import ProductInfo from "../components/ProductDetails/ProductInfo";
import QuantitySelector from "../components/ProductDetails/QuantitySelector";
import RelatedProducts from "../components/ProductDetails/RelatedProducts";

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
    description:
      "Experience premium sound quality with these wireless headphones. Designed for comfort and excellent audio performance.",
    image: "/images/headphones.jpg",
    images: [
      "/images/headphones.jpg",
      "/images/headphones-2.jpg",
      "/images/headphones-3.jpg",
    ],
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 150,
    oldPrice: 180,
    rating: 4.5,
    reviews: 90,
    description:
      "Track your fitness, monitor your activity, and stay connected with this modern smart watch.",
    image: "/images/watch.jpg",
    images: [
      "/images/watch.jpg",
      "/images/watch-2.jpg",
    ],
  },
  {
    id: 3,
    name: "Classic T-Shirt",
    category: "Fashion",
    price: 25,
    oldPrice: 35,
    rating: 4.2,
    reviews: 65,
    description:
      "A comfortable classic T-shirt made for everyday use.",
    image: "/images/tshirt.jpg",
    images: [
      "/images/tshirt.jpg",
    ],
  },
  {
    id: 4,
    name: "Leather Backpack",
    category: "Accessories",
    price: 75,
    oldPrice: 95,
    rating: 4.7,
    reviews: 80,
    description:
      "A stylish and practical backpack with enough space for your daily essentials.",
    image: "/images/backpack.jpg",
    images: [
      "/images/backpack.jpg",
    ],
  },
  {
    id: 5,
    name: "Desk Lamp",
    category: "Home & Living",
    price: 45,
    oldPrice: 60,
    rating: 3.9,
    reviews: 40,
    description:
      "A modern desk lamp that provides comfortable lighting for your workspace.",
    image: "/images/lamp.jpg",
    images: [
      "/images/lamp.jpg",
    ],
  },
];

const ProductDetailsPage = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  // Find Current Product
  const product = products.find(
    (item) => item.id === Number(id)
  );

  // Product Not Found
  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Product Not Found
        </h1>

        <Link
          to="/products"
          className="text-blue-600 hover:underline"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  // Related Products
  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  // Add to Cart
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <main className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <span>/</span>

          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>

          <span>/</span>

          <span className="text-gray-900">
            {product.name}
          </span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

          <ProductGallery
            images={product.images}
            productName={product.name}
          />

          <div className="flex flex-col gap-6">
            <ProductInfo
              product={product}
              onAddToCart={handleAddToCart}
            />

            <QuantitySelector
              quantity={quantity}
              setQuantity={setQuantity}
              max={99}
            />
          </div>

        </div>

        {/* Related Products */}
        <RelatedProducts
          products={relatedProducts}
          currentProductId={product.id}
        />

      </div>
    </main>
  );
};

export default ProductDetailsPage;
