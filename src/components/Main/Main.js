import React from 'react'

import Home from '../Bloques/Home'
import FoodHome from '../Bloques/Food/FoodHome'
import Minibar from '../Bloques/Food/Minibar'
import Horarios from '../Bloques/Food/Horarios'
import Restaurant from '../Bloques/Food/Restaurant'
import {Routes, Route} from 'react-router-dom'

const Main = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/food-drinks' element={<FoodHome/>} />
        <Route path='/food-drinks/horarios' element={<Horarios/>} />
        <Route path='/food-drinks/minibar' element={<Minibar/>} />
        <Route path='/food-drinks/restaurant' element={<Restaurant/>} />

    </Routes>
  )
}

export default Main