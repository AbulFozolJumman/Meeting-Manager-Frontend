import { baseApi } from "../baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSlot: builder.mutation({
      query: (data) => ({
        url: "/slots",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Slot"],
    }),
    getAllSlots: builder.query({
      query: (roomId?: string) => ({
        url: roomId
          ? `/slots/availability?roomId=${roomId}`
          : "/slots/availability",
        method: "GET",
      }),
      providesTags: ["Slot"],
    }),
  }),
});

export const { useAddSlotMutation, useGetAllSlotsQuery } = slotApi;
