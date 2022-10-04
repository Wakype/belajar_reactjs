import React from "react";
import { Button, Input, InputStateEvent, Select } from "../component";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getAllUser, createUser } from "../API/user";

const CreateUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    username: "",
    name: "",
    jenis_kelamin: "",
    email: "",
    password: "",
    password_confimation: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [error, setError] = React.useState({});

  const handleChange = (e) => {
    e.preventDefault();

    setUser((user) => {
      return {
        ...user,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await createUser(user);
      setIsLoading(false);
      return navigate("/user");
    } catch (err) {
      setErrorMessage('Terjadi kesalahan')
      setError(err?.response?.data?.errors)
      console.log(err);
      setIsLoading(false);
    }
  };
  return (
    <section className="bg-purple-900">
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
            <div className="text-center my-3 text-red-500 italic">
              <p>{errorMessage}</p>
            </div>
            <InputStateEvent
              name={"username"}
              placeholder="Username"
              label={"Username"}
              value={user.username}
              onChange={handleChange}
            />
            <p className="text-red-500 italic text-[15px]">{error?.username?.[0]}</p>
            <InputStateEvent
              name={"name"}
              placeholder="Nama"
              label={"Nama"}
              value={user.name}
              onChange={handleChange}
            />
            <p className="text-red-500 italic text-[15px]">{error?.name?.[0]}</p>
            <InputStateEvent
              name={"email"}
              placeholder="Email"
              label={"Email"}
              value={user.email}
              onChange={handleChange}
            />
            <p className="text-red-500 italic text-[15px]">{error?.email?.[0]}</p>
            <Select
              name={"jenis_kelamin"}
              placeholder="Jenis Kelamin"
              label={"Jenis Kelamin"}
              value={user.jenis_kelamin}
              onChange={handleChange}
            >
              <option value="Pilih Kelamin">Pilih Kelamin</option>
              <option value="laki-laki">laki-laki</option>
              <option value="perempuan">perempuan</option>
            </Select>
            <p className="text-red-500 italic text-[15px]">{error?.jenis_kelamin?.[0]}</p>
            <InputStateEvent
              name={"password"}
              placeholder="Password"
              label={"Password"}
              value={user.password}
              onChange={handleChange}
            />
            <p className="text-red-500 italic text-[15px]">{error?.password?.[0]}</p>
            <InputStateEvent
              name={"password_confimation"}
              placeholder="Confirm Password"
              label={"Confirm Password"}
              value={user.password_confimation}
              onChange={handleChange}
            />
            <div className="flex flex-row justify-between">
              <button
                className="button border border-green-500 rounded px-3 py-1 my-1 hover:bg-green-500 transition-all ease-in-out hover:text-white"
                onClick={() => {
                  return navigate(-1);
                }}
              >
                Back
              </button>
              <Button title={isLoading ? "Sedang Menyimpan" : "Simpan"} />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateUser;
