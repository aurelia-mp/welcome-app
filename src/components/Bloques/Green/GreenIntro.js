import React from 'react'
import { Link } from 'react-router-dom'

const GreenIntro = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/FachadaP-IMG_2480-205-1000px.jpg" alt="foto greenIntro" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/water" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="" />
        </Link>
        <Link to="/green/energy" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>GREEN</p>
        <p className='parrafo'>INTRO. Palo Santo is the first urban Green hotel in Argentina. The hotel has been built to LEED standards.
         Palo Santo’s operations are environmentally friendly. We have carefully selected materials, equipment and suppliers to reduce the environmental impact of the hotel’s construction and operations.</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default GreenIntro