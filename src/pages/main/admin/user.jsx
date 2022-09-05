import React from 'react'
import { Link } from 'react-router-dom';

const User = () => {
  const [user, setUser] = React.useState([
    {
      name: "akbar",
      kelas: "XI RPL",
    },
    {
      name: "bayu",
      kelas: "XI RPL",
    },
    {
      name: "hilmi",
      kelas: "XI RPL",
    },
    {
      name: "nabil",
      kelas: "XI RPL",
    },
    {
      name: "rauza",
      kelas: "XI TKJ",
    },
  ]);

  return (
    <section>
      <div className="w-[1166px] text-center font-bold uppercase text-2xl">User Page</div>
      <div>
        {user?.map((item) => {
          return(
            <section>
              <Link to={`${item.name}/${item.kelas}`}>{item.name}</Link>
            </section>
          )
        })}
      </div>
    </section>
  )
}

export default User
