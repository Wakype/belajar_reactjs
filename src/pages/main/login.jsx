import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <section className="space-y-5">
      <div>Login Page</div>
      <div>
        <NavLink to={`/admin/dashboard`} className="py-2 px-5 border border-green-500 rounded bg-transparent">Login</NavLink>
        <NavLink to={`/register`} className="py-2 px-5 border border-green-500 rounded bg-transparent">Register</NavLink>
      </div>
    </section>
  )
}

export default Login
