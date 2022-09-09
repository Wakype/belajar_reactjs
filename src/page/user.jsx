import React from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(1);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      console.log("Response =>", response.data);

      setUsers(response.data.data);
      setPage(response.data.page);
    } catch (err) {}
  };

  React.useEffect(() => {
    getUserHandle();
  },
  [page]);

  console.log("Users =>", users);
  console.log("Page =>", page);
  return (
    <section>
      <h1>Table User</h1>
      <button
        onClick={getUserHandle}
        className="px-4 py-2 border border-green-600 rounded my-5 hover:bg-green-600 hover:text-white"
      >
        List User
      </button>

      <table className="table-auto w-[1000px]">
        <thead>
          <tr className="border">
            <th className="py-3">No</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index} className="border text-center ">
                <td className="py-2">{index + 1}</td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>
                  <img
                    className="rounded-full h-5 w-5 m-auto"
                    src={item.avatar}
                    alt="avatar"
                  />
                </td>
                <td>Detail</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p>Saat ini page {page}</p>
      <div className="">
        <button className="px-2 py-1 mr-5 border border-green-600 rounded my-5 hover:bg-green-600 hover:text-white" onClick={() => {
          setPage(page - 1);
        }}>
          Previous
        </button>
        <button className="px-6 py-1 border border-green-600 rounded my-5 hover:bg-green-600 hover:text-white" onClick={() => {
          setPage(page + 1);
        }}>
          Next
        </button>
      </div>
    </section>
  );
};

export default User;
