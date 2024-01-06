import React from 'react'
import "../App.css"
function Contacto() {
  return (
      <section className='contenedor'>
        <h2>Contacto</h2>
        <form action="" className='formulario'>
          <fieldset className='fieldset'>
            <legend className='legend'>Ingrese sus datos para ponernos en contacto</legend>
              <div className='contenedor-campos'>
                  <div className='campo'>
                  <label htmlFor="">Nombre</label>
                  <input className='input-text' type="text" placeholder='Nombre'/>
                  </div>
                  <div className='campo'>
                  <label htmlFor="">Apellido</label>
                  <input className='input-text' type="text" placeholder='Apellido'/>
                  </div>
                  <div className='campo'>
                  <label htmlFor="">Telefono</label>
                  <input className='input-text' type="text" placeholder='Telefono'/>
                  </div>
                  <div className='campo'>
                  <label htmlFor="">Empresa</label>
                  <input className='input-text' type="text" placeholder='Empresa'/>
                  </div>
                  <div className='campo'>
                  <textarea name="" id="" cols="30" rows="10" placeholder='Mensaje'></textarea>
                  </div>
              </div> 
              <div className='alinear-derecha flex'>
                  <input className='boton' type="submit" />
              </div>


          </fieldset>
        </form>
      </section>
        

    
  )
}

export default Contacto