import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AllProducts from "./components/allProducts/AllProducts";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/allproducts" element={<AllProducts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
