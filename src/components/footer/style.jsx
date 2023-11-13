import styled from "styled-components";
import { colorPalet, fontSizeBase } from "./../../style/global";

export const Footer = styled.div`
  height: 35px;
  background-color: ${colorPalet.colorBaseWhite100};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colorPalet.colorBaseBlack100};
  position: fixed;
  bottom: 0;
  left: 0;

  & > p {
    font-size: ${fontSizeBase + 2}px;
    font-weight: 400;
    line-height: 14px;
  }
`;
