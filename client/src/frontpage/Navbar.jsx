
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState); // Toggle menuOpen state
  };

  return (
    <nav className="flex justify-between items-center w-full bg-white px-4 py-2 font-poppins">
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
  >
    
  </button>
  <ul className="space-y-4 pl-8 pr-4 pt-4 pb-4 mt-20"> {/* Added margin-top to move items down */}
    <li>
      <a href="/" className="text-black hover:text-gray-700"style={{ fontSize: "22px" }}>
        Home
      </a>
    </li>
    <li>
      <a href="#" className="text-black hover:text-gray-700"style={{ fontSize: "22px" }}>
        Contact
      </a>
    </li>
    <li>
      <a href="#" className="text-black hover:text-gray-700"style={{ fontSize: "22px" }}>
        About Us
      </a>
    </li>
    <li>
      <Link to="/login" className="text-black hover:text-gray-700"style={{ fontSize: "22px" }}>
        Log in & Sign up
      </Link>
    </li>
  </ul>
</div>


      {/* Logo Section */}
      <div className="w-2/3 flex place-content-end">
  <a href="/" target="_blank" rel="noopener noreferrer">
 
    <img src="/src/assets/images/logo.png" alt="Viu" className="w-26 h-16 pr-64" />
  </a>
</div>


      {/* Placeholder for other content */}
      <div className="w-1/3 flex justify-end space-x-14">
        <div className="text-black cursor-pointer">Track Order</div>
        <Link to="/login" className="text-black cursor-pointer">
        Log in & Sign up
      </Link>
        <div className="text-black cursor-pointer">Wishlist</div>
        <div className="text-black cursor-pointer">Cart</div>
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
