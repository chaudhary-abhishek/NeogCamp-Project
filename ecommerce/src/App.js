import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js";
import {Routes,Route} from "react-router-dom";
import {Home}  from "./pages/Landing/Home";
import {Product} from "./pages/Product/Product.jsx"
import {ProductDetail} from "./pages/Product/ProductDetail"


function App() {
  return (
    <div className="App">
      
    
      <Routes>
        {/* <Route path = "/" element={<h1>Hello All</h1>} /> */}
        <Route path = "/" element={<Home/>} />
        <Route path = "/mockman" element={  <Mockman />} />
        <Route path="/product/:productCategory" element={<Product/>} />
        <Route path="/product/:productCategory/:productId" element={<ProductDetail/>}/>
      </Routes>

    </div>
  );
}

export default App;
