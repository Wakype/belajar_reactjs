import React from 'react'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <section>
      <div>
        <div>admin sini</div>
      </div>
      <div>
        <Outlet/>
      </div>
    </section>
  )
}

export default Admin