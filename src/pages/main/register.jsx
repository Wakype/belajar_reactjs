import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  return (
    <section>
      <div>
        <h1>Register Page</h1>
      </div>
      <div>
        <button
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
