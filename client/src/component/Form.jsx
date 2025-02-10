import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/background.png'; // Adjust path as needed


const Form = () => {
  return (
    <>
    
    <div
//   style={{
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//   }}
  className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
>
        
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-4xl font-medium tracking-tight text-gray-900 font-poppins">
          Sign Up
        </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-md font-medium text-gray-800 font-poppins">
                Business Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm font-sans"
                />
              </div>
            </div>

            <div>
             <label htmlFor="remark" className="block text-md font-medium text-gray-800 font-poppins">
                Business Description
            </label>
            <div className="mt-2">
                <textarea
                  id="remark"
                  name="remark"
                  rows="4"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300  placeholder:text-gray-400focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  placeholder="Enter the description here..."
                ></textarea>
            </div>
            </div>

            <div>
              <label htmlFor="remark" className="block text-md font-medium text-gray-800 font-poppins">
                Industry Type
              </label>
              <div className="mt-2">
                <select
                  id="remark"
                  name="remark"
                  required
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                >
                  <option value="" disabled selected>Select a type</option>
                  <option value="Renewable Energy">Renewable Energy</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Industrial Solutions">Industrial Solutions</option>
                  <option value="Mining">Mining</option>
                  <option value="Waste Management">Waste Management</option>
                  <option value="Information Tech">Information Tech</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Manufacturing">Manufacturing</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="remark" className="block text-md font-medium text-gray-800 font-poppins">
                Product/Service Details
              </label>
              <div className="mt-2">
                <select
                  id="remark"
                  name="remark"
                  required
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                >
                  <option value="" disabled selected>Select services</option>
                  <option value="Renewable Energy">Solar panels & batteries</option>
                  <option value="Transportation">Electric scooters</option>
                  <option value="Agriculture">Organic farming solutions</option>
                  <option value="Financial Services">AI-powered trading platform</option>
                  <option value="Industrial Solutions">Carbon capture tech</option>
                  <option value="Mining">Coal & mineral extraction</option>
                  <option value="Waste Management">Recycling solutions</option>
                  <option value="Information Tech">Cloud computing services</option>
                  <option value="Automotive">EV battery recycling</option>
                  <option value="Manufacturing">Sustainable fabrics</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="remark" className="block text-md font-medium text-gray-800 font-poppins">
                Stage of Development
              </label>
              <div className="mt-2">
                <select
                  id="remark"
                  name="remark"
                  required
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                >
                  <option value="" disabled selected>Select services</option>
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
              <label htmlFor="remark" className="block text-md font-medium text-gray-800 font-poppins">
                Target Market
              </label>
              <div className="mt-2">
                <select
                  id="remark"
                  name="remark"
                  required
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                >
                  <option value="" disabled selected>Select services</option>
                  <option value="Global">Global</option>
                  <option value="Urban commuters">Urban commuters</option>
                  <option value="Farmers & retailers">Farmers & retailers</option>
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
              <label htmlFor="remark" className="block text-md font-medium text-gray-800 font-poppins">
                Revenue Model
              </label>
              <div className="mt-2">
                <select
                  id="remark"
                  name="remark"
                  required
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                >
                  <option value="" disabled selected>Select services</option>
                  <option value="Subscription & Sales">Subscription & Sales</option>
                  <option value="Rental">Rental</option>
                  <option value="Direct Sales">Direct Sales</option>
                  <option value="Subscription">Subscription</option>
                  <option value="Government contracts">Government contracts</option>
                  <option value="B2B Sales">B2B Sales</option>
                  <option value="B2B & B2C">B2B & B2C</option>
                  <option value="Licensing">Licensing</option>
                  <option value="Commodity Sales">Commodity Sales</option>
                  <option value="SaaS">SaaS</option>
                </select>
              </div>
            </div>

            <div>
  <label htmlFor="name" className="block text-md font-medium text-gray-800 font-poppins">
  Profit Margin(Numeric Only)
  </label>
  <div className="mt-2">
    <input
      id="name"
      name="name"
      type="number"
      required
      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm "
      placeholder="In percentage"
    />
  </div>
</div>

<div>
  <label htmlFor="name" className="block text-md font-medium text-gray-800 font-poppins">
  Valuation(Numeric Only)
  </label>
  <div className="mt-2">
    <input
      id="name"
      name="name"
      type="number"
      required
      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm "
      placeholder="In lakh"
    />
  </div>
</div>




<div>
  <Link to="/subs"> {/* Replace with your actual route */}
    <button
      type="button"
      className="flex w-full justify-center rounded-md bg-[#0062B6] px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-[#004C8C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-poppins"
    >
      Submit
    </button>
  </Link>
</div>
          </form>

          
        </div>
      </div>
    </>
  );
};

export default Form;
