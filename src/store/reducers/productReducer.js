import {
  CLICK_CURRENT_PAGE,
  SET_FETCH_STATE,
  SET_NEXT_PAGE,
  SET_PAGE_COUNT,
  SET_PER_PAGE,
  SET_PREV_PAGE,
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
  productPerPage: 25,
  pageCount: 0,
  currentPage: 1,
  perPageCount: 25,
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
    case SET_PAGE_COUNT:
      return {
        ...state,
        pageCount: action.payload,
      };
    case SET_NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case SET_PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case SET_PER_PAGE:
      return {
        ...state,
        perPageCount: action.payload,
      };
    case CLICK_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
