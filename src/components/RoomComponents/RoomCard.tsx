import { useNavigate } from "react-router-dom";
import roomImage from "../../assets/room.webp";
import { TRoom } from "../../Types/types";

const RoomCard = ({ room }: { room: TRoom }) => {
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    navigate(`/rooms/${room._id}`);
  };
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={room.imageUrl || roomImage}
        alt={room.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{room.name}</h2>
        <p className="text-gray-600">Capacity: {room.capacity} people</p>
        <p className="text-gray-600">Price per Slot: ${room.pricePerSlot}</p>
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={handleSeeDetails}
            className="text-blue-500 hover:underline"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
