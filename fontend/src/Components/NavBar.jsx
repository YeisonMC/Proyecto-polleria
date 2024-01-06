import React from 'react'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'
const links = [
    {
        name:"Inicio",
        href:"/"
    },
    {
        name:"Carta",
        href:"/Carta"
    },
    {
        name:"Locales",
        href:"/Locales"
    },
    {
        name:"Contacto",
        href:"/Contacto"
    },
    {
        name:"Producto",
        href:"/Producto"
    },

]
const NavBar = () => {
  return (

<nav>
<input type="checkbox" id='check' />
<label htmlFor="check" className='check-button'>
  <FaBars size={40}/>
  </label>
<div className='nav-navegador'>
  <div className='nav-titulo'>
    <h1>Polloncito</h1>
    <a href="index.html">
    <img src="https://d.newsweek.com/en/full/1215180/fortnite-chicken.png?w=1600&h=900&q=88&f=768a262c006567b1e64e818be2d16e6a" alt="" />
    </a>
  </div>

</div>
<div className='nav-buscador'>
<div className='nav-opciones'>
    {links.map(x => (
        <Link to= {x.href}> {x.name}</Link>
    ))}

  </div>
  <div className='nav-input'>
    <input type="text" />
    <a href="#"><AiOutlineSearch fontSize={50}/></a>
  </div>
  <div className='nav-shoppingcart'>
    <Link to = "Carrito"><AiOutlineShoppingCart fontSize={50} /></Link>
  </div>
</div>

</nav>
    )
}

export default NavBar