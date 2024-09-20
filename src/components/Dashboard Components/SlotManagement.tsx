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
    console.log("Create Slot");
  };

  const handleDeleteSlot = async (id: string) => {
    console.log("Deleted", id);
  };

  const handleUpdateSlot = async (id: string) => {
    console.log("Updated", id);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading slots: {JSON.stringify(error)}</p>;

  return (
    <div className="mb-10 border rounded-lg p-5 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Slot Management
        </h2>
        <button
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          onClick={handleAddSlot}
        >
          Create Slot
        </button>
      </div>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Room Name</th>
              <th className="py-3 px-6 text-left">Room No.</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Start Time</th>
              <th className="py-3 px-6 text-left">End Time</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {slots?.data.map((slot: TSlot) => (
              <tr
                key={slot._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {slot.room.name}
                </td>
                <td className="py-3 px-6 text-left">{slot.room.roomNo}</td>
                <td className="py-3 px-6 text-left">{slot.date}</td>
                <td className="py-3 px-6 text-left">{slot.startTime}</td>
                <td className="py-3 px-6 text-left">{slot.endTime}</td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleUpdateSlot(slot._id)}
                      className="text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteSlot(slot._id)}
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

export default SlotManagement;
