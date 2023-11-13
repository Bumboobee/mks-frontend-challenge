import { useContext } from "react";
import * as Style from "./style";
import { AiTwotoneShopping } from "react-icons/ai";
import ProductContext from "../../context/productContext";
import { Skeleton } from "@mui/material";

const Product = ({ product }) => {
  const { setCurrency, addToCart } = useContext(ProductContext);
  return (
    <Style.Product>
      {product.photo ? (
        <Style.ImgProduct src={product.photo} alt={product.name} width={170} />
      ) : (
        <Skeleton variant="rounded" width="100%" height={170} />
      )}

      <Style.InfoProduct>
        <Style.MainInfo>
          {product.name ? (
            <Style.TitleProduct>{product.name}</Style.TitleProduct>
          ) : (
            <Skeleton variant="text" width={100} height={60} />
          )}

          {product.price ? (
            <Style.Price>{setCurrency(product.price)}</Style.Price>
          ) : (
            <Skeleton variant="text" width={100} height={60} />
          )}
        </Style.MainInfo>
        
        {product.description ? (
          <p>{product.description}</p>
        ) : (
          <Skeleton variant="text" width="100%" height={60} />
        )}
      </Style.InfoProduct>

      <Style.ButtonContainer>
        <Style.ButtonBuy
          onClick={() => addToCart(product)}
          disabled={!product.id}
          style={{
            opacity: product.id ? 1 : 0.7,
            cursor: product.id ? "pointer" : "not-allowed",
          }}
        >
          <AiTwotoneShopping size={20} />
          Comprar
        </Style.ButtonBuy>
      </Style.ButtonContainer>
    </Style.Product>
  );
};

export default Product;
