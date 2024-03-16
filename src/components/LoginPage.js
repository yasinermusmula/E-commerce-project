import Hero from "../layout/Hero";
import Footer from "./Footer";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import { API } from "../api/api";
import { useDispatch } from "react-redux";
import { userCreationAction } from "../store/actions/userAction";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const submitHandler = (data) => {
    // console.log("Login submit edildi ", data);
    //
    // API.post("/login", data)
    //   .then(function (res) {
    //     console.log("Login olundu", res.data);
    //     history.push("/");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    dispatch(userCreationAction(data, history));
  };
  return (
    <>
      <Hero />
      <section className="dark:bg-gray-900 w-80 m-auto">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Log in to your account
              </h1>
              <form
                onSubmit={handleSubmit(submitHandler)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    {...register("email", {
                      required: "You need to write your mail",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Please Enter A Valid Email Adress!",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors?.email?.message}</p>
                  )}
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("password", {
                      required: "You need to write your password",
                    })}
                  />
                </div>

                <button
                  type="submit"
                  class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  disabled={!isValid}
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
