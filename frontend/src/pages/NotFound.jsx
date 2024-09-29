import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='formContainer'>
      <h1>Pagina no existe :(</h1>
      <h2>Error 404</h2>
      <div className='buttonLogoutContainer'><Link to='/'><div className='buttonLogout'>Presiona 🍕 aquí 🍕 para 🍕ver las 🍕 pizzas! 🍕</div></Link></div>
    </div>
  )
}

export default NotFound