import { React } from 'react'
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const RootLayout = ({ isAuth, setIsAuth }) => {
   const handleMenuToggle = () => {
      const navbarLinks = document.getElementsByClassName('navbar-links')[0]
      navbarLinks.classList.toggle('active')
   }

   const navigate = useNavigate()

   const handleLogout = async () => {
      try {
         const res = await fetch('https://adventurers-log-server-bw9t.onrender.com/api/auth/logout', {
            credentials: 'include'
         })
         if (res.ok) {
            navigate('/')
            console.log('logged out')
            setIsAuth(false)
         } else {
            console.log('logout error')
            console.log(res)
         }
      } catch (err) {
         console.error(`logout error: ${err}`)
      }
   }

   return (
      <div className="root-layout">
         <header className="container-fluid">
            
        {isAuth &&
            <nav className="navbar container">
               <div className="navbar-links">
                  <ul>
                     <li><NavLink to="/inventory">Inventory</NavLink></li>
                     <li><NavLink to="/spells">Spells</NavLink></li>
                     <li><a onClick={handleLogout}>Logout</a></li>
                  </ul>
               </div>
               <FontAwesomeIcon icon={faBars} size="lg" className="toggle-menu" onClick={handleMenuToggle} />
            </nav>
         }
         </header>

         <main className="container">
            <Outlet />
         </main>
      </div>
  )
}

export default RootLayout