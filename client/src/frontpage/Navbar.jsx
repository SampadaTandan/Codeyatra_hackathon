import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState); // Toggle menuOpen state
  };

  return (
    <nav className="flex justify-between items-center w-full bg-white px-4 py-2 font-poppins border-b border-gray-300">
      {/* Hamburger Menu Icon */}
      {/* <div
        id="menu"
        className="cursor-pointer z-50"
        onClick={toggleMenu}
      >
        <div
          className={`bg-black h-1 w-8 mb-1 transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`bg-black h-1 w-8 mb-1 transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`bg-black h-1 w-8 transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div> */}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="text-black p-4 font-bold absolute top-4 right-4"
          onClick={toggleMenu}
          aria-label="Close Menu"
        ></button>
        <ul className="space-y-4 pl-8 pr-4 pt-4 pb-4 mt-20"> {/* Added margin-top to move items down */}
          <li>
            <a href="/" className="text-black hover:text-gray-700" style={{ fontSize: "22px" }}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-700" style={{ fontSize: "22px" }}>
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-700" style={{ fontSize: "22px" }}>
              About Us
            </a>
          </li>
          <li>
            <Link to="/login" className="text-black hover:text-gray-700" style={{ fontSize: "22px" }}>
              Log in & Sign up
            </Link>
          </li>
        </ul>
      </div>

      {/* Logo Section */}
      <div className="w-2/3 flex place-content-start">
        <a href="/" rel="noopener noreferrer">
          <img src={logo} alt="" className="w-32 h-16" />
        </a>
      </div>

      <div className="w-full flex justify-end items-center space-x-6">
        {/* Track Order Text */}
        <div className="text-black cursor-pointer">Track Order</div>

        {/* Login Button with Border */}
        <Link
          to="/login"
          className="text-[#0062B6] border-2 border-[#0062B6] py-2 px-6 rounded-md font-semibold"
        >
          Log In
        </Link>

        {/* Sign Up Button */}
        <Link
          to="/select"
          className="text-white bg-[#0062B6] py-2 px-6 rounded-md font-semibold hover:bg-[#004C8C] transition-all duration-300"
        >
          Sign Up
        </Link>
      </div>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
