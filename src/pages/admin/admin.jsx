import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <section className="h-screen w-screen px-10 py-5">
      <h1>Selamat datang {''}</h1>
      <div className="w-full h-full grid grid-cols-12">
        <div className="col-span-2">
          <div className="flex flex-col">
            <NavLink to={'dashbaord'}>Dashboard</NavLink>
            <NavLink to={'chat'}>Chat</NavLink>
          </div>
        </div>
        <div className="h-full col-span-10">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Admin;
