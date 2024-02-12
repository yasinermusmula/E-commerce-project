import cartData from "../components/DummyCardData";
import ProductCard from "./ProductCard";

import Clients from "./Clients";
import Footer from "../components/Footer";
import Header from "../components/Header";
import bgImg from "../assets/ShopCardImg/media_bg-cover.png";
import viewsSvg from "../assets/ShopCardImg/Vector.svg";
import viewsSvg2 from "../assets/ShopCardImg/Vector (11).png";

import Hero from "./Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function ShopCard() {
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

          <div className="flex flex-wrap justify-center gap-y-10 gap-x-5 text-center mt-5">
            <a
              className="w-52 h-56"
              style={{ backgroundImage: `url(${bgImg})` }}
            >
              <h5 className="text-center top-20 mt-20 left-0 right-0 font-montserrat font-bold text-base text-[#FFFFFF]">
                Clothes
                <p className="font-montserrat font-normal text-sm text-[#FFFFFF]">
                  5 items
                </p>
              </h5>
            </a>
            <a
              className="w-52 h-56"
              style={{ backgroundImage: `url(${bgImg})` }}
            >
              <h5 className="text-center top-20 mt-20 left-0 right-0 font-montserrat font-bold text-base text-[#FFFFFF]">
                Clothes
                <p className="font-montserrat font-normal text-sm text-[#FFFFFF]">
                  5 items
                </p>
              </h5>
            </a>
            <a
              className="w-52 h-56"
              style={{ backgroundImage: `url(${bgImg})` }}
            >
              <h5 className="text-center top-20 mt-20 left-0 right-0 font-montserrat font-bold text-base text-[#FFFFFF]">
                Clothes
                <p className="font-montserrat font-normal text-sm text-[#FFFFFF]">
                  5 items
                </p>
              </h5>
            </a>
            <a
              className="w-52 h-56"
              style={{ backgroundImage: `url(${bgImg})` }}
            >
              <h5 className="text-center top-20 mt-20 left-0 right-0 font-montserrat font-bold text-base text-[#FFFFFF]">
                Clothes
                <p className="font-montserrat font-normal text-sm text-[#FFFFFF]">
                  5 items
                </p>
              </h5>
            </a>
            <a
              className="w-52 h-56"
              style={{ backgroundImage: `url(${bgImg})` }}
            >
              <h5 className="text-center top-20 mt-20 left-0 right-0 font-montserrat font-bold text-base text-[#FFFFFF]">
                Clothes
                <p className="font-montserrat font-normal text-sm text-[#FFFFFF]">
                  5 items
                </p>
              </h5>
            </a>
            <a
              className="w-52 h-56"
              style={{ backgroundImage: `url(${bgImg})` }}
            >
              <h5 className="text-center top-20 mt-20 left-0 right-0 font-montserrat font-bold text-base text-[#FFFFFF]">
                Clothes
                <p className="font-montserrat font-normal text-sm text-[#FFFFFF]">
                  5 items
                </p>
              </h5>
            </a>
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
              {cartData.products.map((product) => (
                <ProductCard product={product} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button className="text-[#BDBDBD] bg-[#F3F3F3] border border-[#BDBDBD] px-4 py-5 rounded font-bold text-base font-montserrat ml-8">
                First
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
              <button className="text-[#23A6F0] border border-[#BDBDBD] px-5 py-3 rounded font-bold text-base font-montserrat">
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
