import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate, useParams } from "react-router-dom";
import { useAddBookingMutation } from "../redux/api/booking/bookingApi";
import { useGetAllSlotsQuery } from "../redux/api/Slot/slotApi";

const AddBooking: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { id: roomId } = useParams<{ id: string }>();

  const { data: slots, error, isLoading } = useGetAllSlotsQuery(roomId);
  const [addBooking] = useAddBookingMutation();
  const navigate = useNavigate();

  const [selectedSlot, setSelectedSlot] = useState<{
    id: string;
    date: string;
  } | null>(null);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) {
      alert("Please select a slot.");
      return;
    }

    try {
      await addBooking({
        user: user?._id,
        room: roomId,
        slots: [selectedSlot.id],
        date: selectedSlot.date,
      }).unwrap();
      alert("Booking successfully made!");
      navigate("/my-bookings", { state: { refetch: true } });
    } catch (err) {
      console.error("Failed to book the slot: ", err);
      alert("Failed to make the booking. Please try again.");
    }
  };

  if (isLoading) return <p>Loading available slots...</p>;
  if (error) return <p>Error loading slots: {JSON.stringify(error)}</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Book Your Slot</h1>

      <form onSubmit={handleBooking} className="space-y-4">
        <div>
          <label className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            value={user?.name}
            readOnly
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            value={user?.email}
            readOnly
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Available Slots</label>
          {slots?.data?.length > 0 ? (
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={selectedSlot?.id || ""}
              onChange={(e) => {
                const slot = slots.data.find(
                  (slot: any) => slot._id === e.target.value
                );
                setSelectedSlot(
                  slot ? { id: slot._id, date: slot.date } : null
                );
              }}
            >
              <option value="" disabled>
                Select a slot
              </option>
              {slots.data.map((slot: any) => (
                <option key={slot._id} value={slot._id}>
                  {slot.date} | {slot.startTime} - {slot.endTime}
                </option>
              ))}
            </select>
          ) : (
            <p className="text-gray-500">No available slots for this room.</p>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          Book
        </button>
      </form>
    </div>
  );
};

export default AddBooking;
