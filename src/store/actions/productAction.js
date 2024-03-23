import { FETCH_STATE } from "../reducers/productReducer";
import { API } from "../../api/api";
import axios from "axios";

export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_PRODUCT_COUNT = "SET_PRODUCT_COUNT";
export const SET_PAGE_COUNT = "SET_PAGE_COUNT";
export const SET_ACTIVE_COUNT = "SET_ACTIVE_COUNT";

export const SET_FETCH_STATE = "SET_FETCH_STATE";

export function setProductList(productList) {
  return { type: SET_PRODUCT_LIST, payload: productList };
}

export function setProductCount(productCount) {
  return { type: SET_PRODUCT_COUNT, payload: productCount };
}

export function setPageCount(pageCount) {
  return { type: SET_PAGE_COUNT, payload: Number(pageCount) };
}
export function setActiveCount(activeCount) {
  return { type: SET_ACTIVE_COUNT, payload: Number(activeCount) };
}
export function setFetchState(fetchState) {
  return { type: SET_FETCH_STATE, payload: fetchState };
}

export const fetchProducts = () => (dispatch, getState) => {
  dispatch(setFetchState(FETCH_STATE.FETCHING));
  API.get("products")
    .then((res) => {
      dispatch(setProductList(res.data.products));
      dispatch(setProductCount(res.data.total));
      dispatch(setFetchState(FETCH_STATE.FETCHED));
      console.log("Products Fetched", res.data.products);
    })
    .catch((err) => {
      dispatch(setFetchState(FETCH_STATE.FAILED));
      console.log(err.message);
    });
};

export const fetchPorductWithParams = (params) => (dispatch) => {
  dispatch(setFetchState(FETCH_STATE.FETCHING));
  API.get("products", { params }).then((res) => {
    dispatch(setProductList(res.data.products));
    dispatch(setProductCount(res.data.total));
    dispatch(setFetchState(FETCH_STATE.FETCHED));
    console.log("Product with params fetched", res.data.products);
  });
};
