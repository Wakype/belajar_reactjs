import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";

const Computer = () => {
  return (
    <div>
      <div className="flex flex-row gap-10 mb-10">
        <NavLink to="/palabapa/computer/asus" style={({ isActive }) => (isActive ? { color: "red" } : undefined)}>Asus</NavLink>
        <NavLink to="/setting/computer/hp" style={({ isActive }) => (isActive ? { color: "red" } : undefined)}>HP</NavLink>
        <NavLink to="/setting/computer/lenovo" style={({ isActive }) => (isActive ? { color: "red" } : undefined)}>Lenovo</NavLink>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Computer