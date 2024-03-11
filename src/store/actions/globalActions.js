export const ADD_ROLES = "ADD_ROLES";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const CHANGE_THEME = "CHANGE_THEME";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export function setRoles(roles) {
  return { type: ADD_ROLES, payload: roles };
}
export function setTheme(theme) {
  return { type: CHANGE_THEME, payload: theme };
}
export function setCategories(categories) {
  return { type: SET_CATEGORIES, payload: categories };
}
export function setLanguage(language) {
  return { type: CHANGE_LANGUAGE, payload: language };
}
