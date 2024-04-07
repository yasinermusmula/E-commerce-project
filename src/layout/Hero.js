import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_STATE } from "../store/reducers/productReducer";
import { userLogOutAction } from "../store/actions/userAction";
import { useRef, useState } from "react";
import { store } from "../store/store";
import { deleteShoppingCard } from "../store/actions/shoppingCartAction";
import LittleShoppingCart from "../components/LittleShoppingCart";

export default function Hero() {
  const loginData = useSelector((store) => store.user.user);
  const fetchData = useSelector((store) => store.user.fetchState);
  const dispatch = useDispatch();
  const [firstDropDown, setFirstDropDown] = useState(false);
  const [secondDropDown, setSecondDropDown] = useState(false);
  const [shoppingCart, SetShoppingCart] = useState(false);
  const womanDropdownRef = useRef(null);
  const manDropDownRef = useRef(null);
  const categories = useSelector((store) => store.global.categories);
  const shoppingCartSection = useSelector((store) => store.shoppingCart.cart);
  console.log(shoppingCartSection);

  const manCat = categories.filter((man) => man.gender === "e");
  const womanCat = categories.filter((women) => women.gender === "k");
  console.log("header manCat", manCat);
  console.log("header womenCat", womanCat);
  const firstToggleDropdown = () => {
    setFirstDropDown(!firstDropDown);
    setSecondDropDown(false); // İlk dropdown açıldığında ikinci dropdownu kapat
  };

  const secondToggleDropdown = () => {
    setSecondDropDown(!secondDropDown);
  };

  const handleMouseEnter = () => {
    if (!secondDropDown) {
      setSecondDropDown(true);
    }
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (
        secondDropDown &&
        womanDropdownRef.current &&
        !womanDropdownRef.current.contains(document.activeElement)
      ) {
        setSecondDropDown(false);
      }
    }, 200); // İkinci dropdown'un kapanması için biraz gecikme ekledik
  };

  const logOut = () => {
    dispatch(userLogOutAction());
  };

  const shoppingCartToogle = () => {
    SetShoppingCart(!shoppingCart);
  };

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
          <div className="flex">
            <Link
              to="/shoping"
              className="text-[#737373] font-montserrat font-bold px-4 text-center hover:text-gray-300 pr-0"
              type="button"
            >
              Shop
            </Link>
            <button
              onClick={firstToggleDropdown}
              className={`hover:text-amber-600 ${firstDropDown ? "rotate-90" : "rtl:rotate-180"}`}
            >
              {" "}
              >{" "}
            </button>
            <div
              className={`absolute ${firstDropDown ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-8 h-20`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="multiLevelDropdownButton"
              >
                <li className=" hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <button
                    href="#"
                    className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Man
                    <svg
                      className={`w-2.5 h-2.5 ms-3 ${secondDropDown ? "rotate-90" : "rtl:rotate-180"}`}
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onMouseEnter={handleMouseEnter} // İkinci dropdowna mouse ile gelindiğinde açılmasını sağlar
                  >
                    Women
                    <svg
                      className={`w-2.5 h-2.5 ms-3 ${secondDropDown ? "rotate-90" : "rtl:rotate-180"}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </button>
                  <div
                    ref={womanDropdownRef}
                    className={`ml-40  ${secondDropDown ? "block right-0" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      {womanCat.map((women) => (
                        <li>
                          <Link
                            to={`/shoping/${women.gender}/${women.title}/${women.id}`}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {women.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
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
          <Link
            to="/contact"
            href="#"
            className="text-[#737373] font-montserrat font-bold px-4 hover:text-gray-300"
          >
            Contact
          </Link>
          <a
            href="#"
            className="text-[#737373] font-montserrat font-bold px-4 hover:text-gray-300"
          >
            Pages
          </a>
        </div>
        <div className="flex ml-24">
          {fetchData === FETCH_STATE.FETCHED ? (
            <>
              <p>{loginData.name}</p>
              <Link onClick={logOut}>Log Out</Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                href="#"
                className="text-[#23A6F0] hover:text-blue-300"
              >
                <FontAwesomeIcon icon={faUser} className="px-2" />
                Login
                <span className="text-[#23A6F0] px-1">/</span>
              </Link>
              <Link
                to="/signup"
                href="#"
                className="text-[#23A6F0] hover:text-blue-300"
              >
                Register
              </Link>
            </>
          )}
          <a href="#" className="text-[#23A6F0] px-4 hover:text-blue-300">
            <FontAwesomeIcon icon={faSearch} />
          </a>

          <button
            onClick={shoppingCartToogle}
            href="#"
            className="text-[#23A6F0] hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            {shoppingCartSection.length > 0 ? (
              <span className="text-[#23A6F0] pl-1 ">
                {shoppingCartSection.reduce((count, item) => {
                  return count + item.count;
                }, 0)}
              </span>
            ) : (
              <span className="text-[#23A6F0] pl-1 ">0</span>
            )}
            {/*<span className="text-[#23A6F0] pl-1 ">0</span>*/}
          </button>
          {shoppingCart && shoppingCartSection.length > 0 && (
            <div className="absolute bg-white mt-7">
              {shoppingCartSection.map((product) => (
                <div className="">
                  <LittleShoppingCart product={product} />
                </div>
              ))}
              <div className="items-center text-center p-4">
                <Link
                  to="/ordersummary"
                  className="p-4 text-center w-20 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-700"
                >
                  Checkout
                </Link>
              </div>
            </div>
          )}
          <a href="#" className="text-[#23A6F0] px-3 hover:text-blue-300">
            <FontAwesomeIcon icon={faHeart} />
            <span className="text-[#23A6F0] px-1">1</span>
          </a>
        </div>
      </div>
    </div>
  );
}
