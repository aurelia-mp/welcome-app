import React from 'react'
import { Link } from 'react-router-dom'

const Operations = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/operations.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/air" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="" />
        </Link>
        <Link to="/green/plants" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>OPERATIONS</p>
        <p className='parrafo'>Reducing impact through service and operations:</p>
        <p className='parrafo'>Waste separation</p>
        <p className='parrafo'>Borrow-a-bike program</p>
        <p className='parrafo'>Certified low polluting laundry</p>
        <p className='parrafo'>Green cleaning products</p>
        <p className='parrafo'>Green laundry detergent</p>
        <p className='parrafo'>Eco-friendly amenities</p>
        <p className='parrafo'>Reduction of printed communication material</p>
        <p className='parrafo'>Eco supplies: pencils from renewable forests, biodegradable ink…</p>
        <p className='parrafo'>Our web-hosting provider has green credentials</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Operations