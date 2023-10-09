import React from 'react'
import { Link } from 'react-router-dom'

const Water = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/_MG_3823-ZoomCascada3000px.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/energy" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="" />
        </Link>
        <Link to="/green/materials" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>WATER</p>
        <p className='parrafo'>Rational use of water includes:</p>
        <p className='parrafo'>Rain water recovery</p>
        <p className='parrafo'>Water-efficient toilets</p>
        <p className='parrafo'>Intelligent administration of rainwater flow to the city’s sewer</p>
        <p className='parrafo'>Trickle irrigation</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Water