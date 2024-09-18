import React, { useState, useEffect } from "react";
import {
  useGetRoomByIdQuery,
  useUpdateRoomByIdMutation,
} from "../../redux/api/room/roomApi";
import { useNavigate, useParams } from "react-router-dom";

const UpdateRoom = () => {
  const { id: roomId } = useParams<{ id: string }>();
  const { data: room, error, isLoading } = useGetRoomByIdQuery(roomId);
  const [updateRoom] = useUpdateRoomByIdMutation();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    capacity: "",
    pricePerSlot: "",
  });

  // Initialize form with existing room data
  useEffect(() => {
    if (room) {
      setFormData({
        capacity: room?.data?.capacity || "",
        pricePerSlot: room?.data?.pricePerSlot || "",
      });
    }
  }, [room]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Convert to number for `capacity` and `pricePerSlot`
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "capacity" || name === "pricePerSlot" ? Number(value) : value,
    }));
  };

  const handleUpdateRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateRoom({ id: roomId, data: formData }).unwrap();
      alert("Room updated successfully!");
      navigate("/dashboard", { state: { refetch: true } });
    } catch (err) {
      console.error("Failed to update room: ", err);
    }
  };

  if (isLoading) return <p>Loading room details...</p>;
  if (error) return <p>Error loading room details: {JSON.stringify(error)}</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-4 text-center">Update Room</h1>
      <form onSubmit={handleUpdateRoom} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Room Name
          </label>
          <input
            type="text"
            name="name"
            value={room?.data?.name || ""}
            placeholder={room?.data?.name || ""}
            readOnly
            className="mt-1 p-2 w-full border rounded-md shadow-sm bg-gray-100 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Room No.
          </label>
          <input
            type="text"
            name="roomNo"
            value={room?.data?.roomNo || ""}
            readOnly
            className="mt-1 p-2 w-full border rounded-md shadow-sm bg-gray-100 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Floor No.
          </label>
          <input
            type="number"
            name="floorNo"
            value={room?.data?.floorNo || ""}
            readOnly
            className="mt-1 p-2 w-full border rounded-md shadow-sm bg-gray-100 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Amenities
          </label>
          <input
            type="text"
            name="amenities"
            value={room?.data?.amenities?.join(", ") || ""}
            readOnly
            className="mt-1 p-2 w-full border rounded-md shadow-sm bg-gray-100 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Capacity
          </label>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price Per Slot
          </label>
          <input
            type="number"
            name="pricePerSlot"
            value={formData.pricePerSlot}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200"
        >
          Update Room
        </button>
      </form>
    </div>
  );
};

export default UpdateRoom;
