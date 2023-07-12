import { useState } from 'react'
import { NavLink, Outlet } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'
import { useForm, SubmitHandler } from "react-hook-form"


const Home = ({ setIsAuth }) => {
   // const { register, handleSubmit, errors } = useForm();
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
 

   // const submitForm = async (data) => {
   //   debugger;
   //    console.log("Submission starting", data);
   //    const result = await postData(data);
   //    console.log("Submitting complete", result.success);
   // };

   // const postData = async (e) => {
   //    e.preventDefault()
   //    // const data = new FormData(e.target)
   //    const res = await fetch('/api/auth/login', {
   //       method: 'POST',
   //       headers: {
   //          "Content-Type": "application/json",
   //       },
   //       body: JSON.stringify({
   //          "email": email,
   //          "password": password
   //       })
   //    })
   //    console.log(res)
   //    if (res.status === 200) {
   //       setIsAuth(true)
   //    } else {
   //       setIsAuth(false)
   //    }
   //  }

   const handleSubmit = async (e) => {
      e.preventDefault()
      const user = { email, password }

      const res = await fetch('https://adventurers-log-server.onrender.com/api/auth/login', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(user)
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
            // action="/api/auth/login"
            // method="POST"
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
         </div>

      </div>
      
      </>
   )
}

export default Home