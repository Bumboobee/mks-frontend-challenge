import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/productContext";
import GlobalStyle from "./style/global";
import Home from "../src/pages/home";
import NotFound from "../src/pages/notFound";

function App() {
  return (
    <ProductProvider>
      <Router>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </ProductProvider>
  );
}

export default App;
