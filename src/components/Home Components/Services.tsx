import {
  FaClock,
  FaCheckCircle,
  FaCalendarAlt,
  FaHeadset,
} from "react-icons/fa"; // Importing icons for visual appeal

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Our Key Services
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Enjoy seamless and efficient booking with our exclusive features.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            <FaClock className="text-4xl text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Real-Time Availability
            </h3>
            <p className="mt-2 text-gray-600">
              See live updates of room availability and book instantly.
            </p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            <FaCheckCircle className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Instant Booking Confirmation
            </h3>
            <p className="mt-2 text-gray-600">
              Receive immediate confirmation for all your bookings.
            </p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            <FaCalendarAlt className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Flexible Scheduling
            </h3>
            <p className="mt-2 text-gray-600">
              Adjust and manage your bookings according to your needs.
            </p>
          </div>
          {/* Service Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            <FaHeadset className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              24/7 Support
            </h3>
            <p className="mt-2 text-gray-600">
              Our team is always available to assist you with any queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
