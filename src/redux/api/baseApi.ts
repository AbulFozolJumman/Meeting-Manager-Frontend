import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://meeting-manager-backend-seven.vercel.app/",
  }),
  endpoints: () => ({}),
});
