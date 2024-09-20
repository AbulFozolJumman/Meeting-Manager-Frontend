import { baseApi } from "../baseApi";

const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addRoom: builder.mutation({
      query: (data) => ({
        url: "/rooms",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Room"],
    }),
    getAllRooms: builder.query({
      query: () => ({
        url: "/rooms",
        method: "GET",
      }),
      providesTags: ["Room"],
    }),
    getRoomById: builder.query({
      query: (id) => ({
        url: `/rooms/${id}`,
        method: "GET",
      }),
      providesTags: (id) => [{ type: "Room", id }],
    }),
    deleteRoomById: builder.mutation({
      query: (id) => ({
        url: `/rooms/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Room"],
    }),
    updateRoomById: builder.mutation({
      query: ({ id, data }) => ({
        url: `/rooms/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Room"],
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
