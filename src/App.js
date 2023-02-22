import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { Login, Register } from './pages';

function App() {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      </section>
    </React.Fragment>
  );
}

export default App;
