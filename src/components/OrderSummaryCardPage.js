import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  addShoppingCart,
  decreaseProduct,
  deleteShoppingCard,
} from "../store/actions/shoppingCartAction";

export default function OrderSummaryCardPage({ product }) {
  const dispatch = useDispatch();
  console.log(product);

  const increaseProduct = () => {
    dispatch(addShoppingCart(product.product));
  };

  const removeProduct = () => {
    dispatch(deleteShoppingCard(product.product.id));
  };

  const decreaseProductAct = () => {
    dispatch(decreaseProduct(product.product.id));
    console.log(product.product.id);
  };

  return (
    <div className="flex items-center justify-between p-4 border border-solid border-semiGrey rounded-xl ">
      <div className="flex items-center space-x-4">
        <img
          src={product.product.images[0].url}
          className="h-14 w-14 rounded-xl object-cover mr-4 object-top"
        />
        <p className="font-semibold w-[300px]">{product.product.name}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={decreaseProductAct}
          className={`${product.count === 1 ? "bg-gray-400" : "bg-blue-500"} text-white text-md rounded-full px-2 py-1`}
          disabled={product.count === 1}
        >
          -
        </button>
        <span className="border border-solid border-semiGrey text-xs px-3 py-[7px] text-darkBg">
          {product.count}
        </span>
        <button
          onClick={increaseProduct}
          className="bg-blue-500 text-white text-md rounded-full px-2 py-1"
        >
          +
        </button>
      </div>
      <span className="font-semibold">
        {(product.product.price * product.count).toFixed(2)}
      </span>
      <FontAwesomeIcon
        icon={faTimes}
        className="flex justify-end items-end hover:cursor-pointer"
        onClick={removeProduct}
      />
    </div>
  );
}
