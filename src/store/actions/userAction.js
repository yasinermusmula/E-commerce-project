import { API, newAxiosInstance } from "../../api/api";

export const SET_USER = "SET_USER";

export function setUser(user) {
  return { type: SET_USER, payload: user };
}

export const userCreationAction = (data, history) => (dispatch, getState) => {
  API.post("/login", data)
    .then(function (res) {
      console.log("Login oldu", res.data);
      localStorage.setItem("token", res.data.token);

      dispatch(setUser(res.data));
      history.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
