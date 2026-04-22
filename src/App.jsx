
import React from "react";
import Navbar from"./Components/Navbar";

import Hero from "./Components/Hero";
// import WhySection from "./Components/WhySection";
import Ingredients from "./Components/Ingredients";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Products from "./Components/Products"
import Product  from './Pages/Product';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
// import WhySection from "./Components/WhySectin.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>   
    <Router>

      {/* <Header/> */}

      <Routes>

        <Route path="/" element={<Home />}  />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />

        <Route path="/contact" element={<Contact />} />

 </Routes>
    </Router>
         
      <Navbar/>
      <Hero />
      {/* <Products /> */}
      {/* <WhySection /> */}
      <Ingredients/>
<Footer/>
    
    </>
  )
}

export default App