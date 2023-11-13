import styled from "styled-components";
import {
  colorPalet,
  spaceSystem,
  fontSizeBase,
  screenBreakPoints,
} from "../../style/global";

export const Container = styled.div`
  background: ${colorPalet.colorBlueBlue700};
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9999;
  width: 415px;
  height: 100vh;
  color: ${colorPalet.colorBaseWhite50};

  @media (max-width: ${screenBreakPoints.mobile}) {
    width: 330px;
  }
`;

export const ContainerHolder = styled.div`
  margin: ${spaceSystem.paddingSmall};

  &:nth-child(2) {
    gap: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: calc(100vh - 290px);
    padding: ${spaceSystem.paddingScaleSmall};

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${colorPalet.colorBaseWhite50};
      border-radius: 5px;
      height: 10px;
    }
  }

  &:last-child {
    display: flex;
    position: absolute;
    justify-content: space-between;
    justify-items: unset;
    bottom: 120px;
    width: -webkit-fill-available;
    font-size: ${fontSizeBase + 14}px;
    font-weight: 700;
    line-height: 15px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h2 {
    max-width: 180px;
    font-size: ${fontSizeBase + 17}px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    user-select: none;
  }
`;

export const FinishHolder = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90px;

  & > button {
    width: 100%;

    height: 90px;
    border: none;
    font-size: ${fontSizeBase + 14}px;
    font-weight: 700;
    line-height: 15px;
    font-family: "Montserrat", sans-serif;
    background-color: ${colorPalet.colorBaseBlack100};
    color: ${colorPalet.colorBaseWhite50};
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  & > button:hover {
    background-color: ${colorPalet.colorBaseWhite50};
    color: ${colorPalet.colorBaseBlack100};
  }
`;
