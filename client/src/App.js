import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index.jsx";
import ProductList from "./pages/ProductList/index.jsx";
import Product from "./pages/Product/index.jxs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productList" element={<ProductList />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default App;
