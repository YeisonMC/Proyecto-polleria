import { useState } from 'react'
import './App.css'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './Components/NavBar.jsx';
import Home from './Screens/Home.jsx';
import Locales from './Screens/Locales.jsx';
import Contacto from './Screens/Contacto.jsx';
import Carta from './Screens/Carta.jsx';
import Footer from "./Components/footer.jsx"
import Producto from './Screens/producto.jsx';
import Carrito from './Screens/Carrito.jsx';


function App() {

  return (
    <>
     <Router>
     <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Carta' element={<Carta/>}/>
        <Route path='/Locales' element={<Locales/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
        <Route path='/Producto' element={<Producto/>}/>
        <Route path='/Carrito' element={<Carrito/>}/>
      </Routes>
     </Router>
     <Footer/>

    </>
  )
}

export default App
