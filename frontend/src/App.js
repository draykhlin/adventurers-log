import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Inventory from './pages/Inventory'

function App() {
  const [items, setItems] = useState([])
 
  useEffect(() => {
    const fetchInventory = async () => {
      const res = await fetch('/api/inventory')
      const json = await res.json()

      if (res.ok) {
        setItems(json)
      }
    }

    fetchInventory()
  }, [])

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
