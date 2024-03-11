import { retry } from "@reduxjs/toolkit/query";

export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_PRODUCT_COUNT = "SET_PRODUCT_COUNT";
export const SET_PAGE_COUNT = "SET_PAGE_COUNT";
export const SET_ACTIVE_COUNT = "SET_ACTIVE_COUNT";

export const SET_FETCH_STATE = "SET_FETCH_STATE";

export function setProductList(productList) {
  return { type: SET_PRODUCT_LIST, payload: productList };
}

export function setProductCount() {
  return { type: SET_PRODUCT_COUNT };
}

export function setPageCount(pageCount) {
  return { type: SET_PAGE_COUNT, payload: Number(pageCount) };
}
export function setActiveCount(activeCount) {
  return { type: SET_ACTIVE_COUNT, payload: Number(activeCount) };
}
export function setFetchState(fetchState) {
  return { type: SET_ACTIVE_COUNT, payload: fetchState };
}