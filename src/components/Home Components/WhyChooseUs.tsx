import { FaCheckCircle, FaLock, FaCalendarAlt } from "react-icons/fa"; // Importing relevant icons

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Us</h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover the benefits of booking with us.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaCheckCircle className="text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Seamless Booking Experience
            </h3>
            <p className="mt-2 text-gray-600">
              Easily book your desired meeting room in just a few clicks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaLock className="text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Secure Transactions
            </h3>
            <p className="mt-2 text-gray-600">
              Your payments are encrypted and securely processed.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaCalendarAlt className="text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Flexible Scheduling
            </h3>
            <p className="mt-2 text-gray-600">
              Choose a room that fits your schedule and needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
