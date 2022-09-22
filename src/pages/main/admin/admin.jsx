import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'

const Admin = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    return navigate("/home", { replace: true });
  };


  return (
    <section className="flex h-screen">
      <div className="bg-[#BFACE0] w-[200px] flex flex-col justify-between py-5 rounded-tr-2xl rounded-br-2xl">
        <div className="flex flex-col items-center text-center space-y-5">
          <NavLink to={`/admin/dashboard`} style={({ isActive }) => (isActive ? { color: "red", backgroundColor: '#645CAA' } : undefined)} className="transition-all ease-in-out py-1 w-[100px] text-center border hover:border-[#645CAA] hover:bg-[#645CAA] border-[#A084CA] rounded bg-transparent hover:text-white">
            <span>Dashboard</span>
          </NavLink>
          <NavLink to={`/admin/buku`} style={({ isActive }) => (isActive ? { color: "red", backgroundColor: '#645CAA' } : undefined)} className="transition-all ease-in-out py-1 w-[100px] text-center border hover:border-[#645CAA] hover:bg-[#645CAA] border-[#A084CA] rounded bg-transparent hover:text-white">
            <span>Buku</span>
          </NavLink>
          <NavLink to={`/admin/about`} style={({ isActive }) => (isActive ? { color: "red", backgroundColor: '#645CAA' } : undefined)} className="transition-all ease-in-out py-1 w-[100px] text-center border hover:border-[#645CAA] hover:bg-[#645CAA] border-[#A084CA] rounded bg-transparent hover:text-white">
            <span>About</span>
          </NavLink>
        </div>
        <div className="flex flex-row justify-center items-end h-auto">
          <button
            onClick={handleLogout}
            className="border rounded border-[#A084CA] py-1 px-4 transition-all ease-in-out hover:border-[#645CAA] hover:bg-[#645CAA] hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default Admin;
