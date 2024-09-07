import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/Hero.webp";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          opacity: 0.8,
          filter: "brightness(0.7)",
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Book Your Ideal Meeting Room with Ease
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-xl">
          Efficient, hassle-free room booking for all your meeting needs.
        </p>

        <Link
          to="/rooms"
          className="inline-block px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition duration-300 shadow-lg"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
