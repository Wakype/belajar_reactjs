import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const User = () => {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(100);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(
        `https://belajar-react.smkmadinatulquran.sch.id/api/users/${page}`
      );
      console.log("Response =>", response.data);

      setUsers(response.data.data);
      setPage(response.data.page);
    } catch (err) {}
  };

  React.useEffect(() => {
    getUserHandle();
  }, [page]);

  console.log("Users =>", users);
  console.log("Page =>", page);
  return (
    <section>
      <h1>Table User</h1>
      {/* <button
        onClick={getUserHandle}
        className="px-4 py-2 border border-green-600 rounded my-5 hover:bg-green-600 hover:text-white"
      >
        List User
      </button> */}
      <div className="flex flex-row">
        <table className="table-auto w-[1000px]">
          <thead>
            <tr className="border">
              <th className="py-3">No</th>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
              <th>Nama</th>
              <th>Jenis Kelain</th>
              <th>Dibuat</th>
              <th>Diupdate</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <tr key={index} className="border text-center ">
                  <td className="py-2">{index + 1}</td>
                  <td className="py-2">{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>{item.name}</td>
                  <td>{item.jenis_kelamin}</td>
                  <td>{item.stored_at}</td>
                  <td>{item.updated_at}</td>
                  <td>Detail</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <NavLink to={'/user/create'} className="px-6 text-center text-l h-[50px] border border-green-600 rounded my-5 hover:bg-green-600 hover:text-white">Buat User</NavLink>
      </div>

      <p>Saat ini page ke - {page}</p>
      <div className="">
        <button
          className="px-2 py-1 mr-5 border border-green-600 rounded my-5 hover:bg-green-600 hover:text-white"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previous
        </button>
        <button
          className="px-6 py-1 border border-green-600 rounded my-5 hover:bg-green-600 hover:text-white"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default User;
