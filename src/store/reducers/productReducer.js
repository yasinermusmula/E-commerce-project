export const FETCH_STATE = {
  NOT_FETCHED: "Not Fetched",
  FETCHING: "Fetching",
  FETCHED: "FETCHED",
  FAILED: "FAILED",
};

const initialProductState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  fetchState: FETCH_STATE.NOT_FETCHED,
};

export const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
