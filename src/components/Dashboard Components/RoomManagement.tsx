import React from "react";
import {
  useGetAllRoomsQuery,
  useAddRoomMutation,
  useDeleteRoomByIdMutation,
  useUpdateRoomByIdMutation,
} from "../../redux/api/room/roomApi";
import { TRoom } from "../../Types/types";

const RoomManagement: React.FC = () => {
  const { data: rooms, isLoading, error } = useGetAllRoomsQuery("");
  const [addRoom] = useAddRoomMutation();
  const [deleteRoom] = useDeleteRoomByIdMutation();
  const [updateRoom] = useUpdateRoomByIdMutation();

  const handleAddRoom = async () => {
    // Implement form submission for adding a new room
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

  const handleUpdateRoom = async (id: string) => {
    // Implement form submission for updating a room
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading rooms: {JSON.stringify(error)}</p>;

  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Room Management</h2>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleAddRoom}
      >
        Create Room
      </button>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Room No.</th>
            <th>Floor No.</th>
            <th>Capacity</th>
            <th>Price Per Slot</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms?.data.map((room: TRoom) => (
            <tr key={room._id}>
              <td>{room.name}</td>
              <td>{room.roomNo}</td>
              <td>{room.floorNo}</td>
              <td>{room.capacity}</td>
              <td>${room.pricePerSlot}</td>
              <td>
                <button
                  onClick={() => handleUpdateRoom(room._id)}
                  className="text-blue-500"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteRoom(room._id)}
                  className="text-red-500 ml-2"
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
