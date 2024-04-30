import { styled, createGlobalStyle } from "styled-components";

export const colorPallete = {
  colorBaseBlack100: "#000000",
  colorBaseGray50: "#373737",
  colorBaseGray100: "#2C2C2C",
  colorBaseGray10: "#BFBFBF",
  colorBaseWhite50: "#FFFFFF",
  colorBaseWhite100: "#EEEEEE",
  colorBlueBlue50: "#abcbfc",
  colorBlueBlue700: "#0F52BA;",
};

export const spaceSystem = {
  paddingLarge: "25px 65px",
  paddingSmall: "10px 20px",
  paddingScale: "7px 14px",
  paddingScaleSmall: "5px 7px",
};

export const fontSizeBase = 10;

export const screenBreakPoints = {
  mobile: "680px",
  tablet: "1024px",
  desktop: "1200px",
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color: ${colorPallete.colorBaseWhite50};
  }
`;

export const CloseButton = styled.div`
  width: 38px;
  height: 38px;
  background: ${colorPallete.colorBaseBlack100};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  font-size: ${fontSizeBase + 16}px;
  padding: 2px;
  transition: .3s ease;
  user-select: none;

  &:hover {
    color: ${colorPallete.colorBaseBlack100};
    background: ${colorPallete.colorBaseGray10};
  }
`;

export default GlobalStyle;
