const Signup = () => {
   return (
      <>
         <div className="hero">
            <form className="signup" action="https://adventurers-log-server.onrender.com/api/auth/signup" method="POST">
               <h2>Sign Up</h2>
               <input type="email" name="email" placeholder="Email" required />
               <input type="password" name="password" placeholder="Password" required />
               <button type="submit">Sign up</button>
            </form>
         </div>
      </>
   )
}

export default Signup