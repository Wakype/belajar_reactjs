import React from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

const UserDetail = () => {
    let {nama, kelas} = useParams()
    let location = useLocation()
    let navigate = useNavigate()

    const handleBackUserPage = () => {
        return navigate("/admin/user", { replace: true });
      };

  return (
    <section>
      <div>
        <h1>User Detail</h1>
      </div>
      <div>
        <p>Nama: {nama}</p>
        <p>Kelas: {kelas}</p>
      </div>
      <div>
      <button
            onClick={handleBackUserPage}
            className="border rounded border-green-600 py-1 px-4"
          >Kembali ke Page User</button>
      </div>
    </section>
  )
}

export default UserDetail
