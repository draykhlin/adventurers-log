

const Home = () => {
   return (
      <>
      <div class="hero">
         {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1> */}
         
         <form class="signup">
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign up</button>
         </form>
         
         <form class="login">
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