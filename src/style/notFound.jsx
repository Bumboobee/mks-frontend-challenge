import { styled } from "styled-components";
import { colorPallete, spaceSystem } from "./global";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: ${colorPallete.colorBaseBlack100};

  & > a {
    padding: ${spaceSystem.paddingScale};
    background: ${colorPallete.colorBlueBlue700};
    border-radius: 4px;
    text-decoration: none;
    color: ${colorPallete.colorBaseWhite100};
    cursor: pointer;
    align-items: center;
    display: flex;
    gap: 10px;
    font-weight: 700;
}
  
`;
