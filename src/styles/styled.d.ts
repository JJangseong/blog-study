import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      mainLight: string;
      mainDark: string;

      greyLight1: string;
      greyLight2: string;
      greyLight3: string;
      greyLight4: string;

      greyDark1: string;
      greyDark2: string;
      greyDark3: string;
      greyDark4: string;
    };
    shadow: {
      dark: string;
      light: string;
      card: string;
    };
    line: string;
    mainBorder: string;
  }
}
