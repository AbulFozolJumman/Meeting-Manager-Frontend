import { Link } from "react-router-dom";

// Sample room data; replace with actual data from your backend or API
const rooms = [
  {
    id: 1,
    name: "Board Room",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URLs
    capacity: 12,
    pricePerSlot: 50,
  },
  {
    id: 2,
    name: "Conference Room",
    image: "https://via.placeholder.com/300x200",
    capacity: 20,
    pricePerSlot: 80,
  },
  {
    id: 3,
    name: "Creative Space",
    image: "https://via.placeholder.com/300x200",
    capacity: 8,
    pricePerSlot: 40,
  },
  {
    id: 4,
    name: "Private Meeting Room",
    image: "https://via.placeholder.com/300x200",
    capacity: 4,
    pricePerSlot: 30,
  },
  {
    id: 5,
    name: "Training Room",
    image: "https://via.placeholder.com/300x200",
    capacity: 15,
    pricePerSlot: 60,
  },
  {
    id: 6,
    name: "Brainstorming Room",
    image: "https://via.placeholder.com/300x200",
    capacity: 10,
    pricePerSlot: 45,
  },
];

const FeaturedRooms: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Featured Rooms
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Discover our top meeting spaces tailored for every need.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {room.name}
                </h3>
                <p className="text-gray-600">
                  Capacity: {room.capacity} people
                </p>
                <p className="text-gray-600">
                  Price Per Slot: ${room.pricePerSlot}
                </p>
                <Link
                  to={`/rooms/${room.id}`}
                  className="mt-4 inline-block px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow hover:bg-red-500"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/rooms"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-500"
          >
            See More Rooms
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
