import React from 'react'
import { useState } from "react"

const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  
  const validarDatos = (e) => {
    e.preventDefault()
    if(email==='') {
      alert('Email no puede estar vacío')
    } else if (password==='') {
      alert('Password no puede estar vacío')
    } else if (password.length < 6) {
      alert('Password debe tener al menos 6 caracteres')
    } else {
      alert('Exito!')
    }
  }
  return (
    <div className='formContainer'>
      <h2>Login</h2>
      <form className="formulario" onSubmit={validarDatos}>
        <div className='elementFormContainer'>
          <div className='nombreCampo'>Email: </div>
          <div className='campo'><input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/></div>
        </div>
        <div className='elementFormContainer'>
          <div className='nombreCampo'>Password: </div>
          <div className='campo'><input type="password" name="password"  onChange={(e) => setPassword(e.target.value)}/></div>
        </div>
        <div className='enviarContainer'>
          <button type='submit' className='botonEnviar'>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Login