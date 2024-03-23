import {
  SET_FETCH_STATE,
  SET_PRODUCT_COUNT,
  SET_PRODUCT_LIST,
} from "../actions/productAction";

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
    case SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    case SET_PRODUCT_COUNT:
      return {
        ...state,
        totalProductCount: action.payload,
      };
    case SET_FETCH_STATE:
      return {
        ...state,
        fetchState: action.payload,
      };
    default:
      return state;
  }
};
