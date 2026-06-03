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
import { fetchProductWithParams } from "../store/actions/productAction";
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
  const [sortVal, setSortVal] = useState("");
  const [filterVal, setFilterVal] = useState("");
  const [paramObj, setParamObj] = useState({
    category: "",
    sort: "",
    filter: "",
    offset: 0,
  });

  const params = useParams();

  const firstFiveCat = sortedCatagories.slice(0, 5);

  // Kategori veya sort değişince page 1'e sıfırla
  useEffect(() => {
    setParamObj((prev) => ({
      ...prev,
      category: params.catId || "",
      offset: 0,
    }));
    setCurrentPage(1);
  }, [params.catId]);

  useEffect(() => {
    setParamObj((prev) => ({
      ...prev,
      sort: sortVal,
      offset: 0,
    }));
    setCurrentPage(1);
  }, [sortVal]);

  // paramObj her değiştiğinde API'yi çağır
  useEffect(() => {
    dispatch(fetchProductWithParams(paramObj));
  }, [paramObj]);

  const totalPages = Math.ceil(productData.totalProductCount / 25);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
    setParamObj((prev) => ({ ...prev, offset: selected * 25 }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filterHandle = () => {
    setParamObj((prev) => ({ ...prev, filter: filterVal, offset: 0 }));
    setCurrentPage(1);
  };

  const handleOnChange = (e) => {
    setFilterVal(e.target.value);
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
              <input value={filterVal} onChange={handleOnChange} />
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
              {productData.fetchState !== FETCH_STATE.NOT_FETCHED ? (
                productData.productList.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="m-auto">
                  <img src={spinnerImg} className="bg-gray-600" />
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-10 mb-4">
                <ReactPaginate
                  pageCount={totalPages}
                  onPageChange={handlePageChange}
                  forcePage={currentPage - 1}
                  previousLabel={"←"}
                  nextLabel={"→"}
                  breakLabel={"..."}
                  containerClassName={"flex items-center gap-1"}
                  pageClassName={""}
                  pageLinkClassName={
                    "w-9 h-9 flex items-center justify-center rounded border border-gray-200 text-sm text-[#737373] hover:bg-[#23A6F0] hover:text-white hover:border-[#23A6F0] transition"
                  }
                  activeLinkClassName={
                    "!bg-[#23A6F0] !text-white !border-[#23A6F0]"
                  }
                  previousLinkClassName={
                    "w-9 h-9 flex items-center justify-center rounded border border-gray-200 text-sm text-[#737373] hover:bg-[#23A6F0] hover:text-white hover:border-[#23A6F0] transition"
                  }
                  nextLinkClassName={
                    "w-9 h-9 flex items-center justify-center rounded border border-gray-200 text-sm text-[#737373] hover:bg-[#23A6F0] hover:text-white hover:border-[#23A6F0] transition"
                  }
                  breakLinkClassName={
                    "w-9 h-9 flex items-center justify-center text-sm text-[#737373]"
                  }
                  disabledLinkClassName={"opacity-40 cursor-not-allowed"}
                />
              </div>
            )}
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
