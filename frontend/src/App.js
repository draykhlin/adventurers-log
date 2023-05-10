import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faTimes, faPen, faTrash, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'

// pages & components
import Inventory from './pages/Inventory'
import Spells from './pages/Spells'


function App() {
  library.add(faCheck, faTimes, faPen, faTrash, faToggleOn, faToggleOff)

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <div className="pages">
          <Routes>
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
