import { API } from "../../api/api";
import { FETCH_STATE } from "../reducers/productReducer";

export const ADD_ROLES = "ADD_ROLES";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const CHANGE_THEME = "CHANGE_THEME";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

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

export const fetchRoles = () => (dispatch) => {
  API.get("/roles")
    .then((res) => {
      dispatch(setRoles(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
