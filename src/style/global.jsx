import { createGlobalStyle } from "styled-components";

export const colorPalet = {
  colorBaseBlack100: "#000000",
  colorBaseGray50: "#373737",
  colorBaseGray100: "#2C2C2C",
  colorBaseWhite50: "#FFFFFF",
  colorBlueBlue700: "#0F52BA;",
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color: ${colorPalet.colorBaseWhite50};
  }
`;

export default GlobalStyle;
