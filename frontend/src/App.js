// import { createBrowserRouter, createRoutesFromElements, Route, NavLink, RouterProvider } from 'react-router-dom'
import { React, useState, useEffect } from 'react'
import { Route, Routes, Navigate} from 'react-router-dom'

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
  
  return (
    <>
    <p>isAuth is {isAuth.toString()}</p>
    <Routes>
      <Route path="/" element={<RootLayout isAuth={isAuth} />}>
        <Route path="/" element={isAuth === true ? <Navigate to="/inventory" /> : <Home setIsAuth={setIsAuth} />} />
        {/* <Route path='/' element={<Home setisAuth={setIsAuth} /> }/> */}

        {/* <Route path='/' element={ <Redirect to="/inventory" /> }/> */}
        
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/inventory" element={isAuth ? <Inventory /> : <Navigate to="/" />} /> */}
        <Route path="/inventory" element={<Inventory />} />
        {/* <Route path="/spells" element={isAuth ? <Spells /> : <Navigate to="/" />} /> */}
        <Route path="/spells" element={<Spells />} />

      </Route>
    </Routes>
    
    <div className="legal-footer">
      <p>This app uses the D&D 5e API. The data served by the API is licensed under the OGL.</p>
      <p>Adventurer's Log is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.</p>
    </div>
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