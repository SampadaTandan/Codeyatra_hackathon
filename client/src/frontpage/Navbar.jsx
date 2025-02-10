import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo3.png";
import { AuthContext } from "../component/AuthContext";

function Navbar() {
  const { setIsLoggedIn,isLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Check the login status from localStorage on initial load
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedLoginStatus === "true");
  }, []);

  const handleLogout = () => {
    // Remove the login status from localStorage and update the state
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="flex justify-between items-center w-full bg-white px-4 py-2 font-poppins border-b border-gray-300">
      {/* Logo */}
      <div className="w-2/3 flex place-content-start">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-32 h-16" />
        </Link>
      </div>

      <div className="w-full flex justify-end items-center space-x-6">
        {isLoggedIn ? (
          // Show profile icon when logged in
          <div className="relative group">
            <button className="w-10 h-10 bg-white border-2 border-[#0062B6] rounded-full flex items-center justify-center">
              👤
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border border-[#0062B6] rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              <Link to="/profile" className="block px-4 py-2 border-b border-[#0062B6] text-gray-800 hover:bg-gray-200">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          // Show login/signup if not logged in
          <>
            <Link
              to="/login"
              className="text-[#0062B6] border-2 border-[#0062B6] py-2 px-6 rounded-md font-semibold"
            >
              Log In
            </Link>
            <Link
              to="/select"
              className="text-white bg-[#0062B6] py-2 px-6 rounded-md font-semibold hover:bg-[#004C8C] transition-all duration-300"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
