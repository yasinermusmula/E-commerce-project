import Hero from "../layout/Hero";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { API } from "../api/api";
import { useForm } from "react-hook-form";
import { cities } from "../data/CitiesData";
export default function PaymentPage() {
  const [addressToogle, SetAddressToogle] = useState(false);
  const [cityValue, SetCityValue] = useState("");
  const [district, setDistrict] = useState([cities[0].districts]);
  const shoppingCart = useSelector((store) => store.shoppingCart.cart);

  let totalProductPrice = shoppingCart.reduce((count, item) => {
    return count + item.count * item.product.price;
  }, 0);

  const handleToggle = () => {
    SetAddressToogle(!addressToogle);
    setDistrict([]);
  };

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    API.get("/user/address")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCityValue = (e) => {
    SetCityValue(e.target.value);

    const selectedCity = cities.find((city) => city.name === e.target.value);

    if (selectedCity) {
      setDistrict(selectedCity.districts || []);
    } else {
      setDistrict([]);
    }
  };

  return (
    <div className="w-full flex-wrap">
      <Hero />
      <div className="container mx-auto my-6 p-4 bg-gray-100 rounded-xl flex justify-between gap-10 flex-col">
        <div className="flex items-center gap-3 text-xs text-gray-500 font-semibold mt-3">
          <FontAwesomeIcon icon={faArrowLeft} />
          <p className="cursor-pointer hover:text-gray-400">
            Go Back To My Cart
          </p>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex md:flex-row gap-4 p-4">
            <div className="flex flex-col">
              <div className="flex gap-2 sm:flex-row">
                <div className=" border-solid border-b-4 border-blue-500 mb-4 p-4 bg-white rounded shadow sm:w-1/2">
                  <div className="flex justify-between gap-2">
                    <h2 className="text-lg font-bold mb-3 ">
                      Address Information
                    </h2>
                    <h1 className="text-2xl font-bold text-green-300">1</h1>
                  </div>
                </div>
                <div className="p-4 mb-4 bg-white rounded shadow sm:w-1/2">
                  <div className="flex justify-between gap-2">
                    <h2 className="text-lg font-bold mb-3w-1/2">
                      Payment Options
                    </h2>
                    <h1 className="text-2xl font-bold text-green-300">2</h1>
                  </div>
                  <p className="text-sm text-gray-500">
                    You can make your payment safely with a
                    <span className="font-bold text-gray-400">
                      bank/credit card
                    </span>{" "}
                    or{" "}
                    <span className="font-bold text-gray-400">
                      Shopping Credit
                    </span>
                    .
                  </p>
                </div>
              </div>
              <div className="flex flex-col mt-4 p-4 gap-3 bg-white rounded shadow">
                <div className="flex justify-between w-full ">
                  <h2 className="text-lg font-bold mb-3">Delivery Address</h2>
                  <div className="flex items-center justify-between">
                    <button className="p-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 hover:border hover:border-solid hover:border-gray-100 ">
                      <button
                        onClick={handleToggle}
                        className="flex text-xs font-bold text-gray-900 "
                      >
                        Add New Address +
                      </button>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-[250px]">
              <div className="rounded-xl border border-solid border-gray-100 p-4 w-96 lg:w-[400px] h-full justify-between flex flex-col bg-white">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Order Summary
                </h3>
                <div className="flex flex-col p-2 justify-center ">
                  <div className="mb-4">
                    <div className="flex justify-between mb-2 gap-2">
                      <span className="font-bold">Total Products:</span>
                      <span className="font-normal">
                        {totalProductPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between mb-2 gap-2">
                    <span className="font-bold">Shipping Total:</span>
                    <span>$30</span>
                  </div>
                  <Link to="payment">
                    <button
                      className={`${totalProductPrice === 0 ? "bg-gray-600" : "bg-blue-500"} mt-4 w-full text-white font-bold py-2 px-4 rounded-xl  transition duration-300 ease-in-out place-self-end`}
                      disabled={totalProductPrice === 0}
                    >
                      Create Order
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {addressToogle && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-4 rounded max-w-lg w-full">
                  <form className="space-y-4 ">
                    <div className="flex">
                      <h2 className="items-start">Add New address</h2>
                      <button onClick={handleToggle} className="ml-80">
                        x
                      </button>
                    </div>
                    <div className="flex-col flex">
                      <label>Adress Title:</label>
                      <input
                        placeholder="Enter an Adress title (e,g, Home, Work)"
                        className="border rounded border-gray-500 w-full"
                      />
                      <div className="flex justify-between">
                        <div className="flex-col flex">
                          <label>Name:</label>
                          <input
                            placeholder="name"
                            className="border rounded border-gray-500"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label>Surname:</label>
                          <input
                            placeholder="Surname"
                            className="border rounded border-gray-500"
                          />
                        </div>
                      </div>
                      <label>Phone:</label>
                      <input
                        placeholder="+905........"
                        className="border rounded border-gray-500 w-full"
                      />
                      <label>City:</label>
                      <select
                        name="city"
                        className="border border-gray-500 w-36"
                        onClick={handleCityValue}
                      >
                        <option>Select a City</option>
                        {cities.map((city, index) => (
                          <option value={city.name} key={index}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                      <label>District:</label>
                      <select
                        name="city"
                        className="border border-gray-500 w-36"
                        disabled={!cityValue}
                      >
                        <option>Select a District</option>
                        {district.map((city, index) => (
                          <option value={city.name} key={index}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                      <label>Neighbourhood:</label>
                      <input
                        placeholder="Enter your Neighbourhood"
                        className="border rounded border-gray-500 w-full"
                      />
                      <label>Address:</label>
                      <textarea
                        placeholder="Enter your Adress(Street,Apertment,Home number)"
                        className="border rounded border-gray-500 w-full h-20"
                      />
                    </div>
                    <div className="justify-center flex">
                      <button className="rounded mx-2 bg-blue-500 w-28 h-8 font-montserrat text-gray-100 font-medium text-sm">
                        Save address
                      </button>
                      <button
                        onClick={handleToggle}
                        className="mx-2 rounded bg-gray-300 w-20 text-sm font-montserrat"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
