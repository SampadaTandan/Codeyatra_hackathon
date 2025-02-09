import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Select() {
  const [selected, setSelected] = useState(null); // Track which option is selected (Investor or Entrepreneur)

  // Determine the target link based on selected option
  let targetLink = '';
  if (selected === 'investor') {
    targetLink = '/investor-dashboard'; // Redirect to Investor Dashboard
  } else if (selected === 'entrepreneur') {
    targetLink = '/signup'; // Redirect to Entrepreneur Dashboard
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-4xl font-medium tracking-tight text-gray-900 font-poppins">
          Sign Up
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-10">
        {/* Investor Card */}
        <div
          className={`relative card w-64 border-2 ${
            selected === 'investor' ? 'border-[#6EC5FF] bg-[#E0F2FE]' : 'border-gray-300 bg-base-300'
          } rounded-lg grid h-32 place-items-center shadow-md 
          hover:border-[#6EC5FF] hover:bg-[#E0F2FE] transition-all duration-300 cursor-pointer`}
          onClick={() => setSelected('investor')} // Set Investor as selected
        >
          {/* Checkbox in Top-Right */}
          <input
            type="checkbox"
            checked={selected === 'investor'}
            onChange={() => setSelected('investor')} // Only select Investor
            className="absolute top-2 right-2 w-5 h-5 accent-[#0062B6] cursor-pointer"
          />
          <span className="text-2xl text-gray-600">I'm Investor</span>
        </div>

        {/* Entrepreneur Card */}
        <div
          className={`relative card w-64 border-2 ${
            selected === 'entrepreneur' ? 'border-[#6EC5FF] bg-[#E0F2FE]' : 'border-gray-300 bg-base-300'
          } rounded-lg grid h-32 place-items-center shadow-md 
          hover:border-[#6EC5FF] hover:bg-[#E0F2FE] transition-all duration-300 cursor-pointer`}
          onClick={() => setSelected('entrepreneur')} // Set Entrepreneur as selected
        >
          {/* Checkbox in Top-Right */}
          <input
            type="checkbox"
            checked={selected === 'entrepreneur'}
            onChange={() => setSelected('entrepreneur')} // Only select Entrepreneur
            className="absolute top-2 right-2 w-5 h-5 accent-[#0062B6] cursor-pointer"
          />
          <span className="text-2xl text-gray-600">I'm Entrepreneur</span>
        </div>
      </div>

      <div className="mt-10">
        {/* Conditional Link */}
        <Link
          to={targetLink} // Dynamically set the link based on the selected checkbox
          className="flex w-full justify-center rounded-md bg-[#0062B6] px-60 py-3 text-md font-semibold text-white shadow-sm hover:bg-[#004C8C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-poppins"
        >
          Join
        </Link>

        <p className="mt-6 text-center text-sm text-gray-500 font-poppins">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-[#0062B6] hover:text-[#004C8C]">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Select;
