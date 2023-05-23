import { BaseQueryFn } from "@reduxjs/toolkit/query";

import Axios, { AxiosRequestConfig } from "axios";

import { ApiRequest } from "./axiosInstance";

const getRequestConfig = (args: AxiosRequestConfig) => {
  if (typeof args === "string") {
    return { url: args };
  }

  return args;
};

export const axiosBaseQuery =
  (): BaseQueryFn<AxiosRequestConfig> =>
  async (args, { dispatch, extra, signal }, extraOptions) => {
    try {
      const requestConfig = getRequestConfig(args);

      // TODO: at first need to type axiosInstance.js
      const result = await ApiRequest({
        // @ts-expect-error
        dispatch,
        // @ts-expect-error
        ctx: extra,
      })({
        ...requestConfig,
        signal,
        ...extraOptions,
      });

      return { data: result.data };
    } catch (err) {
      if (!Axios.isAxiosError(err)) {
        return {
          error: err,
        };
      }

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
