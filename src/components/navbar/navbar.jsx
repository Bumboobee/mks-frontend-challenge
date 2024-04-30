import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import * as Style from "./style";
import Logo from "../../../public/logos/logo.svg";
import ProductContext from "../../context/productContext";

const Navbar = () => {
  const { openSideMenu, cart } = useContext(ProductContext);
  return (
    <Style.Navbar>
      <Style.NavbarItem>
        <img src={Logo} alt="MKS Logo" />
      </Style.NavbarItem>

      <Style.NavbarItem>
        <Style.CartContainer onClick={() => openSideMenu()} data-testid="cart-button">
          <MdShoppingCart size={20} />
          
          <span>
            {
              cart.reduce((acc, item) => acc + item.quantity, 0)
            }
          </span>
        </Style.CartContainer>
      </Style.NavbarItem>
    </Style.Navbar>
  );
};

export default Navbar;
