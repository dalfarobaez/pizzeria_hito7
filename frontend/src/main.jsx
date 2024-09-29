import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {CartProvider} from './context/CartContext.jsx'
import { UserProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <BrowserRouter>
      <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
      </UserProvider>
      </BrowserRouter>
    
  </StrictMode>,
)
