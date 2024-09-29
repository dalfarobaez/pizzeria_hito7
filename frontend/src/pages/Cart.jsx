import React from 'react'
import precioChileno from '../utils/utils.js'
import { useContext} from "react"
import { CartContext } from '../context/CartContext.jsx'
import { UserContext } from '../context/UserContext.jsx'

const Cart = () => {
  const {cart,setCart,total,setTotal,agregaPizza} = useContext(CartContext)
  const {token} = useContext(UserContext)
  const quitarPizza = (idPizza) => {
    const newCarrito = [...cart]
    let newTotal = total + 0

    const index = newCarrito.findIndex(item => item.id === idPizza)
    newTotal -= newCarrito[index].price

    if (newCarrito[index].count > 1) {
      newCarrito[index].count -=1
    } else if (newCarrito[index].count === 1) {
      newCarrito.splice(index, 1)
    }
    
    setCart (newCarrito)
    setTotal(newTotal)
  } 

  return (
    <div>
      <div className='infoCarrito'>
        <h2>Carrito de compras</h2>
      </div>
      <div className='contenedorGaleriaCarrito'>
        {cart.map((pizza)=>
          <div key={pizza.id} className='contenedorPizzaCarrito'>
            <div className='fotoPizzaContainer'>
              {<img src = {pizza.img} alt={pizza.name} />}
            </div>
            <div>
              <h4>Pizza {pizza.name}</h4>
              <h5>{precioChileno(pizza.price)}</h5>
              <p>Cantidad: {pizza.count}</p>
            </div>
            <div className='botones-container'>
              <button className='btn btn-agregar' onClick={()=>agregaPizza(pizza.id)}>Agregar</button>
              <button className='btn btn-quitar' onClick={()=>quitarPizza(pizza.id)}>Quitar</button>
            </div>
          </div>
        )}    
      </div>
      <div className='infoCarrito'>
        <h3>Total: {precioChileno(total)}</h3>
        {
          token ? (
            <button className='btn btn-pagar'>Pagar</button>
          ) : ('')
        }
        
      </div>
    </div>
  )
}

export default Cart