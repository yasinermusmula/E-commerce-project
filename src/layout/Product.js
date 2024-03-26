import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Product() {
  const productData = useSelector((store) => store.product);

  return (
    <>
      <div className="flex justify-center mt-12">
        <header className="flex text-center">
          <div className="justify-center items-center mt-16 mb-12">
            <h2 className="text-[#737373] font-normal text-xl font-montserrat">
              Featured Products
            </h2>
            <h3 className="text-[#252B42] font-bold text-2xl font-montserrat mt-3">
              BESTSELLER PRODUCTS
            </h3>
            <p className="text-[##737373] font-normal text-sm font-montserrat mt-3">
              Problems trying to resolve the conflict between{" "}
            </p>
          </div>
        </header>
      </div>
      <div className="container h-full">
        <div className="flex flex-wrap gap-10 ml-32 px-16">
          {productData.productList.map((product) => (
            <Link
              to={`/productDetail/${product.category_id}/${product.id}/${product.name}`}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="text-[#23A6F0] border border-[#23A6F0] px-7 py-3 rounded font-bold text-base font-montserrat ml-8">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    </>
  );
}
