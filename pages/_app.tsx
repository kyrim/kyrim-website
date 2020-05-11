import App from "next/app";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import { GlobalStyle as MakeMyUIGlobalStyle } from "make-my-ui";
import Color from "color";

import { SiteTheme } from "../site-theme";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;

    @media only screen and (min-width: 768px) {
        font-size: ${(props) => props.theme.font.baseFontSize};
      }
  }

  body {
    background-image: radial-gradient(${(props) =>
      Color(props.theme.colors.primary)
        .mix(Color("white"), 0.96)
        .toString()} 15%, rgba(255, 255, 255, 0) 16%),
    radial-gradient(${(props) =>
      Color(props.theme.colors.primary)
        .mix(Color("white"), 0.92)
        .toString()} 15%, rgba(255, 255, 255, 0) 16%);
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
  }
`;

interface Props {}

class MyWebsiteApp extends App<Props> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={SiteTheme}>
        <>
          <MakeMyUIGlobalStyle />
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}

export default MyWebsiteApp;
