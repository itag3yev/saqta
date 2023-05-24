import { Provider } from "react-redux";
import { Layout } from "../widgets/layout";

import { wrapper } from "../app/store";
import "../src/globals.scss";

// TODO: need to figure out why _app.js can't resolve @/app

function MyApp({ Component, router, ...rest }) {
  const { store, props } = wrapper.useWrappedStore({
    router,
    ...rest,
  });

  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Layout>{<Component {...pageProps} />}</Layout>
    </Provider>
  );
}

export default MyApp;
