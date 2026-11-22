
import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");

    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save Wishlist to LocalStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Add Product to Wishlist
  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      const exists = prevItems.some(
        (item) => item.id === product.id
      );

      if (exists) return prevItems;

      return [...prevItems, product];
    });
  };

  // Remove Product from Wishlist
  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  // Toggle Wishlist
  const toggleWishlist = (product) => {
    setWishlistItems((prevItems) => {
      const exists = prevItems.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return prevItems.filter(
          (item) => item.id !== product.id
        );
      }

      return [...prevItems, product];
    });
  };

  // Check Wishlist
  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  // Wishlist Count
  const wishlistCount = wishlistItems.length;

  const value = {
    wishlistItems,
    wishlistCount,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom Hook
export const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used inside WishlistProvider");
  }

  return context;
};
