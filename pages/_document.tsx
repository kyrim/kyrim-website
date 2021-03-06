import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="prefetch"
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400italic,600italic,700italic,400,500,600,700"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            onLoad={function (this: any) {
              this.onload = null;
              this.rel = "stylesheet";
              document.body.classList.add("fontLoaded");
            }}
          />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Kyrim Steele a Fullstack Software Engineer."
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
