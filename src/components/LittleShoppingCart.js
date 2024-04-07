import { useDispatch, useSelector } from "react-redux";
import { deleteShoppingCard } from "../store/actions/shoppingCartAction";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function LittleShoppingCart({ product }) {
  const shoppingCartSection = useSelector((store) => store.shoppingCart.cart);

  const dispatch = useDispatch();
  console.log(shoppingCartSection);

  const shoppingCartRemove = (id) => {
    dispatch(deleteShoppingCard(id));
  };

  return (
    <>
      <div className=" p-4">
        <div key={product.id} className="mb-4 hover:bg-gray-50 ">
          <div>
            <div className="flex">
              <img
                src={product.product.images[0].url}
                className="h-20 object-cover rounded mr-4"
              />
              <div>
                <div>
                  <p className="text-sm font-bold">{product.product.name}</p>
                </div>
                <div className="flex">
                  <p>Price:</p>
                  <p>${(product.product.price * product.count).toFixed(2)}</p>
                </div>
                <div className="flex">
                  <p>Count:</p>
                  <p>{product.count}</p>
                </div>
                <button
                  onClick={() => shoppingCartRemove(product.product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
