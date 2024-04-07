import Hero from "../layout/Hero";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addShoppingCart } from "../store/actions/shoppingCartAction";
import OrderSummaryCardPage from "./OrderSummaryCardPage";

export default function OrderSummaryPage() {
  const shoppingCart = useSelector((store) => store.shoppingCart.cart);

  let totalProductPrice = shoppingCart.reduce((count, item) => {
    return count + item.count * item.product.price;
  }, 0);

  console.log(shoppingCart);
  return (
    <div>
      <Hero />
      <div className="container my-6 p-4 bg-gray-50 rounded-xl flex justify-between gap-10 items-center">
        <div className="flex flex-col w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Test lorem</h2>
          <div className="font-normal mb-2 text-center"> test loremmmm</div>
          <div className="flex flex-col space-y-4  bg-white ">
            {shoppingCart.map((product) => (
              <OrderSummaryCardPage product={product} />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-solid border-semiGrey p-4 w-full lg:w-[400px] h-full justify-between flex flex-col bg-white">
          <h3 className="text-2xl font-bold mb-4 text-center">Order Summary</h3>
          <div className="flex flex-col p-2 justify-center ">
            <div className="mb-4">
              <div className="flex justify-between mb-2 gap-2">
                <span className="font-bold">Total Products:</span>
                <span className="font-normal">
                  {totalProductPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="flex justify-between mb-2 gap-2">
              <span className="font-bold">Shipping Total:</span>
              <span>$30</span>
            </div>
            <button
              className={`${totalProductPrice === 0 ? "bg-gray-600" : "bg-blue-500"} mt-4 w-full text-white font-bold py-2 px-4 rounded-xl  transition duration-300 ease-in-out place-self-end`}
              disabled={totalProductPrice === 0}
            >
              Create Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
