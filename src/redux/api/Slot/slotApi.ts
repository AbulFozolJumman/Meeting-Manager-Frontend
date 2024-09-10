import { baseApi } from "../baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSlot: builder.mutation({
      query: (data) => ({
        url: "/slots",
        method: "POST",
        body: data,
      }),
    }),
    getAllSlots: builder.query({
      query: (roomId?: string) => ({
        url: roomId
          ? `/slots/availability?roomId=${roomId}`
          : "/slots/availability",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddSlotMutation, useGetAllSlotsQuery } = slotApi;
