import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../../../utils/products";
import buttonicon from '../../../assets/buttonicon.png';

const Products = ({ headline }) => {
  const categories = ["Chair", "Sofa", "Beds", "Lamp"];
  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [visibleProducts, setVisibleProducts] = useState(4); // corrected variable name

  const filteredProducts = products.filter(
    (item) => item.category === selectedCategory
  );

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center my-10">{headline}</h2>

      {/* Category buttons */}
      <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-1.5 py-5 mb-16">
        <div className="flex flex-col sm:flex-row md:justify-between justify-center items-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleProducts(4); // reset visible products on category change
              }}
              className={`py-1.5 px-6 rounded-full ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-white text-gray-800"
              } hover:bg-primary hover:text-white transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.slice(0, visibleProducts).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Optional Load More button */}
      {visibleProducts < filteredProducts.length && (
        <div className="text-center mt-10 flex justify-center items-center">
          <button
            onClick={loadMoreProducts}
            className="flex items-center gap-2 text-primary text-base font-semibold hover:underline"
          >
            Load More
            <img src={buttonicon} alt="Button Icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
