import {
  ADD_ROLES,
  SET_CATEGORIES,
  CHANGE_THEME,
  CHANGE_LANGUAGE,
  SET_FETCHES,
} from "../actions/globalActions";
import { FETCH_STATE } from "./productReducer";

const initialGlobalState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
  fetchCategories: FETCH_STATE.NOT_FETCHED,
};

export const globalReducer = (state = initialGlobalState, action) => {
  switch (action.type) {
    case ADD_ROLES:
      return {
        ...state,
        roles: action.payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_FETCHES:
      return {
        ...state,
        fetchCategories: action.payload,
      };
    default:
      return state;
  }
};
