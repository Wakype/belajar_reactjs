import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { User, DetailUser, CreateUser } from "./page";
import { Input } from "./component";

function App() {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }} className="bg-red-500 text-white">
        Belajar API
      </h1>

      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/user/:id/detail" element={<DetailUser />} />
        <Route path="*" element={<Navigate to="/user" replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
