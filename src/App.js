import React from "react";
import "./style/style.css";
import Layout from "./komponen/layout";
import Button from "./komponen/button";
import Input from "./komponen/input";
import InputDate from "./komponen/inputDate";
import Card from "./komponen/card";
import InputKelamin from "./komponen/inputKelamin";

export default function App() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    password: "",
    confirmPassword: "",
  });
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState({});

  const handleChange = (e) => {
    e.preventDefault();

    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleReset = (e) => {
    e.preventDefault();
    setValues(() => {
      return {
        username: "",
        email: "",
        tempatLahir: "",
        tanggalLahir: "",
        jenisKelamin: "",
        password: "",
        confirmPassword: "",
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    values.id = new Date().getTime();

    if (values.password !== values.confirmPassword) {
      alert('password harus sama')
      return
    }

    if (values.username === "") {
      alert('isi username dengan benar')
      return 
    }
    if (values.email === "") {
      alert('isi email dengan benar')
      return 
    }
    if (values.tempatLahir === "") {
      alert('isi tempat lahir dengan benar')
      return 
    }
    if (values.tanggalLahir === "") {
      alert('isi tanggal lahir dengan benar')
      return 
    }
    if (values.password === "") {
      alert('isi password dengan benar')
      return 
    }
    if (values.confirmPassword === "") {
      alert('isi password dengan benar')
      return 
    }


    setValues(() => {
      return {
        username: "",
        email: "",
        tempatLahir: "",
        tanggalLahir: "",
        jenisKelamin: "",
        password: "",
        confirmPassword: "",
      };
    });

    // setData((data) => {
    //   return [...data, values];
    // });
    setData((data) => [...data, values]);
  };
  const handleBlur = (e) => {
    e.preventDefault();

    if (values.confirmPassword !== values.password) {
      return false
    }

    if (e.target.value === "") {
      setError((error) => {
        return {
          ...error,
          [e.target.name]: true,
        };
      });
    }
    if (e.target.value !== "") {
      setError((error) => {
        return {
          ...error,
          [e.target.name]: false,
        };
      });
    }
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <form onSubmit={handleSubmit}>
            <h1
              style={{
                textAlign: "center",
                margin: "10px 0px",
                fontFamily: "VALORANT",
              }}
            >
              LOGIN
            </h1>
            <Input
              name="username"
              value={values.username}
              label={"Nama"}
              placeholder="Nama"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={error?.username}
              textError={"wajib disii"}
            />
            <Input
              name="email"
              value={values.email}
              label={"Email"}
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={error?.email}
              textError={"wajib disii"}
            />
            <Input
              name="tempatLahir"
              value={values.tempatLahir}
              label={"Tempat lahir"}
              placeholder="Tempat lahir"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={error?.tempatLahir}
              textError={"wajib disii"}
            />
            <InputDate
              type="date"
              name="tanggalLahir"
              value={values.tanggalLahir}
              label={"Tanggal lahir"}
              placeholder="Tanggal lahir"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <InputKelamin
              name="jenisKelamin"
              value={values.jenisKelamin}
              label={"Jenis kelamin"}
              placeholder="Jenis kelamin"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              name="password"
              value={values.password}
              label={"Password"}
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={error?.password}
              textError={"wajib disii"}
            />
            <Input
              name="confirmPassword"
              value={values.confirmPassword}
              label={"Confirm Password"}
              placeholder="Confirm Password"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={error?.confirmPassword}
              textError={"wajib disii"}
            />
            <div style={{display: 'flex', justifyContent: "center"}}>
              <div style={{ margin: "auto" }}>
                <button
                  className="button"
                  title={"Reset"}
                  type="button"
                  onClick={handleReset}
                  style={{ backgroundColor: "red" }}
                >
                  Reset
                </button>
              </div>
              <div style={{ margin: "auto" }}>
                <Button title={"Simpan"} />
              </div>
            </div>
          </form>
        </div>
        <div className="garis"></div>
        <div>
          <Card
            data={data}
            value={values}
            setValue={setValues}
            setData={setData}
          />
          {/* <div>
            <p>Username: {values.username}</p>
            <p>Email: {values.email}</p>
            <p>Password: {values.password}</p>
            <p>Confirm Password: {values.confirmPassword}</p>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
}
