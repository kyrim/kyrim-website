import { DefaultTheme } from "styled-components";

const SiteTheme: DefaultTheme = {
  borderRadius: "10px",
  boxShadow: "0px 6px 4px rgba(0, 0, 0, 0.12)",
  containerPadding: "5rem",

  colors: {
    primary: "#6E48AA",
    secondary: "#ACACAC",
    complementary: "#67A4F0",
    darkComplementary: "#505074",
    white: "#FFFFFF",
    background: "#FFFFFF",
    valid: "#27AE60",
    invalid: "#EB5757",
    disabled: "#ACACAC",
  },

  zIndex: {
    dropdown: 100,
    navbar: 800,
  },

  font: {
    baseFontFamily: `'Open Sans', sans-serif`,
    baseFontSize: "20px",
    controlFontSize: "0.875rem",

    fontWeightRegular: "400",
    fontWeightBold: "600",

    lineHeight: "1.5",

    typography: {
      header1Size: "2rem",
      header2Size: "1.5rem",
      header3Size: "1rem",
    },
  },
};

export { SiteTheme };
