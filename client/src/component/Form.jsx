
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/background.png'; // Adjust path as needed

import  { useState } from "react";
import axios from "axios";


const Form = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    businessDescription: "",
    industryType: "",
    productServiceDetails: "",
    stageOfDevelopment: "",
    targetMarket: "",
    revenueModel: "",
    profitMargin: 0,
    valuation: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/business/business",
        formData
      );
      console.log("Business created:", response.data);
      // Optionally, redirect or give a success message
    } catch (error) {
      console.error("Error creating business:", error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <h2 className="mt-10 text-center text-4xl font-bold tracking-tight text-[#0062B6] font-poppins">
            Registration Form
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-4xl">

          <form
            onSubmit={handleSubmit}
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            <div>
              <label
                htmlFor="businessName"
                className="block text-md font-medium text-gray-800 font-poppins"
              >
                Business Name
              </label>
              <div className="mt-2">
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  required

                  value={formData.businessName}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-4 py-2 text-lg text-gray-400 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-lg font-sans"
                />
              </div>
            </div>

            <div>

              <label
                htmlFor="industryType"
                className="block text-md font-medium text-gray-800 font-poppins"
              >
                Industry Type
              </label>
              <div className="mt-2">
                <select

                  id="industryType"
                  name="industryType"
                  required
                  value={formData.industryType}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-4 py-2.5 text-lg text-gray-400 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-lg"
                >
                  <option value="" disabled>
                    Select a type
                  </option>
                  <option value="Renewable Energy">Renewable Energy</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Industrial Solutions">
                    Industrial Solutions
                  </option>
                  <option value="Mining">Mining</option>
                  <option value="Waste Management">Waste Management</option>
                  <option value="Information Tech">Information Tech</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Manufacturing">Manufacturing</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-2">

              <label
                htmlFor="businessDescription"
                className="block text-md font-medium text-gray-800 font-poppins"
              >
                Business Description
              </label>
              <div className="mt-2">
                <textarea
                  id="businessDescription"
                  name="businessDescription"
                  rows="4"
                  required
                  value={formData.businessDescription}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-4 py-2 text-lg text-gray-400 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-lg"
                  placeholder="Enter the description here..."
                ></textarea>
              </div>
            </div>

            <div>
              <label
                htmlFor="productServiceDetails"
                className="block text-md font-medium text-gray-800 font-poppins"
              >
                Product/Service Details
              </label>
              <div className="mt-2">
                <select
                  id="productServiceDetails"
                  name="productServiceDetails"
                  required
                  value={formData.productServiceDetails}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-4 py-2.5 text-lg text-gray-400 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-lg"
                >
                  <option value="" disabled>
                    Select services
                  </option>
                  <option value="Solar panels & batteries">
                    Solar panels & batteries
                  </option>
                  <option value="Electric scooters">Electric scooters</option>
                  <option value="Organic farming solutions">
                    Organic farming solutions
                  </option>
                  <option value="AI-powered trading platform">
                    AI-powered trading platform
                  </option>
                  <option value="Carbon capture tech">
                    Carbon capture tech
                  </option>
                  <option value="Coal & mineral extraction">
                    Coal & mineral extraction
                  </option>
                  <option value="Recycling solutions">
                    Recycling solutions
                  </option>
                  <option value="Cloud computing services">
                    Cloud computing services
                  </option>
                  <option value="EV battery recycling">
                    EV battery recycling
                  </option>
                  <option value="Sustainable fabrics">
                    Sustainable fabrics
                  </option>
                </select>
              </div>
            </div>


            <div>

              <label
                htmlFor="stageOfDevelopment"
                className="block text-md font-medium text-gray-800 font-poppins"
              >
                Stage of Development
              </label>
              <div className="mt-2">
                <select
                  id="stageOfDevelopment"
                  name="stageOfDevelopment"
                  required
                  value={formData.stageOfDevelopment}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-4 py-2.5 text-lg text-gray-400 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-lg"
                >
                  <option value="" disabled>
                    Select stage
                  </option>
                  <option value="Growth">Growth</option>
                  <option value="Early">Early</option>
                  <option value="Expansion">Expansion</option>
                   <option value="Scaling">Scaling</option>
                   <option value="Established">Established</option>
                   <option value="Mature">Mature</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="targetMarket"
                className="block text-md font-medium text-gray-800 font-poppins"
              >
                Target Market
              </label>
              <div className="mt-2">
                <select
                  id="targetMarket"
                  name="targetMarket"
                  required
                  value={formData.targetMarket}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-4 py-2.5 text-lg text-gray-400 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-lg"
                >
                  <option value="" disabled>
                    Select market
                  </option>
                  <option value="Global">Global</option>
                  <option value="Urban commuters">Urban commuters</option>
                  <option value="Farmers & retailers">
                    Farmers & retailers
                  </option>
                  <option value="Investors">Investors</option>
                  <option value="Municipalities">Municipalities</option>
                  <option value="Car manufacturers">Car manufacturers</option>
                  <option value="Fashion brands">Fashion brands</option>
                  <option value="Licensing">Licensing</option>
                  <option value="Commodity Sales">Commodity Sales</option>
                </select>
              </div>
            </div>

            <div>

              <label
                htmlFor="revenueModel"
                className="block text-md font-medium text-gray-800 font-poppins"
              >
                Revenue Model
              </label>
              <div className="mt-2">
                <select
                  id="revenueModel"
                  name="revenueModel"
                  required
                  value={formData.revenueModel}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-4 py-2.5 text-lg text-gray-400 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-lg"
                >
                  <option value="" disabled>
                    Select model
                  </option>
                  <option value="Subscription & Sales">
                    Subscription & Sales
                  </option>
                  <option value="Advertising & Commission">
                    Advertising & Commission
                  </option>
                  <option value="B2B, B2C">B2B, B2C</option>
                  <option value="Licensing">Licensing</option>
                  <option value="Wholesale">Wholesale</option>
                </select>
              </div>
            </div>

            <div>

              <label
                htmlFor="profitMargin"
                className="block text-md font-medium text-gray-800 font-poppins"
              >
                Profit Margin (in %)
              </label>
              <div className="mt-2">
                <input
                  id="profitMargin"
                  name="profitMargin"
                  type="number"
                  value={formData.profitMargin}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-white px-4 py-2 text-lg text-gray-400 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-lg"
                />
              </div>
            </div>

            <div className="md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="w-full bg-[#0062B6] text-white text-lg font-poppins py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;