import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icon.png";
import avatar from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/features/userSlice";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for dropdown menu

  const handleLogout = () => {
    alert("Are you sure want to logout?");
    dispatch(logout());
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-2 shadow-sm">
      <nav className="Container flex justify-between items-center">
        <div
          className="text-xl font-semibold text-gray-800 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <img src={logo} className="w-[70px]" alt="" />
        </div>

        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link to="/rooms" className="text-gray-700 hover:text-blue-500">
            Rooms
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">
            Contact Us
          </Link>

          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center text-gray-700 hover:text-blue-500"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img src={avatar} className="w-[50px]" alt="" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 z-50 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  {user.role === "user" ? (
                    <>
                      <Link
                        to="/my-bookings"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        My Bookings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="text-blue-500 font-semibold hover:text-blue-700"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
