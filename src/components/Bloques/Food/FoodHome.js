import React from 'react'
import { Link } from 'react-router-dom'

const FoodHome = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/_MG_3486-1000px.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/food-drinks/restaurant" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="" />
        </Link>
        <Link to="/food-drinks/minibar" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>BREAKFAST</p>
        <p className='parrafo'>Our buffet breakfast is served in the restaurant (ground floor).</p>
        <p className='parrafo'>Breakfast hours:</p>
        <p className='parrafo'>Monday through Friday: 7-10:30</p>
        <p className='parrafo'>Saturday, Sunday and Banking Holidays: 8-11</p>
        <p className='parrafo'>EARLY BREAKFAST</p>
        <p className='parrafo'>If you have an early flight, we will be happy to arrange an early reduced breakfast. Please contact our Front Desk on the previous day. Don't leave with an empty belly :)</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default FoodHome