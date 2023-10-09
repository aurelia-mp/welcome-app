import React from 'react'
import { Link } from 'react-router-dom'

const Materials = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/_MG_3823-ZoomCascada3000px.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/water" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="" />
        </Link>
        <Link to="/green/insulation" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>MATERIALS</p>
        <p className='parrafo'>Use of durable and certified materials includes:</p>
        <p className='parrafo'>FSC-certified wood</p>
        <p className='parrafo'>Use of highly durable materials like marble and porcelanato</p>
        <p className='parrafo'>Noble mix of materials: iron, stone, concrete, wood</p>
        <p className='parrafo'>Use of cotton linen</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Materials