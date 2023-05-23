import { configureStore } from "@reduxjs/toolkit";
import { Context, createWrapper } from "next-redux-wrapper";

import { rootReducer } from "../shared/store";
import { baseApi } from "../shared/lib/axios/baseApi";

const makeStore = (ctx: Context) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          // https://github.com/reduxjs/redux-toolkit/issues/2228#issuecomment-1095409011
          extraArgument: ctx,
        },
      }).concat(baseApi.middleware),
  });

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
