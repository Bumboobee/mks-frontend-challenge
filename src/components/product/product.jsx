import * as Style from "./style";
import { AiTwotoneShopping } from "react-icons/ai";

const Product = () => {
  return (
    <Style.Product>
      <Style.ImgProduct
        src="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP860/series7-480.png"
        alt=""
        width={170}
      />

      <Style.InfoProduct>
        <Style.MainInfo>
          <Style.TitleProduct>Apple Watch Series 4 GPS</Style.TitleProduct>
          <Style.Price>R$399</Style.Price>
        </Style.MainInfo>
        <p>Redesigned from scratch and completely revised.</p>
      </Style.InfoProduct>

      <Style.ButtonContainer>
        <Style.ButtonBuy>
          <AiTwotoneShopping size={20} />
          Comprar
        </Style.ButtonBuy>
      </Style.ButtonContainer>
    </Style.Product>
  );
};

export default Product;
