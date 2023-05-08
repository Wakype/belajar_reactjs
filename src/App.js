import './App.css';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </section>
    </React.Fragment>
  );
}

export default App;
