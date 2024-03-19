import React from "react";
import cartData from "../components/DummyCardData";
import { useSelector } from "react-redux";

export default function ProductCard({ product }) {
  return (
    <div
      key={product.id}
      className="px-2 gap-2 hover:shadow-lg hover:transform hover:scale-105 transition duration-300 cursor-pointer"
    >
      <div className="text-center mb-2">
        <img
          src={product.images[0].url}
          alt={product.description}
          className="w-[11rem] h-64 object-cover mb-2"
        />
        <h5 className="text-lg font-bold mb-2 text-[#252B42] font-montserrat">
          {product.name}
        </h5>
        <p className="text-sm font-bold text-[#737373] mb-2 font-montserrat">
          {product.description}
        </p>
        <div className="flex justify-center">
          <p className="text-base font-bold text-[#BDBDBD]">{product.price}</p>
          <p className="text-base font-bold ml-2 text-[#23856D]">
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
