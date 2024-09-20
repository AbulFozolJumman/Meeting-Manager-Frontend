import React from "react";
import {
  useGetAllBookingsQuery,
  useDeleteBookingByIdMutation,
  useUpdateBookingByIdMutation,
} from "../../redux/api/booking/bookingApi";
import { TBooking } from "../../Types/types";

const BookingManagement: React.FC = () => {
  const { data: bookings, isLoading, error } = useGetAllBookingsQuery("");
  const [approveBooking] = useUpdateBookingByIdMutation();
  const [rejectBooking] = useUpdateBookingByIdMutation();
  const [deleteBooking] = useDeleteBookingByIdMutation();

  const handleApprove = async (id: string) => {
    await approveBooking(id);
  };

  const handleReject = async (id: string) => {
    await rejectBooking(id);
  };

  const handleDeleteBooking = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        await deleteBooking(id).unwrap();
        alert("Booking deleted successfully.");
      } catch (err) {
        console.error("Failed to delete the booking: ", err);
      }
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading bookings: {JSON.stringify(error)}</p>;

  return (
    <div className="border rounded-lg p-5 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Booking Management
        </h2>
      </div>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="py-3 px-6 text-left">Room Name</th>
              <th className="py-3 px-6 text-left">User Name</th>
              <th className="py-3 px-6 text-left">Date & Time</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {bookings?.data.map((booking: TBooking) => (
              <tr
                key={booking._id}
                className="border-b border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <td className="py-3 px-6">{booking.room.name}</td>
                <td className="py-3 px-6">{booking.user.name}</td>
                <td className="py-3 px-6">
                  {`${booking.slots[0].date} | ${booking.slots[0].startTime} - ${booking.slots[0].endTime}`}
                </td>
                <td className="py-3 px-6">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      booking.isConfirmed === "confirmed"
                        ? "bg-green-100 text-green-600"
                        : booking.isConfirmed === "unconfirmed"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {booking.isConfirmed}
                  </span>
                </td>
                <td className="py-3 px-6">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleApprove(booking._id)}
                      className="text-green-500 hover:text-green-600 transition-colors"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(booking._id)}
                      className="text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleDeleteBooking(booking._id)}
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

export default BookingManagement;
