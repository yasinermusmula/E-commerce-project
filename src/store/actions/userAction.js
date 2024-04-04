import { API, newAxiosInstance } from "../../api/api";
import { toast } from "react-toastify";
import { FETCH_STATE } from "../reducers/productReducer";

export const SET_USER = "SET_USER";
export const SET_LOG_OUT = "SET_LOG_OUT";
export const FETCH_STATE_USER = "FETCH_STATE_USER";

export function setUser(user) {
  return { type: SET_USER, payload: user };
}

export function fetchStateUser(fetch) {
  return { type: FETCH_STATE_USER, payload: fetch };
}

export function setLogOut() {
  return { type: SET_LOG_OUT };
}

export const userCreationAction = (data, history) => (dispatch, getState) => {
  dispatch(fetchStateUser(FETCH_STATE.NOT_FETCHED));
  API.post("/login", data)
    .then(function (res) {
      console.log("Login oldu", res.data);
      dispatch(setUser(res.data));
      dispatch(fetchStateUser(FETCH_STATE.FETCHED));
      localStorage.setItem("token", res.data.token);
      toast.success("You are Login!");
      history.push("/");
    })
    .catch((err) => {
      console.log(err);
      dispatch(fetchStateUser(FETCH_STATE.FAILED));
    });
};

export const userLogOutAction = () => (dispatch) => {
  dispatch(setLogOut());
  dispatch(fetchStateUser(FETCH_STATE.NOT_FETCHED));
  localStorage.removeItem("token");
  toast.info("You Log out");
};

export const userVerify = () => (dispatch) => {
  API.get("/verify")
    .then((res) => {
      localStorage.setItem("token", res.data);
      // newAxiosInstance(res.data.token);
      dispatch(setUser(res.data));
      dispatch(fetchStateUser(FETCH_STATE.FETCHED));
      toast.success("Welcome! Nice to see you again");
    })
    .catch((err) => {
      toast.error(err.response);
      localStorage.removeItem("token");
    });
};
