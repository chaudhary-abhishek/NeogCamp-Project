import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js"
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
    
      <Routes>
        <Route path = "/" element={<h2>Hello , Welcome to my E-Commerce Website</h2>} />
        <Route path = "/mockman" element={  <Mockman />} />
      </Routes>

    </div>
  );
}

export default App;
