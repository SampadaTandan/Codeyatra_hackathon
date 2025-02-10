import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo3.png";
import { AuthContext } from "../component/AuthContext";

function Navbar() {
  const { setIsLoggedIn, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notifications, setNotifications] = useState([
    "New investment opportunity available",
    "Your project received a new inquiry",
    "Upcoming investor meeting reminder",
  ]);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedLoginStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("#notification-menu") && !event.target.closest("#profile-menu")) {
        setShowNotifications(false);
        setShowProfileMenu(false);
      }
    };
    
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="flex justify-between items-center w-full bg-white px-4 py-2 font-poppins border-b border-gray-300">
      {/* Logo */}
      <div className="w-2/3 flex place-content-start">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-32 h-16" />
        </Link>
      </div>

      <div className="w-full flex justify-end items-center space-x-6 relative">
        {isLoggedIn ? (
          <div className="flex items-center space-x-10">
            {/* Notification Icon */}
            <div className="relative" id="notification-menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 cursor-pointer"
                viewBox="0 0 371.263 371.263"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <path
            d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731zM185.64 23.952c9.341 0 16.946 7.605 16.946 16.946 0 .778-.12 1.497-.24 2.275-4.072-.599-8.204-1.018-12.336-1.138-7.126-.24-14.132.24-21.078 1.198-.12-.778-.24-1.497-.24-2.275.002-9.401 7.607-17.006 16.948-17.006zm0 323.358c-14.431 0-26.527-10.3-29.342-23.952h58.683c-2.813 13.653-14.909 23.952-29.341 23.952zm143.655-67.665c.479 5.15-1.138 10.12-4.551 13.892-3.533 3.773-8.204 5.868-13.353 5.868H59.89c-5.15 0-9.82-2.096-13.294-5.868-3.473-3.772-5.09-8.743-4.611-13.892.838-9.042 9.282-16.168 19.162-16.168 15.809 0 28.683-12.874 28.683-28.683v-73.115c0-26.228 10.419-50.719 29.282-68.923 18.024-17.425 41.498-26.887 66.528-26.887 1.198 0 2.335 0 3.533.06 50.839 1.796 92.277 45.929 92.277 98.325v70.54c0 15.809 12.874 28.683 28.683 28.683 9.88 0 18.264 7.126 19.162 16.168z"
            />
              </svg>
              <span className="bg-red-500 text-white text-xs px-2 rounded-full absolute -top-2 left-4">
                {notifications.length}
              </span>
              
              {/* Notification Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg border border-gray-300 rounded-md z-10">
                  {notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 text-gray-800 border-b border-gray-200 hover:bg-gray-100"
                      >
                        {notification}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-800">No new notifications</div>
                  )}
                </div>
              )}
            </div>

            {/* Profile Section */}
            <div className="relative" id="profile-menu">
              <button
                className="w-10 h-10 bg-white border-2 border-[#0062B6] rounded-full flex items-center justify-center"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                👤
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border border-gray-300 rounded-md z-10">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 border-b border-gray-300 text-gray-800 hover:bg-gray-200"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
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
