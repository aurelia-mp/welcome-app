import React from 'react'
import { Link } from 'react-router-dom'

const CO2 = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/_MG_3823-ZoomCascada3000px.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/insulation" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="" />
        </Link>
        <Link to="/green/air" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>CO2</p>
        <p className='parrafo'>Low emissions and CO2 recovery:</p>
        <p className='parrafo'>Over 800 ever-growing plants ensure CO2 absorption</p>
        <p className='parrafo'>Ecological pruning to avoid CO2 emissions</p>
        <p className='parrafo'>Ozone safe air conditioning equipment</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default CO2