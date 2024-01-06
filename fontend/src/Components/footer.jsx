import React from 'react'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
function footer() {
  return (
    <footer>
    <div className='footer-container'>
    <div className='footer-item'>
      <img src="https://d.newsweek.com/en/full/1215180/fortnite-chicken.png?w=1600&h=900&q=88&f=768a262c006567b1e64e818be2d16e6a" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo !</p>
    </div>
    <div className='footer-item'>
      <h3>Mapa del sitio</h3>
      <p>Carta</p>
      <p>Promociones</p>
      <p>Locoles</p>
      <p>Nosotros</p>
        <br />
        <br />
        <br />
      <h3>Legal</h3>
      <a href="">Terminos y condiciones</a>
    </div>
    <div className='footer-item'>
      <h3>Formas de Pago</h3>
      <img src="https://brand.mastercard.com/content/dam/mccom/brandcenter/brand-history/brandhistory_mc1996_100_2x.png" alt="" />
      <img src="https://static.vecteezy.com/system/resources/previews/020/975/567/non_2x/visa-logo-visa-icon-transparent-free-png.png" alt="" />
      <br />
      <br />
      <h3>Libro de reclamaciones</h3>
      <img src="https://www.esfapfranciscolaso.edu.pe/wp-content/uploads/2021/01/libro-de-reclamaciones.png" alt="" />
      <br />
      <br />
      <h3>Redes Sociales</h3>
      <a href=""><FaFacebook size={60}/></a>
      <a href=""><FaWhatsapp size={60}/></a>
    </div>
    </div>
    <p className='derechos'>Todos los derechos reservados 2023</p>
  </footer>
  )
}

export default footer