import axios from "axios";

export const createAxiosInstance = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com/",
    headers: token
      ? {
          Authorization: token,
        }
      : {},
  });

  // return axios.create({
  //   baseURL: "https://workintech-fe-ecommerce.onrender.com/",
  //   headers: {},
  // });
};

export let API = createAxiosInstance();

export const newAxiosInstance = () => {
  API = createAxiosInstance();
};
