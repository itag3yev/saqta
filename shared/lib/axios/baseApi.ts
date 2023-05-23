import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuerty";
import { HYDRATE } from "next-redux-wrapper";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
  refetchOnMountOrArgChange: 60,
  tagTypes: ["Favourites", "PersonalDocuments"],
});

export const {
  util: { getRunningQueriesThunk },
} = baseApi;
