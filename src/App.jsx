import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import DoDhamUttrakhand from "./pages/blogs/DoDhamUttrakhand";

const App = () => {
  return (
    <div className="main-content">
      <Router>
        <Header />
        <div className="right-content-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/do-dham-uttrakhand" element={<DoDhamUttrakhand />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
