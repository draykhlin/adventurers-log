import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

const Signup = ({ setIsAuth }) => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const navigate = useNavigate()
   
   const handleSubmit = async (e) => {
      e.preventDefault()
      const newUser = { email, password }
      
      const res = await fetch('https://adventurers-log-server-bw9t.onrender.com/api/auth/signup', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json"
         },
         credentials: "include",
         body: JSON.stringify(newUser)
      })
      if (res.status === 200) {
         await setIsAuth(false)
         navigate('/')
      }
      //  else {
      //    setIsAuth(false)
      // }
   }
   
   return (
      <>
      <div className="hero">
         <h1>Adventurer's Log</h1>
         <FontAwesomeIcon icon={faDiceD20} className="d20-icon" />
         <div className="card">
            <form 
               className="signup"
               onSubmit={handleSubmit}
            >
               <input
                  type="email" name="email" placeholder="Email" required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  type="password" name="password" placeholder="Password" required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button type="submit">Sign Up</button>
            </form>
         </div>
      </div>
      </>
   )
}

export default Signup