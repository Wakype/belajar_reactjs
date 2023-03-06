import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import {
  AdminDashboard,
  DataPetugas,
  DetailLelang,
  HomeMasyarakat,
  ListBarang,
  Login,
  Penawaran,
  Register,
  TambahBarang,
} from './pages';
import ProtectRoute from './routers/protectedRoute';
import { useSelector } from 'react-redux';

function App() {
  const redux = useSelector((state) => state.auth);
  let role = redux?.role;

  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {role === undefined ? (
            <Route>
              <Route
                path="/beranda"
                element={
                  <ProtectRoute>
                    <HomeMasyarakat />
                  </ProtectRoute>
                }
              />
              <Route
                path="/penawaran"
                element={
                  <ProtectRoute>
                    <Penawaran />
                  </ProtectRoute>
                }
              />
              <Route
                path="/penawaran/barang-lelang/:id"
                element={
                  <ProtectRoute>
                    <DetailLelang />
                  </ProtectRoute>
                }
              />
            </Route>
          ) : (
            <Route
              path="*"
              element={<Navigate to="/login" replace={true} />}
            />
          )}

          {role !== '' ? (
            <Route>
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
                  path="laporan"
                  element={
                    <ProtectRoute>
                      <ListBarang />
                    </ProtectRoute>
                  }
                />
              </Route>
            </Route>
          ) : (
            <Route
              path="*"
              element={<Navigate to="/login" replace={true} />}
            />
          )}

          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      </section>
    </React.Fragment>
  );
}

export default App;
