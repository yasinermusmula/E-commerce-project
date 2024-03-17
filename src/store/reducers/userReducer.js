import { FETCH_STATE_USER, SET_LOG_OUT, SET_USER } from "../actions/userAction";
import { FETCH_STATE } from "./productReducer";

const initialState = {
  user: {},
  fetchState: FETCH_STATE.NOT_FETCHED,
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_LOG_OUT:
      return { ...state, user: state.user };
    case FETCH_STATE_USER:
      return {
        ...state,
        fetchState: action.payload,
      };
    default:
      return state;
  }
};
