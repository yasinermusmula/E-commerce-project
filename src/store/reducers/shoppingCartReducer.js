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
    default:
      return state;
  }
};
