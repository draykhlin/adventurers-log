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

   const handleLogout = async () => {
      try {
         const res = await fetch('/api/auth/logout')
         if (res.ok) {
            return window.location.reload()
         }   
      } catch (err) {
         console.error(err)
      }
   }

   return (
      <div className="root-layout">
         <header className="container-fluid">
            {/* <div className="logo">
               <FontAwesomeIcon icon="fa-solid fa-book" className="icon" />
               <span className="logo-text">Adventurer's Log</span>
            </div> */}
            
        {isAuth &&
            <nav className="container">
               <ul>
                  <li><NavLink to="/inventory">Inventory</NavLink></li>
                  <li><NavLink to="/spells">Spells</NavLink></li>
                  <li><a onClick={handleLogout}>Logout</a></li>
               </ul>
               
               
               {/* <button onClick={async (e)=>{
                     await fetch('/api/auth/logout')
                     return window.location.reload()
                  }
               } 
               // style={{width:'300px', height:'50px'}}
               >Logout</button> */}
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