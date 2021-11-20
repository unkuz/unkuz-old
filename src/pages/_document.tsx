import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#000000"></meta>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/mohamedfrindi/Mouse.js/dist/css/mouse.css"
          />
          <script
            defer
            type="text/javascript"
            src="https://cdn.jsdelivr.net/gh/mohamedfrindi/Mouse.js/dist/js/mouse.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
