import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return <div>Home page</div>;
};

export default Home;
