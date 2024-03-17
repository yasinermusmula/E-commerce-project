import { API } from "../../api/api";
import { FETCH_STATE } from "../reducers/productReducer";
import { toast } from "react-toastify";

export const ADD_ROLES = "ADD_ROLES";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const CHANGE_THEME = "CHANGE_THEME";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const SET_FETCHES = "SET_FETCHES";

export const setRoles = (roles) => {
  return { type: ADD_ROLES, payload: roles };
};

export const setTheme = (theme) => {
  return { type: CHANGE_THEME, payload: theme };
};
export const setCategories = (categories) => {
  return { type: SET_CATEGORIES, payload: categories };
};
export const setLanguage = (language) => {
  return { type: CHANGE_LANGUAGE, payload: language };
};

export const setFetches = (fetchCategories) => {
  return { type: SET_FETCHES, payload: fetchCategories };
};

export const fetchRoles = () => (dispatch) => {
  API.get("/roles")
    .then((res) => {
      dispatch(setRoles(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchCategories = () => (dispatch) => {
  dispatch(setFetches(FETCH_STATE.NOT_FETCHED));
  API.get("/categories")
    .then((res) => {
      dispatch(setCategories(res.data));
      dispatch(setFetches(FETCH_STATE.FETCHED));
      console.log("Category fetched", res.data);
    })
    .catch((err) => {
      dispatch(setFetches(FETCH_STATE.FAILED));
      console.log("Failed fetch", err);
    });
};
