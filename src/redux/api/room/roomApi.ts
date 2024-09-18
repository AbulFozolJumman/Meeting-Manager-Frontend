import { baseApi } from "../baseApi";

const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addRoom: builder.mutation({
      query: (data) => ({
        url: "/rooms",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Room"], // Invalidates Room cache
    }),
    getAllRooms: builder.query({
      query: () => ({
        url: "/rooms",
        method: "GET",
      }),
      providesTags: ["Room"], // Provides Room cache tag
    }),
    getRoomById: builder.query({
      query: (id) => ({
        url: `/rooms/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Room", id }], // Provides Room tag with id
    }),
    deleteRoomById: builder.mutation({
      query: (id) => ({
        url: `/rooms/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Room"], // Invalidates Room cache
    }),
    updateRoomById: builder.mutation({
      query: ({ id, data }) => ({
        url: `/rooms/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Room"], // Invalidates Room cache
    }),
  }),
});

export const {
  useAddRoomMutation,
  useGetAllRoomsQuery,
  useGetRoomByIdQuery,
  useDeleteRoomByIdMutation,
  useUpdateRoomByIdMutation,
} = roomApi;
