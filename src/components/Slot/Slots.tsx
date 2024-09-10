import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllSlotsQuery } from "../../redux/api/Slot/slotApi";

const Slots: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: slots, error, isLoading } = useGetAllSlotsQuery(id);

  if (isLoading) return <p>Loading slots...</p>;
  if (error) return <p>Error loading slots: {JSON.stringify(error)}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Available Slots({slots?.data.length})
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {slots?.data.map((slot: any, index: number) => (
          <li key={index} className="p-4 bg-white rounded-md shadow-md">
            <p>Room Name: {slot.room.name}</p>
            <p>Start Time: {slot.startTime}</p>
            <p>End Time: {slot.endTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slots;
