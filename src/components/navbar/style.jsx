import styled from "styled-components";
import { colorPallete, spaceSystem, fontSizeBase } from "./../../style/global";

export const Navbar = styled.nav`
  background-color: ${colorPallete.colorBlueBlue700};
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 10px 0;
  z-index: 1000;
`;

export const NavbarItem = styled.div`
  user-select: none;
  margin: ${spaceSystem.paddingLarge};

  @media (max-width: 768px) {
    margin: ${spaceSystem.paddingSmall};
  }
`;

export const CartContainer = styled.div`
  background-color: ${colorPallete.colorBaseWhite50};
  border-radius: 8px;
  padding: ${spaceSystem.paddingScale};
  gap: 15px;
  display: flex;
  color: ${colorPallete.colorBaseBlack100};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  width: 65px;

  & span {
    font-weight: 700;
    font-size: ${fontSizeBase + 8}px;
  }

  &:hover {
    background-color: ${colorPallete.colorBlueBlue50};
  }
`;
