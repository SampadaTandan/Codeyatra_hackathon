import { useState } from "react";
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
            action="#"
            method="POST"
            onSubmit={handleSubmit}
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
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-4 py-2 text-lg text-gray-400 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-lg font-sans"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="industry"
                className="block text-md font-medium text-gray-800 font-poppins"
              >
                Industry Type
              </label>
              <div className="mt-2">
                <select
                  id="industry"
                  name="industry"
                  required
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
                htmlFor="remark"
                className="block text-md font-medium text-gray-800 font-poppins"
              >
                Business Description
              </label>
              <div className="mt-2">
                <textarea
                  id="remark"
                  name="remark"
                  rows="4"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-4 py-2 text-lg text-gray-400 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-lg"
                  placeholder="Enter the description here..."
                ></textarea>
              </div>
            </div>

            <div>
              <label
                htmlFor="industry"
                className="block text-md font-medium text-gray-800 font-poppins"
              >
                Product/Service Details
              </label>
              <div className="mt-2">
                <select
                  id="industry"
                  name="industry"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-4 py-2.5 text-lg text-gray-400 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-lg"
                >
                  <option value="" disabled selected>
                    Select services
                  </option>
                  <option value="Renewable Energy">
                    Solar panels & batteries
                  </option>
                  <option value="Transportation">Electric scooters</option>
                  <option value="Agriculture">Organic farming solutions</option>
                  <option value="Financial Services">
                    AI-powered trading platform
                  </option>
                  <option value="Industrial Solutions">
                    Carbon capture tech
                  </option>
                  <option value="Mining">Coal & mineral extraction</option>
                  <option value="Waste Management">Recycling solutions</option>
                  <option value="Information Tech">
                    Cloud computing services
                  </option>
                  <option value="Automotive">EV battery recycling</option>
                  <option value="Manufacturing">Sustainable fabrics</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="industry"
                className="block text-md font-medium text-gray-800 font-poppins"
              >
                Stage of Development
              </label>
              <div className="mt-2">
                <select
                  id="industry"
                  name="industry"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-4 py-2.5 text-lg text-gray-400 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-lg"
                >
                  <option value="" disabled selected>
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
                htmlFor="industry"
                className="block text-md font-medium text-gray-800 font-poppins"
              >
                Target Market
              </label>
              <div className="mt-2">
                <select
                  id="industry"
                  name="industry"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-4 py-2.5 text-lg text-gray-400 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-lg"
                >
                  <option value="" disabled selected>
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
                htmlFor="industry"
                className="block text-md font-medium text-gray-800 font-poppins"
              >
                Revenue Model
              </label>
              <div className="mt-2">
                <select
                  id="industry"
                  name="industry"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-4 py-2.5 text-lg text-gray-400 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-lg"
                >
                  <option value="" disabled selected>
                    Select model
                  </option>
                  <option value="Subscription & Sales">
                    Subscription & Sales
                  </option>
                  <option value="Rental">Rental</option>
                  <option value="Direct Sales">Direct Sales</option>
                  <option value="Subscription">Subscription</option>
                  <option value="Government contracts">
                    Government contracts
                  </option>
                  <option value="B2B Sales">B2B Sales</option>
                  <option value="B2B & B2C">B2B & B2C</option>
                  <option value="Licensing">Licensing</option>
                  <option value="Commodity Sales">Commodity Sales</option>
                  <option value="SaaS">SaaS</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="profit"
                className="block text-md font-medium text-gray-800 font-poppins"
              >
                Profit Margin (Numeric Only)
              </label>
              <div className="mt-2">
                <input
                  id="profit"
                  name="profit"
                  type="number"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-4 py-2 text-lg text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-lg"
                  placeholder="In percentage"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="valuation"
                className="block text-md font-medium text-gray-800 font-poppins"
              >
                Valuation (Numeric Only)
              </label>
              <div className="mt-2">
                <input
                  id="valuation"
                  name="valuation"
                  type="number"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-4 py-2 text-lg text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-lg"
                  placeholder="In lakh"
                />
              </div>
            </div>

            <div className="mt-6">
              <a href="/signup">
                <button
                  type="cancel"
                  className="flex w-full justify-center rounded-md  px-4 py-3 text-lg tracking-wide bg-transparent border-2 border-gray-300 text-gray-800  hover:bg-gray-100 font-poppins"
                >
                  Cancel
                </button>
              </a>
            </div>

            <div className="md:col mt-6">
              <a href="/subs">
                <button
                  type="button"
                  className="flex w-full justify-center rounded-md bg-[#0062B6] px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-[#004C8C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-poppins"
                >
                  Submit
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
