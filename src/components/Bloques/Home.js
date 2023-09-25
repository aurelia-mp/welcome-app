import React, {useEffect, useContext} from 'react'
import { SessionContext } from '../../context/sessionContext'
import UsefulInfo from './UsefulInfo'
import Map from './Map'
import FoodHome from './Food/FoodHome'

const Home = () => {
  const {esPrimerIngreso, ingresar} = useContext(SessionContext)

  useEffect(()=>{
    if(esPrimerIngreso === true){
      setTimeout(()=>{
        ingresar()
      }, 3000)
    }
  })


  return (
    <div>
      {!esPrimerIngreso ?
        <div>
          <img className="imagenHome" src="/Psanto04-1000px.jpg" alt="Palo Santo Hotel façade"/>
          <h1 className="upper">Discover Palo Santo</h1>
          <UsefulInfo />
          <Map />
          <FoodHome />
        </div>
      :
        <div className="prehome">
          <h1 className="upper">Palo Santo Hotel</h1>
          <div> e</div>
        </div>
      }

    </div>
  )
}

export default Home