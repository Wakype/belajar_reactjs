import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import {
  DetailProduct,
  ForgotPassword,
  Histori,
  Home,
  Keranjang,
  Login,
  ResetPassword,
  SignUp,
} from './page';
import ProtectRoute from './routers/protectedRoute';

function App() {
  return (
    <React.Fragment>
      <section className="">
        <section className="">
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
            <Route
              path="/home"
              element={
                <ProtectRoute>
                  <Home />
                </ProtectRoute>
              }
            />
            <Route
              path="/product/detail/:uuid"
              element={
                <ProtectRoute>
                  <DetailProduct />
                </ProtectRoute>
              }
            />
            <Route
              path="/histori-pembelian"
              element={
                <ProtectRoute>
                  <Histori />
                </ProtectRoute>
              }
            />
            <Route
              path="/keranjang"
              element={
                <ProtectRoute>
                  <Keranjang />
                </ProtectRoute>
              }
            />

            <Route path="*" element={<Navigate to="/login" replace={true} />} />
          </Routes>
        </section>
      </section>
    </React.Fragment>
  );
}

export default App;
