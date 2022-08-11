import React from "react";
import "./style/style.css";
import Layout from "./komponen/layout";
import Button from "./komponen/button";
import Input from "./komponen/input";
import Card from "./komponen/card";

export default function App() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState({});

  const handleChange = (e) => {
    console.log("apa aja");
    e.preventDefault();

    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form tersubmit");

    values.id = new Date().getTime();

    // setValues(() => {
    //   return {
    //     username: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //   };
    // });

    setData((data) => {
      return [...data, values];
    });
    // setData((data) => [...data, values]);
  };
  const handleBlur = (e) => {
    console.log("blur coyy");
    e.preventDefault();

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

  console.log("errors", error);
  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <form onSubmit={handleSubmit}>
            {/* <Input
              name="username"
              value={values.username}
              label={"Username"}
              placeholder="Username"
              onChange={(event) => {
                event.preventDefault();
                console.log(event);
                setValues(() => {
                  return {
                    ...values,
                    username: event.target.value,
                  };
                });
              }}
            /> */}
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
              label={"Username"}
              placeholder="Username"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              name="email"
              value={values.email}
              label={"Email"}
              placeholder="Email"
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
            <div style={{ margin: "auto", width: "200px" }}>
              <Button title={"simpan"} />
            </div>
          </form>
        </div>
        <div className="garis"></div>
        <div>
          <Card data={data} value={values} setData={setData} />
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

// function App() {
//   let [count, setCount] = React.useState(0);
//   const handleTambah = () => {
//     setCount(count + 1);
//   };
//   const handleKurang = () => {
//     setCount(count - 1);
//   };
//   return (
//     <React.Fragment>
//       <h1 style={{ textAlign: "center" }}>Belajar State</h1>
//       <div className="container">
//         <div>
//           <h1> Count = {count}</h1>
//           <Button onClick={handleTambah} title="Tambah" color="blue" />
//           <Button
//             disabled={count <= 0 ? true : false}
//             onClick={handleKurang}
//             title="Kurang"
//             color="green"
//           />
//           <Button
//           disabled={count === 0 ? true : false}
//             onClick={() => {
//               setCount(0);
//             }}
//             title="Reset"
//             color="red"
//           />
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

// export default App;
