import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <Link to="/"><img className='iconFooter' src='/icons/home.png' alt="home"/></Link>
      <Link to="/food-drinks"><img className='iconFooter' src='/icons/restaurant.png' alt="restaurant"/></Link>
      <Link to="/"><img className='iconFooter' src='/icons/ecology.png' alt="green"/></Link>
      <Link to="/"><img className='iconFooter' src='/icons/placeholder.png' alt="map"/></Link>
      <Link to="/"><img className='iconFooter' src='/icons/whatsapp.png' alt="contact"/></Link>
    </div>

  )
}

export default Footer