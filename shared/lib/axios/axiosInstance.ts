import axios from "axios";

export const APP_STAGE = process.env.NEXT_PUBLIC_STAGE;
const AUTH_ERROR_CODE = 401;
const SERVER_ERROR_CODE = 500;

const timeoutRequest = 1000 * 100;

export const getBaseUrl = () => {
  return { url: "https://" };
};

// const windowAvailable = () => !!(typeof window !== "undefined" && window.document.createElement);

// const getServerSideUser = (ctx) => {
//   if (!ctx || windowAvailable()) {
//     // Running on browser or not SSR request, skipping
//     return null;
//   }

//   // Find any cookies in the request
//   let cookies = {};

//   if ("req" in ctx && ctx.req && "cookies" in ctx.req) {
//     cookies = ctx.req.cookies;
//   }

//   // Return found token
//   return JSON.parse(cookies.user || null);
// };

export const ApiRequest = ({ dispatch, ctx } = { dispatch: () => null, ctx: null }) => {
  const REQUEST = getBaseUrl();
  //   const serverSideUser = getServerSideUser(ctx);

  //   const token = TokenService.getCookiesAccessToken();
  //   const user = TokenService.getUser();

  const headers = {};

  //   if (token || serverSideUser) {
  //     dispatch(setLoggedIn(true));
  //     dispatch(setUserData(user || serverSideUser));
  //     headers.Authorization = `Bearer ${token || serverSideUser.token}`;
  //   }

  const axiosInstance = axios.create({
    baseURL: REQUEST.url,
    timeout: timeoutRequest,
    headers: {
      ...headers,
    },
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      const originalRequest = error.config;
      const token = "@!#!@#@!";
      //   const token = TokenService.getCookiesAccessToken();
      // if we have token and error is 401 - try to refresh token and repeat request
      //   if (error?.response?.status === AUTH_ERROR_CODE && token && !originalRequest._retry) {
      //     originalRequest._retry = true;
      //     try {
      //       const res = AuthService.refreshToken();
      //       TokenService.setCookiesAccessToken(res.data.data.token);
      //       const newToken = TokenService.getCookiesAccessToken();
      //       axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
      //       return axiosInstance(originalRequest);
      //     } catch (error) {
      //       TokenService.removeUser();
      //       dispatch(setLoggedIn(false));
      //       dispatch(setUserData({}));
      //       dispatch(setModalState("Login"));
      //     }
      //   }

      //   if (error?.response?.status === SERVER_ERROR_CODE) {
      //     dispatch(
      //       setNotification({
      //         success: false,
      //         message: error?.response?.data?.message || "Произошла ошибка",
      //       })
      //     );
      //   }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
