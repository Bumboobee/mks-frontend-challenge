import { useContext } from "react";
import { CloseButton } from "../../style/global";
import ProductContext from "../../context/productContext";
import ProductPreview from "../product-preview/productPreview";
import * as Style from "./style";
import { motion } from "framer-motion";

const SideMenu = () => {
  const { closeSideMenu, menuIsOpen } = useContext(ProductContext);

  return (
    <Style.Container as={motion.div} initial={{ translateX: "100%" }} animate={{ translateX: menuIsOpen ? "0%" : "100%" }} transition={{ duration: 0.5 }}>
      <div>
        <Style.ContainerHolder>
          <Style.Header>
            <h2>Carrinho de compras</h2>

            <CloseButton onClick={() => closeSideMenu()}>X</CloseButton>
          </Style.Header>
        </Style.ContainerHolder>

        <Style.ContainerHolder>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <ProductPreview key={index} />
            ))}
        </Style.ContainerHolder>

        <Style.ContainerHolder>
          <div>Subtotal</div>
          <div>R$ 0,00</div>
        </Style.ContainerHolder>
      </div>

      <Style.FinishHolder>
        <button>Finalizar Compra</button>
      </Style.FinishHolder>
    </Style.Container>
  );
};

export default SideMenu;
