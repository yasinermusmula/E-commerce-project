import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_STATE } from "../store/reducers/productReducer";
import { userLogOutAction } from "../store/actions/userAction";
import { useRef, useState, useEffect } from "react";
import LittleShoppingCart from "../components/LittleShoppingCart";

export default function Hero() {
  const loginData = useSelector((store) => store.user.user);
  const fetchData = useSelector((store) => store.user.fetchState);
  const dispatch = useDispatch();
  const [firstDropDown, setFirstDropDown] = useState(false);
  const [secondDropDown, setSecondDropDown] = useState(false);
  const [shoppingCart, SetShoppingCart] = useState(false);
  const womanDropdownRef = useRef(null);
  const shopRef = useRef(null);
  const categories = useSelector((store) => store.global.categories);
  const shoppingCartSection = useSelector((store) => store.shoppingCart.cart);

  const womanCat = categories.filter((c) => c.gender === "k");

  const firstToggleDropdown = () => {
    setFirstDropDown(!firstDropDown);
    setSecondDropDown(false);
  };

  const handleMouseEnter = () => {
    if (!secondDropDown) setSecondDropDown(true);
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
    }, 200);
  };

  const logOut = () => dispatch(userLogOutAction());
  const shoppingCartToogle = () => SetShoppingCart(!shoppingCart);

  useEffect(() => {
    const handler = (e) => {
      if (shopRef.current && !shopRef.current.contains(e.target)) {
        setFirstDropDown(false);
        setSecondDropDown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" ref={shopRef}>

        {/* Sol: Brand + Nav Links */}
        <div className="flex items-center gap-1">
          <h3 className="text-[#252B42] text-2xl font-montserrat font-bold tracking-wide mr-4">
            BrandName
          </h3>
          <Link to="/" className="text-[#737373] font-montserrat font-bold px-3 py-1 hover:text-[#23A6F0] transition">Home</Link>

          <div className="relative">
            <div className="flex items-center">
              <Link to="/shoping" className="text-[#737373] font-montserrat font-bold px-3 py-1 hover:text-[#23A6F0] transition">Shop</Link>
              <button
                onClick={firstToggleDropdown}
                className={`text-[#737373] hover:text-[#23A6F0] pr-2 transition-transform duration-200 ${firstDropDown ? "rotate-90" : ""}`}
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
              </button>
            </div>
            {firstDropDown && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg w-40 z-50 border border-gray-100">
                <ul className="py-1 text-sm text-gray-700">
                  <li>
                    <button className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-50 hover:text-[#23A6F0] transition">
                      Man
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                      </svg>
                    </button>
                  </li>
                  <li className="relative">
                    <button
                      className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-50 hover:text-[#23A6F0] transition"
                      onMouseEnter={handleMouseEnter}
                    >
                      Women
                      <svg className={`w-2.5 h-2.5 transition-transform ${secondDropDown ? "rotate-90" : ""}`} fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                      </svg>
                    </button>
                    {secondDropDown && (
                      <div
                        ref={womanDropdownRef}
                        className="absolute left-full top-0 bg-white rounded-lg shadow-lg w-40 z-50 border border-gray-100"
                        onMouseLeave={handleMouseLeave}
                      >
                        <ul className="py-1 text-sm text-gray-700">
                          {womanCat.map((women) => (
                            <li key={women.id}>
                              <Link
                                to={`/shoping/${women.gender}/${women.title}/${women.id}`}
                                className="block px-4 py-2 hover:bg-gray-50 hover:text-[#23A6F0] transition"
                              >
                                {women.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link to="/about" className="text-[#737373] font-montserrat font-bold px-3 py-1 hover:text-[#23A6F0] transition">About</Link>
          <a href="#" className="text-[#737373] font-montserrat font-bold px-3 py-1 hover:text-[#23A6F0] transition">Blog</a>
          <Link to="/contact" className="text-[#737373] font-montserrat font-bold px-3 py-1 hover:text-[#23A6F0] transition">Contact</Link>
          <a href="#" className="text-[#737373] font-montserrat font-bold px-3 py-1 hover:text-[#23A6F0] transition">Pages</a>
        </div>

        {/* Sağ: Icons */}
        <div className="flex items-center gap-4">
          {fetchData === FETCH_STATE.FETCHED ? (
            <>
              <span className="text-[#252B42] font-montserrat font-bold text-sm">{loginData.name}</span>
              <button onClick={logOut} className="text-[#23A6F0] font-montserrat font-bold text-sm hover:text-blue-400 transition">
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login" className="flex items-center gap-1 text-[#23A6F0] font-montserrat font-bold text-sm hover:text-blue-400 transition">
              <FontAwesomeIcon icon={faUser} />
              <span>Login / Register</span>
            </Link>
          )}
          <a href="#" className="text-[#23A6F0] hover:text-blue-400 transition">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <div className="relative">
            <button onClick={shoppingCartToogle} className="text-[#23A6F0] hover:text-blue-400 transition flex items-center gap-1">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="text-sm font-bold">
                {shoppingCartSection.reduce((count, item) => count + item.count, 0)}
              </span>
            </button>
            {shoppingCart && shoppingCartSection.length > 0 && (
              <div className="absolute right-0 top-full mt-2 bg-white shadow-xl rounded-lg z-50 w-72 border border-gray-100">
                {shoppingCartSection.map((product) => (
                  <LittleShoppingCart key={product.id} product={product} />
                ))}
                <div className="p-4 text-center border-t">
                  <Link
                    to="/ordersummary"
                    className="inline-block px-6 py-2 bg-[#23A6F0] text-white font-semibold rounded hover:bg-blue-500 transition"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            )}
          </div>
          <a href="#" className="text-[#23A6F0] hover:text-blue-400 transition flex items-center gap-1">
            <FontAwesomeIcon icon={faHeart} />
            <span className="text-sm font-bold">1</span>
          </a>
        </div>

      </div>
    </nav>
  );
}
