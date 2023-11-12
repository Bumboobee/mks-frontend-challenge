import Product from "../product/product";
import { Section } from "./style";

const Main = () => {
  return (
    <Section>
      {Array(8)
        .fill()
        .map((_, index) => (
          <Product key={index} />
        ))}
    </Section>
  );
};

export default Main;
