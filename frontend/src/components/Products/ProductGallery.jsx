
import { useEffect, useState } from "react";

const ProductGallery = ({ images = [], productName }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Reset selected image when product images change
  useEffect(() => {
    setSelectedImage(0);
  }, [images]);

  if (!images.length) {
    return (
      <div className="flex h-96 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
        No images available
      </div>
    );
  }

  return (
    <div className="w-full">

      {/* Main Image */}
      <div className="overflow-hidden rounded-xl bg-gray-100">
        <img
          src={images[selectedImage]}
          alt={productName}
          className="h-[450px] w-full object-contain"
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-3 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setSelectedImage(index)}
            aria-label={`View image ${index + 1}`}
            aria-pressed={selectedImage === index}
            className={`h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${
              selectedImage === index
                ? "border-blue-600"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <img
              src={image}
              alt={`${productName} view ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

    </div>
  );
};

export default ProductGallery;
