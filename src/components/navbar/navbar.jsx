import * as Style from "./style";
import Logo from "../../../public/logos/logo.svg";
import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import ProductContext from "../../context/productContext";

const Navbar = () => {
  const { products, openSideMenu } = useContext(ProductContext);
  return (
    <Style.Navbar>
      <Style.NavbarItem>
        <img src={Logo} alt="MKS Logo" />
      </Style.NavbarItem>

      <Style.NavbarItem>
        <Style.CartContainer onClick={() => openSideMenu()}>
          <MdShoppingCart size={20} />
          <span>{products.length}</span>
        </Style.CartContainer>
      </Style.NavbarItem>
    </Style.Navbar>
  );
};

export default Navbar;
