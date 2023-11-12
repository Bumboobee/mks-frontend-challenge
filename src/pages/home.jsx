import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Main from "../components/main/main";
import Footer from "../components/footer/footer";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/loja");
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
