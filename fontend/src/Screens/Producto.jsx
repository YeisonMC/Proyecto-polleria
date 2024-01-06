import React from 'react'

function Producto() {
  return (
    <section className='producto'>
        <div className='producto__imagen'>
            <img src="https://mipolloalabrasa.com/wp-content/uploads/2021/06/1-pollo-a-la-brasa.png" alt="" />
        </div>
        <div className='producto__compra'>
            <div className='producto__informacion'>
                <h2 className='producto__titulo'>Producto</h2>
                <h3>Descripcion</h3>
                <p className='producto__descripcion'>loren xdxdxd hola amasd madi asodnoa asmdaond asdnasdpasndds sdsañldmalsdmalpsdmasdmaldm</p>
                <p>Cantidad</p>
                <input type="number" min={1} />
                <p>Precio</p>
                <p>202 lujanes</p>
               <input className="producto__boton " type="submit" value={"Comprar"}/>  

            </div>
        </div>
        
    </section>
  )
}
export default Producto