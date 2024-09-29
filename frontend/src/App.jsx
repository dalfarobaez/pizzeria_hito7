import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Pizza from "./pages/Pizza"
import Profile from "./pages/Profile"
import { Route,Routes,Navigate } from "react-router-dom"
import NotFound from "./pages/NotFound"
import { useContext } from "react"
import { UserContext } from "./context/UserContext"

function App() {
  const {token} = useContext(UserContext)
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={!token ? <Register /> : <Navigate to='/'/>} />
        <Route path="/login" element={!token ? <Login /> : <Navigate to='/'/>} />
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:pizzaId" element={<Pizza />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
