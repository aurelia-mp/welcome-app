import React from 'react'
import { Link } from 'react-router-dom'

const FoodHome = () => {
  return (
        <div>Slider
            <li>
                <ul>Foto</ul>
                <ul><Link to='/food-drinks/horarios'>Horarios</Link></ul>
            </li>
            <li>
                <ul>Foto</ul>
                <ul>Minibar- Link</ul>
            </li>
            <li>
                <ul>Foto</ul>
                <ul>Restaurant - Link</ul>
            </li>
        </div>
  )
}

export default FoodHome