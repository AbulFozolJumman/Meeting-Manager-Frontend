import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icon.png";
import avatar from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/features/userSlice";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      dispatch(logout());
    }
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
    <header className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm w-full z-50">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-800 cursor-pointer">
          <Link to="/">
            <img src={logo} className="w-16" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-500 transition">
            Home
          </Link>
          <Link
            to="/rooms"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            Rooms
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            Contact Us
          </Link>

          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center focus:outline-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                title={user?.name}
              >
                <img
                  src={avatar}
                  className="w-10 h-10 rounded-full border-2 border-gray-300"
                  alt="User Avatar"
                />
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
              className="text-blue-500 font-semibold hover:text-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            className="text-gray-700 hover:text-blue-500 transition focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="px-4 py-3 space-y-2">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/rooms"
              className="block text-gray-700 hover:text-blue-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Rooms
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-blue-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            {user ? (
              <>
                {user.role === "user" ? (
                  <Link
                    to="/my-bookings"
                    className="block text-gray-700 hover:text-blue-500 transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    My Bookings
                  </Link>
                ) : (
                  <Link
                    to="/dashboard"
                    className="block text-gray-700 hover:text-blue-500 transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleLogout();
                  }}
                  className="block w-full text-left text-gray-700 hover:text-blue-500 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block text-blue-500 font-semibold hover:text-blue-700 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
