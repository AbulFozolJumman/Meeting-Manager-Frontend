import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddRoomMutation } from "../../redux/api/room/roomApi";

const CreateRoom: React.FC = () => {
  const [name, setName] = useState("");
  const [roomNo, setRoomNo] = useState<number | undefined>(undefined);
  const [floorNo, setFloorNo] = useState<number | undefined>(undefined);
  const [capacity, setCapacity] = useState<number | undefined>(undefined);
  const [pricePerSlot, setPricePerSlot] = useState<number | undefined>(
    undefined
  );
  const [amenities, setAmenities] = useState("");
  const [createRoom, { isLoading, error }] = useAddRoomMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      roomNo === undefined ||
      floorNo === undefined ||
      capacity === undefined ||
      pricePerSlot === undefined
    ) {
      alert("Please fill in all fields correctly.");
      return;
    }

    try {
      await createRoom({
        name,
        roomNo,
        floorNo,
        capacity,
        pricePerSlot,
        amenities: amenities.split(",").map((amenity) => amenity.trim()),
      }).unwrap();

      alert("Room created successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Failed to create room: ", err);
      alert("Failed to create room!");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create Room</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Room Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="roomNo">
            Room Number
          </label>
          <input
            type="number"
            id="roomNo"
            value={roomNo}
            onChange={(e) => setRoomNo(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="floorNo">
            Floor Number
          </label>
          <input
            type="number"
            id="floorNo"
            value={floorNo}
            onChange={(e) => setFloorNo(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="capacity">
            Capacity
          </label>
          <input
            type="number"
            id="capacity"
            value={capacity}
            onChange={(e) => setCapacity(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="pricePerSlot">
            Price Per Slot
          </label>
          <input
            type="number"
            id="pricePerSlot"
            value={pricePerSlot}
            onChange={(e) => setPricePerSlot(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="amenities">
            Amenities (Comma Separated)
          </label>
          <input
            type="text"
            id="amenities"
            value={amenities}
            onChange={(e) => setAmenities(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Whiteboard, Projector"
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Room"}
          </button>

          {error && (
            <p className="text-red-500 text-sm">Failed to create room!</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateRoom;
