import React from "react";
import { TSlot } from "../../Types/types";
import {
  useAddSlotMutation,
  useGetAllSlotsQuery,
} from "../../redux/api/Slot/slotApi";

const SlotManagement: React.FC = () => {
  const { data: slots, isLoading, error } = useGetAllSlotsQuery("");
  const [addSlot] = useAddSlotMutation();

  const handleAddSlot = async () => {
    // Implement form submission for adding a new slot
  };

  const handleDeleteSlot = async (id: string) => {
    // if (window.confirm("Are you sure you want to delete this slot?")) {
    //   try {
    //     await deleteSlot(id).unwrap();
    //     alert("Slot deleted successfully.");
    //   } catch (err) {
    //     console.error("Failed to delete the slot: ", err);
    //   }
    // }
    console.log("Deleted");
  };

  const handleUpdateSlot = async (id: string) => {
    // Implement form submission for updating a slot
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading slots: {JSON.stringify(error)}</p>;

  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Slot Management</h2>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleAddSlot}
      >
        Create Slot
      </button>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Room No.</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {slots?.data.map((slot: TSlot) => (
            <tr key={slot._id}>
              <td>{slot.room.name}</td>
              <td>{slot.room.roomNo}</td>
              <td>{slot.date}</td>
              <td>{slot.startTime}</td>
              <td>{slot.endTime}</td>
              <td>
                <button
                  onClick={() => handleUpdateSlot(slot._id)}
                  className="text-blue-500"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteSlot(slot._id)}
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

export default SlotManagement;
