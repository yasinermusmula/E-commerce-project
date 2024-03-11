export const ADD_SHOPPING_CART = "ADD_SHOPPING_CART";
export const DELETE_SHOPPING_CART = "DELETE_SHOPPING_CART";

export function addShoppingCart(product) {
  return { type: ADD_SHOPPING_CART, payload: product };
}

export function deleteShoppingCard(id) {
  return { type: DELETE_SHOPPING_CART, payload: id };
}
