import { FaDoorOpen, FaClock, FaCheck } from "react-icons/fa"; // Importing relevant icons

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
        <p className="mt-4 text-lg text-gray-600">
          Follow these easy steps to book your perfect meeting room.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <FaDoorOpen className="text-red-600 text-4xl mb-4" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Select a Room
            </h3>
            <p className="mt-2 text-gray-600">
              Browse our variety of rooms and choose the one that suits you.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-red-600 text-4xl mb-4" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Choose Date & Time
            </h3>
            <p className="mt-2 text-gray-600">
              Pick a date and time that works best for your meeting.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaCheck className="text-red-600 text-4xl mb-4" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Confirm Booking
            </h3>
            <p className="mt-2 text-gray-600">
              Confirm your booking and receive instant confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
