export const ADD_SHOPPING_CART = "ADD_SHOPPING_CART";
export const DELETE_SHOPPING_CART = "DELETE_SHOPPING_CART";
export const SET_PAYMENTS = "SET_PAYMENTS";
export const SET_ADDRESS = "SET_ADDRESS";

export function addShoppingCart(product) {
  return { type: ADD_SHOPPING_CART, payload: product };
}

export function deleteShoppingCard(id) {
  return { type: DELETE_SHOPPING_CART, payload: id };
}

export function setPayments(payments) {
  return { type: SET_PAYMENTS, payload: payments };
}

export function setAddress(address) {
  return { type: SET_ADDRESS, payload: address };
}
