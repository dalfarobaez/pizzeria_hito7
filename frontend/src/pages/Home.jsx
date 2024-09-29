import React, { useEffect,useState } from 'react'
import Header from '../components/Header'
import Cardpizza from '../components/Cardpizza'
// import {pizzas} from '../data/pizzas.js'

const urlPizzas = 'http://localhost:5000/api/pizzas'

const Home = () => {
  const [pizzas,setPizzas] = useState([])

  const getDatos = async () => {
    const response = await fetch(urlPizzas)
    const datos = await response.json()
    setPizzas(datos)
  }

  useEffect(() => {
    getDatos()
  },[])

  return (
    <div>
      <Header />
      <div className='pizzasContainer'>
        {pizzas.map((pizza) =>
        <div key={pizza.id} className="cardPizza">
          <Cardpizza
          id = {pizza.id}
          name = {pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
          />
          </div>
        )}
      </div>
      </div>
  )
}

export default Home