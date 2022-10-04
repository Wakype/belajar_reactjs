import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { User, DetailUser, CreateUser, UpdateUser } from "./page";
import { Input, Select } from "./component";
import ProtectRoute from "./routers/protectRoute";
import Login from "./page/auth/login";

function App() {
  return (
    <React.Fragment>
      <h1
        style={{ textAlign: "center" }}
        className="bg-red-500 text-white font8bit"
      >
        Belajar API 2
      </h1>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/user"
          element={
            <ProtectRoute>
              <User />
            </ProtectRoute>
          }
        />
        <Route
          path="/user/create"
          element={
            <ProtectRoute>
              <CreateUser />
            </ProtectRoute>
          }
        />
        <Route
          path="/user/update/:id"
          element={
            <ProtectRoute>
              <UpdateUser />
            </ProtectRoute>
          }
        />
        <Route
          path="/user/:id/detail"
          element={
            <ProtectRoute>
              <DetailUser />
            </ProtectRoute>
          }
        />
        <Route path="*" element={<Navigate to="/user" replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
