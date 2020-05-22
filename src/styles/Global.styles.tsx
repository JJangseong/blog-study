import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
  ${reset};
  a{
      text-decoration:none;
      color:inherit;
      cursor: pointer;
      box-sizing: border-box;
  }
  *{
      box-sizing:boerder-box;
  }
  body{
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 14px;
  }
  html {
    font-size: 62.5%;
  }
  input {
    border: none;

    &:active,
    &:focus {
      outline: none;
    }
  }

  #disqus_thread {
    width: 100%;
  }

  #main-nav {
    padding-left: 1rem;
    padding-right: 1rem;
  }


  /* Monitors with screen width 1366px or above */

  h1 { font-size: 36px; }

  /*  Tablets in landscape mode, older desktop monitors */

  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    h1 { font-size: 32px; }
  }

  /*  Tablets in portrait mode, large display smartphones landscape mode */

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    h1 { font-size: 28px; }
  }

  /*  Smartphones in landscape mode */

  @media only screen and (min-width: 421px) and (max-width: 767px) {
    h1 { font-size: 24px; }
  }

  /*  Smartphones in portrait mode  */

  @media only screen and (max-width: 420px) {
    h1 { font-size: 20px; }
  }
`;
export default GlobalStyles;
