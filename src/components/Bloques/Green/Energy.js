import React from 'react'
import { Link } from 'react-router-dom'

const Energy = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/energy.jpeg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="" />
        </Link>
        <Link to="/green/water" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>ENERGY</p>
        <p className='parrafo'>Rational use of energy includes:</p>
        <p className='parrafo'>Use of led and energy-efficient light bulbs</p>
        <p className='parrafo'>Use of movement detectors to avoid waste</p>
        <p className='parrafo'>VRV Inverter Air Conditioning System</p>
        <p className='parrafo'>Use of high-performance insulations</p>
        <p className='parrafo'>Energy-efficient elevators</p>
        <p className='parrafo'>Use of lights out cards to save energy</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Energy