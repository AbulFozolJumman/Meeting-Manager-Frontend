import { baseApi } from "../baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Booking"],
    }),
    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
    }),
    getBookingById: builder.query({
      query: () => ({
        url: `/my-bookings`,
        method: "GET",
      }),
    }),
    deleteBookingById: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Booking"],
    }),
    updateBookingById: builder.mutation({
      query: ({ id, data }) => ({
        url: `/bookings/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const {
  useAddBookingMutation,
  useGetAllBookingsQuery,
  useGetBookingByIdQuery,
  useDeleteBookingByIdMutation,
  useUpdateBookingByIdMutation,
} = bookingApi;
