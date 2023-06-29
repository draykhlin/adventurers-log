

const Home = () => {
   return (
      <>
      <div class="hero">
         {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1> */}
         
         <form className="signup" action="/api/auth/signup" method="POST">
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign up</button>
         </form>
         
         <form className="login" action="/login" method="POST">
            <h2>Login</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
         </form>
      </div>
      
      </>
   )
}

export default Home