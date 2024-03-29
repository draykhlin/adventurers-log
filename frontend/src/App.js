import { React, useState, useEffect } from 'react'
import { Route, Routes, Navigate} from 'react-router-dom'

import Home from './pages/Home'
import Signup from './pages/Signup'
import Inventory from './pages/Inventory'
import Spells from './pages/Spells'

import RootLayout from './layouts/RootLayout'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  // check if logged in
  useEffect(() => {
    const checkAuthStatus = async () => {
      const res = await fetch('https://adventurers-log-server-bw9t.onrender.com/api/auth/check', {
        credentials: 'include'
      })
      const data = await res.json()
      setIsAuth(data.isAuthenticated)
    }
    checkAuthStatus()
  }, [])
  
  return (
    <>
    <Routes>
      <Route path="/" element={<RootLayout isAuth={isAuth} setIsAuth={setIsAuth} />}>
        <Route path="/" element={isAuth === true ? <Navigate to="/inventory" /> : <Home setIsAuth={setIsAuth} />} />
        <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
        <Route path="/inventory" element={<Inventory />} />
        {/* <Route path="/inventory" element={isAuth ? <Inventory /> : <Navigate to="/" />} /> */}
        <Route path="/spells" element={<Spells />} />
        {/* <Route path="/spells" element={isAuth ? <Spells /> : <Navigate to="/" />} /> */}
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