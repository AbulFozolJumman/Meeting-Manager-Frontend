import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from '../store';
// import { logout } from '../store/actions/authActions';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //   const { user, role } = useSelector((state: RootState) => state.auth);
  const user = false;
  const role = "user";
  //   const dispatch = useDispatch();

  const handleLogout = () => {
    // dispatch(logout());
    console.log("object");
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2 flex justify-between items-center shadow-sm">
      <div
        className="text-xl font-semibold text-gray-800 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <img src="/src/assets/icon.png" className="w-[70px]" alt="" />
      </div>

      <div className="flex items-center space-x-6">
        <a href="/" className="text-gray-700 hover:text-blue-500">
          Home
        </a>
        <a href="/rooms" className="text-gray-700 hover:text-blue-500">
          Rooms
        </a>
        <a href="/about" className="text-gray-700 hover:text-blue-500">
          About Us
        </a>
        <a href="/contact" className="text-gray-700 hover:text-blue-500">
          Contact Us
        </a>

        {user ? (
          <div className="relative">
            <button
              className="flex items-center text-gray-700 hover:text-blue-500"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img src="/src/assets/avatar.png" className="w-[50px]" alt="" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                {role === "user" ? (
                  <>
                    <a
                      href="/my-bookings"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      My Bookings
                    </a>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <a
                      href="/dashboard"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </a>
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
          <a
            href="/login"
            className="text-blue-500 font-semibold hover:text-blue-700"
          >
            Login
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
