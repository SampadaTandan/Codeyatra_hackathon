
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../component/AuthContext";
import  { useState, useContext } from "react";

import esewa from "../assets/images/esewa.png";


function Checkout() {
  // State to manage modal visibility
  const [isModalVisible, setModalVisible] = useState(false);
  const { setIsLoggedIn,isLoggedIn} = useContext(AuthContext);
const navigate=useNavigate()
  // Function to show the modal
  const showModal = () => {
    setModalVisible(true);
  };

  // Function to hide the modal
  const hideModal = () => {
    setModalVisible(false);
    // localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    navigate('/entrepreneurdas');
  };

  return (
    <div className="font-poppins bg-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0062B6] inline-block border-b-[3px] border-[#0062B6] pb-1">
            Checkout
          </h2>
        </div>

        <div className="mt-12">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-3xl font-bold text-gray-300">01</h3>
              <h3 className="text-xl font-semibold text-gray-800 mt-1">
                Personal Details
              </h3>
            </div>

            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Phone number"
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Address Section */}
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-300">02</h3>
              <h3 className="text-xl font-semibold text-gray-800 mt-1">
                Address
              </h3>
            </div>

            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Street address"
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Total Price Section */}
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-300">04</h3>
              <h3 className="text-xl font-semibold text-gray-800 mt-1">
                Total
              </h3>
            </div>

            <div className="md:col-span-2">
              <div className="bg-gray-50 p-4 rounded-md border-2 border-gray-200">
                <div className="flex justify-between text-gray-800 text-sm">
                  <span>1 month</span>
                  <span>Rs.999</span>
                </div>
                <div className="border-t border-gray-300 mt-4 pt-4 text-lg font-bold">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span>Rs.999</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-300">03</h3>
              <h3 className="text-xl font-semibold text-gray-800 mt-1">
                Payment Method
              </h3>
            </div>

            <div className="md:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Card Payment Option */}
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="w-5 h-5 cursor-pointer"
                    id="card"
                    defaultChecked
                  />
                  <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                    <img
                      src="https://readymadeui.com/images/visa.webp"
                      className="w-12"
                      alt="Visa"
                    />

                    <img
                      src="https://readymadeui.com/images/master.webp"
                      className="w-12"
                      alt="Mastercard"
                    />
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="w-5 h-5 cursor-pointer"
                    id="paypal"
                  />
                  <label htmlFor="esewa" className="ml-4 flex gap-2 cursor-pointer">
                    <img
                      src={esewa}
                      className="w-30"
                      alt="esewa"
                    />
                  </label>
                </div>
              </div>

              <div className="grid sm:grid-cols-4 gap-4 mt-4">
                <input
                  type="number"
                  placeholder="Card number"
                  className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-300 rounded-md focus:border-blue-500 outline-none col-span-2"
                />
                <input
                  type="number"
                  placeholder="EXP."
                  className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
                />
                <input
                  type="number"
                  placeholder="CVV"
                  className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-end gap-4 mt-12">
            <button
              type="button"
              className="px-6 py-3 text-sm font-semibold tracking-wide bg-transparent border-2 border-gray-300 text-gray-800 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-6 py-3 text-sm font-semibold tracking-wide bg-[#0062B6] text-white rounded-md hover:bg-[#004C8C]"
              onClick={showModal}
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>

      {/* Overlay Modal */}
      {isModalVisible && (
        <div
          className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
        >
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
              viewBox="0 0 320.591 320.591"
              onClick={hideModal}
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              ></path>
            </svg>
            <div className="my-8 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 shrink-0 fill-green-500 inline"
                viewBox="0 0 512 512"
              >
                <path
                  d="M383.841 171.838c-7.881-8.31-21.02-8.676-29.343-.775L221.987 296.732l-63.204-64.893c-8.005-8.213-21.13-8.393-29.35-.387-8.213 7.998-8.386 21.137-.388 29.35l77.492 79.561a20.687 20.687 0 0 0 14.869 6.275 20.744 20.744 0 0 0 14.288-5.694l147.373-139.762c8.316-7.888 8.668-21.027.774-29.344z"
                />
                <path
                  d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 470.487c-118.265 0-214.487-96.214-214.487-214.487 0-118.265 96.221-214.487 214.487-214.487 118.272 0 214.487 96.221 214.487 214.487 0 118.272-96.215 214.487-214.487 214.487z"
                />
              </svg>
              <h4 className="text-xl text-gray-800 font-semibold mt-4">Successfully accepted!</h4>
              <p className="text-sm text-gray-500 leading-relaxed mt-4">
                Your payment has been successfully processed. Thank you for your purchase!
              </p>
            </div>
            <button
              type="button"
              className="px-5 py-2.5 w-full rounded-lg text-white text-sm border-none outline-none bg-[#0062B6] hover:bg-[#004C8C]"
              onClick={hideModal}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;


