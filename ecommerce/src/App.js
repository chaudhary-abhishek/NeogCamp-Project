import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js";
import {Route,Routes} from "react-router-dom";
import {Home}  from "./pages/home/Home.jsx"


function App() {
  return (
    <div className="App">
      
    
      <Routes>
        {/* <Route path = "/" element={<h1>Hello All</h1>} /> */}
        <Route path = "/" element={<Home/>} />
        <Route path = "/mockman" element={  <Mockman />} />
      </Routes>

    </div>
  );
}

export default App;
