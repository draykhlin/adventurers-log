import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faTimes, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

// pages & components
import Inventory from './pages/Inventory'

function App() {
  library.add(faCheck, faTimes, faPen, faTrash)

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <div className="pages">
          <Routes>
            <Route
              path="*"
              element={<Inventory />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App
