import React, { useState, useRef } from "react";
import bgImg from "../assets/shop-hero-3-product-slide-2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ShopCard from "../layout/ShopingCard";
import Hero from "../layout/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer text-white  bg-opacity-50 p-2"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-opacity-50 p-2"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 6000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <header className="w-full">
      <Hero />
      <Slider {...settings}>
        <div>
          <div
            className="flex flex-col items-center bg-cover bg-center w-full h-[40rem] justify-center md:flex-col sm:h-96 lg:h-auto sm:w-full"
            style={{
              backgroundImage: `url(${bgImg})`,
            }}
          >
            <h1 className=" text-6xl text-[#FFFFFF] pr-8 font-montserrat font-bold mt-16 sm:ml-16">
              BLACK FRIDAY
            </h1>
            <h4 className="text-[#FFFFFF] mt-10 font-normal text-xl items-center font-montserrat sm:ml-16">
              We know how large objects will act, but things on a
              <p className="text-center sm:mr-24">
                small scale just do not act that way.
              </p>
            </h4>
            <button className="px-10 py-4 mt-2 bg-[#23A6F0] text-[#FFFFFF] font-bold text-2xl rounded-md sm:mr-8">
              Start now
            </button>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col items-center bg-cover bg-center w-full h-[40rem] justify-center md:flex-col sm:h-96 lg:h-auto sm:w-full"
            style={{
              backgroundImage: `url(${bgImg})`,
            }}
          >
            <h1 className=" text-6xl text-[#FFFFFF] pr-8 font-montserrat font-bold mt-16 sm:ml-16">
              BLACK FRIDAY
            </h1>
            <h4 className="text-[#FFFFFF] mt-10 font-normal text-xl items-center font-montserrat sm:ml-16">
              We know how large objects will act, but things on a
              <p className="text-center sm:mr-24">
                small scale just do not act that way.
              </p>
            </h4>
            <button className="px-10 py-4 mt-2 bg-[#23A6F0] text-[#FFFFFF] font-bold text-2xl rounded-md sm:mr-8">
              Start now
            </button>
          </div>
        </div>
      </Slider>
    </header>
  );
}
