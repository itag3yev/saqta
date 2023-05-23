import auth from "./authSlice";
import { baseApi } from "../lib/axios/baseApi";

export const rootReducer = {
  auth,
  [baseApi.reducerPath]: baseApi.reducer,
};
