import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faTimes, faPen, faTrash, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'

// pages & components
// import Home from './pages/Home'
import Inventory from './pages/Inventory'
import Spells from './pages/Spells'


function App() {
  library.add(faCheck, faTimes, faPen, faTrash, faToggleOn, faToggleOff)

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <NavLink to="/inventory">Inventory</NavLink>
            <NavLink to="/spells">Spells</NavLink>
          </nav>
        </header>
        <div className="pages">
          <Routes>
            {/* <Route 
              path="/"
              element={<Home />}
            /> */}
            <Route
              path="/inventory"
              element={<Inventory />}
            />
            <Route
              path="/spells"
              element={<Spells />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App
