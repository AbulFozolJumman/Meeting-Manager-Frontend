import { useParams, useNavigate } from "react-router-dom";
import { useGetRoomByIdQuery } from "../../redux/api/room/roomApi";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaUserFriends, FaDollarSign } from "react-icons/fa";
import roomImage from "../../assets/room.webp";

const RoomDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: room, error, isLoading } = useGetRoomByIdQuery(id);
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/slots/${id}`);
  };

  if (isLoading) return <p>Loading room details...</p>;
  if (error) return <p>Error loading room details: {JSON.stringify(error)}</p>;

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mb-6 overflow-hidden rounded-md shadow-lg"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={room?.data.imageUrl || roomImage}
          alt={room?.data.name}
          className="w-full h-[300px] object-cover"
        />
      </motion.div>

      <motion.h1
        className="text-3xl font-bold mb-4 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        {room?.data.name}
      </motion.h1>

      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="flex items-center text-lg text-gray-700">
          <FaMapMarkerAlt className="mr-2 text-blue-500" />
          <strong>Room No.: </strong> {room?.data.roomNo}
        </p>
        <p className="flex items-center text-lg text-gray-700">
          <FaMapMarkerAlt className="mr-2 text-blue-500" />
          <strong>Floor No.: </strong> {room?.data.floorNo}
        </p>
        <p className="flex items-center text-lg text-gray-700">
          <FaUserFriends className="mr-2 text-blue-500" />
          <strong>Capacity: </strong> {room?.data.capacity} people
        </p>
        <p className="flex items-center text-lg text-gray-700">
          <FaDollarSign className="mr-2 text-blue-500" />
          <strong>Price Per Slot: </strong> ${room?.data.pricePerSlot}
        </p>

        <motion.h3
          className="mt-4 mb-2 font-semibold text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Amenities:
        </motion.h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {room?.data.amenities.map((amenity: string, index: number) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {amenity}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.button
        onClick={handleBookNow}
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Book Now
      </motion.button>
    </motion.div>
  );
};

export default RoomDetails;
