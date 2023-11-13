import { Link } from "react-router-dom";
import * as Style from "../style/notFound";
import { FaArrowLeft } from 'react-icons/fa';
import image from "../../public/404.png";


const NotFound = () => {
  return (
    <Style.Container>
      <img src={image} alt="" srcset="" />
      Page not found, go back
      <Link to="/">
        <FaArrowLeft />
         Loja</Link>
    </Style.Container>
  );
};

export default NotFound;
