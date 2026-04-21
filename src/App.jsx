import React from 'react'

import Header from './Components/Header'
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>   
    <Router>

      <Header/>

      <Routes>

        <Route path="/" element={<Home />}  />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
<Footer/>
    </Router>
    
    
    </>
  )
}

export default App