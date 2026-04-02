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
    <div className="w-full flex flex-col bg-white rounded-lg border border-gray-100 shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300">
      <Link
        to={`/productDetail/${product.category_id}/${product.id}/${product.name}`}
      >
        <img
          src={product.images[0].url}
          alt={product.name}
          className="w-full aspect-square object-contain  cursor-pointer"
        />
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <h5 className="text-sm font-bold text-[#252B42] font-montserrat truncate">
          {product.name}
        </h5>
        <p className="text-xs text-[#737373] font-montserrat mt-1 truncate">
          {firstFive}...
        </p>
        <div className="flex items-center mt-2 gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              className={s <= stars ? "text-yellow-400" : "text-gray-300"}
            >
              ★
            </span>
          ))}
          <span className="text-xs text-[#737373] ml-1">{product.rating}</span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#BDBDBD] line-through">
              ${product.price}
            </span>
            <span className="text-sm font-bold text-[#23856D]">
              ${product.price}
            </span>
          </div>
          <button
            onClick={handleAddCart}
            className="bg-[#23A6F0] hover:bg-blue-500 text-white text-[10px] font-montserrat px-2 py-1 rounded transition whitespace-nowrap shrink-0"
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
}
