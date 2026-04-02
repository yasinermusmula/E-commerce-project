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
  fetchProductWithParams,
  fetchProducts,
  setNextPage,
  setPrevPage,
} from "../store/actions/productAction";
import { FETCH_STATE } from "../store/reducers/productReducer";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ReactPaginate from "react-paginate";
import { Pagination } from "reactstrap";

export default function ShopCard() {
  const dispatch = useDispatch();
  const categorisData = useSelector((store) => store.global.categories);
  const productData = useSelector((store) => store.product);
  // const productFetchData = useSelector((store) => store.product.fetchState);
  // console.log("Categori çekildi", categorisData);
  console.log("Product cekildi", productData);
  const sortedCatagories = categorisData.sort((a, b) => b.rating - a.rating);
  // const [currentPageFirst, setCurrentPageFist] = useState(1);
  // const [currentPageSecond, setCurrentPageSecond] = useState(2);
  // const [currentPageThird, setCurrentPageThird] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const [currentPageLast, setCurrentPageLast] = useState(productData.pageCount);
  const [offset, setOffset] = useState(25);
  console.log("product object", productData);
  console.log(productData.pageCount);

  console.log("sorted category", sortedCatagories);
  const firstFiveCat = sortedCatagories.slice(0, 5);
  console.log("first five", firstFiveCat);
  const [sortVal, setSortVal] = useState("");
  const [paramObj, setParamObj] = useState({
    category: "",
    sort: "",
    offset: 0,
  });

  const params = useParams();
  console.log(params);

  // console.log(cat);

  useEffect(() => {
    setParamObj({
      ...paramObj,
      category: params.catId,
      sort: sortVal ? sortVal : "",
      offset: offset,
    });
    console.log("id", params);
  }, [params, sortVal, offset]);
  //

  useEffect(() => {
    dispatch(fetchProductWithParams(paramObj));
  }, [paramObj.category]);

  // useEffect(() => {
  //   dispatch(fetchPorductWithParams);
  // });

  const filterHandle = () => {
    dispatch(fetchProductWithParams(paramObj));
  };

  const handleOnChange = (e) => {
    setParamObj({ ...paramObj, filter: e.target.value });
  };

  // useEffect(() => {
  //   const totalPages = Math.ceil(productData.totalProductCount / 25);
  //   setCurrentPageLast(totalPages);
  //   console.log("total", productData.totalProductCount);
  //   console.log(totalPages);
  // }, []);

  const totalPages = Math.ceil(productData.totalProductCount / 25);
  console.log("total", productData.totalProductCount);
  console.log(totalPages);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // setOffset(newOffset);
    // dispatch(fetchProductWithParams({ ...paramObj, offset: newOffset }));
    setParamObj({ ...paramObj, offset: (newPage - 1) * 25 });
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

  // const nextPage = () => {
  //   dispatch(setNextPage());
  //   dispatch(fetchProductWithParams);
  //   console.log(productData.currentPage);
  // };
  //
  // const prevPage = () => {
  //   dispatch(setPrevPage());
  // };

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
                {`Showing all ${productData.totalProductCount} results`}
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

          <div className="max-w-7xl mx-auto px-8 xl:mt-2">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
              {productData.fetchState === FETCH_STATE.FETCHED ? (
                productData.productList.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="m-auto">
                  <img src={spinnerImg} className="bg-gray-600" />
                </div>
              )}
            </div>

            <div className="flex justify-center mt-8">
              <Pagination
                onPageChange={handlePageChange}
                totalCount={productData.totalProductCount}
                currentPage={currentPage}
                pageSize={25}
                siblingCount={1}
                className="pagination"
              />
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
