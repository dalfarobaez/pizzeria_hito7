import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='formContainer'>
      <h1>Tu perfil</h1>
      Usuario: correo2193@falso.com
      <div className='buttonLogoutContainer'><Link to='/'><div className='buttonLogout'>🔒 Logout</div></Link></div>
    </div>
  )
}

export default Profile