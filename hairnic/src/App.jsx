import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/bootstrap.min.css";
import "./css/style.css";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./pages/checkout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
