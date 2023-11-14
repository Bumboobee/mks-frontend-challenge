import styled from "styled-components";
import { colorPallete, fontSizeBase } from "./../../style/global";

export const Footer = styled.div`
  height: 35px;
  background-color: ${colorPallete.colorBaseWhite100};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colorPallete.colorBaseBlack100};

  & > p {
    font-size: ${fontSizeBase + 2}px;
    font-weight: 400;
    line-height: 14px;
  }
`;
