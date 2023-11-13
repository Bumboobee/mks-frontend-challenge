import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/productContext";
import { ToastContainer } from 'react-toastify';
import GlobalStyle from "./style/global";
import Home from "../src/pages/home";
import NotFound from "../src/pages/notFound";
import { QueryClientProvider } from "react-query";
import { queryClient } from './service/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <ProductProvider>
      <Router>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    <ToastContainer />
    </ProductProvider>
    
    </QueryClientProvider>
  );
}

export default App;
