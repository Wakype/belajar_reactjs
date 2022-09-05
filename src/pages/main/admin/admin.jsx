import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

const Admin = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    return navigate("login", { replace: true });
  };

  return (
    <section className="flex h-screen">
      <div className="bg-green-600 w-[200px] ">
        <div className="flex flex-col text-center space-y-5">
          <NavLink to={`/admin/dashboard`} style={({ isActive }) => (isActive ? { color: "red" } : undefined)}>
            <span>Dashboard</span>
          </NavLink>
          <NavLink to={`/admin/user`} style={({ isActive }) => (isActive ? { color: "red" } : undefined)}>
            <span>User</span>
          </NavLink>
          <NavLink to={`/admin/kelas`} style={({ isActive }) => (isActive ? { color: "red" } : undefined)}>
            <span>Kelas</span>
          </NavLink>
        </div>
        <div className="flex flex-row justify-center items-end h-[500px]">
          <button
            onClick={handleLogout}
            className="border rounded border-white py-1 px-4"
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
