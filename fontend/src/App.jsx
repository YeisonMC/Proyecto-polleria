import { useState } from "react";
import "./App.css";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./screens/Home.jsx";
import Locales from "./screens/Locales.jsx";
import Contacto from "./screens/Contacto.jsx";
import Carta from "./screens/Carta.jsx";
import Footer from "./components/footer.jsx";
import Producto from "./screens/Producto.jsx";
import Carrito from "./screens/Carrito.jsx";
import { Prueba } from "./screens/Prueba.jsx";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Carta" element={<Prueba />} />
          {/* <Route path="/Carta" element={<Carta />} /> */}
          <Route path="/Locales" element={<Locales />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Producto" element={<Producto />} />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
