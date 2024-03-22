import cartData from "../components/DummyCardData";
import ProductCard from "./ProductCard";

import Clients from "./Clients";
import Footer from "../components/Footer";
import Header from "../components/Header";
import bgImg from "../assets/ShopCardImg/media_bg-cover.png";
import viewsSvg from "../assets/ShopCardImg/Vector.svg";
import viewsSvg2 from "../assets/ShopCardImg/Vector (11).png";
import newDummyDataTry from "../components/newDummyDataTry";
import { Audio } from "react-loader-spinner";
import spinnerImg from "../assets/ShopCardImg/Spinner-1s-200px.png";

import Hero from "./Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/globalActions";
import { Link } from "react-router-dom";
import {
  fetchPorductWithParams,
  fetchProducts,
} from "../store/actions/productAction";
import { FETCH_STATE } from "../store/reducers/productReducer";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ReactPaginate from "react-paginate";

export default function ShopCard() {
  const dispatch = useDispatch();
  const categorisData = useSelector((store) => store.global.categories);
  const productData = useSelector((store) => store.product);
  // const productFetchData = useSelector((store) => store.product.fetchState);
  // console.log("Categori çekildi", categorisData);
  console.log("Product cekildi", productData);
  const sortedCatagories = categorisData.sort((a, b) => b.rating - a.rating);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(25);
  console.log("product object", productData);
  // console.log("Price sort", priceSortingProducts);

  console.log("sorted category", sortedCatagories);
  const firstFiveCat = sortedCatagories.slice(0, 5);
  console.log("first five", firstFiveCat);
  const [sortVal, setSortVal] = useState("");
  const [paramObj, setParamObj] = useState({
    category: "",
    sort: "",
    ofset: 0,
  });

  const params = useParams();
  console.log(params);

  // console.log(cat);

  useEffect(() => {
    setParamObj({
      ...paramObj,
      category: params.catId,
      sort: sortVal ? sortVal : "",
      ofset: offset,
    });
    console.log("id", params.catId);
  }, [params, sortVal, offset]);
  //

  useEffect(() => {
    dispatch(fetchPorductWithParams(paramObj));
  }, [paramObj.category]);

  // useEffect(() => {
  //   dispatch(fetchPorductWithParams);
  // });

  const filterHandle = () => {
    dispatch(fetchPorductWithParams(paramObj));
  };

  const handleOnChange = (e) => {
    setParamObj({ ...paramObj, filter: e.target.value });
  };

  const totalPages = Math.ceil(productData.totalProductCount / 25);
  console.log("total", productData.totalProductCount);
  console.log(totalPages);

  const handlePageChange = (newOffset) => {
    setCurrentPage(Math.ceil(newOffset / 25) + 1);
    setOffset(newOffset);
    dispatch(fetchPorductWithParams({ ...paramObj, offset: newOffset }));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(offset - 25);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(offset + 25);
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
                to={`/shoping/${cat.gender}/${cat.title}/${cat.id}`}
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
              <input onChange={handleOnChange} />
              <button
                onClick={filterHandle}
                className="border border-black rounded w-20 h-8 ml-2 bg-[#23A6F0] text-[#FFFFFF]"
              >
                Filter
              </button>
            </div>
            <div>
              <select
                value={sortVal}
                onChange={(e) => setSortVal(e.target.value)}
                className="border rounded w-32 h-8 border-[#DDDDDD] bg-[#F9F9F9] text-[#737373]"
              >
                <option value="rating:asc">Rating: Low To High</option>
                <option value="rating:desc">Rating: High To Low</option>
                <option value="price:asc">Price: Low To High</option>
                <option value="price:desc">Price: High To Low</option>
                Popularity
                <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </select>
              <button
                onClick={filterHandle}
                className="border rounded w-20 h-8 ml-2 bg-[#23A6F0] text-[#FFFFFF]"
              >
                Sort
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
                <div className="m-auto">
                  <img src={spinnerImg} className="bg-white" />
                </div>
              )}
            </div>
            <div className="flex justify-center mt-8">
              <button
                onClick={handlePrevPage}
                className="text-[#BDBDBD] bg-[#F3F3F3] border border-[#BDBDBD] px-4 py-5 rounded font-bold text-base font-montserrat ml-8"
              >
                Previous
              </button>
              {[...Array(totalPages).keys()].map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum * 25)}
                  className={`border ${pageNum * 25 === offset ? "bg-[#23A6F0] text-white" : "text-[#23A6F0] border-[#BDBDBD]"} px-5 py-3 rounded font-bold text-base font-montserrat`}
                >
                  {pageNum + 1}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                className="text-[#23A6F0] border border-[#BDBDBD] px-5 py-3 rounded font-bold text-base font-montserrat"
              >
                Next
              </button>
            </div>
            {/*<ReactPaginate*/}
            {/*  breakLabel="..."*/}
            {/*  nextLabel="next >"*/}
            {/*  onPageChange={handlePageChange}*/}
            {/*  // className="text-[#23A6F0] border border-[#BDBDBD] px-5 py-3 rounded font-bold text-base font-montserrat"*/}
            {/*/>*/}
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
