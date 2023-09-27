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
          <img src="/icons/line.png" alt="flechaDerecha" />
        </div>


      <div className='bloquesInternos'>
        <img src="/icons/smoking.png" alt="clock" />
          <div className='texto'>
            <p>Smoke free hotel</p>
            <p>Including balconies</p>
          </div>
      </div>

      <div className='lineaDerecha'>
          <img src="/icons/line.png" alt="flechaDerecha" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/wifi.png" alt="clock" />
          <div className='texto'>
            <p>Wifi password</p>
            <p>bonpland</p>
          </div>
      </div>

      <div>
          <img src="/icons/line.png" alt="flechaDerecha" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/bicycle.png" alt="clock" />
          <div className='texto'>
            <p>please, borrow me</p>
            <p>at front desk</p>
          </div>
      </div>

      </div>
    </div>
    </>
  )
}

export default UsefulInfo