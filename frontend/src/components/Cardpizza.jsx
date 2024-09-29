import {React, useContext} from 'react'
import precioChileno from '../utils/utils.js'
import { CartContext } from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'

const Cardpizza = ({id,name,price,ingredients,img}) => {
  const {agregaPizza} = useContext(CartContext)
  return (
        <div key={id}>
          <div className='fotoPizzaContainer'>
            <img src = {img} alt={name} />
          </div>
          <h3 className='p-2'>Pizza {name}</h3>
          <div className='ingredientesContainer'>
            <h4>🍕 Ingredientes:</h4> 
            <ul>{ingredients.map((item,i)=>(<li key={i}>{item}</li>))}</ul>            
          </div>
          <div className='priceContainer'>
            <h2>Precio: {precioChileno(price)}</h2>
            <div className='botonContainer'>
              <Link to={`/pizza/${id}`}><div className='botonVer'>Ver Más 👀</div></Link>              
              <button className='contenedorBoton' onClick={()=>agregaPizza(id)}>
                <div className='botonCompra'>Añadir 🛒</div>
              </button>
            </div>
          </div>
        </div>
  )
}

export default Cardpizza