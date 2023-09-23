import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/index.js"
import ProductList from "./pages/ProductList/index.js"
import Product from "./pages/Product/index.js"

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
