import "./App.css";
import "./Responsive.css";
import Navbar from "./component/Navbar";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Reviews from "./component/Reviews";
import Service from "./component/Service";
import Footer from "./component/Footer";
import Cars from "./component/Cars";
function App() {
  return (
    <>
      <Router>
        <Navbar title="Simply cars" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/service" element={<Service />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <Reviews />
        <Footer />
      </Router>
    </>
  );
}

export default App;
