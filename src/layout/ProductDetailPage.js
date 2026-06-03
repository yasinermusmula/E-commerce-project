import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faHeart,
  faCartShopping,
  faMinus,
  faPlus,
  faTruck,
  faRotateLeft,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import Hero from "./Hero";
import Footer from "../components/Footer";
import { addShoppingCart } from "../store/actions/shoppingCartAction";

const COLOR_OPTIONS = [
  { label: "Navy", hex: "#23A6F0" },
  { label: "Green", hex: "#2DC071" },
  { label: "Orange", hex: "#E77C40" },
  { label: "Dark", hex: "#252B42" },
];

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

function StarRating({ rating = 4 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) =>
        star <= Math.floor(rating) ? (
          <FontAwesomeIcon
            key={star}
            icon={faStar}
            className="text-amber-400 text-sm"
          />
        ) : star - 0.5 <= rating ? (
          <FontAwesomeIcon
            key={star}
            icon={faStarHalfAlt}
            className="text-amber-400 text-sm"
          />
        ) : (
          <FontAwesomeIcon
            key={star}
            icon={faStarEmpty}
            className="text-amber-400 text-sm"
          />
        ),
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  const productDetail = useSelector((store) => store.product.productList);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = productDetail.find((p) => String(p.id) === String(productId));

  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [wishlisted, setWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Hero />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-400 text-lg">Product not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const images = product.images || [];
  const rating = product.rating ?? 4;
  const reviewCount = product.sell_count ?? 24;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addShoppingCart(product));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ── Navbar ── */}
      <Hero />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#FAFAFA] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm font-montserrat">
          <Link
            to="/"
            className="text-[#252B42] font-bold hover:text-[#23A6F0] transition"
          >
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <Link
            to="/shoping"
            className="text-[#737373] hover:text-[#23A6F0] transition"
          >
            Shop
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-[#23A6F0]">{product.name}</span>
        </div>
      </div>

      {/* ── Main Product Section ── */}
      <main className="max-w-6xl mx-auto px-6 py-12 w-full flex-1">
        <div className="flex flex-row flex-wrap gap-16 items-start justify-center">
          {/* Left – Single Image */}
          <div
            className="relative rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0"
            style={{ width: "350px", height: "450px", maxWidth: "100%" }}
          >
            <button
              onClick={() => window.history.back()}
              className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-white bg-opacity-80 hover:bg-opacity-100 text-[#252B42] text-xs font-montserrat font-bold px-3 py-1.5 rounded-full shadow transition"
            >
              ‹ Go Back
            </button>
            {images[0] ? (
              <img
                src={images[0].url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-300 text-6xl">
                🖼
              </div>
            )}
          </div>

          {/* Right – Product Info */}
          <div className="flex-1 min-w-0 flex flex-col gap-5">
            {/* Name + Rating */}
            <div>
              <p className="text-sm text-[#23A6F0] font-montserrat font-semibold uppercase tracking-widest mb-1">
                {product.category_id
                  ? `Category #${product.category_id}`
                  : "New Arrival"}
              </p>
              <h1 className="text-3xl font-bold text-[#252B42] font-montserrat leading-snug">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <StarRating rating={rating} />
                <span className="text-[#737373] text-sm font-montserrat">
                  {rating.toFixed(1)} ({reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-[#252B42] font-montserrat">
                ${product.price?.toFixed(2)}
              </span>
              {product.original_price && (
                <span className="text-lg text-gray-400 line-through font-montserrat">
                  ${product.original_price.toFixed(2)}
                </span>
              )}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2">
              <span className="text-[#737373] font-montserrat font-semibold text-sm">
                Availability:
              </span>
              <span className="text-[#23A6F0] font-montserrat font-bold text-sm">
                ✓ In Stock
              </span>
            </div>

            {/* Description snippet */}
            <p className="text-[#737373] font-montserrat text-sm leading-relaxed border-b border-gray-200 pb-5">
              {product.description ||
                "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."}
            </p>

            {/* Color Options */}
            <div>
              <p className="text-[#252B42] font-montserrat font-semibold text-sm mb-3">
                Color:{" "}
                <span className="text-[#737373] font-normal">
                  {COLOR_OPTIONS[selectedColor].label}
                </span>
              </p>
              <div className="flex gap-3">
                {COLOR_OPTIONS.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(idx)}
                    title={color.label}
                    className={`w-8 h-8 rounded-full border-4 transition ${
                      selectedColor === idx
                        ? "border-gray-400 scale-110"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Size Options */}
            <div>
              <p className="text-[#252B42] font-montserrat font-semibold text-sm mb-3">
                Size:{" "}
                {selectedSize && (
                  <span className="text-[#737373] font-normal">
                    {selectedSize}
                  </span>
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-1.5 rounded border font-montserrat font-semibold text-sm transition ${
                      selectedSize === size
                        ? "bg-[#252B42] text-white border-[#252B42]"
                        : "bg-white text-[#737373] border-gray-300 hover:border-[#252B42] hover:text-[#252B42]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart + Wishlist */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-[#737373] hover:bg-gray-100 transition"
                >
                  <FontAwesomeIcon icon={faMinus} className="text-xs" />
                </button>
                <span className="px-5 py-2 font-montserrat font-bold text-[#252B42] min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 text-[#737373] hover:bg-gray-100 transition"
                >
                  <FontAwesomeIcon icon={faPlus} className="text-xs" />
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-2 px-8 py-3 bg-[#23A6F0] text-white font-montserrat font-bold rounded-lg hover:bg-blue-500 transition shadow-md"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                Add to Cart
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setWishlisted((w) => !w)}
                className={`p-3 rounded-lg border transition ${
                  wishlisted
                    ? "bg-red-50 border-red-300 text-red-500"
                    : "border-gray-300 text-gray-400 hover:border-red-300 hover:text-red-400"
                }`}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>

            {/* Perks */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                {
                  icon: faTruck,
                  label: "Free Shipping",
                  sub: "Orders over $50",
                },
                {
                  icon: faRotateLeft,
                  label: "Easy Returns",
                  sub: "30-day policy",
                },
                {
                  icon: faShield,
                  label: "Secure Payment",
                  sub: "SSL encrypted",
                },
              ].map((perk) => (
                <div
                  key={perk.label}
                  key={perk.label}
                  className="flex flex-col items-center text-center gap-1 p-3 rounded-xl border border-gray-100 bg-[#FAFAFA]"
                >
                  <FontAwesomeIcon
                    icon={perk.icon}
                    className="text-[#23A6F0] text-lg"
                  />
                  <span className="text-[#252B42] font-montserrat font-bold text-xs">
                    {perk.label}
                  </span>
                  <span className="text-[#737373] font-montserrat text-xs">
                    {perk.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tabs: Description / Reviews ── */}
        <div className="mt-20 border-t border-gray-200">
          <div className="flex gap-8 pt-6">
            {["description", "reviews", "details"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 font-montserrat font-bold text-sm capitalize border-b-2 transition ${
                  activeTab === tab
                    ? "border-[#252B42] text-[#252B42]"
                    : "border-transparent text-[#737373] hover:text-[#252B42]"
                }`}
              >
                {tab === "reviews"
                  ? `Reviews (${reviewCount})`
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="py-8 text-[#737373] font-montserrat text-sm leading-relaxed max-w-3xl">
            {activeTab === "description" && (
              <p>
                {product.description ||
                  "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."}
              </p>
            )}
            {activeTab === "reviews" && (
              <div className="flex flex-col gap-6">
                {[
                  {
                    name: "Jane D.",
                    comment: "Great quality! Exactly as described.",
                    stars: 5,
                  },
                  {
                    name: "Mark L.",
                    comment: "Fast delivery and well packaged.",
                    stars: 4,
                  },
                ].map((r, i) => (
                  <div
                    key={i}
                    className="border border-gray-100 rounded-xl p-5 bg-[#FAFAFA]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-[#252B42]">{r.name}</span>
                      <StarRating rating={r.stars} />
                    </div>
                    <p>{r.comment}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "details" && (
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="font-bold text-[#252B42]">SKU:</span> #
                  {product.id}
                </li>
                <li>
                  <span className="font-bold text-[#252B42]">Category:</span> #
                  {product.category_id}
                </li>
                <li>
                  <span className="font-bold text-[#252B42]">Stock:</span>{" "}
                  {product.stock ?? "In Stock"}
                </li>
                <li>
                  <span className="font-bold text-[#252B42]">Rating:</span>{" "}
                  {rating}/5
                </li>
              </ul>
            )}
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
