import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  return (
    <section className="w-screen">
      <div>
        <h1 className="text-2xl text-center font-bold uppercase">Register Page</h1>
      </div>
      <div className="flex flex-row justify-center">
        <button className="border rounded border-green-600 py-2 px-5 mt-5"
          onClick={() => {
            return navigate(-1);
          }}
        >
          Kembali ke Login
        </button>
      </div>
    </section>
  );
};

export default Register;
