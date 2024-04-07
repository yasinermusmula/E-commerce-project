import {
  ADD_SHOPPING_CART,
  COUNT_CART_DATA,
  DECREASE_PRODUCT,
  DELETE_SHOPPING_CART,
  SET_ADDRESS,
  SET_PAYMENTS,
} from "../actions/shoppingCartAction";

const initialShoppingCardState = {
  cart: [],
  payment: {},
  adress: {},
};

export const shoppingCartReducer = (
  state = initialShoppingCardState,
  action,
) => {
  switch (action.type) {
    case ADD_SHOPPING_CART:
      const findProduct = state.cart.find(
        (item) => item.product.id === action.payload.id,
      );
      if (findProduct) {
        findProduct.count++;
        return {
          ...state,
          cart: [...state.cart],
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { count: 1, checked: true, product: { ...action.payload } },
          ],
        };
      }
    case DELETE_SHOPPING_CART:
      return {
        ...state,
        cart: state.cart.filter((cart) => action.payload !== cart.product.id),
      };
    case DECREASE_PRODUCT:
      const findProduct2 = state.cart.find(
        (item) => item.product.id === action.payload,
      );
      findProduct2.count--;
      return {
        ...state,
        cart: [...state.cart],
      };
    case SET_PAYMENTS:
      return {
        ...state,
        payment: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};
