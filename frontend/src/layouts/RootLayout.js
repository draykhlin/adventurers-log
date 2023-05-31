import { NavLink, Outlet } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function RootLayout() {
   return (
      <div className="root-layout">
         <header className="container-fluid">
            {/* <div className="logo">
               <FontAwesomeIcon icon="fa-solid fa-book" className="icon" />
               <span className="logo-text">Adventurer's Log</span>
            </div> */}
            <nav className="container">
               <NavLink to="/inventory">Inventory</NavLink>
               <NavLink to="/spells">Spells</NavLink>
            </nav>
         </header>

         <main>
            <Outlet />
         </main>
      </div>
  )
}