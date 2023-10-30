import React from 'react'
import { Link } from 'react-router-dom'

const Minibar = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/Premium-Balcon-Noche-1030.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/food-drinks" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="" />
        </Link>
        <Link to="/food-drinks/restaurant" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>MINIBAR & WINE</p>
        {/* <p className='parrafo'>Your minibar is stocked with sweet and savory snacks, most of them locally sourced and including healthy-ish options.</p> */}
        <p className='parrafo'>WATER</p>
        <p className='parrafo'>In order to reduce the use of plastics, you will find canned water and a refillable glass jar. A water dispenser is available for you in the lobby.
Please note that tap water is perfectly safe to consume.</p>
        <p className='parrafo'>WINE</p>
        <p className='parrafo'>We carefully selected red wines from boutique wineries for you to taste Argentine terroirs.</p>
        <p className='parrafo'>Please, check prices on the minibar price list.</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Minibar