import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Inventory from './pages/Inventory'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Inventory />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App
