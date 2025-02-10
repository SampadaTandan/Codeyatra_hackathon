import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");  // Redirect to homepage
    window.location.reload(); // Force reload to update Navbar
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-4xl font-bold tracking-tight text-[#0062B6] font-poppins">
            Log In 
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-800 font-poppins">
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 
                             focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm font-sans"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-md font-medium text-gray-800 font-poppins">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-[#0062B6] hover:text-[#004C8C]">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 
                             focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm font-poppins"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#0062B6] px-3 py-2 text-md font-semibold text-white shadow-sm 
                           hover:bg-[#004C8C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-poppins"
              >
                Log In
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500 font-poppins">
            Don't have an account yet?{' '}
            <Link to="/select" className="font-semibold text-[#0062B6] hover:text-[#004C8C]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
