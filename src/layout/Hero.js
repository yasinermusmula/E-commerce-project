import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Hero() {
  return (
    <div className="bg-[#FFFFFF] p-4 container flex items-center justify-evenly md:flex-col md:flex-wrap">
      <h3 className="text-[#252B42] text-2xl font-montserrat font-bold ">
        BrandName
      </h3>

      <div className="flex md:flex-col md:items-center">
        <div className="flex md:flex-col">
          <Link
            to="/"
            href=""
            className="text-[#737373] font-montserrat font-bold px-4 hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            to="/shoping"
            href=""
            className="text-[#737373] font-montserrat font-bold px-4 hover:text-gray-300"
          >
            Shop
            <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
          </Link>
          <Link
            to="/about"
            href=""
            className="text-[#737373] font-montserrat font-bold px-4 hover:text-gray-300"
          >
            About
          </Link>
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
  );
}
