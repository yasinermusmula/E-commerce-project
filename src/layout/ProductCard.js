import React from "react";
import cartData from "../components/DummyCardData";
import { useSelector } from "react-redux";

export default function ProductCard({ product }) {
  return (
    // <div className="flex flex-col flex-wrap items-center mb-8 shadow-xl gap-2 cursor-pointer">
    //   <div className="w-[95%] h-[95%px] cursor-pointer overflow-hidden">
    //     <a>
    //       <img
    //         src={product.images[0].url}
    //         className="object-cover object-center border-solid"
    //       />
    //     </a>
    //   </div>
    //   <div className="flex gap-2 flex-col items-center mt-3 mb-5 mx-3">
    //     <h3 className="text-lg font-bold mb-2 text-[#252B42] font-montserrat">
    //       {product.name}
    //     </h3>
    //     <p
    //       className="text-center items-center
    //     text-hdGrey text-sm font-semibold leading-normal
    //     tracking-tight px-[5%] md:h-[40px]
    //     hover:text-ellipsis md:truncate-description md:hover:cursor-pointer
    //     overflow-hidden "
    //     >
    //       {product.description}
    //     </p>
    //     <div className="flex justify-evenly w-full text-center">
    //       <span className="text-base font-bold text-[#BDBDBD]">
    //         {product.price}$
    //       </span>
    //       <span className="text-base font-bold text-[#BDBDBD]">
    //         {product.price}$
    //       </span>
    //     </div>
    //   </div>
    // </div>
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
        <p className="text-sm text-center items-center font-bold text-[#737373] mb-2 font-montserrat">
          {/*{product.description}*/}
          <br />
          {product.rating}
        </p>
        <div className="flex justify-center">
          <p className="text-base font-bold text-[#BDBDBD]">{product.price}$</p>
          <p className="text-base font-bold ml-2 text-[#23856D]">
            {product.price}$
          </p>
        </div>
      </div>
    </div>
  );
}
