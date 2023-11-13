import { useContext } from "react";
import { Section } from "./style";
import Product from "../product/product";
import ProductContext from "../../context/productContext";

const Main = () => {
  const { products } = useContext(ProductContext);

  return (
    <Section data-testid="main-section">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Section>
  );
};

export default Main;
