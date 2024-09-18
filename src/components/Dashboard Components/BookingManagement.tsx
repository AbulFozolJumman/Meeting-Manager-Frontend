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
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Booking Management</h2>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th>Room Name</th>
            <th>User Name</th>
            <th>Date & Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings?.data.map((booking: TBooking) => (
            <tr key={booking._id}>
              <td>{booking.room.name}</td>
              <td>{booking.user.name}</td>
              <td>{`${booking.slots[0].date} | ${booking.slots[0].startTime} - ${booking.slots[0].endTime}`}</td>
              <td>{booking.isConfirmed ? "Confirmed" : "Unconfirmed"}</td>
              <td>
                <button
                  onClick={() => handleApprove(booking._id)}
                  className="text-green-500"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(booking._id)}
                  className="text-orange-500 ml-2"
                >
                  Reject
                </button>
                <button
                  onClick={() => handleDeleteBooking(booking._id)}
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

export default BookingManagement;
