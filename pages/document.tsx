/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ru'>
        <Head>
          <link rel='shortcut icon' href='/favicon.ico' />
          <meta name='emotion-insertion-point' content='' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
