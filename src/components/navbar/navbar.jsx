import * as Style from "./style";
import Logo from "../../../public/logos/logo.svg";
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <Style.Navbar>
      <Style.NavbarItem>
        <img src={Logo} alt="MKS Logo" />
      </Style.NavbarItem>

      <Style.NavbarItem>
        <Style.CartContainer>
          <MdShoppingCart size={20} />
          <span>0</span>
        </Style.CartContainer>
      </Style.NavbarItem>
    </Style.Navbar>
  );
};

export default Navbar;
