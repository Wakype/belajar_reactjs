import React from "react";
import { Route, Routes, Link, NavLink, Navigate } from "react-router-dom";
import {
  Login,
  Register,
  Admin,
  Buku,
  About,
  Dashboard,
  UserDetail,
  TambahBuku,
  UpdateBuku,
  DetailBuku,
  NotFound,
} from "./pages";


function App() {
  return (
    <React.Fragment>
      <section className="flex">
        <section className="">
          <Routes>
            <Route path="home" element={<Login/>} />
            <Route path="/admin" element={<Admin/>} >
              <Route path='dashboard' element={<Dashboard/>}/>
              <Route path='buku' element={<Buku/>}/>
              <Route path='buku/tambah' element={<TambahBuku/>}/>
              <Route path='buku/:id/update' element={<UpdateBuku/>}/>
              <Route path='buku/:id/view' element={<DetailBuku/>}/>
              <Route path='about' element={<About/>}/>
            </Route>
            <Route path='notFound' element={<NotFound/>}/>
            <Route path="*" element={<Navigate to="notFound" replace={true} />} />
          </Routes>
        </section>
      </section>
    </React.Fragment>
  );
}

export default App;
