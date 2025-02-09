import React from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-4xl font-medium tracking-tight text-gray-900 font-poppins">
          Sign Up
        </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-md font-medium text-gray-800 font-poppins">
                Name
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
              <label htmlFor="phone" className="block text-md font-medium text-gray-800 font-poppins">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm font-sans"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-800 font-poppins">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm font-sans"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-md font-medium text-gray-800 font-poppins">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm font-poppins"
                />
              </div>
            </div>

            <div>
  <Link to="/form">
    <button
      type="submit"
      class="flex w-full justify-center rounded-md bg-[#0062B6] px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-[#004C8C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-poppins"
    >
      Sign Up
    </button>
  </Link>
</div>

          </form>

          <p className="mt-6 text-center text-sm text-gray-500 font-poppins">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-[#0062B6] hover:text-[#004C8C]">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;