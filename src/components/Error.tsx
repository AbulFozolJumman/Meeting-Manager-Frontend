import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { FaHome, FaSignInAlt } from "react-icons/fa";

const Error: React.FC = () => {
  const error: any = useRouteError();
  console.log("Error:", error);
  const navigate = useNavigate();

  const handleGoHome = () => navigate("/");
  const handleLogin = () => navigate("/login");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Error Message */}
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4 animate-pulse">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {error?.message || "Oops! Page Not Found"}
        </h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleGoHome}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 transition duration-200"
          >
            <FaHome className="mr-2" />
            Home
          </button>
          <button
            onClick={handleLogin}
            className="flex items-center px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-500 transition duration-200"
          >
            <FaSignInAlt className="mr-2" />
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
