import styled from "styled-components";
import {
  colorPallete,
  spaceSystem,
  fontSizeBase,
  screenBreakPoints,
} from "../../style/global";

export const PreviewProduct = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  background-color: ${colorPallete.colorBaseWhite50};
  padding: ${spaceSystem.paddingSmall};
  align-items: center;
  border-radius: 8px;

  @media (max-width: ${screenBreakPoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CloseContainer = styled.div`
  position: absolute;
  top: -5px;
  right: -7px;

  & > div {
    width: 18px;
    height: 18px;
    font-size: ${fontSizeBase + 4}px;

    @media (max-width: ${screenBreakPoints.mobile}) {
      background-color: transparent;
      font-size: ${fontSizeBase + 12}px;
      color: ${colorPallete.colorBaseGray100};
      font-weight: 500;
    }
  }

  @media (max-width: ${screenBreakPoints.mobile}) {
    top: 10px;
    right: 10px;
  }
`;

export const FirstHolder = styled.div`
  display: flex;
  gap: 10px;

  & > p {
    font-size: ${fontSizeBase + 3}px;
    font-weight: 400;
    color: ${colorPallete.colorBaseGray100};
    max-width: 115px;

    @media (max-width: ${screenBreakPoints.mobile}) {
      font-size: ${fontSizeBase + 6}px;
      max-width: 100%;
      margin: 0;
    }
  }

  & > img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 8px;
    user-select: none;

    @media (max-width: ${screenBreakPoints.mobile}) {
      width: 90px;
      height: 90px;
    }
  }

  @media (max-width: ${screenBreakPoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductChoices = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  @media (max-width: ${screenBreakPoints.mobile}) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const SecondHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > label {
    font-size: ${fontSizeBase - 5}px;
    font-weight: 400;
    color: ${colorPallete.colorBaseBlack100};

    @media (max-width: ${screenBreakPoints.mobile}) {
      display: none;
    }
  }

  & > div {
    width: 50px;
    height: 13px;
    border: 1px solid ${colorPallete.colorBaseGray10};
    border-radius: 4px;
    color: ${colorPallete.colorBaseBlack100};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 0;

    & > span {
      font-size: ${fontSizeBase - 2}px;
      font-weight: 400;
      user-select: none;

      &:nth-child(2) {
        padding: 0 6px;
        border-left: 0.5px solid ${colorPallete.colorBaseGray10};
        border-right: 0.5px solid ${colorPallete.colorBaseGray10};
      }

      &:first-child,
      &:last-child {
        padding: 0 6px;
        cursor: pointer;

        @media (max-width: ${screenBreakPoints.mobile}) {
          padding: 0 14px;
        }
      }

      @media (max-width: ${screenBreakPoints.mobile}) {
        font-size: ${fontSizeBase + 12}px;
      }
    }

    @media (max-width: ${screenBreakPoints.mobile}) {
      font-size: ${fontSizeBase + 12}px;
      width: 100px;
      height: 35px;
    }
  }
`;

export const ThirdHolder = styled.div`
  color: ${colorPallete.colorBaseBlack100};
  font-size: ${fontSizeBase + 4}px;
  font-weight: 700;
  line-height: 17px;
  white-space: nowrap;

  @media (max-width: ${screenBreakPoints.mobile}) {
    font-size: ${fontSizeBase + 5}px;
    width: 100px;
    height: 41px;
    background-color: ${colorPallete.colorBaseGray50};
    border-radius: 4px;
    color: ${colorPallete.colorBaseWhite50};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
