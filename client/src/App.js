import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/index.tsx"
import Product from "./pages/Product/index.tsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
    </Routes>

  );
}

export default App;
