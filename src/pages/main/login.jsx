import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <section className="space-y-5 w-screen h-screen p-5">
      <div className="space-x-7 flex flex-row justify-end">
        <NavLink
          to={`/home`}
          className="transition-all ease-in-out py-1 w-[100px] text-center border border-[#A084CA] hover:border-[#645CAA] hover:bg-[#645CAA] hover:text-white rounded bg-transparent"
        >
          Home
        </NavLink>
        <NavLink
          to={`/admin/dashboard`}
          className="transition-all ease-in-out py-1 w-[100px] text-center border border-[#A084CA] hover:border-[#645CAA] hover:bg-[#645CAA] hover:text-white rounded bg-transparent"
        >
          Login
        </NavLink>
      </div>
      <div className="font-bold text-2xl text-center uppercase flex justify-center items-center h-[500px]">
        <h1>penilaian tengah semester 2022</h1>
      </div>
    </section>
  );
};

export default Login;
