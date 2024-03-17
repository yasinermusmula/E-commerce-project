import Hero from "../layout/Hero";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getValue } from "@testing-library/user-event/dist/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";
import { API } from "../api/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles } from "../store/actions/globalActions";

export default function SignUpPage() {
  const history = useHistory();
  const [store, setStore] = useState(false);

  const rolesData = useSelector((store) => store.global.roles);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    const selectedRole = e.target.value;
    if (selectedRole === "2") {
      setStore(true);
    } else {
      setStore(false);
    }
  };

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      role_id: 3,
    },
  });

  const validatePasswordMatch = (value) => {
    const { password } = getValues();
    return value === password || "Passwords do not match";
  };

  const onSubmit = (data) => {
    const { confirmPassword, ...postData } = data;
    console.log("form submit edildi", postData);

    API.post("/signup", postData)
      .then((res) => {
        console.log(res.data.message);
        history.push("/");
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(fetchRoles());
    console.log("Roles fetch", rolesData);
  }, []);

  // useEffect(() => {
  //   API.get("/roles")
  //     .then((res) => {
  //       //roles için action
  //       //sonra burdan dispatch
  //       //dispatch edilen yere roleOpt datalrını yollucaz
  //       //
  //       setRole(res.data);
  //       // console.log(role);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  //
  //   fetchRoles();
  //   setTimeout(() => {
  //     console.log(role);
  //     console.log("//////");
  //     console.log(rolesData);
  //   }, 2000);
  // }, []);

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
                  value={watch("role_id")}
                  onClick={changeHandler}
                  {...register("role_id")}
                >
                  <option value={rolesData && rolesData[2]?.id}>Müşteri</option>
                  <option value={rolesData && rolesData[0]?.id}>
                    Yönetici
                  </option>
                  <option value={rolesData && rolesData[1]?.id}>Mağaza</option>
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
                        type="name"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write store name"
                        {...register("store.name", {
                          required: "Name can't be empty",
                          minLength: {
                            value: 3,
                            message: "You have to write at least 3 characters",
                          },
                        })}
                      />
                      <label />
                      {errors.store?.name && (
                        <p className="text-red-500">
                          {errors.store.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Store Phone
                      </label>
                      <input
                        type="phone"
                        name="phone"
                        placeholder="Write phone number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("store.phone", {
                          required: "Phone can't be empty",
                          minLength: {
                            value: 11,
                            message: "You have to write at least 11 charecters",
                          },
                        })}
                      />
                      <label />
                      {errors.store?.phone && (
                        <p className="text-red-500">
                          {errors.store.phone.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Store Tax ID
                      </label>
                      <input
                        type="number"
                        name="tax_no"
                        id="confirm-password"
                        placeholder="Write store tax ID"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("store.tax_no", {
                          required: "You must write Tax ID",
                        })}
                      />
                      <label />
                      {errors.store?.tax_no && (
                        <p className="text-red-500">
                          {errors.store.tax_no.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Store Bank Account(IBAN)
                      </label>
                      <input
                        type="number"
                        name="bank_account"
                        placeholder="Write your IBAN"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("store.bank_account", {
                          required: "You must enter Bank Account",
                        })}
                      />
                      <label />
                      {errors.store?.bank_account && (
                        <p className="text-red-500">
                          {errors.store.bank_account.message}
                        </p>
                      )}
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
