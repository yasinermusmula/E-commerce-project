import { SET_USER } from "../actions/userAction";

const initialState = {
  user: {},
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
