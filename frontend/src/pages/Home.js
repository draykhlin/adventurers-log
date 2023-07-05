import { NavLink, Outlet } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
   return (
      <>
      <div className="hero">
         <h1>Adventurer's Log</h1>
         <FontAwesomeIcon icon={faDiceD20} className="d20-icon" />
         
         <div className="card">
         <form className="login-form" action="/api/auth/login" method="POST">
            {/* <h2>Login</h2> */}
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