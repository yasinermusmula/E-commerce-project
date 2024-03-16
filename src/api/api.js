import axios from "axios";

export const createAxiosInstance = () => {
  // const token = JSON.parse(localStorage.getItem("token"));
  //
  // return axios.create({
  //   baseURL: "https://workintech-fe-ecommerce.onrender.com/",
  //   headers: token
  //     ? {
  //         Authorization: token,
  //       }
  //     : {},
  // });

  return axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
  });
};

export let API = createAxiosInstance();

export const newAxiosInstance = () => {
  API = createAxiosInstance();
};
