import styled from "styled-components";
import { colorPalet, spaceSystem, fontSizeBase } from "./../../style/global";

export const Navbar = styled.nav`
  background-color: ${colorPalet.colorBlueBlue700};
  height: 60px;
  padding: ${spaceSystem.paddingLarge};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: ${spaceSystem.paddingSmall};
  }
`;

export const NavbarItem = styled.div`
  user-select: none;
`;

export const CartContainer = styled.div`
  background-color: ${colorPalet.colorBaseWhite50};
  border-radius: 8px;
  padding: ${spaceSystem.paddingScale};
  gap: 15px;
  display: flex;
  color: ${colorPalet.colorBaseBlack100};
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  & span {
    font-weight: 700;
    font-size: ${fontSizeBase + 8}px;
  }

  &:hover {
    background-color: ${colorPalet.colorBlueBlue50};
  }
`;
