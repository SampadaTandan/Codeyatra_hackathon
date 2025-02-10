import React from "react";
import { Link } from "react-router-dom";
import esewa from "../assets/images/esewa.png";

function Checkout() {
  return (
    <div className="font-poppins bg-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">
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
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Phone number"
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                  />
                </div>
              </form>
            </div>
          </div>

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
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
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
                {/* <div className="flex justify-between text-gray-800 text-sm mt-2">
                  <span>Shipping</span>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between text-gray-800 text-sm mt-2">
                  <span>Taxes</span>
                  <span>$5.00</span>
                </div> */}
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
                      alt="PayPal"
                    />
                  </label>
                </div>
              </div>

              <div className="grid sm:grid-cols-4 gap-4 mt-4">
                <input
                  type="number"
                  placeholder="Card number"
                  className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none col-span-2"
                />
                <input
                  type="number"
                  placeholder="EXP."
                  className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                />
                <input
                  type="number"
                  placeholder="CVV"
                  className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-end gap-4 mt-12">
            <button
              type="button"
              className="px-6 py-3 text-sm font-semibold tracking-wide bg-transparent border-2 text-gray-800 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-6 py-3 text-sm font-semibold tracking-wide bg-[#0062B6] text-white rounded-md hover:bg-[#004C8C]"
            >
              Pay now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
