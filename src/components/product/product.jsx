import { useContext } from "react";
import { Skeleton } from "@mui/material";
import { AiTwotoneShopping } from "react-icons/ai";
import PropTypes from "prop-types";
import * as Style from "./style";
import ProductContext from "../../context/productContext";

const Product = ({ product }) => {
  const { setCurrency, addToCart, isFetching } = useContext(ProductContext);
  return (
    <Style.Product data-testid="product">
      {!isFetching ? (
        <Style.ImgProduct src={product.photo} alt={product.name} width={170} />
      ) : (
        <Skeleton variant="rounded" width="100%" height={170} />
      )}

      <Style.InfoProduct>
        <Style.MainInfo>
          {!isFetching ? (
            <Style.TitleProduct>{product.name}</Style.TitleProduct>
          ) : (
            <Skeleton variant="text" width={100} height={60} />
          )}

          {!isFetching ? (
            <Style.Price>{setCurrency(product.price)}</Style.Price>
          ) : (
            <Skeleton variant="text" width={100} height={60} />
          )}
        </Style.MainInfo>
        
        {!isFetching ? (
          <p>{product.description}</p>
        ) : (
          <Skeleton variant="text" width="100%" height={60} />
        )}
      </Style.InfoProduct>

      <Style.ButtonContainer>
        <Style.ButtonBuy
          onClick={() => addToCart(product)}
          disabled={isFetching}
          style={{
            opacity: !isFetching ? 1 : 0.7,
            cursor: !isFetching ? "pointer" : "not-allowed",
          }}
          data-testid="buy-button"
        >
          <AiTwotoneShopping size={20} />
          Comprar
        </Style.ButtonBuy>
      </Style.ButtonContainer>
    </Style.Product>
  );
};

Product.PropTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
