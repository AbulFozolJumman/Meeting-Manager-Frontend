import React from "react";
import {
  useGetAllRoomsQuery,
  useDeleteRoomByIdMutation,
} from "../../redux/api/room/roomApi";
import { TRoom } from "../../Types/types";
import { useNavigate } from "react-router-dom";

const RoomManagement: React.FC = () => {
  const { data: rooms, isLoading, error } = useGetAllRoomsQuery("");
  const [deleteRoom] = useDeleteRoomByIdMutation();
  const navigate = useNavigate();

  const handleAddRoom = () => {
    navigate("/add-room");
  };

  const handleDeleteRoom = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this room?")) {
      try {
        await deleteRoom(id).unwrap();
        alert("Room deleted successfully.");
      } catch (err) {
        console.error("Failed to delete the room: ", err);
      }
    }
  };

  const handleUpdateRoom = (id: string) => {
    navigate(`/update-room/${id}`);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading rooms: {JSON.stringify(error)}</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6">Room Management</h2>
      <button
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200"
        onClick={handleAddRoom}
      >
        Create Room
      </button>
      <table className="min-w-full bg-white rounded-md shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Room Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Room No.
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Floor No.
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Capacity
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Price Per Slot
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {rooms?.data.map((room: TRoom) => (
            <tr key={room._id} className="hover:bg-gray-100">
              <td className="px-6 py-4">{room.name}</td>
              <td className="px-6 py-4">{room.roomNo}</td>
              <td className="px-6 py-4">{room.floorNo}</td>
              <td className="px-6 py-4">{room.capacity}</td>
              <td className="px-6 py-4">${room.pricePerSlot}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleUpdateRoom(room._id)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteRoom(room._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomManagement;
