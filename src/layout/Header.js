import React from "react";
import bgImg from "../assets/shop-hero-3-product-slide-2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {Carousel} from "@metarial-tailwind/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const courselIndicators = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  };

  return (
    <header className="w-full">
      <div className="bg-[#FFFFFF] p-4 container flex items-center justify-evenly">
        <h3 className="text-[#252B42] text-2xl font-montserrat font-bold ">
          BrandName
        </h3>

        <div className="flex">
          <div className="flex">
            <a
              href="#"
              className="text-[#737373] font-montserrat font-bold px-4 hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[#737373] font-montserrat font-bold px-4 hover:text-gray-300"
            >
              Shop
              <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
            </a>
            <a
              href="#"
              className="text-[#737373] font-montserrat font-bold px-4 hover:text-gray-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-[#737373] font-montserrat font-bold px-4 hover:text-gray-300"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-[#737373] font-montserrat font-bold px-4 hover:text-gray-300"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-[#737373] font-montserrat font-bold px-4 hover:text-gray-300"
            >
              Pages
            </a>
          </div>

          <div className="flex ml-24">
            <a href="#" className="text-[#23A6F0] hover:text-blue-300">
              <FontAwesomeIcon icon={faUser} className="px-2" />
              Login
              <span className="text-[#23A6F0] px-1">/</span>
            </a>
            <a href="#" className="text-[#23A6F0] hover:text-blue-300">
              Register
            </a>
            <a href="#" className="text-[#23A6F0] px-4 hover:text-blue-300">
              <FontAwesomeIcon icon={faSearch} />
            </a>
            <a href="#" className="text-[#23A6F0] hover:text-blue-300">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="text-[#23A6F0] pl-1 ">1</span>
            </a>
            <a href="#" className="text-[#23A6F0] px-3 hover:text-blue-300">
              <FontAwesomeIcon icon={faHeart} />
              <span className="text-[#23A6F0] px-1">1</span>
            </a>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center w-full h-[40rem] justify-center"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <h1 className=" text-6xl text-[#FFFFFF] pr-8 font-montserrat font-bold mt-16">
          BLACK FRIDAY
        </h1>
        <h4 className="text-[#FFFFFF] mt-10 font-normal text-xl items-center font-montserrat">
          We know how large objects will act, but things on a
          <p className="text-center">small scale just do not act that way.</p>
        </h4>
        <button className="px-10 py-4 mt-2 bg-[#23A6F0] text-[#FFFFFF] font-bold text-2xl rounded-md">
          Start now
        </button>
      </div>
    </header>
  );
}
