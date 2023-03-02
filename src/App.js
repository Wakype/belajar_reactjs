import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import {
  AdminDashboard,
  DetailLelang,
  HomeMasyarakat,
  ListBarang,
  Login,
  Penawaran,
  Register,
  TambahBarang,
} from './pages';

function App() {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/beranda" element={<HomeMasyarakat />} />
          <Route path="/penawaran" element={<Penawaran />} />
          <Route
            path="/penawaran/barang-lelang/:id"
            element={<DetailLelang />}
          />

          <Route path="/admin/dashboard" element={<AdminDashboard />}>
            <Route path="barang" element={<ListBarang />} />
            <Route path="barang/tambah-barang" element={<TambahBarang />} />
            <Route path="petugas" element={<ListBarang />} />
            <Route path="laporan" element={<ListBarang />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      </section>
    </React.Fragment>
  );
}

export default App;
