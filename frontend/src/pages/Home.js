import { NavLink, Outlet } from "react-router-dom"

const Home = () => {
   return (
      <>
      <div class="hero">
         {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1> */}
         
         
         
         <form className="login" action="/api/auth/login" method="POST">
            <h2>Login</h2>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
         </form>
         
         <NavLink to="/signup">Sign Up</NavLink>

      </div>
      
      </>
   )
}

export default Home