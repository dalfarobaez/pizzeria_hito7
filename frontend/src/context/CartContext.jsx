import { createContext, useState} from "react"
import {pizzaCart} from '../data/pizzas.js'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  
  const [cart,setCart] = useState(pizzaCart)
  const [total,setTotal] = useState (cart.map(item => item.count * item.price).reduce((suma,iteracion) => suma + iteracion,0))
  
  const agregaPizza = (idPizza) => {

    const newCarrito = [...cart]
    let newTotal = total + 0

    const index = newCarrito.findIndex(item => item.id === idPizza)
    console.log(index)
    if (index >= 0) {
      newCarrito[index].count +=1
      newTotal += newCarrito[index].price
      setTotal(newTotal)
      setCart (newCarrito)
    } else {
      const urlPizzas = 'http://localhost:5000/api/pizzas/'+idPizza
      const getDatos = async () => {
        const response = await fetch(urlPizzas)
        const datos = await response.json()
        return(datos)
      }
      (async () => {
        const pizza = await getDatos()
        console.log(newCarrito)
        console.log(pizza)
        const newPizza = {id:pizza.id,name:pizza.name,price:pizza.price,count:1,img:pizza.img}
        newCarrito.push(newPizza)
        console.log(newCarrito)
        newTotal += newPizza.price
        console.log(newTotal)
        setTotal(newTotal)
        setCart (newCarrito)
      })()
    }
  }

  return (
    <CartContext.Provider value={{cart,setCart,total,setTotal,agregaPizza}}>
      {children}
    </CartContext.Provider>
  )
}