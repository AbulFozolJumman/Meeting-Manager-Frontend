/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Assuming you have a selector to check if the user is authenticated and an action to log out
// import { isAuthenticatedSelector, logout } from "../features/auth/authSlice";

const Navbar = () => {
  // const userRole = useSelector(userRoleSelector);
  const userRole = "user";
  // const dispatch = useDispatch();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Close dropdown when user clicks outside
    const handleClickOutside = (event: any) => {
      if (isDropdownOpen && !event.target.closest(".navbar-dropdown")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // dispatch(logout());
    console.log("logout");
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img src="/src/assets/favicon.png" className="w-[70px]" alt="" />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="space-x-5 flex">
              <Link to="/">Home</Link>
              <Link to="/rooms">Rooms</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/contact-us">Contact Us</Link>
            </div>
            {userRole === "user" ? (
              <div>
                <a onClick={handleDropdownToggle}>
                  <img
                    src="/src/assets/favicon.png"
                    className="w-[70px]"
                    alt=""
                  />
                </a>
                <div className={`${isDropdownOpen ? "is-active" : ""}`}>
                  <Link to="/my-bookings">My Bookings</Link>
                  <a onClick={handleLogout}>Logout</a>
                </div>
              </div>
            ) : userRole === "admin" ? (
              <div className="navbar-item dropdown">
                <a onClick={handleDropdownToggle}>
                  <img
                    src="/src/assets/favicon.png"
                    className="w-[70px]"
                    alt=""
                  />
                </a>
                <div className={`${isDropdownOpen ? "is-active" : ""}`}>
                  <Link to="/dashboard">Dashboard</Link>
                  <a onClick={handleLogout}>Logout</a>
                </div>
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
