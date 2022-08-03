import React from "react";
import "./style/style.css";
import Layout from "./komponen/layout";
import Button from "./komponen/button";

function App() {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Belajar Props 2</h1>
      <Layout title={"Nomor 1"}>
        <h1>SMK Madinatul Qur'an</h1>
      </Layout>
      <Layout title={"Nomor 2"}>
        <h1>SMK IDN</h1>
      </Layout>
      <Layout title={"Nomor 3"}>
        <h1>SMA Negri 130 Jakarta</h1>
      </Layout>

      <Button
        onClick={() => {
          console.log("button Simpan di klik");
        }}
        color="blue"
        title={"Simpan"}
      />
      <Button
        onClick={() => {
          console.log("button Batal di klik");
        }}
        title={"Batal"}
      />
      <Button color="green" title={"update"} />
    </React.Fragment>
  );
}

export default App;
