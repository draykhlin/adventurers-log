import { NavLink, Outlet } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'
import { useForm, SubmitHandler } from "react-hook-form"



const Home = ({ setIsAuth }) => {
   const { register, handleSubmit, errors } = useForm();

   const submitForm = async (data) => {
     debugger;
      console.log("Submission starting", data);
      const result = await postData(data);
      console.log("Submitting complete", result.success);
   };
   const postData = async (e) => {
      e.preventDefault()
      const data = new FormData(e.target)
      debugger;
      const res = await fetch('/api/auth/login', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            'email': 'draykhlin@gmail.com',
            'password': 'iXTw2*c#34W#Sb!k'
         })
      })
      debugger;
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
            onSubmit={postData}
         >
         
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
         </form>

         <NavLink to="/signup" className="signup-link">Sign Up</NavLink>
         </div>

      </div>
      
      </>
   )
}

export default Home