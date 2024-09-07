import React from "react";
import { motion } from "framer-motion";
import teamImage1 from "../assets/avatar.png";
import teamImage2 from "../assets/avatar.png";
import teamImage3 from "../assets/avatar.png";
import heroImage from "../assets/Hero.webp";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className="relative bg-cover bg-center h-[60vh]"
        style={{
          backgroundImage: `url(${heroImage})`,
          opacity: 0.8,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h1 className="text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-8 bg-white text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Our mission is to create a seamless, efficient, and enjoyable meeting
          room booking experience. We aim to empower professionals, teams, and
          companies by providing flexible, user-friendly, and secure solutions
          for their workspace needs.
        </p>
      </motion.section>

      <motion.section
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-8 bg-gray-100"
      >
        <h2 className="text-3xl font-semibold text-center mb-8">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={teamImage1}
              alt="Team Member 1"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-medium">John Doe</h3>
            <p className="text-gray-500">CEO & Founder</p>
            <p className="mt-4 text-gray-600">
              John has over 15 years of experience in the co-working industry
              and is passionate about creating user-centric solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={teamImage2}
              alt="Team Member 2"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-medium">Jane Smith</h3>
            <p className="text-gray-500">Head of Product</p>
            <p className="mt-4 text-gray-600">
              Jane is a product management expert with a knack for building
              solutions that solve real-world problems for users.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={teamImage3}
              alt="Team Member 3"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-medium">Michael Lee</h3>
            <p className="text-gray-500">CTO</p>
            <p className="mt-4 text-gray-600">
              Michael is a tech enthusiast who leads our development team with
              innovative ideas and a commitment to excellence.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-8 bg-white text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          It all started with a simple idea: to make booking meeting rooms easy
          and accessible for everyone. Since then, we've grown into a trusted
          platform used by thousands of businesses worldwide. Our journey has
          been fueled by passion, innovation, and a relentless pursuit of
          excellence.
        </p>
      </motion.section>
    </div>
  );
};

export default AboutUs;
