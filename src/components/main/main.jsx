import { useContext } from "react";
import Product from "../product/product";
import { Section } from "./style";
import ProductContext from "../../context/productContext";

const Main = () => {
  const { products } = useContext(ProductContext);

  return (
    <Section>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Section>
  );
};

export default Main;
