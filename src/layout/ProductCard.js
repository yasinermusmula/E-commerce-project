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

  return (
    <div
      key={product.id}
      className="w-[11rem] m-auto hover:shadow-lg hover:transform hover:scale-105 transition duration-300"
    >
      <div className="text-center mb-2">
        <Link
          to={`/productDetail/${product.category_id}/${product.id}/${product.name}`}
          product={product}
        >
          <img
            src={product.images[0].url}
            alt={product.description}
            className=" mb-2 cursor-pointer"
          />
        </Link>
        <h5 className="text-lg font-bold mb-2 text-[#252B42] font-montserrat">
          {product.name}
        </h5>
        <p className="text-sm text-center items-center font-bold text-[#737373] mb-2 font-montserrat">
          {firstFive}
          <br />
          Rating: {product.rating}
        </p>
        <div className="flex justify-center">
          <p className="text-base font-bold text-[#BDBDBD]">{product.price}$</p>
          <p className="text-base font-bold ml-2 text-[#23856D]">
            {product.price}$
          </p>
        </div>
        <button
          onClick={handleAddCart}
          className="bg-blue-500 p-1 text-white font-montserrat"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
