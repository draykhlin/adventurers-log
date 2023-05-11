import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
   return (
      <div className="root-layout">
         <header>
            <nav>
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