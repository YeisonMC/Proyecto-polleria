import React from 'react'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
function Home() {
  return (
<main>
<div className='ImageContent'>
      <section className='ImageContent-section' id='itemSection-1'>
        <div className='ImageContent-images'>
          <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
        </div>
        <div className='ImageContent-buttons'> 
        <a href="#itemSection-3"><FaChevronCircleLeft size={70}/></a>
        <a href="#itemSection-2"><FaChevronCircleRight size={70}/></a>
        </div>
      </section>
      <section className='ImageContent-section' id='itemSection-2'>
        <div className='ImageContent-images'>
          <img src="https://imgmedia.buenazo.pe/1200x660/buenazo/original/2023/07/14/64ac3e8c599470217672a906.jpg" alt="" />
        </div>
        <div className='ImageContent-buttons'> 
        <a href="#itemSection-1"><FaChevronCircleLeft size={70}/></a>
        <a href="#itemSection-3"><FaChevronCircleRight size={70}/></a>
        </div>
      </section>
      <section className='ImageContent-section' id='itemSection-3'>
        <div className='ImageContent-images'>
          <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
        </div>
        <div className='ImageContent-buttons'> 
        <a href="#itemSection-2"><FaChevronCircleLeft size={70}/></a>
        <a href="#itemSection-1"><FaChevronCircleRight size={70}/></a>
        </div>
      </section>
      </div>
        <div className='container-main'>
        <h2>Nuestros Platillos</h2>
        <section className='card-container'>
            <div className='card-item'>
              <div className='card-image'>
              <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
              </div>
                <p className='product-name'>Parrillas Especiales</p>
                <p className='product-price'>precio: 20</p>
                <button className="product-button">Comprar</button>
            </div>
            <div className='card-item'>
              <div className='card-image'>
              <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
              </div>
                <p className='product-name'>Parrillas Especiales</p>
                <p className='product-price'>precio: 20</p>
                <button className="product-button">Comprar</button>
            </div>
            <div className='card-item'>
              <div className='card-image'>
              <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
              </div>
                <p className='product-name'>Parrillas Especiales</p>
                <p className='product-price'>precio: 20</p>
                <button className="product-button">Comprar</button>
            </div>
            <div className='card-item'>
              <div className='card-image'>
              <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
              </div>
                <p className='product-name'>Parrillas Especiales</p>
                <p className='product-price'>precio: 20</p>
                <button className="product-button">Comprar</button>
            </div>
            <div className='card-item'>
              <div className='card-image'>
              <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
              </div>
                <p className='product-name'>Parrillas Especiales</p>
                <p className='product-price'>precio: 20</p>
                <button className="product-button">Comprar</button>
            </div>
            <div className='card-item'>
              <div className='card-image'>
              <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
              </div>
                <p className='product-name'>Parrillas Especiales</p>
                <p className='product-price'>precio: 20</p>
                <button className="product-button">Comprar</button>
            </div>
           
        </section>
        </div> 
        <div className='container-main'>
        <h2>Promociones</h2>
        <section className='card-container'>
        <div className='card-item'>
              <div className='card-image'>
              <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
              </div>
                <p className='product-name'>Parrillas Especiales</p>
                <p className='product-price'>precio: 20</p>
                <button className="product-button">Comprar</button>
            </div>
        <div className='card-item'>
              <div className='card-image'>
              <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
              </div>
                <p className='product-name'>Parrillas Especiales</p>
                <p className='product-price'>precio: 20</p>
                <button className="product-button">Comprar</button>
            </div>
        <div className='card-item'>
              <div className='card-image'>
              <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
              </div>
                <p className='product-name'>Parrillas Especiales</p>
                <p className='product-price'>precio: 20</p>
                <button className="product-button">Comprar</button>
            </div>
        <div className='card-item'>
              <div className='card-image'>
              <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
              </div>
                <p className='product-name'>Parrillas Especiales</p>
                <p className='product-price'>precio: 20</p>
                <button className="product-button">Comprar</button>
            </div>
        <div className='card-item'>
              <div className='card-image'>
              <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
              </div>
                <p className='product-name'>Parrillas Especiales</p>
                <p className='product-price'>precio: 20</p>
                <button className="product-button">Comprar</button>
            </div>
        <div className='card-item'>
              <div className='card-image'>
              <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
              </div>
                <p className='product-name'>Parrillas Especiales</p>
                <p className='product-price'>precio: 20</p>
                <button className="product-button">Comprar</button>
            </div>
        </section>  {/* card-container */}
        </div>   {/* container-main */}

      </main>
  )
}

export default Home