import React from 'react'

const UsefulInfo = () => {
  return (
    <>
    <div className='contenedorGrande'>
      <div className='contenedorGeneral'>

        <div className='in'>
          <p className='palabraIn'>IN</p>
          <img src="/icons/flechaIzquierda.png" alt="flechaIzquierda" />
          <p className='tresPM'>3 PM</p>
        </div>

        <div className='in'>
          <p className='palabraIn'>OUT</p>
          <img src="/icons/flechaDerecha.png" alt="flechaDerecha" />
          <p className='tresPM'>12 PM</p>
        </div>

        <div className='frase'>
          <h3 className='fraseIt'>We don’t want you to leave. But as the italian proverb goes: “cosa bella passa è non dura” (good things finish and don’t last).</h3>
        </div>

        <div className="lineaIzquierda">
          <img src="/icons/line.png" alt="linea" />
        </div>


      <div className='bloquesInternos'>
        <img src="/icons/smoking.png" alt="" />
          <div className='texto'>
            <p>Smoke free hotel</p>
            <p>Including balconies</p>
          </div>
      </div>

      <div className='lineaDerecha'>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/wifi.png" alt="" />
          <div className='texto'>
            <p>Wifi password</p>
            <p>bonpland</p>
          </div>
      </div>

      <div>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/bicycle.png" alt="" />
          <div className='texto'>
            <p>please, borrow me</p>
            <p>and ride on!</p>
          </div>
      </div>

      <div className='lineaDerecha'>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/piscina.png" alt="" />
          <div className='texto'>
            <p>every day</p>
            <p>from 8 AM to 10 PM</p>
          </div>
      </div>


      </div>

      <img className='imagenHome' src="/fotos/1604 - Guest Bikes - Garden - DSC_0299 - 1000px.jpg" alt="" />
    
      <div className='in'>
          <p className='palabraBike'>BIKE</p>
          <p className='textoBike'>Visit Buenos Aires using our bikes. Available at Front Desk. First come, first served basis. </p>
      </div>


    </div>
    </>
  )
}

export default UsefulInfo