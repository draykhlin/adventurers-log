import { React, useState, useEffect } from 'react'
import { NavLink, Outlet } from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function RootLayout() {
   const [isAuthenticated, setIsAuthenticated] = useState(false)

   useEffect(() => {
      const checkAuthenticationStatus = async () => {
         const response = await fetch('/api/auth/check');
         const data = await response.json();
         setIsAuthenticated(data.isAuthenticated);
      };

      checkAuthenticationStatus();
   }, [])

   return (
      <div className="root-layout">
         <header className="container-fluid">
            {/* <div className="logo">
               <FontAwesomeIcon icon="fa-solid fa-book" className="icon" />
               <span className="logo-text">Adventurer's Log</span>
            </div> */}
            
        {isAuthenticated &&
         
            
            <nav className="container">
               <NavLink to="/inventory">Inventory</NavLink>
               <NavLink to="/spells">Spells</NavLink>
            </nav>
         }
         </header>

         <main className="container">
            <Outlet />
         </main>
      </div>
  )
}