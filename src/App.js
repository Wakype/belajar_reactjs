import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import { User, DetailUser, Alquran } from './page'


function App() {
  return(
    <React.Fragment>

      <Routes>
        <Route path="/alquran" element={<Alquran/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/user/:id/detail" element={<DetailUser/>}/>
        <Route path="*" element={<Navigate to="/alquran" replace={true}/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App