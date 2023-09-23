import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index.tsx";
import ProductList from "./pages/ProductList/index.tsx";
import Product from "./pages/Product/index.jsx";

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
