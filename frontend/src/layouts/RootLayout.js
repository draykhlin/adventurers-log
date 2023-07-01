import { React, useState, useEffect } from 'react'
import { NavLink, Outlet } from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RootLayout = ({ isAuth }) => {
   // const [isAuth, setisAuth] = useState(false)

   // useEffect(() => {
   //    const checkAuthStatus = async () => {
   //       const response = await fetch('/api/auth/check');
   //       const data = await response.json();
   //       setisAuth(data.isAuth);
   //    };

   //    checkAuthStatus();
   // }, [])

   return (
      <div className="root-layout">
         <header className="container-fluid">
            {/* <div className="logo">
               <FontAwesomeIcon icon="fa-solid fa-book" className="icon" />
               <span className="logo-text">Adventurer's Log</span>
            </div> */}
            
        {isAuth &&
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

export default RootLayout