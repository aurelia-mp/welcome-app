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
        <img src="/icons/smoking.png" alt="no smoking" />
          <div className='texto'>
            <p>Smoke free hotel</p>
            <p>Including balconies</p>
          </div>
      </div>

      <div className='lineaDerecha'>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/wifi.png" alt="wifi" />
          <div className='texto'>
            <p>Wifi password</p>
            <p>bonpland</p>
          </div>
      </div>

      <div>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/bicycle.png" alt="bike" />
          <div className='texto'>
            <p>please, borrow me</p>
            <p>and ride on!</p>
          </div>
      </div>

      <div className='lineaDerecha'>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/piscina.png" alt="pool" />
          <div className='texto'>
            <p>every day</p>
            <p>from 9 AM to 9 PM</p>
            <p>8th floor</p>
          </div>
      </div>
      
      <div>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/aspiradora.png" alt="cleaning" />
          <div className='texto'>
            <p>daily housekeeping service:</p>
            <p>from 9am to 4pm</p>
          </div>
      </div>

      <div className='lineaDerecha'>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/valuables.png" alt="valuables" />
          <div className='texto'>
            <p>please, use the safe deposit box</p>
          </div>
      </div>

      <div>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/gym.png" alt="valuables" />
          <div className='texto'>
            <p>gym open daily</p>
            <p>from 9AM to 10PM</p>
          </div>
      </div>

      </div>

      <img className='imagenHome' src="/fotos/1604 - Guest Bikes - Garden - DSC_0299 - 1000px.jpg" alt="" />
    
      <div className='in'>
          <p className='palabraBike'>BIKE</p>
          <p className='textoBike'>Visit Buenos Aires using our bikes. Available at Front Desk. First come, first served basis. </p>
      </div>

      <img className='imagenHome' src="/fotos/gym.jpg" alt="" />   
      <div className='in'>
          <p className='palabraBike'>GYM</p>
          <p className='textoBike'>Are you an excercise fan? Then, never stop training. Come upstairs and get a good sweat! </p>
      </div>
      
    </div>
    </>
  )
}

export default UsefulInfo