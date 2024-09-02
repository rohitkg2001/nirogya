import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/bootstrap.min.css";
import "./css/style.css";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
