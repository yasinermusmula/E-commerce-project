import cartData from "../components/DummyCardData";
import ProductCard from "./ProductCard";

import Clients from "./Clients";
import Footer from "../components/Footer";
import Header from "../components/Header";
import bgImg from "../assets/ShopCardImg/media_bg-cover.png";
import viewsSvg from "../assets/ShopCardImg/Vector.svg";
import viewsSvg2 from "../assets/ShopCardImg/Vector (11).png";
import newDummyDataTry from "../components/newDummyDataTry";

import Hero from "./Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/globalActions";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/actions/productAction";
import { FETCH_STATE } from "../store/reducers/productReducer";

export default function ShopCard() {
  const dispatch = useDispatch();
  const categorisData = useSelector((store) => store.global.categories);
  const productData = useSelector((store) => store.product);
  // const productFetchData = useSelector((store) => store.product.fetchState);
  // console.log("Categori çekildi", categorisData);
  console.log("Product cekildi", productData);
  const sortedCatagories = categorisData.sort((a, b) => b.rating - a.rating);
  console.log("sorted category", sortedCatagories);
  const firstFiveCat = sortedCatagories.slice(0, 5);
  console.log("first five", firstFiveCat);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <Hero />
      <div className="md:flex-col">
        <div className="bg-[#FAFAFA] h-96 md:flex-col">
          <div className="w-full h-20">
            <div className="flex justify-around md:flex-col md:items-center">
              <div>
                <h3 className="text-2xl font-bold font-montserrat mt-5">
                  Shop
                </h3>
              </div>
              <div className="flex-wrap">
                <div className="flex mt-5">
                  <a className="text-base font-bold font-montserrat">Home</a>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-2 h-6 text-[#BDBDBD] ml-2"
                  />
                  <h6 className="text-[#BDBDBD] ml-2">Shop</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-y-10 gap-x-5 text-center mt-8">
            {firstFiveCat.map((cat) => (
              <Link
                to="/"
                className="w-52 h-56 bg-cover hover:shadow-lg hover:transform hover:scale-105"
                style={{ backgroundImage: `url(${cat.img})` }}
              >
                <h5 className="text-center top-20 mt-20 left-0 right-0 font-montserrat font-bold text-base text-[#FFFFFF]">
                  {cat.title}
                  <p className="font-montserrat font-normal text-sm text-[#FFFFFF]">
                    {cat.gender === "k" ? <p>Kadın</p> : <p>Erkek</p>}
                  </p>
                </h5>
              </Link>
            ))}
          </div>

          <div className="flex justify-around m-10">
            <div>
              <h6 className="font-bold font-montserrat text-base text-[#737373] mt-1">
                Showing all 12 results
              </h6>
            </div>
            <div className="flex">
              <h6 className="font-bold font-montserrat text-base text-[#737373] mt-1">
                Views:
              </h6>

              <button className="ml-2 rounded border w-8 h-8">
                <img src={viewsSvg} alt="" className="m-auto" />
              </button>

              <button className="ml-2 rounded border w-8 h-8">
                <img src={viewsSvg2} alt="" className="m-auto" />
              </button>
            </div>
            <div>
              <button className="border rounded w-32 h-8 border-[#DDDDDD] bg-[#F9F9F9] text-[#737373]">
                Popularity
                <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </button>
              <button className="border rounded w-20 h-8 ml-2 bg-[#23A6F0] text-[#FFFFFF]">
                Filter
              </button>
            </div>
          </div>

          <div className="container h-full xl:mt-2">
            <div className="flex flex-wrap gap-12 ml-[8rem] px-16">
              {productData.fetchState === FETCH_STATE.FETCHED ? (
                productData.productList.map((product) => (
                  <ProductCard product={product} />
                ))
              ) : (
                <p>Loading..</p>
              )}
            </div>
            <div className="flex justify-center mt-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="text-[#BDBDBD] bg-[#F3F3F3] border border-[#BDBDBD] px-4 py-5 rounded font-bold text-base font-montserrat ml-8"
              >
                Previous
              </button>
              <button className="text-[#23A6F0] border border-[#BDBDBD] px-5 py-3 rounded font-bold text-base font-montserrat">
                1
              </button>
              <button className="bg-[#23A6F0] text-[#FFFFFF] border border-[#BDBDBD] px-5 py-3 rounded font-bold text-base font-montserrat">
                2
              </button>
              <button className="text-[#23A6F0] border border-[#BDBDBD] px-5 py-3 rounded font-bold text-base font-montserrat">
                3
              </button>
              <button
                onClick={nextPage}
                className="text-[#23A6F0] border border-[#BDBDBD] px-5 py-3 rounded font-bold text-base font-montserrat"
              >
                Next
              </button>
            </div>
            <div className="">
              <div className="">
                <Clients />
              </div>
              <div className=" md:mt-[35em]">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
