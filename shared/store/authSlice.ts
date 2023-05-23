import { RootState } from "../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { HYDRATE } from "next-redux-wrapper";

type AuthState = {
  loggedIn: boolean;
  userData: any;
};

const initialState: AuthState = {
  loggedIn: false,
  userData: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
    },
    setUserData: (state, action: PayloadAction<object>) => {
      state.userData = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (
      state: AuthState,
      action: {
        payload: {
          auth: AuthState;
        };
      }
    ) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setLoggedIn, setUserData } = authSlice.actions;

export const selectAuthLoggedIn = (state: RootState) => state.auth.loggedIn;

export default authSlice.reducer;
