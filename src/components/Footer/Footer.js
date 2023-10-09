import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='clear'>
      <div className='footer'>
        <Link to="/"><img className='iconFooter' src='/icons/home.png' alt="home"/></Link>
        <Link to="/food-drinks"><img className='iconFooter' src='/icons/restaurant.png' alt="restaurant"/></Link>
        <Link to="/green"><img className='iconFooter' src='/icons/ecology.png' alt="green"/></Link>
        <Link to="/"><img className='iconFooter' src='/icons/placeholder.png' alt="map"/></Link>
        <Link to="https://wa.me/5491163572374?text=Hi%20Front%20Desk,%20I'm%20contacting%20you%20from%20room%20XX"><img className='iconFooter' src='/icons/whatsapp.png' alt="contact"/></Link>
      </div>
    </div>
  )
}

export default Footer