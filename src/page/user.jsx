import React from "react";
import axios from "axios";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { Button } from "../component";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";

const User = () => {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(100);
  const [isFetchUser, setIsFetchUser] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  let navigate = useNavigate();

  const getUserHandle = async () => {
    try {
      setIsFetchUser(true);
      const response = await axios.get(
        `https://belajar-react.smkmadinatulquran.sch.id/api/users/${page}`
      );
      console.log("Response =>", response.data);

      setUsers(response.data.data);
      // setPage(response.data.page);
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetchUser(false);
    }
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Yakin ingin menghapus user ini?",
      text: "Data ini tidak bisa kembali lagi!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus user!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `https://belajar-react.smkmadinatulquran.sch.id/api/users/hapus/${id}`
          );
          getUserHandle();

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "User berhasil di Delete!",
          });
        } catch (err) {
          setErrorMessage('Terjadi kesalahan')
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "error",
            title: "User berhasil di Delete!",
          });
        }
      }
    });

    console.log("hooh", id);
  };
  React.useEffect(() => {
    getUserHandle();
  }, [page]);

  console.log("Users =>", users);
  console.log("Page =>", page);
  return (
    <section>
      <div className="px-[50px] flex flex-row justify-between items-center">
        <h1 className="font-medium px-6 text-center py-2 border bg-green-500 rounded text-white shadow-lg shadow-green-400">
          TABLE USER
        </h1>
        <p className="text-white italic font-medium text-center py-2 border bg-red-500 rounded shadow-lg shadow-red-400">{errorMessage}</p>
        <NavLink
          to={"/user/create"}
          className="px-6 text-center py-2 border border-green-500 rounded my-5 hover:bg-green-500 hover:text-white transition-all ease-in-out hover:shadow-lg hover:shadow-green-400"
        >
          Buat User
        </NavLink>
      </div>

      <div className="flex flex-row ">
        <table className="table-auto w-screen px-2">
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
            {isFetchUser ? (
              <tr>
                <td colSpan={9} rowSpan={10}>
                  <Skeleton count={5} baseColor={"red"} />
                </td>
              </tr>
            ) : (
              users.map((item, index) => {
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
                    <td>
                      <div className="flex flex-col">
                        <button
                          className="button border border-green-500 rounded px-3 py-1 my-1 hover:bg-green-500 transition-all ease-in-out hover:text-white hover:shadow-lg hover:shadow-green-400"
                          onClick={() => {
                            return navigate(`/user/update/${item.id}`);
                          }}
                        >
                          update
                        </button>
                        <button
                          className="button border border-red-500 rounded px-3 py-1 my-1 hover:bg-red-500 transition-all ease-in-out hover:text-white hover:shadow-lg hover:shadow-red-400"
                          onClick={() => {
                            deleteUser(item.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
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
