import { useDispatch, useSelector } from "react-redux";
import { deleteShoppingCard } from "../store/actions/shoppingCartAction";

export default function LittleShoppingCart() {
  const shoppingCartSection = useSelector((store) => store.shoppingCart.cart);
  const dispatch = useDispatch();

  const shoppingCartRemove = (id) => {
    dispatch(deleteShoppingCard(id));
  };

  return (
    <>
      {/*<div className="bg-white divide-y divide-gray-100 rounded-lg shadow w-24 dark:bg-gray-700 mt-8 h-20">*/}
      {/*  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">*/}
      {shoppingCartSection.map((product) => (
        <div className="w-8">
          <p>sa</p>
          <img src={product.images[0].url} />
          <div>sa</div>
          <button onClick={() => shoppingCartRemove(product.id)}>Remove</button>
        </div>
      ))}
      {/*</ul>*/}
      {/*</div>*/}
    </>
  );
}
