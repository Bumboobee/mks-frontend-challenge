import { useContext } from "react";
import { CloseButton } from "../../style/global";
import { motion, AnimatePresence  } from "framer-motion";
import ProductContext from "../../context/productContext";
import ProductPreview from "../product-preview/productPreview";
import * as Style from "./style";

const SideMenu = () => {
  const { closeSideMenu, menuIsOpen, cart, setCurrency, total, finishOrder } = useContext(ProductContext);

  return (
    <Style.Container
    data-testid="side-menu"
    data-ishide={!menuIsOpen}
      as={motion.div}
      initial={{ translateX: "100%" }}
      animate={{ translateX: menuIsOpen ? "0%" : "100%" }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <Style.ContainerHolder>
          <Style.Header>
            <h2>Carrinho de compras</h2>

            <CloseButton onClick={() => closeSideMenu()} data-testid="close-button">X</CloseButton>
          </Style.Header>
        </Style.ContainerHolder>

        <Style.ContainerHolder>
          <AnimatePresence>
            {cart.length === 0 && (
              <Style.EmptyCart>Nenhum produto no carrinho</Style.EmptyCart>
            )}

            {cart.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ProductPreview product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </Style.ContainerHolder>

        <Style.ContainerHolder>
          <div>Total: </div>
          <div>{setCurrency(total)}</div>
        </Style.ContainerHolder>
      </div>

      <Style.FinishHolder>
        <button onClick={() => finishOrder()}>Finalizar Compra</button>
      </Style.FinishHolder>
    </Style.Container>
  );
};

export default SideMenu;
