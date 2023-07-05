// import { createBrowserRouter, createRoutesFromElements, Route, NavLink, RouterProvider } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Signup from './pages/Signup'
import Inventory from './pages/Inventory'
import Spells from './pages/Spells'

// layouts
import RootLayout from './layouts/RootLayout'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       {/* <Route path="/" element={<Home />} /> */}
//       <Route path="inventory" element={<Inventory />} />
//       <Route path="spells" element={<Spells />} />
//     </Route>
//   )
// )

function App() {
  return (
    // <RouterProvider router={router} />
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/spells" element={<Spells />} />
      </Route>
    </Routes>
  )
}
export default App
