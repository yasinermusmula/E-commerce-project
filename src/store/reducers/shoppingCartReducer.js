import {
  ADD_SHOPPING_CART,
  COUNT_CART_DATA,
  DELETE_SHOPPING_CART,
  SET_ADDRESS,
  SET_PAYMENTS,
} from "../actions/shoppingCartAction";

const initialShoppingCardState = {
  cart: [],
  payment: {},
  adress: {},
  countCart: 0,
};

export const shoppingCartReducer = (
  state = initialShoppingCardState,
  action,
) => {
  switch (action.type) {
    case ADD_SHOPPING_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case DELETE_SHOPPING_CART:
      return {
        ...state,
        cart: state.cart.filter((cart) => action.payload !== cart.id),
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
    case COUNT_CART_DATA:
      return {
        ...state,
        countCart: state.countCart + 1,
      };
    default:
      return state;
  }
};
