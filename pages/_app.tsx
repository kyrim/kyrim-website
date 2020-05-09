import App from "next/app";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "make-my-ui";
import { SiteTheme } from "../site-theme";

interface Props {}

class HouseMyStuffApp extends App<Props> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={SiteTheme}>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}

export default HouseMyStuffApp;
