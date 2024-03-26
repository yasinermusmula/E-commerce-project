import {
  ADD_SHOPPING_CART,
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
    default:
      return state;
  }
};
