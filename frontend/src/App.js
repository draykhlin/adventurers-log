// import { createBrowserRouter, createRoutesFromElements, Route, NavLink, RouterProvider } from 'react-router-dom'
import { React, useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Signup from './pages/Signup'
import Inventory from './pages/Inventory'
import Spells from './pages/Spells'

// layouts
import RootLayout from './layouts/RootLayout'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const checkAuthStatus = async () => {
      const res = await fetch('/api/auth/check')
      const data = await res.json()
      setIsAuth(data.isAuthenticated)
    }
    checkAuthStatus()
  }, [])

  // const ProtectedRoute = ({ isAuthenticated }) => {
  //   if (!isAuthenticated) {
  //     return <Navigate to="/"
  //   }
  // }
  
  return (
    <>
    <button onClick={async (e)=>{
      await fetch('/api/auth/logout')
      return window.location.reload()
    }
    } style={{width:'300px', height:'50px'}}>Logout</button>
    <p>isAuth is {isAuth.toString()}</p>
    <Routes>
      <Route path="/" element={<RootLayout isAuth={isAuth} />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/inventory" element={isAuth ? <Inventory /> : <Navigate to="/" />} />
        <Route path="/spells" element={isAuth ? <Spells /> : <Navigate to="/" />} />
      </Route>
    </Routes>
    </>
  )
}
export default App



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       {/* <Route path="/" element={<Home />} /> */}
//       <Route path="inventory" element={<Inventory />} />
//       <Route path="spells" element={<Spells />} />
//     </Route>
//   )
// )