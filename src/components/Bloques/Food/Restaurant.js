import React from 'react'
import { Link } from 'react-router-dom'

const Restaurant = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/patioNoche.jpg" alt="patio de noche" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/food-drinks/minibar" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="" />
        </Link>
        <Link to="/food-drinks" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>CHARQUI RESTAURANT</p>
        <p className='parrafo'>Located on our premises, Charqui Restaurant offers Argentine and international food.</p>
        <p className='parrafo'>You will find their menus on their Instagram account:</p>
        <p className='parrafo'><a href="https://instagram.com/charquirestaurantok?igshid=NTc4MTIwNjQ2YQ==" rel="noreferrer" target="_blank">@charquirestaurantok</a></p>
        <p className='parrafo'>Opening hours:</p>
        <p className='parrafo'>Tuesday: 12pm-3:30pm</p>
        <p className='parrafo'>Wednesday Friday: 12pm – 3:30pm / 7pm – 12am</p>
        <p className='parrafo'>Saturday: 12pm – 12am</p>
        <p className='parrafo'>Sunday: 12pm-7pm</p>
        <p className='parrafo'>Mondays closed</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Restaurant