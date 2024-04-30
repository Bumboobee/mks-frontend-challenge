import { useContext } from "react";
import { CloseButton } from "../../style/global";
import PropTypes from "prop-types";
import * as Style from "./style";
import ProductContext from "../../context/productContext";

const ProductPreview = ({ product }) => {
  const { setCurrency, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(ProductContext);

  return (
    <Style.PreviewProduct>
      <Style.CloseContainer onClick={() => removeFromCart(product.id)}>
        <CloseButton>X</CloseButton>
      </Style.CloseContainer>

      <Style.FirstHolder>
        <img src={product.photo} alt={product.name} />

        <p>{product.name}</p>
      </Style.FirstHolder>

      <Style.ProductChoices>
        <Style.SecondHolder>
          <label htmlFor="productQtd">Qtde:</label>

          <div name="productQtd">
            <span onClick={() => decreaseQuantity(product.id)}>-</span>
            <span>{product.quantity}</span>
            <span
              onClick={() => {
                increaseQuantity(product.id);
              }}
            >
              +
            </span>
          </div>
        </Style.SecondHolder>

        <Style.ThirdHolder>
          <span>{setCurrency(product.price)}</span>
        </Style.ThirdHolder>
      </Style.ProductChoices>
    </Style.PreviewProduct>
  );
};


ProductPreview.PropTypes = {
  product: PropTypes.object.isRequired,
};


export default ProductPreview;
