import { createBrowserRouter, createRoutesFromElements, Route, NavLink, RouterProvider } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faTimes, faPen, faTrash, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'

// pages & components
// import Home from './pages/Home'
import Inventory from './pages/Inventory'
import Spells from './pages/Spells'

// layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="inventory" element={<Inventory />} />
      <Route path="spells" element={<Spells />} />
    </Route>
  )
)

function App() {
  library.add(faCheck, faTimes, faPen, faTrash, faToggleOn, faToggleOff)

  return (
    <RouterProvider router={router} />
  )
}
export default App
