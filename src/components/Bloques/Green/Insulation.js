import React from 'react'
import { Link } from 'react-router-dom'

const Insulation = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/terrace.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/materials" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="" />
        </Link>
        <Link to="/green/CO2" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>INSULATION</p>
        <p className='parrafo'>Boosting insulation:</p>
        <p className='parrafo'>Double-glazed windows with internal air chamber</p>
        <p className='parrafo'>Insulated and soundproof floors (use of Isocrettechnology)</p>
        <p className='parrafo'>Insulated and soundproof walls (using Fiberglass and multiple wall layers)</p>
        <p className='parrafo'>Plants insulate the building roof</p>
        <p className='parrafo'>Vine plants insulate the building sides</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Insulation