import { CloseButton } from "../../style/global";
import * as Style from "./style";

const ProductPreview = () => {
  return (
    <Style.PreviewProduct>
      <Style.CloseContainer>
        <CloseButton>X</CloseButton>
      </Style.CloseContainer>

      <Style.FirstHolder>
        <img
          src="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP860/series7-480.png"
          alt=""
        />

        <p>Apple Watch Series 4 GPS</p>
      </Style.FirstHolder>

      <Style.ProductChoices>
        <Style.SecondHolder>
          <label htmlFor="productQtd">Qtde:</label>

          <div name="productQtd">
            <span>-</span>
            <span>3</span>
            <span>+</span>
          </div>
        </Style.SecondHolder>

        <Style.ThirdHolder>
          <span>R$ 399,00</span>
        </Style.ThirdHolder>
      </Style.ProductChoices>
    </Style.PreviewProduct>
  );
};

export default ProductPreview;
