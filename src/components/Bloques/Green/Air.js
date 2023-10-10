import React from 'react'
import { Link } from 'react-router-dom'

const Air = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/deluxe.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/CO2" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="" />
        </Link>
        <Link to="/green/operations" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>AIR</p>
        <p className='parrafo'>Pure air, reducing pollution:</p>
        <p className='parrafo'>Air in rooms is filtered</p>
        <p className='parrafo'>Airflow in rooms is measured in order to avoid unnecessary conditioning</p>
        <p className='parrafo'>By using wallpapers we reduce the polluting effects of paint solvents</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Air