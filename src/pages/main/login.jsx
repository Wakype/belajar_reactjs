import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <section className="space-y-5 w-screen">
      <div className="font-bold text-2xl text-center uppercase">Login Page</div>
      <div className="space-x-10 flex flex-row justify-center" >
        <NavLink to={`/admin/dashboard`} className="py-2 px-7 border border-green-500 rounded bg-transparent">Login</NavLink>
        <NavLink to={`/register`} className="py-2 px-5 border border-green-500 rounded bg-transparent">Register</NavLink>
      </div>
    </section>
  )
}

export default Login
