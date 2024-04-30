import styled from "styled-components";
import { colorPallete, spaceSystem, fontSizeBase } from "./../../style/global";

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  position: relative;
  max-width: 230px;
  width: 220px;
  overflow: hidden;
  justify-content: space-between;
  transition: .4s;

  @media (max-width: 1180px) {
    width: 250px;
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 10px 20px 0 rgba(43, 43, 43, 0.2);
  }
`;

export const ImgProduct = styled.img`
  align-self: center;
  user-select: none;
`;

export const InfoProduct = styled.div`
  padding: 14px;

  & > p {
    margin: 10px 0 0 0;
    font-size: ${fontSizeBase}px;
    font-weight: 300;
    line-height: 12px;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;

export const TitleProduct = styled.h3`
  font-size: ${fontSizeBase + 6}px;
  font-weight: 400;
  margin-bottom: 0;
  line-height: 19px;
`;

export const Price = styled.span`
  font-size: ${fontSizeBase + 5}px;
  font-weight: 700;
  padding: ${spaceSystem.paddingScaleSmall};
  border-radius: 5px;
  background-color: ${colorPallete.colorBaseGray50};
  color: ${colorPallete.colorBaseWhite50};
`;

export const ButtonContainer = styled.div`
  position: relative;
  height: 30px;
`;

export const ButtonBuy = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colorPallete.colorBlueBlue700};
  border: none;
  color: ${colorPallete.colorBaseWhite50};
  font-weight: 600;
  font-size: ${fontSizeBase + 4}px;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  gap: 14px;
  display: flex;
  cursor: pointer;
  transition: 0.4s;
  user-select: none;

  &:hover {
    background-color: ${colorPallete.colorBlueBlue50};
    color: ${colorPallete.colorBaseBlack100};
  }
`;
