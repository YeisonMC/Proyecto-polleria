import React from 'react'

function Carta() {
  return (
    <main >
      <div className='carta__container'>
      <div className='carta__titulo'>
      <h1>Nuestros Platillos</h1>
      <div>
        <select className="Ordenar" name="" id="">
          <option value="">Ordenar por ...</option>
          <option value="">Precio mas bajo</option>
          <option value="">Precio mas alto</option>
          <option value="">Relevancia</option>
        </select>
      </div>
      </div>
      <div className='carta__opciones'>
          <a href="">Pollo</a>
          <a href="">Promos</a>
          <a href="">Criollos</a>
          <a href="">Parrillas</a>
          <a href="">Ensalada</a>
          <a href="">Bebidas</a>
      </div>
      <div className='card-container'>
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
      </div>
      </div>
    </main>
  )
}

export default Carta