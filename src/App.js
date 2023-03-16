import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import {
  AdminDashboard,
  DataPetugas,
  DetailLaporan,
  DetailLelang,
  HomeMasyarakat,
  Laporan,
  ListBarang,
  Login,
  Pelelangan,
  Penawaran,
  Register,
  TambahBarang,
  TambahPetugas,
} from './pages';
import ProtectRoute from './routers/protectedRoute';
import { useSelector } from 'react-redux';
import UserProtectRoute from './routers/userProtectRoute';

function App() {
  const redux = useSelector((state) => state.auth);
  let role = redux?.role;

  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/beranda"
            element={
              <UserProtectRoute>
                <HomeMasyarakat />
              </UserProtectRoute>
            }
          />
          <Route
            path="/penawaran"
            element={
              <UserProtectRoute>
                <Penawaran />
              </UserProtectRoute>
            }
          />
          <Route
            path="/penawaran/barang-lelang/:id_lelang/:id/:namaBarang"
            element={
              <UserProtectRoute>
                <DetailLelang />
              </UserProtectRoute>
            }
          />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectRoute>
                <AdminDashboard />
              </ProtectRoute>
            }
          >
            <Route
              path="barang"
              element={
                <ProtectRoute>
                  <ListBarang />
                </ProtectRoute>
              }
            />
            <Route
              path="barang/tambah-barang"
              element={
                <ProtectRoute>
                  <TambahBarang />
                </ProtectRoute>
              }
            />
            <Route
              path="petugas"
              element={
                <ProtectRoute>
                  <DataPetugas />
                </ProtectRoute>
              }
            />
            <Route
              path="petugas/tambah-petugas"
              element={
                <ProtectRoute>
                  <TambahPetugas />
                </ProtectRoute>
              }
            />
            <Route
              path="laporan"
              element={
                <ProtectRoute>
                  <Laporan />
                </ProtectRoute>
              }
            />
            <Route
              path="laporan/detail-laporan/:id_petugas/:id_lelang/:id_barang/:nama_barang"
              element={
                <ProtectRoute>
                  <DetailLaporan />
                </ProtectRoute>
              }
            />
            <Route
              path="pelelangan"
              element={
                <ProtectRoute>
                  <Pelelangan />
                </ProtectRoute>
              }
            />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      </section>
    </React.Fragment>
  );
}

export default App;
