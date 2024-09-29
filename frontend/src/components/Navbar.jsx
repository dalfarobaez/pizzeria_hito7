import {React, useContext} from 'react'
import precioChileno from '../utils/utils.js'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext.jsx'
import { UserContext } from '../context/UserContext.jsx'

const Navbar = () => {
  const {total} = useContext(CartContext)
  const {token,logout} = useContext(UserContext)
  let buttonA = ''
  let buttonB = ''
  let linkA = ''
  let linkB = ''
  if (token==false) {
    buttonA = '🔐 Login'
    buttonB = '🔐 Register'
    linkA = '/login'
    linkB = '/register'
  } else {
    buttonA = '🔓 Profile'
    buttonB = '🔒 Logout'
    linkA = '/profile'
    linkB = null
  }
  return (
    <div className='Navbar'>
      <div className='buttonsNavContainer'>
        <div className='tittleContainer'>Pizzería Mamma Mia!</div>
        <Link to="/"><div className='buttonNavbar'>🍕 Home</div></Link>
        <Link to={linkA}><div className='buttonNavbar'>{buttonA}</div></Link>

        {
          linkB ? (
            <Link to={linkB}><div className='buttonNavbar'>{buttonB}</div></Link>
          ) : (
            <button className='buttonNavbar' onClick={()=>logout()}>
              <div className='containerLogout'>{buttonB}</div>
            </button>
          )
        }

        
      
      </div>
      <div>
        <Link to='/cart'><div className='cartContainer'>🛒 Total: {precioChileno(total)}</div></Link>
      </div>
    </div>
  )
}

export default Navbar