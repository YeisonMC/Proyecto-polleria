import React from 'react'

function Carrito() {
  return (
    <div  className='carrito'>
      <div className='carrito__productos'>
          <h2>Carrito de compras</h2>
          <div className='carrito__producto'>
              <div className='carrito__imagen'>
                  <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
              </div>
              <div className='carrito__informacion'>
                  <h3 className='carrito__informacion-titulo'>Pollo a la brasa</h3>
                  <div className='carrito__descripcion'>
                    <h3>Descripcion</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non excepturi ab recusandae ipsum vel praesentium.</p>
                  </div>
                  <div className='carrito__cantidad'>
                    <p>Cantidad</p>
                    <input type="number" min={1} />
                  </div>
                  <p className='carrito__precio'>20 lujanes</p>
                  <input className='carrito__boton' type="submit" value={"Eliminar"}/>
              </div>
          </div>
          <div className='carrito__producto'>
              <div className='carrito__imagen'>
                  <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
              </div>
              <div className='carrito__informacion'>
                  <h3 className='carrito__informacion-titulo'>Pollo a la brasa</h3>
                  <div className='carrito__descripcion'>
                    <h3>Descripcion</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non excepturi ab recusandae ipsum vel praesentium.</p>
                  </div>
                  <div className='carrito__cantidad'>
                    <p>Cantidad</p>
                    <input type="number" min={1} />
                  </div>
                  <p className='carrito__precio'>20 lujanes</p>
                  <input className='carrito__boton' type="submit" value={"Eliminar"}/>
              </div>
          </div>
      </div>
      <div className='carrito__pagar'>
        <h2>Pagar</h2>
        <p>Codigo P.</p>
        <input type="text" />
        <p>Subtotal</p>
        <p>20 Lujanes</p>
        <p>Igv</p>
        <p>2.6 Lujanes</p>
        <p>Total</p>
        <p>22.6 Lujanes</p>
        <div className='pagar__boton'>
          <input type="submit" value={"Pagar"}/>
        </div>
      </div>
    </div>
  )
}
export default Carrito