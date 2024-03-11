import Hero from "../layout/Hero";
import Footer from "./Footer";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getValue } from "@testing-library/user-event/dist/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";
import { API } from "../api/api";
import { useHistory } from "react-router";

export default function SignUpPage() {
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPasword] = useState("");
  const [role, setRole] = useState("user");
  const history = useHistory();
  //
  const [store, setStore] = useState(false);
  //
  const changeHandler = (e) => {
    const selectedRole = e.target.value;
    if (selectedRole === "store") {
      setStore(true);
    } else {
      setStore(false);
    }
  };
  //
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //
  //   const formData = {
  //     userName: userName,
  //     email: email,
  //     password: password,
  //     role: role,
  //   };
  //
  //   axios
  //     .post("https://localhost:8085/api/auth/register", formData)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error.response.data);
  //     });
  // };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "all",
  });

  const validatePasswordMatch = (value) => {
    const { password } = getValues();
    return value === password || "Passwords do not match";
  };

  const onSubmit = async (data) => {
    console.log("form submit edildi", data);

    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: 2,
    };
    // if (role === "store") {
    //   formData.role_id = 2;
    //   formData.store = {
    //     name: data.store,
    //     // phone: telNumber,
    //     // tax_no: data.tax_id,
    //     // bank_account: data.iban,
    //   };
    // } else if (role === "admin") {
    //   formData.role_id = 1;
    // } else {
    //   formData.role_id = 3;
    // }

    await API.post("/signup", formData)
      .then((res) => {
        console.log(res.data.message);
        history.push("/");
      })
      .catch((err) => {
        console.log(err.message);
      });

    console.log(data);
  };

  return (
    <>
      <Hero />
      <form
        className=" dark:bg-gray-900 w-80 m-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your user name
                </label>
                <input
                  type="text"
                  name="name"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 rounded-lg `}
                  placeholder="username"
                  {...register("name", {
                    required: "Name can't be empty",
                    minLength: {
                      value: 3,
                      message: "You have to write at least 3 characters",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg  block w-full p-2.5"
                  placeholder="name@company.com"
                  {...register("email", {
                    required: "You need to write your mail",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Please Enter A Valid Email Adress!",
                    },
                  })}
                />
                <label />
                {errors.email && (
                  <p className="text-red-500">{errors?.email?.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("password", {
                    required: "You have to write your password",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
                      message:
                        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
                    },
                  })}
                />
                <label />
                {errors.password && (
                  <p className="text-red-500">{errors?.password?.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("confirmPassword", {
                    required: "You have to write password",
                    validate: validatePasswordMatch,
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]+$/,
                      message:
                        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
                    },
                  })}
                />
                <label />
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Role
                </label>
                <select
                  value={role}
                  onClick={changeHandler}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="user" id="3">
                    User
                  </option>
                  <option value="admin" id="1">
                    Admin
                  </option>
                  <option value="store" id="2">
                    Store
                  </option>
                </select>
                {store && (
                  <>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Store Name
                      </label>
                      <input
                        type="email"
                        name="storeName"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write store name"
                        {...register("storeName", {
                          required: "Name can't be empty",
                          minLength: {
                            value: 3,
                            message: "You have to write at least 3 characters",
                          },
                        })}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Store Phone
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Write phone number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Store Tax ID
                      </label>
                      <input
                        type="confirm-password"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder="Write store tax ID"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Store Bank Account(IBAN)
                      </label>
                      <input
                        type="confirm-password"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder="Write your IBAN"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5"></div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                disabled={!isValid || isSubmitting}
              >
                {isSubmitting && <FontAwesomeIcon icon={faCircleNotch} />}
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </form>
    </>
  );
}
