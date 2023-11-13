import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Main from "../components/main/main";
import Footer from "../components/footer/footer";
import SideMenu from "../components/side-menu/sideMenu";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/loja");
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Main />
      <SideMenu />
      <Footer />
    </>
  );
};

export default Home;
