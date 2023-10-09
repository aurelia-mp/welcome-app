import React from 'react'
import { Link } from 'react-router-dom'

const Plants = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/_MG_3823-ZoomCascada3000px.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/insulation" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="" />
        </Link>
        <Link to="/green" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>PLANTS</p>
        <p className='parrafo'>Palo Santo Hotel features a unique green architecture. Our walls, balconies, patios and roof are covered with plants. Our façades count with a specially designed iron structure that serves as a support for our 90-feet high vertical gardens. 
        In total, over 900 plants are spread throughout the building.</p>
        <p className='parrafo'>Besides its wonderful aesthetics presence, the plants curtains have an ecological purpose. On the one hand, vertical gardens grant the building a natural insulation. 
        On the other hand, the ever-growing plants continuously absorb our CO2 emissions.</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Plants