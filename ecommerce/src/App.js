import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Landing/Home";
import { Product } from "./pages/Product/Product.jsx";
import { ProductDetail } from "./pages/Product/ProductDetail";
import { Cart } from "./pages/Cart/Cart";
import { WishList } from "./pages/WishList/WishList";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/product/:productCategory" element={<Product />} />
        <Route
          path="/product/:productCategory/:productId"
          element={<ProductDetail />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </div>
  );
}

export default App;
