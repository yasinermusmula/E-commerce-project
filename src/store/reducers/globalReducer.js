import {
  ADD_ROLES,
  SET_CATEGORIES,
  CHANGE_THEME,
  CHANGE_LANGUAGE,
} from "../actions/globalActions";

const initialGlobalState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

export const globalReducer = (state = initialGlobalState, action) => {
  switch (action.type) {
    case ADD_ROLES:
      return {
        ...state,
        roles: action.payload,
      };
    default:
      return state;
  }
};
