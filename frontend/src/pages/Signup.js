import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

const handleSubmit = () => {
   const navigate = useNavigate
   navigate('/inventory')
}

const Signup = () => {
   return (
      <>
      <div className="hero">
         <h1>Adventurer's Log</h1>
         <FontAwesomeIcon icon={faDiceD20} className="d20-icon" />
         <div className="card">
            <form className="signup" action="https://adventurers-log-server.onrender.com/api/auth/signup" method="POST" onSubmit={handleSubmit}>
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