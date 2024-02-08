import cartData from "../components/DummyCardData";
import ProductCard from "./ProductCard";

import Clients from "./Clients";
import Footer from "../components/Footer";
import Header from "../components/Header";
import bgImg from "../assets/ShopCardImg/media_bg-cover.png";
import viewsSvg from "../assets/ShopCardImg/Vector.svg";
import viewsSvg2 from "../assets/ShopCardImg/Vector (11).png";

import Hero from "./Hero";

export default function ShopCard() {
  return (
    <div>
      <Hero />
      <div>
        <div className="flex justify-around">
          <div>
            <h2>Shop</h2>
          </div>
          <div>
            <div className="flex">
              <a href="">Home</a>
              <div>=</div>
              <h6>Shop</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-10 gap-x-5 xl:pb-20 bg-neutral-50 text-center">
        <a
          className="w-52 h-56 relative"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <p className="absolute text-center top-20 left-0 right-0">
            Clothes <br /> 5 items
          </p>
        </a>
        <a className="w-52 h-56" style={{ backgroundImage: `url(${bgImg})` }}>
          <p className="">
            Clothes <br /> 5 items
          </p>
        </a>
        <a className="w-52 h-56" style={{ backgroundImage: `url(${bgImg})` }}>
          <p className="">
            Clothes <br /> 5 items
          </p>
        </a>
        <a className="w-52 h-56" style={{ backgroundImage: `url(${bgImg})` }}>
          <p className="">
            Clothes <br /> 5 items
          </p>
        </a>
        <a className="w-52 h-56" style={{ backgroundImage: `url(${bgImg})` }}>
          <p className="">
            Clothes <br /> 5 items
          </p>
        </a>
        <a className="w-52 h-56" style={{ backgroundImage: `url(${bgImg})` }}>
          <p className="">
            Clothes <br /> 5 items
          </p>
        </a>
      </div>

      <div className="flex justify-around">
        <div>
          <p>Showing all 12 results</p>
        </div>
        <div className="flex">
          <p>Views:</p>
          <button>
            <img src={viewsSvg} alt="" />
          </button>
          <button>
            <img src={viewsSvg2} alt="" />
          </button>
        </div>
        <div>
          <button className="border rounded w-24">Popularity</button>
          <button className="border rounded w-12">Filter</button>
        </div>
      </div>

      <div className="container h-full">
        <div className="flex flex-wrap gap-12 ml-[8rem] px-16">
          {cartData.products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="text-[#23A6F0] border border-[#23A6F0] px-7 py-3 rounded font-bold text-base font-montserrat ml-8">
            First
          </button>
          <button className="text-[#23A6F0] border border-[#23A6F0] px-7 py-3 rounded font-bold text-base font-montserrat">
            1
          </button>
          <button className="text-[#23A6F0] border border-[#23A6F0] px-7 py-3 rounded font-bold text-base font-montserrat">
            2
          </button>
          <button className="text-[#23A6F0] border border-[#23A6F0] px-7 py-3 rounded font-bold text-base font-montserrat">
            3
          </button>
          <button className="text-[#23A6F0] border border-[#23A6F0] px-7 py-3 rounded font-bold text-base font-montserrat">
            Next
          </button>
        </div>
      </div>
      <Clients />
      <Footer />
    </div>
  );
}
