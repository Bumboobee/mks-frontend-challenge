import { createGlobalStyle } from "styled-components";

export const colorPalet = {
  colorBaseBlack100: "#000000",
  colorBaseGray50: "#373737",
  colorBaseGray100: "#2C2C2C",
  colorBaseWhite50: "#FFFFFF",
  colorBaseWhite100: "#EEEEEE",
  colorBlueBlue50: "#abcbfc",
  colorBlueBlue700: "#0F52BA;",
};

export const spaceSystem = {
  paddingLarge: "25px 65px",
  paddingSmall: "10px 20px",
  paddingScale: "7px 14px",
  paddingScaleSmall: "5px 7px"
}

export const fontSizeBase = 10;

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
