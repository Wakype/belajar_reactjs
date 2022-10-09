import React from "react";
import { Button, Input, InputStateEvent, Select } from "../component";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { updateUser, detailUser } from "../API/user_API/user";

const UpdateUser = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [user, setUser] = React.useState({
    username: "",
    name: "",
    jenis_kelamin: "",
    email: "",
    password: "",
    password_confimation: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => {
    e.preventDefault();

    setUser((user) => {
      return {
        ...user,
        [e.target.name]: e.target.value,
      };
    });
  };

  const getDetailUser = async (id) => {
    try {
      const response = await detailUser(id);

      console.log(response.data.data);
      const dataUser = response.data.data;

      setUser(() => {
        return {
          username: dataUser.username,
          name: dataUser.name,
          jenis_kelamin: dataUser.jenis_kelamin,
          email: dataUser.email,
        };
      });
    } catch (err) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await updateUser(id, user);
      setIsLoading(false);
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
        icon: "info",
        title: "User berhasil di Update!",
      });
      return navigate("/user");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      //   alert('salah! kelamin harus "laki-laki".');
    }
  };

  React.useEffect(() => {
    getDetailUser(id);
  }, []);
  return (
    <section className="bg-purple-900 h-[633px]">
      <div>
        <form
          action=""
          className="flex flex-col justify-center items-center "
          onSubmit={handleSubmit}
        >
          <div className="border border-green-500 px-[30px] rounded my-5 bg-white shadow-xl shadow-black">
            <div className="text-center text-xl font-semibold my-3">
              <h1>Buat User</h1>
            </div>
            <InputStateEvent
              name={"username"}
              placeholder="Username"
              label={"Username"}
              value={user.username}
              onChange={handleChange}
            />
            <InputStateEvent
              name={"name"}
              placeholder="Nama"
              label={"Nama"}
              value={user.name}
              onChange={handleChange}
            />
            <InputStateEvent
              name={"email"}
              placeholder="Email"
              label={"Email"}
              value={user.email}
              onChange={handleChange}
            />
            <Select
              id=""
              name={"jenis_kelamin"}
              placeholder="Jenis Kelamin"
              label={"Jenis Kelamin"}
              value={user.jenis_kelamin}
              onChange={handleChange}
            >
              <option value="laki-laki">laki-laki</option>
              <option value="perempuan">perempuan</option>
            </Select>

            <div className="flex flex-row justify-between mb-2">
              <button
                type="button"
                className="button border border-green-500 rounded px-3 py-1 my-1 hover:bg-green-500 transition-all ease-in-out hover:text-white"
                onClick={() => {
                  return navigate(-1);
                }}
              >
                Back
              </button>
              <Button
                type="submit"
                title={isLoading ? "Sedang Mengupdate" : "Update"}
                className=""
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateUser;
