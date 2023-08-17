import { useState } from 'react'
import { NavLink, Outlet } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

const Home = ({ setIsAuth }) => {
   // login credentials
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   
   // login handler
   const handleSubmit = async (e) => {
      e.preventDefault()
      const user = { email, password }
      
      const res = await fetch('https://adventurers-log-server-bw9t.onrender.com/api/auth/login', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json"
         },
         credentials: "include",
         body: JSON.stringify(user)
      })
      if (res.status === 200) {
         setIsAuth(true)
      } else {
         setIsAuth(false)
      }
   }

   const handleGuestLogin = async () => {
      const guest = { 
         email: 'guest@adventurerslogapp.onrender.com',
         password: process.env.REACT_APP_GUEST
      }

      const res = await fetch('https://adventurers-log-server-bw9t.onrender.com/api/auth/login', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json"
         },
         credentials: "include",
         body: JSON.stringify(guest)
      })
      if (res.status === 200) {
         setIsAuth(true)
      } else {
         setIsAuth(false)
      }
   }

   return (
      <>
      <div className="hero">
         <h1>Adventurer's Log</h1>
         <FontAwesomeIcon icon={faDiceD20} className="d20-icon" />
         
         <div className="card">
            <form
               className="login-form"
               onSubmit={handleSubmit}
            >
               <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email" 
                  placeholder="Email"
               />
               <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password" 
                  placeholder="Password"
               />
            
               <button type="submit">Login</button>
            </form>

            <NavLink to="/signup" className="signup-link">Sign Up</NavLink>
            <button className="guest-login-btn" onClick={handleGuestLogin}>Login as guest</button>
         </div>
      </div>
      </>
   )
}

export default Home