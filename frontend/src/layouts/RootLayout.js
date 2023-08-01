import { React, useState, useEffect, } from 'react'
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import toggleMenu from '../toggleMenu.js'

const RootLayout = ({ isAuth, setIsAuth }) => {
   // const [isAuth, setisAuth] = useState(false)

   // useEffect(() => {
   //    const checkAuthStatus = async () => {
   //       const response = await fetch('/api/auth/check');
   //       const data = await response.json();
   //       setisAuth(data.isAuth);
   //    };

   //    checkAuthStatus();
   // }, [])
   // useEffect(() => {
   //    const toggleMenu = document.getElementsByClassName('toggle-menu')[0]
   //     const navbarLinks = document.getElementsByClassName('navbar-links')[0]

   //     console.log(toggleMenu)
   //     document.getElementsByClassName('toggle-menu')[0].addEventListener('click', () => {
   //       // navbarLinks.classList.toggle('active')
   //       console.log('clicked')
   //    })
   // })
   
   const handleMenuToggle = () => {
      const navbarLinks = document.getElementsByClassName('navbar-links')[0]
      navbarLinks.classList.toggle('active')
   }
   // const handleLogout = async () => {
   //    try {
   //       const res = await fetch('/api/auth/logout')
   //       if (res.ok) {
   //          return window.location.reload()
   //       }
   //    } catch (err) {
   //       console.error(`logout error: ${err}`)
   //    }
   // }

   const navigate = useNavigate()
   const handleLogout = async () => {
      try {
         const res = await fetch('https://adventurers-log-server-bw9t.onrender.com/api/auth/logout', {
            credentials: 'include',
            // withCredentials: true
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
            {/* <div className="logo">
               <FontAwesomeIcon icon="fa-solid fa-book" className="icon" />
               <span className="logo-text">Adventurer's Log</span>
            </div> */}
            
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