import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

const Signup = () => {
   return (
      <>
      <div className="hero">
         <h1>Adventurer's Log</h1>
         <FontAwesomeIcon icon={faDiceD20} className="d20-icon" />
         <div className="card">
            <form className="signup" action="/api/auth/signup" method="POST">
               <input type="email" name="email" placeholder="Email" required />
               <input type="password" name="password" placeholder="Password" required />
               <button type="submit">Sign up</button>
            </form>
         </div>
      </div>
      </>
   )
}

export default Signup