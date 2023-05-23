import { AppProps } from "next/dist/shared/lib/router/router";
import { Router } from "next/router";
import { ReactElement } from "react";

import { Provider } from "react-redux";

import { wrapper } from "../app/store";
import "../src/globals.scss";

// TODO: need to figure out why _app.js can't resolve @/app

function MyApp({ Component, router, ...rest }) {
  const { store, props } = wrapper.useWrappedStore({
    router,
    ...rest,
  });

  const { pageProps } = props;

  return <Provider store={store}>{<Component {...pageProps} />}</Provider>;
}

export default MyApp;
