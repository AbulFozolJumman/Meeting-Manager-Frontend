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

  // Filter out rooms where isDeleted is true
  const filteredRooms = rooms?.data.filter((room: TRoom) => !room.isDeleted);

  return (
    <div className="mb-10 border rounded-lg p-5 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Room Management
        </h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200"
          onClick={handleAddRoom}
        >
          Create Room
        </button>
      </div>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white rounded-md shadow-md">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Room Name</th>
              <th className="px-6 py-3 text-left font-semibold">Room No.</th>
              <th className="px-6 py-3 text-left font-semibold">Floor No.</th>
              <th className="px-6 py-3 text-left font-semibold">Capacity</th>
              <th className="px-6 py-3 text-left font-semibold">
                Price Per Slot
              </th>
              <th className="px-6 py-3 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {filteredRooms?.map((room: TRoom) => (
              <tr
                key={room._id}
                className="border-b border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <td className="px-6 py-4">{room.name}</td>
                <td className="px-6 py-4">{room.roomNo}</td>
                <td className="px-6 py-4">{room.floorNo}</td>
                <td className="px-6 py-4">{room.capacity}</td>
                <td className="px-6 py-4">${room.pricePerSlot}</td>
                <td className="px-6 py-4">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleUpdateRoom(room._id)}
                      className="text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteRoom(room._id)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomManagement;
