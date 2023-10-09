import React from 'react'
import { Link } from 'react-router-dom'

const PresentacionFood = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
    <img src="/fotos/Psanto13-3000px.jpg" alt="flechaDerecha" />
    </div>

    <Link to="/food-drinks" className='linkInterno'>
      <h1 className="tituloInterno">food & drinks</h1>
    </Link>

    <div className='fotoPresentacionFood'>
    <img src="/fotos/_MG_3486-1000px.jpg" alt="flechaDerecha" />
    </div>

    <div className='contenedorExplore'>
      <Link to="/food-drinks" className='linkInterno'>
        <h2 className='explore'>+ Click to Explore</h2>
      </Link>
        <div className='lineaDerechaSinContenedor'>
            <img src="/icons/line.png" alt="flechaDerecha" />
        </div>
    </div>

    </>
  )
}

export default PresentacionFood