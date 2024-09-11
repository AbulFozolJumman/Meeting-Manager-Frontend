import { useGetBookingByIdQuery } from "../redux/api/booking/bookingApi";

const MyBooking = () => {
  const { data, error, isLoading } = useGetBookingByIdQuery(undefined);

  if (isLoading) return <p>Loading booking details...</p>;
  if (error)
    return <p>Error loading booking details: {JSON.stringify(error)}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        My Bookings ({data?.data?.length || 0})
      </h1>
      {data?.data?.length > 0 ? (
        <ul className="space-y-4">
          {data.data.map((booking: any) => (
            <li
              key={booking._id}
              className="p-4 bg-white rounded-md shadow-md flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{booking.room.name}</h2>
                <p className="text-gray-600">
                  <strong>Date:</strong> {booking.date}
                </p>
                {booking.slots.length > 0 && (
                  <p className="text-gray-600">
                    <strong>Time:</strong> {booking.slots[0].startTime} -{" "}
                    {booking.slots[0].endTime}
                  </p>
                )}
              </div>
              <div className="text-right">
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    booking.isConfirmed === "confirmed"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {booking.isConfirmed.charAt(0).toUpperCase() +
                    booking.isConfirmed.slice(1)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No bookings found.</p>
      )}
    </div>
  );
};

export default MyBooking;
