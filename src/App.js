import React from "react";
import { Route, Routes, Link, NavLink, Navigate } from "react-router-dom";
import {
  Login,
  Register,
  Admin,
  User,
  Kelas,
  Dashboard,
  UserDetail
} from "./pages";


function App() {
  return (
    <React.Fragment>
      <section className="flex">
        <section className="">
          <Routes>
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
            <Route path="/admin" element={<Admin/>} >
              <Route path='dashboard' element={<Dashboard/>}/>
              <Route path='user' element={<User/>}/>
              <Route path='user/:nama/:kelas/' element={<UserDetail/>}/>
              <Route path='kelas' element={<Kelas/>}/>
            </Route>
            <Route path="*" element={<Navigate to="login" replace />} />
          </Routes>
        </section>
      </section>
    </React.Fragment>
  );
}

export default App;
