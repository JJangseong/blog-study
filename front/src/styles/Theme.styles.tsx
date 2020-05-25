import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  color: {
    main: "#1F4B44",
    mainLight: "#2A665C",
    mainDark: "#0A3338",

    greyLight1: "#faf9f9",
    greyLight2: "#f4f2f2",
    greyLight3: "#f0eeee",
    greyLight4: "#ccc",
    

    greyDark1: "#333",
    greyDark2: "#777",
    greyDark3: "#666",
    greyDark4: "#999",
  },
  shadow: {
    dark: "0 2rem 6rem rgba(0, 0, 0, 0.3)",
    light: "0 2rem 5rem rgba(0, 0, 0, 0.06)",
    card: "0 1.5rem 4rem rgba(0, 0, 0, .15)"
  },
  line: "1px solid #f4f2f2",
  mainBorder: "2px solid #1F4B44",
};

export default theme;
