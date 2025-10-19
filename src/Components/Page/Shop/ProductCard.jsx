
import React, { useContext } from "react";
import { getImgUrl } from "../../../utils/getImgUrl";
import Rating from "../../Rating";
import { FiPlus } from "react-icons/fi";
import { CartContext } from "../../../context/CartContext";








const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="">
      <div className="bg-[#FAFAFA]">
      <img src={getImgUrl(product.imageUrl)} alt={product.name} />
    </div>
    <div className="p-6 bg-white dark:bg-black shadow-sm">
      <h4 className="text-base mb-1">{product.category}</h4>
      <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
      <Rating rating={product.rating}/>
      <div className="mt-5 flex items-center justify-between">
        <p className="text-secondary dark:text-white font-bold text-lg"><sup>$</sup><span>{product.price}</span></p>
      <button className="bg-secondary hover:bg-black/56 text-white p-2 rounded-full"
       onClick={() => addToCart(product)}
      >
        <FiPlus />
      </button>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;

