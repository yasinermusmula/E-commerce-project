import React from "react";
import cartData from "../components/DummyCardData";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addShoppingCart,
  totalCartData,
} from "../store/actions/shoppingCartAction";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  let firstFive = product.description.split(" ").slice(0, 5).join(" ");

  const handleAddCart = () => {
    dispatch(addShoppingCart(product));
    dispatch(totalCartData());
  };

  const stars = Math.round(product.rating);

  return (
    <div className="w-full flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:scale-105 transition duration-300">
      <Link
        to={`/productDetail/${product.category_id}/${product.id}/${product.name}`}
        className="block w-full bg-gray-50"
      >
        <img
          src={product.images[0].url}
          alt={product.name}
          className="w-full h-auto max-h-44 object-contain cursor-pointer"
        />
      </Link>
      <div className="p-3 flex flex-col flex-1">
        <h5 className="text-[13px] font-semibold tracking-tight text-[#252B42] truncate">
          {product.name}
        </h5>
        <p className="text-[11px] text-[#9E9E9E] mt-0.5 truncate leading-snug">
          {firstFive}...
        </p>
        <div className="flex items-center mt-1.5 gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              className={`text-xs ${s <= stars ? "text-yellow-400" : "text-gray-200"}`}
            >
              ★
            </span>
          ))}
          <span className="text-[10px] text-[#9E9E9E] ml-1">{product.rating}</span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-[#BDBDBD] line-through">
              ${product.price}
            </span>
            <span className="text-[13px] font-bold text-[#23856D]">
              ${product.price}
            </span>
          </div>
          <button
            onClick={handleAddCart}
            className="bg-[#23A6F0] hover:bg-blue-500 text-white text-[10px] font-medium tracking-wide px-2 py-1 rounded-md transition whitespace-nowrap shrink-0"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
